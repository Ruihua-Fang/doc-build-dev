import{S as it,i as dt,s as pt,e as s,k as f,w as $,t as p,M as mt,c as n,d as a,m as b,a as l,x as y,h as m,b as h,F as t,g,y as w,q as C,o as x,B as T,v as ut,L as Fe}from"../../chunks/vendor-6b77c823.js";import{D as ct}from"../../chunks/Docstring-1088f2fb.js";import{C as Re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Be}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as We}from"../../chunks/ExampleCodeBlock-5212b321.js";function ht(j){let r,u;return r=new Re({props:{code:`from datasets import load_metric

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
    <span class="hljs-keyword">return</span> {key: value.mid.fmeasure * <span class="hljs-number">100</span> <span class="hljs-keyword">for</span> key, value <span class="hljs-keyword">in</span> result.items()}`}}),{c(){$(r.$$.fragment)},l(o){y(r.$$.fragment,o)},m(o,d){w(r,o,d),u=!0},p:Fe,i(o){u||(C(r.$$.fragment,o),u=!0)},o(o){x(r.$$.fragment,o),u=!1},d(o){T(r,o)}}}function ft(j){let r,u,o,d,P;return d=new Re({props:{code:"{'rouge1': 37.4199, 'rouge2': 13.9768, 'rougeL': 34.361, 'rougeLsum': 35.0781",highlighted:'{&#x27;rouge1&#x27;: <span class="hljs-number">37.4199</span>, &#x27;rouge2&#x27;: <span class="hljs-number">13.9768</span>, &#x27;rougeL&#x27;: <span class="hljs-number">34.361</span>, &#x27;rougeLsum&#x27;: <span class="hljs-number">35.0781</span>'}}),{c(){r=s("p"),u=p("The above function will return a dict containing values which will be logged like any other Keras metric:"),o=f(),$(d.$$.fragment)},l(c){r=n(c,"P",{});var E=l(r);u=m(E,"The above function will return a dict containing values which will be logged like any other Keras metric:"),E.forEach(a),o=b(c),y(d.$$.fragment,c)},m(c,E){g(c,r,E),t(r,u),g(c,o,E),w(d,c,E),P=!0},p:Fe,i(c){P||(C(d.$$.fragment,c),P=!0)},o(c){x(d.$$.fragment,c),P=!1},d(c){c&&a(r),c&&a(o),T(d,c)}}}function bt(j){let r,u;return r=new Re({props:{code:`from transformers.keras_callbacks import PushToHubCallback

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

model.fit(train_dataset, callbacks=[push_to_hub_callback])`}}),{c(){$(r.$$.fragment)},l(o){y(r.$$.fragment,o)},m(o,d){w(r,o,d),u=!0},p:Fe,i(o){u||(C(r.$$.fragment,o),u=!0)},o(o){x(r.$$.fragment,o),u=!1},d(o){T(r,o)}}}function _t(j){let r,u,o,d,P,c,E,V,be,ce,F,_e,ie,K,M,J,I,ge,Q,ke,de,_,A,ve,k,$e,X,ye,we,Y,Ce,xe,Z,Te,Pe,ee,Ee,He,ze,te,Ke,qe,D,Oe,N,pe,q,L,ae,U,je,oe,Me,me,v,B,De,O,Ne,re,Le,Se,se,Ie,Ae,Ue,S,ue;return c=new Be({}),I=new Be({}),A=new ct({props:{name:"class transformers.KerasMetricCallback",anchor:"transformers.KerasMetricCallback",parameters:[{name:"metric_fn",val:": typing.Callable"},{name:"eval_dataset",val:": typing.Union[tensorflow.python.data.ops.dataset_ops.DatasetV2, numpy.ndarray, tensorflow.python.framework.ops.Tensor, tuple, dict]"},{name:"output_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"label_cols",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": typing.Optional[int] = None"},{name:"predict_with_generate",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.KerasMetricCallback.metric_fn",description:`<strong>metric_fn</strong> (<code>Callable</code>) &#x2014;
Metric function provided by the user. It will be called with two arguments - <code>predictions</code> and <code>labels</code>.
These contain the model&#x2019;s outputs and matching labels from the dataset. It should return a dict mapping
metric names to numerical values.`,name:"metric_fn"},{anchor:"transformers.KerasMetricCallback.eval_dataset",description:`<strong>eval_dataset</strong> (<code>tf.data.Dataset</code> or <code>dict</code> or <code>tuple</code> or <code>np.ndarray</code> or <code>tf.Tensor</code>) &#x2014;
Validation data to be used to generate predictions for the <code>metric_fn</code>.`,name:"eval_dataset"},{anchor:"transformers.KerasMetricCallback.output_cols",description:"<strong>output_cols</strong> (`List[str], <em>optional</em>) &#x2014;\nA list of columns to be retained from the model output as the predictions. Defaults to all.",name:"output_cols"},{anchor:"transformers.KerasMetricCallback.label_cols",description:`<strong>label_cols</strong> (&#x2019;<code>List[str]</code>, <em>optional</em>&#x2019;) &#x2014;
A list of columns to be retained from the input dataset as the labels. Will be autodetected if this is not
supplied.`,name:"label_cols"},{anchor:"transformers.KerasMetricCallback.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size. Only used when the data is not a pre-batched <code>tf.data.Dataset</code>.`,name:"batch_size"},{anchor:"transformers.KerasMetricCallback.predict_with_generate",description:`<strong>predict_with_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether we should use <code>model.generate()</code> to get outputs for the model.`,name:"predict_with_generate"}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/keras_callbacks.py#L22"}}),D=new We({props:{anchor:"transformers.KerasMetricCallback.example",$$slots:{default:[ht]},$$scope:{ctx:j}}}),N=new We({props:{anchor:"transformers.KerasMetricCallback.example-2",$$slots:{default:[ft]},$$scope:{ctx:j}}}),U=new Be({}),B=new ct({props:{name:"class transformers.PushToHubCallback",anchor:"transformers.PushToHubCallback",parameters:[{name:"output_dir",val:": typing.Union[str, pathlib.Path]"},{name:"save_strategy",val:": typing.Union[str, transformers.trainer_utils.IntervalStrategy] = 'epoch'"},{name:"save_steps",val:": typing.Optional[int] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"hub_model_id",val:": typing.Optional[str] = None"},{name:"hub_token",val:": typing.Optional[str] = None"},{name:"checkpoint",val:": bool = False"},{name:"**model_card_args",val:""}],parametersDescription:[{anchor:"transformers.PushToHubCallback.output_dir",description:`<strong>output_dir</strong> (<code>str</code>) &#x2014;
The output directory where the model predictions and checkpoints will be written and synced with the
repository on the Hub.`,name:"output_dir"},{anchor:"transformers.PushToHubCallback.save_strategy",description:`<strong>save_strategy</strong> (<code>str</code> or <a href="/docs/transformers/pr_16894/en/internal/trainer_utils#transformers.IntervalStrategy">IntervalStrategy</a>, <em>optional</em>, defaults to <code>&quot;epoch&quot;</code>) &#x2014;
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
resumed. Only usable when <code>save_strategy</code> is <code>&quot;epoch&quot;</code>.`,name:"checkpoint"}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/keras_callbacks.py#L242"}}),S=new We({props:{anchor:"transformers.PushToHubCallback.example",$$slots:{default:[bt]},$$scope:{ctx:j}}}),{c(){r=s("meta"),u=f(),o=s("h1"),d=s("a"),P=s("span"),$(c.$$.fragment),E=f(),V=s("span"),be=p("Keras callbacks"),ce=f(),F=s("p"),_e=p(`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),ie=f(),K=s("h2"),M=s("a"),J=s("span"),$(I.$$.fragment),ge=f(),Q=s("span"),ke=p("KerasMetricCallback"),de=f(),_=s("div"),$(A.$$.fragment),ve=f(),k=s("p"),$e=p(`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),X=s("code"),ye=p("eval_dataset"),we=p(" before being passed to the "),Y=s("code"),Ce=p("metric_fn"),xe=p(" in "),Z=s("code"),Te=p("np.ndarray"),Pe=p(" format. The "),ee=s("code"),Ee=p("metric_fn"),He=p(` should compute
metrics and return a dict mapping metric names to metric values.`),ze=f(),te=s("p"),Ke=p(`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),qe=f(),$(D.$$.fragment),Oe=f(),$(N.$$.fragment),pe=f(),q=s("h2"),L=s("a"),ae=s("span"),$(U.$$.fragment),je=f(),oe=s("span"),Me=p("PushToHubCallback"),me=f(),v=s("div"),$(B.$$.fragment),De=f(),O=s("p"),Ne=p(`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),re=s("code"),Le=p("save_strategy"),Se=p(` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),se=s("code"),Ie=p("from_pretrained"),Ae=p(" method."),Ue=f(),$(S.$$.fragment),this.h()},l(e){const i=mt('[data-svelte="svelte-1phssyn"]',document.head);r=n(i,"META",{name:!0,content:!0}),i.forEach(a),u=b(e),o=n(e,"H1",{class:!0});var W=l(o);d=n(W,"A",{id:!0,class:!0,href:!0});var ne=l(d);P=n(ne,"SPAN",{});var le=l(P);y(c.$$.fragment,le),le.forEach(a),ne.forEach(a),E=b(W),V=n(W,"SPAN",{});var Ge=l(V);be=m(Ge,"Keras callbacks"),Ge.forEach(a),W.forEach(a),ce=b(e),F=n(e,"P",{});var Ve=l(F);_e=m(Ve,`When training a Transformers model with Keras, there are some library-specific callbacks available to automate common
tasks:`),Ve.forEach(a),ie=b(e),K=n(e,"H2",{class:!0});var he=l(K);M=n(he,"A",{id:!0,class:!0,href:!0});var Je=l(M);J=n(Je,"SPAN",{});var Qe=l(J);y(I.$$.fragment,Qe),Qe.forEach(a),Je.forEach(a),ge=b(he),Q=n(he,"SPAN",{});var Xe=l(Q);ke=m(Xe,"KerasMetricCallback"),Xe.forEach(a),he.forEach(a),de=b(e),_=n(e,"DIV",{class:!0});var H=l(_);y(A.$$.fragment,H),ve=b(H),k=n(H,"P",{});var z=l(k);$e=m(z,`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
`),X=n(z,"CODE",{});var Ye=l(X);ye=m(Ye,"eval_dataset"),Ye.forEach(a),we=m(z," before being passed to the "),Y=n(z,"CODE",{});var Ze=l(Y);Ce=m(Ze,"metric_fn"),Ze.forEach(a),xe=m(z," in "),Z=n(z,"CODE",{});var et=l(Z);Te=m(et,"np.ndarray"),et.forEach(a),Pe=m(z," format. The "),ee=n(z,"CODE",{});var tt=l(ee);Ee=m(tt,"metric_fn"),tt.forEach(a),He=m(z,` should compute
metrics and return a dict mapping metric names to metric values.`),z.forEach(a),ze=b(H),te=n(H,"P",{});var at=l(te);Ke=m(at,`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`),at.forEach(a),qe=b(H),y(D.$$.fragment,H),Oe=b(H),y(N.$$.fragment,H),H.forEach(a),pe=b(e),q=n(e,"H2",{class:!0});var fe=l(q);L=n(fe,"A",{id:!0,class:!0,href:!0});var ot=l(L);ae=n(ot,"SPAN",{});var rt=l(ae);y(U.$$.fragment,rt),rt.forEach(a),ot.forEach(a),je=b(fe),oe=n(fe,"SPAN",{});var st=l(oe);Me=m(st,"PushToHubCallback"),st.forEach(a),fe.forEach(a),me=b(e),v=n(e,"DIV",{class:!0});var R=l(v);y(B.$$.fragment,R),De=b(R),O=n(R,"P",{});var G=l(O);Ne=m(G,`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the `),re=n(G,"CODE",{});var nt=l(re);Le=m(nt,"save_strategy"),nt.forEach(a),Se=m(G,` argument. Pushed models can be accessed like any other model on the hub, such
as with the `),se=n(G,"CODE",{});var lt=l(se);Ie=m(lt,"from_pretrained"),lt.forEach(a),Ae=m(G," method."),G.forEach(a),Ue=b(R),y(S.$$.fragment,R),R.forEach(a),this.h()},h(){h(r,"name","hf:doc:metadata"),h(r,"content",JSON.stringify(gt)),h(d,"id","keras-callbacks"),h(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(d,"href","#keras-callbacks"),h(o,"class","relative group"),h(M,"id","transformers.KerasMetricCallback"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#transformers.KerasMetricCallback"),h(K,"class","relative group"),h(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(L,"id","transformers.PushToHubCallback"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#transformers.PushToHubCallback"),h(q,"class","relative group"),h(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,i){t(document.head,r),g(e,u,i),g(e,o,i),t(o,d),t(d,P),w(c,P,null),t(o,E),t(o,V),t(V,be),g(e,ce,i),g(e,F,i),t(F,_e),g(e,ie,i),g(e,K,i),t(K,M),t(M,J),w(I,J,null),t(K,ge),t(K,Q),t(Q,ke),g(e,de,i),g(e,_,i),w(A,_,null),t(_,ve),t(_,k),t(k,$e),t(k,X),t(X,ye),t(k,we),t(k,Y),t(Y,Ce),t(k,xe),t(k,Z),t(Z,Te),t(k,Pe),t(k,ee),t(ee,Ee),t(k,He),t(_,ze),t(_,te),t(te,Ke),t(_,qe),w(D,_,null),t(_,Oe),w(N,_,null),g(e,pe,i),g(e,q,i),t(q,L),t(L,ae),w(U,ae,null),t(q,je),t(q,oe),t(oe,Me),g(e,me,i),g(e,v,i),w(B,v,null),t(v,De),t(v,O),t(O,Ne),t(O,re),t(re,Le),t(O,Se),t(O,se),t(se,Ie),t(O,Ae),t(v,Ue),w(S,v,null),ue=!0},p(e,[i]){const W={};i&2&&(W.$$scope={dirty:i,ctx:e}),D.$set(W);const ne={};i&2&&(ne.$$scope={dirty:i,ctx:e}),N.$set(ne);const le={};i&2&&(le.$$scope={dirty:i,ctx:e}),S.$set(le)},i(e){ue||(C(c.$$.fragment,e),C(I.$$.fragment,e),C(A.$$.fragment,e),C(D.$$.fragment,e),C(N.$$.fragment,e),C(U.$$.fragment,e),C(B.$$.fragment,e),C(S.$$.fragment,e),ue=!0)},o(e){x(c.$$.fragment,e),x(I.$$.fragment,e),x(A.$$.fragment,e),x(D.$$.fragment,e),x(N.$$.fragment,e),x(U.$$.fragment,e),x(B.$$.fragment,e),x(S.$$.fragment,e),ue=!1},d(e){a(r),e&&a(u),e&&a(o),T(c),e&&a(ce),e&&a(F),e&&a(ie),e&&a(K),T(I),e&&a(de),e&&a(_),T(A),T(D),T(N),e&&a(pe),e&&a(q),T(U),e&&a(me),e&&a(v),T(B),T(S)}}}const gt={local:"keras-callbacks",sections:[{local:"transformers.KerasMetricCallback",title:"KerasMetricCallback"},{local:"transformers.PushToHubCallback",title:"PushToHubCallback"}],title:"Keras callbacks"};function kt(j){return ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xt extends it{constructor(r){super();dt(this,r,kt,_t,pt,{})}}export{xt as default,gt as metadata};
