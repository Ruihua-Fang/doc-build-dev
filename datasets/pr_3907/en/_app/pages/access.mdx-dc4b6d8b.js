import{S as lt,i as rt,s as it,e as r,k as c,w as f,t as n,M as ot,c as i,d as a,m as h,a as o,x as m,h as l,b as u,F as e,g as p,y as g,L as pt,q as x,o as b,B as j}from"../chunks/vendor-e67aec41.js";import{I as _a}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as E}from"../chunks/CodeBlock-e2bcf023.js";function ct(va){let y,ns,_,w,xs,R,wa,G,ya,bs,$a,ka,Ss,P,Ea,ls,Aa,Da,Cs,L,qa,rs,Pa,La,Ts,B,zs,A,N,js,F,Na,_s,Ia,Os,I,Sa,is,Ca,Ta,Rs,M,Gs,d,za,vs,Oa,Ra,ws,Ga,Ba,ys,Fa,Ma,os,Ua,Wa,Bs,U,Fs,D,S,$s,W,Ya,ks,Ha,Ms,ps,Ja,Us,Y,Ws,cs,Va,Ys,H,Hs,C,Qa,hs,Ka,Xa,Js,J,Vs,V,Za,Es,se,Qs,Q,Ks,v,ae,us,ee,te,As,ne,le,Ds,re,ie,Xs,K,Zs,q,T,qs,X,oe,Ps,pe,sa,ds,ce,aa,Z,ea,fs,he,ta,ss,na,z,ue,ms,de,fe,la,$,as,me,Ls,ge,xe,be,es,je,Ns,_e,ve,we,ts,ye,Is,$e,ke,ra;return R=new _a({}),B=new E({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)`}}),F=new _a({}),M=new E({props:{code:"dataset.info",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.info
DatasetInfo(
    description=<span class="hljs-string">&#x27;GLUE, the General Language Understanding Evaluation benchmark\\n(https://gluebenchmark.com/) is a collection of resources for training,\\nevaluating, and analyzing natural language understanding systems.\\n\\n&#x27;</span>, 
    citation=<span class="hljs-string">&#x27;@inproceedings{dolan2005automatically,\\n  title={Automatically constructing a corpus of sentential paraphrases},\\n  author={Dolan, William B and Brockett, Chris},\\n  booktitle={Proceedings of the Third International Workshop on Paraphrasing (IWP2005)},\\n  year={2005}\\n}\\n@inproceedings{wang2019glue,\\n  title={{GLUE}: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding},\\n  author={Wang, Alex and Singh, Amanpreet and Michael, Julian and Hill, Felix and Levy, Omer and Bowman, Samuel R.},\\n  note={In the Proceedings of ICLR.},\\n  year={2019}\\n}\\n&#x27;</span>, homepage=<span class="hljs-string">&#x27;https://www.microsoft.com/en-us/download/details.aspx?id=52398&#x27;</span>, 
    license=<span class="hljs-string">&#x27;&#x27;</span>, 
    features={<span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, post_processed=<span class="hljs-literal">None</span>, supervised_keys=<span class="hljs-literal">None</span>, builder_name=<span class="hljs-string">&#x27;glue&#x27;</span>, config_name=<span class="hljs-string">&#x27;mrpc&#x27;</span>, version=<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>, splits={<span class="hljs-string">&#x27;train&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;train&#x27;</span>, num_bytes=<span class="hljs-number">943851</span>, num_examples=<span class="hljs-number">3668</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>), <span class="hljs-string">&#x27;validation&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;validation&#x27;</span>, num_bytes=<span class="hljs-number">105887</span>, num_examples=<span class="hljs-number">408</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>), <span class="hljs-string">&#x27;test&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;test&#x27;</span>, num_bytes=<span class="hljs-number">442418</span>, num_examples=<span class="hljs-number">1725</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>)}, 
    download_checksums={<span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/glue/data/mrpc_dev_ids.tsv&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">6222</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;971d7767d81b997fd9060ade0ec23c4fc31cbb226a55d1bd4a1bac474eb81dc7&#x27;</span>}, <span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/senteval/senteval_data/msr_paraphrase_train.txt&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">1047044</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;60a9b09084528f0673eedee2b69cb941920f0b8cd0eeccefc464a98768457f89&#x27;</span>}, <span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/senteval/senteval_data/msr_paraphrase_test.txt&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">441275</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;a04e271090879aaba6423d65b94950c089298587d9c084bf9cd7439bd785f784&#x27;</span>}}, 
    download_size=<span class="hljs-number">1494541</span>, 
    post_processing_size=<span class="hljs-literal">None</span>, 
    dataset_size=<span class="hljs-number">1492156</span>, 
    size_in_bytes=<span class="hljs-number">2986697</span>
)`}}),U=new E({props:{code:`dataset.split
dataset.description
dataset.citation
dataset.homepage`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.split
NamedSplit(<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.description
<span class="hljs-string">&#x27;GLUE, the General Language Understanding Evaluation benchmark\\n(https://gluebenchmark.com/) is a collection of resources for training,\\nevaluating, and analyzing natural language understanding systems.\\n\\n&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.citation
<span class="hljs-string">&#x27;@inproceedings{dolan2005automatically,\\n  title={Automatically constructing a corpus of sentential paraphrases},\\n  author={Dolan, William B and Brockett, Chris},\\n  booktitle={Proceedings of the Third International Workshop on Paraphrasing (IWP2005)},\\n  year={2005}\\n}\\n@inproceedings{wang2019glue,\\n  title={{GLUE}: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding},\\n  author={Wang, Alex and Singh, Amanpreet and Michael, Julian and Hill, Felix and Levy, Omer and Bowman, Samuel R.},\\n  note={In the Proceedings of ICLR.},\\n  year={2019}\\n}\\n\\nNote that each GLUE dataset has its own citation. Please see the source to see\\nthe correct citation for each contained dataset.&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.homepage
<span class="hljs-string">&#x27;https://www.microsoft.com/en-us/download/details.aspx?id=52398&#x27;</span>`}}),W=new _a({}),Y=new E({props:{code:"dataset[0]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-number">0</span>,
<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
<span class="hljs-string">&#x27;sentence1&#x27;</span>: <span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>,
<span class="hljs-string">&#x27;sentence2&#x27;</span>: <span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>}`}}),H=new E({props:{code:`dataset.shape
dataset.num_columns
dataset.num_rows
len(dataset)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.shape
(<span class="hljs-number">3668</span>, <span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_columns
<span class="hljs-number">4</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_rows
<span class="hljs-number">3668</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(dataset)
<span class="hljs-number">3668</span>`}}),J=new E({props:{code:"dataset.column_names",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.column_names
[<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>]`}}),Q=new E({props:{code:"dataset.features",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),K=new E({props:{code:`dataset.features['label'].num_classes
dataset.features['label'].names`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].num_classes
<span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].names
[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>]`}}),X=new _a({}),Z=new E({props:{code:`dataset[:3]
dataset[[1, 3, 5]]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[:<span class="hljs-number">3</span>]
{<span class="hljs-string">&#x27;idx&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: [<span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;They had published an advertisement on the Internet on June 10 , offering the cargo for sale , he added .&#x27;</span>],
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: [<span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa bought Dominick &#x27;s in 1995 for $ 693 million and sold it to Safeway for $ 1.8 billion in 1998 .&quot;</span>, <span class="hljs-string">&quot;On June 10 , the ship &#x27;s owners had published an advertisement on the Internet , offering the explosives for sale .&quot;</span>]
}
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>]]
{<span class="hljs-string">&#x27;idx&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>],
    <span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>], 
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: [<span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;Around 0335 GMT , Tab shares were up 19 cents , or 4.4 % , at A $ 4.56 , having earlier set a record high of A $ 4.57 .&#x27;</span>, <span class="hljs-string">&#x27;Revenue in the first quarter of the year dropped 15 percent from the same period a year earlier .&#x27;</span>],
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: [<span class="hljs-string">&quot;Yucaipa bought Dominick &#x27;s in 1995 for $ 693 million and sold it to Safeway for $ 1.8 billion in 1998 .&quot;</span>, <span class="hljs-string">&#x27;Tab shares jumped 20 cents , or 4.6 % , to set a record closing high at A $ 4.57 .&#x27;</span>, <span class="hljs-string">&quot;With the scandal hanging over Stewart &#x27;s company , revenue the first quarter of the year dropped 15 percent from the same period a year earlier .&quot;</span>]
}`}}),ss=new E({props:{code:"dataset['sentence1'][:3]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&#x27;sentence1&#x27;</span>][:<span class="hljs-number">3</span>]
[<span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;They had published an advertisement on the Internet on June 10 , offering the cargo for sale , he added .&#x27;</span>]`}}),{c(){y=r("meta"),ns=c(),_=r("h1"),w=r("a"),xs=r("span"),f(R.$$.fragment),wa=c(),G=r("span"),ya=n("The "),bs=r("code"),$a=n("Dataset"),ka=n(" object"),Ss=c(),P=r("p"),Ea=n("In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ls=r("a"),Aa=n("Dataset"),Da=n(" object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),Cs=c(),L=r("p"),qa=n("A "),rs=r("a"),Pa=n("Dataset"),La=n(" object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),Ts=c(),f(B.$$.fragment),zs=c(),A=r("h2"),N=r("a"),js=r("span"),f(F.$$.fragment),Na=c(),_s=r("span"),Ia=n("Metadata"),Os=c(),I=r("p"),Sa=n("The "),is=r("a"),Ca=n("Dataset"),Ta=n(" object contains a lot of useful information about your dataset. For example, call [\u2018dataset.info\u2019] to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),Rs=c(),f(M.$$.fragment),Gs=c(),d=r("p"),za=n("You can request specific attributes of the dataset, like "),vs=r("code"),Oa=n("description"),Ra=n(", "),ws=r("code"),Ga=n("citation"),Ba=n(", and "),ys=r("code"),Fa=n("homepage"),Ma=n(", by calling them directly. Take a look at "),os=r("a"),Ua=n("datasets.DatasetInfo"),Wa=n(" for a complete list of attributes you can return."),Bs=c(),f(U.$$.fragment),Fs=c(),D=r("h2"),S=r("a"),$s=r("span"),f(W.$$.fragment),Ya=c(),ks=r("span"),Ha=n("Features and columns"),Ms=c(),ps=r("p"),Ja=n("A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Us=c(),f(Y.$$.fragment),Ws=c(),cs=r("p"),Va=n("Return the number of rows and columns with the following standard attributes:"),Ys=c(),f(H.$$.fragment),Hs=c(),C=r("p"),Qa=n("List the columns names with "),hs=r("a"),Ka=n("datasets.Dataset.column_names()"),Xa=n(":"),Js=c(),f(J.$$.fragment),Vs=c(),V=r("p"),Za=n("Get detailed information about the columns with "),Es=r("code"),se=n("datasets.Dataset.features()"),Qs=c(),f(Q.$$.fragment),Ks=c(),v=r("p"),ae=n("Return even more specific information about a feature like "),us=r("a"),ee=n("datasets.ClassLabel"),te=n(", by calling its parameters "),As=r("code"),ne=n("num_classes"),le=n(" and "),Ds=r("code"),re=n("names"),ie=n(":"),Xs=c(),f(K.$$.fragment),Zs=c(),q=r("h2"),T=r("a"),qs=r("span"),f(X.$$.fragment),oe=c(),Ps=r("span"),pe=n("Rows, slices, batches, and columns"),sa=c(),ds=r("p"),ce=n("Get several rows of your dataset at a time with slice notation or a list of indices:"),aa=c(),f(Z.$$.fragment),ea=c(),fs=r("p"),he=n("Querying by the column name will return its values. For example, if you want to only return the first three examples:"),ta=c(),f(ss.$$.fragment),na=c(),z=r("p"),ue=n("Depending on how a "),ms=r("a"),de=n("Dataset"),fe=n(" object is queried, the format returned will be different:"),la=c(),$=r("ul"),as=r("li"),me=n("A single row like "),Ls=r("code"),ge=n("dataset[0]"),xe=n(" returns a Python dictionary of values."),be=c(),es=r("li"),je=n("A batch like "),Ns=r("code"),_e=n("dataset[5:10]"),ve=n(" returns a Python dictionary of lists of values."),we=c(),ts=r("li"),ye=n("A column like "),Is=r("code"),$e=n("dataset['sentence1']"),ke=n(" returns a Python list of values."),this.h()},l(s){const t=ot('[data-svelte="svelte-1phssyn"]',document.head);y=i(t,"META",{name:!0,content:!0}),t.forEach(a),ns=h(s),_=i(s,"H1",{class:!0});var ia=o(_);w=i(ia,"A",{id:!0,class:!0,href:!0});var Ae=o(w);xs=i(Ae,"SPAN",{});var De=o(xs);m(R.$$.fragment,De),De.forEach(a),Ae.forEach(a),wa=h(ia),G=i(ia,"SPAN",{});var oa=o(G);ya=l(oa,"The "),bs=i(oa,"CODE",{});var qe=o(bs);$a=l(qe,"Dataset"),qe.forEach(a),ka=l(oa," object"),oa.forEach(a),ia.forEach(a),Ss=h(s),P=i(s,"P",{});var pa=o(P);Ea=l(pa,"In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ls=i(pa,"A",{href:!0});var Pe=o(ls);Aa=l(Pe,"Dataset"),Pe.forEach(a),Da=l(pa," object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),pa.forEach(a),Cs=h(s),L=i(s,"P",{});var ca=o(L);qa=l(ca,"A "),rs=i(ca,"A",{href:!0});var Le=o(rs);Pa=l(Le,"Dataset"),Le.forEach(a),La=l(ca," object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),ca.forEach(a),Ts=h(s),m(B.$$.fragment,s),zs=h(s),A=i(s,"H2",{class:!0});var ha=o(A);N=i(ha,"A",{id:!0,class:!0,href:!0});var Ne=o(N);js=i(Ne,"SPAN",{});var Ie=o(js);m(F.$$.fragment,Ie),Ie.forEach(a),Ne.forEach(a),Na=h(ha),_s=i(ha,"SPAN",{});var Se=o(_s);Ia=l(Se,"Metadata"),Se.forEach(a),ha.forEach(a),Os=h(s),I=i(s,"P",{});var ua=o(I);Sa=l(ua,"The "),is=i(ua,"A",{href:!0});var Ce=o(is);Ca=l(Ce,"Dataset"),Ce.forEach(a),Ta=l(ua," object contains a lot of useful information about your dataset. For example, call [\u2018dataset.info\u2019] to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),ua.forEach(a),Rs=h(s),m(M.$$.fragment,s),Gs=h(s),d=i(s,"P",{});var k=o(d);za=l(k,"You can request specific attributes of the dataset, like "),vs=i(k,"CODE",{});var Te=o(vs);Oa=l(Te,"description"),Te.forEach(a),Ra=l(k,", "),ws=i(k,"CODE",{});var ze=o(ws);Ga=l(ze,"citation"),ze.forEach(a),Ba=l(k,", and "),ys=i(k,"CODE",{});var Oe=o(ys);Fa=l(Oe,"homepage"),Oe.forEach(a),Ma=l(k,", by calling them directly. Take a look at "),os=i(k,"A",{href:!0});var Re=o(os);Ua=l(Re,"datasets.DatasetInfo"),Re.forEach(a),Wa=l(k," for a complete list of attributes you can return."),k.forEach(a),Bs=h(s),m(U.$$.fragment,s),Fs=h(s),D=i(s,"H2",{class:!0});var da=o(D);S=i(da,"A",{id:!0,class:!0,href:!0});var Ge=o(S);$s=i(Ge,"SPAN",{});var Be=o($s);m(W.$$.fragment,Be),Be.forEach(a),Ge.forEach(a),Ya=h(da),ks=i(da,"SPAN",{});var Fe=o(ks);Ha=l(Fe,"Features and columns"),Fe.forEach(a),da.forEach(a),Ms=h(s),ps=i(s,"P",{});var Me=o(ps);Ja=l(Me,"A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Me.forEach(a),Us=h(s),m(Y.$$.fragment,s),Ws=h(s),cs=i(s,"P",{});var Ue=o(cs);Va=l(Ue,"Return the number of rows and columns with the following standard attributes:"),Ue.forEach(a),Ys=h(s),m(H.$$.fragment,s),Hs=h(s),C=i(s,"P",{});var fa=o(C);Qa=l(fa,"List the columns names with "),hs=i(fa,"A",{href:!0});var We=o(hs);Ka=l(We,"datasets.Dataset.column_names()"),We.forEach(a),Xa=l(fa,":"),fa.forEach(a),Js=h(s),m(J.$$.fragment,s),Vs=h(s),V=i(s,"P",{});var Ee=o(V);Za=l(Ee,"Get detailed information about the columns with "),Es=i(Ee,"CODE",{});var Ye=o(Es);se=l(Ye,"datasets.Dataset.features()"),Ye.forEach(a),Ee.forEach(a),Qs=h(s),m(Q.$$.fragment,s),Ks=h(s),v=i(s,"P",{});var O=o(v);ae=l(O,"Return even more specific information about a feature like "),us=i(O,"A",{href:!0});var He=o(us);ee=l(He,"datasets.ClassLabel"),He.forEach(a),te=l(O,", by calling its parameters "),As=i(O,"CODE",{});var Je=o(As);ne=l(Je,"num_classes"),Je.forEach(a),le=l(O," and "),Ds=i(O,"CODE",{});var Ve=o(Ds);re=l(Ve,"names"),Ve.forEach(a),ie=l(O,":"),O.forEach(a),Xs=h(s),m(K.$$.fragment,s),Zs=h(s),q=i(s,"H2",{class:!0});var ma=o(q);T=i(ma,"A",{id:!0,class:!0,href:!0});var Qe=o(T);qs=i(Qe,"SPAN",{});var Ke=o(qs);m(X.$$.fragment,Ke),Ke.forEach(a),Qe.forEach(a),oe=h(ma),Ps=i(ma,"SPAN",{});var Xe=o(Ps);pe=l(Xe,"Rows, slices, batches, and columns"),Xe.forEach(a),ma.forEach(a),sa=h(s),ds=i(s,"P",{});var Ze=o(ds);ce=l(Ze,"Get several rows of your dataset at a time with slice notation or a list of indices:"),Ze.forEach(a),aa=h(s),m(Z.$$.fragment,s),ea=h(s),fs=i(s,"P",{});var st=o(fs);he=l(st,"Querying by the column name will return its values. For example, if you want to only return the first three examples:"),st.forEach(a),ta=h(s),m(ss.$$.fragment,s),na=h(s),z=i(s,"P",{});var ga=o(z);ue=l(ga,"Depending on how a "),ms=i(ga,"A",{href:!0});var at=o(ms);de=l(at,"Dataset"),at.forEach(a),fe=l(ga," object is queried, the format returned will be different:"),ga.forEach(a),la=h(s),$=i(s,"UL",{});var gs=o($);as=i(gs,"LI",{});var xa=o(as);me=l(xa,"A single row like "),Ls=i(xa,"CODE",{});var et=o(Ls);ge=l(et,"dataset[0]"),et.forEach(a),xe=l(xa," returns a Python dictionary of values."),xa.forEach(a),be=h(gs),es=i(gs,"LI",{});var ba=o(es);je=l(ba,"A batch like "),Ns=i(ba,"CODE",{});var tt=o(Ns);_e=l(tt,"dataset[5:10]"),tt.forEach(a),ve=l(ba," returns a Python dictionary of lists of values."),ba.forEach(a),we=h(gs),ts=i(gs,"LI",{});var ja=o(ts);ye=l(ja,"A column like "),Is=i(ja,"CODE",{});var nt=o(Is);$e=l(nt,"dataset['sentence1']"),nt.forEach(a),ke=l(ja," returns a Python list of values."),ja.forEach(a),gs.forEach(a),this.h()},h(){u(y,"name","hf:doc:metadata"),u(y,"content",JSON.stringify(ht)),u(w,"id","the-dataset-object"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#the-dataset-object"),u(_,"class","relative group"),u(ls,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.Dataset"),u(rs,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.Dataset"),u(N,"id","metadata"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#metadata"),u(A,"class","relative group"),u(is,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.Dataset"),u(os,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.DatasetInfo"),u(S,"id","features-and-columns"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#features-and-columns"),u(D,"class","relative group"),u(hs,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.Dataset.column_names"),u(us,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.ClassLabel"),u(T,"id","rows-slices-batches-and-columns"),u(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(T,"href","#rows-slices-batches-and-columns"),u(q,"class","relative group"),u(ms,"href","/docs/datasets/pr_3907/en/package_reference/main_classes#datasets.Dataset")},m(s,t){e(document.head,y),p(s,ns,t),p(s,_,t),e(_,w),e(w,xs),g(R,xs,null),e(_,wa),e(_,G),e(G,ya),e(G,bs),e(bs,$a),e(G,ka),p(s,Ss,t),p(s,P,t),e(P,Ea),e(P,ls),e(ls,Aa),e(P,Da),p(s,Cs,t),p(s,L,t),e(L,qa),e(L,rs),e(rs,Pa),e(L,La),p(s,Ts,t),g(B,s,t),p(s,zs,t),p(s,A,t),e(A,N),e(N,js),g(F,js,null),e(A,Na),e(A,_s),e(_s,Ia),p(s,Os,t),p(s,I,t),e(I,Sa),e(I,is),e(is,Ca),e(I,Ta),p(s,Rs,t),g(M,s,t),p(s,Gs,t),p(s,d,t),e(d,za),e(d,vs),e(vs,Oa),e(d,Ra),e(d,ws),e(ws,Ga),e(d,Ba),e(d,ys),e(ys,Fa),e(d,Ma),e(d,os),e(os,Ua),e(d,Wa),p(s,Bs,t),g(U,s,t),p(s,Fs,t),p(s,D,t),e(D,S),e(S,$s),g(W,$s,null),e(D,Ya),e(D,ks),e(ks,Ha),p(s,Ms,t),p(s,ps,t),e(ps,Ja),p(s,Us,t),g(Y,s,t),p(s,Ws,t),p(s,cs,t),e(cs,Va),p(s,Ys,t),g(H,s,t),p(s,Hs,t),p(s,C,t),e(C,Qa),e(C,hs),e(hs,Ka),e(C,Xa),p(s,Js,t),g(J,s,t),p(s,Vs,t),p(s,V,t),e(V,Za),e(V,Es),e(Es,se),p(s,Qs,t),g(Q,s,t),p(s,Ks,t),p(s,v,t),e(v,ae),e(v,us),e(us,ee),e(v,te),e(v,As),e(As,ne),e(v,le),e(v,Ds),e(Ds,re),e(v,ie),p(s,Xs,t),g(K,s,t),p(s,Zs,t),p(s,q,t),e(q,T),e(T,qs),g(X,qs,null),e(q,oe),e(q,Ps),e(Ps,pe),p(s,sa,t),p(s,ds,t),e(ds,ce),p(s,aa,t),g(Z,s,t),p(s,ea,t),p(s,fs,t),e(fs,he),p(s,ta,t),g(ss,s,t),p(s,na,t),p(s,z,t),e(z,ue),e(z,ms),e(ms,de),e(z,fe),p(s,la,t),p(s,$,t),e($,as),e(as,me),e(as,Ls),e(Ls,ge),e(as,xe),e($,be),e($,es),e(es,je),e(es,Ns),e(Ns,_e),e(es,ve),e($,we),e($,ts),e(ts,ye),e(ts,Is),e(Is,$e),e(ts,ke),ra=!0},p:pt,i(s){ra||(x(R.$$.fragment,s),x(B.$$.fragment,s),x(F.$$.fragment,s),x(M.$$.fragment,s),x(U.$$.fragment,s),x(W.$$.fragment,s),x(Y.$$.fragment,s),x(H.$$.fragment,s),x(J.$$.fragment,s),x(Q.$$.fragment,s),x(K.$$.fragment,s),x(X.$$.fragment,s),x(Z.$$.fragment,s),x(ss.$$.fragment,s),ra=!0)},o(s){b(R.$$.fragment,s),b(B.$$.fragment,s),b(F.$$.fragment,s),b(M.$$.fragment,s),b(U.$$.fragment,s),b(W.$$.fragment,s),b(Y.$$.fragment,s),b(H.$$.fragment,s),b(J.$$.fragment,s),b(Q.$$.fragment,s),b(K.$$.fragment,s),b(X.$$.fragment,s),b(Z.$$.fragment,s),b(ss.$$.fragment,s),ra=!1},d(s){a(y),s&&a(ns),s&&a(_),j(R),s&&a(Ss),s&&a(P),s&&a(Cs),s&&a(L),s&&a(Ts),j(B,s),s&&a(zs),s&&a(A),j(F),s&&a(Os),s&&a(I),s&&a(Rs),j(M,s),s&&a(Gs),s&&a(d),s&&a(Bs),j(U,s),s&&a(Fs),s&&a(D),j(W),s&&a(Ms),s&&a(ps),s&&a(Us),j(Y,s),s&&a(Ws),s&&a(cs),s&&a(Ys),j(H,s),s&&a(Hs),s&&a(C),s&&a(Js),j(J,s),s&&a(Vs),s&&a(V),s&&a(Qs),j(Q,s),s&&a(Ks),s&&a(v),s&&a(Xs),j(K,s),s&&a(Zs),s&&a(q),j(X),s&&a(sa),s&&a(ds),s&&a(aa),j(Z,s),s&&a(ea),s&&a(fs),s&&a(ta),j(ss,s),s&&a(na),s&&a(z),s&&a(la),s&&a($)}}}const ht={local:"the-dataset-object",sections:[{local:"metadata",title:"Metadata"},{local:"features-and-columns",title:"Features and columns"},{local:"rows-slices-batches-and-columns",title:"Rows, slices, batches, and columns"}],title:"The `Dataset` object"};function ut(va,y,ns){let{fw:_}=y;return va.$$set=w=>{"fw"in w&&ns(0,_=w.fw)},[_]}class gt extends lt{constructor(y){super();rt(this,y,ut,ct,it,{fw:0})}}export{gt as default,ht as metadata};
