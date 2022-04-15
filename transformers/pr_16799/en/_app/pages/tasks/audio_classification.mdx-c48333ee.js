import{S as Wt,i as Nt,s as Rt,e as r,k as h,w,t,M as Vt,c as o,d as s,m as u,a as i,x,h as n,b as d,F as a,g as p,y as E,q as y,o as k,B as A,v as zt}from"../../chunks/vendor-6b77c823.js";import{T as Zs}from"../../chunks/Tip-39098574.js";import{Y as Yt}from"../../chunks/Youtube-5c6e11e6.js";import{I as Za}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as W}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ut,M as Ht}from"../../chunks/Markdown-9acf6d91.js";function Bt(N){let c,b,m,g,v;return{c(){c=r("p"),b=t("See the audio classification "),m=r("a"),g=t("task page"),v=t(" for more information about its associated models, datasets, and metrics."),this.h()},l(_){c=o(_,"P",{});var $=i(c);b=n($,"See the audio classification "),m=o($,"A",{href:!0,rel:!0});var q=i(m);g=n(q,"task page"),q.forEach(s),v=n($," for more information about its associated models, datasets, and metrics."),$.forEach(s),this.h()},h(){d(m,"href","https://huggingface.co/tasks/audio-classification"),d(m,"rel","nofollow")},m(_,$){p(_,c,$),a(c,b),a(c,m),a(m,g),a(c,v)},d(_){_&&s(c)}}}function Gt(N){let c,b,m,g,v,_,$,q;return{c(){c=r("p"),b=t("If you aren\u2019t familiar with fine-tuning a model with the "),m=r("a"),g=t("Trainer"),v=t(", take a look at the basic tutorial "),_=r("a"),$=t("here"),q=t("!"),this.h()},l(T){c=o(T,"P",{});var P=i(c);b=n(P,"If you aren\u2019t familiar with fine-tuning a model with the "),m=o(P,"A",{href:!0});var D=i(m);g=n(D,"Trainer"),D.forEach(s),v=n(P,", take a look at the basic tutorial "),_=o(P,"A",{href:!0});var B=i(_);$=n(B,"here"),B.forEach(s),q=n(P,"!"),P.forEach(s),this.h()},h(){d(m,"href","/docs/transformers/pr_16799/en/main_classes/trainer#transformers.Trainer"),d(_,"href","../training#finetune-with-trainer")},m(T,P){p(T,c,P),a(c,b),a(c,m),a(m,g),a(c,v),a(c,_),a(_,$),a(c,q)},d(T){T&&s(c)}}}function Jt(N){let c,b,m,g,v,_,$,q,T,P,D,B,G,M,R,O,X,J,je,we,I,xe,Z,me,V,he,C,z,Y,K,Ee,ee,Q,re;return $=new W({props:{code:`from transformers import AutoModelForAudioClassification, TrainingArguments, Trainer

num_labels = len(id2label)
model = AutoModelForAudioClassification.from_pretrained(
    "facebook/wav2vec2-base", num_labels=num_labels, label2id=label2id, id2label=id2label
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForAudioClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForAudioClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>, num_labels=num_labels, label2id=label2id, id2label=id2label
<span class="hljs-meta">... </span>)`}}),T=new Zs({props:{$$slots:{default:[Gt]},$$scope:{ctx:N}}}),Q=new W({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=3e-5,
    num_train_epochs=5,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=encoded_minds["train"],
    eval_dataset=encoded_minds["test"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">3e-5</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=encoded_minds[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=encoded_minds[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){c=r("p"),b=t("Load Wav2Vec2 with "),m=r("a"),g=t("AutoModelForAudioClassification"),v=t(". Specify the number of labels, and pass the model the mapping between label number and label class:"),_=h(),w($.$$.fragment),q=h(),w(T.$$.fragment),P=h(),D=r("p"),B=t("At this point, only three steps remain:"),G=h(),M=r("ol"),R=r("li"),O=t("Define your training hyperparameters in "),X=r("a"),J=t("TrainingArguments"),je=t("."),we=h(),I=r("li"),xe=t("Pass the training arguments to "),Z=r("a"),me=t("Trainer"),V=t(" along with the model, datasets, and feature extractor."),he=h(),C=r("li"),z=t("Call "),Y=r("a"),K=t("train()"),Ee=t(" to fine-tune your model."),ee=h(),w(Q.$$.fragment),this.h()},l(f){c=o(f,"P",{});var j=i(c);b=n(j,"Load Wav2Vec2 with "),m=o(j,"A",{href:!0});var F=i(m);g=n(F,"AutoModelForAudioClassification"),F.forEach(s),v=n(j,". Specify the number of labels, and pass the model the mapping between label number and label class:"),j.forEach(s),_=u(f),x($.$$.fragment,f),q=u(f),x(T.$$.fragment,f),P=u(f),D=o(f,"P",{});var ze=i(D);B=n(ze,"At this point, only three steps remain:"),ze.forEach(s),G=u(f),M=o(f,"OL",{});var ae=i(M);R=o(ae,"LI",{});var oe=i(R);O=n(oe,"Define your training hyperparameters in "),X=o(oe,"A",{href:!0});var se=i(X);J=n(se,"TrainingArguments"),se.forEach(s),je=n(oe,"."),oe.forEach(s),we=u(ae),I=o(ae,"LI",{});var ie=i(I);xe=n(ie,"Pass the training arguments to "),Z=o(ie,"A",{href:!0});var pe=i(Z);me=n(pe,"Trainer"),pe.forEach(s),V=n(ie," along with the model, datasets, and feature extractor."),ie.forEach(s),he=u(ae),C=o(ae,"LI",{});var ue=i(C);z=n(ue,"Call "),Y=o(ue,"A",{href:!0});var ye=i(Y);K=n(ye,"train()"),ye.forEach(s),Ee=n(ue," to fine-tune your model."),ue.forEach(s),ae.forEach(s),ee=u(f),x(Q.$$.fragment,f),this.h()},h(){d(m,"href","/docs/transformers/pr_16799/en/model_doc/auto#transformers.AutoModelForAudioClassification"),d(X,"href","/docs/transformers/pr_16799/en/main_classes/trainer#transformers.TrainingArguments"),d(Z,"href","/docs/transformers/pr_16799/en/main_classes/trainer#transformers.Trainer"),d(Y,"href","/docs/transformers/pr_16799/en/main_classes/trainer#transformers.Trainer.train")},m(f,j){p(f,c,j),a(c,b),a(c,m),a(m,g),a(c,v),p(f,_,j),E($,f,j),p(f,q,j),E(T,f,j),p(f,P,j),p(f,D,j),a(D,B),p(f,G,j),p(f,M,j),a(M,R),a(R,O),a(R,X),a(X,J),a(R,je),a(M,we),a(M,I),a(I,xe),a(I,Z),a(Z,me),a(I,V),a(M,he),a(M,C),a(C,z),a(C,Y),a(Y,K),a(C,Ee),p(f,ee,j),E(Q,f,j),re=!0},p(f,j){const F={};j&2&&(F.$$scope={dirty:j,ctx:f}),T.$set(F)},i(f){re||(y($.$$.fragment,f),y(T.$$.fragment,f),y(Q.$$.fragment,f),re=!0)},o(f){k($.$$.fragment,f),k(T.$$.fragment,f),k(Q.$$.fragment,f),re=!1},d(f){f&&s(c),f&&s(_),A($,f),f&&s(q),A(T,f),f&&s(P),f&&s(D),f&&s(G),f&&s(M),f&&s(ee),A(Q,f)}}}function Kt(N){let c,b;return c=new Ht({props:{$$slots:{default:[Jt]},$$scope:{ctx:N}}}),{c(){w(c.$$.fragment)},l(m){x(c.$$.fragment,m)},m(m,g){E(c,m,g),b=!0},p(m,g){const v={};g&2&&(v.$$scope={dirty:g,ctx:m}),c.$set(v)},i(m){b||(y(c.$$.fragment,m),b=!0)},o(m){k(c.$$.fragment,m),b=!1},d(m){A(c,m)}}}function Qt(N){let c,b,m,g,v;return{c(){c=r("p"),b=t("For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),m=r("a"),g=t("PyTorch notebook"),v=t("."),this.h()},l(_){c=o(_,"P",{});var $=i(c);b=n($,"For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),m=o($,"A",{href:!0,rel:!0});var q=i(m);g=n(q,"PyTorch notebook"),q.forEach(s),v=n($,"."),$.forEach(s),this.h()},h(){d(m,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/audio_classification.ipynb"),d(m,"rel","nofollow")},m(_,$){p(_,c,$),a(c,b),a(c,m),a(m,g),a(c,v)},d(_){_&&s(c)}}}function Xt(N){let c,b,m,g,v,_,$,q,T,P,D,B,G,M,R,O,X,J,je,we,I,xe,Z,me,V,he,C,z,Y,K,Ee,ee,Q,re,f,j,F,ze,ae,oe,se,ie,pe,ue,ye,ke,ja,Ye,es,wa,Ae,xa,L,as,Ze,ss,ts,ea,ns,ls,aa,rs,os,sa,is,ps,Ea,qe,ya,Ue,cs,ka,Te,Aa,U,fs,ta,ms,hs,na,us,ds,la,_s,gs,qa,Pe,Ta,He,$s,Pa,De,Da,te,bs,ra,vs,js,oa,ws,xs,Ca,ce,de,ia,Ce,Es,pa,ys,Sa,Be,ks,Ia,Se,Ma,_e,As,Ie,qs,Ts,Oa,Me,La,Ge,Ps,Fa,ne,Oe,Ds,ca,Cs,Ss,Is,Le,Ms,Je,Os,Ls,Fs,fa,Ws,Wa,Fe,Na,S,Ns,We,ma,Rs,Vs,ha,zs,Ys,ua,Us,Hs,da,Bs,Gs,_a,Js,Ks,Ra,Ne,Va,fe,ge,ga,Re,Qs,$a,Xs,za,$e,Ya,be,Ua;return _=new Za({}),D=new Yt({props:{id:"KWwzcmG98Ds"}}),V=new Zs({props:{$$slots:{default:[Bt]},$$scope:{ctx:N}}}),K=new Za({}),se=new W({props:{code:`from datasets import load_dataset, Audio

minds = load_dataset("PolyAI/minds14", name="en-US", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>minds = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, name=<span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),ke=new W({props:{code:"minds = minds.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),Ae=new W({props:{code:"minds",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">450</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">113</span>
    })
})`}}),qe=new W({props:{code:'minds = minds.remove_columns(["path", "transcription", "english_transcription", "lang_id"])',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.remove_columns([<span class="hljs-string">&quot;path&quot;</span>, <span class="hljs-string">&quot;transcription&quot;</span>, <span class="hljs-string">&quot;english_transcription&quot;</span>, <span class="hljs-string">&quot;lang_id&quot;</span>])'}}),Te=new W({props:{code:'minds["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        , ..., -<span class="hljs-number">0.00048828</span>,
         -<span class="hljs-number">0.00024414</span>, -<span class="hljs-number">0.00024414</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602b9a5fbb1e6d0fbce91f52.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>},
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">2</span>}`}}),Pe=new W({props:{code:`labels = minds["train"].features["intent_class"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = minds[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;intent_class&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),De=new W({props:{code:"id2label[str(2)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">2</span>)]
<span class="hljs-string">&#x27;app_error&#x27;</span>`}}),Ce=new Za({}),Se=new W({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),Me=new W({props:{code:`minds = minds.cast_column("audio", Audio(sampling_rate=16_000))
minds["train"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">2.2098757e-05</span>,  <span class="hljs-number">4.6582241e-05</span>, -<span class="hljs-number">2.2803260e-05</span>, ...,
         -<span class="hljs-number">2.8419291e-04</span>, -<span class="hljs-number">2.3305941e-04</span>, -<span class="hljs-number">1.1425107e-04</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602b9a5fbb1e6d0fbce91f52.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>},
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">2</span>}`}}),Fe=new W({props:{code:`def preprocess_function(examples):
    audio_arrays = [x["array"] for x in examples["audio"]]
    inputs = feature_extractor(
        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=16000, truncation=True
    )
    return inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    audio_arrays = [x[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;audio&quot;</span>]]
<span class="hljs-meta">... </span>    inputs = feature_extractor(
<span class="hljs-meta">... </span>        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=<span class="hljs-number">16000</span>, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),Ne=new W({props:{code:`encoded_minds = minds.map(preprocess_function, remove_columns="audio", batched=True)
encoded_minds = encoded_minds.rename_column("intent_class", "label")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_minds = minds.<span class="hljs-built_in">map</span>(preprocess_function, remove_columns=<span class="hljs-string">&quot;audio&quot;</span>, batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_minds = encoded_minds.rename_column(<span class="hljs-string">&quot;intent_class&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>)`}}),Re=new Za({}),$e=new Ut({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Kt]},$$scope:{ctx:N}}}),be=new Zs({props:{$$slots:{default:[Qt]},$$scope:{ctx:N}}}),{c(){c=r("meta"),b=h(),m=r("h1"),g=r("a"),v=r("span"),w(_.$$.fragment),$=h(),q=r("span"),T=t("Audio classification"),P=h(),w(D.$$.fragment),B=h(),G=r("p"),M=t("Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),R=h(),O=r("p"),X=t("This guide will show you how to fine-tune "),J=r("a"),je=t("Wav2Vec2"),we=t(" on the "),I=r("a"),xe=t("MInDS-14"),Z=t(" to classify intent."),me=h(),w(V.$$.fragment),he=h(),C=r("h2"),z=r("a"),Y=r("span"),w(K.$$.fragment),Ee=h(),ee=r("span"),Q=t("Load MInDS-14 dataset"),re=h(),f=r("p"),j=t("Load the "),F=r("a"),ze=t("MInDS-14"),ae=t(" from the \u{1F917} Datasets library:"),oe=h(),w(se.$$.fragment),ie=h(),pe=r("p"),ue=t("Split this dataset into a train and test set:"),ye=h(),w(ke.$$.fragment),ja=h(),Ye=r("p"),es=t("Then take a look at the dataset:"),wa=h(),w(Ae.$$.fragment),xa=h(),L=r("p"),as=t("While the dataset contains a lot of other useful information, like "),Ze=r("code"),ss=t("lang_id"),ts=t(" and "),ea=r("code"),ns=t("english_transcription"),ls=t(", you will focus on the "),aa=r("code"),rs=t("audio"),os=t(" and "),sa=r("code"),is=t("intent_class"),ps=t(" in this guide. Remove the other columns:"),Ea=h(),w(qe.$$.fragment),ya=h(),Ue=r("p"),cs=t("Take a look at an example now:"),ka=h(),w(Te.$$.fragment),Aa=h(),U=r("p"),fs=t("The "),ta=r("code"),ms=t("audio"),hs=t(" column contains a 1-dimensional "),na=r("code"),us=t("array"),ds=t(" of the speech signal that must be called to load and resample the audio file. The "),la=r("code"),_s=t("intent_class"),gs=t(" column is an integer that represents the class id of intent. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),qa=h(),w(Pe.$$.fragment),Ta=h(),He=r("p"),$s=t("Now you can convert the label number to a label name for more information:"),Pa=h(),w(De.$$.fragment),Da=h(),te=r("p"),bs=t("Each keyword - or label - corresponds to a number; "),ra=r("code"),vs=t("2"),js=t(" indicates "),oa=r("code"),ws=t("app_error"),xs=t(" in the example above."),Ca=h(),ce=r("h2"),de=r("a"),ia=r("span"),w(Ce.$$.fragment),Es=h(),pa=r("span"),ys=t("Preprocess"),Sa=h(),Be=r("p"),ks=t("Load the Wav2Vec2 feature extractor to process the audio signal:"),Ia=h(),w(Se.$$.fragment),Ma=h(),_e=r("p"),As=t("The "),Ie=r("a"),qs=t("MInDS-14"),Ts=t(" dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),Oa=h(),w(Me.$$.fragment),La=h(),Ge=r("p"),Ps=t("The preprocessing function needs to:"),Fa=h(),ne=r("ol"),Oe=r("li"),Ds=t("Call the "),ca=r("code"),Cs=t("audio"),Ss=t(" column to load and if necessary resample the audio file."),Is=h(),Le=r("li"),Ms=t("Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Je=r("a"),Os=t("model card"),Ls=t("."),Fs=h(),fa=r("li"),Ws=t("Set a maximum input length so longer inputs are batched without being truncated."),Wa=h(),w(Fe.$$.fragment),Na=h(),S=r("p"),Ns=t("Use \u{1F917} Datasets "),We=r("a"),ma=r("code"),Rs=t("map"),Vs=t(" function to apply the preprocessing function over the entire dataset. You can speed up the "),ha=r("code"),zs=t("map"),Ys=t(" function by setting "),ua=r("code"),Us=t("batched=True"),Hs=t(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need, and rename "),da=r("code"),Bs=t("intent_class"),Gs=t(" to "),_a=r("code"),Js=t("label"),Ks=t(" because that is what the model expects:"),Ra=h(),w(Ne.$$.fragment),Va=h(),fe=r("h2"),ge=r("a"),ga=r("span"),w(Re.$$.fragment),Qs=h(),$a=r("span"),Xs=t("Train"),za=h(),w($e.$$.fragment),Ya=h(),w(be.$$.fragment),this.h()},l(e){const l=Vt('[data-svelte="svelte-1phssyn"]',document.head);c=o(l,"META",{name:!0,content:!0}),l.forEach(s),b=u(e),m=o(e,"H1",{class:!0});var Ve=i(m);g=o(Ve,"A",{id:!0,class:!0,href:!0});var ba=i(g);v=o(ba,"SPAN",{});var va=i(v);x(_.$$.fragment,va),va.forEach(s),ba.forEach(s),$=u(Ve),q=o(Ve,"SPAN",{});var et=i(q);T=n(et,"Audio classification"),et.forEach(s),Ve.forEach(s),P=u(e),x(D.$$.fragment,e),B=u(e),G=o(e,"P",{});var at=i(G);M=n(at,"Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),at.forEach(s),R=u(e),O=o(e,"P",{});var Ke=i(O);X=n(Ke,"This guide will show you how to fine-tune "),J=o(Ke,"A",{href:!0,rel:!0});var st=i(J);je=n(st,"Wav2Vec2"),st.forEach(s),we=n(Ke," on the "),I=o(Ke,"A",{href:!0,rel:!0});var tt=i(I);xe=n(tt,"MInDS-14"),tt.forEach(s),Z=n(Ke," to classify intent."),Ke.forEach(s),me=u(e),x(V.$$.fragment,e),he=u(e),C=o(e,"H2",{class:!0});var Ha=i(C);z=o(Ha,"A",{id:!0,class:!0,href:!0});var nt=i(z);Y=o(nt,"SPAN",{});var lt=i(Y);x(K.$$.fragment,lt),lt.forEach(s),nt.forEach(s),Ee=u(Ha),ee=o(Ha,"SPAN",{});var rt=i(ee);Q=n(rt,"Load MInDS-14 dataset"),rt.forEach(s),Ha.forEach(s),re=u(e),f=o(e,"P",{});var Ba=i(f);j=n(Ba,"Load the "),F=o(Ba,"A",{href:!0,rel:!0});var ot=i(F);ze=n(ot,"MInDS-14"),ot.forEach(s),ae=n(Ba," from the \u{1F917} Datasets library:"),Ba.forEach(s),oe=u(e),x(se.$$.fragment,e),ie=u(e),pe=o(e,"P",{});var it=i(pe);ue=n(it,"Split this dataset into a train and test set:"),it.forEach(s),ye=u(e),x(ke.$$.fragment,e),ja=u(e),Ye=o(e,"P",{});var pt=i(Ye);es=n(pt,"Then take a look at the dataset:"),pt.forEach(s),wa=u(e),x(Ae.$$.fragment,e),xa=u(e),L=o(e,"P",{});var le=i(L);as=n(le,"While the dataset contains a lot of other useful information, like "),Ze=o(le,"CODE",{});var ct=i(Ze);ss=n(ct,"lang_id"),ct.forEach(s),ts=n(le," and "),ea=o(le,"CODE",{});var ft=i(ea);ns=n(ft,"english_transcription"),ft.forEach(s),ls=n(le,", you will focus on the "),aa=o(le,"CODE",{});var mt=i(aa);rs=n(mt,"audio"),mt.forEach(s),os=n(le," and "),sa=o(le,"CODE",{});var ht=i(sa);is=n(ht,"intent_class"),ht.forEach(s),ps=n(le," in this guide. Remove the other columns:"),le.forEach(s),Ea=u(e),x(qe.$$.fragment,e),ya=u(e),Ue=o(e,"P",{});var ut=i(Ue);cs=n(ut,"Take a look at an example now:"),ut.forEach(s),ka=u(e),x(Te.$$.fragment,e),Aa=u(e),U=o(e,"P",{});var ve=i(U);fs=n(ve,"The "),ta=o(ve,"CODE",{});var dt=i(ta);ms=n(dt,"audio"),dt.forEach(s),hs=n(ve," column contains a 1-dimensional "),na=o(ve,"CODE",{});var _t=i(na);us=n(_t,"array"),_t.forEach(s),ds=n(ve," of the speech signal that must be called to load and resample the audio file. The "),la=o(ve,"CODE",{});var gt=i(la);_s=n(gt,"intent_class"),gt.forEach(s),gs=n(ve," column is an integer that represents the class id of intent. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),ve.forEach(s),qa=u(e),x(Pe.$$.fragment,e),Ta=u(e),He=o(e,"P",{});var $t=i(He);$s=n($t,"Now you can convert the label number to a label name for more information:"),$t.forEach(s),Pa=u(e),x(De.$$.fragment,e),Da=u(e),te=o(e,"P",{});var Qe=i(te);bs=n(Qe,"Each keyword - or label - corresponds to a number; "),ra=o(Qe,"CODE",{});var bt=i(ra);vs=n(bt,"2"),bt.forEach(s),js=n(Qe," indicates "),oa=o(Qe,"CODE",{});var vt=i(oa);ws=n(vt,"app_error"),vt.forEach(s),xs=n(Qe," in the example above."),Qe.forEach(s),Ca=u(e),ce=o(e,"H2",{class:!0});var Ga=i(ce);de=o(Ga,"A",{id:!0,class:!0,href:!0});var jt=i(de);ia=o(jt,"SPAN",{});var wt=i(ia);x(Ce.$$.fragment,wt),wt.forEach(s),jt.forEach(s),Es=u(Ga),pa=o(Ga,"SPAN",{});var xt=i(pa);ys=n(xt,"Preprocess"),xt.forEach(s),Ga.forEach(s),Sa=u(e),Be=o(e,"P",{});var Et=i(Be);ks=n(Et,"Load the Wav2Vec2 feature extractor to process the audio signal:"),Et.forEach(s),Ia=u(e),x(Se.$$.fragment,e),Ma=u(e),_e=o(e,"P",{});var Ja=i(_e);As=n(Ja,"The "),Ie=o(Ja,"A",{href:!0,rel:!0});var yt=i(Ie);qs=n(yt,"MInDS-14"),yt.forEach(s),Ts=n(Ja," dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),Ja.forEach(s),Oa=u(e),x(Me.$$.fragment,e),La=u(e),Ge=o(e,"P",{});var kt=i(Ge);Ps=n(kt,"The preprocessing function needs to:"),kt.forEach(s),Fa=u(e),ne=o(e,"OL",{});var Xe=i(ne);Oe=o(Xe,"LI",{});var Ka=i(Oe);Ds=n(Ka,"Call the "),ca=o(Ka,"CODE",{});var At=i(ca);Cs=n(At,"audio"),At.forEach(s),Ss=n(Ka," column to load and if necessary resample the audio file."),Ka.forEach(s),Is=u(Xe),Le=o(Xe,"LI",{});var Qa=i(Le);Ms=n(Qa,"Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Je=o(Qa,"A",{href:!0});var qt=i(Je);Os=n(qt,"model card"),qt.forEach(s),Ls=n(Qa,"."),Qa.forEach(s),Fs=u(Xe),fa=o(Xe,"LI",{});var Tt=i(fa);Ws=n(Tt,"Set a maximum input length so longer inputs are batched without being truncated."),Tt.forEach(s),Xe.forEach(s),Wa=u(e),x(Fe.$$.fragment,e),Na=u(e),S=o(e,"P",{});var H=i(S);Ns=n(H,"Use \u{1F917} Datasets "),We=o(H,"A",{href:!0,rel:!0});var Pt=i(We);ma=o(Pt,"CODE",{});var Dt=i(ma);Rs=n(Dt,"map"),Dt.forEach(s),Pt.forEach(s),Vs=n(H," function to apply the preprocessing function over the entire dataset. You can speed up the "),ha=o(H,"CODE",{});var Ct=i(ha);zs=n(Ct,"map"),Ct.forEach(s),Ys=n(H," function by setting "),ua=o(H,"CODE",{});var St=i(ua);Us=n(St,"batched=True"),St.forEach(s),Hs=n(H," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need, and rename "),da=o(H,"CODE",{});var It=i(da);Bs=n(It,"intent_class"),It.forEach(s),Gs=n(H," to "),_a=o(H,"CODE",{});var Mt=i(_a);Js=n(Mt,"label"),Mt.forEach(s),Ks=n(H," because that is what the model expects:"),H.forEach(s),Ra=u(e),x(Ne.$$.fragment,e),Va=u(e),fe=o(e,"H2",{class:!0});var Xa=i(fe);ge=o(Xa,"A",{id:!0,class:!0,href:!0});var Ot=i(ge);ga=o(Ot,"SPAN",{});var Lt=i(ga);x(Re.$$.fragment,Lt),Lt.forEach(s),Ot.forEach(s),Qs=u(Xa),$a=o(Xa,"SPAN",{});var Ft=i($a);Xs=n(Ft,"Train"),Ft.forEach(s),Xa.forEach(s),za=u(e),x($e.$$.fragment,e),Ya=u(e),x(be.$$.fragment,e),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Zt)),d(g,"id","audio-classification"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#audio-classification"),d(m,"class","relative group"),d(J,"href","https://huggingface.co/facebook/wav2vec2-base"),d(J,"rel","nofollow"),d(I,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(I,"rel","nofollow"),d(z,"id","load-minds14-dataset"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#load-minds14-dataset"),d(C,"class","relative group"),d(F,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(F,"rel","nofollow"),d(de,"id","preprocess"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#preprocess"),d(ce,"class","relative group"),d(Ie,"href","https://huggingface.co/datasets/PolyAI/minds14"),d(Ie,"rel","nofollow"),d(Je,"href","(https://huggingface.co/facebook/wav2vec2-base)"),d(We,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),d(We,"rel","nofollow"),d(ge,"id","train"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#train"),d(fe,"class","relative group")},m(e,l){a(document.head,c),p(e,b,l),p(e,m,l),a(m,g),a(g,v),E(_,v,null),a(m,$),a(m,q),a(q,T),p(e,P,l),E(D,e,l),p(e,B,l),p(e,G,l),a(G,M),p(e,R,l),p(e,O,l),a(O,X),a(O,J),a(J,je),a(O,we),a(O,I),a(I,xe),a(O,Z),p(e,me,l),E(V,e,l),p(e,he,l),p(e,C,l),a(C,z),a(z,Y),E(K,Y,null),a(C,Ee),a(C,ee),a(ee,Q),p(e,re,l),p(e,f,l),a(f,j),a(f,F),a(F,ze),a(f,ae),p(e,oe,l),E(se,e,l),p(e,ie,l),p(e,pe,l),a(pe,ue),p(e,ye,l),E(ke,e,l),p(e,ja,l),p(e,Ye,l),a(Ye,es),p(e,wa,l),E(Ae,e,l),p(e,xa,l),p(e,L,l),a(L,as),a(L,Ze),a(Ze,ss),a(L,ts),a(L,ea),a(ea,ns),a(L,ls),a(L,aa),a(aa,rs),a(L,os),a(L,sa),a(sa,is),a(L,ps),p(e,Ea,l),E(qe,e,l),p(e,ya,l),p(e,Ue,l),a(Ue,cs),p(e,ka,l),E(Te,e,l),p(e,Aa,l),p(e,U,l),a(U,fs),a(U,ta),a(ta,ms),a(U,hs),a(U,na),a(na,us),a(U,ds),a(U,la),a(la,_s),a(U,gs),p(e,qa,l),E(Pe,e,l),p(e,Ta,l),p(e,He,l),a(He,$s),p(e,Pa,l),E(De,e,l),p(e,Da,l),p(e,te,l),a(te,bs),a(te,ra),a(ra,vs),a(te,js),a(te,oa),a(oa,ws),a(te,xs),p(e,Ca,l),p(e,ce,l),a(ce,de),a(de,ia),E(Ce,ia,null),a(ce,Es),a(ce,pa),a(pa,ys),p(e,Sa,l),p(e,Be,l),a(Be,ks),p(e,Ia,l),E(Se,e,l),p(e,Ma,l),p(e,_e,l),a(_e,As),a(_e,Ie),a(Ie,qs),a(_e,Ts),p(e,Oa,l),E(Me,e,l),p(e,La,l),p(e,Ge,l),a(Ge,Ps),p(e,Fa,l),p(e,ne,l),a(ne,Oe),a(Oe,Ds),a(Oe,ca),a(ca,Cs),a(Oe,Ss),a(ne,Is),a(ne,Le),a(Le,Ms),a(Le,Je),a(Je,Os),a(Le,Ls),a(ne,Fs),a(ne,fa),a(fa,Ws),p(e,Wa,l),E(Fe,e,l),p(e,Na,l),p(e,S,l),a(S,Ns),a(S,We),a(We,ma),a(ma,Rs),a(S,Vs),a(S,ha),a(ha,zs),a(S,Ys),a(S,ua),a(ua,Us),a(S,Hs),a(S,da),a(da,Bs),a(S,Gs),a(S,_a),a(_a,Js),a(S,Ks),p(e,Ra,l),E(Ne,e,l),p(e,Va,l),p(e,fe,l),a(fe,ge),a(ge,ga),E(Re,ga,null),a(fe,Qs),a(fe,$a),a($a,Xs),p(e,za,l),E($e,e,l),p(e,Ya,l),E(be,e,l),Ua=!0},p(e,[l]){const Ve={};l&2&&(Ve.$$scope={dirty:l,ctx:e}),V.$set(Ve);const ba={};l&2&&(ba.$$scope={dirty:l,ctx:e}),$e.$set(ba);const va={};l&2&&(va.$$scope={dirty:l,ctx:e}),be.$set(va)},i(e){Ua||(y(_.$$.fragment,e),y(D.$$.fragment,e),y(V.$$.fragment,e),y(K.$$.fragment,e),y(se.$$.fragment,e),y(ke.$$.fragment,e),y(Ae.$$.fragment,e),y(qe.$$.fragment,e),y(Te.$$.fragment,e),y(Pe.$$.fragment,e),y(De.$$.fragment,e),y(Ce.$$.fragment,e),y(Se.$$.fragment,e),y(Me.$$.fragment,e),y(Fe.$$.fragment,e),y(Ne.$$.fragment,e),y(Re.$$.fragment,e),y($e.$$.fragment,e),y(be.$$.fragment,e),Ua=!0)},o(e){k(_.$$.fragment,e),k(D.$$.fragment,e),k(V.$$.fragment,e),k(K.$$.fragment,e),k(se.$$.fragment,e),k(ke.$$.fragment,e),k(Ae.$$.fragment,e),k(qe.$$.fragment,e),k(Te.$$.fragment,e),k(Pe.$$.fragment,e),k(De.$$.fragment,e),k(Ce.$$.fragment,e),k(Se.$$.fragment,e),k(Me.$$.fragment,e),k(Fe.$$.fragment,e),k(Ne.$$.fragment,e),k(Re.$$.fragment,e),k($e.$$.fragment,e),k(be.$$.fragment,e),Ua=!1},d(e){s(c),e&&s(b),e&&s(m),A(_),e&&s(P),A(D,e),e&&s(B),e&&s(G),e&&s(R),e&&s(O),e&&s(me),A(V,e),e&&s(he),e&&s(C),A(K),e&&s(re),e&&s(f),e&&s(oe),A(se,e),e&&s(ie),e&&s(pe),e&&s(ye),A(ke,e),e&&s(ja),e&&s(Ye),e&&s(wa),A(Ae,e),e&&s(xa),e&&s(L),e&&s(Ea),A(qe,e),e&&s(ya),e&&s(Ue),e&&s(ka),A(Te,e),e&&s(Aa),e&&s(U),e&&s(qa),A(Pe,e),e&&s(Ta),e&&s(He),e&&s(Pa),A(De,e),e&&s(Da),e&&s(te),e&&s(Ca),e&&s(ce),A(Ce),e&&s(Sa),e&&s(Be),e&&s(Ia),A(Se,e),e&&s(Ma),e&&s(_e),e&&s(Oa),A(Me,e),e&&s(La),e&&s(Ge),e&&s(Fa),e&&s(ne),e&&s(Wa),A(Fe,e),e&&s(Na),e&&s(S),e&&s(Ra),A(Ne,e),e&&s(Va),e&&s(fe),A(Re),e&&s(za),A($e,e),e&&s(Ya),A(be,e)}}}const Zt={local:"audio-classification",sections:[{local:"load-minds14-dataset",title:"Load MInDS-14 dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Audio classification"};function en(N){return zt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class on extends Wt{constructor(c){super();Nt(this,c,en,Xt,Rt,{})}}export{on as default,Zt as metadata};
