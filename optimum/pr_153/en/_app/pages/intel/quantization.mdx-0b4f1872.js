import{S as an,i as rn,s as sn,e as o,k as d,w as O,t as c,M as cn,c as a,d as n,m as u,a as i,x as D,h as l,b as r,F as t,g as m,y as A,L as ln,q as L,o as S,B as U,v as mn}from"../../chunks/vendor-4918fc3c.js";import{D as _e}from"../../chunks/Docstring-02f0cd65.js";import{I as Fe}from"../../chunks/IconCopyLink-21d338b1.js";function dn(He){let f,Z,h,b,H,x,ze,j,ve,ee,p,be,V,ye,Ie,E,we,qe,ne,g,y,W,C,$e,B,Qe,te,I,xe,R,Ee,Ce,oe,_,N,Ne,w,M,Me,J,ke,ae,z,q,G,k,Pe,K,Te,ie,$,Oe,X,De,Ae,re,v,P,Le,Q,T,Se,Y,Ue,se;return x=new Fe({}),C=new Fe({}),N=new _e({props:{name:"class optimum.intel.IncQuantizer",anchor:"optimum.intel.IncQuantizer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module]"},{name:"config_path_or_obj",val:": typing.Union[str, optimum.intel.neural_compressor.configuration.IncQuantizationConfig]"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"eval_func",val:": typing.Optional[typing.Callable] = None"},{name:"train_func",val:": typing.Optional[typing.Callable] = None"},{name:"calib_dataloader",val:": typing.Optional[torch.utils.data.dataloader.DataLoader] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_153/src/optimum/intel/neural_compressor/quantization.py#L53"}}),M=new _e({props:{name:"from_config",anchor:"optimum.intel.IncQuantizer.from_config",parameters:[{name:"model_name_or_path",val:": str"},{name:"inc_config",val:": typing.Union[optimum.intel.neural_compressor.configuration.IncQuantizationConfig, str, NoneType] = None"},{name:"config_name",val:": str = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.intel.IncQuantizer.from_config.model_name_or_path",description:`<strong>model_name_or_path</strong> (<code>str</code>) &#x2014;
Repository name in the Hugging Face Hub or path to a local directory hosting the model.`,name:"model_name_or_path"},{anchor:"optimum.intel.IncQuantizer.from_config.inc_config",description:`<strong>inc_config</strong> (<code>Union[IncQuantizationConfig, str]</code>, <em>optional</em>) &#x2014;
Configuration file containing all the information related to the model quantization.
Can be either:<ul>
<li>an instance of the class <code>IncQuantizationConfig</code>,</li>
<li>a string valid as input to <code>IncQuantizationConfig.from_pretrained</code>.</li>
</ul>`,name:"inc_config"},{anchor:"optimum.intel.IncQuantizer.from_config.config_name",description:`<strong>config_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the configuration file.`,name:"config_name"},{anchor:"optimum.intel.IncQuantizer.from_config.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded configuration should be cached if the standard cache should
not be used.`,name:"cache_dir"},{anchor:"optimum.intel.IncQuantizer.from_config.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"optimum.intel.IncQuantizer.from_config.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"optimum.intel.IncQuantizer.from_config.revision(str,",description:`<strong>revision(<code>str</code>,</strong> <em>optional</em>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision(str,"},{anchor:"optimum.intel.IncQuantizer.from_config.calib_dataloader",description:`<strong>calib_dataloader</strong> (<code>DataLoader</code>, <em>optional</em>) &#x2014;
DataLoader for post-training quantization calibration.`,name:"calib_dataloader"},{anchor:"optimum.intel.IncQuantizer.from_config.eval_func",description:`<strong>eval_func</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
Evaluation function to evaluate the tuning objective.`,name:"eval_func"},{anchor:"optimum.intel.IncQuantizer.from_config.train_func",description:`<strong>train_func</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
Training function for quantization aware training approach.`,name:"train_func"}],source:"https://github.com/huggingface/optimum/blob/pr_153/src/optimum/intel/neural_compressor/quantization.py#L179",returnDescription:`
<p>IncQuantizer object.</p>
`,returnType:`
<p>quantizer</p>
`}}),k=new Fe({}),P=new _e({props:{name:"class optimum.intel.neural_compressor.quantization.IncQuantizedModel",anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/optimum/blob/pr_153/src/optimum/intel/neural_compressor/quantization.py#L349"}}),T=new _e({props:{name:"from_pretrained",anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained",parameters:[{name:"model_name_or_path",val:": str"},{name:"inc_config",val:": typing.Union[optimum.intel.neural_compressor.configuration.IncOptimizedConfig, str] = None"},{name:"q_model_name",val:": typing.Optional[str] = None"},{name:"input_names",val:": typing.Optional[typing.List[str]] = None"},{name:"batch_size",val:": typing.Optional[int] = None"},{name:"sequence_length",val:": typing.Union[int, typing.List[int], typing.Tuple[int], NoneType] = None"},{name:"num_choices",val:": typing.Optional[int] = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.model_name_or_path",description:`<strong>model_name_or_path</strong> (<code>str</code>) &#x2014;
Repository name in the Hugging Face Hub or path to a local directory hosting the model.`,name:"model_name_or_path"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.inc_config",description:`<strong>inc_config</strong> (<code>Union[IncOptimizedConfig, str]</code>, <em>optional</em>) &#x2014;
Configuration file containing all the information related to the model quantization.
Can be either:<ul>
<li>an instance of the class <code>IncOptimizedConfig</code>,</li>
<li>a string valid as input to <code>IncOptimizedConfig.from_pretrained</code>.</li>
</ul>`,name:"inc_config"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.q_model_name",description:`<strong>q_model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the state dictionary located in model_name_or_path used to load the quantized model. If
state_dict is specified, the latter will not be used.`,name:"q_model_name"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.input_names",description:`<strong>input_names</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of names of the inputs used when tracing the model. If unset, model.dummy_inputs().keys() are used
instead.`,name:"input_names"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size of the traced model inputs.`,name:"batch_size"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.sequence_length",description:`<strong>sequence_length</strong> (<code>Union[int, List[int], Tuple[int]]</code>, <em>optional</em>) &#x2014;
Sequence length of the traced model inputs. For sequence-to-sequence models with different sequence
lengths between the encoder and the decoder inputs, this must be <code>[encoder_sequence_length, decoder_sequence_length]</code>.`,name:"sequence_length"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.num_choices",description:`<strong>num_choices</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of possible choices for a multiple choice task.`,name:"num_choices"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded configuration should be cached if the standard cache should
not be used.`,name:"cache_dir"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.revision(str,",description:`<strong>revision(<code>str</code>,</strong> <em>optional</em>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision(str,"},{anchor:"optimum.intel.neural_compressor.quantization.IncQuantizedModel.from_pretrained.state_dict",description:`<strong>state_dict</strong> (<code>Dict[str, torch.Tensor]</code>, <em>optional</em>) &#x2014;
State dictionary of the quantized model, if not specified q_model_name will be used to load the
state dictionary.`,name:"state_dict"}],source:"https://github.com/huggingface/optimum/blob/pr_153/src/optimum/intel/neural_compressor/quantization.py#L359",returnDescription:`
<p>Quantized model.</p>
`,returnType:`
<p>q_model</p>
`}}),{c(){f=o("meta"),Z=d(),h=o("h1"),b=o("a"),H=o("span"),O(x.$$.fragment),ze=d(),j=o("span"),ve=c("Quantization"),ee=d(),p=o("p"),be=c("\u{1F917} Optimum provides an "),V=o("code"),ye=c("optimum.intel.neural_compressor"),Ie=c(" package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),E=o("a"),we=c("Intel Neural Compressor"),qe=c(" quantization API."),ne=d(),g=o("h2"),y=o("a"),W=o("span"),O(C.$$.fragment),$e=d(),B=o("span"),Qe=c("IncQuantizer"),te=d(),I=o("p"),xe=c("The "),R=o("code"),Ee=c("IncQuantizer"),Ce=c(" class allows to apply different quantization approaches such as static, dynamic and aware training quantization using pytorch eager or fx graph mode."),oe=d(),_=o("div"),O(N.$$.fragment),Ne=d(),w=o("div"),O(M.$$.fragment),Me=d(),J=o("p"),ke=c(`Instantiate a IncQuantizer object from a configuration file which can either be hosted on huggingface.co or
from a local directory path.`),ae=d(),z=o("h2"),q=o("a"),G=o("span"),O(k.$$.fragment),Pe=d(),K=o("span"),Te=c("IncQuantizedModel"),ie=d(),$=o("p"),Oe=c("The "),X=o("code"),De=c("IncQuantizedModel"),Ae=c(" class allows to load a quantized pytorch model from a given configuration file summarizing the quantization performed by Intel\xAE Neural Compressor."),re=d(),v=o("div"),O(P.$$.fragment),Le=d(),Q=o("div"),O(T.$$.fragment),Se=d(),Y=o("p"),Ue=c("Instantiate a quantized pytorch model from a given Intel Neural Compressor (INC) configuration file."),this.h()},l(e){const s=cn('[data-svelte="svelte-1phssyn"]',document.head);f=a(s,"META",{name:!0,content:!0}),s.forEach(n),Z=u(e),h=a(e,"H1",{class:!0});var ce=i(h);b=a(ce,"A",{id:!0,class:!0,href:!0});var je=i(b);H=a(je,"SPAN",{});var Ve=i(H);D(x.$$.fragment,Ve),Ve.forEach(n),je.forEach(n),ze=u(ce),j=a(ce,"SPAN",{});var We=i(j);ve=l(We,"Quantization"),We.forEach(n),ce.forEach(n),ee=u(e),p=a(e,"P",{});var F=i(p);be=l(F,"\u{1F917} Optimum provides an "),V=a(F,"CODE",{});var Be=i(V);ye=l(Be,"optimum.intel.neural_compressor"),Be.forEach(n),Ie=l(F," package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),E=a(F,"A",{href:!0,rel:!0});var Re=i(E);we=l(Re,"Intel Neural Compressor"),Re.forEach(n),qe=l(F," quantization API."),F.forEach(n),ne=u(e),g=a(e,"H2",{class:!0});var le=i(g);y=a(le,"A",{id:!0,class:!0,href:!0});var Je=i(y);W=a(Je,"SPAN",{});var Ge=i(W);D(C.$$.fragment,Ge),Ge.forEach(n),Je.forEach(n),$e=u(le),B=a(le,"SPAN",{});var Ke=i(B);Qe=l(Ke,"IncQuantizer"),Ke.forEach(n),le.forEach(n),te=u(e),I=a(e,"P",{});var me=i(I);xe=l(me,"The "),R=a(me,"CODE",{});var Xe=i(R);Ee=l(Xe,"IncQuantizer"),Xe.forEach(n),Ce=l(me," class allows to apply different quantization approaches such as static, dynamic and aware training quantization using pytorch eager or fx graph mode."),me.forEach(n),oe=u(e),_=a(e,"DIV",{class:!0});var de=i(_);D(N.$$.fragment,de),Ne=u(de),w=a(de,"DIV",{class:!0});var ue=i(w);D(M.$$.fragment,ue),Me=u(ue),J=a(ue,"P",{});var Ye=i(J);ke=l(Ye,`Instantiate a IncQuantizer object from a configuration file which can either be hosted on huggingface.co or
from a local directory path.`),Ye.forEach(n),ue.forEach(n),de.forEach(n),ae=u(e),z=a(e,"H2",{class:!0});var pe=i(z);q=a(pe,"A",{id:!0,class:!0,href:!0});var Ze=i(q);G=a(Ze,"SPAN",{});var en=i(G);D(k.$$.fragment,en),en.forEach(n),Ze.forEach(n),Pe=u(pe),K=a(pe,"SPAN",{});var nn=i(K);Te=l(nn,"IncQuantizedModel"),nn.forEach(n),pe.forEach(n),ie=u(e),$=a(e,"P",{});var fe=i($);Oe=l(fe,"The "),X=a(fe,"CODE",{});var tn=i(X);De=l(tn,"IncQuantizedModel"),tn.forEach(n),Ae=l(fe," class allows to load a quantized pytorch model from a given configuration file summarizing the quantization performed by Intel\xAE Neural Compressor."),fe.forEach(n),re=u(e),v=a(e,"DIV",{class:!0});var he=i(v);D(P.$$.fragment,he),Le=u(he),Q=a(he,"DIV",{class:!0});var ge=i(Q);D(T.$$.fragment,ge),Se=u(ge),Y=a(ge,"P",{});var on=i(Y);Ue=l(on,"Instantiate a quantized pytorch model from a given Intel Neural Compressor (INC) configuration file."),on.forEach(n),ge.forEach(n),he.forEach(n),this.h()},h(){r(f,"name","hf:doc:metadata"),r(f,"content",JSON.stringify(un)),r(b,"id","quantization"),r(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(b,"href","#quantization"),r(h,"class","relative group"),r(E,"href","https://github.com/intel/neural-compressor"),r(E,"rel","nofollow"),r(y,"id","optimum.intel.IncQuantizer"),r(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(y,"href","#optimum.intel.IncQuantizer"),r(g,"class","relative group"),r(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(q,"id","optimum.intel.neural_compressor.quantization.IncQuantizedModel"),r(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(q,"href","#optimum.intel.neural_compressor.quantization.IncQuantizedModel"),r(z,"class","relative group"),r(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){t(document.head,f),m(e,Z,s),m(e,h,s),t(h,b),t(b,H),A(x,H,null),t(h,ze),t(h,j),t(j,ve),m(e,ee,s),m(e,p,s),t(p,be),t(p,V),t(V,ye),t(p,Ie),t(p,E),t(E,we),t(p,qe),m(e,ne,s),m(e,g,s),t(g,y),t(y,W),A(C,W,null),t(g,$e),t(g,B),t(B,Qe),m(e,te,s),m(e,I,s),t(I,xe),t(I,R),t(R,Ee),t(I,Ce),m(e,oe,s),m(e,_,s),A(N,_,null),t(_,Ne),t(_,w),A(M,w,null),t(w,Me),t(w,J),t(J,ke),m(e,ae,s),m(e,z,s),t(z,q),t(q,G),A(k,G,null),t(z,Pe),t(z,K),t(K,Te),m(e,ie,s),m(e,$,s),t($,Oe),t($,X),t(X,De),t($,Ae),m(e,re,s),m(e,v,s),A(P,v,null),t(v,Le),t(v,Q),A(T,Q,null),t(Q,Se),t(Q,Y),t(Y,Ue),se=!0},p:ln,i(e){se||(L(x.$$.fragment,e),L(C.$$.fragment,e),L(N.$$.fragment,e),L(M.$$.fragment,e),L(k.$$.fragment,e),L(P.$$.fragment,e),L(T.$$.fragment,e),se=!0)},o(e){S(x.$$.fragment,e),S(C.$$.fragment,e),S(N.$$.fragment,e),S(M.$$.fragment,e),S(k.$$.fragment,e),S(P.$$.fragment,e),S(T.$$.fragment,e),se=!1},d(e){n(f),e&&n(Z),e&&n(h),U(x),e&&n(ee),e&&n(p),e&&n(ne),e&&n(g),U(C),e&&n(te),e&&n(I),e&&n(oe),e&&n(_),U(N),U(M),e&&n(ae),e&&n(z),U(k),e&&n(ie),e&&n($),e&&n(re),e&&n(v),U(P),U(T)}}}const un={local:"quantization",sections:[{local:"optimum.intel.IncQuantizer",title:"IncQuantizer"},{local:"optimum.intel.neural_compressor.quantization.IncQuantizedModel",title:"IncQuantizedModel"}],title:"Quantization"};function pn(He){return mn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _n extends an{constructor(f){super();rn(this,f,pn,dn,sn,{})}}export{_n as default,un as metadata};
