import{S as zn,i as Bn,s as Gn,e as n,k as i,w as c,t as l,L as jn,c as o,d as r,m as f,a,x as u,h as p,b as s,J as t,g as m,y as d,K as Jn,q as g,o as v,B as _}from"../../chunks/vendor-9e2b328e.js";import{D as b}from"../../chunks/Docstring-50fd6873.js";import{I as $e}from"../../chunks/IconCopyLink-fd0e58fd.js";function Un(Ht){let O,xe,y,E,Ae,ee,zt,De,Bt,ot,q,Gt,Te,jt,Jt,at,I,Ut,ye,Kt,Qt,st,N,F,qe,te,Rt,Ie,Yt,it,we,Zt,ft,C,Ee,er,be,tr,rr,Oe,nr,Ce,or,ar,Ne,sr,Pe,ir,lt,P,W,Fe,re,fr,We,lr,pt,$,ne,pr,Me,hr,mr,M,oe,cr,Xe,ur,dr,X,ae,gr,Le,vr,_r,L,se,$r,Ve,xr,yr,V,ie,wr,He,Er,ht,k,H,ze,fe,br,Be,Or,mt,S,z,le,Cr,Ge,Nr,Pr,B,pe,kr,he,Sr,je,Ar,Dr,ct,A,G,Je,me,Tr,Ue,qr,ut,ke,dt,D,j,Ke,ce,Ir,Qe,Fr,gt,J,Wr,Re,Mr,Xr,vt,T,U,Ye,ue,Lr,Ze,Vr,_t,x,K,de,Hr,et,zr,Br,Q,ge,Gr,tt,jr,Jr,R,ve,Ur,rt,Kr,Qr,Y,_e,Rr,nt,Yr,$t;return ee=new $e({}),te=new $e({}),re=new $e({}),ne=new b({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L52"}}),oe=new b({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L245",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),ae=new b({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L92",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new b({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"tokenizer",val:": PreTrainedTokenizer"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.file_utils.TensorType] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L198",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new b({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L181",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new $e({}),le=new b({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L366"}}),pe=new b({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/config.py#L275",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),me=new $e({}),ce=new $e({}),ue=new $e({}),de=new b({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/features.py#L317",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),ge=new b({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/features.py#L275",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),ve=new b({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/features.py#L294",returnDescription:`
<p>The instance of the model.</p>
`}}),_e=new b({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/onnx/features.py#L247",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){O=n("meta"),xe=i(),y=n("h1"),E=n("a"),Ae=n("span"),c(ee.$$.fragment),zt=i(),De=n("span"),Bt=l("Exporting \u{1F917} Transformers models to ONNX"),ot=i(),q=n("p"),Gt=l("\u{1F917} Transformers provides a "),Te=n("code"),jt=l("transformers.onnx"),Jt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),at=i(),I=n("p"),Ut=l("See the "),ye=n("a"),Kt=l("guide"),Qt=l(` on exporting \u{1F917} Transformers models for more
details.`),st=i(),N=n("h2"),F=n("a"),qe=n("span"),c(te.$$.fragment),Rt=i(),Ie=n("span"),Yt=l("ONNX Configurations"),it=i(),we=n("p"),Zt=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ft=i(),C=n("ul"),Ee=n("li"),er=l("Encoder-based models inherit from "),be=n("a"),tr=l("OnnxConfig"),rr=i(),Oe=n("li"),nr=l("Decoder-based models inherit from "),Ce=n("a"),or=l("OnnxConfigWithPast"),ar=i(),Ne=n("li"),sr=l("Encoder-decoder models inherit from "),Pe=n("a"),ir=l("OnnxSeq2SeqConfigWithPast"),lt=i(),P=n("h3"),W=n("a"),Fe=n("span"),c(re.$$.fragment),fr=i(),We=n("span"),lr=l("OnnxConfig"),pt=i(),$=n("div"),c(ne.$$.fragment),pr=i(),Me=n("p"),hr=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),mr=i(),M=n("div"),c(oe.$$.fragment),cr=i(),Xe=n("p"),ur=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),dr=i(),X=n("div"),c(ae.$$.fragment),gr=i(),Le=n("p"),vr=l("Instantiate a OnnxConfig for a specific model"),_r=i(),L=n("div"),c(se.$$.fragment),$r=i(),Ve=n("p"),xr=l("Generate inputs to provide to the ONNX exporter for the specific framework"),yr=i(),V=n("div"),c(ie.$$.fragment),wr=i(),He=n("p"),Er=l("Flag indicating if the model requires using external data format"),ht=i(),k=n("h3"),H=n("a"),ze=n("span"),c(fe.$$.fragment),br=i(),Be=n("span"),Or=l("OnnxConfigWithPast"),mt=i(),S=n("div"),z=n("div"),c(le.$$.fragment),Cr=i(),Ge=n("p"),Nr=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Pr=i(),B=n("div"),c(pe.$$.fragment),kr=i(),he=n("p"),Sr=l("Instantiate a OnnxConfig with "),je=n("code"),Ar=l("use_past"),Dr=l(" attribute set to True"),ct=i(),A=n("h3"),G=n("a"),Je=n("span"),c(me.$$.fragment),Tr=i(),Ue=n("span"),qr=l("OnnxSeq2SeqConfigWithPast"),ut=i(),ke=n("div"),dt=i(),D=n("h2"),j=n("a"),Ke=n("span"),c(ce.$$.fragment),Ir=i(),Qe=n("span"),Fr=l("ONNX Features"),gt=i(),J=n("p"),Wr=l("Each ONNX configuration is associated with a set of "),Re=n("em"),Mr=l("features"),Xr=l(` that enable you
to export models for different types of topologies or tasks.`),vt=i(),T=n("h3"),U=n("a"),Ye=n("span"),c(ue.$$.fragment),Lr=i(),Ze=n("span"),Vr=l("FeaturesManager"),_t=i(),x=n("div"),K=n("div"),c(de.$$.fragment),Hr=i(),et=n("p"),zr=l("Check whether or not the model has the requested features."),Br=i(),Q=n("div"),c(ge.$$.fragment),Gr=i(),tt=n("p"),jr=l("Attempt to retrieve an AutoModel class from a feature name."),Jr=i(),R=n("div"),c(ve.$$.fragment),Ur=i(),rt=n("p"),Kr=l("Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),Qr=i(),Y=n("div"),c(_e.$$.fragment),Rr=i(),nt=n("p"),Yr=l("Try to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const h=jn('[data-svelte="svelte-1phssyn"]',document.head);O=o(h,"META",{name:!0,content:!0}),h.forEach(r),xe=f(e),y=o(e,"H1",{class:!0});var xt=a(y);E=o(xt,"A",{id:!0,class:!0,href:!0});var rn=a(E);Ae=o(rn,"SPAN",{});var nn=a(Ae);u(ee.$$.fragment,nn),nn.forEach(r),rn.forEach(r),zt=f(xt),De=o(xt,"SPAN",{});var on=a(De);Bt=p(on,"Exporting \u{1F917} Transformers models to ONNX"),on.forEach(r),xt.forEach(r),ot=f(e),q=o(e,"P",{});var yt=a(q);Gt=p(yt,"\u{1F917} Transformers provides a "),Te=o(yt,"CODE",{});var an=a(Te);jt=p(an,"transformers.onnx"),an.forEach(r),Jt=p(yt,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),yt.forEach(r),at=f(e),I=o(e,"P",{});var wt=a(I);Ut=p(wt,"See the "),ye=o(wt,"A",{href:!0});var sn=a(ye);Kt=p(sn,"guide"),sn.forEach(r),Qt=p(wt,` on exporting \u{1F917} Transformers models for more
details.`),wt.forEach(r),st=f(e),N=o(e,"H2",{class:!0});var Et=a(N);F=o(Et,"A",{id:!0,class:!0,href:!0});var fn=a(F);qe=o(fn,"SPAN",{});var ln=a(qe);u(te.$$.fragment,ln),ln.forEach(r),fn.forEach(r),Rt=f(Et),Ie=o(Et,"SPAN",{});var pn=a(Ie);Yt=p(pn,"ONNX Configurations"),pn.forEach(r),Et.forEach(r),it=f(e),we=o(e,"P",{});var hn=a(we);Zt=p(hn,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),hn.forEach(r),ft=f(e),C=o(e,"UL",{});var Se=a(C);Ee=o(Se,"LI",{});var Zr=a(Ee);er=p(Zr,"Encoder-based models inherit from "),be=o(Zr,"A",{href:!0});var mn=a(be);tr=p(mn,"OnnxConfig"),mn.forEach(r),Zr.forEach(r),rr=f(Se),Oe=o(Se,"LI",{});var en=a(Oe);nr=p(en,"Decoder-based models inherit from "),Ce=o(en,"A",{href:!0});var cn=a(Ce);or=p(cn,"OnnxConfigWithPast"),cn.forEach(r),en.forEach(r),ar=f(Se),Ne=o(Se,"LI",{});var tn=a(Ne);sr=p(tn,"Encoder-decoder models inherit from "),Pe=o(tn,"A",{href:!0});var un=a(Pe);ir=p(un,"OnnxSeq2SeqConfigWithPast"),un.forEach(r),tn.forEach(r),Se.forEach(r),lt=f(e),P=o(e,"H3",{class:!0});var bt=a(P);W=o(bt,"A",{id:!0,class:!0,href:!0});var dn=a(W);Fe=o(dn,"SPAN",{});var gn=a(Fe);u(re.$$.fragment,gn),gn.forEach(r),dn.forEach(r),fr=f(bt),We=o(bt,"SPAN",{});var vn=a(We);lr=p(vn,"OnnxConfig"),vn.forEach(r),bt.forEach(r),pt=f(e),$=o(e,"DIV",{class:!0});var w=a($);u(ne.$$.fragment,w),pr=f(w),Me=o(w,"P",{});var _n=a(Me);hr=p(_n,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),_n.forEach(r),mr=f(w),M=o(w,"DIV",{class:!0});var Ot=a(M);u(oe.$$.fragment,Ot),cr=f(Ot),Xe=o(Ot,"P",{});var $n=a(Xe);ur=p($n,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),$n.forEach(r),Ot.forEach(r),dr=f(w),X=o(w,"DIV",{class:!0});var Ct=a(X);u(ae.$$.fragment,Ct),gr=f(Ct),Le=o(Ct,"P",{});var xn=a(Le);vr=p(xn,"Instantiate a OnnxConfig for a specific model"),xn.forEach(r),Ct.forEach(r),_r=f(w),L=o(w,"DIV",{class:!0});var Nt=a(L);u(se.$$.fragment,Nt),$r=f(Nt),Ve=o(Nt,"P",{});var yn=a(Ve);xr=p(yn,"Generate inputs to provide to the ONNX exporter for the specific framework"),yn.forEach(r),Nt.forEach(r),yr=f(w),V=o(w,"DIV",{class:!0});var Pt=a(V);u(ie.$$.fragment,Pt),wr=f(Pt),He=o(Pt,"P",{});var wn=a(He);Er=p(wn,"Flag indicating if the model requires using external data format"),wn.forEach(r),Pt.forEach(r),w.forEach(r),ht=f(e),k=o(e,"H3",{class:!0});var kt=a(k);H=o(kt,"A",{id:!0,class:!0,href:!0});var En=a(H);ze=o(En,"SPAN",{});var bn=a(ze);u(fe.$$.fragment,bn),bn.forEach(r),En.forEach(r),br=f(kt),Be=o(kt,"SPAN",{});var On=a(Be);Or=p(On,"OnnxConfigWithPast"),On.forEach(r),kt.forEach(r),mt=f(e),S=o(e,"DIV",{class:!0});var St=a(S);z=o(St,"DIV",{class:!0});var At=a(z);u(le.$$.fragment,At),Cr=f(At),Ge=o(At,"P",{});var Cn=a(Ge);Nr=p(Cn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Cn.forEach(r),At.forEach(r),Pr=f(St),B=o(St,"DIV",{class:!0});var Dt=a(B);u(pe.$$.fragment,Dt),kr=f(Dt),he=o(Dt,"P",{});var Tt=a(he);Sr=p(Tt,"Instantiate a OnnxConfig with "),je=o(Tt,"CODE",{});var Nn=a(je);Ar=p(Nn,"use_past"),Nn.forEach(r),Dr=p(Tt," attribute set to True"),Tt.forEach(r),Dt.forEach(r),St.forEach(r),ct=f(e),A=o(e,"H3",{class:!0});var qt=a(A);G=o(qt,"A",{id:!0,class:!0,href:!0});var Pn=a(G);Je=o(Pn,"SPAN",{});var kn=a(Je);u(me.$$.fragment,kn),kn.forEach(r),Pn.forEach(r),Tr=f(qt),Ue=o(qt,"SPAN",{});var Sn=a(Ue);qr=p(Sn,"OnnxSeq2SeqConfigWithPast"),Sn.forEach(r),qt.forEach(r),ut=f(e),ke=o(e,"DIV",{class:!0});var Hn=a(ke);Hn.forEach(r),dt=f(e),D=o(e,"H2",{class:!0});var It=a(D);j=o(It,"A",{id:!0,class:!0,href:!0});var An=a(j);Ke=o(An,"SPAN",{});var Dn=a(Ke);u(ce.$$.fragment,Dn),Dn.forEach(r),An.forEach(r),Ir=f(It),Qe=o(It,"SPAN",{});var Tn=a(Qe);Fr=p(Tn,"ONNX Features"),Tn.forEach(r),It.forEach(r),gt=f(e),J=o(e,"P",{});var Ft=a(J);Wr=p(Ft,"Each ONNX configuration is associated with a set of "),Re=o(Ft,"EM",{});var qn=a(Re);Mr=p(qn,"features"),qn.forEach(r),Xr=p(Ft,` that enable you
to export models for different types of topologies or tasks.`),Ft.forEach(r),vt=f(e),T=o(e,"H3",{class:!0});var Wt=a(T);U=o(Wt,"A",{id:!0,class:!0,href:!0});var In=a(U);Ye=o(In,"SPAN",{});var Fn=a(Ye);u(ue.$$.fragment,Fn),Fn.forEach(r),In.forEach(r),Lr=f(Wt),Ze=o(Wt,"SPAN",{});var Wn=a(Ze);Vr=p(Wn,"FeaturesManager"),Wn.forEach(r),Wt.forEach(r),_t=f(e),x=o(e,"DIV",{class:!0});var Z=a(x);K=o(Z,"DIV",{class:!0});var Mt=a(K);u(de.$$.fragment,Mt),Hr=f(Mt),et=o(Mt,"P",{});var Mn=a(et);zr=p(Mn,"Check whether or not the model has the requested features."),Mn.forEach(r),Mt.forEach(r),Br=f(Z),Q=o(Z,"DIV",{class:!0});var Xt=a(Q);u(ge.$$.fragment,Xt),Gr=f(Xt),tt=o(Xt,"P",{});var Xn=a(tt);jr=p(Xn,"Attempt to retrieve an AutoModel class from a feature name."),Xn.forEach(r),Xt.forEach(r),Jr=f(Z),R=o(Z,"DIV",{class:!0});var Lt=a(R);u(ve.$$.fragment,Lt),Ur=f(Lt),rt=o(Lt,"P",{});var Ln=a(rt);Kr=p(Ln,"Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),Ln.forEach(r),Lt.forEach(r),Qr=f(Z),Y=o(Z,"DIV",{class:!0});var Vt=a(Y);u(_e.$$.fragment,Vt),Rr=f(Vt),nt=o(Vt,"P",{});var Vn=a(nt);Yr=p(Vn,"Try to retrieve the feature -> OnnxConfig constructor map from the model type."),Vn.forEach(r),Vt.forEach(r),Z.forEach(r),this.h()},h(){s(O,"name","hf:doc:metadata"),s(O,"content",JSON.stringify(Kn)),s(E,"id","exporting-transformers-models-to-onnx"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#exporting-transformers-models-to-onnx"),s(y,"class","relative group"),s(ye,"href","../serialization"),s(F,"id","onnx-configurations"),s(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(F,"href","#onnx-configurations"),s(N,"class","relative group"),s(be,"href","/docs/transformers/pr_15811/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Ce,"href","/docs/transformers/pr_15811/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(Pe,"href","/docs/transformers/pr_15811/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(W,"id","transformers.onnx.OnnxConfig"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#transformers.onnx.OnnxConfig"),s(P,"class","relative group"),s(M,"class","docstring"),s(X,"class","docstring"),s(L,"class","docstring"),s(V,"class","docstring"),s($,"class","docstring"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(k,"class","relative group"),s(z,"class","docstring"),s(B,"class","docstring"),s(S,"class","docstring"),s(G,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(A,"class","relative group"),s(ke,"class","docstring"),s(j,"id","onnx-features"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#onnx-features"),s(D,"class","relative group"),s(U,"id","transformers.onnx.FeaturesManager"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#transformers.onnx.FeaturesManager"),s(T,"class","relative group"),s(K,"class","docstring"),s(Q,"class","docstring"),s(R,"class","docstring"),s(Y,"class","docstring"),s(x,"class","docstring")},m(e,h){t(document.head,O),m(e,xe,h),m(e,y,h),t(y,E),t(E,Ae),d(ee,Ae,null),t(y,zt),t(y,De),t(De,Bt),m(e,ot,h),m(e,q,h),t(q,Gt),t(q,Te),t(Te,jt),t(q,Jt),m(e,at,h),m(e,I,h),t(I,Ut),t(I,ye),t(ye,Kt),t(I,Qt),m(e,st,h),m(e,N,h),t(N,F),t(F,qe),d(te,qe,null),t(N,Rt),t(N,Ie),t(Ie,Yt),m(e,it,h),m(e,we,h),t(we,Zt),m(e,ft,h),m(e,C,h),t(C,Ee),t(Ee,er),t(Ee,be),t(be,tr),t(C,rr),t(C,Oe),t(Oe,nr),t(Oe,Ce),t(Ce,or),t(C,ar),t(C,Ne),t(Ne,sr),t(Ne,Pe),t(Pe,ir),m(e,lt,h),m(e,P,h),t(P,W),t(W,Fe),d(re,Fe,null),t(P,fr),t(P,We),t(We,lr),m(e,pt,h),m(e,$,h),d(ne,$,null),t($,pr),t($,Me),t(Me,hr),t($,mr),t($,M),d(oe,M,null),t(M,cr),t(M,Xe),t(Xe,ur),t($,dr),t($,X),d(ae,X,null),t(X,gr),t(X,Le),t(Le,vr),t($,_r),t($,L),d(se,L,null),t(L,$r),t(L,Ve),t(Ve,xr),t($,yr),t($,V),d(ie,V,null),t(V,wr),t(V,He),t(He,Er),m(e,ht,h),m(e,k,h),t(k,H),t(H,ze),d(fe,ze,null),t(k,br),t(k,Be),t(Be,Or),m(e,mt,h),m(e,S,h),t(S,z),d(le,z,null),t(z,Cr),t(z,Ge),t(Ge,Nr),t(S,Pr),t(S,B),d(pe,B,null),t(B,kr),t(B,he),t(he,Sr),t(he,je),t(je,Ar),t(he,Dr),m(e,ct,h),m(e,A,h),t(A,G),t(G,Je),d(me,Je,null),t(A,Tr),t(A,Ue),t(Ue,qr),m(e,ut,h),m(e,ke,h),m(e,dt,h),m(e,D,h),t(D,j),t(j,Ke),d(ce,Ke,null),t(D,Ir),t(D,Qe),t(Qe,Fr),m(e,gt,h),m(e,J,h),t(J,Wr),t(J,Re),t(Re,Mr),t(J,Xr),m(e,vt,h),m(e,T,h),t(T,U),t(U,Ye),d(ue,Ye,null),t(T,Lr),t(T,Ze),t(Ze,Vr),m(e,_t,h),m(e,x,h),t(x,K),d(de,K,null),t(K,Hr),t(K,et),t(et,zr),t(x,Br),t(x,Q),d(ge,Q,null),t(Q,Gr),t(Q,tt),t(tt,jr),t(x,Jr),t(x,R),d(ve,R,null),t(R,Ur),t(R,rt),t(rt,Kr),t(x,Qr),t(x,Y),d(_e,Y,null),t(Y,Rr),t(Y,nt),t(nt,Yr),$t=!0},p:Jn,i(e){$t||(g(ee.$$.fragment,e),g(te.$$.fragment,e),g(re.$$.fragment,e),g(ne.$$.fragment,e),g(oe.$$.fragment,e),g(ae.$$.fragment,e),g(se.$$.fragment,e),g(ie.$$.fragment,e),g(fe.$$.fragment,e),g(le.$$.fragment,e),g(pe.$$.fragment,e),g(me.$$.fragment,e),g(ce.$$.fragment,e),g(ue.$$.fragment,e),g(de.$$.fragment,e),g(ge.$$.fragment,e),g(ve.$$.fragment,e),g(_e.$$.fragment,e),$t=!0)},o(e){v(ee.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(oe.$$.fragment,e),v(ae.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(fe.$$.fragment,e),v(le.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v(_e.$$.fragment,e),$t=!1},d(e){r(O),e&&r(xe),e&&r(y),_(ee),e&&r(ot),e&&r(q),e&&r(at),e&&r(I),e&&r(st),e&&r(N),_(te),e&&r(it),e&&r(we),e&&r(ft),e&&r(C),e&&r(lt),e&&r(P),_(re),e&&r(pt),e&&r($),_(ne),_(oe),_(ae),_(se),_(ie),e&&r(ht),e&&r(k),_(fe),e&&r(mt),e&&r(S),_(le),_(pe),e&&r(ct),e&&r(A),_(me),e&&r(ut),e&&r(ke),e&&r(dt),e&&r(D),_(ce),e&&r(gt),e&&r(J),e&&r(vt),e&&r(T),_(ue),e&&r(_t),e&&r(x),_(de),_(ge),_(ve),_(_e)}}}const Kn={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function Qn(Ht,O,xe){let{fw:y}=O;return Ht.$$set=E=>{"fw"in E&&xe(0,y=E.fw)},[y]}class eo extends zn{constructor(O){super();Bn(this,O,Qn,Un,Gn,{fw:0})}}export{eo as default,Kn as metadata};
