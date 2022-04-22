import{S as mo,i as fo,s as ho,e as o,k as d,w as g,t as i,M as po,c as n,d as t,m as c,a,x as v,h as l,b as s,F as e,g as f,y as b,L as uo,q as k,o as y,B,v as _o}from"../../chunks/vendor-6b77c823.js";import{D as Oe}from"../../chunks/Docstring-1088f2fb.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function go($t){let w,Ve,z,A,we,V,_r,ze,gr,Ue,$,q,$e,U,vr,Ee,br,Ke,F,kr,K,yr,Br,We,R,Rr,W,Tr,wr,Q,zr,$r,Qe,E,S,xe,G,Er,Pe,xr,Ge,_,J,Pr,X,Cr,me,Mr,Ar,qr,x,Fr,fe,Sr,Nr,he,Dr,Ir,Je,P,N,Ce,Y,Lr,Me,jr,Xe,p,Z,Hr,Ae,Or,Vr,D,qe,Ur,Kr,pe,Wr,Qr,Gr,ee,Jr,ue,Xr,Yr,Ye,C,I,Fe,re,Zr,Se,et,Ze,u,te,rt,oe,tt,Ne,ot,nt,at,L,_e,st,it,ge,lt,dt,ct,ne,mt,ve,ft,ht,er,M,j,De,ae,pt,Ie,ut,rr,h,se,_t,Le,gt,vt,ie,bt,be,kt,yt,Bt,le,Rt,de,Tt,wt,zt,ke,ce,tr;return V=new Te({}),U=new Te({}),G=new Te({}),J=new Oe({props:{name:"class transformers.RetriBertConfig",anchor:"transformers.RetriBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 8"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"share_encoders",val:" = True"},{name:"projection_dim",val:" = 128"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RetriBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RetriBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16896/en/model_doc/retribert#transformers.RetriBertModel">RetriBertModel</a>`,name:"vocab_size"},{anchor:"transformers.RetriBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RetriBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RetriBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RetriBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RetriBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RetriBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RetriBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RetriBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RetriBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/pr_16896/en/model_doc/bert#transformers.BertModel">BertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RetriBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RetriBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RetriBertConfig.share_encoders",description:`<strong>share_encoders</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same Bert-type encoder for the queries and document`,name:"share_encoders"},{anchor:"transformers.RetriBertConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Final dimension of the query and document representation after projection`,name:"projection_dim"}],source:"https://github.com/huggingface/transformers/blob/pr_16896/src/transformers/models/retribert/configuration_retribert.py#L29"}}),Y=new Te({}),Z=new Oe({props:{name:"class transformers.RetriBertTokenizer",anchor:"transformers.RetriBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16896/src/transformers/models/retribert/tokenization_retribert.py#L41"}}),re=new Te({}),te=new Oe({props:{name:"class transformers.RetriBertTokenizerFast",anchor:"transformers.RetriBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16896/src/transformers/models/retribert/tokenization_retribert_fast.py#L45"}}),ae=new Te({}),se=new Oe({props:{name:"class transformers.RetriBertModel",anchor:"transformers.RetriBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RetriBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16896/en/model_doc/retribert#transformers.RetriBertConfig">RetriBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16896/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16896/src/transformers/models/retribert/modeling_retribert.py#L87"}}),ce=new Oe({props:{name:"forward",anchor:"transformers.RetriBertModel.forward",parameters:[{name:"input_ids_query",val:""},{name:"attention_mask_query",val:""},{name:"input_ids_doc",val:""},{name:"attention_mask_doc",val:""},{name:"checkpoint_batch_size",val:" = -1"}],parametersDescription:[{anchor:"transformers.RetriBertModel.forward.input_ids_query",description:`<strong>input_ids_query</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the queries in a batch.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16896/en/model_doc/retribert#transformers.RetriBertTokenizer">RetriBertTokenizer</a>. See <a href="/docs/transformers/pr_16896/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16896/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids_query"},{anchor:"transformers.RetriBertModel.forward.attention_mask_query",description:`<strong>attention_mask_query</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask_query"},{anchor:"transformers.RetriBertModel.forward.input_ids_doc",description:`<strong>input_ids_doc</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the documents in a batch.`,name:"input_ids_doc"},{anchor:"transformers.RetriBertModel.forward.attention_mask_doc",description:`<strong>attention_mask_doc</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on documents padding token indices.`,name:"attention_mask_doc"},{anchor:"transformers.RetriBertModel.forward.checkpoint_batch_size",description:`<strong>checkpoint_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to &#x201C;<code>-1</code>) &#x2014;
If greater than 0, uses gradient checkpointing to only compute sequence representation on
<code>checkpoint_batch_size</code> examples at a time on the GPU. All query representations are still compared to
all document representations in the batch.`,name:"checkpoint_batch_size"}],source:"https://github.com/huggingface/transformers/blob/pr_16896/src/transformers/models/retribert/modeling_retribert.py#L175",returnDescription:`
<p>The bidirectional cross-entropy loss obtained while trying to match each query to its
corresponding document and each document to its corresponding query in the batch</p>
`,returnType:`
<p>\`torch.FloatTensor\u201C</p>
`}}),{c(){w=o("meta"),Ve=d(),z=o("h1"),A=o("a"),we=o("span"),g(V.$$.fragment),_r=d(),ze=o("span"),gr=i("RetriBERT"),Ue=d(),$=o("h2"),q=o("a"),$e=o("span"),g(U.$$.fragment),vr=d(),Ee=o("span"),br=i("Overview"),Ke=d(),F=o("p"),kr=i("The RetriBERT model was proposed in the blog post "),K=o("a"),yr=i(`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Br=i(`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),We=d(),R=o("p"),Rr=i("This model was contributed by "),W=o("a"),Tr=i("yjernite"),wr=i(`. Code to train and use the model can be
found `),Q=o("a"),zr=i("here"),$r=i("."),Qe=d(),E=o("h2"),S=o("a"),xe=o("span"),g(G.$$.fragment),Er=d(),Pe=o("span"),xr=i("RetriBertConfig"),Ge=d(),_=o("div"),g(J.$$.fragment),Pr=d(),X=o("p"),Cr=i("This is the configuration class to store the configuration of a "),me=o("a"),Mr=i("RetriBertModel"),Ar=i(`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),qr=d(),x=o("p"),Fr=i("Configuration objects inherit from "),fe=o("a"),Sr=i("PretrainedConfig"),Nr=i(` and can be used to control the model outputs. Read the
documentation from `),he=o("a"),Dr=i("PretrainedConfig"),Ir=i(" for more information."),Je=d(),P=o("h2"),N=o("a"),Ce=o("span"),g(Y.$$.fragment),Lr=d(),Me=o("span"),jr=i("RetriBertTokenizer"),Xe=d(),p=o("div"),g(Z.$$.fragment),Hr=d(),Ae=o("p"),Or=i("Constructs a RetriBERT tokenizer."),Vr=d(),D=o("p"),qe=o("code"),Ur=i("RetroBertTokenizer"),Kr=i(" is identical to "),pe=o("a"),Wr=i("BertTokenizer"),Qr=i(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Gr=d(),ee=o("p"),Jr=i("Refer to superclass "),ue=o("a"),Xr=i("BertTokenizer"),Yr=i(" for usage examples and documentation concerning parameters."),Ye=d(),C=o("h2"),I=o("a"),Fe=o("span"),g(re.$$.fragment),Zr=d(),Se=o("span"),et=i("RetriBertTokenizerFast"),Ze=d(),u=o("div"),g(te.$$.fragment),rt=d(),oe=o("p"),tt=i("Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ne=o("em"),ot=i("tokenizers"),nt=i(" library)."),at=d(),L=o("p"),_e=o("a"),st=i("RetriBertTokenizerFast"),it=i(" is identical to "),ge=o("a"),lt=i("BertTokenizerFast"),dt=i(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ct=d(),ne=o("p"),mt=i("Refer to superclass "),ve=o("a"),ft=i("BertTokenizerFast"),ht=i(" for usage examples and documentation concerning parameters."),er=d(),M=o("h2"),j=o("a"),De=o("span"),g(ae.$$.fragment),pt=d(),Ie=o("span"),ut=i("RetriBertModel"),rr=d(),h=o("div"),g(se.$$.fragment),_t=d(),Le=o("p"),gt=i("Bert Based model to embed queries or document for document retrieval."),vt=d(),ie=o("p"),bt=i("This model inherits from "),be=o("a"),kt=i("PreTrainedModel"),yt=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bt=d(),le=o("p"),Rt=i("This model is also a PyTorch "),de=o("a"),Tt=i("torch.nn.Module"),wt=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zt=d(),ke=o("div"),g(ce.$$.fragment),this.h()},l(r){const m=po('[data-svelte="svelte-1phssyn"]',document.head);w=n(m,"META",{name:!0,content:!0}),m.forEach(t),Ve=c(r),z=n(r,"H1",{class:!0});var or=a(z);A=n(or,"A",{id:!0,class:!0,href:!0});var Et=a(A);we=n(Et,"SPAN",{});var xt=a(we);v(V.$$.fragment,xt),xt.forEach(t),Et.forEach(t),_r=c(or),ze=n(or,"SPAN",{});var Pt=a(ze);gr=l(Pt,"RetriBERT"),Pt.forEach(t),or.forEach(t),Ue=c(r),$=n(r,"H2",{class:!0});var nr=a($);q=n(nr,"A",{id:!0,class:!0,href:!0});var Ct=a(q);$e=n(Ct,"SPAN",{});var Mt=a($e);v(U.$$.fragment,Mt),Mt.forEach(t),Ct.forEach(t),vr=c(nr),Ee=n(nr,"SPAN",{});var At=a(Ee);br=l(At,"Overview"),At.forEach(t),nr.forEach(t),Ke=c(r),F=n(r,"P",{});var ar=a(F);kr=l(ar,"The RetriBERT model was proposed in the blog post "),K=n(ar,"A",{href:!0,rel:!0});var qt=a(K);yr=l(qt,`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),qt.forEach(t),Br=l(ar,`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),ar.forEach(t),We=c(r),R=n(r,"P",{});var ye=a(R);Rr=l(ye,"This model was contributed by "),W=n(ye,"A",{href:!0,rel:!0});var Ft=a(W);Tr=l(Ft,"yjernite"),Ft.forEach(t),wr=l(ye,`. Code to train and use the model can be
found `),Q=n(ye,"A",{href:!0,rel:!0});var St=a(Q);zr=l(St,"here"),St.forEach(t),$r=l(ye,"."),ye.forEach(t),Qe=c(r),E=n(r,"H2",{class:!0});var sr=a(E);S=n(sr,"A",{id:!0,class:!0,href:!0});var Nt=a(S);xe=n(Nt,"SPAN",{});var Dt=a(xe);v(G.$$.fragment,Dt),Dt.forEach(t),Nt.forEach(t),Er=c(sr),Pe=n(sr,"SPAN",{});var It=a(Pe);xr=l(It,"RetriBertConfig"),It.forEach(t),sr.forEach(t),Ge=c(r),_=n(r,"DIV",{class:!0});var Be=a(_);v(J.$$.fragment,Be),Pr=c(Be),X=n(Be,"P",{});var ir=a(X);Cr=l(ir,"This is the configuration class to store the configuration of a "),me=n(ir,"A",{href:!0});var Lt=a(me);Mr=l(Lt,"RetriBertModel"),Lt.forEach(t),Ar=l(ir,`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),ir.forEach(t),qr=c(Be),x=n(Be,"P",{});var Re=a(x);Fr=l(Re,"Configuration objects inherit from "),fe=n(Re,"A",{href:!0});var jt=a(fe);Sr=l(jt,"PretrainedConfig"),jt.forEach(t),Nr=l(Re,` and can be used to control the model outputs. Read the
documentation from `),he=n(Re,"A",{href:!0});var Ht=a(he);Dr=l(Ht,"PretrainedConfig"),Ht.forEach(t),Ir=l(Re," for more information."),Re.forEach(t),Be.forEach(t),Je=c(r),P=n(r,"H2",{class:!0});var lr=a(P);N=n(lr,"A",{id:!0,class:!0,href:!0});var Ot=a(N);Ce=n(Ot,"SPAN",{});var Vt=a(Ce);v(Y.$$.fragment,Vt),Vt.forEach(t),Ot.forEach(t),Lr=c(lr),Me=n(lr,"SPAN",{});var Ut=a(Me);jr=l(Ut,"RetriBertTokenizer"),Ut.forEach(t),lr.forEach(t),Xe=c(r),p=n(r,"DIV",{class:!0});var H=a(p);v(Z.$$.fragment,H),Hr=c(H),Ae=n(H,"P",{});var Kt=a(Ae);Or=l(Kt,"Constructs a RetriBERT tokenizer."),Kt.forEach(t),Vr=c(H),D=n(H,"P",{});var je=a(D);qe=n(je,"CODE",{});var Wt=a(qe);Ur=l(Wt,"RetroBertTokenizer"),Wt.forEach(t),Kr=l(je," is identical to "),pe=n(je,"A",{href:!0});var Qt=a(pe);Wr=l(Qt,"BertTokenizer"),Qt.forEach(t),Qr=l(je,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),je.forEach(t),Gr=c(H),ee=n(H,"P",{});var dr=a(ee);Jr=l(dr,"Refer to superclass "),ue=n(dr,"A",{href:!0});var Gt=a(ue);Xr=l(Gt,"BertTokenizer"),Gt.forEach(t),Yr=l(dr," for usage examples and documentation concerning parameters."),dr.forEach(t),H.forEach(t),Ye=c(r),C=n(r,"H2",{class:!0});var cr=a(C);I=n(cr,"A",{id:!0,class:!0,href:!0});var Jt=a(I);Fe=n(Jt,"SPAN",{});var Xt=a(Fe);v(re.$$.fragment,Xt),Xt.forEach(t),Jt.forEach(t),Zr=c(cr),Se=n(cr,"SPAN",{});var Yt=a(Se);et=l(Yt,"RetriBertTokenizerFast"),Yt.forEach(t),cr.forEach(t),Ze=c(r),u=n(r,"DIV",{class:!0});var O=a(u);v(te.$$.fragment,O),rt=c(O),oe=n(O,"P",{});var mr=a(oe);tt=l(mr,"Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ne=n(mr,"EM",{});var Zt=a(Ne);ot=l(Zt,"tokenizers"),Zt.forEach(t),nt=l(mr," library)."),mr.forEach(t),at=c(O),L=n(O,"P",{});var He=a(L);_e=n(He,"A",{href:!0});var eo=a(_e);st=l(eo,"RetriBertTokenizerFast"),eo.forEach(t),it=l(He," is identical to "),ge=n(He,"A",{href:!0});var ro=a(ge);lt=l(ro,"BertTokenizerFast"),ro.forEach(t),dt=l(He,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),He.forEach(t),ct=c(O),ne=n(O,"P",{});var fr=a(ne);mt=l(fr,"Refer to superclass "),ve=n(fr,"A",{href:!0});var to=a(ve);ft=l(to,"BertTokenizerFast"),to.forEach(t),ht=l(fr," for usage examples and documentation concerning parameters."),fr.forEach(t),O.forEach(t),er=c(r),M=n(r,"H2",{class:!0});var hr=a(M);j=n(hr,"A",{id:!0,class:!0,href:!0});var oo=a(j);De=n(oo,"SPAN",{});var no=a(De);v(ae.$$.fragment,no),no.forEach(t),oo.forEach(t),pt=c(hr),Ie=n(hr,"SPAN",{});var ao=a(Ie);ut=l(ao,"RetriBertModel"),ao.forEach(t),hr.forEach(t),rr=c(r),h=n(r,"DIV",{class:!0});var T=a(h);v(se.$$.fragment,T),_t=c(T),Le=n(T,"P",{});var so=a(Le);gt=l(so,"Bert Based model to embed queries or document for document retrieval."),so.forEach(t),vt=c(T),ie=n(T,"P",{});var pr=a(ie);bt=l(pr,"This model inherits from "),be=n(pr,"A",{href:!0});var io=a(be);kt=l(io,"PreTrainedModel"),io.forEach(t),yt=l(pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pr.forEach(t),Bt=c(T),le=n(T,"P",{});var ur=a(le);Rt=l(ur,"This model is also a PyTorch "),de=n(ur,"A",{href:!0,rel:!0});var lo=a(de);Tt=l(lo,"torch.nn.Module"),lo.forEach(t),wt=l(ur,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ur.forEach(t),zt=c(T),ke=n(T,"DIV",{class:!0});var co=a(ke);v(ce.$$.fragment,co),co.forEach(t),T.forEach(t),this.h()},h(){s(w,"name","hf:doc:metadata"),s(w,"content",JSON.stringify(vo)),s(A,"id","retribert"),s(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(A,"href","#retribert"),s(z,"class","relative group"),s(q,"id","overview"),s(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(q,"href","#overview"),s($,"class","relative group"),s(K,"href","https://yjernite.github.io/lfqa.html"),s(K,"rel","nofollow"),s(W,"href","https://huggingface.co/yjernite"),s(W,"rel","nofollow"),s(Q,"href","https://github.com/huggingface/transformers/tree/main/examples/research-projects/distillation"),s(Q,"rel","nofollow"),s(S,"id","transformers.RetriBertConfig"),s(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(S,"href","#transformers.RetriBertConfig"),s(E,"class","relative group"),s(me,"href","/docs/transformers/pr_16896/en/model_doc/retribert#transformers.RetriBertModel"),s(fe,"href","/docs/transformers/pr_16896/en/main_classes/configuration#transformers.PretrainedConfig"),s(he,"href","/docs/transformers/pr_16896/en/main_classes/configuration#transformers.PretrainedConfig"),s(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(N,"id","transformers.RetriBertTokenizer"),s(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(N,"href","#transformers.RetriBertTokenizer"),s(P,"class","relative group"),s(pe,"href","/docs/transformers/pr_16896/en/model_doc/bert#transformers.BertTokenizer"),s(ue,"href","/docs/transformers/pr_16896/en/model_doc/bert#transformers.BertTokenizer"),s(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(I,"id","transformers.RetriBertTokenizerFast"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#transformers.RetriBertTokenizerFast"),s(C,"class","relative group"),s(_e,"href","/docs/transformers/pr_16896/en/model_doc/retribert#transformers.RetriBertTokenizerFast"),s(ge,"href","/docs/transformers/pr_16896/en/model_doc/bert#transformers.BertTokenizerFast"),s(ve,"href","/docs/transformers/pr_16896/en/model_doc/bert#transformers.BertTokenizerFast"),s(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(j,"id","transformers.RetriBertModel"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#transformers.RetriBertModel"),s(M,"class","relative group"),s(be,"href","/docs/transformers/pr_16896/en/main_classes/model#transformers.PreTrainedModel"),s(de,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),s(de,"rel","nofollow"),s(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,m){e(document.head,w),f(r,Ve,m),f(r,z,m),e(z,A),e(A,we),b(V,we,null),e(z,_r),e(z,ze),e(ze,gr),f(r,Ue,m),f(r,$,m),e($,q),e(q,$e),b(U,$e,null),e($,vr),e($,Ee),e(Ee,br),f(r,Ke,m),f(r,F,m),e(F,kr),e(F,K),e(K,yr),e(F,Br),f(r,We,m),f(r,R,m),e(R,Rr),e(R,W),e(W,Tr),e(R,wr),e(R,Q),e(Q,zr),e(R,$r),f(r,Qe,m),f(r,E,m),e(E,S),e(S,xe),b(G,xe,null),e(E,Er),e(E,Pe),e(Pe,xr),f(r,Ge,m),f(r,_,m),b(J,_,null),e(_,Pr),e(_,X),e(X,Cr),e(X,me),e(me,Mr),e(X,Ar),e(_,qr),e(_,x),e(x,Fr),e(x,fe),e(fe,Sr),e(x,Nr),e(x,he),e(he,Dr),e(x,Ir),f(r,Je,m),f(r,P,m),e(P,N),e(N,Ce),b(Y,Ce,null),e(P,Lr),e(P,Me),e(Me,jr),f(r,Xe,m),f(r,p,m),b(Z,p,null),e(p,Hr),e(p,Ae),e(Ae,Or),e(p,Vr),e(p,D),e(D,qe),e(qe,Ur),e(D,Kr),e(D,pe),e(pe,Wr),e(D,Qr),e(p,Gr),e(p,ee),e(ee,Jr),e(ee,ue),e(ue,Xr),e(ee,Yr),f(r,Ye,m),f(r,C,m),e(C,I),e(I,Fe),b(re,Fe,null),e(C,Zr),e(C,Se),e(Se,et),f(r,Ze,m),f(r,u,m),b(te,u,null),e(u,rt),e(u,oe),e(oe,tt),e(oe,Ne),e(Ne,ot),e(oe,nt),e(u,at),e(u,L),e(L,_e),e(_e,st),e(L,it),e(L,ge),e(ge,lt),e(L,dt),e(u,ct),e(u,ne),e(ne,mt),e(ne,ve),e(ve,ft),e(ne,ht),f(r,er,m),f(r,M,m),e(M,j),e(j,De),b(ae,De,null),e(M,pt),e(M,Ie),e(Ie,ut),f(r,rr,m),f(r,h,m),b(se,h,null),e(h,_t),e(h,Le),e(Le,gt),e(h,vt),e(h,ie),e(ie,bt),e(ie,be),e(be,kt),e(ie,yt),e(h,Bt),e(h,le),e(le,Rt),e(le,de),e(de,Tt),e(le,wt),e(h,zt),e(h,ke),b(ce,ke,null),tr=!0},p:uo,i(r){tr||(k(V.$$.fragment,r),k(U.$$.fragment,r),k(G.$$.fragment,r),k(J.$$.fragment,r),k(Y.$$.fragment,r),k(Z.$$.fragment,r),k(re.$$.fragment,r),k(te.$$.fragment,r),k(ae.$$.fragment,r),k(se.$$.fragment,r),k(ce.$$.fragment,r),tr=!0)},o(r){y(V.$$.fragment,r),y(U.$$.fragment,r),y(G.$$.fragment,r),y(J.$$.fragment,r),y(Y.$$.fragment,r),y(Z.$$.fragment,r),y(re.$$.fragment,r),y(te.$$.fragment,r),y(ae.$$.fragment,r),y(se.$$.fragment,r),y(ce.$$.fragment,r),tr=!1},d(r){t(w),r&&t(Ve),r&&t(z),B(V),r&&t(Ue),r&&t($),B(U),r&&t(Ke),r&&t(F),r&&t(We),r&&t(R),r&&t(Qe),r&&t(E),B(G),r&&t(Ge),r&&t(_),B(J),r&&t(Je),r&&t(P),B(Y),r&&t(Xe),r&&t(p),B(Z),r&&t(Ye),r&&t(C),B(re),r&&t(Ze),r&&t(u),B(te),r&&t(er),r&&t(M),B(ae),r&&t(rr),r&&t(h),B(se),B(ce)}}}const vo={local:"retribert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RetriBertConfig",title:"RetriBertConfig"},{local:"transformers.RetriBertTokenizer",title:"RetriBertTokenizer"},{local:"transformers.RetriBertTokenizerFast",title:"RetriBertTokenizerFast"},{local:"transformers.RetriBertModel",title:"RetriBertModel"}],title:"RetriBERT"};function bo($t){return _o(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ro extends mo{constructor(w){super();fo(this,w,bo,go,ho,{})}}export{Ro as default,vo as metadata};
