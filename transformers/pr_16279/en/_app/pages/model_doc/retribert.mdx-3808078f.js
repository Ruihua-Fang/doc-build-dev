import{S as mo,i as fo,s as ho,e as o,k as d,w as b,t as s,M as po,c as n,d as r,m as c,a,x as k,h as l,b as i,F as e,g as f,y,L as uo,q as B,o as T,B as R}from"../../chunks/vendor-6b77c823.js";import{D as Ve}from"../../chunks/Docstring-abef54e3.js";import{I as we}from"../../chunks/IconCopyLink-7a11ce68.js";function _o(_t){let w,me,_,g,ze,V,gt,$e,vt,Ue,E,q,Ee,U,bt,xe,kt,Ke,F,yt,K,Bt,Tt,We,z,Rt,W,wt,zt,Q,$t,Et,Qe,x,N,Pe,G,xt,Ce,Pt,Ge,v,J,Ct,X,Mt,fe,At,qt,Ft,P,Nt,he,St,Dt,pe,It,jt,Je,C,S,Me,Y,Lt,Ae,Ht,Xe,p,Z,Ot,qe,Vt,Ut,D,Fe,Kt,Wt,ue,Qt,Gt,Jt,ee,Xt,_e,Yt,Zt,Ye,M,I,Ne,te,er,Se,tr,Ze,u,re,rr,oe,or,De,nr,ar,ir,j,ge,sr,lr,ve,dr,cr,mr,ne,fr,be,hr,pr,et,A,L,Ie,ae,ur,je,_r,tt,h,ie,gr,Le,vr,br,se,kr,ke,yr,Br,Tr,le,Rr,de,wr,zr,$r,ye,ce,rt;return V=new we({}),U=new we({}),G=new we({}),J=new Ve({props:{name:"class transformers.RetriBertConfig",anchor:"transformers.RetriBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 8"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"share_encoders",val:" = True"},{name:"projection_dim",val:" = 128"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/retribert/configuration_retribert.py#L29",parametersDescription:[{anchor:"transformers.RetriBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RetriBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16279/en/model_doc/retribert#transformers.RetriBertModel">RetriBertModel</a>`,name:"vocab_size"},{anchor:"transformers.RetriBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/pr_16279/en/model_doc/bert#transformers.BertModel">BertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RetriBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RetriBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RetriBertConfig.share_encoders",description:`<strong>share_encoders</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same Bert-type encoder for the queries and document`,name:"share_encoders"},{anchor:"transformers.RetriBertConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Final dimension of the query and document representation after projection`,name:"projection_dim"}]}}),Y=new we({}),Z=new Ve({props:{name:"class transformers.RetriBertTokenizer",anchor:"transformers.RetriBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/retribert/tokenization_retribert.py#L41"}}),te=new we({}),re=new Ve({props:{name:"class transformers.RetriBertTokenizerFast",anchor:"transformers.RetriBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/retribert/tokenization_retribert_fast.py#L45"}}),ae=new we({}),ie=new Ve({props:{name:"class transformers.RetriBertModel",anchor:"transformers.RetriBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/retribert/modeling_retribert.py#L88",parametersDescription:[{anchor:"transformers.RetriBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16279/en/model_doc/retribert#transformers.RetriBertConfig">RetriBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16279/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ce=new Ve({props:{name:"forward",anchor:"transformers.RetriBertModel.forward",parameters:[{name:"input_ids_query",val:""},{name:"attention_mask_query",val:""},{name:"input_ids_doc",val:""},{name:"attention_mask_doc",val:""},{name:"checkpoint_batch_size",val:" = -1"}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/retribert/modeling_retribert.py#L176",parametersDescription:[{anchor:"transformers.RetriBertModel.forward.input_ids_query",description:`<strong>input_ids_query</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the queries in a batch.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16279/en/model_doc/retribert#transformers.RetriBertTokenizer">RetriBertTokenizer</a>. See <a href="/docs/transformers/pr_16279/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16279/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
all document representations in the batch.`,name:"checkpoint_batch_size"}],returnDescription:`
<p>The bidirectional cross-entropy loss obtained while trying to match each query to its
corresponding document and each document to its corresponding query in the batch</p>
`,returnType:`
<p>\`torch.FloatTensor\u201C</p>
`}}),{c(){w=o("meta"),me=d(),_=o("h1"),g=o("a"),ze=o("span"),b(V.$$.fragment),gt=d(),$e=o("span"),vt=s("RetriBERT"),Ue=d(),E=o("h2"),q=o("a"),Ee=o("span"),b(U.$$.fragment),bt=d(),xe=o("span"),kt=s("Overview"),Ke=d(),F=o("p"),yt=s("The RetriBERT model was proposed in the blog post "),K=o("a"),Bt=s(`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Tt=s(`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),We=d(),z=o("p"),Rt=s("This model was contributed by "),W=o("a"),wt=s("yjernite"),zt=s(`. Code to train and use the model can be
found `),Q=o("a"),$t=s("here"),Et=s("."),Qe=d(),x=o("h2"),N=o("a"),Pe=o("span"),b(G.$$.fragment),xt=d(),Ce=o("span"),Pt=s("RetriBertConfig"),Ge=d(),v=o("div"),b(J.$$.fragment),Ct=d(),X=o("p"),Mt=s("This is the configuration class to store the configuration of a "),fe=o("a"),At=s("RetriBertModel"),qt=s(`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),Ft=d(),P=o("p"),Nt=s("Configuration objects inherit from "),he=o("a"),St=s("PretrainedConfig"),Dt=s(` and can be used to control the model outputs. Read the
documentation from `),pe=o("a"),It=s("PretrainedConfig"),jt=s(" for more information."),Je=d(),C=o("h2"),S=o("a"),Me=o("span"),b(Y.$$.fragment),Lt=d(),Ae=o("span"),Ht=s("RetriBertTokenizer"),Xe=d(),p=o("div"),b(Z.$$.fragment),Ot=d(),qe=o("p"),Vt=s("Constructs a RetriBERT tokenizer."),Ut=d(),D=o("p"),Fe=o("code"),Kt=s("RetroBertTokenizer"),Wt=s(" is identical to "),ue=o("a"),Qt=s("BertTokenizer"),Gt=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Jt=d(),ee=o("p"),Xt=s("Refer to superclass "),_e=o("a"),Yt=s("BertTokenizer"),Zt=s(" for usage examples and documentation concerning parameters."),Ye=d(),M=o("h2"),I=o("a"),Ne=o("span"),b(te.$$.fragment),er=d(),Se=o("span"),tr=s("RetriBertTokenizerFast"),Ze=d(),u=o("div"),b(re.$$.fragment),rr=d(),oe=o("p"),or=s("Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),De=o("em"),nr=s("tokenizers"),ar=s(" library)."),ir=d(),j=o("p"),ge=o("a"),sr=s("RetriBertTokenizerFast"),lr=s(" is identical to "),ve=o("a"),dr=s("BertTokenizerFast"),cr=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),mr=d(),ne=o("p"),fr=s("Refer to superclass "),be=o("a"),hr=s("BertTokenizerFast"),pr=s(" for usage examples and documentation concerning parameters."),et=d(),A=o("h2"),L=o("a"),Ie=o("span"),b(ae.$$.fragment),ur=d(),je=o("span"),_r=s("RetriBertModel"),tt=d(),h=o("div"),b(ie.$$.fragment),gr=d(),Le=o("p"),vr=s("Bert Based model to embed queries or document for document retrieval."),br=d(),se=o("p"),kr=s("This model inherits from "),ke=o("a"),yr=s("PreTrainedModel"),Br=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tr=d(),le=o("p"),Rr=s("This model is also a PyTorch "),de=o("a"),wr=s("torch.nn.Module"),zr=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$r=d(),ye=o("div"),b(ce.$$.fragment),this.h()},l(t){const m=po('[data-svelte="svelte-1phssyn"]',document.head);w=n(m,"META",{name:!0,content:!0}),m.forEach(r),me=c(t),_=n(t,"H1",{class:!0});var ot=a(_);g=n(ot,"A",{id:!0,class:!0,href:!0});var Er=a(g);ze=n(Er,"SPAN",{});var xr=a(ze);k(V.$$.fragment,xr),xr.forEach(r),Er.forEach(r),gt=c(ot),$e=n(ot,"SPAN",{});var Pr=a($e);vt=l(Pr,"RetriBERT"),Pr.forEach(r),ot.forEach(r),Ue=c(t),E=n(t,"H2",{class:!0});var nt=a(E);q=n(nt,"A",{id:!0,class:!0,href:!0});var Cr=a(q);Ee=n(Cr,"SPAN",{});var Mr=a(Ee);k(U.$$.fragment,Mr),Mr.forEach(r),Cr.forEach(r),bt=c(nt),xe=n(nt,"SPAN",{});var Ar=a(xe);kt=l(Ar,"Overview"),Ar.forEach(r),nt.forEach(r),Ke=c(t),F=n(t,"P",{});var at=a(F);yt=l(at,"The RetriBERT model was proposed in the blog post "),K=n(at,"A",{href:!0,rel:!0});var qr=a(K);Bt=l(qr,`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),qr.forEach(r),Tt=l(at,`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),at.forEach(r),We=c(t),z=n(t,"P",{});var Be=a(z);Rt=l(Be,"This model was contributed by "),W=n(Be,"A",{href:!0,rel:!0});var Fr=a(W);wt=l(Fr,"yjernite"),Fr.forEach(r),zt=l(Be,`. Code to train and use the model can be
found `),Q=n(Be,"A",{href:!0,rel:!0});var Nr=a(Q);$t=l(Nr,"here"),Nr.forEach(r),Et=l(Be,"."),Be.forEach(r),Qe=c(t),x=n(t,"H2",{class:!0});var it=a(x);N=n(it,"A",{id:!0,class:!0,href:!0});var Sr=a(N);Pe=n(Sr,"SPAN",{});var Dr=a(Pe);k(G.$$.fragment,Dr),Dr.forEach(r),Sr.forEach(r),xt=c(it),Ce=n(it,"SPAN",{});var Ir=a(Ce);Pt=l(Ir,"RetriBertConfig"),Ir.forEach(r),it.forEach(r),Ge=c(t),v=n(t,"DIV",{class:!0});var Te=a(v);k(J.$$.fragment,Te),Ct=c(Te),X=n(Te,"P",{});var st=a(X);Mt=l(st,"This is the configuration class to store the configuration of a "),fe=n(st,"A",{href:!0});var jr=a(fe);At=l(jr,"RetriBertModel"),jr.forEach(r),qt=l(st,`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),st.forEach(r),Ft=c(Te),P=n(Te,"P",{});var Re=a(P);Nt=l(Re,"Configuration objects inherit from "),he=n(Re,"A",{href:!0});var Lr=a(he);St=l(Lr,"PretrainedConfig"),Lr.forEach(r),Dt=l(Re,` and can be used to control the model outputs. Read the
documentation from `),pe=n(Re,"A",{href:!0});var Hr=a(pe);It=l(Hr,"PretrainedConfig"),Hr.forEach(r),jt=l(Re," for more information."),Re.forEach(r),Te.forEach(r),Je=c(t),C=n(t,"H2",{class:!0});var lt=a(C);S=n(lt,"A",{id:!0,class:!0,href:!0});var Or=a(S);Me=n(Or,"SPAN",{});var Vr=a(Me);k(Y.$$.fragment,Vr),Vr.forEach(r),Or.forEach(r),Lt=c(lt),Ae=n(lt,"SPAN",{});var Ur=a(Ae);Ht=l(Ur,"RetriBertTokenizer"),Ur.forEach(r),lt.forEach(r),Xe=c(t),p=n(t,"DIV",{class:!0});var H=a(p);k(Z.$$.fragment,H),Ot=c(H),qe=n(H,"P",{});var Kr=a(qe);Vt=l(Kr,"Constructs a RetriBERT tokenizer."),Kr.forEach(r),Ut=c(H),D=n(H,"P",{});var He=a(D);Fe=n(He,"CODE",{});var Wr=a(Fe);Kt=l(Wr,"RetroBertTokenizer"),Wr.forEach(r),Wt=l(He," is identical to "),ue=n(He,"A",{href:!0});var Qr=a(ue);Qt=l(Qr,"BertTokenizer"),Qr.forEach(r),Gt=l(He,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),He.forEach(r),Jt=c(H),ee=n(H,"P",{});var dt=a(ee);Xt=l(dt,"Refer to superclass "),_e=n(dt,"A",{href:!0});var Gr=a(_e);Yt=l(Gr,"BertTokenizer"),Gr.forEach(r),Zt=l(dt," for usage examples and documentation concerning parameters."),dt.forEach(r),H.forEach(r),Ye=c(t),M=n(t,"H2",{class:!0});var ct=a(M);I=n(ct,"A",{id:!0,class:!0,href:!0});var Jr=a(I);Ne=n(Jr,"SPAN",{});var Xr=a(Ne);k(te.$$.fragment,Xr),Xr.forEach(r),Jr.forEach(r),er=c(ct),Se=n(ct,"SPAN",{});var Yr=a(Se);tr=l(Yr,"RetriBertTokenizerFast"),Yr.forEach(r),ct.forEach(r),Ze=c(t),u=n(t,"DIV",{class:!0});var O=a(u);k(re.$$.fragment,O),rr=c(O),oe=n(O,"P",{});var mt=a(oe);or=l(mt,"Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),De=n(mt,"EM",{});var Zr=a(De);nr=l(Zr,"tokenizers"),Zr.forEach(r),ar=l(mt," library)."),mt.forEach(r),ir=c(O),j=n(O,"P",{});var Oe=a(j);ge=n(Oe,"A",{href:!0});var eo=a(ge);sr=l(eo,"RetriBertTokenizerFast"),eo.forEach(r),lr=l(Oe," is identical to "),ve=n(Oe,"A",{href:!0});var to=a(ve);dr=l(to,"BertTokenizerFast"),to.forEach(r),cr=l(Oe,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Oe.forEach(r),mr=c(O),ne=n(O,"P",{});var ft=a(ne);fr=l(ft,"Refer to superclass "),be=n(ft,"A",{href:!0});var ro=a(be);hr=l(ro,"BertTokenizerFast"),ro.forEach(r),pr=l(ft," for usage examples and documentation concerning parameters."),ft.forEach(r),O.forEach(r),et=c(t),A=n(t,"H2",{class:!0});var ht=a(A);L=n(ht,"A",{id:!0,class:!0,href:!0});var oo=a(L);Ie=n(oo,"SPAN",{});var no=a(Ie);k(ae.$$.fragment,no),no.forEach(r),oo.forEach(r),ur=c(ht),je=n(ht,"SPAN",{});var ao=a(je);_r=l(ao,"RetriBertModel"),ao.forEach(r),ht.forEach(r),tt=c(t),h=n(t,"DIV",{class:!0});var $=a(h);k(ie.$$.fragment,$),gr=c($),Le=n($,"P",{});var io=a(Le);vr=l(io,"Bert Based model to embed queries or document for document retrieval."),io.forEach(r),br=c($),se=n($,"P",{});var pt=a(se);kr=l(pt,"This model inherits from "),ke=n(pt,"A",{href:!0});var so=a(ke);yr=l(so,"PreTrainedModel"),so.forEach(r),Br=l(pt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pt.forEach(r),Tr=c($),le=n($,"P",{});var ut=a(le);Rr=l(ut,"This model is also a PyTorch "),de=n(ut,"A",{href:!0,rel:!0});var lo=a(de);wr=l(lo,"torch.nn.Module"),lo.forEach(r),zr=l(ut,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ut.forEach(r),$r=c($),ye=n($,"DIV",{class:!0});var co=a(ye);k(ce.$$.fragment,co),co.forEach(r),$.forEach(r),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(go)),i(g,"id","retribert"),i(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(g,"href","#retribert"),i(_,"class","relative group"),i(q,"id","overview"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#overview"),i(E,"class","relative group"),i(K,"href","https://yjernite.github.io/lfqa.html"),i(K,"rel","nofollow"),i(W,"href","https://huggingface.co/yjernite"),i(W,"rel","nofollow"),i(Q,"href","https://github.com/huggingface/transformers/tree/master/examples/research-projects/distillation"),i(Q,"rel","nofollow"),i(N,"id","transformers.RetriBertConfig"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#transformers.RetriBertConfig"),i(x,"class","relative group"),i(fe,"href","/docs/transformers/pr_16279/en/model_doc/retribert#transformers.RetriBertModel"),i(he,"href","/docs/transformers/pr_16279/en/main_classes/configuration#transformers.PretrainedConfig"),i(pe,"href","/docs/transformers/pr_16279/en/main_classes/configuration#transformers.PretrainedConfig"),i(v,"class","docstring"),i(S,"id","transformers.RetriBertTokenizer"),i(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(S,"href","#transformers.RetriBertTokenizer"),i(C,"class","relative group"),i(ue,"href","/docs/transformers/pr_16279/en/model_doc/bert#transformers.BertTokenizer"),i(_e,"href","/docs/transformers/pr_16279/en/model_doc/bert#transformers.BertTokenizer"),i(p,"class","docstring"),i(I,"id","transformers.RetriBertTokenizerFast"),i(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(I,"href","#transformers.RetriBertTokenizerFast"),i(M,"class","relative group"),i(ge,"href","/docs/transformers/pr_16279/en/model_doc/retribert#transformers.RetriBertTokenizerFast"),i(ve,"href","/docs/transformers/pr_16279/en/model_doc/bert#transformers.BertTokenizerFast"),i(be,"href","/docs/transformers/pr_16279/en/model_doc/bert#transformers.BertTokenizerFast"),i(u,"class","docstring"),i(L,"id","transformers.RetriBertModel"),i(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(L,"href","#transformers.RetriBertModel"),i(A,"class","relative group"),i(ke,"href","/docs/transformers/pr_16279/en/main_classes/model#transformers.PreTrainedModel"),i(de,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(de,"rel","nofollow"),i(ye,"class","docstring"),i(h,"class","docstring")},m(t,m){e(document.head,w),f(t,me,m),f(t,_,m),e(_,g),e(g,ze),y(V,ze,null),e(_,gt),e(_,$e),e($e,vt),f(t,Ue,m),f(t,E,m),e(E,q),e(q,Ee),y(U,Ee,null),e(E,bt),e(E,xe),e(xe,kt),f(t,Ke,m),f(t,F,m),e(F,yt),e(F,K),e(K,Bt),e(F,Tt),f(t,We,m),f(t,z,m),e(z,Rt),e(z,W),e(W,wt),e(z,zt),e(z,Q),e(Q,$t),e(z,Et),f(t,Qe,m),f(t,x,m),e(x,N),e(N,Pe),y(G,Pe,null),e(x,xt),e(x,Ce),e(Ce,Pt),f(t,Ge,m),f(t,v,m),y(J,v,null),e(v,Ct),e(v,X),e(X,Mt),e(X,fe),e(fe,At),e(X,qt),e(v,Ft),e(v,P),e(P,Nt),e(P,he),e(he,St),e(P,Dt),e(P,pe),e(pe,It),e(P,jt),f(t,Je,m),f(t,C,m),e(C,S),e(S,Me),y(Y,Me,null),e(C,Lt),e(C,Ae),e(Ae,Ht),f(t,Xe,m),f(t,p,m),y(Z,p,null),e(p,Ot),e(p,qe),e(qe,Vt),e(p,Ut),e(p,D),e(D,Fe),e(Fe,Kt),e(D,Wt),e(D,ue),e(ue,Qt),e(D,Gt),e(p,Jt),e(p,ee),e(ee,Xt),e(ee,_e),e(_e,Yt),e(ee,Zt),f(t,Ye,m),f(t,M,m),e(M,I),e(I,Ne),y(te,Ne,null),e(M,er),e(M,Se),e(Se,tr),f(t,Ze,m),f(t,u,m),y(re,u,null),e(u,rr),e(u,oe),e(oe,or),e(oe,De),e(De,nr),e(oe,ar),e(u,ir),e(u,j),e(j,ge),e(ge,sr),e(j,lr),e(j,ve),e(ve,dr),e(j,cr),e(u,mr),e(u,ne),e(ne,fr),e(ne,be),e(be,hr),e(ne,pr),f(t,et,m),f(t,A,m),e(A,L),e(L,Ie),y(ae,Ie,null),e(A,ur),e(A,je),e(je,_r),f(t,tt,m),f(t,h,m),y(ie,h,null),e(h,gr),e(h,Le),e(Le,vr),e(h,br),e(h,se),e(se,kr),e(se,ke),e(ke,yr),e(se,Br),e(h,Tr),e(h,le),e(le,Rr),e(le,de),e(de,wr),e(le,zr),e(h,$r),e(h,ye),y(ce,ye,null),rt=!0},p:uo,i(t){rt||(B(V.$$.fragment,t),B(U.$$.fragment,t),B(G.$$.fragment,t),B(J.$$.fragment,t),B(Y.$$.fragment,t),B(Z.$$.fragment,t),B(te.$$.fragment,t),B(re.$$.fragment,t),B(ae.$$.fragment,t),B(ie.$$.fragment,t),B(ce.$$.fragment,t),rt=!0)},o(t){T(V.$$.fragment,t),T(U.$$.fragment,t),T(G.$$.fragment,t),T(J.$$.fragment,t),T(Y.$$.fragment,t),T(Z.$$.fragment,t),T(te.$$.fragment,t),T(re.$$.fragment,t),T(ae.$$.fragment,t),T(ie.$$.fragment,t),T(ce.$$.fragment,t),rt=!1},d(t){r(w),t&&r(me),t&&r(_),R(V),t&&r(Ue),t&&r(E),R(U),t&&r(Ke),t&&r(F),t&&r(We),t&&r(z),t&&r(Qe),t&&r(x),R(G),t&&r(Ge),t&&r(v),R(J),t&&r(Je),t&&r(C),R(Y),t&&r(Xe),t&&r(p),R(Z),t&&r(Ye),t&&r(M),R(te),t&&r(Ze),t&&r(u),R(re),t&&r(et),t&&r(A),R(ae),t&&r(tt),t&&r(h),R(ie),R(ce)}}}const go={local:"retribert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RetriBertConfig",title:"RetriBertConfig"},{local:"transformers.RetriBertTokenizer",title:"RetriBertTokenizer"},{local:"transformers.RetriBertTokenizerFast",title:"RetriBertTokenizerFast"},{local:"transformers.RetriBertModel",title:"RetriBertModel"}],title:"RetriBERT"};function vo(_t,w,me){let{fw:_}=w;return _t.$$set=g=>{"fw"in g&&me(0,_=g.fw)},[_]}class Bo extends mo{constructor(w){super();fo(this,w,vo,_o,ho,{fw:0})}}export{Bo as default,go as metadata};
