import{S as uo,i as _o,s as go,e as o,k as d,w as g,t as s,M as vo,c as n,d as r,m as c,a,x as v,h as l,b as i,F as e,g as f,y as b,L as bo,q as k,o as y,B as R,v as ko}from"../../chunks/vendor-6b77c823.js";import{D as Ue}from"../../chunks/Docstring-1088f2fb.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function yo(Pr){let w,Ke,z,q,$e,U,gt,Ee,vt,We,$,F,xe,K,bt,Pe,kt,Qe,S,yt,W,Rt,Bt,Ge,B,Tt,Q,wt,zt,G,$t,Et,Je,E,N,Ce,J,xt,Me,Pt,Xe,_,X,Ct,x,Mt,fe,At,qt,Y,Ft,St,Nt,P,Dt,he,It,jt,pe,Lt,Ht,Ye,C,D,Ae,Z,Ot,qe,Vt,Ze,p,ee,Ut,Fe,Kt,Wt,I,Se,Qt,Gt,ue,Jt,Xt,Yt,te,Zt,_e,er,tr,et,M,j,Ne,re,rr,De,or,tt,u,oe,nr,ne,ar,Ie,ir,sr,lr,L,ge,dr,cr,ve,mr,fr,hr,ae,pr,be,ur,_r,rt,A,H,je,ie,gr,Le,vr,ot,h,se,br,He,kr,yr,le,Rr,ke,Br,Tr,wr,de,zr,ce,$r,Er,xr,ye,me,nt;return U=new ze({}),K=new ze({}),J=new ze({}),X=new Ue({props:{name:"class transformers.RetriBertConfig",anchor:"transformers.RetriBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 8"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"share_encoders",val:" = True"},{name:"projection_dim",val:" = 128"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RetriBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RetriBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16894/en/model_doc/retribert#transformers.RetriBertModel">RetriBertModel</a>`,name:"vocab_size"},{anchor:"transformers.RetriBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/pr_16894/en/model_doc/bert#transformers.BertModel">BertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RetriBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RetriBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RetriBertConfig.share_encoders",description:`<strong>share_encoders</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same Bert-type encoder for the queries and document`,name:"share_encoders"},{anchor:"transformers.RetriBertConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Final dimension of the query and document representation after projection`,name:"projection_dim"}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/models/retribert/configuration_retribert.py#L29"}}),Z=new ze({}),ee=new Ue({props:{name:"class transformers.RetriBertTokenizer",anchor:"transformers.RetriBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/models/retribert/tokenization_retribert.py#L41"}}),re=new ze({}),oe=new Ue({props:{name:"class transformers.RetriBertTokenizerFast",anchor:"transformers.RetriBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/models/retribert/tokenization_retribert_fast.py#L45"}}),ie=new ze({}),se=new Ue({props:{name:"class transformers.RetriBertModel",anchor:"transformers.RetriBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RetriBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16894/en/model_doc/retribert#transformers.RetriBertConfig">RetriBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16894/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/models/retribert/modeling_retribert.py#L87"}}),me=new Ue({props:{name:"forward",anchor:"transformers.RetriBertModel.forward",parameters:[{name:"input_ids_query",val:""},{name:"attention_mask_query",val:""},{name:"input_ids_doc",val:""},{name:"attention_mask_doc",val:""},{name:"checkpoint_batch_size",val:" = -1"}],parametersDescription:[{anchor:"transformers.RetriBertModel.forward.input_ids_query",description:`<strong>input_ids_query</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the queries in a batch.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16894/en/model_doc/retribert#transformers.RetriBertTokenizer">RetriBertTokenizer</a>. See <a href="/docs/transformers/pr_16894/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16894/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
all document representations in the batch.`,name:"checkpoint_batch_size"}],source:"https://github.com/huggingface/transformers/blob/vr_16894/src/transformers/models/retribert/modeling_retribert.py#L175",returnDescription:`
<p>The bidirectional cross-entropy loss obtained while trying to match each query to its
corresponding document and each document to its corresponding query in the batch</p>
`,returnType:`
<p>\`torch.FloatTensor\u201C</p>
`}}),{c(){w=o("meta"),Ke=d(),z=o("h1"),q=o("a"),$e=o("span"),g(U.$$.fragment),gt=d(),Ee=o("span"),vt=s("RetriBERT"),We=d(),$=o("h2"),F=o("a"),xe=o("span"),g(K.$$.fragment),bt=d(),Pe=o("span"),kt=s("Overview"),Qe=d(),S=o("p"),yt=s("The RetriBERT model was proposed in the blog post "),W=o("a"),Rt=s(`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Bt=s(`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),Ge=d(),B=o("p"),Tt=s("This model was contributed by "),Q=o("a"),wt=s("yjernite"),zt=s(`. Code to train and use the model can be
found `),G=o("a"),$t=s("here"),Et=s("."),Je=d(),E=o("h2"),N=o("a"),Ce=o("span"),g(J.$$.fragment),xt=d(),Me=o("span"),Pt=s("RetriBertConfig"),Xe=d(),_=o("div"),g(X.$$.fragment),Ct=d(),x=o("p"),Mt=s("This is the configuration class to store the configuration of a "),fe=o("a"),At=s("RetriBertModel"),qt=s(`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RetriBERT
`),Y=o("a"),Ft=s("yjernite/retribert-base-uncased"),St=s(" architecture."),Nt=d(),P=o("p"),Dt=s("Configuration objects inherit from "),he=o("a"),It=s("PretrainedConfig"),jt=s(` and can be used to control the model outputs. Read the
documentation from `),pe=o("a"),Lt=s("PretrainedConfig"),Ht=s(" for more information."),Ye=d(),C=o("h2"),D=o("a"),Ae=o("span"),g(Z.$$.fragment),Ot=d(),qe=o("span"),Vt=s("RetriBertTokenizer"),Ze=d(),p=o("div"),g(ee.$$.fragment),Ut=d(),Fe=o("p"),Kt=s("Constructs a RetriBERT tokenizer."),Wt=d(),I=o("p"),Se=o("code"),Qt=s("RetroBertTokenizer"),Gt=s(" is identical to "),ue=o("a"),Jt=s("BertTokenizer"),Xt=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Yt=d(),te=o("p"),Zt=s("Refer to superclass "),_e=o("a"),er=s("BertTokenizer"),tr=s(" for usage examples and documentation concerning parameters."),et=d(),M=o("h2"),j=o("a"),Ne=o("span"),g(re.$$.fragment),rr=d(),De=o("span"),or=s("RetriBertTokenizerFast"),tt=d(),u=o("div"),g(oe.$$.fragment),nr=d(),ne=o("p"),ar=s("Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ie=o("em"),ir=s("tokenizers"),sr=s(" library)."),lr=d(),L=o("p"),ge=o("a"),dr=s("RetriBertTokenizerFast"),cr=s(" is identical to "),ve=o("a"),mr=s("BertTokenizerFast"),fr=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),hr=d(),ae=o("p"),pr=s("Refer to superclass "),be=o("a"),ur=s("BertTokenizerFast"),_r=s(" for usage examples and documentation concerning parameters."),rt=d(),A=o("h2"),H=o("a"),je=o("span"),g(ie.$$.fragment),gr=d(),Le=o("span"),vr=s("RetriBertModel"),ot=d(),h=o("div"),g(se.$$.fragment),br=d(),He=o("p"),kr=s("Bert Based model to embed queries or document for document retrieval."),yr=d(),le=o("p"),Rr=s("This model inherits from "),ke=o("a"),Br=s("PreTrainedModel"),Tr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=d(),de=o("p"),zr=s("This model is also a PyTorch "),ce=o("a"),$r=s("torch.nn.Module"),Er=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xr=d(),ye=o("div"),g(me.$$.fragment),this.h()},l(t){const m=vo('[data-svelte="svelte-1phssyn"]',document.head);w=n(m,"META",{name:!0,content:!0}),m.forEach(r),Ke=c(t),z=n(t,"H1",{class:!0});var at=a(z);q=n(at,"A",{id:!0,class:!0,href:!0});var Cr=a(q);$e=n(Cr,"SPAN",{});var Mr=a($e);v(U.$$.fragment,Mr),Mr.forEach(r),Cr.forEach(r),gt=c(at),Ee=n(at,"SPAN",{});var Ar=a(Ee);vt=l(Ar,"RetriBERT"),Ar.forEach(r),at.forEach(r),We=c(t),$=n(t,"H2",{class:!0});var it=a($);F=n(it,"A",{id:!0,class:!0,href:!0});var qr=a(F);xe=n(qr,"SPAN",{});var Fr=a(xe);v(K.$$.fragment,Fr),Fr.forEach(r),qr.forEach(r),bt=c(it),Pe=n(it,"SPAN",{});var Sr=a(Pe);kt=l(Sr,"Overview"),Sr.forEach(r),it.forEach(r),Qe=c(t),S=n(t,"P",{});var st=a(S);yt=l(st,"The RetriBERT model was proposed in the blog post "),W=n(st,"A",{href:!0,rel:!0});var Nr=a(W);Rt=l(Nr,`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Nr.forEach(r),Bt=l(st,`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),st.forEach(r),Ge=c(t),B=n(t,"P",{});var Re=a(B);Tt=l(Re,"This model was contributed by "),Q=n(Re,"A",{href:!0,rel:!0});var Dr=a(Q);wt=l(Dr,"yjernite"),Dr.forEach(r),zt=l(Re,`. Code to train and use the model can be
found `),G=n(Re,"A",{href:!0,rel:!0});var Ir=a(G);$t=l(Ir,"here"),Ir.forEach(r),Et=l(Re,"."),Re.forEach(r),Je=c(t),E=n(t,"H2",{class:!0});var lt=a(E);N=n(lt,"A",{id:!0,class:!0,href:!0});var jr=a(N);Ce=n(jr,"SPAN",{});var Lr=a(Ce);v(J.$$.fragment,Lr),Lr.forEach(r),jr.forEach(r),xt=c(lt),Me=n(lt,"SPAN",{});var Hr=a(Me);Pt=l(Hr,"RetriBertConfig"),Hr.forEach(r),lt.forEach(r),Xe=c(t),_=n(t,"DIV",{class:!0});var Be=a(_);v(X.$$.fragment,Be),Ct=c(Be),x=n(Be,"P",{});var Te=a(x);Mt=l(Te,"This is the configuration class to store the configuration of a "),fe=n(Te,"A",{href:!0});var Or=a(fe);At=l(Or,"RetriBertModel"),Or.forEach(r),qt=l(Te,`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RetriBERT
`),Y=n(Te,"A",{href:!0,rel:!0});var Vr=a(Y);Ft=l(Vr,"yjernite/retribert-base-uncased"),Vr.forEach(r),St=l(Te," architecture."),Te.forEach(r),Nt=c(Be),P=n(Be,"P",{});var we=a(P);Dt=l(we,"Configuration objects inherit from "),he=n(we,"A",{href:!0});var Ur=a(he);It=l(Ur,"PretrainedConfig"),Ur.forEach(r),jt=l(we,` and can be used to control the model outputs. Read the
documentation from `),pe=n(we,"A",{href:!0});var Kr=a(pe);Lt=l(Kr,"PretrainedConfig"),Kr.forEach(r),Ht=l(we," for more information."),we.forEach(r),Be.forEach(r),Ye=c(t),C=n(t,"H2",{class:!0});var dt=a(C);D=n(dt,"A",{id:!0,class:!0,href:!0});var Wr=a(D);Ae=n(Wr,"SPAN",{});var Qr=a(Ae);v(Z.$$.fragment,Qr),Qr.forEach(r),Wr.forEach(r),Ot=c(dt),qe=n(dt,"SPAN",{});var Gr=a(qe);Vt=l(Gr,"RetriBertTokenizer"),Gr.forEach(r),dt.forEach(r),Ze=c(t),p=n(t,"DIV",{class:!0});var O=a(p);v(ee.$$.fragment,O),Ut=c(O),Fe=n(O,"P",{});var Jr=a(Fe);Kt=l(Jr,"Constructs a RetriBERT tokenizer."),Jr.forEach(r),Wt=c(O),I=n(O,"P",{});var Oe=a(I);Se=n(Oe,"CODE",{});var Xr=a(Se);Qt=l(Xr,"RetroBertTokenizer"),Xr.forEach(r),Gt=l(Oe," is identical to "),ue=n(Oe,"A",{href:!0});var Yr=a(ue);Jt=l(Yr,"BertTokenizer"),Yr.forEach(r),Xt=l(Oe,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Oe.forEach(r),Yt=c(O),te=n(O,"P",{});var ct=a(te);Zt=l(ct,"Refer to superclass "),_e=n(ct,"A",{href:!0});var Zr=a(_e);er=l(Zr,"BertTokenizer"),Zr.forEach(r),tr=l(ct," for usage examples and documentation concerning parameters."),ct.forEach(r),O.forEach(r),et=c(t),M=n(t,"H2",{class:!0});var mt=a(M);j=n(mt,"A",{id:!0,class:!0,href:!0});var eo=a(j);Ne=n(eo,"SPAN",{});var to=a(Ne);v(re.$$.fragment,to),to.forEach(r),eo.forEach(r),rr=c(mt),De=n(mt,"SPAN",{});var ro=a(De);or=l(ro,"RetriBertTokenizerFast"),ro.forEach(r),mt.forEach(r),tt=c(t),u=n(t,"DIV",{class:!0});var V=a(u);v(oe.$$.fragment,V),nr=c(V),ne=n(V,"P",{});var ft=a(ne);ar=l(ft,"Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ie=n(ft,"EM",{});var oo=a(Ie);ir=l(oo,"tokenizers"),oo.forEach(r),sr=l(ft," library)."),ft.forEach(r),lr=c(V),L=n(V,"P",{});var Ve=a(L);ge=n(Ve,"A",{href:!0});var no=a(ge);dr=l(no,"RetriBertTokenizerFast"),no.forEach(r),cr=l(Ve," is identical to "),ve=n(Ve,"A",{href:!0});var ao=a(ve);mr=l(ao,"BertTokenizerFast"),ao.forEach(r),fr=l(Ve,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ve.forEach(r),hr=c(V),ae=n(V,"P",{});var ht=a(ae);pr=l(ht,"Refer to superclass "),be=n(ht,"A",{href:!0});var io=a(be);ur=l(io,"BertTokenizerFast"),io.forEach(r),_r=l(ht," for usage examples and documentation concerning parameters."),ht.forEach(r),V.forEach(r),rt=c(t),A=n(t,"H2",{class:!0});var pt=a(A);H=n(pt,"A",{id:!0,class:!0,href:!0});var so=a(H);je=n(so,"SPAN",{});var lo=a(je);v(ie.$$.fragment,lo),lo.forEach(r),so.forEach(r),gr=c(pt),Le=n(pt,"SPAN",{});var co=a(Le);vr=l(co,"RetriBertModel"),co.forEach(r),pt.forEach(r),ot=c(t),h=n(t,"DIV",{class:!0});var T=a(h);v(se.$$.fragment,T),br=c(T),He=n(T,"P",{});var mo=a(He);kr=l(mo,"Bert Based model to embed queries or document for document retrieval."),mo.forEach(r),yr=c(T),le=n(T,"P",{});var ut=a(le);Rr=l(ut,"This model inherits from "),ke=n(ut,"A",{href:!0});var fo=a(ke);Br=l(fo,"PreTrainedModel"),fo.forEach(r),Tr=l(ut,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ut.forEach(r),wr=c(T),de=n(T,"P",{});var _t=a(de);zr=l(_t,"This model is also a PyTorch "),ce=n(_t,"A",{href:!0,rel:!0});var ho=a(ce);$r=l(ho,"torch.nn.Module"),ho.forEach(r),Er=l(_t,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_t.forEach(r),xr=c(T),ye=n(T,"DIV",{class:!0});var po=a(ye);v(me.$$.fragment,po),po.forEach(r),T.forEach(r),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(Ro)),i(q,"id","retribert"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#retribert"),i(z,"class","relative group"),i(F,"id","overview"),i(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(F,"href","#overview"),i($,"class","relative group"),i(W,"href","https://yjernite.github.io/lfqa.html"),i(W,"rel","nofollow"),i(Q,"href","https://huggingface.co/yjernite"),i(Q,"rel","nofollow"),i(G,"href","https://github.com/huggingface/transformers/tree/main/examples/research-projects/distillation"),i(G,"rel","nofollow"),i(N,"id","transformers.RetriBertConfig"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#transformers.RetriBertConfig"),i(E,"class","relative group"),i(fe,"href","/docs/transformers/pr_16894/en/model_doc/retribert#transformers.RetriBertModel"),i(Y,"href","https://huggingface.co/yjernite/retribert-base-uncased"),i(Y,"rel","nofollow"),i(he,"href","/docs/transformers/pr_16894/en/main_classes/configuration#transformers.PretrainedConfig"),i(pe,"href","/docs/transformers/pr_16894/en/main_classes/configuration#transformers.PretrainedConfig"),i(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(D,"id","transformers.RetriBertTokenizer"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#transformers.RetriBertTokenizer"),i(C,"class","relative group"),i(ue,"href","/docs/transformers/pr_16894/en/model_doc/bert#transformers.BertTokenizer"),i(_e,"href","/docs/transformers/pr_16894/en/model_doc/bert#transformers.BertTokenizer"),i(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(j,"id","transformers.RetriBertTokenizerFast"),i(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(j,"href","#transformers.RetriBertTokenizerFast"),i(M,"class","relative group"),i(ge,"href","/docs/transformers/pr_16894/en/model_doc/retribert#transformers.RetriBertTokenizerFast"),i(ve,"href","/docs/transformers/pr_16894/en/model_doc/bert#transformers.BertTokenizerFast"),i(be,"href","/docs/transformers/pr_16894/en/model_doc/bert#transformers.BertTokenizerFast"),i(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(H,"id","transformers.RetriBertModel"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#transformers.RetriBertModel"),i(A,"class","relative group"),i(ke,"href","/docs/transformers/pr_16894/en/main_classes/model#transformers.PreTrainedModel"),i(ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ce,"rel","nofollow"),i(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,w),f(t,Ke,m),f(t,z,m),e(z,q),e(q,$e),b(U,$e,null),e(z,gt),e(z,Ee),e(Ee,vt),f(t,We,m),f(t,$,m),e($,F),e(F,xe),b(K,xe,null),e($,bt),e($,Pe),e(Pe,kt),f(t,Qe,m),f(t,S,m),e(S,yt),e(S,W),e(W,Rt),e(S,Bt),f(t,Ge,m),f(t,B,m),e(B,Tt),e(B,Q),e(Q,wt),e(B,zt),e(B,G),e(G,$t),e(B,Et),f(t,Je,m),f(t,E,m),e(E,N),e(N,Ce),b(J,Ce,null),e(E,xt),e(E,Me),e(Me,Pt),f(t,Xe,m),f(t,_,m),b(X,_,null),e(_,Ct),e(_,x),e(x,Mt),e(x,fe),e(fe,At),e(x,qt),e(x,Y),e(Y,Ft),e(x,St),e(_,Nt),e(_,P),e(P,Dt),e(P,he),e(he,It),e(P,jt),e(P,pe),e(pe,Lt),e(P,Ht),f(t,Ye,m),f(t,C,m),e(C,D),e(D,Ae),b(Z,Ae,null),e(C,Ot),e(C,qe),e(qe,Vt),f(t,Ze,m),f(t,p,m),b(ee,p,null),e(p,Ut),e(p,Fe),e(Fe,Kt),e(p,Wt),e(p,I),e(I,Se),e(Se,Qt),e(I,Gt),e(I,ue),e(ue,Jt),e(I,Xt),e(p,Yt),e(p,te),e(te,Zt),e(te,_e),e(_e,er),e(te,tr),f(t,et,m),f(t,M,m),e(M,j),e(j,Ne),b(re,Ne,null),e(M,rr),e(M,De),e(De,or),f(t,tt,m),f(t,u,m),b(oe,u,null),e(u,nr),e(u,ne),e(ne,ar),e(ne,Ie),e(Ie,ir),e(ne,sr),e(u,lr),e(u,L),e(L,ge),e(ge,dr),e(L,cr),e(L,ve),e(ve,mr),e(L,fr),e(u,hr),e(u,ae),e(ae,pr),e(ae,be),e(be,ur),e(ae,_r),f(t,rt,m),f(t,A,m),e(A,H),e(H,je),b(ie,je,null),e(A,gr),e(A,Le),e(Le,vr),f(t,ot,m),f(t,h,m),b(se,h,null),e(h,br),e(h,He),e(He,kr),e(h,yr),e(h,le),e(le,Rr),e(le,ke),e(ke,Br),e(le,Tr),e(h,wr),e(h,de),e(de,zr),e(de,ce),e(ce,$r),e(de,Er),e(h,xr),e(h,ye),b(me,ye,null),nt=!0},p:bo,i(t){nt||(k(U.$$.fragment,t),k(K.$$.fragment,t),k(J.$$.fragment,t),k(X.$$.fragment,t),k(Z.$$.fragment,t),k(ee.$$.fragment,t),k(re.$$.fragment,t),k(oe.$$.fragment,t),k(ie.$$.fragment,t),k(se.$$.fragment,t),k(me.$$.fragment,t),nt=!0)},o(t){y(U.$$.fragment,t),y(K.$$.fragment,t),y(J.$$.fragment,t),y(X.$$.fragment,t),y(Z.$$.fragment,t),y(ee.$$.fragment,t),y(re.$$.fragment,t),y(oe.$$.fragment,t),y(ie.$$.fragment,t),y(se.$$.fragment,t),y(me.$$.fragment,t),nt=!1},d(t){r(w),t&&r(Ke),t&&r(z),R(U),t&&r(We),t&&r($),R(K),t&&r(Qe),t&&r(S),t&&r(Ge),t&&r(B),t&&r(Je),t&&r(E),R(J),t&&r(Xe),t&&r(_),R(X),t&&r(Ye),t&&r(C),R(Z),t&&r(Ze),t&&r(p),R(ee),t&&r(et),t&&r(M),R(re),t&&r(tt),t&&r(u),R(oe),t&&r(rt),t&&r(A),R(ie),t&&r(ot),t&&r(h),R(se),R(me)}}}const Ro={local:"retribert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RetriBertConfig",title:"RetriBertConfig"},{local:"transformers.RetriBertTokenizer",title:"RetriBertTokenizer"},{local:"transformers.RetriBertTokenizerFast",title:"RetriBertTokenizerFast"},{local:"transformers.RetriBertModel",title:"RetriBertModel"}],title:"RetriBERT"};function Bo(Pr){return ko(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $o extends uo{constructor(w){super();_o(this,w,Bo,yo,go,{})}}export{$o as default,Ro as metadata};
