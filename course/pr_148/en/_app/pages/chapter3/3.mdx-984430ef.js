import{S as rn,i as sn,s as nn,e as s,k as c,w,t as o,M as ln,c as i,d as a,m as h,x as v,a as n,h as r,b as f,F as t,g as d,y as _,q as g,o as $,B as E,v as dn}from"../../chunks/vendor-1e8b365d.js";import{T as on}from"../../chunks/Tip-62b14c6e.js";import{Y as cn}from"../../chunks/Youtube-c2a8cc39.js";import{I as Ws}from"../../chunks/IconCopyLink-483c28ba.js";import{C as F}from"../../chunks/CodeBlock-e5764662.js";import{D as hn}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as pn}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function un(ve){let p,P,u,x,T,y,k,A,H,te;return{c(){p=s("p"),P=o("\u{1F4A1} If you want to automatically upload your model to the Hub during training, pass along "),u=s("code"),x=o("push_to_hub=True"),T=o(" in the "),y=s("code"),k=o("TrainingArguments"),A=o(". We will learn more about this in "),H=s("a"),te=o("Chapter 4"),this.h()},l(ae){p=i(ae,"P",{});var q=n(p);P=r(q,"\u{1F4A1} If you want to automatically upload your model to the Hub during training, pass along "),u=i(q,"CODE",{});var B=n(u);x=r(B,"push_to_hub=True"),B.forEach(a),T=r(q," in the "),y=i(q,"CODE",{});var _e=n(y);k=r(_e,"TrainingArguments"),_e.forEach(a),A=r(q,". We will learn more about this in "),H=i(q,"A",{href:!0});var Y=n(H);te=r(Y,"Chapter 4"),Y.forEach(a),q.forEach(a),this.h()},h(){f(H,"href","/course/chapter4/3")},m(ae,q){d(ae,p,q),t(p,P),t(p,u),t(u,x),t(p,T),t(p,y),t(y,k),t(p,A),t(p,H),t(H,te)},d(ae){ae&&a(p)}}}function fn(ve){let p,P,u,x,T;return{c(){p=s("p"),P=o("\u270F\uFE0F "),u=s("strong"),x=o("Try it out!"),T=o(" Fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2.")},l(y){p=i(y,"P",{});var k=n(p);P=r(k,"\u270F\uFE0F "),u=i(k,"STRONG",{});var A=n(u);x=r(A,"Try it out!"),A.forEach(a),T=r(k," Fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2."),k.forEach(a)},m(y,k){d(y,p,k),t(p,P),t(p,u),t(u,x),t(p,T)},d(y){y&&a(p)}}}function mn(ve){let p,P,u,x,T,y,k,A,H,te,ae,q,B,_e,Y,ra,z,Ja,Ke,Xa,Ka,Qe,Qa,Va,Ve,Za,eo,ge,to,ao,sa,Ie,oo,ia,$e,na,oe,ie,Ze,Ee,ro,et,so,la,I,io,tt,no,lo,at,co,ho,ot,po,uo,da,ye,ca,ne,ha,J,fo,We,mo,wo,rt,vo,_o,pa,be,ua,le,go,Ue,$o,Eo,fa,C,yo,st,bo,To,it,ko,Co,nt,jo,Do,lt,Oo,Po,dt,xo,Ao,ma,Te,wa,j,qo,ct,zo,So,ht,Fo,Io,pt,Wo,Uo,ut,Go,No,ft,Mo,Lo,va,X,Ro,mt,Ho,Bo,wt,Yo,Jo,_a,ke,ga,Ge,Xo,$a,de,O,Ko,vt,Qo,Vo,_t,Zo,er,gt,tr,ar,$t,or,rr,Et,sr,ir,nr,re,lr,yt,dr,cr,bt,hr,pr,Ea,se,ce,Tt,Ce,ur,kt,fr,ya,D,mr,Ct,wr,vr,jt,_r,gr,Dt,$r,Er,Ot,yr,br,Pt,Tr,kr,ba,je,Ta,De,ka,m,Cr,xt,jr,Dr,At,Or,Pr,qt,xr,Ar,zt,qr,zr,St,Sr,Fr,Ft,Ir,Wr,It,Ur,Gr,Wt,Nr,Mr,Ca,W,Lr,Ut,Rr,Hr,Gt,Br,Yr,Ne,Jr,Xr,ja,Oe,Da,S,Kr,Nt,Qr,Vr,Mt,Zr,es,Lt,ts,as,Rt,os,rs,Oa,Pe,Pa,xe,xa,U,ss,Ae,is,ns,Ht,ls,ds,Bt,cs,hs,Aa,he,ps,Yt,us,fs,qa,qe,za,K,ms,Jt,ws,vs,Xt,_s,gs,Sa,ze,Fa,G,$s,Kt,Es,ys,Qt,bs,Ts,Vt,ks,Cs,Ia,Se,Wa,Me,js,Ua,Q,Ds,Zt,Os,Ps,ea,xs,As,Ga,V,qs,ta,zs,Ss,Le,Fs,Is,Na,pe,Ma;return u=new pn({props:{fw:ve[0]}}),A=new Ws({}),B=new hn({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"}]}}),Y=new cn({props:{id:"nvBXf7s7vTI"}}),$e=new F({props:{code:`from datasets import load_dataset
from transformers import AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset("glue", "mrpc")
checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)


tokenized_datasets = raw_datasets.map(tokenize_function, batched=True)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
checkpoint = <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">example</span>):
    <span class="hljs-keyword">return</span> tokenizer(example[<span class="hljs-string">&quot;sentence1&quot;</span>], example[<span class="hljs-string">&quot;sentence2&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),Ee=new Ws({}),ye=new F({props:{code:`from transformers import TrainingArguments

training_args = TrainingArguments("test-trainer")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>)`}}),ne=new on({props:{$$slots:{default:[un]},$$scope:{ctx:ve}}}),be=new F({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),Te=new F({props:{code:`from transformers import Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    tokenizer=tokenizer,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
)`}}),ke=new F({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),Ce=new Ws({}),je=new F({props:{code:`predictions = trainer.predict(tokenized_datasets["validation"])
print(predictions.predictions.shape, predictions.label_ids.shape)`,highlighted:`predictions = trainer.predict(tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>])
<span class="hljs-built_in">print</span>(predictions.predictions.shape, predictions.label_ids.shape)`}}),De=new F({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),Oe=new F({props:{code:`import numpy as np

preds = np.argmax(predictions.predictions, axis=-1)`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

preds = np.argmax(predictions.predictions, axis=-<span class="hljs-number">1</span>)`}}),Pe=new F({props:{code:`from datasets import load_metric

metric = load_metric("glue", "mrpc")
metric.compute(predictions=preds, references=predictions.label_ids)`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=preds, references=predictions.label_ids)`}}),xe=new F({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),qe=new F({props:{code:`def compute_metrics(eval_preds):
    metric = load_metric("glue", "mrpc")
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_preds</span>):
    metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)`}}),ze=new F({props:{code:`training_args = TrainingArguments("test-trainer", evaluation_strategy="epoch")
model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics,
)`,highlighted:`training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics,
)`}}),Se=new F({props:{code:"trainer.train()",highlighted:'trainer.trai<span class="hljs-meta">n</span>()'}}),pe=new on({props:{$$slots:{default:[fn]},$$scope:{ctx:ve}}}),{c(){p=s("meta"),P=c(),w(u.$$.fragment),x=c(),T=s("h1"),y=s("a"),k=s("span"),w(A.$$.fragment),H=c(),te=s("span"),ae=o("Fine-tuning a model with the Trainer API"),q=c(),w(B.$$.fragment),_e=c(),w(Y.$$.fragment),ra=c(),z=s("p"),Ja=o("\u{1F917} Transformers provides a "),Ke=s("code"),Xa=o("Trainer"),Ka=o(" class to help you fine-tune any of the pretrained models it provides on your dataset. Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to define the "),Qe=s("code"),Qa=o("Trainer"),Va=o(". The hardest part is likely to be preparing the environment to run "),Ve=s("code"),Za=o("Trainer.train()"),eo=o(", as it will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),ge=s("a"),to=o("Google Colab"),ao=o("."),sa=c(),Ie=s("p"),oo=o("The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),ia=c(),w($e.$$.fragment),na=c(),oe=s("h3"),ie=s("a"),Ze=s("span"),w(Ee.$$.fragment),ro=c(),et=s("span"),so=o("Training"),la=c(),I=s("p"),io=o("The first step before we can define our "),tt=s("code"),no=o("Trainer"),lo=o(" is to define a "),at=s("code"),co=o("TrainingArguments"),ho=o(" class that will contain all the hyperparameters the "),ot=s("code"),po=o("Trainer"),uo=o(" will use for training and evaluation. The only argument you have to provide is a directory where the trained model will be saved, as well as the checkpoints along the way. For all the rest, you can leave the defaults, which should work pretty well for a basic fine-tuning."),da=c(),w(ye.$$.fragment),ca=c(),w(ne.$$.fragment),ha=c(),J=s("p"),fo=o("The second step is to define our model. As in the "),We=s("a"),mo=o("previous chapter"),wo=o(", we will use the "),rt=s("code"),vo=o("AutoModelForSequenceClassification"),_o=o(" class, with two labels:"),pa=c(),w(be.$$.fragment),ua=c(),le=s("p"),go=o("You will notice that unlike in "),Ue=s("a"),$o=o("Chapter 2"),Eo=o(", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been added instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),fa=c(),C=s("p"),yo=o("Once we have our model, we can define a "),st=s("code"),bo=o("Trainer"),To=o(" by passing it all the objects constructed up to now \u2014 the "),it=s("code"),ko=o("model"),Co=o(", the "),nt=s("code"),jo=o("training_args"),Do=o(", the training and validation datasets, our "),lt=s("code"),Oo=o("data_collator"),Po=o(", and our "),dt=s("code"),xo=o("tokenizer"),Ao=o(":"),ma=c(),w(Te.$$.fragment),wa=c(),j=s("p"),qo=o("Note that when you pass the "),ct=s("code"),zo=o("tokenizer"),So=o(" as we did here, the default "),ht=s("code"),Fo=o("data_collator"),Io=o(" used by the "),pt=s("code"),Wo=o("Trainer"),Uo=o(" will be a "),ut=s("code"),Go=o("DataCollatorWithPadding"),No=o(" as defined previously, so you can skip the line "),ft=s("code"),Mo=o("data_collator=data_collator"),Lo=o(" in this call. It was still important to show you this part of the processing in section 2!"),va=c(),X=s("p"),Ro=o("To fine-tune the model on our dataset, we just have to call the "),mt=s("code"),Ho=o("train()"),Bo=o(" method of our "),wt=s("code"),Yo=o("Trainer"),Jo=o(":"),_a=c(),w(ke.$$.fragment),ga=c(),Ge=s("p"),Xo=o("This will start the fine-tuning (which should take a couple of minutes on a GPU) and report the training loss every 500 steps. It won\u2019t, however, tell you how well (or badly) your model is performing. This is because:"),$a=c(),de=s("ol"),O=s("li"),Ko=o("We didn\u2019t tell the "),vt=s("code"),Qo=o("Trainer"),Vo=o(" to evaluate during training by setting "),_t=s("code"),Zo=o("evaluation_strategy"),er=o(" to either "),gt=s("code"),tr=o('"steps"'),ar=o(" (evaluate every "),$t=s("code"),or=o("eval_steps"),rr=o(") or "),Et=s("code"),sr=o('"epoch"'),ir=o(" (evaluate at the end of each epoch)."),nr=c(),re=s("li"),lr=o("We didn\u2019t provide the "),yt=s("code"),dr=o("Trainer"),cr=o(" with a "),bt=s("code"),hr=o("compute_metrics()"),pr=o(" function to calculate a metric during said evaluation (otherwise the evaluation would just have printed the loss, which is not a very intuitive number)."),Ea=c(),se=s("h3"),ce=s("a"),Tt=s("span"),w(Ce.$$.fragment),ur=c(),kt=s("span"),fr=o("Evaluation"),ya=c(),D=s("p"),mr=o("Let\u2019s see how we can build a useful "),Ct=s("code"),wr=o("compute_metrics()"),vr=o(" function and use it the next time we train. The function must take an "),jt=s("code"),_r=o("EvalPrediction"),gr=o(" object (which is a named tuple with a "),Dt=s("code"),$r=o("predictions"),Er=o(" field and a "),Ot=s("code"),yr=o("label_ids"),br=o(" field) and will return a dictionary mapping strings to floats (the strings being the names of the metrics returned, and the floats their values). To get some predictions from our model, we can use the "),Pt=s("code"),Tr=o("Trainer.predict()"),kr=o(" command:"),ba=c(),w(je.$$.fragment),Ta=c(),w(De.$$.fragment),ka=c(),m=s("p"),Cr=o("The output of the "),xt=s("code"),jr=o("predict()"),Dr=o(" method is another named tuple with three fields: "),At=s("code"),Or=o("predictions"),Pr=o(", "),qt=s("code"),xr=o("label_ids"),Ar=o(", and "),zt=s("code"),qr=o("metrics"),zr=o(". The "),St=s("code"),Sr=o("metrics"),Fr=o(" field will just contain the loss on the dataset passed, as well as some time metrics (how long it took to predict, in total and on average). Once we complete our "),Ft=s("code"),Ir=o("compute_metrics()"),Wr=o(" function and pass it to the "),It=s("code"),Ur=o("Trainer"),Gr=o(", that field will also contain the metrics returned by "),Wt=s("code"),Nr=o("compute_metrics()"),Mr=o("."),Ca=c(),W=s("p"),Lr=o("As you can see, "),Ut=s("code"),Rr=o("predictions"),Hr=o(" is a two-dimensional array with shape 408 x 2 (408 being the number of elements in the dataset we used). Those are the logits for each element of the dataset we passed to "),Gt=s("code"),Br=o("predict()"),Yr=o(" (as you saw in the "),Ne=s("a"),Jr=o("previous chapter"),Xr=o(", all Transformer models return logits). To transform them into predictions that we can compare to our labels, we need to take the index with the maximum value on the second axis:"),ja=c(),w(Oe.$$.fragment),Da=c(),S=s("p"),Kr=o("We can now compare those "),Nt=s("code"),Qr=o("preds"),Vr=o(" to the labels. To build our "),Mt=s("code"),Zr=o("compute_metric()"),es=o(" function, we will rely on the metrics from the \u{1F917} Datasets library. We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),Lt=s("code"),ts=o("load_metric()"),as=o(" function. The object returned has a "),Rt=s("code"),os=o("compute()"),rs=o(" method we can use to do the metric calculation:"),Oa=c(),w(Pe.$$.fragment),Pa=c(),w(xe.$$.fragment),xa=c(),U=s("p"),ss=o("The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),Ae=s("a"),is=o("BERT paper"),ns=o(" reported an F1 score of 88.9 for the base model. That was the "),Ht=s("code"),ls=o("uncased"),ds=o(" model while we are currently using the "),Bt=s("code"),cs=o("cased"),hs=o(" model, which explains the better result."),Aa=c(),he=s("p"),ps=o("Wrapping everything together, we get our "),Yt=s("code"),us=o("compute_metrics()"),fs=o(" function:"),qa=c(),w(qe.$$.fragment),za=c(),K=s("p"),ms=o("And to see it used in action to report metrics at the end of each epoch, here is how we define a new "),Jt=s("code"),ws=o("Trainer"),vs=o(" with this "),Xt=s("code"),_s=o("compute_metrics()"),gs=o(" function:"),Sa=c(),w(ze.$$.fragment),Fa=c(),G=s("p"),$s=o("Note that we create a new "),Kt=s("code"),Es=o("TrainingArguments"),ys=o(" with its "),Qt=s("code"),bs=o("evaluation_strategy"),Ts=o(" set to "),Vt=s("code"),ks=o('"epoch"'),Cs=o(" and a new model \u2014 otherwise, we would just be continuing the training of the model we have already trained. To launch a new training run, we execute:"),Ia=c(),w(Se.$$.fragment),Wa=c(),Me=s("p"),js=o("This time, it will report the validation loss and metrics at the end of each epoch on top of the training loss. Again, the exact accuracy/F1 score you reach might be a bit different from what we found, because of the random head initialization of the model, but it should be in the same ballpark."),Ua=c(),Q=s("p"),Ds=o("The "),Zt=s("code"),Os=o("Trainer"),Ps=o(" will work out of the box on multiple GPUs or TPUs and provides lots of options, like mixed-precision training (use "),ea=s("code"),xs=o("fp16 = True"),As=o(" in your training arguments). We will go over everything it supports in Chapter 10."),Ga=c(),V=s("p"),qs=o("This concludes the introduction to fine-tuning using the "),ta=s("code"),zs=o("Trainer"),Ss=o(" API. An example of doing this for most common NLP tasks will be given in "),Le=s("a"),Fs=o("Chapter 7"),Is=o(", but for now let\u2019s look at how to do the same thing in pure PyTorch."),Na=c(),w(pe.$$.fragment),this.h()},l(e){const l=ln('[data-svelte="svelte-1phssyn"]',document.head);p=i(l,"META",{name:!0,content:!0}),l.forEach(a),P=h(e),v(u.$$.fragment,e),x=h(e),T=i(e,"H1",{class:!0});var Fe=n(T);y=i(Fe,"A",{id:!0,class:!0,href:!0});var aa=n(y);k=i(aa,"SPAN",{});var oa=n(k);v(A.$$.fragment,oa),oa.forEach(a),aa.forEach(a),H=h(Fe),te=i(Fe,"SPAN",{});var Us=n(te);ae=r(Us,"Fine-tuning a model with the Trainer API"),Us.forEach(a),Fe.forEach(a),q=h(e),v(B.$$.fragment,e),_e=h(e),v(Y.$$.fragment,e),ra=h(e),z=i(e,"P",{});var Z=n(z);Ja=r(Z,"\u{1F917} Transformers provides a "),Ke=i(Z,"CODE",{});var Gs=n(Ke);Xa=r(Gs,"Trainer"),Gs.forEach(a),Ka=r(Z," class to help you fine-tune any of the pretrained models it provides on your dataset. Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to define the "),Qe=i(Z,"CODE",{});var Ns=n(Qe);Qa=r(Ns,"Trainer"),Ns.forEach(a),Va=r(Z,". The hardest part is likely to be preparing the environment to run "),Ve=i(Z,"CODE",{});var Ms=n(Ve);Za=r(Ms,"Trainer.train()"),Ms.forEach(a),eo=r(Z,", as it will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),ge=i(Z,"A",{href:!0,rel:!0});var Ls=n(ge);to=r(Ls,"Google Colab"),Ls.forEach(a),ao=r(Z,"."),Z.forEach(a),sa=h(e),Ie=i(e,"P",{});var Rs=n(Ie);oo=r(Rs,"The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),Rs.forEach(a),ia=h(e),v($e.$$.fragment,e),na=h(e),oe=i(e,"H3",{class:!0});var La=n(oe);ie=i(La,"A",{id:!0,class:!0,href:!0});var Hs=n(ie);Ze=i(Hs,"SPAN",{});var Bs=n(Ze);v(Ee.$$.fragment,Bs),Bs.forEach(a),Hs.forEach(a),ro=h(La),et=i(La,"SPAN",{});var Ys=n(et);so=r(Ys,"Training"),Ys.forEach(a),La.forEach(a),la=h(e),I=i(e,"P",{});var ue=n(I);io=r(ue,"The first step before we can define our "),tt=i(ue,"CODE",{});var Js=n(tt);no=r(Js,"Trainer"),Js.forEach(a),lo=r(ue," is to define a "),at=i(ue,"CODE",{});var Xs=n(at);co=r(Xs,"TrainingArguments"),Xs.forEach(a),ho=r(ue," class that will contain all the hyperparameters the "),ot=i(ue,"CODE",{});var Ks=n(ot);po=r(Ks,"Trainer"),Ks.forEach(a),uo=r(ue," will use for training and evaluation. The only argument you have to provide is a directory where the trained model will be saved, as well as the checkpoints along the way. For all the rest, you can leave the defaults, which should work pretty well for a basic fine-tuning."),ue.forEach(a),da=h(e),v(ye.$$.fragment,e),ca=h(e),v(ne.$$.fragment,e),ha=h(e),J=i(e,"P",{});var Re=n(J);fo=r(Re,"The second step is to define our model. As in the "),We=i(Re,"A",{href:!0});var Qs=n(We);mo=r(Qs,"previous chapter"),Qs.forEach(a),wo=r(Re,", we will use the "),rt=i(Re,"CODE",{});var Vs=n(rt);vo=r(Vs,"AutoModelForSequenceClassification"),Vs.forEach(a),_o=r(Re," class, with two labels:"),Re.forEach(a),pa=h(e),v(be.$$.fragment,e),ua=h(e),le=i(e,"P",{});var Ra=n(le);go=r(Ra,"You will notice that unlike in "),Ue=i(Ra,"A",{href:!0});var Zs=n(Ue);$o=r(Zs,"Chapter 2"),Zs.forEach(a),Eo=r(Ra,", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been added instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),Ra.forEach(a),fa=h(e),C=i(e,"P",{});var N=n(C);yo=r(N,"Once we have our model, we can define a "),st=i(N,"CODE",{});var ei=n(st);bo=r(ei,"Trainer"),ei.forEach(a),To=r(N," by passing it all the objects constructed up to now \u2014 the "),it=i(N,"CODE",{});var ti=n(it);ko=r(ti,"model"),ti.forEach(a),Co=r(N,", the "),nt=i(N,"CODE",{});var ai=n(nt);jo=r(ai,"training_args"),ai.forEach(a),Do=r(N,", the training and validation datasets, our "),lt=i(N,"CODE",{});var oi=n(lt);Oo=r(oi,"data_collator"),oi.forEach(a),Po=r(N,", and our "),dt=i(N,"CODE",{});var ri=n(dt);xo=r(ri,"tokenizer"),ri.forEach(a),Ao=r(N,":"),N.forEach(a),ma=h(e),v(Te.$$.fragment,e),wa=h(e),j=i(e,"P",{});var M=n(j);qo=r(M,"Note that when you pass the "),ct=i(M,"CODE",{});var si=n(ct);zo=r(si,"tokenizer"),si.forEach(a),So=r(M," as we did here, the default "),ht=i(M,"CODE",{});var ii=n(ht);Fo=r(ii,"data_collator"),ii.forEach(a),Io=r(M," used by the "),pt=i(M,"CODE",{});var ni=n(pt);Wo=r(ni,"Trainer"),ni.forEach(a),Uo=r(M," will be a "),ut=i(M,"CODE",{});var li=n(ut);Go=r(li,"DataCollatorWithPadding"),li.forEach(a),No=r(M," as defined previously, so you can skip the line "),ft=i(M,"CODE",{});var di=n(ft);Mo=r(di,"data_collator=data_collator"),di.forEach(a),Lo=r(M," in this call. It was still important to show you this part of the processing in section 2!"),M.forEach(a),va=h(e),X=i(e,"P",{});var He=n(X);Ro=r(He,"To fine-tune the model on our dataset, we just have to call the "),mt=i(He,"CODE",{});var ci=n(mt);Ho=r(ci,"train()"),ci.forEach(a),Bo=r(He," method of our "),wt=i(He,"CODE",{});var hi=n(wt);Yo=r(hi,"Trainer"),hi.forEach(a),Jo=r(He,":"),He.forEach(a),_a=h(e),v(ke.$$.fragment,e),ga=h(e),Ge=i(e,"P",{});var pi=n(Ge);Xo=r(pi,"This will start the fine-tuning (which should take a couple of minutes on a GPU) and report the training loss every 500 steps. It won\u2019t, however, tell you how well (or badly) your model is performing. This is because:"),pi.forEach(a),$a=h(e),de=i(e,"OL",{});var Ha=n(de);O=i(Ha,"LI",{});var L=n(O);Ko=r(L,"We didn\u2019t tell the "),vt=i(L,"CODE",{});var ui=n(vt);Qo=r(ui,"Trainer"),ui.forEach(a),Vo=r(L," to evaluate during training by setting "),_t=i(L,"CODE",{});var fi=n(_t);Zo=r(fi,"evaluation_strategy"),fi.forEach(a),er=r(L," to either "),gt=i(L,"CODE",{});var mi=n(gt);tr=r(mi,'"steps"'),mi.forEach(a),ar=r(L," (evaluate every "),$t=i(L,"CODE",{});var wi=n($t);or=r(wi,"eval_steps"),wi.forEach(a),rr=r(L,") or "),Et=i(L,"CODE",{});var vi=n(Et);sr=r(vi,'"epoch"'),vi.forEach(a),ir=r(L," (evaluate at the end of each epoch)."),L.forEach(a),nr=h(Ha),re=i(Ha,"LI",{});var Be=n(re);lr=r(Be,"We didn\u2019t provide the "),yt=i(Be,"CODE",{});var _i=n(yt);dr=r(_i,"Trainer"),_i.forEach(a),cr=r(Be," with a "),bt=i(Be,"CODE",{});var gi=n(bt);hr=r(gi,"compute_metrics()"),gi.forEach(a),pr=r(Be," function to calculate a metric during said evaluation (otherwise the evaluation would just have printed the loss, which is not a very intuitive number)."),Be.forEach(a),Ha.forEach(a),Ea=h(e),se=i(e,"H3",{class:!0});var Ba=n(se);ce=i(Ba,"A",{id:!0,class:!0,href:!0});var $i=n(ce);Tt=i($i,"SPAN",{});var Ei=n(Tt);v(Ce.$$.fragment,Ei),Ei.forEach(a),$i.forEach(a),ur=h(Ba),kt=i(Ba,"SPAN",{});var yi=n(kt);fr=r(yi,"Evaluation"),yi.forEach(a),Ba.forEach(a),ya=h(e),D=i(e,"P",{});var R=n(D);mr=r(R,"Let\u2019s see how we can build a useful "),Ct=i(R,"CODE",{});var bi=n(Ct);wr=r(bi,"compute_metrics()"),bi.forEach(a),vr=r(R," function and use it the next time we train. The function must take an "),jt=i(R,"CODE",{});var Ti=n(jt);_r=r(Ti,"EvalPrediction"),Ti.forEach(a),gr=r(R," object (which is a named tuple with a "),Dt=i(R,"CODE",{});var ki=n(Dt);$r=r(ki,"predictions"),ki.forEach(a),Er=r(R," field and a "),Ot=i(R,"CODE",{});var Ci=n(Ot);yr=r(Ci,"label_ids"),Ci.forEach(a),br=r(R," field) and will return a dictionary mapping strings to floats (the strings being the names of the metrics returned, and the floats their values). To get some predictions from our model, we can use the "),Pt=i(R,"CODE",{});var ji=n(Pt);Tr=r(ji,"Trainer.predict()"),ji.forEach(a),kr=r(R," command:"),R.forEach(a),ba=h(e),v(je.$$.fragment,e),Ta=h(e),v(De.$$.fragment,e),ka=h(e),m=i(e,"P",{});var b=n(m);Cr=r(b,"The output of the "),xt=i(b,"CODE",{});var Di=n(xt);jr=r(Di,"predict()"),Di.forEach(a),Dr=r(b," method is another named tuple with three fields: "),At=i(b,"CODE",{});var Oi=n(At);Or=r(Oi,"predictions"),Oi.forEach(a),Pr=r(b,", "),qt=i(b,"CODE",{});var Pi=n(qt);xr=r(Pi,"label_ids"),Pi.forEach(a),Ar=r(b,", and "),zt=i(b,"CODE",{});var xi=n(zt);qr=r(xi,"metrics"),xi.forEach(a),zr=r(b,". The "),St=i(b,"CODE",{});var Ai=n(St);Sr=r(Ai,"metrics"),Ai.forEach(a),Fr=r(b," field will just contain the loss on the dataset passed, as well as some time metrics (how long it took to predict, in total and on average). Once we complete our "),Ft=i(b,"CODE",{});var qi=n(Ft);Ir=r(qi,"compute_metrics()"),qi.forEach(a),Wr=r(b," function and pass it to the "),It=i(b,"CODE",{});var zi=n(It);Ur=r(zi,"Trainer"),zi.forEach(a),Gr=r(b,", that field will also contain the metrics returned by "),Wt=i(b,"CODE",{});var Si=n(Wt);Nr=r(Si,"compute_metrics()"),Si.forEach(a),Mr=r(b,"."),b.forEach(a),Ca=h(e),W=i(e,"P",{});var fe=n(W);Lr=r(fe,"As you can see, "),Ut=i(fe,"CODE",{});var Fi=n(Ut);Rr=r(Fi,"predictions"),Fi.forEach(a),Hr=r(fe," is a two-dimensional array with shape 408 x 2 (408 being the number of elements in the dataset we used). Those are the logits for each element of the dataset we passed to "),Gt=i(fe,"CODE",{});var Ii=n(Gt);Br=r(Ii,"predict()"),Ii.forEach(a),Yr=r(fe," (as you saw in the "),Ne=i(fe,"A",{href:!0});var Wi=n(Ne);Jr=r(Wi,"previous chapter"),Wi.forEach(a),Xr=r(fe,", all Transformer models return logits). To transform them into predictions that we can compare to our labels, we need to take the index with the maximum value on the second axis:"),fe.forEach(a),ja=h(e),v(Oe.$$.fragment,e),Da=h(e),S=i(e,"P",{});var ee=n(S);Kr=r(ee,"We can now compare those "),Nt=i(ee,"CODE",{});var Ui=n(Nt);Qr=r(Ui,"preds"),Ui.forEach(a),Vr=r(ee," to the labels. To build our "),Mt=i(ee,"CODE",{});var Gi=n(Mt);Zr=r(Gi,"compute_metric()"),Gi.forEach(a),es=r(ee," function, we will rely on the metrics from the \u{1F917} Datasets library. We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),Lt=i(ee,"CODE",{});var Ni=n(Lt);ts=r(Ni,"load_metric()"),Ni.forEach(a),as=r(ee," function. The object returned has a "),Rt=i(ee,"CODE",{});var Mi=n(Rt);os=r(Mi,"compute()"),Mi.forEach(a),rs=r(ee," method we can use to do the metric calculation:"),ee.forEach(a),Oa=h(e),v(Pe.$$.fragment,e),Pa=h(e),v(xe.$$.fragment,e),xa=h(e),U=i(e,"P",{});var me=n(U);ss=r(me,"The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),Ae=i(me,"A",{href:!0,rel:!0});var Li=n(Ae);is=r(Li,"BERT paper"),Li.forEach(a),ns=r(me," reported an F1 score of 88.9 for the base model. That was the "),Ht=i(me,"CODE",{});var Ri=n(Ht);ls=r(Ri,"uncased"),Ri.forEach(a),ds=r(me," model while we are currently using the "),Bt=i(me,"CODE",{});var Hi=n(Bt);cs=r(Hi,"cased"),Hi.forEach(a),hs=r(me," model, which explains the better result."),me.forEach(a),Aa=h(e),he=i(e,"P",{});var Ya=n(he);ps=r(Ya,"Wrapping everything together, we get our "),Yt=i(Ya,"CODE",{});var Bi=n(Yt);us=r(Bi,"compute_metrics()"),Bi.forEach(a),fs=r(Ya," function:"),Ya.forEach(a),qa=h(e),v(qe.$$.fragment,e),za=h(e),K=i(e,"P",{});var Ye=n(K);ms=r(Ye,"And to see it used in action to report metrics at the end of each epoch, here is how we define a new "),Jt=i(Ye,"CODE",{});var Yi=n(Jt);ws=r(Yi,"Trainer"),Yi.forEach(a),vs=r(Ye," with this "),Xt=i(Ye,"CODE",{});var Ji=n(Xt);_s=r(Ji,"compute_metrics()"),Ji.forEach(a),gs=r(Ye," function:"),Ye.forEach(a),Sa=h(e),v(ze.$$.fragment,e),Fa=h(e),G=i(e,"P",{});var we=n(G);$s=r(we,"Note that we create a new "),Kt=i(we,"CODE",{});var Xi=n(Kt);Es=r(Xi,"TrainingArguments"),Xi.forEach(a),ys=r(we," with its "),Qt=i(we,"CODE",{});var Ki=n(Qt);bs=r(Ki,"evaluation_strategy"),Ki.forEach(a),Ts=r(we," set to "),Vt=i(we,"CODE",{});var Qi=n(Vt);ks=r(Qi,'"epoch"'),Qi.forEach(a),Cs=r(we," and a new model \u2014 otherwise, we would just be continuing the training of the model we have already trained. To launch a new training run, we execute:"),we.forEach(a),Ia=h(e),v(Se.$$.fragment,e),Wa=h(e),Me=i(e,"P",{});var Vi=n(Me);js=r(Vi,"This time, it will report the validation loss and metrics at the end of each epoch on top of the training loss. Again, the exact accuracy/F1 score you reach might be a bit different from what we found, because of the random head initialization of the model, but it should be in the same ballpark."),Vi.forEach(a),Ua=h(e),Q=i(e,"P",{});var Je=n(Q);Ds=r(Je,"The "),Zt=i(Je,"CODE",{});var Zi=n(Zt);Os=r(Zi,"Trainer"),Zi.forEach(a),Ps=r(Je," will work out of the box on multiple GPUs or TPUs and provides lots of options, like mixed-precision training (use "),ea=i(Je,"CODE",{});var en=n(ea);xs=r(en,"fp16 = True"),en.forEach(a),As=r(Je," in your training arguments). We will go over everything it supports in Chapter 10."),Je.forEach(a),Ga=h(e),V=i(e,"P",{});var Xe=n(V);qs=r(Xe,"This concludes the introduction to fine-tuning using the "),ta=i(Xe,"CODE",{});var tn=n(ta);zs=r(tn,"Trainer"),tn.forEach(a),Ss=r(Xe," API. An example of doing this for most common NLP tasks will be given in "),Le=i(Xe,"A",{href:!0});var an=n(Le);Fs=r(an,"Chapter 7"),an.forEach(a),Is=r(Xe,", but for now let\u2019s look at how to do the same thing in pure PyTorch."),Xe.forEach(a),Na=h(e),v(pe.$$.fragment,e),this.h()},h(){f(p,"name","hf:doc:metadata"),f(p,"content",JSON.stringify(wn)),f(y,"id","finetuning-a-model-with-the-trainer-api"),f(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(y,"href","#finetuning-a-model-with-the-trainer-api"),f(T,"class","relative group"),f(ge,"href","https://colab.research.google.com/"),f(ge,"rel","nofollow"),f(ie,"id","training"),f(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ie,"href","#training"),f(oe,"class","relative group"),f(We,"href","/course/chapter2"),f(Ue,"href","/course/chapter2"),f(ce,"id","evaluation"),f(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ce,"href","#evaluation"),f(se,"class","relative group"),f(Ne,"href","/course/chapter2"),f(Ae,"href","https://arxiv.org/pdf/1810.04805.pdf"),f(Ae,"rel","nofollow"),f(Le,"href","course/chapter7")},m(e,l){t(document.head,p),d(e,P,l),_(u,e,l),d(e,x,l),d(e,T,l),t(T,y),t(y,k),_(A,k,null),t(T,H),t(T,te),t(te,ae),d(e,q,l),_(B,e,l),d(e,_e,l),_(Y,e,l),d(e,ra,l),d(e,z,l),t(z,Ja),t(z,Ke),t(Ke,Xa),t(z,Ka),t(z,Qe),t(Qe,Qa),t(z,Va),t(z,Ve),t(Ve,Za),t(z,eo),t(z,ge),t(ge,to),t(z,ao),d(e,sa,l),d(e,Ie,l),t(Ie,oo),d(e,ia,l),_($e,e,l),d(e,na,l),d(e,oe,l),t(oe,ie),t(ie,Ze),_(Ee,Ze,null),t(oe,ro),t(oe,et),t(et,so),d(e,la,l),d(e,I,l),t(I,io),t(I,tt),t(tt,no),t(I,lo),t(I,at),t(at,co),t(I,ho),t(I,ot),t(ot,po),t(I,uo),d(e,da,l),_(ye,e,l),d(e,ca,l),_(ne,e,l),d(e,ha,l),d(e,J,l),t(J,fo),t(J,We),t(We,mo),t(J,wo),t(J,rt),t(rt,vo),t(J,_o),d(e,pa,l),_(be,e,l),d(e,ua,l),d(e,le,l),t(le,go),t(le,Ue),t(Ue,$o),t(le,Eo),d(e,fa,l),d(e,C,l),t(C,yo),t(C,st),t(st,bo),t(C,To),t(C,it),t(it,ko),t(C,Co),t(C,nt),t(nt,jo),t(C,Do),t(C,lt),t(lt,Oo),t(C,Po),t(C,dt),t(dt,xo),t(C,Ao),d(e,ma,l),_(Te,e,l),d(e,wa,l),d(e,j,l),t(j,qo),t(j,ct),t(ct,zo),t(j,So),t(j,ht),t(ht,Fo),t(j,Io),t(j,pt),t(pt,Wo),t(j,Uo),t(j,ut),t(ut,Go),t(j,No),t(j,ft),t(ft,Mo),t(j,Lo),d(e,va,l),d(e,X,l),t(X,Ro),t(X,mt),t(mt,Ho),t(X,Bo),t(X,wt),t(wt,Yo),t(X,Jo),d(e,_a,l),_(ke,e,l),d(e,ga,l),d(e,Ge,l),t(Ge,Xo),d(e,$a,l),d(e,de,l),t(de,O),t(O,Ko),t(O,vt),t(vt,Qo),t(O,Vo),t(O,_t),t(_t,Zo),t(O,er),t(O,gt),t(gt,tr),t(O,ar),t(O,$t),t($t,or),t(O,rr),t(O,Et),t(Et,sr),t(O,ir),t(de,nr),t(de,re),t(re,lr),t(re,yt),t(yt,dr),t(re,cr),t(re,bt),t(bt,hr),t(re,pr),d(e,Ea,l),d(e,se,l),t(se,ce),t(ce,Tt),_(Ce,Tt,null),t(se,ur),t(se,kt),t(kt,fr),d(e,ya,l),d(e,D,l),t(D,mr),t(D,Ct),t(Ct,wr),t(D,vr),t(D,jt),t(jt,_r),t(D,gr),t(D,Dt),t(Dt,$r),t(D,Er),t(D,Ot),t(Ot,yr),t(D,br),t(D,Pt),t(Pt,Tr),t(D,kr),d(e,ba,l),_(je,e,l),d(e,Ta,l),_(De,e,l),d(e,ka,l),d(e,m,l),t(m,Cr),t(m,xt),t(xt,jr),t(m,Dr),t(m,At),t(At,Or),t(m,Pr),t(m,qt),t(qt,xr),t(m,Ar),t(m,zt),t(zt,qr),t(m,zr),t(m,St),t(St,Sr),t(m,Fr),t(m,Ft),t(Ft,Ir),t(m,Wr),t(m,It),t(It,Ur),t(m,Gr),t(m,Wt),t(Wt,Nr),t(m,Mr),d(e,Ca,l),d(e,W,l),t(W,Lr),t(W,Ut),t(Ut,Rr),t(W,Hr),t(W,Gt),t(Gt,Br),t(W,Yr),t(W,Ne),t(Ne,Jr),t(W,Xr),d(e,ja,l),_(Oe,e,l),d(e,Da,l),d(e,S,l),t(S,Kr),t(S,Nt),t(Nt,Qr),t(S,Vr),t(S,Mt),t(Mt,Zr),t(S,es),t(S,Lt),t(Lt,ts),t(S,as),t(S,Rt),t(Rt,os),t(S,rs),d(e,Oa,l),_(Pe,e,l),d(e,Pa,l),_(xe,e,l),d(e,xa,l),d(e,U,l),t(U,ss),t(U,Ae),t(Ae,is),t(U,ns),t(U,Ht),t(Ht,ls),t(U,ds),t(U,Bt),t(Bt,cs),t(U,hs),d(e,Aa,l),d(e,he,l),t(he,ps),t(he,Yt),t(Yt,us),t(he,fs),d(e,qa,l),_(qe,e,l),d(e,za,l),d(e,K,l),t(K,ms),t(K,Jt),t(Jt,ws),t(K,vs),t(K,Xt),t(Xt,_s),t(K,gs),d(e,Sa,l),_(ze,e,l),d(e,Fa,l),d(e,G,l),t(G,$s),t(G,Kt),t(Kt,Es),t(G,ys),t(G,Qt),t(Qt,bs),t(G,Ts),t(G,Vt),t(Vt,ks),t(G,Cs),d(e,Ia,l),_(Se,e,l),d(e,Wa,l),d(e,Me,l),t(Me,js),d(e,Ua,l),d(e,Q,l),t(Q,Ds),t(Q,Zt),t(Zt,Os),t(Q,Ps),t(Q,ea),t(ea,xs),t(Q,As),d(e,Ga,l),d(e,V,l),t(V,qs),t(V,ta),t(ta,zs),t(V,Ss),t(V,Le),t(Le,Fs),t(V,Is),d(e,Na,l),_(pe,e,l),Ma=!0},p(e,[l]){const Fe={};l&1&&(Fe.fw=e[0]),u.$set(Fe);const aa={};l&2&&(aa.$$scope={dirty:l,ctx:e}),ne.$set(aa);const oa={};l&2&&(oa.$$scope={dirty:l,ctx:e}),pe.$set(oa)},i(e){Ma||(g(u.$$.fragment,e),g(A.$$.fragment,e),g(B.$$.fragment,e),g(Y.$$.fragment,e),g($e.$$.fragment,e),g(Ee.$$.fragment,e),g(ye.$$.fragment,e),g(ne.$$.fragment,e),g(be.$$.fragment,e),g(Te.$$.fragment,e),g(ke.$$.fragment,e),g(Ce.$$.fragment,e),g(je.$$.fragment,e),g(De.$$.fragment,e),g(Oe.$$.fragment,e),g(Pe.$$.fragment,e),g(xe.$$.fragment,e),g(qe.$$.fragment,e),g(ze.$$.fragment,e),g(Se.$$.fragment,e),g(pe.$$.fragment,e),Ma=!0)},o(e){$(u.$$.fragment,e),$(A.$$.fragment,e),$(B.$$.fragment,e),$(Y.$$.fragment,e),$($e.$$.fragment,e),$(Ee.$$.fragment,e),$(ye.$$.fragment,e),$(ne.$$.fragment,e),$(be.$$.fragment,e),$(Te.$$.fragment,e),$(ke.$$.fragment,e),$(Ce.$$.fragment,e),$(je.$$.fragment,e),$(De.$$.fragment,e),$(Oe.$$.fragment,e),$(Pe.$$.fragment,e),$(xe.$$.fragment,e),$(qe.$$.fragment,e),$(ze.$$.fragment,e),$(Se.$$.fragment,e),$(pe.$$.fragment,e),Ma=!1},d(e){a(p),e&&a(P),E(u,e),e&&a(x),e&&a(T),E(A),e&&a(q),E(B,e),e&&a(_e),E(Y,e),e&&a(ra),e&&a(z),e&&a(sa),e&&a(Ie),e&&a(ia),E($e,e),e&&a(na),e&&a(oe),E(Ee),e&&a(la),e&&a(I),e&&a(da),E(ye,e),e&&a(ca),E(ne,e),e&&a(ha),e&&a(J),e&&a(pa),E(be,e),e&&a(ua),e&&a(le),e&&a(fa),e&&a(C),e&&a(ma),E(Te,e),e&&a(wa),e&&a(j),e&&a(va),e&&a(X),e&&a(_a),E(ke,e),e&&a(ga),e&&a(Ge),e&&a($a),e&&a(de),e&&a(Ea),e&&a(se),E(Ce),e&&a(ya),e&&a(D),e&&a(ba),E(je,e),e&&a(Ta),E(De,e),e&&a(ka),e&&a(m),e&&a(Ca),e&&a(W),e&&a(ja),E(Oe,e),e&&a(Da),e&&a(S),e&&a(Oa),E(Pe,e),e&&a(Pa),E(xe,e),e&&a(xa),e&&a(U),e&&a(Aa),e&&a(he),e&&a(qa),E(qe,e),e&&a(za),e&&a(K),e&&a(Sa),E(ze,e),e&&a(Fa),e&&a(G),e&&a(Ia),E(Se,e),e&&a(Wa),e&&a(Me),e&&a(Ua),e&&a(Q),e&&a(Ga),e&&a(V),e&&a(Na),E(pe,e)}}}const wn={local:"finetuning-a-model-with-the-trainer-api",sections:[{local:"training",title:"Training"},{local:"evaluation",title:"Evaluation"}],title:"Fine-tuning a model with the Trainer API"};function vn(ve,p,P){let u="pt";return dn(()=>{const x=new URLSearchParams(window.location.search);P(0,u=x.get("fw")||"pt")}),[u]}class kn extends rn{constructor(p){super();sn(this,p,vn,mn,nn,{})}}export{kn as default,wn as metadata};
