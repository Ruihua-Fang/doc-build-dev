import{S as Ze,i as ea,s as aa,e as o,k as c,w as Ue,t as i,M as ta,c as r,d as a,m as f,a as n,x as je,h as l,b as p,F as t,g as h,y as Ge,L as oa,q as He,o as Qe,B as Ye}from"../../chunks/vendor-4833417e.js";import{I as De}from"../../chunks/IconCopyLink-4b81c553.js";function ra(ne){let m,x,u,v,B,E,se,W,ie,z,d,g,M,k,le,O,he,I,w,pe,y,ce,fe,K,T,ue,F,C,N,ve,J,P,me,U,_,q,de,ge,R,we,$,_e,Se,j,S,be,A,Le,Ee,G,b,ke,V,ye,Re,H,L,Ae,X,Xe,xe,Q;return E=new De({}),k=new De({}),{c(){m=o("meta"),x=c(),u=o("h1"),v=o("a"),B=o("span"),Ue(E.$$.fragment),se=c(),W=o("span"),ie=i("XLS-R"),z=c(),d=o("h2"),g=o("a"),M=o("span"),Ue(k.$$.fragment),le=c(),O=o("span"),he=i("Overview"),I=c(),w=o("p"),pe=i("The XLS-R model was proposed in "),y=o("a"),ce=i("XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale"),fe=i(` by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman
Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli.`),K=c(),T=o("p"),ue=i("The abstract from the paper is the following:"),F=c(),C=o("p"),N=o("em"),ve=i(`This paper presents XLS-R, a large-scale model for cross-lingual speech representation learning based on wav2vec 2.0.
We train models with up to 2B parameters on nearly half a million hours of publicly available speech audio in 128
languages, an order of magnitude more public data than the largest known prior work. Our evaluation covers a wide range
of tasks, domains, data regimes and languages, both high and low-resource. On the CoVoST-2 speech translation
benchmark, we improve the previous state of the art by an average of 7.4 BLEU over 21 translation directions into
English. For speech recognition, XLS-R improves over the best known prior work on BABEL, MLS, CommonVoice as well as
VoxPopuli, lowering error rates by 14-34% relative on average. XLS-R also sets a new state of the art on VoxLingua107
language identification. Moreover, we show that with sufficient model size, cross-lingual pretraining can outperform
English-only pretraining when translating English speech into other languages, a setting which favors monolingual
pretraining. We hope XLS-R can help to improve speech processing tasks for many more languages of the world.`),J=c(),P=o("p"),me=i("Tips:"),U=c(),_=o("ul"),q=o("li"),de=i("XLS-R is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ge=c(),R=o("li"),we=i(`XLS-R model was trained using connectionist temporal classification (CTC) so the model output has to be decoded using
`),$=o("a"),_e=i("Wav2Vec2CTCTokenizer"),Se=i("."),j=c(),S=o("p"),be=i("Relevant checkpoints can be found under "),A=o("a"),Le=i("https://huggingface.co/models?other=xls_r"),Ee=i("."),G=c(),b=o("p"),ke=i("XLS-R\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),V=o("a"),ye=i("Wav2Vec2\u2019s documentation page"),Re=i("."),H=c(),L=o("p"),Ae=i("The original code can be found "),X=o("a"),Xe=i("here"),xe=i("."),this.h()},l(e){const s=ta('[data-svelte="svelte-1phssyn"]',document.head);m=r(s,"META",{name:!0,content:!0}),s.forEach(a),x=f(e),u=r(e,"H1",{class:!0});var Y=n(u);v=r(Y,"A",{id:!0,class:!0,href:!0});var Te=n(v);B=r(Te,"SPAN",{});var Ce=n(B);je(E.$$.fragment,Ce),Ce.forEach(a),Te.forEach(a),se=f(Y),W=r(Y,"SPAN",{});var Pe=n(W);ie=l(Pe,"XLS-R"),Pe.forEach(a),Y.forEach(a),z=f(e),d=r(e,"H2",{class:!0});var D=n(d);g=r(D,"A",{id:!0,class:!0,href:!0});var $e=n(g);M=r($e,"SPAN",{});var Ve=n(M);je(k.$$.fragment,Ve),Ve.forEach(a),$e.forEach(a),le=f(D),O=r(D,"SPAN",{});var Be=n(O);he=l(Be,"Overview"),Be.forEach(a),D.forEach(a),I=f(e),w=r(e,"P",{});var Z=n(w);pe=l(Z,"The XLS-R model was proposed in "),y=r(Z,"A",{href:!0,rel:!0});var We=n(y);ce=l(We,"XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale"),We.forEach(a),fe=l(Z,` by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman
Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli.`),Z.forEach(a),K=f(e),T=r(e,"P",{});var Me=n(T);ue=l(Me,"The abstract from the paper is the following:"),Me.forEach(a),F=f(e),C=r(e,"P",{});var Oe=n(C);N=r(Oe,"EM",{});var Ne=n(N);ve=l(Ne,`This paper presents XLS-R, a large-scale model for cross-lingual speech representation learning based on wav2vec 2.0.
We train models with up to 2B parameters on nearly half a million hours of publicly available speech audio in 128
languages, an order of magnitude more public data than the largest known prior work. Our evaluation covers a wide range
of tasks, domains, data regimes and languages, both high and low-resource. On the CoVoST-2 speech translation
benchmark, we improve the previous state of the art by an average of 7.4 BLEU over 21 translation directions into
English. For speech recognition, XLS-R improves over the best known prior work on BABEL, MLS, CommonVoice as well as
VoxPopuli, lowering error rates by 14-34% relative on average. XLS-R also sets a new state of the art on VoxLingua107
language identification. Moreover, we show that with sufficient model size, cross-lingual pretraining can outperform
English-only pretraining when translating English speech into other languages, a setting which favors monolingual
pretraining. We hope XLS-R can help to improve speech processing tasks for many more languages of the world.`),Ne.forEach(a),Oe.forEach(a),J=f(e),P=r(e,"P",{});var qe=n(P);me=l(qe,"Tips:"),qe.forEach(a),U=f(e),_=r(e,"UL",{});var ee=n(_);q=r(ee,"LI",{});var ze=n(q);de=l(ze,"XLS-R is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ze.forEach(a),ge=f(ee),R=r(ee,"LI",{});var ae=n(R);we=l(ae,`XLS-R model was trained using connectionist temporal classification (CTC) so the model output has to be decoded using
`),$=r(ae,"A",{href:!0});var Ie=n($);_e=l(Ie,"Wav2Vec2CTCTokenizer"),Ie.forEach(a),Se=l(ae,"."),ae.forEach(a),ee.forEach(a),j=f(e),S=r(e,"P",{});var te=n(S);be=l(te,"Relevant checkpoints can be found under "),A=r(te,"A",{href:!0,rel:!0});var Ke=n(A);Le=l(Ke,"https://huggingface.co/models?other=xls_r"),Ke.forEach(a),Ee=l(te,"."),te.forEach(a),G=f(e),b=r(e,"P",{});var oe=n(b);ke=l(oe,"XLS-R\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),V=r(oe,"A",{href:!0});var Fe=n(V);ye=l(Fe,"Wav2Vec2\u2019s documentation page"),Fe.forEach(a),Re=l(oe,"."),oe.forEach(a),H=f(e),L=r(e,"P",{});var re=n(L);Ae=l(re,"The original code can be found "),X=r(re,"A",{href:!0,rel:!0});var Je=n(X);Xe=l(Je,"here"),Je.forEach(a),xe=l(re,"."),re.forEach(a),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(na)),p(v,"id","xlsr"),p(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(v,"href","#xlsr"),p(u,"class","relative group"),p(g,"id","overview"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#overview"),p(d,"class","relative group"),p(y,"href","https://arxiv.org/abs/2111.09296"),p(y,"rel","nofollow"),p($,"href","/docs/transformers/pr_16143/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),p(A,"href","https://huggingface.co/models?other=xls_r"),p(A,"rel","nofollow"),p(V,"href","wav2vec2"),p(X,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),p(X,"rel","nofollow")},m(e,s){t(document.head,m),h(e,x,s),h(e,u,s),t(u,v),t(v,B),Ge(E,B,null),t(u,se),t(u,W),t(W,ie),h(e,z,s),h(e,d,s),t(d,g),t(g,M),Ge(k,M,null),t(d,le),t(d,O),t(O,he),h(e,I,s),h(e,w,s),t(w,pe),t(w,y),t(y,ce),t(w,fe),h(e,K,s),h(e,T,s),t(T,ue),h(e,F,s),h(e,C,s),t(C,N),t(N,ve),h(e,J,s),h(e,P,s),t(P,me),h(e,U,s),h(e,_,s),t(_,q),t(q,de),t(_,ge),t(_,R),t(R,we),t(R,$),t($,_e),t(R,Se),h(e,j,s),h(e,S,s),t(S,be),t(S,A),t(A,Le),t(S,Ee),h(e,G,s),h(e,b,s),t(b,ke),t(b,V),t(V,ye),t(b,Re),h(e,H,s),h(e,L,s),t(L,Ae),t(L,X),t(X,Xe),t(L,xe),Q=!0},p:oa,i(e){Q||(He(E.$$.fragment,e),He(k.$$.fragment,e),Q=!0)},o(e){Qe(E.$$.fragment,e),Qe(k.$$.fragment,e),Q=!1},d(e){a(m),e&&a(x),e&&a(u),Ye(E),e&&a(z),e&&a(d),Ye(k),e&&a(I),e&&a(w),e&&a(K),e&&a(T),e&&a(F),e&&a(C),e&&a(J),e&&a(P),e&&a(U),e&&a(_),e&&a(j),e&&a(S),e&&a(G),e&&a(b),e&&a(H),e&&a(L)}}}const na={local:"xlsr",sections:[{local:"overview",title:"Overview"}],title:"XLS-R"};function sa(ne,m,x){let{fw:u}=m;return ne.$$set=v=>{"fw"in v&&x(0,u=v.fw)},[u]}class ha extends Ze{constructor(m){super();ea(this,m,sa,ra,aa,{fw:0})}}export{ha as default,na as metadata};
