import{S as Ra,i as Ba,s as Ma,e as a,k as p,w as h,t as s,M as za,c as o,d as r,m as l,a as n,x as u,h as i,b as m,F as e,g as d,y as g,L as Za,q as v,o as _,B as $,v as Ga}from"../../chunks/vendor-6b77c823.js";import{D as b}from"../../chunks/Docstring-abef54e3.js";import{I as Ht}from"../../chunks/IconCopyLink-7a11ce68.js";function Ka(ia){let F,ot,x,H,Le,Z,Nt,Oe,Wt,nt,_e,Jt,st,$e,qt,it,S,N,Ce,G,jt,Ie,Ut,pt,A,K,Qt,X,Rt,Pe,Bt,Mt,lt,k,Y,zt,Te,Zt,mt,D,ee,Gt,te,Kt,Ve,Xt,Yt,er,re,tr,He,rr,ar,ct,L,W,Ne,ae,or,We,nr,dt,f,oe,sr,Je,ir,pr,O,qe,lr,mr,je,cr,dr,Ue,fr,hr,J,Qe,ur,gr,Re,vr,_r,$r,q,ne,Pr,C,br,be,wr,Dr,Be,yr,Er,Fr,j,se,xr,ie,Sr,we,Ar,kr,Lr,U,pe,Or,Me,Cr,ft,y,le,Ir,ze,Tr,Vr,Q,me,Hr,ce,Nr,De,Wr,Jr,ht,E,de,qr,Ze,jr,Ur,R,fe,Qr,Ge,Rr,ut,w,he,Br,Ke,Mr,zr,Xe,Zr,Gr,B,ue,Kr,Ye,Xr,gt,I,M,et,ge,Yr,tt,ea,vt,T,ve,ta,V,ra,ye,aa,oa,rt,na,sa,_t;return Z=new Ht({}),G=new Ht({}),K=new b({props:{name:"class transformers.pipelines.ArgumentHandler",anchor:"transformers.pipelines.ArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L393"}}),Y=new b({props:{name:"class transformers.pipelines.ZeroShotClassificationArgumentHandler",anchor:"transformers.pipelines.ZeroShotClassificationArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/zero_shot_classification.py#L13"}}),ee=new b({props:{name:"class transformers.pipelines.QuestionAnsweringArgumentHandler",anchor:"transformers.pipelines.QuestionAnsweringArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/question_answering.py#L31"}}),ae=new Ht({}),oe=new b({props:{name:"class transformers.PipelineDataFormat",anchor:"transformers.PipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L403",parametersDescription:[{anchor:"transformers.PipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),ne=new b({props:{name:"from_str",anchor:"transformers.PipelineDataFormat.from_str",parameters:[{name:"format",val:": str"},{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L480",parametersDescription:[{anchor:"transformers.PipelineDataFormat.from_str.output_path",description:`<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to save the outgoing data.`,name:"output_path"},{anchor:"transformers.PipelineDataFormat.from_str.input_path",description:`<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to look for the input data.`,name:"input_path"},{anchor:"transformers.PipelineDataFormat.from_str.column",description:`<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The column to read.`,name:"column"},{anchor:"transformers.PipelineDataFormat.from_str.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],returnDescription:`
<p>The proper data format.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16658/en/internal/pipelines_utils#transformers.PipelineDataFormat"
>PipelineDataFormat</a></p>
`}}),se=new b({props:{name:"save",anchor:"transformers.PipelineDataFormat.save",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L452",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),pe=new b({props:{name:"save_binary",anchor:"transformers.PipelineDataFormat.save_binary",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L462",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save_binary.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}],returnDescription:`
<p>Path where the data has been saved.</p>
`,returnType:`
<p><code>str</code></p>
`}}),le=new b({props:{name:"class transformers.CsvPipelineDataFormat",anchor:"transformers.CsvPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L516",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.CsvPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.CsvPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.CsvPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),me=new b({props:{name:"save",anchor:"transformers.CsvPipelineDataFormat.save",parameters:[{name:"data",val:": typing.List[dict]"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L546",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>List[dict]</code>) &#x2014; The data to store.",name:"data"}]}}),de=new b({props:{name:"class transformers.JsonPipelineDataFormat",anchor:"transformers.JsonPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L560",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.JsonPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.JsonPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.JsonPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),fe=new b({props:{name:"save",anchor:"transformers.JsonPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L591",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),he=new b({props:{name:"class transformers.PipedPipelineDataFormat",anchor:"transformers.PipedPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L602",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipedPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipedPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipedPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),ue=new b({props:{name:"save",anchor:"transformers.PipedPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L632",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),ge=new Ht({}),ve=new b({props:{name:"class transformers.pipelines.PipelineException",anchor:"transformers.pipelines.PipelineException",parameters:[{name:"task",val:": str"},{name:"model",val:": str"},{name:"reason",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16658/src/transformers/pipelines/base.py#L376",parametersDescription:[{anchor:"transformers.pipelines.PipelineException.task",description:"<strong>task</strong> (<code>str</code>) &#x2014; The task of the pipeline.",name:"task"},{anchor:"transformers.pipelines.PipelineException.model",description:"<strong>model</strong> (<code>str</code>) &#x2014; The model used by the pipeline.",name:"model"},{anchor:"transformers.pipelines.PipelineException.reason",description:"<strong>reason</strong> (<code>str</code>) &#x2014; The error message to display.",name:"reason"}]}}),{c(){F=a("meta"),ot=p(),x=a("h1"),H=a("a"),Le=a("span"),h(Z.$$.fragment),Nt=p(),Oe=a("span"),Wt=s("Utilities for pipelines"),nt=p(),_e=a("p"),Jt=s("This page lists all the utility functions the library provides for pipelines."),st=p(),$e=a("p"),qt=s("Most of those are only useful if you are studying the code of the models in the library."),it=p(),S=a("h2"),N=a("a"),Ce=a("span"),h(G.$$.fragment),jt=p(),Ie=a("span"),Ut=s("Argument handling"),pt=p(),A=a("div"),h(K.$$.fragment),Qt=p(),X=a("p"),Rt=s("Base interface for handling arguments for each "),Pe=a("a"),Bt=s("Pipeline"),Mt=s("."),lt=p(),k=a("div"),h(Y.$$.fragment),zt=p(),Te=a("p"),Zt=s(`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),mt=p(),D=a("div"),h(ee.$$.fragment),Gt=p(),te=a("p"),Kt=s(`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),Ve=a("code"),Xt=s("SquadExample"),Yt=s("."),er=p(),re=a("p"),tr=s("QuestionAnsweringArgumentHandler manages all the possible to create a "),He=a("code"),rr=s("SquadExample"),ar=s(` from the command-line
supplied arguments.`),ct=p(),L=a("h2"),W=a("a"),Ne=a("span"),h(ae.$$.fragment),or=p(),We=a("span"),nr=s("Data format"),dt=p(),f=a("div"),h(oe.$$.fragment),sr=p(),Je=a("p"),ir=s(`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),pr=p(),O=a("ul"),qe=a("li"),lr=s("JSON"),mr=p(),je=a("li"),cr=s("CSV"),dr=p(),Ue=a("li"),fr=s("stdin/stdout (pipe)"),hr=p(),J=a("p"),Qe=a("code"),ur=s("PipelineDataFormat"),gr=s(` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=a("code"),vr=s("dataset_kwarg_1=dataset_column_1"),_r=s(" format."),$r=p(),q=a("div"),h(ne.$$.fragment),Pr=p(),C=a("p"),br=s("Creates an instance of the right subclass of "),be=a("a"),wr=s("PipelineDataFormat"),Dr=s(" depending on "),Be=a("code"),yr=s("format"),Er=s("."),Fr=p(),j=a("div"),h(se.$$.fragment),xr=p(),ie=a("p"),Sr=s("Save the provided data object with the representation for the current "),we=a("a"),Ar=s("PipelineDataFormat"),kr=s("."),Lr=p(),U=a("div"),h(pe.$$.fragment),Or=p(),Me=a("p"),Cr=s("Save the provided data object as a pickle-formatted binary data on the disk."),ft=p(),y=a("div"),h(le.$$.fragment),Ir=p(),ze=a("p"),Tr=s("Support for pipelines using CSV data format."),Vr=p(),Q=a("div"),h(me.$$.fragment),Hr=p(),ce=a("p"),Nr=s("Save the provided data object with the representation for the current "),De=a("a"),Wr=s("PipelineDataFormat"),Jr=s("."),ht=p(),E=a("div"),h(de.$$.fragment),qr=p(),Ze=a("p"),jr=s("Support for pipelines using JSON file format."),Ur=p(),R=a("div"),h(fe.$$.fragment),Qr=p(),Ge=a("p"),Rr=s("Save the provided data object in a json file."),ut=p(),w=a("div"),h(he.$$.fragment),Br=p(),Ke=a("p"),Mr=s("Read data from piped input to the python process. For multi columns data, columns should separated by"),zr=p(),Xe=a("p"),Zr=s("If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Gr=p(),B=a("div"),h(ue.$$.fragment),Kr=p(),Ye=a("p"),Xr=s("Print the data."),gt=p(),I=a("h2"),M=a("a"),et=a("span"),h(ge.$$.fragment),Yr=p(),tt=a("span"),ea=s("Utilities"),vt=p(),T=a("div"),h(ve.$$.fragment),ta=p(),V=a("p"),ra=s("Raised by a "),ye=a("a"),aa=s("Pipeline"),oa=s(" when handling "),rt=a("strong"),na=s("call"),sa=s("."),this.h()},l(t){const c=za('[data-svelte="svelte-1phssyn"]',document.head);F=o(c,"META",{name:!0,content:!0}),c.forEach(r),ot=l(t),x=o(t,"H1",{class:!0});var $t=n(x);H=o($t,"A",{id:!0,class:!0,href:!0});var pa=n(H);Le=o(pa,"SPAN",{});var la=n(Le);u(Z.$$.fragment,la),la.forEach(r),pa.forEach(r),Nt=l($t),Oe=o($t,"SPAN",{});var ma=n(Oe);Wt=i(ma,"Utilities for pipelines"),ma.forEach(r),$t.forEach(r),nt=l(t),_e=o(t,"P",{});var ca=n(_e);Jt=i(ca,"This page lists all the utility functions the library provides for pipelines."),ca.forEach(r),st=l(t),$e=o(t,"P",{});var da=n($e);qt=i(da,"Most of those are only useful if you are studying the code of the models in the library."),da.forEach(r),it=l(t),S=o(t,"H2",{class:!0});var Pt=n(S);N=o(Pt,"A",{id:!0,class:!0,href:!0});var fa=n(N);Ce=o(fa,"SPAN",{});var ha=n(Ce);u(G.$$.fragment,ha),ha.forEach(r),fa.forEach(r),jt=l(Pt),Ie=o(Pt,"SPAN",{});var ua=n(Ie);Ut=i(ua,"Argument handling"),ua.forEach(r),Pt.forEach(r),pt=l(t),A=o(t,"DIV",{class:!0});var bt=n(A);u(K.$$.fragment,bt),Qt=l(bt),X=o(bt,"P",{});var wt=n(X);Rt=i(wt,"Base interface for handling arguments for each "),Pe=o(wt,"A",{href:!0});var ga=n(Pe);Bt=i(ga,"Pipeline"),ga.forEach(r),Mt=i(wt,"."),wt.forEach(r),bt.forEach(r),lt=l(t),k=o(t,"DIV",{class:!0});var Dt=n(k);u(Y.$$.fragment,Dt),zt=l(Dt),Te=o(Dt,"P",{});var va=n(Te);Zt=i(va,`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),va.forEach(r),Dt.forEach(r),mt=l(t),D=o(t,"DIV",{class:!0});var Ee=n(D);u(ee.$$.fragment,Ee),Gt=l(Ee),te=o(Ee,"P",{});var yt=n(te);Kt=i(yt,`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),Ve=o(yt,"CODE",{});var _a=n(Ve);Xt=i(_a,"SquadExample"),_a.forEach(r),Yt=i(yt,"."),yt.forEach(r),er=l(Ee),re=o(Ee,"P",{});var Et=n(re);tr=i(Et,"QuestionAnsweringArgumentHandler manages all the possible to create a "),He=o(Et,"CODE",{});var $a=n(He);rr=i($a,"SquadExample"),$a.forEach(r),ar=i(Et,` from the command-line
supplied arguments.`),Et.forEach(r),Ee.forEach(r),ct=l(t),L=o(t,"H2",{class:!0});var Ft=n(L);W=o(Ft,"A",{id:!0,class:!0,href:!0});var Pa=n(W);Ne=o(Pa,"SPAN",{});var ba=n(Ne);u(ae.$$.fragment,ba),ba.forEach(r),Pa.forEach(r),or=l(Ft),We=o(Ft,"SPAN",{});var wa=n(We);nr=i(wa,"Data format"),wa.forEach(r),Ft.forEach(r),dt=l(t),f=o(t,"DIV",{class:!0});var P=n(f);u(oe.$$.fragment,P),sr=l(P),Je=o(P,"P",{});var Da=n(Je);ir=i(Da,`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),Da.forEach(r),pr=l(P),O=o(P,"UL",{});var Fe=n(O);qe=o(Fe,"LI",{});var ya=n(qe);lr=i(ya,"JSON"),ya.forEach(r),mr=l(Fe),je=o(Fe,"LI",{});var Ea=n(je);cr=i(Ea,"CSV"),Ea.forEach(r),dr=l(Fe),Ue=o(Fe,"LI",{});var Fa=n(Ue);fr=i(Fa,"stdin/stdout (pipe)"),Fa.forEach(r),Fe.forEach(r),hr=l(P),J=o(P,"P",{});var at=n(J);Qe=o(at,"CODE",{});var xa=n(Qe);ur=i(xa,"PipelineDataFormat"),xa.forEach(r),gr=i(at,` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=o(at,"CODE",{});var Sa=n(Re);vr=i(Sa,"dataset_kwarg_1=dataset_column_1"),Sa.forEach(r),_r=i(at," format."),at.forEach(r),$r=l(P),q=o(P,"DIV",{class:!0});var xt=n(q);u(ne.$$.fragment,xt),Pr=l(xt),C=o(xt,"P",{});var xe=n(C);br=i(xe,"Creates an instance of the right subclass of "),be=o(xe,"A",{href:!0});var Aa=n(be);wr=i(Aa,"PipelineDataFormat"),Aa.forEach(r),Dr=i(xe," depending on "),Be=o(xe,"CODE",{});var ka=n(Be);yr=i(ka,"format"),ka.forEach(r),Er=i(xe,"."),xe.forEach(r),xt.forEach(r),Fr=l(P),j=o(P,"DIV",{class:!0});var St=n(j);u(se.$$.fragment,St),xr=l(St),ie=o(St,"P",{});var At=n(ie);Sr=i(At,"Save the provided data object with the representation for the current "),we=o(At,"A",{href:!0});var La=n(we);Ar=i(La,"PipelineDataFormat"),La.forEach(r),kr=i(At,"."),At.forEach(r),St.forEach(r),Lr=l(P),U=o(P,"DIV",{class:!0});var kt=n(U);u(pe.$$.fragment,kt),Or=l(kt),Me=o(kt,"P",{});var Oa=n(Me);Cr=i(Oa,"Save the provided data object as a pickle-formatted binary data on the disk."),Oa.forEach(r),kt.forEach(r),P.forEach(r),ft=l(t),y=o(t,"DIV",{class:!0});var Se=n(y);u(le.$$.fragment,Se),Ir=l(Se),ze=o(Se,"P",{});var Ca=n(ze);Tr=i(Ca,"Support for pipelines using CSV data format."),Ca.forEach(r),Vr=l(Se),Q=o(Se,"DIV",{class:!0});var Lt=n(Q);u(me.$$.fragment,Lt),Hr=l(Lt),ce=o(Lt,"P",{});var Ot=n(ce);Nr=i(Ot,"Save the provided data object with the representation for the current "),De=o(Ot,"A",{href:!0});var Ia=n(De);Wr=i(Ia,"PipelineDataFormat"),Ia.forEach(r),Jr=i(Ot,"."),Ot.forEach(r),Lt.forEach(r),Se.forEach(r),ht=l(t),E=o(t,"DIV",{class:!0});var Ae=n(E);u(de.$$.fragment,Ae),qr=l(Ae),Ze=o(Ae,"P",{});var Ta=n(Ze);jr=i(Ta,"Support for pipelines using JSON file format."),Ta.forEach(r),Ur=l(Ae),R=o(Ae,"DIV",{class:!0});var Ct=n(R);u(fe.$$.fragment,Ct),Qr=l(Ct),Ge=o(Ct,"P",{});var Va=n(Ge);Rr=i(Va,"Save the provided data object in a json file."),Va.forEach(r),Ct.forEach(r),Ae.forEach(r),ut=l(t),w=o(t,"DIV",{class:!0});var z=n(w);u(he.$$.fragment,z),Br=l(z),Ke=o(z,"P",{});var Ha=n(Ke);Mr=i(Ha,"Read data from piped input to the python process. For multi columns data, columns should separated by"),Ha.forEach(r),zr=l(z),Xe=o(z,"P",{});var Na=n(Xe);Zr=i(Na,"If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Na.forEach(r),Gr=l(z),B=o(z,"DIV",{class:!0});var It=n(B);u(ue.$$.fragment,It),Kr=l(It),Ye=o(It,"P",{});var Wa=n(Ye);Xr=i(Wa,"Print the data."),Wa.forEach(r),It.forEach(r),z.forEach(r),gt=l(t),I=o(t,"H2",{class:!0});var Tt=n(I);M=o(Tt,"A",{id:!0,class:!0,href:!0});var Ja=n(M);et=o(Ja,"SPAN",{});var qa=n(et);u(ge.$$.fragment,qa),qa.forEach(r),Ja.forEach(r),Yr=l(Tt),tt=o(Tt,"SPAN",{});var ja=n(tt);ea=i(ja,"Utilities"),ja.forEach(r),Tt.forEach(r),vt=l(t),T=o(t,"DIV",{class:!0});var Vt=n(T);u(ve.$$.fragment,Vt),ta=l(Vt),V=o(Vt,"P",{});var ke=n(V);ra=i(ke,"Raised by a "),ye=o(ke,"A",{href:!0});var Ua=n(ye);aa=i(Ua,"Pipeline"),Ua.forEach(r),oa=i(ke," when handling "),rt=o(ke,"STRONG",{});var Qa=n(rt);na=i(Qa,"call"),Qa.forEach(r),sa=i(ke,"."),ke.forEach(r),Vt.forEach(r),this.h()},h(){m(F,"name","hf:doc:metadata"),m(F,"content",JSON.stringify(Xa)),m(H,"id","utilities-for-pipelines"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#utilities-for-pipelines"),m(x,"class","relative group"),m(N,"id","transformers.pipelines.ArgumentHandler"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#transformers.pipelines.ArgumentHandler"),m(S,"class","relative group"),m(Pe,"href","/docs/transformers/pr_16658/en/main_classes/pipelines#transformers.Pipeline"),m(A,"class","docstring"),m(k,"class","docstring"),m(D,"class","docstring"),m(W,"id","transformers.PipelineDataFormat"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#transformers.PipelineDataFormat"),m(L,"class","relative group"),m(be,"href","/docs/transformers/pr_16658/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(q,"class","docstring"),m(we,"href","/docs/transformers/pr_16658/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(j,"class","docstring"),m(U,"class","docstring"),m(f,"class","docstring"),m(De,"href","/docs/transformers/pr_16658/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(Q,"class","docstring"),m(y,"class","docstring"),m(R,"class","docstring"),m(E,"class","docstring"),m(B,"class","docstring"),m(w,"class","docstring"),m(M,"id","transformers.pipelines.PipelineException"),m(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(M,"href","#transformers.pipelines.PipelineException"),m(I,"class","relative group"),m(ye,"href","/docs/transformers/pr_16658/en/main_classes/pipelines#transformers.Pipeline"),m(T,"class","docstring")},m(t,c){e(document.head,F),d(t,ot,c),d(t,x,c),e(x,H),e(H,Le),g(Z,Le,null),e(x,Nt),e(x,Oe),e(Oe,Wt),d(t,nt,c),d(t,_e,c),e(_e,Jt),d(t,st,c),d(t,$e,c),e($e,qt),d(t,it,c),d(t,S,c),e(S,N),e(N,Ce),g(G,Ce,null),e(S,jt),e(S,Ie),e(Ie,Ut),d(t,pt,c),d(t,A,c),g(K,A,null),e(A,Qt),e(A,X),e(X,Rt),e(X,Pe),e(Pe,Bt),e(X,Mt),d(t,lt,c),d(t,k,c),g(Y,k,null),e(k,zt),e(k,Te),e(Te,Zt),d(t,mt,c),d(t,D,c),g(ee,D,null),e(D,Gt),e(D,te),e(te,Kt),e(te,Ve),e(Ve,Xt),e(te,Yt),e(D,er),e(D,re),e(re,tr),e(re,He),e(He,rr),e(re,ar),d(t,ct,c),d(t,L,c),e(L,W),e(W,Ne),g(ae,Ne,null),e(L,or),e(L,We),e(We,nr),d(t,dt,c),d(t,f,c),g(oe,f,null),e(f,sr),e(f,Je),e(Je,ir),e(f,pr),e(f,O),e(O,qe),e(qe,lr),e(O,mr),e(O,je),e(je,cr),e(O,dr),e(O,Ue),e(Ue,fr),e(f,hr),e(f,J),e(J,Qe),e(Qe,ur),e(J,gr),e(J,Re),e(Re,vr),e(J,_r),e(f,$r),e(f,q),g(ne,q,null),e(q,Pr),e(q,C),e(C,br),e(C,be),e(be,wr),e(C,Dr),e(C,Be),e(Be,yr),e(C,Er),e(f,Fr),e(f,j),g(se,j,null),e(j,xr),e(j,ie),e(ie,Sr),e(ie,we),e(we,Ar),e(ie,kr),e(f,Lr),e(f,U),g(pe,U,null),e(U,Or),e(U,Me),e(Me,Cr),d(t,ft,c),d(t,y,c),g(le,y,null),e(y,Ir),e(y,ze),e(ze,Tr),e(y,Vr),e(y,Q),g(me,Q,null),e(Q,Hr),e(Q,ce),e(ce,Nr),e(ce,De),e(De,Wr),e(ce,Jr),d(t,ht,c),d(t,E,c),g(de,E,null),e(E,qr),e(E,Ze),e(Ze,jr),e(E,Ur),e(E,R),g(fe,R,null),e(R,Qr),e(R,Ge),e(Ge,Rr),d(t,ut,c),d(t,w,c),g(he,w,null),e(w,Br),e(w,Ke),e(Ke,Mr),e(w,zr),e(w,Xe),e(Xe,Zr),e(w,Gr),e(w,B),g(ue,B,null),e(B,Kr),e(B,Ye),e(Ye,Xr),d(t,gt,c),d(t,I,c),e(I,M),e(M,et),g(ge,et,null),e(I,Yr),e(I,tt),e(tt,ea),d(t,vt,c),d(t,T,c),g(ve,T,null),e(T,ta),e(T,V),e(V,ra),e(V,ye),e(ye,aa),e(V,oa),e(V,rt),e(rt,na),e(V,sa),_t=!0},p:Za,i(t){_t||(v(Z.$$.fragment,t),v(G.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(ee.$$.fragment,t),v(ae.$$.fragment,t),v(oe.$$.fragment,t),v(ne.$$.fragment,t),v(se.$$.fragment,t),v(pe.$$.fragment,t),v(le.$$.fragment,t),v(me.$$.fragment,t),v(de.$$.fragment,t),v(fe.$$.fragment,t),v(he.$$.fragment,t),v(ue.$$.fragment,t),v(ge.$$.fragment,t),v(ve.$$.fragment,t),_t=!0)},o(t){_(Z.$$.fragment,t),_(G.$$.fragment,t),_(K.$$.fragment,t),_(Y.$$.fragment,t),_(ee.$$.fragment,t),_(ae.$$.fragment,t),_(oe.$$.fragment,t),_(ne.$$.fragment,t),_(se.$$.fragment,t),_(pe.$$.fragment,t),_(le.$$.fragment,t),_(me.$$.fragment,t),_(de.$$.fragment,t),_(fe.$$.fragment,t),_(he.$$.fragment,t),_(ue.$$.fragment,t),_(ge.$$.fragment,t),_(ve.$$.fragment,t),_t=!1},d(t){r(F),t&&r(ot),t&&r(x),$(Z),t&&r(nt),t&&r(_e),t&&r(st),t&&r($e),t&&r(it),t&&r(S),$(G),t&&r(pt),t&&r(A),$(K),t&&r(lt),t&&r(k),$(Y),t&&r(mt),t&&r(D),$(ee),t&&r(ct),t&&r(L),$(ae),t&&r(dt),t&&r(f),$(oe),$(ne),$(se),$(pe),t&&r(ft),t&&r(y),$(le),$(me),t&&r(ht),t&&r(E),$(de),$(fe),t&&r(ut),t&&r(w),$(he),$(ue),t&&r(gt),t&&r(I),$(ge),t&&r(vt),t&&r(T),$(ve)}}}const Xa={local:"utilities-for-pipelines",sections:[{local:"transformers.pipelines.ArgumentHandler",title:"Argument handling"},{local:"transformers.PipelineDataFormat",title:"Data format"},{local:"transformers.pipelines.PipelineException",title:"Utilities"}],title:"Utilities for pipelines"};function Ya(ia){return Ga(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ao extends Ra{constructor(F){super();Ba(this,F,Ya,Ka,Ma,{})}}export{ao as default,Xa as metadata};
