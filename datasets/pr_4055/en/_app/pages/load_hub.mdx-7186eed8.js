import{S as ct,i as ht,s as dt,e as r,k as h,w,t as n,M as ut,c as i,d as a,m as d,a as p,x as $,h as l,b as c,F as t,g as o,y as v,q as y,o as k,B as E,v as ft}from"../chunks/vendor-aa873a46.js";import{T as gt}from"../chunks/Tip-f7f252ab.js";import{I as Zs}from"../chunks/IconCopyLink-d0ca3106.js";import{C as ls}from"../chunks/CodeBlock-1f14baf3.js";function mt(ks){let u,C,f,_,S,g,G,D;return{c(){u=r("p"),C=n("Take a look at "),f=r("a"),_=n("DatasetInfo"),S=n(" for a full list of attributes you can use with "),g=r("code"),G=n("dataset_builder"),D=n("."),this.h()},l(P){u=i(P,"P",{});var m=p(u);C=l(m,"Take a look at "),f=i(m,"A",{href:!0});var x=p(f);_=l(x,"DatasetInfo"),x.forEach(a),S=l(m," for a full list of attributes you can use with "),g=i(m,"CODE",{});var rs=p(g);G=l(rs,"dataset_builder"),rs.forEach(a),D=l(m,"."),m.forEach(a),this.h()},h(){c(f,"href","/docs/datasets/pr_4055/en/package_reference/main_classes#datasets.DatasetInfo")},m(P,m){o(P,u,m),t(u,C),t(u,f),t(f,_),t(u,S),t(u,g),t(g,G),t(u,D)},d(P){P&&a(u)}}}function xt(ks){let u,C,f,_,S,g,G,D,P,m,x,rs,z,sa,aa,R,ta,ea,Es,A,H,us,Y,na,fs,la,Ss,I,ra,is,ia,pa,Ds,J,Ps,T,As,L,oa,ps,ca,ha,qs,K,Ns,q,M,gs,Q,da,ms,ua,Cs,j,fa,W,ga,ma,xs,xa,_a,_s,ja,ba,Hs,O,wa,js,$a,va,Is,X,Ts,os,ya,Ls,Z,Ms,cs,ka,Os,ss,Us,N,U,bs,as,Ea,ws,Sa,Bs,b,Da,$s,Pa,Aa,vs,qa,Na,ys,Ca,Ha,Fs,ts,Vs,B,Ia,hs,Ta,La,Gs,es,zs;return g=new Zs({}),Y=new Zs({}),J=new ls({props:{code:`from datasets import load_dataset_builder
dataset_builder = load_dataset_builder('imdb')
print(dataset_builder.cache_dir)
print(dataset_builder.info.features)
print(dataset_builder.info.splits)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset_builder
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_builder = load_dataset_builder(<span class="hljs-string">&#x27;imdb&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.cache_dir)
/Users/thomwolf/.cache/huggingface/datasets/imdb/plain_text/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>/fdc76b18d5506f14b0646729b8d371880ef1bc48a26d00835a7f3da44004b676
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.info.features)
{<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;neg&#x27;</span>, <span class="hljs-string">&#x27;pos&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset_builder.info.splits)
{<span class="hljs-string">&#x27;train&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;train&#x27;</span>, num_bytes=<span class="hljs-number">33432835</span>, num_examples=<span class="hljs-number">25000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>), <span class="hljs-string">&#x27;test&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;test&#x27;</span>, num_bytes=<span class="hljs-number">32650697</span>, num_examples=<span class="hljs-number">25000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>), <span class="hljs-string">&#x27;unsupervised&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;unsupervised&#x27;</span>, num_bytes=<span class="hljs-number">67106814</span>, num_examples=<span class="hljs-number">50000</span>, dataset_name=<span class="hljs-string">&#x27;imdb&#x27;</span>)}`}}),T=new gt({props:{$$slots:{default:[mt]},$$scope:{ctx:ks}}}),K=new ls({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)`}}),Q=new Zs({}),X=new ls({props:{code:`from datasets import get_dataset_config_names

configs = get_dataset_config_names("glue")
print(configs)
# ['cola', 'sst2', 'mrpc', 'qqp', 'stsb', 'mnli', 'mnli_mismatched', 'mnli_matched', 'qnli', 'rte', 'wnli', 'ax']`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_config_names

configs = get_dataset_config_names(<span class="hljs-string">&quot;glue&quot;</span>)
<span class="hljs-built_in">print</span>(configs)
<span class="hljs-comment"># [&#x27;cola&#x27;, &#x27;sst2&#x27;, &#x27;mrpc&#x27;, &#x27;qqp&#x27;, &#x27;stsb&#x27;, &#x27;mnli&#x27;, &#x27;mnli_mismatched&#x27;, &#x27;mnli_matched&#x27;, &#x27;qnli&#x27;, &#x27;rte&#x27;, &#x27;wnli&#x27;, &#x27;ax&#x27;]</span>`}}),Z=new ls({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>)
ValueError: Config name <span class="hljs-keyword">is</span> missing.
Please pick one among the available configs: [<span class="hljs-string">&#x27;cola&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, <span class="hljs-string">&#x27;qqp&#x27;</span>, <span class="hljs-string">&#x27;stsb&#x27;</span>, <span class="hljs-string">&#x27;mnli&#x27;</span>, <span class="hljs-string">&#x27;mnli_mismatched&#x27;</span>, <span class="hljs-string">&#x27;mnli_matched&#x27;</span>, <span class="hljs-string">&#x27;qnli&#x27;</span>, <span class="hljs-string">&#x27;rte&#x27;</span>, <span class="hljs-string">&#x27;wnli&#x27;</span>, <span class="hljs-string">&#x27;ax&#x27;</span>]
Example of usage:
        *load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;cola&#x27;</span>)*`}}),ss=new ls({props:{code:`dataset = load_dataset('glue', 'sst2')
print(dataset)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>)
Downloading <span class="hljs-keyword">and</span> preparing dataset glue/sst2 (download: <span class="hljs-number">7.09</span> MiB, generated: <span class="hljs-number">4.81</span> MiB, total: <span class="hljs-number">11.90</span> MiB) to /Users/thomwolf/.cache/huggingface/datasets/glue/sst2/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>...
Downloading: <span class="hljs-number">100</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| <span class="hljs-number">7.44</span>M/<span class="hljs-number">7.44</span>M [<span class="hljs-number">00</span>:01&lt;<span class="hljs-number">00</span>:<span class="hljs-number">00</span>, <span class="hljs-number">7.03</span>MB/s]
Dataset glue downloaded <span class="hljs-keyword">and</span> prepared to /Users/thomwolf/.cache/huggingface/datasets/glue/sst2/<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>. Subsequent calls will reuse this data.
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset)
{<span class="hljs-string">&#x27;train&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">67349</span>),
    <span class="hljs-string">&#x27;validation&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">872</span>),
    <span class="hljs-string">&#x27;test&#x27;</span>: Dataset(schema: {<span class="hljs-string">&#x27;sentence&#x27;</span>: <span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;int64&#x27;</span>, <span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-string">&#x27;int32&#x27;</span>}, num_rows: <span class="hljs-number">1821</span>)
}`}}),as=new Zs({}),ts=new ls({props:{code:`from datasets import load_dataset
datasets = load_dataset('glue', 'mrpc')
print(datasets)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>datasets = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(datasets)
{train: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">3668</span>
})
validation: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">408</span>
})
test: Dataset({
    features: [<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>],
    num_rows: <span class="hljs-number">1725</span>
})
}`}}),es=new ls({props:{code:`from datasets import get_dataset_split_names
get_dataset_split_names('sent_comp')
get_dataset_split_names('glue', 'cola')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> get_dataset_split_names
<span class="hljs-meta">&gt;&gt;&gt; </span>get_dataset_split_names(<span class="hljs-string">&#x27;sent_comp&#x27;</span>)
[<span class="hljs-string">&#x27;validation&#x27;</span>, <span class="hljs-string">&#x27;train&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>get_dataset_split_names(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;cola&#x27;</span>)
[<span class="hljs-string">&#x27;test&#x27;</span>, <span class="hljs-string">&#x27;train&#x27;</span>, <span class="hljs-string">&#x27;validation&#x27;</span>]`}}),{c(){u=r("meta"),C=h(),f=r("h1"),_=r("a"),S=r("span"),w(g.$$.fragment),G=h(),D=r("span"),P=n("Hugging Face Hub"),m=h(),x=r("p"),rs=n("Now that you are all setup, the first step is to load a dataset. The easiest way to load a dataset is from the "),z=r("a"),sa=n("Hugging Face Hub"),aa=n(". There are already over 900 datasets in over 100 languages on the Hub. Choose from a wide category of datasets to use for NLP tasks like question answering, summarization, machine translation, and language modeling. For a more in-depth look inside a dataset, use the live "),R=r("a"),ta=n("Datasets Viewer"),ea=n("."),Es=h(),A=r("h2"),H=r("a"),us=r("span"),w(Y.$$.fragment),na=h(),fs=r("span"),la=n("Load a dataset"),Ss=h(),I=r("p"),ra=n("Before you take the time to download a dataset, it is often helpful to quickly get all the relevant information about a dataset. The "),is=r("a"),ia=n("load_dataset_builder()"),pa=n(" method allows you to inspect the attributes of a dataset without downloading it."),Ds=h(),w(J.$$.fragment),Ps=h(),w(T.$$.fragment),As=h(),L=r("p"),oa=n("Once you are happy with the dataset you want, load it in a single line with "),ps=r("a"),ca=n("load_dataset()"),ha=n(":"),qs=h(),w(K.$$.fragment),Ns=h(),q=r("h2"),M=r("a"),gs=r("span"),w(Q.$$.fragment),da=h(),ms=r("span"),ua=n("Select a configuration"),Cs=h(),j=r("p"),fa=n("Some datasets, like the "),W=r("a"),ga=n("General Language Understanding Evaluation (GLUE)"),ma=n(" benchmark, are actually made up of several datasets. These sub-datasets are called "),xs=r("strong"),xa=n("configurations"),_a=n(", and you must explicitly select one when you load the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),_s=r("code"),ja=n("ValueError"),ba=n(" and remind you to select a configuration."),Hs=h(),O=r("p"),wa=n("Use "),js=r("code"),$a=n("get_dataset_config_names"),va=n(" to retrieve a list of all the possible configurations available to your dataset:"),Is=h(),w(X.$$.fragment),Ts=h(),os=r("p"),ya=n("\u274C Incorrect way to load a configuration:"),Ls=h(),w(Z.$$.fragment),Ms=h(),cs=r("p"),ka=n("\u2705 Correct way to load a configuration:"),Os=h(),w(ss.$$.fragment),Us=h(),N=r("h2"),U=r("a"),bs=r("span"),w(as.$$.fragment),Ea=h(),ws=r("span"),Sa=n("Select a split"),Bs=h(),b=r("p"),Da=n("A split is a specific subset of the dataset like "),$s=r("code"),Pa=n("train"),Aa=n(" and "),vs=r("code"),qa=n("test"),Na=n(". Make sure you select a split when you load a dataset. If you don\u2019t supply a "),ys=r("code"),Ca=n("split"),Ha=n(" argument, \u{1F917} Datasets will only return a dictionary containing the subsets of the dataset."),Fs=h(),w(ts.$$.fragment),Vs=h(),B=r("p"),Ia=n("You can list the split names for a dataset, or a specific configuration, with the "),hs=r("a"),Ta=n("get_dataset_split_names()"),La=n(" method:"),Gs=h(),w(es.$$.fragment),this.h()},l(s){const e=ut('[data-svelte="svelte-1phssyn"]',document.head);u=i(e,"META",{name:!0,content:!0}),e.forEach(a),C=d(s),f=i(s,"H1",{class:!0});var ns=p(f);_=i(ns,"A",{id:!0,class:!0,href:!0});var Ma=p(_);S=i(Ma,"SPAN",{});var Oa=p(S);$(g.$$.fragment,Oa),Oa.forEach(a),Ma.forEach(a),G=d(ns),D=i(ns,"SPAN",{});var Ua=p(D);P=l(Ua,"Hugging Face Hub"),Ua.forEach(a),ns.forEach(a),m=d(s),x=i(s,"P",{});var ds=p(x);rs=l(ds,"Now that you are all setup, the first step is to load a dataset. The easiest way to load a dataset is from the "),z=i(ds,"A",{href:!0,rel:!0});var Ba=p(z);sa=l(Ba,"Hugging Face Hub"),Ba.forEach(a),aa=l(ds,". There are already over 900 datasets in over 100 languages on the Hub. Choose from a wide category of datasets to use for NLP tasks like question answering, summarization, machine translation, and language modeling. For a more in-depth look inside a dataset, use the live "),R=i(ds,"A",{href:!0,rel:!0});var Fa=p(R);ta=l(Fa,"Datasets Viewer"),Fa.forEach(a),ea=l(ds,"."),ds.forEach(a),Es=d(s),A=i(s,"H2",{class:!0});var Rs=p(A);H=i(Rs,"A",{id:!0,class:!0,href:!0});var Va=p(H);us=i(Va,"SPAN",{});var Ga=p(us);$(Y.$$.fragment,Ga),Ga.forEach(a),Va.forEach(a),na=d(Rs),fs=i(Rs,"SPAN",{});var za=p(fs);la=l(za,"Load a dataset"),za.forEach(a),Rs.forEach(a),Ss=d(s),I=i(s,"P",{});var Ys=p(I);ra=l(Ys,"Before you take the time to download a dataset, it is often helpful to quickly get all the relevant information about a dataset. The "),is=i(Ys,"A",{href:!0});var Ra=p(is);ia=l(Ra,"load_dataset_builder()"),Ra.forEach(a),pa=l(Ys," method allows you to inspect the attributes of a dataset without downloading it."),Ys.forEach(a),Ds=d(s),$(J.$$.fragment,s),Ps=d(s),$(T.$$.fragment,s),As=d(s),L=i(s,"P",{});var Js=p(L);oa=l(Js,"Once you are happy with the dataset you want, load it in a single line with "),ps=i(Js,"A",{href:!0});var Ya=p(ps);ca=l(Ya,"load_dataset()"),Ya.forEach(a),ha=l(Js,":"),Js.forEach(a),qs=d(s),$(K.$$.fragment,s),Ns=d(s),q=i(s,"H2",{class:!0});var Ks=p(q);M=i(Ks,"A",{id:!0,class:!0,href:!0});var Ja=p(M);gs=i(Ja,"SPAN",{});var Ka=p(gs);$(Q.$$.fragment,Ka),Ka.forEach(a),Ja.forEach(a),da=d(Ks),ms=i(Ks,"SPAN",{});var Qa=p(ms);ua=l(Qa,"Select a configuration"),Qa.forEach(a),Ks.forEach(a),Cs=d(s),j=i(s,"P",{});var F=p(j);fa=l(F,"Some datasets, like the "),W=i(F,"A",{href:!0,rel:!0});var Wa=p(W);ga=l(Wa,"General Language Understanding Evaluation (GLUE)"),Wa.forEach(a),ma=l(F," benchmark, are actually made up of several datasets. These sub-datasets are called "),xs=i(F,"STRONG",{});var Xa=p(xs);xa=l(Xa,"configurations"),Xa.forEach(a),_a=l(F,", and you must explicitly select one when you load the dataset. If you don\u2019t provide a configuration name, \u{1F917} Datasets will raise a "),_s=i(F,"CODE",{});var Za=p(_s);ja=l(Za,"ValueError"),Za.forEach(a),ba=l(F," and remind you to select a configuration."),F.forEach(a),Hs=d(s),O=i(s,"P",{});var Qs=p(O);wa=l(Qs,"Use "),js=i(Qs,"CODE",{});var st=p(js);$a=l(st,"get_dataset_config_names"),st.forEach(a),va=l(Qs," to retrieve a list of all the possible configurations available to your dataset:"),Qs.forEach(a),Is=d(s),$(X.$$.fragment,s),Ts=d(s),os=i(s,"P",{});var at=p(os);ya=l(at,"\u274C Incorrect way to load a configuration:"),at.forEach(a),Ls=d(s),$(Z.$$.fragment,s),Ms=d(s),cs=i(s,"P",{});var tt=p(cs);ka=l(tt,"\u2705 Correct way to load a configuration:"),tt.forEach(a),Os=d(s),$(ss.$$.fragment,s),Us=d(s),N=i(s,"H2",{class:!0});var Ws=p(N);U=i(Ws,"A",{id:!0,class:!0,href:!0});var et=p(U);bs=i(et,"SPAN",{});var nt=p(bs);$(as.$$.fragment,nt),nt.forEach(a),et.forEach(a),Ea=d(Ws),ws=i(Ws,"SPAN",{});var lt=p(ws);Sa=l(lt,"Select a split"),lt.forEach(a),Ws.forEach(a),Bs=d(s),b=i(s,"P",{});var V=p(b);Da=l(V,"A split is a specific subset of the dataset like "),$s=i(V,"CODE",{});var rt=p($s);Pa=l(rt,"train"),rt.forEach(a),Aa=l(V," and "),vs=i(V,"CODE",{});var it=p(vs);qa=l(it,"test"),it.forEach(a),Na=l(V,". Make sure you select a split when you load a dataset. If you don\u2019t supply a "),ys=i(V,"CODE",{});var pt=p(ys);Ca=l(pt,"split"),pt.forEach(a),Ha=l(V," argument, \u{1F917} Datasets will only return a dictionary containing the subsets of the dataset."),V.forEach(a),Fs=d(s),$(ts.$$.fragment,s),Vs=d(s),B=i(s,"P",{});var Xs=p(B);Ia=l(Xs,"You can list the split names for a dataset, or a specific configuration, with the "),hs=i(Xs,"A",{href:!0});var ot=p(hs);Ta=l(ot,"get_dataset_split_names()"),ot.forEach(a),La=l(Xs," method:"),Xs.forEach(a),Gs=d(s),$(es.$$.fragment,s),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(_t)),c(_,"id","hugging-face-hub"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#hugging-face-hub"),c(f,"class","relative group"),c(z,"href","https://huggingface.co/datasets"),c(z,"rel","nofollow"),c(R,"href","https://huggingface.co/datasets/viewer/"),c(R,"rel","nofollow"),c(H,"id","load-a-dataset"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#load-a-dataset"),c(A,"class","relative group"),c(is,"href","/docs/datasets/pr_4055/en/package_reference/loading_methods#datasets.load_dataset_builder"),c(ps,"href","/docs/datasets/pr_4055/en/package_reference/loading_methods#datasets.load_dataset"),c(M,"id","select-a-configuration"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#select-a-configuration"),c(q,"class","relative group"),c(W,"href","https://huggingface.co/datasets/glue"),c(W,"rel","nofollow"),c(U,"id","select-a-split"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#select-a-split"),c(N,"class","relative group"),c(hs,"href","/docs/datasets/pr_4055/en/package_reference/loading_methods#datasets.get_dataset_split_names")},m(s,e){t(document.head,u),o(s,C,e),o(s,f,e),t(f,_),t(_,S),v(g,S,null),t(f,G),t(f,D),t(D,P),o(s,m,e),o(s,x,e),t(x,rs),t(x,z),t(z,sa),t(x,aa),t(x,R),t(R,ta),t(x,ea),o(s,Es,e),o(s,A,e),t(A,H),t(H,us),v(Y,us,null),t(A,na),t(A,fs),t(fs,la),o(s,Ss,e),o(s,I,e),t(I,ra),t(I,is),t(is,ia),t(I,pa),o(s,Ds,e),v(J,s,e),o(s,Ps,e),v(T,s,e),o(s,As,e),o(s,L,e),t(L,oa),t(L,ps),t(ps,ca),t(L,ha),o(s,qs,e),v(K,s,e),o(s,Ns,e),o(s,q,e),t(q,M),t(M,gs),v(Q,gs,null),t(q,da),t(q,ms),t(ms,ua),o(s,Cs,e),o(s,j,e),t(j,fa),t(j,W),t(W,ga),t(j,ma),t(j,xs),t(xs,xa),t(j,_a),t(j,_s),t(_s,ja),t(j,ba),o(s,Hs,e),o(s,O,e),t(O,wa),t(O,js),t(js,$a),t(O,va),o(s,Is,e),v(X,s,e),o(s,Ts,e),o(s,os,e),t(os,ya),o(s,Ls,e),v(Z,s,e),o(s,Ms,e),o(s,cs,e),t(cs,ka),o(s,Os,e),v(ss,s,e),o(s,Us,e),o(s,N,e),t(N,U),t(U,bs),v(as,bs,null),t(N,Ea),t(N,ws),t(ws,Sa),o(s,Bs,e),o(s,b,e),t(b,Da),t(b,$s),t($s,Pa),t(b,Aa),t(b,vs),t(vs,qa),t(b,Na),t(b,ys),t(ys,Ca),t(b,Ha),o(s,Fs,e),v(ts,s,e),o(s,Vs,e),o(s,B,e),t(B,Ia),t(B,hs),t(hs,Ta),t(B,La),o(s,Gs,e),v(es,s,e),zs=!0},p(s,[e]){const ns={};e&2&&(ns.$$scope={dirty:e,ctx:s}),T.$set(ns)},i(s){zs||(y(g.$$.fragment,s),y(Y.$$.fragment,s),y(J.$$.fragment,s),y(T.$$.fragment,s),y(K.$$.fragment,s),y(Q.$$.fragment,s),y(X.$$.fragment,s),y(Z.$$.fragment,s),y(ss.$$.fragment,s),y(as.$$.fragment,s),y(ts.$$.fragment,s),y(es.$$.fragment,s),zs=!0)},o(s){k(g.$$.fragment,s),k(Y.$$.fragment,s),k(J.$$.fragment,s),k(T.$$.fragment,s),k(K.$$.fragment,s),k(Q.$$.fragment,s),k(X.$$.fragment,s),k(Z.$$.fragment,s),k(ss.$$.fragment,s),k(as.$$.fragment,s),k(ts.$$.fragment,s),k(es.$$.fragment,s),zs=!1},d(s){a(u),s&&a(C),s&&a(f),E(g),s&&a(m),s&&a(x),s&&a(Es),s&&a(A),E(Y),s&&a(Ss),s&&a(I),s&&a(Ds),E(J,s),s&&a(Ps),E(T,s),s&&a(As),s&&a(L),s&&a(qs),E(K,s),s&&a(Ns),s&&a(q),E(Q),s&&a(Cs),s&&a(j),s&&a(Hs),s&&a(O),s&&a(Is),E(X,s),s&&a(Ts),s&&a(os),s&&a(Ls),E(Z,s),s&&a(Ms),s&&a(cs),s&&a(Os),E(ss,s),s&&a(Us),s&&a(N),E(as),s&&a(Bs),s&&a(b),s&&a(Fs),E(ts,s),s&&a(Vs),s&&a(B),s&&a(Gs),E(es,s)}}}const _t={local:"hugging-face-hub",sections:[{local:"load-a-dataset",title:"Load a dataset"},{local:"select-a-configuration",title:"Select a configuration"},{local:"select-a-split",title:"Select a split"}],title:"Hugging Face Hub"};function jt(ks){return ft(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yt extends ct{constructor(u){super();ht(this,u,jt,xt,dt,{})}}export{yt as default,_t as metadata};
