import{S as Wa,i as Ba,s as Na,e as i,k as g,w as x,t as o,M as Ra,c as p,d as a,m as b,a as f,x as z,h as n,b as w,F as e,g as c,y as q,q as A,o as C,B as D,v as Ua,L as Oa}from"../../chunks/vendor-6b77c823.js";import{T as ue}from"../../chunks/Tip-39098574.js";import{Y as Ha}from"../../chunks/Youtube-5c6e11e6.js";import{I as Se}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as lt}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as La,M as Fe}from"../../chunks/Markdown-9acf6d91.js";function Ya(S){let s,m,r,u,$;return{c(){s=i("p"),m=o("See the text classification "),r=i("a"),u=o("task page"),$=o(" for more information about other forms of text classification and their associated models, datasets, and metrics."),this.h()},l(_){s=p(_,"P",{});var v=f(s);m=n(v,"See the text classification "),r=p(v,"A",{href:!0,rel:!0});var T=f(r);u=n(T,"task page"),T.forEach(a),$=n(v," for more information about other forms of text classification and their associated models, datasets, and metrics."),v.forEach(a),this.h()},h(){w(r,"href","https://huggingface.co/tasks/text-classification"),w(r,"rel","nofollow")},m(_,v){c(_,s,v),e(s,m),e(s,r),e(r,u),e(s,$)},d(_){_&&a(s)}}}function Ga(S){let s,m;return s=new lt({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p:Oa,i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function Ka(S){let s,m;return s=new Fe({props:{$$slots:{default:[Ga]},$$scope:{ctx:S}}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p(r,u){const $={};u&2&&($.$$scope={dirty:u,ctx:r}),s.$set($)},i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function Va(S){let s,m;return s=new lt({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p:Oa,i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function Ja(S){let s,m;return s=new Fe({props:{$$slots:{default:[Va]},$$scope:{ctx:S}}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p(r,u){const $={};u&2&&($.$$scope={dirty:u,ctx:r}),s.$set($)},i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function Qa(S){let s,m,r,u,$,_,v,T;return{c(){s=i("p"),m=o("If you aren\u2019t familiar with fine-tuning a model with the "),r=i("a"),u=o("Trainer"),$=o(", take a look at the basic tutorial "),_=i("a"),v=o("here"),T=o("!"),this.h()},l(y){s=p(y,"P",{});var E=f(s);m=n(E,"If you aren\u2019t familiar with fine-tuning a model with the "),r=p(E,"A",{href:!0});var P=f(r);u=n(P,"Trainer"),P.forEach(a),$=n(E,", take a look at the basic tutorial "),_=p(E,"A",{href:!0});var H=f(_);v=n(H,"here"),H.forEach(a),T=n(E,"!"),E.forEach(a),this.h()},h(){w(r,"href","/docs/transformers/pr_17013/en/main_classes/trainer#transformers.Trainer"),w(_,"href","../training#finetune-with-trainer")},m(y,E){c(y,s,E),e(s,m),e(s,r),e(r,u),e(s,$),e(s,_),e(_,v),e(s,T)},d(y){y&&a(s)}}}function Xa(S){let s,m,r,u,$,_,v;return{c(){s=i("p"),m=i("a"),r=o("Trainer"),u=o(" will apply dynamic padding by default when you pass "),$=i("code"),_=o("tokenizer"),v=o(" to it. In this case, you don\u2019t need to specify a data collator explicitly."),this.h()},l(T){s=p(T,"P",{});var y=f(s);m=p(y,"A",{href:!0});var E=f(m);r=n(E,"Trainer"),E.forEach(a),u=n(y," will apply dynamic padding by default when you pass "),$=p(y,"CODE",{});var P=f($);_=n(P,"tokenizer"),P.forEach(a),v=n(y," to it. In this case, you don\u2019t need to specify a data collator explicitly."),y.forEach(a),this.h()},h(){w(m,"href","/docs/transformers/pr_17013/en/main_classes/trainer#transformers.Trainer")},m(T,y){c(T,s,y),e(s,m),e(m,r),e(s,u),e(s,$),e($,_),e(s,v)},d(T){T&&a(s)}}}function Za(S){let s,m,r,u,$,_,v,T,y,E,P,H,J,M,G,F,tt,Y,bt,ht,I,ut,B,dt,N,_t,L,K,W,Q,X,rt,R,et,U,$t;return v=new lt({props:{code:`from transformers import AutoModelForSequenceClassification, TrainingArguments, Trainer

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),y=new ue({props:{$$slots:{default:[Qa]},$$scope:{ctx:S}}}),R=new lt({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=5,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_imdb["train"],
    eval_dataset=tokenized_imdb["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_imdb[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),U=new ue({props:{$$slots:{default:[Xa]},$$scope:{ctx:S}}}),{c(){s=i("p"),m=o("Load DistilBERT with "),r=i("a"),u=o("AutoModelForSequenceClassification"),$=o(" along with the number of expected labels:"),_=g(),x(v.$$.fragment),T=g(),x(y.$$.fragment),E=g(),P=i("p"),H=o("At this point, only three steps remain:"),J=g(),M=i("ol"),G=i("li"),F=o("Define your training hyperparameters in "),tt=i("a"),Y=o("TrainingArguments"),bt=o("."),ht=g(),I=i("li"),ut=o("Pass the training arguments to "),B=i("a"),dt=o("Trainer"),N=o(" along with the model, dataset, tokenizer, and data collator."),_t=g(),L=i("li"),K=o("Call "),W=i("a"),Q=o("train()"),X=o(" to fine-tune your model."),rt=g(),x(R.$$.fragment),et=g(),x(U.$$.fragment),this.h()},l(h){s=p(h,"P",{});var k=f(s);m=n(k,"Load DistilBERT with "),r=p(k,"A",{href:!0});var at=f(r);u=n(at,"AutoModelForSequenceClassification"),at.forEach(a),$=n(k," along with the number of expected labels:"),k.forEach(a),_=b(h),z(v.$$.fragment,h),T=b(h),z(y.$$.fragment,h),E=b(h),P=p(h,"P",{});var O=f(P);H=n(O,"At this point, only three steps remain:"),O.forEach(a),J=b(h),M=p(h,"OL",{});var ot=f(M);G=p(ot,"LI",{});var V=f(G);F=n(V,"Define your training hyperparameters in "),tt=p(V,"A",{href:!0});var Z=f(tt);Y=n(Z,"TrainingArguments"),Z.forEach(a),bt=n(V,"."),V.forEach(a),ht=b(ot),I=p(ot,"LI",{});var it=f(I);ut=n(it,"Pass the training arguments to "),B=p(it,"A",{href:!0});var pt=f(B);dt=n(pt,"Trainer"),pt.forEach(a),N=n(it," along with the model, dataset, tokenizer, and data collator."),it.forEach(a),_t=b(ot),L=p(ot,"LI",{});var ft=f(L);K=n(ft,"Call "),W=p(ft,"A",{href:!0});var st=f(W);Q=n(st,"train()"),st.forEach(a),X=n(ft," to fine-tune your model."),ft.forEach(a),ot.forEach(a),rt=b(h),z(R.$$.fragment,h),et=b(h),z(U.$$.fragment,h),this.h()},h(){w(r,"href","/docs/transformers/pr_17013/en/model_doc/auto#transformers.AutoModelForSequenceClassification"),w(tt,"href","/docs/transformers/pr_17013/en/main_classes/trainer#transformers.TrainingArguments"),w(B,"href","/docs/transformers/pr_17013/en/main_classes/trainer#transformers.Trainer"),w(W,"href","/docs/transformers/pr_17013/en/main_classes/trainer#transformers.Trainer.train")},m(h,k){c(h,s,k),e(s,m),e(s,r),e(r,u),e(s,$),c(h,_,k),q(v,h,k),c(h,T,k),q(y,h,k),c(h,E,k),c(h,P,k),e(P,H),c(h,J,k),c(h,M,k),e(M,G),e(G,F),e(G,tt),e(tt,Y),e(G,bt),e(M,ht),e(M,I),e(I,ut),e(I,B),e(B,dt),e(I,N),e(M,_t),e(M,L),e(L,K),e(L,W),e(W,Q),e(L,X),c(h,rt,k),q(R,h,k),c(h,et,k),q(U,h,k),$t=!0},p(h,k){const at={};k&2&&(at.$$scope={dirty:k,ctx:h}),y.$set(at);const O={};k&2&&(O.$$scope={dirty:k,ctx:h}),U.$set(O)},i(h){$t||(A(v.$$.fragment,h),A(y.$$.fragment,h),A(R.$$.fragment,h),A(U.$$.fragment,h),$t=!0)},o(h){C(v.$$.fragment,h),C(y.$$.fragment,h),C(R.$$.fragment,h),C(U.$$.fragment,h),$t=!1},d(h){h&&a(s),h&&a(_),D(v,h),h&&a(T),D(y,h),h&&a(E),h&&a(P),h&&a(J),h&&a(M),h&&a(rt),D(R,h),h&&a(et),D(U,h)}}}function ts(S){let s,m;return s=new Fe({props:{$$slots:{default:[Za]},$$scope:{ctx:S}}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p(r,u){const $={};u&2&&($.$$scope={dirty:u,ctx:r}),s.$set($)},i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function es(S){let s,m,r,u,$;return{c(){s=i("p"),m=o("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),r=i("a"),u=o("here"),$=o("!"),this.h()},l(_){s=p(_,"P",{});var v=f(s);m=n(v,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),r=p(v,"A",{href:!0});var T=f(r);u=n(T,"here"),T.forEach(a),$=n(v,"!"),v.forEach(a),this.h()},h(){w(r,"href","training#finetune-with-keras")},m(_,v){c(_,s,v),e(s,m),e(s,r),e(r,u),e(s,$)},d(_){_&&a(s)}}}function as(S){let s,m,r,u,$,_,v,T,y,E,P,H,J,M,G,F,tt,Y,bt,ht,I,ut,B,dt,N,_t,L,K,W,Q,X,rt,R,et,U,$t,h,k,at,O,ot,V,Z,it,pt,ft,st,ct;return M=new lt({props:{code:`tf_train_set = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_set = tokenized_imdb["test"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = tokenized_imdb[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),F=new ue({props:{$$slots:{default:[es]},$$scope:{ctx:S}}}),I=new lt({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_epochs = <span class="hljs-number">5</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new lt({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),k=new lt({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),st=new lt({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){s=i("p"),m=o("To fine-tune a model in TensorFlow, start by converting your datasets to the "),r=i("code"),u=o("tf.data.Dataset"),$=o(" format with "),_=i("a"),v=i("code"),T=o("to_tf_dataset"),y=o(". Specify inputs and labels in "),E=i("code"),P=o("columns"),H=o(", whether to shuffle the dataset order, batch size, and the data collator:"),J=g(),x(M.$$.fragment),G=g(),x(F.$$.fragment),tt=g(),Y=i("p"),bt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ht=g(),x(I.$$.fragment),ut=g(),B=i("p"),dt=o("Load DistilBERT with "),N=i("a"),_t=o("TFAutoModelForSequenceClassification"),L=o(" along with the number of expected labels:"),K=g(),x(W.$$.fragment),Q=g(),X=i("p"),rt=o("Configure the model for training with "),R=i("a"),et=i("code"),U=o("compile"),$t=o(":"),h=g(),x(k.$$.fragment),at=g(),O=i("p"),ot=o("Call "),V=i("a"),Z=i("code"),it=o("fit"),pt=o(" to fine-tune the model:"),ft=g(),x(st.$$.fragment),this.h()},l(l){s=p(l,"P",{});var j=f(s);m=n(j,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),r=p(j,"CODE",{});var jt=f(r);u=n(jt,"tf.data.Dataset"),jt.forEach(a),$=n(j," format with "),_=p(j,"A",{href:!0,rel:!0});var Ut=f(_);v=p(Ut,"CODE",{});var Ht=f(v);T=n(Ht,"to_tf_dataset"),Ht.forEach(a),Ut.forEach(a),y=n(j,". Specify inputs and labels in "),E=p(j,"CODE",{});var mt=f(E);P=n(mt,"columns"),mt.forEach(a),H=n(j,", whether to shuffle the dataset order, batch size, and the data collator:"),j.forEach(a),J=b(l),z(M.$$.fragment,l),G=b(l),z(F.$$.fragment,l),tt=b(l),Y=p(l,"P",{});var Tt=f(Y);bt=n(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(a),ht=b(l),z(I.$$.fragment,l),ut=b(l),B=p(l,"P",{});var xt=f(B);dt=n(xt,"Load DistilBERT with "),N=p(xt,"A",{href:!0});var Yt=f(N);_t=n(Yt,"TFAutoModelForSequenceClassification"),Yt.forEach(a),L=n(xt," along with the number of expected labels:"),xt.forEach(a),K=b(l),z(W.$$.fragment,l),Q=b(l),X=p(l,"P",{});var wt=f(X);rt=n(wt,"Configure the model for training with "),R=p(wt,"A",{href:!0,rel:!0});var Gt=f(R);et=p(Gt,"CODE",{});var Kt=f(et);U=n(Kt,"compile"),Kt.forEach(a),Gt.forEach(a),$t=n(wt,":"),wt.forEach(a),h=b(l),z(k.$$.fragment,l),at=b(l),O=p(l,"P",{});var vt=f(O);ot=n(vt,"Call "),V=p(vt,"A",{href:!0,rel:!0});var Vt=f(V);Z=p(Vt,"CODE",{});var Jt=f(Z);it=n(Jt,"fit"),Jt.forEach(a),Vt.forEach(a),pt=n(vt," to fine-tune the model:"),vt.forEach(a),ft=b(l),z(st.$$.fragment,l),this.h()},h(){w(_,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),w(_,"rel","nofollow"),w(N,"href","/docs/transformers/pr_17013/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification"),w(R,"href","https://keras.io/api/models/model_training_apis/#compile-method"),w(R,"rel","nofollow"),w(V,"href","https://keras.io/api/models/model_training_apis/#fit-method"),w(V,"rel","nofollow")},m(l,j){c(l,s,j),e(s,m),e(s,r),e(r,u),e(s,$),e(s,_),e(_,v),e(v,T),e(s,y),e(s,E),e(E,P),e(s,H),c(l,J,j),q(M,l,j),c(l,G,j),q(F,l,j),c(l,tt,j),c(l,Y,j),e(Y,bt),c(l,ht,j),q(I,l,j),c(l,ut,j),c(l,B,j),e(B,dt),e(B,N),e(N,_t),e(B,L),c(l,K,j),q(W,l,j),c(l,Q,j),c(l,X,j),e(X,rt),e(X,R),e(R,et),e(et,U),e(X,$t),c(l,h,j),q(k,l,j),c(l,at,j),c(l,O,j),e(O,ot),e(O,V),e(V,Z),e(Z,it),e(O,pt),c(l,ft,j),q(st,l,j),ct=!0},p(l,j){const jt={};j&2&&(jt.$$scope={dirty:j,ctx:l}),F.$set(jt)},i(l){ct||(A(M.$$.fragment,l),A(F.$$.fragment,l),A(I.$$.fragment,l),A(W.$$.fragment,l),A(k.$$.fragment,l),A(st.$$.fragment,l),ct=!0)},o(l){C(M.$$.fragment,l),C(F.$$.fragment,l),C(I.$$.fragment,l),C(W.$$.fragment,l),C(k.$$.fragment,l),C(st.$$.fragment,l),ct=!1},d(l){l&&a(s),l&&a(J),D(M,l),l&&a(G),D(F,l),l&&a(tt),l&&a(Y),l&&a(ht),D(I,l),l&&a(ut),l&&a(B),l&&a(K),D(W,l),l&&a(Q),l&&a(X),l&&a(h),D(k,l),l&&a(at),l&&a(O),l&&a(ft),D(st,l)}}}function ss(S){let s,m;return s=new Fe({props:{$$slots:{default:[as]},$$scope:{ctx:S}}}),{c(){x(s.$$.fragment)},l(r){z(s.$$.fragment,r)},m(r,u){q(s,r,u),m=!0},p(r,u){const $={};u&2&&($.$$scope={dirty:u,ctx:r}),s.$set($)},i(r){m||(A(s.$$.fragment,r),m=!0)},o(r){C(s.$$.fragment,r),m=!1},d(r){D(s,r)}}}function rs(S){let s,m,r,u,$,_,v,T;return{c(){s=i("p"),m=o(`For a more in-depth example of how to fine-tune a model for text classification, take a look at the corresponding
`),r=i("a"),u=o("PyTorch notebook"),$=o(`
or `),_=i("a"),v=o("TensorFlow notebook"),T=o("."),this.h()},l(y){s=p(y,"P",{});var E=f(s);m=n(E,`For a more in-depth example of how to fine-tune a model for text classification, take a look at the corresponding
`),r=p(E,"A",{href:!0,rel:!0});var P=f(r);u=n(P,"PyTorch notebook"),P.forEach(a),$=n(E,`
or `),_=p(E,"A",{href:!0,rel:!0});var H=f(_);v=n(H,"TensorFlow notebook"),H.forEach(a),T=n(E,"."),E.forEach(a),this.h()},h(){w(r,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb"),w(r,"rel","nofollow"),w(_,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification-tf.ipynb"),w(_,"rel","nofollow")},m(y,E){c(y,s,E),e(s,m),e(s,r),e(r,u),e(s,$),e(s,_),e(_,v),e(s,T)},d(y){y&&a(s)}}}function os(S){let s,m,r,u,$,_,v,T,y,E,P,H,J,M,G,F,tt,Y,bt,ht,I,ut,B,dt,N,_t,L,K,W,Q,X,rt,R,et,U,$t,h,k,at,O,ot,V,Z,it,pt,ft,st,ct,l,j,jt,Ut,Ht,mt,Tt,xt,Yt,wt,Gt,Kt,vt,Vt,Jt,de,yt,zt,Zt,It,Ie,te,Me,_e,qt,Le,ee,Oe,We,$e,Mt,ge,At,Be,ae,Ne,Re,be,Lt,we,gt,Ue,Ot,se,He,Ye,re,Ge,Ke,oe,Ve,Je,ve,Wt,ke,nt,Qe,Qt,Xe,Ze,ne,ta,ea,le,aa,sa,ie,ra,oa,je,Ct,ye,Et,Dt,pe,Bt,na,fe,la,Ee,Pt,Te,St,xe;return _=new Se({}),P=new Ha({props:{id:"leNG9fN9FQU"}}),N=new ue({props:{$$slots:{default:[Ya]},$$scope:{ctx:S}}}),Q=new Se({}),k=new lt({props:{code:`from datasets import load_dataset

imdb = load_dataset("imdb")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>imdb = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)`}}),Z=new lt({props:{code:'imdb["test"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>imdb[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>]
{
    <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-number">0</span>,
    <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;I love sci-fi and am willing to put up with a lot. Sci-fi movies/TV are usually underfunded, under-appreciated and misunderstood. I tried to like this, I really did, but it is to good TV sci-fi as Babylon 5 is to Star Trek (the original). Silly prosthetics, cheap cardboard sets, stilted dialogues, CG that doesn&#x27;t match the background, and painfully one-dimensional characters cannot be overcome with a &#x27;sci-fi&#x27; setting. (I&#x27;m sure there are those of you out there who think Babylon 5 is good sci-fi TV. It&#x27;s not. It&#x27;s clich\xE9d and uninspiring.) While US viewers might like emotion and character development, sci-fi is a genre that does not take itself seriously (cf. Star Trek). It may treat important issues, yet not as a serious philosophy. It&#x27;s really difficult to care about the characters here as they are not simply foolish, just missing a spark of life. Their actions and reactions are wooden and predictable, often painful to watch. The makers of Earth KNOW it&#x27;s rubbish as they have to always say \\&quot;Gene Roddenberry&#x27;s Earth...\\&quot; otherwise people would not continue watching. Roddenberry&#x27;s ashes must be turning in their orbit as this dull, cheap, poorly edited (watching it without advert breaks really brings this home) trudging Trabant of a show lumbers into space. Spoiler. So, kill off a main character. And then bring him back as another actor. Jeeez! Dallas all over again.&quot;</span>,
}`}}),It=new Se({}),Mt=new lt({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Lt=new lt({props:{code:`def preprocess_function(examples):
    return tokenizer(examples["text"], truncation=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>], truncation=<span class="hljs-literal">True</span>)`}}),Wt=new lt({props:{code:"tokenized_imdb = imdb.map(preprocess_function, batched=True)",highlighted:'tokenized_imdb = imdb.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Ct=new La({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ja],pytorch:[Ka]},$$scope:{ctx:S}}}),Bt=new Se({}),Pt=new La({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ss],pytorch:[ts]},$$scope:{ctx:S}}}),St=new ue({props:{$$slots:{default:[rs]},$$scope:{ctx:S}}}),{c(){s=i("meta"),m=g(),r=i("h1"),u=i("a"),$=i("span"),x(_.$$.fragment),v=g(),T=i("span"),y=o("Text classification"),E=g(),x(P.$$.fragment),H=g(),J=i("p"),M=o("Text classification is a common NLP task that assigns a label or class to text. There are many practical applications of text classification widely used in production by some of today\u2019s largest companies. One of the most popular forms of text classification is sentiment analysis, which assigns a label like positive, negative, or neutral to a sequence of text."),G=g(),F=i("p"),tt=o("This guide will show you how to fine-tune "),Y=i("a"),bt=o("DistilBERT"),ht=o(" on the "),I=i("a"),ut=o("IMDb"),B=o(" dataset to determine whether a movie review is positive or negative."),dt=g(),x(N.$$.fragment),_t=g(),L=i("h2"),K=i("a"),W=i("span"),x(Q.$$.fragment),X=g(),rt=i("span"),R=o("Load IMDb dataset"),et=g(),U=i("p"),$t=o("Load the IMDb dataset from the \u{1F917} Datasets library:"),h=g(),x(k.$$.fragment),at=g(),O=i("p"),ot=o("Then take a look at an example:"),V=g(),x(Z.$$.fragment),it=g(),pt=i("p"),ft=o("There are two fields in this dataset:"),st=g(),ct=i("ul"),l=i("li"),j=i("code"),jt=o("text"),Ut=o(": a string containing the text of the movie review."),Ht=g(),mt=i("li"),Tt=i("code"),xt=o("label"),Yt=o(": a value that can either be "),wt=i("code"),Gt=o("0"),Kt=o(" for a negative review or "),vt=i("code"),Vt=o("1"),Jt=o(" for a positive review."),de=g(),yt=i("h2"),zt=i("a"),Zt=i("span"),x(It.$$.fragment),Ie=g(),te=i("span"),Me=o("Preprocess"),_e=g(),qt=i("p"),Le=o("Load the DistilBERT tokenizer to process the "),ee=i("code"),Oe=o("text"),We=o(" field:"),$e=g(),x(Mt.$$.fragment),ge=g(),At=i("p"),Be=o("Create a preprocessing function to tokenize "),ae=i("code"),Ne=o("text"),Re=o(" and truncate sequences to be no longer than DistilBERT\u2019s maximum input length:"),be=g(),x(Lt.$$.fragment),we=g(),gt=i("p"),Ue=o("Use \u{1F917} Datasets "),Ot=i("a"),se=i("code"),He=o("map"),Ye=o(" function to apply the preprocessing function over the entire dataset. You can speed up the "),re=i("code"),Ge=o("map"),Ke=o(" function by setting "),oe=i("code"),Ve=o("batched=True"),Je=o(" to process multiple elements of the dataset at once:"),ve=g(),x(Wt.$$.fragment),ke=g(),nt=i("p"),Qe=o("Use "),Qt=i("a"),Xe=o("DataCollatorWithPadding"),Ze=o(" to create a batch of examples. It will also "),ne=i("em"),ta=o("dynamically pad"),ea=o(" your text to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),le=i("code"),aa=o("tokenizer"),sa=o(" function by setting "),ie=i("code"),ra=o("padding=True"),oa=o(", dynamic padding is more efficient."),je=g(),x(Ct.$$.fragment),ye=g(),Et=i("h2"),Dt=i("a"),pe=i("span"),x(Bt.$$.fragment),na=g(),fe=i("span"),la=o("Train"),Ee=g(),x(Pt.$$.fragment),Te=g(),x(St.$$.fragment),this.h()},l(t){const d=Ra('[data-svelte="svelte-1phssyn"]',document.head);s=p(d,"META",{name:!0,content:!0}),d.forEach(a),m=b(t),r=p(t,"H1",{class:!0});var Nt=f(r);u=p(Nt,"A",{id:!0,class:!0,href:!0});var ce=f(u);$=p(ce,"SPAN",{});var me=f($);z(_.$$.fragment,me),me.forEach(a),ce.forEach(a),v=b(Nt),T=p(Nt,"SPAN",{});var he=f(T);y=n(he,"Text classification"),he.forEach(a),Nt.forEach(a),E=b(t),z(P.$$.fragment,t),H=b(t),J=p(t,"P",{});var pa=f(J);M=n(pa,"Text classification is a common NLP task that assigns a label or class to text. There are many practical applications of text classification widely used in production by some of today\u2019s largest companies. One of the most popular forms of text classification is sentiment analysis, which assigns a label like positive, negative, or neutral to a sequence of text."),pa.forEach(a),G=b(t),F=p(t,"P",{});var Xt=f(F);tt=n(Xt,"This guide will show you how to fine-tune "),Y=p(Xt,"A",{href:!0,rel:!0});var fa=f(Y);bt=n(fa,"DistilBERT"),fa.forEach(a),ht=n(Xt," on the "),I=p(Xt,"A",{href:!0,rel:!0});var ca=f(I);ut=n(ca,"IMDb"),ca.forEach(a),B=n(Xt," dataset to determine whether a movie review is positive or negative."),Xt.forEach(a),dt=b(t),z(N.$$.fragment,t),_t=b(t),L=p(t,"H2",{class:!0});var ze=f(L);K=p(ze,"A",{id:!0,class:!0,href:!0});var ma=f(K);W=p(ma,"SPAN",{});var ha=f(W);z(Q.$$.fragment,ha),ha.forEach(a),ma.forEach(a),X=b(ze),rt=p(ze,"SPAN",{});var ua=f(rt);R=n(ua,"Load IMDb dataset"),ua.forEach(a),ze.forEach(a),et=b(t),U=p(t,"P",{});var da=f(U);$t=n(da,"Load the IMDb dataset from the \u{1F917} Datasets library:"),da.forEach(a),h=b(t),z(k.$$.fragment,t),at=b(t),O=p(t,"P",{});var _a=f(O);ot=n(_a,"Then take a look at an example:"),_a.forEach(a),V=b(t),z(Z.$$.fragment,t),it=b(t),pt=p(t,"P",{});var $a=f(pt);ft=n($a,"There are two fields in this dataset:"),$a.forEach(a),st=b(t),ct=p(t,"UL",{});var qe=f(ct);l=p(qe,"LI",{});var ia=f(l);j=p(ia,"CODE",{});var ga=f(j);jt=n(ga,"text"),ga.forEach(a),Ut=n(ia,": a string containing the text of the movie review."),ia.forEach(a),Ht=b(qe),mt=p(qe,"LI",{});var Rt=f(mt);Tt=p(Rt,"CODE",{});var ba=f(Tt);xt=n(ba,"label"),ba.forEach(a),Yt=n(Rt,": a value that can either be "),wt=p(Rt,"CODE",{});var wa=f(wt);Gt=n(wa,"0"),wa.forEach(a),Kt=n(Rt," for a negative review or "),vt=p(Rt,"CODE",{});var va=f(vt);Vt=n(va,"1"),va.forEach(a),Jt=n(Rt," for a positive review."),Rt.forEach(a),qe.forEach(a),de=b(t),yt=p(t,"H2",{class:!0});var Ae=f(yt);zt=p(Ae,"A",{id:!0,class:!0,href:!0});var ka=f(zt);Zt=p(ka,"SPAN",{});var ja=f(Zt);z(It.$$.fragment,ja),ja.forEach(a),ka.forEach(a),Ie=b(Ae),te=p(Ae,"SPAN",{});var ya=f(te);Me=n(ya,"Preprocess"),ya.forEach(a),Ae.forEach(a),_e=b(t),qt=p(t,"P",{});var Ce=f(qt);Le=n(Ce,"Load the DistilBERT tokenizer to process the "),ee=p(Ce,"CODE",{});var Ea=f(ee);Oe=n(Ea,"text"),Ea.forEach(a),We=n(Ce," field:"),Ce.forEach(a),$e=b(t),z(Mt.$$.fragment,t),ge=b(t),At=p(t,"P",{});var De=f(At);Be=n(De,"Create a preprocessing function to tokenize "),ae=p(De,"CODE",{});var Ta=f(ae);Ne=n(Ta,"text"),Ta.forEach(a),Re=n(De," and truncate sequences to be no longer than DistilBERT\u2019s maximum input length:"),De.forEach(a),be=b(t),z(Lt.$$.fragment,t),we=b(t),gt=p(t,"P",{});var Ft=f(gt);Ue=n(Ft,"Use \u{1F917} Datasets "),Ot=p(Ft,"A",{href:!0,rel:!0});var xa=f(Ot);se=p(xa,"CODE",{});var za=f(se);He=n(za,"map"),za.forEach(a),xa.forEach(a),Ye=n(Ft," function to apply the preprocessing function over the entire dataset. You can speed up the "),re=p(Ft,"CODE",{});var qa=f(re);Ge=n(qa,"map"),qa.forEach(a),Ke=n(Ft," function by setting "),oe=p(Ft,"CODE",{});var Aa=f(oe);Ve=n(Aa,"batched=True"),Aa.forEach(a),Je=n(Ft," to process multiple elements of the dataset at once:"),Ft.forEach(a),ve=b(t),z(Wt.$$.fragment,t),ke=b(t),nt=p(t,"P",{});var kt=f(nt);Qe=n(kt,"Use "),Qt=p(kt,"A",{href:!0});var Ca=f(Qt);Xe=n(Ca,"DataCollatorWithPadding"),Ca.forEach(a),Ze=n(kt," to create a batch of examples. It will also "),ne=p(kt,"EM",{});var Da=f(ne);ta=n(Da,"dynamically pad"),Da.forEach(a),ea=n(kt," your text to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),le=p(kt,"CODE",{});var Pa=f(le);aa=n(Pa,"tokenizer"),Pa.forEach(a),sa=n(kt," function by setting "),ie=p(kt,"CODE",{});var Sa=f(ie);ra=n(Sa,"padding=True"),Sa.forEach(a),oa=n(kt,", dynamic padding is more efficient."),kt.forEach(a),je=b(t),z(Ct.$$.fragment,t),ye=b(t),Et=p(t,"H2",{class:!0});var Pe=f(Et);Dt=p(Pe,"A",{id:!0,class:!0,href:!0});var Fa=f(Dt);pe=p(Fa,"SPAN",{});var Ia=f(pe);z(Bt.$$.fragment,Ia),Ia.forEach(a),Fa.forEach(a),na=b(Pe),fe=p(Pe,"SPAN",{});var Ma=f(fe);la=n(Ma,"Train"),Ma.forEach(a),Pe.forEach(a),Ee=b(t),z(Pt.$$.fragment,t),Te=b(t),z(St.$$.fragment,t),this.h()},h(){w(s,"name","hf:doc:metadata"),w(s,"content",JSON.stringify(ns)),w(u,"id","text-classification"),w(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(u,"href","#text-classification"),w(r,"class","relative group"),w(Y,"href","https://huggingface.co/distilbert-base-uncased"),w(Y,"rel","nofollow"),w(I,"href","https://huggingface.co/datasets/imdb"),w(I,"rel","nofollow"),w(K,"id","load-imdb-dataset"),w(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(K,"href","#load-imdb-dataset"),w(L,"class","relative group"),w(zt,"id","preprocess"),w(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(zt,"href","#preprocess"),w(yt,"class","relative group"),w(Ot,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),w(Ot,"rel","nofollow"),w(Qt,"href","/docs/transformers/pr_17013/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),w(Dt,"id","train"),w(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Dt,"href","#train"),w(Et,"class","relative group")},m(t,d){e(document.head,s),c(t,m,d),c(t,r,d),e(r,u),e(u,$),q(_,$,null),e(r,v),e(r,T),e(T,y),c(t,E,d),q(P,t,d),c(t,H,d),c(t,J,d),e(J,M),c(t,G,d),c(t,F,d),e(F,tt),e(F,Y),e(Y,bt),e(F,ht),e(F,I),e(I,ut),e(F,B),c(t,dt,d),q(N,t,d),c(t,_t,d),c(t,L,d),e(L,K),e(K,W),q(Q,W,null),e(L,X),e(L,rt),e(rt,R),c(t,et,d),c(t,U,d),e(U,$t),c(t,h,d),q(k,t,d),c(t,at,d),c(t,O,d),e(O,ot),c(t,V,d),q(Z,t,d),c(t,it,d),c(t,pt,d),e(pt,ft),c(t,st,d),c(t,ct,d),e(ct,l),e(l,j),e(j,jt),e(l,Ut),e(ct,Ht),e(ct,mt),e(mt,Tt),e(Tt,xt),e(mt,Yt),e(mt,wt),e(wt,Gt),e(mt,Kt),e(mt,vt),e(vt,Vt),e(mt,Jt),c(t,de,d),c(t,yt,d),e(yt,zt),e(zt,Zt),q(It,Zt,null),e(yt,Ie),e(yt,te),e(te,Me),c(t,_e,d),c(t,qt,d),e(qt,Le),e(qt,ee),e(ee,Oe),e(qt,We),c(t,$e,d),q(Mt,t,d),c(t,ge,d),c(t,At,d),e(At,Be),e(At,ae),e(ae,Ne),e(At,Re),c(t,be,d),q(Lt,t,d),c(t,we,d),c(t,gt,d),e(gt,Ue),e(gt,Ot),e(Ot,se),e(se,He),e(gt,Ye),e(gt,re),e(re,Ge),e(gt,Ke),e(gt,oe),e(oe,Ve),e(gt,Je),c(t,ve,d),q(Wt,t,d),c(t,ke,d),c(t,nt,d),e(nt,Qe),e(nt,Qt),e(Qt,Xe),e(nt,Ze),e(nt,ne),e(ne,ta),e(nt,ea),e(nt,le),e(le,aa),e(nt,sa),e(nt,ie),e(ie,ra),e(nt,oa),c(t,je,d),q(Ct,t,d),c(t,ye,d),c(t,Et,d),e(Et,Dt),e(Dt,pe),q(Bt,pe,null),e(Et,na),e(Et,fe),e(fe,la),c(t,Ee,d),q(Pt,t,d),c(t,Te,d),q(St,t,d),xe=!0},p(t,[d]){const Nt={};d&2&&(Nt.$$scope={dirty:d,ctx:t}),N.$set(Nt);const ce={};d&2&&(ce.$$scope={dirty:d,ctx:t}),Ct.$set(ce);const me={};d&2&&(me.$$scope={dirty:d,ctx:t}),Pt.$set(me);const he={};d&2&&(he.$$scope={dirty:d,ctx:t}),St.$set(he)},i(t){xe||(A(_.$$.fragment,t),A(P.$$.fragment,t),A(N.$$.fragment,t),A(Q.$$.fragment,t),A(k.$$.fragment,t),A(Z.$$.fragment,t),A(It.$$.fragment,t),A(Mt.$$.fragment,t),A(Lt.$$.fragment,t),A(Wt.$$.fragment,t),A(Ct.$$.fragment,t),A(Bt.$$.fragment,t),A(Pt.$$.fragment,t),A(St.$$.fragment,t),xe=!0)},o(t){C(_.$$.fragment,t),C(P.$$.fragment,t),C(N.$$.fragment,t),C(Q.$$.fragment,t),C(k.$$.fragment,t),C(Z.$$.fragment,t),C(It.$$.fragment,t),C(Mt.$$.fragment,t),C(Lt.$$.fragment,t),C(Wt.$$.fragment,t),C(Ct.$$.fragment,t),C(Bt.$$.fragment,t),C(Pt.$$.fragment,t),C(St.$$.fragment,t),xe=!1},d(t){a(s),t&&a(m),t&&a(r),D(_),t&&a(E),D(P,t),t&&a(H),t&&a(J),t&&a(G),t&&a(F),t&&a(dt),D(N,t),t&&a(_t),t&&a(L),D(Q),t&&a(et),t&&a(U),t&&a(h),D(k,t),t&&a(at),t&&a(O),t&&a(V),D(Z,t),t&&a(it),t&&a(pt),t&&a(st),t&&a(ct),t&&a(de),t&&a(yt),D(It),t&&a(_e),t&&a(qt),t&&a($e),D(Mt,t),t&&a(ge),t&&a(At),t&&a(be),D(Lt,t),t&&a(we),t&&a(gt),t&&a(ve),D(Wt,t),t&&a(ke),t&&a(nt),t&&a(je),D(Ct,t),t&&a(ye),t&&a(Et),D(Bt),t&&a(Ee),D(Pt,t),t&&a(Te),D(St,t)}}}const ns={local:"text-classification",sections:[{local:"load-imdb-dataset",title:"Load IMDb dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Text classification"};function ls(S){return Ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class us extends Wa{constructor(s){super();Ba(this,s,ls,os,Na,{})}}export{us as default,ns as metadata};
