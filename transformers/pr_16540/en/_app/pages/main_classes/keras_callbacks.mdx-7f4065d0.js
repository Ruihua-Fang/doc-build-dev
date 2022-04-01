import{S as pt,i as ht,s as ut,e as o,k as c,w as P,t as n,M as mt,c as s,d as a,m as d,a as r,x,h as l,b as p,F as t,g as f,y as E,L as ft,q as z,o as H,B as q,v as bt}from"../../chunks/vendor-6b77c823.js";import{D as dt}from"../../chunks/Docstring-abef54e3.js";import{C as Be}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as We}from"../../chunks/IconCopyLink-7a11ce68.js";function _t(Fe){let g,oe,k,$,B,K,ue,W,me,se,I,fe,re,v,C,F,O,be,R,_e,ne,i,j,ge,u,ke,G,ve,ye,V,we,$e,J,Ce,Te,Q,Pe,xe,Ee,X,ze,He,D,qe,Y,Ke,Oe,M,le,y,T,Z,N,je,ee,De,ie,b,L,Me,w,Ne,te,Le,Se,ae,Ie,Ae,Ue,S,ce;return K=new We({}),O=new We({}),j=new dt({props:{name:"class transformers.KerasMetricCallback",anchor:"transformers.KerasMetricCallback",parameters:[{name:"metric_fn",val:": typing.Callable"},{name:"eval_dataset",val:": typing.Union[tensorflow.python.data.ops.dataset_ops.DatasetV2, numpy.ndarray, tensorflow.python.framework.ops.Tensor, tuple, dict]"},{name:"output_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"label_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": typing.Optional[int] = None"},{name:"predict_with_generate",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16540/src/transformers/keras_callbacks.py#L22",parametersDescription:[{anchor:"transformers.KerasMetricCallback.metric_fn",description:`<strong>metric_fn</strong> (<code>Callable</code>) &#x2014;
Metric function provided by the user. It will be called with two arguments - <code>predictions</code> and <code>labels</code>.
These contain the model&#x2019;s outputs and matching labels from the dataset. It should return a dict mapping
metric names to numerical values.`,name:"metric_fn"},{anchor:"transformers.KerasMetricCallback.eval_dataset",description:`<strong>eval_dataset</strong> (<code>tf.data.Dataset</code> or <code>dict</code> or <code>tuple</code> or <code>np.ndarray</code> or <code>tf.Tensor</code>) &#x2014;
Validation data to be used to generate predictions for the <code>metric_fn</code>.`,name:"eval_dataset"},{anchor:"transformers.KerasMetricCallback.output_cols",description:"<strong>output_cols</strong> (`List[str], <em>optional</em>) &#x2014;\nA list of columns to be retained from the model output as the predictions. Defaults to all.",name:"output_cols"},{anchor:"transformers.KerasMetricCallback.label_cols",description:`<strong>label_cols</strong> (&#x2019;<code>List[str]</code>, <em>optional</em>&#x2019;) &#x2014;
A list of columns to be retained from the input dataset as the labels. Will be autodetected if this is not
supplied.`,name:"label_cols"},{anchor:"transformers.KerasMetricCallback.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size. Only used when the data is not a pre-batched <code>tf.data.Dataset</code>.`,name:"batch_size"},{anchor:"transformers.KerasMetricCallback.predict_with_generate",description:`<strong>predict_with_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether we should use <code>model.generate()</code> to get outputs for the model.`,name:"predict_with_generate"}]}}),D=new Be({props:{code:`from datasets import load_metric

rouge_metric = load_metric("rouge")


def rouge_fn(predictions, labels):
    decoded_predictions = tokenizer.batch_decode(predictions, skip_special_tokens=True)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True)
    result = rouge_metric.compute(predictions=decoded_predictions, references=decoded_labels)
    return {key: value.mid.fmeasure * 100 for key, value in result.items()}`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

rouge_metric = load_metric(<span class="hljs-string">&quot;rouge&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">rouge_fn</span>(<span class="hljs-params">predictions, labels</span>):
    decoded_predictions = tokenizer.batch_decode(predictions, skip_special_tokens=<span class="hljs-literal">True</span>)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=<span class="hljs-literal">True</span>)
    result = rouge_metric.compute(predictions=decoded_predictions, references=decoded_labels)
    <span class="hljs-keyword">return</span> {key: value.mid.fmeasure * <span class="hljs-number">100</span> <span class="hljs-keyword">for</span> key, value <span class="hljs-keyword">in</span> result.items()}`}}),M=new Be({props:{code:"{'rouge1': 37.4199, 'rouge2': 13.9768, 'rougeL': 34.361, 'rougeLsum': 35.0781",highlighted:'{&#x27;rouge1&#x27;: <span class="hljs-number">37.4199</span>, &#x27;rouge2&#x27;: <span class="hljs-number">13.9768</span>, &#x27;rougeL&#x27;: <span class="hljs-number">34.361</span>, &#x27;rougeLsum&#x27;: <span class="hljs-number">35.0781</span>'}}),N=new We({}),L=new dt({props:{name:"class transformers.PushToHubCallback",anchor:"transformers.PushToHubCallback",parameters:[{name:"output_dir",val:": typing.Union[str, pathlib.Path]"},{name:"save_strategy",val:": typing.Union[str, transformers.trainer_utils.IntervalStrategy] = 'epoch'"},{name:"save_steps",val:": typing.Optional[int] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"hub_model_id",val:": typing.Optional[str] = None"},{name:"hub_token",val:": typing.Optional[str] = None"},{name:"checkpoint",val:": bool = False"},{name:"**model_card_args",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16540/src/transformers/keras_callbacks.py#L242",parametersDescription:[{anchor:"transformers.PushToHubCallback.output_dir",description:`<strong>output_dir</strong> (<code>str</code>) &#x2014;
The output directory where the model predictions and checkpoints will be written and synced with the
repository on the Hub.`,name:"output_dir"},{anchor:"transformers.PushToHubCallback.save_strategy",description:`<strong>save_strategy</strong> (<code>str</code> or <a href="/docs/transformers/pr_16540/en/internal/trainer_utils#transformers.IntervalStrategy">IntervalStrategy</a>, <em>optional</em>, defaults to <code>&quot;epoch&quot;</code>) &#x2014;
The checkpoint save strategy to adopt during training. Possible values are:</p>
<ul>
<li><code>&quot;no&quot;</code>: Save is done at the end of training.</li>
<li><code>&quot;epoch&quot;</code>: Save is done at the end of each epoch.</li>
<li><code>&quot;steps&quot;</code>: Save is done every <code>save_steps</code></li>
</ul>`,name:"save_strategy"},{anchor:"transformers.PushToHubCallback.save_steps",description:`<strong>save_steps</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of steps between saves when using the &#x201C;steps&#x201D; <code>save_strategy</code>.`,name:"save_steps"},{anchor:"transformers.PushToHubCallback.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>, <em>optional</em>) &#x2014;
The tokenizer used by the model. If supplied, will be uploaded to the repo alongside the weights.`,name:"tokenizer"},{anchor:"transformers.PushToHubCallback.hub_model_id",description:`<strong>hub_model_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the repository to keep in sync with the local <code>output_dir</code>. It can be a simple model ID in
which case the model will be pushed in your namespace. Otherwise it should be the whole repository name,
for instance <code>&quot;user_name/model&quot;</code>, which allows you to push to an organization you are a member of with
<code>&quot;organization_name/model&quot;</code>.</p>
<p>Will default to to the name of <code>output_dir</code>.`,name:"hub_model_id"},{anchor:"transformers.PushToHubCallback.hub_token",description:`<strong>hub_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token to use to push the model to the Hub. Will default to the token in the cache folder obtained with
<code>huggingface-cli login</code>.`,name:"hub_token"},{anchor:"transformers.PushToHubCallback.checkpoint",description:`<strong>checkpoint</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to save full training checkpoints (including epoch and optimizer state) to allow training to be
resumed. Only usable when <code>save_strategy</code> is <code>&quot;epoch&quot;</code>.`,name:"checkpoint"}]}}),S=new Be({props:{code:`from transformers.keras_callbacks import PushToHubCallback

push_to_hub_callback = PushToHubCallback(
    output_dir="./model_save",
    tokenizer=tokenizer,
    hub_model_id="gpt5-7xlarge",
)

model.fit(train_dataset, callbacks=[push_to_hub_callback])`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

push_to_hub_callback = PushToHubCallback(
    output_dir=<span class="hljs-string">&quot;./model_save&quot;</span>,
    tokenizer=tokenizer,
    hub_model_id=<span class="hljs-string">&quot;gpt5-7xlarge&quot;</span>,
)

model.fit(train_dataset, callbacks=[push_to_hub_callback])`}}),{c(){g=o("meta"),oe=c(),k=o("h1"),$=o("a"),B=o("span"),P(K.$$.fragment),ue=c(),W=o("span"),me=n("Keras callbacks"),se=c(),I=o("p"),fe=n(`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),re=c(),v=o("h2"),C=o("a"),F=o("span"),P(O.$$.fragment),be=c(),R=o("span"),_e=n("KerasMetricCallback"),ne=c(),i=o("div"),P(j.$$.fragment),ge=c(),u=o("p"),ke=n(`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),G=o("code"),ve=n("eval_dataset"),ye=n(" before being passed to the "),V=o("code"),we=n("metric_fn"),$e=n(" in "),J=o("code"),Ce=n("np.ndarray"),Te=n(" format. The "),Q=o("code"),Pe=n("metric_fn"),xe=n(` should compute
metrics and return a dict mapping metric names to metric values.`),Ee=c(),X=o("p"),ze=n(`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),He=c(),P(D.$$.fragment),qe=c(),Y=o("p"),Ke=n("The above function will return a dict containing values which will be logged like any other Keras metric:"),Oe=c(),P(M.$$.fragment),le=c(),y=o("h2"),T=o("a"),Z=o("span"),P(N.$$.fragment),je=c(),ee=o("span"),De=n("PushToHubCallback"),ie=c(),b=o("div"),P(L.$$.fragment),Me=c(),w=o("p"),Ne=n(`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),te=o("code"),Le=n("save_strategy"),Se=n(` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),ae=o("code"),Ie=n("from_pretrained"),Ae=n(" method."),Ue=c(),P(S.$$.fragment),this.h()},l(e){const h=mt('[data-svelte="svelte-1phssyn"]',document.head);g=s(h,"META",{name:!0,content:!0}),h.forEach(a),oe=d(e),k=s(e,"H1",{class:!0});var de=r(k);$=s(de,"A",{id:!0,class:!0,href:!0});var Re=r($);B=s(Re,"SPAN",{});var Ge=r(B);x(K.$$.fragment,Ge),Ge.forEach(a),Re.forEach(a),ue=d(de),W=s(de,"SPAN",{});var Ve=r(W);me=l(Ve,"Keras callbacks"),Ve.forEach(a),de.forEach(a),se=d(e),I=s(e,"P",{});var Je=r(I);fe=l(Je,`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),Je.forEach(a),re=d(e),v=s(e,"H2",{class:!0});var pe=r(v);C=s(pe,"A",{id:!0,class:!0,href:!0});var Qe=r(C);F=s(Qe,"SPAN",{});var Xe=r(F);x(O.$$.fragment,Xe),Xe.forEach(a),Qe.forEach(a),be=d(pe),R=s(pe,"SPAN",{});var Ye=r(R);_e=l(Ye,"KerasMetricCallback"),Ye.forEach(a),pe.forEach(a),ne=d(e),i=s(e,"DIV",{class:!0});var m=r(i);x(j.$$.fragment,m),ge=d(m),u=s(m,"P",{});var _=r(u);ke=l(_,`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),G=s(_,"CODE",{});var Ze=r(G);ve=l(Ze,"eval_dataset"),Ze.forEach(a),ye=l(_," before being passed to the "),V=s(_,"CODE",{});var et=r(V);we=l(et,"metric_fn"),et.forEach(a),$e=l(_," in "),J=s(_,"CODE",{});var tt=r(J);Ce=l(tt,"np.ndarray"),tt.forEach(a),Te=l(_," format. The "),Q=s(_,"CODE",{});var at=r(Q);Pe=l(at,"metric_fn"),at.forEach(a),xe=l(_,` should compute
metrics and return a dict mapping metric names to metric values.`),_.forEach(a),Ee=d(m),X=s(m,"P",{});var ot=r(X);ze=l(ot,`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),ot.forEach(a),He=d(m),x(D.$$.fragment,m),qe=d(m),Y=s(m,"P",{});var st=r(Y);Ke=l(st,"The above function will return a dict containing values which will be logged like any other Keras metric:"),st.forEach(a),Oe=d(m),x(M.$$.fragment,m),m.forEach(a),le=d(e),y=s(e,"H2",{class:!0});var he=r(y);T=s(he,"A",{id:!0,class:!0,href:!0});var rt=r(T);Z=s(rt,"SPAN",{});var nt=r(Z);x(N.$$.fragment,nt),nt.forEach(a),rt.forEach(a),je=d(he),ee=s(he,"SPAN",{});var lt=r(ee);De=l(lt,"PushToHubCallback"),lt.forEach(a),he.forEach(a),ie=d(e),b=s(e,"DIV",{class:!0});var A=r(b);x(L.$$.fragment,A),Me=d(A),w=s(A,"P",{});var U=r(w);Ne=l(U,`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),te=s(U,"CODE",{});var it=r(te);Le=l(it,"save_strategy"),it.forEach(a),Se=l(U,` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),ae=s(U,"CODE",{});var ct=r(ae);Ie=l(ct,"from_pretrained"),ct.forEach(a),Ae=l(U," method."),U.forEach(a),Ue=d(A),x(S.$$.fragment,A),A.forEach(a),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(gt)),p($,"id","keras-callbacks"),p($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($,"href","#keras-callbacks"),p(k,"class","relative group"),p(C,"id","transformers.KerasMetricCallback"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#transformers.KerasMetricCallback"),p(v,"class","relative group"),p(i,"class","docstring"),p(T,"id","transformers.PushToHubCallback"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#transformers.PushToHubCallback"),p(y,"class","relative group"),p(b,"class","docstring")},m(e,h){t(document.head,g),f(e,oe,h),f(e,k,h),t(k,$),t($,B),E(K,B,null),t(k,ue),t(k,W),t(W,me),f(e,se,h),f(e,I,h),t(I,fe),f(e,re,h),f(e,v,h),t(v,C),t(C,F),E(O,F,null),t(v,be),t(v,R),t(R,_e),f(e,ne,h),f(e,i,h),E(j,i,null),t(i,ge),t(i,u),t(u,ke),t(u,G),t(G,ve),t(u,ye),t(u,V),t(V,we),t(u,$e),t(u,J),t(J,Ce),t(u,Te),t(u,Q),t(Q,Pe),t(u,xe),t(i,Ee),t(i,X),t(X,ze),t(i,He),E(D,i,null),t(i,qe),t(i,Y),t(Y,Ke),t(i,Oe),E(M,i,null),f(e,le,h),f(e,y,h),t(y,T),t(T,Z),E(N,Z,null),t(y,je),t(y,ee),t(ee,De),f(e,ie,h),f(e,b,h),E(L,b,null),t(b,Me),t(b,w),t(w,Ne),t(w,te),t(te,Le),t(w,Se),t(w,ae),t(ae,Ie),t(w,Ae),t(b,Ue),E(S,b,null),ce=!0},p:ft,i(e){ce||(z(K.$$.fragment,e),z(O.$$.fragment,e),z(j.$$.fragment,e),z(D.$$.fragment,e),z(M.$$.fragment,e),z(N.$$.fragment,e),z(L.$$.fragment,e),z(S.$$.fragment,e),ce=!0)},o(e){H(K.$$.fragment,e),H(O.$$.fragment,e),H(j.$$.fragment,e),H(D.$$.fragment,e),H(M.$$.fragment,e),H(N.$$.fragment,e),H(L.$$.fragment,e),H(S.$$.fragment,e),ce=!1},d(e){a(g),e&&a(oe),e&&a(k),q(K),e&&a(se),e&&a(I),e&&a(re),e&&a(v),q(O),e&&a(ne),e&&a(i),q(j),q(D),q(M),e&&a(le),e&&a(y),q(N),e&&a(ie),e&&a(b),q(L),q(S)}}}const gt={local:"keras-callbacks",sections:[{local:"transformers.KerasMetricCallback",title:"KerasMetricCallback"},{local:"transformers.PushToHubCallback",title:"PushToHubCallback"}],title:"Keras callbacks"};function kt(Fe){return bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ct extends pt{constructor(g){super();ht(this,g,kt,_t,ut,{})}}export{Ct as default,gt as metadata};
