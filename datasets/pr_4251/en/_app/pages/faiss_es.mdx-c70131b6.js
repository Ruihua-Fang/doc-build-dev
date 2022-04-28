import{S as ua,i as ma,s as _a,e as n,k as c,w as u,t as i,M as fa,c as l,d as e,m as h,a as r,x as m,h as p,b as d,F as t,g as o,y as _,L as ga,q as f,o as g,B as x,v as xa}from"../chunks/vendor-8138ceec.js";import{I as Et}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as q}from"../chunks/CodeBlock-fc89709f.js";function qa(kt){let j,Ts,w,b,ks,A,Se,bs,Pe,Qs,v,I,Le,Ae,R,Ie,Re,Ns,hs,ze,Bs,y,D,Ds,z,Ce,Ss,Fe,Ms,S,Oe,C,Te,Qe,Hs,us,Ps,Ne,Us,F,Ws,O,Ls,Be,Js,T,Gs,Q,N,Me,ms,He,Ue,Ks,B,Vs,M,$,We,As,Je,Ge,_s,Ke,Ve,Xs,H,Ys,U,W,Xe,fs,Ye,Ze,Zs,J,se,G,K,st,gs,et,tt,ee,V,te,E,P,Is,X,at,Rs,nt,ae,xs,lt,ne,L,rt,Y,ot,it,le,qs,zs,pt,re,Z,oe,ss,es,dt,js,ct,ht,ie,ts,pe,as,k,ut,Cs,mt,_t,ws,ft,gt,de,ns,ce,ls,rs,xt,Fs,qt,jt,he,os,ue,is,ps,wt,vs,vt,yt,me,ds,_e,ys,$t,fe,cs,ge;return A=new Et({}),z=new Et({}),F=new q({props:{code:`from transformers import DPRContextEncoder, DPRContextEncoderTokenizer
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
<span class="hljs-string">&#x27;_that_ serious? It is not serious at all. It\u2019s simply a fantasy to amuse\\r\\n&#x27;</span>`}}),J=new q({props:{code:"ds_with_embeddings.save_faiss_index('embeddings', 'my_index.faiss')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.save_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)'}}),V=new q({props:{code:`ds = load_dataset('crime_and_punish', split='train[:100]')
ds.load_faiss_index('embeddings', 'my_index.faiss')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.load_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)`}}),X=new Et({}),Z=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)`}}),ts=new q({props:{code:'squad.add_elasticsearch_index("context", host="localhost", port="9200")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>)'}}),ns=new q({props:{code:`query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)
retrieved_examples["title"][0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;title&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;Computational_complexity_theory&#x27;</span>`}}),os=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.add_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
squad.get_index("context").es_index_name`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.get_index(<span class="hljs-string">&quot;context&quot;</span>).es_index_name
hf_squad_val_context`}}),ds=new q({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.load_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.load_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)`}}),cs=new q({props:{code:`import elasticsearch as es
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
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, es_client=es_client, es_config=es_config, es_index_name=es_index_name)`}}),{c(){j=n("meta"),Ts=c(),w=n("h1"),b=n("a"),ks=n("span"),u(A.$$.fragment),Se=c(),bs=n("span"),Pe=i("Search index"),Qs=c(),v=n("p"),I=n("a"),Le=i("FAISS"),Ae=i(" and "),R=n("a"),Ie=i("ElasticSearch"),Re=i(" enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Ns=c(),hs=n("p"),ze=i("This guide will show you how to build an index for your dataset that will allow you to search it."),Bs=c(),y=n("h2"),D=n("a"),Ds=n("span"),u(z.$$.fragment),Ce=c(),Ss=n("span"),Fe=i("FAISS"),Ms=c(),S=n("p"),Oe=i("FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),C=n("a"),Te=i("DPR"),Qe=i(" model."),Hs=c(),us=n("ol"),Ps=n("li"),Ne=i("Download the DPR model from \u{1F917} Transformers:"),Us=c(),u(F.$$.fragment),Ws=c(),O=n("ol"),Ls=n("li"),Be=i("Load your dataset and compute the vector representations:"),Js=c(),u(T.$$.fragment),Gs=c(),Q=n("ol"),N=n("li"),Me=i("Create the index with "),ms=n("a"),He=i("Dataset.add_faiss_index()"),Ue=i(":"),Ks=c(),u(B.$$.fragment),Vs=c(),M=n("ol"),$=n("li"),We=i("Now you can query your dataset with the "),As=n("code"),Je=i("embeddings"),Ge=i(" index. Load the DPR Question Encoder, and search for a question with "),_s=n("a"),Ke=i("Dataset.get_nearest_examples()"),Ve=i(":"),Xs=c(),u(H.$$.fragment),Ys=c(),U=n("ol"),W=n("li"),Xe=i("When you are done querying, save the index on disk with "),fs=n("a"),Ye=i("Dataset.save_faiss_index()"),Ze=i(":"),Zs=c(),u(J.$$.fragment),se=c(),G=n("ol"),K=n("li"),st=i("Reload it at a later time with "),gs=n("a"),et=i("Dataset.load_faiss_index()"),tt=i(":"),ee=c(),u(V.$$.fragment),te=c(),E=n("h2"),P=n("a"),Is=n("span"),u(X.$$.fragment),at=c(),Rs=n("span"),nt=i("ElasticSearch"),ae=c(),xs=n("p"),lt=i("Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),ne=c(),L=n("p"),rt=i("Start ElasticSearch on your machine, or see the "),Y=n("a"),ot=i("ElasticSearch installation guide"),it=i(" if you don\u2019t already have it installed."),le=c(),qs=n("ol"),zs=n("li"),pt=i("Load the dataset you want to index:"),re=c(),u(Z.$$.fragment),oe=c(),ss=n("ol"),es=n("li"),dt=i("Build the index with "),js=n("a"),ct=i("Dataset.add_elasticsearch_index()"),ht=i(":"),ie=c(),u(ts.$$.fragment),pe=c(),as=n("ol"),k=n("li"),ut=i("Then you can query the "),Cs=n("code"),mt=i("context"),_t=i(" index with "),ws=n("a"),ft=i("Dataset.get_nearest_examples()"),gt=i(":"),de=c(),u(ns.$$.fragment),ce=c(),ls=n("ol"),rs=n("li"),xt=i("If you want to reuse the index, define the "),Fs=n("code"),qt=i("es_index_name"),jt=i(" parameter when you build the index:"),he=c(),u(os.$$.fragment),ue=c(),is=n("ol"),ps=n("li"),wt=i("Reload it later with the index name when you call "),vs=n("a"),vt=i("Dataset.load_elasticsearch_index()"),yt=i(":"),me=c(),u(ds.$$.fragment),_e=c(),ys=n("p"),$t=i("For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),fe=c(),u(cs.$$.fragment),this.h()},l(s){const a=fa('[data-svelte="svelte-1phssyn"]',document.head);j=l(a,"META",{name:!0,content:!0}),a.forEach(e),Ts=h(s),w=l(s,"H1",{class:!0});var xe=r(w);b=l(xe,"A",{id:!0,class:!0,href:!0});var bt=r(b);ks=l(bt,"SPAN",{});var Dt=r(ks);m(A.$$.fragment,Dt),Dt.forEach(e),bt.forEach(e),Se=h(xe),bs=l(xe,"SPAN",{});var St=r(bs);Pe=p(St,"Search index"),St.forEach(e),xe.forEach(e),Qs=h(s),v=l(s,"P",{});var Os=r(v);I=l(Os,"A",{href:!0,rel:!0});var Pt=r(I);Le=p(Pt,"FAISS"),Pt.forEach(e),Ae=p(Os," and "),R=l(Os,"A",{href:!0,rel:!0});var Lt=r(R);Ie=p(Lt,"ElasticSearch"),Lt.forEach(e),Re=p(Os," enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Os.forEach(e),Ns=h(s),hs=l(s,"P",{});var At=r(hs);ze=p(At,"This guide will show you how to build an index for your dataset that will allow you to search it."),At.forEach(e),Bs=h(s),y=l(s,"H2",{class:!0});var qe=r(y);D=l(qe,"A",{id:!0,class:!0,href:!0});var It=r(D);Ds=l(It,"SPAN",{});var Rt=r(Ds);m(z.$$.fragment,Rt),Rt.forEach(e),It.forEach(e),Ce=h(qe),Ss=l(qe,"SPAN",{});var zt=r(Ss);Fe=p(zt,"FAISS"),zt.forEach(e),qe.forEach(e),Ms=h(s),S=l(s,"P",{});var je=r(S);Oe=p(je,"FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),C=l(je,"A",{href:!0,rel:!0});var Ct=r(C);Te=p(Ct,"DPR"),Ct.forEach(e),Qe=p(je," model."),je.forEach(e),Hs=h(s),us=l(s,"OL",{});var Ft=r(us);Ps=l(Ft,"LI",{});var Ot=r(Ps);Ne=p(Ot,"Download the DPR model from \u{1F917} Transformers:"),Ot.forEach(e),Ft.forEach(e),Us=h(s),m(F.$$.fragment,s),Ws=h(s),O=l(s,"OL",{start:!0});var Tt=r(O);Ls=l(Tt,"LI",{});var Qt=r(Ls);Be=p(Qt,"Load your dataset and compute the vector representations:"),Qt.forEach(e),Tt.forEach(e),Js=h(s),m(T.$$.fragment,s),Gs=h(s),Q=l(s,"OL",{start:!0});var Nt=r(Q);N=l(Nt,"LI",{});var we=r(N);Me=p(we,"Create the index with "),ms=l(we,"A",{href:!0});var Bt=r(ms);He=p(Bt,"Dataset.add_faiss_index()"),Bt.forEach(e),Ue=p(we,":"),we.forEach(e),Nt.forEach(e),Ks=h(s),m(B.$$.fragment,s),Vs=h(s),M=l(s,"OL",{start:!0});var Mt=r(M);$=l(Mt,"LI",{});var $s=r($);We=p($s,"Now you can query your dataset with the "),As=l($s,"CODE",{});var Ht=r(As);Je=p(Ht,"embeddings"),Ht.forEach(e),Ge=p($s," index. Load the DPR Question Encoder, and search for a question with "),_s=l($s,"A",{href:!0});var Ut=r(_s);Ke=p(Ut,"Dataset.get_nearest_examples()"),Ut.forEach(e),Ve=p($s,":"),$s.forEach(e),Mt.forEach(e),Xs=h(s),m(H.$$.fragment,s),Ys=h(s),U=l(s,"OL",{start:!0});var Wt=r(U);W=l(Wt,"LI",{});var ve=r(W);Xe=p(ve,"When you are done querying, save the index on disk with "),fs=l(ve,"A",{href:!0});var Jt=r(fs);Ye=p(Jt,"Dataset.save_faiss_index()"),Jt.forEach(e),Ze=p(ve,":"),ve.forEach(e),Wt.forEach(e),Zs=h(s),m(J.$$.fragment,s),se=h(s),G=l(s,"OL",{start:!0});var Gt=r(G);K=l(Gt,"LI",{});var ye=r(K);st=p(ye,"Reload it at a later time with "),gs=l(ye,"A",{href:!0});var Kt=r(gs);et=p(Kt,"Dataset.load_faiss_index()"),Kt.forEach(e),tt=p(ye,":"),ye.forEach(e),Gt.forEach(e),ee=h(s),m(V.$$.fragment,s),te=h(s),E=l(s,"H2",{class:!0});var $e=r(E);P=l($e,"A",{id:!0,class:!0,href:!0});var Vt=r(P);Is=l(Vt,"SPAN",{});var Xt=r(Is);m(X.$$.fragment,Xt),Xt.forEach(e),Vt.forEach(e),at=h($e),Rs=l($e,"SPAN",{});var Yt=r(Rs);nt=p(Yt,"ElasticSearch"),Yt.forEach(e),$e.forEach(e),ae=h(s),xs=l(s,"P",{});var Zt=r(xs);lt=p(Zt,"Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),Zt.forEach(e),ne=h(s),L=l(s,"P",{});var Ee=r(L);rt=p(Ee,"Start ElasticSearch on your machine, or see the "),Y=l(Ee,"A",{href:!0,rel:!0});var sa=r(Y);ot=p(sa,"ElasticSearch installation guide"),sa.forEach(e),it=p(Ee," if you don\u2019t already have it installed."),Ee.forEach(e),le=h(s),qs=l(s,"OL",{});var ea=r(qs);zs=l(ea,"LI",{});var ta=r(zs);pt=p(ta,"Load the dataset you want to index:"),ta.forEach(e),ea.forEach(e),re=h(s),m(Z.$$.fragment,s),oe=h(s),ss=l(s,"OL",{start:!0});var aa=r(ss);es=l(aa,"LI",{});var ke=r(es);dt=p(ke,"Build the index with "),js=l(ke,"A",{href:!0});var na=r(js);ct=p(na,"Dataset.add_elasticsearch_index()"),na.forEach(e),ht=p(ke,":"),ke.forEach(e),aa.forEach(e),ie=h(s),m(ts.$$.fragment,s),pe=h(s),as=l(s,"OL",{start:!0});var la=r(as);k=l(la,"LI",{});var Es=r(k);ut=p(Es,"Then you can query the "),Cs=l(Es,"CODE",{});var ra=r(Cs);mt=p(ra,"context"),ra.forEach(e),_t=p(Es," index with "),ws=l(Es,"A",{href:!0});var oa=r(ws);ft=p(oa,"Dataset.get_nearest_examples()"),oa.forEach(e),gt=p(Es,":"),Es.forEach(e),la.forEach(e),de=h(s),m(ns.$$.fragment,s),ce=h(s),ls=l(s,"OL",{start:!0});var ia=r(ls);rs=l(ia,"LI",{});var be=r(rs);xt=p(be,"If you want to reuse the index, define the "),Fs=l(be,"CODE",{});var pa=r(Fs);qt=p(pa,"es_index_name"),pa.forEach(e),jt=p(be," parameter when you build the index:"),be.forEach(e),ia.forEach(e),he=h(s),m(os.$$.fragment,s),ue=h(s),is=l(s,"OL",{start:!0});var da=r(is);ps=l(da,"LI",{});var De=r(ps);wt=p(De,"Reload it later with the index name when you call "),vs=l(De,"A",{href:!0});var ca=r(vs);vt=p(ca,"Dataset.load_elasticsearch_index()"),ca.forEach(e),yt=p(De,":"),De.forEach(e),da.forEach(e),me=h(s),m(ds.$$.fragment,s),_e=h(s),ys=l(s,"P",{});var ha=r(ys);$t=p(ha,"For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),ha.forEach(e),fe=h(s),m(cs.$$.fragment,s),this.h()},h(){d(j,"name","hf:doc:metadata"),d(j,"content",JSON.stringify(ja)),d(b,"id","search-index"),d(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(b,"href","#search-index"),d(w,"class","relative group"),d(I,"href","https://github.com/facebookresearch/faiss"),d(I,"rel","nofollow"),d(R,"href","https://www.elastic.co/elasticsearch/"),d(R,"rel","nofollow"),d(D,"id","faiss"),d(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(D,"href","#faiss"),d(y,"class","relative group"),d(C,"href","https://huggingface.co/transformers/model_doc/dpr.html"),d(C,"rel","nofollow"),d(O,"start","2"),d(ms,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.add_faiss_index"),d(Q,"start","3"),d(_s,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.get_nearest_examples"),d(M,"start","4"),d(fs,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.save_faiss_index"),d(U,"start","5"),d(gs,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.load_faiss_index"),d(G,"start","6"),d(P,"id","elasticsearch"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#elasticsearch"),d(E,"class","relative group"),d(Y,"href","https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html"),d(Y,"rel","nofollow"),d(js,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.add_elasticsearch_index"),d(ss,"start","2"),d(ws,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.get_nearest_examples"),d(as,"start","3"),d(ls,"start","4"),d(vs,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.load_elasticsearch_index"),d(is,"start","5")},m(s,a){t(document.head,j),o(s,Ts,a),o(s,w,a),t(w,b),t(b,ks),_(A,ks,null),t(w,Se),t(w,bs),t(bs,Pe),o(s,Qs,a),o(s,v,a),t(v,I),t(I,Le),t(v,Ae),t(v,R),t(R,Ie),t(v,Re),o(s,Ns,a),o(s,hs,a),t(hs,ze),o(s,Bs,a),o(s,y,a),t(y,D),t(D,Ds),_(z,Ds,null),t(y,Ce),t(y,Ss),t(Ss,Fe),o(s,Ms,a),o(s,S,a),t(S,Oe),t(S,C),t(C,Te),t(S,Qe),o(s,Hs,a),o(s,us,a),t(us,Ps),t(Ps,Ne),o(s,Us,a),_(F,s,a),o(s,Ws,a),o(s,O,a),t(O,Ls),t(Ls,Be),o(s,Js,a),_(T,s,a),o(s,Gs,a),o(s,Q,a),t(Q,N),t(N,Me),t(N,ms),t(ms,He),t(N,Ue),o(s,Ks,a),_(B,s,a),o(s,Vs,a),o(s,M,a),t(M,$),t($,We),t($,As),t(As,Je),t($,Ge),t($,_s),t(_s,Ke),t($,Ve),o(s,Xs,a),_(H,s,a),o(s,Ys,a),o(s,U,a),t(U,W),t(W,Xe),t(W,fs),t(fs,Ye),t(W,Ze),o(s,Zs,a),_(J,s,a),o(s,se,a),o(s,G,a),t(G,K),t(K,st),t(K,gs),t(gs,et),t(K,tt),o(s,ee,a),_(V,s,a),o(s,te,a),o(s,E,a),t(E,P),t(P,Is),_(X,Is,null),t(E,at),t(E,Rs),t(Rs,nt),o(s,ae,a),o(s,xs,a),t(xs,lt),o(s,ne,a),o(s,L,a),t(L,rt),t(L,Y),t(Y,ot),t(L,it),o(s,le,a),o(s,qs,a),t(qs,zs),t(zs,pt),o(s,re,a),_(Z,s,a),o(s,oe,a),o(s,ss,a),t(ss,es),t(es,dt),t(es,js),t(js,ct),t(es,ht),o(s,ie,a),_(ts,s,a),o(s,pe,a),o(s,as,a),t(as,k),t(k,ut),t(k,Cs),t(Cs,mt),t(k,_t),t(k,ws),t(ws,ft),t(k,gt),o(s,de,a),_(ns,s,a),o(s,ce,a),o(s,ls,a),t(ls,rs),t(rs,xt),t(rs,Fs),t(Fs,qt),t(rs,jt),o(s,he,a),_(os,s,a),o(s,ue,a),o(s,is,a),t(is,ps),t(ps,wt),t(ps,vs),t(vs,vt),t(ps,yt),o(s,me,a),_(ds,s,a),o(s,_e,a),o(s,ys,a),t(ys,$t),o(s,fe,a),_(cs,s,a),ge=!0},p:ga,i(s){ge||(f(A.$$.fragment,s),f(z.$$.fragment,s),f(F.$$.fragment,s),f(T.$$.fragment,s),f(B.$$.fragment,s),f(H.$$.fragment,s),f(J.$$.fragment,s),f(V.$$.fragment,s),f(X.$$.fragment,s),f(Z.$$.fragment,s),f(ts.$$.fragment,s),f(ns.$$.fragment,s),f(os.$$.fragment,s),f(ds.$$.fragment,s),f(cs.$$.fragment,s),ge=!0)},o(s){g(A.$$.fragment,s),g(z.$$.fragment,s),g(F.$$.fragment,s),g(T.$$.fragment,s),g(B.$$.fragment,s),g(H.$$.fragment,s),g(J.$$.fragment,s),g(V.$$.fragment,s),g(X.$$.fragment,s),g(Z.$$.fragment,s),g(ts.$$.fragment,s),g(ns.$$.fragment,s),g(os.$$.fragment,s),g(ds.$$.fragment,s),g(cs.$$.fragment,s),ge=!1},d(s){e(j),s&&e(Ts),s&&e(w),x(A),s&&e(Qs),s&&e(v),s&&e(Ns),s&&e(hs),s&&e(Bs),s&&e(y),x(z),s&&e(Ms),s&&e(S),s&&e(Hs),s&&e(us),s&&e(Us),x(F,s),s&&e(Ws),s&&e(O),s&&e(Js),x(T,s),s&&e(Gs),s&&e(Q),s&&e(Ks),x(B,s),s&&e(Vs),s&&e(M),s&&e(Xs),x(H,s),s&&e(Ys),s&&e(U),s&&e(Zs),x(J,s),s&&e(se),s&&e(G),s&&e(ee),x(V,s),s&&e(te),s&&e(E),x(X),s&&e(ae),s&&e(xs),s&&e(ne),s&&e(L),s&&e(le),s&&e(qs),s&&e(re),x(Z,s),s&&e(oe),s&&e(ss),s&&e(ie),x(ts,s),s&&e(pe),s&&e(as),s&&e(de),x(ns,s),s&&e(ce),s&&e(ls),s&&e(he),x(os,s),s&&e(ue),s&&e(is),s&&e(me),x(ds,s),s&&e(_e),s&&e(ys),s&&e(fe),x(cs,s)}}}const ja={local:"search-index",sections:[{local:"faiss",title:"FAISS"},{local:"elasticsearch",title:"ElasticSearch"}],title:"Search index"};function wa(kt){return xa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ea extends ua{constructor(j){super();ma(this,j,wa,qa,_a,{})}}export{Ea as default,ja as metadata};
