import{S as Ra,i as Ba,s as Ma,e as a,k as p,w as h,t as s,M as za,c as o,d as r,m as l,a as n,x as u,h as i,b as m,F as e,g as c,y as g,L as Za,q as v,o as _,B as b,v as Ga}from"../../chunks/vendor-6b77c823.js";import{D as P}from"../../chunks/Docstring-17b815d9.js";import{I as Ht}from"../../chunks/IconCopyLink-7a11ce68.js";function Ka(ia){let x,ot,F,H,Le,Z,Nt,Oe,Wt,nt,_e,Jt,st,be,qt,it,S,N,Ce,G,jt,Ie,Ut,pt,A,K,Qt,X,Rt,$e,Bt,Mt,lt,k,Y,zt,Te,Zt,mt,w,ee,Gt,te,Kt,Ve,Xt,Yt,er,re,tr,He,rr,ar,dt,L,W,Ne,ae,or,We,nr,ct,f,oe,sr,Je,ir,pr,O,qe,lr,mr,je,dr,cr,Ue,fr,hr,J,Qe,ur,gr,Re,vr,_r,br,q,ne,$r,C,Pr,Pe,yr,wr,Be,Dr,Er,xr,j,se,Fr,ie,Sr,ye,Ar,kr,Lr,U,pe,Or,Me,Cr,ft,D,le,Ir,ze,Tr,Vr,Q,me,Hr,de,Nr,we,Wr,Jr,ht,E,ce,qr,Ze,jr,Ur,R,fe,Qr,Ge,Rr,ut,y,he,Br,Ke,Mr,zr,Xe,Zr,Gr,B,ue,Kr,Ye,Xr,gt,I,M,et,ge,Yr,tt,ea,vt,T,ve,ta,V,ra,De,aa,oa,rt,na,sa,_t;return Z=new Ht({}),G=new Ht({}),K=new P({props:{name:"class transformers.pipelines.ArgumentHandler",anchor:"transformers.pipelines.ArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L393"}}),Y=new P({props:{name:"class transformers.pipelines.ZeroShotClassificationArgumentHandler",anchor:"transformers.pipelines.ZeroShotClassificationArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/zero_shot_classification.py#L13"}}),ee=new P({props:{name:"class transformers.pipelines.QuestionAnsweringArgumentHandler",anchor:"transformers.pipelines.QuestionAnsweringArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/question_answering.py#L31"}}),ae=new Ht({}),oe=new P({props:{name:"class transformers.PipelineDataFormat",anchor:"transformers.PipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L403"}}),ne=new P({props:{name:"from_str",anchor:"transformers.PipelineDataFormat.from_str",parameters:[{name:"format",val:": str"},{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],parametersDescription:[{anchor:"transformers.PipelineDataFormat.from_str.output_path",description:`<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to save the outgoing data.`,name:"output_path"},{anchor:"transformers.PipelineDataFormat.from_str.input_path",description:`<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to look for the input data.`,name:"input_path"},{anchor:"transformers.PipelineDataFormat.from_str.column",description:`<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The column to read.`,name:"column"},{anchor:"transformers.PipelineDataFormat.from_str.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L480",returnDescription:`
<p>The proper data format.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16826/en/internal/pipelines_utils#transformers.PipelineDataFormat"
>PipelineDataFormat</a></p>
`}}),se=new P({props:{name:"save",anchor:"transformers.PipelineDataFormat.save",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],parametersDescription:[{anchor:"transformers.PipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L452"}}),pe=new P({props:{name:"save_binary",anchor:"transformers.PipelineDataFormat.save_binary",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],parametersDescription:[{anchor:"transformers.PipelineDataFormat.save_binary.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L462",returnDescription:`
<p>Path where the data has been saved.</p>
`,returnType:`
<p><code>str</code></p>
`}}),le=new P({props:{name:"class transformers.CsvPipelineDataFormat",anchor:"transformers.CsvPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.CsvPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.CsvPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.CsvPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L516"}}),me=new P({props:{name:"save",anchor:"transformers.CsvPipelineDataFormat.save",parameters:[{name:"data",val:": typing.List[dict]"}],parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>List[dict]</code>) &#x2014; The data to store.",name:"data"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L546"}}),ce=new P({props:{name:"class transformers.JsonPipelineDataFormat",anchor:"transformers.JsonPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.JsonPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.JsonPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.JsonPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L560"}}),fe=new P({props:{name:"save",anchor:"transformers.JsonPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L591"}}),he=new P({props:{name:"class transformers.PipedPipelineDataFormat",anchor:"transformers.PipedPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipedPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipedPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipedPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L602"}}),ue=new P({props:{name:"save",anchor:"transformers.PipedPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L632"}}),ge=new Ht({}),ve=new P({props:{name:"class transformers.pipelines.PipelineException",anchor:"transformers.pipelines.PipelineException",parameters:[{name:"task",val:": str"},{name:"model",val:": str"},{name:"reason",val:": str"}],parametersDescription:[{anchor:"transformers.pipelines.PipelineException.task",description:"<strong>task</strong> (<code>str</code>) &#x2014; The task of the pipeline.",name:"task"},{anchor:"transformers.pipelines.PipelineException.model",description:"<strong>model</strong> (<code>str</code>) &#x2014; The model used by the pipeline.",name:"model"},{anchor:"transformers.pipelines.PipelineException.reason",description:"<strong>reason</strong> (<code>str</code>) &#x2014; The error message to display.",name:"reason"}],source:"https://github.com/huggingface/transformers/blob/pr_16826/src/transformers/pipelines/base.py#L376"}}),{c(){x=a("meta"),ot=p(),F=a("h1"),H=a("a"),Le=a("span"),h(Z.$$.fragment),Nt=p(),Oe=a("span"),Wt=s("Utilities for pipelines"),nt=p(),_e=a("p"),Jt=s("This page lists all the utility functions the library provides for pipelines."),st=p(),be=a("p"),qt=s("Most of those are only useful if you are studying the code of the models in the library."),it=p(),S=a("h2"),N=a("a"),Ce=a("span"),h(G.$$.fragment),jt=p(),Ie=a("span"),Ut=s("Argument handling"),pt=p(),A=a("div"),h(K.$$.fragment),Qt=p(),X=a("p"),Rt=s("Base interface for handling arguments for each "),$e=a("a"),Bt=s("Pipeline"),Mt=s("."),lt=p(),k=a("div"),h(Y.$$.fragment),zt=p(),Te=a("p"),Zt=s(`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),mt=p(),w=a("div"),h(ee.$$.fragment),Gt=p(),te=a("p"),Kt=s(`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),Ve=a("code"),Xt=s("SquadExample"),Yt=s("."),er=p(),re=a("p"),tr=s("QuestionAnsweringArgumentHandler manages all the possible to create a "),He=a("code"),rr=s("SquadExample"),ar=s(` from the command-line
supplied arguments.`),dt=p(),L=a("h2"),W=a("a"),Ne=a("span"),h(ae.$$.fragment),or=p(),We=a("span"),nr=s("Data format"),ct=p(),f=a("div"),h(oe.$$.fragment),sr=p(),Je=a("p"),ir=s(`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),pr=p(),O=a("ul"),qe=a("li"),lr=s("JSON"),mr=p(),je=a("li"),dr=s("CSV"),cr=p(),Ue=a("li"),fr=s("stdin/stdout (pipe)"),hr=p(),J=a("p"),Qe=a("code"),ur=s("PipelineDataFormat"),gr=s(` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=a("code"),vr=s("dataset_kwarg_1=dataset_column_1"),_r=s(" format."),br=p(),q=a("div"),h(ne.$$.fragment),$r=p(),C=a("p"),Pr=s("Creates an instance of the right subclass of "),Pe=a("a"),yr=s("PipelineDataFormat"),wr=s(" depending on "),Be=a("code"),Dr=s("format"),Er=s("."),xr=p(),j=a("div"),h(se.$$.fragment),Fr=p(),ie=a("p"),Sr=s("Save the provided data object with the representation for the current "),ye=a("a"),Ar=s("PipelineDataFormat"),kr=s("."),Lr=p(),U=a("div"),h(pe.$$.fragment),Or=p(),Me=a("p"),Cr=s("Save the provided data object as a pickle-formatted binary data on the disk."),ft=p(),D=a("div"),h(le.$$.fragment),Ir=p(),ze=a("p"),Tr=s("Support for pipelines using CSV data format."),Vr=p(),Q=a("div"),h(me.$$.fragment),Hr=p(),de=a("p"),Nr=s("Save the provided data object with the representation for the current "),we=a("a"),Wr=s("PipelineDataFormat"),Jr=s("."),ht=p(),E=a("div"),h(ce.$$.fragment),qr=p(),Ze=a("p"),jr=s("Support for pipelines using JSON file format."),Ur=p(),R=a("div"),h(fe.$$.fragment),Qr=p(),Ge=a("p"),Rr=s("Save the provided data object in a json file."),ut=p(),y=a("div"),h(he.$$.fragment),Br=p(),Ke=a("p"),Mr=s("Read data from piped input to the python process. For multi columns data, columns should separated by"),zr=p(),Xe=a("p"),Zr=s("If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Gr=p(),B=a("div"),h(ue.$$.fragment),Kr=p(),Ye=a("p"),Xr=s("Print the data."),gt=p(),I=a("h2"),M=a("a"),et=a("span"),h(ge.$$.fragment),Yr=p(),tt=a("span"),ea=s("Utilities"),vt=p(),T=a("div"),h(ve.$$.fragment),ta=p(),V=a("p"),ra=s("Raised by a "),De=a("a"),aa=s("Pipeline"),oa=s(" when handling "),rt=a("strong"),na=s("call"),sa=s("."),this.h()},l(t){const d=za('[data-svelte="svelte-1phssyn"]',document.head);x=o(d,"META",{name:!0,content:!0}),d.forEach(r),ot=l(t),F=o(t,"H1",{class:!0});var bt=n(F);H=o(bt,"A",{id:!0,class:!0,href:!0});var pa=n(H);Le=o(pa,"SPAN",{});var la=n(Le);u(Z.$$.fragment,la),la.forEach(r),pa.forEach(r),Nt=l(bt),Oe=o(bt,"SPAN",{});var ma=n(Oe);Wt=i(ma,"Utilities for pipelines"),ma.forEach(r),bt.forEach(r),nt=l(t),_e=o(t,"P",{});var da=n(_e);Jt=i(da,"This page lists all the utility functions the library provides for pipelines."),da.forEach(r),st=l(t),be=o(t,"P",{});var ca=n(be);qt=i(ca,"Most of those are only useful if you are studying the code of the models in the library."),ca.forEach(r),it=l(t),S=o(t,"H2",{class:!0});var $t=n(S);N=o($t,"A",{id:!0,class:!0,href:!0});var fa=n(N);Ce=o(fa,"SPAN",{});var ha=n(Ce);u(G.$$.fragment,ha),ha.forEach(r),fa.forEach(r),jt=l($t),Ie=o($t,"SPAN",{});var ua=n(Ie);Ut=i(ua,"Argument handling"),ua.forEach(r),$t.forEach(r),pt=l(t),A=o(t,"DIV",{class:!0});var Pt=n(A);u(K.$$.fragment,Pt),Qt=l(Pt),X=o(Pt,"P",{});var yt=n(X);Rt=i(yt,"Base interface for handling arguments for each "),$e=o(yt,"A",{href:!0});var ga=n($e);Bt=i(ga,"Pipeline"),ga.forEach(r),Mt=i(yt,"."),yt.forEach(r),Pt.forEach(r),lt=l(t),k=o(t,"DIV",{class:!0});var wt=n(k);u(Y.$$.fragment,wt),zt=l(wt),Te=o(wt,"P",{});var va=n(Te);Zt=i(va,`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),va.forEach(r),wt.forEach(r),mt=l(t),w=o(t,"DIV",{class:!0});var Ee=n(w);u(ee.$$.fragment,Ee),Gt=l(Ee),te=o(Ee,"P",{});var Dt=n(te);Kt=i(Dt,`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),Ve=o(Dt,"CODE",{});var _a=n(Ve);Xt=i(_a,"SquadExample"),_a.forEach(r),Yt=i(Dt,"."),Dt.forEach(r),er=l(Ee),re=o(Ee,"P",{});var Et=n(re);tr=i(Et,"QuestionAnsweringArgumentHandler manages all the possible to create a "),He=o(Et,"CODE",{});var ba=n(He);rr=i(ba,"SquadExample"),ba.forEach(r),ar=i(Et,` from the command-line
supplied arguments.`),Et.forEach(r),Ee.forEach(r),dt=l(t),L=o(t,"H2",{class:!0});var xt=n(L);W=o(xt,"A",{id:!0,class:!0,href:!0});var $a=n(W);Ne=o($a,"SPAN",{});var Pa=n(Ne);u(ae.$$.fragment,Pa),Pa.forEach(r),$a.forEach(r),or=l(xt),We=o(xt,"SPAN",{});var ya=n(We);nr=i(ya,"Data format"),ya.forEach(r),xt.forEach(r),ct=l(t),f=o(t,"DIV",{class:!0});var $=n(f);u(oe.$$.fragment,$),sr=l($),Je=o($,"P",{});var wa=n(Je);ir=i(wa,`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),wa.forEach(r),pr=l($),O=o($,"UL",{});var xe=n(O);qe=o(xe,"LI",{});var Da=n(qe);lr=i(Da,"JSON"),Da.forEach(r),mr=l(xe),je=o(xe,"LI",{});var Ea=n(je);dr=i(Ea,"CSV"),Ea.forEach(r),cr=l(xe),Ue=o(xe,"LI",{});var xa=n(Ue);fr=i(xa,"stdin/stdout (pipe)"),xa.forEach(r),xe.forEach(r),hr=l($),J=o($,"P",{});var at=n(J);Qe=o(at,"CODE",{});var Fa=n(Qe);ur=i(Fa,"PipelineDataFormat"),Fa.forEach(r),gr=i(at,` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=o(at,"CODE",{});var Sa=n(Re);vr=i(Sa,"dataset_kwarg_1=dataset_column_1"),Sa.forEach(r),_r=i(at," format."),at.forEach(r),br=l($),q=o($,"DIV",{class:!0});var Ft=n(q);u(ne.$$.fragment,Ft),$r=l(Ft),C=o(Ft,"P",{});var Fe=n(C);Pr=i(Fe,"Creates an instance of the right subclass of "),Pe=o(Fe,"A",{href:!0});var Aa=n(Pe);yr=i(Aa,"PipelineDataFormat"),Aa.forEach(r),wr=i(Fe," depending on "),Be=o(Fe,"CODE",{});var ka=n(Be);Dr=i(ka,"format"),ka.forEach(r),Er=i(Fe,"."),Fe.forEach(r),Ft.forEach(r),xr=l($),j=o($,"DIV",{class:!0});var St=n(j);u(se.$$.fragment,St),Fr=l(St),ie=o(St,"P",{});var At=n(ie);Sr=i(At,"Save the provided data object with the representation for the current "),ye=o(At,"A",{href:!0});var La=n(ye);Ar=i(La,"PipelineDataFormat"),La.forEach(r),kr=i(At,"."),At.forEach(r),St.forEach(r),Lr=l($),U=o($,"DIV",{class:!0});var kt=n(U);u(pe.$$.fragment,kt),Or=l(kt),Me=o(kt,"P",{});var Oa=n(Me);Cr=i(Oa,"Save the provided data object as a pickle-formatted binary data on the disk."),Oa.forEach(r),kt.forEach(r),$.forEach(r),ft=l(t),D=o(t,"DIV",{class:!0});var Se=n(D);u(le.$$.fragment,Se),Ir=l(Se),ze=o(Se,"P",{});var Ca=n(ze);Tr=i(Ca,"Support for pipelines using CSV data format."),Ca.forEach(r),Vr=l(Se),Q=o(Se,"DIV",{class:!0});var Lt=n(Q);u(me.$$.fragment,Lt),Hr=l(Lt),de=o(Lt,"P",{});var Ot=n(de);Nr=i(Ot,"Save the provided data object with the representation for the current "),we=o(Ot,"A",{href:!0});var Ia=n(we);Wr=i(Ia,"PipelineDataFormat"),Ia.forEach(r),Jr=i(Ot,"."),Ot.forEach(r),Lt.forEach(r),Se.forEach(r),ht=l(t),E=o(t,"DIV",{class:!0});var Ae=n(E);u(ce.$$.fragment,Ae),qr=l(Ae),Ze=o(Ae,"P",{});var Ta=n(Ze);jr=i(Ta,"Support for pipelines using JSON file format."),Ta.forEach(r),Ur=l(Ae),R=o(Ae,"DIV",{class:!0});var Ct=n(R);u(fe.$$.fragment,Ct),Qr=l(Ct),Ge=o(Ct,"P",{});var Va=n(Ge);Rr=i(Va,"Save the provided data object in a json file."),Va.forEach(r),Ct.forEach(r),Ae.forEach(r),ut=l(t),y=o(t,"DIV",{class:!0});var z=n(y);u(he.$$.fragment,z),Br=l(z),Ke=o(z,"P",{});var Ha=n(Ke);Mr=i(Ha,"Read data from piped input to the python process. For multi columns data, columns should separated by"),Ha.forEach(r),zr=l(z),Xe=o(z,"P",{});var Na=n(Xe);Zr=i(Na,"If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Na.forEach(r),Gr=l(z),B=o(z,"DIV",{class:!0});var It=n(B);u(ue.$$.fragment,It),Kr=l(It),Ye=o(It,"P",{});var Wa=n(Ye);Xr=i(Wa,"Print the data."),Wa.forEach(r),It.forEach(r),z.forEach(r),gt=l(t),I=o(t,"H2",{class:!0});var Tt=n(I);M=o(Tt,"A",{id:!0,class:!0,href:!0});var Ja=n(M);et=o(Ja,"SPAN",{});var qa=n(et);u(ge.$$.fragment,qa),qa.forEach(r),Ja.forEach(r),Yr=l(Tt),tt=o(Tt,"SPAN",{});var ja=n(tt);ea=i(ja,"Utilities"),ja.forEach(r),Tt.forEach(r),vt=l(t),T=o(t,"DIV",{class:!0});var Vt=n(T);u(ve.$$.fragment,Vt),ta=l(Vt),V=o(Vt,"P",{});var ke=n(V);ra=i(ke,"Raised by a "),De=o(ke,"A",{href:!0});var Ua=n(De);aa=i(Ua,"Pipeline"),Ua.forEach(r),oa=i(ke," when handling "),rt=o(ke,"STRONG",{});var Qa=n(rt);na=i(Qa,"call"),Qa.forEach(r),sa=i(ke,"."),ke.forEach(r),Vt.forEach(r),this.h()},h(){m(x,"name","hf:doc:metadata"),m(x,"content",JSON.stringify(Xa)),m(H,"id","utilities-for-pipelines"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#utilities-for-pipelines"),m(F,"class","relative group"),m(N,"id","transformers.pipelines.ArgumentHandler"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#transformers.pipelines.ArgumentHandler"),m(S,"class","relative group"),m($e,"href","/docs/transformers/pr_16826/en/main_classes/pipelines#transformers.Pipeline"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"id","transformers.PipelineDataFormat"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#transformers.PipelineDataFormat"),m(L,"class","relative group"),m(Pe,"href","/docs/transformers/pr_16826/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ye,"href","/docs/transformers/pr_16826/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"href","/docs/transformers/pr_16826/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(M,"id","transformers.pipelines.PipelineException"),m(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(M,"href","#transformers.pipelines.PipelineException"),m(I,"class","relative group"),m(De,"href","/docs/transformers/pr_16826/en/main_classes/pipelines#transformers.Pipeline"),m(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,x),c(t,ot,d),c(t,F,d),e(F,H),e(H,Le),g(Z,Le,null),e(F,Nt),e(F,Oe),e(Oe,Wt),c(t,nt,d),c(t,_e,d),e(_e,Jt),c(t,st,d),c(t,be,d),e(be,qt),c(t,it,d),c(t,S,d),e(S,N),e(N,Ce),g(G,Ce,null),e(S,jt),e(S,Ie),e(Ie,Ut),c(t,pt,d),c(t,A,d),g(K,A,null),e(A,Qt),e(A,X),e(X,Rt),e(X,$e),e($e,Bt),e(X,Mt),c(t,lt,d),c(t,k,d),g(Y,k,null),e(k,zt),e(k,Te),e(Te,Zt),c(t,mt,d),c(t,w,d),g(ee,w,null),e(w,Gt),e(w,te),e(te,Kt),e(te,Ve),e(Ve,Xt),e(te,Yt),e(w,er),e(w,re),e(re,tr),e(re,He),e(He,rr),e(re,ar),c(t,dt,d),c(t,L,d),e(L,W),e(W,Ne),g(ae,Ne,null),e(L,or),e(L,We),e(We,nr),c(t,ct,d),c(t,f,d),g(oe,f,null),e(f,sr),e(f,Je),e(Je,ir),e(f,pr),e(f,O),e(O,qe),e(qe,lr),e(O,mr),e(O,je),e(je,dr),e(O,cr),e(O,Ue),e(Ue,fr),e(f,hr),e(f,J),e(J,Qe),e(Qe,ur),e(J,gr),e(J,Re),e(Re,vr),e(J,_r),e(f,br),e(f,q),g(ne,q,null),e(q,$r),e(q,C),e(C,Pr),e(C,Pe),e(Pe,yr),e(C,wr),e(C,Be),e(Be,Dr),e(C,Er),e(f,xr),e(f,j),g(se,j,null),e(j,Fr),e(j,ie),e(ie,Sr),e(ie,ye),e(ye,Ar),e(ie,kr),e(f,Lr),e(f,U),g(pe,U,null),e(U,Or),e(U,Me),e(Me,Cr),c(t,ft,d),c(t,D,d),g(le,D,null),e(D,Ir),e(D,ze),e(ze,Tr),e(D,Vr),e(D,Q),g(me,Q,null),e(Q,Hr),e(Q,de),e(de,Nr),e(de,we),e(we,Wr),e(de,Jr),c(t,ht,d),c(t,E,d),g(ce,E,null),e(E,qr),e(E,Ze),e(Ze,jr),e(E,Ur),e(E,R),g(fe,R,null),e(R,Qr),e(R,Ge),e(Ge,Rr),c(t,ut,d),c(t,y,d),g(he,y,null),e(y,Br),e(y,Ke),e(Ke,Mr),e(y,zr),e(y,Xe),e(Xe,Zr),e(y,Gr),e(y,B),g(ue,B,null),e(B,Kr),e(B,Ye),e(Ye,Xr),c(t,gt,d),c(t,I,d),e(I,M),e(M,et),g(ge,et,null),e(I,Yr),e(I,tt),e(tt,ea),c(t,vt,d),c(t,T,d),g(ve,T,null),e(T,ta),e(T,V),e(V,ra),e(V,De),e(De,aa),e(V,oa),e(V,rt),e(rt,na),e(V,sa),_t=!0},p:Za,i(t){_t||(v(Z.$$.fragment,t),v(G.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(ee.$$.fragment,t),v(ae.$$.fragment,t),v(oe.$$.fragment,t),v(ne.$$.fragment,t),v(se.$$.fragment,t),v(pe.$$.fragment,t),v(le.$$.fragment,t),v(me.$$.fragment,t),v(ce.$$.fragment,t),v(fe.$$.fragment,t),v(he.$$.fragment,t),v(ue.$$.fragment,t),v(ge.$$.fragment,t),v(ve.$$.fragment,t),_t=!0)},o(t){_(Z.$$.fragment,t),_(G.$$.fragment,t),_(K.$$.fragment,t),_(Y.$$.fragment,t),_(ee.$$.fragment,t),_(ae.$$.fragment,t),_(oe.$$.fragment,t),_(ne.$$.fragment,t),_(se.$$.fragment,t),_(pe.$$.fragment,t),_(le.$$.fragment,t),_(me.$$.fragment,t),_(ce.$$.fragment,t),_(fe.$$.fragment,t),_(he.$$.fragment,t),_(ue.$$.fragment,t),_(ge.$$.fragment,t),_(ve.$$.fragment,t),_t=!1},d(t){r(x),t&&r(ot),t&&r(F),b(Z),t&&r(nt),t&&r(_e),t&&r(st),t&&r(be),t&&r(it),t&&r(S),b(G),t&&r(pt),t&&r(A),b(K),t&&r(lt),t&&r(k),b(Y),t&&r(mt),t&&r(w),b(ee),t&&r(dt),t&&r(L),b(ae),t&&r(ct),t&&r(f),b(oe),b(ne),b(se),b(pe),t&&r(ft),t&&r(D),b(le),b(me),t&&r(ht),t&&r(E),b(ce),b(fe),t&&r(ut),t&&r(y),b(he),b(ue),t&&r(gt),t&&r(I),b(ge),t&&r(vt),t&&r(T),b(ve)}}}const Xa={local:"utilities-for-pipelines",sections:[{local:"transformers.pipelines.ArgumentHandler",title:"Argument handling"},{local:"transformers.PipelineDataFormat",title:"Data format"},{local:"transformers.pipelines.PipelineException",title:"Utilities"}],title:"Utilities for pipelines"};function Ya(ia){return Ga(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ao extends Ra{constructor(x){super();Ba(this,x,Ya,Ka,Ma,{})}}export{ao as default,Xa as metadata};
