import{S as Oe,i as Qe,s as Re,e as n,k as u,w as ne,t as h,M as Fe,c as r,d as a,m as f,a as i,x as re,h as p,b as s,F as t,g as l,y as ie,L as je,q as oe,o as se,B as le}from"../../chunks/vendor-6b77c823.js";import{D as Ke}from"../../chunks/Docstring-abef54e3.js";import{I as Ee}from"../../chunks/IconCopyLink-7a11ce68.js";function Ve(he){let g,z,c,m,H,_,pe,N,ue,W,d,C,S,k,fe,Z,ce,X,y,me,M,ge,de,B,G,ve,O,x,J,we,Q,v,Pe,T,Ce,ye,$,be,R,A,_e,F,w,b,I,E,ke,Y,Me,j,P,L,Te,q,$e,K;return _=new Ee({}),k=new Ee({}),E=new Ee({}),L=new Ke({props:{name:"class transformers.CpmTokenizer",anchor:"transformers.CpmTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16279/src/transformers/models/cpm/tokenization_cpm.py#L31"}}),{c(){g=n("meta"),z=u(),c=n("h1"),m=n("a"),H=n("span"),ne(_.$$.fragment),pe=u(),N=n("span"),ue=h("CPM"),W=u(),d=n("h2"),C=n("a"),S=n("span"),ne(k.$$.fragment),fe=u(),Z=n("span"),ce=h("Overview"),X=u(),y=n("p"),me=h("The CPM model was proposed in "),M=n("a"),ge=h("CPM: A Large-scale Generative Chinese Pre-trained Language Model"),de=h(` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),B=u(),G=n("p"),ve=h("The abstract from the paper is the following:"),O=u(),x=n("p"),J=n("em"),we=h(`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),Q=u(),v=n("p"),Pe=h("This model was contributed by "),T=n("a"),Ce=h("canwenxu"),ye=h(`. The original implementation can be found
here: `),$=n("a"),be=h("https://github.com/TsinghuaAI/CPM-Generate"),R=u(),A=n("p"),_e=h("Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),F=u(),w=n("h2"),b=n("a"),I=n("span"),ne(E.$$.fragment),ke=u(),Y=n("span"),Me=h("CpmTokenizer"),j=u(),P=n("div"),ne(L.$$.fragment),Te=u(),q=n("p"),$e=h("Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),this.h()},l(e){const o=Fe('[data-svelte="svelte-1phssyn"]',document.head);g=r(o,"META",{name:!0,content:!0}),o.forEach(a),z=f(e),c=r(e,"H1",{class:!0});var V=i(c);m=r(V,"A",{id:!0,class:!0,href:!0});var Le=i(m);H=r(Le,"SPAN",{});var ze=i(H);re(_.$$.fragment,ze),ze.forEach(a),Le.forEach(a),pe=f(V),N=r(V,"SPAN",{});var Ge=i(N);ue=p(Ge,"CPM"),Ge.forEach(a),V.forEach(a),W=f(e),d=r(e,"H2",{class:!0});var U=i(d);C=r(U,"A",{id:!0,class:!0,href:!0});var xe=i(C);S=r(xe,"SPAN",{});var Ae=i(S);re(k.$$.fragment,Ae),Ae.forEach(a),xe.forEach(a),fe=f(U),Z=r(U,"SPAN",{});var He=i(Z);ce=p(He,"Overview"),He.forEach(a),U.forEach(a),X=f(e),y=r(e,"P",{});var ee=i(y);me=p(ee,"The CPM model was proposed in "),M=r(ee,"A",{href:!0,rel:!0});var Ne=i(M);ge=p(Ne,"CPM: A Large-scale Generative Chinese Pre-trained Language Model"),Ne.forEach(a),de=p(ee,` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),ee.forEach(a),B=f(e),G=r(e,"P",{});var Se=i(G);ve=p(Se,"The abstract from the paper is the following:"),Se.forEach(a),O=f(e),x=r(e,"P",{});var Ze=i(x);J=r(Ze,"EM",{});var Je=i(J);we=p(Je,`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),Je.forEach(a),Ze.forEach(a),Q=f(e),v=r(e,"P",{});var D=i(v);Pe=p(D,"This model was contributed by "),T=r(D,"A",{href:!0,rel:!0});var Ie=i(T);Ce=p(Ie,"canwenxu"),Ie.forEach(a),ye=p(D,`. The original implementation can be found
here: `),$=r(D,"A",{href:!0,rel:!0});var Ye=i($);be=p(Ye,"https://github.com/TsinghuaAI/CPM-Generate"),Ye.forEach(a),D.forEach(a),R=f(e),A=r(e,"P",{});var qe=i(A);_e=p(qe,"Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),qe.forEach(a),F=f(e),w=r(e,"H2",{class:!0});var ae=i(w);b=r(ae,"A",{id:!0,class:!0,href:!0});var De=i(b);I=r(De,"SPAN",{});var We=i(I);re(E.$$.fragment,We),We.forEach(a),De.forEach(a),ke=f(ae),Y=r(ae,"SPAN",{});var Xe=i(Y);Me=p(Xe,"CpmTokenizer"),Xe.forEach(a),ae.forEach(a),j=f(e),P=r(e,"DIV",{class:!0});var te=i(P);re(L.$$.fragment,te),Te=f(te),q=r(te,"P",{});var Be=i(q);$e=p(Be,"Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),Be.forEach(a),te.forEach(a),this.h()},h(){s(g,"name","hf:doc:metadata"),s(g,"content",JSON.stringify(Ue)),s(m,"id","cpm"),s(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(m,"href","#cpm"),s(c,"class","relative group"),s(C,"id","overview"),s(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(C,"href","#overview"),s(d,"class","relative group"),s(M,"href","https://arxiv.org/abs/2012.00413"),s(M,"rel","nofollow"),s(T,"href","https://huggingface.co/canwenxu"),s(T,"rel","nofollow"),s($,"href","https://github.com/TsinghuaAI/CPM-Generate"),s($,"rel","nofollow"),s(b,"id","transformers.CpmTokenizer"),s(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(b,"href","#transformers.CpmTokenizer"),s(w,"class","relative group"),s(P,"class","docstring")},m(e,o){t(document.head,g),l(e,z,o),l(e,c,o),t(c,m),t(m,H),ie(_,H,null),t(c,pe),t(c,N),t(N,ue),l(e,W,o),l(e,d,o),t(d,C),t(C,S),ie(k,S,null),t(d,fe),t(d,Z),t(Z,ce),l(e,X,o),l(e,y,o),t(y,me),t(y,M),t(M,ge),t(y,de),l(e,B,o),l(e,G,o),t(G,ve),l(e,O,o),l(e,x,o),t(x,J),t(J,we),l(e,Q,o),l(e,v,o),t(v,Pe),t(v,T),t(T,Ce),t(v,ye),t(v,$),t($,be),l(e,R,o),l(e,A,o),t(A,_e),l(e,F,o),l(e,w,o),t(w,b),t(b,I),ie(E,I,null),t(w,ke),t(w,Y),t(Y,Me),l(e,j,o),l(e,P,o),ie(L,P,null),t(P,Te),t(P,q),t(q,$e),K=!0},p:je,i(e){K||(oe(_.$$.fragment,e),oe(k.$$.fragment,e),oe(E.$$.fragment,e),oe(L.$$.fragment,e),K=!0)},o(e){se(_.$$.fragment,e),se(k.$$.fragment,e),se(E.$$.fragment,e),se(L.$$.fragment,e),K=!1},d(e){a(g),e&&a(z),e&&a(c),le(_),e&&a(W),e&&a(d),le(k),e&&a(X),e&&a(y),e&&a(B),e&&a(G),e&&a(O),e&&a(x),e&&a(Q),e&&a(v),e&&a(R),e&&a(A),e&&a(F),e&&a(w),le(E),e&&a(j),e&&a(P),le(L)}}}const Ue={local:"cpm",sections:[{local:"overview",title:"Overview"},{local:"transformers.CpmTokenizer",title:"CpmTokenizer"}],title:"CPM"};function ea(he,g,z){let{fw:c}=g;return he.$$set=m=>{"fw"in m&&z(0,c=m.fw)},[c]}class ra extends Oe{constructor(g){super();Qe(this,g,ea,Ve,Re,{fw:0})}}export{ra as default,Ue as metadata};
