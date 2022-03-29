import{S as Zt,i as sn,s as an,e as t,k as h,w as A,t as r,M as en,c as n,d as e,m,a as l,x as F,h as o,b as u,F as a,g as c,y as C,q as O,o as N,B as I,v as tn}from"../chunks/vendor-aa873a46.js";import{T as Xt}from"../chunks/Tip-f7f252ab.js";import{I as pa}from"../chunks/IconCopyLink-d0ca3106.js";import{C as ca}from"../chunks/CodeBlock-1f14baf3.js";function nn(bs){let i,x,d,j,w,f,S,v;return{c(){i=t("p"),x=r("Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=t("a"),j=r("guide"),w=r(" from the \u{1F917} Transformers library. Then come back and read our "),f=t("a"),S=r("How-to Process"),v=r(" guide to see all the different methods for processing your dataset."),this.h()},l($){i=n($,"P",{});var b=l(i);x=o(b,"Often times you may want to modify the structure and content of your dataset before you use it to train a model. For example, you may want to remove a column or cast it as a different type. \u{1F917} Datasets provides the necessary tools to do this, but since each dataset is so different, the processing approach will vary individually. For more detailed information about preprocessing data, take a look at our "),d=n(b,"A",{href:!0,rel:!0});var _=l(d);j=o(_,"guide"),_.forEach(e),w=o(b," from the \u{1F917} Transformers library. Then come back and read our "),f=n(b,"A",{href:!0});var L=l(f);S=o(L,"How-to Process"),L.forEach(e),v=o(b," guide to see all the different methods for processing your dataset."),b.forEach(e),this.h()},h(){u(d,"href","https://huggingface.co/transformers/preprocessing#"),u(d,"rel","nofollow"),u(f,"href","./process")},m($,b){c($,i,b),a(i,x),a(i,d),a(d,j),a(i,w),a(i,f),a(f,S),a(i,v)},d($){$&&e(i)}}}function ln(bs){let i,x,d,j,w,f,S,v,$,b,_,L,M;return{c(){i=t("p"),x=t("code"),d=r("Dataset.to_tf_dataset()"),j=r("is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),w=t("code"),f=r("tf.data.Dataset"),S=r(" and would rather the dataset emit "),v=t("code"),$=r("tf.Tensor"),b=r(" objects, take a look at the "),_=t("a"),L=r("format"),M=r(" section instead!"),this.h()},l(k){i=n(k,"P",{});var g=l(i);x=n(g,"CODE",{});var E=l(x);d=o(E,"Dataset.to_tf_dataset()"),E.forEach(e),j=o(g,"is the easiest way to create a TensorFlow compatible dataset. If you don\u2019t want a "),w=n(g,"CODE",{});var B=l(w);f=o(B,"tf.data.Dataset"),B.forEach(e),S=o(g," and would rather the dataset emit "),v=n(g,"CODE",{});var K=l(v);$=o(K,"tf.Tensor"),K.forEach(e),b=o(g," objects, take a look at the "),_=n(g,"A",{href:!0});var q=l(_);L=o(q,"format"),q.forEach(e),M=o(g," section instead!"),g.forEach(e),this.h()},h(){u(_,"href","./process#format")},m(k,g){c(k,i,g),a(i,x),a(x,d),a(i,j),a(i,w),a(w,f),a(i,S),a(i,v),a(v,$),a(i,b),a(i,_),a(_,L),a(i,M)},d(k){k&&e(i)}}}function rn(bs){let i,x,d,j,w,f,S,v,$,b,_,L,M,k,g,E,B,K,q,qa,Ts,Ha,ia,js,Ra,ha,_s,Ya,ma,ls,ua,H,Ua,rs,Ga,Ma,os,Ka,Wa,da,ps,fa,W,Ja,zs,Qa,Va,ba,cs,ja,T,Xa,Ps,Za,se,Ds,ae,ee,As,te,ne,_a,R,J,Fs,is,le,Cs,re,ga,gs,oe,ya,Y,Q,Os,hs,pe,Ns,ce,wa,V,ie,ys,he,me,va,X,Is,Z,Ss,ue,de,Bs,fe,be,je,Ls,ws,qs,_e,ge,xa,ss,ye,Hs,we,ve,ka,ms,$a,U,as,Rs,us,xe,Ys,ke,Ea,y,$e,Us,Ee,Te,Gs,ze,Pe,Ms,De,Ae,Ks,Fe,Ce,Ws,Oe,Ne,Ta,z,Js,vs,Qs,Ie,Se,Be,Vs,xs,Xs,Le,qe,He,Zs,ks,sa,Re,Ye,Ue,aa,P,ea,Ge,Me,ta,Ke,We,na,Je,Qe,la,Ve,Xe,za,ds,Pa,es,Da,$s,Ze,Aa;return f=new pa({}),k=new Xt({props:{warning:!0,$$slots:{default:[nn]},$$scope:{ctx:bs}}}),q=new pa({}),ls=new ca({props:{code:"pip install transformers",highlighted:'pip <span class="hljs-keyword">install</span> transformers'}}),ps=new ca({props:{code:`from transformers import BertTokenizerFast
tokenizer = BertTokenizerFast.from_pretrained('bert-base-cased')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&#x27;bert-base-cased&#x27;</span>)`}}),cs=new ca({props:{code:`encoded_dataset = dataset.map(lambda examples: tokenizer(examples['sentence1']), batched=True)
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
}`}}),is=new pa({}),hs=new pa({}),ms=new ca({props:{code:`import torch
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
                         [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,  ..., <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])}`}}),us=new pa({}),ds=new ca({props:{code:`import tensorflow as tf
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
}`}}),es=new Xt({props:{$$slots:{default:[ln]},$$scope:{ctx:bs}}}),{c(){i=t("meta"),x=h(),d=t("h1"),j=t("a"),w=t("span"),A(f.$$.fragment),S=h(),v=t("span"),$=r("Train with \u{1F917} Datasets"),b=h(),_=t("p"),L=r("So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),M=h(),A(k.$$.fragment),g=h(),E=t("h2"),B=t("a"),K=t("span"),A(q.$$.fragment),qa=h(),Ts=t("span"),Ha=r("Tokenize"),ia=h(),js=t("p"),Ra=r("Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),ha=h(),_s=t("p"),Ya=r("The first step is to install the \u{1F917} Transformers library:"),ma=h(),A(ls.$$.fragment),ua=h(),H=t("p"),Ua=r("Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),rs=t("a"),Ga=r("BERT tokenizer"),Ma=r(" because you are using the "),os=t("a"),Ka=r("BERT"),Wa=r(" model:"),da=h(),A(ps.$$.fragment),fa=h(),W=t("p"),Ja=r("Now you can tokenize "),zs=t("code"),Qa=r("sentence1"),Va=r(" field of the dataset:"),ba=h(),A(cs.$$.fragment),ja=h(),T=t("p"),Xa=r("The tokenization process creates three new columns: "),Ps=t("code"),Za=r("input_ids"),se=r(", "),Ds=t("code"),ae=r("token_type_ids"),ee=r(", and "),As=t("code"),te=r("attention_mask"),ne=r(". These are the inputs to the model."),_a=h(),R=t("h2"),J=t("a"),Fs=t("span"),A(is.$$.fragment),le=h(),Cs=t("span"),re=r("Use in PyTorch or TensorFlow"),ga=h(),gs=t("p"),oe=r("Next, format the dataset into compatible PyTorch or TensorFlow types."),ya=h(),Y=t("h3"),Q=t("a"),Os=t("span"),A(hs.$$.fragment),pe=h(),Ns=t("span"),ce=r("PyTorch"),wa=h(),V=t("p"),ie=r("If you are using PyTorch, set the format with "),ys=t("a"),he=r("Dataset.set_format()"),me=r(", which accepts two main arguments:"),va=h(),X=t("ol"),Is=t("li"),Z=t("p"),Ss=t("code"),ue=r("type"),de=r(" defines the type of column to cast to. For example, "),Bs=t("code"),fe=r("torch"),be=r(" returns PyTorch tensors."),je=h(),Ls=t("li"),ws=t("p"),qs=t("code"),_e=r("columns"),ge=r(" specify which columns should be formatted."),xa=h(),ss=t("p"),ye=r("After you set the format, wrap the dataset with "),Hs=t("code"),we=r("torch.utils.data.DataLoader"),ve=r(". Your dataset is now ready for use in a training loop!"),ka=h(),A(ms.$$.fragment),$a=h(),U=t("h3"),as=t("a"),Rs=t("span"),A(us.$$.fragment),xe=h(),Ys=t("span"),ke=r("TensorFlow"),Ea=h(),y=t("p"),$e=r("If you are using TensorFlow, you can use "),Us=t("code"),Ee=r("Dataset.to_tf_dataset()"),Te=r("to wrap the dataset with a "),Gs=t("strong"),ze=r("tf.data.Dataset"),Pe=r(`, which is natively understood by Keras.
This means a `),Ms=t("strong"),De=r("tf.data.Dataset"),Ae=r(" object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ks=t("strong"),Fe=r("model.fit()"),Ce=r(`.
`),Ws=t("code"),Oe=r("Dataset.to_tf_dataset()"),Ne=r("accepts several arguments:"),Ta=h(),z=t("ol"),Js=t("li"),vs=t("p"),Qs=t("code"),Ie=r("columns"),Se=r(" specify which columns should be formatted (includes the inputs and labels)."),Be=h(),Vs=t("li"),xs=t("p"),Xs=t("code"),Le=r("shuffle"),qe=r(" determines whether the dataset should be shuffled."),He=h(),Zs=t("li"),ks=t("p"),sa=t("code"),Re=r("batch_size"),Ye=r(" specifies the batch size."),Ue=h(),aa=t("li"),P=t("p"),ea=t("code"),Ge=r("collate_fn"),Me=r(" specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=t("code"),Ke=r("DataCollator"),We=r(", make sure you set "),na=t("code"),Je=r('return_tensors="tf"'),Qe=r(" when you initialize it to return "),la=t("code"),Ve=r("tf.Tensor"),Xe=r(" outputs."),za=h(),A(ds.$$.fragment),Pa=h(),A(es.$$.fragment),Da=h(),$s=t("p"),Ze=r("Your dataset is now ready for use in a training loop!"),this.h()},l(s){const p=en('[data-svelte="svelte-1phssyn"]',document.head);i=n(p,"META",{name:!0,content:!0}),p.forEach(e),x=m(s),d=n(s,"H1",{class:!0});var fs=l(d);j=n(fs,"A",{id:!0,class:!0,href:!0});var ra=l(j);w=n(ra,"SPAN",{});var nt=l(w);F(f.$$.fragment,nt),nt.forEach(e),ra.forEach(e),S=m(fs),v=n(fs,"SPAN",{});var lt=l(v);$=o(lt,"Train with \u{1F917} Datasets"),lt.forEach(e),fs.forEach(e),b=m(s),_=n(s,"P",{});var rt=l(_);L=o(rt,"So far, you loaded a dataset from the Hugging Face Hub and learned how to access the information stored inside the dataset. Now you will tokenize and use your dataset with a framework such as PyTorch or TensorFlow. By default, all the dataset columns are returned as Python objects. But you can bridge the gap between a Python object and your machine learning framework by setting the format of a dataset. Formatting casts the columns into compatible PyTorch or TensorFlow types."),rt.forEach(e),M=m(s),F(k.$$.fragment,s),g=m(s),E=n(s,"H2",{class:!0});var Fa=l(E);B=n(Fa,"A",{id:!0,class:!0,href:!0});var ot=l(B);K=n(ot,"SPAN",{});var pt=l(K);F(q.$$.fragment,pt),pt.forEach(e),ot.forEach(e),qa=m(Fa),Ts=n(Fa,"SPAN",{});var ct=l(Ts);Ha=o(ct,"Tokenize"),ct.forEach(e),Fa.forEach(e),ia=m(s),js=n(s,"P",{});var it=l(js);Ra=o(it,"Tokenization divides text into individual words called tokens. Tokens are converted into numbers, which is what the model receives as its input."),it.forEach(e),ha=m(s),_s=n(s,"P",{});var ht=l(_s);Ya=o(ht,"The first step is to install the \u{1F917} Transformers library:"),ht.forEach(e),ma=m(s),F(ls.$$.fragment,s),ua=m(s),H=n(s,"P",{});var Es=l(H);Ua=o(Es,"Next, import a tokenizer. It is important to use the tokenizer that is associated with the model you are using, so the text is split in the same way. In this example, load the "),rs=n(Es,"A",{href:!0,rel:!0});var mt=l(rs);Ga=o(mt,"BERT tokenizer"),mt.forEach(e),Ma=o(Es," because you are using the "),os=n(Es,"A",{href:!0,rel:!0});var ut=l(os);Ka=o(ut,"BERT"),ut.forEach(e),Wa=o(Es," model:"),Es.forEach(e),da=m(s),F(ps.$$.fragment,s),fa=m(s),W=n(s,"P",{});var Ca=l(W);Ja=o(Ca,"Now you can tokenize "),zs=n(Ca,"CODE",{});var dt=l(zs);Qa=o(dt,"sentence1"),dt.forEach(e),Va=o(Ca," field of the dataset:"),Ca.forEach(e),ba=m(s),F(cs.$$.fragment,s),ja=m(s),T=n(s,"P",{});var ts=l(T);Xa=o(ts,"The tokenization process creates three new columns: "),Ps=n(ts,"CODE",{});var ft=l(Ps);Za=o(ft,"input_ids"),ft.forEach(e),se=o(ts,", "),Ds=n(ts,"CODE",{});var bt=l(Ds);ae=o(bt,"token_type_ids"),bt.forEach(e),ee=o(ts,", and "),As=n(ts,"CODE",{});var jt=l(As);te=o(jt,"attention_mask"),jt.forEach(e),ne=o(ts,". These are the inputs to the model."),ts.forEach(e),_a=m(s),R=n(s,"H2",{class:!0});var Oa=l(R);J=n(Oa,"A",{id:!0,class:!0,href:!0});var _t=l(J);Fs=n(_t,"SPAN",{});var gt=l(Fs);F(is.$$.fragment,gt),gt.forEach(e),_t.forEach(e),le=m(Oa),Cs=n(Oa,"SPAN",{});var yt=l(Cs);re=o(yt,"Use in PyTorch or TensorFlow"),yt.forEach(e),Oa.forEach(e),ga=m(s),gs=n(s,"P",{});var wt=l(gs);oe=o(wt,"Next, format the dataset into compatible PyTorch or TensorFlow types."),wt.forEach(e),ya=m(s),Y=n(s,"H3",{class:!0});var Na=l(Y);Q=n(Na,"A",{id:!0,class:!0,href:!0});var vt=l(Q);Os=n(vt,"SPAN",{});var xt=l(Os);F(hs.$$.fragment,xt),xt.forEach(e),vt.forEach(e),pe=m(Na),Ns=n(Na,"SPAN",{});var kt=l(Ns);ce=o(kt,"PyTorch"),kt.forEach(e),Na.forEach(e),wa=m(s),V=n(s,"P",{});var Ia=l(V);ie=o(Ia,"If you are using PyTorch, set the format with "),ys=n(Ia,"A",{href:!0});var $t=l(ys);he=o($t,"Dataset.set_format()"),$t.forEach(e),me=o(Ia,", which accepts two main arguments:"),Ia.forEach(e),va=m(s),X=n(s,"OL",{});var Sa=l(X);Is=n(Sa,"LI",{});var Et=l(Is);Z=n(Et,"P",{});var oa=l(Z);Ss=n(oa,"CODE",{});var Tt=l(Ss);ue=o(Tt,"type"),Tt.forEach(e),de=o(oa," defines the type of column to cast to. For example, "),Bs=n(oa,"CODE",{});var zt=l(Bs);fe=o(zt,"torch"),zt.forEach(e),be=o(oa," returns PyTorch tensors."),oa.forEach(e),Et.forEach(e),je=m(Sa),Ls=n(Sa,"LI",{});var Pt=l(Ls);ws=n(Pt,"P",{});var st=l(ws);qs=n(st,"CODE",{});var Dt=l(qs);_e=o(Dt,"columns"),Dt.forEach(e),ge=o(st," specify which columns should be formatted."),st.forEach(e),Pt.forEach(e),Sa.forEach(e),xa=m(s),ss=n(s,"P",{});var Ba=l(ss);ye=o(Ba,"After you set the format, wrap the dataset with "),Hs=n(Ba,"CODE",{});var At=l(Hs);we=o(At,"torch.utils.data.DataLoader"),At.forEach(e),ve=o(Ba,". Your dataset is now ready for use in a training loop!"),Ba.forEach(e),ka=m(s),F(ms.$$.fragment,s),$a=m(s),U=n(s,"H3",{class:!0});var La=l(U);as=n(La,"A",{id:!0,class:!0,href:!0});var Ft=l(as);Rs=n(Ft,"SPAN",{});var Ct=l(Rs);F(us.$$.fragment,Ct),Ct.forEach(e),Ft.forEach(e),xe=m(La),Ys=n(La,"SPAN",{});var Ot=l(Ys);ke=o(Ot,"TensorFlow"),Ot.forEach(e),La.forEach(e),Ea=m(s),y=n(s,"P",{});var D=l(y);$e=o(D,"If you are using TensorFlow, you can use "),Us=n(D,"CODE",{});var Nt=l(Us);Ee=o(Nt,"Dataset.to_tf_dataset()"),Nt.forEach(e),Te=o(D,"to wrap the dataset with a "),Gs=n(D,"STRONG",{});var It=l(Gs);ze=o(It,"tf.data.Dataset"),It.forEach(e),Pe=o(D,`, which is natively understood by Keras.
This means a `),Ms=n(D,"STRONG",{});var St=l(Ms);De=o(St,"tf.data.Dataset"),St.forEach(e),Ae=o(D," object can be iterated over to yield batches of data, and can be passed directly to methods like "),Ks=n(D,"STRONG",{});var Bt=l(Ks);Fe=o(Bt,"model.fit()"),Bt.forEach(e),Ce=o(D,`.
`),Ws=n(D,"CODE",{});var Lt=l(Ws);Oe=o(Lt,"Dataset.to_tf_dataset()"),Lt.forEach(e),Ne=o(D,"accepts several arguments:"),D.forEach(e),Ta=m(s),z=n(s,"OL",{});var ns=l(z);Js=n(ns,"LI",{});var qt=l(Js);vs=n(qt,"P",{});var at=l(vs);Qs=n(at,"CODE",{});var Ht=l(Qs);Ie=o(Ht,"columns"),Ht.forEach(e),Se=o(at," specify which columns should be formatted (includes the inputs and labels)."),at.forEach(e),qt.forEach(e),Be=m(ns),Vs=n(ns,"LI",{});var Rt=l(Vs);xs=n(Rt,"P",{});var et=l(xs);Xs=n(et,"CODE",{});var Yt=l(Xs);Le=o(Yt,"shuffle"),Yt.forEach(e),qe=o(et," determines whether the dataset should be shuffled."),et.forEach(e),Rt.forEach(e),He=m(ns),Zs=n(ns,"LI",{});var Ut=l(Zs);ks=n(Ut,"P",{});var tt=l(ks);sa=n(tt,"CODE",{});var Gt=l(sa);Re=o(Gt,"batch_size"),Gt.forEach(e),Ye=o(tt," specifies the batch size."),tt.forEach(e),Ut.forEach(e),Ue=m(ns),aa=n(ns,"LI",{});var Mt=l(aa);P=n(Mt,"P",{});var G=l(P);ea=n(G,"CODE",{});var Kt=l(ea);Ge=o(Kt,"collate_fn"),Kt.forEach(e),Me=o(G," specifies a data collator that will batch each processed example and apply padding. If you are using a "),ta=n(G,"CODE",{});var Wt=l(ta);Ke=o(Wt,"DataCollator"),Wt.forEach(e),We=o(G,", make sure you set "),na=n(G,"CODE",{});var Jt=l(na);Je=o(Jt,'return_tensors="tf"'),Jt.forEach(e),Qe=o(G," when you initialize it to return "),la=n(G,"CODE",{});var Qt=l(la);Ve=o(Qt,"tf.Tensor"),Qt.forEach(e),Xe=o(G," outputs."),G.forEach(e),Mt.forEach(e),ns.forEach(e),za=m(s),F(ds.$$.fragment,s),Pa=m(s),F(es.$$.fragment,s),Da=m(s),$s=n(s,"P",{});var Vt=l($s);Ze=o(Vt,"Your dataset is now ready for use in a training loop!"),Vt.forEach(e),this.h()},h(){u(i,"name","hf:doc:metadata"),u(i,"content",JSON.stringify(on)),u(j,"id","train-with-datasets"),u(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(j,"href","#train-with-datasets"),u(d,"class","relative group"),u(B,"id","tokenize"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#tokenize"),u(E,"class","relative group"),u(rs,"href","https://huggingface.co/transformers/model_doc/bert#berttokenizerfast"),u(rs,"rel","nofollow"),u(os,"href","https://huggingface.co/bert-base-cased"),u(os,"rel","nofollow"),u(J,"id","use-in-pytorch-or-tensorflow"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#use-in-pytorch-or-tensorflow"),u(R,"class","relative group"),u(Q,"id","pytorch"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#pytorch"),u(Y,"class","relative group"),u(ys,"href","/docs/datasets/pr_4054/en/package_reference/main_classes#datasets.Dataset.set_format"),u(as,"id","tensorflow"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#tensorflow"),u(U,"class","relative group")},m(s,p){a(document.head,i),c(s,x,p),c(s,d,p),a(d,j),a(j,w),C(f,w,null),a(d,S),a(d,v),a(v,$),c(s,b,p),c(s,_,p),a(_,L),c(s,M,p),C(k,s,p),c(s,g,p),c(s,E,p),a(E,B),a(B,K),C(q,K,null),a(E,qa),a(E,Ts),a(Ts,Ha),c(s,ia,p),c(s,js,p),a(js,Ra),c(s,ha,p),c(s,_s,p),a(_s,Ya),c(s,ma,p),C(ls,s,p),c(s,ua,p),c(s,H,p),a(H,Ua),a(H,rs),a(rs,Ga),a(H,Ma),a(H,os),a(os,Ka),a(H,Wa),c(s,da,p),C(ps,s,p),c(s,fa,p),c(s,W,p),a(W,Ja),a(W,zs),a(zs,Qa),a(W,Va),c(s,ba,p),C(cs,s,p),c(s,ja,p),c(s,T,p),a(T,Xa),a(T,Ps),a(Ps,Za),a(T,se),a(T,Ds),a(Ds,ae),a(T,ee),a(T,As),a(As,te),a(T,ne),c(s,_a,p),c(s,R,p),a(R,J),a(J,Fs),C(is,Fs,null),a(R,le),a(R,Cs),a(Cs,re),c(s,ga,p),c(s,gs,p),a(gs,oe),c(s,ya,p),c(s,Y,p),a(Y,Q),a(Q,Os),C(hs,Os,null),a(Y,pe),a(Y,Ns),a(Ns,ce),c(s,wa,p),c(s,V,p),a(V,ie),a(V,ys),a(ys,he),a(V,me),c(s,va,p),c(s,X,p),a(X,Is),a(Is,Z),a(Z,Ss),a(Ss,ue),a(Z,de),a(Z,Bs),a(Bs,fe),a(Z,be),a(X,je),a(X,Ls),a(Ls,ws),a(ws,qs),a(qs,_e),a(ws,ge),c(s,xa,p),c(s,ss,p),a(ss,ye),a(ss,Hs),a(Hs,we),a(ss,ve),c(s,ka,p),C(ms,s,p),c(s,$a,p),c(s,U,p),a(U,as),a(as,Rs),C(us,Rs,null),a(U,xe),a(U,Ys),a(Ys,ke),c(s,Ea,p),c(s,y,p),a(y,$e),a(y,Us),a(Us,Ee),a(y,Te),a(y,Gs),a(Gs,ze),a(y,Pe),a(y,Ms),a(Ms,De),a(y,Ae),a(y,Ks),a(Ks,Fe),a(y,Ce),a(y,Ws),a(Ws,Oe),a(y,Ne),c(s,Ta,p),c(s,z,p),a(z,Js),a(Js,vs),a(vs,Qs),a(Qs,Ie),a(vs,Se),a(z,Be),a(z,Vs),a(Vs,xs),a(xs,Xs),a(Xs,Le),a(xs,qe),a(z,He),a(z,Zs),a(Zs,ks),a(ks,sa),a(sa,Re),a(ks,Ye),a(z,Ue),a(z,aa),a(aa,P),a(P,ea),a(ea,Ge),a(P,Me),a(P,ta),a(ta,Ke),a(P,We),a(P,na),a(na,Je),a(P,Qe),a(P,la),a(la,Ve),a(P,Xe),c(s,za,p),C(ds,s,p),c(s,Pa,p),C(es,s,p),c(s,Da,p),c(s,$s,p),a($s,Ze),Aa=!0},p(s,[p]){const fs={};p&2&&(fs.$$scope={dirty:p,ctx:s}),k.$set(fs);const ra={};p&2&&(ra.$$scope={dirty:p,ctx:s}),es.$set(ra)},i(s){Aa||(O(f.$$.fragment,s),O(k.$$.fragment,s),O(q.$$.fragment,s),O(ls.$$.fragment,s),O(ps.$$.fragment,s),O(cs.$$.fragment,s),O(is.$$.fragment,s),O(hs.$$.fragment,s),O(ms.$$.fragment,s),O(us.$$.fragment,s),O(ds.$$.fragment,s),O(es.$$.fragment,s),Aa=!0)},o(s){N(f.$$.fragment,s),N(k.$$.fragment,s),N(q.$$.fragment,s),N(ls.$$.fragment,s),N(ps.$$.fragment,s),N(cs.$$.fragment,s),N(is.$$.fragment,s),N(hs.$$.fragment,s),N(ms.$$.fragment,s),N(us.$$.fragment,s),N(ds.$$.fragment,s),N(es.$$.fragment,s),Aa=!1},d(s){e(i),s&&e(x),s&&e(d),I(f),s&&e(b),s&&e(_),s&&e(M),I(k,s),s&&e(g),s&&e(E),I(q),s&&e(ia),s&&e(js),s&&e(ha),s&&e(_s),s&&e(ma),I(ls,s),s&&e(ua),s&&e(H),s&&e(da),I(ps,s),s&&e(fa),s&&e(W),s&&e(ba),I(cs,s),s&&e(ja),s&&e(T),s&&e(_a),s&&e(R),I(is),s&&e(ga),s&&e(gs),s&&e(ya),s&&e(Y),I(hs),s&&e(wa),s&&e(V),s&&e(va),s&&e(X),s&&e(xa),s&&e(ss),s&&e(ka),I(ms,s),s&&e($a),s&&e(U),I(us),s&&e(Ea),s&&e(y),s&&e(Ta),s&&e(z),s&&e(za),I(ds,s),s&&e(Pa),I(es,s),s&&e(Da),s&&e($s)}}}const on={local:"train-with-datasets",sections:[{local:"tokenize",title:"Tokenize"},{local:"use-in-pytorch-or-tensorflow",sections:[{local:"pytorch",title:"PyTorch"},{local:"tensorflow",title:"TensorFlow"}],title:"Use in PyTorch or TensorFlow"}],title:"Train with \u{1F917} Datasets"};function pn(bs){return tn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dn extends Zt{constructor(i){super();sn(this,i,pn,rn,an,{})}}export{dn as default,on as metadata};
