import{S as Zt,i as sn,s as an,e as t,k as h,w as A,t as r,M as en,c as n,d as e,m,a as l,x as F,h as o,b as u,F as a,g as c,y as C,q as O,o as N,B as I}from"../chunks/vendor-aa873a46.js";import{T as Xt}from"../chunks/Tip-f7f252ab.js";import{I as pa}from"../chunks/IconCopyLink-d0ca3106.js";import{C as ca}from"../chunks/CodeBlock-1f14baf3.js";function tn(ls){let i,_,d,f,v,b,S,x;return{c(){i=t("p"),_=r("Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=t("a"),f=r("guide"),v=r(" from the \u{1F917} Transformers library. Then come back and read our "),b=t("a"),S=r("How-to Process"),x=r(" guide to see all the different methods for processing your dataset."),this.h()},l($){i=n($,"P",{});var j=l(i);_=o(j,"Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=n(j,"A",{href:!0,rel:!0});var g=l(d);f=o(g,"guide"),g.forEach(e),v=o(j," from the \u{1F917} Transformers library. Then come back and read our "),b=n(j,"A",{href:!0});var L=l(b);S=o(L,"How-to Process"),L.forEach(e),x=o(j," guide to see all the different methods for processing your dataset."),j.forEach(e),this.h()},h(){u(d,"href","https://huggingface.co/transformers/preprocessing#"),u(d,"rel","nofollow"),u(b,"href","./process")},m($,j){c($,i,j),a(i,_),a(i,d),a(d,f),a(i,v),a(i,b),a(b,S),a(i,x)},d($){$&&e(i)}}}function nn(ls){let i,_,d,f,v,b,S,x,$,j,g,L,K;return{c(){i=t("p"),_=t("code"),d=r("datasets.Dataset.to_tf_dataset()"),f=r("is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),v=t("code"),b=r("tf.data.Dataset"),S=r(" and would rather the dataset emit "),x=t("code"),$=r("tf.Tensor"),j=r(" objects, take a look at the "),g=t("a"),L=r("format"),K=r(" section instead!"),this.h()},l(k){i=n(k,"P",{});var y=l(i);_=n(y,"CODE",{});var E=l(_);d=o(E,"datasets.Dataset.to_tf_dataset()"),E.forEach(e),f=o(y,"is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),v=n(y,"CODE",{});var B=l(v);b=o(B,"tf.data.Dataset"),B.forEach(e),S=o(y," and would rather the dataset emit "),x=n(y,"CODE",{});var M=l(x);$=o(M,"tf.Tensor"),M.forEach(e),j=o(y," objects, take a look at the "),g=n(y,"A",{href:!0});var q=l(g);L=o(q,"format"),q.forEach(e),K=o(y," section instead!"),y.forEach(e),this.h()},h(){u(g,"href","./process#format")},m(k,y){c(k,i,y),a(i,_),a(_,d),a(i,f),a(i,v),a(v,b),a(i,S),a(i,x),a(x,$),a(i,j),a(i,g),a(g,L),a(i,K)},d(k){k&&e(i)}}}function ln(ls){let i,_,d,f,v,b,S,x,$,j,g,L,K,k,y,E,B,M,q,qa,Ts,Ha,ia,js,Ra,ha,_s,Ya,ma,rs,ua,H,Ua,os,Ga,Ka,ps,Ma,Wa,da,cs,fa,W,Ja,zs,Qa,Va,ba,is,ja,T,Xa,Ps,Za,se,Ds,ae,ee,As,te,ne,_a,R,J,Fs,hs,le,Cs,re,ga,gs,oe,ya,Y,Q,Os,ms,pe,Ns,ce,wa,V,ie,ys,he,me,va,X,Is,Z,Ss,ue,de,Bs,fe,be,je,Ls,ws,qs,_e,ge,xa,ss,ye,Hs,we,ve,ka,us,$a,U,as,Rs,ds,xe,Ys,ke,Ea,w,$e,Us,Ee,Te,Gs,ze,Pe,Ks,De,Ae,Ms,Fe,Ce,Ws,Oe,Ne,Ta,z,Js,vs,Qs,Ie,Se,Be,Vs,xs,Xs,Le,qe,He,Zs,ks,sa,Re,Ye,Ue,aa,P,ea,Ge,Ke,ta,Me,We,na,Je,Qe,la,Ve,Xe,za,fs,Pa,es,Da,$s,Ze,Aa;return b=new pa({}),k=new Xt({props:{warning:"&lcub;true}",$$slots:{default:[tn]},$$scope:{ctx:ls}}}),q=new pa({}),rs=new ca({props:{code:"pip install transformers",highlighted:'pip <span class="hljs-keyword">install</span> transformers'}}),cs=new ca({props:{code:`from transformers import BertTokenizerFast
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
}`}}),es=new Xt({props:{$$slots:{default:[nn]},$$scope:{ctx:ls}}}),{c(){i=t("meta"),_=h(),d=t("h1"),f=t("a"),v=t("span"),A(b.$$.fragment),S=h(),x=t("span"),$=r("Train with \u{1F917} Datasets"),j=h(),g=t("p"),L=r("So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),K=h(),A(k.$$.fragment),y=h(),E=t("h2"),B=t("a"),M=t("span"),A(q.$$.fragment),qa=h(),Ts=t("span"),Ha=r("Tokenize"),ia=h(),js=t("p"),Ra=r("Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),ha=h(),_s=t("p"),Ya=r("The first step is to install the \u{1F917} Transformers library:"),ma=h(),A(rs.$$.fragment),ua=h(),H=t("p"),Ua=r("Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),os=t("a"),Ga=r("BERT tokenizer"),Ka=r(" because you are using the "),ps=t("a"),Ma=r("BERT"),Wa=r(" model:"),da=h(),A(cs.$$.fragment),fa=h(),W=t("p"),Ja=r("Now you can tokenize "),zs=t("code"),Qa=r("sentence1"),Va=r(" field of the dataset:"),ba=h(),A(is.$$.fragment),ja=h(),T=t("p"),Xa=r("The tokenization process creates three new columns: "),Ps=t("code"),Za=r("input_ids"),se=r(", "),Ds=t("code"),ae=r("token_type_ids"),ee=r(", and "),As=t("code"),te=r("attention_mask"),ne=r(". These are the inputs to the model."),_a=h(),R=t("h2"),J=t("a"),Fs=t("span"),A(hs.$$.fragment),le=h(),Cs=t("span"),re=r("Use in PyTorch or TensorFlow"),ga=h(),gs=t("p"),oe=r("Next, format the dataset into compatible PyTorch or TensorFlow types."),ya=h(),Y=t("h3"),Q=t("a"),Os=t("span"),A(ms.$$.fragment),pe=h(),Ns=t("span"),ce=r("PyTorch"),wa=h(),V=t("p"),ie=r("If you are using PyTorch, set the format with "),ys=t("a"),he=r("datasets.Dataset.set_format()"),me=r(", which accepts two main arguments:"),va=h(),X=t("ol"),Is=t("li"),Z=t("p"),Ss=t("code"),ue=r("type"),de=r(" defines the type of column to cast to. For example, "),Bs=t("code"),fe=r("torch"),be=r(" returns PyTorch tensors."),je=h(),Ls=t("li"),ws=t("p"),qs=t("code"),_e=r("columns"),ge=r(" specify which columns should be formatted."),xa=h(),ss=t("p"),ye=r("After you set the format, wrap the dataset with "),Hs=t("code"),we=r("torch.utils.data.DataLoader"),ve=r(". Your dataset is now ready for use in a training loop!"),ka=h(),A(us.$$.fragment),$a=h(),U=t("h3"),as=t("a"),Rs=t("span"),A(ds.$$.fragment),xe=h(),Ys=t("span"),ke=r("TensorFlow"),Ea=h(),w=t("p"),$e=r("If you are using TensorFlow, you can use "),Us=t("code"),Ee=r("datasets.Dataset.to_tf_dataset()"),Te=r("to wrap the dataset with a "),Gs=t("strong"),ze=r("tf.data.Dataset"),Pe=r(`, which is natively understood by Keras.
This means a `),Ks=t("strong"),De=r("tf.data.Dataset"),Ae=r(" object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ms=t("strong"),Fe=r("model.fit()"),Ce=r(`.
`),Ws=t("code"),Oe=r("datasets.Dataset.to_tf_dataset()"),Ne=r("accepts several arguments:"),Ta=h(),z=t("ol"),Js=t("li"),vs=t("p"),Qs=t("code"),Ie=r("columns"),Se=r(" specify which columns should be formatted (includes the inputs and labels)."),Be=h(),Vs=t("li"),xs=t("p"),Xs=t("code"),Le=r("shuffle"),qe=r(" determines whether the dataset should be shuffled."),He=h(),Zs=t("li"),ks=t("p"),sa=t("code"),Re=r("batch_size"),Ye=r(" specifies the batch size."),Ue=h(),aa=t("li"),P=t("p"),ea=t("code"),Ge=r("collate_fn"),Ke=r(" specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=t("code"),Me=r("DataCollator"),We=r(", make sure you set "),na=t("code"),Je=r('return_tensors="tf"'),Qe=r(" when you initialize it to return "),la=t("code"),Ve=r("tf.Tensor"),Xe=r(" outputs."),za=h(),A(fs.$$.fragment),Pa=h(),A(es.$$.fragment),Da=h(),$s=t("p"),Ze=r("Your dataset is now ready for use in a training loop!"),this.h()},l(s){const p=en('[data-svelte="svelte-1phssyn"]',document.head);i=n(p,"META",{name:!0,content:!0}),p.forEach(e),_=m(s),d=n(s,"H1",{class:!0});var bs=l(d);f=n(bs,"A",{id:!0,class:!0,href:!0});var ra=l(f);v=n(ra,"SPAN",{});var nt=l(v);F(b.$$.fragment,nt),nt.forEach(e),ra.forEach(e),S=m(bs),x=n(bs,"SPAN",{});var lt=l(x);$=o(lt,"Train with \u{1F917} Datasets"),lt.forEach(e),bs.forEach(e),j=m(s),g=n(s,"P",{});var rt=l(g);L=o(rt,"So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),rt.forEach(e),K=m(s),F(k.$$.fragment,s),y=m(s),E=n(s,"H2",{class:!0});var Fa=l(E);B=n(Fa,"A",{id:!0,class:!0,href:!0});var ot=l(B);M=n(ot,"SPAN",{});var pt=l(M);F(q.$$.fragment,pt),pt.forEach(e),ot.forEach(e),qa=m(Fa),Ts=n(Fa,"SPAN",{});var ct=l(Ts);Ha=o(ct,"Tokenize"),ct.forEach(e),Fa.forEach(e),ia=m(s),js=n(s,"P",{});var it=l(js);Ra=o(it,"Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),it.forEach(e),ha=m(s),_s=n(s,"P",{});var ht=l(_s);Ya=o(ht,"The first step is to install the \u{1F917} Transformers library:"),ht.forEach(e),ma=m(s),F(rs.$$.fragment,s),ua=m(s),H=n(s,"P",{});var Es=l(H);Ua=o(Es,"Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),os=n(Es,"A",{href:!0,rel:!0});var mt=l(os);Ga=o(mt,"BERT tokenizer"),mt.forEach(e),Ka=o(Es," because you are using the "),ps=n(Es,"A",{href:!0,rel:!0});var ut=l(ps);Ma=o(ut,"BERT"),ut.forEach(e),Wa=o(Es," model:"),Es.forEach(e),da=m(s),F(cs.$$.fragment,s),fa=m(s),W=n(s,"P",{});var Ca=l(W);Ja=o(Ca,"Now you can tokenize "),zs=n(Ca,"CODE",{});var dt=l(zs);Qa=o(dt,"sentence1"),dt.forEach(e),Va=o(Ca," field of the dataset:"),Ca.forEach(e),ba=m(s),F(is.$$.fragment,s),ja=m(s),T=n(s,"P",{});var ts=l(T);Xa=o(ts,"The tokenization process creates three new columns: "),Ps=n(ts,"CODE",{});var ft=l(Ps);Za=o(ft,"input_ids"),ft.forEach(e),se=o(ts,", "),Ds=n(ts,"CODE",{});var bt=l(Ds);ae=o(bt,"token_type_ids"),bt.forEach(e),ee=o(ts,", and "),As=n(ts,"CODE",{});var jt=l(As);te=o(jt,"attention_mask"),jt.forEach(e),ne=o(ts,". These are the inputs to the model."),ts.forEach(e),_a=m(s),R=n(s,"H2",{class:!0});var Oa=l(R);J=n(Oa,"A",{id:!0,class:!0,href:!0});var _t=l(J);Fs=n(_t,"SPAN",{});var gt=l(Fs);F(hs.$$.fragment,gt),gt.forEach(e),_t.forEach(e),le=m(Oa),Cs=n(Oa,"SPAN",{});var yt=l(Cs);re=o(yt,"Use in PyTorch or TensorFlow"),yt.forEach(e),Oa.forEach(e),ga=m(s),gs=n(s,"P",{});var wt=l(gs);oe=o(wt,"Next, format the dataset into compatible PyTorch or TensorFlow types."),wt.forEach(e),ya=m(s),Y=n(s,"H3",{class:!0});var Na=l(Y);Q=n(Na,"A",{id:!0,class:!0,href:!0});var vt=l(Q);Os=n(vt,"SPAN",{});var xt=l(Os);F(ms.$$.fragment,xt),xt.forEach(e),vt.forEach(e),pe=m(Na),Ns=n(Na,"SPAN",{});var kt=l(Ns);ce=o(kt,"PyTorch"),kt.forEach(e),Na.forEach(e),wa=m(s),V=n(s,"P",{});var Ia=l(V);ie=o(Ia,"If you are using PyTorch, set the format with "),ys=n(Ia,"A",{href:!0});var $t=l(ys);he=o($t,"datasets.Dataset.set_format()"),$t.forEach(e),me=o(Ia,", which accepts two main arguments:"),Ia.forEach(e),va=m(s),X=n(s,"OL",{});var Sa=l(X);Is=n(Sa,"LI",{});var Et=l(Is);Z=n(Et,"P",{});var oa=l(Z);Ss=n(oa,"CODE",{});var Tt=l(Ss);ue=o(Tt,"type"),Tt.forEach(e),de=o(oa," defines the type of column to cast to. For example, "),Bs=n(oa,"CODE",{});var zt=l(Bs);fe=o(zt,"torch"),zt.forEach(e),be=o(oa," returns PyTorch tensors."),oa.forEach(e),Et.forEach(e),je=m(Sa),Ls=n(Sa,"LI",{});var Pt=l(Ls);ws=n(Pt,"P",{});var st=l(ws);qs=n(st,"CODE",{});var Dt=l(qs);_e=o(Dt,"columns"),Dt.forEach(e),ge=o(st," specify which columns should be formatted."),st.forEach(e),Pt.forEach(e),Sa.forEach(e),xa=m(s),ss=n(s,"P",{});var Ba=l(ss);ye=o(Ba,"After you set the format, wrap the dataset with "),Hs=n(Ba,"CODE",{});var At=l(Hs);we=o(At,"torch.utils.data.DataLoader"),At.forEach(e),ve=o(Ba,". Your dataset is now ready for use in a training loop!"),Ba.forEach(e),ka=m(s),F(us.$$.fragment,s),$a=m(s),U=n(s,"H3",{class:!0});var La=l(U);as=n(La,"A",{id:!0,class:!0,href:!0});var Ft=l(as);Rs=n(Ft,"SPAN",{});var Ct=l(Rs);F(ds.$$.fragment,Ct),Ct.forEach(e),Ft.forEach(e),xe=m(La),Ys=n(La,"SPAN",{});var Ot=l(Ys);ke=o(Ot,"TensorFlow"),Ot.forEach(e),La.forEach(e),Ea=m(s),w=n(s,"P",{});var D=l(w);$e=o(D,"If you are using TensorFlow, you can use "),Us=n(D,"CODE",{});var Nt=l(Us);Ee=o(Nt,"datasets.Dataset.to_tf_dataset()"),Nt.forEach(e),Te=o(D,"to wrap the dataset with a "),Gs=n(D,"STRONG",{});var It=l(Gs);ze=o(It,"tf.data.Dataset"),It.forEach(e),Pe=o(D,`, which is natively understood by Keras.
This means a `),Ks=n(D,"STRONG",{});var St=l(Ks);De=o(St,"tf.data.Dataset"),St.forEach(e),Ae=o(D," object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ms=n(D,"STRONG",{});var Bt=l(Ms);Fe=o(Bt,"model.fit()"),Bt.forEach(e),Ce=o(D,`.
`),Ws=n(D,"CODE",{});var Lt=l(Ws);Oe=o(Lt,"datasets.Dataset.to_tf_dataset()"),Lt.forEach(e),Ne=o(D,"accepts several arguments:"),D.forEach(e),Ta=m(s),z=n(s,"OL",{});var ns=l(z);Js=n(ns,"LI",{});var qt=l(Js);vs=n(qt,"P",{});var at=l(vs);Qs=n(at,"CODE",{});var Ht=l(Qs);Ie=o(Ht,"columns"),Ht.forEach(e),Se=o(at," specify which columns should be formatted (includes the inputs and labels)."),at.forEach(e),qt.forEach(e),Be=m(ns),Vs=n(ns,"LI",{});var Rt=l(Vs);xs=n(Rt,"P",{});var et=l(xs);Xs=n(et,"CODE",{});var Yt=l(Xs);Le=o(Yt,"shuffle"),Yt.forEach(e),qe=o(et," determines whether the dataset should be shuffled."),et.forEach(e),Rt.forEach(e),He=m(ns),Zs=n(ns,"LI",{});var Ut=l(Zs);ks=n(Ut,"P",{});var tt=l(ks);sa=n(tt,"CODE",{});var Gt=l(sa);Re=o(Gt,"batch_size"),Gt.forEach(e),Ye=o(tt," specifies the batch size."),tt.forEach(e),Ut.forEach(e),Ue=m(ns),aa=n(ns,"LI",{});var Kt=l(aa);P=n(Kt,"P",{});var G=l(P);ea=n(G,"CODE",{});var Mt=l(ea);Ge=o(Mt,"collate_fn"),Mt.forEach(e),Ke=o(G," specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=n(G,"CODE",{});var Wt=l(ta);Me=o(Wt,"DataCollator"),Wt.forEach(e),We=o(G,", make sure you set "),na=n(G,"CODE",{});var Jt=l(na);Je=o(Jt,'return_tensors="tf"'),Jt.forEach(e),Qe=o(G," when you initialize it to return "),la=n(G,"CODE",{});var Qt=l(la);Ve=o(Qt,"tf.Tensor"),Qt.forEach(e),Xe=o(G," outputs."),G.forEach(e),Kt.forEach(e),ns.forEach(e),za=m(s),F(fs.$$.fragment,s),Pa=m(s),F(es.$$.fragment,s),Da=m(s),$s=n(s,"P",{});var Vt=l($s);Ze=o(Vt,"Your dataset is now ready for use in a training loop!"),Vt.forEach(e),this.h()},h(){u(i,"name","hf:doc:metadata"),u(i,"content",JSON.stringify(rn)),u(f,"id","train-with-datasets"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#train-with-datasets"),u(d,"class","relative group"),u(B,"id","tokenize"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#tokenize"),u(E,"class","relative group"),u(os,"href","https://huggingface.co/transformers/model_doc/bert#berttokenizerfast"),u(os,"rel","nofollow"),u(ps,"href","https://huggingface.co/bert-base-cased"),u(ps,"rel","nofollow"),u(J,"id","use-in-pytorch-or-tensorflow"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#use-in-pytorch-or-tensorflow"),u(R,"class","relative group"),u(Q,"id","pytorch"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#pytorch"),u(Y,"class","relative group"),u(ys,"href","/docs/datasets/pr_2/en/package_reference/main_classes#datasets.Dataset.set_format"),u(as,"id","tensorflow"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#tensorflow"),u(U,"class","relative group")},m(s,p){a(document.head,i),c(s,_,p),c(s,d,p),a(d,f),a(f,v),C(b,v,null),a(d,S),a(d,x),a(x,$),c(s,j,p),c(s,g,p),a(g,L),c(s,K,p),C(k,s,p),c(s,y,p),c(s,E,p),a(E,B),a(B,M),C(q,M,null),a(E,qa),a(E,Ts),a(Ts,Ha),c(s,ia,p),c(s,js,p),a(js,Ra),c(s,ha,p),c(s,_s,p),a(_s,Ya),c(s,ma,p),C(rs,s,p),c(s,ua,p),c(s,H,p),a(H,Ua),a(H,os),a(os,Ga),a(H,Ka),a(H,ps),a(ps,Ma),a(H,Wa),c(s,da,p),C(cs,s,p),c(s,fa,p),c(s,W,p),a(W,Ja),a(W,zs),a(zs,Qa),a(W,Va),c(s,ba,p),C(is,s,p),c(s,ja,p),c(s,T,p),a(T,Xa),a(T,Ps),a(Ps,Za),a(T,se),a(T,Ds),a(Ds,ae),a(T,ee),a(T,As),a(As,te),a(T,ne),c(s,_a,p),c(s,R,p),a(R,J),a(J,Fs),C(hs,Fs,null),a(R,le),a(R,Cs),a(Cs,re),c(s,ga,p),c(s,gs,p),a(gs,oe),c(s,ya,p),c(s,Y,p),a(Y,Q),a(Q,Os),C(ms,Os,null),a(Y,pe),a(Y,Ns),a(Ns,ce),c(s,wa,p),c(s,V,p),a(V,ie),a(V,ys),a(ys,he),a(V,me),c(s,va,p),c(s,X,p),a(X,Is),a(Is,Z),a(Z,Ss),a(Ss,ue),a(Z,de),a(Z,Bs),a(Bs,fe),a(Z,be),a(X,je),a(X,Ls),a(Ls,ws),a(ws,qs),a(qs,_e),a(ws,ge),c(s,xa,p),c(s,ss,p),a(ss,ye),a(ss,Hs),a(Hs,we),a(ss,ve),c(s,ka,p),C(us,s,p),c(s,$a,p),c(s,U,p),a(U,as),a(as,Rs),C(ds,Rs,null),a(U,xe),a(U,Ys),a(Ys,ke),c(s,Ea,p),c(s,w,p),a(w,$e),a(w,Us),a(Us,Ee),a(w,Te),a(w,Gs),a(Gs,ze),a(w,Pe),a(w,Ks),a(Ks,De),a(w,Ae),a(w,Ms),a(Ms,Fe),a(w,Ce),a(w,Ws),a(Ws,Oe),a(w,Ne),c(s,Ta,p),c(s,z,p),a(z,Js),a(Js,vs),a(vs,Qs),a(Qs,Ie),a(vs,Se),a(z,Be),a(z,Vs),a(Vs,xs),a(xs,Xs),a(Xs,Le),a(xs,qe),a(z,He),a(z,Zs),a(Zs,ks),a(ks,sa),a(sa,Re),a(ks,Ye),a(z,Ue),a(z,aa),a(aa,P),a(P,ea),a(ea,Ge),a(P,Ke),a(P,ta),a(ta,Me),a(P,We),a(P,na),a(na,Je),a(P,Qe),a(P,la),a(la,Ve),a(P,Xe),c(s,za,p),C(fs,s,p),c(s,Pa,p),C(es,s,p),c(s,Da,p),c(s,$s,p),a($s,Ze),Aa=!0},p(s,[p]){const bs={};p&2&&(bs.$$scope={dirty:p,ctx:s}),k.$set(bs);const ra={};p&2&&(ra.$$scope={dirty:p,ctx:s}),es.$set(ra)},i(s){Aa||(O(b.$$.fragment,s),O(k.$$.fragment,s),O(q.$$.fragment,s),O(rs.$$.fragment,s),O(cs.$$.fragment,s),O(is.$$.fragment,s),O(hs.$$.fragment,s),O(ms.$$.fragment,s),O(us.$$.fragment,s),O(ds.$$.fragment,s),O(fs.$$.fragment,s),O(es.$$.fragment,s),Aa=!0)},o(s){N(b.$$.fragment,s),N(k.$$.fragment,s),N(q.$$.fragment,s),N(rs.$$.fragment,s),N(cs.$$.fragment,s),N(is.$$.fragment,s),N(hs.$$.fragment,s),N(ms.$$.fragment,s),N(us.$$.fragment,s),N(ds.$$.fragment,s),N(fs.$$.fragment,s),N(es.$$.fragment,s),Aa=!1},d(s){e(i),s&&e(_),s&&e(d),I(b),s&&e(j),s&&e(g),s&&e(K),I(k,s),s&&e(y),s&&e(E),I(q),s&&e(ia),s&&e(js),s&&e(ha),s&&e(_s),s&&e(ma),I(rs,s),s&&e(ua),s&&e(H),s&&e(da),I(cs,s),s&&e(fa),s&&e(W),s&&e(ba),I(is,s),s&&e(ja),s&&e(T),s&&e(_a),s&&e(R),I(hs),s&&e(ga),s&&e(gs),s&&e(ya),s&&e(Y),I(ms),s&&e(wa),s&&e(V),s&&e(va),s&&e(X),s&&e(xa),s&&e(ss),s&&e(ka),I(us,s),s&&e($a),s&&e(U),I(ds),s&&e(Ea),s&&e(w),s&&e(Ta),s&&e(z),s&&e(za),I(fs,s),s&&e(Pa),I(es,s),s&&e(Da),s&&e($s)}}}const rn={local:"train-with-datasets",sections:[{local:"tokenize",title:"Tokenize"},{local:"use-in-pytorch-or-tensorflow",sections:[{local:"pytorch",title:"PyTorch"},{local:"tensorflow",title:"TensorFlow"}],title:"Use in PyTorch or TensorFlow"}],title:"Train with \u{1F917} Datasets"};function on(ls,i,_){let{fw:d}=i;return ls.$$set=f=>{"fw"in f&&_(0,d=f.fw)},[d]}class un extends Zt{constructor(i){super();sn(this,i,on,ln,an,{fw:0})}}export{un as default,rn as metadata};
