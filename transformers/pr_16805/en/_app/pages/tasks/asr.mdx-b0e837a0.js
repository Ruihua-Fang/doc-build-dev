import{S as Ye,i as Ve,s as Ne,e as o,k as u,w,t as e,M as He,c as r,d as t,m as d,a as p,x as y,h as n,b as m,F as a,g as i,y as k,q as x,o as E,B as A,v as Be}from"../../chunks/vendor-6b77c823.js";import{T as ne}from"../../chunks/Tip-39098574.js";import{Y as Je}from"../../chunks/Youtube-5c6e11e6.js";import{I as nt}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as F}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ge,M as Ke}from"../../chunks/Markdown-9acf6d91.js";function Qe(U){let c,j,h,$,v;return{c(){c=o("p"),j=e("See the automatic speech recognition "),h=o("a"),$=e("task page"),v=e(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){c=r(g,"P",{});var q=p(c);j=n(q,"See the automatic speech recognition "),h=r(q,"A",{href:!0,rel:!0});var T=p(h);$=n(T,"task page"),T.forEach(t),v=n(q," for more information about its associated models, datasets, and metrics."),q.forEach(t),this.h()},h(){m(h,"href","https://huggingface.co/tasks/automatic-speech-recognition"),m(h,"rel","nofollow")},m(g,q){i(g,c,q),a(c,j),a(c,h),a(h,$),a(c,v)},d(g){g&&t(c)}}}function Xe(U){let c,j,h,$,v,g,q,T;return{c(){c=o("p"),j=e("If you aren\u2019t familiar with fine-tuning a model with the "),h=o("a"),$=e("Trainer"),v=e(", take a look at the basic tutorial "),g=o("a"),q=e("here"),T=e("!"),this.h()},l(P){c=r(P,"P",{});var _=p(c);j=n(_,"If you aren\u2019t familiar with fine-tuning a model with the "),h=r(_,"A",{href:!0});var D=p(h);$=n(D,"Trainer"),D.forEach(t),v=n(_,", take a look at the basic tutorial "),g=r(_,"A",{href:!0});var C=p(g);q=n(C,"here"),C.forEach(t),T=n(_,"!"),_.forEach(t),this.h()},h(){m(h,"href","/docs/transformers/pr_16805/en/main_classes/trainer#transformers.Trainer"),m(g,"href","../training#finetune-with-trainer")},m(P,_){i(P,c,_),a(c,j),a(c,h),a(h,$),a(c,v),a(c,g),a(g,q),a(c,T)},d(P){P&&t(c)}}}function Ze(U){let c,j,h,$,v,g,q,T,P,_,D,C,K,as,us,S,O,I,ys,ts,Q,ks,xs,Y,V,X,M,N,cs,L,Es,H,As,ds,W,Z,B;return _=new F({props:{code:`from transformers import AutoModelForCTC, TrainingArguments, Trainer

model = AutoModelForCTC.from_pretrained(
    "facebook/wav2vec2-base",
    ctc_loss_reduction="mean",
    pad_token_id=processor.tokenizer.pad_token_id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCTC, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>,
<span class="hljs-meta">... </span>    ctc_loss_reduction=<span class="hljs-string">&quot;mean&quot;</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>)`}}),C=new ne({props:{$$slots:{default:[Xe]},$$scope:{ctx:U}}}),Z=new F({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    group_by_length=True,
    per_device_train_batch_size=16,
    evaluation_strategy="steps",
    num_train_epochs=3,
    fp16=True,
    gradient_checkpointing=True,
    learning_rate=1e-4,
    weight_decay=0.005,
    save_total_limit=2,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=encoded_minds["train"],
    eval_dataset=encoded_minds["test"],
    tokenizer=processor.feature_extractor,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    group_by_length=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    gradient_checkpointing=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">1e-4</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.005</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=encoded_minds[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=encoded_minds[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=processor.feature_extractor,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){c=o("p"),j=e("Load Wav2Vec2 with "),h=o("a"),$=e("AutoModelForCTC"),v=e(". For "),g=o("code"),q=e("ctc_loss_reduction"),T=e(", it is often better to use the average instead of the default summation:"),P=u(),w(_.$$.fragment),D=u(),w(C.$$.fragment),K=u(),as=o("p"),us=e("At this point, only three steps remain:"),S=u(),O=o("ol"),I=o("li"),ys=e("Define your training hyperparameters in "),ts=o("a"),Q=e("TrainingArguments"),ks=e("."),xs=u(),Y=o("li"),V=e("Pass the training arguments to "),X=o("a"),M=e("Trainer"),N=e(" along with the model, datasets, tokenizer, and data collator."),cs=u(),L=o("li"),Es=e("Call "),H=o("a"),As=e("train()"),ds=e(" to fine-tune your model."),W=u(),w(Z.$$.fragment),this.h()},l(f){c=r(f,"P",{});var b=p(c);j=n(b,"Load Wav2Vec2 with "),h=r(b,"A",{href:!0});var es=p(h);$=n(es,"AutoModelForCTC"),es.forEach(t),v=n(b,". For "),g=r(b,"CODE",{});var ns=p(g);q=n(ns,"ctc_loss_reduction"),ns.forEach(t),T=n(b,", it is often better to use the average instead of the default summation:"),b.forEach(t),P=d(f),y(_.$$.fragment,f),D=d(f),y(C.$$.fragment,f),K=d(f),as=r(f,"P",{});var qs=p(as);us=n(qs,"At this point, only three steps remain:"),qs.forEach(t),S=d(f),O=r(f,"OL",{});var z=p(O);I=r(z,"LI",{});var ms=p(I);ys=n(ms,"Define your training hyperparameters in "),ts=r(ms,"A",{href:!0});var Ts=p(ts);Q=n(Ts,"TrainingArguments"),Ts.forEach(t),ks=n(ms,"."),ms.forEach(t),xs=d(z),Y=r(z,"LI",{});var J=p(Y);V=n(J,"Pass the training arguments to "),X=r(J,"A",{href:!0});var Ps=p(X);M=n(Ps,"Trainer"),Ps.forEach(t),N=n(J," along with the model, datasets, tokenizer, and data collator."),J.forEach(t),cs=d(z),L=r(z,"LI",{});var ss=p(L);Es=n(ss,"Call "),H=r(ss,"A",{href:!0});var Bs=p(H);As=n(Bs,"train()"),Bs.forEach(t),ds=n(ss," to fine-tune your model."),ss.forEach(t),z.forEach(t),W=d(f),y(Z.$$.fragment,f),this.h()},h(){m(h,"href","/docs/transformers/pr_16805/en/model_doc/auto#transformers.AutoModelForCTC"),m(ts,"href","/docs/transformers/pr_16805/en/main_classes/trainer#transformers.TrainingArguments"),m(X,"href","/docs/transformers/pr_16805/en/main_classes/trainer#transformers.Trainer"),m(H,"href","/docs/transformers/pr_16805/en/main_classes/trainer#transformers.Trainer.train")},m(f,b){i(f,c,b),a(c,j),a(c,h),a(h,$),a(c,v),a(c,g),a(g,q),a(c,T),i(f,P,b),k(_,f,b),i(f,D,b),k(C,f,b),i(f,K,b),i(f,as,b),a(as,us),i(f,S,b),i(f,O,b),a(O,I),a(I,ys),a(I,ts),a(ts,Q),a(I,ks),a(O,xs),a(O,Y),a(Y,V),a(Y,X),a(X,M),a(Y,N),a(O,cs),a(O,L),a(L,Es),a(L,H),a(H,As),a(L,ds),i(f,W,b),k(Z,f,b),B=!0},p(f,b){const es={};b&2&&(es.$$scope={dirty:b,ctx:f}),C.$set(es)},i(f){B||(x(_.$$.fragment,f),x(C.$$.fragment,f),x(Z.$$.fragment,f),B=!0)},o(f){E(_.$$.fragment,f),E(C.$$.fragment,f),E(Z.$$.fragment,f),B=!1},d(f){f&&t(c),f&&t(P),A(_,f),f&&t(D),A(C,f),f&&t(K),f&&t(as),f&&t(S),f&&t(O),f&&t(W),A(Z,f)}}}function sn(U){let c,j;return c=new Ke({props:{$$slots:{default:[Ze]},$$scope:{ctx:U}}}),{c(){w(c.$$.fragment)},l(h){y(c.$$.fragment,h)},m(h,$){k(c,h,$),j=!0},p(h,$){const v={};$&2&&(v.$$scope={dirty:$,ctx:h}),c.$set(v)},i(h){j||(x(c.$$.fragment,h),j=!0)},o(h){E(c.$$.fragment,h),j=!1},d(h){A(c,h)}}}function an(U){let c,j,h,$,v,g,q,T;return{c(){c=o("p"),j=e("For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),h=o("a"),$=e("post"),v=e(" for English ASR and this "),g=o("a"),q=e("post"),T=e(" for multilingual ASR."),this.h()},l(P){c=r(P,"P",{});var _=p(c);j=n(_,"For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),h=r(_,"A",{href:!0,rel:!0});var D=p(h);$=n(D,"post"),D.forEach(t),v=n(_," for English ASR and this "),g=r(_,"A",{href:!0,rel:!0});var C=p(g);q=n(C,"post"),C.forEach(t),T=n(_," for multilingual ASR."),_.forEach(t),this.h()},h(){m(h,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),m(h,"rel","nofollow"),m(g,"href","https://huggingface.co/blog/fine-tune-xlsr-wav2vec2"),m(g,"rel","nofollow")},m(P,_){i(P,c,_),a(c,j),a(c,h),a(h,$),a(c,v),a(c,g),a(g,q),a(c,T)},d(P){P&&t(c)}}}function tn(U){let c,j,h,$,v,g,q,T,P,_,D,C,K,as,us,S,O,I,ys,ts,Q,ks,xs,Y,V,X,M,N,cs,L,Es,H,As,ds,W,Z,B,f,b,es,ns,qs,z,ms,Ts,J,Ps,ss,Bs,xa,Cs,Ea,R,lt,ea,ot,rt,na,pt,it,la,ct,ht,oa,ft,ut,Aa,Ds,qa,Js,dt,Ta,Ss,Pa,ls,mt,ra,gt,_t,pa,$t,jt,Ca,hs,gs,ia,Is,bt,ca,vt,Da,Gs,wt,Sa,Ls,Ia,_s,yt,Os,kt,xt,La,Rs,Oa,Ks,Et,Ra,os,Ms,At,ha,qt,Tt,Pt,Ws,Ct,fa,Dt,St,It,ua,Lt,Ma,zs,Wa,rs,Ot,Fs,da,Rt,Mt,ma,Wt,zt,za,Us,Fa,G,Ft,Qs,Ut,Yt,ga,Vt,Nt,_a,Ht,Bt,Ua,ps,Jt,$a,Gt,Kt,ja,Qt,Xt,Ya,Ys,Va,$s,Zt,ba,se,ae,Na,Vs,Ha,fs,js,va,Ns,te,wa,ee,Ba,bs,Ja,vs,Ga;return g=new nt({}),D=new Je({props:{id:"TksaY_FDgnk"}}),V=new ne({props:{$$slots:{default:[Qe]},$$scope:{ctx:U}}}),L=new nt({}),ns=new F({props:{code:`from datasets import load_dataset, Audio

minds = load_dataset("PolyAI/minds14", name="en-US", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>minds = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, name=<span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),J=new F({props:{code:"minds = minds.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),Cs=new F({props:{code:"minds",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">450</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;transcription&#x27;</span>, <span class="hljs-string">&#x27;english_transcription&#x27;</span>, <span class="hljs-string">&#x27;intent_class&#x27;</span>, <span class="hljs-string">&#x27;lang_id&#x27;</span>],
        num_rows: <span class="hljs-number">113</span>
    })
})`}}),Ds=new F({props:{code:'minds = minds.remove_columns(["english_transcription", "intent_class", "lang_id"])',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.remove_columns([<span class="hljs-string">&quot;english_transcription&quot;</span>, <span class="hljs-string">&quot;intent_class&quot;</span>, <span class="hljs-string">&quot;lang_id&quot;</span>])'}}),Ss=new F({props:{code:'minds["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([-<span class="hljs-number">0.00024414</span>,  <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        , ...,  <span class="hljs-number">0.00024414</span>,
          <span class="hljs-number">0.00024414</span>,  <span class="hljs-number">0.00024414</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602ba9e2963e11ccd901cd4f.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>},
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602ba9e2963e11ccd901cd4f.wav&#x27;</span>,
 <span class="hljs-string">&#x27;transcription&#x27;</span>: <span class="hljs-string">&quot;hi I&#x27;m trying to use the banking app on my phone and currently my checking and savings account balance is not refreshing&quot;</span>}`}}),Is=new nt({}),Ls=new F({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),Rs=new F({props:{code:`minds = minds.cast_column("audio", Audio(sampling_rate=16_000))
minds["train"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>minds = minds.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>minds[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([-<span class="hljs-number">2.38064706e-04</span>, -<span class="hljs-number">1.58618059e-04</span>, -<span class="hljs-number">5.43987835e-06</span>, ...,
          <span class="hljs-number">2.78103951e-04</span>,  <span class="hljs-number">2.38446111e-04</span>,  <span class="hljs-number">1.18740834e-04</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602ba9e2963e11ccd901cd4f.wav&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>},
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~APP_ERROR/602ba9e2963e11ccd901cd4f.wav&#x27;</span>,
 <span class="hljs-string">&#x27;transcription&#x27;</span>: <span class="hljs-string">&quot;hi I&#x27;m trying to use the banking app on my phone and currently my checking and savings account balance is not refreshing&quot;</span>}`}}),zs=new F({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]

    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])

    with processor.as_target_processor():
        batch["labels"] = processor(batch["transcription"]).input_ids
    return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]

<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;transcription&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch`}}),Us=new F({props:{code:'encoded_minds = minds.map(prepare_dataset, remove_columns=minds.column_names["train"], num_proc=4)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_minds = minds.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=minds.column_names[<span class="hljs-string">&quot;train&quot;</span>], num_proc=<span class="hljs-number">4</span>)'}}),Ys=new F({props:{code:`import torch

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union


@dataclass
class DataCollatorCTCWithPadding:

    processor: AutoProcessor
    padding: Union[bool, str] = True

    def __call__(self, features: List[Dict[str, Union[List[int], torch.Tensor]]]) -> Dict[str, torch.Tensor]:
        # split inputs and labels since they have to be of different lengths and need
        # different padding methods
        input_features = [{"input_values": feature["input_values"]} for feature in features]
        label_features = [{"input_ids": feature["labels"]} for feature in features]

        batch = self.processor.pad(
            input_features,
            padding=self.padding,
            return_tensors="pt",
        )
        with self.processor.as_target_processor():
            labels_batch = self.processor.pad(
                label_features,
                padding=self.padding,
                return_tensors="pt",
            )

        # replace padding with -100 to ignore loss correctly
        labels = labels_batch["input_ids"].masked_fill(labels_batch.attention_mask.ne(1), -100)

        batch["labels"] = labels

        return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> dataclasses <span class="hljs-keyword">import</span> dataclass, field
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Any</span>, <span class="hljs-type">Dict</span>, <span class="hljs-type">List</span>, <span class="hljs-type">Optional</span>, <span class="hljs-type">Union</span>


<span class="hljs-meta">&gt;&gt;&gt; </span>@dataclass
<span class="hljs-meta">... </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">DataCollatorCTCWithPadding</span>:

<span class="hljs-meta">... </span>    processor: AutoProcessor
<span class="hljs-meta">... </span>    padding: <span class="hljs-type">Union</span>[<span class="hljs-built_in">bool</span>, <span class="hljs-built_in">str</span>] = <span class="hljs-literal">True</span>

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self, features: <span class="hljs-type">List</span>[<span class="hljs-type">Dict</span>[<span class="hljs-built_in">str</span>, <span class="hljs-type">Union</span>[<span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>], torch.Tensor]]]</span>) -&gt; <span class="hljs-type">Dict</span>[<span class="hljs-built_in">str</span>, torch.Tensor]:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># split inputs and labels since they have to be of different lengths and need</span>
<span class="hljs-meta">... </span>        <span class="hljs-comment"># different padding methods</span>
<span class="hljs-meta">... </span>        input_features = [{<span class="hljs-string">&quot;input_values&quot;</span>: feature[<span class="hljs-string">&quot;input_values&quot;</span>]} <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]
<span class="hljs-meta">... </span>        label_features = [{<span class="hljs-string">&quot;input_ids&quot;</span>: feature[<span class="hljs-string">&quot;labels&quot;</span>]} <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]

<span class="hljs-meta">... </span>        batch = self.processor.pad(
<span class="hljs-meta">... </span>            input_features,
<span class="hljs-meta">... </span>            padding=self.padding,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> self.processor.as_target_processor():
<span class="hljs-meta">... </span>            labels_batch = self.processor.pad(
<span class="hljs-meta">... </span>                label_features,
<span class="hljs-meta">... </span>                padding=self.padding,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>            )

<span class="hljs-meta">... </span>        <span class="hljs-comment"># replace padding with -100 to ignore loss correctly</span>
<span class="hljs-meta">... </span>        labels = labels_batch[<span class="hljs-string">&quot;input_ids&quot;</span>].masked_fill(labels_batch.attention_mask.ne(<span class="hljs-number">1</span>), -<span class="hljs-number">100</span>)

<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = labels

<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),Vs=new F({props:{code:"data_collator = DataCollatorCTCWithPadding(processor=processor, padding=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorCTCWithPadding(processor=processor, padding=<span class="hljs-literal">True</span>)'}}),Ns=new nt({}),bs=new Ge({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[sn]},$$scope:{ctx:U}}}),vs=new ne({props:{$$slots:{default:[an]},$$scope:{ctx:U}}}),{c(){c=o("meta"),j=u(),h=o("h1"),$=o("a"),v=o("span"),w(g.$$.fragment),q=u(),T=o("span"),P=e("Automatic speech recognition"),_=u(),w(D.$$.fragment),C=u(),K=o("p"),as=e("Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),us=u(),S=o("p"),O=e("This guide will show you how to fine-tune "),I=o("a"),ys=e("Wav2Vec2"),ts=e(" on the "),Q=o("a"),ks=e("MInDS-14"),xs=e(" dataset to transcribe audio to text."),Y=u(),w(V.$$.fragment),X=u(),M=o("h2"),N=o("a"),cs=o("span"),w(L.$$.fragment),Es=u(),H=o("span"),As=e("Load MInDS-14 dataset"),ds=u(),W=o("p"),Z=e("Load the "),B=o("a"),f=e("MInDS-14"),b=e(" from the \u{1F917} Datasets library:"),es=u(),w(ns.$$.fragment),qs=u(),z=o("p"),ms=e("Split this dataset into a train and test set:"),Ts=u(),w(J.$$.fragment),Ps=u(),ss=o("p"),Bs=e("Then take a look at the dataset:"),xa=u(),w(Cs.$$.fragment),Ea=u(),R=o("p"),lt=e("While the dataset contains a lot of helpful information, like "),ea=o("code"),ot=e("lang_id"),rt=e(" and "),na=o("code"),pt=e("intent_class"),it=e(", you will focus on the "),la=o("code"),ct=e("audio"),ht=e(" and "),oa=o("code"),ft=e("transcription"),ut=e(" columns in this guide. Remove the other columns:"),Aa=u(),w(Ds.$$.fragment),qa=u(),Js=o("p"),dt=e("Take a look at the example again:"),Ta=u(),w(Ss.$$.fragment),Pa=u(),ls=o("p"),mt=e("The "),ra=o("code"),gt=e("audio"),_t=e(" column contains a 1-dimensional "),pa=o("code"),$t=e("array"),jt=e(" of the speech signal that must be called to load and resample the audio file."),Ca=u(),hs=o("h2"),gs=o("a"),ia=o("span"),w(Is.$$.fragment),bt=u(),ca=o("span"),vt=e("Preprocess"),Da=u(),Gs=o("p"),wt=e("Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),Sa=u(),w(Ls.$$.fragment),Ia=u(),_s=o("p"),yt=e("The "),Os=o("a"),kt=e("MInDS-14"),xt=e(" dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),La=u(),w(Rs.$$.fragment),Oa=u(),Ks=o("p"),Et=e("The preprocessing function needs to:"),Ra=u(),os=o("ol"),Ms=o("li"),At=e("Call the "),ha=o("code"),qt=e("audio"),Tt=e(" column to load and resample the audio file."),Pt=u(),Ws=o("li"),Ct=e("Extract the "),fa=o("code"),Dt=e("input_values"),St=e(" from the audio file."),It=u(),ua=o("li"),Lt=e("Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),Ma=u(),w(zs.$$.fragment),Wa=u(),rs=o("p"),Ot=e("Use \u{1F917} Datasets "),Fs=o("a"),da=o("code"),Rt=e("map"),Mt=e(" function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),ma=o("code"),Wt=e("num_proc"),zt=e(". Remove the columns you don\u2019t need:"),za=u(),w(Us.$$.fragment),Fa=u(),G=o("p"),Ft=e("\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),Qs=o("a"),Ut=e("DataCollatorWithPadding"),Yt=e(" to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ga=o("code"),Vt=e("tokenizer"),Nt=e(" function by setting "),_a=o("code"),Ht=e("padding=True"),Bt=e(", dynamic padding is more efficient."),Ua=u(),ps=o("p"),Jt=e("Unlike other data collators, this specific data collator needs to apply a different padding method to "),$a=o("code"),Gt=e("input_values"),Kt=e(" and "),ja=o("code"),Qt=e("labels"),Xt=e(". You can apply a different padding method with a context manager:"),Ya=u(),w(Ys.$$.fragment),Va=u(),$s=o("p"),Zt=e("Create a batch of examples and dynamically pad them with "),ba=o("code"),se=e("DataCollatorForCTCWithPadding"),ae=e(":"),Na=u(),w(Vs.$$.fragment),Ha=u(),fs=o("h2"),js=o("a"),va=o("span"),w(Ns.$$.fragment),te=u(),wa=o("span"),ee=e("Train"),Ba=u(),w(bs.$$.fragment),Ja=u(),w(vs.$$.fragment),this.h()},l(s){const l=He('[data-svelte="svelte-1phssyn"]',document.head);c=r(l,"META",{name:!0,content:!0}),l.forEach(t),j=d(s),h=r(s,"H1",{class:!0});var Hs=p(h);$=r(Hs,"A",{id:!0,class:!0,href:!0});var ya=p($);v=r(ya,"SPAN",{});var ka=p(v);y(g.$$.fragment,ka),ka.forEach(t),ya.forEach(t),q=d(Hs),T=r(Hs,"SPAN",{});var le=p(T);P=n(le,"Automatic speech recognition"),le.forEach(t),Hs.forEach(t),_=d(s),y(D.$$.fragment,s),C=d(s),K=r(s,"P",{});var oe=p(K);as=n(oe,"Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),oe.forEach(t),us=d(s),S=r(s,"P",{});var Xs=p(S);O=n(Xs,"This guide will show you how to fine-tune "),I=r(Xs,"A",{href:!0,rel:!0});var re=p(I);ys=n(re,"Wav2Vec2"),re.forEach(t),ts=n(Xs," on the "),Q=r(Xs,"A",{href:!0,rel:!0});var pe=p(Q);ks=n(pe,"MInDS-14"),pe.forEach(t),xs=n(Xs," dataset to transcribe audio to text."),Xs.forEach(t),Y=d(s),y(V.$$.fragment,s),X=d(s),M=r(s,"H2",{class:!0});var Ka=p(M);N=r(Ka,"A",{id:!0,class:!0,href:!0});var ie=p(N);cs=r(ie,"SPAN",{});var ce=p(cs);y(L.$$.fragment,ce),ce.forEach(t),ie.forEach(t),Es=d(Ka),H=r(Ka,"SPAN",{});var he=p(H);As=n(he,"Load MInDS-14 dataset"),he.forEach(t),Ka.forEach(t),ds=d(s),W=r(s,"P",{});var Qa=p(W);Z=n(Qa,"Load the "),B=r(Qa,"A",{href:!0,rel:!0});var fe=p(B);f=n(fe,"MInDS-14"),fe.forEach(t),b=n(Qa," from the \u{1F917} Datasets library:"),Qa.forEach(t),es=d(s),y(ns.$$.fragment,s),qs=d(s),z=r(s,"P",{});var ue=p(z);ms=n(ue,"Split this dataset into a train and test set:"),ue.forEach(t),Ts=d(s),y(J.$$.fragment,s),Ps=d(s),ss=r(s,"P",{});var de=p(ss);Bs=n(de,"Then take a look at the dataset:"),de.forEach(t),xa=d(s),y(Cs.$$.fragment,s),Ea=d(s),R=r(s,"P",{});var is=p(R);lt=n(is,"While the dataset contains a lot of helpful information, like "),ea=r(is,"CODE",{});var me=p(ea);ot=n(me,"lang_id"),me.forEach(t),rt=n(is," and "),na=r(is,"CODE",{});var ge=p(na);pt=n(ge,"intent_class"),ge.forEach(t),it=n(is,", you will focus on the "),la=r(is,"CODE",{});var _e=p(la);ct=n(_e,"audio"),_e.forEach(t),ht=n(is," and "),oa=r(is,"CODE",{});var $e=p(oa);ft=n($e,"transcription"),$e.forEach(t),ut=n(is," columns in this guide. Remove the other columns:"),is.forEach(t),Aa=d(s),y(Ds.$$.fragment,s),qa=d(s),Js=r(s,"P",{});var je=p(Js);dt=n(je,"Take a look at the example again:"),je.forEach(t),Ta=d(s),y(Ss.$$.fragment,s),Pa=d(s),ls=r(s,"P",{});var Zs=p(ls);mt=n(Zs,"The "),ra=r(Zs,"CODE",{});var be=p(ra);gt=n(be,"audio"),be.forEach(t),_t=n(Zs," column contains a 1-dimensional "),pa=r(Zs,"CODE",{});var ve=p(pa);$t=n(ve,"array"),ve.forEach(t),jt=n(Zs," of the speech signal that must be called to load and resample the audio file."),Zs.forEach(t),Ca=d(s),hs=r(s,"H2",{class:!0});var Xa=p(hs);gs=r(Xa,"A",{id:!0,class:!0,href:!0});var we=p(gs);ia=r(we,"SPAN",{});var ye=p(ia);y(Is.$$.fragment,ye),ye.forEach(t),we.forEach(t),bt=d(Xa),ca=r(Xa,"SPAN",{});var ke=p(ca);vt=n(ke,"Preprocess"),ke.forEach(t),Xa.forEach(t),Da=d(s),Gs=r(s,"P",{});var xe=p(Gs);wt=n(xe,"Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),xe.forEach(t),Sa=d(s),y(Ls.$$.fragment,s),Ia=d(s),_s=r(s,"P",{});var Za=p(_s);yt=n(Za,"The "),Os=r(Za,"A",{href:!0,rel:!0});var Ee=p(Os);kt=n(Ee,"MInDS-14"),Ee.forEach(t),xt=n(Za," dataset has a sampling rate of 8000khz. You will need to resample the dataset to use the pretrained Wav2Vec2 model:"),Za.forEach(t),La=d(s),y(Rs.$$.fragment,s),Oa=d(s),Ks=r(s,"P",{});var Ae=p(Ks);Et=n(Ae,"The preprocessing function needs to:"),Ae.forEach(t),Ra=d(s),os=r(s,"OL",{});var sa=p(os);Ms=r(sa,"LI",{});var st=p(Ms);At=n(st,"Call the "),ha=r(st,"CODE",{});var qe=p(ha);qt=n(qe,"audio"),qe.forEach(t),Tt=n(st," column to load and resample the audio file."),st.forEach(t),Pt=d(sa),Ws=r(sa,"LI",{});var at=p(Ws);Ct=n(at,"Extract the "),fa=r(at,"CODE",{});var Te=p(fa);Dt=n(Te,"input_values"),Te.forEach(t),St=n(at," from the audio file."),at.forEach(t),It=d(sa),ua=r(sa,"LI",{});var Pe=p(ua);Lt=n(Pe,"Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),Pe.forEach(t),sa.forEach(t),Ma=d(s),y(zs.$$.fragment,s),Wa=d(s),rs=r(s,"P",{});var aa=p(rs);Ot=n(aa,"Use \u{1F917} Datasets "),Fs=r(aa,"A",{href:!0,rel:!0});var Ce=p(Fs);da=r(Ce,"CODE",{});var De=p(da);Rt=n(De,"map"),De.forEach(t),Ce.forEach(t),Mt=n(aa," function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),ma=r(aa,"CODE",{});var Se=p(ma);Wt=n(Se,"num_proc"),Se.forEach(t),zt=n(aa,". Remove the columns you don\u2019t need:"),aa.forEach(t),za=d(s),y(Us.$$.fragment,s),Fa=d(s),G=r(s,"P",{});var ws=p(G);Ft=n(ws,"\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),Qs=r(ws,"A",{href:!0});var Ie=p(Qs);Ut=n(Ie,"DataCollatorWithPadding"),Ie.forEach(t),Yt=n(ws," to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ga=r(ws,"CODE",{});var Le=p(ga);Vt=n(Le,"tokenizer"),Le.forEach(t),Nt=n(ws," function by setting "),_a=r(ws,"CODE",{});var Oe=p(_a);Ht=n(Oe,"padding=True"),Oe.forEach(t),Bt=n(ws,", dynamic padding is more efficient."),ws.forEach(t),Ua=d(s),ps=r(s,"P",{});var ta=p(ps);Jt=n(ta,"Unlike other data collators, this specific data collator needs to apply a different padding method to "),$a=r(ta,"CODE",{});var Re=p($a);Gt=n(Re,"input_values"),Re.forEach(t),Kt=n(ta," and "),ja=r(ta,"CODE",{});var Me=p(ja);Qt=n(Me,"labels"),Me.forEach(t),Xt=n(ta,". You can apply a different padding method with a context manager:"),ta.forEach(t),Ya=d(s),y(Ys.$$.fragment,s),Va=d(s),$s=r(s,"P",{});var tt=p($s);Zt=n(tt,"Create a batch of examples and dynamically pad them with "),ba=r(tt,"CODE",{});var We=p(ba);se=n(We,"DataCollatorForCTCWithPadding"),We.forEach(t),ae=n(tt,":"),tt.forEach(t),Na=d(s),y(Vs.$$.fragment,s),Ha=d(s),fs=r(s,"H2",{class:!0});var et=p(fs);js=r(et,"A",{id:!0,class:!0,href:!0});var ze=p(js);va=r(ze,"SPAN",{});var Fe=p(va);y(Ns.$$.fragment,Fe),Fe.forEach(t),ze.forEach(t),te=d(et),wa=r(et,"SPAN",{});var Ue=p(wa);ee=n(Ue,"Train"),Ue.forEach(t),et.forEach(t),Ba=d(s),y(bs.$$.fragment,s),Ja=d(s),y(vs.$$.fragment,s),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(en)),m($,"id","automatic-speech-recognition"),m($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($,"href","#automatic-speech-recognition"),m(h,"class","relative group"),m(I,"href","https://huggingface.co/facebook/wav2vec2-base"),m(I,"rel","nofollow"),m(Q,"href","https://huggingface.co/datasets/PolyAI/minds14"),m(Q,"rel","nofollow"),m(N,"id","load-minds14-dataset"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#load-minds14-dataset"),m(M,"class","relative group"),m(B,"href","https://huggingface.co/datasets/PolyAI/minds14"),m(B,"rel","nofollow"),m(gs,"id","preprocess"),m(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(gs,"href","#preprocess"),m(hs,"class","relative group"),m(Os,"href","https://huggingface.co/datasets/PolyAI/minds14"),m(Os,"rel","nofollow"),m(Fs,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),m(Fs,"rel","nofollow"),m(Qs,"href","/docs/transformers/pr_16805/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),m(js,"id","train"),m(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(js,"href","#train"),m(fs,"class","relative group")},m(s,l){a(document.head,c),i(s,j,l),i(s,h,l),a(h,$),a($,v),k(g,v,null),a(h,q),a(h,T),a(T,P),i(s,_,l),k(D,s,l),i(s,C,l),i(s,K,l),a(K,as),i(s,us,l),i(s,S,l),a(S,O),a(S,I),a(I,ys),a(S,ts),a(S,Q),a(Q,ks),a(S,xs),i(s,Y,l),k(V,s,l),i(s,X,l),i(s,M,l),a(M,N),a(N,cs),k(L,cs,null),a(M,Es),a(M,H),a(H,As),i(s,ds,l),i(s,W,l),a(W,Z),a(W,B),a(B,f),a(W,b),i(s,es,l),k(ns,s,l),i(s,qs,l),i(s,z,l),a(z,ms),i(s,Ts,l),k(J,s,l),i(s,Ps,l),i(s,ss,l),a(ss,Bs),i(s,xa,l),k(Cs,s,l),i(s,Ea,l),i(s,R,l),a(R,lt),a(R,ea),a(ea,ot),a(R,rt),a(R,na),a(na,pt),a(R,it),a(R,la),a(la,ct),a(R,ht),a(R,oa),a(oa,ft),a(R,ut),i(s,Aa,l),k(Ds,s,l),i(s,qa,l),i(s,Js,l),a(Js,dt),i(s,Ta,l),k(Ss,s,l),i(s,Pa,l),i(s,ls,l),a(ls,mt),a(ls,ra),a(ra,gt),a(ls,_t),a(ls,pa),a(pa,$t),a(ls,jt),i(s,Ca,l),i(s,hs,l),a(hs,gs),a(gs,ia),k(Is,ia,null),a(hs,bt),a(hs,ca),a(ca,vt),i(s,Da,l),i(s,Gs,l),a(Gs,wt),i(s,Sa,l),k(Ls,s,l),i(s,Ia,l),i(s,_s,l),a(_s,yt),a(_s,Os),a(Os,kt),a(_s,xt),i(s,La,l),k(Rs,s,l),i(s,Oa,l),i(s,Ks,l),a(Ks,Et),i(s,Ra,l),i(s,os,l),a(os,Ms),a(Ms,At),a(Ms,ha),a(ha,qt),a(Ms,Tt),a(os,Pt),a(os,Ws),a(Ws,Ct),a(Ws,fa),a(fa,Dt),a(Ws,St),a(os,It),a(os,ua),a(ua,Lt),i(s,Ma,l),k(zs,s,l),i(s,Wa,l),i(s,rs,l),a(rs,Ot),a(rs,Fs),a(Fs,da),a(da,Rt),a(rs,Mt),a(rs,ma),a(ma,Wt),a(rs,zt),i(s,za,l),k(Us,s,l),i(s,Fa,l),i(s,G,l),a(G,Ft),a(G,Qs),a(Qs,Ut),a(G,Yt),a(G,ga),a(ga,Vt),a(G,Nt),a(G,_a),a(_a,Ht),a(G,Bt),i(s,Ua,l),i(s,ps,l),a(ps,Jt),a(ps,$a),a($a,Gt),a(ps,Kt),a(ps,ja),a(ja,Qt),a(ps,Xt),i(s,Ya,l),k(Ys,s,l),i(s,Va,l),i(s,$s,l),a($s,Zt),a($s,ba),a(ba,se),a($s,ae),i(s,Na,l),k(Vs,s,l),i(s,Ha,l),i(s,fs,l),a(fs,js),a(js,va),k(Ns,va,null),a(fs,te),a(fs,wa),a(wa,ee),i(s,Ba,l),k(bs,s,l),i(s,Ja,l),k(vs,s,l),Ga=!0},p(s,[l]){const Hs={};l&2&&(Hs.$$scope={dirty:l,ctx:s}),V.$set(Hs);const ya={};l&2&&(ya.$$scope={dirty:l,ctx:s}),bs.$set(ya);const ka={};l&2&&(ka.$$scope={dirty:l,ctx:s}),vs.$set(ka)},i(s){Ga||(x(g.$$.fragment,s),x(D.$$.fragment,s),x(V.$$.fragment,s),x(L.$$.fragment,s),x(ns.$$.fragment,s),x(J.$$.fragment,s),x(Cs.$$.fragment,s),x(Ds.$$.fragment,s),x(Ss.$$.fragment,s),x(Is.$$.fragment,s),x(Ls.$$.fragment,s),x(Rs.$$.fragment,s),x(zs.$$.fragment,s),x(Us.$$.fragment,s),x(Ys.$$.fragment,s),x(Vs.$$.fragment,s),x(Ns.$$.fragment,s),x(bs.$$.fragment,s),x(vs.$$.fragment,s),Ga=!0)},o(s){E(g.$$.fragment,s),E(D.$$.fragment,s),E(V.$$.fragment,s),E(L.$$.fragment,s),E(ns.$$.fragment,s),E(J.$$.fragment,s),E(Cs.$$.fragment,s),E(Ds.$$.fragment,s),E(Ss.$$.fragment,s),E(Is.$$.fragment,s),E(Ls.$$.fragment,s),E(Rs.$$.fragment,s),E(zs.$$.fragment,s),E(Us.$$.fragment,s),E(Ys.$$.fragment,s),E(Vs.$$.fragment,s),E(Ns.$$.fragment,s),E(bs.$$.fragment,s),E(vs.$$.fragment,s),Ga=!1},d(s){t(c),s&&t(j),s&&t(h),A(g),s&&t(_),A(D,s),s&&t(C),s&&t(K),s&&t(us),s&&t(S),s&&t(Y),A(V,s),s&&t(X),s&&t(M),A(L),s&&t(ds),s&&t(W),s&&t(es),A(ns,s),s&&t(qs),s&&t(z),s&&t(Ts),A(J,s),s&&t(Ps),s&&t(ss),s&&t(xa),A(Cs,s),s&&t(Ea),s&&t(R),s&&t(Aa),A(Ds,s),s&&t(qa),s&&t(Js),s&&t(Ta),A(Ss,s),s&&t(Pa),s&&t(ls),s&&t(Ca),s&&t(hs),A(Is),s&&t(Da),s&&t(Gs),s&&t(Sa),A(Ls,s),s&&t(Ia),s&&t(_s),s&&t(La),A(Rs,s),s&&t(Oa),s&&t(Ks),s&&t(Ra),s&&t(os),s&&t(Ma),A(zs,s),s&&t(Wa),s&&t(rs),s&&t(za),A(Us,s),s&&t(Fa),s&&t(G),s&&t(Ua),s&&t(ps),s&&t(Ya),A(Ys,s),s&&t(Va),s&&t($s),s&&t(Na),A(Vs,s),s&&t(Ha),s&&t(fs),A(Ns),s&&t(Ba),A(bs,s),s&&t(Ja),A(vs,s)}}}const en={local:"automatic-speech-recognition",sections:[{local:"load-minds14-dataset",title:"Load MInDS-14 dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Automatic speech recognition"};function nn(U){return Be(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends Ye{constructor(c){super();Ve(this,c,nn,tn,Ne,{})}}export{fn as default,en as metadata};
