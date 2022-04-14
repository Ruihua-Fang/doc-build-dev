import{S as Dt,i as qt,s as Ft,e as o,k as c,w as j,t as r,M as It,c as n,d as a,m as u,a as i,x as y,h as l,b as d,F as t,g as p,y as k,q as E,o as x,B as T,v as zt}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{Y as St}from"../../chunks/Youtube-5c6e11e6.js";import{I as za}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as H}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Lt,M as Nt}from"../../chunks/Markdown-9acf6d91.js";function Mt(O){let m,b,f,_,w;return{c(){m=o("p"),b=r("See the image classification "),f=o("a"),_=r("task page"),w=r(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){m=n(g,"P",{});var $=i(m);b=l($,"See the image classification "),f=n($,"A",{href:!0,rel:!0});var A=i(f);_=l(A,"task page"),A.forEach(a),w=l($," for more information about its associated models, datasets, and metrics."),$.forEach(a),this.h()},h(){d(f,"href","https://huggingface.co/tasks/audio-classification"),d(f,"rel","nofollow")},m(g,$){p(g,m,$),t(m,b),t(m,f),t(f,_),t(m,w)},d(g){g&&a(m)}}}function Ot(O){let m,b,f,_,w,g,$,A;return{c(){m=o("p"),b=r("If you aren\u2019t familiar with fine-tuning a model with the "),f=o("a"),_=r("Trainer"),w=r(", take a look at the basic tutorial "),g=o("a"),$=r("here"),A=r("!"),this.h()},l(P){m=n(P,"P",{});var D=i(m);b=l(D,"If you aren\u2019t familiar with fine-tuning a model with the "),f=n(D,"A",{href:!0});var F=i(f);_=l(F,"Trainer"),F.forEach(a),w=l(D,", take a look at the basic tutorial "),g=n(D,"A",{href:!0});var V=i(g);$=l(V,"here"),V.forEach(a),A=l(D,"!"),D.forEach(a),this.h()},h(){d(f,"href","/docs/transformers/pr_16782/en/main_classes/trainer#transformers.Trainer"),d(g,"href","../training#finetune-with-trainer")},m(P,D){p(P,m,D),t(m,b),t(m,f),t(f,_),t(m,w),t(m,g),t(g,$),t(m,A)},d(P){P&&a(m)}}}function Rt(O){let m,b,f,_,w,g,$,A,P,D,F,V,G,I,C,z,ee,J,De,ne,Y,qe,ie,ge,R,ae,L,U,W,K,Fe,pe,Q,_e,N,Ie,$e,X,B,te,se,ve,Z,me,S,be;return $=new H({props:{code:`from transformers import AutoModelForImageClassification, TrainingArguments, Trainer

model = AutoModelForImageClassification.from_pretrained(
    "google/vit-base-patch16-224-in21k",
    num_labels=len(labels),
    id2label=id2label,
    label2id=label2id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForImageClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>,
<span class="hljs-meta">... </span>    num_labels=<span class="hljs-built_in">len</span>(labels),
<span class="hljs-meta">... </span>    id2label=id2label,
<span class="hljs-meta">... </span>    label2id=label2id,
<span class="hljs-meta">... </span>)`}}),P=new st({props:{$$slots:{default:[Ot]},$$scope:{ctx:O}}}),S=new H({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    per_device_train_batch_size=16,
    evaluation_strategy="steps",
    num_train_epochs=4,
    fp16=True,
    save_steps=100,
    eval_steps=100,
    logging_steps=10,
    learning_rate=2e-4,
    save_total_limit=2,
    remove_unused_columns=False,
)

trainer = Trainer(
    model=model,
    args=training_args,
    data_collator=data_collator,
    train_dataset=food["train"],
    eval_dataset=food["test"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    save_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    eval_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    logging_steps=<span class="hljs-number">10</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-4</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>    remove_unused_columns=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>    train_dataset=food[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=food[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){m=o("p"),b=r("Load ViT with "),f=o("a"),_=r("AutoModelForImageClassification"),w=r(". Specify the number of labels, and pass the model the mapping between label number and label class:"),g=c(),j($.$$.fragment),A=c(),j(P.$$.fragment),D=c(),F=o("p"),V=r("At this point, only three steps remain:"),G=c(),I=o("ol"),C=o("li"),z=r("Define your training hyperparameters in "),ee=o("a"),J=r("TrainingArguments"),De=r(". It is important you don\u2019t remove unused columns because this will drop the "),ne=o("code"),Y=r("image"),qe=r(" column. Without the "),ie=o("code"),ge=r("image"),R=r(" column, you can\u2019t create "),ae=o("code"),L=r("pixel_values"),U=r(". Set "),W=o("code"),K=r("remove_unused_columns=False"),Fe=r(" to prevent this behavior!"),pe=c(),Q=o("li"),_e=r("Pass the training arguments to "),N=o("a"),Ie=r("Trainer"),$e=r(" along with the model, datasets, tokenizer, and data collator."),X=c(),B=o("li"),te=r("Call "),se=o("a"),ve=r("train()"),Z=r(" to fine-tune your model."),me=c(),j(S.$$.fragment),this.h()},l(h){m=n(h,"P",{});var v=i(m);b=l(v,"Load ViT with "),f=n(v,"A",{href:!0});var re=i(f);_=l(re,"AutoModelForImageClassification"),re.forEach(a),w=l(v,". Specify the number of labels, and pass the model the mapping between label number and label class:"),v.forEach(a),g=u(h),y($.$$.fragment,h),A=u(h),y(P.$$.fragment,h),D=u(h),F=n(h,"P",{});var M=i(F);V=l(M,"At this point, only three steps remain:"),M.forEach(a),G=u(h),I=n(h,"OL",{});var le=i(I);C=n(le,"LI",{});var q=i(C);z=l(q,"Define your training hyperparameters in "),ee=n(q,"A",{href:!0});var Ge=i(ee);J=l(Ge,"TrainingArguments"),Ge.forEach(a),De=l(q,". It is important you don\u2019t remove unused columns because this will drop the "),ne=n(q,"CODE",{});var Je=i(ne);Y=l(Je,"image"),Je.forEach(a),qe=l(q," column. Without the "),ie=n(q,"CODE",{});var we=i(ie);ge=l(we,"image"),we.forEach(a),R=l(q," column, you can\u2019t create "),ae=n(q,"CODE",{});var Ye=i(ae);L=l(Ye,"pixel_values"),Ye.forEach(a),U=l(q,". Set "),W=n(q,"CODE",{});var We=i(W);K=l(We,"remove_unused_columns=False"),We.forEach(a),Fe=l(q," to prevent this behavior!"),q.forEach(a),pe=u(le),Q=n(le,"LI",{});var fe=i(Q);_e=l(fe,"Pass the training arguments to "),N=n(fe,"A",{href:!0});var oe=i(N);Ie=l(oe,"Trainer"),oe.forEach(a),$e=l(fe," along with the model, datasets, tokenizer, and data collator."),fe.forEach(a),X=u(le),B=n(le,"LI",{});var he=i(B);te=l(he,"Call "),se=n(he,"A",{href:!0});var ce=i(se);ve=l(ce,"train()"),ce.forEach(a),Z=l(he," to fine-tune your model."),he.forEach(a),le.forEach(a),me=u(h),y(S.$$.fragment,h),this.h()},h(){d(f,"href","/docs/transformers/pr_16782/en/model_doc/auto#transformers.AutoModelForImageClassification"),d(ee,"href","/docs/transformers/pr_16782/en/main_classes/trainer#transformers.TrainingArguments"),d(N,"href","/docs/transformers/pr_16782/en/main_classes/trainer#transformers.Trainer"),d(se,"href","/docs/transformers/pr_16782/en/main_classes/trainer#transformers.Trainer.train")},m(h,v){p(h,m,v),t(m,b),t(m,f),t(f,_),t(m,w),p(h,g,v),k($,h,v),p(h,A,v),k(P,h,v),p(h,D,v),p(h,F,v),t(F,V),p(h,G,v),p(h,I,v),t(I,C),t(C,z),t(C,ee),t(ee,J),t(C,De),t(C,ne),t(ne,Y),t(C,qe),t(C,ie),t(ie,ge),t(C,R),t(C,ae),t(ae,L),t(C,U),t(C,W),t(W,K),t(C,Fe),t(I,pe),t(I,Q),t(Q,_e),t(Q,N),t(N,Ie),t(Q,$e),t(I,X),t(I,B),t(B,te),t(B,se),t(se,ve),t(B,Z),p(h,me,v),k(S,h,v),be=!0},p(h,v){const re={};v&2&&(re.$$scope={dirty:v,ctx:h}),P.$set(re)},i(h){be||(E($.$$.fragment,h),E(P.$$.fragment,h),E(S.$$.fragment,h),be=!0)},o(h){x($.$$.fragment,h),x(P.$$.fragment,h),x(S.$$.fragment,h),be=!1},d(h){h&&a(m),h&&a(g),T($,h),h&&a(A),T(P,h),h&&a(D),h&&a(F),h&&a(G),h&&a(I),h&&a(me),T(S,h)}}}function Ut(O){let m,b;return m=new Nt({props:{$$slots:{default:[Rt]},$$scope:{ctx:O}}}),{c(){j(m.$$.fragment)},l(f){y(m.$$.fragment,f)},m(f,_){k(m,f,_),b=!0},p(f,_){const w={};_&2&&(w.$$scope={dirty:_,ctx:f}),m.$set(w)},i(f){b||(E(m.$$.fragment,f),b=!0)},o(f){x(m.$$.fragment,f),b=!1},d(f){T(m,f)}}}function Bt(O){let m,b,f,_,w;return{c(){m=o("p"),b=r("For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),f=o("a"),_=r("PyTorch notebook"),w=r("."),this.h()},l(g){m=n(g,"P",{});var $=i(m);b=l($,"For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),f=n($,"A",{href:!0,rel:!0});var A=i(f);_=l(A,"PyTorch notebook"),A.forEach(a),w=l($,"."),$.forEach(a),this.h()},h(){d(f,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb"),d(f,"rel","nofollow")},m(g,$){p(g,m,$),t(m,b),t(m,f),t(f,_),t(m,w)},d(g){g&&a(m)}}}function Ht(O){let m,b,f,_,w,g,$,A,P,D,F,V,G,I,C,z,ee,J,De,ne,Y,qe,ie,ge,R,ae,L,U,W,K,Fe,pe,Q,_e,N,Ie,$e,X,B,te,se,ve,Z,me,S,be,h,v,re,M,le,q,Ge,Je,we,Ye,We,fe,oe,he,ce,Sa,ma,ze,fa,je,La,ea,Na,Ma,ha,ue,ye,aa,Se,Oa,ta,Ra,ca,Ke,Ua,ua,Le,da,ke,Ba,Ne,sa,Ha,Va,ga,Me,_a,Ee,Ga,ra,Ja,Ya,$a,Oe,va,xe,Wa,Re,la,Ka,Qa,ba,Ue,wa,Te,Xa,Qe,Za,et,ja,Be,ya,de,Ae,oa,He,at,na,tt,ka,Ce,Ea,Pe,xa;return g=new za({}),F=new St({props:{id:"tjAIM7BOYhw"}}),R=new st({props:{$$slots:{default:[Mt]},$$scope:{ctx:O}}}),K=new za({}),X=new H({props:{code:`from datasets import load_dataset

food = load_dataset("food101", split="train[:5000]")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>food = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:5000]&quot;</span>)`}}),Z=new H({props:{code:"food = food.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),v=new H({props:{code:'food["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>food[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=512x512 at <span class="hljs-number">0x7F52AFC8AC50</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">79</span>}`}}),oe=new H({props:{code:`labels = food["train"].features["label"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = food[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;label&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),ze=new H({props:{code:"id2label[str(79)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">79</span>)]
<span class="hljs-string">&#x27;prime_rib&#x27;</span>`}}),Se=new za({}),Le=new H({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)`}}),Me=new H({props:{code:`from torchvision.transforms import RandomResizedCrop, Compose, Normalize, ToTensor

normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
_transforms = Compose([RandomResizedCrop(feature_extractor.size), ToTensor(), normalize])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> RandomResizedCrop, Compose, Normalize, ToTensor

<span class="hljs-meta">&gt;&gt;&gt; </span>normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
<span class="hljs-meta">&gt;&gt;&gt; </span>_transforms = Compose([RandomResizedCrop(feature_extractor.size), ToTensor(), normalize])`}}),Oe=new H({props:{code:`def transforms(examples):
    examples["pixel_values"] = [_transforms(img.convert("RGB")) for img in examples["image"]]
    del examples["image"]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [_transforms(img.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> img <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">del</span> examples[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Ue=new H({props:{code:"food = food.with_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.with_transform(transforms)'}}),Be=new H({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),He=new za({}),Ce=new Lt({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Ut]},$$scope:{ctx:O}}}),Pe=new st({props:{$$slots:{default:[Bt]},$$scope:{ctx:O}}}),{c(){m=o("meta"),b=c(),f=o("h1"),_=o("a"),w=o("span"),j(g.$$.fragment),$=c(),A=o("span"),P=r("Image classification"),D=c(),j(F.$$.fragment),V=c(),G=o("p"),I=r("Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),C=c(),z=o("p"),ee=r("This guide will show you how to fine-tune "),J=o("a"),De=r("ViT"),ne=r(" on the "),Y=o("a"),qe=r("Food-101"),ie=r(" dataset to classify a food item in an image."),ge=c(),j(R.$$.fragment),ae=c(),L=o("h2"),U=o("a"),W=o("span"),j(K.$$.fragment),Fe=c(),pe=o("span"),Q=r("Load Food-101 dataset"),_e=c(),N=o("p"),Ie=r("Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),$e=c(),j(X.$$.fragment),B=c(),te=o("p"),se=r("Split this dataset into a train and test set:"),ve=c(),j(Z.$$.fragment),me=c(),S=o("p"),be=r("Then take a look at an example:"),h=c(),j(v.$$.fragment),re=c(),M=o("p"),le=r("The "),q=o("code"),Ge=r("image"),Je=r(" field contains a PIL image, and each "),we=o("code"),Ye=r("label"),We=r(" is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),fe=c(),j(oe.$$.fragment),he=c(),ce=o("p"),Sa=r("Now you can convert the label number to a label name for more information:"),ma=c(),j(ze.$$.fragment),fa=c(),je=o("p"),La=r("Each food class - or label - corresponds to a number; "),ea=o("code"),Na=r("79"),Ma=r(" indicates a prime rib in the example above."),ha=c(),ue=o("h2"),ye=o("a"),aa=o("span"),j(Se.$$.fragment),Oa=c(),ta=o("span"),Ra=r("Preprocess"),ca=c(),Ke=o("p"),Ua=r("Load the ViT feature extractor to process the image into a tensor:"),ua=c(),j(Le.$$.fragment),da=c(),ke=o("p"),Ba=r("Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),Ne=o("a"),sa=o("code"),Ha=r("transforms"),Va=r(" module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),ga=c(),j(Me.$$.fragment),_a=c(),Ee=o("p"),Ga=r("Create a preprocessing function that will apply the transforms and return the "),ra=o("code"),Ja=r("pixel_values"),Ya=r(" - the inputs to the model - of the image:"),$a=c(),j(Oe.$$.fragment),va=c(),xe=o("p"),Wa=r("Use \u{1F917} Dataset\u2019s "),Re=o("a"),la=o("code"),Ka=r("with_transform"),Qa=r(" method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),ba=c(),j(Ue.$$.fragment),wa=c(),Te=o("p"),Xa=r("Use "),Qe=o("a"),Za=r("DefaultDataCollator"),et=r(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),ja=c(),j(Be.$$.fragment),ya=c(),de=o("h2"),Ae=o("a"),oa=o("span"),j(He.$$.fragment),at=c(),na=o("span"),tt=r("Train"),ka=c(),j(Ce.$$.fragment),Ea=c(),j(Pe.$$.fragment),this.h()},l(e){const s=It('[data-svelte="svelte-1phssyn"]',document.head);m=n(s,"META",{name:!0,content:!0}),s.forEach(a),b=u(e),f=n(e,"H1",{class:!0});var Ve=i(f);_=n(Ve,"A",{id:!0,class:!0,href:!0});var ia=i(_);w=n(ia,"SPAN",{});var pa=i(w);y(g.$$.fragment,pa),pa.forEach(a),ia.forEach(a),$=u(Ve),A=n(Ve,"SPAN",{});var rt=i(A);P=l(rt,"Image classification"),rt.forEach(a),Ve.forEach(a),D=u(e),y(F.$$.fragment,e),V=u(e),G=n(e,"P",{});var lt=i(G);I=l(lt,"Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),lt.forEach(a),C=u(e),z=n(e,"P",{});var Xe=i(z);ee=l(Xe,"This guide will show you how to fine-tune "),J=n(Xe,"A",{href:!0,rel:!0});var ot=i(J);De=l(ot,"ViT"),ot.forEach(a),ne=l(Xe," on the "),Y=n(Xe,"A",{href:!0,rel:!0});var nt=i(Y);qe=l(nt,"Food-101"),nt.forEach(a),ie=l(Xe," dataset to classify a food item in an image."),Xe.forEach(a),ge=u(e),y(R.$$.fragment,e),ae=u(e),L=n(e,"H2",{class:!0});var Ta=i(L);U=n(Ta,"A",{id:!0,class:!0,href:!0});var it=i(U);W=n(it,"SPAN",{});var pt=i(W);y(K.$$.fragment,pt),pt.forEach(a),it.forEach(a),Fe=u(Ta),pe=n(Ta,"SPAN",{});var mt=i(pe);Q=l(mt,"Load Food-101 dataset"),mt.forEach(a),Ta.forEach(a),_e=u(e),N=n(e,"P",{});var ft=i(N);Ie=l(ft,"Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),ft.forEach(a),$e=u(e),y(X.$$.fragment,e),B=u(e),te=n(e,"P",{});var ht=i(te);se=l(ht,"Split this dataset into a train and test set:"),ht.forEach(a),ve=u(e),y(Z.$$.fragment,e),me=u(e),S=n(e,"P",{});var ct=i(S);be=l(ct,"Then take a look at an example:"),ct.forEach(a),h=u(e),y(v.$$.fragment,e),re=u(e),M=n(e,"P",{});var Ze=i(M);le=l(Ze,"The "),q=n(Ze,"CODE",{});var ut=i(q);Ge=l(ut,"image"),ut.forEach(a),Je=l(Ze," field contains a PIL image, and each "),we=n(Ze,"CODE",{});var dt=i(we);Ye=l(dt,"label"),dt.forEach(a),We=l(Ze," is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),Ze.forEach(a),fe=u(e),y(oe.$$.fragment,e),he=u(e),ce=n(e,"P",{});var gt=i(ce);Sa=l(gt,"Now you can convert the label number to a label name for more information:"),gt.forEach(a),ma=u(e),y(ze.$$.fragment,e),fa=u(e),je=n(e,"P",{});var Aa=i(je);La=l(Aa,"Each food class - or label - corresponds to a number; "),ea=n(Aa,"CODE",{});var _t=i(ea);Na=l(_t,"79"),_t.forEach(a),Ma=l(Aa," indicates a prime rib in the example above."),Aa.forEach(a),ha=u(e),ue=n(e,"H2",{class:!0});var Ca=i(ue);ye=n(Ca,"A",{id:!0,class:!0,href:!0});var $t=i(ye);aa=n($t,"SPAN",{});var vt=i(aa);y(Se.$$.fragment,vt),vt.forEach(a),$t.forEach(a),Oa=u(Ca),ta=n(Ca,"SPAN",{});var bt=i(ta);Ra=l(bt,"Preprocess"),bt.forEach(a),Ca.forEach(a),ca=u(e),Ke=n(e,"P",{});var wt=i(Ke);Ua=l(wt,"Load the ViT feature extractor to process the image into a tensor:"),wt.forEach(a),ua=u(e),y(Le.$$.fragment,e),da=u(e),ke=n(e,"P",{});var Pa=i(ke);Ba=l(Pa,"Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),Ne=n(Pa,"A",{href:!0,rel:!0});var jt=i(Ne);sa=n(jt,"CODE",{});var yt=i(sa);Ha=l(yt,"transforms"),yt.forEach(a),jt.forEach(a),Va=l(Pa," module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),Pa.forEach(a),ga=u(e),y(Me.$$.fragment,e),_a=u(e),Ee=n(e,"P",{});var Da=i(Ee);Ga=l(Da,"Create a preprocessing function that will apply the transforms and return the "),ra=n(Da,"CODE",{});var kt=i(ra);Ja=l(kt,"pixel_values"),kt.forEach(a),Ya=l(Da," - the inputs to the model - of the image:"),Da.forEach(a),$a=u(e),y(Oe.$$.fragment,e),va=u(e),xe=n(e,"P",{});var qa=i(xe);Wa=l(qa,"Use \u{1F917} Dataset\u2019s "),Re=n(qa,"A",{href:!0,rel:!0});var Et=i(Re);la=n(Et,"CODE",{});var xt=i(la);Ka=l(xt,"with_transform"),xt.forEach(a),Et.forEach(a),Qa=l(qa," method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),qa.forEach(a),ba=u(e),y(Ue.$$.fragment,e),wa=u(e),Te=n(e,"P",{});var Fa=i(Te);Xa=l(Fa,"Use "),Qe=n(Fa,"A",{href:!0});var Tt=i(Qe);Za=l(Tt,"DefaultDataCollator"),Tt.forEach(a),et=l(Fa," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),Fa.forEach(a),ja=u(e),y(Be.$$.fragment,e),ya=u(e),de=n(e,"H2",{class:!0});var Ia=i(de);Ae=n(Ia,"A",{id:!0,class:!0,href:!0});var At=i(Ae);oa=n(At,"SPAN",{});var Ct=i(oa);y(He.$$.fragment,Ct),Ct.forEach(a),At.forEach(a),at=u(Ia),na=n(Ia,"SPAN",{});var Pt=i(na);tt=l(Pt,"Train"),Pt.forEach(a),Ia.forEach(a),ka=u(e),y(Ce.$$.fragment,e),Ea=u(e),y(Pe.$$.fragment,e),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Vt)),d(_,"id","image-classification"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#image-classification"),d(f,"class","relative group"),d(J,"href","https://huggingface.co/docs/transformers/v4.16.2/en/model_doc/vit"),d(J,"rel","nofollow"),d(Y,"href","https://huggingface.co/datasets/food101"),d(Y,"rel","nofollow"),d(U,"id","load-food101-dataset"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#load-food101-dataset"),d(L,"class","relative group"),d(ye,"id","preprocess"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#preprocess"),d(ue,"class","relative group"),d(Ne,"href","https://pytorch.org/vision/stable/transforms.html"),d(Ne,"rel","nofollow"),d(Re,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html?#datasets.Dataset.with_transform"),d(Re,"rel","nofollow"),d(Qe,"href","/docs/transformers/pr_16782/en/main_classes/data_collator#transformers.DefaultDataCollator"),d(Ae,"id","train"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#train"),d(de,"class","relative group")},m(e,s){t(document.head,m),p(e,b,s),p(e,f,s),t(f,_),t(_,w),k(g,w,null),t(f,$),t(f,A),t(A,P),p(e,D,s),k(F,e,s),p(e,V,s),p(e,G,s),t(G,I),p(e,C,s),p(e,z,s),t(z,ee),t(z,J),t(J,De),t(z,ne),t(z,Y),t(Y,qe),t(z,ie),p(e,ge,s),k(R,e,s),p(e,ae,s),p(e,L,s),t(L,U),t(U,W),k(K,W,null),t(L,Fe),t(L,pe),t(pe,Q),p(e,_e,s),p(e,N,s),t(N,Ie),p(e,$e,s),k(X,e,s),p(e,B,s),p(e,te,s),t(te,se),p(e,ve,s),k(Z,e,s),p(e,me,s),p(e,S,s),t(S,be),p(e,h,s),k(v,e,s),p(e,re,s),p(e,M,s),t(M,le),t(M,q),t(q,Ge),t(M,Je),t(M,we),t(we,Ye),t(M,We),p(e,fe,s),k(oe,e,s),p(e,he,s),p(e,ce,s),t(ce,Sa),p(e,ma,s),k(ze,e,s),p(e,fa,s),p(e,je,s),t(je,La),t(je,ea),t(ea,Na),t(je,Ma),p(e,ha,s),p(e,ue,s),t(ue,ye),t(ye,aa),k(Se,aa,null),t(ue,Oa),t(ue,ta),t(ta,Ra),p(e,ca,s),p(e,Ke,s),t(Ke,Ua),p(e,ua,s),k(Le,e,s),p(e,da,s),p(e,ke,s),t(ke,Ba),t(ke,Ne),t(Ne,sa),t(sa,Ha),t(ke,Va),p(e,ga,s),k(Me,e,s),p(e,_a,s),p(e,Ee,s),t(Ee,Ga),t(Ee,ra),t(ra,Ja),t(Ee,Ya),p(e,$a,s),k(Oe,e,s),p(e,va,s),p(e,xe,s),t(xe,Wa),t(xe,Re),t(Re,la),t(la,Ka),t(xe,Qa),p(e,ba,s),k(Ue,e,s),p(e,wa,s),p(e,Te,s),t(Te,Xa),t(Te,Qe),t(Qe,Za),t(Te,et),p(e,ja,s),k(Be,e,s),p(e,ya,s),p(e,de,s),t(de,Ae),t(Ae,oa),k(He,oa,null),t(de,at),t(de,na),t(na,tt),p(e,ka,s),k(Ce,e,s),p(e,Ea,s),k(Pe,e,s),xa=!0},p(e,[s]){const Ve={};s&2&&(Ve.$$scope={dirty:s,ctx:e}),R.$set(Ve);const ia={};s&2&&(ia.$$scope={dirty:s,ctx:e}),Ce.$set(ia);const pa={};s&2&&(pa.$$scope={dirty:s,ctx:e}),Pe.$set(pa)},i(e){xa||(E(g.$$.fragment,e),E(F.$$.fragment,e),E(R.$$.fragment,e),E(K.$$.fragment,e),E(X.$$.fragment,e),E(Z.$$.fragment,e),E(v.$$.fragment,e),E(oe.$$.fragment,e),E(ze.$$.fragment,e),E(Se.$$.fragment,e),E(Le.$$.fragment,e),E(Me.$$.fragment,e),E(Oe.$$.fragment,e),E(Ue.$$.fragment,e),E(Be.$$.fragment,e),E(He.$$.fragment,e),E(Ce.$$.fragment,e),E(Pe.$$.fragment,e),xa=!0)},o(e){x(g.$$.fragment,e),x(F.$$.fragment,e),x(R.$$.fragment,e),x(K.$$.fragment,e),x(X.$$.fragment,e),x(Z.$$.fragment,e),x(v.$$.fragment,e),x(oe.$$.fragment,e),x(ze.$$.fragment,e),x(Se.$$.fragment,e),x(Le.$$.fragment,e),x(Me.$$.fragment,e),x(Oe.$$.fragment,e),x(Ue.$$.fragment,e),x(Be.$$.fragment,e),x(He.$$.fragment,e),x(Ce.$$.fragment,e),x(Pe.$$.fragment,e),xa=!1},d(e){a(m),e&&a(b),e&&a(f),T(g),e&&a(D),T(F,e),e&&a(V),e&&a(G),e&&a(C),e&&a(z),e&&a(ge),T(R,e),e&&a(ae),e&&a(L),T(K),e&&a(_e),e&&a(N),e&&a($e),T(X,e),e&&a(B),e&&a(te),e&&a(ve),T(Z,e),e&&a(me),e&&a(S),e&&a(h),T(v,e),e&&a(re),e&&a(M),e&&a(fe),T(oe,e),e&&a(he),e&&a(ce),e&&a(ma),T(ze,e),e&&a(fa),e&&a(je),e&&a(ha),e&&a(ue),T(Se),e&&a(ca),e&&a(Ke),e&&a(ua),T(Le,e),e&&a(da),e&&a(ke),e&&a(ga),T(Me,e),e&&a(_a),e&&a(Ee),e&&a($a),T(Oe,e),e&&a(va),e&&a(xe),e&&a(ba),T(Ue,e),e&&a(wa),e&&a(Te),e&&a(ja),T(Be,e),e&&a(ya),e&&a(de),T(He),e&&a(ka),T(Ce,e),e&&a(Ea),T(Pe,e)}}}const Vt={local:"image-classification",sections:[{local:"load-food101-dataset",title:"Load Food-101 dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Image classification"};function Gt(O){return zt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends Dt{constructor(m){super();qt(this,m,Gt,Ht,Ft,{})}}export{Zt as default,Vt as metadata};
