import{S as Rn,i as Jn,s as Kn,e as n,k as i,w as h,t as l,M as Qn,c as o,d as r,m as f,a,x as d,h as m,b as s,F as t,g as c,y as g,L as Yn,q as u,o as _,B as v,v as Zn}from"../../chunks/vendor-6b77c823.js";import{D as w}from"../../chunks/Docstring-abef54e3.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";function eo(sn){let C,it,P,A,Ae,ee,Ut,De,jt,ft,D,Gt,Me,Rt,Jt,lt,M,Kt,Ee,Qt,Yt,mt,k,W,We,te,Zt,Ie,er,pt,Oe,tr,ct,E,Ce,rr,Pe,nr,or,ke,ar,Ne,sr,ir,Te,fr,Se,lr,ht,N,I,Le,re,mr,Xe,pr,dt,x,ne,cr,Ve,hr,dr,L,oe,gr,ze,ur,_r,X,ae,vr,He,xr,$r,V,se,wr,Be,yr,br,z,ie,Er,Ue,Or,gt,T,H,je,fe,Cr,Ge,Pr,ut,b,le,kr,B,me,Nr,Re,Tr,Sr,U,pe,qr,ce,Fr,Je,Ar,Dr,_t,S,j,Ke,he,Mr,Qe,Wr,vt,de,ge,xt,q,G,Ye,ue,Ir,Ze,Lr,$t,R,Xr,et,Vr,zr,wt,F,J,tt,_e,Hr,rt,Br,yt,$,ve,Ur,K,xe,jr,nt,Gr,Rr,Q,$e,Jr,ot,Kr,Qr,Y,we,Yr,at,Zr,en,Z,ye,tn,st,rn,bt;return ee=new be({}),te=new be({}),re=new be({}),ne=new w({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L67"}}),oe=new w({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L319",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),ae=new w({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L108",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new w({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.utils.generic.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L238",parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new w({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L212",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new be({}),le=new w({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L338"}}),me=new w({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L440"}}),pe=new w({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L349",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),he=new be({}),ge=new w({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/config.py#L473"}}),ue=new be({}),_e=new be({}),ve=new w({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/features.py#L88"}}),xe=new w({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/features.py#L396",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),$e=new w({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"},{name:"framework",val:": str = 'pt'"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/features.py#L340",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),we=new w({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"},{name:"framework",val:": str = 'pt'"},{name:"cache_dir",val:": str = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/features.py#L367",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],returnDescription:`
<p>The instance of the model.</p>
`}}),ye=new w({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16505/src/transformers/onnx/features.py#L295",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the supported features for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name attribute of the model object, only used for the exception message.`,name:"model_name"}],returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),it=i(),P=n("h1"),A=n("a"),Ae=n("span"),h(ee.$$.fragment),Ut=i(),De=n("span"),jt=l("Exporting \u{1F917} Transformers models to ONNX"),ft=i(),D=n("p"),Gt=l("\u{1F917} Transformers provides a "),Me=n("code"),Rt=l("transformers.onnx"),Jt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),lt=i(),M=n("p"),Kt=l("See the "),Ee=n("a"),Qt=l("guide"),Yt=l(` on exporting \u{1F917} Transformers models for more
details.`),mt=i(),k=n("h2"),W=n("a"),We=n("span"),h(te.$$.fragment),Zt=i(),Ie=n("span"),er=l("ONNX Configurations"),pt=i(),Oe=n("p"),tr=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ct=i(),E=n("ul"),Ce=n("li"),rr=l("Encoder-based models inherit from "),Pe=n("a"),nr=l("OnnxConfig"),or=i(),ke=n("li"),ar=l("Decoder-based models inherit from "),Ne=n("a"),sr=l("OnnxConfigWithPast"),ir=i(),Te=n("li"),fr=l("Encoder-decoder models inherit from "),Se=n("a"),lr=l("OnnxSeq2SeqConfigWithPast"),ht=i(),N=n("h3"),I=n("a"),Le=n("span"),h(re.$$.fragment),mr=i(),Xe=n("span"),pr=l("OnnxConfig"),dt=i(),x=n("div"),h(ne.$$.fragment),cr=i(),Ve=n("p"),hr=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),dr=i(),L=n("div"),h(oe.$$.fragment),gr=i(),ze=n("p"),ur=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),_r=i(),X=n("div"),h(ae.$$.fragment),vr=i(),He=n("p"),xr=l("Instantiate a OnnxConfig for a specific model"),$r=i(),V=n("div"),h(se.$$.fragment),wr=i(),Be=n("p"),yr=l("Generate inputs to provide to the ONNX exporter for the specific framework"),br=i(),z=n("div"),h(ie.$$.fragment),Er=i(),Ue=n("p"),Or=l("Flag indicating if the model requires using external data format"),gt=i(),T=n("h3"),H=n("a"),je=n("span"),h(fe.$$.fragment),Cr=i(),Ge=n("span"),Pr=l("OnnxConfigWithPast"),ut=i(),b=n("div"),h(le.$$.fragment),kr=i(),B=n("div"),h(me.$$.fragment),Nr=i(),Re=n("p"),Tr=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Sr=i(),U=n("div"),h(pe.$$.fragment),qr=i(),ce=n("p"),Fr=l("Instantiate a OnnxConfig with "),Je=n("code"),Ar=l("use_past"),Dr=l(" attribute set to True"),_t=i(),S=n("h3"),j=n("a"),Ke=n("span"),h(he.$$.fragment),Mr=i(),Qe=n("span"),Wr=l("OnnxSeq2SeqConfigWithPast"),vt=i(),de=n("div"),h(ge.$$.fragment),xt=i(),q=n("h2"),G=n("a"),Ye=n("span"),h(ue.$$.fragment),Ir=i(),Ze=n("span"),Lr=l("ONNX Features"),$t=i(),R=n("p"),Xr=l("Each ONNX configuration is associated with a set of "),et=n("em"),Vr=l("features"),zr=l(` that enable you
to export models for different types of topologies or tasks.`),wt=i(),F=n("h3"),J=n("a"),tt=n("span"),h(_e.$$.fragment),Hr=i(),rt=n("span"),Br=l("FeaturesManager"),yt=i(),$=n("div"),h(ve.$$.fragment),Ur=i(),K=n("div"),h(xe.$$.fragment),jr=i(),nt=n("p"),Gr=l("Check whether or not the model has the requested features."),Rr=i(),Q=n("div"),h($e.$$.fragment),Jr=i(),ot=n("p"),Kr=l("Attempts to retrieve an AutoModel class from a feature name."),Qr=i(),Y=n("div"),h(we.$$.fragment),Yr=i(),at=n("p"),Zr=l("Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),en=i(),Z=n("div"),h(ye.$$.fragment),tn=i(),st=n("p"),rn=l("Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const p=Qn('[data-svelte="svelte-1phssyn"]',document.head);C=o(p,"META",{name:!0,content:!0}),p.forEach(r),it=f(e),P=o(e,"H1",{class:!0});var Et=a(P);A=o(Et,"A",{id:!0,class:!0,href:!0});var fn=a(A);Ae=o(fn,"SPAN",{});var ln=a(Ae);d(ee.$$.fragment,ln),ln.forEach(r),fn.forEach(r),Ut=f(Et),De=o(Et,"SPAN",{});var mn=a(De);jt=m(mn,"Exporting \u{1F917} Transformers models to ONNX"),mn.forEach(r),Et.forEach(r),ft=f(e),D=o(e,"P",{});var Ot=a(D);Gt=m(Ot,"\u{1F917} Transformers provides a "),Me=o(Ot,"CODE",{});var pn=a(Me);Rt=m(pn,"transformers.onnx"),pn.forEach(r),Jt=m(Ot,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Ot.forEach(r),lt=f(e),M=o(e,"P",{});var Ct=a(M);Kt=m(Ct,"See the "),Ee=o(Ct,"A",{href:!0});var cn=a(Ee);Qt=m(cn,"guide"),cn.forEach(r),Yt=m(Ct,` on exporting \u{1F917} Transformers models for more
details.`),Ct.forEach(r),mt=f(e),k=o(e,"H2",{class:!0});var Pt=a(k);W=o(Pt,"A",{id:!0,class:!0,href:!0});var hn=a(W);We=o(hn,"SPAN",{});var dn=a(We);d(te.$$.fragment,dn),dn.forEach(r),hn.forEach(r),Zt=f(Pt),Ie=o(Pt,"SPAN",{});var gn=a(Ie);er=m(gn,"ONNX Configurations"),gn.forEach(r),Pt.forEach(r),pt=f(e),Oe=o(e,"P",{});var un=a(Oe);tr=m(un,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),un.forEach(r),ct=f(e),E=o(e,"UL",{});var qe=a(E);Ce=o(qe,"LI",{});var nn=a(Ce);rr=m(nn,"Encoder-based models inherit from "),Pe=o(nn,"A",{href:!0});var _n=a(Pe);nr=m(_n,"OnnxConfig"),_n.forEach(r),nn.forEach(r),or=f(qe),ke=o(qe,"LI",{});var on=a(ke);ar=m(on,"Decoder-based models inherit from "),Ne=o(on,"A",{href:!0});var vn=a(Ne);sr=m(vn,"OnnxConfigWithPast"),vn.forEach(r),on.forEach(r),ir=f(qe),Te=o(qe,"LI",{});var an=a(Te);fr=m(an,"Encoder-decoder models inherit from "),Se=o(an,"A",{href:!0});var xn=a(Se);lr=m(xn,"OnnxSeq2SeqConfigWithPast"),xn.forEach(r),an.forEach(r),qe.forEach(r),ht=f(e),N=o(e,"H3",{class:!0});var kt=a(N);I=o(kt,"A",{id:!0,class:!0,href:!0});var $n=a(I);Le=o($n,"SPAN",{});var wn=a(Le);d(re.$$.fragment,wn),wn.forEach(r),$n.forEach(r),mr=f(kt),Xe=o(kt,"SPAN",{});var yn=a(Xe);pr=m(yn,"OnnxConfig"),yn.forEach(r),kt.forEach(r),dt=f(e),x=o(e,"DIV",{class:!0});var y=a(x);d(ne.$$.fragment,y),cr=f(y),Ve=o(y,"P",{});var bn=a(Ve);hr=m(bn,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),bn.forEach(r),dr=f(y),L=o(y,"DIV",{class:!0});var Nt=a(L);d(oe.$$.fragment,Nt),gr=f(Nt),ze=o(Nt,"P",{});var En=a(ze);ur=m(En,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),En.forEach(r),Nt.forEach(r),_r=f(y),X=o(y,"DIV",{class:!0});var Tt=a(X);d(ae.$$.fragment,Tt),vr=f(Tt),He=o(Tt,"P",{});var On=a(He);xr=m(On,"Instantiate a OnnxConfig for a specific model"),On.forEach(r),Tt.forEach(r),$r=f(y),V=o(y,"DIV",{class:!0});var St=a(V);d(se.$$.fragment,St),wr=f(St),Be=o(St,"P",{});var Cn=a(Be);yr=m(Cn,"Generate inputs to provide to the ONNX exporter for the specific framework"),Cn.forEach(r),St.forEach(r),br=f(y),z=o(y,"DIV",{class:!0});var qt=a(z);d(ie.$$.fragment,qt),Er=f(qt),Ue=o(qt,"P",{});var Pn=a(Ue);Or=m(Pn,"Flag indicating if the model requires using external data format"),Pn.forEach(r),qt.forEach(r),y.forEach(r),gt=f(e),T=o(e,"H3",{class:!0});var Ft=a(T);H=o(Ft,"A",{id:!0,class:!0,href:!0});var kn=a(H);je=o(kn,"SPAN",{});var Nn=a(je);d(fe.$$.fragment,Nn),Nn.forEach(r),kn.forEach(r),Cr=f(Ft),Ge=o(Ft,"SPAN",{});var Tn=a(Ge);Pr=m(Tn,"OnnxConfigWithPast"),Tn.forEach(r),Ft.forEach(r),ut=f(e),b=o(e,"DIV",{class:!0});var Fe=a(b);d(le.$$.fragment,Fe),kr=f(Fe),B=o(Fe,"DIV",{class:!0});var At=a(B);d(me.$$.fragment,At),Nr=f(At),Re=o(At,"P",{});var Sn=a(Re);Tr=m(Sn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Sn.forEach(r),At.forEach(r),Sr=f(Fe),U=o(Fe,"DIV",{class:!0});var Dt=a(U);d(pe.$$.fragment,Dt),qr=f(Dt),ce=o(Dt,"P",{});var Mt=a(ce);Fr=m(Mt,"Instantiate a OnnxConfig with "),Je=o(Mt,"CODE",{});var qn=a(Je);Ar=m(qn,"use_past"),qn.forEach(r),Dr=m(Mt," attribute set to True"),Mt.forEach(r),Dt.forEach(r),Fe.forEach(r),_t=f(e),S=o(e,"H3",{class:!0});var Wt=a(S);j=o(Wt,"A",{id:!0,class:!0,href:!0});var Fn=a(j);Ke=o(Fn,"SPAN",{});var An=a(Ke);d(he.$$.fragment,An),An.forEach(r),Fn.forEach(r),Mr=f(Wt),Qe=o(Wt,"SPAN",{});var Dn=a(Qe);Wr=m(Dn,"OnnxSeq2SeqConfigWithPast"),Dn.forEach(r),Wt.forEach(r),vt=f(e),de=o(e,"DIV",{class:!0});var Mn=a(de);d(ge.$$.fragment,Mn),Mn.forEach(r),xt=f(e),q=o(e,"H2",{class:!0});var It=a(q);G=o(It,"A",{id:!0,class:!0,href:!0});var Wn=a(G);Ye=o(Wn,"SPAN",{});var In=a(Ye);d(ue.$$.fragment,In),In.forEach(r),Wn.forEach(r),Ir=f(It),Ze=o(It,"SPAN",{});var Ln=a(Ze);Lr=m(Ln,"ONNX Features"),Ln.forEach(r),It.forEach(r),$t=f(e),R=o(e,"P",{});var Lt=a(R);Xr=m(Lt,"Each ONNX configuration is associated with a set of "),et=o(Lt,"EM",{});var Xn=a(et);Vr=m(Xn,"features"),Xn.forEach(r),zr=m(Lt,` that enable you
to export models for different types of topologies or tasks.`),Lt.forEach(r),wt=f(e),F=o(e,"H3",{class:!0});var Xt=a(F);J=o(Xt,"A",{id:!0,class:!0,href:!0});var Vn=a(J);tt=o(Vn,"SPAN",{});var zn=a(tt);d(_e.$$.fragment,zn),zn.forEach(r),Vn.forEach(r),Hr=f(Xt),rt=o(Xt,"SPAN",{});var Hn=a(rt);Br=m(Hn,"FeaturesManager"),Hn.forEach(r),Xt.forEach(r),yt=f(e),$=o(e,"DIV",{class:!0});var O=a($);d(ve.$$.fragment,O),Ur=f(O),K=o(O,"DIV",{class:!0});var Vt=a(K);d(xe.$$.fragment,Vt),jr=f(Vt),nt=o(Vt,"P",{});var Bn=a(nt);Gr=m(Bn,"Check whether or not the model has the requested features."),Bn.forEach(r),Vt.forEach(r),Rr=f(O),Q=o(O,"DIV",{class:!0});var zt=a(Q);d($e.$$.fragment,zt),Jr=f(zt),ot=o(zt,"P",{});var Un=a(ot);Kr=m(Un,"Attempts to retrieve an AutoModel class from a feature name."),Un.forEach(r),zt.forEach(r),Qr=f(O),Y=o(O,"DIV",{class:!0});var Ht=a(Y);d(we.$$.fragment,Ht),Yr=f(Ht),at=o(Ht,"P",{});var jn=a(at);Zr=m(jn,"Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),jn.forEach(r),Ht.forEach(r),en=f(O),Z=o(O,"DIV",{class:!0});var Bt=a(Z);d(ye.$$.fragment,Bt),tn=f(Bt),st=o(Bt,"P",{});var Gn=a(st);rn=m(Gn,"Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),Gn.forEach(r),Bt.forEach(r),O.forEach(r),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(to)),s(A,"id","exporting-transformers-models-to-onnx"),s(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(A,"href","#exporting-transformers-models-to-onnx"),s(P,"class","relative group"),s(Ee,"href","../serialization"),s(W,"id","onnx-configurations"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#onnx-configurations"),s(k,"class","relative group"),s(Pe,"href","/docs/transformers/pr_16505/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Ne,"href","/docs/transformers/pr_16505/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(Se,"href","/docs/transformers/pr_16505/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(I,"id","transformers.onnx.OnnxConfig"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#transformers.onnx.OnnxConfig"),s(N,"class","relative group"),s(L,"class","docstring"),s(X,"class","docstring"),s(V,"class","docstring"),s(z,"class","docstring"),s(x,"class","docstring"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(T,"class","relative group"),s(B,"class","docstring"),s(U,"class","docstring"),s(b,"class","docstring"),s(j,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(S,"class","relative group"),s(de,"class","docstring"),s(G,"id","onnx-features"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#onnx-features"),s(q,"class","relative group"),s(J,"id","transformers.onnx.FeaturesManager"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#transformers.onnx.FeaturesManager"),s(F,"class","relative group"),s(K,"class","docstring"),s(Q,"class","docstring"),s(Y,"class","docstring"),s(Z,"class","docstring"),s($,"class","docstring")},m(e,p){t(document.head,C),c(e,it,p),c(e,P,p),t(P,A),t(A,Ae),g(ee,Ae,null),t(P,Ut),t(P,De),t(De,jt),c(e,ft,p),c(e,D,p),t(D,Gt),t(D,Me),t(Me,Rt),t(D,Jt),c(e,lt,p),c(e,M,p),t(M,Kt),t(M,Ee),t(Ee,Qt),t(M,Yt),c(e,mt,p),c(e,k,p),t(k,W),t(W,We),g(te,We,null),t(k,Zt),t(k,Ie),t(Ie,er),c(e,pt,p),c(e,Oe,p),t(Oe,tr),c(e,ct,p),c(e,E,p),t(E,Ce),t(Ce,rr),t(Ce,Pe),t(Pe,nr),t(E,or),t(E,ke),t(ke,ar),t(ke,Ne),t(Ne,sr),t(E,ir),t(E,Te),t(Te,fr),t(Te,Se),t(Se,lr),c(e,ht,p),c(e,N,p),t(N,I),t(I,Le),g(re,Le,null),t(N,mr),t(N,Xe),t(Xe,pr),c(e,dt,p),c(e,x,p),g(ne,x,null),t(x,cr),t(x,Ve),t(Ve,hr),t(x,dr),t(x,L),g(oe,L,null),t(L,gr),t(L,ze),t(ze,ur),t(x,_r),t(x,X),g(ae,X,null),t(X,vr),t(X,He),t(He,xr),t(x,$r),t(x,V),g(se,V,null),t(V,wr),t(V,Be),t(Be,yr),t(x,br),t(x,z),g(ie,z,null),t(z,Er),t(z,Ue),t(Ue,Or),c(e,gt,p),c(e,T,p),t(T,H),t(H,je),g(fe,je,null),t(T,Cr),t(T,Ge),t(Ge,Pr),c(e,ut,p),c(e,b,p),g(le,b,null),t(b,kr),t(b,B),g(me,B,null),t(B,Nr),t(B,Re),t(Re,Tr),t(b,Sr),t(b,U),g(pe,U,null),t(U,qr),t(U,ce),t(ce,Fr),t(ce,Je),t(Je,Ar),t(ce,Dr),c(e,_t,p),c(e,S,p),t(S,j),t(j,Ke),g(he,Ke,null),t(S,Mr),t(S,Qe),t(Qe,Wr),c(e,vt,p),c(e,de,p),g(ge,de,null),c(e,xt,p),c(e,q,p),t(q,G),t(G,Ye),g(ue,Ye,null),t(q,Ir),t(q,Ze),t(Ze,Lr),c(e,$t,p),c(e,R,p),t(R,Xr),t(R,et),t(et,Vr),t(R,zr),c(e,wt,p),c(e,F,p),t(F,J),t(J,tt),g(_e,tt,null),t(F,Hr),t(F,rt),t(rt,Br),c(e,yt,p),c(e,$,p),g(ve,$,null),t($,Ur),t($,K),g(xe,K,null),t(K,jr),t(K,nt),t(nt,Gr),t($,Rr),t($,Q),g($e,Q,null),t(Q,Jr),t(Q,ot),t(ot,Kr),t($,Qr),t($,Y),g(we,Y,null),t(Y,Yr),t(Y,at),t(at,Zr),t($,en),t($,Z),g(ye,Z,null),t(Z,tn),t(Z,st),t(st,rn),bt=!0},p:Yn,i(e){bt||(u(ee.$$.fragment,e),u(te.$$.fragment,e),u(re.$$.fragment,e),u(ne.$$.fragment,e),u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(fe.$$.fragment,e),u(le.$$.fragment,e),u(me.$$.fragment,e),u(pe.$$.fragment,e),u(he.$$.fragment,e),u(ge.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(we.$$.fragment,e),u(ye.$$.fragment,e),bt=!0)},o(e){_(ee.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(ie.$$.fragment,e),_(fe.$$.fragment,e),_(le.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(he.$$.fragment,e),_(ge.$$.fragment,e),_(ue.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(ye.$$.fragment,e),bt=!1},d(e){r(C),e&&r(it),e&&r(P),v(ee),e&&r(ft),e&&r(D),e&&r(lt),e&&r(M),e&&r(mt),e&&r(k),v(te),e&&r(pt),e&&r(Oe),e&&r(ct),e&&r(E),e&&r(ht),e&&r(N),v(re),e&&r(dt),e&&r(x),v(ne),v(oe),v(ae),v(se),v(ie),e&&r(gt),e&&r(T),v(fe),e&&r(ut),e&&r(b),v(le),v(me),v(pe),e&&r(_t),e&&r(S),v(he),e&&r(vt),e&&r(de),v(ge),e&&r(xt),e&&r(q),v(ue),e&&r($t),e&&r(R),e&&r(wt),e&&r(F),v(_e),e&&r(yt),e&&r($),v(ve),v(xe),v($e),v(we),v(ye)}}}const to={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function ro(sn){return Zn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class so extends Rn{constructor(C){super();Jn(this,C,ro,eo,Kn,{})}}export{so as default,to as metadata};
