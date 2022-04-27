import{S as PM,i as AM,s as OM,e as n,k as c,w as b,t as r,M as LM,c as s,d as t,m as p,a,x as y,h as i,b as u,F as e,g as k,y as E,q as w,o as $,B as F,v as NM,L as de}from"../../chunks/vendor-6b77c823.js";import{T as Ee}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as ce}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as le}from"../../chunks/ExampleCodeBlock-5212b321.js";function IM(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraModel, ElectraConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function SM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function DM(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function WM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function UM(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
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
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function RM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function HM(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function QM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function VM(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function BM(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function KM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function JM(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function GM(x){let d,g;return d=new ce({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function XM(x){let d,g,h,m,_;return m=new ce({props:{code:`import torch
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YM(x){let d,g;return d=new ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function ZM(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function ez(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function oz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function nz(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function sz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function az(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function rz(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function iz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function lz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function dz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function pz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function hz(x){let d,g,h,m,_;return m=new ce({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function mz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function fz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function uz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gz(x){let d,g;return d=new ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function _z(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function kz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function vz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
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
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Tz(x){let d,g;return d=new ce({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function bz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function yz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Ez(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function wz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function $z(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Fz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function xz(x){let d,g;return d=new ce({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Mz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=n("li"),fe=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),S=n("code"),oe=r("tf.keras.Model.fit"),ue=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ie=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(Y),M=s(Y,"LI",{});var ze=a(M);fe=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),S=s(N,"CODE",{});var xe=a(S);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=s(N,"CODE",{});var be=a(D);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var V=a(P);ae=i(V,"a single Tensor with "),R=s(V,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(V," only and nothing else: "),W=s(V,"CODE",{});var we=a(W);_e=i(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),me=p(A),q=s(A,"LI",{});var B=a(q);ke=i(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(B,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(B," or "),H=s(B,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),B.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(Z,"CODE",{});var ye=a(Q);Te=i(ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ye.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,f),e(m,M),e(M,fe),k(T,J,z),k(T,C,z),e(C,ee),e(C,S),e(S,oe),e(C,ue),e(C,D),e(D,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ie),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,Q),e(Q,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function zz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Cz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function jz(x){let d,g;return d=new ce({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:de,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function qz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Pz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Az(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Oz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Lz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Nz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Iz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Sz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Dz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Wz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Uz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Rz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Hz(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Qz(x){let d,g,h,m,_;return m=new ce({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,h,f),E(m,l,f),_=!0},p:de,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Vz(x){let d,g,h,m,_,l,f,M,fe,J,C,ee,S,oe,ue,D,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ie,H,ve,G,L,se,Q,Te,T,z,Y,Fe,ze,N,xe,be,Ce,A,V,je,we,B,qe,Me,Z,ye,fc,ya,dg,uc,cg,Qm,Tt,Ea,pg,Ht,hg,Kl,mg,fg,Jl,ug,gg,wa,_g,kg,vg,go,Tg,Gl,bg,yg,Xl,Eg,wg,$g,kn,Vm,_o,vn,gc,$a,Fg,_c,xg,Bm,bt,Fa,Mg,kc,zg,Cg,Tn,Yl,jg,qg,Zl,Pg,Ag,Og,xa,Lg,ed,Ng,Ig,Km,ko,bn,vc,Ma,Sg,Tc,Dg,Jm,yt,za,Wg,Ca,Ug,bc,Rg,Hg,Qg,yn,td,Vg,Bg,od,Kg,Jg,Gg,ja,Xg,nd,Yg,Zg,Gm,vo,En,yc,qa,e_,Ec,t_,Xm,To,Pa,o_,Aa,n_,sd,s_,a_,Ym,bo,Oa,r_,La,i_,ad,l_,d_,Zm,yo,wn,wc,Na,c_,$c,p_,ef,Ze,Ia,h_,Fc,m_,f_,Sa,u_,rd,g_,__,k_,Da,v_,Wa,T_,b_,y_,Et,Ua,E_,Eo,w_,id,$_,F_,xc,x_,M_,z_,$n,C_,Fn,tf,wo,xn,Mc,Ra,j_,zc,q_,of,He,Ha,P_,Cc,A_,O_,jc,L_,N_,Qa,I_,ld,S_,D_,W_,Va,U_,Ba,R_,H_,Q_,wt,Ka,V_,$o,B_,dd,K_,J_,qc,G_,X_,Y_,Mn,Z_,zn,nf,Fo,Cn,Pc,Ja,ek,Ac,tk,sf,et,Ga,ok,Xa,nk,Oc,sk,ak,rk,Ya,ik,cd,lk,dk,ck,Za,pk,er,hk,mk,fk,$t,tr,uk,xo,gk,pd,_k,kk,Lc,vk,Tk,bk,jn,yk,qn,af,Mo,Pn,Nc,or,Ek,Ic,wk,rf,Qe,nr,$k,Sc,Fk,xk,Dc,Mk,zk,sr,Ck,hd,jk,qk,Pk,ar,Ak,rr,Ok,Lk,Nk,st,ir,Ik,zo,Sk,md,Dk,Wk,Wc,Uk,Rk,Hk,An,Qk,On,Vk,Ln,lf,Co,Nn,Uc,lr,Bk,Rc,Kk,df,tt,dr,Jk,Hc,Gk,Xk,cr,Yk,fd,Zk,ev,tv,pr,ov,hr,nv,sv,av,Re,mr,rv,jo,iv,ud,lv,dv,Qc,cv,pv,hv,In,mv,Sn,fv,Dn,uv,Wn,gv,Un,cf,qo,Rn,Vc,fr,_v,Bc,kv,pf,ot,ur,vv,Kc,Tv,bv,gr,yv,gd,Ev,wv,$v,_r,Fv,kr,xv,Mv,zv,Ft,vr,Cv,Po,jv,_d,qv,Pv,Jc,Av,Ov,Lv,Hn,Nv,Qn,hf,Ao,Vn,Gc,Tr,Iv,Xc,Sv,mf,Ve,br,Dv,Yc,Wv,Uv,Zc,Rv,Hv,yr,Qv,kd,Vv,Bv,Kv,Er,Jv,wr,Gv,Xv,Yv,at,$r,Zv,Oo,eT,vd,tT,oT,ep,nT,sT,aT,Bn,rT,Kn,iT,Jn,ff,Lo,Gn,tp,Fr,lT,op,dT,uf,nt,xr,cT,No,pT,np,hT,mT,sp,fT,uT,gT,Mr,_T,Td,kT,vT,TT,zr,bT,Cr,yT,ET,wT,rt,jr,$T,Io,FT,bd,xT,MT,ap,zT,CT,jT,Xn,qT,Yn,PT,Zn,gf,So,es,rp,qr,AT,ip,OT,_f,Be,Pr,LT,lp,NT,IT,Ar,ST,yd,DT,WT,UT,Or,RT,Lr,HT,QT,VT,ts,BT,xt,Nr,KT,Do,JT,Ed,GT,XT,dp,YT,ZT,eb,os,tb,ns,kf,Wo,ss,cp,Ir,ob,pp,nb,vf,Oe,Sr,sb,hp,ab,rb,mp,ib,lb,Dr,db,wd,cb,pb,hb,Wr,mb,Ur,fb,ub,gb,as,_b,Mt,Rr,kb,Uo,vb,$d,Tb,bb,fp,yb,Eb,wb,rs,$b,is,Tf,Ro,ls,up,Hr,Fb,gp,xb,bf,Le,Qr,Mb,_p,zb,Cb,kp,jb,qb,Vr,Pb,Fd,Ab,Ob,Lb,Br,Nb,Kr,Ib,Sb,Db,ds,Wb,it,Jr,Ub,Ho,Rb,xd,Hb,Qb,vp,Vb,Bb,Kb,cs,Jb,ps,Gb,hs,yf,Qo,ms,Tp,Gr,Xb,bp,Yb,Ef,Ke,Xr,Zb,yp,ey,ty,Yr,oy,Md,ny,sy,ay,Zr,ry,ei,iy,ly,dy,fs,cy,lt,ti,py,Vo,hy,zd,my,fy,Ep,uy,gy,_y,us,ky,gs,vy,_s,wf,Bo,ks,wp,oi,Ty,$p,by,$f,Je,ni,yy,Fp,Ey,wy,si,$y,Cd,Fy,xy,My,ai,zy,ri,Cy,jy,qy,vs,Py,zt,ii,Ay,Ko,Oy,jd,Ly,Ny,xp,Iy,Sy,Dy,Ts,Wy,bs,Ff,Jo,ys,Mp,li,Uy,zp,Ry,xf,Ne,di,Hy,Cp,Qy,Vy,jp,By,Ky,ci,Jy,qd,Gy,Xy,Yy,pi,Zy,hi,e1,t1,o1,Es,n1,dt,mi,s1,Go,a1,Pd,r1,i1,qp,l1,d1,c1,ws,p1,$s,h1,Fs,Mf,Xo,xs,Pp,fi,m1,Ap,f1,zf,Ge,ui,u1,Yo,g1,Op,_1,k1,Lp,v1,T1,b1,gi,y1,Ad,E1,w1,$1,_i,F1,ki,x1,M1,z1,Ms,C1,ct,vi,j1,Zo,q1,Od,P1,A1,Np,O1,L1,N1,zs,I1,Cs,S1,js,Cf,en,qs,Ip,Ti,D1,Sp,W1,jf,Ie,bi,U1,Dp,R1,H1,yi,Q1,Ld,V1,B1,K1,Ei,J1,wi,G1,X1,Y1,Wp,Z1,eE,Qt,Up,$i,tE,oE,Rp,Fi,nE,sE,Hp,xi,aE,rE,Qp,Mi,iE,lE,Ct,zi,dE,tn,cE,Vp,pE,hE,Bp,mE,fE,uE,Ps,gE,As,qf,on,Os,Kp,Ci,_E,Jp,kE,Pf,Pe,ji,vE,Gp,TE,bE,Xp,yE,EE,qi,wE,Nd,$E,FE,xE,Pi,ME,Ai,zE,CE,jE,Yp,qE,PE,Vt,Zp,Oi,AE,OE,eh,Li,LE,NE,th,Ni,IE,SE,oh,Ii,DE,WE,jt,Si,UE,nn,RE,nh,HE,QE,sh,VE,BE,KE,Ls,JE,Ns,Af,sn,Is,ah,Di,GE,rh,XE,Of,Se,Wi,YE,Ui,ZE,ih,ew,tw,ow,Ri,nw,Id,sw,aw,rw,Hi,iw,Qi,lw,dw,cw,lh,pw,hw,Bt,dh,Vi,mw,fw,ch,Bi,uw,gw,ph,Ki,_w,kw,hh,Ji,vw,Tw,qt,Gi,bw,an,yw,mh,Ew,ww,fh,$w,Fw,xw,Ss,Mw,Ds,Lf,rn,Ws,uh,Xi,zw,gh,Cw,Nf,De,Yi,jw,_h,qw,Pw,Zi,Aw,Sd,Ow,Lw,Nw,el,Iw,tl,Sw,Dw,Ww,kh,Uw,Rw,Kt,vh,ol,Hw,Qw,Th,nl,Vw,Bw,bh,sl,Kw,Jw,yh,al,Gw,Xw,Pt,rl,Yw,ln,Zw,Eh,e$,t$,wh,o$,n$,s$,Us,a$,Rs,If,dn,Hs,$h,il,r$,Fh,i$,Sf,We,ll,l$,xh,d$,c$,dl,p$,Dd,h$,m$,f$,cl,u$,pl,g$,_$,k$,Mh,v$,T$,Jt,zh,hl,b$,y$,Ch,ml,E$,w$,jh,fl,$$,F$,qh,ul,x$,M$,At,gl,z$,cn,C$,Ph,j$,q$,Ah,P$,A$,O$,Qs,L$,Vs,Df,pn,Bs,Oh,_l,N$,Lh,I$,Wf,Ae,kl,S$,Nh,D$,W$,Ih,U$,R$,vl,H$,Wd,Q$,V$,B$,Tl,K$,bl,J$,G$,X$,Sh,Y$,Z$,Gt,Dh,yl,e2,t2,Wh,El,o2,n2,Uh,wl,s2,a2,Rh,$l,r2,i2,Ot,Fl,l2,hn,d2,Hh,c2,p2,Qh,h2,m2,f2,Ks,u2,Js,Uf,mn,Gs,Vh,xl,g2,Bh,_2,Rf,Ue,Ml,k2,fn,v2,Kh,T2,b2,Jh,y2,E2,w2,zl,$2,Ud,F2,x2,M2,Cl,z2,jl,C2,j2,q2,Gh,P2,A2,Xt,Xh,ql,O2,L2,Yh,Pl,N2,I2,Zh,Al,S2,D2,em,Ol,W2,U2,Lt,Ll,R2,un,H2,tm,Q2,V2,om,B2,K2,J2,Xs,G2,Ys,Hf;return l=new $e({}),oe=new $e({}),ya=new $e({}),Ea=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/configuration_electra.py#L38"}}),kn=new le({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[IM]},$$scope:{ctx:x}}}),$a=new $e({}),Fa=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/tokenization_electra.py#L52"}}),Ma=new $e({}),za=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/tokenization_electra_fast.py#L61"}}),qa=new $e({}),Pa=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L692"}}),Oa=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),Na=new $e({}),Ia=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L804"}}),Ua=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L831",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new Ee({props:{$$slots:{default:[SM]},$$scope:{ctx:x}}}),Fn=new le({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[DM]},$$scope:{ctx:x}}}),Ra=new $e({}),Ha=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1055"}}),Ka=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Ee({props:{$$slots:{default:[WM]},$$scope:{ctx:x}}}),zn=new le({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[UM]},$$scope:{ctx:x}}}),Ja=new $e({}),Ga=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1530"}}),tr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1549",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new Ee({props:{$$slots:{default:[RM]},$$scope:{ctx:x}}}),qn=new le({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[HM]},$$scope:{ctx:x}}}),or=new $e({}),nr=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1161"}}),ir=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1178",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Ee({props:{$$slots:{default:[QM]},$$scope:{ctx:x}}}),On=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[VM]},$$scope:{ctx:x}}}),Ln=new le({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[BM]},$$scope:{ctx:x}}}),lr=new $e({}),dr=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L956"}}),mr=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L967",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new Ee({props:{$$slots:{default:[KM]},$$scope:{ctx:x}}}),Sn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[JM]},$$scope:{ctx:x}}}),Dn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[GM]},$$scope:{ctx:x}}}),Wn=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[XM]},$$scope:{ctx:x}}}),Un=new le({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[YM]},$$scope:{ctx:x}}}),fr=new $e({}),ur=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1442"}}),vr=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1453",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new Ee({props:{$$slots:{default:[ZM]},$$scope:{ctx:x}}}),Qn=new le({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[ez]},$$scope:{ctx:x}}}),Tr=new $e({}),br=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1251"}}),$r=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1265",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new Ee({props:{$$slots:{default:[tz]},$$scope:{ctx:x}}}),Kn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[oz]},$$scope:{ctx:x}}}),Jn=new le({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[nz]},$$scope:{ctx:x}}}),Fr=new $e({}),xr=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1333"}}),jr=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_electra.py#L1347",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Ee({props:{$$slots:{default:[sz]},$$scope:{ctx:x}}}),Yn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[az]},$$scope:{ctx:x}}}),Zn=new le({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[rz]},$$scope:{ctx:x}}}),qr=new $e({}),Pr=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L925"}}),ts=new Ee({props:{$$slots:{default:[iz]},$$scope:{ctx:x}}}),Nr=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L931",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new Ee({props:{$$slots:{default:[lz]},$$scope:{ctx:x}}}),ns=new le({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[dz]},$$scope:{ctx:x}}}),Ir=new $e({}),Sr=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1022"}}),as=new Ee({props:{$$slots:{default:[cz]},$$scope:{ctx:x}}}),Rr=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1029",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rs=new Ee({props:{$$slots:{default:[pz]},$$scope:{ctx:x}}}),is=new le({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[hz]},$$scope:{ctx:x}}}),Hr=new $e({}),Qr=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1137"}}),ds=new Ee({props:{$$slots:{default:[mz]},$$scope:{ctx:x}}}),Jr=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new Ee({props:{$$slots:{default:[fz]},$$scope:{ctx:x}}}),ps=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[uz]},$$scope:{ctx:x}}}),hs=new le({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[gz]},$$scope:{ctx:x}}}),Gr=new $e({}),Xr=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1264"}}),fs=new Ee({props:{$$slots:{default:[_z]},$$scope:{ctx:x}}}),ti=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),us=new Ee({props:{$$slots:{default:[kz]},$$scope:{ctx:x}}}),gs=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[vz]},$$scope:{ctx:x}}}),_s=new le({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[Tz]},$$scope:{ctx:x}}}),oi=new $e({}),ni=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),vs=new Ee({props:{$$slots:{default:[bz]},$$scope:{ctx:x}}}),ii=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ts=new Ee({props:{$$slots:{default:[yz]},$$scope:{ctx:x}}}),bs=new le({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[Ez]},$$scope:{ctx:x}}}),li=new $e({}),di=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1469"}}),Es=new Ee({props:{$$slots:{default:[wz]},$$scope:{ctx:x}}}),mi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ws=new Ee({props:{$$slots:{default:[$z]},$$scope:{ctx:x}}}),$s=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[Fz]},$$scope:{ctx:x}}}),Fs=new le({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[xz]},$$scope:{ctx:x}}}),fi=new $e({}),ui=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),Ms=new Ee({props:{$$slots:{default:[Mz]},$$scope:{ctx:x}}}),vi=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zs=new Ee({props:{$$slots:{default:[zz]},$$scope:{ctx:x}}}),Cs=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[Cz]},$$scope:{ctx:x}}}),js=new le({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[jz]},$$scope:{ctx:x}}}),Ti=new $e({}),bi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L674"}}),zi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new Ee({props:{$$slots:{default:[qz]},$$scope:{ctx:x}}}),As=new le({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[Pz]},$$scope:{ctx:x}}}),Ci=new $e({}),ji=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L823"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
`}}),Ls=new Ee({props:{$$slots:{default:[Az]},$$scope:{ctx:x}}}),Ns=new le({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[Oz]},$$scope:{ctx:x}}}),Di=new $e({}),Wi=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L760"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new Ee({props:{$$slots:{default:[Lz]},$$scope:{ctx:x}}}),Ds=new le({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[Nz]},$$scope:{ctx:x}}}),Xi=new $e({}),Yi=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L1224"}}),rl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new Ee({props:{$$slots:{default:[Iz]},$$scope:{ctx:x}}}),Rs=new le({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[Sz]},$$scope:{ctx:x}}}),il=new $e({}),ll=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L1060"}}),gl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new Ee({props:{$$slots:{default:[Dz]},$$scope:{ctx:x}}}),Vs=new le({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[Wz]},$$scope:{ctx:x}}}),_l=new $e({}),kl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L915"}}),Fl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ks=new Ee({props:{$$slots:{default:[Uz]},$$scope:{ctx:x}}}),Js=new le({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[Rz]},$$scope:{ctx:x}}}),xl=new $e({}),Ml=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L1133"}}),Ll=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/electra/modeling_flax_electra.py#L576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new Ee({props:{$$slots:{default:[Hz]},$$scope:{ctx:x}}}),Ys=new le({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[Qz]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),b(l.$$.fragment),f=c(),M=n("span"),fe=r("ELECTRA"),J=c(),C=n("h2"),ee=n("a"),S=n("span"),b(oe.$$.fragment),ue=c(),D=n("span"),ge=r("Overview"),pe=c(),K=n("p"),O=r("The ELECTRA model was proposed in the paper "),ne=n("a"),X=r(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
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
using the same amount of compute.`),me=c(),q=n("p"),ke=r("Tips:"),U=c(),te=n("ul"),ie=n("li"),H=r(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),ve=c(),G=n("li"),L=r("The ELECTRA checkpoints saved using "),se=n("a"),Q=r("Google Research\u2019s implementation"),Te=r(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=n("a"),z=r("ElectraForMaskedLM"),Y=r(` model, and the generator may be loaded in the
`),Fe=n("a"),ze=r("ElectraForPreTraining"),N=r(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),xe=c(),be=n("p"),Ce=r("This model was contributed by "),A=n("a"),V=r("lysandre"),je=r(". The original code can be found "),we=n("a"),B=r("here"),qe=r("."),Me=c(),Z=n("h2"),ye=n("a"),fc=n("span"),b(ya.$$.fragment),dg=c(),uc=n("span"),cg=r("ElectraConfig"),Qm=c(),Tt=n("div"),b(Ea.$$.fragment),pg=c(),Ht=n("p"),hg=r("This is the configuration class to store the configuration of a "),Kl=n("a"),mg=r("ElectraModel"),fg=r(" or a "),Jl=n("a"),ug=r("TFElectraModel"),gg=r(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wa=n("a"),_g=r("google/electra-small-discriminator"),kg=r(" architecture."),vg=c(),go=n("p"),Tg=r("Configuration objects inherit from "),Gl=n("a"),bg=r("PretrainedConfig"),yg=r(` and can be used to control the model outputs. Read the
documentation from `),Xl=n("a"),Eg=r("PretrainedConfig"),wg=r(" for more information."),$g=c(),b(kn.$$.fragment),Vm=c(),_o=n("h2"),vn=n("a"),gc=n("span"),b($a.$$.fragment),Fg=c(),_c=n("span"),xg=r("ElectraTokenizer"),Bm=c(),bt=n("div"),b(Fa.$$.fragment),Mg=c(),kc=n("p"),zg=r("Construct an ELECTRA tokenizer."),Cg=c(),Tn=n("p"),Yl=n("a"),jg=r("ElectraTokenizer"),qg=r(" is identical to "),Zl=n("a"),Pg=r("BertTokenizer"),Ag=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Og=c(),xa=n("p"),Lg=r("Refer to superclass "),ed=n("a"),Ng=r("BertTokenizer"),Ig=r(" for usage examples and documentation concerning parameters."),Km=c(),ko=n("h2"),bn=n("a"),vc=n("span"),b(Ma.$$.fragment),Sg=c(),Tc=n("span"),Dg=r("ElectraTokenizerFast"),Jm=c(),yt=n("div"),b(za.$$.fragment),Wg=c(),Ca=n("p"),Ug=r("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),bc=n("em"),Rg=r("tokenizers"),Hg=r(" library)."),Qg=c(),yn=n("p"),td=n("a"),Vg=r("ElectraTokenizerFast"),Bg=r(" is identical to "),od=n("a"),Kg=r("BertTokenizerFast"),Jg=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Gg=c(),ja=n("p"),Xg=r("Refer to superclass "),nd=n("a"),Yg=r("BertTokenizerFast"),Zg=r(" for usage examples and documentation concerning parameters."),Gm=c(),vo=n("h2"),En=n("a"),yc=n("span"),b(qa.$$.fragment),e_=c(),Ec=n("span"),t_=r("Electra specific outputs"),Xm=c(),To=n("div"),b(Pa.$$.fragment),o_=c(),Aa=n("p"),n_=r("Output type of "),sd=n("a"),s_=r("ElectraForPreTraining"),a_=r("."),Ym=c(),bo=n("div"),b(Oa.$$.fragment),r_=c(),La=n("p"),i_=r("Output type of "),ad=n("a"),l_=r("TFElectraForPreTraining"),d_=r("."),Zm=c(),yo=n("h2"),wn=n("a"),wc=n("span"),b(Na.$$.fragment),c_=c(),$c=n("span"),p_=r("ElectraModel"),ef=c(),Ze=n("div"),b(Ia.$$.fragment),h_=c(),Fc=n("p"),m_=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),f_=c(),Sa=n("p"),u_=r("This model inherits from "),rd=n("a"),g_=r("PreTrainedModel"),__=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k_=c(),Da=n("p"),v_=r("This model is also a PyTorch "),Wa=n("a"),T_=r("torch.nn.Module"),b_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y_=c(),Et=n("div"),b(Ua.$$.fragment),E_=c(),Eo=n("p"),w_=r("The "),id=n("a"),$_=r("ElectraModel"),F_=r(" forward method, overrides the "),xc=n("code"),x_=r("__call__"),M_=r(" special method."),z_=c(),b($n.$$.fragment),C_=c(),b(Fn.$$.fragment),tf=c(),wo=n("h2"),xn=n("a"),Mc=n("span"),b(Ra.$$.fragment),j_=c(),zc=n("span"),q_=r("ElectraForPreTraining"),of=c(),He=n("div"),b(Ha.$$.fragment),P_=c(),Cc=n("p"),A_=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),O_=c(),jc=n("p"),L_=r("It is recommended to load the discriminator checkpoint into that model."),N_=c(),Qa=n("p"),I_=r("This model inherits from "),ld=n("a"),S_=r("PreTrainedModel"),D_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),Va=n("p"),U_=r("This model is also a PyTorch "),Ba=n("a"),R_=r("torch.nn.Module"),H_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=c(),wt=n("div"),b(Ka.$$.fragment),V_=c(),$o=n("p"),B_=r("The "),dd=n("a"),K_=r("ElectraForPreTraining"),J_=r(" forward method, overrides the "),qc=n("code"),G_=r("__call__"),X_=r(" special method."),Y_=c(),b(Mn.$$.fragment),Z_=c(),b(zn.$$.fragment),nf=c(),Fo=n("h2"),Cn=n("a"),Pc=n("span"),b(Ja.$$.fragment),ek=c(),Ac=n("span"),tk=r("ElectraForCausalLM"),sf=c(),et=n("div"),b(Ga.$$.fragment),ok=c(),Xa=n("p"),nk=r("ELECTRA Model with a "),Oc=n("code"),sk=r("language modeling"),ak=r(" head on top for CLM fine-tuning."),rk=c(),Ya=n("p"),ik=r("This model inherits from "),cd=n("a"),lk=r("PreTrainedModel"),dk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ck=c(),Za=n("p"),pk=r("This model is also a PyTorch "),er=n("a"),hk=r("torch.nn.Module"),mk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fk=c(),$t=n("div"),b(tr.$$.fragment),uk=c(),xo=n("p"),gk=r("The "),pd=n("a"),_k=r("ElectraForCausalLM"),kk=r(" forward method, overrides the "),Lc=n("code"),vk=r("__call__"),Tk=r(" special method."),bk=c(),b(jn.$$.fragment),yk=c(),b(qn.$$.fragment),af=c(),Mo=n("h2"),Pn=n("a"),Nc=n("span"),b(or.$$.fragment),Ek=c(),Ic=n("span"),wk=r("ElectraForMaskedLM"),rf=c(),Qe=n("div"),b(nr.$$.fragment),$k=c(),Sc=n("p"),Fk=r("Electra model with a language modeling head on top."),xk=c(),Dc=n("p"),Mk=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),zk=c(),sr=n("p"),Ck=r("This model inherits from "),hd=n("a"),jk=r("PreTrainedModel"),qk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pk=c(),ar=n("p"),Ak=r("This model is also a PyTorch "),rr=n("a"),Ok=r("torch.nn.Module"),Lk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nk=c(),st=n("div"),b(ir.$$.fragment),Ik=c(),zo=n("p"),Sk=r("The "),md=n("a"),Dk=r("ElectraForMaskedLM"),Wk=r(" forward method, overrides the "),Wc=n("code"),Uk=r("__call__"),Rk=r(" special method."),Hk=c(),b(An.$$.fragment),Qk=c(),b(On.$$.fragment),Vk=c(),b(Ln.$$.fragment),lf=c(),Co=n("h2"),Nn=n("a"),Uc=n("span"),b(lr.$$.fragment),Bk=c(),Rc=n("span"),Kk=r("ElectraForSequenceClassification"),df=c(),tt=n("div"),b(dr.$$.fragment),Jk=c(),Hc=n("p"),Gk=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xk=c(),cr=n("p"),Yk=r("This model inherits from "),fd=n("a"),Zk=r("PreTrainedModel"),ev=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tv=c(),pr=n("p"),ov=r("This model is also a PyTorch "),hr=n("a"),nv=r("torch.nn.Module"),sv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),av=c(),Re=n("div"),b(mr.$$.fragment),rv=c(),jo=n("p"),iv=r("The "),ud=n("a"),lv=r("ElectraForSequenceClassification"),dv=r(" forward method, overrides the "),Qc=n("code"),cv=r("__call__"),pv=r(" special method."),hv=c(),b(In.$$.fragment),mv=c(),b(Sn.$$.fragment),fv=c(),b(Dn.$$.fragment),uv=c(),b(Wn.$$.fragment),gv=c(),b(Un.$$.fragment),cf=c(),qo=n("h2"),Rn=n("a"),Vc=n("span"),b(fr.$$.fragment),_v=c(),Bc=n("span"),kv=r("ElectraForMultipleChoice"),pf=c(),ot=n("div"),b(ur.$$.fragment),vv=c(),Kc=n("p"),Tv=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bv=c(),gr=n("p"),yv=r("This model inherits from "),gd=n("a"),Ev=r("PreTrainedModel"),wv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v=c(),_r=n("p"),Fv=r("This model is also a PyTorch "),kr=n("a"),xv=r("torch.nn.Module"),Mv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zv=c(),Ft=n("div"),b(vr.$$.fragment),Cv=c(),Po=n("p"),jv=r("The "),_d=n("a"),qv=r("ElectraForMultipleChoice"),Pv=r(" forward method, overrides the "),Jc=n("code"),Av=r("__call__"),Ov=r(" special method."),Lv=c(),b(Hn.$$.fragment),Nv=c(),b(Qn.$$.fragment),hf=c(),Ao=n("h2"),Vn=n("a"),Gc=n("span"),b(Tr.$$.fragment),Iv=c(),Xc=n("span"),Sv=r("ElectraForTokenClassification"),mf=c(),Ve=n("div"),b(br.$$.fragment),Dv=c(),Yc=n("p"),Wv=r("Electra model with a token classification head on top."),Uv=c(),Zc=n("p"),Rv=r("Both the discriminator and generator may be loaded into this model."),Hv=c(),yr=n("p"),Qv=r("This model inherits from "),kd=n("a"),Vv=r("PreTrainedModel"),Bv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kv=c(),Er=n("p"),Jv=r("This model is also a PyTorch "),wr=n("a"),Gv=r("torch.nn.Module"),Xv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yv=c(),at=n("div"),b($r.$$.fragment),Zv=c(),Oo=n("p"),eT=r("The "),vd=n("a"),tT=r("ElectraForTokenClassification"),oT=r(" forward method, overrides the "),ep=n("code"),nT=r("__call__"),sT=r(" special method."),aT=c(),b(Bn.$$.fragment),rT=c(),b(Kn.$$.fragment),iT=c(),b(Jn.$$.fragment),ff=c(),Lo=n("h2"),Gn=n("a"),tp=n("span"),b(Fr.$$.fragment),lT=c(),op=n("span"),dT=r("ElectraForQuestionAnswering"),uf=c(),nt=n("div"),b(xr.$$.fragment),cT=c(),No=n("p"),pT=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=n("code"),hT=r("span start logits"),mT=r(" and "),sp=n("code"),fT=r("span end logits"),uT=r(")."),gT=c(),Mr=n("p"),_T=r("This model inherits from "),Td=n("a"),kT=r("PreTrainedModel"),vT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TT=c(),zr=n("p"),bT=r("This model is also a PyTorch "),Cr=n("a"),yT=r("torch.nn.Module"),ET=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wT=c(),rt=n("div"),b(jr.$$.fragment),$T=c(),Io=n("p"),FT=r("The "),bd=n("a"),xT=r("ElectraForQuestionAnswering"),MT=r(" forward method, overrides the "),ap=n("code"),zT=r("__call__"),CT=r(" special method."),jT=c(),b(Xn.$$.fragment),qT=c(),b(Yn.$$.fragment),PT=c(),b(Zn.$$.fragment),gf=c(),So=n("h2"),es=n("a"),rp=n("span"),b(qr.$$.fragment),AT=c(),ip=n("span"),OT=r("TFElectraModel"),_f=c(),Be=n("div"),b(Pr.$$.fragment),LT=c(),lp=n("p"),NT=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),IT=c(),Ar=n("p"),ST=r("This model inherits from "),yd=n("a"),DT=r("TFPreTrainedModel"),WT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),UT=c(),Or=n("p"),RT=r("This model is also a "),Lr=n("a"),HT=r("tf.keras.Model"),QT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),VT=c(),b(ts.$$.fragment),BT=c(),xt=n("div"),b(Nr.$$.fragment),KT=c(),Do=n("p"),JT=r("The "),Ed=n("a"),GT=r("TFElectraModel"),XT=r(" forward method, overrides the "),dp=n("code"),YT=r("__call__"),ZT=r(" special method."),eb=c(),b(os.$$.fragment),tb=c(),b(ns.$$.fragment),kf=c(),Wo=n("h2"),ss=n("a"),cp=n("span"),b(Ir.$$.fragment),ob=c(),pp=n("span"),nb=r("TFElectraForPreTraining"),vf=c(),Oe=n("div"),b(Sr.$$.fragment),sb=c(),hp=n("p"),ab=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),rb=c(),mp=n("p"),ib=r(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),lb=c(),Dr=n("p"),db=r("This model inherits from "),wd=n("a"),cb=r("TFPreTrainedModel"),pb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=c(),Wr=n("p"),mb=r("This model is also a "),Ur=n("a"),fb=r("tf.keras.Model"),ub=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gb=c(),b(as.$$.fragment),_b=c(),Mt=n("div"),b(Rr.$$.fragment),kb=c(),Uo=n("p"),vb=r("The "),$d=n("a"),Tb=r("TFElectraForPreTraining"),bb=r(" forward method, overrides the "),fp=n("code"),yb=r("__call__"),Eb=r(" special method."),wb=c(),b(rs.$$.fragment),$b=c(),b(is.$$.fragment),Tf=c(),Ro=n("h2"),ls=n("a"),up=n("span"),b(Hr.$$.fragment),Fb=c(),gp=n("span"),xb=r("TFElectraForMaskedLM"),bf=c(),Le=n("div"),b(Qr.$$.fragment),Mb=c(),_p=n("p"),zb=r("Electra model with a language modeling head on top."),Cb=c(),kp=n("p"),jb=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),qb=c(),Vr=n("p"),Pb=r("This model inherits from "),Fd=n("a"),Ab=r("TFPreTrainedModel"),Ob=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=c(),Br=n("p"),Nb=r("This model is also a "),Kr=n("a"),Ib=r("tf.keras.Model"),Sb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Db=c(),b(ds.$$.fragment),Wb=c(),it=n("div"),b(Jr.$$.fragment),Ub=c(),Ho=n("p"),Rb=r("The "),xd=n("a"),Hb=r("TFElectraForMaskedLM"),Qb=r(" forward method, overrides the "),vp=n("code"),Vb=r("__call__"),Bb=r(" special method."),Kb=c(),b(cs.$$.fragment),Jb=c(),b(ps.$$.fragment),Gb=c(),b(hs.$$.fragment),yf=c(),Qo=n("h2"),ms=n("a"),Tp=n("span"),b(Gr.$$.fragment),Xb=c(),bp=n("span"),Yb=r("TFElectraForSequenceClassification"),Ef=c(),Ke=n("div"),b(Xr.$$.fragment),Zb=c(),yp=n("p"),ey=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ty=c(),Yr=n("p"),oy=r("This model inherits from "),Md=n("a"),ny=r("TFPreTrainedModel"),sy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay=c(),Zr=n("p"),ry=r("This model is also a "),ei=n("a"),iy=r("tf.keras.Model"),ly=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=c(),b(fs.$$.fragment),cy=c(),lt=n("div"),b(ti.$$.fragment),py=c(),Vo=n("p"),hy=r("The "),zd=n("a"),my=r("TFElectraForSequenceClassification"),fy=r(" forward method, overrides the "),Ep=n("code"),uy=r("__call__"),gy=r(" special method."),_y=c(),b(us.$$.fragment),ky=c(),b(gs.$$.fragment),vy=c(),b(_s.$$.fragment),wf=c(),Bo=n("h2"),ks=n("a"),wp=n("span"),b(oi.$$.fragment),Ty=c(),$p=n("span"),by=r("TFElectraForMultipleChoice"),$f=c(),Je=n("div"),b(ni.$$.fragment),yy=c(),Fp=n("p"),Ey=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wy=c(),si=n("p"),$y=r("This model inherits from "),Cd=n("a"),Fy=r("TFPreTrainedModel"),xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),My=c(),ai=n("p"),zy=r("This model is also a "),ri=n("a"),Cy=r("tf.keras.Model"),jy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qy=c(),b(vs.$$.fragment),Py=c(),zt=n("div"),b(ii.$$.fragment),Ay=c(),Ko=n("p"),Oy=r("The "),jd=n("a"),Ly=r("TFElectraForMultipleChoice"),Ny=r(" forward method, overrides the "),xp=n("code"),Iy=r("__call__"),Sy=r(" special method."),Dy=c(),b(Ts.$$.fragment),Wy=c(),b(bs.$$.fragment),Ff=c(),Jo=n("h2"),ys=n("a"),Mp=n("span"),b(li.$$.fragment),Uy=c(),zp=n("span"),Ry=r("TFElectraForTokenClassification"),xf=c(),Ne=n("div"),b(di.$$.fragment),Hy=c(),Cp=n("p"),Qy=r("Electra model with a token classification head on top."),Vy=c(),jp=n("p"),By=r("Both the discriminator and generator may be loaded into this model."),Ky=c(),ci=n("p"),Jy=r("This model inherits from "),qd=n("a"),Gy=r("TFPreTrainedModel"),Xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yy=c(),pi=n("p"),Zy=r("This model is also a "),hi=n("a"),e1=r("tf.keras.Model"),t1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),o1=c(),b(Es.$$.fragment),n1=c(),dt=n("div"),b(mi.$$.fragment),s1=c(),Go=n("p"),a1=r("The "),Pd=n("a"),r1=r("TFElectraForTokenClassification"),i1=r(" forward method, overrides the "),qp=n("code"),l1=r("__call__"),d1=r(" special method."),c1=c(),b(ws.$$.fragment),p1=c(),b($s.$$.fragment),h1=c(),b(Fs.$$.fragment),Mf=c(),Xo=n("h2"),xs=n("a"),Pp=n("span"),b(fi.$$.fragment),m1=c(),Ap=n("span"),f1=r("TFElectraForQuestionAnswering"),zf=c(),Ge=n("div"),b(ui.$$.fragment),u1=c(),Yo=n("p"),g1=r(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),_1=r("span start logits"),k1=r(" and "),Lp=n("code"),v1=r("span end logits"),T1=r(")."),b1=c(),gi=n("p"),y1=r("This model inherits from "),Ad=n("a"),E1=r("TFPreTrainedModel"),w1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$1=c(),_i=n("p"),F1=r("This model is also a "),ki=n("a"),x1=r("tf.keras.Model"),M1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z1=c(),b(Ms.$$.fragment),C1=c(),ct=n("div"),b(vi.$$.fragment),j1=c(),Zo=n("p"),q1=r("The "),Od=n("a"),P1=r("TFElectraForQuestionAnswering"),A1=r(" forward method, overrides the "),Np=n("code"),O1=r("__call__"),L1=r(" special method."),N1=c(),b(zs.$$.fragment),I1=c(),b(Cs.$$.fragment),S1=c(),b(js.$$.fragment),Cf=c(),en=n("h2"),qs=n("a"),Ip=n("span"),b(Ti.$$.fragment),D1=c(),Sp=n("span"),W1=r("FlaxElectraModel"),jf=c(),Ie=n("div"),b(bi.$$.fragment),U1=c(),Dp=n("p"),R1=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),H1=c(),yi=n("p"),Q1=r("This model inherits from "),Ld=n("a"),V1=r("FlaxPreTrainedModel"),B1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),K1=c(),Ei=n("p"),J1=r(`This model is also a Flax Linen
`),wi=n("a"),G1=r("flax.nn.Module"),X1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Y1=c(),Wp=n("p"),Z1=r("Finally, this model supports inherent JAX features such as:"),eE=c(),Qt=n("ul"),Up=n("li"),$i=n("a"),tE=r("Just-In-Time (JIT) compilation"),oE=c(),Rp=n("li"),Fi=n("a"),nE=r("Automatic Differentiation"),sE=c(),Hp=n("li"),xi=n("a"),aE=r("Vectorization"),rE=c(),Qp=n("li"),Mi=n("a"),iE=r("Parallelization"),lE=c(),Ct=n("div"),b(zi.$$.fragment),dE=c(),tn=n("p"),cE=r("The "),Vp=n("code"),pE=r("FlaxElectraPreTrainedModel"),hE=r(" forward method, overrides the "),Bp=n("code"),mE=r("__call__"),fE=r(" special method."),uE=c(),b(Ps.$$.fragment),gE=c(),b(As.$$.fragment),qf=c(),on=n("h2"),Os=n("a"),Kp=n("span"),b(Ci.$$.fragment),_E=c(),Jp=n("span"),kE=r("FlaxElectraForPreTraining"),Pf=c(),Pe=n("div"),b(ji.$$.fragment),vE=c(),Gp=n("p"),TE=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),bE=c(),Xp=n("p"),yE=r("It is recommended to load the discriminator checkpoint into that model."),EE=c(),qi=n("p"),wE=r("This model inherits from "),Nd=n("a"),$E=r("FlaxPreTrainedModel"),FE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xE=c(),Pi=n("p"),ME=r(`This model is also a Flax Linen
`),Ai=n("a"),zE=r("flax.nn.Module"),CE=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jE=c(),Yp=n("p"),qE=r("Finally, this model supports inherent JAX features such as:"),PE=c(),Vt=n("ul"),Zp=n("li"),Oi=n("a"),AE=r("Just-In-Time (JIT) compilation"),OE=c(),eh=n("li"),Li=n("a"),LE=r("Automatic Differentiation"),NE=c(),th=n("li"),Ni=n("a"),IE=r("Vectorization"),SE=c(),oh=n("li"),Ii=n("a"),DE=r("Parallelization"),WE=c(),jt=n("div"),b(Si.$$.fragment),UE=c(),nn=n("p"),RE=r("The "),nh=n("code"),HE=r("FlaxElectraPreTrainedModel"),QE=r(" forward method, overrides the "),sh=n("code"),VE=r("__call__"),BE=r(" special method."),KE=c(),b(Ls.$$.fragment),JE=c(),b(Ns.$$.fragment),Af=c(),sn=n("h2"),Is=n("a"),ah=n("span"),b(Di.$$.fragment),GE=c(),rh=n("span"),XE=r("FlaxElectraForMaskedLM"),Of=c(),Se=n("div"),b(Wi.$$.fragment),YE=c(),Ui=n("p"),ZE=r("Electra Model with a "),ih=n("code"),ew=r("language modeling"),tw=r(" head on top."),ow=c(),Ri=n("p"),nw=r("This model inherits from "),Id=n("a"),sw=r("FlaxPreTrainedModel"),aw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rw=c(),Hi=n("p"),iw=r(`This model is also a Flax Linen
`),Qi=n("a"),lw=r("flax.nn.Module"),dw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),cw=c(),lh=n("p"),pw=r("Finally, this model supports inherent JAX features such as:"),hw=c(),Bt=n("ul"),dh=n("li"),Vi=n("a"),mw=r("Just-In-Time (JIT) compilation"),fw=c(),ch=n("li"),Bi=n("a"),uw=r("Automatic Differentiation"),gw=c(),ph=n("li"),Ki=n("a"),_w=r("Vectorization"),kw=c(),hh=n("li"),Ji=n("a"),vw=r("Parallelization"),Tw=c(),qt=n("div"),b(Gi.$$.fragment),bw=c(),an=n("p"),yw=r("The "),mh=n("code"),Ew=r("FlaxElectraPreTrainedModel"),ww=r(" forward method, overrides the "),fh=n("code"),$w=r("__call__"),Fw=r(" special method."),xw=c(),b(Ss.$$.fragment),Mw=c(),b(Ds.$$.fragment),Lf=c(),rn=n("h2"),Ws=n("a"),uh=n("span"),b(Xi.$$.fragment),zw=c(),gh=n("span"),Cw=r("FlaxElectraForSequenceClassification"),Nf=c(),De=n("div"),b(Yi.$$.fragment),jw=c(),_h=n("p"),qw=r(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Pw=c(),Zi=n("p"),Aw=r("This model inherits from "),Sd=n("a"),Ow=r("FlaxPreTrainedModel"),Lw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nw=c(),el=n("p"),Iw=r(`This model is also a Flax Linen
`),tl=n("a"),Sw=r("flax.nn.Module"),Dw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ww=c(),kh=n("p"),Uw=r("Finally, this model supports inherent JAX features such as:"),Rw=c(),Kt=n("ul"),vh=n("li"),ol=n("a"),Hw=r("Just-In-Time (JIT) compilation"),Qw=c(),Th=n("li"),nl=n("a"),Vw=r("Automatic Differentiation"),Bw=c(),bh=n("li"),sl=n("a"),Kw=r("Vectorization"),Jw=c(),yh=n("li"),al=n("a"),Gw=r("Parallelization"),Xw=c(),Pt=n("div"),b(rl.$$.fragment),Yw=c(),ln=n("p"),Zw=r("The "),Eh=n("code"),e$=r("FlaxElectraPreTrainedModel"),t$=r(" forward method, overrides the "),wh=n("code"),o$=r("__call__"),n$=r(" special method."),s$=c(),b(Us.$$.fragment),a$=c(),b(Rs.$$.fragment),If=c(),dn=n("h2"),Hs=n("a"),$h=n("span"),b(il.$$.fragment),r$=c(),Fh=n("span"),i$=r("FlaxElectraForMultipleChoice"),Sf=c(),We=n("div"),b(ll.$$.fragment),l$=c(),xh=n("p"),d$=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),c$=c(),dl=n("p"),p$=r("This model inherits from "),Dd=n("a"),h$=r("FlaxPreTrainedModel"),m$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f$=c(),cl=n("p"),u$=r(`This model is also a Flax Linen
`),pl=n("a"),g$=r("flax.nn.Module"),_$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),k$=c(),Mh=n("p"),v$=r("Finally, this model supports inherent JAX features such as:"),T$=c(),Jt=n("ul"),zh=n("li"),hl=n("a"),b$=r("Just-In-Time (JIT) compilation"),y$=c(),Ch=n("li"),ml=n("a"),E$=r("Automatic Differentiation"),w$=c(),jh=n("li"),fl=n("a"),$$=r("Vectorization"),F$=c(),qh=n("li"),ul=n("a"),x$=r("Parallelization"),M$=c(),At=n("div"),b(gl.$$.fragment),z$=c(),cn=n("p"),C$=r("The "),Ph=n("code"),j$=r("FlaxElectraPreTrainedModel"),q$=r(" forward method, overrides the "),Ah=n("code"),P$=r("__call__"),A$=r(" special method."),O$=c(),b(Qs.$$.fragment),L$=c(),b(Vs.$$.fragment),Df=c(),pn=n("h2"),Bs=n("a"),Oh=n("span"),b(_l.$$.fragment),N$=c(),Lh=n("span"),I$=r("FlaxElectraForTokenClassification"),Wf=c(),Ae=n("div"),b(kl.$$.fragment),S$=c(),Nh=n("p"),D$=r("Electra model with a token classification head on top."),W$=c(),Ih=n("p"),U$=r("Both the discriminator and generator may be loaded into this model."),R$=c(),vl=n("p"),H$=r("This model inherits from "),Wd=n("a"),Q$=r("FlaxPreTrainedModel"),V$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),B$=c(),Tl=n("p"),K$=r(`This model is also a Flax Linen
`),bl=n("a"),J$=r("flax.nn.Module"),G$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),X$=c(),Sh=n("p"),Y$=r("Finally, this model supports inherent JAX features such as:"),Z$=c(),Gt=n("ul"),Dh=n("li"),yl=n("a"),e2=r("Just-In-Time (JIT) compilation"),t2=c(),Wh=n("li"),El=n("a"),o2=r("Automatic Differentiation"),n2=c(),Uh=n("li"),wl=n("a"),s2=r("Vectorization"),a2=c(),Rh=n("li"),$l=n("a"),r2=r("Parallelization"),i2=c(),Ot=n("div"),b(Fl.$$.fragment),l2=c(),hn=n("p"),d2=r("The "),Hh=n("code"),c2=r("FlaxElectraPreTrainedModel"),p2=r(" forward method, overrides the "),Qh=n("code"),h2=r("__call__"),m2=r(" special method."),f2=c(),b(Ks.$$.fragment),u2=c(),b(Js.$$.fragment),Uf=c(),mn=n("h2"),Gs=n("a"),Vh=n("span"),b(xl.$$.fragment),g2=c(),Bh=n("span"),_2=r("FlaxElectraForQuestionAnswering"),Rf=c(),Ue=n("div"),b(Ml.$$.fragment),k2=c(),fn=n("p"),v2=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=n("code"),T2=r("span start logits"),b2=r(" and "),Jh=n("code"),y2=r("span end logits"),E2=r(")."),w2=c(),zl=n("p"),$2=r("This model inherits from "),Ud=n("a"),F2=r("FlaxPreTrainedModel"),x2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M2=c(),Cl=n("p"),z2=r(`This model is also a Flax Linen
`),jl=n("a"),C2=r("flax.nn.Module"),j2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),q2=c(),Gh=n("p"),P2=r("Finally, this model supports inherent JAX features such as:"),A2=c(),Xt=n("ul"),Xh=n("li"),ql=n("a"),O2=r("Just-In-Time (JIT) compilation"),L2=c(),Yh=n("li"),Pl=n("a"),N2=r("Automatic Differentiation"),I2=c(),Zh=n("li"),Al=n("a"),S2=r("Vectorization"),D2=c(),em=n("li"),Ol=n("a"),W2=r("Parallelization"),U2=c(),Lt=n("div"),b(Ll.$$.fragment),R2=c(),un=n("p"),H2=r("The "),tm=n("code"),Q2=r("FlaxElectraPreTrainedModel"),V2=r(" forward method, overrides the "),om=n("code"),B2=r("__call__"),K2=r(" special method."),J2=c(),b(Xs.$$.fragment),G2=c(),b(Ys.$$.fragment),this.h()},l(o){const v=LM('[data-svelte="svelte-1phssyn"]',document.head);d=s(v,"META",{name:!0,content:!0}),v.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Nl=a(h);m=s(Nl,"A",{id:!0,class:!0,href:!0});var nm=a(m);_=s(nm,"SPAN",{});var sm=a(_);y(l.$$.fragment,sm),sm.forEach(t),nm.forEach(t),f=p(Nl),M=s(Nl,"SPAN",{});var am=a(M);fe=i(am,"ELECTRA"),am.forEach(t),Nl.forEach(t),J=p(o),C=s(o,"H2",{class:!0});var Il=a(C);ee=s(Il,"A",{id:!0,class:!0,href:!0});var rm=a(ee);S=s(rm,"SPAN",{});var im=a(S);y(oe.$$.fragment,im),im.forEach(t),rm.forEach(t),ue=p(Il),D=s(Il,"SPAN",{});var lm=a(D);ge=i(lm,"Overview"),lm.forEach(t),Il.forEach(t),pe=p(o),K=s(o,"P",{});var Sl=a(K);O=i(Sl,"The ELECTRA model was proposed in the paper "),ne=s(Sl,"A",{href:!0,rel:!0});var dm=a(ne);X=i(dm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),dm.forEach(t),j=i(Sl,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),Sl.forEach(t),P=p(o),ae=s(o,"P",{});var cm=a(ae);R=i(cm,"The abstract from the paper is the following:"),cm.forEach(t),he=p(o),re=s(o,"P",{});var pm=a(re);W=s(pm,"EM",{});var hm=a(W);_e=i(hm,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
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
using the same amount of compute.`),hm.forEach(t),pm.forEach(t),me=p(o),q=s(o,"P",{});var mm=a(q);ke=i(mm,"Tips:"),mm.forEach(t),U=p(o),te=s(o,"UL",{});var Dl=a(te);ie=s(Dl,"LI",{});var fm=a(ie);H=i(fm,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),fm.forEach(t),ve=p(Dl),G=s(Dl,"LI",{});var Yt=a(G);L=i(Yt,"The ELECTRA checkpoints saved using "),se=s(Yt,"A",{href:!0,rel:!0});var um=a(se);Q=i(um,"Google Research\u2019s implementation"),um.forEach(t),Te=i(Yt,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=s(Yt,"A",{href:!0});var gm=a(T);z=i(gm,"ElectraForMaskedLM"),gm.forEach(t),Y=i(Yt,` model, and the generator may be loaded in the
`),Fe=s(Yt,"A",{href:!0});var _m=a(Fe);ze=i(_m,"ElectraForPreTraining"),_m.forEach(t),N=i(Yt,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),Yt.forEach(t),Dl.forEach(t),xe=p(o),be=s(o,"P",{});var gn=a(be);Ce=i(gn,"This model was contributed by "),A=s(gn,"A",{href:!0,rel:!0});var km=a(A);V=i(km,"lysandre"),km.forEach(t),je=i(gn,". The original code can be found "),we=s(gn,"A",{href:!0,rel:!0});var vm=a(we);B=i(vm,"here"),vm.forEach(t),qe=i(gn,"."),gn.forEach(t),Me=p(o),Z=s(o,"H2",{class:!0});var Wl=a(Z);ye=s(Wl,"A",{id:!0,class:!0,href:!0});var Tm=a(ye);fc=s(Tm,"SPAN",{});var bm=a(fc);y(ya.$$.fragment,bm),bm.forEach(t),Tm.forEach(t),dg=p(Wl),uc=s(Wl,"SPAN",{});var ym=a(uc);cg=i(ym,"ElectraConfig"),ym.forEach(t),Wl.forEach(t),Qm=p(o),Tt=s(o,"DIV",{class:!0});var Zt=a(Tt);y(Ea.$$.fragment,Zt),pg=p(Zt),Ht=s(Zt,"P",{});var eo=a(Ht);hg=i(eo,"This is the configuration class to store the configuration of a "),Kl=s(eo,"A",{href:!0});var Em=a(Kl);mg=i(Em,"ElectraModel"),Em.forEach(t),fg=i(eo," or a "),Jl=s(eo,"A",{href:!0});var wm=a(Jl);ug=i(wm,"TFElectraModel"),wm.forEach(t),gg=i(eo,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),wa=s(eo,"A",{href:!0,rel:!0});var $m=a(wa);_g=i($m,"google/electra-small-discriminator"),$m.forEach(t),kg=i(eo," architecture."),eo.forEach(t),vg=p(Zt),go=s(Zt,"P",{});var _n=a(go);Tg=i(_n,"Configuration objects inherit from "),Gl=s(_n,"A",{href:!0});var Fm=a(Gl);bg=i(Fm,"PretrainedConfig"),Fm.forEach(t),yg=i(_n,` and can be used to control the model outputs. Read the
documentation from `),Xl=s(_n,"A",{href:!0});var xm=a(Xl);Eg=i(xm,"PretrainedConfig"),xm.forEach(t),wg=i(_n," for more information."),_n.forEach(t),$g=p(Zt),y(kn.$$.fragment,Zt),Zt.forEach(t),Vm=p(o),_o=s(o,"H2",{class:!0});var Ul=a(_o);vn=s(Ul,"A",{id:!0,class:!0,href:!0});var Mm=a(vn);gc=s(Mm,"SPAN",{});var zm=a(gc);y($a.$$.fragment,zm),zm.forEach(t),Mm.forEach(t),Fg=p(Ul),_c=s(Ul,"SPAN",{});var Cm=a(_c);xg=i(Cm,"ElectraTokenizer"),Cm.forEach(t),Ul.forEach(t),Bm=p(o),bt=s(o,"DIV",{class:!0});var to=a(bt);y(Fa.$$.fragment,to),Mg=p(to),kc=s(to,"P",{});var jm=a(kc);zg=i(jm,"Construct an ELECTRA tokenizer."),jm.forEach(t),Cg=p(to),Tn=s(to,"P",{});var Zs=a(Tn);Yl=s(Zs,"A",{href:!0});var qm=a(Yl);jg=i(qm,"ElectraTokenizer"),qm.forEach(t),qg=i(Zs," is identical to "),Zl=s(Zs,"A",{href:!0});var Pm=a(Zl);Pg=i(Pm,"BertTokenizer"),Pm.forEach(t),Ag=i(Zs,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Zs.forEach(t),Og=p(to),xa=s(to,"P",{});var Rl=a(xa);Lg=i(Rl,"Refer to superclass "),ed=s(Rl,"A",{href:!0});var Am=a(ed);Ng=i(Am,"BertTokenizer"),Am.forEach(t),Ig=i(Rl," for usage examples and documentation concerning parameters."),Rl.forEach(t),to.forEach(t),Km=p(o),ko=s(o,"H2",{class:!0});var Hl=a(ko);bn=s(Hl,"A",{id:!0,class:!0,href:!0});var Om=a(bn);vc=s(Om,"SPAN",{});var Lm=a(vc);y(Ma.$$.fragment,Lm),Lm.forEach(t),Om.forEach(t),Sg=p(Hl),Tc=s(Hl,"SPAN",{});var Nm=a(Tc);Dg=i(Nm,"ElectraTokenizerFast"),Nm.forEach(t),Hl.forEach(t),Jm=p(o),yt=s(o,"DIV",{class:!0});var oo=a(yt);y(za.$$.fragment,oo),Wg=p(oo),Ca=s(oo,"P",{});var Ql=a(Ca);Ug=i(Ql,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),bc=s(Ql,"EM",{});var Im=a(bc);Rg=i(Im,"tokenizers"),Im.forEach(t),Hg=i(Ql," library)."),Ql.forEach(t),Qg=p(oo),yn=s(oo,"P",{});var ea=a(yn);td=s(ea,"A",{href:!0});var Sm=a(td);Vg=i(Sm,"ElectraTokenizerFast"),Sm.forEach(t),Bg=i(ea," is identical to "),od=s(ea,"A",{href:!0});var Dm=a(od);Kg=i(Dm,"BertTokenizerFast"),Dm.forEach(t),Jg=i(ea,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ea.forEach(t),Gg=p(oo),ja=s(oo,"P",{});var Vl=a(ja);Xg=i(Vl,"Refer to superclass "),nd=s(Vl,"A",{href:!0});var Wm=a(nd);Yg=i(Wm,"BertTokenizerFast"),Wm.forEach(t),Zg=i(Vl," for usage examples and documentation concerning parameters."),Vl.forEach(t),oo.forEach(t),Gm=p(o),vo=s(o,"H2",{class:!0});var Bl=a(vo);En=s(Bl,"A",{id:!0,class:!0,href:!0});var Um=a(En);yc=s(Um,"SPAN",{});var Rm=a(yc);y(qa.$$.fragment,Rm),Rm.forEach(t),Um.forEach(t),e_=p(Bl),Ec=s(Bl,"SPAN",{});var Hm=a(Ec);t_=i(Hm,"Electra specific outputs"),Hm.forEach(t),Bl.forEach(t),Xm=p(o),To=s(o,"DIV",{class:!0});var Qf=a(To);y(Pa.$$.fragment,Qf),o_=p(Qf),Aa=s(Qf,"P",{});var Vf=a(Aa);n_=i(Vf,"Output type of "),sd=s(Vf,"A",{href:!0});var X2=a(sd);s_=i(X2,"ElectraForPreTraining"),X2.forEach(t),a_=i(Vf,"."),Vf.forEach(t),Qf.forEach(t),Ym=p(o),bo=s(o,"DIV",{class:!0});var Bf=a(bo);y(Oa.$$.fragment,Bf),r_=p(Bf),La=s(Bf,"P",{});var Kf=a(La);i_=i(Kf,"Output type of "),ad=s(Kf,"A",{href:!0});var Y2=a(ad);l_=i(Y2,"TFElectraForPreTraining"),Y2.forEach(t),d_=i(Kf,"."),Kf.forEach(t),Bf.forEach(t),Zm=p(o),yo=s(o,"H2",{class:!0});var Jf=a(yo);wn=s(Jf,"A",{id:!0,class:!0,href:!0});var Z2=a(wn);wc=s(Z2,"SPAN",{});var eF=a(wc);y(Na.$$.fragment,eF),eF.forEach(t),Z2.forEach(t),c_=p(Jf),$c=s(Jf,"SPAN",{});var tF=a($c);p_=i(tF,"ElectraModel"),tF.forEach(t),Jf.forEach(t),ef=p(o),Ze=s(o,"DIV",{class:!0});var no=a(Ze);y(Ia.$$.fragment,no),h_=p(no),Fc=s(no,"P",{});var oF=a(Fc);m_=i(oF,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),oF.forEach(t),f_=p(no),Sa=s(no,"P",{});var Gf=a(Sa);u_=i(Gf,"This model inherits from "),rd=s(Gf,"A",{href:!0});var nF=a(rd);g_=i(nF,"PreTrainedModel"),nF.forEach(t),__=i(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf.forEach(t),k_=p(no),Da=s(no,"P",{});var Xf=a(Da);v_=i(Xf,"This model is also a PyTorch "),Wa=s(Xf,"A",{href:!0,rel:!0});var sF=a(Wa);T_=i(sF,"torch.nn.Module"),sF.forEach(t),b_=i(Xf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf.forEach(t),y_=p(no),Et=s(no,"DIV",{class:!0});var ta=a(Et);y(Ua.$$.fragment,ta),E_=p(ta),Eo=s(ta,"P",{});var Rd=a(Eo);w_=i(Rd,"The "),id=s(Rd,"A",{href:!0});var aF=a(id);$_=i(aF,"ElectraModel"),aF.forEach(t),F_=i(Rd," forward method, overrides the "),xc=s(Rd,"CODE",{});var rF=a(xc);x_=i(rF,"__call__"),rF.forEach(t),M_=i(Rd," special method."),Rd.forEach(t),z_=p(ta),y($n.$$.fragment,ta),C_=p(ta),y(Fn.$$.fragment,ta),ta.forEach(t),no.forEach(t),tf=p(o),wo=s(o,"H2",{class:!0});var Yf=a(wo);xn=s(Yf,"A",{id:!0,class:!0,href:!0});var iF=a(xn);Mc=s(iF,"SPAN",{});var lF=a(Mc);y(Ra.$$.fragment,lF),lF.forEach(t),iF.forEach(t),j_=p(Yf),zc=s(Yf,"SPAN",{});var dF=a(zc);q_=i(dF,"ElectraForPreTraining"),dF.forEach(t),Yf.forEach(t),of=p(o),He=s(o,"DIV",{class:!0});var Nt=a(He);y(Ha.$$.fragment,Nt),P_=p(Nt),Cc=s(Nt,"P",{});var cF=a(Cc);A_=i(cF,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),cF.forEach(t),O_=p(Nt),jc=s(Nt,"P",{});var pF=a(jc);L_=i(pF,"It is recommended to load the discriminator checkpoint into that model."),pF.forEach(t),N_=p(Nt),Qa=s(Nt,"P",{});var Zf=a(Qa);I_=i(Zf,"This model inherits from "),ld=s(Zf,"A",{href:!0});var hF=a(ld);S_=i(hF,"PreTrainedModel"),hF.forEach(t),D_=i(Zf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf.forEach(t),W_=p(Nt),Va=s(Nt,"P",{});var eu=a(Va);U_=i(eu,"This model is also a PyTorch "),Ba=s(eu,"A",{href:!0,rel:!0});var mF=a(Ba);R_=i(mF,"torch.nn.Module"),mF.forEach(t),H_=i(eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eu.forEach(t),Q_=p(Nt),wt=s(Nt,"DIV",{class:!0});var oa=a(wt);y(Ka.$$.fragment,oa),V_=p(oa),$o=s(oa,"P",{});var Hd=a($o);B_=i(Hd,"The "),dd=s(Hd,"A",{href:!0});var fF=a(dd);K_=i(fF,"ElectraForPreTraining"),fF.forEach(t),J_=i(Hd," forward method, overrides the "),qc=s(Hd,"CODE",{});var uF=a(qc);G_=i(uF,"__call__"),uF.forEach(t),X_=i(Hd," special method."),Hd.forEach(t),Y_=p(oa),y(Mn.$$.fragment,oa),Z_=p(oa),y(zn.$$.fragment,oa),oa.forEach(t),Nt.forEach(t),nf=p(o),Fo=s(o,"H2",{class:!0});var tu=a(Fo);Cn=s(tu,"A",{id:!0,class:!0,href:!0});var gF=a(Cn);Pc=s(gF,"SPAN",{});var _F=a(Pc);y(Ja.$$.fragment,_F),_F.forEach(t),gF.forEach(t),ek=p(tu),Ac=s(tu,"SPAN",{});var kF=a(Ac);tk=i(kF,"ElectraForCausalLM"),kF.forEach(t),tu.forEach(t),sf=p(o),et=s(o,"DIV",{class:!0});var so=a(et);y(Ga.$$.fragment,so),ok=p(so),Xa=s(so,"P",{});var ou=a(Xa);nk=i(ou,"ELECTRA Model with a "),Oc=s(ou,"CODE",{});var vF=a(Oc);sk=i(vF,"language modeling"),vF.forEach(t),ak=i(ou," head on top for CLM fine-tuning."),ou.forEach(t),rk=p(so),Ya=s(so,"P",{});var nu=a(Ya);ik=i(nu,"This model inherits from "),cd=s(nu,"A",{href:!0});var TF=a(cd);lk=i(TF,"PreTrainedModel"),TF.forEach(t),dk=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu.forEach(t),ck=p(so),Za=s(so,"P",{});var su=a(Za);pk=i(su,"This model is also a PyTorch "),er=s(su,"A",{href:!0,rel:!0});var bF=a(er);hk=i(bF,"torch.nn.Module"),bF.forEach(t),mk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),fk=p(so),$t=s(so,"DIV",{class:!0});var na=a($t);y(tr.$$.fragment,na),uk=p(na),xo=s(na,"P",{});var Qd=a(xo);gk=i(Qd,"The "),pd=s(Qd,"A",{href:!0});var yF=a(pd);_k=i(yF,"ElectraForCausalLM"),yF.forEach(t),kk=i(Qd," forward method, overrides the "),Lc=s(Qd,"CODE",{});var EF=a(Lc);vk=i(EF,"__call__"),EF.forEach(t),Tk=i(Qd," special method."),Qd.forEach(t),bk=p(na),y(jn.$$.fragment,na),yk=p(na),y(qn.$$.fragment,na),na.forEach(t),so.forEach(t),af=p(o),Mo=s(o,"H2",{class:!0});var au=a(Mo);Pn=s(au,"A",{id:!0,class:!0,href:!0});var wF=a(Pn);Nc=s(wF,"SPAN",{});var $F=a(Nc);y(or.$$.fragment,$F),$F.forEach(t),wF.forEach(t),Ek=p(au),Ic=s(au,"SPAN",{});var FF=a(Ic);wk=i(FF,"ElectraForMaskedLM"),FF.forEach(t),au.forEach(t),rf=p(o),Qe=s(o,"DIV",{class:!0});var It=a(Qe);y(nr.$$.fragment,It),$k=p(It),Sc=s(It,"P",{});var xF=a(Sc);Fk=i(xF,"Electra model with a language modeling head on top."),xF.forEach(t),xk=p(It),Dc=s(It,"P",{});var MF=a(Dc);Mk=i(MF,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),MF.forEach(t),zk=p(It),sr=s(It,"P",{});var ru=a(sr);Ck=i(ru,"This model inherits from "),hd=s(ru,"A",{href:!0});var zF=a(hd);jk=i(zF,"PreTrainedModel"),zF.forEach(t),qk=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ru.forEach(t),Pk=p(It),ar=s(It,"P",{});var iu=a(ar);Ak=i(iu,"This model is also a PyTorch "),rr=s(iu,"A",{href:!0,rel:!0});var CF=a(rr);Ok=i(CF,"torch.nn.Module"),CF.forEach(t),Lk=i(iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu.forEach(t),Nk=p(It),st=s(It,"DIV",{class:!0});var ao=a(st);y(ir.$$.fragment,ao),Ik=p(ao),zo=s(ao,"P",{});var Vd=a(zo);Sk=i(Vd,"The "),md=s(Vd,"A",{href:!0});var jF=a(md);Dk=i(jF,"ElectraForMaskedLM"),jF.forEach(t),Wk=i(Vd," forward method, overrides the "),Wc=s(Vd,"CODE",{});var qF=a(Wc);Uk=i(qF,"__call__"),qF.forEach(t),Rk=i(Vd," special method."),Vd.forEach(t),Hk=p(ao),y(An.$$.fragment,ao),Qk=p(ao),y(On.$$.fragment,ao),Vk=p(ao),y(Ln.$$.fragment,ao),ao.forEach(t),It.forEach(t),lf=p(o),Co=s(o,"H2",{class:!0});var lu=a(Co);Nn=s(lu,"A",{id:!0,class:!0,href:!0});var PF=a(Nn);Uc=s(PF,"SPAN",{});var AF=a(Uc);y(lr.$$.fragment,AF),AF.forEach(t),PF.forEach(t),Bk=p(lu),Rc=s(lu,"SPAN",{});var OF=a(Rc);Kk=i(OF,"ElectraForSequenceClassification"),OF.forEach(t),lu.forEach(t),df=p(o),tt=s(o,"DIV",{class:!0});var ro=a(tt);y(dr.$$.fragment,ro),Jk=p(ro),Hc=s(ro,"P",{});var LF=a(Hc);Gk=i(LF,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),LF.forEach(t),Xk=p(ro),cr=s(ro,"P",{});var du=a(cr);Yk=i(du,"This model inherits from "),fd=s(du,"A",{href:!0});var NF=a(fd);Zk=i(NF,"PreTrainedModel"),NF.forEach(t),ev=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),tv=p(ro),pr=s(ro,"P",{});var cu=a(pr);ov=i(cu,"This model is also a PyTorch "),hr=s(cu,"A",{href:!0,rel:!0});var IF=a(hr);nv=i(IF,"torch.nn.Module"),IF.forEach(t),sv=i(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(t),av=p(ro),Re=s(ro,"DIV",{class:!0});var pt=a(Re);y(mr.$$.fragment,pt),rv=p(pt),jo=s(pt,"P",{});var Bd=a(jo);iv=i(Bd,"The "),ud=s(Bd,"A",{href:!0});var SF=a(ud);lv=i(SF,"ElectraForSequenceClassification"),SF.forEach(t),dv=i(Bd," forward method, overrides the "),Qc=s(Bd,"CODE",{});var DF=a(Qc);cv=i(DF,"__call__"),DF.forEach(t),pv=i(Bd," special method."),Bd.forEach(t),hv=p(pt),y(In.$$.fragment,pt),mv=p(pt),y(Sn.$$.fragment,pt),fv=p(pt),y(Dn.$$.fragment,pt),uv=p(pt),y(Wn.$$.fragment,pt),gv=p(pt),y(Un.$$.fragment,pt),pt.forEach(t),ro.forEach(t),cf=p(o),qo=s(o,"H2",{class:!0});var pu=a(qo);Rn=s(pu,"A",{id:!0,class:!0,href:!0});var WF=a(Rn);Vc=s(WF,"SPAN",{});var UF=a(Vc);y(fr.$$.fragment,UF),UF.forEach(t),WF.forEach(t),_v=p(pu),Bc=s(pu,"SPAN",{});var RF=a(Bc);kv=i(RF,"ElectraForMultipleChoice"),RF.forEach(t),pu.forEach(t),pf=p(o),ot=s(o,"DIV",{class:!0});var io=a(ot);y(ur.$$.fragment,io),vv=p(io),Kc=s(io,"P",{});var HF=a(Kc);Tv=i(HF,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),HF.forEach(t),bv=p(io),gr=s(io,"P",{});var hu=a(gr);yv=i(hu,"This model inherits from "),gd=s(hu,"A",{href:!0});var QF=a(gd);Ev=i(QF,"PreTrainedModel"),QF.forEach(t),wv=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),$v=p(io),_r=s(io,"P",{});var mu=a(_r);Fv=i(mu,"This model is also a PyTorch "),kr=s(mu,"A",{href:!0,rel:!0});var VF=a(kr);xv=i(VF,"torch.nn.Module"),VF.forEach(t),Mv=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),zv=p(io),Ft=s(io,"DIV",{class:!0});var sa=a(Ft);y(vr.$$.fragment,sa),Cv=p(sa),Po=s(sa,"P",{});var Kd=a(Po);jv=i(Kd,"The "),_d=s(Kd,"A",{href:!0});var BF=a(_d);qv=i(BF,"ElectraForMultipleChoice"),BF.forEach(t),Pv=i(Kd," forward method, overrides the "),Jc=s(Kd,"CODE",{});var KF=a(Jc);Av=i(KF,"__call__"),KF.forEach(t),Ov=i(Kd," special method."),Kd.forEach(t),Lv=p(sa),y(Hn.$$.fragment,sa),Nv=p(sa),y(Qn.$$.fragment,sa),sa.forEach(t),io.forEach(t),hf=p(o),Ao=s(o,"H2",{class:!0});var fu=a(Ao);Vn=s(fu,"A",{id:!0,class:!0,href:!0});var JF=a(Vn);Gc=s(JF,"SPAN",{});var GF=a(Gc);y(Tr.$$.fragment,GF),GF.forEach(t),JF.forEach(t),Iv=p(fu),Xc=s(fu,"SPAN",{});var XF=a(Xc);Sv=i(XF,"ElectraForTokenClassification"),XF.forEach(t),fu.forEach(t),mf=p(o),Ve=s(o,"DIV",{class:!0});var St=a(Ve);y(br.$$.fragment,St),Dv=p(St),Yc=s(St,"P",{});var YF=a(Yc);Wv=i(YF,"Electra model with a token classification head on top."),YF.forEach(t),Uv=p(St),Zc=s(St,"P",{});var ZF=a(Zc);Rv=i(ZF,"Both the discriminator and generator may be loaded into this model."),ZF.forEach(t),Hv=p(St),yr=s(St,"P",{});var uu=a(yr);Qv=i(uu,"This model inherits from "),kd=s(uu,"A",{href:!0});var e6=a(kd);Vv=i(e6,"PreTrainedModel"),e6.forEach(t),Bv=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),Kv=p(St),Er=s(St,"P",{});var gu=a(Er);Jv=i(gu,"This model is also a PyTorch "),wr=s(gu,"A",{href:!0,rel:!0});var t6=a(wr);Gv=i(t6,"torch.nn.Module"),t6.forEach(t),Xv=i(gu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gu.forEach(t),Yv=p(St),at=s(St,"DIV",{class:!0});var lo=a(at);y($r.$$.fragment,lo),Zv=p(lo),Oo=s(lo,"P",{});var Jd=a(Oo);eT=i(Jd,"The "),vd=s(Jd,"A",{href:!0});var o6=a(vd);tT=i(o6,"ElectraForTokenClassification"),o6.forEach(t),oT=i(Jd," forward method, overrides the "),ep=s(Jd,"CODE",{});var n6=a(ep);nT=i(n6,"__call__"),n6.forEach(t),sT=i(Jd," special method."),Jd.forEach(t),aT=p(lo),y(Bn.$$.fragment,lo),rT=p(lo),y(Kn.$$.fragment,lo),iT=p(lo),y(Jn.$$.fragment,lo),lo.forEach(t),St.forEach(t),ff=p(o),Lo=s(o,"H2",{class:!0});var _u=a(Lo);Gn=s(_u,"A",{id:!0,class:!0,href:!0});var s6=a(Gn);tp=s(s6,"SPAN",{});var a6=a(tp);y(Fr.$$.fragment,a6),a6.forEach(t),s6.forEach(t),lT=p(_u),op=s(_u,"SPAN",{});var r6=a(op);dT=i(r6,"ElectraForQuestionAnswering"),r6.forEach(t),_u.forEach(t),uf=p(o),nt=s(o,"DIV",{class:!0});var co=a(nt);y(xr.$$.fragment,co),cT=p(co),No=s(co,"P",{});var Gd=a(No);pT=i(Gd,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),np=s(Gd,"CODE",{});var i6=a(np);hT=i(i6,"span start logits"),i6.forEach(t),mT=i(Gd," and "),sp=s(Gd,"CODE",{});var l6=a(sp);fT=i(l6,"span end logits"),l6.forEach(t),uT=i(Gd,")."),Gd.forEach(t),gT=p(co),Mr=s(co,"P",{});var ku=a(Mr);_T=i(ku,"This model inherits from "),Td=s(ku,"A",{href:!0});var d6=a(Td);kT=i(d6,"PreTrainedModel"),d6.forEach(t),vT=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),TT=p(co),zr=s(co,"P",{});var vu=a(zr);bT=i(vu,"This model is also a PyTorch "),Cr=s(vu,"A",{href:!0,rel:!0});var c6=a(Cr);yT=i(c6,"torch.nn.Module"),c6.forEach(t),ET=i(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(t),wT=p(co),rt=s(co,"DIV",{class:!0});var po=a(rt);y(jr.$$.fragment,po),$T=p(po),Io=s(po,"P",{});var Xd=a(Io);FT=i(Xd,"The "),bd=s(Xd,"A",{href:!0});var p6=a(bd);xT=i(p6,"ElectraForQuestionAnswering"),p6.forEach(t),MT=i(Xd," forward method, overrides the "),ap=s(Xd,"CODE",{});var h6=a(ap);zT=i(h6,"__call__"),h6.forEach(t),CT=i(Xd," special method."),Xd.forEach(t),jT=p(po),y(Xn.$$.fragment,po),qT=p(po),y(Yn.$$.fragment,po),PT=p(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),gf=p(o),So=s(o,"H2",{class:!0});var Tu=a(So);es=s(Tu,"A",{id:!0,class:!0,href:!0});var m6=a(es);rp=s(m6,"SPAN",{});var f6=a(rp);y(qr.$$.fragment,f6),f6.forEach(t),m6.forEach(t),AT=p(Tu),ip=s(Tu,"SPAN",{});var u6=a(ip);OT=i(u6,"TFElectraModel"),u6.forEach(t),Tu.forEach(t),_f=p(o),Be=s(o,"DIV",{class:!0});var Dt=a(Be);y(Pr.$$.fragment,Dt),LT=p(Dt),lp=s(Dt,"P",{});var g6=a(lp);NT=i(g6,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),g6.forEach(t),IT=p(Dt),Ar=s(Dt,"P",{});var bu=a(Ar);ST=i(bu,"This model inherits from "),yd=s(bu,"A",{href:!0});var _6=a(yd);DT=i(_6,"TFPreTrainedModel"),_6.forEach(t),WT=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu.forEach(t),UT=p(Dt),Or=s(Dt,"P",{});var yu=a(Or);RT=i(yu,"This model is also a "),Lr=s(yu,"A",{href:!0,rel:!0});var k6=a(Lr);HT=i(k6,"tf.keras.Model"),k6.forEach(t),QT=i(yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yu.forEach(t),VT=p(Dt),y(ts.$$.fragment,Dt),BT=p(Dt),xt=s(Dt,"DIV",{class:!0});var aa=a(xt);y(Nr.$$.fragment,aa),KT=p(aa),Do=s(aa,"P",{});var Yd=a(Do);JT=i(Yd,"The "),Ed=s(Yd,"A",{href:!0});var v6=a(Ed);GT=i(v6,"TFElectraModel"),v6.forEach(t),XT=i(Yd," forward method, overrides the "),dp=s(Yd,"CODE",{});var T6=a(dp);YT=i(T6,"__call__"),T6.forEach(t),ZT=i(Yd," special method."),Yd.forEach(t),eb=p(aa),y(os.$$.fragment,aa),tb=p(aa),y(ns.$$.fragment,aa),aa.forEach(t),Dt.forEach(t),kf=p(o),Wo=s(o,"H2",{class:!0});var Eu=a(Wo);ss=s(Eu,"A",{id:!0,class:!0,href:!0});var b6=a(ss);cp=s(b6,"SPAN",{});var y6=a(cp);y(Ir.$$.fragment,y6),y6.forEach(t),b6.forEach(t),ob=p(Eu),pp=s(Eu,"SPAN",{});var E6=a(pp);nb=i(E6,"TFElectraForPreTraining"),E6.forEach(t),Eu.forEach(t),vf=p(o),Oe=s(o,"DIV",{class:!0});var ht=a(Oe);y(Sr.$$.fragment,ht),sb=p(ht),hp=s(ht,"P",{});var w6=a(hp);ab=i(w6,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),w6.forEach(t),rb=p(ht),mp=s(ht,"P",{});var $6=a(mp);ib=i($6,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),$6.forEach(t),lb=p(ht),Dr=s(ht,"P",{});var wu=a(Dr);db=i(wu,"This model inherits from "),wd=s(wu,"A",{href:!0});var F6=a(wd);cb=i(F6,"TFPreTrainedModel"),F6.forEach(t),pb=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),hb=p(ht),Wr=s(ht,"P",{});var $u=a(Wr);mb=i($u,"This model is also a "),Ur=s($u,"A",{href:!0,rel:!0});var x6=a(Ur);fb=i(x6,"tf.keras.Model"),x6.forEach(t),ub=i($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(t),gb=p(ht),y(as.$$.fragment,ht),_b=p(ht),Mt=s(ht,"DIV",{class:!0});var ra=a(Mt);y(Rr.$$.fragment,ra),kb=p(ra),Uo=s(ra,"P",{});var Zd=a(Uo);vb=i(Zd,"The "),$d=s(Zd,"A",{href:!0});var M6=a($d);Tb=i(M6,"TFElectraForPreTraining"),M6.forEach(t),bb=i(Zd," forward method, overrides the "),fp=s(Zd,"CODE",{});var z6=a(fp);yb=i(z6,"__call__"),z6.forEach(t),Eb=i(Zd," special method."),Zd.forEach(t),wb=p(ra),y(rs.$$.fragment,ra),$b=p(ra),y(is.$$.fragment,ra),ra.forEach(t),ht.forEach(t),Tf=p(o),Ro=s(o,"H2",{class:!0});var Fu=a(Ro);ls=s(Fu,"A",{id:!0,class:!0,href:!0});var C6=a(ls);up=s(C6,"SPAN",{});var j6=a(up);y(Hr.$$.fragment,j6),j6.forEach(t),C6.forEach(t),Fb=p(Fu),gp=s(Fu,"SPAN",{});var q6=a(gp);xb=i(q6,"TFElectraForMaskedLM"),q6.forEach(t),Fu.forEach(t),bf=p(o),Le=s(o,"DIV",{class:!0});var mt=a(Le);y(Qr.$$.fragment,mt),Mb=p(mt),_p=s(mt,"P",{});var P6=a(_p);zb=i(P6,"Electra model with a language modeling head on top."),P6.forEach(t),Cb=p(mt),kp=s(mt,"P",{});var A6=a(kp);jb=i(A6,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),A6.forEach(t),qb=p(mt),Vr=s(mt,"P",{});var xu=a(Vr);Pb=i(xu,"This model inherits from "),Fd=s(xu,"A",{href:!0});var O6=a(Fd);Ab=i(O6,"TFPreTrainedModel"),O6.forEach(t),Ob=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Lb=p(mt),Br=s(mt,"P",{});var Mu=a(Br);Nb=i(Mu,"This model is also a "),Kr=s(Mu,"A",{href:!0,rel:!0});var L6=a(Kr);Ib=i(L6,"tf.keras.Model"),L6.forEach(t),Sb=i(Mu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mu.forEach(t),Db=p(mt),y(ds.$$.fragment,mt),Wb=p(mt),it=s(mt,"DIV",{class:!0});var ho=a(it);y(Jr.$$.fragment,ho),Ub=p(ho),Ho=s(ho,"P",{});var ec=a(Ho);Rb=i(ec,"The "),xd=s(ec,"A",{href:!0});var N6=a(xd);Hb=i(N6,"TFElectraForMaskedLM"),N6.forEach(t),Qb=i(ec," forward method, overrides the "),vp=s(ec,"CODE",{});var I6=a(vp);Vb=i(I6,"__call__"),I6.forEach(t),Bb=i(ec," special method."),ec.forEach(t),Kb=p(ho),y(cs.$$.fragment,ho),Jb=p(ho),y(ps.$$.fragment,ho),Gb=p(ho),y(hs.$$.fragment,ho),ho.forEach(t),mt.forEach(t),yf=p(o),Qo=s(o,"H2",{class:!0});var zu=a(Qo);ms=s(zu,"A",{id:!0,class:!0,href:!0});var S6=a(ms);Tp=s(S6,"SPAN",{});var D6=a(Tp);y(Gr.$$.fragment,D6),D6.forEach(t),S6.forEach(t),Xb=p(zu),bp=s(zu,"SPAN",{});var W6=a(bp);Yb=i(W6,"TFElectraForSequenceClassification"),W6.forEach(t),zu.forEach(t),Ef=p(o),Ke=s(o,"DIV",{class:!0});var Wt=a(Ke);y(Xr.$$.fragment,Wt),Zb=p(Wt),yp=s(Wt,"P",{});var U6=a(yp);ey=i(U6,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),U6.forEach(t),ty=p(Wt),Yr=s(Wt,"P",{});var Cu=a(Yr);oy=i(Cu,"This model inherits from "),Md=s(Cu,"A",{href:!0});var R6=a(Md);ny=i(R6,"TFPreTrainedModel"),R6.forEach(t),sy=i(Cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu.forEach(t),ay=p(Wt),Zr=s(Wt,"P",{});var ju=a(Zr);ry=i(ju,"This model is also a "),ei=s(ju,"A",{href:!0,rel:!0});var H6=a(ei);iy=i(H6,"tf.keras.Model"),H6.forEach(t),ly=i(ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju.forEach(t),dy=p(Wt),y(fs.$$.fragment,Wt),cy=p(Wt),lt=s(Wt,"DIV",{class:!0});var mo=a(lt);y(ti.$$.fragment,mo),py=p(mo),Vo=s(mo,"P",{});var tc=a(Vo);hy=i(tc,"The "),zd=s(tc,"A",{href:!0});var Q6=a(zd);my=i(Q6,"TFElectraForSequenceClassification"),Q6.forEach(t),fy=i(tc," forward method, overrides the "),Ep=s(tc,"CODE",{});var V6=a(Ep);uy=i(V6,"__call__"),V6.forEach(t),gy=i(tc," special method."),tc.forEach(t),_y=p(mo),y(us.$$.fragment,mo),ky=p(mo),y(gs.$$.fragment,mo),vy=p(mo),y(_s.$$.fragment,mo),mo.forEach(t),Wt.forEach(t),wf=p(o),Bo=s(o,"H2",{class:!0});var qu=a(Bo);ks=s(qu,"A",{id:!0,class:!0,href:!0});var B6=a(ks);wp=s(B6,"SPAN",{});var K6=a(wp);y(oi.$$.fragment,K6),K6.forEach(t),B6.forEach(t),Ty=p(qu),$p=s(qu,"SPAN",{});var J6=a($p);by=i(J6,"TFElectraForMultipleChoice"),J6.forEach(t),qu.forEach(t),$f=p(o),Je=s(o,"DIV",{class:!0});var Ut=a(Je);y(ni.$$.fragment,Ut),yy=p(Ut),Fp=s(Ut,"P",{});var G6=a(Fp);Ey=i(G6,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),G6.forEach(t),wy=p(Ut),si=s(Ut,"P",{});var Pu=a(si);$y=i(Pu,"This model inherits from "),Cd=s(Pu,"A",{href:!0});var X6=a(Cd);Fy=i(X6,"TFPreTrainedModel"),X6.forEach(t),xy=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),My=p(Ut),ai=s(Ut,"P",{});var Au=a(ai);zy=i(Au,"This model is also a "),ri=s(Au,"A",{href:!0,rel:!0});var Y6=a(ri);Cy=i(Y6,"tf.keras.Model"),Y6.forEach(t),jy=i(Au,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au.forEach(t),qy=p(Ut),y(vs.$$.fragment,Ut),Py=p(Ut),zt=s(Ut,"DIV",{class:!0});var ia=a(zt);y(ii.$$.fragment,ia),Ay=p(ia),Ko=s(ia,"P",{});var oc=a(Ko);Oy=i(oc,"The "),jd=s(oc,"A",{href:!0});var Z6=a(jd);Ly=i(Z6,"TFElectraForMultipleChoice"),Z6.forEach(t),Ny=i(oc," forward method, overrides the "),xp=s(oc,"CODE",{});var e0=a(xp);Iy=i(e0,"__call__"),e0.forEach(t),Sy=i(oc," special method."),oc.forEach(t),Dy=p(ia),y(Ts.$$.fragment,ia),Wy=p(ia),y(bs.$$.fragment,ia),ia.forEach(t),Ut.forEach(t),Ff=p(o),Jo=s(o,"H2",{class:!0});var Ou=a(Jo);ys=s(Ou,"A",{id:!0,class:!0,href:!0});var t0=a(ys);Mp=s(t0,"SPAN",{});var o0=a(Mp);y(li.$$.fragment,o0),o0.forEach(t),t0.forEach(t),Uy=p(Ou),zp=s(Ou,"SPAN",{});var n0=a(zp);Ry=i(n0,"TFElectraForTokenClassification"),n0.forEach(t),Ou.forEach(t),xf=p(o),Ne=s(o,"DIV",{class:!0});var ft=a(Ne);y(di.$$.fragment,ft),Hy=p(ft),Cp=s(ft,"P",{});var s0=a(Cp);Qy=i(s0,"Electra model with a token classification head on top."),s0.forEach(t),Vy=p(ft),jp=s(ft,"P",{});var a0=a(jp);By=i(a0,"Both the discriminator and generator may be loaded into this model."),a0.forEach(t),Ky=p(ft),ci=s(ft,"P",{});var Lu=a(ci);Jy=i(Lu,"This model inherits from "),qd=s(Lu,"A",{href:!0});var r0=a(qd);Gy=i(r0,"TFPreTrainedModel"),r0.forEach(t),Xy=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Yy=p(ft),pi=s(ft,"P",{});var Nu=a(pi);Zy=i(Nu,"This model is also a "),hi=s(Nu,"A",{href:!0,rel:!0});var i0=a(hi);e1=i(i0,"tf.keras.Model"),i0.forEach(t),t1=i(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(t),o1=p(ft),y(Es.$$.fragment,ft),n1=p(ft),dt=s(ft,"DIV",{class:!0});var fo=a(dt);y(mi.$$.fragment,fo),s1=p(fo),Go=s(fo,"P",{});var nc=a(Go);a1=i(nc,"The "),Pd=s(nc,"A",{href:!0});var l0=a(Pd);r1=i(l0,"TFElectraForTokenClassification"),l0.forEach(t),i1=i(nc," forward method, overrides the "),qp=s(nc,"CODE",{});var d0=a(qp);l1=i(d0,"__call__"),d0.forEach(t),d1=i(nc," special method."),nc.forEach(t),c1=p(fo),y(ws.$$.fragment,fo),p1=p(fo),y($s.$$.fragment,fo),h1=p(fo),y(Fs.$$.fragment,fo),fo.forEach(t),ft.forEach(t),Mf=p(o),Xo=s(o,"H2",{class:!0});var Iu=a(Xo);xs=s(Iu,"A",{id:!0,class:!0,href:!0});var c0=a(xs);Pp=s(c0,"SPAN",{});var p0=a(Pp);y(fi.$$.fragment,p0),p0.forEach(t),c0.forEach(t),m1=p(Iu),Ap=s(Iu,"SPAN",{});var h0=a(Ap);f1=i(h0,"TFElectraForQuestionAnswering"),h0.forEach(t),Iu.forEach(t),zf=p(o),Ge=s(o,"DIV",{class:!0});var Rt=a(Ge);y(ui.$$.fragment,Rt),u1=p(Rt),Yo=s(Rt,"P",{});var sc=a(Yo);g1=i(sc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(sc,"CODE",{});var m0=a(Op);_1=i(m0,"span start logits"),m0.forEach(t),k1=i(sc," and "),Lp=s(sc,"CODE",{});var f0=a(Lp);v1=i(f0,"span end logits"),f0.forEach(t),T1=i(sc,")."),sc.forEach(t),b1=p(Rt),gi=s(Rt,"P",{});var Su=a(gi);y1=i(Su,"This model inherits from "),Ad=s(Su,"A",{href:!0});var u0=a(Ad);E1=i(u0,"TFPreTrainedModel"),u0.forEach(t),w1=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su.forEach(t),$1=p(Rt),_i=s(Rt,"P",{});var Du=a(_i);F1=i(Du,"This model is also a "),ki=s(Du,"A",{href:!0,rel:!0});var g0=a(ki);x1=i(g0,"tf.keras.Model"),g0.forEach(t),M1=i(Du,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du.forEach(t),z1=p(Rt),y(Ms.$$.fragment,Rt),C1=p(Rt),ct=s(Rt,"DIV",{class:!0});var uo=a(ct);y(vi.$$.fragment,uo),j1=p(uo),Zo=s(uo,"P",{});var ac=a(Zo);q1=i(ac,"The "),Od=s(ac,"A",{href:!0});var _0=a(Od);P1=i(_0,"TFElectraForQuestionAnswering"),_0.forEach(t),A1=i(ac," forward method, overrides the "),Np=s(ac,"CODE",{});var k0=a(Np);O1=i(k0,"__call__"),k0.forEach(t),L1=i(ac," special method."),ac.forEach(t),N1=p(uo),y(zs.$$.fragment,uo),I1=p(uo),y(Cs.$$.fragment,uo),S1=p(uo),y(js.$$.fragment,uo),uo.forEach(t),Rt.forEach(t),Cf=p(o),en=s(o,"H2",{class:!0});var Wu=a(en);qs=s(Wu,"A",{id:!0,class:!0,href:!0});var v0=a(qs);Ip=s(v0,"SPAN",{});var T0=a(Ip);y(Ti.$$.fragment,T0),T0.forEach(t),v0.forEach(t),D1=p(Wu),Sp=s(Wu,"SPAN",{});var b0=a(Sp);W1=i(b0,"FlaxElectraModel"),b0.forEach(t),Wu.forEach(t),jf=p(o),Ie=s(o,"DIV",{class:!0});var ut=a(Ie);y(bi.$$.fragment,ut),U1=p(ut),Dp=s(ut,"P",{});var y0=a(Dp);R1=i(y0,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),y0.forEach(t),H1=p(ut),yi=s(ut,"P",{});var Uu=a(yi);Q1=i(Uu,"This model inherits from "),Ld=s(Uu,"A",{href:!0});var E0=a(Ld);V1=i(E0,"FlaxPreTrainedModel"),E0.forEach(t),B1=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uu.forEach(t),K1=p(ut),Ei=s(ut,"P",{});var Ru=a(Ei);J1=i(Ru,`This model is also a Flax Linen
`),wi=s(Ru,"A",{href:!0,rel:!0});var w0=a(wi);G1=i(w0,"flax.nn.Module"),w0.forEach(t),X1=i(Ru,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ru.forEach(t),Y1=p(ut),Wp=s(ut,"P",{});var $0=a(Wp);Z1=i($0,"Finally, this model supports inherent JAX features such as:"),$0.forEach(t),eE=p(ut),Qt=s(ut,"UL",{});var la=a(Qt);Up=s(la,"LI",{});var F0=a(Up);$i=s(F0,"A",{href:!0,rel:!0});var x0=a($i);tE=i(x0,"Just-In-Time (JIT) compilation"),x0.forEach(t),F0.forEach(t),oE=p(la),Rp=s(la,"LI",{});var M0=a(Rp);Fi=s(M0,"A",{href:!0,rel:!0});var z0=a(Fi);nE=i(z0,"Automatic Differentiation"),z0.forEach(t),M0.forEach(t),sE=p(la),Hp=s(la,"LI",{});var C0=a(Hp);xi=s(C0,"A",{href:!0,rel:!0});var j0=a(xi);aE=i(j0,"Vectorization"),j0.forEach(t),C0.forEach(t),rE=p(la),Qp=s(la,"LI",{});var q0=a(Qp);Mi=s(q0,"A",{href:!0,rel:!0});var P0=a(Mi);iE=i(P0,"Parallelization"),P0.forEach(t),q0.forEach(t),la.forEach(t),lE=p(ut),Ct=s(ut,"DIV",{class:!0});var da=a(Ct);y(zi.$$.fragment,da),dE=p(da),tn=s(da,"P",{});var rc=a(tn);cE=i(rc,"The "),Vp=s(rc,"CODE",{});var A0=a(Vp);pE=i(A0,"FlaxElectraPreTrainedModel"),A0.forEach(t),hE=i(rc," forward method, overrides the "),Bp=s(rc,"CODE",{});var O0=a(Bp);mE=i(O0,"__call__"),O0.forEach(t),fE=i(rc," special method."),rc.forEach(t),uE=p(da),y(Ps.$$.fragment,da),gE=p(da),y(As.$$.fragment,da),da.forEach(t),ut.forEach(t),qf=p(o),on=s(o,"H2",{class:!0});var Hu=a(on);Os=s(Hu,"A",{id:!0,class:!0,href:!0});var L0=a(Os);Kp=s(L0,"SPAN",{});var N0=a(Kp);y(Ci.$$.fragment,N0),N0.forEach(t),L0.forEach(t),_E=p(Hu),Jp=s(Hu,"SPAN",{});var I0=a(Jp);kE=i(I0,"FlaxElectraForPreTraining"),I0.forEach(t),Hu.forEach(t),Pf=p(o),Pe=s(o,"DIV",{class:!0});var Xe=a(Pe);y(ji.$$.fragment,Xe),vE=p(Xe),Gp=s(Xe,"P",{});var S0=a(Gp);TE=i(S0,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),S0.forEach(t),bE=p(Xe),Xp=s(Xe,"P",{});var D0=a(Xp);yE=i(D0,"It is recommended to load the discriminator checkpoint into that model."),D0.forEach(t),EE=p(Xe),qi=s(Xe,"P",{});var Qu=a(qi);wE=i(Qu,"This model inherits from "),Nd=s(Qu,"A",{href:!0});var W0=a(Nd);$E=i(W0,"FlaxPreTrainedModel"),W0.forEach(t),FE=i(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qu.forEach(t),xE=p(Xe),Pi=s(Xe,"P",{});var Vu=a(Pi);ME=i(Vu,`This model is also a Flax Linen
`),Ai=s(Vu,"A",{href:!0,rel:!0});var U0=a(Ai);zE=i(U0,"flax.nn.Module"),U0.forEach(t),CE=i(Vu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vu.forEach(t),jE=p(Xe),Yp=s(Xe,"P",{});var R0=a(Yp);qE=i(R0,"Finally, this model supports inherent JAX features such as:"),R0.forEach(t),PE=p(Xe),Vt=s(Xe,"UL",{});var ca=a(Vt);Zp=s(ca,"LI",{});var H0=a(Zp);Oi=s(H0,"A",{href:!0,rel:!0});var Q0=a(Oi);AE=i(Q0,"Just-In-Time (JIT) compilation"),Q0.forEach(t),H0.forEach(t),OE=p(ca),eh=s(ca,"LI",{});var V0=a(eh);Li=s(V0,"A",{href:!0,rel:!0});var B0=a(Li);LE=i(B0,"Automatic Differentiation"),B0.forEach(t),V0.forEach(t),NE=p(ca),th=s(ca,"LI",{});var K0=a(th);Ni=s(K0,"A",{href:!0,rel:!0});var J0=a(Ni);IE=i(J0,"Vectorization"),J0.forEach(t),K0.forEach(t),SE=p(ca),oh=s(ca,"LI",{});var G0=a(oh);Ii=s(G0,"A",{href:!0,rel:!0});var X0=a(Ii);DE=i(X0,"Parallelization"),X0.forEach(t),G0.forEach(t),ca.forEach(t),WE=p(Xe),jt=s(Xe,"DIV",{class:!0});var pa=a(jt);y(Si.$$.fragment,pa),UE=p(pa),nn=s(pa,"P",{});var ic=a(nn);RE=i(ic,"The "),nh=s(ic,"CODE",{});var Y0=a(nh);HE=i(Y0,"FlaxElectraPreTrainedModel"),Y0.forEach(t),QE=i(ic," forward method, overrides the "),sh=s(ic,"CODE",{});var Z0=a(sh);VE=i(Z0,"__call__"),Z0.forEach(t),BE=i(ic," special method."),ic.forEach(t),KE=p(pa),y(Ls.$$.fragment,pa),JE=p(pa),y(Ns.$$.fragment,pa),pa.forEach(t),Xe.forEach(t),Af=p(o),sn=s(o,"H2",{class:!0});var Bu=a(sn);Is=s(Bu,"A",{id:!0,class:!0,href:!0});var ex=a(Is);ah=s(ex,"SPAN",{});var tx=a(ah);y(Di.$$.fragment,tx),tx.forEach(t),ex.forEach(t),GE=p(Bu),rh=s(Bu,"SPAN",{});var ox=a(rh);XE=i(ox,"FlaxElectraForMaskedLM"),ox.forEach(t),Bu.forEach(t),Of=p(o),Se=s(o,"DIV",{class:!0});var gt=a(Se);y(Wi.$$.fragment,gt),YE=p(gt),Ui=s(gt,"P",{});var Ku=a(Ui);ZE=i(Ku,"Electra Model with a "),ih=s(Ku,"CODE",{});var nx=a(ih);ew=i(nx,"language modeling"),nx.forEach(t),tw=i(Ku," head on top."),Ku.forEach(t),ow=p(gt),Ri=s(gt,"P",{});var Ju=a(Ri);nw=i(Ju,"This model inherits from "),Id=s(Ju,"A",{href:!0});var sx=a(Id);sw=i(sx,"FlaxPreTrainedModel"),sx.forEach(t),aw=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ju.forEach(t),rw=p(gt),Hi=s(gt,"P",{});var Gu=a(Hi);iw=i(Gu,`This model is also a Flax Linen
`),Qi=s(Gu,"A",{href:!0,rel:!0});var ax=a(Qi);lw=i(ax,"flax.nn.Module"),ax.forEach(t),dw=i(Gu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gu.forEach(t),cw=p(gt),lh=s(gt,"P",{});var rx=a(lh);pw=i(rx,"Finally, this model supports inherent JAX features such as:"),rx.forEach(t),hw=p(gt),Bt=s(gt,"UL",{});var ha=a(Bt);dh=s(ha,"LI",{});var ix=a(dh);Vi=s(ix,"A",{href:!0,rel:!0});var lx=a(Vi);mw=i(lx,"Just-In-Time (JIT) compilation"),lx.forEach(t),ix.forEach(t),fw=p(ha),ch=s(ha,"LI",{});var dx=a(ch);Bi=s(dx,"A",{href:!0,rel:!0});var cx=a(Bi);uw=i(cx,"Automatic Differentiation"),cx.forEach(t),dx.forEach(t),gw=p(ha),ph=s(ha,"LI",{});var px=a(ph);Ki=s(px,"A",{href:!0,rel:!0});var hx=a(Ki);_w=i(hx,"Vectorization"),hx.forEach(t),px.forEach(t),kw=p(ha),hh=s(ha,"LI",{});var mx=a(hh);Ji=s(mx,"A",{href:!0,rel:!0});var fx=a(Ji);vw=i(fx,"Parallelization"),fx.forEach(t),mx.forEach(t),ha.forEach(t),Tw=p(gt),qt=s(gt,"DIV",{class:!0});var ma=a(qt);y(Gi.$$.fragment,ma),bw=p(ma),an=s(ma,"P",{});var lc=a(an);yw=i(lc,"The "),mh=s(lc,"CODE",{});var ux=a(mh);Ew=i(ux,"FlaxElectraPreTrainedModel"),ux.forEach(t),ww=i(lc," forward method, overrides the "),fh=s(lc,"CODE",{});var gx=a(fh);$w=i(gx,"__call__"),gx.forEach(t),Fw=i(lc," special method."),lc.forEach(t),xw=p(ma),y(Ss.$$.fragment,ma),Mw=p(ma),y(Ds.$$.fragment,ma),ma.forEach(t),gt.forEach(t),Lf=p(o),rn=s(o,"H2",{class:!0});var Xu=a(rn);Ws=s(Xu,"A",{id:!0,class:!0,href:!0});var _x=a(Ws);uh=s(_x,"SPAN",{});var kx=a(uh);y(Xi.$$.fragment,kx),kx.forEach(t),_x.forEach(t),zw=p(Xu),gh=s(Xu,"SPAN",{});var vx=a(gh);Cw=i(vx,"FlaxElectraForSequenceClassification"),vx.forEach(t),Xu.forEach(t),Nf=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(Yi.$$.fragment,_t),jw=p(_t),_h=s(_t,"P",{});var Tx=a(_h);qw=i(Tx,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tx.forEach(t),Pw=p(_t),Zi=s(_t,"P",{});var Yu=a(Zi);Aw=i(Yu,"This model inherits from "),Sd=s(Yu,"A",{href:!0});var bx=a(Sd);Ow=i(bx,"FlaxPreTrainedModel"),bx.forEach(t),Lw=i(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yu.forEach(t),Nw=p(_t),el=s(_t,"P",{});var Zu=a(el);Iw=i(Zu,`This model is also a Flax Linen
`),tl=s(Zu,"A",{href:!0,rel:!0});var yx=a(tl);Sw=i(yx,"flax.nn.Module"),yx.forEach(t),Dw=i(Zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zu.forEach(t),Ww=p(_t),kh=s(_t,"P",{});var Ex=a(kh);Uw=i(Ex,"Finally, this model supports inherent JAX features such as:"),Ex.forEach(t),Rw=p(_t),Kt=s(_t,"UL",{});var fa=a(Kt);vh=s(fa,"LI",{});var wx=a(vh);ol=s(wx,"A",{href:!0,rel:!0});var $x=a(ol);Hw=i($x,"Just-In-Time (JIT) compilation"),$x.forEach(t),wx.forEach(t),Qw=p(fa),Th=s(fa,"LI",{});var Fx=a(Th);nl=s(Fx,"A",{href:!0,rel:!0});var xx=a(nl);Vw=i(xx,"Automatic Differentiation"),xx.forEach(t),Fx.forEach(t),Bw=p(fa),bh=s(fa,"LI",{});var Mx=a(bh);sl=s(Mx,"A",{href:!0,rel:!0});var zx=a(sl);Kw=i(zx,"Vectorization"),zx.forEach(t),Mx.forEach(t),Jw=p(fa),yh=s(fa,"LI",{});var Cx=a(yh);al=s(Cx,"A",{href:!0,rel:!0});var jx=a(al);Gw=i(jx,"Parallelization"),jx.forEach(t),Cx.forEach(t),fa.forEach(t),Xw=p(_t),Pt=s(_t,"DIV",{class:!0});var ua=a(Pt);y(rl.$$.fragment,ua),Yw=p(ua),ln=s(ua,"P",{});var dc=a(ln);Zw=i(dc,"The "),Eh=s(dc,"CODE",{});var qx=a(Eh);e$=i(qx,"FlaxElectraPreTrainedModel"),qx.forEach(t),t$=i(dc," forward method, overrides the "),wh=s(dc,"CODE",{});var Px=a(wh);o$=i(Px,"__call__"),Px.forEach(t),n$=i(dc," special method."),dc.forEach(t),s$=p(ua),y(Us.$$.fragment,ua),a$=p(ua),y(Rs.$$.fragment,ua),ua.forEach(t),_t.forEach(t),If=p(o),dn=s(o,"H2",{class:!0});var eg=a(dn);Hs=s(eg,"A",{id:!0,class:!0,href:!0});var Ax=a(Hs);$h=s(Ax,"SPAN",{});var Ox=a($h);y(il.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),r$=p(eg),Fh=s(eg,"SPAN",{});var Lx=a(Fh);i$=i(Lx,"FlaxElectraForMultipleChoice"),Lx.forEach(t),eg.forEach(t),Sf=p(o),We=s(o,"DIV",{class:!0});var kt=a(We);y(ll.$$.fragment,kt),l$=p(kt),xh=s(kt,"P",{});var Nx=a(xh);d$=i(Nx,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Nx.forEach(t),c$=p(kt),dl=s(kt,"P",{});var tg=a(dl);p$=i(tg,"This model inherits from "),Dd=s(tg,"A",{href:!0});var Ix=a(Dd);h$=i(Ix,"FlaxPreTrainedModel"),Ix.forEach(t),m$=i(tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tg.forEach(t),f$=p(kt),cl=s(kt,"P",{});var og=a(cl);u$=i(og,`This model is also a Flax Linen
`),pl=s(og,"A",{href:!0,rel:!0});var Sx=a(pl);g$=i(Sx,"flax.nn.Module"),Sx.forEach(t),_$=i(og,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og.forEach(t),k$=p(kt),Mh=s(kt,"P",{});var Dx=a(Mh);v$=i(Dx,"Finally, this model supports inherent JAX features such as:"),Dx.forEach(t),T$=p(kt),Jt=s(kt,"UL",{});var ga=a(Jt);zh=s(ga,"LI",{});var Wx=a(zh);hl=s(Wx,"A",{href:!0,rel:!0});var Ux=a(hl);b$=i(Ux,"Just-In-Time (JIT) compilation"),Ux.forEach(t),Wx.forEach(t),y$=p(ga),Ch=s(ga,"LI",{});var Rx=a(Ch);ml=s(Rx,"A",{href:!0,rel:!0});var Hx=a(ml);E$=i(Hx,"Automatic Differentiation"),Hx.forEach(t),Rx.forEach(t),w$=p(ga),jh=s(ga,"LI",{});var Qx=a(jh);fl=s(Qx,"A",{href:!0,rel:!0});var Vx=a(fl);$$=i(Vx,"Vectorization"),Vx.forEach(t),Qx.forEach(t),F$=p(ga),qh=s(ga,"LI",{});var Bx=a(qh);ul=s(Bx,"A",{href:!0,rel:!0});var Kx=a(ul);x$=i(Kx,"Parallelization"),Kx.forEach(t),Bx.forEach(t),ga.forEach(t),M$=p(kt),At=s(kt,"DIV",{class:!0});var _a=a(At);y(gl.$$.fragment,_a),z$=p(_a),cn=s(_a,"P",{});var cc=a(cn);C$=i(cc,"The "),Ph=s(cc,"CODE",{});var Jx=a(Ph);j$=i(Jx,"FlaxElectraPreTrainedModel"),Jx.forEach(t),q$=i(cc," forward method, overrides the "),Ah=s(cc,"CODE",{});var Gx=a(Ah);P$=i(Gx,"__call__"),Gx.forEach(t),A$=i(cc," special method."),cc.forEach(t),O$=p(_a),y(Qs.$$.fragment,_a),L$=p(_a),y(Vs.$$.fragment,_a),_a.forEach(t),kt.forEach(t),Df=p(o),pn=s(o,"H2",{class:!0});var ng=a(pn);Bs=s(ng,"A",{id:!0,class:!0,href:!0});var Xx=a(Bs);Oh=s(Xx,"SPAN",{});var Yx=a(Oh);y(_l.$$.fragment,Yx),Yx.forEach(t),Xx.forEach(t),N$=p(ng),Lh=s(ng,"SPAN",{});var Zx=a(Lh);I$=i(Zx,"FlaxElectraForTokenClassification"),Zx.forEach(t),ng.forEach(t),Wf=p(o),Ae=s(o,"DIV",{class:!0});var Ye=a(Ae);y(kl.$$.fragment,Ye),S$=p(Ye),Nh=s(Ye,"P",{});var eM=a(Nh);D$=i(eM,"Electra model with a token classification head on top."),eM.forEach(t),W$=p(Ye),Ih=s(Ye,"P",{});var tM=a(Ih);U$=i(tM,"Both the discriminator and generator may be loaded into this model."),tM.forEach(t),R$=p(Ye),vl=s(Ye,"P",{});var sg=a(vl);H$=i(sg,"This model inherits from "),Wd=s(sg,"A",{href:!0});var oM=a(Wd);Q$=i(oM,"FlaxPreTrainedModel"),oM.forEach(t),V$=i(sg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sg.forEach(t),B$=p(Ye),Tl=s(Ye,"P",{});var ag=a(Tl);K$=i(ag,`This model is also a Flax Linen
`),bl=s(ag,"A",{href:!0,rel:!0});var nM=a(bl);J$=i(nM,"flax.nn.Module"),nM.forEach(t),G$=i(ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ag.forEach(t),X$=p(Ye),Sh=s(Ye,"P",{});var sM=a(Sh);Y$=i(sM,"Finally, this model supports inherent JAX features such as:"),sM.forEach(t),Z$=p(Ye),Gt=s(Ye,"UL",{});var ka=a(Gt);Dh=s(ka,"LI",{});var aM=a(Dh);yl=s(aM,"A",{href:!0,rel:!0});var rM=a(yl);e2=i(rM,"Just-In-Time (JIT) compilation"),rM.forEach(t),aM.forEach(t),t2=p(ka),Wh=s(ka,"LI",{});var iM=a(Wh);El=s(iM,"A",{href:!0,rel:!0});var lM=a(El);o2=i(lM,"Automatic Differentiation"),lM.forEach(t),iM.forEach(t),n2=p(ka),Uh=s(ka,"LI",{});var dM=a(Uh);wl=s(dM,"A",{href:!0,rel:!0});var cM=a(wl);s2=i(cM,"Vectorization"),cM.forEach(t),dM.forEach(t),a2=p(ka),Rh=s(ka,"LI",{});var pM=a(Rh);$l=s(pM,"A",{href:!0,rel:!0});var hM=a($l);r2=i(hM,"Parallelization"),hM.forEach(t),pM.forEach(t),ka.forEach(t),i2=p(Ye),Ot=s(Ye,"DIV",{class:!0});var va=a(Ot);y(Fl.$$.fragment,va),l2=p(va),hn=s(va,"P",{});var pc=a(hn);d2=i(pc,"The "),Hh=s(pc,"CODE",{});var mM=a(Hh);c2=i(mM,"FlaxElectraPreTrainedModel"),mM.forEach(t),p2=i(pc," forward method, overrides the "),Qh=s(pc,"CODE",{});var fM=a(Qh);h2=i(fM,"__call__"),fM.forEach(t),m2=i(pc," special method."),pc.forEach(t),f2=p(va),y(Ks.$$.fragment,va),u2=p(va),y(Js.$$.fragment,va),va.forEach(t),Ye.forEach(t),Uf=p(o),mn=s(o,"H2",{class:!0});var rg=a(mn);Gs=s(rg,"A",{id:!0,class:!0,href:!0});var uM=a(Gs);Vh=s(uM,"SPAN",{});var gM=a(Vh);y(xl.$$.fragment,gM),gM.forEach(t),uM.forEach(t),g2=p(rg),Bh=s(rg,"SPAN",{});var _M=a(Bh);_2=i(_M,"FlaxElectraForQuestionAnswering"),_M.forEach(t),rg.forEach(t),Rf=p(o),Ue=s(o,"DIV",{class:!0});var vt=a(Ue);y(Ml.$$.fragment,vt),k2=p(vt),fn=s(vt,"P",{});var hc=a(fn);v2=i(hc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Kh=s(hc,"CODE",{});var kM=a(Kh);T2=i(kM,"span start logits"),kM.forEach(t),b2=i(hc," and "),Jh=s(hc,"CODE",{});var vM=a(Jh);y2=i(vM,"span end logits"),vM.forEach(t),E2=i(hc,")."),hc.forEach(t),w2=p(vt),zl=s(vt,"P",{});var ig=a(zl);$2=i(ig,"This model inherits from "),Ud=s(ig,"A",{href:!0});var TM=a(Ud);F2=i(TM,"FlaxPreTrainedModel"),TM.forEach(t),x2=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),M2=p(vt),Cl=s(vt,"P",{});var lg=a(Cl);z2=i(lg,`This model is also a Flax Linen
`),jl=s(lg,"A",{href:!0,rel:!0});var bM=a(jl);C2=i(bM,"flax.nn.Module"),bM.forEach(t),j2=i(lg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lg.forEach(t),q2=p(vt),Gh=s(vt,"P",{});var yM=a(Gh);P2=i(yM,"Finally, this model supports inherent JAX features such as:"),yM.forEach(t),A2=p(vt),Xt=s(vt,"UL",{});var Ta=a(Xt);Xh=s(Ta,"LI",{});var EM=a(Xh);ql=s(EM,"A",{href:!0,rel:!0});var wM=a(ql);O2=i(wM,"Just-In-Time (JIT) compilation"),wM.forEach(t),EM.forEach(t),L2=p(Ta),Yh=s(Ta,"LI",{});var $M=a(Yh);Pl=s($M,"A",{href:!0,rel:!0});var FM=a(Pl);N2=i(FM,"Automatic Differentiation"),FM.forEach(t),$M.forEach(t),I2=p(Ta),Zh=s(Ta,"LI",{});var xM=a(Zh);Al=s(xM,"A",{href:!0,rel:!0});var MM=a(Al);S2=i(MM,"Vectorization"),MM.forEach(t),xM.forEach(t),D2=p(Ta),em=s(Ta,"LI",{});var zM=a(em);Ol=s(zM,"A",{href:!0,rel:!0});var CM=a(Ol);W2=i(CM,"Parallelization"),CM.forEach(t),zM.forEach(t),Ta.forEach(t),U2=p(vt),Lt=s(vt,"DIV",{class:!0});var ba=a(Lt);y(Ll.$$.fragment,ba),R2=p(ba),un=s(ba,"P",{});var mc=a(un);H2=i(mc,"The "),tm=s(mc,"CODE",{});var jM=a(tm);Q2=i(jM,"FlaxElectraPreTrainedModel"),jM.forEach(t),V2=i(mc," forward method, overrides the "),om=s(mc,"CODE",{});var qM=a(om);B2=i(qM,"__call__"),qM.forEach(t),K2=i(mc," special method."),mc.forEach(t),J2=p(ba),y(Xs.$$.fragment,ba),G2=p(ba),y(Ys.$$.fragment,ba),ba.forEach(t),vt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Bz)),u(m,"id","electra"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#electra"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(C,"class","relative group"),u(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),u(ne,"rel","nofollow"),u(se,"href","https://github.com/google-research/electra"),u(se,"rel","nofollow"),u(T,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(Fe,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForPreTraining"),u(A,"href","https://huggingface.co/lysandre"),u(A,"rel","nofollow"),u(we,"href","https://github.com/google-research/electra"),u(we,"rel","nofollow"),u(ye,"id","transformers.ElectraConfig"),u(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ye,"href","#transformers.ElectraConfig"),u(Z,"class","relative group"),u(Kl,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraModel"),u(Jl,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraModel"),u(wa,"href","https://huggingface.co/google/electra-small-discriminator"),u(wa,"rel","nofollow"),u(Gl,"href","/docs/transformers/pr_16966/en/main_classes/configuration#transformers.PretrainedConfig"),u(Xl,"href","/docs/transformers/pr_16966/en/main_classes/configuration#transformers.PretrainedConfig"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vn,"id","transformers.ElectraTokenizer"),u(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vn,"href","#transformers.ElectraTokenizer"),u(_o,"class","relative group"),u(Yl,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizer"),u(Zl,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer"),u(ed,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.ElectraTokenizerFast"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.ElectraTokenizerFast"),u(ko,"class","relative group"),u(td,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraTokenizerFast"),u(od,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizerFast"),u(nd,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizerFast"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),u(vo,"class","relative group"),u(sd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForPreTraining"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ad,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.ElectraModel"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.ElectraModel"),u(yo,"class","relative group"),u(rd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(id,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraModel"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.ElectraForPreTraining"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.ElectraForPreTraining"),u(wo,"class","relative group"),u(ld,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ba,"rel","nofollow"),u(dd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.ElectraForCausalLM"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.ElectraForCausalLM"),u(Fo,"class","relative group"),u(cd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(er,"rel","nofollow"),u(pd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForCausalLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.ElectraForMaskedLM"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.ElectraForMaskedLM"),u(Mo,"class","relative group"),u(hd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(rr,"rel","nofollow"),u(md,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForMaskedLM"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.ElectraForSequenceClassification"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.ElectraForSequenceClassification"),u(Co,"class","relative group"),u(fd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hr,"rel","nofollow"),u(ud,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForSequenceClassification"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.ElectraForMultipleChoice"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.ElectraForMultipleChoice"),u(qo,"class","relative group"),u(gd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kr,"rel","nofollow"),u(_d,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForMultipleChoice"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.ElectraForTokenClassification"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.ElectraForTokenClassification"),u(Ao,"class","relative group"),u(kd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wr,"rel","nofollow"),u(vd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForTokenClassification"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.ElectraForQuestionAnswering"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.ElectraForQuestionAnswering"),u(Lo,"class","relative group"),u(Td,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Cr,"rel","nofollow"),u(bd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.TFElectraModel"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.TFElectraModel"),u(So,"class","relative group"),u(yd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Lr,"rel","nofollow"),u(Ed,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraModel"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFElectraForPreTraining"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFElectraForPreTraining"),u(Wo,"class","relative group"),u(wd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ur,"rel","nofollow"),u($d,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForPreTraining"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFElectraForMaskedLM"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFElectraForMaskedLM"),u(Ro,"class","relative group"),u(Fd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Kr,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForMaskedLM"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFElectraForSequenceClassification"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFElectraForSequenceClassification"),u(Qo,"class","relative group"),u(Md,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(zd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFElectraForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFElectraForMultipleChoice"),u(Bo,"class","relative group"),u(Cd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(ri,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ri,"rel","nofollow"),u(jd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFElectraForTokenClassification"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFElectraForTokenClassification"),u(Jo,"class","relative group"),u(qd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hi,"rel","nofollow"),u(Pd,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForTokenClassification"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xs,"id","transformers.TFElectraForQuestionAnswering"),u(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xs,"href","#transformers.TFElectraForQuestionAnswering"),u(Xo,"class","relative group"),u(Ad,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ki,"rel","nofollow"),u(Od,"href","/docs/transformers/pr_16966/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.FlaxElectraModel"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.FlaxElectraModel"),u(en,"class","relative group"),u(Ld,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Mi,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.FlaxElectraForPreTraining"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.FlaxElectraForPreTraining"),u(on,"class","relative group"),u(Nd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ai,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ni,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ii,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxElectraForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxElectraForMaskedLM"),u(sn,"class","relative group"),u(Id,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bi,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ji,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxElectraForSequenceClassification"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxElectraForSequenceClassification"),u(rn,"class","relative group"),u(Sd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(sl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(al,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxElectraForMultipleChoice"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxElectraForMultipleChoice"),u(dn,"class","relative group"),u(Dd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ul,"rel","nofollow"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.FlaxElectraForTokenClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.FlaxElectraForTokenClassification"),u(pn,"class","relative group"),u(Wd,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(bl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(bl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(yl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(El,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.FlaxElectraForQuestionAnswering"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.FlaxElectraForQuestionAnswering"),u(mn,"class","relative group"),u(Ud,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(jl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(jl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ql,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pl,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Al,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ol,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),k(o,g,v),k(o,h,v),e(h,m),e(m,_),E(l,_,null),e(h,f),e(h,M),e(M,fe),k(o,J,v),k(o,C,v),e(C,ee),e(ee,S),E(oe,S,null),e(C,ue),e(C,D),e(D,ge),k(o,pe,v),k(o,K,v),e(K,O),e(K,ne),e(ne,X),e(K,j),k(o,P,v),k(o,ae,v),e(ae,R),k(o,he,v),k(o,re,v),e(re,W),e(W,_e),k(o,me,v),k(o,q,v),e(q,ke),k(o,U,v),k(o,te,v),e(te,ie),e(ie,H),e(te,ve),e(te,G),e(G,L),e(G,se),e(se,Q),e(G,Te),e(G,T),e(T,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),k(o,xe,v),k(o,be,v),e(be,Ce),e(be,A),e(A,V),e(be,je),e(be,we),e(we,B),e(be,qe),k(o,Me,v),k(o,Z,v),e(Z,ye),e(ye,fc),E(ya,fc,null),e(Z,dg),e(Z,uc),e(uc,cg),k(o,Qm,v),k(o,Tt,v),E(Ea,Tt,null),e(Tt,pg),e(Tt,Ht),e(Ht,hg),e(Ht,Kl),e(Kl,mg),e(Ht,fg),e(Ht,Jl),e(Jl,ug),e(Ht,gg),e(Ht,wa),e(wa,_g),e(Ht,kg),e(Tt,vg),e(Tt,go),e(go,Tg),e(go,Gl),e(Gl,bg),e(go,yg),e(go,Xl),e(Xl,Eg),e(go,wg),e(Tt,$g),E(kn,Tt,null),k(o,Vm,v),k(o,_o,v),e(_o,vn),e(vn,gc),E($a,gc,null),e(_o,Fg),e(_o,_c),e(_c,xg),k(o,Bm,v),k(o,bt,v),E(Fa,bt,null),e(bt,Mg),e(bt,kc),e(kc,zg),e(bt,Cg),e(bt,Tn),e(Tn,Yl),e(Yl,jg),e(Tn,qg),e(Tn,Zl),e(Zl,Pg),e(Tn,Ag),e(bt,Og),e(bt,xa),e(xa,Lg),e(xa,ed),e(ed,Ng),e(xa,Ig),k(o,Km,v),k(o,ko,v),e(ko,bn),e(bn,vc),E(Ma,vc,null),e(ko,Sg),e(ko,Tc),e(Tc,Dg),k(o,Jm,v),k(o,yt,v),E(za,yt,null),e(yt,Wg),e(yt,Ca),e(Ca,Ug),e(Ca,bc),e(bc,Rg),e(Ca,Hg),e(yt,Qg),e(yt,yn),e(yn,td),e(td,Vg),e(yn,Bg),e(yn,od),e(od,Kg),e(yn,Jg),e(yt,Gg),e(yt,ja),e(ja,Xg),e(ja,nd),e(nd,Yg),e(ja,Zg),k(o,Gm,v),k(o,vo,v),e(vo,En),e(En,yc),E(qa,yc,null),e(vo,e_),e(vo,Ec),e(Ec,t_),k(o,Xm,v),k(o,To,v),E(Pa,To,null),e(To,o_),e(To,Aa),e(Aa,n_),e(Aa,sd),e(sd,s_),e(Aa,a_),k(o,Ym,v),k(o,bo,v),E(Oa,bo,null),e(bo,r_),e(bo,La),e(La,i_),e(La,ad),e(ad,l_),e(La,d_),k(o,Zm,v),k(o,yo,v),e(yo,wn),e(wn,wc),E(Na,wc,null),e(yo,c_),e(yo,$c),e($c,p_),k(o,ef,v),k(o,Ze,v),E(Ia,Ze,null),e(Ze,h_),e(Ze,Fc),e(Fc,m_),e(Ze,f_),e(Ze,Sa),e(Sa,u_),e(Sa,rd),e(rd,g_),e(Sa,__),e(Ze,k_),e(Ze,Da),e(Da,v_),e(Da,Wa),e(Wa,T_),e(Da,b_),e(Ze,y_),e(Ze,Et),E(Ua,Et,null),e(Et,E_),e(Et,Eo),e(Eo,w_),e(Eo,id),e(id,$_),e(Eo,F_),e(Eo,xc),e(xc,x_),e(Eo,M_),e(Et,z_),E($n,Et,null),e(Et,C_),E(Fn,Et,null),k(o,tf,v),k(o,wo,v),e(wo,xn),e(xn,Mc),E(Ra,Mc,null),e(wo,j_),e(wo,zc),e(zc,q_),k(o,of,v),k(o,He,v),E(Ha,He,null),e(He,P_),e(He,Cc),e(Cc,A_),e(He,O_),e(He,jc),e(jc,L_),e(He,N_),e(He,Qa),e(Qa,I_),e(Qa,ld),e(ld,S_),e(Qa,D_),e(He,W_),e(He,Va),e(Va,U_),e(Va,Ba),e(Ba,R_),e(Va,H_),e(He,Q_),e(He,wt),E(Ka,wt,null),e(wt,V_),e(wt,$o),e($o,B_),e($o,dd),e(dd,K_),e($o,J_),e($o,qc),e(qc,G_),e($o,X_),e(wt,Y_),E(Mn,wt,null),e(wt,Z_),E(zn,wt,null),k(o,nf,v),k(o,Fo,v),e(Fo,Cn),e(Cn,Pc),E(Ja,Pc,null),e(Fo,ek),e(Fo,Ac),e(Ac,tk),k(o,sf,v),k(o,et,v),E(Ga,et,null),e(et,ok),e(et,Xa),e(Xa,nk),e(Xa,Oc),e(Oc,sk),e(Xa,ak),e(et,rk),e(et,Ya),e(Ya,ik),e(Ya,cd),e(cd,lk),e(Ya,dk),e(et,ck),e(et,Za),e(Za,pk),e(Za,er),e(er,hk),e(Za,mk),e(et,fk),e(et,$t),E(tr,$t,null),e($t,uk),e($t,xo),e(xo,gk),e(xo,pd),e(pd,_k),e(xo,kk),e(xo,Lc),e(Lc,vk),e(xo,Tk),e($t,bk),E(jn,$t,null),e($t,yk),E(qn,$t,null),k(o,af,v),k(o,Mo,v),e(Mo,Pn),e(Pn,Nc),E(or,Nc,null),e(Mo,Ek),e(Mo,Ic),e(Ic,wk),k(o,rf,v),k(o,Qe,v),E(nr,Qe,null),e(Qe,$k),e(Qe,Sc),e(Sc,Fk),e(Qe,xk),e(Qe,Dc),e(Dc,Mk),e(Qe,zk),e(Qe,sr),e(sr,Ck),e(sr,hd),e(hd,jk),e(sr,qk),e(Qe,Pk),e(Qe,ar),e(ar,Ak),e(ar,rr),e(rr,Ok),e(ar,Lk),e(Qe,Nk),e(Qe,st),E(ir,st,null),e(st,Ik),e(st,zo),e(zo,Sk),e(zo,md),e(md,Dk),e(zo,Wk),e(zo,Wc),e(Wc,Uk),e(zo,Rk),e(st,Hk),E(An,st,null),e(st,Qk),E(On,st,null),e(st,Vk),E(Ln,st,null),k(o,lf,v),k(o,Co,v),e(Co,Nn),e(Nn,Uc),E(lr,Uc,null),e(Co,Bk),e(Co,Rc),e(Rc,Kk),k(o,df,v),k(o,tt,v),E(dr,tt,null),e(tt,Jk),e(tt,Hc),e(Hc,Gk),e(tt,Xk),e(tt,cr),e(cr,Yk),e(cr,fd),e(fd,Zk),e(cr,ev),e(tt,tv),e(tt,pr),e(pr,ov),e(pr,hr),e(hr,nv),e(pr,sv),e(tt,av),e(tt,Re),E(mr,Re,null),e(Re,rv),e(Re,jo),e(jo,iv),e(jo,ud),e(ud,lv),e(jo,dv),e(jo,Qc),e(Qc,cv),e(jo,pv),e(Re,hv),E(In,Re,null),e(Re,mv),E(Sn,Re,null),e(Re,fv),E(Dn,Re,null),e(Re,uv),E(Wn,Re,null),e(Re,gv),E(Un,Re,null),k(o,cf,v),k(o,qo,v),e(qo,Rn),e(Rn,Vc),E(fr,Vc,null),e(qo,_v),e(qo,Bc),e(Bc,kv),k(o,pf,v),k(o,ot,v),E(ur,ot,null),e(ot,vv),e(ot,Kc),e(Kc,Tv),e(ot,bv),e(ot,gr),e(gr,yv),e(gr,gd),e(gd,Ev),e(gr,wv),e(ot,$v),e(ot,_r),e(_r,Fv),e(_r,kr),e(kr,xv),e(_r,Mv),e(ot,zv),e(ot,Ft),E(vr,Ft,null),e(Ft,Cv),e(Ft,Po),e(Po,jv),e(Po,_d),e(_d,qv),e(Po,Pv),e(Po,Jc),e(Jc,Av),e(Po,Ov),e(Ft,Lv),E(Hn,Ft,null),e(Ft,Nv),E(Qn,Ft,null),k(o,hf,v),k(o,Ao,v),e(Ao,Vn),e(Vn,Gc),E(Tr,Gc,null),e(Ao,Iv),e(Ao,Xc),e(Xc,Sv),k(o,mf,v),k(o,Ve,v),E(br,Ve,null),e(Ve,Dv),e(Ve,Yc),e(Yc,Wv),e(Ve,Uv),e(Ve,Zc),e(Zc,Rv),e(Ve,Hv),e(Ve,yr),e(yr,Qv),e(yr,kd),e(kd,Vv),e(yr,Bv),e(Ve,Kv),e(Ve,Er),e(Er,Jv),e(Er,wr),e(wr,Gv),e(Er,Xv),e(Ve,Yv),e(Ve,at),E($r,at,null),e(at,Zv),e(at,Oo),e(Oo,eT),e(Oo,vd),e(vd,tT),e(Oo,oT),e(Oo,ep),e(ep,nT),e(Oo,sT),e(at,aT),E(Bn,at,null),e(at,rT),E(Kn,at,null),e(at,iT),E(Jn,at,null),k(o,ff,v),k(o,Lo,v),e(Lo,Gn),e(Gn,tp),E(Fr,tp,null),e(Lo,lT),e(Lo,op),e(op,dT),k(o,uf,v),k(o,nt,v),E(xr,nt,null),e(nt,cT),e(nt,No),e(No,pT),e(No,np),e(np,hT),e(No,mT),e(No,sp),e(sp,fT),e(No,uT),e(nt,gT),e(nt,Mr),e(Mr,_T),e(Mr,Td),e(Td,kT),e(Mr,vT),e(nt,TT),e(nt,zr),e(zr,bT),e(zr,Cr),e(Cr,yT),e(zr,ET),e(nt,wT),e(nt,rt),E(jr,rt,null),e(rt,$T),e(rt,Io),e(Io,FT),e(Io,bd),e(bd,xT),e(Io,MT),e(Io,ap),e(ap,zT),e(Io,CT),e(rt,jT),E(Xn,rt,null),e(rt,qT),E(Yn,rt,null),e(rt,PT),E(Zn,rt,null),k(o,gf,v),k(o,So,v),e(So,es),e(es,rp),E(qr,rp,null),e(So,AT),e(So,ip),e(ip,OT),k(o,_f,v),k(o,Be,v),E(Pr,Be,null),e(Be,LT),e(Be,lp),e(lp,NT),e(Be,IT),e(Be,Ar),e(Ar,ST),e(Ar,yd),e(yd,DT),e(Ar,WT),e(Be,UT),e(Be,Or),e(Or,RT),e(Or,Lr),e(Lr,HT),e(Or,QT),e(Be,VT),E(ts,Be,null),e(Be,BT),e(Be,xt),E(Nr,xt,null),e(xt,KT),e(xt,Do),e(Do,JT),e(Do,Ed),e(Ed,GT),e(Do,XT),e(Do,dp),e(dp,YT),e(Do,ZT),e(xt,eb),E(os,xt,null),e(xt,tb),E(ns,xt,null),k(o,kf,v),k(o,Wo,v),e(Wo,ss),e(ss,cp),E(Ir,cp,null),e(Wo,ob),e(Wo,pp),e(pp,nb),k(o,vf,v),k(o,Oe,v),E(Sr,Oe,null),e(Oe,sb),e(Oe,hp),e(hp,ab),e(Oe,rb),e(Oe,mp),e(mp,ib),e(Oe,lb),e(Oe,Dr),e(Dr,db),e(Dr,wd),e(wd,cb),e(Dr,pb),e(Oe,hb),e(Oe,Wr),e(Wr,mb),e(Wr,Ur),e(Ur,fb),e(Wr,ub),e(Oe,gb),E(as,Oe,null),e(Oe,_b),e(Oe,Mt),E(Rr,Mt,null),e(Mt,kb),e(Mt,Uo),e(Uo,vb),e(Uo,$d),e($d,Tb),e(Uo,bb),e(Uo,fp),e(fp,yb),e(Uo,Eb),e(Mt,wb),E(rs,Mt,null),e(Mt,$b),E(is,Mt,null),k(o,Tf,v),k(o,Ro,v),e(Ro,ls),e(ls,up),E(Hr,up,null),e(Ro,Fb),e(Ro,gp),e(gp,xb),k(o,bf,v),k(o,Le,v),E(Qr,Le,null),e(Le,Mb),e(Le,_p),e(_p,zb),e(Le,Cb),e(Le,kp),e(kp,jb),e(Le,qb),e(Le,Vr),e(Vr,Pb),e(Vr,Fd),e(Fd,Ab),e(Vr,Ob),e(Le,Lb),e(Le,Br),e(Br,Nb),e(Br,Kr),e(Kr,Ib),e(Br,Sb),e(Le,Db),E(ds,Le,null),e(Le,Wb),e(Le,it),E(Jr,it,null),e(it,Ub),e(it,Ho),e(Ho,Rb),e(Ho,xd),e(xd,Hb),e(Ho,Qb),e(Ho,vp),e(vp,Vb),e(Ho,Bb),e(it,Kb),E(cs,it,null),e(it,Jb),E(ps,it,null),e(it,Gb),E(hs,it,null),k(o,yf,v),k(o,Qo,v),e(Qo,ms),e(ms,Tp),E(Gr,Tp,null),e(Qo,Xb),e(Qo,bp),e(bp,Yb),k(o,Ef,v),k(o,Ke,v),E(Xr,Ke,null),e(Ke,Zb),e(Ke,yp),e(yp,ey),e(Ke,ty),e(Ke,Yr),e(Yr,oy),e(Yr,Md),e(Md,ny),e(Yr,sy),e(Ke,ay),e(Ke,Zr),e(Zr,ry),e(Zr,ei),e(ei,iy),e(Zr,ly),e(Ke,dy),E(fs,Ke,null),e(Ke,cy),e(Ke,lt),E(ti,lt,null),e(lt,py),e(lt,Vo),e(Vo,hy),e(Vo,zd),e(zd,my),e(Vo,fy),e(Vo,Ep),e(Ep,uy),e(Vo,gy),e(lt,_y),E(us,lt,null),e(lt,ky),E(gs,lt,null),e(lt,vy),E(_s,lt,null),k(o,wf,v),k(o,Bo,v),e(Bo,ks),e(ks,wp),E(oi,wp,null),e(Bo,Ty),e(Bo,$p),e($p,by),k(o,$f,v),k(o,Je,v),E(ni,Je,null),e(Je,yy),e(Je,Fp),e(Fp,Ey),e(Je,wy),e(Je,si),e(si,$y),e(si,Cd),e(Cd,Fy),e(si,xy),e(Je,My),e(Je,ai),e(ai,zy),e(ai,ri),e(ri,Cy),e(ai,jy),e(Je,qy),E(vs,Je,null),e(Je,Py),e(Je,zt),E(ii,zt,null),e(zt,Ay),e(zt,Ko),e(Ko,Oy),e(Ko,jd),e(jd,Ly),e(Ko,Ny),e(Ko,xp),e(xp,Iy),e(Ko,Sy),e(zt,Dy),E(Ts,zt,null),e(zt,Wy),E(bs,zt,null),k(o,Ff,v),k(o,Jo,v),e(Jo,ys),e(ys,Mp),E(li,Mp,null),e(Jo,Uy),e(Jo,zp),e(zp,Ry),k(o,xf,v),k(o,Ne,v),E(di,Ne,null),e(Ne,Hy),e(Ne,Cp),e(Cp,Qy),e(Ne,Vy),e(Ne,jp),e(jp,By),e(Ne,Ky),e(Ne,ci),e(ci,Jy),e(ci,qd),e(qd,Gy),e(ci,Xy),e(Ne,Yy),e(Ne,pi),e(pi,Zy),e(pi,hi),e(hi,e1),e(pi,t1),e(Ne,o1),E(Es,Ne,null),e(Ne,n1),e(Ne,dt),E(mi,dt,null),e(dt,s1),e(dt,Go),e(Go,a1),e(Go,Pd),e(Pd,r1),e(Go,i1),e(Go,qp),e(qp,l1),e(Go,d1),e(dt,c1),E(ws,dt,null),e(dt,p1),E($s,dt,null),e(dt,h1),E(Fs,dt,null),k(o,Mf,v),k(o,Xo,v),e(Xo,xs),e(xs,Pp),E(fi,Pp,null),e(Xo,m1),e(Xo,Ap),e(Ap,f1),k(o,zf,v),k(o,Ge,v),E(ui,Ge,null),e(Ge,u1),e(Ge,Yo),e(Yo,g1),e(Yo,Op),e(Op,_1),e(Yo,k1),e(Yo,Lp),e(Lp,v1),e(Yo,T1),e(Ge,b1),e(Ge,gi),e(gi,y1),e(gi,Ad),e(Ad,E1),e(gi,w1),e(Ge,$1),e(Ge,_i),e(_i,F1),e(_i,ki),e(ki,x1),e(_i,M1),e(Ge,z1),E(Ms,Ge,null),e(Ge,C1),e(Ge,ct),E(vi,ct,null),e(ct,j1),e(ct,Zo),e(Zo,q1),e(Zo,Od),e(Od,P1),e(Zo,A1),e(Zo,Np),e(Np,O1),e(Zo,L1),e(ct,N1),E(zs,ct,null),e(ct,I1),E(Cs,ct,null),e(ct,S1),E(js,ct,null),k(o,Cf,v),k(o,en,v),e(en,qs),e(qs,Ip),E(Ti,Ip,null),e(en,D1),e(en,Sp),e(Sp,W1),k(o,jf,v),k(o,Ie,v),E(bi,Ie,null),e(Ie,U1),e(Ie,Dp),e(Dp,R1),e(Ie,H1),e(Ie,yi),e(yi,Q1),e(yi,Ld),e(Ld,V1),e(yi,B1),e(Ie,K1),e(Ie,Ei),e(Ei,J1),e(Ei,wi),e(wi,G1),e(Ei,X1),e(Ie,Y1),e(Ie,Wp),e(Wp,Z1),e(Ie,eE),e(Ie,Qt),e(Qt,Up),e(Up,$i),e($i,tE),e(Qt,oE),e(Qt,Rp),e(Rp,Fi),e(Fi,nE),e(Qt,sE),e(Qt,Hp),e(Hp,xi),e(xi,aE),e(Qt,rE),e(Qt,Qp),e(Qp,Mi),e(Mi,iE),e(Ie,lE),e(Ie,Ct),E(zi,Ct,null),e(Ct,dE),e(Ct,tn),e(tn,cE),e(tn,Vp),e(Vp,pE),e(tn,hE),e(tn,Bp),e(Bp,mE),e(tn,fE),e(Ct,uE),E(Ps,Ct,null),e(Ct,gE),E(As,Ct,null),k(o,qf,v),k(o,on,v),e(on,Os),e(Os,Kp),E(Ci,Kp,null),e(on,_E),e(on,Jp),e(Jp,kE),k(o,Pf,v),k(o,Pe,v),E(ji,Pe,null),e(Pe,vE),e(Pe,Gp),e(Gp,TE),e(Pe,bE),e(Pe,Xp),e(Xp,yE),e(Pe,EE),e(Pe,qi),e(qi,wE),e(qi,Nd),e(Nd,$E),e(qi,FE),e(Pe,xE),e(Pe,Pi),e(Pi,ME),e(Pi,Ai),e(Ai,zE),e(Pi,CE),e(Pe,jE),e(Pe,Yp),e(Yp,qE),e(Pe,PE),e(Pe,Vt),e(Vt,Zp),e(Zp,Oi),e(Oi,AE),e(Vt,OE),e(Vt,eh),e(eh,Li),e(Li,LE),e(Vt,NE),e(Vt,th),e(th,Ni),e(Ni,IE),e(Vt,SE),e(Vt,oh),e(oh,Ii),e(Ii,DE),e(Pe,WE),e(Pe,jt),E(Si,jt,null),e(jt,UE),e(jt,nn),e(nn,RE),e(nn,nh),e(nh,HE),e(nn,QE),e(nn,sh),e(sh,VE),e(nn,BE),e(jt,KE),E(Ls,jt,null),e(jt,JE),E(Ns,jt,null),k(o,Af,v),k(o,sn,v),e(sn,Is),e(Is,ah),E(Di,ah,null),e(sn,GE),e(sn,rh),e(rh,XE),k(o,Of,v),k(o,Se,v),E(Wi,Se,null),e(Se,YE),e(Se,Ui),e(Ui,ZE),e(Ui,ih),e(ih,ew),e(Ui,tw),e(Se,ow),e(Se,Ri),e(Ri,nw),e(Ri,Id),e(Id,sw),e(Ri,aw),e(Se,rw),e(Se,Hi),e(Hi,iw),e(Hi,Qi),e(Qi,lw),e(Hi,dw),e(Se,cw),e(Se,lh),e(lh,pw),e(Se,hw),e(Se,Bt),e(Bt,dh),e(dh,Vi),e(Vi,mw),e(Bt,fw),e(Bt,ch),e(ch,Bi),e(Bi,uw),e(Bt,gw),e(Bt,ph),e(ph,Ki),e(Ki,_w),e(Bt,kw),e(Bt,hh),e(hh,Ji),e(Ji,vw),e(Se,Tw),e(Se,qt),E(Gi,qt,null),e(qt,bw),e(qt,an),e(an,yw),e(an,mh),e(mh,Ew),e(an,ww),e(an,fh),e(fh,$w),e(an,Fw),e(qt,xw),E(Ss,qt,null),e(qt,Mw),E(Ds,qt,null),k(o,Lf,v),k(o,rn,v),e(rn,Ws),e(Ws,uh),E(Xi,uh,null),e(rn,zw),e(rn,gh),e(gh,Cw),k(o,Nf,v),k(o,De,v),E(Yi,De,null),e(De,jw),e(De,_h),e(_h,qw),e(De,Pw),e(De,Zi),e(Zi,Aw),e(Zi,Sd),e(Sd,Ow),e(Zi,Lw),e(De,Nw),e(De,el),e(el,Iw),e(el,tl),e(tl,Sw),e(el,Dw),e(De,Ww),e(De,kh),e(kh,Uw),e(De,Rw),e(De,Kt),e(Kt,vh),e(vh,ol),e(ol,Hw),e(Kt,Qw),e(Kt,Th),e(Th,nl),e(nl,Vw),e(Kt,Bw),e(Kt,bh),e(bh,sl),e(sl,Kw),e(Kt,Jw),e(Kt,yh),e(yh,al),e(al,Gw),e(De,Xw),e(De,Pt),E(rl,Pt,null),e(Pt,Yw),e(Pt,ln),e(ln,Zw),e(ln,Eh),e(Eh,e$),e(ln,t$),e(ln,wh),e(wh,o$),e(ln,n$),e(Pt,s$),E(Us,Pt,null),e(Pt,a$),E(Rs,Pt,null),k(o,If,v),k(o,dn,v),e(dn,Hs),e(Hs,$h),E(il,$h,null),e(dn,r$),e(dn,Fh),e(Fh,i$),k(o,Sf,v),k(o,We,v),E(ll,We,null),e(We,l$),e(We,xh),e(xh,d$),e(We,c$),e(We,dl),e(dl,p$),e(dl,Dd),e(Dd,h$),e(dl,m$),e(We,f$),e(We,cl),e(cl,u$),e(cl,pl),e(pl,g$),e(cl,_$),e(We,k$),e(We,Mh),e(Mh,v$),e(We,T$),e(We,Jt),e(Jt,zh),e(zh,hl),e(hl,b$),e(Jt,y$),e(Jt,Ch),e(Ch,ml),e(ml,E$),e(Jt,w$),e(Jt,jh),e(jh,fl),e(fl,$$),e(Jt,F$),e(Jt,qh),e(qh,ul),e(ul,x$),e(We,M$),e(We,At),E(gl,At,null),e(At,z$),e(At,cn),e(cn,C$),e(cn,Ph),e(Ph,j$),e(cn,q$),e(cn,Ah),e(Ah,P$),e(cn,A$),e(At,O$),E(Qs,At,null),e(At,L$),E(Vs,At,null),k(o,Df,v),k(o,pn,v),e(pn,Bs),e(Bs,Oh),E(_l,Oh,null),e(pn,N$),e(pn,Lh),e(Lh,I$),k(o,Wf,v),k(o,Ae,v),E(kl,Ae,null),e(Ae,S$),e(Ae,Nh),e(Nh,D$),e(Ae,W$),e(Ae,Ih),e(Ih,U$),e(Ae,R$),e(Ae,vl),e(vl,H$),e(vl,Wd),e(Wd,Q$),e(vl,V$),e(Ae,B$),e(Ae,Tl),e(Tl,K$),e(Tl,bl),e(bl,J$),e(Tl,G$),e(Ae,X$),e(Ae,Sh),e(Sh,Y$),e(Ae,Z$),e(Ae,Gt),e(Gt,Dh),e(Dh,yl),e(yl,e2),e(Gt,t2),e(Gt,Wh),e(Wh,El),e(El,o2),e(Gt,n2),e(Gt,Uh),e(Uh,wl),e(wl,s2),e(Gt,a2),e(Gt,Rh),e(Rh,$l),e($l,r2),e(Ae,i2),e(Ae,Ot),E(Fl,Ot,null),e(Ot,l2),e(Ot,hn),e(hn,d2),e(hn,Hh),e(Hh,c2),e(hn,p2),e(hn,Qh),e(Qh,h2),e(hn,m2),e(Ot,f2),E(Ks,Ot,null),e(Ot,u2),E(Js,Ot,null),k(o,Uf,v),k(o,mn,v),e(mn,Gs),e(Gs,Vh),E(xl,Vh,null),e(mn,g2),e(mn,Bh),e(Bh,_2),k(o,Rf,v),k(o,Ue,v),E(Ml,Ue,null),e(Ue,k2),e(Ue,fn),e(fn,v2),e(fn,Kh),e(Kh,T2),e(fn,b2),e(fn,Jh),e(Jh,y2),e(fn,E2),e(Ue,w2),e(Ue,zl),e(zl,$2),e(zl,Ud),e(Ud,F2),e(zl,x2),e(Ue,M2),e(Ue,Cl),e(Cl,z2),e(Cl,jl),e(jl,C2),e(Cl,j2),e(Ue,q2),e(Ue,Gh),e(Gh,P2),e(Ue,A2),e(Ue,Xt),e(Xt,Xh),e(Xh,ql),e(ql,O2),e(Xt,L2),e(Xt,Yh),e(Yh,Pl),e(Pl,N2),e(Xt,I2),e(Xt,Zh),e(Zh,Al),e(Al,S2),e(Xt,D2),e(Xt,em),e(em,Ol),e(Ol,W2),e(Ue,U2),e(Ue,Lt),E(Ll,Lt,null),e(Lt,R2),e(Lt,un),e(un,H2),e(un,tm),e(tm,Q2),e(un,V2),e(un,om),e(om,B2),e(un,K2),e(Lt,J2),E(Xs,Lt,null),e(Lt,G2),E(Ys,Lt,null),Hf=!0},p(o,[v]){const Nl={};v&2&&(Nl.$$scope={dirty:v,ctx:o}),kn.$set(Nl);const nm={};v&2&&(nm.$$scope={dirty:v,ctx:o}),$n.$set(nm);const sm={};v&2&&(sm.$$scope={dirty:v,ctx:o}),Fn.$set(sm);const am={};v&2&&(am.$$scope={dirty:v,ctx:o}),Mn.$set(am);const Il={};v&2&&(Il.$$scope={dirty:v,ctx:o}),zn.$set(Il);const rm={};v&2&&(rm.$$scope={dirty:v,ctx:o}),jn.$set(rm);const im={};v&2&&(im.$$scope={dirty:v,ctx:o}),qn.$set(im);const lm={};v&2&&(lm.$$scope={dirty:v,ctx:o}),An.$set(lm);const Sl={};v&2&&(Sl.$$scope={dirty:v,ctx:o}),On.$set(Sl);const dm={};v&2&&(dm.$$scope={dirty:v,ctx:o}),Ln.$set(dm);const cm={};v&2&&(cm.$$scope={dirty:v,ctx:o}),In.$set(cm);const pm={};v&2&&(pm.$$scope={dirty:v,ctx:o}),Sn.$set(pm);const hm={};v&2&&(hm.$$scope={dirty:v,ctx:o}),Dn.$set(hm);const mm={};v&2&&(mm.$$scope={dirty:v,ctx:o}),Wn.$set(mm);const Dl={};v&2&&(Dl.$$scope={dirty:v,ctx:o}),Un.$set(Dl);const fm={};v&2&&(fm.$$scope={dirty:v,ctx:o}),Hn.$set(fm);const Yt={};v&2&&(Yt.$$scope={dirty:v,ctx:o}),Qn.$set(Yt);const um={};v&2&&(um.$$scope={dirty:v,ctx:o}),Bn.$set(um);const gm={};v&2&&(gm.$$scope={dirty:v,ctx:o}),Kn.$set(gm);const _m={};v&2&&(_m.$$scope={dirty:v,ctx:o}),Jn.$set(_m);const gn={};v&2&&(gn.$$scope={dirty:v,ctx:o}),Xn.$set(gn);const km={};v&2&&(km.$$scope={dirty:v,ctx:o}),Yn.$set(km);const vm={};v&2&&(vm.$$scope={dirty:v,ctx:o}),Zn.$set(vm);const Wl={};v&2&&(Wl.$$scope={dirty:v,ctx:o}),ts.$set(Wl);const Tm={};v&2&&(Tm.$$scope={dirty:v,ctx:o}),os.$set(Tm);const bm={};v&2&&(bm.$$scope={dirty:v,ctx:o}),ns.$set(bm);const ym={};v&2&&(ym.$$scope={dirty:v,ctx:o}),as.$set(ym);const Zt={};v&2&&(Zt.$$scope={dirty:v,ctx:o}),rs.$set(Zt);const eo={};v&2&&(eo.$$scope={dirty:v,ctx:o}),is.$set(eo);const Em={};v&2&&(Em.$$scope={dirty:v,ctx:o}),ds.$set(Em);const wm={};v&2&&(wm.$$scope={dirty:v,ctx:o}),cs.$set(wm);const $m={};v&2&&($m.$$scope={dirty:v,ctx:o}),ps.$set($m);const _n={};v&2&&(_n.$$scope={dirty:v,ctx:o}),hs.$set(_n);const Fm={};v&2&&(Fm.$$scope={dirty:v,ctx:o}),fs.$set(Fm);const xm={};v&2&&(xm.$$scope={dirty:v,ctx:o}),us.$set(xm);const Ul={};v&2&&(Ul.$$scope={dirty:v,ctx:o}),gs.$set(Ul);const Mm={};v&2&&(Mm.$$scope={dirty:v,ctx:o}),_s.$set(Mm);const zm={};v&2&&(zm.$$scope={dirty:v,ctx:o}),vs.$set(zm);const Cm={};v&2&&(Cm.$$scope={dirty:v,ctx:o}),Ts.$set(Cm);const to={};v&2&&(to.$$scope={dirty:v,ctx:o}),bs.$set(to);const jm={};v&2&&(jm.$$scope={dirty:v,ctx:o}),Es.$set(jm);const Zs={};v&2&&(Zs.$$scope={dirty:v,ctx:o}),ws.$set(Zs);const qm={};v&2&&(qm.$$scope={dirty:v,ctx:o}),$s.$set(qm);const Pm={};v&2&&(Pm.$$scope={dirty:v,ctx:o}),Fs.$set(Pm);const Rl={};v&2&&(Rl.$$scope={dirty:v,ctx:o}),Ms.$set(Rl);const Am={};v&2&&(Am.$$scope={dirty:v,ctx:o}),zs.$set(Am);const Hl={};v&2&&(Hl.$$scope={dirty:v,ctx:o}),Cs.$set(Hl);const Om={};v&2&&(Om.$$scope={dirty:v,ctx:o}),js.$set(Om);const Lm={};v&2&&(Lm.$$scope={dirty:v,ctx:o}),Ps.$set(Lm);const Nm={};v&2&&(Nm.$$scope={dirty:v,ctx:o}),As.$set(Nm);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:o}),Ls.$set(oo);const Ql={};v&2&&(Ql.$$scope={dirty:v,ctx:o}),Ns.$set(Ql);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:o}),Ss.$set(Im);const ea={};v&2&&(ea.$$scope={dirty:v,ctx:o}),Ds.$set(ea);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:o}),Us.$set(Sm);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:o}),Rs.$set(Dm);const Vl={};v&2&&(Vl.$$scope={dirty:v,ctx:o}),Qs.$set(Vl);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:o}),Vs.$set(Wm);const Bl={};v&2&&(Bl.$$scope={dirty:v,ctx:o}),Ks.$set(Bl);const Um={};v&2&&(Um.$$scope={dirty:v,ctx:o}),Js.$set(Um);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:o}),Xs.$set(Rm);const Hm={};v&2&&(Hm.$$scope={dirty:v,ctx:o}),Ys.$set(Hm)},i(o){Hf||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(ya.$$.fragment,o),w(Ea.$$.fragment,o),w(kn.$$.fragment,o),w($a.$$.fragment,o),w(Fa.$$.fragment,o),w(Ma.$$.fragment,o),w(za.$$.fragment,o),w(qa.$$.fragment,o),w(Pa.$$.fragment,o),w(Oa.$$.fragment,o),w(Na.$$.fragment,o),w(Ia.$$.fragment,o),w(Ua.$$.fragment,o),w($n.$$.fragment,o),w(Fn.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(Ka.$$.fragment,o),w(Mn.$$.fragment,o),w(zn.$$.fragment,o),w(Ja.$$.fragment,o),w(Ga.$$.fragment,o),w(tr.$$.fragment,o),w(jn.$$.fragment,o),w(qn.$$.fragment,o),w(or.$$.fragment,o),w(nr.$$.fragment,o),w(ir.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(Ln.$$.fragment,o),w(lr.$$.fragment,o),w(dr.$$.fragment,o),w(mr.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(fr.$$.fragment,o),w(ur.$$.fragment,o),w(vr.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(Tr.$$.fragment,o),w(br.$$.fragment,o),w($r.$$.fragment,o),w(Bn.$$.fragment,o),w(Kn.$$.fragment,o),w(Jn.$$.fragment,o),w(Fr.$$.fragment,o),w(xr.$$.fragment,o),w(jr.$$.fragment,o),w(Xn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(qr.$$.fragment,o),w(Pr.$$.fragment,o),w(ts.$$.fragment,o),w(Nr.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(Ir.$$.fragment,o),w(Sr.$$.fragment,o),w(as.$$.fragment,o),w(Rr.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(Hr.$$.fragment,o),w(Qr.$$.fragment,o),w(ds.$$.fragment,o),w(Jr.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(Gr.$$.fragment,o),w(Xr.$$.fragment,o),w(fs.$$.fragment,o),w(ti.$$.fragment,o),w(us.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(oi.$$.fragment,o),w(ni.$$.fragment,o),w(vs.$$.fragment,o),w(ii.$$.fragment,o),w(Ts.$$.fragment,o),w(bs.$$.fragment,o),w(li.$$.fragment,o),w(di.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(Fs.$$.fragment,o),w(fi.$$.fragment,o),w(ui.$$.fragment,o),w(Ms.$$.fragment,o),w(vi.$$.fragment,o),w(zs.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(Ti.$$.fragment,o),w(bi.$$.fragment,o),w(zi.$$.fragment,o),w(Ps.$$.fragment,o),w(As.$$.fragment,o),w(Ci.$$.fragment,o),w(ji.$$.fragment,o),w(Si.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(Di.$$.fragment,o),w(Wi.$$.fragment,o),w(Gi.$$.fragment,o),w(Ss.$$.fragment,o),w(Ds.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(rl.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(gl.$$.fragment,o),w(Qs.$$.fragment,o),w(Vs.$$.fragment,o),w(_l.$$.fragment,o),w(kl.$$.fragment,o),w(Fl.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(xl.$$.fragment,o),w(Ml.$$.fragment,o),w(Ll.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),Hf=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(ya.$$.fragment,o),$(Ea.$$.fragment,o),$(kn.$$.fragment,o),$($a.$$.fragment,o),$(Fa.$$.fragment,o),$(Ma.$$.fragment,o),$(za.$$.fragment,o),$(qa.$$.fragment,o),$(Pa.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(Ia.$$.fragment,o),$(Ua.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(Ka.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(tr.$$.fragment,o),$(jn.$$.fragment,o),$(qn.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(ir.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(mr.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(fr.$$.fragment,o),$(ur.$$.fragment,o),$(vr.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Tr.$$.fragment,o),$(br.$$.fragment,o),$($r.$$.fragment,o),$(Bn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(jr.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(qr.$$.fragment,o),$(Pr.$$.fragment,o),$(ts.$$.fragment,o),$(Nr.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Ir.$$.fragment,o),$(Sr.$$.fragment,o),$(as.$$.fragment,o),$(Rr.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Hr.$$.fragment,o),$(Qr.$$.fragment,o),$(ds.$$.fragment,o),$(Jr.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(fs.$$.fragment,o),$(ti.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(vs.$$.fragment,o),$(ii.$$.fragment,o),$(Ts.$$.fragment,o),$(bs.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(fi.$$.fragment,o),$(ui.$$.fragment,o),$(Ms.$$.fragment,o),$(vi.$$.fragment,o),$(zs.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(Ti.$$.fragment,o),$(bi.$$.fragment,o),$(zi.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(Ci.$$.fragment,o),$(ji.$$.fragment,o),$(Si.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(Di.$$.fragment,o),$(Wi.$$.fragment,o),$(Gi.$$.fragment,o),$(Ss.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(rl.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(gl.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(_l.$$.fragment,o),$(kl.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(xl.$$.fragment,o),$(Ml.$$.fragment,o),$(Ll.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),Hf=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(C),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(ae),o&&t(he),o&&t(re),o&&t(me),o&&t(q),o&&t(U),o&&t(te),o&&t(xe),o&&t(be),o&&t(Me),o&&t(Z),F(ya),o&&t(Qm),o&&t(Tt),F(Ea),F(kn),o&&t(Vm),o&&t(_o),F($a),o&&t(Bm),o&&t(bt),F(Fa),o&&t(Km),o&&t(ko),F(Ma),o&&t(Jm),o&&t(yt),F(za),o&&t(Gm),o&&t(vo),F(qa),o&&t(Xm),o&&t(To),F(Pa),o&&t(Ym),o&&t(bo),F(Oa),o&&t(Zm),o&&t(yo),F(Na),o&&t(ef),o&&t(Ze),F(Ia),F(Ua),F($n),F(Fn),o&&t(tf),o&&t(wo),F(Ra),o&&t(of),o&&t(He),F(Ha),F(Ka),F(Mn),F(zn),o&&t(nf),o&&t(Fo),F(Ja),o&&t(sf),o&&t(et),F(Ga),F(tr),F(jn),F(qn),o&&t(af),o&&t(Mo),F(or),o&&t(rf),o&&t(Qe),F(nr),F(ir),F(An),F(On),F(Ln),o&&t(lf),o&&t(Co),F(lr),o&&t(df),o&&t(tt),F(dr),F(mr),F(In),F(Sn),F(Dn),F(Wn),F(Un),o&&t(cf),o&&t(qo),F(fr),o&&t(pf),o&&t(ot),F(ur),F(vr),F(Hn),F(Qn),o&&t(hf),o&&t(Ao),F(Tr),o&&t(mf),o&&t(Ve),F(br),F($r),F(Bn),F(Kn),F(Jn),o&&t(ff),o&&t(Lo),F(Fr),o&&t(uf),o&&t(nt),F(xr),F(jr),F(Xn),F(Yn),F(Zn),o&&t(gf),o&&t(So),F(qr),o&&t(_f),o&&t(Be),F(Pr),F(ts),F(Nr),F(os),F(ns),o&&t(kf),o&&t(Wo),F(Ir),o&&t(vf),o&&t(Oe),F(Sr),F(as),F(Rr),F(rs),F(is),o&&t(Tf),o&&t(Ro),F(Hr),o&&t(bf),o&&t(Le),F(Qr),F(ds),F(Jr),F(cs),F(ps),F(hs),o&&t(yf),o&&t(Qo),F(Gr),o&&t(Ef),o&&t(Ke),F(Xr),F(fs),F(ti),F(us),F(gs),F(_s),o&&t(wf),o&&t(Bo),F(oi),o&&t($f),o&&t(Je),F(ni),F(vs),F(ii),F(Ts),F(bs),o&&t(Ff),o&&t(Jo),F(li),o&&t(xf),o&&t(Ne),F(di),F(Es),F(mi),F(ws),F($s),F(Fs),o&&t(Mf),o&&t(Xo),F(fi),o&&t(zf),o&&t(Ge),F(ui),F(Ms),F(vi),F(zs),F(Cs),F(js),o&&t(Cf),o&&t(en),F(Ti),o&&t(jf),o&&t(Ie),F(bi),F(zi),F(Ps),F(As),o&&t(qf),o&&t(on),F(Ci),o&&t(Pf),o&&t(Pe),F(ji),F(Si),F(Ls),F(Ns),o&&t(Af),o&&t(sn),F(Di),o&&t(Of),o&&t(Se),F(Wi),F(Gi),F(Ss),F(Ds),o&&t(Lf),o&&t(rn),F(Xi),o&&t(Nf),o&&t(De),F(Yi),F(rl),F(Us),F(Rs),o&&t(If),o&&t(dn),F(il),o&&t(Sf),o&&t(We),F(ll),F(gl),F(Qs),F(Vs),o&&t(Df),o&&t(pn),F(_l),o&&t(Wf),o&&t(Ae),F(kl),F(Fl),F(Ks),F(Js),o&&t(Uf),o&&t(mn),F(xl),o&&t(Rf),o&&t(Ue),F(Ml),F(Ll),F(Xs),F(Ys)}}}const Bz={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function Kz(x){return NM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t4 extends PM{constructor(d){super();AM(this,d,Kz,Vz,OM,{})}}export{t4 as default,Bz as metadata};
