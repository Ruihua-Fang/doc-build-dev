import{S as ye,i as ke,s as xe,e as o,k as u,w as y,t as e,M as Ee,c as r,d as t,m,a as i,x as k,h as n,b as d,F as a,g as c,y as x,q as E,o as T,B as q,v as Te}from"../../chunks/vendor-6b77c823.js";import{T as Rt}from"../../chunks/Tip-39098574.js";import{Y as qe}from"../../chunks/Youtube-5c6e11e6.js";import{I as Ha}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as X}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ae,M as Ce}from"../../chunks/Markdown-4489c441.js";function Pe(R){let p,v,f,$,b;return{c(){p=o("p"),v=e("See the automatic speech recognition "),f=o("a"),$=e("task page"),b=e(" for more information about its associated models, datasets, and metrics."),this.h()},l(_){p=r(_,"P",{});var w=i(p);v=n(w,"See the automatic speech recognition "),f=r(w,"A",{href:!0,rel:!0});var A=i(f);$=n(A,"task page"),A.forEach(t),b=n(w," for more information about its associated models, datasets, and metrics."),w.forEach(t),this.h()},h(){d(f,"href","https://huggingface.co/tasks/automatic-speech-recognition"),d(f,"rel","nofollow")},m(_,w){c(_,p,w),a(p,v),a(p,f),a(f,$),a(p,b)},d(_){_&&t(p)}}}function De(R){let p,v,f,$,b,_,w,A;return{c(){p=o("p"),v=e("If you aren\u2019t familiar with fine-tuning a model with the "),f=o("a"),$=e("Trainer"),b=e(", take a look at the basic tutorial "),_=o("a"),w=e("here"),A=e("!"),this.h()},l(C){p=r(C,"P",{});var g=i(p);v=n(g,"If you aren\u2019t familiar with fine-tuning a model with the "),f=r(g,"A",{href:!0});var D=i(f);$=n(D,"Trainer"),D.forEach(t),b=n(g,", take a look at the basic tutorial "),_=r(g,"A",{href:!0});var P=i(_);w=n(P,"here"),P.forEach(t),A=n(g,"!"),g.forEach(t),this.h()},h(){d(f,"href","/docs/transformers/pr_16485/en/main_classes/trainer#transformers.Trainer"),d(_,"href","../training#finetune-with-trainer")},m(C,g){c(C,p,g),a(p,v),a(p,f),a(f,$),a(p,b),a(p,_),a(_,w),a(p,A)},d(C){C&&t(p)}}}function Ie(R){let p,v,f,$,b,_,w,A,C,g,D,P,B,Z,hs,S,W,L,ws,ss,J,ys,ks,z,N,G,F,U,os,M,xs,V,Es,fs,K,Q,rs;return g=new X({props:{code:`from transformers import AutoModelForCTC, TrainingArguments, Trainer

model = AutoModelForCTC.from_pretrained(
    "facebook/wav2vec-base",
    ctc_loss_reduction="mean",
    pad_token_id=processor.tokenizer.pad_token_id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCTC, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec-base&quot;</span>,
<span class="hljs-meta">... </span>    ctc_loss_reduction=<span class="hljs-string">&quot;mean&quot;</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>)`}}),P=new Rt({props:{$$slots:{default:[De]},$$scope:{ctx:R}}}),Q=new X({props:{code:`training_args = TrainingArguments(
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
    train_dataset=timit["train"],
    eval_dataset=timit["test"],
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
<span class="hljs-meta">... </span>    train_dataset=timit[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=timit[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=processor.feature_extractor,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){p=o("p"),v=e("Load Wav2Vec2 with "),f=o("a"),$=e("AutoModelForCTC"),b=e(". For "),_=o("code"),w=e("ctc_loss_reduction"),A=e(", it is often better to use the average instead of the default summation:"),C=u(),y(g.$$.fragment),D=u(),y(P.$$.fragment),B=u(),Z=o("p"),hs=e("At this point, only three steps remain:"),S=u(),W=o("ol"),L=o("li"),ws=e("Define your training hyperparameters in "),ss=o("a"),J=e("TrainingArguments"),ys=e("."),ks=u(),z=o("li"),N=e("Pass the training arguments to "),G=o("a"),F=e("Trainer"),U=e(" along with the model, datasets, tokenizer, and data collator."),os=u(),M=o("li"),xs=e("Call "),V=o("a"),Es=e("train()"),fs=e(" to fine-tune your model."),K=u(),y(Q.$$.fragment),this.h()},l(h){p=r(h,"P",{});var j=i(p);v=n(j,"Load Wav2Vec2 with "),f=r(j,"A",{href:!0});var Y=i(f);$=n(Y,"AutoModelForCTC"),Y.forEach(t),b=n(j,". For "),_=r(j,"CODE",{});var zs=i(_);w=n(zs,"ctc_loss_reduction"),zs.forEach(t),A=n(j,", it is often better to use the average instead of the default summation:"),j.forEach(t),C=m(h),k(g.$$.fragment,h),D=m(h),k(P.$$.fragment,h),B=m(h),Z=r(h,"P",{});var Ts=i(Z);hs=n(Ts,"At this point, only three steps remain:"),Ts.forEach(t),S=m(h),W=r(h,"OL",{});var O=i(W);L=r(O,"LI",{});var is=i(L);ws=n(is,"Define your training hyperparameters in "),ss=r(is,"A",{href:!0});var I=i(ss);J=n(I,"TrainingArguments"),I.forEach(t),ys=n(is,"."),is.forEach(t),ks=m(O),z=r(O,"LI",{});var us=i(z);N=n(us,"Pass the training arguments to "),G=r(us,"A",{href:!0});var ms=i(G);F=n(ms,"Trainer"),ms.forEach(t),U=n(us," along with the model, datasets, tokenizer, and data collator."),us.forEach(t),os=m(O),M=r(O,"LI",{});var ds=i(M);xs=n(ds,"Call "),V=r(ds,"A",{href:!0});var Ns=i(V);Es=n(Ns,"train()"),Ns.forEach(t),fs=n(ds," to fine-tune your model."),ds.forEach(t),O.forEach(t),K=m(h),k(Q.$$.fragment,h),this.h()},h(){d(f,"href","/docs/transformers/pr_16485/en/model_doc/auto#transformers.AutoModelForCTC"),d(ss,"href","/docs/transformers/pr_16485/en/main_classes/trainer#transformers.TrainingArguments"),d(G,"href","/docs/transformers/pr_16485/en/main_classes/trainer#transformers.Trainer"),d(V,"href","/docs/transformers/pr_16485/en/main_classes/trainer#transformers.Trainer.train")},m(h,j){c(h,p,j),a(p,v),a(p,f),a(f,$),a(p,b),a(p,_),a(_,w),a(p,A),c(h,C,j),x(g,h,j),c(h,D,j),x(P,h,j),c(h,B,j),c(h,Z,j),a(Z,hs),c(h,S,j),c(h,W,j),a(W,L),a(L,ws),a(L,ss),a(ss,J),a(L,ys),a(W,ks),a(W,z),a(z,N),a(z,G),a(G,F),a(z,U),a(W,os),a(W,M),a(M,xs),a(M,V),a(V,Es),a(M,fs),c(h,K,j),x(Q,h,j),rs=!0},p(h,j){const Y={};j&2&&(Y.$$scope={dirty:j,ctx:h}),P.$set(Y)},i(h){rs||(E(g.$$.fragment,h),E(P.$$.fragment,h),E(Q.$$.fragment,h),rs=!0)},o(h){T(g.$$.fragment,h),T(P.$$.fragment,h),T(Q.$$.fragment,h),rs=!1},d(h){h&&t(p),h&&t(C),q(g,h),h&&t(D),q(P,h),h&&t(B),h&&t(Z),h&&t(S),h&&t(W),h&&t(K),q(Q,h)}}}function Se(R){let p,v;return p=new Ce({props:{$$slots:{default:[Ie]},$$scope:{ctx:R}}}),{c(){y(p.$$.fragment)},l(f){k(p.$$.fragment,f)},m(f,$){x(p,f,$),v=!0},p(f,$){const b={};$&2&&(b.$$scope={dirty:$,ctx:f}),p.$set(b)},i(f){v||(E(p.$$.fragment,f),v=!0)},o(f){T(p.$$.fragment,f),v=!1},d(f){q(p,f)}}}function Le(R){let p,v,f,$,b,_,w,A;return{c(){p=o("p"),v=e("For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),f=o("a"),$=e("post"),b=e(" for English ASR and this "),_=o("a"),w=e("post"),A=e(" for multilingual ASR."),this.h()},l(C){p=r(C,"P",{});var g=i(p);v=n(g,"For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),f=r(g,"A",{href:!0,rel:!0});var D=i(f);$=n(D,"post"),D.forEach(t),b=n(g," for English ASR and this "),_=r(g,"A",{href:!0,rel:!0});var P=i(_);w=n(P,"post"),P.forEach(t),A=n(g," for multilingual ASR."),g.forEach(t),this.h()},h(){d(f,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),d(f,"rel","nofollow"),d(_,"href","https://huggingface.co/blog/fine-tune-xlsr-wav2vec2"),d(_,"rel","nofollow")},m(C,g){c(C,p,g),a(p,v),a(p,f),a(f,$),a(p,b),a(p,_),a(_,w),a(p,A)},d(C){C&&t(p)}}}function Me(R){let p,v,f,$,b,_,w,A,C,g,D,P,B,Z,hs,S,W,L,ws,ss,J,ys,ks,z,N,G,F,U,os,M,xs,V,Es,fs,K,Q,rs,h,j,Y,zs,Ts,O,is,I,us,ms,ds,Ns,Xs,Ba,Ja,Zs,Ga,Ka,sa,Qa,Xa,ja,qs,va,Us,Za,ba,As,wa,as,st,aa,at,tt,ta,et,nt,ya,ps,_s,ea,Cs,lt,na,ot,ka,Vs,rt,xa,Ps,Ea,Ys,it,Ta,ts,Ds,pt,la,ct,ht,ft,Is,ut,oa,mt,dt,_t,ra,gt,qa,Ss,Aa,es,$t,Ls,ia,jt,vt,pa,bt,wt,Ca,Ms,Pa,H,yt,Hs,kt,xt,ca,Et,Tt,ha,qt,At,Da,ns,Ct,fa,Pt,Dt,ua,It,St,Ia,Ws,Sa,gs,Lt,ma,Mt,Wt,La,Os,Ma,cs,$s,da,Fs,Ot,_a,Ft,Wa,js,Oa,vs,Fa;return _=new Ha({}),D=new qe({props:{id:"TksaY_FDgnk"}}),N=new Rt({props:{$$slots:{default:[Pe]},$$scope:{ctx:R}}}),M=new Ha({}),h=new X({props:{code:`from datasets import load_dataset

timit = load_dataset("timit_asr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>timit = load_dataset(<span class="hljs-string">&quot;timit_asr&quot;</span>)`}}),O=new X({props:{code:"timit",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;file&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;phonetic_detail&#x27;</span>, <span class="hljs-string">&#x27;word_detail&#x27;</span>, <span class="hljs-string">&#x27;dialect_region&#x27;</span>, <span class="hljs-string">&#x27;sentence_type&#x27;</span>, <span class="hljs-string">&#x27;speaker_id&#x27;</span>, <span class="hljs-string">&#x27;id&#x27;</span>],
        num_rows: <span class="hljs-number">4620</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;file&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;phonetic_detail&#x27;</span>, <span class="hljs-string">&#x27;word_detail&#x27;</span>, <span class="hljs-string">&#x27;dialect_region&#x27;</span>, <span class="hljs-string">&#x27;sentence_type&#x27;</span>, <span class="hljs-string">&#x27;speaker_id&#x27;</span>, <span class="hljs-string">&#x27;id&#x27;</span>],
        num_rows: <span class="hljs-number">1680</span>
    })
})`}}),qs=new X({props:{code:`timit = timit.remove_columns(
    ["phonetic_detail", "word_detail", "dialect_region", "id", "sentence_type", "speaker_id"]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit = timit.remove_columns(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;phonetic_detail&quot;</span>, <span class="hljs-string">&quot;word_detail&quot;</span>, <span class="hljs-string">&quot;dialect_region&quot;</span>, <span class="hljs-string">&quot;id&quot;</span>, <span class="hljs-string">&quot;sentence_type&quot;</span>, <span class="hljs-string">&quot;speaker_id&quot;</span>]
<span class="hljs-meta">... </span>)`}}),As=new X({props:{code:'timit["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([-<span class="hljs-number">2.1362305e-04</span>,  <span class="hljs-number">6.1035156e-05</span>,  <span class="hljs-number">3.0517578e-05</span>, ...,
         -<span class="hljs-number">3.0517578e-05</span>, -<span class="hljs-number">9.1552734e-05</span>, -<span class="hljs-number">6.1035156e-05</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/404950a46da14eac65eb4e2a8317b1372fb3971d980d91d5d5b221275b1fd7e0/data/TRAIN/DR4/MMDM0/SI681.WAV&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>},
 <span class="hljs-string">&#x27;file&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/404950a46da14eac65eb4e2a8317b1372fb3971d980d91d5d5b221275b1fd7e0/data/TRAIN/DR4/MMDM0/SI681.WAV&#x27;</span>,
 <span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&#x27;Would such an act of refusal be useful?&#x27;</span>}`}}),Cs=new Ha({}),Ps=new X({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),Ss=new X({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]

    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])

    with processor.as_target_processor():
        batch["labels"] = processor(batch["text"]).input_ids
    return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]

<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;text&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch`}}),Ms=new X({props:{code:'timit = timit.map(prepare_dataset, remove_columns=timit.column_names["train"], num_proc=4)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>timit = timit.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=timit.column_names[<span class="hljs-string">&quot;train&quot;</span>], num_proc=<span class="hljs-number">4</span>)'}}),Ws=new X({props:{code:`import torch

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

<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),Os=new X({props:{code:"data_collator = DataCollatorCTCWithPadding(processor=processor, padding=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorCTCWithPadding(processor=processor, padding=<span class="hljs-literal">True</span>)'}}),Fs=new Ha({}),js=new Ae({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Se]},$$scope:{ctx:R}}}),vs=new Rt({props:{$$slots:{default:[Le]},$$scope:{ctx:R}}}),{c(){p=o("meta"),v=u(),f=o("h1"),$=o("a"),b=o("span"),y(_.$$.fragment),w=u(),A=o("span"),C=e("Automatic speech recognition"),g=u(),y(D.$$.fragment),P=u(),B=o("p"),Z=e("Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),hs=u(),S=o("p"),W=e("This guide will show you how to fine-tune "),L=o("a"),ws=e("Wav2Vec2"),ss=e(" on the "),J=o("a"),ys=e("TIMIT"),ks=e(" dataset to transcribe audio to text."),z=u(),y(N.$$.fragment),G=u(),F=o("h2"),U=o("a"),os=o("span"),y(M.$$.fragment),xs=u(),V=o("span"),Es=e("Load TIMIT dataset"),fs=u(),K=o("p"),Q=e("Load the TIMIT dataset from the \u{1F917} Datasets library:"),rs=u(),y(h.$$.fragment),j=u(),Y=o("p"),zs=e("Then take a look at an example:"),Ts=u(),y(O.$$.fragment),is=u(),I=o("p"),us=e("While the dataset contains a lot of helpful information, like "),ms=o("code"),ds=e("dialect_region"),Ns=e(" and "),Xs=o("code"),Ba=e("sentence_type"),Ja=e(", you will focus on the "),Zs=o("code"),Ga=e("audio"),Ka=e(" and "),sa=o("code"),Qa=e("text"),Xa=e(" fields in this guide. Remove the other columns:"),ja=u(),y(qs.$$.fragment),va=u(),Us=o("p"),Za=e("Take a look at the example again:"),ba=u(),y(As.$$.fragment),wa=u(),as=o("p"),st=e("The "),aa=o("code"),at=e("audio"),tt=e(" column contains a 1-dimensional "),ta=o("code"),et=e("array"),nt=e(" of the speech signal that must be called to load and resample the audio file."),ya=u(),ps=o("h2"),_s=o("a"),ea=o("span"),y(Cs.$$.fragment),lt=u(),na=o("span"),ot=e("Preprocess"),ka=u(),Vs=o("p"),rt=e("Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),xa=u(),y(Ps.$$.fragment),Ea=u(),Ys=o("p"),it=e("The preprocessing function needs to:"),Ta=u(),ts=o("ol"),Ds=o("li"),pt=e("Call the "),la=o("code"),ct=e("audio"),ht=e(" column to load and resample the audio file."),ft=u(),Is=o("li"),ut=e("Extract the "),oa=o("code"),mt=e("input_values"),dt=e(" from the audio file."),_t=u(),ra=o("li"),gt=e("Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),qa=u(),y(Ss.$$.fragment),Aa=u(),es=o("p"),$t=e("Use \u{1F917} Datasets "),Ls=o("a"),ia=o("code"),jt=e("map"),vt=e(" function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),pa=o("code"),bt=e("num_proc"),wt=e(". Remove the columns you don\u2019t need:"),Ca=u(),y(Ms.$$.fragment),Pa=u(),H=o("p"),yt=e("\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),Hs=o("a"),kt=e("DataCollatorWithPadding"),xt=e(" to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ca=o("code"),Et=e("tokenizer"),Tt=e(" function by setting "),ha=o("code"),qt=e("padding=True"),At=e(", dynamic padding is more efficient."),Da=u(),ns=o("p"),Ct=e("Unlike other data collators, this specific data collator needs to apply a different padding method to "),fa=o("code"),Pt=e("input_values"),Dt=e(" and "),ua=o("code"),It=e("labels"),St=e(". You can apply a different padding method with a context manager:"),Ia=u(),y(Ws.$$.fragment),Sa=u(),gs=o("p"),Lt=e("Create a batch of examples and dynamically pad them with "),ma=o("code"),Mt=e("DataCollatorForCTCWithPadding"),Wt=e(":"),La=u(),y(Os.$$.fragment),Ma=u(),cs=o("h2"),$s=o("a"),da=o("span"),y(Fs.$$.fragment),Ot=u(),_a=o("span"),Ft=e("Train"),Wa=u(),y(js.$$.fragment),Oa=u(),y(vs.$$.fragment),this.h()},l(s){const l=Ee('[data-svelte="svelte-1phssyn"]',document.head);p=r(l,"META",{name:!0,content:!0}),l.forEach(t),v=m(s),f=r(s,"H1",{class:!0});var Rs=i(f);$=r(Rs,"A",{id:!0,class:!0,href:!0});var ga=i($);b=r(ga,"SPAN",{});var $a=i(b);k(_.$$.fragment,$a),$a.forEach(t),ga.forEach(t),w=m(Rs),A=r(Rs,"SPAN",{});var zt=i(A);C=n(zt,"Automatic speech recognition"),zt.forEach(t),Rs.forEach(t),g=m(s),k(D.$$.fragment,s),P=m(s),B=r(s,"P",{});var Nt=i(B);Z=n(Nt,"Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),Nt.forEach(t),hs=m(s),S=r(s,"P",{});var Bs=i(S);W=n(Bs,"This guide will show you how to fine-tune "),L=r(Bs,"A",{href:!0,rel:!0});var Ut=i(L);ws=n(Ut,"Wav2Vec2"),Ut.forEach(t),ss=n(Bs," on the "),J=r(Bs,"A",{href:!0,rel:!0});var Vt=i(J);ys=n(Vt,"TIMIT"),Vt.forEach(t),ks=n(Bs," dataset to transcribe audio to text."),Bs.forEach(t),z=m(s),k(N.$$.fragment,s),G=m(s),F=r(s,"H2",{class:!0});var Ra=i(F);U=r(Ra,"A",{id:!0,class:!0,href:!0});var Yt=i(U);os=r(Yt,"SPAN",{});var Ht=i(os);k(M.$$.fragment,Ht),Ht.forEach(t),Yt.forEach(t),xs=m(Ra),V=r(Ra,"SPAN",{});var Bt=i(V);Es=n(Bt,"Load TIMIT dataset"),Bt.forEach(t),Ra.forEach(t),fs=m(s),K=r(s,"P",{});var Jt=i(K);Q=n(Jt,"Load the TIMIT dataset from the \u{1F917} Datasets library:"),Jt.forEach(t),rs=m(s),k(h.$$.fragment,s),j=m(s),Y=r(s,"P",{});var Gt=i(Y);zs=n(Gt,"Then take a look at an example:"),Gt.forEach(t),Ts=m(s),k(O.$$.fragment,s),is=m(s),I=r(s,"P",{});var ls=i(I);us=n(ls,"While the dataset contains a lot of helpful information, like "),ms=r(ls,"CODE",{});var Kt=i(ms);ds=n(Kt,"dialect_region"),Kt.forEach(t),Ns=n(ls," and "),Xs=r(ls,"CODE",{});var Qt=i(Xs);Ba=n(Qt,"sentence_type"),Qt.forEach(t),Ja=n(ls,", you will focus on the "),Zs=r(ls,"CODE",{});var Xt=i(Zs);Ga=n(Xt,"audio"),Xt.forEach(t),Ka=n(ls," and "),sa=r(ls,"CODE",{});var Zt=i(sa);Qa=n(Zt,"text"),Zt.forEach(t),Xa=n(ls," fields in this guide. Remove the other columns:"),ls.forEach(t),ja=m(s),k(qs.$$.fragment,s),va=m(s),Us=r(s,"P",{});var se=i(Us);Za=n(se,"Take a look at the example again:"),se.forEach(t),ba=m(s),k(As.$$.fragment,s),wa=m(s),as=r(s,"P",{});var Js=i(as);st=n(Js,"The "),aa=r(Js,"CODE",{});var ae=i(aa);at=n(ae,"audio"),ae.forEach(t),tt=n(Js," column contains a 1-dimensional "),ta=r(Js,"CODE",{});var te=i(ta);et=n(te,"array"),te.forEach(t),nt=n(Js," of the speech signal that must be called to load and resample the audio file."),Js.forEach(t),ya=m(s),ps=r(s,"H2",{class:!0});var za=i(ps);_s=r(za,"A",{id:!0,class:!0,href:!0});var ee=i(_s);ea=r(ee,"SPAN",{});var ne=i(ea);k(Cs.$$.fragment,ne),ne.forEach(t),ee.forEach(t),lt=m(za),na=r(za,"SPAN",{});var le=i(na);ot=n(le,"Preprocess"),le.forEach(t),za.forEach(t),ka=m(s),Vs=r(s,"P",{});var oe=i(Vs);rt=n(oe,"Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),oe.forEach(t),xa=m(s),k(Ps.$$.fragment,s),Ea=m(s),Ys=r(s,"P",{});var re=i(Ys);it=n(re,"The preprocessing function needs to:"),re.forEach(t),Ta=m(s),ts=r(s,"OL",{});var Gs=i(ts);Ds=r(Gs,"LI",{});var Na=i(Ds);pt=n(Na,"Call the "),la=r(Na,"CODE",{});var ie=i(la);ct=n(ie,"audio"),ie.forEach(t),ht=n(Na," column to load and resample the audio file."),Na.forEach(t),ft=m(Gs),Is=r(Gs,"LI",{});var Ua=i(Is);ut=n(Ua,"Extract the "),oa=r(Ua,"CODE",{});var pe=i(oa);mt=n(pe,"input_values"),pe.forEach(t),dt=n(Ua," from the audio file."),Ua.forEach(t),_t=m(Gs),ra=r(Gs,"LI",{});var ce=i(ra);gt=n(ce,"Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),ce.forEach(t),Gs.forEach(t),qa=m(s),k(Ss.$$.fragment,s),Aa=m(s),es=r(s,"P",{});var Ks=i(es);$t=n(Ks,"Use \u{1F917} Datasets "),Ls=r(Ks,"A",{href:!0,rel:!0});var he=i(Ls);ia=r(he,"CODE",{});var fe=i(ia);jt=n(fe,"map"),fe.forEach(t),he.forEach(t),vt=n(Ks," function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),pa=r(Ks,"CODE",{});var ue=i(pa);bt=n(ue,"num_proc"),ue.forEach(t),wt=n(Ks,". Remove the columns you don\u2019t need:"),Ks.forEach(t),Ca=m(s),k(Ms.$$.fragment,s),Pa=m(s),H=r(s,"P",{});var bs=i(H);yt=n(bs,"\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),Hs=r(bs,"A",{href:!0});var me=i(Hs);kt=n(me,"DataCollatorWithPadding"),me.forEach(t),xt=n(bs," to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ca=r(bs,"CODE",{});var de=i(ca);Et=n(de,"tokenizer"),de.forEach(t),Tt=n(bs," function by setting "),ha=r(bs,"CODE",{});var _e=i(ha);qt=n(_e,"padding=True"),_e.forEach(t),At=n(bs,", dynamic padding is more efficient."),bs.forEach(t),Da=m(s),ns=r(s,"P",{});var Qs=i(ns);Ct=n(Qs,"Unlike other data collators, this specific data collator needs to apply a different padding method to "),fa=r(Qs,"CODE",{});var ge=i(fa);Pt=n(ge,"input_values"),ge.forEach(t),Dt=n(Qs," and "),ua=r(Qs,"CODE",{});var $e=i(ua);It=n($e,"labels"),$e.forEach(t),St=n(Qs,". You can apply a different padding method with a context manager:"),Qs.forEach(t),Ia=m(s),k(Ws.$$.fragment,s),Sa=m(s),gs=r(s,"P",{});var Va=i(gs);Lt=n(Va,"Create a batch of examples and dynamically pad them with "),ma=r(Va,"CODE",{});var je=i(ma);Mt=n(je,"DataCollatorForCTCWithPadding"),je.forEach(t),Wt=n(Va,":"),Va.forEach(t),La=m(s),k(Os.$$.fragment,s),Ma=m(s),cs=r(s,"H2",{class:!0});var Ya=i(cs);$s=r(Ya,"A",{id:!0,class:!0,href:!0});var ve=i($s);da=r(ve,"SPAN",{});var be=i(da);k(Fs.$$.fragment,be),be.forEach(t),ve.forEach(t),Ot=m(Ya),_a=r(Ya,"SPAN",{});var we=i(_a);Ft=n(we,"Train"),we.forEach(t),Ya.forEach(t),Wa=m(s),k(js.$$.fragment,s),Oa=m(s),k(vs.$$.fragment,s),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(We)),d($,"id","automatic-speech-recognition"),d($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($,"href","#automatic-speech-recognition"),d(f,"class","relative group"),d(L,"href","https://huggingface.co/facebook/wav2vec2-base"),d(L,"rel","nofollow"),d(J,"href","https://huggingface.co/datasets/timit_asr"),d(J,"rel","nofollow"),d(U,"id","load-timit-dataset"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#load-timit-dataset"),d(F,"class","relative group"),d(_s,"id","preprocess"),d(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_s,"href","#preprocess"),d(ps,"class","relative group"),d(Ls,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),d(Ls,"rel","nofollow"),d(Hs,"href","/docs/transformers/pr_16485/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),d($s,"id","train"),d($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($s,"href","#train"),d(cs,"class","relative group")},m(s,l){a(document.head,p),c(s,v,l),c(s,f,l),a(f,$),a($,b),x(_,b,null),a(f,w),a(f,A),a(A,C),c(s,g,l),x(D,s,l),c(s,P,l),c(s,B,l),a(B,Z),c(s,hs,l),c(s,S,l),a(S,W),a(S,L),a(L,ws),a(S,ss),a(S,J),a(J,ys),a(S,ks),c(s,z,l),x(N,s,l),c(s,G,l),c(s,F,l),a(F,U),a(U,os),x(M,os,null),a(F,xs),a(F,V),a(V,Es),c(s,fs,l),c(s,K,l),a(K,Q),c(s,rs,l),x(h,s,l),c(s,j,l),c(s,Y,l),a(Y,zs),c(s,Ts,l),x(O,s,l),c(s,is,l),c(s,I,l),a(I,us),a(I,ms),a(ms,ds),a(I,Ns),a(I,Xs),a(Xs,Ba),a(I,Ja),a(I,Zs),a(Zs,Ga),a(I,Ka),a(I,sa),a(sa,Qa),a(I,Xa),c(s,ja,l),x(qs,s,l),c(s,va,l),c(s,Us,l),a(Us,Za),c(s,ba,l),x(As,s,l),c(s,wa,l),c(s,as,l),a(as,st),a(as,aa),a(aa,at),a(as,tt),a(as,ta),a(ta,et),a(as,nt),c(s,ya,l),c(s,ps,l),a(ps,_s),a(_s,ea),x(Cs,ea,null),a(ps,lt),a(ps,na),a(na,ot),c(s,ka,l),c(s,Vs,l),a(Vs,rt),c(s,xa,l),x(Ps,s,l),c(s,Ea,l),c(s,Ys,l),a(Ys,it),c(s,Ta,l),c(s,ts,l),a(ts,Ds),a(Ds,pt),a(Ds,la),a(la,ct),a(Ds,ht),a(ts,ft),a(ts,Is),a(Is,ut),a(Is,oa),a(oa,mt),a(Is,dt),a(ts,_t),a(ts,ra),a(ra,gt),c(s,qa,l),x(Ss,s,l),c(s,Aa,l),c(s,es,l),a(es,$t),a(es,Ls),a(Ls,ia),a(ia,jt),a(es,vt),a(es,pa),a(pa,bt),a(es,wt),c(s,Ca,l),x(Ms,s,l),c(s,Pa,l),c(s,H,l),a(H,yt),a(H,Hs),a(Hs,kt),a(H,xt),a(H,ca),a(ca,Et),a(H,Tt),a(H,ha),a(ha,qt),a(H,At),c(s,Da,l),c(s,ns,l),a(ns,Ct),a(ns,fa),a(fa,Pt),a(ns,Dt),a(ns,ua),a(ua,It),a(ns,St),c(s,Ia,l),x(Ws,s,l),c(s,Sa,l),c(s,gs,l),a(gs,Lt),a(gs,ma),a(ma,Mt),a(gs,Wt),c(s,La,l),x(Os,s,l),c(s,Ma,l),c(s,cs,l),a(cs,$s),a($s,da),x(Fs,da,null),a(cs,Ot),a(cs,_a),a(_a,Ft),c(s,Wa,l),x(js,s,l),c(s,Oa,l),x(vs,s,l),Fa=!0},p(s,[l]){const Rs={};l&2&&(Rs.$$scope={dirty:l,ctx:s}),N.$set(Rs);const ga={};l&2&&(ga.$$scope={dirty:l,ctx:s}),js.$set(ga);const $a={};l&2&&($a.$$scope={dirty:l,ctx:s}),vs.$set($a)},i(s){Fa||(E(_.$$.fragment,s),E(D.$$.fragment,s),E(N.$$.fragment,s),E(M.$$.fragment,s),E(h.$$.fragment,s),E(O.$$.fragment,s),E(qs.$$.fragment,s),E(As.$$.fragment,s),E(Cs.$$.fragment,s),E(Ps.$$.fragment,s),E(Ss.$$.fragment,s),E(Ms.$$.fragment,s),E(Ws.$$.fragment,s),E(Os.$$.fragment,s),E(Fs.$$.fragment,s),E(js.$$.fragment,s),E(vs.$$.fragment,s),Fa=!0)},o(s){T(_.$$.fragment,s),T(D.$$.fragment,s),T(N.$$.fragment,s),T(M.$$.fragment,s),T(h.$$.fragment,s),T(O.$$.fragment,s),T(qs.$$.fragment,s),T(As.$$.fragment,s),T(Cs.$$.fragment,s),T(Ps.$$.fragment,s),T(Ss.$$.fragment,s),T(Ms.$$.fragment,s),T(Ws.$$.fragment,s),T(Os.$$.fragment,s),T(Fs.$$.fragment,s),T(js.$$.fragment,s),T(vs.$$.fragment,s),Fa=!1},d(s){t(p),s&&t(v),s&&t(f),q(_),s&&t(g),q(D,s),s&&t(P),s&&t(B),s&&t(hs),s&&t(S),s&&t(z),q(N,s),s&&t(G),s&&t(F),q(M),s&&t(fs),s&&t(K),s&&t(rs),q(h,s),s&&t(j),s&&t(Y),s&&t(Ts),q(O,s),s&&t(is),s&&t(I),s&&t(ja),q(qs,s),s&&t(va),s&&t(Us),s&&t(ba),q(As,s),s&&t(wa),s&&t(as),s&&t(ya),s&&t(ps),q(Cs),s&&t(ka),s&&t(Vs),s&&t(xa),q(Ps,s),s&&t(Ea),s&&t(Ys),s&&t(Ta),s&&t(ts),s&&t(qa),q(Ss,s),s&&t(Aa),s&&t(es),s&&t(Ca),q(Ms,s),s&&t(Pa),s&&t(H),s&&t(Da),s&&t(ns),s&&t(Ia),q(Ws,s),s&&t(Sa),s&&t(gs),s&&t(La),q(Os,s),s&&t(Ma),s&&t(cs),q(Fs),s&&t(Wa),q(js,s),s&&t(Oa),q(vs,s)}}}const We={local:"automatic-speech-recognition",sections:[{local:"load-timit-dataset",title:"Load TIMIT dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Automatic speech recognition"};function Oe(R){return Te(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ye extends ye{constructor(p){super();ke(this,p,Oe,Me,xe,{})}}export{Ye as default,We as metadata};
