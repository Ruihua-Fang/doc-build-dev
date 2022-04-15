import{S as Hs,i as zs,s as Ds,e as n,k as h,w,t as r,M as Ks,c as o,d as a,m as d,a as s,x as $,h as l,b as p,F as t,g as f,y as _,q as P,o as b,B as A,v as Fs,L as Uo}from"../chunks/vendor-7c454903.js";import{I as X}from"../chunks/IconCopyLink-5457534b.js";import{C as jt,I as Js,M as So}from"../chunks/InferenceApi-041dc1b2.js";function Ws(k){let c,m;return c=new jt({props:{code:`import json
import requests
API_URL = "https://api-inference.huggingface.co/models/gpt2"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
def query(payload):
    data = json.dumps(payload)
    response = requests.request("POST", API_URL, headers=headers, data=data)
    return json.loads(response.content.decode("utf-8"))
data = query("Can you please let us know more details about your ")`,highlighted:`<span class="hljs-keyword">import</span> json
<span class="hljs-keyword">import</span> requests
API_URL = <span class="hljs-string">&quot;https://api-inference.huggingface.co/models/gpt2&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
<span class="hljs-keyword">def</span> <span class="hljs-title function_">query</span>(<span class="hljs-params">payload</span>):
    data = json.dumps(payload)
    response = requests.request(<span class="hljs-string">&quot;POST&quot;</span>, API_URL, headers=headers, data=data)
    <span class="hljs-keyword">return</span> json.loads(response.content.decode(<span class="hljs-string">&quot;utf-8&quot;</span>))
data = query(<span class="hljs-string">&quot;Can you please let us know more details about your &quot;</span>)`}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p:Uo,i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function Qs(k){let c,m;return c=new So({props:{$$slots:{default:[Ws]},$$scope:{ctx:k}}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p(i,g){const E={};g&2&&(E.$$scope={dirty:g,ctx:i}),c.$set(E)},i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function Ys(k){let c,m;return c=new jt({props:{code:`import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
            headers: { Authorization: \`Bearer \${API_TOKEN}\` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
query("Can you please let us know more details about your ").then((response) => {
    console.log(JSON.stringify(response));
});
// [{"generated_text":"Can you please let us know more details about your ids as a subscriber or other related project? Be sure to update your username and password or it will be stolen via email. Our information is only accessible through our website, and the payment support services"}]`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">query</span>(<span class="hljs-params">data</span>) {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(
        <span class="hljs-string">&quot;https://api-inference.huggingface.co/models/gpt2&quot;</span>,
        {
            <span class="hljs-attr">headers</span>: { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span> },
            <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;POST&quot;</span>,
            <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data),
        }
    );
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> response.<span class="hljs-title function_">json</span>();
    <span class="hljs-keyword">return</span> result;
}
<span class="hljs-title function_">query</span>(<span class="hljs-string">&quot;Can you please let us know more details about your &quot;</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});
<span class="hljs-comment">// [{&quot;generated_text&quot;:&quot;Can you please let us know more details about your ids as a subscriber or other related project? Be sure to update your username and password or it will be stolen via email. Our information is only accessible through our website, and the payment support services&quot;}]</span>`}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p:Uo,i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function Vs(k){let c,m;return c=new So({props:{$$slots:{default:[Ys]},$$scope:{ctx:k}}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p(i,g){const E={};g&2&&(E.$$scope={dirty:g,ctx:i}),c.$set(E)},i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function Zs(k){let c,m;return c=new jt({props:{code:`curl https://api-inference.huggingface.co/models/gpt2 \\
        -X POST \\
        -d '"Can you please let us know more details about your "' \\
        -H "Authorization: Bearer \${API_TOKEN}"
# [{"generated_text":"Can you please let us know more details about your ids as a subscriber or other related project? Be sure to update your username and password or it will be stolen via email. Our information is only accessible through our website, and the payment support services"}]`,highlighted:`curl https://api-inference.huggingface.co/models/gpt2 \\
        -X POST \\
        -d <span class="hljs-string">&#x27;&quot;Can you please let us know more details about your &quot;&#x27;</span> \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># [{&quot;generated_text&quot;:&quot;Can you please let us know more details about your ids as a subscriber or other related project? Be sure to update your username and password or it will be stolen via email. Our information is only accessible through our website, and the payment support services&quot;}]</span>`}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p:Uo,i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function er(k){let c,m;return c=new So({props:{$$slots:{default:[Zs]},$$scope:{ctx:k}}}),{c(){w(c.$$.fragment)},l(i){$(c.$$.fragment,i)},m(i,g){_(c,i,g),m=!0},p(i,g){const E={};g&2&&(E.$$scope={dirty:g,ctx:i}),c.$set(E)},i(i){m||(P(c.$$.fragment,i),m=!0)},o(i){b(c.$$.fragment,i),m=!1},d(i){A(c,i)}}}function tr(k){let c,m,i,g,E,le,Ia,Qe,ja,Tt,Ge,Ta,xt,U,M,Ye,ie,xa,Ve,Ua,Ut,v,ue,Sa,Ze,Na,Ga,Oa,Oe,La,et,Ca,Ra,tt,Xa,Ma,pe,Ba,at,Ha,za,Da,I,Ka,nt,Fa,Ja,ot,Wa,Qa,ce,Ya,Va,Za,fe,en,st,tn,an,nn,he,on,rt,sn,rn,ln,Le,lt,un,pn,cn,it,fn,St,S,B,ut,de,hn,pt,dn,Nt,Ce,mn,Gt,H,z,me,gn,vn,ge,yn,wn,$n,ve,_n,ye,Pn,bn,Ot,q,An,ct,En,kn,ft,qn,In,ht,jn,Tn,Lt,Re,xn,Ct,N,D,dt,we,Un,mt,Sn,Rt,j,Nn,$e,Gn,On,_e,Ln,Cn,Xt,Pe,Mt,K,Rn,be,Xn,Mn,Bt,F,Ht,G,J,gt,Ae,Bn,vt,Hn,zt,T,zn,Ee,Dn,Kn,yt,Fn,Jn,Dt,O,W,wt,ke,Wn,$t,Qn,Kt,Q,Yn,_t,Vn,Zn,Ft,Xe,eo,Jt,Y,to,Me,ao,no,Wt,L,V,Pt,qe,oo,bt,so,Qt,Z,ro,Ie,lo,io,Yt,je,Vt,Be,uo,Zt,He,po,ea,ee,co,ze,fo,ho,ta,C,te,At,Te,mo,Et,go,aa,ae,vo,De,yo,wo,na,R,ne,kt,xe,$o,qt,_o,oa,oe,Po,Ue,bo,Ao,sa,x,Eo,Se,ko,qo,Ke,Io,jo,ra;return le=new X({}),ie=new X({}),de=new X({}),we=new X({}),Pe=new jt({props:{code:"ENDPOINT = https://api-inference.huggingface.co/models/<MODEL_ID>",highlighted:'ENDPOINT = https:<span class="hljs-regexp">//</span>api-inference.huggingface.co<span class="hljs-regexp">/models/</span>&lt;MODEL_ID&gt;'}}),F=new Js({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[er],js:[Vs],python:[Qs]},$$scope:{ctx:k}}}),Ae=new X({}),ke=new X({}),qe=new X({}),je=new jt({props:{code:'{"inputs": "...REGULAR INPUT...", "options": {"use_gpu": true}}',highlighted:'<span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;inputs&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;...REGULAR INPUT...&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;options&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;use_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">}</span>'}}),Te=new X({}),xe=new X({}),{c(){c=n("meta"),m=h(),i=n("h1"),g=n("a"),E=n("span"),w(le.$$.fragment),Ia=h(),Qe=n("span"),ja=r("Overview"),Tt=h(),Ge=n("p"),Ta=r("Let\u2019s have a quick look at the \u{1F917} Accelerated Inference API."),xt=h(),U=n("h2"),M=n("a"),Ye=n("span"),w(ie.$$.fragment),xa=h(),Ve=n("span"),Ua=r("Main features:"),Ut=h(),v=n("ul"),ue=n("li"),Sa=r("Leverage "),Ze=n("strong"),Na=r("10,000+ Transformer models"),Ga=r(" (T5, Blenderbot, Bart, GPT-2, Pegasus...)"),Oa=h(),Oe=n("li"),La=r("Upload, manage and serve your "),et=n("strong"),Ca=r("own models privately"),Ra=h(),tt=n("li"),Xa=r("Run Classification, NER, Conversational, Summarization, Translation, Question-Answering, Embeddings Extraction tasks"),Ma=h(),pe=n("li"),Ba=r("Get up to "),at=n("strong"),Ha=r("10x inference speedup"),za=r(" to reduce user latency"),Da=h(),I=n("li"),Ka=r("Accelerated inference on "),nt=n("strong"),Fa=r("CPU"),Ja=r(" and "),ot=n("strong"),Wa=r("GPU"),Qa=r(" (GPU requires a "),ce=n("a"),Ya=r("Startup or Enterprise plan"),Va=r(")"),Za=h(),fe=n("li"),en=r("Run "),st=n("strong"),tn=r("large models"),an=r(" that are challenging to deploy in production"),nn=h(),he=n("li"),on=r("Scale to 1,000 requests per second with "),rt=n("strong"),sn=r("automatic scaling"),rn=r(" built-in"),ln=h(),Le=n("li"),lt=n("strong"),un=r("Ship new NLP features faster"),pn=r(" as new models become available"),cn=h(),it=n("li"),fn=r("Build your business on a platform powered by the reference open source project in NLP"),St=h(),S=n("h2"),B=n("a"),ut=n("span"),w(de.$$.fragment),hn=h(),pt=n("span"),dn=r("Get your API Token"),Nt=h(),Ce=n("p"),mn=r("To get started you need to:"),Gt=h(),H=n("ul"),z=n("li"),me=n("a"),gn=r("Register"),vn=r(" or "),ge=n("a"),yn=r("Login"),wn=r("."),$n=h(),ve=n("li"),_n=r("Get your API token "),ye=n("a"),Pn=r("in your Hugging Face profile"),bn=r("."),Ot=h(),q=n("p"),An=r("You should see a token "),ct=n("code"),En=r("hf_xxxxx"),kn=r(" (old tokens are "),ft=n("code"),qn=r("api_XXXXXXXX"),In=r(" or "),ht=n("code"),jn=r("api_org_XXXXXXX"),Tn=r(")."),Lt=h(),Re=n("p"),xn=r(`If you do not submit your API token when sending requests to the API,
you will not be able to run inference on your private models, or
benefits from the model pinning and acceleration features of the API.`),Ct=h(),N=n("h2"),D=n("a"),dt=n("span"),w(we.$$.fragment),Un=h(),mt=n("span"),Sn=r("Running Inference with API Requests"),Rt=h(),j=n("p"),Nn=r(`The first step is to choose which model you are going to run. Go to the
`),$e=n("a"),Gn=r("Model Hub"),On=r(` and select the model you want
to use. If you are unsure where to start, make sure to check our
`),_e=n("a"),Ln=r(`recommended models for each NLP
task`),Cn=r(`
available.`),Xt=h(),w(Pe.$$.fragment),Mt=h(),K=n("p"),Rn=r("Let\u2019s use "),be=n("a"),Xn=r("gpt2"),Mn=r(` as an example. To run
inference, simply use this code:`),Bt=h(),w(F.$$.fragment),Ht=h(),G=n("h2"),J=n("a"),gt=n("span"),w(Ae.$$.fragment),Bn=h(),vt=n("span"),Hn=r("API Options and Parameters"),zt=h(),T=n("p"),zn=r(`Depending on the task (aka pipeline) the model is configured for, the
request will accept specific parameters. When sending requests to run
any model, API options allow you to specify the caching and model
loading behavior, and inference on GPU (`),Ee=n("a"),Dn=r(`Startup or Enterprise
plan`),Kn=r(` required) All API options and
parameters are detailed here `),yt=n("code"),Fn=r("detailed_parameters"),Jn=r("."),Dt=h(),O=n("h2"),W=n("a"),wt=n("span"),w(ke.$$.fragment),Wn=h(),$t=n("span"),Qn=r("Using CPU-Accelerated Inference (~up to 10x speedup)"),Kt=h(),Q=n("p"),Yn=r(`As an API customer, your API token will automatically enable
CPU-Accelerated inference on your requests. For instance, if you compare
gpt2 model inference through our API with
CPU-Acceleration, compared to running inference on the model out of the
box on a local setup, you should measure a `),_t=n("strong"),Vn=r("~10x speedup"),Zn=r(`. The
specific performance boost depends on the model and input payload (and
your local hardware).`),Ft=h(),Xe=n("p"),eo=r(`To verify you are using the CPU-Accelerated version of a model you can
check the x-compute-type header of your requests, which
should be cpu+optimized. If you do not see it, it simply
means not all optimizations are turned on. This can be for various
factors, the model might have been added recently to transformers, or
the model can be optimized in several different ways and the best one
depends on your use case.`),Jt=h(),Y=n("p"),to=r("If you contact us at "),Me=n("a"),ao=r("api-enterprise@huggingface.co"),no=r(`, we\u2019ll be able to
increase the inference speed for you, depending on your actual use case.`),Wt=h(),L=n("h2"),V=n("a"),Pt=n("span"),w(qe.$$.fragment),oo=h(),bt=n("span"),so=r("Using GPU-Accelerated Inference"),Qt=h(),Z=n("p"),ro=r("In order to use GPU-Accelerated inference, you need a "),Ie=n("a"),lo=r(`Startup or
Enterprise plan`),io=r(`. To run any model on a
GPU, you need to specify it via an option in your request:`),Yt=h(),w(je.$$.fragment),Vt=h(),Be=n("p"),uo=r(`Using GPU-Accelerated inference should produce a significant speedup for
all models.`),Zt=h(),He=n("p"),po=r(`To verify you are using the GPU-Accelerated version of the model you can
check the x-compute-type header of your requests, which
should be gpu.`),ea=h(),ee=n("p"),co=r("Please note: Contact us at "),ze=n("a"),fo=r("api-enterprise@huggingface.co"),ho=r(` to discuss
your use case and usage profile when running GPU-Accelerated inference
on many models or large models, so we can optimize the infrastructure
accordingly.`),ta=h(),C=n("h2"),te=n("a"),At=n("span"),w(Te.$$.fragment),mo=h(),Et=n("span"),go=r("Using Large Models (>10 Go)"),aa=h(),ae=n("p"),vo=r(`Large models do not get loaded automatically to protect quality of
service. Contact us at `),De=n("a"),yo=r("api-enterprise@huggingface.co"),wo=r(` so we can
configure large models for your endpoints.`),na=h(),R=n("h2"),ne=n("a"),kt=n("span"),w(xe.$$.fragment),$o=h(),qt=n("span"),_o=r("Model Pinning / Preloading"),oa=h(),oe=n("p"),Po=r("With over 10,000 models available in the "),Ue=n("a"),bo=r(`Model
Hub`),Ao=r(`, not all can be loaded in compute
memory to be instantly available for inference. To guarantee model
availability for API customers who integrate them in production
applications, we offer to pin frequently used model(s) to their API
endpoints, so these models are always instantly available for inference.`),sa=h(),x=n("p"),Eo=r("The number of models that can be pinned depends on the selected "),Se=n("a"),ko=r(`API
plan`),qo=r(`. To get a model pinned to your
account, please contact us at `),Ke=n("a"),Io=r("api-enterprise@huggingface.co"),jo=r("."),this.h()},l(e){const u=Ks('[data-svelte="svelte-1phssyn"]',document.head);c=o(u,"META",{name:!0,content:!0}),u.forEach(a),m=d(e),i=o(e,"H1",{class:!0});var Ne=s(i);g=o(Ne,"A",{id:!0,class:!0,href:!0});var No=s(g);E=o(No,"SPAN",{});var Go=s(E);$(le.$$.fragment,Go),Go.forEach(a),No.forEach(a),Ia=d(Ne),Qe=o(Ne,"SPAN",{});var Oo=s(Qe);ja=l(Oo,"Overview"),Oo.forEach(a),Ne.forEach(a),Tt=d(e),Ge=o(e,"P",{});var Lo=s(Ge);Ta=l(Lo,"Let\u2019s have a quick look at the \u{1F917} Accelerated Inference API."),Lo.forEach(a),xt=d(e),U=o(e,"H2",{class:!0});var la=s(U);M=o(la,"A",{id:!0,class:!0,href:!0});var Co=s(M);Ye=o(Co,"SPAN",{});var Ro=s(Ye);$(ie.$$.fragment,Ro),Ro.forEach(a),Co.forEach(a),xa=d(la),Ve=o(la,"SPAN",{});var Xo=s(Ve);Ua=l(Xo,"Main features:"),Xo.forEach(a),la.forEach(a),Ut=d(e),v=o(e,"UL",{});var y=s(v);ue=o(y,"LI",{});var ia=s(ue);Sa=l(ia,"Leverage "),Ze=o(ia,"STRONG",{});var Mo=s(Ze);Na=l(Mo,"10,000+ Transformer models"),Mo.forEach(a),Ga=l(ia," (T5, Blenderbot, Bart, GPT-2, Pegasus...)"),ia.forEach(a),Oa=d(y),Oe=o(y,"LI",{});var To=s(Oe);La=l(To,"Upload, manage and serve your "),et=o(To,"STRONG",{});var Bo=s(et);Ca=l(Bo,"own models privately"),Bo.forEach(a),To.forEach(a),Ra=d(y),tt=o(y,"LI",{});var Ho=s(tt);Xa=l(Ho,"Run Classification, NER, Conversational, Summarization, Translation, Question-Answering, Embeddings Extraction tasks"),Ho.forEach(a),Ma=d(y),pe=o(y,"LI",{});var ua=s(pe);Ba=l(ua,"Get up to "),at=o(ua,"STRONG",{});var zo=s(at);Ha=l(zo,"10x inference speedup"),zo.forEach(a),za=l(ua," to reduce user latency"),ua.forEach(a),Da=d(y),I=o(y,"LI",{});var se=s(I);Ka=l(se,"Accelerated inference on "),nt=o(se,"STRONG",{});var Do=s(nt);Fa=l(Do,"CPU"),Do.forEach(a),Ja=l(se," and "),ot=o(se,"STRONG",{});var Ko=s(ot);Wa=l(Ko,"GPU"),Ko.forEach(a),Qa=l(se," (GPU requires a "),ce=o(se,"A",{href:!0,rel:!0});var Fo=s(ce);Ya=l(Fo,"Startup or Enterprise plan"),Fo.forEach(a),Va=l(se,")"),se.forEach(a),Za=d(y),fe=o(y,"LI",{});var pa=s(fe);en=l(pa,"Run "),st=o(pa,"STRONG",{});var Jo=s(st);tn=l(Jo,"large models"),Jo.forEach(a),an=l(pa," that are challenging to deploy in production"),pa.forEach(a),nn=d(y),he=o(y,"LI",{});var ca=s(he);on=l(ca,"Scale to 1,000 requests per second with "),rt=o(ca,"STRONG",{});var Wo=s(rt);sn=l(Wo,"automatic scaling"),Wo.forEach(a),rn=l(ca," built-in"),ca.forEach(a),ln=d(y),Le=o(y,"LI",{});var xo=s(Le);lt=o(xo,"STRONG",{});var Qo=s(lt);un=l(Qo,"Ship new NLP features faster"),Qo.forEach(a),pn=l(xo," as new models become available"),xo.forEach(a),cn=d(y),it=o(y,"LI",{});var Yo=s(it);fn=l(Yo,"Build your business on a platform powered by the reference open source project in NLP"),Yo.forEach(a),y.forEach(a),St=d(e),S=o(e,"H2",{class:!0});var fa=s(S);B=o(fa,"A",{id:!0,class:!0,href:!0});var Vo=s(B);ut=o(Vo,"SPAN",{});var Zo=s(ut);$(de.$$.fragment,Zo),Zo.forEach(a),Vo.forEach(a),hn=d(fa),pt=o(fa,"SPAN",{});var es=s(pt);dn=l(es,"Get your API Token"),es.forEach(a),fa.forEach(a),Nt=d(e),Ce=o(e,"P",{});var ts=s(Ce);mn=l(ts,"To get started you need to:"),ts.forEach(a),Gt=d(e),H=o(e,"UL",{});var ha=s(H);z=o(ha,"LI",{});var It=s(z);me=o(It,"A",{href:!0,rel:!0});var as=s(me);gn=l(as,"Register"),as.forEach(a),vn=l(It," or "),ge=o(It,"A",{href:!0,rel:!0});var ns=s(ge);yn=l(ns,"Login"),ns.forEach(a),wn=l(It,"."),It.forEach(a),$n=d(ha),ve=o(ha,"LI",{});var da=s(ve);_n=l(da,"Get your API token "),ye=o(da,"A",{href:!0,rel:!0});var os=s(ye);Pn=l(os,"in your Hugging Face profile"),os.forEach(a),bn=l(da,"."),da.forEach(a),ha.forEach(a),Ot=d(e),q=o(e,"P",{});var re=s(q);An=l(re,"You should see a token "),ct=o(re,"CODE",{});var ss=s(ct);En=l(ss,"hf_xxxxx"),ss.forEach(a),kn=l(re," (old tokens are "),ft=o(re,"CODE",{});var rs=s(ft);qn=l(rs,"api_XXXXXXXX"),rs.forEach(a),In=l(re," or "),ht=o(re,"CODE",{});var ls=s(ht);jn=l(ls,"api_org_XXXXXXX"),ls.forEach(a),Tn=l(re,")."),re.forEach(a),Lt=d(e),Re=o(e,"P",{});var is=s(Re);xn=l(is,`If you do not submit your API token when sending requests to the API,
you will not be able to run inference on your private models, or
benefits from the model pinning and acceleration features of the API.`),is.forEach(a),Ct=d(e),N=o(e,"H2",{class:!0});var ma=s(N);D=o(ma,"A",{id:!0,class:!0,href:!0});var us=s(D);dt=o(us,"SPAN",{});var ps=s(dt);$(we.$$.fragment,ps),ps.forEach(a),us.forEach(a),Un=d(ma),mt=o(ma,"SPAN",{});var cs=s(mt);Sn=l(cs,"Running Inference with API Requests"),cs.forEach(a),ma.forEach(a),Rt=d(e),j=o(e,"P",{});var Fe=s(j);Nn=l(Fe,`The first step is to choose which model you are going to run. Go to the
`),$e=o(Fe,"A",{href:!0,rel:!0});var fs=s($e);Gn=l(fs,"Model Hub"),fs.forEach(a),On=l(Fe,` and select the model you want
to use. If you are unsure where to start, make sure to check our
`),_e=o(Fe,"A",{href:!0,rel:!0});var hs=s(_e);Ln=l(hs,`recommended models for each NLP
task`),hs.forEach(a),Cn=l(Fe,`
available.`),Fe.forEach(a),Xt=d(e),$(Pe.$$.fragment,e),Mt=d(e),K=o(e,"P",{});var ga=s(K);Rn=l(ga,"Let\u2019s use "),be=o(ga,"A",{href:!0,rel:!0});var ds=s(be);Xn=l(ds,"gpt2"),ds.forEach(a),Mn=l(ga,` as an example. To run
inference, simply use this code:`),ga.forEach(a),Bt=d(e),$(F.$$.fragment,e),Ht=d(e),G=o(e,"H2",{class:!0});var va=s(G);J=o(va,"A",{id:!0,class:!0,href:!0});var ms=s(J);gt=o(ms,"SPAN",{});var gs=s(gt);$(Ae.$$.fragment,gs),gs.forEach(a),ms.forEach(a),Bn=d(va),vt=o(va,"SPAN",{});var vs=s(vt);Hn=l(vs,"API Options and Parameters"),vs.forEach(a),va.forEach(a),zt=d(e),T=o(e,"P",{});var Je=s(T);zn=l(Je,`Depending on the task (aka pipeline) the model is configured for, the
request will accept specific parameters. When sending requests to run
any model, API options allow you to specify the caching and model
loading behavior, and inference on GPU (`),Ee=o(Je,"A",{href:!0,rel:!0});var ys=s(Ee);Dn=l(ys,`Startup or Enterprise
plan`),ys.forEach(a),Kn=l(Je,` required) All API options and
parameters are detailed here `),yt=o(Je,"CODE",{});var ws=s(yt);Fn=l(ws,"detailed_parameters"),ws.forEach(a),Jn=l(Je,"."),Je.forEach(a),Dt=d(e),O=o(e,"H2",{class:!0});var ya=s(O);W=o(ya,"A",{id:!0,class:!0,href:!0});var $s=s(W);wt=o($s,"SPAN",{});var _s=s(wt);$(ke.$$.fragment,_s),_s.forEach(a),$s.forEach(a),Wn=d(ya),$t=o(ya,"SPAN",{});var Ps=s($t);Qn=l(Ps,"Using CPU-Accelerated Inference (~up to 10x speedup)"),Ps.forEach(a),ya.forEach(a),Kt=d(e),Q=o(e,"P",{});var wa=s(Q);Yn=l(wa,`As an API customer, your API token will automatically enable
CPU-Accelerated inference on your requests. For instance, if you compare
gpt2 model inference through our API with
CPU-Acceleration, compared to running inference on the model out of the
box on a local setup, you should measure a `),_t=o(wa,"STRONG",{});var bs=s(_t);Vn=l(bs,"~10x speedup"),bs.forEach(a),Zn=l(wa,`. The
specific performance boost depends on the model and input payload (and
your local hardware).`),wa.forEach(a),Ft=d(e),Xe=o(e,"P",{});var As=s(Xe);eo=l(As,`To verify you are using the CPU-Accelerated version of a model you can
check the x-compute-type header of your requests, which
should be cpu+optimized. If you do not see it, it simply
means not all optimizations are turned on. This can be for various
factors, the model might have been added recently to transformers, or
the model can be optimized in several different ways and the best one
depends on your use case.`),As.forEach(a),Jt=d(e),Y=o(e,"P",{});var $a=s(Y);to=l($a,"If you contact us at "),Me=o($a,"A",{href:!0});var Es=s(Me);ao=l(Es,"api-enterprise@huggingface.co"),Es.forEach(a),no=l($a,`, we\u2019ll be able to
increase the inference speed for you, depending on your actual use case.`),$a.forEach(a),Wt=d(e),L=o(e,"H2",{class:!0});var _a=s(L);V=o(_a,"A",{id:!0,class:!0,href:!0});var ks=s(V);Pt=o(ks,"SPAN",{});var qs=s(Pt);$(qe.$$.fragment,qs),qs.forEach(a),ks.forEach(a),oo=d(_a),bt=o(_a,"SPAN",{});var Is=s(bt);so=l(Is,"Using GPU-Accelerated Inference"),Is.forEach(a),_a.forEach(a),Qt=d(e),Z=o(e,"P",{});var Pa=s(Z);ro=l(Pa,"In order to use GPU-Accelerated inference, you need a "),Ie=o(Pa,"A",{href:!0,rel:!0});var js=s(Ie);lo=l(js,`Startup or
Enterprise plan`),js.forEach(a),io=l(Pa,`. To run any model on a
GPU, you need to specify it via an option in your request:`),Pa.forEach(a),Yt=d(e),$(je.$$.fragment,e),Vt=d(e),Be=o(e,"P",{});var Ts=s(Be);uo=l(Ts,`Using GPU-Accelerated inference should produce a significant speedup for
all models.`),Ts.forEach(a),Zt=d(e),He=o(e,"P",{});var xs=s(He);po=l(xs,`To verify you are using the GPU-Accelerated version of the model you can
check the x-compute-type header of your requests, which
should be gpu.`),xs.forEach(a),ea=d(e),ee=o(e,"P",{});var ba=s(ee);co=l(ba,"Please note: Contact us at "),ze=o(ba,"A",{href:!0});var Us=s(ze);fo=l(Us,"api-enterprise@huggingface.co"),Us.forEach(a),ho=l(ba,` to discuss
your use case and usage profile when running GPU-Accelerated inference
on many models or large models, so we can optimize the infrastructure
accordingly.`),ba.forEach(a),ta=d(e),C=o(e,"H2",{class:!0});var Aa=s(C);te=o(Aa,"A",{id:!0,class:!0,href:!0});var Ss=s(te);At=o(Ss,"SPAN",{});var Ns=s(At);$(Te.$$.fragment,Ns),Ns.forEach(a),Ss.forEach(a),mo=d(Aa),Et=o(Aa,"SPAN",{});var Gs=s(Et);go=l(Gs,"Using Large Models (>10 Go)"),Gs.forEach(a),Aa.forEach(a),aa=d(e),ae=o(e,"P",{});var Ea=s(ae);vo=l(Ea,`Large models do not get loaded automatically to protect quality of
service. Contact us at `),De=o(Ea,"A",{href:!0});var Os=s(De);yo=l(Os,"api-enterprise@huggingface.co"),Os.forEach(a),wo=l(Ea,` so we can
configure large models for your endpoints.`),Ea.forEach(a),na=d(e),R=o(e,"H2",{class:!0});var ka=s(R);ne=o(ka,"A",{id:!0,class:!0,href:!0});var Ls=s(ne);kt=o(Ls,"SPAN",{});var Cs=s(kt);$(xe.$$.fragment,Cs),Cs.forEach(a),Ls.forEach(a),$o=d(ka),qt=o(ka,"SPAN",{});var Rs=s(qt);_o=l(Rs,"Model Pinning / Preloading"),Rs.forEach(a),ka.forEach(a),oa=d(e),oe=o(e,"P",{});var qa=s(oe);Po=l(qa,"With over 10,000 models available in the "),Ue=o(qa,"A",{href:!0,rel:!0});var Xs=s(Ue);bo=l(Xs,`Model
Hub`),Xs.forEach(a),Ao=l(qa,`, not all can be loaded in compute
memory to be instantly available for inference. To guarantee model
availability for API customers who integrate them in production
applications, we offer to pin frequently used model(s) to their API
endpoints, so these models are always instantly available for inference.`),qa.forEach(a),sa=d(e),x=o(e,"P",{});var We=s(x);Eo=l(We,"The number of models that can be pinned depends on the selected "),Se=o(We,"A",{href:!0,rel:!0});var Ms=s(Se);ko=l(Ms,`API
plan`),Ms.forEach(a),qo=l(We,`. To get a model pinned to your
account, please contact us at `),Ke=o(We,"A",{href:!0});var Bs=s(Ke);Io=l(Bs,"api-enterprise@huggingface.co"),Bs.forEach(a),jo=l(We,"."),We.forEach(a),this.h()},h(){p(c,"name","hf:doc:metadata"),p(c,"content",JSON.stringify(ar)),p(g,"id","overview"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#overview"),p(i,"class","relative group"),p(M,"id","main-features"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#main-features"),p(U,"class","relative group"),p(ce,"href","https://huggingface.co/pricing"),p(ce,"rel","nofollow"),p(B,"id","get-your-api-token"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#get-your-api-token"),p(S,"class","relative group"),p(me,"href","https://huggingface.co/join"),p(me,"rel","nofollow"),p(ge,"href","https://huggingface.co/login"),p(ge,"rel","nofollow"),p(ye,"href","https://huggingface.co/settings/tokens"),p(ye,"rel","nofollow"),p(D,"id","running-inference-with-api-requests"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#running-inference-with-api-requests"),p(N,"class","relative group"),p($e,"href","https://huggingface.co/models"),p($e,"rel","nofollow"),p(_e,"href","https://api-inference.huggingface.co/docs/python/html/detailed_parameters.html#detailed-parameters"),p(_e,"rel","nofollow"),p(be,"href","https://huggingface.co/gpt2"),p(be,"rel","nofollow"),p(J,"id","api-options-and-parameters"),p(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(J,"href","#api-options-and-parameters"),p(G,"class","relative group"),p(Ee,"href","https://huggingface.co/pricing"),p(Ee,"rel","nofollow"),p(W,"id","using-cpuaccelerated-inference-up-to-10x-speedup"),p(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(W,"href","#using-cpuaccelerated-inference-up-to-10x-speedup"),p(O,"class","relative group"),p(Me,"href","mailto:api-enterprise@huggingface.co"),p(V,"id","using-gpuaccelerated-inference"),p(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(V,"href","#using-gpuaccelerated-inference"),p(L,"class","relative group"),p(Ie,"href","https://huggingface.co/pricing"),p(Ie,"rel","nofollow"),p(ze,"href","mailto:api-enterprise@huggingface.co"),p(te,"id","using-large-models-10-go"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#using-large-models-10-go"),p(C,"class","relative group"),p(De,"href","mailto:api-enterprise@huggingface.co"),p(ne,"id","model-pinning-preloading"),p(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ne,"href","#model-pinning-preloading"),p(R,"class","relative group"),p(Ue,"href","https://huggingface.co/models"),p(Ue,"rel","nofollow"),p(Se,"href","https://huggingface.co/pricing"),p(Se,"rel","nofollow"),p(Ke,"href","mailto:api-enterprise@huggingface.co")},m(e,u){t(document.head,c),f(e,m,u),f(e,i,u),t(i,g),t(g,E),_(le,E,null),t(i,Ia),t(i,Qe),t(Qe,ja),f(e,Tt,u),f(e,Ge,u),t(Ge,Ta),f(e,xt,u),f(e,U,u),t(U,M),t(M,Ye),_(ie,Ye,null),t(U,xa),t(U,Ve),t(Ve,Ua),f(e,Ut,u),f(e,v,u),t(v,ue),t(ue,Sa),t(ue,Ze),t(Ze,Na),t(ue,Ga),t(v,Oa),t(v,Oe),t(Oe,La),t(Oe,et),t(et,Ca),t(v,Ra),t(v,tt),t(tt,Xa),t(v,Ma),t(v,pe),t(pe,Ba),t(pe,at),t(at,Ha),t(pe,za),t(v,Da),t(v,I),t(I,Ka),t(I,nt),t(nt,Fa),t(I,Ja),t(I,ot),t(ot,Wa),t(I,Qa),t(I,ce),t(ce,Ya),t(I,Va),t(v,Za),t(v,fe),t(fe,en),t(fe,st),t(st,tn),t(fe,an),t(v,nn),t(v,he),t(he,on),t(he,rt),t(rt,sn),t(he,rn),t(v,ln),t(v,Le),t(Le,lt),t(lt,un),t(Le,pn),t(v,cn),t(v,it),t(it,fn),f(e,St,u),f(e,S,u),t(S,B),t(B,ut),_(de,ut,null),t(S,hn),t(S,pt),t(pt,dn),f(e,Nt,u),f(e,Ce,u),t(Ce,mn),f(e,Gt,u),f(e,H,u),t(H,z),t(z,me),t(me,gn),t(z,vn),t(z,ge),t(ge,yn),t(z,wn),t(H,$n),t(H,ve),t(ve,_n),t(ve,ye),t(ye,Pn),t(ve,bn),f(e,Ot,u),f(e,q,u),t(q,An),t(q,ct),t(ct,En),t(q,kn),t(q,ft),t(ft,qn),t(q,In),t(q,ht),t(ht,jn),t(q,Tn),f(e,Lt,u),f(e,Re,u),t(Re,xn),f(e,Ct,u),f(e,N,u),t(N,D),t(D,dt),_(we,dt,null),t(N,Un),t(N,mt),t(mt,Sn),f(e,Rt,u),f(e,j,u),t(j,Nn),t(j,$e),t($e,Gn),t(j,On),t(j,_e),t(_e,Ln),t(j,Cn),f(e,Xt,u),_(Pe,e,u),f(e,Mt,u),f(e,K,u),t(K,Rn),t(K,be),t(be,Xn),t(K,Mn),f(e,Bt,u),_(F,e,u),f(e,Ht,u),f(e,G,u),t(G,J),t(J,gt),_(Ae,gt,null),t(G,Bn),t(G,vt),t(vt,Hn),f(e,zt,u),f(e,T,u),t(T,zn),t(T,Ee),t(Ee,Dn),t(T,Kn),t(T,yt),t(yt,Fn),t(T,Jn),f(e,Dt,u),f(e,O,u),t(O,W),t(W,wt),_(ke,wt,null),t(O,Wn),t(O,$t),t($t,Qn),f(e,Kt,u),f(e,Q,u),t(Q,Yn),t(Q,_t),t(_t,Vn),t(Q,Zn),f(e,Ft,u),f(e,Xe,u),t(Xe,eo),f(e,Jt,u),f(e,Y,u),t(Y,to),t(Y,Me),t(Me,ao),t(Y,no),f(e,Wt,u),f(e,L,u),t(L,V),t(V,Pt),_(qe,Pt,null),t(L,oo),t(L,bt),t(bt,so),f(e,Qt,u),f(e,Z,u),t(Z,ro),t(Z,Ie),t(Ie,lo),t(Z,io),f(e,Yt,u),_(je,e,u),f(e,Vt,u),f(e,Be,u),t(Be,uo),f(e,Zt,u),f(e,He,u),t(He,po),f(e,ea,u),f(e,ee,u),t(ee,co),t(ee,ze),t(ze,fo),t(ee,ho),f(e,ta,u),f(e,C,u),t(C,te),t(te,At),_(Te,At,null),t(C,mo),t(C,Et),t(Et,go),f(e,aa,u),f(e,ae,u),t(ae,vo),t(ae,De),t(De,yo),t(ae,wo),f(e,na,u),f(e,R,u),t(R,ne),t(ne,kt),_(xe,kt,null),t(R,$o),t(R,qt),t(qt,_o),f(e,oa,u),f(e,oe,u),t(oe,Po),t(oe,Ue),t(Ue,bo),t(oe,Ao),f(e,sa,u),f(e,x,u),t(x,Eo),t(x,Se),t(Se,ko),t(x,qo),t(x,Ke),t(Ke,Io),t(x,jo),ra=!0},p(e,[u]){const Ne={};u&2&&(Ne.$$scope={dirty:u,ctx:e}),F.$set(Ne)},i(e){ra||(P(le.$$.fragment,e),P(ie.$$.fragment,e),P(de.$$.fragment,e),P(we.$$.fragment,e),P(Pe.$$.fragment,e),P(F.$$.fragment,e),P(Ae.$$.fragment,e),P(ke.$$.fragment,e),P(qe.$$.fragment,e),P(je.$$.fragment,e),P(Te.$$.fragment,e),P(xe.$$.fragment,e),ra=!0)},o(e){b(le.$$.fragment,e),b(ie.$$.fragment,e),b(de.$$.fragment,e),b(we.$$.fragment,e),b(Pe.$$.fragment,e),b(F.$$.fragment,e),b(Ae.$$.fragment,e),b(ke.$$.fragment,e),b(qe.$$.fragment,e),b(je.$$.fragment,e),b(Te.$$.fragment,e),b(xe.$$.fragment,e),ra=!1},d(e){a(c),e&&a(m),e&&a(i),A(le),e&&a(Tt),e&&a(Ge),e&&a(xt),e&&a(U),A(ie),e&&a(Ut),e&&a(v),e&&a(St),e&&a(S),A(de),e&&a(Nt),e&&a(Ce),e&&a(Gt),e&&a(H),e&&a(Ot),e&&a(q),e&&a(Lt),e&&a(Re),e&&a(Ct),e&&a(N),A(we),e&&a(Rt),e&&a(j),e&&a(Xt),A(Pe,e),e&&a(Mt),e&&a(K),e&&a(Bt),A(F,e),e&&a(Ht),e&&a(G),A(Ae),e&&a(zt),e&&a(T),e&&a(Dt),e&&a(O),A(ke),e&&a(Kt),e&&a(Q),e&&a(Ft),e&&a(Xe),e&&a(Jt),e&&a(Y),e&&a(Wt),e&&a(L),A(qe),e&&a(Qt),e&&a(Z),e&&a(Yt),A(je,e),e&&a(Vt),e&&a(Be),e&&a(Zt),e&&a(He),e&&a(ea),e&&a(ee),e&&a(ta),e&&a(C),A(Te),e&&a(aa),e&&a(ae),e&&a(na),e&&a(R),A(xe),e&&a(oa),e&&a(oe),e&&a(sa),e&&a(x)}}}const ar={local:"overview",sections:[{local:"main-features",title:"Main features:"},{local:"get-your-api-token",title:"Get your API Token"},{local:"running-inference-with-api-requests",title:"Running Inference with API Requests"},{local:"api-options-and-parameters",title:"API Options and Parameters"},{local:"using-cpuaccelerated-inference-up-to-10x-speedup",title:"Using CPU-Accelerated Inference (~up to 10x speedup)"},{local:"using-gpuaccelerated-inference",title:"Using GPU-Accelerated Inference"},{local:"using-large-models-10-go",title:"Using Large Models (>10 Go)"},{local:"model-pinning-preloading",title:"Model Pinning / Preloading"}],title:"Overview"};function nr(k){return Fs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lr extends Hs{constructor(c){super();zs(this,c,nr,tr,Ds,{})}}export{lr as default,ar as metadata};
