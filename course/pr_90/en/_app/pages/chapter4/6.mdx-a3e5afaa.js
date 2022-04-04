import{S as so,i as lo,s as uo,e as a,k as u,w as m,t as _,M as co,c as i,d as t,m as c,x as g,a as n,h as b,b as h,F as o,g as l,y as $,o as f,p as po,q as d,B as w,v as fo,n as mo}from"../../chunks/vendor-1e8b365d.js";import{I as q}from"../../chunks/IconCopyLink-483c28ba.js";import{Q as W}from"../../chunks/Question-31426fe2.js";import{F as go}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function $o(G){let p,v;return p=new W({props:{choices:[{text:"A tokenizer",explain:"Correct! All tokenizers have the <code>push_to_hub</code> method, and using it will push all the tokenizer files (vocabulary, architecture of the tokenizer, etc.) to a given repo. That's not the only right answer, though!",correct:!0},{text:"A model configuration",explain:"Right! All model configurations have the <code>push_to_hub</code> method, and using it will push them to a given repo. What else can you share?",correct:!0},{text:"A model",explain:"Correct! All models have the <code>push_to_hub</code> method, and using it will push them and their configuration files to a given repo. That's not all you can share, though.",correct:!0},{text:"All of the above with a dedicated callback",explain:"That's right \u2014 the <code>PushToHubCallback</code> will regularly send all of those objects to a repo during training.",correct:!0}]}}),{c(){m(p.$$.fragment)},l(s){g(p.$$.fragment,s)},m(s,k){$(p,s,k),v=!0},i(s){v||(d(p.$$.fragment,s),v=!0)},o(s){f(p.$$.fragment,s),v=!1},d(s){w(p,s)}}}function wo(G){let p,v;return p=new W({props:{choices:[{text:"A tokenizer",explain:"Correct! All tokenizers have the <code>push_to_hub</code> method, and using it will push all the tokenizer files (vocabulary, architecture of the tokenizer, etc.) to a given repo. That's not the only right answer, though!",correct:!0},{text:"A model configuration",explain:"Right! All model configurations have the <code>push_to_hub</code> method, and using it will push them to a given repo. What else can you share?",correct:!0},{text:"A model",explain:"Correct! All models have the <code>push_to_hub</code> method, and using it will push them and their configuration files to a given repo. That's not all you can share, though.",correct:!0},{text:"A Trainer",explain:"That's right \u2014 the <code>Trainer</code> also implements the <code>push_to_hub</code> method, and using it will upload the model, its configuration, the tokenizer, and a model card draft to a given repo. Try another answer!",correct:!0}]}}),{c(){m(p.$$.fragment)},l(s){g(p.$$.fragment,s)},m(s,k){$(p,s,k),v=!0},i(s){v||(d(p.$$.fragment,s),v=!0)},o(s){f(p.$$.fragment,s),v=!1},d(s){w(p,s)}}}function vo(G){let p,v,s,k,A,F,ge,Q,st,$e,lt,qe,fe,ut,We,E,M,we,U,ct,ve,pt,Fe,Y,Me,H,R,_e,J,ft,be,dt,Re,K,Ie,T,I,ye,V,mt,xe,gt,Le,X,je,P,L,ke,Z,$t,Ae,wt,Be,ee,Oe,S,j,Ee,te,vt,oe,_t,He,bt,yt,De,y,x,de,C,B,Te,re,xt,ae,kt,Pe,At,Et,Ge,ie,Qe,N,O,Se,ne,Ht,Ce,Tt,Ue,he,Ye,z,D,Ne,se,Pt,le,St,ze,Ct,Nt,Je,ue,Ke;s=new go({props:{fw:G[0]}}),Q=new q({}),U=new q({}),Y=new W({props:{choices:[{text:"Models from the \u{1F917} Transformers library.",explain:"While models from the \u{1F917} Transformers library are supported on the Hugging Face Hub, they're not the only ones!"},{text:"All models with a similar interface to \u{1F917} Transformers.",explain:"No interface requirement is set when uploading models to the Hugging Face Hub. "},{text:"There are no limits.",explain:"Right! There are no limits when uploading models to the Hub.",correct:!0},{text:"Models that are in some way related to NLP.",explain:"No requirement is set regarding the field of application!"}]}}),J=new q({}),K=new W({props:{choices:[{text:"Through a GCP account.",explain:"Incorrect!"},{text:"Through peer-to-peer distribution.",explain:"Incorrect!"},{text:"Through git and git-lfs.",explain:"Correct! Models on the Hub are simple Git repositories, leveraging <code>git-lfs</code> for large files.",correct:!0}]}}),V=new q({}),X=new W({props:{choices:[{text:"Fork an existing repository.",explain:"Forking a repository is not possible on the Hugging Face Hub."},{text:"Create a new model repository.",explain:"Correct! That's not all you can do, though.",correct:!0},{text:"Manage and edit files.",explain:"Correct! That's not the only right answer, though.",correct:!0},{text:"Upload files.",explain:"Right! But that's not all.",correct:!0},{text:"See diffs across versions.",explain:"Correct! That's not all you can do, though.",correct:!0}]}}),Z=new q({}),ee=new W({props:{choices:[{text:"A rough description of the model, therefore less important than the model and tokenizer files.",explain:"It is indeed a description of the model, but it's an important piece: if it's incomplete or absent the model's utility is drastically reduced."},{text:"A way to ensure reproducibility, reusability, and fairness.",explain:"Correct! Sharing the right information in the model card will help users leverage your model and be aware of its limits and biases. ",correct:!0},{text:"A Python file that can be run to retrieve information about the model.",explain:"Model cards are simple Markdown files."}]}}),te=new q({});const zt=[wo,$o],ce=[];function qt(e,r){return e[0]==="pt"?0:1}return y=qt(G),x=ce[y]=zt[y](G),re=new q({}),ie=new W({props:{choices:[{text:"Log in on the website.",explain:"This won't help you on your local machine."},{text:"Run 'huggingface-cli login' in a terminal.",explain:"Correct \u2014 this will download and cache your personal token.",correct:!0},{text:"Run 'notebook_login()' in a notebook.",explain:"Correct \u2014 this will display a widget to let you authenticate.",correct:!0}]}}),ne=new q({}),he=new W({props:{choices:[{text:"By calling the push_to_hub method directly on the model and the tokenizer.",explain:"Correct!",correct:!0},{text:"Within the Python runtime, by wrapping them in a <code>huggingface_hub</code> utility.",explain:"Models and tokenizers already benefit from <code>huggingface_hub</code> utilities: no need for additional wrapping!"},{text:"By saving them to disk and calling <code>transformers-cli upload-model</code>",explain:"The command <code>upload-model</code> does not exist."}]}}),se=new q({}),ue=new W({props:{choices:[{text:"A commit.",explain:"Correct, the <code>git_commit()</code> method is there for that.",correct:!0},{text:"A pull",explain:"That is the purpose of the <code>git_pull()</code> method.",correct:!0},{text:"A push",explain:"The method <code>git_push()</code> does this.",correct:!0},{text:"A merge",explain:"No, that operation will never be possible with this API."}]}}),{c(){p=a("meta"),v=u(),m(s.$$.fragment),k=u(),A=a("h1"),F=a("a"),ge=a("span"),m(Q.$$.fragment),st=u(),$e=a("span"),lt=_("End-of-chapter quiz"),qe=u(),fe=a("p"),ut=_("Let\u2019s test what you learned in this chapter!"),We=u(),E=a("h3"),M=a("a"),we=a("span"),m(U.$$.fragment),ct=u(),ve=a("span"),pt=_("1. What are models on the Hub limited to?"),Fe=u(),m(Y.$$.fragment),Me=u(),H=a("h3"),R=a("a"),_e=a("span"),m(J.$$.fragment),ft=u(),be=a("span"),dt=_("2. How can you manage models on the Hub?"),Re=u(),m(K.$$.fragment),Ie=u(),T=a("h3"),I=a("a"),ye=a("span"),m(V.$$.fragment),mt=u(),xe=a("span"),gt=_("3. What can you do using the Hugging Face Hub web interface?"),Le=u(),m(X.$$.fragment),je=u(),P=a("h3"),L=a("a"),ke=a("span"),m(Z.$$.fragment),$t=u(),Ae=a("span"),wt=_("4. What is a model card?"),Be=u(),m(ee.$$.fragment),Oe=u(),S=a("h3"),j=a("a"),Ee=a("span"),m(te.$$.fragment),vt=u(),oe=a("span"),_t=_("5. Which of these objects of the \u{1F917} Transformers library can be directly shared on the Hub with "),He=a("code"),bt=_("push_to_hub()"),yt=_("?"),De=u(),x.c(),de=u(),C=a("h3"),B=a("a"),Te=a("span"),m(re.$$.fragment),xt=u(),ae=a("span"),kt=_("6. What is the first step when using the "),Pe=a("code"),At=_("push_to_hub()"),Et=_(" method or the CLI tools?"),Ge=u(),m(ie.$$.fragment),Qe=u(),N=a("h3"),O=a("a"),Se=a("span"),m(ne.$$.fragment),Ht=u(),Ce=a("span"),Tt=_("7. You\u2019re using a model and a tokenizer \u2014 how can you upload them to the Hub?"),Ue=u(),m(he.$$.fragment),Ye=u(),z=a("h3"),D=a("a"),Ne=a("span"),m(se.$$.fragment),Pt=u(),le=a("span"),St=_("8. Which git operations can you do with the "),ze=a("code"),Ct=_("Repository"),Nt=_(" class?"),Je=u(),m(ue.$$.fragment),this.h()},l(e){const r=co('[data-svelte="svelte-1phssyn"]',document.head);p=i(r,"META",{name:!0,content:!0}),r.forEach(t),v=c(e),g(s.$$.fragment,e),k=c(e),A=i(e,"H1",{class:!0});var pe=n(A);F=i(pe,"A",{id:!0,class:!0,href:!0});var me=n(F);ge=i(me,"SPAN",{});var Wt=n(ge);g(Q.$$.fragment,Wt),Wt.forEach(t),me.forEach(t),st=c(pe),$e=i(pe,"SPAN",{});var Ft=n($e);lt=b(Ft,"End-of-chapter quiz"),Ft.forEach(t),pe.forEach(t),qe=c(e),fe=i(e,"P",{});var Mt=n(fe);ut=b(Mt,"Let\u2019s test what you learned in this chapter!"),Mt.forEach(t),We=c(e),E=i(e,"H3",{class:!0});var Ve=n(E);M=i(Ve,"A",{id:!0,class:!0,href:!0});var Rt=n(M);we=i(Rt,"SPAN",{});var It=n(we);g(U.$$.fragment,It),It.forEach(t),Rt.forEach(t),ct=c(Ve),ve=i(Ve,"SPAN",{});var Lt=n(ve);pt=b(Lt,"1. What are models on the Hub limited to?"),Lt.forEach(t),Ve.forEach(t),Fe=c(e),g(Y.$$.fragment,e),Me=c(e),H=i(e,"H3",{class:!0});var Xe=n(H);R=i(Xe,"A",{id:!0,class:!0,href:!0});var jt=n(R);_e=i(jt,"SPAN",{});var Bt=n(_e);g(J.$$.fragment,Bt),Bt.forEach(t),jt.forEach(t),ft=c(Xe),be=i(Xe,"SPAN",{});var Ot=n(be);dt=b(Ot,"2. How can you manage models on the Hub?"),Ot.forEach(t),Xe.forEach(t),Re=c(e),g(K.$$.fragment,e),Ie=c(e),T=i(e,"H3",{class:!0});var Ze=n(T);I=i(Ze,"A",{id:!0,class:!0,href:!0});var Dt=n(I);ye=i(Dt,"SPAN",{});var Gt=n(ye);g(V.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),mt=c(Ze),xe=i(Ze,"SPAN",{});var Qt=n(xe);gt=b(Qt,"3. What can you do using the Hugging Face Hub web interface?"),Qt.forEach(t),Ze.forEach(t),Le=c(e),g(X.$$.fragment,e),je=c(e),P=i(e,"H3",{class:!0});var et=n(P);L=i(et,"A",{id:!0,class:!0,href:!0});var Ut=n(L);ke=i(Ut,"SPAN",{});var Yt=n(ke);g(Z.$$.fragment,Yt),Yt.forEach(t),Ut.forEach(t),$t=c(et),Ae=i(et,"SPAN",{});var Jt=n(Ae);wt=b(Jt,"4. What is a model card?"),Jt.forEach(t),et.forEach(t),Be=c(e),g(ee.$$.fragment,e),Oe=c(e),S=i(e,"H3",{class:!0});var tt=n(S);j=i(tt,"A",{id:!0,class:!0,href:!0});var Kt=n(j);Ee=i(Kt,"SPAN",{});var Vt=n(Ee);g(te.$$.fragment,Vt),Vt.forEach(t),Kt.forEach(t),vt=c(tt),oe=i(tt,"SPAN",{});var ot=n(oe);_t=b(ot,"5. Which of these objects of the \u{1F917} Transformers library can be directly shared on the Hub with "),He=i(ot,"CODE",{});var Xt=n(He);bt=b(Xt,"push_to_hub()"),Xt.forEach(t),yt=b(ot,"?"),ot.forEach(t),tt.forEach(t),De=c(e),x.l(e),de=c(e),C=i(e,"H3",{class:!0});var rt=n(C);B=i(rt,"A",{id:!0,class:!0,href:!0});var Zt=n(B);Te=i(Zt,"SPAN",{});var eo=n(Te);g(re.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),xt=c(rt),ae=i(rt,"SPAN",{});var at=n(ae);kt=b(at,"6. What is the first step when using the "),Pe=i(at,"CODE",{});var to=n(Pe);At=b(to,"push_to_hub()"),to.forEach(t),Et=b(at," method or the CLI tools?"),at.forEach(t),rt.forEach(t),Ge=c(e),g(ie.$$.fragment,e),Qe=c(e),N=i(e,"H3",{class:!0});var it=n(N);O=i(it,"A",{id:!0,class:!0,href:!0});var oo=n(O);Se=i(oo,"SPAN",{});var ro=n(Se);g(ne.$$.fragment,ro),ro.forEach(t),oo.forEach(t),Ht=c(it),Ce=i(it,"SPAN",{});var ao=n(Ce);Tt=b(ao,"7. You\u2019re using a model and a tokenizer \u2014 how can you upload them to the Hub?"),ao.forEach(t),it.forEach(t),Ue=c(e),g(he.$$.fragment,e),Ye=c(e),z=i(e,"H3",{class:!0});var nt=n(z);D=i(nt,"A",{id:!0,class:!0,href:!0});var io=n(D);Ne=i(io,"SPAN",{});var no=n(Ne);g(se.$$.fragment,no),no.forEach(t),io.forEach(t),Pt=c(nt),le=i(nt,"SPAN",{});var ht=n(le);St=b(ht,"8. Which git operations can you do with the "),ze=i(ht,"CODE",{});var ho=n(ze);Ct=b(ho,"Repository"),ho.forEach(t),Nt=b(ht," class?"),ht.forEach(t),nt.forEach(t),Je=c(e),g(ue.$$.fragment,e),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(_o)),h(F,"id","endofchapter-quiz"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#endofchapter-quiz"),h(A,"class","relative group"),h(M,"id","1.-what-are-models-on-the-hub-limited-to?"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#1.-what-are-models-on-the-hub-limited-to?"),h(E,"class","relative group"),h(R,"id","2.-how-can-you-manage-models-on-the-hub?"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#2.-how-can-you-manage-models-on-the-hub?"),h(H,"class","relative group"),h(I,"id","3.-what-can-you-do-using-the-hugging-face-hub-web-interface?"),h(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(I,"href","#3.-what-can-you-do-using-the-hugging-face-hub-web-interface?"),h(T,"class","relative group"),h(L,"id","4.-what-is-a-model-card?"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#4.-what-is-a-model-card?"),h(P,"class","relative group"),h(j,"id","5.-which-of-these-objects-of-the-\u{1F917}-transformers-library-can-be-directly-shared-on-the-hub-with-<code>push_to_hub()</code>?"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#5.-which-of-these-objects-of-the-\u{1F917}-transformers-library-can-be-directly-shared-on-the-hub-with-<code>push_to_hub()</code>?"),h(S,"class","relative group"),h(B,"id","6.-what-is-the-first-step-when-using-the-<code>push_to_hub()</code>-method-or-the-cli-tools?"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#6.-what-is-the-first-step-when-using-the-<code>push_to_hub()</code>-method-or-the-cli-tools?"),h(C,"class","relative group"),h(O,"id","7.-you\u2019re-using-a-model-and-a-tokenizer-\u2014-how-can-you-upload-them-to-the-hub?"),h(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(O,"href","#7.-you\u2019re-using-a-model-and-a-tokenizer-\u2014-how-can-you-upload-them-to-the-hub?"),h(N,"class","relative group"),h(D,"id","8.-which-git-operations-can-you-do-with-the-<code>repository</code>-class?"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#8.-which-git-operations-can-you-do-with-the-<code>repository</code>-class?"),h(z,"class","relative group")},m(e,r){o(document.head,p),l(e,v,r),$(s,e,r),l(e,k,r),l(e,A,r),o(A,F),o(F,ge),$(Q,ge,null),o(A,st),o(A,$e),o($e,lt),l(e,qe,r),l(e,fe,r),o(fe,ut),l(e,We,r),l(e,E,r),o(E,M),o(M,we),$(U,we,null),o(E,ct),o(E,ve),o(ve,pt),l(e,Fe,r),$(Y,e,r),l(e,Me,r),l(e,H,r),o(H,R),o(R,_e),$(J,_e,null),o(H,ft),o(H,be),o(be,dt),l(e,Re,r),$(K,e,r),l(e,Ie,r),l(e,T,r),o(T,I),o(I,ye),$(V,ye,null),o(T,mt),o(T,xe),o(xe,gt),l(e,Le,r),$(X,e,r),l(e,je,r),l(e,P,r),o(P,L),o(L,ke),$(Z,ke,null),o(P,$t),o(P,Ae),o(Ae,wt),l(e,Be,r),$(ee,e,r),l(e,Oe,r),l(e,S,r),o(S,j),o(j,Ee),$(te,Ee,null),o(S,vt),o(S,oe),o(oe,_t),o(oe,He),o(He,bt),o(oe,yt),l(e,De,r),ce[y].m(e,r),l(e,de,r),l(e,C,r),o(C,B),o(B,Te),$(re,Te,null),o(C,xt),o(C,ae),o(ae,kt),o(ae,Pe),o(Pe,At),o(ae,Et),l(e,Ge,r),$(ie,e,r),l(e,Qe,r),l(e,N,r),o(N,O),o(O,Se),$(ne,Se,null),o(N,Ht),o(N,Ce),o(Ce,Tt),l(e,Ue,r),$(he,e,r),l(e,Ye,r),l(e,z,r),o(z,D),o(D,Ne),$(se,Ne,null),o(z,Pt),o(z,le),o(le,St),o(le,ze),o(ze,Ct),o(le,Nt),l(e,Je,r),$(ue,e,r),Ke=!0},p(e,[r]){const pe={};r&1&&(pe.fw=e[0]),s.$set(pe);let me=y;y=qt(e),y!==me&&(mo(),f(ce[me],1,1,()=>{ce[me]=null}),po(),x=ce[y],x||(x=ce[y]=zt[y](e),x.c()),d(x,1),x.m(de.parentNode,de))},i(e){Ke||(d(s.$$.fragment,e),d(Q.$$.fragment,e),d(U.$$.fragment,e),d(Y.$$.fragment,e),d(J.$$.fragment,e),d(K.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(x),d(re.$$.fragment,e),d(ie.$$.fragment,e),d(ne.$$.fragment,e),d(he.$$.fragment,e),d(se.$$.fragment,e),d(ue.$$.fragment,e),Ke=!0)},o(e){f(s.$$.fragment,e),f(Q.$$.fragment,e),f(U.$$.fragment,e),f(Y.$$.fragment,e),f(J.$$.fragment,e),f(K.$$.fragment,e),f(V.$$.fragment,e),f(X.$$.fragment,e),f(Z.$$.fragment,e),f(ee.$$.fragment,e),f(te.$$.fragment,e),f(x),f(re.$$.fragment,e),f(ie.$$.fragment,e),f(ne.$$.fragment,e),f(he.$$.fragment,e),f(se.$$.fragment,e),f(ue.$$.fragment,e),Ke=!1},d(e){t(p),e&&t(v),w(s,e),e&&t(k),e&&t(A),w(Q),e&&t(qe),e&&t(fe),e&&t(We),e&&t(E),w(U),e&&t(Fe),w(Y,e),e&&t(Me),e&&t(H),w(J),e&&t(Re),w(K,e),e&&t(Ie),e&&t(T),w(V),e&&t(Le),w(X,e),e&&t(je),e&&t(P),w(Z),e&&t(Be),w(ee,e),e&&t(Oe),e&&t(S),w(te),e&&t(De),ce[y].d(e),e&&t(de),e&&t(C),w(re),e&&t(Ge),w(ie,e),e&&t(Qe),e&&t(N),w(ne),e&&t(Ue),w(he,e),e&&t(Ye),e&&t(z),w(se),e&&t(Je),w(ue,e)}}}const _o={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function bo(G,p,v){let s="pt";return fo(()=>{const k=new URLSearchParams(window.location.search);v(0,s=k.get("fw")||"pt")}),[s]}class Eo extends so{constructor(p){super();lo(this,p,bo,vo,uo,{})}}export{Eo as default,_o as metadata};
