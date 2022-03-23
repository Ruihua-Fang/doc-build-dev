import{S as ia,i as pa,s as da,e as n,k as d,w as u,t as i,M as ca,c as l,d as e,m as c,a as o,x as m,h as p,b as h,F as t,g as r,y as _,L as ha,q as f,o as g,B as x,v as ua}from"../chunks/vendor-aa873a46.js";import{I as jt}from"../chunks/IconCopyLink-d0ca3106.js";import{C as q}from"../chunks/CodeBlock-1f14baf3.js";function ma(wt){let j,Ts,w,E,qs,I,be,js,ke,Qs,v,A,Se,De,R,Pe,Le,Ns,ps,Ie,Bs,y,b,ws,C,Ae,vs,Re,Ms,k,Ce,O,Oe,ze,Hs,ds,ys,Fe,Us,z,Ws,F,$s,Te,Js,T,Gs,Q,N,Qe,cs,Ne,Be,Ks,B,Vs,M,S,Me,Es,He,Ue,bs,We,Xs,H,Ys,U,hs,Je,ks,Ge,Zs,W,se,J,us,Ke,Ss,Ve,ee,G,te,$,D,Ds,K,Xe,Ps,Ye,ae,ms,Ze,ne,P,st,V,et,tt,le,_s,Ls,at,oe,X,re,Y,Z,nt,fs,lt,ot,ie,ss,pe,es,L,rt,Is,it,pt,As,dt,de,ts,ce,as,ns,ct,Rs,ht,ut,he,ls,ue,os,gs,mt,Cs,_t,me,rs,_e,xs,ft,fe,is,ge;return I=new jt({}),C=new jt({}),z=new q({props:{code:`from transformers import DPRContextEncoder, DPRContextEncoderTokenizer
import torch
torch.set_grad_enabled(False)
ctx_encoder = DPRContextEncoder.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base")
ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRContextEncoder, DPRContextEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.set_grad_enabled(<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_encoder = DPRContextEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)`}}),T=new q({props:{code:`from datasets import load_dataset
ds = load_dataset('crime_and_punish', split='train[:100]')
ds_with_embeddings = ds.map(lambda example: {'embeddings': ctx_encoder(**ctx_tokenizer(example["line"], return_tensors="pt"))[0][0].numpy()})`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings = ds.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> example: {<span class="hljs-string">&#x27;embeddings&#x27;</span>: ctx_encoder(**ctx_tokenizer(example[<span class="hljs-string">&quot;line&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()})`}}),B=new q({props:{code:"ds_with_embeddings.add_faiss_index(column='embeddings')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.add_faiss_index(column=<span class="hljs-string">&#x27;embeddings&#x27;</span>)'}}),H=new q({props:{code:`from transformers import DPRQuestionEncoder, DPRQuestionEncoderTokenizer
q_encoder = DPRQuestionEncoder.from_pretrained("facebook/dpr-question_encoder-single-nq-base")
q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained("facebook/dpr-question_encoder-single-nq-base")

question = "Is it serious ?"
question_embedding = q_encoder(**q_tokenizer(question, return_tensors="pt"))[0][0].numpy()
scores, retrieved_examples = ds_with_embeddings.get_nearest_examples('embeddings', question_embedding, k=10)
retrieved_examples["line"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRQuestionEncoder, DPRQuestionEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>q_encoder = DPRQuestionEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Is it serious ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_embedding = q_encoder(**q_tokenizer(question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = ds_with_embeddings.get_nearest_examples(<span class="hljs-string">&#x27;embeddings&#x27;</span>, question_embedding, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;line&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;_that_ serious? It is not serious at all. It\u2019s simply a fantasy to amuse\\r\\n&#x27;</span>`}}),W=new q({props:{code:"ds_with_embeddings.save_faiss_index('embeddings', 'my_index.faiss')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.save_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)'}}),G=new q({props:{code:`ds = load_dataset('crime_and_punish', split='train[:100]')
ds.load_faiss_index('embeddings', 'my_index.faiss')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.load_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)`}}),K=new jt({}),X=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)`}}),ss=new q({props:{code:'squad.add_elasticsearch_index("context", host="localhost", port="9200")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>)'}}),ts=new q({props:{code:`query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)
retrieved_examples["title"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;title&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;Computational_complexity_theory&#x27;</span>`}}),ls=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.add_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
squad.get_index("context").es_index_name`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.get_index(<span class="hljs-string">&quot;context&quot;</span>).es_index_name
hf_squad_val_context`}}),rs=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.load_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.load_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)`}}),is=new q({props:{code:`import elasticsearch as es
import elasticsearch.helpers
from elasticsearch import Elasticsearch
es_client = Elasticsearch([{"host": "localhost", "port": "9200"}])  # default client
es_config = {
    "settings": {
        "number_of_shards": 1,
        "analysis": {"analyzer": {"stop_standard": {"type": "standard", " stopwords": "_english_"}}},
    },
    "mappings": {"properties": {"text": {"type": "text", "analyzer": "standard", "similarity": "BM25"}}},
}  # default config
es_index_name = "hf_squad_context"  # name of the index in ElasticSearch
squad.add_elasticsearch_index("context", es_client=es_client, es_config=es_config, es_index_name=es_index_name)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch <span class="hljs-keyword">as</span> es
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch.helpers
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> elasticsearch <span class="hljs-keyword">import</span> Elasticsearch
<span class="hljs-meta">&gt;&gt;&gt; </span>es_client = Elasticsearch([{<span class="hljs-string">&quot;host&quot;</span>: <span class="hljs-string">&quot;localhost&quot;</span>, <span class="hljs-string">&quot;port&quot;</span>: <span class="hljs-string">&quot;9200&quot;</span>}])  <span class="hljs-comment"># default client</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_config = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;settings&quot;</span>: {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;number_of_shards&quot;</span>: <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;analysis&quot;</span>: {<span class="hljs-string">&quot;analyzer&quot;</span>: {<span class="hljs-string">&quot;stop_standard&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot; stopwords&quot;</span>: <span class="hljs-string">&quot;_english_&quot;</span>}}},
<span class="hljs-meta">... </span>    },
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mappings&quot;</span>: {<span class="hljs-string">&quot;properties&quot;</span>: {<span class="hljs-string">&quot;text&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;analyzer&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot;similarity&quot;</span>: <span class="hljs-string">&quot;BM25&quot;</span>}}},
<span class="hljs-meta">... </span>}  <span class="hljs-comment"># default config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_index_name = <span class="hljs-string">&quot;hf_squad_context&quot;</span>  <span class="hljs-comment"># name of the index in ElasticSearch</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, es_client=es_client, es_config=es_config, es_index_name=es_index_name)`}}),{c(){j=n("meta"),Ts=d(),w=n("h1"),E=n("a"),qs=n("span"),u(I.$$.fragment),be=d(),js=n("span"),ke=i("Search index"),Qs=d(),v=n("p"),A=n("a"),Se=i("FAISS"),De=i(" and "),R=n("a"),Pe=i("ElasticSearch"),Le=i(" enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Ns=d(),ps=n("p"),Ie=i("This guide will show you how to build an index for your dataset that will allow you to search it."),Bs=d(),y=n("h2"),b=n("a"),ws=n("span"),u(C.$$.fragment),Ae=d(),vs=n("span"),Re=i("FAISS"),Ms=d(),k=n("p"),Ce=i("FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=n("a"),Oe=i("DPR"),ze=i(" model."),Hs=d(),ds=n("ol"),ys=n("li"),Fe=i("Download the DPR model from \u{1F917} Transformers:"),Us=d(),u(z.$$.fragment),Ws=d(),F=n("ol"),$s=n("li"),Te=i("Load your dataset and compute the vector representations:"),Js=d(),u(T.$$.fragment),Gs=d(),Q=n("ol"),N=n("li"),Qe=i("Create the index with "),cs=n("a"),Ne=i("Dataset.add_faiss_index()"),Be=i(":"),Ks=d(),u(B.$$.fragment),Vs=d(),M=n("ol"),S=n("li"),Me=i("Now you can query your dataset with the "),Es=n("code"),He=i("embeddings"),Ue=i(" index. Load the DPR Question Encoder, and search for a question with "),bs=n("code"),We=i("get_nearest_examples()"),Xs=d(),u(H.$$.fragment),Ys=d(),U=n("ol"),hs=n("li"),Je=i("When you are done querying, save the index on disk with "),ks=n("code"),Ge=i("save_faiss_index()"),Zs=d(),u(W.$$.fragment),se=d(),J=n("ol"),us=n("li"),Ke=i("Reload it at a later time with "),Ss=n("code"),Ve=i("load_faiss_index()"),ee=d(),u(G.$$.fragment),te=d(),$=n("h2"),D=n("a"),Ds=n("span"),u(K.$$.fragment),Xe=d(),Ps=n("span"),Ye=i("ElasticSearch"),ae=d(),ms=n("p"),Ze=i("Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),ne=d(),P=n("p"),st=i("Start ElasticSearch on your machine, or see the "),V=n("a"),et=i("ElasticSearch installation guide"),tt=i(" if you don\u2019t already have it installed."),le=d(),_s=n("ol"),Ls=n("li"),at=i("Load the dataset you want to index:"),oe=d(),u(X.$$.fragment),re=d(),Y=n("ol"),Z=n("li"),nt=i("Build the index with "),fs=n("a"),lt=i("Dataset.add_elasticsearch_index()"),ot=i(":"),ie=d(),u(ss.$$.fragment),pe=d(),es=n("ol"),L=n("li"),rt=i("Then you can query the "),Is=n("code"),it=i("context"),pt=i(" index with "),As=n("code"),dt=i("get_nearest_examples()"),de=d(),u(ts.$$.fragment),ce=d(),as=n("ol"),ns=n("li"),ct=i("If you want to reuse the index, define the "),Rs=n("code"),ht=i("es_index_name"),ut=i(" parameter when you build the index:"),he=d(),u(ls.$$.fragment),ue=d(),os=n("ol"),gs=n("li"),mt=i("Reload it later with the index name when you call "),Cs=n("code"),_t=i("load_elasticsearch_index()"),me=d(),u(rs.$$.fragment),_e=d(),xs=n("p"),ft=i("For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),fe=d(),u(is.$$.fragment),this.h()},l(s){const a=ca('[data-svelte="svelte-1phssyn"]',document.head);j=l(a,"META",{name:!0,content:!0}),a.forEach(e),Ts=c(s),w=l(s,"H1",{class:!0});var xe=o(w);E=l(xe,"A",{id:!0,class:!0,href:!0});var vt=o(E);qs=l(vt,"SPAN",{});var yt=o(qs);m(I.$$.fragment,yt),yt.forEach(e),vt.forEach(e),be=c(xe),js=l(xe,"SPAN",{});var $t=o(js);ke=p($t,"Search index"),$t.forEach(e),xe.forEach(e),Qs=c(s),v=l(s,"P",{});var Os=o(v);A=l(Os,"A",{href:!0,rel:!0});var Et=o(A);Se=p(Et,"FAISS"),Et.forEach(e),De=p(Os," and "),R=l(Os,"A",{href:!0,rel:!0});var bt=o(R);Pe=p(bt,"ElasticSearch"),bt.forEach(e),Le=p(Os," enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Os.forEach(e),Ns=c(s),ps=l(s,"P",{});var kt=o(ps);Ie=p(kt,"This guide will show you how to build an index for your dataset that will allow you to search it."),kt.forEach(e),Bs=c(s),y=l(s,"H2",{class:!0});var qe=o(y);b=l(qe,"A",{id:!0,class:!0,href:!0});var St=o(b);ws=l(St,"SPAN",{});var Dt=o(ws);m(C.$$.fragment,Dt),Dt.forEach(e),St.forEach(e),Ae=c(qe),vs=l(qe,"SPAN",{});var Pt=o(vs);Re=p(Pt,"FAISS"),Pt.forEach(e),qe.forEach(e),Ms=c(s),k=l(s,"P",{});var je=o(k);Ce=p(je,"FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=l(je,"A",{href:!0,rel:!0});var Lt=o(O);Oe=p(Lt,"DPR"),Lt.forEach(e),ze=p(je," model."),je.forEach(e),Hs=c(s),ds=l(s,"OL",{});var It=o(ds);ys=l(It,"LI",{});var At=o(ys);Fe=p(At,"Download the DPR model from \u{1F917} Transformers:"),At.forEach(e),It.forEach(e),Us=c(s),m(z.$$.fragment,s),Ws=c(s),F=l(s,"OL",{start:!0});var Rt=o(F);$s=l(Rt,"LI",{});var Ct=o($s);Te=p(Ct,"Load your dataset and compute the vector representations:"),Ct.forEach(e),Rt.forEach(e),Js=c(s),m(T.$$.fragment,s),Gs=c(s),Q=l(s,"OL",{start:!0});var Ot=o(Q);N=l(Ot,"LI",{});var we=o(N);Qe=p(we,"Create the index with "),cs=l(we,"A",{href:!0});var zt=o(cs);Ne=p(zt,"Dataset.add_faiss_index()"),zt.forEach(e),Be=p(we,":"),we.forEach(e),Ot.forEach(e),Ks=c(s),m(B.$$.fragment,s),Vs=c(s),M=l(s,"OL",{start:!0});var Ft=o(M);S=l(Ft,"LI",{});var zs=o(S);Me=p(zs,"Now you can query your dataset with the "),Es=l(zs,"CODE",{});var Tt=o(Es);He=p(Tt,"embeddings"),Tt.forEach(e),Ue=p(zs," index. Load the DPR Question Encoder, and search for a question with "),bs=l(zs,"CODE",{});var Qt=o(bs);We=p(Qt,"get_nearest_examples()"),Qt.forEach(e),zs.forEach(e),Ft.forEach(e),Xs=c(s),m(H.$$.fragment,s),Ys=c(s),U=l(s,"OL",{start:!0});var Nt=o(U);hs=l(Nt,"LI",{});var gt=o(hs);Je=p(gt,"When you are done querying, save the index on disk with "),ks=l(gt,"CODE",{});var Bt=o(ks);Ge=p(Bt,"save_faiss_index()"),Bt.forEach(e),gt.forEach(e),Nt.forEach(e),Zs=c(s),m(W.$$.fragment,s),se=c(s),J=l(s,"OL",{start:!0});var Mt=o(J);us=l(Mt,"LI",{});var xt=o(us);Ke=p(xt,"Reload it at a later time with "),Ss=l(xt,"CODE",{});var Ht=o(Ss);Ve=p(Ht,"load_faiss_index()"),Ht.forEach(e),xt.forEach(e),Mt.forEach(e),ee=c(s),m(G.$$.fragment,s),te=c(s),$=l(s,"H2",{class:!0});var ve=o($);D=l(ve,"A",{id:!0,class:!0,href:!0});var Ut=o(D);Ds=l(Ut,"SPAN",{});var Wt=o(Ds);m(K.$$.fragment,Wt),Wt.forEach(e),Ut.forEach(e),Xe=c(ve),Ps=l(ve,"SPAN",{});var Jt=o(Ps);Ye=p(Jt,"ElasticSearch"),Jt.forEach(e),ve.forEach(e),ae=c(s),ms=l(s,"P",{});var Gt=o(ms);Ze=p(Gt,"Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),Gt.forEach(e),ne=c(s),P=l(s,"P",{});var ye=o(P);st=p(ye,"Start ElasticSearch on your machine, or see the "),V=l(ye,"A",{href:!0,rel:!0});var Kt=o(V);et=p(Kt,"ElasticSearch installation guide"),Kt.forEach(e),tt=p(ye," if you don\u2019t already have it installed."),ye.forEach(e),le=c(s),_s=l(s,"OL",{});var Vt=o(_s);Ls=l(Vt,"LI",{});var Xt=o(Ls);at=p(Xt,"Load the dataset you want to index:"),Xt.forEach(e),Vt.forEach(e),oe=c(s),m(X.$$.fragment,s),re=c(s),Y=l(s,"OL",{start:!0});var Yt=o(Y);Z=l(Yt,"LI",{});var $e=o(Z);nt=p($e,"Build the index with "),fs=l($e,"A",{href:!0});var Zt=o(fs);lt=p(Zt,"Dataset.add_elasticsearch_index()"),Zt.forEach(e),ot=p($e,":"),$e.forEach(e),Yt.forEach(e),ie=c(s),m(ss.$$.fragment,s),pe=c(s),es=l(s,"OL",{start:!0});var sa=o(es);L=l(sa,"LI",{});var Fs=o(L);rt=p(Fs,"Then you can query the "),Is=l(Fs,"CODE",{});var ea=o(Is);it=p(ea,"context"),ea.forEach(e),pt=p(Fs," index with "),As=l(Fs,"CODE",{});var ta=o(As);dt=p(ta,"get_nearest_examples()"),ta.forEach(e),Fs.forEach(e),sa.forEach(e),de=c(s),m(ts.$$.fragment,s),ce=c(s),as=l(s,"OL",{start:!0});var aa=o(as);ns=l(aa,"LI",{});var Ee=o(ns);ct=p(Ee,"If you want to reuse the index, define the "),Rs=l(Ee,"CODE",{});var na=o(Rs);ht=p(na,"es_index_name"),na.forEach(e),ut=p(Ee," parameter when you build the index:"),Ee.forEach(e),aa.forEach(e),he=c(s),m(ls.$$.fragment,s),ue=c(s),os=l(s,"OL",{start:!0});var la=o(os);gs=l(la,"LI",{});var qt=o(gs);mt=p(qt,"Reload it later with the index name when you call "),Cs=l(qt,"CODE",{});var oa=o(Cs);_t=p(oa,"load_elasticsearch_index()"),oa.forEach(e),qt.forEach(e),la.forEach(e),me=c(s),m(rs.$$.fragment,s),_e=c(s),xs=l(s,"P",{});var ra=o(xs);ft=p(ra,"For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),ra.forEach(e),fe=c(s),m(is.$$.fragment,s),this.h()},h(){h(j,"name","hf:doc:metadata"),h(j,"content",JSON.stringify(_a)),h(E,"id","search-index"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#search-index"),h(w,"class","relative group"),h(A,"href","https://github.com/facebookresearch/faiss"),h(A,"rel","nofollow"),h(R,"href","https://www.elastic.co/elasticsearch/"),h(R,"rel","nofollow"),h(b,"id","faiss"),h(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(b,"href","#faiss"),h(y,"class","relative group"),h(O,"href","https://huggingface.co/transformers/model_doc/dpr.html"),h(O,"rel","nofollow"),h(F,"start","2"),h(cs,"href","/docs/datasets/pr_3999/en/package_reference/main_classes#datasets.Dataset.add_faiss_index"),h(Q,"start","3"),h(M,"start","4"),h(U,"start","5"),h(J,"start","6"),h(D,"id","elasticsearch"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#elasticsearch"),h($,"class","relative group"),h(V,"href","https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html"),h(V,"rel","nofollow"),h(fs,"href","/docs/datasets/pr_3999/en/package_reference/main_classes#datasets.Dataset.add_elasticsearch_index"),h(Y,"start","2"),h(es,"start","3"),h(as,"start","4"),h(os,"start","5")},m(s,a){t(document.head,j),r(s,Ts,a),r(s,w,a),t(w,E),t(E,qs),_(I,qs,null),t(w,be),t(w,js),t(js,ke),r(s,Qs,a),r(s,v,a),t(v,A),t(A,Se),t(v,De),t(v,R),t(R,Pe),t(v,Le),r(s,Ns,a),r(s,ps,a),t(ps,Ie),r(s,Bs,a),r(s,y,a),t(y,b),t(b,ws),_(C,ws,null),t(y,Ae),t(y,vs),t(vs,Re),r(s,Ms,a),r(s,k,a),t(k,Ce),t(k,O),t(O,Oe),t(k,ze),r(s,Hs,a),r(s,ds,a),t(ds,ys),t(ys,Fe),r(s,Us,a),_(z,s,a),r(s,Ws,a),r(s,F,a),t(F,$s),t($s,Te),r(s,Js,a),_(T,s,a),r(s,Gs,a),r(s,Q,a),t(Q,N),t(N,Qe),t(N,cs),t(cs,Ne),t(N,Be),r(s,Ks,a),_(B,s,a),r(s,Vs,a),r(s,M,a),t(M,S),t(S,Me),t(S,Es),t(Es,He),t(S,Ue),t(S,bs),t(bs,We),r(s,Xs,a),_(H,s,a),r(s,Ys,a),r(s,U,a),t(U,hs),t(hs,Je),t(hs,ks),t(ks,Ge),r(s,Zs,a),_(W,s,a),r(s,se,a),r(s,J,a),t(J,us),t(us,Ke),t(us,Ss),t(Ss,Ve),r(s,ee,a),_(G,s,a),r(s,te,a),r(s,$,a),t($,D),t(D,Ds),_(K,Ds,null),t($,Xe),t($,Ps),t(Ps,Ye),r(s,ae,a),r(s,ms,a),t(ms,Ze),r(s,ne,a),r(s,P,a),t(P,st),t(P,V),t(V,et),t(P,tt),r(s,le,a),r(s,_s,a),t(_s,Ls),t(Ls,at),r(s,oe,a),_(X,s,a),r(s,re,a),r(s,Y,a),t(Y,Z),t(Z,nt),t(Z,fs),t(fs,lt),t(Z,ot),r(s,ie,a),_(ss,s,a),r(s,pe,a),r(s,es,a),t(es,L),t(L,rt),t(L,Is),t(Is,it),t(L,pt),t(L,As),t(As,dt),r(s,de,a),_(ts,s,a),r(s,ce,a),r(s,as,a),t(as,ns),t(ns,ct),t(ns,Rs),t(Rs,ht),t(ns,ut),r(s,he,a),_(ls,s,a),r(s,ue,a),r(s,os,a),t(os,gs),t(gs,mt),t(gs,Cs),t(Cs,_t),r(s,me,a),_(rs,s,a),r(s,_e,a),r(s,xs,a),t(xs,ft),r(s,fe,a),_(is,s,a),ge=!0},p:ha,i(s){ge||(f(I.$$.fragment,s),f(C.$$.fragment,s),f(z.$$.fragment,s),f(T.$$.fragment,s),f(B.$$.fragment,s),f(H.$$.fragment,s),f(W.$$.fragment,s),f(G.$$.fragment,s),f(K.$$.fragment,s),f(X.$$.fragment,s),f(ss.$$.fragment,s),f(ts.$$.fragment,s),f(ls.$$.fragment,s),f(rs.$$.fragment,s),f(is.$$.fragment,s),ge=!0)},o(s){g(I.$$.fragment,s),g(C.$$.fragment,s),g(z.$$.fragment,s),g(T.$$.fragment,s),g(B.$$.fragment,s),g(H.$$.fragment,s),g(W.$$.fragment,s),g(G.$$.fragment,s),g(K.$$.fragment,s),g(X.$$.fragment,s),g(ss.$$.fragment,s),g(ts.$$.fragment,s),g(ls.$$.fragment,s),g(rs.$$.fragment,s),g(is.$$.fragment,s),ge=!1},d(s){e(j),s&&e(Ts),s&&e(w),x(I),s&&e(Qs),s&&e(v),s&&e(Ns),s&&e(ps),s&&e(Bs),s&&e(y),x(C),s&&e(Ms),s&&e(k),s&&e(Hs),s&&e(ds),s&&e(Us),x(z,s),s&&e(Ws),s&&e(F),s&&e(Js),x(T,s),s&&e(Gs),s&&e(Q),s&&e(Ks),x(B,s),s&&e(Vs),s&&e(M),s&&e(Xs),x(H,s),s&&e(Ys),s&&e(U),s&&e(Zs),x(W,s),s&&e(se),s&&e(J),s&&e(ee),x(G,s),s&&e(te),s&&e($),x(K),s&&e(ae),s&&e(ms),s&&e(ne),s&&e(P),s&&e(le),s&&e(_s),s&&e(oe),x(X,s),s&&e(re),s&&e(Y),s&&e(ie),x(ss,s),s&&e(pe),s&&e(es),s&&e(de),x(ts,s),s&&e(ce),s&&e(as),s&&e(he),x(ls,s),s&&e(ue),s&&e(os),s&&e(me),x(rs,s),s&&e(_e),s&&e(xs),s&&e(fe),x(is,s)}}}const _a={local:"search-index",sections:[{local:"faiss",title:"FAISS"},{local:"elasticsearch",title:"ElasticSearch"}],title:"Search index"};function fa(wt){return ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ja extends ia{constructor(j){super();pa(this,j,fa,ma,da,{})}}export{ja as default,_a as metadata};
