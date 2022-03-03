import{S as Jn,i as Kn,s as Qn,e as n,k as i,w as c,t as l,M as Rn,c as a,d as r,m as f,a as o,x as u,h as p,b as s,F as t,g as h,y as g,L as Yn,q as d,o as v,B as _}from"../../chunks/vendor-4833417e.js";import{D as y}from"../../chunks/Docstring-7b52c3d4.js";import{I as be}from"../../chunks/IconCopyLink-4b81c553.js";function Zn(Gt){let C,Ee,w,E,Fe,ee,jt,We,Ut,ft,F,Jt,Ie,Kt,Qt,lt,W,Rt,Oe,Yt,Zt,pt,k,I,Le,te,er,Me,tr,mt,Ce,rr,ht,P,Pe,nr,Ne,ar,or,ke,sr,Se,ir,fr,Ae,lr,qe,pr,ct,S,L,Xe,re,mr,Ve,hr,ut,$,ne,cr,He,ur,gr,M,ae,dr,ze,vr,_r,X,oe,$r,Be,xr,yr,V,se,wr,Ge,br,Er,H,ie,Or,je,Cr,gt,A,z,Ue,fe,Pr,Je,Nr,dt,O,le,kr,B,pe,Sr,Ke,Ar,qr,G,me,Dr,he,Tr,Qe,Fr,Wr,vt,q,j,Re,ce,Ir,Ye,Lr,_t,ue,ge,$t,D,U,Ze,de,Mr,et,Xr,xt,J,Vr,tt,Hr,zr,yt,T,K,rt,ve,Br,nt,Gr,wt,x,_e,jr,Q,$e,Ur,at,Jr,Kr,R,xe,Qr,ot,Rr,Yr,Y,ye,Zr,st,en,tn,Z,we,rn,it,nn,bt;return ee=new be({}),te=new be({}),re=new be({}),ne=new y({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L52"}}),ae=new y({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L245",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),oe=new y({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L92",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new y({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"tokenizer",val:": PreTrainedTokenizer"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.file_utils.TensorType] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L198",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new y({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L181",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new be({}),le=new y({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L264"}}),pe=new y({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L366"}}),me=new y({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L275",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),ce=new be({}),ge=new y({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/config.py#L399"}}),de=new be({}),ve=new be({}),_e=new y({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/features.py#L82"}}),$e=new y({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/features.py#L321",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),xe=new y({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/features.py#L279",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),ye=new y({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/features.py#L298",returnDescription:`
<p>The instance of the model.</p>
`}}),we=new y({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15918/src/transformers/onnx/features.py#L251",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),Ee=i(),w=n("h1"),E=n("a"),Fe=n("span"),c(ee.$$.fragment),jt=i(),We=n("span"),Ut=l("Exporting \u{1F917} Transformers models to ONNX"),ft=i(),F=n("p"),Jt=l("\u{1F917} Transformers provides a "),Ie=n("code"),Kt=l("transformers.onnx"),Qt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),lt=i(),W=n("p"),Rt=l("See the "),Oe=n("a"),Yt=l("guide"),Zt=l(` on exporting \u{1F917} Transformers models for more
details.`),pt=i(),k=n("h2"),I=n("a"),Le=n("span"),c(te.$$.fragment),er=i(),Me=n("span"),tr=l("ONNX Configurations"),mt=i(),Ce=n("p"),rr=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ht=i(),P=n("ul"),Pe=n("li"),nr=l("Encoder-based models inherit from "),Ne=n("a"),ar=l("OnnxConfig"),or=i(),ke=n("li"),sr=l("Decoder-based models inherit from "),Se=n("a"),ir=l("OnnxConfigWithPast"),fr=i(),Ae=n("li"),lr=l("Encoder-decoder models inherit from "),qe=n("a"),pr=l("OnnxSeq2SeqConfigWithPast"),ct=i(),S=n("h3"),L=n("a"),Xe=n("span"),c(re.$$.fragment),mr=i(),Ve=n("span"),hr=l("OnnxConfig"),ut=i(),$=n("div"),c(ne.$$.fragment),cr=i(),He=n("p"),ur=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),gr=i(),M=n("div"),c(ae.$$.fragment),dr=i(),ze=n("p"),vr=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),_r=i(),X=n("div"),c(oe.$$.fragment),$r=i(),Be=n("p"),xr=l("Instantiate a OnnxConfig for a specific model"),yr=i(),V=n("div"),c(se.$$.fragment),wr=i(),Ge=n("p"),br=l("Generate inputs to provide to the ONNX exporter for the specific framework"),Er=i(),H=n("div"),c(ie.$$.fragment),Or=i(),je=n("p"),Cr=l("Flag indicating if the model requires using external data format"),gt=i(),A=n("h3"),z=n("a"),Ue=n("span"),c(fe.$$.fragment),Pr=i(),Je=n("span"),Nr=l("OnnxConfigWithPast"),dt=i(),O=n("div"),c(le.$$.fragment),kr=i(),B=n("div"),c(pe.$$.fragment),Sr=i(),Ke=n("p"),Ar=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),qr=i(),G=n("div"),c(me.$$.fragment),Dr=i(),he=n("p"),Tr=l("Instantiate a OnnxConfig with "),Qe=n("code"),Fr=l("use_past"),Wr=l(" attribute set to True"),vt=i(),q=n("h3"),j=n("a"),Re=n("span"),c(ce.$$.fragment),Ir=i(),Ye=n("span"),Lr=l("OnnxSeq2SeqConfigWithPast"),_t=i(),ue=n("div"),c(ge.$$.fragment),$t=i(),D=n("h2"),U=n("a"),Ze=n("span"),c(de.$$.fragment),Mr=i(),et=n("span"),Xr=l("ONNX Features"),xt=i(),J=n("p"),Vr=l("Each ONNX configuration is associated with a set of "),tt=n("em"),Hr=l("features"),zr=l(` that enable you
to export models for different types of topologies or tasks.`),yt=i(),T=n("h3"),K=n("a"),rt=n("span"),c(ve.$$.fragment),Br=i(),nt=n("span"),Gr=l("FeaturesManager"),wt=i(),x=n("div"),c(_e.$$.fragment),jr=i(),Q=n("div"),c($e.$$.fragment),Ur=i(),at=n("p"),Jr=l("Check whether or not the model has the requested features."),Kr=i(),R=n("div"),c(xe.$$.fragment),Qr=i(),ot=n("p"),Rr=l("Attempt to retrieve an AutoModel class from a feature name."),Yr=i(),Y=n("div"),c(ye.$$.fragment),Zr=i(),st=n("p"),en=l("Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),tn=i(),Z=n("div"),c(we.$$.fragment),rn=i(),it=n("p"),nn=l("Try to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const m=Rn('[data-svelte="svelte-1phssyn"]',document.head);C=a(m,"META",{name:!0,content:!0}),m.forEach(r),Ee=f(e),w=a(e,"H1",{class:!0});var Et=o(w);E=a(Et,"A",{id:!0,class:!0,href:!0});var fn=o(E);Fe=a(fn,"SPAN",{});var ln=o(Fe);u(ee.$$.fragment,ln),ln.forEach(r),fn.forEach(r),jt=f(Et),We=a(Et,"SPAN",{});var pn=o(We);Ut=p(pn,"Exporting \u{1F917} Transformers models to ONNX"),pn.forEach(r),Et.forEach(r),ft=f(e),F=a(e,"P",{});var Ot=o(F);Jt=p(Ot,"\u{1F917} Transformers provides a "),Ie=a(Ot,"CODE",{});var mn=o(Ie);Kt=p(mn,"transformers.onnx"),mn.forEach(r),Qt=p(Ot,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Ot.forEach(r),lt=f(e),W=a(e,"P",{});var Ct=o(W);Rt=p(Ct,"See the "),Oe=a(Ct,"A",{href:!0});var hn=o(Oe);Yt=p(hn,"guide"),hn.forEach(r),Zt=p(Ct,` on exporting \u{1F917} Transformers models for more
details.`),Ct.forEach(r),pt=f(e),k=a(e,"H2",{class:!0});var Pt=o(k);I=a(Pt,"A",{id:!0,class:!0,href:!0});var cn=o(I);Le=a(cn,"SPAN",{});var un=o(Le);u(te.$$.fragment,un),un.forEach(r),cn.forEach(r),er=f(Pt),Me=a(Pt,"SPAN",{});var gn=o(Me);tr=p(gn,"ONNX Configurations"),gn.forEach(r),Pt.forEach(r),mt=f(e),Ce=a(e,"P",{});var dn=o(Ce);rr=p(dn,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),dn.forEach(r),ht=f(e),P=a(e,"UL",{});var De=o(P);Pe=a(De,"LI",{});var an=o(Pe);nr=p(an,"Encoder-based models inherit from "),Ne=a(an,"A",{href:!0});var vn=o(Ne);ar=p(vn,"OnnxConfig"),vn.forEach(r),an.forEach(r),or=f(De),ke=a(De,"LI",{});var on=o(ke);sr=p(on,"Decoder-based models inherit from "),Se=a(on,"A",{href:!0});var _n=o(Se);ir=p(_n,"OnnxConfigWithPast"),_n.forEach(r),on.forEach(r),fr=f(De),Ae=a(De,"LI",{});var sn=o(Ae);lr=p(sn,"Encoder-decoder models inherit from "),qe=a(sn,"A",{href:!0});var $n=o(qe);pr=p($n,"OnnxSeq2SeqConfigWithPast"),$n.forEach(r),sn.forEach(r),De.forEach(r),ct=f(e),S=a(e,"H3",{class:!0});var Nt=o(S);L=a(Nt,"A",{id:!0,class:!0,href:!0});var xn=o(L);Xe=a(xn,"SPAN",{});var yn=o(Xe);u(re.$$.fragment,yn),yn.forEach(r),xn.forEach(r),mr=f(Nt),Ve=a(Nt,"SPAN",{});var wn=o(Ve);hr=p(wn,"OnnxConfig"),wn.forEach(r),Nt.forEach(r),ut=f(e),$=a(e,"DIV",{class:!0});var b=o($);u(ne.$$.fragment,b),cr=f(b),He=a(b,"P",{});var bn=o(He);ur=p(bn,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),bn.forEach(r),gr=f(b),M=a(b,"DIV",{class:!0});var kt=o(M);u(ae.$$.fragment,kt),dr=f(kt),ze=a(kt,"P",{});var En=o(ze);vr=p(En,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),En.forEach(r),kt.forEach(r),_r=f(b),X=a(b,"DIV",{class:!0});var St=o(X);u(oe.$$.fragment,St),$r=f(St),Be=a(St,"P",{});var On=o(Be);xr=p(On,"Instantiate a OnnxConfig for a specific model"),On.forEach(r),St.forEach(r),yr=f(b),V=a(b,"DIV",{class:!0});var At=o(V);u(se.$$.fragment,At),wr=f(At),Ge=a(At,"P",{});var Cn=o(Ge);br=p(Cn,"Generate inputs to provide to the ONNX exporter for the specific framework"),Cn.forEach(r),At.forEach(r),Er=f(b),H=a(b,"DIV",{class:!0});var qt=o(H);u(ie.$$.fragment,qt),Or=f(qt),je=a(qt,"P",{});var Pn=o(je);Cr=p(Pn,"Flag indicating if the model requires using external data format"),Pn.forEach(r),qt.forEach(r),b.forEach(r),gt=f(e),A=a(e,"H3",{class:!0});var Dt=o(A);z=a(Dt,"A",{id:!0,class:!0,href:!0});var Nn=o(z);Ue=a(Nn,"SPAN",{});var kn=o(Ue);u(fe.$$.fragment,kn),kn.forEach(r),Nn.forEach(r),Pr=f(Dt),Je=a(Dt,"SPAN",{});var Sn=o(Je);Nr=p(Sn,"OnnxConfigWithPast"),Sn.forEach(r),Dt.forEach(r),dt=f(e),O=a(e,"DIV",{class:!0});var Te=o(O);u(le.$$.fragment,Te),kr=f(Te),B=a(Te,"DIV",{class:!0});var Tt=o(B);u(pe.$$.fragment,Tt),Sr=f(Tt),Ke=a(Tt,"P",{});var An=o(Ke);Ar=p(An,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),An.forEach(r),Tt.forEach(r),qr=f(Te),G=a(Te,"DIV",{class:!0});var Ft=o(G);u(me.$$.fragment,Ft),Dr=f(Ft),he=a(Ft,"P",{});var Wt=o(he);Tr=p(Wt,"Instantiate a OnnxConfig with "),Qe=a(Wt,"CODE",{});var qn=o(Qe);Fr=p(qn,"use_past"),qn.forEach(r),Wr=p(Wt," attribute set to True"),Wt.forEach(r),Ft.forEach(r),Te.forEach(r),vt=f(e),q=a(e,"H3",{class:!0});var It=o(q);j=a(It,"A",{id:!0,class:!0,href:!0});var Dn=o(j);Re=a(Dn,"SPAN",{});var Tn=o(Re);u(ce.$$.fragment,Tn),Tn.forEach(r),Dn.forEach(r),Ir=f(It),Ye=a(It,"SPAN",{});var Fn=o(Ye);Lr=p(Fn,"OnnxSeq2SeqConfigWithPast"),Fn.forEach(r),It.forEach(r),_t=f(e),ue=a(e,"DIV",{class:!0});var Wn=o(ue);u(ge.$$.fragment,Wn),Wn.forEach(r),$t=f(e),D=a(e,"H2",{class:!0});var Lt=o(D);U=a(Lt,"A",{id:!0,class:!0,href:!0});var In=o(U);Ze=a(In,"SPAN",{});var Ln=o(Ze);u(de.$$.fragment,Ln),Ln.forEach(r),In.forEach(r),Mr=f(Lt),et=a(Lt,"SPAN",{});var Mn=o(et);Xr=p(Mn,"ONNX Features"),Mn.forEach(r),Lt.forEach(r),xt=f(e),J=a(e,"P",{});var Mt=o(J);Vr=p(Mt,"Each ONNX configuration is associated with a set of "),tt=a(Mt,"EM",{});var Xn=o(tt);Hr=p(Xn,"features"),Xn.forEach(r),zr=p(Mt,` that enable you
to export models for different types of topologies or tasks.`),Mt.forEach(r),yt=f(e),T=a(e,"H3",{class:!0});var Xt=o(T);K=a(Xt,"A",{id:!0,class:!0,href:!0});var Vn=o(K);rt=a(Vn,"SPAN",{});var Hn=o(rt);u(ve.$$.fragment,Hn),Hn.forEach(r),Vn.forEach(r),Br=f(Xt),nt=a(Xt,"SPAN",{});var zn=o(nt);Gr=p(zn,"FeaturesManager"),zn.forEach(r),Xt.forEach(r),wt=f(e),x=a(e,"DIV",{class:!0});var N=o(x);u(_e.$$.fragment,N),jr=f(N),Q=a(N,"DIV",{class:!0});var Vt=o(Q);u($e.$$.fragment,Vt),Ur=f(Vt),at=a(Vt,"P",{});var Bn=o(at);Jr=p(Bn,"Check whether or not the model has the requested features."),Bn.forEach(r),Vt.forEach(r),Kr=f(N),R=a(N,"DIV",{class:!0});var Ht=o(R);u(xe.$$.fragment,Ht),Qr=f(Ht),ot=a(Ht,"P",{});var Gn=o(ot);Rr=p(Gn,"Attempt to retrieve an AutoModel class from a feature name."),Gn.forEach(r),Ht.forEach(r),Yr=f(N),Y=a(N,"DIV",{class:!0});var zt=o(Y);u(ye.$$.fragment,zt),Zr=f(zt),st=a(zt,"P",{});var jn=o(st);en=p(jn,"Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),jn.forEach(r),zt.forEach(r),tn=f(N),Z=a(N,"DIV",{class:!0});var Bt=o(Z);u(we.$$.fragment,Bt),rn=f(Bt),it=a(Bt,"P",{});var Un=o(it);nn=p(Un,"Try to retrieve the feature -> OnnxConfig constructor map from the model type."),Un.forEach(r),Bt.forEach(r),N.forEach(r),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(ea)),s(E,"id","exporting-transformers-models-to-onnx"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#exporting-transformers-models-to-onnx"),s(w,"class","relative group"),s(Oe,"href","../serialization"),s(I,"id","onnx-configurations"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#onnx-configurations"),s(k,"class","relative group"),s(Ne,"href","/docs/transformers/pr_15918/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Se,"href","/docs/transformers/pr_15918/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(qe,"href","/docs/transformers/pr_15918/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(L,"id","transformers.onnx.OnnxConfig"),s(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(L,"href","#transformers.onnx.OnnxConfig"),s(S,"class","relative group"),s(M,"class","docstring"),s(X,"class","docstring"),s(V,"class","docstring"),s(H,"class","docstring"),s($,"class","docstring"),s(z,"id","transformers.onnx.OnnxConfigWithPast"),s(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(z,"href","#transformers.onnx.OnnxConfigWithPast"),s(A,"class","relative group"),s(B,"class","docstring"),s(G,"class","docstring"),s(O,"class","docstring"),s(j,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(q,"class","relative group"),s(ue,"class","docstring"),s(U,"id","onnx-features"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#onnx-features"),s(D,"class","relative group"),s(K,"id","transformers.onnx.FeaturesManager"),s(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(K,"href","#transformers.onnx.FeaturesManager"),s(T,"class","relative group"),s(Q,"class","docstring"),s(R,"class","docstring"),s(Y,"class","docstring"),s(Z,"class","docstring"),s(x,"class","docstring")},m(e,m){t(document.head,C),h(e,Ee,m),h(e,w,m),t(w,E),t(E,Fe),g(ee,Fe,null),t(w,jt),t(w,We),t(We,Ut),h(e,ft,m),h(e,F,m),t(F,Jt),t(F,Ie),t(Ie,Kt),t(F,Qt),h(e,lt,m),h(e,W,m),t(W,Rt),t(W,Oe),t(Oe,Yt),t(W,Zt),h(e,pt,m),h(e,k,m),t(k,I),t(I,Le),g(te,Le,null),t(k,er),t(k,Me),t(Me,tr),h(e,mt,m),h(e,Ce,m),t(Ce,rr),h(e,ht,m),h(e,P,m),t(P,Pe),t(Pe,nr),t(Pe,Ne),t(Ne,ar),t(P,or),t(P,ke),t(ke,sr),t(ke,Se),t(Se,ir),t(P,fr),t(P,Ae),t(Ae,lr),t(Ae,qe),t(qe,pr),h(e,ct,m),h(e,S,m),t(S,L),t(L,Xe),g(re,Xe,null),t(S,mr),t(S,Ve),t(Ve,hr),h(e,ut,m),h(e,$,m),g(ne,$,null),t($,cr),t($,He),t(He,ur),t($,gr),t($,M),g(ae,M,null),t(M,dr),t(M,ze),t(ze,vr),t($,_r),t($,X),g(oe,X,null),t(X,$r),t(X,Be),t(Be,xr),t($,yr),t($,V),g(se,V,null),t(V,wr),t(V,Ge),t(Ge,br),t($,Er),t($,H),g(ie,H,null),t(H,Or),t(H,je),t(je,Cr),h(e,gt,m),h(e,A,m),t(A,z),t(z,Ue),g(fe,Ue,null),t(A,Pr),t(A,Je),t(Je,Nr),h(e,dt,m),h(e,O,m),g(le,O,null),t(O,kr),t(O,B),g(pe,B,null),t(B,Sr),t(B,Ke),t(Ke,Ar),t(O,qr),t(O,G),g(me,G,null),t(G,Dr),t(G,he),t(he,Tr),t(he,Qe),t(Qe,Fr),t(he,Wr),h(e,vt,m),h(e,q,m),t(q,j),t(j,Re),g(ce,Re,null),t(q,Ir),t(q,Ye),t(Ye,Lr),h(e,_t,m),h(e,ue,m),g(ge,ue,null),h(e,$t,m),h(e,D,m),t(D,U),t(U,Ze),g(de,Ze,null),t(D,Mr),t(D,et),t(et,Xr),h(e,xt,m),h(e,J,m),t(J,Vr),t(J,tt),t(tt,Hr),t(J,zr),h(e,yt,m),h(e,T,m),t(T,K),t(K,rt),g(ve,rt,null),t(T,Br),t(T,nt),t(nt,Gr),h(e,wt,m),h(e,x,m),g(_e,x,null),t(x,jr),t(x,Q),g($e,Q,null),t(Q,Ur),t(Q,at),t(at,Jr),t(x,Kr),t(x,R),g(xe,R,null),t(R,Qr),t(R,ot),t(ot,Rr),t(x,Yr),t(x,Y),g(ye,Y,null),t(Y,Zr),t(Y,st),t(st,en),t(x,tn),t(x,Z),g(we,Z,null),t(Z,rn),t(Z,it),t(it,nn),bt=!0},p:Yn,i(e){bt||(d(ee.$$.fragment,e),d(te.$$.fragment,e),d(re.$$.fragment,e),d(ne.$$.fragment,e),d(ae.$$.fragment,e),d(oe.$$.fragment,e),d(se.$$.fragment,e),d(ie.$$.fragment,e),d(fe.$$.fragment,e),d(le.$$.fragment,e),d(pe.$$.fragment,e),d(me.$$.fragment,e),d(ce.$$.fragment,e),d(ge.$$.fragment,e),d(de.$$.fragment,e),d(ve.$$.fragment,e),d(_e.$$.fragment,e),d($e.$$.fragment,e),d(xe.$$.fragment,e),d(ye.$$.fragment,e),d(we.$$.fragment,e),bt=!0)},o(e){v(ee.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(fe.$$.fragment,e),v(le.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(ce.$$.fragment,e),v(ge.$$.fragment,e),v(de.$$.fragment,e),v(ve.$$.fragment,e),v(_e.$$.fragment,e),v($e.$$.fragment,e),v(xe.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),bt=!1},d(e){r(C),e&&r(Ee),e&&r(w),_(ee),e&&r(ft),e&&r(F),e&&r(lt),e&&r(W),e&&r(pt),e&&r(k),_(te),e&&r(mt),e&&r(Ce),e&&r(ht),e&&r(P),e&&r(ct),e&&r(S),_(re),e&&r(ut),e&&r($),_(ne),_(ae),_(oe),_(se),_(ie),e&&r(gt),e&&r(A),_(fe),e&&r(dt),e&&r(O),_(le),_(pe),_(me),e&&r(vt),e&&r(q),_(ce),e&&r(_t),e&&r(ue),_(ge),e&&r($t),e&&r(D),_(de),e&&r(xt),e&&r(J),e&&r(yt),e&&r(T),_(ve),e&&r(wt),e&&r(x),_(_e),_($e),_(xe),_(ye),_(we)}}}const ea={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function ta(Gt,C,Ee){let{fw:w}=C;return Gt.$$set=E=>{"fw"in E&&Ee(0,w=E.fw)},[w]}class oa extends Jn{constructor(C){super();Kn(this,C,ta,Zn,Qn,{fw:0})}}export{oa as default,ea as metadata};
