import{S as pt,i as ht,s as ut,e as o,k as c,w as x,t as n,M as mt,c as s,d as a,m as d,a as r,x as P,h as l,b as p,F as t,g as b,y as E,L as ft,q as z,o as H,B as q}from"../../chunks/vendor-4833417e.js";import{D as dt}from"../../chunks/Docstring-4f315ed9.js";import{C as We}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Fe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function bt(ue){let k,I,m,_,W,K,me,F,fe,se,A,be,re,y,C,G,O,_e,R,ge,ne,i,j,ke,u,ve,V,ye,we,J,$e,Ce,Q,Te,xe,X,Pe,Ee,ze,Y,He,qe,D,Ke,Z,Oe,je,N,le,w,T,ee,M,De,te,Ne,ie,g,L,Me,$,Le,ae,Se,Ie,oe,Ae,Ue,Be,S,ce;return K=new Fe({}),O=new Fe({}),j=new dt({props:{name:"class transformers.KerasMetricCallback",anchor:"transformers.KerasMetricCallback",parameters:[{name:"metric_fn",val:": typing.Callable"},{name:"eval_dataset",val:": typing.Union[tensorflow.python.data.ops.dataset_ops.DatasetV2, numpy.ndarray, tensorflow.python.framework.ops.Tensor, tuple, dict]"},{name:"output_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"label_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": typing.Optional[int] = None"},{name:"predict_with_generate",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16143/src/transformers/keras_callbacks.py#L22",parametersDescription:[{anchor:"transformers.KerasMetricCallback.metric_fn",description:`<strong>metric_fn</strong> (<code>Callable</code>) &#x2014;
Metric function provided by the user. It will be called with two arguments - <code>predictions</code> and <code>labels</code>.
These contain the model&#x2019;s outputs and matching labels from the dataset. It should return a dict mapping
metric names to numerical values.`,name:"metric_fn"},{anchor:"transformers.KerasMetricCallback.eval_dataset",description:`<strong>eval_dataset</strong> (<code>tf.data.Dataset</code> or <code>dict</code> or <code>tuple</code> or <code>np.ndarray</code> or <code>tf.Tensor</code>) &#x2014;
Validation data to be used to generate predictions for the <code>metric_fn</code>.`,name:"eval_dataset"},{anchor:"transformers.KerasMetricCallback.output_cols",description:"<strong>output_cols</strong> (`List[str], <em>optional</em>) &#x2014;\nA list of columns to be retained from the model output as the predictions. Defaults to all.",name:"output_cols"},{anchor:"transformers.KerasMetricCallback.label_cols",description:`<strong>label_cols</strong> (&#x2019;<code>List[str]</code>, <em>optional</em>&#x2019;) &#x2014;
A list of columns to be retained from the input dataset as the labels. Will be autodetected if this is not
supplied.`,name:"label_cols"},{anchor:"transformers.KerasMetricCallback.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size. Only used when the data is not a pre-batched <code>tf.data.Dataset</code>.`,name:"batch_size"},{anchor:"transformers.KerasMetricCallback.predict_with_generate",description:`<strong>predict_with_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether we should use <code>model.generate()</code> to get outputs for the model.`,name:"predict_with_generate"}]}}),D=new We({props:{code:`from datasets import load_metric

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
    <span class="hljs-keyword">return</span> {key: value.mid.fmeasure * <span class="hljs-number">100</span> <span class="hljs-keyword">for</span> key, value <span class="hljs-keyword">in</span> result.items()}`}}),N=new We({props:{code:"{'rouge1': 37.4199, 'rouge2': 13.9768, 'rougeL': 34.361, 'rougeLsum': 35.0781",highlighted:'{&#x27;rouge1&#x27;: <span class="hljs-number">37.4199</span>, &#x27;rouge2&#x27;: <span class="hljs-number">13.9768</span>, &#x27;rougeL&#x27;: <span class="hljs-number">34.361</span>, &#x27;rougeLsum&#x27;: <span class="hljs-number">35.0781</span>'}}),M=new Fe({}),L=new dt({props:{name:"class transformers.PushToHubCallback",anchor:"transformers.PushToHubCallback",parameters:[{name:"output_dir",val:": typing.Union[str, pathlib.Path]"},{name:"save_strategy",val:": typing.Union[str, transformers.trainer_utils.IntervalStrategy] = 'epoch'"},{name:"save_steps",val:": typing.Optional[int] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"hub_model_id",val:": typing.Optional[str] = None"},{name:"hub_token",val:": typing.Optional[str] = None"},{name:"checkpoint",val:": bool = False"},{name:"**model_card_args",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16143/src/transformers/keras_callbacks.py#L242",parametersDescription:[{anchor:"transformers.PushToHubCallback.output_dir",description:`<strong>output_dir</strong> (<code>str</code>) &#x2014;
The output directory where the model predictions and checkpoints will be written and synced with the
repository on the Hub.`,name:"output_dir"},{anchor:"transformers.PushToHubCallback.save_strategy",description:`<strong>save_strategy</strong> (<code>str</code> or <a href="/docs/transformers/pr_16143/en/internal/trainer_utils#transformers.IntervalStrategy">IntervalStrategy</a>, <em>optional</em>, defaults to <code>&quot;epoch&quot;</code>) &#x2014;
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
resumed. Only usable when <code>save_strategy</code> is <code>&quot;epoch&quot;</code>.`,name:"checkpoint"}]}}),S=new We({props:{code:`from transformers.keras_callbacks import PushToHubCallback

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

model.fit(train_dataset, callbacks=[push_to_hub_callback])`}}),{c(){k=o("meta"),I=c(),m=o("h1"),_=o("a"),W=o("span"),x(K.$$.fragment),me=c(),F=o("span"),fe=n("Keras callbacks"),se=c(),A=o("p"),be=n(`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),re=c(),y=o("h2"),C=o("a"),G=o("span"),x(O.$$.fragment),_e=c(),R=o("span"),ge=n("KerasMetricCallback"),ne=c(),i=o("div"),x(j.$$.fragment),ke=c(),u=o("p"),ve=n(`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),V=o("code"),ye=n("eval_dataset"),we=n(" before being passed to the "),J=o("code"),$e=n("metric_fn"),Ce=n(" in "),Q=o("code"),Te=n("np.ndarray"),xe=n(" format. The "),X=o("code"),Pe=n("metric_fn"),Ee=n(` should compute
metrics and return a dict mapping metric names to metric values.`),ze=c(),Y=o("p"),He=n(`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),qe=c(),x(D.$$.fragment),Ke=c(),Z=o("p"),Oe=n("The above function will return a dict containing values which will be logged like any other Keras metric:"),je=c(),x(N.$$.fragment),le=c(),w=o("h2"),T=o("a"),ee=o("span"),x(M.$$.fragment),De=c(),te=o("span"),Ne=n("PushToHubCallback"),ie=c(),g=o("div"),x(L.$$.fragment),Me=c(),$=o("p"),Le=n(`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),ae=o("code"),Se=n("save_strategy"),Ie=n(` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),oe=o("code"),Ae=n("from_pretrained"),Ue=n(" method."),Be=c(),x(S.$$.fragment),this.h()},l(e){const h=mt('[data-svelte="svelte-1phssyn"]',document.head);k=s(h,"META",{name:!0,content:!0}),h.forEach(a),I=d(e),m=s(e,"H1",{class:!0});var de=r(m);_=s(de,"A",{id:!0,class:!0,href:!0});var Ge=r(_);W=s(Ge,"SPAN",{});var Re=r(W);P(K.$$.fragment,Re),Re.forEach(a),Ge.forEach(a),me=d(de),F=s(de,"SPAN",{});var Ve=r(F);fe=l(Ve,"Keras callbacks"),Ve.forEach(a),de.forEach(a),se=d(e),A=s(e,"P",{});var Je=r(A);be=l(Je,`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),Je.forEach(a),re=d(e),y=s(e,"H2",{class:!0});var pe=r(y);C=s(pe,"A",{id:!0,class:!0,href:!0});var Qe=r(C);G=s(Qe,"SPAN",{});var Xe=r(G);P(O.$$.fragment,Xe),Xe.forEach(a),Qe.forEach(a),_e=d(pe),R=s(pe,"SPAN",{});var Ye=r(R);ge=l(Ye,"KerasMetricCallback"),Ye.forEach(a),pe.forEach(a),ne=d(e),i=s(e,"DIV",{class:!0});var f=r(i);P(j.$$.fragment,f),ke=d(f),u=s(f,"P",{});var v=r(u);ve=l(v,`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),V=s(v,"CODE",{});var Ze=r(V);ye=l(Ze,"eval_dataset"),Ze.forEach(a),we=l(v," before being passed to the "),J=s(v,"CODE",{});var et=r(J);$e=l(et,"metric_fn"),et.forEach(a),Ce=l(v," in "),Q=s(v,"CODE",{});var tt=r(Q);Te=l(tt,"np.ndarray"),tt.forEach(a),xe=l(v," format. The "),X=s(v,"CODE",{});var at=r(X);Pe=l(at,"metric_fn"),at.forEach(a),Ee=l(v,` should compute
metrics and return a dict mapping metric names to metric values.`),v.forEach(a),ze=d(f),Y=s(f,"P",{});var ot=r(Y);He=l(ot,`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),ot.forEach(a),qe=d(f),P(D.$$.fragment,f),Ke=d(f),Z=s(f,"P",{});var st=r(Z);Oe=l(st,"The above function will return a dict containing values which will be logged like any other Keras metric:"),st.forEach(a),je=d(f),P(N.$$.fragment,f),f.forEach(a),le=d(e),w=s(e,"H2",{class:!0});var he=r(w);T=s(he,"A",{id:!0,class:!0,href:!0});var rt=r(T);ee=s(rt,"SPAN",{});var nt=r(ee);P(M.$$.fragment,nt),nt.forEach(a),rt.forEach(a),De=d(he),te=s(he,"SPAN",{});var lt=r(te);Ne=l(lt,"PushToHubCallback"),lt.forEach(a),he.forEach(a),ie=d(e),g=s(e,"DIV",{class:!0});var U=r(g);P(L.$$.fragment,U),Me=d(U),$=s(U,"P",{});var B=r($);Le=l(B,`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),ae=s(B,"CODE",{});var it=r(ae);Se=l(it,"save_strategy"),it.forEach(a),Ie=l(B,` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),oe=s(B,"CODE",{});var ct=r(oe);Ae=l(ct,"from_pretrained"),ct.forEach(a),Ue=l(B," method."),B.forEach(a),Be=d(U),P(S.$$.fragment,U),U.forEach(a),this.h()},h(){p(k,"name","hf:doc:metadata"),p(k,"content",JSON.stringify(_t)),p(_,"id","keras-callbacks"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#keras-callbacks"),p(m,"class","relative group"),p(C,"id","transformers.KerasMetricCallback"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#transformers.KerasMetricCallback"),p(y,"class","relative group"),p(i,"class","docstring"),p(T,"id","transformers.PushToHubCallback"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#transformers.PushToHubCallback"),p(w,"class","relative group"),p(g,"class","docstring")},m(e,h){t(document.head,k),b(e,I,h),b(e,m,h),t(m,_),t(_,W),E(K,W,null),t(m,me),t(m,F),t(F,fe),b(e,se,h),b(e,A,h),t(A,be),b(e,re,h),b(e,y,h),t(y,C),t(C,G),E(O,G,null),t(y,_e),t(y,R),t(R,ge),b(e,ne,h),b(e,i,h),E(j,i,null),t(i,ke),t(i,u),t(u,ve),t(u,V),t(V,ye),t(u,we),t(u,J),t(J,$e),t(u,Ce),t(u,Q),t(Q,Te),t(u,xe),t(u,X),t(X,Pe),t(u,Ee),t(i,ze),t(i,Y),t(Y,He),t(i,qe),E(D,i,null),t(i,Ke),t(i,Z),t(Z,Oe),t(i,je),E(N,i,null),b(e,le,h),b(e,w,h),t(w,T),t(T,ee),E(M,ee,null),t(w,De),t(w,te),t(te,Ne),b(e,ie,h),b(e,g,h),E(L,g,null),t(g,Me),t(g,$),t($,Le),t($,ae),t(ae,Se),t($,Ie),t($,oe),t(oe,Ae),t($,Ue),t(g,Be),E(S,g,null),ce=!0},p:ft,i(e){ce||(z(K.$$.fragment,e),z(O.$$.fragment,e),z(j.$$.fragment,e),z(D.$$.fragment,e),z(N.$$.fragment,e),z(M.$$.fragment,e),z(L.$$.fragment,e),z(S.$$.fragment,e),ce=!0)},o(e){H(K.$$.fragment,e),H(O.$$.fragment,e),H(j.$$.fragment,e),H(D.$$.fragment,e),H(N.$$.fragment,e),H(M.$$.fragment,e),H(L.$$.fragment,e),H(S.$$.fragment,e),ce=!1},d(e){a(k),e&&a(I),e&&a(m),q(K),e&&a(se),e&&a(A),e&&a(re),e&&a(y),q(O),e&&a(ne),e&&a(i),q(j),q(D),q(N),e&&a(le),e&&a(w),q(M),e&&a(ie),e&&a(g),q(L),q(S)}}}const _t={local:"keras-callbacks",sections:[{local:"transformers.KerasMetricCallback",title:"KerasMetricCallback"},{local:"transformers.PushToHubCallback",title:"PushToHubCallback"}],title:"Keras callbacks"};function gt(ue,k,I){let{fw:m}=k;return ue.$$set=_=>{"fw"in _&&I(0,m=_.fw)},[m]}class Ct extends pt{constructor(k){super();ht(this,k,gt,bt,ut,{fw:0})}}export{Ct as default,_t as metadata};
