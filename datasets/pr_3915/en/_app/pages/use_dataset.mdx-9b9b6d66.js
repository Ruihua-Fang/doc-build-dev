import{S as Zt,i as sn,s as an,e as t,k as h,w as A,t as r,M as en,c as n,d as e,m,a as l,x as F,h as o,b as u,F as a,g as c,y as C,q as O,o as I,B as N}from"../chunks/vendor-e67aec41.js";import{T as Xt}from"../chunks/Tip-76459d1c.js";import{I as pa}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as ca}from"../chunks/CodeBlock-e2bcf023.js";function tn(ls){let i,_,d,f,v,b,S,x;return{c(){i=t("p"),_=r("Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=t("a"),f=r("guide"),v=r(" from the \u{1F917} Transformers library. Then come back and read our "),b=t("a"),S=r("How-to Process"),x=r(" guide to see all the different methods for processing your dataset."),this.h()},l($){i=n($,"P",{});var j=l(i);_=o(j,"Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=n(j,"A",{href:!0,rel:!0});var y=l(d);f=o(y,"guide"),y.forEach(e),v=o(j," from the \u{1F917} Transformers library. Then come back and read our "),b=n(j,"A",{href:!0});var L=l(b);S=o(L,"How-to Process"),L.forEach(e),x=o(j," guide to see all the different methods for processing your dataset."),j.forEach(e),this.h()},h(){u(d,"href","https://huggingface.co/transformers/preprocessing#"),u(d,"rel","nofollow"),u(b,"href","./process")},m($,j){c($,i,j),a(i,_),a(i,d),a(d,f),a(i,v),a(i,b),a(b,S),a(i,x)},d($){$&&e(i)}}}function nn(ls){let i,_,d,f,v,b,S,x,$,j,y,L,K;return{c(){i=t("p"),_=t("code"),d=r("datasets.Dataset.to_tf_dataset()"),f=r("is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),v=t("code"),b=r("tf.data.Dataset"),S=r(" and would rather the dataset emit "),x=t("code"),$=r("tf.Tensor"),j=r(" objects, take a look at the "),y=t("a"),L=r("format"),K=r(" section instead!"),this.h()},l(k){i=n(k,"P",{});var g=l(i);_=n(g,"CODE",{});var E=l(_);d=o(E,"datasets.Dataset.to_tf_dataset()"),E.forEach(e),f=o(g,"is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),v=n(g,"CODE",{});var B=l(v);b=o(B,"tf.data.Dataset"),B.forEach(e),S=o(g," and would rather the dataset emit "),x=n(g,"CODE",{});var W=l(x);$=o(W,"tf.Tensor"),W.forEach(e),j=o(g," objects, take a look at the "),y=n(g,"A",{href:!0});var q=l(y);L=o(q,"format"),q.forEach(e),K=o(g," section instead!"),g.forEach(e),this.h()},h(){u(y,"href","#format")},m(k,g){c(k,i,g),a(i,_),a(_,d),a(i,f),a(i,v),a(v,b),a(i,S),a(i,x),a(x,$),a(i,j),a(i,y),a(y,L),a(i,K)},d(k){k&&e(i)}}}function ln(ls){let i,_,d,f,v,b,S,x,$,j,y,L,K,k,g,E,B,W,q,qa,Ts,Ha,ia,js,Ya,ha,_s,Ma,ma,rs,ua,H,Ra,os,Ua,Ka,ps,Wa,Ja,da,cs,fa,J,Ga,zs,Qa,Va,ba,is,ja,T,Xa,Ps,Za,se,Ds,ae,ee,As,te,ne,_a,Y,G,Fs,hs,le,Cs,re,ya,ys,oe,ga,M,Q,Os,ms,pe,Is,ce,wa,V,ie,gs,he,me,va,X,Ns,Z,Ss,ue,de,Bs,fe,be,je,Ls,ws,qs,_e,ye,xa,ss,ge,Hs,we,ve,ka,us,$a,R,as,Ys,ds,xe,Ms,ke,Ea,w,$e,Rs,Ee,Te,Us,ze,Pe,Ks,De,Ae,Ws,Fe,Ce,Js,Oe,Ie,Ta,z,Gs,vs,Qs,Ne,Se,Be,Vs,xs,Xs,Le,qe,He,Zs,ks,sa,Ye,Me,Re,aa,P,ea,Ue,Ke,ta,We,Je,na,Ge,Qe,la,Ve,Xe,za,fs,Pa,es,Da,$s,Ze,Aa;return b=new pa({}),k=new Xt({props:{warning:"&lcub;true}",$$slots:{default:[tn]},$$scope:{ctx:ls}}}),q=new pa({}),rs=new ca({props:{code:"pip install transformers",highlighted:'pip <span class="hljs-keyword">install</span> transformers'}}),cs=new ca({props:{code:`from transformers import BertTokenizerFast
tokenizer = BertTokenizerFast.from_pretrained('bert-base-cased')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)`}}),is=new ca({props:{code:`encoded_dataset = dataset.map(lambda examples: tokenizer(examples['sentence1']), batched=True)
encoded_dataset.column_names
encoded_dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset = dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> examples: tokenizer(examples[<span class="hljs-string">&#x27;sentence1&#x27;</span>]), batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.column_names
[<span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;sentence1&#x27;</span>: <span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>,
<span class="hljs-string">&#x27;sentence2&#x27;</span>: <span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>,
<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
<span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-number">0</span>,
<span class="hljs-string">&#x27;input_ids&#x27;</span>: [  <span class="hljs-number">101</span>,  <span class="hljs-number">7277</span>,  <span class="hljs-number">2180</span>,  <span class="hljs-number">5303</span>,  <span class="hljs-number">4806</span>,  <span class="hljs-number">1117</span>,  <span class="hljs-number">1711</span>,   <span class="hljs-number">117</span>,  <span class="hljs-number">2292</span>, <span class="hljs-number">1119</span>,  <span class="hljs-number">1270</span>,   <span class="hljs-number">107</span>,  <span class="hljs-number">1103</span>,  <span class="hljs-number">7737</span>,   <span class="hljs-number">107</span>,   <span class="hljs-number">117</span>,  <span class="hljs-number">1104</span>,  <span class="hljs-number">9938</span>, <span class="hljs-number">4267</span>, <span class="hljs-number">12223</span>, <span class="hljs-number">21811</span>,  <span class="hljs-number">1117</span>,  <span class="hljs-number">2554</span>,   <span class="hljs-number">119</span>,   <span class="hljs-number">102</span>],
<span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
<span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]
}`}}),hs=new pa({}),ms=new pa({}),us=new ca({props:{code:`import torch
from datasets import load_dataset
from transformers import AutoTokenizer
dataset = load_dataset('glue', 'mrpc', split='train')
tokenizer = AutoTokenizer.from_pretrained('bert-base-cased')
dataset = dataset.map(lambda e: tokenizer(e['sentence1'], truncation=True, padding='max_length'), batched=True)
dataset.set_format(type='torch', columns=['input_ids', 'token_type_ids', 'attention_mask', 'label'])
dataloader = torch.utils.data.DataLoader(dataset, batch_size=32)
next(iter(dataloader))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> e: tokenizer(e[<span class="hljs-string">&#x27;sentence1&#x27;</span>], truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>), batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_format(<span class="hljs-built_in">type</span>=<span class="hljs-string">&#x27;torch&#x27;</span>, columns=[<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>dataloader = torch.utils.data.DataLoader(dataset, batch_size=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(dataloader))
{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
                         ...,
                         [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]]),
<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[  <span class="hljs-number">101</span>,  <span class="hljs-number">7277</span>,  <span class="hljs-number">2180</span>,  ...,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>],
                    ...,
                    [  <span class="hljs-number">101</span>,  <span class="hljs-number">1109</span>,  <span class="hljs-number">4173</span>,  ...,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>]]),
<span class="hljs-string">&#x27;label&#x27;</span>: tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>]),
<span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
                         ...,
                         [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])}`}}),ds=new pa({}),fs=new ca({props:{code:`import tensorflow as tf
from datasets import load_dataset
from transformers import AutoTokenizer
dataset = load_dataset('glue', 'mrpc', split='train')
tokenizer = AutoTokenizer.from_pretrained('bert-base-cased')
dataset = dataset.map(lambda e: tokenizer(e['sentence1'], truncation=True, padding='max_length'), batched=True)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors="tf")
train_dataset = dataset["train"].to_tf_dataset(
  columns=['input_ids', 'token_type_ids', 'attention_mask', 'label'],
  shuffle=True,
  batch_size=16,
  collate_fn=data_collator,
)
model.fit(train_dataset)  # The output tf.data.Dataset is ready for training immediately
next(iter(train_dataset))  # You can also iterate over the dataset manually to get batches`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> e: tokenizer(e[<span class="hljs-string">&#x27;sentence1&#x27;</span>], truncation=<span class="hljs-literal">True</span>, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>), batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = dataset[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>  columns=[<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
<span class="hljs-meta">... </span>  shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>  batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>  collate_fn=data_collator,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(train_dataset)  <span class="hljs-comment"># The output tf.data.Dataset is ready for training immediately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(train_dataset))  <span class="hljs-comment"># You can also iterate over the dataset manually to get batches</span>
{<span class="hljs-string">&#x27;attention_mask&#x27;</span>: &lt;tf.Tensor: shape=(<span class="hljs-number">16</span>, <span class="hljs-number">512</span>), dtype=int64, numpy=
 array([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
      ...,
      [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])&gt;,
 <span class="hljs-string">&#x27;input_ids&#x27;</span>: &lt;tf.Tensor: shape=(<span class="hljs-number">16</span>, <span class="hljs-number">512</span>), dtype=int64, numpy=
  array([[  <span class="hljs-number">101</span>, <span class="hljs-number">11336</span>, <span class="hljs-number">11154</span>, ...,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>],
      ..., 
      [  <span class="hljs-number">101</span>,   <span class="hljs-number">156</span>, <span class="hljs-number">22705</span>, ...,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>,     <span class="hljs-number">0</span>]])&gt;,
 <span class="hljs-string">&#x27;labels&#x27;</span>: &lt;tf.Tensor: shape=(<span class="hljs-number">16</span>,), dtype=int64, numpy=
  array([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>])&gt;,
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: &lt;tf.Tensor: shape=(<span class="hljs-number">16</span>, <span class="hljs-number">512</span>), dtype=int64, numpy=
  array([[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
       ...,
      [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])&gt;
}`}}),es=new Xt({props:{$$slots:{default:[nn]},$$scope:{ctx:ls}}}),{c(){i=t("meta"),_=h(),d=t("h1"),f=t("a"),v=t("span"),A(b.$$.fragment),S=h(),x=t("span"),$=r("Train with \u{1F917} Datasets"),j=h(),y=t("p"),L=r("So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),K=h(),A(k.$$.fragment),g=h(),E=t("h2"),B=t("a"),W=t("span"),A(q.$$.fragment),qa=h(),Ts=t("span"),Ha=r("Tokenize"),ia=h(),js=t("p"),Ya=r("Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),ha=h(),_s=t("p"),Ma=r("The first step is to install the \u{1F917} Transformers library:"),ma=h(),A(rs.$$.fragment),ua=h(),H=t("p"),Ra=r("Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),os=t("a"),Ua=r("BERT tokenizer"),Ka=r(" because you are using the "),ps=t("a"),Wa=r("BERT"),Ja=r(" model:"),da=h(),A(cs.$$.fragment),fa=h(),J=t("p"),Ga=r("Now you can tokenize "),zs=t("code"),Qa=r("sentence1"),Va=r(" field of the dataset:"),ba=h(),A(is.$$.fragment),ja=h(),T=t("p"),Xa=r("The tokenization process creates three new columns: "),Ps=t("code"),Za=r("input_ids"),se=r(", "),Ds=t("code"),ae=r("token_type_ids"),ee=r(", and "),As=t("code"),te=r("attention_mask"),ne=r(". These are the inputs to the model."),_a=h(),Y=t("h2"),G=t("a"),Fs=t("span"),A(hs.$$.fragment),le=h(),Cs=t("span"),re=r("Use in PyTorch or TensorFlow"),ya=h(),ys=t("p"),oe=r("Next, format the dataset into compatible PyTorch or TensorFlow types."),ga=h(),M=t("h3"),Q=t("a"),Os=t("span"),A(ms.$$.fragment),pe=h(),Is=t("span"),ce=r("PyTorch"),wa=h(),V=t("p"),ie=r("If you are using PyTorch, set the format with "),gs=t("a"),he=r("datasets.Dataset.set_format()"),me=r(", which accepts two main arguments:"),va=h(),X=t("ol"),Ns=t("li"),Z=t("p"),Ss=t("code"),ue=r("type"),de=r(" defines the type of column to cast to. For example, "),Bs=t("code"),fe=r("torch"),be=r(" returns PyTorch tensors."),je=h(),Ls=t("li"),ws=t("p"),qs=t("code"),_e=r("columns"),ye=r(" specify which columns should be formatted."),xa=h(),ss=t("p"),ge=r("After you set the format, wrap the dataset with "),Hs=t("code"),we=r("torch.utils.data.DataLoader"),ve=r(". Your dataset is now ready for use in a training loop!"),ka=h(),A(us.$$.fragment),$a=h(),R=t("h3"),as=t("a"),Ys=t("span"),A(ds.$$.fragment),xe=h(),Ms=t("span"),ke=r("TensorFlow"),Ea=h(),w=t("p"),$e=r("If you are using TensorFlow, you can use "),Rs=t("code"),Ee=r("datasets.Dataset.to_tf_dataset()"),Te=r("to wrap the dataset with a "),Us=t("em"),ze=r("tf.data.Dataset"),Pe=r(`, which is natively understood by Keras.
This means a `),Ks=t("em"),De=r("tf.data.Dataset"),Ae=r(" object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ws=t("em"),Fe=r("model.fit()"),Ce=r(`.
`),Js=t("code"),Oe=r("datasets.Dataset.to_tf_dataset()"),Ie=r("accepts several arguments:"),Ta=h(),z=t("ol"),Gs=t("li"),vs=t("p"),Qs=t("code"),Ne=r("columns"),Se=r(" specify which columns should be formatted (includes the inputs and labels)."),Be=h(),Vs=t("li"),xs=t("p"),Xs=t("code"),Le=r("shuffle"),qe=r(" determines whether the dataset should be shuffled."),He=h(),Zs=t("li"),ks=t("p"),sa=t("code"),Ye=r("batch_size"),Me=r(" specifies the batch size."),Re=h(),aa=t("li"),P=t("p"),ea=t("code"),Ue=r("collate_fn"),Ke=r(" specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=t("code"),We=r("DataCollator"),Je=r(", make sure you set "),na=t("code"),Ge=r('return_tensors="tf"'),Qe=r(" when you initialize it to return "),la=t("code"),Ve=r("tf.Tensor"),Xe=r(" outputs."),za=h(),A(fs.$$.fragment),Pa=h(),A(es.$$.fragment),Da=h(),$s=t("p"),Ze=r("Your dataset is now ready for use in a training loop!"),this.h()},l(s){const p=en('[data-svelte="svelte-1phssyn"]',document.head);i=n(p,"META",{name:!0,content:!0}),p.forEach(e),_=m(s),d=n(s,"H1",{class:!0});var bs=l(d);f=n(bs,"A",{id:!0,class:!0,href:!0});var ra=l(f);v=n(ra,"SPAN",{});var nt=l(v);F(b.$$.fragment,nt),nt.forEach(e),ra.forEach(e),S=m(bs),x=n(bs,"SPAN",{});var lt=l(x);$=o(lt,"Train with \u{1F917} Datasets"),lt.forEach(e),bs.forEach(e),j=m(s),y=n(s,"P",{});var rt=l(y);L=o(rt,"So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),rt.forEach(e),K=m(s),F(k.$$.fragment,s),g=m(s),E=n(s,"H2",{class:!0});var Fa=l(E);B=n(Fa,"A",{id:!0,class:!0,href:!0});var ot=l(B);W=n(ot,"SPAN",{});var pt=l(W);F(q.$$.fragment,pt),pt.forEach(e),ot.forEach(e),qa=m(Fa),Ts=n(Fa,"SPAN",{});var ct=l(Ts);Ha=o(ct,"Tokenize"),ct.forEach(e),Fa.forEach(e),ia=m(s),js=n(s,"P",{});var it=l(js);Ya=o(it,"Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),it.forEach(e),ha=m(s),_s=n(s,"P",{});var ht=l(_s);Ma=o(ht,"The first step is to install the \u{1F917} Transformers library:"),ht.forEach(e),ma=m(s),F(rs.$$.fragment,s),ua=m(s),H=n(s,"P",{});var Es=l(H);Ra=o(Es,"Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),os=n(Es,"A",{href:!0,rel:!0});var mt=l(os);Ua=o(mt,"BERT tokenizer"),mt.forEach(e),Ka=o(Es," because you are using the "),ps=n(Es,"A",{href:!0,rel:!0});var ut=l(ps);Wa=o(ut,"BERT"),ut.forEach(e),Ja=o(Es," model:"),Es.forEach(e),da=m(s),F(cs.$$.fragment,s),fa=m(s),J=n(s,"P",{});var Ca=l(J);Ga=o(Ca,"Now you can tokenize "),zs=n(Ca,"CODE",{});var dt=l(zs);Qa=o(dt,"sentence1"),dt.forEach(e),Va=o(Ca," field of the dataset:"),Ca.forEach(e),ba=m(s),F(is.$$.fragment,s),ja=m(s),T=n(s,"P",{});var ts=l(T);Xa=o(ts,"The tokenization process creates three new columns: "),Ps=n(ts,"CODE",{});var ft=l(Ps);Za=o(ft,"input_ids"),ft.forEach(e),se=o(ts,", "),Ds=n(ts,"CODE",{});var bt=l(Ds);ae=o(bt,"token_type_ids"),bt.forEach(e),ee=o(ts,", and "),As=n(ts,"CODE",{});var jt=l(As);te=o(jt,"attention_mask"),jt.forEach(e),ne=o(ts,". These are the inputs to the model."),ts.forEach(e),_a=m(s),Y=n(s,"H2",{class:!0});var Oa=l(Y);G=n(Oa,"A",{id:!0,class:!0,href:!0});var _t=l(G);Fs=n(_t,"SPAN",{});var yt=l(Fs);F(hs.$$.fragment,yt),yt.forEach(e),_t.forEach(e),le=m(Oa),Cs=n(Oa,"SPAN",{});var gt=l(Cs);re=o(gt,"Use in PyTorch or TensorFlow"),gt.forEach(e),Oa.forEach(e),ya=m(s),ys=n(s,"P",{});var wt=l(ys);oe=o(wt,"Next, format the dataset into compatible PyTorch or TensorFlow types."),wt.forEach(e),ga=m(s),M=n(s,"H3",{class:!0});var Ia=l(M);Q=n(Ia,"A",{id:!0,class:!0,href:!0});var vt=l(Q);Os=n(vt,"SPAN",{});var xt=l(Os);F(ms.$$.fragment,xt),xt.forEach(e),vt.forEach(e),pe=m(Ia),Is=n(Ia,"SPAN",{});var kt=l(Is);ce=o(kt,"PyTorch"),kt.forEach(e),Ia.forEach(e),wa=m(s),V=n(s,"P",{});var Na=l(V);ie=o(Na,"If you are using PyTorch, set the format with "),gs=n(Na,"A",{href:!0});var $t=l(gs);he=o($t,"datasets.Dataset.set_format()"),$t.forEach(e),me=o(Na,", which accepts two main arguments:"),Na.forEach(e),va=m(s),X=n(s,"OL",{});var Sa=l(X);Ns=n(Sa,"LI",{});var Et=l(Ns);Z=n(Et,"P",{});var oa=l(Z);Ss=n(oa,"CODE",{});var Tt=l(Ss);ue=o(Tt,"type"),Tt.forEach(e),de=o(oa," defines the type of column to cast to. For example, "),Bs=n(oa,"CODE",{});var zt=l(Bs);fe=o(zt,"torch"),zt.forEach(e),be=o(oa," returns PyTorch tensors."),oa.forEach(e),Et.forEach(e),je=m(Sa),Ls=n(Sa,"LI",{});var Pt=l(Ls);ws=n(Pt,"P",{});var st=l(ws);qs=n(st,"CODE",{});var Dt=l(qs);_e=o(Dt,"columns"),Dt.forEach(e),ye=o(st," specify which columns should be formatted."),st.forEach(e),Pt.forEach(e),Sa.forEach(e),xa=m(s),ss=n(s,"P",{});var Ba=l(ss);ge=o(Ba,"After you set the format, wrap the dataset with "),Hs=n(Ba,"CODE",{});var At=l(Hs);we=o(At,"torch.utils.data.DataLoader"),At.forEach(e),ve=o(Ba,". Your dataset is now ready for use in a training loop!"),Ba.forEach(e),ka=m(s),F(us.$$.fragment,s),$a=m(s),R=n(s,"H3",{class:!0});var La=l(R);as=n(La,"A",{id:!0,class:!0,href:!0});var Ft=l(as);Ys=n(Ft,"SPAN",{});var Ct=l(Ys);F(ds.$$.fragment,Ct),Ct.forEach(e),Ft.forEach(e),xe=m(La),Ms=n(La,"SPAN",{});var Ot=l(Ms);ke=o(Ot,"TensorFlow"),Ot.forEach(e),La.forEach(e),Ea=m(s),w=n(s,"P",{});var D=l(w);$e=o(D,"If you are using TensorFlow, you can use "),Rs=n(D,"CODE",{});var It=l(Rs);Ee=o(It,"datasets.Dataset.to_tf_dataset()"),It.forEach(e),Te=o(D,"to wrap the dataset with a "),Us=n(D,"EM",{});var Nt=l(Us);ze=o(Nt,"tf.data.Dataset"),Nt.forEach(e),Pe=o(D,`, which is natively understood by Keras.
This means a `),Ks=n(D,"EM",{});var St=l(Ks);De=o(St,"tf.data.Dataset"),St.forEach(e),Ae=o(D," object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ws=n(D,"EM",{});var Bt=l(Ws);Fe=o(Bt,"model.fit()"),Bt.forEach(e),Ce=o(D,`.
`),Js=n(D,"CODE",{});var Lt=l(Js);Oe=o(Lt,"datasets.Dataset.to_tf_dataset()"),Lt.forEach(e),Ie=o(D,"accepts several arguments:"),D.forEach(e),Ta=m(s),z=n(s,"OL",{});var ns=l(z);Gs=n(ns,"LI",{});var qt=l(Gs);vs=n(qt,"P",{});var at=l(vs);Qs=n(at,"CODE",{});var Ht=l(Qs);Ne=o(Ht,"columns"),Ht.forEach(e),Se=o(at," specify which columns should be formatted (includes the inputs and labels)."),at.forEach(e),qt.forEach(e),Be=m(ns),Vs=n(ns,"LI",{});var Yt=l(Vs);xs=n(Yt,"P",{});var et=l(xs);Xs=n(et,"CODE",{});var Mt=l(Xs);Le=o(Mt,"shuffle"),Mt.forEach(e),qe=o(et," determines whether the dataset should be shuffled."),et.forEach(e),Yt.forEach(e),He=m(ns),Zs=n(ns,"LI",{});var Rt=l(Zs);ks=n(Rt,"P",{});var tt=l(ks);sa=n(tt,"CODE",{});var Ut=l(sa);Ye=o(Ut,"batch_size"),Ut.forEach(e),Me=o(tt," specifies the batch size."),tt.forEach(e),Rt.forEach(e),Re=m(ns),aa=n(ns,"LI",{});var Kt=l(aa);P=n(Kt,"P",{});var U=l(P);ea=n(U,"CODE",{});var Wt=l(ea);Ue=o(Wt,"collate_fn"),Wt.forEach(e),Ke=o(U," specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=n(U,"CODE",{});var Jt=l(ta);We=o(Jt,"DataCollator"),Jt.forEach(e),Je=o(U,", make sure you set "),na=n(U,"CODE",{});var Gt=l(na);Ge=o(Gt,'return_tensors="tf"'),Gt.forEach(e),Qe=o(U," when you initialize it to return "),la=n(U,"CODE",{});var Qt=l(la);Ve=o(Qt,"tf.Tensor"),Qt.forEach(e),Xe=o(U," outputs."),U.forEach(e),Kt.forEach(e),ns.forEach(e),za=m(s),F(fs.$$.fragment,s),Pa=m(s),F(es.$$.fragment,s),Da=m(s),$s=n(s,"P",{});var Vt=l($s);Ze=o(Vt,"Your dataset is now ready for use in a training loop!"),Vt.forEach(e),this.h()},h(){u(i,"name","hf:doc:metadata"),u(i,"content",JSON.stringify(rn)),u(f,"id","train-with-datasets"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#train-with-datasets"),u(d,"class","relative group"),u(B,"id","tokenize"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#tokenize"),u(E,"class","relative group"),u(os,"href","https://huggingface.co/transformers/model_doc/bert#berttokenizerfast"),u(os,"rel","nofollow"),u(ps,"href","https://huggingface.co/bert-base-cased"),u(ps,"rel","nofollow"),u(G,"id","use-in-pytorch-or-tensorflow"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#use-in-pytorch-or-tensorflow"),u(Y,"class","relative group"),u(Q,"id","pytorch"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#pytorch"),u(M,"class","relative group"),u(gs,"href","/docs/datasets/pr_3915/en/package_reference/main_classes#datasets.Dataset.set_format"),u(as,"id","tensorflow"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#tensorflow"),u(R,"class","relative group")},m(s,p){a(document.head,i),c(s,_,p),c(s,d,p),a(d,f),a(f,v),C(b,v,null),a(d,S),a(d,x),a(x,$),c(s,j,p),c(s,y,p),a(y,L),c(s,K,p),C(k,s,p),c(s,g,p),c(s,E,p),a(E,B),a(B,W),C(q,W,null),a(E,qa),a(E,Ts),a(Ts,Ha),c(s,ia,p),c(s,js,p),a(js,Ya),c(s,ha,p),c(s,_s,p),a(_s,Ma),c(s,ma,p),C(rs,s,p),c(s,ua,p),c(s,H,p),a(H,Ra),a(H,os),a(os,Ua),a(H,Ka),a(H,ps),a(ps,Wa),a(H,Ja),c(s,da,p),C(cs,s,p),c(s,fa,p),c(s,J,p),a(J,Ga),a(J,zs),a(zs,Qa),a(J,Va),c(s,ba,p),C(is,s,p),c(s,ja,p),c(s,T,p),a(T,Xa),a(T,Ps),a(Ps,Za),a(T,se),a(T,Ds),a(Ds,ae),a(T,ee),a(T,As),a(As,te),a(T,ne),c(s,_a,p),c(s,Y,p),a(Y,G),a(G,Fs),C(hs,Fs,null),a(Y,le),a(Y,Cs),a(Cs,re),c(s,ya,p),c(s,ys,p),a(ys,oe),c(s,ga,p),c(s,M,p),a(M,Q),a(Q,Os),C(ms,Os,null),a(M,pe),a(M,Is),a(Is,ce),c(s,wa,p),c(s,V,p),a(V,ie),a(V,gs),a(gs,he),a(V,me),c(s,va,p),c(s,X,p),a(X,Ns),a(Ns,Z),a(Z,Ss),a(Ss,ue),a(Z,de),a(Z,Bs),a(Bs,fe),a(Z,be),a(X,je),a(X,Ls),a(Ls,ws),a(ws,qs),a(qs,_e),a(ws,ye),c(s,xa,p),c(s,ss,p),a(ss,ge),a(ss,Hs),a(Hs,we),a(ss,ve),c(s,ka,p),C(us,s,p),c(s,$a,p),c(s,R,p),a(R,as),a(as,Ys),C(ds,Ys,null),a(R,xe),a(R,Ms),a(Ms,ke),c(s,Ea,p),c(s,w,p),a(w,$e),a(w,Rs),a(Rs,Ee),a(w,Te),a(w,Us),a(Us,ze),a(w,Pe),a(w,Ks),a(Ks,De),a(w,Ae),a(w,Ws),a(Ws,Fe),a(w,Ce),a(w,Js),a(Js,Oe),a(w,Ie),c(s,Ta,p),c(s,z,p),a(z,Gs),a(Gs,vs),a(vs,Qs),a(Qs,Ne),a(vs,Se),a(z,Be),a(z,Vs),a(Vs,xs),a(xs,Xs),a(Xs,Le),a(xs,qe),a(z,He),a(z,Zs),a(Zs,ks),a(ks,sa),a(sa,Ye),a(ks,Me),a(z,Re),a(z,aa),a(aa,P),a(P,ea),a(ea,Ue),a(P,Ke),a(P,ta),a(ta,We),a(P,Je),a(P,na),a(na,Ge),a(P,Qe),a(P,la),a(la,Ve),a(P,Xe),c(s,za,p),C(fs,s,p),c(s,Pa,p),C(es,s,p),c(s,Da,p),c(s,$s,p),a($s,Ze),Aa=!0},p(s,[p]){const bs={};p&2&&(bs.$$scope={dirty:p,ctx:s}),k.$set(bs);const ra={};p&2&&(ra.$$scope={dirty:p,ctx:s}),es.$set(ra)},i(s){Aa||(O(b.$$.fragment,s),O(k.$$.fragment,s),O(q.$$.fragment,s),O(rs.$$.fragment,s),O(cs.$$.fragment,s),O(is.$$.fragment,s),O(hs.$$.fragment,s),O(ms.$$.fragment,s),O(us.$$.fragment,s),O(ds.$$.fragment,s),O(fs.$$.fragment,s),O(es.$$.fragment,s),Aa=!0)},o(s){I(b.$$.fragment,s),I(k.$$.fragment,s),I(q.$$.fragment,s),I(rs.$$.fragment,s),I(cs.$$.fragment,s),I(is.$$.fragment,s),I(hs.$$.fragment,s),I(ms.$$.fragment,s),I(us.$$.fragment,s),I(ds.$$.fragment,s),I(fs.$$.fragment,s),I(es.$$.fragment,s),Aa=!1},d(s){e(i),s&&e(_),s&&e(d),N(b),s&&e(j),s&&e(y),s&&e(K),N(k,s),s&&e(g),s&&e(E),N(q),s&&e(ia),s&&e(js),s&&e(ha),s&&e(_s),s&&e(ma),N(rs,s),s&&e(ua),s&&e(H),s&&e(da),N(cs,s),s&&e(fa),s&&e(J),s&&e(ba),N(is,s),s&&e(ja),s&&e(T),s&&e(_a),s&&e(Y),N(hs),s&&e(ya),s&&e(ys),s&&e(ga),s&&e(M),N(ms),s&&e(wa),s&&e(V),s&&e(va),s&&e(X),s&&e(xa),s&&e(ss),s&&e(ka),N(us,s),s&&e($a),s&&e(R),N(ds),s&&e(Ea),s&&e(w),s&&e(Ta),s&&e(z),s&&e(za),N(fs,s),s&&e(Pa),N(es,s),s&&e(Da),s&&e($s)}}}const rn={local:"train-with-datasets",sections:[{local:"tokenize",title:"Tokenize"},{local:"use-in-pytorch-or-tensorflow",sections:[{local:"pytorch",title:"PyTorch"},{local:"tensorflow",title:"TensorFlow"}],title:"Use in PyTorch or TensorFlow"}],title:"Train with \u{1F917} Datasets"};function on(ls,i,_){let{fw:d}=i;return ls.$$set=f=>{"fw"in f&&_(0,d=f.fw)},[d]}class un extends Zt{constructor(i){super();sn(this,i,on,ln,an,{fw:0})}}export{un as default,rn as metadata};
