import{S as sl,i as tl,s as al,e as l,k as d,w as re,t as a,M as ol,c as r,d as t,m as c,a as n,x as ne,h as o,b as f,F as e,g as p,y as ie,L as ll,q as pe,o as de,B as ce}from"../chunks/vendor-22ad994f.js";import{I as Qa}from"../chunks/IconCopyLink-2eb9a001.js";import{C as Va}from"../chunks/CodeBlock-03069293.js";import"../chunks/CopyButton-f539c482.js";function rl(Js){let j,ee,m,g,he,B,Bs,ue,Gs,ms,q,Rs,fe,Ks,Qs,me,Vs,Ws,_s,_,Zs,_e,et,st,we,tt,at,ye,ot,lt,ws,h,rt,ke,nt,it,ve,pt,dt,ge,ct,ht,Ee,ut,ft,be,mt,_t,ys,G,ks,se,wt,vs,O,je,yt,kt,qe,vt,gt,gs,E,Ce,Et,bt,De,jt,qt,Te,Ct,Dt,Es,P,Oe,Tt,Ot,Pe,Pt,$t,bs,b,$e,At,xt,Ae,St,It,xe,zt,Nt,js,u,Lt,Se,Ut,Ht,Ie,Mt,Yt,ze,Xt,Ft,Ne,Jt,Bt,qs,x,Gt,Le,Rt,Kt,Cs,R,Ds,w,Qt,Ue,Vt,Wt,He,Zt,ea,Me,sa,ta,Ts,K,Os,te,aa,Ps,$,S,Ye,Q,oa,Xe,la,$s,C,ra,Fe,na,ia,Je,pa,da,As,A,I,Be,V,ca,Ge,ha,xs,z,ua,Re,fa,ma,Ss,y,_a,Ke,wa,ya,Qe,ka,va,Ve,ga,Ea,Is,D,ba,We,ja,qa,Ze,Ca,Da,zs,N,Ta,es,Oa,Pa,Ns,k,L,ss,$a,Aa,ts,xa,Sa,Ia,U,as,za,Na,os,La,Ua,Ha,H,ls,Ma,Ya,rs,Xa,Fa,Ja,M,ns,Ba,Ga,is,Ra,Ka,Ls;return B=new Qa({}),G=new Va({props:{code:`from transformers import Pipeline


class MyPipeline(Pipeline):
    def _sanitize_parameters(self, **kwargs):
        preprocess_kwargs = {}
        if "maybe_arg" in kwargs:
            preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]
        return preprocess_kwargs, {}, {}

    def preprocess(self, inputs, maybe_arg=2):
        model_input = Tensor(inputs["input_ids"])
        return {"model_input": model_input}

    def _forward(self, model_inputs):
        # model_inputs == {"model_input": model_input}
        outputs = self.model(**model_inputs)
        # Maybe {"logits": Tensor(...)}
        return outputs

    def postprocess(self, model_outputs):
        best_class = model_outputs["logits"].softmax(-1)
        return best_class,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, inputs, maybe_arg=<span class="hljs-number">2</span></span>):
        model_input = Tensor(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;model_input&quot;</span>: model_input}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-comment"># model_inputs == {&quot;model_input&quot;: model_input}</span>
        outputs = self.model(**model_inputs)
        <span class="hljs-comment"># Maybe {&quot;logits&quot;: Tensor(...)}</span>
        <span class="hljs-keyword">return</span> outputs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> best_class`}}),R=new Va({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),K=new Va({props:{code:`def postprocess(self, model_outputs, top_k=5):
    best_class = model_outputs["logits"].softmax(-1)
    # Add logic to handle top_k
    return best_class


def _sanitize_parameters(self, **kwargs):
    preprocess_kwargs = {}
    if "maybe_arg" in kwargs:
        preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]

    postprocess_kwargs = {}
    if "top_k" in kwargs:
        preprocess_kwargs["top_k"] = kwargs["top_k"]
    return preprocess_kwargs, {}, postprocess_kwargs,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs, top_k=<span class="hljs-number">5</span></span>):
    best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Add logic to handle top_k</span>
    <span class="hljs-keyword">return</span> best_class


<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
    preprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]

    postprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;top_k&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),Q=new Qa({}),V=new Qa({}),{c(){j=l("meta"),ee=d(),m=l("h1"),g=l("a"),he=l("span"),re(B.$$.fragment),Bs=d(),ue=l("span"),Gs=a("How to add a pipeline to \u{1F917} Transformers?"),ms=d(),q=l("p"),Rs=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),fe=l("code"),Ks=a("inputs"),Qs=a(` of the
pipeline (`),me=l("code"),Vs=a("preprocess"),Ws=a(")."),_s=d(),_=l("p"),Zs=a("Then define the "),_e=l("code"),et=a("outputs"),st=a(". Same policy as the "),we=l("code"),tt=a("inputs"),at=a(`. The simpler, the better. Those will be the outputs of
`),ye=l("code"),ot=a("postprocess"),lt=a(" method."),ws=d(),h=l("p"),rt=a("Start by inheriting the base class "),ke=l("code"),nt=a("Pipeline"),it=a(". with the 4 methods needed to implement "),ve=l("code"),pt=a("preprocess"),dt=a(`,
`),ge=l("code"),ct=a("_forward"),ht=a(", "),Ee=l("code"),ut=a("postprocess"),ft=a(" and "),be=l("code"),mt=a("_sanitize_parameters"),_t=a("."),ys=d(),re(G.$$.fragment),ks=d(),se=l("p"),wt=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),vs=d(),O=l("p"),je=l("code"),yt=a("preprocess"),kt=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),qe=l("code"),vt=a("Dict"),gt=a("."),gs=d(),E=l("p"),Ce=l("code"),Et=a("_forward"),bt=a(" is the implementation detail and is not meant to be called directly. "),De=l("code"),jt=a("forward"),qt=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Te=l("code"),Ct=a("_forward"),Dt=a(" method, anything else is in the preprocess/postprocess."),Es=d(),P=l("p"),Oe=l("code"),Tt=a("postprocess"),Ot=a(" methods will take the output of "),Pe=l("code"),Pt=a("_forward"),$t=a(` and turn it into the final output that were decided
earlier.`),bs=d(),b=l("p"),$e=l("code"),At=a("_sanitize_parameters"),xt=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Ae=l("code"),St=a("pipeline(...., maybe_arg=4)"),It=a(" or at call time "),xe=l("code"),zt=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Nt=a("."),js=d(),u=l("p"),Lt=a("The returns of "),Se=l("code"),Ut=a("_sanitize_parameters"),Ht=a(" are the 3 dicts of kwargs that will be passed directly to "),Ie=l("code"),Mt=a("preprocess"),Yt=a(`,
`),ze=l("code"),Xt=a("_forward"),Ft=a(" and "),Ne=l("code"),Jt=a("postprocess"),Bt=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),qs=d(),x=l("p"),Gt=a("A classic example would be a "),Le=l("code"),Rt=a("top_k"),Kt=a(" argument in the post processing in classification tasks."),Cs=d(),re(R.$$.fragment),Ds=d(),w=l("p"),Qt=a("In order to achieve that, we\u2019ll update our "),Ue=l("code"),Vt=a("postprocess"),Wt=a(" method with a default parameter to "),He=l("code"),Zt=a("5"),ea=a(`. and edit
`),Me=l("code"),sa=a("_sanitize_parameters"),ta=a(" to allow this new parameter."),Ts=d(),re(K.$$.fragment),Os=d(),te=l("p"),aa=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),Ps=d(),$=l("h2"),S=l("a"),Ye=l("span"),re(Q.$$.fragment),oa=d(),Xe=l("span"),la=a("Adding it to the list of supported tasks"),$s=d(),C=l("p"),ra=a("Go to "),Fe=l("code"),na=a("src/transformers/pipelines/__init__.py"),ia=a(" and fill in "),Je=l("code"),pa=a("SUPPORTED_TASKS"),da=a(` with your newly created pipeline.
If possible it should provide a default model.`),As=d(),A=l("h2"),I=l("a"),Be=l("span"),re(V.$$.fragment),ca=d(),Ge=l("span"),ha=a("Adding tests"),xs=d(),z=l("p"),ua=a("Create a new file "),Re=l("code"),fa=a("tests/test_pipelines_MY_PIPELINE.py"),ma=a(" with example with the other tests."),Ss=d(),y=l("p"),_a=a("The "),Ke=l("code"),wa=a("run_pipeline_test"),ya=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),Qe=l("code"),ka=a("model_mapping"),va=a(" and "),Ve=l("code"),ga=a("tf_model_mapping"),Ea=a("."),Is=d(),D=l("p"),ba=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),We=l("code"),ja=a("XXXForQuestionAnswering"),qa=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Ze=l("code"),Ca=a("ANY"),Da=a(` that will simply attempt to match the
output of the pipeline TYPE.`),zs=d(),N=l("p"),Ta=a("You also "),es=l("em"),Oa=a("need"),Pa=a(" to implement 2 (ideally 4) tests."),Ns=d(),k=l("ul"),L=l("li"),ss=l("code"),$a=a("test_small_model_pt"),Aa=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),ts=l("code"),xa=a("test_small_model_tf"),Sa=a("."),Ia=d(),U=l("li"),as=l("code"),za=a("test_small_model_tf"),Na=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),os=l("code"),La=a("test_small_model_pt"),Ua=a("."),Ha=d(),H=l("li"),ls=l("code"),Ma=a("test_large_model_pt"),Ya=a(" ("),rs=l("code"),Xa=a("optional"),Fa=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Ja=d(),M=l("li"),ns=l("code"),Ba=a("test_large_model_tf"),Ga=a(" ("),is=l("code"),Ra=a("optional"),Ka=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(s){const i=ol('[data-svelte="svelte-1phssyn"]',document.head);j=r(i,"META",{name:!0,content:!0}),i.forEach(t),ee=c(s),m=r(s,"H1",{class:!0});var Us=n(m);g=r(Us,"A",{id:!0,class:!0,href:!0});var Wa=n(g);he=r(Wa,"SPAN",{});var Za=n(he);ne(B.$$.fragment,Za),Za.forEach(t),Wa.forEach(t),Bs=c(Us),ue=r(Us,"SPAN",{});var eo=n(ue);Gs=o(eo,"How to add a pipeline to \u{1F917} Transformers?"),eo.forEach(t),Us.forEach(t),ms=c(s),q=r(s,"P",{});var ae=n(q);Rs=o(ae,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),fe=r(ae,"CODE",{});var so=n(fe);Ks=o(so,"inputs"),so.forEach(t),Qs=o(ae,` of the
pipeline (`),me=r(ae,"CODE",{});var to=n(me);Vs=o(to,"preprocess"),to.forEach(t),Ws=o(ae,")."),ae.forEach(t),_s=c(s),_=r(s,"P",{});var Y=n(_);Zs=o(Y,"Then define the "),_e=r(Y,"CODE",{});var ao=n(_e);et=o(ao,"outputs"),ao.forEach(t),st=o(Y,". Same policy as the "),we=r(Y,"CODE",{});var oo=n(we);tt=o(oo,"inputs"),oo.forEach(t),at=o(Y,`. The simpler, the better. Those will be the outputs of
`),ye=r(Y,"CODE",{});var lo=n(ye);ot=o(lo,"postprocess"),lo.forEach(t),lt=o(Y," method."),Y.forEach(t),ws=c(s),h=r(s,"P",{});var v=n(h);rt=o(v,"Start by inheriting the base class "),ke=r(v,"CODE",{});var ro=n(ke);nt=o(ro,"Pipeline"),ro.forEach(t),it=o(v,". with the 4 methods needed to implement "),ve=r(v,"CODE",{});var no=n(ve);pt=o(no,"preprocess"),no.forEach(t),dt=o(v,`,
`),ge=r(v,"CODE",{});var io=n(ge);ct=o(io,"_forward"),io.forEach(t),ht=o(v,", "),Ee=r(v,"CODE",{});var po=n(Ee);ut=o(po,"postprocess"),po.forEach(t),ft=o(v," and "),be=r(v,"CODE",{});var co=n(be);mt=o(co,"_sanitize_parameters"),co.forEach(t),_t=o(v,"."),v.forEach(t),ys=c(s),ne(G.$$.fragment,s),ks=c(s),se=r(s,"P",{});var ho=n(se);wt=o(ho,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),ho.forEach(t),vs=c(s),O=r(s,"P",{});var ps=n(O);je=r(ps,"CODE",{});var uo=n(je);yt=o(uo,"preprocess"),uo.forEach(t),kt=o(ps,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),qe=r(ps,"CODE",{});var fo=n(qe);vt=o(fo,"Dict"),fo.forEach(t),gt=o(ps,"."),ps.forEach(t),gs=c(s),E=r(s,"P",{});var W=n(E);Ce=r(W,"CODE",{});var mo=n(Ce);Et=o(mo,"_forward"),mo.forEach(t),bt=o(W," is the implementation detail and is not meant to be called directly. "),De=r(W,"CODE",{});var _o=n(De);jt=o(_o,"forward"),_o.forEach(t),qt=o(W,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Te=r(W,"CODE",{});var wo=n(Te);Ct=o(wo,"_forward"),wo.forEach(t),Dt=o(W," method, anything else is in the preprocess/postprocess."),W.forEach(t),Es=c(s),P=r(s,"P",{});var ds=n(P);Oe=r(ds,"CODE",{});var yo=n(Oe);Tt=o(yo,"postprocess"),yo.forEach(t),Ot=o(ds," methods will take the output of "),Pe=r(ds,"CODE",{});var ko=n(Pe);Pt=o(ko,"_forward"),ko.forEach(t),$t=o(ds,` and turn it into the final output that were decided
earlier.`),ds.forEach(t),bs=c(s),b=r(s,"P",{});var Z=n(b);$e=r(Z,"CODE",{});var vo=n($e);At=o(vo,"_sanitize_parameters"),vo.forEach(t),xt=o(Z,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Ae=r(Z,"CODE",{});var go=n(Ae);St=o(go,"pipeline(...., maybe_arg=4)"),go.forEach(t),It=o(Z," or at call time "),xe=r(Z,"CODE",{});var Eo=n(xe);zt=o(Eo,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Eo.forEach(t),Nt=o(Z,"."),Z.forEach(t),js=c(s),u=r(s,"P",{});var T=n(u);Lt=o(T,"The returns of "),Se=r(T,"CODE",{});var bo=n(Se);Ut=o(bo,"_sanitize_parameters"),bo.forEach(t),Ht=o(T," are the 3 dicts of kwargs that will be passed directly to "),Ie=r(T,"CODE",{});var jo=n(Ie);Mt=o(jo,"preprocess"),jo.forEach(t),Yt=o(T,`,
`),ze=r(T,"CODE",{});var qo=n(ze);Xt=o(qo,"_forward"),qo.forEach(t),Ft=o(T," and "),Ne=r(T,"CODE",{});var Co=n(Ne);Jt=o(Co,"postprocess"),Co.forEach(t),Bt=o(T,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),T.forEach(t),qs=c(s),x=r(s,"P",{});var Hs=n(x);Gt=o(Hs,"A classic example would be a "),Le=r(Hs,"CODE",{});var Do=n(Le);Rt=o(Do,"top_k"),Do.forEach(t),Kt=o(Hs," argument in the post processing in classification tasks."),Hs.forEach(t),Cs=c(s),ne(R.$$.fragment,s),Ds=c(s),w=r(s,"P",{});var X=n(w);Qt=o(X,"In order to achieve that, we\u2019ll update our "),Ue=r(X,"CODE",{});var To=n(Ue);Vt=o(To,"postprocess"),To.forEach(t),Wt=o(X," method with a default parameter to "),He=r(X,"CODE",{});var Oo=n(He);Zt=o(Oo,"5"),Oo.forEach(t),ea=o(X,`. and edit
`),Me=r(X,"CODE",{});var Po=n(Me);sa=o(Po,"_sanitize_parameters"),Po.forEach(t),ta=o(X," to allow this new parameter."),X.forEach(t),Ts=c(s),ne(K.$$.fragment,s),Os=c(s),te=r(s,"P",{});var $o=n(te);aa=o($o,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),$o.forEach(t),Ps=c(s),$=r(s,"H2",{class:!0});var Ms=n($);S=r(Ms,"A",{id:!0,class:!0,href:!0});var Ao=n(S);Ye=r(Ao,"SPAN",{});var xo=n(Ye);ne(Q.$$.fragment,xo),xo.forEach(t),Ao.forEach(t),oa=c(Ms),Xe=r(Ms,"SPAN",{});var So=n(Xe);la=o(So,"Adding it to the list of supported tasks"),So.forEach(t),Ms.forEach(t),$s=c(s),C=r(s,"P",{});var oe=n(C);ra=o(oe,"Go to "),Fe=r(oe,"CODE",{});var Io=n(Fe);na=o(Io,"src/transformers/pipelines/__init__.py"),Io.forEach(t),ia=o(oe," and fill in "),Je=r(oe,"CODE",{});var zo=n(Je);pa=o(zo,"SUPPORTED_TASKS"),zo.forEach(t),da=o(oe,` with your newly created pipeline.
If possible it should provide a default model.`),oe.forEach(t),As=c(s),A=r(s,"H2",{class:!0});var Ys=n(A);I=r(Ys,"A",{id:!0,class:!0,href:!0});var No=n(I);Be=r(No,"SPAN",{});var Lo=n(Be);ne(V.$$.fragment,Lo),Lo.forEach(t),No.forEach(t),ca=c(Ys),Ge=r(Ys,"SPAN",{});var Uo=n(Ge);ha=o(Uo,"Adding tests"),Uo.forEach(t),Ys.forEach(t),xs=c(s),z=r(s,"P",{});var Xs=n(z);ua=o(Xs,"Create a new file "),Re=r(Xs,"CODE",{});var Ho=n(Re);fa=o(Ho,"tests/test_pipelines_MY_PIPELINE.py"),Ho.forEach(t),ma=o(Xs," with example with the other tests."),Xs.forEach(t),Ss=c(s),y=r(s,"P",{});var F=n(y);_a=o(F,"The "),Ke=r(F,"CODE",{});var Mo=n(Ke);wa=o(Mo,"run_pipeline_test"),Mo.forEach(t),ya=o(F,` function will be very generic and run on small random models on every possible
architecture as defined by `),Qe=r(F,"CODE",{});var Yo=n(Qe);ka=o(Yo,"model_mapping"),Yo.forEach(t),va=o(F," and "),Ve=r(F,"CODE",{});var Xo=n(Ve);ga=o(Xo,"tf_model_mapping"),Xo.forEach(t),Ea=o(F,"."),F.forEach(t),Is=c(s),D=r(s,"P",{});var le=n(D);ba=o(le,`This is very important to test future compatibility, meaning if someone adds a new model for
`),We=r(le,"CODE",{});var Fo=n(We);ja=o(Fo,"XXXForQuestionAnswering"),Fo.forEach(t),qa=o(le,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Ze=r(le,"CODE",{});var Jo=n(Ze);Ca=o(Jo,"ANY"),Jo.forEach(t),Da=o(le,` that will simply attempt to match the
output of the pipeline TYPE.`),le.forEach(t),zs=c(s),N=r(s,"P",{});var Fs=n(N);Ta=o(Fs,"You also "),es=r(Fs,"EM",{});var Bo=n(es);Oa=o(Bo,"need"),Bo.forEach(t),Pa=o(Fs," to implement 2 (ideally 4) tests."),Fs.forEach(t),Ns=c(s),k=r(s,"UL",{});var J=n(k);L=r(J,"LI",{});var cs=n(L);ss=r(cs,"CODE",{});var Go=n(ss);$a=o(Go,"test_small_model_pt"),Go.forEach(t),Aa=o(cs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),ts=r(cs,"CODE",{});var Ro=n(ts);xa=o(Ro,"test_small_model_tf"),Ro.forEach(t),Sa=o(cs,"."),cs.forEach(t),Ia=c(J),U=r(J,"LI",{});var hs=n(U);as=r(hs,"CODE",{});var Ko=n(as);za=o(Ko,"test_small_model_tf"),Ko.forEach(t),Na=o(hs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),os=r(hs,"CODE",{});var Qo=n(os);La=o(Qo,"test_small_model_pt"),Qo.forEach(t),Ua=o(hs,"."),hs.forEach(t),Ha=c(J),H=r(J,"LI",{});var us=n(H);ls=r(us,"CODE",{});var Vo=n(ls);Ma=o(Vo,"test_large_model_pt"),Vo.forEach(t),Ya=o(us," ("),rs=r(us,"CODE",{});var Wo=n(rs);Xa=o(Wo,"optional"),Wo.forEach(t),Fa=o(us,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),us.forEach(t),Ja=c(J),M=r(J,"LI",{});var fs=n(M);ns=r(fs,"CODE",{});var Zo=n(ns);Ba=o(Zo,"test_large_model_tf"),Zo.forEach(t),Ga=o(fs," ("),is=r(fs,"CODE",{});var el=n(is);Ra=o(el,"optional"),el.forEach(t),Ka=o(fs,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),fs.forEach(t),J.forEach(t),this.h()},h(){f(j,"name","hf:doc:metadata"),f(j,"content",JSON.stringify(nl)),f(g,"id","how-to-add-a-pipeline-to-transformers"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#how-to-add-a-pipeline-to-transformers"),f(m,"class","relative group"),f(S,"id","adding-it-to-the-list-of-supported-tasks"),f(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(S,"href","#adding-it-to-the-list-of-supported-tasks"),f($,"class","relative group"),f(I,"id","adding-tests"),f(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(I,"href","#adding-tests"),f(A,"class","relative group")},m(s,i){e(document.head,j),p(s,ee,i),p(s,m,i),e(m,g),e(g,he),ie(B,he,null),e(m,Bs),e(m,ue),e(ue,Gs),p(s,ms,i),p(s,q,i),e(q,Rs),e(q,fe),e(fe,Ks),e(q,Qs),e(q,me),e(me,Vs),e(q,Ws),p(s,_s,i),p(s,_,i),e(_,Zs),e(_,_e),e(_e,et),e(_,st),e(_,we),e(we,tt),e(_,at),e(_,ye),e(ye,ot),e(_,lt),p(s,ws,i),p(s,h,i),e(h,rt),e(h,ke),e(ke,nt),e(h,it),e(h,ve),e(ve,pt),e(h,dt),e(h,ge),e(ge,ct),e(h,ht),e(h,Ee),e(Ee,ut),e(h,ft),e(h,be),e(be,mt),e(h,_t),p(s,ys,i),ie(G,s,i),p(s,ks,i),p(s,se,i),e(se,wt),p(s,vs,i),p(s,O,i),e(O,je),e(je,yt),e(O,kt),e(O,qe),e(qe,vt),e(O,gt),p(s,gs,i),p(s,E,i),e(E,Ce),e(Ce,Et),e(E,bt),e(E,De),e(De,jt),e(E,qt),e(E,Te),e(Te,Ct),e(E,Dt),p(s,Es,i),p(s,P,i),e(P,Oe),e(Oe,Tt),e(P,Ot),e(P,Pe),e(Pe,Pt),e(P,$t),p(s,bs,i),p(s,b,i),e(b,$e),e($e,At),e(b,xt),e(b,Ae),e(Ae,St),e(b,It),e(b,xe),e(xe,zt),e(b,Nt),p(s,js,i),p(s,u,i),e(u,Lt),e(u,Se),e(Se,Ut),e(u,Ht),e(u,Ie),e(Ie,Mt),e(u,Yt),e(u,ze),e(ze,Xt),e(u,Ft),e(u,Ne),e(Ne,Jt),e(u,Bt),p(s,qs,i),p(s,x,i),e(x,Gt),e(x,Le),e(Le,Rt),e(x,Kt),p(s,Cs,i),ie(R,s,i),p(s,Ds,i),p(s,w,i),e(w,Qt),e(w,Ue),e(Ue,Vt),e(w,Wt),e(w,He),e(He,Zt),e(w,ea),e(w,Me),e(Me,sa),e(w,ta),p(s,Ts,i),ie(K,s,i),p(s,Os,i),p(s,te,i),e(te,aa),p(s,Ps,i),p(s,$,i),e($,S),e(S,Ye),ie(Q,Ye,null),e($,oa),e($,Xe),e(Xe,la),p(s,$s,i),p(s,C,i),e(C,ra),e(C,Fe),e(Fe,na),e(C,ia),e(C,Je),e(Je,pa),e(C,da),p(s,As,i),p(s,A,i),e(A,I),e(I,Be),ie(V,Be,null),e(A,ca),e(A,Ge),e(Ge,ha),p(s,xs,i),p(s,z,i),e(z,ua),e(z,Re),e(Re,fa),e(z,ma),p(s,Ss,i),p(s,y,i),e(y,_a),e(y,Ke),e(Ke,wa),e(y,ya),e(y,Qe),e(Qe,ka),e(y,va),e(y,Ve),e(Ve,ga),e(y,Ea),p(s,Is,i),p(s,D,i),e(D,ba),e(D,We),e(We,ja),e(D,qa),e(D,Ze),e(Ze,Ca),e(D,Da),p(s,zs,i),p(s,N,i),e(N,Ta),e(N,es),e(es,Oa),e(N,Pa),p(s,Ns,i),p(s,k,i),e(k,L),e(L,ss),e(ss,$a),e(L,Aa),e(L,ts),e(ts,xa),e(L,Sa),e(k,Ia),e(k,U),e(U,as),e(as,za),e(U,Na),e(U,os),e(os,La),e(U,Ua),e(k,Ha),e(k,H),e(H,ls),e(ls,Ma),e(H,Ya),e(H,rs),e(rs,Xa),e(H,Fa),e(k,Ja),e(k,M),e(M,ns),e(ns,Ba),e(M,Ga),e(M,is),e(is,Ra),e(M,Ka),Ls=!0},p:ll,i(s){Ls||(pe(B.$$.fragment,s),pe(G.$$.fragment,s),pe(R.$$.fragment,s),pe(K.$$.fragment,s),pe(Q.$$.fragment,s),pe(V.$$.fragment,s),Ls=!0)},o(s){de(B.$$.fragment,s),de(G.$$.fragment,s),de(R.$$.fragment,s),de(K.$$.fragment,s),de(Q.$$.fragment,s),de(V.$$.fragment,s),Ls=!1},d(s){t(j),s&&t(ee),s&&t(m),ce(B),s&&t(ms),s&&t(q),s&&t(_s),s&&t(_),s&&t(ws),s&&t(h),s&&t(ys),ce(G,s),s&&t(ks),s&&t(se),s&&t(vs),s&&t(O),s&&t(gs),s&&t(E),s&&t(Es),s&&t(P),s&&t(bs),s&&t(b),s&&t(js),s&&t(u),s&&t(qs),s&&t(x),s&&t(Cs),ce(R,s),s&&t(Ds),s&&t(w),s&&t(Ts),ce(K,s),s&&t(Os),s&&t(te),s&&t(Ps),s&&t($),ce(Q),s&&t($s),s&&t(C),s&&t(As),s&&t(A),ce(V),s&&t(xs),s&&t(z),s&&t(Ss),s&&t(y),s&&t(Is),s&&t(D),s&&t(zs),s&&t(N),s&&t(Ns),s&&t(k)}}}const nl={local:"how-to-add-a-pipeline-to-transformers",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"adding-tests",title:"Adding tests"}],title:"How to add a pipeline to \u{1F917} Transformers?"};function il(Js,j,ee){let{fw:m}=j;return Js.$$set=g=>{"fw"in g&&ee(0,m=g.fw)},[m]}class ul extends sl{constructor(j){super();tl(this,j,il,rl,al,{fw:0})}}export{ul as default,nl as metadata};
