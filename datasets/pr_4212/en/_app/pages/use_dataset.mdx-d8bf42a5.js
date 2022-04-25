import{S as en,i as tn,s as nn,e as t,k as i,w as D,t as r,M as ln,c as n,d as e,m as h,a as l,x as A,h as o,b as u,F as a,g as c,y as F,q as C,o as O,B as N,v as rn}from"../chunks/vendor-8138ceec.js";import{T as an}from"../chunks/Tip-12722dfc.js";import{I as ca}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as ia}from"../chunks/CodeBlock-fc89709f.js";function on(js){let m,y,d,j,w,f,I,v;return{c(){m=t("p"),y=r("Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=t("a"),j=r("guide"),w=r(" from the \u{1F917} Transformers library. Then come back and read our "),f=t("a"),I=r("How-to Process"),v=r(" guide to see all the different methods for processing your dataset."),this.h()},l($){m=n($,"P",{});var b=l(m);y=o(b,"Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=n(b,"A",{href:!0,rel:!0});var _=l(d);j=o(_,"guide"),_.forEach(e),w=o(b," from the \u{1F917} Transformers library. Then come back and read our "),f=n(b,"A",{href:!0});var B=l(f);I=o(B,"How-to Process"),B.forEach(e),v=o(b," guide to see all the different methods for processing your dataset."),b.forEach(e),this.h()},h(){u(d,"href","https://huggingface.co/transformers/preprocessing#"),u(d,"rel","nofollow"),u(f,"href","./process")},m($,b){c($,m,b),a(m,y),a(m,d),a(d,j),a(m,w),a(m,f),a(f,I),a(m,v)},d($){$&&e(m)}}}function pn(js){let m,y,d,j,w,f,I,v,$,b,_,B,M;return{c(){m=t("p"),y=t("a"),d=r("Dataset.to_tf_dataset()"),j=r(" is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),w=t("code"),f=r("tf.data.Dataset"),I=r(" and would rather the dataset emit "),v=t("code"),$=r("tf.Tensor"),b=r(" objects, take a look at the "),_=t("a"),B=r("format"),M=r(" section instead!"),this.h()},l(k){m=n(k,"P",{});var g=l(m);y=n(g,"A",{href:!0});var E=l(y);d=o(E,"Dataset.to_tf_dataset()"),E.forEach(e),j=o(g," is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),w=n(g,"CODE",{});var S=l(w);f=o(S,"tf.data.Dataset"),S.forEach(e),I=o(g," and would rather the dataset emit "),v=n(g,"CODE",{});var K=l(v);$=o(K,"tf.Tensor"),K.forEach(e),b=o(g," objects, take a look at the "),_=n(g,"A",{href:!0});var L=l(_);B=o(L,"format"),L.forEach(e),M=o(g," section instead!"),g.forEach(e),this.h()},h(){u(y,"href","/docs/datasets/pr_4212/en/package_reference/main_classes#datasets.Dataset.to_tf_dataset"),u(_,"href","./process#format")},m(k,g){c(k,m,g),a(m,y),a(y,d),a(m,j),a(m,w),a(w,f),a(m,I),a(m,v),a(v,$),a(m,b),a(m,_),a(_,B),a(m,M)},d(k){k&&e(m)}}}function cn(js){let m,y,d,j,w,f,I,v,$,b,_,B,M,k,g,E,S,K,L,Ra,Ds,Ya,ha,_s,Ua,ma,gs,Ga,ua,ls,da,q,Ma,rs,Ka,Wa,os,Ja,Qa,fa,ps,ba,W,Va,As,Xa,Za,ja,cs,_a,T,se,Fs,ae,ee,Cs,te,ne,Os,le,re,ga,R,J,Ns,is,oe,Is,pe,ya,ys,ce,wa,Y,Q,Ss,hs,ie,Bs,he,va,V,me,ws,ue,de,ka,X,Ls,Z,qs,fe,be,Hs,je,_e,ge,Rs,vs,Ys,ye,we,xa,ss,ve,Us,ke,xe,$a,ms,Ea,U,as,Gs,us,$e,Ms,Ee,Ta,x,Te,ks,ze,Pe,Ks,De,Ae,Ws,Fe,Ce,Js,Oe,Ne,za,ds,xs,Ie,Se,Pa,z,Qs,$s,Vs,Be,Le,qe,Xs,Es,Zs,He,Re,Ye,sa,Ts,aa,Ue,Ge,Me,ea,P,ta,Ke,We,na,Je,Qe,la,Ve,Xe,ra,Ze,st,Da,fs,Aa,es,Fa,zs,at,Ca;return f=new ca({}),k=new an({props:{warning:!0,$$slots:{default:[on]},$$scope:{ctx:js}}}),L=new ca({}),ls=new ia({props:{code:"pip install transformers",highlighted:'pip <span class="hljs-keyword">install</span> transformers'}}),ps=new ia({props:{code:`from transformers import BertTokenizerFast
tokenizer = BertTokenizerFast.from_pretrained('bert-base-cased')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)`}}),cs=new ia({props:{code:`encoded_dataset = dataset.map(lambda examples: tokenizer(examples['sentence1']), batched=True)
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
}`}}),is=new ca({}),hs=new ca({}),ms=new ia({props:{code:`import torch
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
                         [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])}`}}),us=new ca({}),fs=new ia({props:{code:`import tensorflow as tf
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
}`}}),es=new an({props:{$$slots:{default:[pn]},$$scope:{ctx:js}}}),{c(){m=t("meta"),y=i(),d=t("h1"),j=t("a"),w=t("span"),D(f.$$.fragment),I=i(),v=t("span"),$=r("Train with \u{1F917} Datasets"),b=i(),_=t("p"),B=r("So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),M=i(),D(k.$$.fragment),g=i(),E=t("h2"),S=t("a"),K=t("span"),D(L.$$.fragment),Ra=i(),Ds=t("span"),Ya=r("Tokenize"),ha=i(),_s=t("p"),Ua=r("Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),ma=i(),gs=t("p"),Ga=r("The first step is to install the \u{1F917} Transformers library:"),ua=i(),D(ls.$$.fragment),da=i(),q=t("p"),Ma=r("Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),rs=t("a"),Ka=r("BERT tokenizer"),Wa=r(" because you are using the "),os=t("a"),Ja=r("BERT"),Qa=r(" model:"),fa=i(),D(ps.$$.fragment),ba=i(),W=t("p"),Va=r("Now you can tokenize "),As=t("code"),Xa=r("sentence1"),Za=r(" field of the dataset:"),ja=i(),D(cs.$$.fragment),_a=i(),T=t("p"),se=r("The tokenization process creates three new columns: "),Fs=t("code"),ae=r("input_ids"),ee=r(", "),Cs=t("code"),te=r("token_type_ids"),ne=r(", and "),Os=t("code"),le=r("attention_mask"),re=r(". These are the inputs to the model."),ga=i(),R=t("h2"),J=t("a"),Ns=t("span"),D(is.$$.fragment),oe=i(),Is=t("span"),pe=r("Use in PyTorch or TensorFlow"),ya=i(),ys=t("p"),ce=r("Next, format the dataset into compatible PyTorch or TensorFlow types."),wa=i(),Y=t("h3"),Q=t("a"),Ss=t("span"),D(hs.$$.fragment),ie=i(),Bs=t("span"),he=r("PyTorch"),va=i(),V=t("p"),me=r("If you are using PyTorch, set the format with "),ws=t("a"),ue=r("Dataset.set_format()"),de=r(", which accepts two main arguments:"),ka=i(),X=t("ol"),Ls=t("li"),Z=t("p"),qs=t("code"),fe=r("type"),be=r(" defines the type of column to cast to. For example, "),Hs=t("code"),je=r("torch"),_e=r(" returns PyTorch tensors."),ge=i(),Rs=t("li"),vs=t("p"),Ys=t("code"),ye=r("columns"),we=r(" specify which columns should be formatted."),xa=i(),ss=t("p"),ve=r("After you set the format, wrap the dataset with "),Us=t("code"),ke=r("torch.utils.data.DataLoader"),xe=r(". Your dataset is now ready for use in a training loop!"),$a=i(),D(ms.$$.fragment),Ea=i(),U=t("h3"),as=t("a"),Gs=t("span"),D(us.$$.fragment),$e=i(),Ms=t("span"),Ee=r("TensorFlow"),Ta=i(),x=t("p"),Te=r("If you are using TensorFlow, you can use "),ks=t("a"),ze=r("Dataset.to_tf_dataset()"),Pe=r(" to wrap the dataset with a "),Ks=t("strong"),De=r("tf.data.Dataset"),Ae=r(`, which is natively understood by Keras.
This means a `),Ws=t("strong"),Fe=r("tf.data.Dataset"),Ce=r(" object can be iterated over to yield batches of data, and can be passed directly to methods like "),Js=t("strong"),Oe=r("model.fit()"),Ne=r("."),za=i(),ds=t("p"),xs=t("a"),Ie=r("Dataset.to_tf_dataset()"),Se=r(" accepts several arguments:"),Pa=i(),z=t("ol"),Qs=t("li"),$s=t("p"),Vs=t("code"),Be=r("columns"),Le=r(" specify which columns should be formatted (includes the inputs and labels)."),qe=i(),Xs=t("li"),Es=t("p"),Zs=t("code"),He=r("shuffle"),Re=r(" determines whether the dataset should be shuffled."),Ye=i(),sa=t("li"),Ts=t("p"),aa=t("code"),Ue=r("batch_size"),Ge=r(" specifies the batch size."),Me=i(),ea=t("li"),P=t("p"),ta=t("code"),Ke=r("collate_fn"),We=r(" specifies a data collator that will batch each processed example and apply padding. If you are using a "),na=t("code"),Je=r("DataCollator"),Qe=r(", make sure you set "),la=t("code"),Ve=r('return_tensors="tf"'),Xe=r(" when you initialize it to return "),ra=t("code"),Ze=r("tf.Tensor"),st=r(" outputs."),Da=i(),D(fs.$$.fragment),Aa=i(),D(es.$$.fragment),Fa=i(),zs=t("p"),at=r("Your dataset is now ready for use in a training loop!"),this.h()},l(s){const p=ln('[data-svelte="svelte-1phssyn"]',document.head);m=n(p,"META",{name:!0,content:!0}),p.forEach(e),y=h(s),d=n(s,"H1",{class:!0});var bs=l(d);j=n(bs,"A",{id:!0,class:!0,href:!0});var oa=l(j);w=n(oa,"SPAN",{});var ot=l(w);A(f.$$.fragment,ot),ot.forEach(e),oa.forEach(e),I=h(bs),v=n(bs,"SPAN",{});var pt=l(v);$=o(pt,"Train with \u{1F917} Datasets"),pt.forEach(e),bs.forEach(e),b=h(s),_=n(s,"P",{});var ct=l(_);B=o(ct,"So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),ct.forEach(e),M=h(s),A(k.$$.fragment,s),g=h(s),E=n(s,"H2",{class:!0});var Oa=l(E);S=n(Oa,"A",{id:!0,class:!0,href:!0});var it=l(S);K=n(it,"SPAN",{});var ht=l(K);A(L.$$.fragment,ht),ht.forEach(e),it.forEach(e),Ra=h(Oa),Ds=n(Oa,"SPAN",{});var mt=l(Ds);Ya=o(mt,"Tokenize"),mt.forEach(e),Oa.forEach(e),ha=h(s),_s=n(s,"P",{});var ut=l(_s);Ua=o(ut,"Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),ut.forEach(e),ma=h(s),gs=n(s,"P",{});var dt=l(gs);Ga=o(dt,"The first step is to install the \u{1F917} Transformers library:"),dt.forEach(e),ua=h(s),A(ls.$$.fragment,s),da=h(s),q=n(s,"P",{});var Ps=l(q);Ma=o(Ps,"Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),rs=n(Ps,"A",{href:!0,rel:!0});var ft=l(rs);Ka=o(ft,"BERT tokenizer"),ft.forEach(e),Wa=o(Ps," because you are using the "),os=n(Ps,"A",{href:!0,rel:!0});var bt=l(os);Ja=o(bt,"BERT"),bt.forEach(e),Qa=o(Ps," model:"),Ps.forEach(e),fa=h(s),A(ps.$$.fragment,s),ba=h(s),W=n(s,"P",{});var Na=l(W);Va=o(Na,"Now you can tokenize "),As=n(Na,"CODE",{});var jt=l(As);Xa=o(jt,"sentence1"),jt.forEach(e),Za=o(Na," field of the dataset:"),Na.forEach(e),ja=h(s),A(cs.$$.fragment,s),_a=h(s),T=n(s,"P",{});var ts=l(T);se=o(ts,"The tokenization process creates three new columns: "),Fs=n(ts,"CODE",{});var _t=l(Fs);ae=o(_t,"input_ids"),_t.forEach(e),ee=o(ts,", "),Cs=n(ts,"CODE",{});var gt=l(Cs);te=o(gt,"token_type_ids"),gt.forEach(e),ne=o(ts,", and "),Os=n(ts,"CODE",{});var yt=l(Os);le=o(yt,"attention_mask"),yt.forEach(e),re=o(ts,". These are the inputs to the model."),ts.forEach(e),ga=h(s),R=n(s,"H2",{class:!0});var Ia=l(R);J=n(Ia,"A",{id:!0,class:!0,href:!0});var wt=l(J);Ns=n(wt,"SPAN",{});var vt=l(Ns);A(is.$$.fragment,vt),vt.forEach(e),wt.forEach(e),oe=h(Ia),Is=n(Ia,"SPAN",{});var kt=l(Is);pe=o(kt,"Use in PyTorch or TensorFlow"),kt.forEach(e),Ia.forEach(e),ya=h(s),ys=n(s,"P",{});var xt=l(ys);ce=o(xt,"Next, format the dataset into compatible PyTorch or TensorFlow types."),xt.forEach(e),wa=h(s),Y=n(s,"H3",{class:!0});var Sa=l(Y);Q=n(Sa,"A",{id:!0,class:!0,href:!0});var $t=l(Q);Ss=n($t,"SPAN",{});var Et=l(Ss);A(hs.$$.fragment,Et),Et.forEach(e),$t.forEach(e),ie=h(Sa),Bs=n(Sa,"SPAN",{});var Tt=l(Bs);he=o(Tt,"PyTorch"),Tt.forEach(e),Sa.forEach(e),va=h(s),V=n(s,"P",{});var Ba=l(V);me=o(Ba,"If you are using PyTorch, set the format with "),ws=n(Ba,"A",{href:!0});var zt=l(ws);ue=o(zt,"Dataset.set_format()"),zt.forEach(e),de=o(Ba,", which accepts two main arguments:"),Ba.forEach(e),ka=h(s),X=n(s,"OL",{});var La=l(X);Ls=n(La,"LI",{});var Pt=l(Ls);Z=n(Pt,"P",{});var pa=l(Z);qs=n(pa,"CODE",{});var Dt=l(qs);fe=o(Dt,"type"),Dt.forEach(e),be=o(pa," defines the type of column to cast to. For example, "),Hs=n(pa,"CODE",{});var At=l(Hs);je=o(At,"torch"),At.forEach(e),_e=o(pa," returns PyTorch tensors."),pa.forEach(e),Pt.forEach(e),ge=h(La),Rs=n(La,"LI",{});var Ft=l(Rs);vs=n(Ft,"P",{});var et=l(vs);Ys=n(et,"CODE",{});var Ct=l(Ys);ye=o(Ct,"columns"),Ct.forEach(e),we=o(et," specify which columns should be formatted."),et.forEach(e),Ft.forEach(e),La.forEach(e),xa=h(s),ss=n(s,"P",{});var qa=l(ss);ve=o(qa,"After you set the format, wrap the dataset with "),Us=n(qa,"CODE",{});var Ot=l(Us);ke=o(Ot,"torch.utils.data.DataLoader"),Ot.forEach(e),xe=o(qa,". Your dataset is now ready for use in a training loop!"),qa.forEach(e),$a=h(s),A(ms.$$.fragment,s),Ea=h(s),U=n(s,"H3",{class:!0});var Ha=l(U);as=n(Ha,"A",{id:!0,class:!0,href:!0});var Nt=l(as);Gs=n(Nt,"SPAN",{});var It=l(Gs);A(us.$$.fragment,It),It.forEach(e),Nt.forEach(e),$e=h(Ha),Ms=n(Ha,"SPAN",{});var St=l(Ms);Ee=o(St,"TensorFlow"),St.forEach(e),Ha.forEach(e),Ta=h(s),x=n(s,"P",{});var H=l(x);Te=o(H,"If you are using TensorFlow, you can use "),ks=n(H,"A",{href:!0});var Bt=l(ks);ze=o(Bt,"Dataset.to_tf_dataset()"),Bt.forEach(e),Pe=o(H," to wrap the dataset with a "),Ks=n(H,"STRONG",{});var Lt=l(Ks);De=o(Lt,"tf.data.Dataset"),Lt.forEach(e),Ae=o(H,`, which is natively understood by Keras.
This means a `),Ws=n(H,"STRONG",{});var qt=l(Ws);Fe=o(qt,"tf.data.Dataset"),qt.forEach(e),Ce=o(H," object can be iterated over to yield batches of data, and can be passed directly to methods like "),Js=n(H,"STRONG",{});var Ht=l(Js);Oe=o(Ht,"model.fit()"),Ht.forEach(e),Ne=o(H,"."),H.forEach(e),za=h(s),ds=n(s,"P",{});var tt=l(ds);xs=n(tt,"A",{href:!0});var Rt=l(xs);Ie=o(Rt,"Dataset.to_tf_dataset()"),Rt.forEach(e),Se=o(tt," accepts several arguments:"),tt.forEach(e),Pa=h(s),z=n(s,"OL",{});var ns=l(z);Qs=n(ns,"LI",{});var Yt=l(Qs);$s=n(Yt,"P",{});var nt=l($s);Vs=n(nt,"CODE",{});var Ut=l(Vs);Be=o(Ut,"columns"),Ut.forEach(e),Le=o(nt," specify which columns should be formatted (includes the inputs and labels)."),nt.forEach(e),Yt.forEach(e),qe=h(ns),Xs=n(ns,"LI",{});var Gt=l(Xs);Es=n(Gt,"P",{});var lt=l(Es);Zs=n(lt,"CODE",{});var Mt=l(Zs);He=o(Mt,"shuffle"),Mt.forEach(e),Re=o(lt," determines whether the dataset should be shuffled."),lt.forEach(e),Gt.forEach(e),Ye=h(ns),sa=n(ns,"LI",{});var Kt=l(sa);Ts=n(Kt,"P",{});var rt=l(Ts);aa=n(rt,"CODE",{});var Wt=l(aa);Ue=o(Wt,"batch_size"),Wt.forEach(e),Ge=o(rt," specifies the batch size."),rt.forEach(e),Kt.forEach(e),Me=h(ns),ea=n(ns,"LI",{});var Jt=l(ea);P=n(Jt,"P",{});var G=l(P);ta=n(G,"CODE",{});var Qt=l(ta);Ke=o(Qt,"collate_fn"),Qt.forEach(e),We=o(G," specifies a data collator that will batch each processed example and apply padding. If you are using a "),na=n(G,"CODE",{});var Vt=l(na);Je=o(Vt,"DataCollator"),Vt.forEach(e),Qe=o(G,", make sure you set "),la=n(G,"CODE",{});var Xt=l(la);Ve=o(Xt,'return_tensors="tf"'),Xt.forEach(e),Xe=o(G," when you initialize it to return "),ra=n(G,"CODE",{});var Zt=l(ra);Ze=o(Zt,"tf.Tensor"),Zt.forEach(e),st=o(G," outputs."),G.forEach(e),Jt.forEach(e),ns.forEach(e),Da=h(s),A(fs.$$.fragment,s),Aa=h(s),A(es.$$.fragment,s),Fa=h(s),zs=n(s,"P",{});var sn=l(zs);at=o(sn,"Your dataset is now ready for use in a training loop!"),sn.forEach(e),this.h()},h(){u(m,"name","hf:doc:metadata"),u(m,"content",JSON.stringify(hn)),u(j,"id","train-with-datasets"),u(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(j,"href","#train-with-datasets"),u(d,"class","relative group"),u(S,"id","tokenize"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#tokenize"),u(E,"class","relative group"),u(rs,"href","https://huggingface.co/transformers/model_doc/bert#berttokenizerfast"),u(rs,"rel","nofollow"),u(os,"href","https://huggingface.co/bert-base-cased"),u(os,"rel","nofollow"),u(J,"id","use-in-pytorch-or-tensorflow"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#use-in-pytorch-or-tensorflow"),u(R,"class","relative group"),u(Q,"id","pytorch"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#pytorch"),u(Y,"class","relative group"),u(ws,"href","/docs/datasets/pr_4212/en/package_reference/main_classes#datasets.Dataset.set_format"),u(as,"id","tensorflow"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#tensorflow"),u(U,"class","relative group"),u(ks,"href","/docs/datasets/pr_4212/en/package_reference/main_classes#datasets.Dataset.to_tf_dataset"),u(xs,"href","/docs/datasets/pr_4212/en/package_reference/main_classes#datasets.Dataset.to_tf_dataset")},m(s,p){a(document.head,m),c(s,y,p),c(s,d,p),a(d,j),a(j,w),F(f,w,null),a(d,I),a(d,v),a(v,$),c(s,b,p),c(s,_,p),a(_,B),c(s,M,p),F(k,s,p),c(s,g,p),c(s,E,p),a(E,S),a(S,K),F(L,K,null),a(E,Ra),a(E,Ds),a(Ds,Ya),c(s,ha,p),c(s,_s,p),a(_s,Ua),c(s,ma,p),c(s,gs,p),a(gs,Ga),c(s,ua,p),F(ls,s,p),c(s,da,p),c(s,q,p),a(q,Ma),a(q,rs),a(rs,Ka),a(q,Wa),a(q,os),a(os,Ja),a(q,Qa),c(s,fa,p),F(ps,s,p),c(s,ba,p),c(s,W,p),a(W,Va),a(W,As),a(As,Xa),a(W,Za),c(s,ja,p),F(cs,s,p),c(s,_a,p),c(s,T,p),a(T,se),a(T,Fs),a(Fs,ae),a(T,ee),a(T,Cs),a(Cs,te),a(T,ne),a(T,Os),a(Os,le),a(T,re),c(s,ga,p),c(s,R,p),a(R,J),a(J,Ns),F(is,Ns,null),a(R,oe),a(R,Is),a(Is,pe),c(s,ya,p),c(s,ys,p),a(ys,ce),c(s,wa,p),c(s,Y,p),a(Y,Q),a(Q,Ss),F(hs,Ss,null),a(Y,ie),a(Y,Bs),a(Bs,he),c(s,va,p),c(s,V,p),a(V,me),a(V,ws),a(ws,ue),a(V,de),c(s,ka,p),c(s,X,p),a(X,Ls),a(Ls,Z),a(Z,qs),a(qs,fe),a(Z,be),a(Z,Hs),a(Hs,je),a(Z,_e),a(X,ge),a(X,Rs),a(Rs,vs),a(vs,Ys),a(Ys,ye),a(vs,we),c(s,xa,p),c(s,ss,p),a(ss,ve),a(ss,Us),a(Us,ke),a(ss,xe),c(s,$a,p),F(ms,s,p),c(s,Ea,p),c(s,U,p),a(U,as),a(as,Gs),F(us,Gs,null),a(U,$e),a(U,Ms),a(Ms,Ee),c(s,Ta,p),c(s,x,p),a(x,Te),a(x,ks),a(ks,ze),a(x,Pe),a(x,Ks),a(Ks,De),a(x,Ae),a(x,Ws),a(Ws,Fe),a(x,Ce),a(x,Js),a(Js,Oe),a(x,Ne),c(s,za,p),c(s,ds,p),a(ds,xs),a(xs,Ie),a(ds,Se),c(s,Pa,p),c(s,z,p),a(z,Qs),a(Qs,$s),a($s,Vs),a(Vs,Be),a($s,Le),a(z,qe),a(z,Xs),a(Xs,Es),a(Es,Zs),a(Zs,He),a(Es,Re),a(z,Ye),a(z,sa),a(sa,Ts),a(Ts,aa),a(aa,Ue),a(Ts,Ge),a(z,Me),a(z,ea),a(ea,P),a(P,ta),a(ta,Ke),a(P,We),a(P,na),a(na,Je),a(P,Qe),a(P,la),a(la,Ve),a(P,Xe),a(P,ra),a(ra,Ze),a(P,st),c(s,Da,p),F(fs,s,p),c(s,Aa,p),F(es,s,p),c(s,Fa,p),c(s,zs,p),a(zs,at),Ca=!0},p(s,[p]){const bs={};p&2&&(bs.$$scope={dirty:p,ctx:s}),k.$set(bs);const oa={};p&2&&(oa.$$scope={dirty:p,ctx:s}),es.$set(oa)},i(s){Ca||(C(f.$$.fragment,s),C(k.$$.fragment,s),C(L.$$.fragment,s),C(ls.$$.fragment,s),C(ps.$$.fragment,s),C(cs.$$.fragment,s),C(is.$$.fragment,s),C(hs.$$.fragment,s),C(ms.$$.fragment,s),C(us.$$.fragment,s),C(fs.$$.fragment,s),C(es.$$.fragment,s),Ca=!0)},o(s){O(f.$$.fragment,s),O(k.$$.fragment,s),O(L.$$.fragment,s),O(ls.$$.fragment,s),O(ps.$$.fragment,s),O(cs.$$.fragment,s),O(is.$$.fragment,s),O(hs.$$.fragment,s),O(ms.$$.fragment,s),O(us.$$.fragment,s),O(fs.$$.fragment,s),O(es.$$.fragment,s),Ca=!1},d(s){e(m),s&&e(y),s&&e(d),N(f),s&&e(b),s&&e(_),s&&e(M),N(k,s),s&&e(g),s&&e(E),N(L),s&&e(ha),s&&e(_s),s&&e(ma),s&&e(gs),s&&e(ua),N(ls,s),s&&e(da),s&&e(q),s&&e(fa),N(ps,s),s&&e(ba),s&&e(W),s&&e(ja),N(cs,s),s&&e(_a),s&&e(T),s&&e(ga),s&&e(R),N(is),s&&e(ya),s&&e(ys),s&&e(wa),s&&e(Y),N(hs),s&&e(va),s&&e(V),s&&e(ka),s&&e(X),s&&e(xa),s&&e(ss),s&&e($a),N(ms,s),s&&e(Ea),s&&e(U),N(us),s&&e(Ta),s&&e(x),s&&e(za),s&&e(ds),s&&e(Pa),s&&e(z),s&&e(Da),N(fs,s),s&&e(Aa),N(es,s),s&&e(Fa),s&&e(zs)}}}const hn={local:"train-with-datasets",sections:[{local:"tokenize",title:"Tokenize"},{local:"use-in-pytorch-or-tensorflow",sections:[{local:"pytorch",title:"PyTorch"},{local:"tensorflow",title:"TensorFlow"}],title:"Use in PyTorch or TensorFlow"}],title:"Train with \u{1F917} Datasets"};function mn(js){return rn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jn extends en{constructor(m){super();tn(this,m,mn,cn,nn,{})}}export{jn as default,hn as metadata};
