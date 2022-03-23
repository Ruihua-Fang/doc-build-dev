import{S as Uk,i as Bk,s as Rk,e as n,k as p,w as $,t,M as Gk,c as o,d as s,m as d,a as r,x as E,h as a,b as h,N as Vk,F as e,g as u,y as F,q as A,o as z,B as x,L as ro}from"../../chunks/vendor-6b77c823.js";import{T as Mt}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-abef54e3.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Bs}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Cc,M as io}from"../../chunks/Markdown-4489c441.js";function Kk(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=t(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=n("a"),f=t("torch-scatter"),v=t(" dependency:"),w=p(),$(T.$$.fragment),y=p(),k=n("p"),D=t("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),j=n("a"),H=t("TapasConfig"),G=t(", and then create a "),V=n("a"),B=t("TapasForQuestionAnswering"),K=t(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=p(),$(I.$$.fragment),this.h()},l(b){l=o(b,"P",{});var M=r(l);_=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=o(M,"A",{href:!0,rel:!0});var R=r(c);f=a(R,"torch-scatter"),R.forEach(s),v=a(M," dependency:"),M.forEach(s),w=d(b),E(T.$$.fragment,b),y=d(b),k=o(b,"P",{});var C=r(k);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),j=o(C,"A",{href:!0});var N=r(j);H=a(N,"TapasConfig"),N.forEach(s),G=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);B=a(ee,"TapasForQuestionAnswering"),ee.forEach(s),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(s),re=d(b),E(I.$$.fragment,b),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(j,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(b,M){u(b,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(b,w,M),F(T,b,M),u(b,y,M),u(b,k,M),e(k,D),e(k,j),e(j,H),e(k,G),e(k,V),e(V,B),e(k,K),u(b,re,M),F(I,b,M),O=!0},p:ro,i(b){O||(A(T.$$.fragment,b),A(I.$$.fragment,b),O=!0)},o(b){z(T.$$.fragment,b),z(I.$$.fragment,b),O=!1},d(b){b&&s(l),b&&s(w),x(T,b),b&&s(y),b&&s(k),b&&s(re),x(I,b)}}}function Yk(U){let l,_;return l=new io({props:{$$slots:{default:[Kk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Jk(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=t("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n("a"),f=t("tensorflow_probability"),v=t(" dependency:"),w=p(),$(T.$$.fragment),y=p(),k=n("p"),D=t("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),j=n("a"),H=t("TapasConfig"),G=t(", and then create a "),V=n("a"),B=t("TFTapasForQuestionAnswering"),K=t(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=p(),$(I.$$.fragment),this.h()},l(b){l=o(b,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o(M,"A",{href:!0,rel:!0});var R=r(c);f=a(R,"tensorflow_probability"),R.forEach(s),v=a(M," dependency:"),M.forEach(s),w=d(b),E(T.$$.fragment,b),y=d(b),k=o(b,"P",{});var C=r(k);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),j=o(C,"A",{href:!0});var N=r(j);H=a(N,"TapasConfig"),N.forEach(s),G=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);B=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(s),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(s),re=d(b),E(I.$$.fragment,b),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(j,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(b,M){u(b,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(b,w,M),F(T,b,M),u(b,y,M),u(b,k,M),e(k,D),e(k,j),e(j,H),e(k,G),e(k,V),e(V,B),e(k,K),u(b,re,M),F(I,b,M),O=!0},p:ro,i(b){O||(A(T.$$.fragment,b),A(I.$$.fragment,b),O=!0)},o(b){z(T.$$.fragment,b),z(I.$$.fragment,b),O=!1},d(b){b&&s(l),b&&s(w),x(T,b),b&&s(y),b&&s(k),b&&s(re),x(I,b)}}}function Xk(U){let l,_;return l=new io({props:{$$slots:{default:[Jk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Zk(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we,g,S,ve,ze,be,le,xe,Me,Z,pe,de,De,qe,Te,Ne,ke,Ae,Oe,Ze,Pt,St,us,ms,da,fs,gs,Dt,ss,Nt,Ot,Ke,Pe,Lt,bs,ye,ks,ys,Qt,js,qs,It,$s,vt,Rs,Es,wt,Ye,$e,Wt,Fs,ae,ns,Gs,Ht,As,nt,Ut,zs,xs,Bt,Cs,ot,Rt,Ms,rt,Gt,Ps,Vt,Le,Ss,it,Kt,Ds,lt,Yt,pt,Ue,dt,Ee,ct,os,Jt,Ns,Os,Xt,Zt,Be,ea,ht,ut,es,Ls;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="pt",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),es=new Ve({props:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(
            str
        )  # be sure to make your table data text only
        encoding = self.tokenizer(
            table=table,
            queries=item.question,
            answer_coordinates=item.answer_coordinates,
            answer_text=item.answer_text,
            truncation=True,
            padding="max_length",
            return_tensors="pt",
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer)
        return encoding

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>            <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>        )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(
<span class="hljs-meta">... </span>            table=table,
<span class="hljs-meta">... </span>            queries=item.question,
<span class="hljs-meta">... </span>            answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>            answer_text=item.answer_text,
<span class="hljs-meta">... </span>            truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>            padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=t("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=t("TapasTokenizer"),v=t(" to convert table-question pairs into "),w=n("code"),T=t("input_ids"),y=t(", "),k=n("code"),D=t("attention_mask"),j=t(", "),H=n("code"),G=t("token_type_ids"),V=t(" and so on. Again, based on which of the three cases you picked above, "),B=n("a"),K=t("TapasForQuestionAnswering"),re=t(` requires different
inputs to be fine-tuned:`),I=p(),O=n("table"),b=n("thead"),M=n("tr"),R=n("th"),C=n("strong"),N=t("Task"),ee=p(),se=n("th"),ce=n("strong"),ne=t("Required inputs"),te=p(),P=n("tbody"),L=n("tr"),W=n("td"),X=t("Conversational"),Q=p(),Y=n("td"),ge=n("code"),ue=t("input_ids"),_e=t(", "),me=n("code"),oe=t("attention_mask"),je=t(", "),ie=n("code"),we=t("token_type_ids"),g=t(", "),S=n("code"),ve=t("labels"),ze=p(),be=n("tr"),le=n("td"),xe=t("Weak supervision for aggregation"),Me=p(),Z=n("td"),pe=n("code"),de=t("input_ids"),De=t(", "),qe=n("code"),Te=t("attention_mask"),Ne=t(", "),ke=n("code"),Ae=t("token_type_ids"),Oe=t(", "),Ze=n("code"),Pt=t("labels"),St=t(", "),us=n("code"),ms=t("numeric_values"),da=t(", "),fs=n("code"),gs=t("numeric_values_scale"),Dt=t(", "),ss=n("code"),Nt=t("float_answer"),Ot=p(),Ke=n("tr"),Pe=n("td"),Lt=t("Strong supervision for aggregation"),bs=p(),ye=n("td"),ks=n("code"),ys=t("input ids"),Qt=t(", "),js=n("code"),qs=t("attention mask"),It=t(", "),$s=n("code"),vt=t("token type ids"),Rs=t(", "),Es=n("code"),wt=t("labels"),Ye=t(", "),$e=n("code"),Wt=t("aggregation_labels"),Fs=p(),ae=n("p"),ns=n("a"),Gs=t("TapasTokenizer"),Ht=t(" creates the "),As=n("code"),nt=t("labels"),Ut=t(", "),zs=n("code"),xs=t("numeric_values"),Bt=t(" and "),Cs=n("code"),ot=t("numeric_values_scale"),Rt=t(" based on the "),Ms=n("code"),rt=t("answer_coordinates"),Gt=t(" and "),Ps=n("code"),Vt=t("answer_text"),Le=t(" columns of the TSV file. The "),Ss=n("code"),it=t("float_answer"),Kt=t(" and "),Ds=n("code"),lt=t("aggregation_labels"),Yt=t(" are already in the TSV file of step 2. Here\u2019s an example:"),pt=p(),$(Ue.$$.fragment),dt=p(),Ee=n("p"),ct=t("Note that "),os=n("a"),Jt=t("TapasTokenizer"),Ns=t(" expects the data of the table to be "),Os=n("strong"),Xt=t("text-only"),Zt=t(". You can use "),Be=n("code"),ea=t(".astype(str)"),ht=t(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ut=p(),$(es.$$.fragment),this.h()},l(q){l=o(q,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(s),v=a(J," to convert table-question pairs into "),w=o(J,"CODE",{});var sa=r(w);T=a(sa,"input_ids"),sa.forEach(s),y=a(J,", "),k=o(J,"CODE",{});var Ca=r(k);D=a(Ca,"attention_mask"),Ca.forEach(s),j=a(J,", "),H=o(J,"CODE",{});var ca=r(H);G=a(ca,"token_type_ids"),ca.forEach(s),V=a(J," and so on. Again, based on which of the three cases you picked above, "),B=o(J,"A",{href:!0});var Qs=r(B);K=a(Qs,"TapasForQuestionAnswering"),Qs.forEach(s),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(s),I=d(q),O=o(q,"TABLE",{});var ts=r(O);b=o(ts,"THEAD",{});var ta=r(b);M=o(ta,"TR",{});var rs=r(M);R=o(rs,"TH",{});var Ma=r(R);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(s),Ma.forEach(s),ee=d(rs),se=o(rs,"TH",{});var Pa=r(se);ce=o(Pa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(s),Pa.forEach(s),rs.forEach(s),ta.forEach(s),te=d(ts),P=o(ts,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var mt=r(L);W=o(mt,"TD",{});var bt=r(W);X=a(bt,"Conversational"),bt.forEach(s),Q=d(mt),Y=o(mt,"TD",{});var Re=r(Y);ge=o(Re,"CODE",{});var Sa=r(ge);ue=a(Sa,"input_ids"),Sa.forEach(s),_e=a(Re,", "),me=o(Re,"CODE",{});var ua=r(me);oe=a(ua,"attention_mask"),ua.forEach(s),je=a(Re,", "),ie=o(Re,"CODE",{});var kt=r(ie);we=a(kt,"token_type_ids"),kt.forEach(s),g=a(Re,", "),S=o(Re,"CODE",{});var na=r(S);ve=a(na,"labels"),na.forEach(s),Re.forEach(s),mt.forEach(s),ze=d(Ie),be=o(Ie,"TR",{});var ft=r(be);le=o(ft,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(s),Me=d(ft),Z=o(ft,"TD",{});var fe=r(Z);pe=o(fe,"CODE",{});var Da=r(pe);de=a(Da,"input_ids"),Da.forEach(s),De=a(fe,", "),qe=o(fe,"CODE",{});var yt=r(qe);Te=a(yt,"attention_mask"),yt.forEach(s),Ne=a(fe,", "),ke=o(fe,"CODE",{});var Na=r(ke);Ae=a(Na,"token_type_ids"),Na.forEach(s),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Pt=a(Oa,"labels"),Oa.forEach(s),St=a(fe,", "),us=o(fe,"CODE",{});var fa=r(us);ms=a(fa,"numeric_values"),fa.forEach(s),da=a(fe,", "),fs=o(fe,"CODE",{});var _s=r(fs);gs=a(_s,"numeric_values_scale"),_s.forEach(s),Dt=a(fe,", "),ss=o(fe,"CODE",{});var oa=r(ss);Nt=a(oa,"float_answer"),oa.forEach(s),fe.forEach(s),ft.forEach(s),Ot=d(Ie),Ke=o(Ie,"TR",{});var gt=r(Ke);Pe=o(gt,"TD",{});var La=r(Pe);Lt=a(La,"Strong supervision for aggregation"),La.forEach(s),bs=d(gt),ye=o(gt,"TD",{});var Fe=r(ye);ks=o(Fe,"CODE",{});var Qa=r(ks);ys=a(Qa,"input ids"),Qa.forEach(s),Qt=a(Fe,", "),js=o(Fe,"CODE",{});var ra=r(js);qs=a(ra,"attention mask"),ra.forEach(s),It=a(Fe,", "),$s=o(Fe,"CODE",{});var Ia=r($s);vt=a(Ia,"token type ids"),Ia.forEach(s),Rs=a(Fe,", "),Es=o(Fe,"CODE",{});var Wa=r(Es);wt=a(Wa,"labels"),Wa.forEach(s),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Wt=a(Ha,"aggregation_labels"),Ha.forEach(s),Fe.forEach(s),gt.forEach(s),Ie.forEach(s),ts.forEach(s),Fs=d(q),ae=o(q,"P",{});var he=r(ae);ns=o(he,"A",{href:!0});var Ua=r(ns);Gs=a(Ua,"TapasTokenizer"),Ua.forEach(s),Ht=a(he," creates the "),As=o(he,"CODE",{});var ia=r(As);nt=a(ia,"labels"),ia.forEach(s),Ut=a(he,", "),zs=o(he,"CODE",{});var Ba=r(zs);xs=a(Ba,"numeric_values"),Ba.forEach(s),Bt=a(he," and "),Cs=o(he,"CODE",{});var Ra=r(Cs);ot=a(Ra,"numeric_values_scale"),Ra.forEach(s),Rt=a(he," based on the "),Ms=o(he,"CODE",{});var ga=r(Ms);rt=a(ga,"answer_coordinates"),ga.forEach(s),Gt=a(he," and "),Ps=o(he,"CODE",{});var jt=r(Ps);Vt=a(jt,"answer_text"),jt.forEach(s),Le=a(he," columns of the TSV file. The "),Ss=o(he,"CODE",{});var Ga=r(Ss);it=a(Ga,"float_answer"),Ga.forEach(s),Kt=a(he," and "),Ds=o(he,"CODE",{});var _a=r(Ds);lt=a(_a,"aggregation_labels"),_a.forEach(s),Yt=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(s),pt=d(q),E(Ue.$$.fragment,q),dt=d(q),Ee=o(q,"P",{});var Ce=r(Ee);ct=a(Ce,"Note that "),os=o(Ce,"A",{href:!0});var la=r(os);Jt=a(la,"TapasTokenizer"),la.forEach(s),Ns=a(Ce," expects the data of the table to be "),Os=o(Ce,"STRONG",{});var Is=r(Os);Xt=a(Is,"text-only"),Is.forEach(s),Zt=a(Ce,". You can use "),Be=o(Ce,"CODE",{});var pa=r(Be);ea=a(pa,".astype(str)"),pa.forEach(s),ht=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(s),ut=d(q),E(es.$$.fragment,q),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(B,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ns,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(os,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer")},m(q,J){u(q,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,j),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),u(q,I,J),u(q,O,J),e(O,b),e(b,M),e(M,R),e(R,C),e(C,N),e(M,ee),e(M,se),e(se,ce),e(ce,ne),e(O,te),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,oe),e(Y,je),e(Y,ie),e(ie,we),e(Y,g),e(Y,S),e(S,ve),e(P,ze),e(P,be),e(be,le),e(le,xe),e(be,Me),e(be,Z),e(Z,pe),e(pe,de),e(Z,De),e(Z,qe),e(qe,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Pt),e(Z,St),e(Z,us),e(us,ms),e(Z,da),e(Z,fs),e(fs,gs),e(Z,Dt),e(Z,ss),e(ss,Nt),e(P,Ot),e(P,Ke),e(Ke,Pe),e(Pe,Lt),e(Ke,bs),e(Ke,ye),e(ye,ks),e(ks,ys),e(ye,Qt),e(ye,js),e(js,qs),e(ye,It),e(ye,$s),e($s,vt),e(ye,Rs),e(ye,Es),e(Es,wt),e(ye,Ye),e(ye,$e),e($e,Wt),u(q,Fs,J),u(q,ae,J),e(ae,ns),e(ns,Gs),e(ae,Ht),e(ae,As),e(As,nt),e(ae,Ut),e(ae,zs),e(zs,xs),e(ae,Bt),e(ae,Cs),e(Cs,ot),e(ae,Rt),e(ae,Ms),e(Ms,rt),e(ae,Gt),e(ae,Ps),e(Ps,Vt),e(ae,Le),e(ae,Ss),e(Ss,it),e(ae,Kt),e(ae,Ds),e(Ds,lt),e(ae,Yt),u(q,pt,J),F(Ue,q,J),u(q,dt,J),u(q,Ee,J),e(Ee,ct),e(Ee,os),e(os,Jt),e(Ee,Ns),e(Ee,Os),e(Os,Xt),e(Ee,Zt),e(Ee,Be),e(Be,ea),e(Ee,ht),u(q,ut,J),F(es,q,J),Ls=!0},p:ro,i(q){Ls||(A(Ue.$$.fragment,q),A(es.$$.fragment,q),Ls=!0)},o(q){z(Ue.$$.fragment,q),z(es.$$.fragment,q),Ls=!1},d(q){q&&s(l),q&&s(I),q&&s(O),q&&s(Fs),q&&s(ae),q&&s(pt),x(Ue,q),q&&s(dt),q&&s(Ee),q&&s(ut),x(es,q)}}}function ey(U){let l,_;return l=new io({props:{$$slots:{default:[Zk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sy(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we,g,S,ve,ze,be,le,xe,Me,Z,pe,de,De,qe,Te,Ne,ke,Ae,Oe,Ze,Pt,St,us,ms,da,fs,gs,Dt,ss,Nt,Ot,Ke,Pe,Lt,bs,ye,ks,ys,Qt,js,qs,It,$s,vt,Rs,Es,wt,Ye,$e,Wt,Fs,ae,ns,Gs,Ht,As,nt,Ut,zs,xs,Bt,Cs,ot,Rt,Ms,rt,Gt,Ps,Vt,Le,Ss,it,Kt,Ds,lt,Yt,pt,Ue,dt,Ee,ct,os,Jt,Ns,Os,Xt,Zt,Be,ea,ht,ut,es,Ls;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="tf",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),es=new Ve({props:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(
                str
            )  # be sure to make your table data text only
            encoding = self.tokenizer(
                table=table,
                queries=item.question,
                answer_coordinates=item.answer_coordinates,
                answer_text=item.answer_text,
                truncation=True,
                padding="max_length",
                return_tensors="tf",
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val, 0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
            yield encoding["input_ids"], encoding["attention_mask"], encoding["numeric_values"], encoding[
                "numeric_values_scale"
            ], encoding["token_type_ids"], encoding["labels"], encoding["float_answer"]

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
output_signature = (
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512, 7), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
)
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>                <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>            )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(
<span class="hljs-meta">... </span>                table=table,
<span class="hljs-meta">... </span>                queries=item.question,
<span class="hljs-meta">... </span>                answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>                answer_text=item.answer_text,
<span class="hljs-meta">... </span>                truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>], encoding[<span class="hljs-string">&quot;numeric_values&quot;</span>], encoding[
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;numeric_values_scale&quot;</span>
<span class="hljs-meta">... </span>            ], encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>], encoding[<span class="hljs-string">&quot;labels&quot;</span>], encoding[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>, <span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=t("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=t("TapasTokenizer"),v=t(" to convert table-question pairs into "),w=n("code"),T=t("input_ids"),y=t(", "),k=n("code"),D=t("attention_mask"),j=t(", "),H=n("code"),G=t("token_type_ids"),V=t(" and so on. Again, based on which of the three cases you picked above, "),B=n("a"),K=t("TFTapasForQuestionAnswering"),re=t(` requires different
inputs to be fine-tuned:`),I=p(),O=n("table"),b=n("thead"),M=n("tr"),R=n("th"),C=n("strong"),N=t("Task"),ee=p(),se=n("th"),ce=n("strong"),ne=t("Required inputs"),te=p(),P=n("tbody"),L=n("tr"),W=n("td"),X=t("Conversational"),Q=p(),Y=n("td"),ge=n("code"),ue=t("input_ids"),_e=t(", "),me=n("code"),oe=t("attention_mask"),je=t(", "),ie=n("code"),we=t("token_type_ids"),g=t(", "),S=n("code"),ve=t("labels"),ze=p(),be=n("tr"),le=n("td"),xe=t("Weak supervision for aggregation"),Me=p(),Z=n("td"),pe=n("code"),de=t("input_ids"),De=t(", "),qe=n("code"),Te=t("attention_mask"),Ne=t(", "),ke=n("code"),Ae=t("token_type_ids"),Oe=t(", "),Ze=n("code"),Pt=t("labels"),St=t(", "),us=n("code"),ms=t("numeric_values"),da=t(", "),fs=n("code"),gs=t("numeric_values_scale"),Dt=t(", "),ss=n("code"),Nt=t("float_answer"),Ot=p(),Ke=n("tr"),Pe=n("td"),Lt=t("Strong supervision for aggregation"),bs=p(),ye=n("td"),ks=n("code"),ys=t("input ids"),Qt=t(", "),js=n("code"),qs=t("attention mask"),It=t(", "),$s=n("code"),vt=t("token type ids"),Rs=t(", "),Es=n("code"),wt=t("labels"),Ye=t(", "),$e=n("code"),Wt=t("aggregation_labels"),Fs=p(),ae=n("p"),ns=n("a"),Gs=t("TapasTokenizer"),Ht=t(" creates the "),As=n("code"),nt=t("labels"),Ut=t(", "),zs=n("code"),xs=t("numeric_values"),Bt=t(" and "),Cs=n("code"),ot=t("numeric_values_scale"),Rt=t(" based on the "),Ms=n("code"),rt=t("answer_coordinates"),Gt=t(" and "),Ps=n("code"),Vt=t("answer_text"),Le=t(" columns of the TSV file. The "),Ss=n("code"),it=t("float_answer"),Kt=t(" and "),Ds=n("code"),lt=t("aggregation_labels"),Yt=t(" are already in the TSV file of step 2. Here\u2019s an example:"),pt=p(),$(Ue.$$.fragment),dt=p(),Ee=n("p"),ct=t("Note that "),os=n("a"),Jt=t("TapasTokenizer"),Ns=t(" expects the data of the table to be "),Os=n("strong"),Xt=t("text-only"),Zt=t(". You can use "),Be=n("code"),ea=t(".astype(str)"),ht=t(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ut=p(),$(es.$$.fragment),this.h()},l(q){l=o(q,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(s),v=a(J," to convert table-question pairs into "),w=o(J,"CODE",{});var sa=r(w);T=a(sa,"input_ids"),sa.forEach(s),y=a(J,", "),k=o(J,"CODE",{});var Ca=r(k);D=a(Ca,"attention_mask"),Ca.forEach(s),j=a(J,", "),H=o(J,"CODE",{});var ca=r(H);G=a(ca,"token_type_ids"),ca.forEach(s),V=a(J," and so on. Again, based on which of the three cases you picked above, "),B=o(J,"A",{href:!0});var Qs=r(B);K=a(Qs,"TFTapasForQuestionAnswering"),Qs.forEach(s),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(s),I=d(q),O=o(q,"TABLE",{});var ts=r(O);b=o(ts,"THEAD",{});var ta=r(b);M=o(ta,"TR",{});var rs=r(M);R=o(rs,"TH",{});var Ma=r(R);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(s),Ma.forEach(s),ee=d(rs),se=o(rs,"TH",{});var Pa=r(se);ce=o(Pa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(s),Pa.forEach(s),rs.forEach(s),ta.forEach(s),te=d(ts),P=o(ts,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var mt=r(L);W=o(mt,"TD",{});var bt=r(W);X=a(bt,"Conversational"),bt.forEach(s),Q=d(mt),Y=o(mt,"TD",{});var Re=r(Y);ge=o(Re,"CODE",{});var Sa=r(ge);ue=a(Sa,"input_ids"),Sa.forEach(s),_e=a(Re,", "),me=o(Re,"CODE",{});var ua=r(me);oe=a(ua,"attention_mask"),ua.forEach(s),je=a(Re,", "),ie=o(Re,"CODE",{});var kt=r(ie);we=a(kt,"token_type_ids"),kt.forEach(s),g=a(Re,", "),S=o(Re,"CODE",{});var na=r(S);ve=a(na,"labels"),na.forEach(s),Re.forEach(s),mt.forEach(s),ze=d(Ie),be=o(Ie,"TR",{});var ft=r(be);le=o(ft,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(s),Me=d(ft),Z=o(ft,"TD",{});var fe=r(Z);pe=o(fe,"CODE",{});var Da=r(pe);de=a(Da,"input_ids"),Da.forEach(s),De=a(fe,", "),qe=o(fe,"CODE",{});var yt=r(qe);Te=a(yt,"attention_mask"),yt.forEach(s),Ne=a(fe,", "),ke=o(fe,"CODE",{});var Na=r(ke);Ae=a(Na,"token_type_ids"),Na.forEach(s),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Pt=a(Oa,"labels"),Oa.forEach(s),St=a(fe,", "),us=o(fe,"CODE",{});var fa=r(us);ms=a(fa,"numeric_values"),fa.forEach(s),da=a(fe,", "),fs=o(fe,"CODE",{});var _s=r(fs);gs=a(_s,"numeric_values_scale"),_s.forEach(s),Dt=a(fe,", "),ss=o(fe,"CODE",{});var oa=r(ss);Nt=a(oa,"float_answer"),oa.forEach(s),fe.forEach(s),ft.forEach(s),Ot=d(Ie),Ke=o(Ie,"TR",{});var gt=r(Ke);Pe=o(gt,"TD",{});var La=r(Pe);Lt=a(La,"Strong supervision for aggregation"),La.forEach(s),bs=d(gt),ye=o(gt,"TD",{});var Fe=r(ye);ks=o(Fe,"CODE",{});var Qa=r(ks);ys=a(Qa,"input ids"),Qa.forEach(s),Qt=a(Fe,", "),js=o(Fe,"CODE",{});var ra=r(js);qs=a(ra,"attention mask"),ra.forEach(s),It=a(Fe,", "),$s=o(Fe,"CODE",{});var Ia=r($s);vt=a(Ia,"token type ids"),Ia.forEach(s),Rs=a(Fe,", "),Es=o(Fe,"CODE",{});var Wa=r(Es);wt=a(Wa,"labels"),Wa.forEach(s),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Wt=a(Ha,"aggregation_labels"),Ha.forEach(s),Fe.forEach(s),gt.forEach(s),Ie.forEach(s),ts.forEach(s),Fs=d(q),ae=o(q,"P",{});var he=r(ae);ns=o(he,"A",{href:!0});var Ua=r(ns);Gs=a(Ua,"TapasTokenizer"),Ua.forEach(s),Ht=a(he," creates the "),As=o(he,"CODE",{});var ia=r(As);nt=a(ia,"labels"),ia.forEach(s),Ut=a(he,", "),zs=o(he,"CODE",{});var Ba=r(zs);xs=a(Ba,"numeric_values"),Ba.forEach(s),Bt=a(he," and "),Cs=o(he,"CODE",{});var Ra=r(Cs);ot=a(Ra,"numeric_values_scale"),Ra.forEach(s),Rt=a(he," based on the "),Ms=o(he,"CODE",{});var ga=r(Ms);rt=a(ga,"answer_coordinates"),ga.forEach(s),Gt=a(he," and "),Ps=o(he,"CODE",{});var jt=r(Ps);Vt=a(jt,"answer_text"),jt.forEach(s),Le=a(he," columns of the TSV file. The "),Ss=o(he,"CODE",{});var Ga=r(Ss);it=a(Ga,"float_answer"),Ga.forEach(s),Kt=a(he," and "),Ds=o(he,"CODE",{});var _a=r(Ds);lt=a(_a,"aggregation_labels"),_a.forEach(s),Yt=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(s),pt=d(q),E(Ue.$$.fragment,q),dt=d(q),Ee=o(q,"P",{});var Ce=r(Ee);ct=a(Ce,"Note that "),os=o(Ce,"A",{href:!0});var la=r(os);Jt=a(la,"TapasTokenizer"),la.forEach(s),Ns=a(Ce," expects the data of the table to be "),Os=o(Ce,"STRONG",{});var Is=r(Os);Xt=a(Is,"text-only"),Is.forEach(s),Zt=a(Ce,". You can use "),Be=o(Ce,"CODE",{});var pa=r(Be);ea=a(pa,".astype(str)"),pa.forEach(s),ht=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(s),ut=d(q),E(es.$$.fragment,q),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(B,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ns,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(os,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer")},m(q,J){u(q,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,j),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),u(q,I,J),u(q,O,J),e(O,b),e(b,M),e(M,R),e(R,C),e(C,N),e(M,ee),e(M,se),e(se,ce),e(ce,ne),e(O,te),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,oe),e(Y,je),e(Y,ie),e(ie,we),e(Y,g),e(Y,S),e(S,ve),e(P,ze),e(P,be),e(be,le),e(le,xe),e(be,Me),e(be,Z),e(Z,pe),e(pe,de),e(Z,De),e(Z,qe),e(qe,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Pt),e(Z,St),e(Z,us),e(us,ms),e(Z,da),e(Z,fs),e(fs,gs),e(Z,Dt),e(Z,ss),e(ss,Nt),e(P,Ot),e(P,Ke),e(Ke,Pe),e(Pe,Lt),e(Ke,bs),e(Ke,ye),e(ye,ks),e(ks,ys),e(ye,Qt),e(ye,js),e(js,qs),e(ye,It),e(ye,$s),e($s,vt),e(ye,Rs),e(ye,Es),e(Es,wt),e(ye,Ye),e(ye,$e),e($e,Wt),u(q,Fs,J),u(q,ae,J),e(ae,ns),e(ns,Gs),e(ae,Ht),e(ae,As),e(As,nt),e(ae,Ut),e(ae,zs),e(zs,xs),e(ae,Bt),e(ae,Cs),e(Cs,ot),e(ae,Rt),e(ae,Ms),e(Ms,rt),e(ae,Gt),e(ae,Ps),e(Ps,Vt),e(ae,Le),e(ae,Ss),e(Ss,it),e(ae,Kt),e(ae,Ds),e(Ds,lt),e(ae,Yt),u(q,pt,J),F(Ue,q,J),u(q,dt,J),u(q,Ee,J),e(Ee,ct),e(Ee,os),e(os,Jt),e(Ee,Ns),e(Ee,Os),e(Os,Xt),e(Ee,Zt),e(Ee,Be),e(Be,ea),e(Ee,ht),u(q,ut,J),F(es,q,J),Ls=!0},p:ro,i(q){Ls||(A(Ue.$$.fragment,q),A(es.$$.fragment,q),Ls=!0)},o(q){z(Ue.$$.fragment,q),z(es.$$.fragment,q),Ls=!1},d(q){q&&s(l),q&&s(I),q&&s(O),q&&s(Fs),q&&s(ae),q&&s(pt),x(Ue,q),q&&s(dt),q&&s(Ee),q&&s(ut),x(es,q)}}}function ty(U){let l,_;return l=new io({props:{$$slots:{default:[sy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ay(U){let l,_,c,f,v,w,T,y;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels,
            numeric_values=numeric_values,
            numeric_values_scale=numeric_values_scale,
            float_answer=float_answer,
        )
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(
<span class="hljs-meta">... </span>            input_ids=input_ids,
<span class="hljs-meta">... </span>            attention_mask=attention_mask,
<span class="hljs-meta">... </span>            token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>            labels=labels,
<span class="hljs-meta">... </span>            numeric_values=numeric_values,
<span class="hljs-meta">... </span>            numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>            float_answer=float_answer,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=n("p"),_=t("You can then fine-tune "),c=n("a"),f=t("TapasForQuestionAnswering"),v=t(" as follows (shown here for the weak supervision for aggregation case):"),w=p(),$(T.$$.fragment),this.h()},l(k){l=o(k,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var j=r(c);f=a(j,"TapasForQuestionAnswering"),j.forEach(s),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(s),w=d(k),E(T.$$.fragment,k),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(k,D){u(k,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(k,w,D),F(T,k,D),y=!0},p:ro,i(k){y||(A(T.$$.fragment,k),y=!0)},o(k){z(T.$$.fragment,k),y=!1},d(k){k&&s(l),k&&s(w),x(T,k)}}}function ny(U){let l,_;return l=new io({props:{$$slots:{default:[ay]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function oy(U){let l,_,c,f,v,w,T,y;return T=new Ve({props:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels,
                numeric_values=numeric_values,
                numeric_values_scale=numeric_values_scale,
                float_answer=float_answer,
            )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>            outputs = model(
<span class="hljs-meta">... </span>                input_ids=input_ids,
<span class="hljs-meta">... </span>                attention_mask=attention_mask,
<span class="hljs-meta">... </span>                token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels,
<span class="hljs-meta">... </span>                numeric_values=numeric_values,
<span class="hljs-meta">... </span>                numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>                float_answer=float_answer,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=n("p"),_=t("You can then fine-tune "),c=n("a"),f=t("TFTapasForQuestionAnswering"),v=t(" as follows (shown here for the weak supervision for aggregation case):"),w=p(),$(T.$$.fragment),this.h()},l(k){l=o(k,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var j=r(c);f=a(j,"TFTapasForQuestionAnswering"),j.forEach(s),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(s),w=d(k),E(T.$$.fragment,k),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(k,D){u(k,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(k,w,D),F(T,k,D),y=!0},p:ro,i(k){y||(A(T.$$.fragment,k),y=!0)},o(k){z(T.$$.fragment,k),y=!1},d(k){k&&s(l),k&&s(w),x(T,k)}}}function ry(U){let l,_;return l=new io({props:{$$slots:{default:[oy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function iy(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=t("Here we explain how you can use "),c=n("a"),f=t("TapasForQuestionAnswering"),v=t(" or "),w=n("a"),T=t("TFTapasForQuestionAnswering"),y=t(" for inference (i.e. making predictions on new data). For inference, only "),k=n("code"),D=t("input_ids"),j=t(", "),H=n("code"),G=t("attention_mask"),V=t(" and "),B=n("code"),K=t("token_type_ids"),re=t(" (which you can obtain using "),I=n("a"),O=t("TapasTokenizer"),b=t(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n("code"),R=t("convert_logits_to_predictions"),C=t(" method to convert these into predicted coordinates and optional aggregation indices."),N=p(),ee=n("p"),se=t("However, note that inference is "),ce=n("strong"),ne=t("different"),te=t(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),P=p(),$(L.$$.fragment),this.h()},l(X){l=o(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=o(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(s),v=a(Q," or "),w=o(Q,"A",{href:!0});var ge=r(w);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(s),y=a(Q," for inference (i.e. making predictions on new data). For inference, only "),k=o(Q,"CODE",{});var ue=r(k);D=a(ue,"input_ids"),ue.forEach(s),j=a(Q,", "),H=o(Q,"CODE",{});var _e=r(H);G=a(_e,"attention_mask"),_e.forEach(s),V=a(Q," and "),B=o(Q,"CODE",{});var me=r(B);K=a(me,"token_type_ids"),me.forEach(s),re=a(Q," (which you can obtain using "),I=o(Q,"A",{href:!0});var oe=r(I);O=a(oe,"TapasTokenizer"),oe.forEach(s),b=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o(Q,"CODE",{});var je=r(M);R=a(je,"convert_logits_to_predictions"),je.forEach(s),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(s),N=d(X),ee=o(X,"P",{});var ie=r(ee);se=a(ie,"However, note that inference is "),ce=o(ie,"STRONG",{});var we=r(ce);ne=a(we,"different"),we.forEach(s),te=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(s),P=d(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(w,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){u(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,j),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),e(l,I),e(I,O),e(l,b),e(l,M),e(M,R),e(l,C),u(X,N,Q),u(X,ee,Q),e(ee,se),e(ee,ce),e(ce,ne),e(ee,te),u(X,P,Q),F(L,X,Q),W=!0},p:ro,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&s(l),X&&s(N),X&&s(ee),X&&s(P),x(L,X)}}}function ly(U){let l,_;return l=new io({props:{$$slots:{default:[iy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function py(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te;return ne=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits, outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits, outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=t("Here we explain how you can use "),c=n("a"),f=t("TFTapasForQuestionAnswering"),v=t(" for inference (i.e. making predictions on new data). For inference, only "),w=n("code"),T=t("input_ids"),y=t(", "),k=n("code"),D=t("attention_mask"),j=t(" and "),H=n("code"),G=t("token_type_ids"),V=t(" (which you can obtain using "),B=n("a"),K=t("TapasTokenizer"),re=t(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n("code"),O=t("convert_logits_to_predictions"),b=t(" method to convert these into predicted coordinates and optional aggregation indices."),M=p(),R=n("p"),C=t("However, note that inference is "),N=n("strong"),ee=t("different"),se=t(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=p(),$(ne.$$.fragment),this.h()},l(P){l=o(P,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=o(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(s),v=a(L," for inference (i.e. making predictions on new data). For inference, only "),w=o(L,"CODE",{});var X=r(w);T=a(X,"input_ids"),X.forEach(s),y=a(L,", "),k=o(L,"CODE",{});var Q=r(k);D=a(Q,"attention_mask"),Q.forEach(s),j=a(L," and "),H=o(L,"CODE",{});var Y=r(H);G=a(Y,"token_type_ids"),Y.forEach(s),V=a(L," (which you can obtain using "),B=o(L,"A",{href:!0});var ge=r(B);K=a(ge,"TapasTokenizer"),ge.forEach(s),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o(L,"CODE",{});var ue=r(I);O=a(ue,"convert_logits_to_predictions"),ue.forEach(s),b=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(s),M=d(P),R=o(P,"P",{});var _e=r(R);C=a(_e,"However, note that inference is "),N=o(_e,"STRONG",{});var me=r(N);ee=a(me,"different"),me.forEach(s),se=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(s),ce=d(P),E(ne.$$.fragment,P),this.h()},h(){h(c,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(B,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer")},m(P,L){u(P,l,L),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,j),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),e(l,I),e(I,O),e(l,b),u(P,M,L),u(P,R,L),e(R,C),e(R,N),e(N,ee),e(R,se),u(P,ce,L),F(ne,P,L),te=!0},p:ro,i(P){te||(A(ne.$$.fragment,P),te=!0)},o(P){z(ne.$$.fragment,P),te=!1},d(P){P&&s(l),P&&s(M),P&&s(R),P&&s(ce),x(ne,P)}}}function dy(U){let l,_;return l=new io({props:{$$slots:{default:[py]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function cy(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function hy(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function uy(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function my(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function fy(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we;return{c(){l=n("p"),_=t("TF 2.0 models accepts two formats as inputs:"),c=p(),f=n("ul"),v=n("li"),w=t("having all inputs as keyword arguments (like PyTorch models), or"),T=p(),y=n("li"),k=t("having all inputs as a list, tuple or dict in the first positional arguments."),D=p(),j=n("p"),H=t("This second option is useful when using "),G=n("code"),V=t("tf.keras.Model.fit"),B=t(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=t("model(inputs)"),I=t("."),O=p(),b=n("p"),M=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=p(),C=n("ul"),N=n("li"),ee=t("a single Tensor with "),se=n("code"),ce=t("input_ids"),ne=t(" only and nothing else: "),te=n("code"),P=t("model(inputs_ids)"),L=p(),W=n("li"),X=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=t("model([input_ids, attention_mask])"),ge=t(" or "),ue=n("code"),_e=t("model([input_ids, attention_mask, token_type_ids])"),me=p(),oe=n("li"),je=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(s),c=d(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(s),T=d(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(s),ve.forEach(s),D=d(g),j=o(g,"P",{});var le=r(j);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(s),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(s),I=a(le,"."),le.forEach(s),O=d(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(s),R=d(g),C=o(g,"UL",{});var pe=r(C);N=o(pe,"LI",{});var de=r(N);ee=a(de,"a single Tensor with "),se=o(de,"CODE",{});var De=r(se);ce=a(De,"input_ids"),De.forEach(s),ne=a(de," only and nothing else: "),te=o(de,"CODE",{});var qe=r(te);P=a(qe,"model(inputs_ids)"),qe.forEach(s),de.forEach(s),L=d(pe),W=o(pe,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(s),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(s),Te.forEach(s),me=d(pe),oe=o(pe,"LI",{});var Ae=r(oe);je=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(s),Ae.forEach(s),pe.forEach(s)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,S),u(g,j,S),e(j,H),e(j,G),e(G,V),e(j,B),e(j,K),e(K,re),e(j,I),u(g,O,S),u(g,b,S),e(b,M),u(g,R,S),u(g,C,S),e(C,N),e(N,ee),e(N,se),e(se,ce),e(N,ne),e(N,te),e(te,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,je),e(oe,ie),e(ie,we)},d(g){g&&s(l),g&&s(c),g&&s(f),g&&s(D),g&&s(j),g&&s(O),g&&s(b),g&&s(R),g&&s(C)}}}function gy(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function _y(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we;return{c(){l=n("p"),_=t("TF 2.0 models accepts two formats as inputs:"),c=p(),f=n("ul"),v=n("li"),w=t("having all inputs as keyword arguments (like PyTorch models), or"),T=p(),y=n("li"),k=t("having all inputs as a list, tuple or dict in the first positional arguments."),D=p(),j=n("p"),H=t("This second option is useful when using "),G=n("code"),V=t("tf.keras.Model.fit"),B=t(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=t("model(inputs)"),I=t("."),O=p(),b=n("p"),M=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=p(),C=n("ul"),N=n("li"),ee=t("a single Tensor with "),se=n("code"),ce=t("input_ids"),ne=t(" only and nothing else: "),te=n("code"),P=t("model(inputs_ids)"),L=p(),W=n("li"),X=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=t("model([input_ids, attention_mask])"),ge=t(" or "),ue=n("code"),_e=t("model([input_ids, attention_mask, token_type_ids])"),me=p(),oe=n("li"),je=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(s),c=d(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(s),T=d(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(s),ve.forEach(s),D=d(g),j=o(g,"P",{});var le=r(j);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(s),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(s),I=a(le,"."),le.forEach(s),O=d(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(s),R=d(g),C=o(g,"UL",{});var pe=r(C);N=o(pe,"LI",{});var de=r(N);ee=a(de,"a single Tensor with "),se=o(de,"CODE",{});var De=r(se);ce=a(De,"input_ids"),De.forEach(s),ne=a(de," only and nothing else: "),te=o(de,"CODE",{});var qe=r(te);P=a(qe,"model(inputs_ids)"),qe.forEach(s),de.forEach(s),L=d(pe),W=o(pe,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(s),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(s),Te.forEach(s),me=d(pe),oe=o(pe,"LI",{});var Ae=r(oe);je=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(s),Ae.forEach(s),pe.forEach(s)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,S),u(g,j,S),e(j,H),e(j,G),e(G,V),e(j,B),e(j,K),e(K,re),e(j,I),u(g,O,S),u(g,b,S),e(b,M),u(g,R,S),u(g,C,S),e(C,N),e(N,ee),e(N,se),e(se,ce),e(N,ne),e(N,te),e(te,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,je),e(oe,ie),e(ie,we)},d(g){g&&s(l),g&&s(c),g&&s(f),g&&s(D),g&&s(j),g&&s(O),g&&s(b),g&&s(R),g&&s(C)}}}function Ty(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function vy(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we;return{c(){l=n("p"),_=t("TF 2.0 models accepts two formats as inputs:"),c=p(),f=n("ul"),v=n("li"),w=t("having all inputs as keyword arguments (like PyTorch models), or"),T=p(),y=n("li"),k=t("having all inputs as a list, tuple or dict in the first positional arguments."),D=p(),j=n("p"),H=t("This second option is useful when using "),G=n("code"),V=t("tf.keras.Model.fit"),B=t(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=t("model(inputs)"),I=t("."),O=p(),b=n("p"),M=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=p(),C=n("ul"),N=n("li"),ee=t("a single Tensor with "),se=n("code"),ce=t("input_ids"),ne=t(" only and nothing else: "),te=n("code"),P=t("model(inputs_ids)"),L=p(),W=n("li"),X=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=t("model([input_ids, attention_mask])"),ge=t(" or "),ue=n("code"),_e=t("model([input_ids, attention_mask, token_type_ids])"),me=p(),oe=n("li"),je=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(s),c=d(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(s),T=d(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(s),ve.forEach(s),D=d(g),j=o(g,"P",{});var le=r(j);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(s),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(s),I=a(le,"."),le.forEach(s),O=d(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(s),R=d(g),C=o(g,"UL",{});var pe=r(C);N=o(pe,"LI",{});var de=r(N);ee=a(de,"a single Tensor with "),se=o(de,"CODE",{});var De=r(se);ce=a(De,"input_ids"),De.forEach(s),ne=a(de," only and nothing else: "),te=o(de,"CODE",{});var qe=r(te);P=a(qe,"model(inputs_ids)"),qe.forEach(s),de.forEach(s),L=d(pe),W=o(pe,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(s),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(s),Te.forEach(s),me=d(pe),oe=o(pe,"LI",{});var Ae=r(oe);je=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(s),Ae.forEach(s),pe.forEach(s)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,S),u(g,j,S),e(j,H),e(j,G),e(G,V),e(j,B),e(j,K),e(K,re),e(j,I),u(g,O,S),u(g,b,S),e(b,M),u(g,R,S),u(g,C,S),e(C,N),e(N,ee),e(N,se),e(se,ce),e(N,ne),e(N,te),e(te,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,je),e(oe,ie),e(ie,we)},d(g){g&&s(l),g&&s(c),g&&s(f),g&&s(D),g&&s(j),g&&s(O),g&&s(b),g&&s(R),g&&s(C)}}}function wy(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function by(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we;return{c(){l=n("p"),_=t("TF 2.0 models accepts two formats as inputs:"),c=p(),f=n("ul"),v=n("li"),w=t("having all inputs as keyword arguments (like PyTorch models), or"),T=p(),y=n("li"),k=t("having all inputs as a list, tuple or dict in the first positional arguments."),D=p(),j=n("p"),H=t("This second option is useful when using "),G=n("code"),V=t("tf.keras.Model.fit"),B=t(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=t("model(inputs)"),I=t("."),O=p(),b=n("p"),M=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=p(),C=n("ul"),N=n("li"),ee=t("a single Tensor with "),se=n("code"),ce=t("input_ids"),ne=t(" only and nothing else: "),te=n("code"),P=t("model(inputs_ids)"),L=p(),W=n("li"),X=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=t("model([input_ids, attention_mask])"),ge=t(" or "),ue=n("code"),_e=t("model([input_ids, attention_mask, token_type_ids])"),me=p(),oe=n("li"),je=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(s),c=d(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(s),T=d(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(s),ve.forEach(s),D=d(g),j=o(g,"P",{});var le=r(j);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(s),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(s),I=a(le,"."),le.forEach(s),O=d(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(s),R=d(g),C=o(g,"UL",{});var pe=r(C);N=o(pe,"LI",{});var de=r(N);ee=a(de,"a single Tensor with "),se=o(de,"CODE",{});var De=r(se);ce=a(De,"input_ids"),De.forEach(s),ne=a(de," only and nothing else: "),te=o(de,"CODE",{});var qe=r(te);P=a(qe,"model(inputs_ids)"),qe.forEach(s),de.forEach(s),L=d(pe),W=o(pe,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(s),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(s),Te.forEach(s),me=d(pe),oe=o(pe,"LI",{});var Ae=r(oe);je=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(s),Ae.forEach(s),pe.forEach(s)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,S),u(g,j,S),e(j,H),e(j,G),e(G,V),e(j,B),e(j,K),e(K,re),e(j,I),u(g,O,S),u(g,b,S),e(b,M),u(g,R,S),u(g,C,S),e(C,N),e(N,ee),e(N,se),e(se,ce),e(N,ne),e(N,te),e(te,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,je),e(oe,ie),e(ie,we)},d(g){g&&s(l),g&&s(c),g&&s(f),g&&s(D),g&&s(j),g&&s(O),g&&s(b),g&&s(R),g&&s(C)}}}function ky(U){let l,_,c,f,v;return{c(){l=n("p"),_=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=t("Module"),v=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(s),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(s)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&s(l)}}}function yy(U){let l,_,c,f,v,w,T,y,k,D,j,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,se,ce,ne,te,P,L,W,X,Q,Y,ge,ue,_e,me,oe,je,ie,we,g,S,ve,ze,be,le,xe,Me,Z,pe,de,De,qe,Te,Ne,ke,Ae,Oe,Ze,Pt,St,us,ms,da,fs,gs,Dt,ss,Nt,Ot,Ke,Pe,Lt,bs,ye,ks,ys,Qt,js,qs,It,$s,vt,Rs,Es,wt,Ye,$e,Wt,Fs,ae,ns,Gs,Ht,As,nt,Ut,zs,xs,Bt,Cs,ot,Rt,Ms,rt,Gt,Ps,Vt,Le,Ss,it,Kt,Ds,lt,Yt,pt,Ue,dt,Ee,ct,os,Jt,Ns,Os,Xt,Zt,Be,ea,ht,ut,es,Ls,q,J,xa,sa,Ca,ca,Qs,ts,ta,rs,Ma,aa,Pa,ha,Ie,mt,bt,Re,Sa,ua,kt,na,ft,ma,fe,Da,yt,Na,Oa,fa,_s,oa,gt,La,Fe,Qa,ra,Ia,Wa,Ha,he,Ua,ia,Ba,Ra,ga,jt,Ga,_a,Ce,la,Is,pa,Ki,Mc,Pc,Yi,Ji,Sc,Dc,Xi,Zi,Nc,Oc,Va,Ka,el,Lc,Qc,sl,Ic,Wc,tl,Hc,Uc,Ya,al,Bc,Rc,nl,Gc,Vc,ol,Kc,Yc,Ja,rl,Jc,Xc,il,Zc,eh,ll,sh,td,jn,ad,qn,th,lo,ah,nh,nd,$n,oh,po,rh,ih,od,Hr,pl,lh,rd,En,ph,co,dh,ch,id,We,Ur,dl,hh,uh,mh,Br,cl,fh,gh,_h,Rr,hl,Th,vh,wh,Gr,ul,bh,kh,yh,Vr,ml,jh,qh,$h,Kr,fl,Eh,Fh,Ah,Yr,gl,zh,xh,Ch,Jr,_l,Mh,Ph,Sh,Xr,Tl,Dh,Nh,ld,Ts,Oh,ho,Lh,Qh,uo,Ih,Wh,vl,Hh,Uh,wl,Bh,Rh,bl,Gh,Vh,pd,Zr,kl,Kh,dd,Fn,cd,Se,Yh,yl,Jh,Xh,jl,Zh,eu,ql,su,tu,$l,au,nu,El,ou,ru,Fl,iu,lu,ei,pu,du,mo,cu,hu,fo,uu,mu,hd,si,fu,ud,An,md,Xa,zn,Al,go,gu,zl,_u,fd,xn,gd,vs,Tu,xl,vu,wu,Cl,bu,ku,Ml,yu,ju,_o,qu,$u,To,Eu,Fu,_d,Za,Cn,Pl,vo,Au,Sl,zu,Td,en,wo,xu,bo,Cu,ti,Mu,Pu,vd,sn,Mn,Dl,ko,Su,Nl,Du,wd,Ws,yo,Nu,_t,Ou,ai,Lu,Qu,Ol,Iu,Wu,Ll,Hu,Uu,ni,Bu,Ru,Gu,jo,Vu,qo,Ku,Yu,Ju,Ql,Xu,Zu,$o,bd,tn,Pn,Il,Eo,em,Wl,sm,kd,Ge,Fo,tm,Hl,am,nm,Qe,om,oi,rm,im,ri,lm,pm,Ul,dm,cm,Bl,hm,um,Rl,mm,fm,Gl,gm,_m,Vl,Tm,vm,Kl,wm,bm,Yl,km,ym,jm,is,Jl,qm,$m,Xl,Em,Fm,Zl,Am,zm,ep,xm,Cm,sp,Mm,Pm,tp,Sm,Dm,ap,Nm,Om,ii,li,Lm,Qm,Im,Sn,Ao,Wm,np,Hm,Um,Ta,zo,Bm,xo,Rm,pi,Gm,Vm,Km,Co,Ym,Mo,Jm,Xm,Zm,di,Po,yd,an,Dn,op,So,ef,rp,sf,jd,ls,Do,tf,No,af,ci,nf,of,rf,Oo,lf,Lo,pf,df,cf,Qo,hf,hi,uf,mf,ff,Io,gf,Wo,_f,Tf,vf,Vs,Ho,wf,nn,bf,ui,kf,yf,ip,jf,qf,$f,Nn,Ef,lp,Ff,Af,Uo,qd,on,On,pp,Bo,zf,dp,xf,$d,Tt,Ro,Cf,rn,Mf,cp,Pf,Sf,mi,Df,Nf,Of,Go,Lf,Vo,Qf,If,Wf,Ks,Ko,Hf,ln,Uf,fi,Bf,Rf,hp,Gf,Vf,Kf,Ln,Yf,up,Jf,Xf,Yo,Ed,pn,Qn,mp,Jo,Zf,fp,eg,Fd,Hs,Xo,sg,gp,tg,ag,Zo,ng,gi,og,rg,ig,er,lg,sr,pg,dg,cg,Ys,tr,hg,dn,ug,_i,mg,fg,_p,gg,_g,Tg,In,vg,Tp,wg,bg,ar,Ad,cn,Wn,vp,nr,kg,wp,yg,zd,Us,or,jg,hn,qg,bp,$g,Eg,kp,Fg,Ag,zg,rr,xg,Ti,Cg,Mg,Pg,ir,Sg,lr,Dg,Ng,Og,Js,pr,Lg,un,Qg,vi,Ig,Wg,yp,Hg,Ug,Bg,Hn,Rg,jp,Gg,Vg,dr,xd,mn,Un,qp,cr,Kg,$p,Yg,Cd,ps,hr,Jg,Ep,Xg,Zg,ur,e_,wi,s_,t_,a_,mr,n_,fr,o_,r_,i_,Bn,l_,Xs,gr,p_,fn,d_,bi,c_,h_,Fp,u_,m_,f_,Rn,g_,Ap,__,T_,_r,Md,gn,Gn,zp,Tr,v_,xp,w_,Pd,ds,vr,b_,wr,k_,Cp,y_,j_,q_,br,$_,ki,E_,F_,A_,kr,z_,yr,x_,C_,M_,Vn,P_,Zs,jr,S_,_n,D_,yi,N_,O_,Mp,L_,Q_,I_,Kn,W_,Pp,H_,U_,qr,Sd,Tn,Yn,Sp,$r,B_,Dp,R_,Dd,cs,Er,G_,Np,V_,K_,Fr,Y_,ji,J_,X_,Z_,Ar,eT,zr,sT,tT,aT,Jn,nT,et,xr,oT,vn,rT,qi,iT,lT,Op,pT,dT,cT,Xn,hT,Lp,uT,mT,Cr,Nd,wn,Zn,Qp,Mr,fT,Ip,gT,Od,hs,Pr,_T,bn,TT,Wp,vT,wT,Hp,bT,kT,yT,Sr,jT,$i,qT,$T,ET,Dr,FT,Nr,AT,zT,xT,eo,CT,st,Or,MT,kn,PT,Ei,ST,DT,Up,NT,OT,LT,so,QT,Bp,IT,WT,Lr,Ld;return w=new Bs({}),V=new Bs({}),rs=new Bs({}),jn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Xk],pytorch:[Yk]},$$scope:{ctx:U}}}),Fn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ty],pytorch:[ey]},$$scope:{ctx:U}}}),An=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ry],pytorch:[ny]},$$scope:{ctx:U}}}),go=new Bs({}),xn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[dy],pytorch:[ly]},$$scope:{ctx:U}}}),vo=new Bs({}),wo=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}]}}),ko=new Bs({}),yo=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),$o=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Eo=new Bs({}),Fo=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/tokenization_tapas.py#L189",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),Ao=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/tokenization_tapas.py#L529",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16354/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code>
or to the maximum acceptable input length for the model if that argument is not provided. This will
truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16354/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),zo=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/tokenization_tapas.py#L1891",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Po=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/tokenization_tapas.py#L397"}}),So=new Bs({}),Do=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L856",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ho=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L894",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Mt({props:{$$slots:{default:[cy]},$$scope:{ctx:U}}}),Uo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Bo=new Bs({}),Ro=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1009",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ko=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1028",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new Mt({props:{$$slots:{default:[hy]},$$scope:{ctx:U}}}),Yo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd
import torch

torch.manual_seed(2)
tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-masklm")
model = TapasForMaskedLM.from_pretrained("google/tapas-base-masklm")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
query = "How many movies has Leonardo [MASK] Caprio played in?"

# prepare inputs
inputs = tokenizer(table=table, queries=query, padding="max_length", return_tensors="pt")

# forward pass
outputs = model(**inputs)

# return top predicted value
masked_index = torch.nonzero(inputs.input_ids.squeeze() == tokenizer.mask_token_id, as_tuple=False)
logits = outputs.logits[0, masked_index.item(), :]
probs = logits.softmax(dim=0)
values, predictions = probs.topk(5)

for value, pred in zip(values, predictions):
    print(f"{tokenizer.decode([pred])} with confidence {value}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-masklm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-masklm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;How many movies has Leonardo [MASK] Caprio played in?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=query, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># return top predicted value</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = torch.nonzero(inputs.input_ids.squeeze() == tokenizer.mask_token_id, as_tuple=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits[<span class="hljs-number">0</span>, masked_index.item(), :]
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits.softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> value, pred <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(values, predictions):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{tokenizer.decode([pred])}</span> with confidence <span class="hljs-subst">{value}</span>&quot;</span>)
di <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.9995357990264893</span>
<span class="hljs-keyword">and</span> <span class="hljs-keyword">with</span> confidence <span class="hljs-number">0.00029978735256008804</span>
de <span class="hljs-keyword">with</span> confidence <span class="hljs-number">9.941472671926022e-05</span>
&amp; <span class="hljs-keyword">with</span> confidence <span class="hljs-number">2.6531068215263076e-05</span>
<span class="hljs-keyword">del</span> <span class="hljs-keyword">with</span> confidence <span class="hljs-number">5.27906877323403e-06</span>`}}),Jo=new Bs({}),Xo=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1482",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1494",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new Mt({props:{$$slots:{default:[uy]},$$scope:{ctx:U}}}),ar=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new Bs({}),or=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1138",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tapas.py#L1173",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new Mt({props:{$$slots:{default:[my]},$$scope:{ctx:U}}}),dr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),cr=new Bs({}),hr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L962",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new Mt({props:{$$slots:{default:[fy]},$$scope:{ctx:U}}}),gr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L968",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new Mt({props:{$$slots:{default:[gy]},$$scope:{ctx:U}}}),_r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tr=new Bs({}),vr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1038",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vn=new Mt({props:{$$slots:{default:[_y]},$$scope:{ctx:U}}}),jr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1054",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kn=new Mt({props:{$$slots:{default:[Ty]},$$scope:{ctx:U}}}),qr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="tf"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new Bs({}),Er=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1578",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new Mt({props:{$$slots:{default:[vy]},$$scope:{ctx:U}}}),xr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1589",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16354/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new Mt({props:{$$slots:{default:[wy]},$$scope:{ctx:U}}}),Cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new Bs({}),Pr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1245",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),eo=new Mt({props:{$$slots:{default:[by]},$$scope:{ctx:U}}}),Or=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16354/src/transformers/models/tapas/modeling_tf_tapas.py#L1267",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16354/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16354/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),so=new Mt({props:{$$slots:{default:[ky]},$$scope:{ctx:U}}}),Lr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=n("meta"),_=p(),c=n("h1"),f=n("a"),v=n("span"),$(w.$$.fragment),T=p(),y=n("span"),k=t("TAPAS"),D=p(),j=n("h2"),H=n("a"),G=n("span"),$(V.$$.fragment),B=p(),K=n("span"),re=t("Overview"),I=p(),O=n("p"),b=t("The TAPAS model was proposed in "),M=n("a"),R=t("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=t(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),N=p(),ee=n("p"),se=t("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=p(),ne=n("ul"),te=n("li"),P=n("a"),L=t("SQA"),W=t(" (Sequential Question Answering by Microsoft)"),X=p(),Q=n("li"),Y=n("a"),ge=t("WTQ"),ue=t(" (Wiki Table Questions by Stanford University)"),_e=p(),me=n("li"),oe=n("a"),je=t("WikiSQL"),ie=t(" (by Salesforce)."),we=p(),g=n("p"),S=t("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),ve=p(),ze=n("p"),be=t("The abstract from the paper is the following:"),le=p(),xe=n("p"),Me=n("em"),Z=t("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),pe=p(),de=n("p"),De=t("In addition, the authors have further pre-trained TAPAS to recognize "),qe=n("strong"),Te=t("table entailment"),Ne=t(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=n("a"),Ae=t("TabFact"),Oe=t(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n("a"),Pt=t("Understanding tables with intermediate pre-training"),St=t(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),us=p(),ms=n("img"),fs=p(),gs=n("small"),Dt=t("TAPAS architecture. Taken from the "),ss=n("a"),Nt=t("original blog post"),Ot=t("."),Ke=p(),Pe=n("p"),Lt=t("This model was contributed by "),bs=n("a"),ye=t("nielsr"),ks=t(". The Tensorflow version of this model was contributed by "),ys=n("a"),Qt=t("kamalkraj"),js=t(". The original code can be found "),qs=n("a"),It=t("here"),$s=t("."),vt=p(),Rs=n("p"),Es=t("Tips:"),wt=p(),Ye=n("ul"),$e=n("li"),Wt=t("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Fs=n("code"),ae=t("reset_position_index_per_cell"),ns=t(" parameter of "),Gs=n("a"),Ht=t("TapasConfig"),As=t(", which is set to "),nt=n("code"),Ut=t("True"),zs=t(" by default. The default versions of the models available on the "),xs=n("a"),Bt=t("hub"),Cs=t(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ot=n("code"),Rt=t('revision="no_reset"'),Ms=t(" when calling the "),rt=n("code"),Gt=t("from_pretrained()"),Ps=t(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vt=p(),Le=n("li"),Ss=t("TAPAS is based on BERT, so "),it=n("code"),Kt=t("TAPAS-base"),Ds=t(" for example corresponds to a "),lt=n("code"),Yt=t("BERT-base"),pt=t(" architecture. Of course, "),Ue=n("code"),dt=t("TAPAS-large"),Ee=t(" will result in the best performance (the results reported in the paper are from "),ct=n("code"),os=t("TAPAS-large"),Jt=t("). Results of the various sized models are shown on the "),Ns=n("a"),Os=t("original Github repository"),Xt=t("."),Zt=p(),Be=n("li"),ea=t("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),ht=n("code"),ut=t("prev_labels"),es=t(" token type ids can be overwritten by the predicted "),Ls=n("code"),q=t("labels"),J=t(" of the model to the previous question. See \u201CUsage\u201D section for more info."),xa=p(),sa=n("li"),Ca=t("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=p(),Qs=n("h2"),ts=n("a"),ta=n("span"),$(rs.$$.fragment),Ma=p(),aa=n("span"),Pa=t("Usage: fine-tuning"),ha=p(),Ie=n("p"),mt=t("Here we explain how you can fine-tune "),bt=n("a"),Re=t("TapasForQuestionAnswering"),Sa=t(" on your own dataset."),ua=p(),kt=n("p"),na=n("strong"),ft=t("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ma=p(),fe=n("p"),Da=t("Basically, there are 3 different ways in which one can fine-tune "),yt=n("a"),Na=t("TapasForQuestionAnswering"),Oa=t(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=p(),_s=n("ol"),oa=n("li"),gt=t("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),La=p(),Fe=n("li"),Qa=t("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n("strong"),Ia=t("weak supervision"),Wa=t(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ha=p(),he=n("li"),Ua=t("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n("strong"),Ba=t("strong supervision"),Ra=t(". Here, learning the appropriate aggregation operator is much easier."),ga=p(),jt=n("p"),Ga=t("To summarize:"),_a=p(),Ce=n("table"),la=n("thead"),Is=n("tr"),pa=n("th"),Ki=n("strong"),Mc=t("Task"),Pc=p(),Yi=n("th"),Ji=n("strong"),Sc=t("Example dataset"),Dc=p(),Xi=n("th"),Zi=n("strong"),Nc=t("Description"),Oc=p(),Va=n("tbody"),Ka=n("tr"),el=n("td"),Lc=t("Conversational"),Qc=p(),sl=n("td"),Ic=t("SQA"),Wc=p(),tl=n("td"),Hc=t("Conversational, only cell selection questions"),Uc=p(),Ya=n("tr"),al=n("td"),Bc=t("Weak supervision for aggregation"),Rc=p(),nl=n("td"),Gc=t("WTQ"),Vc=p(),ol=n("td"),Kc=t("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yc=p(),Ja=n("tr"),rl=n("td"),Jc=t("Strong supervision for aggregation"),Xc=p(),il=n("td"),Zc=t("WikiSQL-supervised"),eh=p(),ll=n("td"),sh=t("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),td=p(),$(jn.$$.fragment),ad=p(),qn=n("p"),th=t("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=n("a"),ah=t("here"),nh=t(" for more info."),nd=p(),$n=n("p"),oh=t("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=n("a"),rh=t("here"),ih=t("."),od=p(),Hr=n("p"),pl=n("strong"),lh=t("STEP 2: Prepare your data in the SQA format"),rd=p(),En=n("p"),ph=t("Second, no matter what you picked above, you should prepare your dataset in the "),co=n("a"),dh=t("SQA"),ch=t(" format. This format is a TSV/CSV file with the following columns:"),id=p(),We=n("ul"),Ur=n("li"),dl=n("code"),hh=t("id"),uh=t(": optional, id of the table-question pair, for bookkeeping purposes."),mh=p(),Br=n("li"),cl=n("code"),fh=t("annotator"),gh=t(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),_h=p(),Rr=n("li"),hl=n("code"),Th=t("position"),vh=t(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),wh=p(),Gr=n("li"),ul=n("code"),bh=t("question"),kh=t(": string"),yh=p(),Vr=n("li"),ml=n("code"),jh=t("table_file"),qh=t(": string, name of a csv file containing the tabular data"),$h=p(),Kr=n("li"),fl=n("code"),Eh=t("answer_coordinates"),Fh=t(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Ah=p(),Yr=n("li"),gl=n("code"),zh=t("answer_text"),xh=t(": list of one or more strings (each string being a cell value that is part of the answer)"),Ch=p(),Jr=n("li"),_l=n("code"),Mh=t("aggregation_label"),Ph=t(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Sh=p(),Xr=n("li"),Tl=n("code"),Dh=t("float_answer"),Nh=t(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),ld=p(),Ts=n("p"),Oh=t("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=n("a"),Lh=t("here"),Qh=t(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),uo=n("a"),Ih=t("here"),Wh=t(". Interestingly, these conversion scripts are not perfect (the "),vl=n("code"),Hh=t("answer_coordinates"),Uh=t(" and "),wl=n("code"),Bh=t("float_answer"),Rh=t(" fields are populated based on the "),bl=n("code"),Gh=t("answer_text"),Vh=t("), meaning that WTQ and WikiSQL results could actually be improved."),pd=p(),Zr=n("p"),kl=n("strong"),Kh=t("STEP 3: Convert your data into tensors using TapasTokenizer"),dd=p(),$(Fn.$$.fragment),cd=p(),Se=n("p"),Yh=t("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=n("strong"),Jh=t("not conversational"),Xh=t(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),jl=n("code"),Zh=t("queries"),eu=t(", "),ql=n("code"),su=t("answer_coordinates"),tu=t(" and "),$l=n("code"),au=t("answer_text"),nu=t(" per table (in the order of their "),El=n("code"),ou=t("position"),ru=t(`
index) and batch encode each table with its questions. This will make sure that the `),Fl=n("code"),iu=t("prev_labels"),lu=t(" token types (see docs of "),ei=n("a"),pu=t("TapasTokenizer"),du=t(") are set correctly. See "),mo=n("a"),cu=t("this notebook"),hu=t(" for more info. See "),fo=n("a"),uu=t("this notebook"),mu=t(" for more info regarding using the TensorFlow model."),hd=p(),si=n("p"),fu=t("**STEP 4: Train (fine-tune) the model"),ud=p(),$(An.$$.fragment),md=p(),Xa=n("h2"),zn=n("a"),Al=n("span"),$(go.$$.fragment),gu=p(),zl=n("span"),_u=t("Usage: inference"),fd=p(),$(xn.$$.fragment),gd=p(),vs=n("p"),Tu=t("In case of a conversational set-up, then each table-question pair must be provided "),xl=n("strong"),vu=t("sequentially"),wu=t(" to the model, such that the "),Cl=n("code"),bu=t("prev_labels"),ku=t(" token types can be overwritten by the predicted "),Ml=n("code"),yu=t("labels"),ju=t(" of the previous table-question pair. Again, more info can be found in "),_o=n("a"),qu=t("this notebook"),$u=t(" (for PyTorch) and "),To=n("a"),Eu=t("this notebook"),Fu=t(" (for TensorFlow)."),_d=p(),Za=n("h2"),Cn=n("a"),Pl=n("span"),$(vo.$$.fragment),Au=p(),Sl=n("span"),zu=t("TAPAS specific outputs"),Td=p(),en=n("div"),$(wo.$$.fragment),xu=p(),bo=n("p"),Cu=t("Output type of "),ti=n("a"),Mu=t("TapasForQuestionAnswering"),Pu=t("."),vd=p(),sn=n("h2"),Mn=n("a"),Dl=n("span"),$(ko.$$.fragment),Su=p(),Nl=n("span"),Du=t("TapasConfig"),wd=p(),Ws=n("div"),$(yo.$$.fragment),Nu=p(),_t=n("p"),Ou=t("This is the configuration class to store the configuration of a "),ai=n("a"),Lu=t("TapasModel"),Qu=t(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=n("em"),Iu=t("tapas-base-finetuned-sqa"),Wu=t(` architecture.
Configuration objects inherit from `),Ll=n("code"),Hu=t("PreTrainedConfig"),Uu=t(` and can be used to control the model outputs. Read the
documentation from `),ni=n("a"),Bu=t("PretrainedConfig"),Ru=t(" for more information."),Gu=p(),jo=n("p"),Vu=t(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),qo=n("a"),Ku=t("https://github.com/google-research/tapas/tree/master"),Yu=t("."),Ju=p(),Ql=n("p"),Xu=t("Example:"),Zu=p(),$($o.$$.fragment),bd=p(),tn=n("h2"),Pn=n("a"),Il=n("span"),$(Eo.$$.fragment),em=p(),Wl=n("span"),sm=t("TapasTokenizer"),kd=p(),Ge=n("div"),$(Fo.$$.fragment),tm=p(),Hl=n("p"),am=t(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),nm=p(),Qe=n("p"),om=t("This tokenizer inherits from "),oi=n("a"),rm=t("PreTrainedTokenizer"),im=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=n("a"),lm=t("TapasTokenizer"),pm=t(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=n("code"),dm=t("segment_ids"),cm=t(`,
`),Bl=n("code"),hm=t("column_ids"),um=t(", "),Rl=n("code"),mm=t("row_ids"),fm=t(", "),Gl=n("code"),gm=t("prev_labels"),_m=t(", "),Vl=n("code"),Tm=t("column_ranks"),vm=t(", "),Kl=n("code"),wm=t("inv_column_ranks"),bm=t(" and "),Yl=n("code"),km=t("numeric_relations"),ym=t(":"),jm=p(),is=n("ul"),Jl=n("li"),qm=t(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),$m=p(),Xl=n("li"),Em=t(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Fm=p(),Zl=n("li"),Am=t(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),zm=p(),ep=n("li"),xm=t(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Cm=p(),sp=n("li"),Mm=t(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Pm=p(),tp=n("li"),Sm=t(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Dm=p(),ap=n("li"),Nm=t(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Om=p(),ii=n("p"),li=n("a"),Lm=t("TapasTokenizer"),Qm=t(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Im=p(),Sn=n("div"),$(Ao.$$.fragment),Wm=p(),np=n("p"),Hm=t("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Um=p(),Ta=n("div"),$(zo.$$.fragment),Bm=p(),xo=n("p"),Rm=t("Converts logits of "),pi=n("a"),Gm=t("TapasForQuestionAnswering"),Vm=t(` to actual predicted answer coordinates and optional
aggregation indices.`),Km=p(),Co=n("p"),Ym=t(`The original implementation, on which this function is based, can be found
`),Mo=n("a"),Jm=t("here"),Xm=t("."),Zm=p(),di=n("div"),$(Po.$$.fragment),yd=p(),an=n("h2"),Dn=n("a"),op=n("span"),$(So.$$.fragment),ef=p(),rp=n("span"),sf=t("TapasModel"),jd=p(),ls=n("div"),$(Do.$$.fragment),tf=p(),No=n("p"),af=t(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=n("a"),nf=t("PreTrainedModel"),of=t(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=p(),Oo=n("p"),lf=t("This model is also a PyTorch "),Lo=n("a"),pf=t("torch.nn.Module"),df=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cf=p(),Qo=n("p"),hf=t("This class is a small change compared to "),hi=n("a"),uf=t("BertModel"),mf=t(", taking into account the additional token type ids."),ff=p(),Io=n("p"),gf=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=n("a"),_f=t(`Attention is
all you need`),Tf=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vf=p(),Vs=n("div"),$(Ho.$$.fragment),wf=p(),nn=n("p"),bf=t("The "),ui=n("a"),kf=t("TapasModel"),yf=t(" forward method, overrides the "),ip=n("code"),jf=t("__call__"),qf=t(" special method."),$f=p(),$(Nn.$$.fragment),Ef=p(),lp=n("p"),Ff=t("Examples:"),Af=p(),$(Uo.$$.fragment),qd=p(),on=n("h2"),On=n("a"),pp=n("span"),$(Bo.$$.fragment),zf=p(),dp=n("span"),xf=t("TapasForMaskedLM"),$d=p(),Tt=n("div"),$(Ro.$$.fragment),Cf=p(),rn=n("p"),Mf=t("Tapas Model with a "),cp=n("code"),Pf=t("language modeling"),Sf=t(` head on top.
This model inherits from `),mi=n("a"),Df=t("PreTrainedModel"),Nf=t(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=p(),Go=n("p"),Lf=t("This model is also a PyTorch "),Vo=n("a"),Qf=t("torch.nn.Module"),If=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=p(),Ks=n("div"),$(Ko.$$.fragment),Hf=p(),ln=n("p"),Uf=t("The "),fi=n("a"),Bf=t("TapasForMaskedLM"),Rf=t(" forward method, overrides the "),hp=n("code"),Gf=t("__call__"),Vf=t(" special method."),Kf=p(),$(Ln.$$.fragment),Yf=p(),up=n("p"),Jf=t("Examples:"),Xf=p(),$(Yo.$$.fragment),Ed=p(),pn=n("h2"),Qn=n("a"),mp=n("span"),$(Jo.$$.fragment),Zf=p(),fp=n("span"),eg=t("TapasForSequenceClassification"),Fd=p(),Hs=n("div"),$(Xo.$$.fragment),sg=p(),gp=n("p"),tg=t(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ag=p(),Zo=n("p"),ng=t("This model inherits from "),gi=n("a"),og=t("PreTrainedModel"),rg=t(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=p(),er=n("p"),lg=t("This model is also a PyTorch "),sr=n("a"),pg=t("torch.nn.Module"),dg=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg=p(),Ys=n("div"),$(tr.$$.fragment),hg=p(),dn=n("p"),ug=t("The "),_i=n("a"),mg=t("TapasForSequenceClassification"),fg=t(" forward method, overrides the "),_p=n("code"),gg=t("__call__"),_g=t(" special method."),Tg=p(),$(In.$$.fragment),vg=p(),Tp=n("p"),wg=t("Examples:"),bg=p(),$(ar.$$.fragment),Ad=p(),cn=n("h2"),Wn=n("a"),vp=n("span"),$(nr.$$.fragment),kg=p(),wp=n("span"),yg=t("TapasForQuestionAnswering"),zd=p(),Us=n("div"),$(or.$$.fragment),jg=p(),hn=n("p"),qg=t(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bp=n("code"),$g=t("logits"),Eg=t(" and optional "),kp=n("code"),Fg=t("logits_aggregation"),Ag=t(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),zg=p(),rr=n("p"),xg=t("This model inherits from "),Ti=n("a"),Cg=t("PreTrainedModel"),Mg=t(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=p(),ir=n("p"),Sg=t("This model is also a PyTorch "),lr=n("a"),Dg=t("torch.nn.Module"),Ng=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Og=p(),Js=n("div"),$(pr.$$.fragment),Lg=p(),un=n("p"),Qg=t("The "),vi=n("a"),Ig=t("TapasForQuestionAnswering"),Wg=t(" forward method, overrides the "),yp=n("code"),Hg=t("__call__"),Ug=t(" special method."),Bg=p(),$(Hn.$$.fragment),Rg=p(),jp=n("p"),Gg=t("Examples:"),Vg=p(),$(dr.$$.fragment),xd=p(),mn=n("h2"),Un=n("a"),qp=n("span"),$(cr.$$.fragment),Kg=p(),$p=n("span"),Yg=t("TFTapasModel"),Cd=p(),ps=n("div"),$(hr.$$.fragment),Jg=p(),Ep=n("p"),Xg=t("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Zg=p(),ur=n("p"),e_=t("This model inherits from "),wi=n("a"),s_=t("TFPreTrainedModel"),t_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a_=p(),mr=n("p"),n_=t("This model is also a "),fr=n("a"),o_=t("tf.keras.Model"),r_=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i_=p(),$(Bn.$$.fragment),l_=p(),Xs=n("div"),$(gr.$$.fragment),p_=p(),fn=n("p"),d_=t("The "),bi=n("a"),c_=t("TFTapasModel"),h_=t(" forward method, overrides the "),Fp=n("code"),u_=t("__call__"),m_=t(" special method."),f_=p(),$(Rn.$$.fragment),g_=p(),Ap=n("p"),__=t("Examples:"),T_=p(),$(_r.$$.fragment),Md=p(),gn=n("h2"),Gn=n("a"),zp=n("span"),$(Tr.$$.fragment),v_=p(),xp=n("span"),w_=t("TFTapasForMaskedLM"),Pd=p(),ds=n("div"),$(vr.$$.fragment),b_=p(),wr=n("p"),k_=t("Tapas Model with a "),Cp=n("code"),y_=t("language modeling"),j_=t(" head on top."),q_=p(),br=n("p"),$_=t("This model inherits from "),ki=n("a"),E_=t("TFPreTrainedModel"),F_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=p(),kr=n("p"),z_=t("This model is also a "),yr=n("a"),x_=t("tf.keras.Model"),C_=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M_=p(),$(Vn.$$.fragment),P_=p(),Zs=n("div"),$(jr.$$.fragment),S_=p(),_n=n("p"),D_=t("The "),yi=n("a"),N_=t("TFTapasForMaskedLM"),O_=t(" forward method, overrides the "),Mp=n("code"),L_=t("__call__"),Q_=t(" special method."),I_=p(),$(Kn.$$.fragment),W_=p(),Pp=n("p"),H_=t("Examples:"),U_=p(),$(qr.$$.fragment),Sd=p(),Tn=n("h2"),Yn=n("a"),Sp=n("span"),$($r.$$.fragment),B_=p(),Dp=n("span"),R_=t("TFTapasForSequenceClassification"),Dd=p(),cs=n("div"),$(Er.$$.fragment),G_=p(),Np=n("p"),V_=t(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),K_=p(),Fr=n("p"),Y_=t("This model inherits from "),ji=n("a"),J_=t("TFPreTrainedModel"),X_=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=p(),Ar=n("p"),eT=t("This model is also a "),zr=n("a"),sT=t("tf.keras.Model"),tT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aT=p(),$(Jn.$$.fragment),nT=p(),et=n("div"),$(xr.$$.fragment),oT=p(),vn=n("p"),rT=t("The "),qi=n("a"),iT=t("TFTapasForSequenceClassification"),lT=t(" forward method, overrides the "),Op=n("code"),pT=t("__call__"),dT=t(" special method."),cT=p(),$(Xn.$$.fragment),hT=p(),Lp=n("p"),uT=t("Examples:"),mT=p(),$(Cr.$$.fragment),Nd=p(),wn=n("h2"),Zn=n("a"),Qp=n("span"),$(Mr.$$.fragment),fT=p(),Ip=n("span"),gT=t("TFTapasForQuestionAnswering"),Od=p(),hs=n("div"),$(Pr.$$.fragment),_T=p(),bn=n("p"),TT=t(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wp=n("code"),vT=t("logits"),wT=t(" and optional "),Hp=n("code"),bT=t("logits_aggregation"),kT=t(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),yT=p(),Sr=n("p"),jT=t("This model inherits from "),$i=n("a"),qT=t("TFPreTrainedModel"),$T=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=p(),Dr=n("p"),FT=t("This model is also a "),Nr=n("a"),AT=t("tf.keras.Model"),zT=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xT=p(),$(eo.$$.fragment),CT=p(),st=n("div"),$(Or.$$.fragment),MT=p(),kn=n("p"),PT=t("The "),Ei=n("a"),ST=t("TFTapasForQuestionAnswering"),DT=t(" forward method, overrides the "),Up=n("code"),NT=t("__call__"),OT=t(" special method."),LT=p(),$(so.$$.fragment),QT=p(),Bp=n("p"),IT=t("Examples:"),WT=p(),$(Lr.$$.fragment),this.h()},l(i){const m=Gk('[data-svelte="svelte-1phssyn"]',document.head);l=o(m,"META",{name:!0,content:!0}),m.forEach(s),_=d(i),c=o(i,"H1",{class:!0});var Qr=r(c);f=o(Qr,"A",{id:!0,class:!0,href:!0});var Rp=r(f);v=o(Rp,"SPAN",{});var Gp=r(v);E(w.$$.fragment,Gp),Gp.forEach(s),Rp.forEach(s),T=d(Qr),y=o(Qr,"SPAN",{});var Vp=r(y);k=a(Vp,"TAPAS"),Vp.forEach(s),Qr.forEach(s),D=d(i),j=o(i,"H2",{class:!0});var Ir=r(j);H=o(Ir,"A",{id:!0,class:!0,href:!0});var Kp=r(H);G=o(Kp,"SPAN",{});var Yp=r(G);E(V.$$.fragment,Yp),Yp.forEach(s),Kp.forEach(s),B=d(Ir),K=o(Ir,"SPAN",{});var Jp=r(K);re=a(Jp,"Overview"),Jp.forEach(s),Ir.forEach(s),I=d(i),O=o(i,"P",{});var Wr=r(O);b=a(Wr,"The TAPAS model was proposed in "),M=o(Wr,"A",{href:!0,rel:!0});var Xp=r(M);R=a(Xp,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Xp.forEach(s),C=a(Wr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Wr.forEach(s),N=d(i),ee=o(i,"P",{});var Zp=r(ee);se=a(Zp,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Zp.forEach(s),ce=d(i),ne=o(i,"UL",{});var yn=r(ne);te=o(yn,"LI",{});var Fi=r(te);P=o(Fi,"A",{href:!0,rel:!0});var ed=r(P);L=a(ed,"SQA"),ed.forEach(s),W=a(Fi," (Sequential Question Answering by Microsoft)"),Fi.forEach(s),X=d(yn),Q=o(yn,"LI",{});var Ai=r(Q);Y=o(Ai,"A",{href:!0,rel:!0});var sd=r(Y);ge=a(sd,"WTQ"),sd.forEach(s),ue=a(Ai," (Wiki Table Questions by Stanford University)"),Ai.forEach(s),_e=d(yn),me=o(yn,"LI",{});var HT=r(me);oe=o(HT,"A",{href:!0,rel:!0});var ev=r(oe);je=a(ev,"WikiSQL"),ev.forEach(s),ie=a(HT," (by Salesforce)."),HT.forEach(s),yn.forEach(s),we=d(i),g=o(i,"P",{});var sv=r(g);S=a(sv,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),sv.forEach(s),ve=d(i),ze=o(i,"P",{});var tv=r(ze);be=a(tv,"The abstract from the paper is the following:"),tv.forEach(s),le=d(i),xe=o(i,"P",{});var av=r(xe);Me=o(av,"EM",{});var nv=r(Me);Z=a(nv,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),nv.forEach(s),av.forEach(s),pe=d(i),de=o(i,"P",{});var to=r(de);De=a(to,"In addition, the authors have further pre-trained TAPAS to recognize "),qe=o(to,"STRONG",{});var ov=r(qe);Te=a(ov,"table entailment"),ov.forEach(s),Ne=a(to,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=o(to,"A",{href:!0,rel:!0});var rv=r(ke);Ae=a(rv,"TabFact"),rv.forEach(s),Oe=a(to,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o(to,"A",{href:!0,rel:!0});var iv=r(Ze);Pt=a(iv,"Understanding tables with intermediate pre-training"),iv.forEach(s),St=a(to," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),to.forEach(s),us=d(i),ms=o(i,"IMG",{src:!0,alt:!0,width:!0}),fs=d(i),gs=o(i,"SMALL",{});var Qd=r(gs);Dt=a(Qd,"TAPAS architecture. Taken from the "),ss=o(Qd,"A",{href:!0});var lv=r(ss);Nt=a(lv,"original blog post"),lv.forEach(s),Ot=a(Qd,"."),Qd.forEach(s),Ke=d(i),Pe=o(i,"P",{});var ao=r(Pe);Lt=a(ao,"This model was contributed by "),bs=o(ao,"A",{href:!0,rel:!0});var pv=r(bs);ye=a(pv,"nielsr"),pv.forEach(s),ks=a(ao,". The Tensorflow version of this model was contributed by "),ys=o(ao,"A",{href:!0,rel:!0});var dv=r(ys);Qt=a(dv,"kamalkraj"),dv.forEach(s),js=a(ao,". The original code can be found "),qs=o(ao,"A",{href:!0,rel:!0});var cv=r(qs);It=a(cv,"here"),cv.forEach(s),$s=a(ao,"."),ao.forEach(s),vt=d(i),Rs=o(i,"P",{});var hv=r(Rs);Es=a(hv,"Tips:"),hv.forEach(s),wt=d(i),Ye=o(i,"UL",{});var no=r(Ye);$e=o(no,"LI",{});var tt=r($e);Wt=a(tt,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Fs=o(tt,"CODE",{});var uv=r(Fs);ae=a(uv,"reset_position_index_per_cell"),uv.forEach(s),ns=a(tt," parameter of "),Gs=o(tt,"A",{href:!0});var mv=r(Gs);Ht=a(mv,"TapasConfig"),mv.forEach(s),As=a(tt,", which is set to "),nt=o(tt,"CODE",{});var fv=r(nt);Ut=a(fv,"True"),fv.forEach(s),zs=a(tt," by default. The default versions of the models available on the "),xs=o(tt,"A",{href:!0,rel:!0});var gv=r(xs);Bt=a(gv,"hub"),gv.forEach(s),Cs=a(tt," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ot=o(tt,"CODE",{});var _v=r(ot);Rt=a(_v,'revision="no_reset"'),_v.forEach(s),Ms=a(tt," when calling the "),rt=o(tt,"CODE",{});var Tv=r(rt);Gt=a(Tv,"from_pretrained()"),Tv.forEach(s),Ps=a(tt," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),tt.forEach(s),Vt=d(no),Le=o(no,"LI",{});var qt=r(Le);Ss=a(qt,"TAPAS is based on BERT, so "),it=o(qt,"CODE",{});var vv=r(it);Kt=a(vv,"TAPAS-base"),vv.forEach(s),Ds=a(qt," for example corresponds to a "),lt=o(qt,"CODE",{});var wv=r(lt);Yt=a(wv,"BERT-base"),wv.forEach(s),pt=a(qt," architecture. Of course, "),Ue=o(qt,"CODE",{});var bv=r(Ue);dt=a(bv,"TAPAS-large"),bv.forEach(s),Ee=a(qt," will result in the best performance (the results reported in the paper are from "),ct=o(qt,"CODE",{});var kv=r(ct);os=a(kv,"TAPAS-large"),kv.forEach(s),Jt=a(qt,"). Results of the various sized models are shown on the "),Ns=o(qt,"A",{href:!0,rel:!0});var yv=r(Ns);Os=a(yv,"original Github repository"),yv.forEach(s),Xt=a(qt,"."),qt.forEach(s),Zt=d(no),Be=o(no,"LI",{});var zi=r(Be);ea=a(zi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),ht=o(zi,"CODE",{});var jv=r(ht);ut=a(jv,"prev_labels"),jv.forEach(s),es=a(zi," token type ids can be overwritten by the predicted "),Ls=o(zi,"CODE",{});var qv=r(Ls);q=a(qv,"labels"),qv.forEach(s),J=a(zi," of the model to the previous question. See \u201CUsage\u201D section for more info."),zi.forEach(s),xa=d(no),sa=o(no,"LI",{});var $v=r(sa);Ca=a($v,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),$v.forEach(s),no.forEach(s),ca=d(i),Qs=o(i,"H2",{class:!0});var Id=r(Qs);ts=o(Id,"A",{id:!0,class:!0,href:!0});var Ev=r(ts);ta=o(Ev,"SPAN",{});var Fv=r(ta);E(rs.$$.fragment,Fv),Fv.forEach(s),Ev.forEach(s),Ma=d(Id),aa=o(Id,"SPAN",{});var Av=r(aa);Pa=a(Av,"Usage: fine-tuning"),Av.forEach(s),Id.forEach(s),ha=d(i),Ie=o(i,"P",{});var Wd=r(Ie);mt=a(Wd,"Here we explain how you can fine-tune "),bt=o(Wd,"A",{href:!0});var zv=r(bt);Re=a(zv,"TapasForQuestionAnswering"),zv.forEach(s),Sa=a(Wd," on your own dataset."),Wd.forEach(s),ua=d(i),kt=o(i,"P",{});var xv=r(kt);na=o(xv,"STRONG",{});var Cv=r(na);ft=a(Cv,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Cv.forEach(s),xv.forEach(s),ma=d(i),fe=o(i,"P",{});var Hd=r(fe);Da=a(Hd,"Basically, there are 3 different ways in which one can fine-tune "),yt=o(Hd,"A",{href:!0});var Mv=r(yt);Na=a(Mv,"TapasForQuestionAnswering"),Mv.forEach(s),Oa=a(Hd,", corresponding to the different datasets on which Tapas was fine-tuned:"),Hd.forEach(s),fa=d(i),_s=o(i,"OL",{});var xi=r(_s);oa=o(xi,"LI",{});var Pv=r(oa);gt=a(Pv,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Pv.forEach(s),La=d(xi),Fe=o(xi,"LI",{});var Ud=r(Fe);Qa=a(Ud,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o(Ud,"STRONG",{});var Sv=r(ra);Ia=a(Sv,"weak supervision"),Sv.forEach(s),Wa=a(Ud,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ud.forEach(s),Ha=d(xi),he=o(xi,"LI",{});var Bd=r(he);Ua=a(Bd,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o(Bd,"STRONG",{});var Dv=r(ia);Ba=a(Dv,"strong supervision"),Dv.forEach(s),Ra=a(Bd,". Here, learning the appropriate aggregation operator is much easier."),Bd.forEach(s),xi.forEach(s),ga=d(i),jt=o(i,"P",{});var Nv=r(jt);Ga=a(Nv,"To summarize:"),Nv.forEach(s),_a=d(i),Ce=o(i,"TABLE",{});var Rd=r(Ce);la=o(Rd,"THEAD",{});var Ov=r(la);Is=o(Ov,"TR",{});var Ci=r(Is);pa=o(Ci,"TH",{});var Lv=r(pa);Ki=o(Lv,"STRONG",{});var Qv=r(Ki);Mc=a(Qv,"Task"),Qv.forEach(s),Lv.forEach(s),Pc=d(Ci),Yi=o(Ci,"TH",{});var Iv=r(Yi);Ji=o(Iv,"STRONG",{});var Wv=r(Ji);Sc=a(Wv,"Example dataset"),Wv.forEach(s),Iv.forEach(s),Dc=d(Ci),Xi=o(Ci,"TH",{});var Hv=r(Xi);Zi=o(Hv,"STRONG",{});var Uv=r(Zi);Nc=a(Uv,"Description"),Uv.forEach(s),Hv.forEach(s),Ci.forEach(s),Ov.forEach(s),Oc=d(Rd),Va=o(Rd,"TBODY",{});var Mi=r(Va);Ka=o(Mi,"TR",{});var Pi=r(Ka);el=o(Pi,"TD",{});var Bv=r(el);Lc=a(Bv,"Conversational"),Bv.forEach(s),Qc=d(Pi),sl=o(Pi,"TD",{});var Rv=r(sl);Ic=a(Rv,"SQA"),Rv.forEach(s),Wc=d(Pi),tl=o(Pi,"TD",{});var Gv=r(tl);Hc=a(Gv,"Conversational, only cell selection questions"),Gv.forEach(s),Pi.forEach(s),Uc=d(Mi),Ya=o(Mi,"TR",{});var Si=r(Ya);al=o(Si,"TD",{});var Vv=r(al);Bc=a(Vv,"Weak supervision for aggregation"),Vv.forEach(s),Rc=d(Si),nl=o(Si,"TD",{});var Kv=r(nl);Gc=a(Kv,"WTQ"),Kv.forEach(s),Vc=d(Si),ol=o(Si,"TD",{});var Yv=r(ol);Kc=a(Yv,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yv.forEach(s),Si.forEach(s),Yc=d(Mi),Ja=o(Mi,"TR",{});var Di=r(Ja);rl=o(Di,"TD",{});var Jv=r(rl);Jc=a(Jv,"Strong supervision for aggregation"),Jv.forEach(s),Xc=d(Di),il=o(Di,"TD",{});var Xv=r(il);Zc=a(Xv,"WikiSQL-supervised"),Xv.forEach(s),eh=d(Di),ll=o(Di,"TD",{});var Zv=r(ll);sh=a(Zv,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Zv.forEach(s),Di.forEach(s),Mi.forEach(s),Rd.forEach(s),td=d(i),E(jn.$$.fragment,i),ad=d(i),qn=o(i,"P",{});var Gd=r(qn);th=a(Gd,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=o(Gd,"A",{href:!0,rel:!0});var ew=r(lo);ah=a(ew,"here"),ew.forEach(s),nh=a(Gd," for more info."),Gd.forEach(s),nd=d(i),$n=o(i,"P",{});var Vd=r($n);oh=a(Vd,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=o(Vd,"A",{href:!0,rel:!0});var sw=r(po);rh=a(sw,"here"),sw.forEach(s),ih=a(Vd,"."),Vd.forEach(s),od=d(i),Hr=o(i,"P",{});var tw=r(Hr);pl=o(tw,"STRONG",{});var aw=r(pl);lh=a(aw,"STEP 2: Prepare your data in the SQA format"),aw.forEach(s),tw.forEach(s),rd=d(i),En=o(i,"P",{});var Kd=r(En);ph=a(Kd,"Second, no matter what you picked above, you should prepare your dataset in the "),co=o(Kd,"A",{href:!0,rel:!0});var nw=r(co);dh=a(nw,"SQA"),nw.forEach(s),ch=a(Kd," format. This format is a TSV/CSV file with the following columns:"),Kd.forEach(s),id=d(i),We=o(i,"UL",{});var as=r(We);Ur=o(as,"LI",{});var UT=r(Ur);dl=o(UT,"CODE",{});var ow=r(dl);hh=a(ow,"id"),ow.forEach(s),uh=a(UT,": optional, id of the table-question pair, for bookkeeping purposes."),UT.forEach(s),mh=d(as),Br=o(as,"LI",{});var BT=r(Br);cl=o(BT,"CODE",{});var rw=r(cl);fh=a(rw,"annotator"),rw.forEach(s),gh=a(BT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),BT.forEach(s),_h=d(as),Rr=o(as,"LI",{});var RT=r(Rr);hl=o(RT,"CODE",{});var iw=r(hl);Th=a(iw,"position"),iw.forEach(s),vh=a(RT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),RT.forEach(s),wh=d(as),Gr=o(as,"LI",{});var GT=r(Gr);ul=o(GT,"CODE",{});var lw=r(ul);bh=a(lw,"question"),lw.forEach(s),kh=a(GT,": string"),GT.forEach(s),yh=d(as),Vr=o(as,"LI",{});var VT=r(Vr);ml=o(VT,"CODE",{});var pw=r(ml);jh=a(pw,"table_file"),pw.forEach(s),qh=a(VT,": string, name of a csv file containing the tabular data"),VT.forEach(s),$h=d(as),Kr=o(as,"LI",{});var KT=r(Kr);fl=o(KT,"CODE",{});var dw=r(fl);Eh=a(dw,"answer_coordinates"),dw.forEach(s),Fh=a(KT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),KT.forEach(s),Ah=d(as),Yr=o(as,"LI",{});var YT=r(Yr);gl=o(YT,"CODE",{});var cw=r(gl);zh=a(cw,"answer_text"),cw.forEach(s),xh=a(YT,": list of one or more strings (each string being a cell value that is part of the answer)"),YT.forEach(s),Ch=d(as),Jr=o(as,"LI",{});var JT=r(Jr);_l=o(JT,"CODE",{});var hw=r(_l);Mh=a(hw,"aggregation_label"),hw.forEach(s),Ph=a(JT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),JT.forEach(s),Sh=d(as),Xr=o(as,"LI",{});var XT=r(Xr);Tl=o(XT,"CODE",{});var uw=r(Tl);Dh=a(uw,"float_answer"),uw.forEach(s),Nh=a(XT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),XT.forEach(s),as.forEach(s),ld=d(i),Ts=o(i,"P",{});var $t=r(Ts);Oh=a($t,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=o($t,"A",{href:!0,rel:!0});var mw=r(ho);Lh=a(mw,"here"),mw.forEach(s),Qh=a($t,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),uo=o($t,"A",{href:!0,rel:!0});var fw=r(uo);Ih=a(fw,"here"),fw.forEach(s),Wh=a($t,". Interestingly, these conversion scripts are not perfect (the "),vl=o($t,"CODE",{});var gw=r(vl);Hh=a(gw,"answer_coordinates"),gw.forEach(s),Uh=a($t," and "),wl=o($t,"CODE",{});var _w=r(wl);Bh=a(_w,"float_answer"),_w.forEach(s),Rh=a($t," fields are populated based on the "),bl=o($t,"CODE",{});var Tw=r(bl);Gh=a(Tw,"answer_text"),Tw.forEach(s),Vh=a($t,"), meaning that WTQ and WikiSQL results could actually be improved."),$t.forEach(s),pd=d(i),Zr=o(i,"P",{});var vw=r(Zr);kl=o(vw,"STRONG",{});var ww=r(kl);Kh=a(ww,"STEP 3: Convert your data into tensors using TapasTokenizer"),ww.forEach(s),vw.forEach(s),dd=d(i),E(Fn.$$.fragment,i),cd=d(i),Se=o(i,"P",{});var Je=r(Se);Yh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=o(Je,"STRONG",{});var bw=r(yl);Jh=a(bw,"not conversational"),bw.forEach(s),Xh=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),jl=o(Je,"CODE",{});var kw=r(jl);Zh=a(kw,"queries"),kw.forEach(s),eu=a(Je,", "),ql=o(Je,"CODE",{});var yw=r(ql);su=a(yw,"answer_coordinates"),yw.forEach(s),tu=a(Je," and "),$l=o(Je,"CODE",{});var jw=r($l);au=a(jw,"answer_text"),jw.forEach(s),nu=a(Je," per table (in the order of their "),El=o(Je,"CODE",{});var qw=r(El);ou=a(qw,"position"),qw.forEach(s),ru=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),Fl=o(Je,"CODE",{});var $w=r(Fl);iu=a($w,"prev_labels"),$w.forEach(s),lu=a(Je," token types (see docs of "),ei=o(Je,"A",{href:!0});var Ew=r(ei);pu=a(Ew,"TapasTokenizer"),Ew.forEach(s),du=a(Je,") are set correctly. See "),mo=o(Je,"A",{href:!0,rel:!0});var Fw=r(mo);cu=a(Fw,"this notebook"),Fw.forEach(s),hu=a(Je," for more info. See "),fo=o(Je,"A",{href:!0,rel:!0});var Aw=r(fo);uu=a(Aw,"this notebook"),Aw.forEach(s),mu=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(s),hd=d(i),si=o(i,"P",{});var zw=r(si);fu=a(zw,"**STEP 4: Train (fine-tune) the model"),zw.forEach(s),ud=d(i),E(An.$$.fragment,i),md=d(i),Xa=o(i,"H2",{class:!0});var Yd=r(Xa);zn=o(Yd,"A",{id:!0,class:!0,href:!0});var xw=r(zn);Al=o(xw,"SPAN",{});var Cw=r(Al);E(go.$$.fragment,Cw),Cw.forEach(s),xw.forEach(s),gu=d(Yd),zl=o(Yd,"SPAN",{});var Mw=r(zl);_u=a(Mw,"Usage: inference"),Mw.forEach(s),Yd.forEach(s),fd=d(i),E(xn.$$.fragment,i),gd=d(i),vs=o(i,"P",{});var Et=r(vs);Tu=a(Et,"In case of a conversational set-up, then each table-question pair must be provided "),xl=o(Et,"STRONG",{});var Pw=r(xl);vu=a(Pw,"sequentially"),Pw.forEach(s),wu=a(Et," to the model, such that the "),Cl=o(Et,"CODE",{});var Sw=r(Cl);bu=a(Sw,"prev_labels"),Sw.forEach(s),ku=a(Et," token types can be overwritten by the predicted "),Ml=o(Et,"CODE",{});var Dw=r(Ml);yu=a(Dw,"labels"),Dw.forEach(s),ju=a(Et," of the previous table-question pair. Again, more info can be found in "),_o=o(Et,"A",{href:!0,rel:!0});var Nw=r(_o);qu=a(Nw,"this notebook"),Nw.forEach(s),$u=a(Et," (for PyTorch) and "),To=o(Et,"A",{href:!0,rel:!0});var Ow=r(To);Eu=a(Ow,"this notebook"),Ow.forEach(s),Fu=a(Et," (for TensorFlow)."),Et.forEach(s),_d=d(i),Za=o(i,"H2",{class:!0});var Jd=r(Za);Cn=o(Jd,"A",{id:!0,class:!0,href:!0});var Lw=r(Cn);Pl=o(Lw,"SPAN",{});var Qw=r(Pl);E(vo.$$.fragment,Qw),Qw.forEach(s),Lw.forEach(s),Au=d(Jd),Sl=o(Jd,"SPAN",{});var Iw=r(Sl);zu=a(Iw,"TAPAS specific outputs"),Iw.forEach(s),Jd.forEach(s),Td=d(i),en=o(i,"DIV",{class:!0});var Xd=r(en);E(wo.$$.fragment,Xd),xu=d(Xd),bo=o(Xd,"P",{});var Zd=r(bo);Cu=a(Zd,"Output type of "),ti=o(Zd,"A",{href:!0});var Ww=r(ti);Mu=a(Ww,"TapasForQuestionAnswering"),Ww.forEach(s),Pu=a(Zd,"."),Zd.forEach(s),Xd.forEach(s),vd=d(i),sn=o(i,"H2",{class:!0});var ec=r(sn);Mn=o(ec,"A",{id:!0,class:!0,href:!0});var Hw=r(Mn);Dl=o(Hw,"SPAN",{});var Uw=r(Dl);E(ko.$$.fragment,Uw),Uw.forEach(s),Hw.forEach(s),Su=d(ec),Nl=o(ec,"SPAN",{});var Bw=r(Nl);Du=a(Bw,"TapasConfig"),Bw.forEach(s),ec.forEach(s),wd=d(i),Ws=o(i,"DIV",{class:!0});var va=r(Ws);E(yo.$$.fragment,va),Nu=d(va),_t=o(va,"P",{});var wa=r(_t);Ou=a(wa,"This is the configuration class to store the configuration of a "),ai=o(wa,"A",{href:!0});var Rw=r(ai);Lu=a(Rw,"TapasModel"),Rw.forEach(s),Qu=a(wa,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=o(wa,"EM",{});var Gw=r(Ol);Iu=a(Gw,"tapas-base-finetuned-sqa"),Gw.forEach(s),Wu=a(wa,` architecture.
Configuration objects inherit from `),Ll=o(wa,"CODE",{});var Vw=r(Ll);Hu=a(Vw,"PreTrainedConfig"),Vw.forEach(s),Uu=a(wa,` and can be used to control the model outputs. Read the
documentation from `),ni=o(wa,"A",{href:!0});var Kw=r(ni);Bu=a(Kw,"PretrainedConfig"),Kw.forEach(s),Ru=a(wa," for more information."),wa.forEach(s),Gu=d(va),jo=o(va,"P",{});var sc=r(jo);Vu=a(sc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),qo=o(sc,"A",{href:!0,rel:!0});var Yw=r(qo);Ku=a(Yw,"https://github.com/google-research/tapas/tree/master"),Yw.forEach(s),Yu=a(sc,"."),sc.forEach(s),Ju=d(va),Ql=o(va,"P",{});var Jw=r(Ql);Xu=a(Jw,"Example:"),Jw.forEach(s),Zu=d(va),E($o.$$.fragment,va),va.forEach(s),bd=d(i),tn=o(i,"H2",{class:!0});var tc=r(tn);Pn=o(tc,"A",{id:!0,class:!0,href:!0});var Xw=r(Pn);Il=o(Xw,"SPAN",{});var Zw=r(Il);E(Eo.$$.fragment,Zw),Zw.forEach(s),Xw.forEach(s),em=d(tc),Wl=o(tc,"SPAN",{});var eb=r(Wl);sm=a(eb,"TapasTokenizer"),eb.forEach(s),tc.forEach(s),kd=d(i),Ge=o(i,"DIV",{class:!0});var ws=r(Ge);E(Fo.$$.fragment,ws),tm=d(ws),Hl=o(ws,"P",{});var sb=r(Hl);am=a(sb,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),sb.forEach(s),nm=d(ws),Qe=o(ws,"P",{});var Xe=r(Qe);om=a(Xe,"This tokenizer inherits from "),oi=o(Xe,"A",{href:!0});var tb=r(oi);rm=a(tb,"PreTrainedTokenizer"),tb.forEach(s),im=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=o(Xe,"A",{href:!0});var ab=r(ri);lm=a(ab,"TapasTokenizer"),ab.forEach(s),pm=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=o(Xe,"CODE",{});var nb=r(Ul);dm=a(nb,"segment_ids"),nb.forEach(s),cm=a(Xe,`,
`),Bl=o(Xe,"CODE",{});var ob=r(Bl);hm=a(ob,"column_ids"),ob.forEach(s),um=a(Xe,", "),Rl=o(Xe,"CODE",{});var rb=r(Rl);mm=a(rb,"row_ids"),rb.forEach(s),fm=a(Xe,", "),Gl=o(Xe,"CODE",{});var ib=r(Gl);gm=a(ib,"prev_labels"),ib.forEach(s),_m=a(Xe,", "),Vl=o(Xe,"CODE",{});var lb=r(Vl);Tm=a(lb,"column_ranks"),lb.forEach(s),vm=a(Xe,", "),Kl=o(Xe,"CODE",{});var pb=r(Kl);wm=a(pb,"inv_column_ranks"),pb.forEach(s),bm=a(Xe," and "),Yl=o(Xe,"CODE",{});var db=r(Yl);km=a(db,"numeric_relations"),db.forEach(s),ym=a(Xe,":"),Xe.forEach(s),jm=d(ws),is=o(ws,"UL",{});var at=r(is);Jl=o(at,"LI",{});var cb=r(Jl);qm=a(cb,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),cb.forEach(s),$m=d(at),Xl=o(at,"LI",{});var hb=r(Xl);Em=a(hb,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),hb.forEach(s),Fm=d(at),Zl=o(at,"LI",{});var ub=r(Zl);Am=a(ub,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),ub.forEach(s),zm=d(at),ep=o(at,"LI",{});var mb=r(ep);xm=a(mb,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),mb.forEach(s),Cm=d(at),sp=o(at,"LI",{});var fb=r(sp);Mm=a(fb,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),fb.forEach(s),Pm=d(at),tp=o(at,"LI",{});var gb=r(tp);Sm=a(gb,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),gb.forEach(s),Dm=d(at),ap=o(at,"LI",{});var _b=r(ap);Nm=a(_b,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),_b.forEach(s),at.forEach(s),Om=d(ws),ii=o(ws,"P",{});var ZT=r(ii);li=o(ZT,"A",{href:!0});var Tb=r(li);Lm=a(Tb,"TapasTokenizer"),Tb.forEach(s),Qm=a(ZT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ZT.forEach(s),Im=d(ws),Sn=o(ws,"DIV",{class:!0});var ac=r(Sn);E(Ao.$$.fragment,ac),Wm=d(ac),np=o(ac,"P",{});var vb=r(np);Hm=a(vb,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),vb.forEach(s),ac.forEach(s),Um=d(ws),Ta=o(ws,"DIV",{class:!0});var Ni=r(Ta);E(zo.$$.fragment,Ni),Bm=d(Ni),xo=o(Ni,"P",{});var nc=r(xo);Rm=a(nc,"Converts logits of "),pi=o(nc,"A",{href:!0});var wb=r(pi);Gm=a(wb,"TapasForQuestionAnswering"),wb.forEach(s),Vm=a(nc,` to actual predicted answer coordinates and optional
aggregation indices.`),nc.forEach(s),Km=d(Ni),Co=o(Ni,"P",{});var oc=r(Co);Ym=a(oc,`The original implementation, on which this function is based, can be found
`),Mo=o(oc,"A",{href:!0,rel:!0});var bb=r(Mo);Jm=a(bb,"here"),bb.forEach(s),Xm=a(oc,"."),oc.forEach(s),Ni.forEach(s),Zm=d(ws),di=o(ws,"DIV",{class:!0});var kb=r(di);E(Po.$$.fragment,kb),kb.forEach(s),ws.forEach(s),yd=d(i),an=o(i,"H2",{class:!0});var rc=r(an);Dn=o(rc,"A",{id:!0,class:!0,href:!0});var yb=r(Dn);op=o(yb,"SPAN",{});var jb=r(op);E(So.$$.fragment,jb),jb.forEach(s),yb.forEach(s),ef=d(rc),rp=o(rc,"SPAN",{});var qb=r(rp);sf=a(qb,"TapasModel"),qb.forEach(s),rc.forEach(s),jd=d(i),ls=o(i,"DIV",{class:!0});var Ft=r(ls);E(Do.$$.fragment,Ft),tf=d(Ft),No=o(Ft,"P",{});var ic=r(No);af=a(ic,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=o(ic,"A",{href:!0});var $b=r(ci);nf=a($b,"PreTrainedModel"),$b.forEach(s),of=a(ic,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(s),rf=d(Ft),Oo=o(Ft,"P",{});var lc=r(Oo);lf=a(lc,"This model is also a PyTorch "),Lo=o(lc,"A",{href:!0,rel:!0});var Eb=r(Lo);pf=a(Eb,"torch.nn.Module"),Eb.forEach(s),df=a(lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc.forEach(s),cf=d(Ft),Qo=o(Ft,"P",{});var pc=r(Qo);hf=a(pc,"This class is a small change compared to "),hi=o(pc,"A",{href:!0});var Fb=r(hi);uf=a(Fb,"BertModel"),Fb.forEach(s),mf=a(pc,", taking into account the additional token type ids."),pc.forEach(s),ff=d(Ft),Io=o(Ft,"P",{});var dc=r(Io);gf=a(dc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=o(dc,"A",{href:!0,rel:!0});var Ab=r(Wo);_f=a(Ab,`Attention is
all you need`),Ab.forEach(s),Tf=a(dc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),dc.forEach(s),vf=d(Ft),Vs=o(Ft,"DIV",{class:!0});var ba=r(Vs);E(Ho.$$.fragment,ba),wf=d(ba),nn=o(ba,"P",{});var Oi=r(nn);bf=a(Oi,"The "),ui=o(Oi,"A",{href:!0});var zb=r(ui);kf=a(zb,"TapasModel"),zb.forEach(s),yf=a(Oi," forward method, overrides the "),ip=o(Oi,"CODE",{});var xb=r(ip);jf=a(xb,"__call__"),xb.forEach(s),qf=a(Oi," special method."),Oi.forEach(s),$f=d(ba),E(Nn.$$.fragment,ba),Ef=d(ba),lp=o(ba,"P",{});var Cb=r(lp);Ff=a(Cb,"Examples:"),Cb.forEach(s),Af=d(ba),E(Uo.$$.fragment,ba),ba.forEach(s),Ft.forEach(s),qd=d(i),on=o(i,"H2",{class:!0});var cc=r(on);On=o(cc,"A",{id:!0,class:!0,href:!0});var Mb=r(On);pp=o(Mb,"SPAN",{});var Pb=r(pp);E(Bo.$$.fragment,Pb),Pb.forEach(s),Mb.forEach(s),zf=d(cc),dp=o(cc,"SPAN",{});var Sb=r(dp);xf=a(Sb,"TapasForMaskedLM"),Sb.forEach(s),cc.forEach(s),$d=d(i),Tt=o(i,"DIV",{class:!0});var oo=r(Tt);E(Ro.$$.fragment,oo),Cf=d(oo),rn=o(oo,"P",{});var Li=r(rn);Mf=a(Li,"Tapas Model with a "),cp=o(Li,"CODE",{});var Db=r(cp);Pf=a(Db,"language modeling"),Db.forEach(s),Sf=a(Li,` head on top.
This model inherits from `),mi=o(Li,"A",{href:!0});var Nb=r(mi);Df=a(Nb,"PreTrainedModel"),Nb.forEach(s),Nf=a(Li,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li.forEach(s),Of=d(oo),Go=o(oo,"P",{});var hc=r(Go);Lf=a(hc,"This model is also a PyTorch "),Vo=o(hc,"A",{href:!0,rel:!0});var Ob=r(Vo);Qf=a(Ob,"torch.nn.Module"),Ob.forEach(s),If=a(hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc.forEach(s),Wf=d(oo),Ks=o(oo,"DIV",{class:!0});var ka=r(Ks);E(Ko.$$.fragment,ka),Hf=d(ka),ln=o(ka,"P",{});var Qi=r(ln);Uf=a(Qi,"The "),fi=o(Qi,"A",{href:!0});var Lb=r(fi);Bf=a(Lb,"TapasForMaskedLM"),Lb.forEach(s),Rf=a(Qi," forward method, overrides the "),hp=o(Qi,"CODE",{});var Qb=r(hp);Gf=a(Qb,"__call__"),Qb.forEach(s),Vf=a(Qi," special method."),Qi.forEach(s),Kf=d(ka),E(Ln.$$.fragment,ka),Yf=d(ka),up=o(ka,"P",{});var Ib=r(up);Jf=a(Ib,"Examples:"),Ib.forEach(s),Xf=d(ka),E(Yo.$$.fragment,ka),ka.forEach(s),oo.forEach(s),Ed=d(i),pn=o(i,"H2",{class:!0});var uc=r(pn);Qn=o(uc,"A",{id:!0,class:!0,href:!0});var Wb=r(Qn);mp=o(Wb,"SPAN",{});var Hb=r(mp);E(Jo.$$.fragment,Hb),Hb.forEach(s),Wb.forEach(s),Zf=d(uc),fp=o(uc,"SPAN",{});var Ub=r(fp);eg=a(Ub,"TapasForSequenceClassification"),Ub.forEach(s),uc.forEach(s),Fd=d(i),Hs=o(i,"DIV",{class:!0});var ya=r(Hs);E(Xo.$$.fragment,ya),sg=d(ya),gp=o(ya,"P",{});var Bb=r(gp);tg=a(Bb,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Bb.forEach(s),ag=d(ya),Zo=o(ya,"P",{});var mc=r(Zo);ng=a(mc,"This model inherits from "),gi=o(mc,"A",{href:!0});var Rb=r(gi);og=a(Rb,"PreTrainedModel"),Rb.forEach(s),rg=a(mc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc.forEach(s),ig=d(ya),er=o(ya,"P",{});var fc=r(er);lg=a(fc,"This model is also a PyTorch "),sr=o(fc,"A",{href:!0,rel:!0});var Gb=r(sr);pg=a(Gb,"torch.nn.Module"),Gb.forEach(s),dg=a(fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fc.forEach(s),cg=d(ya),Ys=o(ya,"DIV",{class:!0});var ja=r(Ys);E(tr.$$.fragment,ja),hg=d(ja),dn=o(ja,"P",{});var Ii=r(dn);ug=a(Ii,"The "),_i=o(Ii,"A",{href:!0});var Vb=r(_i);mg=a(Vb,"TapasForSequenceClassification"),Vb.forEach(s),fg=a(Ii," forward method, overrides the "),_p=o(Ii,"CODE",{});var Kb=r(_p);gg=a(Kb,"__call__"),Kb.forEach(s),_g=a(Ii," special method."),Ii.forEach(s),Tg=d(ja),E(In.$$.fragment,ja),vg=d(ja),Tp=o(ja,"P",{});var Yb=r(Tp);wg=a(Yb,"Examples:"),Yb.forEach(s),bg=d(ja),E(ar.$$.fragment,ja),ja.forEach(s),ya.forEach(s),Ad=d(i),cn=o(i,"H2",{class:!0});var gc=r(cn);Wn=o(gc,"A",{id:!0,class:!0,href:!0});var Jb=r(Wn);vp=o(Jb,"SPAN",{});var Xb=r(vp);E(nr.$$.fragment,Xb),Xb.forEach(s),Jb.forEach(s),kg=d(gc),wp=o(gc,"SPAN",{});var Zb=r(wp);yg=a(Zb,"TapasForQuestionAnswering"),Zb.forEach(s),gc.forEach(s),zd=d(i),Us=o(i,"DIV",{class:!0});var qa=r(Us);E(or.$$.fragment,qa),jg=d(qa),hn=o(qa,"P",{});var Wi=r(hn);qg=a(Wi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bp=o(Wi,"CODE",{});var ek=r(bp);$g=a(ek,"logits"),ek.forEach(s),Eg=a(Wi," and optional "),kp=o(Wi,"CODE",{});var sk=r(kp);Fg=a(sk,"logits_aggregation"),sk.forEach(s),Ag=a(Wi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Wi.forEach(s),zg=d(qa),rr=o(qa,"P",{});var _c=r(rr);xg=a(_c,"This model inherits from "),Ti=o(_c,"A",{href:!0});var tk=r(Ti);Cg=a(tk,"PreTrainedModel"),tk.forEach(s),Mg=a(_c,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(s),Pg=d(qa),ir=o(qa,"P",{});var Tc=r(ir);Sg=a(Tc,"This model is also a PyTorch "),lr=o(Tc,"A",{href:!0,rel:!0});var ak=r(lr);Dg=a(ak,"torch.nn.Module"),ak.forEach(s),Ng=a(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(s),Og=d(qa),Js=o(qa,"DIV",{class:!0});var $a=r(Js);E(pr.$$.fragment,$a),Lg=d($a),un=o($a,"P",{});var Hi=r(un);Qg=a(Hi,"The "),vi=o(Hi,"A",{href:!0});var nk=r(vi);Ig=a(nk,"TapasForQuestionAnswering"),nk.forEach(s),Wg=a(Hi," forward method, overrides the "),yp=o(Hi,"CODE",{});var ok=r(yp);Hg=a(ok,"__call__"),ok.forEach(s),Ug=a(Hi," special method."),Hi.forEach(s),Bg=d($a),E(Hn.$$.fragment,$a),Rg=d($a),jp=o($a,"P",{});var rk=r(jp);Gg=a(rk,"Examples:"),rk.forEach(s),Vg=d($a),E(dr.$$.fragment,$a),$a.forEach(s),qa.forEach(s),xd=d(i),mn=o(i,"H2",{class:!0});var vc=r(mn);Un=o(vc,"A",{id:!0,class:!0,href:!0});var ik=r(Un);qp=o(ik,"SPAN",{});var lk=r(qp);E(cr.$$.fragment,lk),lk.forEach(s),ik.forEach(s),Kg=d(vc),$p=o(vc,"SPAN",{});var pk=r($p);Yg=a(pk,"TFTapasModel"),pk.forEach(s),vc.forEach(s),Cd=d(i),ps=o(i,"DIV",{class:!0});var At=r(ps);E(hr.$$.fragment,At),Jg=d(At),Ep=o(At,"P",{});var dk=r(Ep);Xg=a(dk,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),dk.forEach(s),Zg=d(At),ur=o(At,"P",{});var wc=r(ur);e_=a(wc,"This model inherits from "),wi=o(wc,"A",{href:!0});var ck=r(wi);s_=a(ck,"TFPreTrainedModel"),ck.forEach(s),t_=a(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(s),a_=d(At),mr=o(At,"P",{});var bc=r(mr);n_=a(bc,"This model is also a "),fr=o(bc,"A",{href:!0,rel:!0});var hk=r(fr);o_=a(hk,"tf.keras.Model"),hk.forEach(s),r_=a(bc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bc.forEach(s),i_=d(At),E(Bn.$$.fragment,At),l_=d(At),Xs=o(At,"DIV",{class:!0});var Ea=r(Xs);E(gr.$$.fragment,Ea),p_=d(Ea),fn=o(Ea,"P",{});var Ui=r(fn);d_=a(Ui,"The "),bi=o(Ui,"A",{href:!0});var uk=r(bi);c_=a(uk,"TFTapasModel"),uk.forEach(s),h_=a(Ui," forward method, overrides the "),Fp=o(Ui,"CODE",{});var mk=r(Fp);u_=a(mk,"__call__"),mk.forEach(s),m_=a(Ui," special method."),Ui.forEach(s),f_=d(Ea),E(Rn.$$.fragment,Ea),g_=d(Ea),Ap=o(Ea,"P",{});var fk=r(Ap);__=a(fk,"Examples:"),fk.forEach(s),T_=d(Ea),E(_r.$$.fragment,Ea),Ea.forEach(s),At.forEach(s),Md=d(i),gn=o(i,"H2",{class:!0});var kc=r(gn);Gn=o(kc,"A",{id:!0,class:!0,href:!0});var gk=r(Gn);zp=o(gk,"SPAN",{});var _k=r(zp);E(Tr.$$.fragment,_k),_k.forEach(s),gk.forEach(s),v_=d(kc),xp=o(kc,"SPAN",{});var Tk=r(xp);w_=a(Tk,"TFTapasForMaskedLM"),Tk.forEach(s),kc.forEach(s),Pd=d(i),ds=o(i,"DIV",{class:!0});var zt=r(ds);E(vr.$$.fragment,zt),b_=d(zt),wr=o(zt,"P",{});var yc=r(wr);k_=a(yc,"Tapas Model with a "),Cp=o(yc,"CODE",{});var vk=r(Cp);y_=a(vk,"language modeling"),vk.forEach(s),j_=a(yc," head on top."),yc.forEach(s),q_=d(zt),br=o(zt,"P",{});var jc=r(br);$_=a(jc,"This model inherits from "),ki=o(jc,"A",{href:!0});var wk=r(ki);E_=a(wk,"TFPreTrainedModel"),wk.forEach(s),F_=a(jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jc.forEach(s),A_=d(zt),kr=o(zt,"P",{});var qc=r(kr);z_=a(qc,"This model is also a "),yr=o(qc,"A",{href:!0,rel:!0});var bk=r(yr);x_=a(bk,"tf.keras.Model"),bk.forEach(s),C_=a(qc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qc.forEach(s),M_=d(zt),E(Vn.$$.fragment,zt),P_=d(zt),Zs=o(zt,"DIV",{class:!0});var Fa=r(Zs);E(jr.$$.fragment,Fa),S_=d(Fa),_n=o(Fa,"P",{});var Bi=r(_n);D_=a(Bi,"The "),yi=o(Bi,"A",{href:!0});var kk=r(yi);N_=a(kk,"TFTapasForMaskedLM"),kk.forEach(s),O_=a(Bi," forward method, overrides the "),Mp=o(Bi,"CODE",{});var yk=r(Mp);L_=a(yk,"__call__"),yk.forEach(s),Q_=a(Bi," special method."),Bi.forEach(s),I_=d(Fa),E(Kn.$$.fragment,Fa),W_=d(Fa),Pp=o(Fa,"P",{});var jk=r(Pp);H_=a(jk,"Examples:"),jk.forEach(s),U_=d(Fa),E(qr.$$.fragment,Fa),Fa.forEach(s),zt.forEach(s),Sd=d(i),Tn=o(i,"H2",{class:!0});var $c=r(Tn);Yn=o($c,"A",{id:!0,class:!0,href:!0});var qk=r(Yn);Sp=o(qk,"SPAN",{});var $k=r(Sp);E($r.$$.fragment,$k),$k.forEach(s),qk.forEach(s),B_=d($c),Dp=o($c,"SPAN",{});var Ek=r(Dp);R_=a(Ek,"TFTapasForSequenceClassification"),Ek.forEach(s),$c.forEach(s),Dd=d(i),cs=o(i,"DIV",{class:!0});var xt=r(cs);E(Er.$$.fragment,xt),G_=d(xt),Np=o(xt,"P",{});var Fk=r(Np);V_=a(Fk,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Fk.forEach(s),K_=d(xt),Fr=o(xt,"P",{});var Ec=r(Fr);Y_=a(Ec,"This model inherits from "),ji=o(Ec,"A",{href:!0});var Ak=r(ji);J_=a(Ak,"TFPreTrainedModel"),Ak.forEach(s),X_=a(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(s),Z_=d(xt),Ar=o(xt,"P",{});var Fc=r(Ar);eT=a(Fc,"This model is also a "),zr=o(Fc,"A",{href:!0,rel:!0});var zk=r(zr);sT=a(zk,"tf.keras.Model"),zk.forEach(s),tT=a(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(s),aT=d(xt),E(Jn.$$.fragment,xt),nT=d(xt),et=o(xt,"DIV",{class:!0});var Aa=r(et);E(xr.$$.fragment,Aa),oT=d(Aa),vn=o(Aa,"P",{});var Ri=r(vn);rT=a(Ri,"The "),qi=o(Ri,"A",{href:!0});var xk=r(qi);iT=a(xk,"TFTapasForSequenceClassification"),xk.forEach(s),lT=a(Ri," forward method, overrides the "),Op=o(Ri,"CODE",{});var Ck=r(Op);pT=a(Ck,"__call__"),Ck.forEach(s),dT=a(Ri," special method."),Ri.forEach(s),cT=d(Aa),E(Xn.$$.fragment,Aa),hT=d(Aa),Lp=o(Aa,"P",{});var Mk=r(Lp);uT=a(Mk,"Examples:"),Mk.forEach(s),mT=d(Aa),E(Cr.$$.fragment,Aa),Aa.forEach(s),xt.forEach(s),Nd=d(i),wn=o(i,"H2",{class:!0});var Ac=r(wn);Zn=o(Ac,"A",{id:!0,class:!0,href:!0});var Pk=r(Zn);Qp=o(Pk,"SPAN",{});var Sk=r(Qp);E(Mr.$$.fragment,Sk),Sk.forEach(s),Pk.forEach(s),fT=d(Ac),Ip=o(Ac,"SPAN",{});var Dk=r(Ip);gT=a(Dk,"TFTapasForQuestionAnswering"),Dk.forEach(s),Ac.forEach(s),Od=d(i),hs=o(i,"DIV",{class:!0});var Ct=r(hs);E(Pr.$$.fragment,Ct),_T=d(Ct),bn=o(Ct,"P",{});var Gi=r(bn);TT=a(Gi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wp=o(Gi,"CODE",{});var Nk=r(Wp);vT=a(Nk,"logits"),Nk.forEach(s),wT=a(Gi," and optional "),Hp=o(Gi,"CODE",{});var Ok=r(Hp);bT=a(Ok,"logits_aggregation"),Ok.forEach(s),kT=a(Gi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Gi.forEach(s),yT=d(Ct),Sr=o(Ct,"P",{});var zc=r(Sr);jT=a(zc,"This model inherits from "),$i=o(zc,"A",{href:!0});var Lk=r($i);qT=a(Lk,"TFPreTrainedModel"),Lk.forEach(s),$T=a(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(s),ET=d(Ct),Dr=o(Ct,"P",{});var xc=r(Dr);FT=a(xc,"This model is also a "),Nr=o(xc,"A",{href:!0,rel:!0});var Qk=r(Nr);AT=a(Qk,"tf.keras.Model"),Qk.forEach(s),zT=a(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(s),xT=d(Ct),E(eo.$$.fragment,Ct),CT=d(Ct),st=o(Ct,"DIV",{class:!0});var za=r(st);E(Or.$$.fragment,za),MT=d(za),kn=o(za,"P",{});var Vi=r(kn);PT=a(Vi,"The "),Ei=o(Vi,"A",{href:!0});var Ik=r(Ei);ST=a(Ik,"TFTapasForQuestionAnswering"),Ik.forEach(s),DT=a(Vi," forward method, overrides the "),Up=o(Vi,"CODE",{});var Wk=r(Up);NT=a(Wk,"__call__"),Wk.forEach(s),OT=a(Vi," special method."),Vi.forEach(s),LT=d(za),E(so.$$.fragment,za),QT=d(za),Bp=o(za,"P",{});var Hk=r(Bp);IT=a(Hk,"Examples:"),Hk.forEach(s),WT=d(za),E(Lr.$$.fragment,za),za.forEach(s),Ct.forEach(s),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(jy)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(j,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(P,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(P,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(oe,"href","https://github.com/salesforce/WikiSQL"),h(oe,"rel","nofollow"),h(ke,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ke,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Vk(ms.src,da="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(ms,"src",da),h(ms,"alt","drawing"),h(ms,"width","600"),h(ss,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(bs,"href","https://huggingface.co/nielsr"),h(bs,"rel","nofollow"),h(ys,"href","https://huggingface.co/kamalkraj"),h(ys,"rel","nofollow"),h(qs,"href","https://github.com/google-research/tapas"),h(qs,"rel","nofollow"),h(Gs,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasConfig"),h(xs,"href","https://huggingface.co/models?search=tapas"),h(xs,"rel","nofollow"),h(Ns,"href","https://github.com/google-research/tapas%3E"),h(Ns,"rel","nofollow"),h(ts,"id","usage-finetuning"),h(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ts,"href","#usage-finetuning"),h(Qs,"class","relative group"),h(bt,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(yt,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(lo,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(lo,"rel","nofollow"),h(po,"href","https://huggingface.co/models?search=tapas"),h(po,"rel","nofollow"),h(co,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(co,"rel","nofollow"),h(ho,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(ho,"rel","nofollow"),h(uo,"href","https://github.com/NielsRogge/tapas_utils"),h(uo,"rel","nofollow"),h(ei,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(mo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(mo,"rel","nofollow"),h(fo,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fo,"rel","nofollow"),h(zn,"id","usage-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#usage-inference"),h(Xa,"class","relative group"),h(_o,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_o,"rel","nofollow"),h(To,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(To,"rel","nofollow"),h(Cn,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Za,"class","relative group"),h(ti,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(en,"class","docstring"),h(Mn,"id","transformers.TapasConfig"),h(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mn,"href","#transformers.TapasConfig"),h(sn,"class","relative group"),h(ai,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasModel"),h(ni,"href","/docs/transformers/pr_16354/en/main_classes/configuration#transformers.PretrainedConfig"),h(qo,"href","https://github.com/google-research/tapas/tree/master"),h(qo,"rel","nofollow"),h(Ws,"class","docstring"),h(Pn,"id","transformers.TapasTokenizer"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.TapasTokenizer"),h(tn,"class","relative group"),h(oi,"href","/docs/transformers/pr_16354/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ri,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(li,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasTokenizer"),h(Sn,"class","docstring"),h(pi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Mo,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Mo,"rel","nofollow"),h(Ta,"class","docstring"),h(di,"class","docstring"),h(Ge,"class","docstring"),h(Dn,"id","transformers.TapasModel"),h(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dn,"href","#transformers.TapasModel"),h(an,"class","relative group"),h(ci,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel"),h(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Lo,"rel","nofollow"),h(hi,"href","/docs/transformers/pr_16354/en/model_doc/bert#transformers.BertModel"),h(Wo,"href","https://arxiv.org/abs/1706.03762"),h(Wo,"rel","nofollow"),h(ui,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasModel"),h(Vs,"class","docstring"),h(ls,"class","docstring"),h(On,"id","transformers.TapasForMaskedLM"),h(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(On,"href","#transformers.TapasForMaskedLM"),h(on,"class","relative group"),h(mi,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel"),h(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Vo,"rel","nofollow"),h(fi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Ks,"class","docstring"),h(Tt,"class","docstring"),h(Qn,"id","transformers.TapasForSequenceClassification"),h(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qn,"href","#transformers.TapasForSequenceClassification"),h(pn,"class","relative group"),h(gi,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel"),h(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(sr,"rel","nofollow"),h(_i,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Ys,"class","docstring"),h(Hs,"class","docstring"),h(Wn,"id","transformers.TapasForQuestionAnswering"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#transformers.TapasForQuestionAnswering"),h(cn,"class","relative group"),h(Ti,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.PreTrainedModel"),h(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(lr,"rel","nofollow"),h(vi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Js,"class","docstring"),h(Us,"class","docstring"),h(Un,"id","transformers.TFTapasModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.TFTapasModel"),h(mn,"class","relative group"),h(wi,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.TFPreTrainedModel"),h(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fr,"rel","nofollow"),h(bi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasModel"),h(Xs,"class","docstring"),h(ps,"class","docstring"),h(Gn,"id","transformers.TFTapasForMaskedLM"),h(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gn,"href","#transformers.TFTapasForMaskedLM"),h(gn,"class","relative group"),h(ki,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.TFPreTrainedModel"),h(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(yr,"rel","nofollow"),h(yi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zs,"class","docstring"),h(ds,"class","docstring"),h(Yn,"id","transformers.TFTapasForSequenceClassification"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.TFTapasForSequenceClassification"),h(Tn,"class","relative group"),h(ji,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.TFPreTrainedModel"),h(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(zr,"rel","nofollow"),h(qi,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(et,"class","docstring"),h(cs,"class","docstring"),h(Zn,"id","transformers.TFTapasForQuestionAnswering"),h(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zn,"href","#transformers.TFTapasForQuestionAnswering"),h(wn,"class","relative group"),h($i,"href","/docs/transformers/pr_16354/en/main_classes/model#transformers.TFPreTrainedModel"),h(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Nr,"rel","nofollow"),h(Ei,"href","/docs/transformers/pr_16354/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(st,"class","docstring"),h(hs,"class","docstring")},m(i,m){e(document.head,l),u(i,_,m),u(i,c,m),e(c,f),e(f,v),F(w,v,null),e(c,T),e(c,y),e(y,k),u(i,D,m),u(i,j,m),e(j,H),e(H,G),F(V,G,null),e(j,B),e(j,K),e(K,re),u(i,I,m),u(i,O,m),e(O,b),e(O,M),e(M,R),e(O,C),u(i,N,m),u(i,ee,m),e(ee,se),u(i,ce,m),u(i,ne,m),e(ne,te),e(te,P),e(P,L),e(te,W),e(ne,X),e(ne,Q),e(Q,Y),e(Y,ge),e(Q,ue),e(ne,_e),e(ne,me),e(me,oe),e(oe,je),e(me,ie),u(i,we,m),u(i,g,m),e(g,S),u(i,ve,m),u(i,ze,m),e(ze,be),u(i,le,m),u(i,xe,m),e(xe,Me),e(Me,Z),u(i,pe,m),u(i,de,m),e(de,De),e(de,qe),e(qe,Te),e(de,Ne),e(de,ke),e(ke,Ae),e(de,Oe),e(de,Ze),e(Ze,Pt),e(de,St),u(i,us,m),u(i,ms,m),u(i,fs,m),u(i,gs,m),e(gs,Dt),e(gs,ss),e(ss,Nt),e(gs,Ot),u(i,Ke,m),u(i,Pe,m),e(Pe,Lt),e(Pe,bs),e(bs,ye),e(Pe,ks),e(Pe,ys),e(ys,Qt),e(Pe,js),e(Pe,qs),e(qs,It),e(Pe,$s),u(i,vt,m),u(i,Rs,m),e(Rs,Es),u(i,wt,m),u(i,Ye,m),e(Ye,$e),e($e,Wt),e($e,Fs),e(Fs,ae),e($e,ns),e($e,Gs),e(Gs,Ht),e($e,As),e($e,nt),e(nt,Ut),e($e,zs),e($e,xs),e(xs,Bt),e($e,Cs),e($e,ot),e(ot,Rt),e($e,Ms),e($e,rt),e(rt,Gt),e($e,Ps),e(Ye,Vt),e(Ye,Le),e(Le,Ss),e(Le,it),e(it,Kt),e(Le,Ds),e(Le,lt),e(lt,Yt),e(Le,pt),e(Le,Ue),e(Ue,dt),e(Le,Ee),e(Le,ct),e(ct,os),e(Le,Jt),e(Le,Ns),e(Ns,Os),e(Le,Xt),e(Ye,Zt),e(Ye,Be),e(Be,ea),e(Be,ht),e(ht,ut),e(Be,es),e(Be,Ls),e(Ls,q),e(Be,J),e(Ye,xa),e(Ye,sa),e(sa,Ca),u(i,ca,m),u(i,Qs,m),e(Qs,ts),e(ts,ta),F(rs,ta,null),e(Qs,Ma),e(Qs,aa),e(aa,Pa),u(i,ha,m),u(i,Ie,m),e(Ie,mt),e(Ie,bt),e(bt,Re),e(Ie,Sa),u(i,ua,m),u(i,kt,m),e(kt,na),e(na,ft),u(i,ma,m),u(i,fe,m),e(fe,Da),e(fe,yt),e(yt,Na),e(fe,Oa),u(i,fa,m),u(i,_s,m),e(_s,oa),e(oa,gt),e(_s,La),e(_s,Fe),e(Fe,Qa),e(Fe,ra),e(ra,Ia),e(Fe,Wa),e(_s,Ha),e(_s,he),e(he,Ua),e(he,ia),e(ia,Ba),e(he,Ra),u(i,ga,m),u(i,jt,m),e(jt,Ga),u(i,_a,m),u(i,Ce,m),e(Ce,la),e(la,Is),e(Is,pa),e(pa,Ki),e(Ki,Mc),e(Is,Pc),e(Is,Yi),e(Yi,Ji),e(Ji,Sc),e(Is,Dc),e(Is,Xi),e(Xi,Zi),e(Zi,Nc),e(Ce,Oc),e(Ce,Va),e(Va,Ka),e(Ka,el),e(el,Lc),e(Ka,Qc),e(Ka,sl),e(sl,Ic),e(Ka,Wc),e(Ka,tl),e(tl,Hc),e(Va,Uc),e(Va,Ya),e(Ya,al),e(al,Bc),e(Ya,Rc),e(Ya,nl),e(nl,Gc),e(Ya,Vc),e(Ya,ol),e(ol,Kc),e(Va,Yc),e(Va,Ja),e(Ja,rl),e(rl,Jc),e(Ja,Xc),e(Ja,il),e(il,Zc),e(Ja,eh),e(Ja,ll),e(ll,sh),u(i,td,m),F(jn,i,m),u(i,ad,m),u(i,qn,m),e(qn,th),e(qn,lo),e(lo,ah),e(qn,nh),u(i,nd,m),u(i,$n,m),e($n,oh),e($n,po),e(po,rh),e($n,ih),u(i,od,m),u(i,Hr,m),e(Hr,pl),e(pl,lh),u(i,rd,m),u(i,En,m),e(En,ph),e(En,co),e(co,dh),e(En,ch),u(i,id,m),u(i,We,m),e(We,Ur),e(Ur,dl),e(dl,hh),e(Ur,uh),e(We,mh),e(We,Br),e(Br,cl),e(cl,fh),e(Br,gh),e(We,_h),e(We,Rr),e(Rr,hl),e(hl,Th),e(Rr,vh),e(We,wh),e(We,Gr),e(Gr,ul),e(ul,bh),e(Gr,kh),e(We,yh),e(We,Vr),e(Vr,ml),e(ml,jh),e(Vr,qh),e(We,$h),e(We,Kr),e(Kr,fl),e(fl,Eh),e(Kr,Fh),e(We,Ah),e(We,Yr),e(Yr,gl),e(gl,zh),e(Yr,xh),e(We,Ch),e(We,Jr),e(Jr,_l),e(_l,Mh),e(Jr,Ph),e(We,Sh),e(We,Xr),e(Xr,Tl),e(Tl,Dh),e(Xr,Nh),u(i,ld,m),u(i,Ts,m),e(Ts,Oh),e(Ts,ho),e(ho,Lh),e(Ts,Qh),e(Ts,uo),e(uo,Ih),e(Ts,Wh),e(Ts,vl),e(vl,Hh),e(Ts,Uh),e(Ts,wl),e(wl,Bh),e(Ts,Rh),e(Ts,bl),e(bl,Gh),e(Ts,Vh),u(i,pd,m),u(i,Zr,m),e(Zr,kl),e(kl,Kh),u(i,dd,m),F(Fn,i,m),u(i,cd,m),u(i,Se,m),e(Se,Yh),e(Se,yl),e(yl,Jh),e(Se,Xh),e(Se,jl),e(jl,Zh),e(Se,eu),e(Se,ql),e(ql,su),e(Se,tu),e(Se,$l),e($l,au),e(Se,nu),e(Se,El),e(El,ou),e(Se,ru),e(Se,Fl),e(Fl,iu),e(Se,lu),e(Se,ei),e(ei,pu),e(Se,du),e(Se,mo),e(mo,cu),e(Se,hu),e(Se,fo),e(fo,uu),e(Se,mu),u(i,hd,m),u(i,si,m),e(si,fu),u(i,ud,m),F(An,i,m),u(i,md,m),u(i,Xa,m),e(Xa,zn),e(zn,Al),F(go,Al,null),e(Xa,gu),e(Xa,zl),e(zl,_u),u(i,fd,m),F(xn,i,m),u(i,gd,m),u(i,vs,m),e(vs,Tu),e(vs,xl),e(xl,vu),e(vs,wu),e(vs,Cl),e(Cl,bu),e(vs,ku),e(vs,Ml),e(Ml,yu),e(vs,ju),e(vs,_o),e(_o,qu),e(vs,$u),e(vs,To),e(To,Eu),e(vs,Fu),u(i,_d,m),u(i,Za,m),e(Za,Cn),e(Cn,Pl),F(vo,Pl,null),e(Za,Au),e(Za,Sl),e(Sl,zu),u(i,Td,m),u(i,en,m),F(wo,en,null),e(en,xu),e(en,bo),e(bo,Cu),e(bo,ti),e(ti,Mu),e(bo,Pu),u(i,vd,m),u(i,sn,m),e(sn,Mn),e(Mn,Dl),F(ko,Dl,null),e(sn,Su),e(sn,Nl),e(Nl,Du),u(i,wd,m),u(i,Ws,m),F(yo,Ws,null),e(Ws,Nu),e(Ws,_t),e(_t,Ou),e(_t,ai),e(ai,Lu),e(_t,Qu),e(_t,Ol),e(Ol,Iu),e(_t,Wu),e(_t,Ll),e(Ll,Hu),e(_t,Uu),e(_t,ni),e(ni,Bu),e(_t,Ru),e(Ws,Gu),e(Ws,jo),e(jo,Vu),e(jo,qo),e(qo,Ku),e(jo,Yu),e(Ws,Ju),e(Ws,Ql),e(Ql,Xu),e(Ws,Zu),F($o,Ws,null),u(i,bd,m),u(i,tn,m),e(tn,Pn),e(Pn,Il),F(Eo,Il,null),e(tn,em),e(tn,Wl),e(Wl,sm),u(i,kd,m),u(i,Ge,m),F(Fo,Ge,null),e(Ge,tm),e(Ge,Hl),e(Hl,am),e(Ge,nm),e(Ge,Qe),e(Qe,om),e(Qe,oi),e(oi,rm),e(Qe,im),e(Qe,ri),e(ri,lm),e(Qe,pm),e(Qe,Ul),e(Ul,dm),e(Qe,cm),e(Qe,Bl),e(Bl,hm),e(Qe,um),e(Qe,Rl),e(Rl,mm),e(Qe,fm),e(Qe,Gl),e(Gl,gm),e(Qe,_m),e(Qe,Vl),e(Vl,Tm),e(Qe,vm),e(Qe,Kl),e(Kl,wm),e(Qe,bm),e(Qe,Yl),e(Yl,km),e(Qe,ym),e(Ge,jm),e(Ge,is),e(is,Jl),e(Jl,qm),e(is,$m),e(is,Xl),e(Xl,Em),e(is,Fm),e(is,Zl),e(Zl,Am),e(is,zm),e(is,ep),e(ep,xm),e(is,Cm),e(is,sp),e(sp,Mm),e(is,Pm),e(is,tp),e(tp,Sm),e(is,Dm),e(is,ap),e(ap,Nm),e(Ge,Om),e(Ge,ii),e(ii,li),e(li,Lm),e(ii,Qm),e(Ge,Im),e(Ge,Sn),F(Ao,Sn,null),e(Sn,Wm),e(Sn,np),e(np,Hm),e(Ge,Um),e(Ge,Ta),F(zo,Ta,null),e(Ta,Bm),e(Ta,xo),e(xo,Rm),e(xo,pi),e(pi,Gm),e(xo,Vm),e(Ta,Km),e(Ta,Co),e(Co,Ym),e(Co,Mo),e(Mo,Jm),e(Co,Xm),e(Ge,Zm),e(Ge,di),F(Po,di,null),u(i,yd,m),u(i,an,m),e(an,Dn),e(Dn,op),F(So,op,null),e(an,ef),e(an,rp),e(rp,sf),u(i,jd,m),u(i,ls,m),F(Do,ls,null),e(ls,tf),e(ls,No),e(No,af),e(No,ci),e(ci,nf),e(No,of),e(ls,rf),e(ls,Oo),e(Oo,lf),e(Oo,Lo),e(Lo,pf),e(Oo,df),e(ls,cf),e(ls,Qo),e(Qo,hf),e(Qo,hi),e(hi,uf),e(Qo,mf),e(ls,ff),e(ls,Io),e(Io,gf),e(Io,Wo),e(Wo,_f),e(Io,Tf),e(ls,vf),e(ls,Vs),F(Ho,Vs,null),e(Vs,wf),e(Vs,nn),e(nn,bf),e(nn,ui),e(ui,kf),e(nn,yf),e(nn,ip),e(ip,jf),e(nn,qf),e(Vs,$f),F(Nn,Vs,null),e(Vs,Ef),e(Vs,lp),e(lp,Ff),e(Vs,Af),F(Uo,Vs,null),u(i,qd,m),u(i,on,m),e(on,On),e(On,pp),F(Bo,pp,null),e(on,zf),e(on,dp),e(dp,xf),u(i,$d,m),u(i,Tt,m),F(Ro,Tt,null),e(Tt,Cf),e(Tt,rn),e(rn,Mf),e(rn,cp),e(cp,Pf),e(rn,Sf),e(rn,mi),e(mi,Df),e(rn,Nf),e(Tt,Of),e(Tt,Go),e(Go,Lf),e(Go,Vo),e(Vo,Qf),e(Go,If),e(Tt,Wf),e(Tt,Ks),F(Ko,Ks,null),e(Ks,Hf),e(Ks,ln),e(ln,Uf),e(ln,fi),e(fi,Bf),e(ln,Rf),e(ln,hp),e(hp,Gf),e(ln,Vf),e(Ks,Kf),F(Ln,Ks,null),e(Ks,Yf),e(Ks,up),e(up,Jf),e(Ks,Xf),F(Yo,Ks,null),u(i,Ed,m),u(i,pn,m),e(pn,Qn),e(Qn,mp),F(Jo,mp,null),e(pn,Zf),e(pn,fp),e(fp,eg),u(i,Fd,m),u(i,Hs,m),F(Xo,Hs,null),e(Hs,sg),e(Hs,gp),e(gp,tg),e(Hs,ag),e(Hs,Zo),e(Zo,ng),e(Zo,gi),e(gi,og),e(Zo,rg),e(Hs,ig),e(Hs,er),e(er,lg),e(er,sr),e(sr,pg),e(er,dg),e(Hs,cg),e(Hs,Ys),F(tr,Ys,null),e(Ys,hg),e(Ys,dn),e(dn,ug),e(dn,_i),e(_i,mg),e(dn,fg),e(dn,_p),e(_p,gg),e(dn,_g),e(Ys,Tg),F(In,Ys,null),e(Ys,vg),e(Ys,Tp),e(Tp,wg),e(Ys,bg),F(ar,Ys,null),u(i,Ad,m),u(i,cn,m),e(cn,Wn),e(Wn,vp),F(nr,vp,null),e(cn,kg),e(cn,wp),e(wp,yg),u(i,zd,m),u(i,Us,m),F(or,Us,null),e(Us,jg),e(Us,hn),e(hn,qg),e(hn,bp),e(bp,$g),e(hn,Eg),e(hn,kp),e(kp,Fg),e(hn,Ag),e(Us,zg),e(Us,rr),e(rr,xg),e(rr,Ti),e(Ti,Cg),e(rr,Mg),e(Us,Pg),e(Us,ir),e(ir,Sg),e(ir,lr),e(lr,Dg),e(ir,Ng),e(Us,Og),e(Us,Js),F(pr,Js,null),e(Js,Lg),e(Js,un),e(un,Qg),e(un,vi),e(vi,Ig),e(un,Wg),e(un,yp),e(yp,Hg),e(un,Ug),e(Js,Bg),F(Hn,Js,null),e(Js,Rg),e(Js,jp),e(jp,Gg),e(Js,Vg),F(dr,Js,null),u(i,xd,m),u(i,mn,m),e(mn,Un),e(Un,qp),F(cr,qp,null),e(mn,Kg),e(mn,$p),e($p,Yg),u(i,Cd,m),u(i,ps,m),F(hr,ps,null),e(ps,Jg),e(ps,Ep),e(Ep,Xg),e(ps,Zg),e(ps,ur),e(ur,e_),e(ur,wi),e(wi,s_),e(ur,t_),e(ps,a_),e(ps,mr),e(mr,n_),e(mr,fr),e(fr,o_),e(mr,r_),e(ps,i_),F(Bn,ps,null),e(ps,l_),e(ps,Xs),F(gr,Xs,null),e(Xs,p_),e(Xs,fn),e(fn,d_),e(fn,bi),e(bi,c_),e(fn,h_),e(fn,Fp),e(Fp,u_),e(fn,m_),e(Xs,f_),F(Rn,Xs,null),e(Xs,g_),e(Xs,Ap),e(Ap,__),e(Xs,T_),F(_r,Xs,null),u(i,Md,m),u(i,gn,m),e(gn,Gn),e(Gn,zp),F(Tr,zp,null),e(gn,v_),e(gn,xp),e(xp,w_),u(i,Pd,m),u(i,ds,m),F(vr,ds,null),e(ds,b_),e(ds,wr),e(wr,k_),e(wr,Cp),e(Cp,y_),e(wr,j_),e(ds,q_),e(ds,br),e(br,$_),e(br,ki),e(ki,E_),e(br,F_),e(ds,A_),e(ds,kr),e(kr,z_),e(kr,yr),e(yr,x_),e(kr,C_),e(ds,M_),F(Vn,ds,null),e(ds,P_),e(ds,Zs),F(jr,Zs,null),e(Zs,S_),e(Zs,_n),e(_n,D_),e(_n,yi),e(yi,N_),e(_n,O_),e(_n,Mp),e(Mp,L_),e(_n,Q_),e(Zs,I_),F(Kn,Zs,null),e(Zs,W_),e(Zs,Pp),e(Pp,H_),e(Zs,U_),F(qr,Zs,null),u(i,Sd,m),u(i,Tn,m),e(Tn,Yn),e(Yn,Sp),F($r,Sp,null),e(Tn,B_),e(Tn,Dp),e(Dp,R_),u(i,Dd,m),u(i,cs,m),F(Er,cs,null),e(cs,G_),e(cs,Np),e(Np,V_),e(cs,K_),e(cs,Fr),e(Fr,Y_),e(Fr,ji),e(ji,J_),e(Fr,X_),e(cs,Z_),e(cs,Ar),e(Ar,eT),e(Ar,zr),e(zr,sT),e(Ar,tT),e(cs,aT),F(Jn,cs,null),e(cs,nT),e(cs,et),F(xr,et,null),e(et,oT),e(et,vn),e(vn,rT),e(vn,qi),e(qi,iT),e(vn,lT),e(vn,Op),e(Op,pT),e(vn,dT),e(et,cT),F(Xn,et,null),e(et,hT),e(et,Lp),e(Lp,uT),e(et,mT),F(Cr,et,null),u(i,Nd,m),u(i,wn,m),e(wn,Zn),e(Zn,Qp),F(Mr,Qp,null),e(wn,fT),e(wn,Ip),e(Ip,gT),u(i,Od,m),u(i,hs,m),F(Pr,hs,null),e(hs,_T),e(hs,bn),e(bn,TT),e(bn,Wp),e(Wp,vT),e(bn,wT),e(bn,Hp),e(Hp,bT),e(bn,kT),e(hs,yT),e(hs,Sr),e(Sr,jT),e(Sr,$i),e($i,qT),e(Sr,$T),e(hs,ET),e(hs,Dr),e(Dr,FT),e(Dr,Nr),e(Nr,AT),e(Dr,zT),e(hs,xT),F(eo,hs,null),e(hs,CT),e(hs,st),F(Or,st,null),e(st,MT),e(st,kn),e(kn,PT),e(kn,Ei),e(Ei,ST),e(kn,DT),e(kn,Up),e(Up,NT),e(kn,OT),e(st,LT),F(so,st,null),e(st,QT),e(st,Bp),e(Bp,IT),e(st,WT),F(Lr,st,null),Ld=!0},p(i,[m]){const Qr={};m&2&&(Qr.$$scope={dirty:m,ctx:i}),jn.$set(Qr);const Rp={};m&2&&(Rp.$$scope={dirty:m,ctx:i}),Fn.$set(Rp);const Gp={};m&2&&(Gp.$$scope={dirty:m,ctx:i}),An.$set(Gp);const Vp={};m&2&&(Vp.$$scope={dirty:m,ctx:i}),xn.$set(Vp);const Ir={};m&2&&(Ir.$$scope={dirty:m,ctx:i}),Nn.$set(Ir);const Kp={};m&2&&(Kp.$$scope={dirty:m,ctx:i}),Ln.$set(Kp);const Yp={};m&2&&(Yp.$$scope={dirty:m,ctx:i}),In.$set(Yp);const Jp={};m&2&&(Jp.$$scope={dirty:m,ctx:i}),Hn.$set(Jp);const Wr={};m&2&&(Wr.$$scope={dirty:m,ctx:i}),Bn.$set(Wr);const Xp={};m&2&&(Xp.$$scope={dirty:m,ctx:i}),Rn.$set(Xp);const Zp={};m&2&&(Zp.$$scope={dirty:m,ctx:i}),Vn.$set(Zp);const yn={};m&2&&(yn.$$scope={dirty:m,ctx:i}),Kn.$set(yn);const Fi={};m&2&&(Fi.$$scope={dirty:m,ctx:i}),Jn.$set(Fi);const ed={};m&2&&(ed.$$scope={dirty:m,ctx:i}),Xn.$set(ed);const Ai={};m&2&&(Ai.$$scope={dirty:m,ctx:i}),eo.$set(Ai);const sd={};m&2&&(sd.$$scope={dirty:m,ctx:i}),so.$set(sd)},i(i){Ld||(A(w.$$.fragment,i),A(V.$$.fragment,i),A(rs.$$.fragment,i),A(jn.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(go.$$.fragment,i),A(xn.$$.fragment,i),A(vo.$$.fragment,i),A(wo.$$.fragment,i),A(ko.$$.fragment,i),A(yo.$$.fragment,i),A($o.$$.fragment,i),A(Eo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(zo.$$.fragment,i),A(Po.$$.fragment,i),A(So.$$.fragment,i),A(Do.$$.fragment,i),A(Ho.$$.fragment,i),A(Nn.$$.fragment,i),A(Uo.$$.fragment,i),A(Bo.$$.fragment,i),A(Ro.$$.fragment,i),A(Ko.$$.fragment,i),A(Ln.$$.fragment,i),A(Yo.$$.fragment,i),A(Jo.$$.fragment,i),A(Xo.$$.fragment,i),A(tr.$$.fragment,i),A(In.$$.fragment,i),A(ar.$$.fragment,i),A(nr.$$.fragment,i),A(or.$$.fragment,i),A(pr.$$.fragment,i),A(Hn.$$.fragment,i),A(dr.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(Bn.$$.fragment,i),A(gr.$$.fragment,i),A(Rn.$$.fragment,i),A(_r.$$.fragment,i),A(Tr.$$.fragment,i),A(vr.$$.fragment,i),A(Vn.$$.fragment,i),A(jr.$$.fragment,i),A(Kn.$$.fragment,i),A(qr.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Jn.$$.fragment,i),A(xr.$$.fragment,i),A(Xn.$$.fragment,i),A(Cr.$$.fragment,i),A(Mr.$$.fragment,i),A(Pr.$$.fragment,i),A(eo.$$.fragment,i),A(Or.$$.fragment,i),A(so.$$.fragment,i),A(Lr.$$.fragment,i),Ld=!0)},o(i){z(w.$$.fragment,i),z(V.$$.fragment,i),z(rs.$$.fragment,i),z(jn.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(go.$$.fragment,i),z(xn.$$.fragment,i),z(vo.$$.fragment,i),z(wo.$$.fragment,i),z(ko.$$.fragment,i),z(yo.$$.fragment,i),z($o.$$.fragment,i),z(Eo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(zo.$$.fragment,i),z(Po.$$.fragment,i),z(So.$$.fragment,i),z(Do.$$.fragment,i),z(Ho.$$.fragment,i),z(Nn.$$.fragment,i),z(Uo.$$.fragment,i),z(Bo.$$.fragment,i),z(Ro.$$.fragment,i),z(Ko.$$.fragment,i),z(Ln.$$.fragment,i),z(Yo.$$.fragment,i),z(Jo.$$.fragment,i),z(Xo.$$.fragment,i),z(tr.$$.fragment,i),z(In.$$.fragment,i),z(ar.$$.fragment,i),z(nr.$$.fragment,i),z(or.$$.fragment,i),z(pr.$$.fragment,i),z(Hn.$$.fragment,i),z(dr.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(Bn.$$.fragment,i),z(gr.$$.fragment,i),z(Rn.$$.fragment,i),z(_r.$$.fragment,i),z(Tr.$$.fragment,i),z(vr.$$.fragment,i),z(Vn.$$.fragment,i),z(jr.$$.fragment,i),z(Kn.$$.fragment,i),z(qr.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Jn.$$.fragment,i),z(xr.$$.fragment,i),z(Xn.$$.fragment,i),z(Cr.$$.fragment,i),z(Mr.$$.fragment,i),z(Pr.$$.fragment,i),z(eo.$$.fragment,i),z(Or.$$.fragment,i),z(so.$$.fragment,i),z(Lr.$$.fragment,i),Ld=!1},d(i){s(l),i&&s(_),i&&s(c),x(w),i&&s(D),i&&s(j),x(V),i&&s(I),i&&s(O),i&&s(N),i&&s(ee),i&&s(ce),i&&s(ne),i&&s(we),i&&s(g),i&&s(ve),i&&s(ze),i&&s(le),i&&s(xe),i&&s(pe),i&&s(de),i&&s(us),i&&s(ms),i&&s(fs),i&&s(gs),i&&s(Ke),i&&s(Pe),i&&s(vt),i&&s(Rs),i&&s(wt),i&&s(Ye),i&&s(ca),i&&s(Qs),x(rs),i&&s(ha),i&&s(Ie),i&&s(ua),i&&s(kt),i&&s(ma),i&&s(fe),i&&s(fa),i&&s(_s),i&&s(ga),i&&s(jt),i&&s(_a),i&&s(Ce),i&&s(td),x(jn,i),i&&s(ad),i&&s(qn),i&&s(nd),i&&s($n),i&&s(od),i&&s(Hr),i&&s(rd),i&&s(En),i&&s(id),i&&s(We),i&&s(ld),i&&s(Ts),i&&s(pd),i&&s(Zr),i&&s(dd),x(Fn,i),i&&s(cd),i&&s(Se),i&&s(hd),i&&s(si),i&&s(ud),x(An,i),i&&s(md),i&&s(Xa),x(go),i&&s(fd),x(xn,i),i&&s(gd),i&&s(vs),i&&s(_d),i&&s(Za),x(vo),i&&s(Td),i&&s(en),x(wo),i&&s(vd),i&&s(sn),x(ko),i&&s(wd),i&&s(Ws),x(yo),x($o),i&&s(bd),i&&s(tn),x(Eo),i&&s(kd),i&&s(Ge),x(Fo),x(Ao),x(zo),x(Po),i&&s(yd),i&&s(an),x(So),i&&s(jd),i&&s(ls),x(Do),x(Ho),x(Nn),x(Uo),i&&s(qd),i&&s(on),x(Bo),i&&s($d),i&&s(Tt),x(Ro),x(Ko),x(Ln),x(Yo),i&&s(Ed),i&&s(pn),x(Jo),i&&s(Fd),i&&s(Hs),x(Xo),x(tr),x(In),x(ar),i&&s(Ad),i&&s(cn),x(nr),i&&s(zd),i&&s(Us),x(or),x(pr),x(Hn),x(dr),i&&s(xd),i&&s(mn),x(cr),i&&s(Cd),i&&s(ps),x(hr),x(Bn),x(gr),x(Rn),x(_r),i&&s(Md),i&&s(gn),x(Tr),i&&s(Pd),i&&s(ds),x(vr),x(Vn),x(jr),x(Kn),x(qr),i&&s(Sd),i&&s(Tn),x($r),i&&s(Dd),i&&s(cs),x(Er),x(Jn),x(xr),x(Xn),x(Cr),i&&s(Nd),i&&s(wn),x(Mr),i&&s(Od),i&&s(hs),x(Pr),x(eo),x(Or),x(so),x(Lr)}}}const jy={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function qy(U,l,_){let{fw:c}=l;return U.$$set=f=>{"fw"in f&&_(0,c=f.fw)},[c]}class Cy extends Uk{constructor(l){super();Bk(this,l,qy,yy,Rk,{fw:0})}}export{Cy as default,jy as metadata};
