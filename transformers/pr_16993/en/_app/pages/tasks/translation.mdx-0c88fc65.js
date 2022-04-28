import{S as Is,i as Us,s as Ns,e as i,k as _,w as v,t as o,M as Bs,c as p,d as t,m as $,a as f,x as S,h as l,b as k,F as s,g as m,y,q as E,o as T,B as x,v as Ws,L as Os}from"../../chunks/vendor-6b77c823.js";import{T as Ft}from"../../chunks/Tip-39098574.js";import{Y as Ms}from"../../chunks/Youtube-5c6e11e6.js";import{I as At}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Cs,M as Pt}from"../../chunks/Markdown-9acf6d91.js";function Ys(P){let a,c,r,u,b;return{c(){a=i("p"),c=o("See the translation "),r=i("a"),u=o("task page"),b=o(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){a=p(g,"P",{});var q=f(a);c=l(q,"See the translation "),r=p(q,"A",{href:!0,rel:!0});var z=f(r);u=l(z,"task page"),z.forEach(t),b=l(q," for more information about its associated models, datasets, and metrics."),q.forEach(t),this.h()},h(){k(r,"href","https://huggingface.co/tasks/translation"),k(r,"rel","nofollow")},m(g,q){m(g,a,q),s(a,c),s(a,r),s(r,u),s(a,b)},d(g){g&&t(a)}}}function Hs(P){let a,c;return a=new re({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p:Os,i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function Zs(P){let a,c;return a=new Pt({props:{$$slots:{default:[Hs]},$$scope:{ctx:P}}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p(r,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:r}),a.$set(b)},i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function Js(P){let a,c;return a=new re({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p:Os,i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function Ks(P){let a,c;return a=new Pt({props:{$$slots:{default:[Js]},$$scope:{ctx:P}}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p(r,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:r}),a.$set(b)},i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function Rs(P){let a,c,r,u,b,g,q,z;return{c(){a=i("p"),c=o("If you aren\u2019t familiar with fine-tuning a model with the "),r=i("a"),u=o("Trainer"),b=o(", take a look at the basic tutorial "),g=i("a"),q=o("here"),z=o("!"),this.h()},l(A){a=p(A,"P",{});var j=f(a);c=l(j,"If you aren\u2019t familiar with fine-tuning a model with the "),r=p(j,"A",{href:!0});var L=f(r);u=l(L,"Trainer"),L.forEach(t),b=l(j,", take a look at the basic tutorial "),g=p(j,"A",{href:!0});var Y=f(g);q=l(Y,"here"),Y.forEach(t),z=l(j,"!"),j.forEach(t),this.h()},h(){k(r,"href","/docs/transformers/pr_16993/en/main_classes/trainer#transformers.Trainer"),k(g,"href","../training#finetune-with-trainer")},m(A,j){m(A,a,j),s(a,c),s(a,r),s(r,u),s(a,b),s(a,g),s(g,q),s(a,z)},d(A){A&&t(a)}}}function Xs(P){let a,c,r,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,ne,W,se;return q=new re({props:{code:`from transformers import AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),A=new Ft({props:{$$slots:{default:[Rs]},$$scope:{ctx:P}}}),W=new re({props:{code:`training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    weight_decay=0.01,
    save_total_limit=3,
    num_train_epochs=1,
    fp16=True,
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_books["train"],
    eval_dataset=tokenized_books["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = Seq2SeqTrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Seq2SeqTrainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_books[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_books[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){a=i("p"),c=o("Load T5 with "),r=i("a"),u=o("AutoModelForSeq2SeqLM"),b=o(":"),g=_(),v(q.$$.fragment),z=_(),v(A.$$.fragment),j=_(),L=i("p"),Y=o("At this point, only three steps remain:"),X=_(),C=i("ol"),J=i("li"),D=o("Define your training hyperparameters in "),te=i("a"),H=o("Seq2SeqTrainingArguments"),$e=o("."),fe=_(),M=i("li"),me=o("Pass the training arguments to "),N=i("a"),he=o("Seq2SeqTrainer"),B=o(" along with the model, dataset, tokenizer, and data collator."),ce=_(),O=i("li"),K=o("Call "),I=i("a"),G=o("train()"),Q=o(" to fine-tune your model."),ne=_(),v(W.$$.fragment),this.h()},l(d){a=p(d,"P",{});var F=f(a);c=l(F,"Load T5 with "),r=p(F,"A",{href:!0});var ae=f(r);u=l(ae,"AutoModelForSeq2SeqLM"),ae.forEach(t),b=l(F,":"),F.forEach(t),g=$(d),S(q.$$.fragment,d),z=$(d),S(A.$$.fragment,d),j=$(d),L=p(d,"P",{});var Z=f(L);Y=l(Z,"At this point, only three steps remain:"),Z.forEach(t),X=$(d),C=p(d,"OL",{});var V=f(C);J=p(V,"LI",{});var U=f(J);D=l(U,"Define your training hyperparameters in "),te=p(U,"A",{href:!0});var ke=f(te);H=l(ke,"Seq2SeqTrainingArguments"),ke.forEach(t),$e=l(U,"."),U.forEach(t),fe=$(V),M=p(V,"LI",{});var R=f(M);me=l(R,"Pass the training arguments to "),N=p(R,"A",{href:!0});var ee=f(N);he=l(ee,"Seq2SeqTrainer"),ee.forEach(t),B=l(R," along with the model, dataset, tokenizer, and data collator."),R.forEach(t),ce=$(V),O=p(V,"LI",{});var ie=f(O);K=l(ie,"Call "),I=p(ie,"A",{href:!0});var pe=f(I);G=l(pe,"train()"),pe.forEach(t),Q=l(ie," to fine-tune your model."),ie.forEach(t),V.forEach(t),ne=$(d),S(W.$$.fragment,d),this.h()},h(){k(r,"href","/docs/transformers/pr_16993/en/model_doc/auto#transformers.AutoModelForSeq2SeqLM"),k(te,"href","/docs/transformers/pr_16993/en/main_classes/trainer#transformers.Seq2SeqTrainingArguments"),k(N,"href","/docs/transformers/pr_16993/en/main_classes/trainer#transformers.Seq2SeqTrainer"),k(I,"href","/docs/transformers/pr_16993/en/main_classes/trainer#transformers.Trainer.train")},m(d,F){m(d,a,F),s(a,c),s(a,r),s(r,u),s(a,b),m(d,g,F),y(q,d,F),m(d,z,F),y(A,d,F),m(d,j,F),m(d,L,F),s(L,Y),m(d,X,F),m(d,C,F),s(C,J),s(J,D),s(J,te),s(te,H),s(J,$e),s(C,fe),s(C,M),s(M,me),s(M,N),s(N,he),s(M,B),s(C,ce),s(C,O),s(O,K),s(O,I),s(I,G),s(O,Q),m(d,ne,F),y(W,d,F),se=!0},p(d,F){const ae={};F&2&&(ae.$$scope={dirty:F,ctx:d}),A.$set(ae)},i(d){se||(E(q.$$.fragment,d),E(A.$$.fragment,d),E(W.$$.fragment,d),se=!0)},o(d){T(q.$$.fragment,d),T(A.$$.fragment,d),T(W.$$.fragment,d),se=!1},d(d){d&&t(a),d&&t(g),x(q,d),d&&t(z),x(A,d),d&&t(j),d&&t(L),d&&t(X),d&&t(C),d&&t(ne),x(W,d)}}}function Gs(P){let a,c;return a=new Pt({props:{$$slots:{default:[Xs]},$$scope:{ctx:P}}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p(r,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:r}),a.$set(b)},i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function Qs(P){let a,c,r,u,b;return{c(){a=i("p"),c=o("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),r=i("a"),u=o("here"),b=o("!"),this.h()},l(g){a=p(g,"P",{});var q=f(a);c=l(q,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),r=p(q,"A",{href:!0});var z=f(r);u=l(z,"here"),z.forEach(t),b=l(q,"!"),q.forEach(t),this.h()},h(){k(r,"href","training#finetune-with-keras")},m(g,q){m(g,a,q),s(a,c),s(a,r),s(r,u),s(a,b)},d(g){g&&t(a)}}}function Vs(P){let a,c,r,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,ne,W,se,d,F,ae,Z,V,U,ke,R,ee,ie,pe,Ee,ue,de;return C=new re({props:{code:`tf_train_set = tokenized_books["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_test_set = tokenized_books["test"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_books[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_test_set = tokenized_books[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),D=new Ft({props:{$$slots:{default:[Qs]},$$scope:{ctx:P}}}),M=new re({props:{code:`from transformers import create_optimizer, AdamWeightDecay

optimizer = AdamWeightDecay(learning_rate=2e-5, weight_decay_rate=0.01)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer, AdamWeightDecay

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamWeightDecay(learning_rate=<span class="hljs-number">2e-5</span>, weight_decay_rate=<span class="hljs-number">0.01</span>)`}}),I=new re({props:{code:`from transformers import TFAutoModelForSeq2SeqLM

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Z=new re({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),ue=new re({props:{code:"model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){a=i("p"),c=o("To fine-tune a model in TensorFlow, start by converting your datasets to the "),r=i("code"),u=o("tf.data.Dataset"),b=o(" format with "),g=i("a"),q=i("code"),z=o("to_tf_dataset"),A=o(". Specify inputs and labels in "),j=i("code"),L=o("columns"),Y=o(", whether to shuffle the dataset order, batch size, and the data collator:"),X=_(),v(C.$$.fragment),J=_(),v(D.$$.fragment),te=_(),H=i("p"),$e=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),fe=_(),v(M.$$.fragment),me=_(),N=i("p"),he=o("Load T5 with "),B=i("a"),ce=o("TFAutoModelForSeq2SeqLM"),O=o(":"),K=_(),v(I.$$.fragment),G=_(),Q=i("p"),ne=o("Configure the model for training with "),W=i("a"),se=i("code"),d=o("compile"),F=o(":"),ae=_(),v(Z.$$.fragment),V=_(),U=i("p"),ke=o("Call "),R=i("a"),ee=i("code"),ie=o("fit"),pe=o(" to fine-tune the model:"),Ee=_(),v(ue.$$.fragment),this.h()},l(n){a=p(n,"P",{});var w=f(a);c=l(w,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),r=p(w,"CODE",{});var Se=f(r);u=l(Se,"tf.data.Dataset"),Se.forEach(t),b=l(w," format with "),g=p(w,"A",{href:!0,rel:!0});var Te=f(g);q=p(Te,"CODE",{});var Ye=f(q);z=l(Ye,"to_tf_dataset"),Ye.forEach(t),Te.forEach(t),A=l(w,". Specify inputs and labels in "),j=p(w,"CODE",{});var He=f(j);L=l(He,"columns"),He.forEach(t),Y=l(w,", whether to shuffle the dataset order, batch size, and the data collator:"),w.forEach(t),X=$(n),S(C.$$.fragment,n),J=$(n),S(D.$$.fragment,n),te=$(n),H=p(n,"P",{});var Le=f(H);$e=l(Le,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Le.forEach(t),fe=$(n),S(M.$$.fragment,n),me=$(n),N=p(n,"P",{});var oe=f(N);he=l(oe,"Load T5 with "),B=p(oe,"A",{href:!0});var ge=f(B);ce=l(ge,"TFAutoModelForSeq2SeqLM"),ge.forEach(t),O=l(oe,":"),oe.forEach(t),K=$(n),S(I.$$.fragment,n),G=$(n),Q=p(n,"P",{});var we=f(Q);ne=l(we,"Configure the model for training with "),W=p(we,"A",{href:!0,rel:!0});var be=f(W);se=p(be,"CODE",{});var Ze=f(se);d=l(Ze,"compile"),Ze.forEach(t),be.forEach(t),F=l(we,":"),we.forEach(t),ae=$(n),S(Z.$$.fragment,n),V=$(n),U=p(n,"P",{});var qe=f(U);ke=l(qe,"Call "),R=p(qe,"A",{href:!0,rel:!0});var Je=f(R);ee=p(Je,"CODE",{});var De=f(ee);ie=l(De,"fit"),De.forEach(t),Je.forEach(t),pe=l(qe," to fine-tune the model:"),qe.forEach(t),Ee=$(n),S(ue.$$.fragment,n),this.h()},h(){k(g,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),k(g,"rel","nofollow"),k(B,"href","/docs/transformers/pr_16993/en/model_doc/auto#transformers.TFAutoModelForSeq2SeqLM"),k(W,"href","https://keras.io/api/models/model_training_apis/#compile-method"),k(W,"rel","nofollow"),k(R,"href","https://keras.io/api/models/model_training_apis/#fit-method"),k(R,"rel","nofollow")},m(n,w){m(n,a,w),s(a,c),s(a,r),s(r,u),s(a,b),s(a,g),s(g,q),s(q,z),s(a,A),s(a,j),s(j,L),s(a,Y),m(n,X,w),y(C,n,w),m(n,J,w),y(D,n,w),m(n,te,w),m(n,H,w),s(H,$e),m(n,fe,w),y(M,n,w),m(n,me,w),m(n,N,w),s(N,he),s(N,B),s(B,ce),s(N,O),m(n,K,w),y(I,n,w),m(n,G,w),m(n,Q,w),s(Q,ne),s(Q,W),s(W,se),s(se,d),s(Q,F),m(n,ae,w),y(Z,n,w),m(n,V,w),m(n,U,w),s(U,ke),s(U,R),s(R,ee),s(ee,ie),s(U,pe),m(n,Ee,w),y(ue,n,w),de=!0},p(n,w){const Se={};w&2&&(Se.$$scope={dirty:w,ctx:n}),D.$set(Se)},i(n){de||(E(C.$$.fragment,n),E(D.$$.fragment,n),E(M.$$.fragment,n),E(I.$$.fragment,n),E(Z.$$.fragment,n),E(ue.$$.fragment,n),de=!0)},o(n){T(C.$$.fragment,n),T(D.$$.fragment,n),T(M.$$.fragment,n),T(I.$$.fragment,n),T(Z.$$.fragment,n),T(ue.$$.fragment,n),de=!1},d(n){n&&t(a),n&&t(X),x(C,n),n&&t(J),x(D,n),n&&t(te),n&&t(H),n&&t(fe),x(M,n),n&&t(me),n&&t(N),n&&t(K),x(I,n),n&&t(G),n&&t(Q),n&&t(ae),x(Z,n),n&&t(V),n&&t(U),n&&t(Ee),x(ue,n)}}}function ea(P){let a,c;return a=new Pt({props:{$$slots:{default:[Vs]},$$scope:{ctx:P}}}),{c(){v(a.$$.fragment)},l(r){S(a.$$.fragment,r)},m(r,u){y(a,r,u),c=!0},p(r,u){const b={};u&2&&(b.$$scope={dirty:u,ctx:r}),a.$set(b)},i(r){c||(E(a.$$.fragment,r),c=!0)},o(r){T(a.$$.fragment,r),c=!1},d(r){x(a,r)}}}function ta(P){let a,c,r,u,b,g,q,z;return{c(){a=i("p"),c=o(`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),r=i("a"),u=o("PyTorch notebook"),b=o(`
or `),g=i("a"),q=o("TensorFlow notebook"),z=o("."),this.h()},l(A){a=p(A,"P",{});var j=f(a);c=l(j,`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),r=p(j,"A",{href:!0,rel:!0});var L=f(r);u=l(L,"PyTorch notebook"),L.forEach(t),b=l(j,`
or `),g=p(j,"A",{href:!0,rel:!0});var Y=f(g);q=l(Y,"TensorFlow notebook"),Y.forEach(t),z=l(j,"."),j.forEach(t),this.h()},h(){k(r,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),k(r,"rel","nofollow"),k(g,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),k(g,"rel","nofollow")},m(A,j){m(A,a,j),s(a,c),s(a,r),s(r,u),s(a,b),s(a,g),s(g,q),s(a,z)},d(A){A&&t(a)}}}function sa(P){let a,c,r,u,b,g,q,z,A,j,L,Y,X,C,J,D,te,H,$e,fe,M,me,N,he,B,ce,O,K,I,G,Q,ne,W,se,d,F,ae,Z,V,U,ke,R,ee,ie,pe,Ee,ue,de,n,w,Se,Te,Ye,He,Le,oe,ge,we,be,Ze,qe,Je,De,Me,ct,Ke,Lt,ut,Ce,dt,Re,Dt,_t,je,Ve,Mt,Ct,et,Ot,It,Oe,Ut,tt,Nt,Bt,$t,Ie,gt,_e,Wt,Ue,st,Yt,Ht,at,Zt,Jt,rt,Kt,Rt,kt,Ne,wt,le,Xt,Xe,Gt,Qt,nt,Vt,es,ot,ts,ss,lt,as,rs,bt,xe,qt,ye,ze,it,Be,ns,pt,os,jt,Ae,vt,Fe,St;return g=new At({}),L=new Ms({props:{id:"1JvfrvZgi6c"}}),B=new Ft({props:{$$slots:{default:[Ys]},$$scope:{ctx:P}}}),G=new At({}),Z=new re({props:{code:`from datasets import load_dataset

books = load_dataset("opus_books", "en-fr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>books = load_dataset(<span class="hljs-string">&quot;opus_books&quot;</span>, <span class="hljs-string">&quot;en-fr&quot;</span>)`}}),ee=new re({props:{code:'books = books["train"].train_test_split(test_size=0.2)',highlighted:'books = books[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),de=new re({props:{code:'books["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>books[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;90560&#x27;</span>,
 <span class="hljs-string">&#x27;translation&#x27;</span>: {<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-string">&#x27;But this lofty plateau measured only a few fathoms, and soon we reentered Our Element.&#x27;</span>,
  <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-string">&#x27;Mais ce plateau \xE9lev\xE9 ne mesurait que quelques toises, et bient\xF4t nous f\xFBmes rentr\xE9s dans notre \xE9l\xE9ment.&#x27;</span>}}`}}),be=new At({}),Me=new Ms({props:{id:"XAR8jnZZuUs"}}),Ce=new re({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Ie=new re({props:{code:`source_lang = "en"
target_lang = "fr"
prefix = "translate English to French: "


def preprocess_function(examples):
    inputs = [prefix + example[source_lang] for example in examples["translation"]]
    targets = [example[target_lang] for example in examples["translation"]]
    model_inputs = tokenizer(inputs, max_length=128, truncation=True)

    with tokenizer.as_target_tokenizer():
        labels = tokenizer(targets, max_length=128, truncation=True)

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>source_lang = <span class="hljs-string">&quot;en&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_lang = <span class="hljs-string">&quot;fr&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    inputs = [prefix + example[source_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    targets = [example[target_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    model_inputs = tokenizer(inputs, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>        labels = tokenizer(targets, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    model_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> model_inputs`}}),Ne=new re({props:{code:"tokenized_books = books.map(preprocess_function, batched=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_books = books.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),xe=new Cs({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ks],pytorch:[Zs]},$$scope:{ctx:P}}}),Be=new At({}),Ae=new Cs({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ea],pytorch:[Gs]},$$scope:{ctx:P}}}),Fe=new Ft({props:{$$slots:{default:[ta]},$$scope:{ctx:P}}}),{c(){a=i("meta"),c=_(),r=i("h1"),u=i("a"),b=i("span"),v(g.$$.fragment),q=_(),z=i("span"),A=o("Translation"),j=_(),v(L.$$.fragment),Y=_(),X=i("p"),C=o("Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),J=_(),D=i("p"),te=o("This guide will show you how to fine-tune "),H=i("a"),$e=o("T5"),fe=o(" on the English-French subset of the "),M=i("a"),me=o("OPUS Books"),N=o(" dataset to translate English text to French."),he=_(),v(B.$$.fragment),ce=_(),O=i("h2"),K=i("a"),I=i("span"),v(G.$$.fragment),Q=_(),ne=i("span"),W=o("Load OPUS Books dataset"),se=_(),d=i("p"),F=o("Load the OPUS Books dataset from the \u{1F917} Datasets library:"),ae=_(),v(Z.$$.fragment),V=_(),U=i("p"),ke=o("Split this dataset into a train and test set:"),R=_(),v(ee.$$.fragment),ie=_(),pe=i("p"),Ee=o("Then take a look at an example:"),ue=_(),v(de.$$.fragment),n=_(),w=i("p"),Se=o("The "),Te=i("code"),Ye=o("translation"),He=o(" field is a dictionary containing the English and French translations of the text."),Le=_(),oe=i("h2"),ge=i("a"),we=i("span"),v(be.$$.fragment),Ze=_(),qe=i("span"),Je=o("Preprocess"),De=_(),v(Me.$$.fragment),ct=_(),Ke=i("p"),Lt=o("Load the T5 tokenizer to process the language pairs:"),ut=_(),v(Ce.$$.fragment),dt=_(),Re=i("p"),Dt=o("The preprocessing function needs to:"),_t=_(),je=i("ol"),Ve=i("li"),Mt=o("Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),Ct=_(),et=i("li"),Ot=o("Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),It=_(),Oe=i("li"),Ut=o("Truncate sequences to be no longer than the maximum length set by the "),tt=i("code"),Nt=o("max_length"),Bt=o(" parameter."),$t=_(),v(Ie.$$.fragment),gt=_(),_e=i("p"),Wt=o("Use \u{1F917} Datasets "),Ue=i("a"),st=i("code"),Yt=o("map"),Ht=o(" function to apply the preprocessing function over the entire dataset. You can speed up the "),at=i("code"),Zt=o("map"),Jt=o(" function by setting "),rt=i("code"),Kt=o("batched=True"),Rt=o(" to process multiple elements of the dataset at once:"),kt=_(),v(Ne.$$.fragment),wt=_(),le=i("p"),Xt=o("Use "),Xe=i("a"),Gt=o("DataCollatorForSeq2Seq"),Qt=o(" to create a batch of examples. It will also "),nt=i("em"),Vt=o("dynamically pad"),es=o(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ot=i("code"),ts=o("tokenizer"),ss=o(" function by setting "),lt=i("code"),as=o("padding=True"),rs=o(", dynamic padding is more efficient."),bt=_(),v(xe.$$.fragment),qt=_(),ye=i("h2"),ze=i("a"),it=i("span"),v(Be.$$.fragment),ns=_(),pt=i("span"),os=o("Train"),jt=_(),v(Ae.$$.fragment),vt=_(),v(Fe.$$.fragment),this.h()},l(e){const h=Bs('[data-svelte="svelte-1phssyn"]',document.head);a=p(h,"META",{name:!0,content:!0}),h.forEach(t),c=$(e),r=p(e,"H1",{class:!0});var We=f(r);u=p(We,"A",{id:!0,class:!0,href:!0});var ft=f(u);b=p(ft,"SPAN",{});var mt=f(b);S(g.$$.fragment,mt),mt.forEach(t),ft.forEach(t),q=$(We),z=p(We,"SPAN",{});var ht=f(z);A=l(ht,"Translation"),ht.forEach(t),We.forEach(t),j=$(e),S(L.$$.fragment,e),Y=$(e),X=p(e,"P",{});var ls=f(X);C=l(ls,"Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),ls.forEach(t),J=$(e),D=p(e,"P",{});var Ge=f(D);te=l(Ge,"This guide will show you how to fine-tune "),H=p(Ge,"A",{href:!0,rel:!0});var is=f(H);$e=l(is,"T5"),is.forEach(t),fe=l(Ge," on the English-French subset of the "),M=p(Ge,"A",{href:!0,rel:!0});var ps=f(M);me=l(ps,"OPUS Books"),ps.forEach(t),N=l(Ge," dataset to translate English text to French."),Ge.forEach(t),he=$(e),S(B.$$.fragment,e),ce=$(e),O=p(e,"H2",{class:!0});var yt=f(O);K=p(yt,"A",{id:!0,class:!0,href:!0});var fs=f(K);I=p(fs,"SPAN",{});var ms=f(I);S(G.$$.fragment,ms),ms.forEach(t),fs.forEach(t),Q=$(yt),ne=p(yt,"SPAN",{});var hs=f(ne);W=l(hs,"Load OPUS Books dataset"),hs.forEach(t),yt.forEach(t),se=$(e),d=p(e,"P",{});var cs=f(d);F=l(cs,"Load the OPUS Books dataset from the \u{1F917} Datasets library:"),cs.forEach(t),ae=$(e),S(Z.$$.fragment,e),V=$(e),U=p(e,"P",{});var us=f(U);ke=l(us,"Split this dataset into a train and test set:"),us.forEach(t),R=$(e),S(ee.$$.fragment,e),ie=$(e),pe=p(e,"P",{});var ds=f(pe);Ee=l(ds,"Then take a look at an example:"),ds.forEach(t),ue=$(e),S(de.$$.fragment,e),n=$(e),w=p(e,"P",{});var Et=f(w);Se=l(Et,"The "),Te=p(Et,"CODE",{});var _s=f(Te);Ye=l(_s,"translation"),_s.forEach(t),He=l(Et," field is a dictionary containing the English and French translations of the text."),Et.forEach(t),Le=$(e),oe=p(e,"H2",{class:!0});var Tt=f(oe);ge=p(Tt,"A",{id:!0,class:!0,href:!0});var $s=f(ge);we=p($s,"SPAN",{});var gs=f(we);S(be.$$.fragment,gs),gs.forEach(t),$s.forEach(t),Ze=$(Tt),qe=p(Tt,"SPAN",{});var ks=f(qe);Je=l(ks,"Preprocess"),ks.forEach(t),Tt.forEach(t),De=$(e),S(Me.$$.fragment,e),ct=$(e),Ke=p(e,"P",{});var ws=f(Ke);Lt=l(ws,"Load the T5 tokenizer to process the language pairs:"),ws.forEach(t),ut=$(e),S(Ce.$$.fragment,e),dt=$(e),Re=p(e,"P",{});var bs=f(Re);Dt=l(bs,"The preprocessing function needs to:"),bs.forEach(t),_t=$(e),je=p(e,"OL",{});var Qe=f(je);Ve=p(Qe,"LI",{});var qs=f(Ve);Mt=l(qs,"Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),qs.forEach(t),Ct=$(Qe),et=p(Qe,"LI",{});var js=f(et);Ot=l(js,"Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),js.forEach(t),It=$(Qe),Oe=p(Qe,"LI",{});var xt=f(Oe);Ut=l(xt,"Truncate sequences to be no longer than the maximum length set by the "),tt=p(xt,"CODE",{});var vs=f(tt);Nt=l(vs,"max_length"),vs.forEach(t),Bt=l(xt," parameter."),xt.forEach(t),Qe.forEach(t),$t=$(e),S(Ie.$$.fragment,e),gt=$(e),_e=p(e,"P",{});var Pe=f(_e);Wt=l(Pe,"Use \u{1F917} Datasets "),Ue=p(Pe,"A",{href:!0,rel:!0});var Ss=f(Ue);st=p(Ss,"CODE",{});var ys=f(st);Yt=l(ys,"map"),ys.forEach(t),Ss.forEach(t),Ht=l(Pe," function to apply the preprocessing function over the entire dataset. You can speed up the "),at=p(Pe,"CODE",{});var Es=f(at);Zt=l(Es,"map"),Es.forEach(t),Jt=l(Pe," function by setting "),rt=p(Pe,"CODE",{});var Ts=f(rt);Kt=l(Ts,"batched=True"),Ts.forEach(t),Rt=l(Pe," to process multiple elements of the dataset at once:"),Pe.forEach(t),kt=$(e),S(Ne.$$.fragment,e),wt=$(e),le=p(e,"P",{});var ve=f(le);Xt=l(ve,"Use "),Xe=p(ve,"A",{href:!0});var xs=f(Xe);Gt=l(xs,"DataCollatorForSeq2Seq"),xs.forEach(t),Qt=l(ve," to create a batch of examples. It will also "),nt=p(ve,"EM",{});var zs=f(nt);Vt=l(zs,"dynamically pad"),zs.forEach(t),es=l(ve," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ot=p(ve,"CODE",{});var As=f(ot);ts=l(As,"tokenizer"),As.forEach(t),ss=l(ve," function by setting "),lt=p(ve,"CODE",{});var Fs=f(lt);as=l(Fs,"padding=True"),Fs.forEach(t),rs=l(ve,", dynamic padding is more efficient."),ve.forEach(t),bt=$(e),S(xe.$$.fragment,e),qt=$(e),ye=p(e,"H2",{class:!0});var zt=f(ye);ze=p(zt,"A",{id:!0,class:!0,href:!0});var Ps=f(ze);it=p(Ps,"SPAN",{});var Ls=f(it);S(Be.$$.fragment,Ls),Ls.forEach(t),Ps.forEach(t),ns=$(zt),pt=p(zt,"SPAN",{});var Ds=f(pt);os=l(Ds,"Train"),Ds.forEach(t),zt.forEach(t),jt=$(e),S(Ae.$$.fragment,e),vt=$(e),S(Fe.$$.fragment,e),this.h()},h(){k(a,"name","hf:doc:metadata"),k(a,"content",JSON.stringify(aa)),k(u,"id","translation"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#translation"),k(r,"class","relative group"),k(H,"href","https://huggingface.co/t5-small"),k(H,"rel","nofollow"),k(M,"href","https://huggingface.co/datasets/opus_books"),k(M,"rel","nofollow"),k(K,"id","load-opus-books-dataset"),k(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(K,"href","#load-opus-books-dataset"),k(O,"class","relative group"),k(ge,"id","preprocess"),k(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ge,"href","#preprocess"),k(oe,"class","relative group"),k(Ue,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),k(Ue,"rel","nofollow"),k(Xe,"href","/docs/transformers/pr_16993/en/main_classes/data_collator#transformers.DataCollatorForSeq2Seq"),k(ze,"id","train"),k(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ze,"href","#train"),k(ye,"class","relative group")},m(e,h){s(document.head,a),m(e,c,h),m(e,r,h),s(r,u),s(u,b),y(g,b,null),s(r,q),s(r,z),s(z,A),m(e,j,h),y(L,e,h),m(e,Y,h),m(e,X,h),s(X,C),m(e,J,h),m(e,D,h),s(D,te),s(D,H),s(H,$e),s(D,fe),s(D,M),s(M,me),s(D,N),m(e,he,h),y(B,e,h),m(e,ce,h),m(e,O,h),s(O,K),s(K,I),y(G,I,null),s(O,Q),s(O,ne),s(ne,W),m(e,se,h),m(e,d,h),s(d,F),m(e,ae,h),y(Z,e,h),m(e,V,h),m(e,U,h),s(U,ke),m(e,R,h),y(ee,e,h),m(e,ie,h),m(e,pe,h),s(pe,Ee),m(e,ue,h),y(de,e,h),m(e,n,h),m(e,w,h),s(w,Se),s(w,Te),s(Te,Ye),s(w,He),m(e,Le,h),m(e,oe,h),s(oe,ge),s(ge,we),y(be,we,null),s(oe,Ze),s(oe,qe),s(qe,Je),m(e,De,h),y(Me,e,h),m(e,ct,h),m(e,Ke,h),s(Ke,Lt),m(e,ut,h),y(Ce,e,h),m(e,dt,h),m(e,Re,h),s(Re,Dt),m(e,_t,h),m(e,je,h),s(je,Ve),s(Ve,Mt),s(je,Ct),s(je,et),s(et,Ot),s(je,It),s(je,Oe),s(Oe,Ut),s(Oe,tt),s(tt,Nt),s(Oe,Bt),m(e,$t,h),y(Ie,e,h),m(e,gt,h),m(e,_e,h),s(_e,Wt),s(_e,Ue),s(Ue,st),s(st,Yt),s(_e,Ht),s(_e,at),s(at,Zt),s(_e,Jt),s(_e,rt),s(rt,Kt),s(_e,Rt),m(e,kt,h),y(Ne,e,h),m(e,wt,h),m(e,le,h),s(le,Xt),s(le,Xe),s(Xe,Gt),s(le,Qt),s(le,nt),s(nt,Vt),s(le,es),s(le,ot),s(ot,ts),s(le,ss),s(le,lt),s(lt,as),s(le,rs),m(e,bt,h),y(xe,e,h),m(e,qt,h),m(e,ye,h),s(ye,ze),s(ze,it),y(Be,it,null),s(ye,ns),s(ye,pt),s(pt,os),m(e,jt,h),y(Ae,e,h),m(e,vt,h),y(Fe,e,h),St=!0},p(e,[h]){const We={};h&2&&(We.$$scope={dirty:h,ctx:e}),B.$set(We);const ft={};h&2&&(ft.$$scope={dirty:h,ctx:e}),xe.$set(ft);const mt={};h&2&&(mt.$$scope={dirty:h,ctx:e}),Ae.$set(mt);const ht={};h&2&&(ht.$$scope={dirty:h,ctx:e}),Fe.$set(ht)},i(e){St||(E(g.$$.fragment,e),E(L.$$.fragment,e),E(B.$$.fragment,e),E(G.$$.fragment,e),E(Z.$$.fragment,e),E(ee.$$.fragment,e),E(de.$$.fragment,e),E(be.$$.fragment,e),E(Me.$$.fragment,e),E(Ce.$$.fragment,e),E(Ie.$$.fragment,e),E(Ne.$$.fragment,e),E(xe.$$.fragment,e),E(Be.$$.fragment,e),E(Ae.$$.fragment,e),E(Fe.$$.fragment,e),St=!0)},o(e){T(g.$$.fragment,e),T(L.$$.fragment,e),T(B.$$.fragment,e),T(G.$$.fragment,e),T(Z.$$.fragment,e),T(ee.$$.fragment,e),T(de.$$.fragment,e),T(be.$$.fragment,e),T(Me.$$.fragment,e),T(Ce.$$.fragment,e),T(Ie.$$.fragment,e),T(Ne.$$.fragment,e),T(xe.$$.fragment,e),T(Be.$$.fragment,e),T(Ae.$$.fragment,e),T(Fe.$$.fragment,e),St=!1},d(e){t(a),e&&t(c),e&&t(r),x(g),e&&t(j),x(L,e),e&&t(Y),e&&t(X),e&&t(J),e&&t(D),e&&t(he),x(B,e),e&&t(ce),e&&t(O),x(G),e&&t(se),e&&t(d),e&&t(ae),x(Z,e),e&&t(V),e&&t(U),e&&t(R),x(ee,e),e&&t(ie),e&&t(pe),e&&t(ue),x(de,e),e&&t(n),e&&t(w),e&&t(Le),e&&t(oe),x(be),e&&t(De),x(Me,e),e&&t(ct),e&&t(Ke),e&&t(ut),x(Ce,e),e&&t(dt),e&&t(Re),e&&t(_t),e&&t(je),e&&t($t),x(Ie,e),e&&t(gt),e&&t(_e),e&&t(kt),x(Ne,e),e&&t(wt),e&&t(le),e&&t(bt),x(xe,e),e&&t(qt),e&&t(ye),x(Be),e&&t(jt),x(Ae,e),e&&t(vt),x(Fe,e)}}}const aa={local:"translation",sections:[{local:"load-opus-books-dataset",title:"Load OPUS Books dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Translation"};function ra(P){return Ws(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ma extends Is{constructor(a){super();Us(this,a,ra,sa,Ns,{})}}export{ma as default,aa as metadata};
