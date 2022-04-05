import{S as en,i as tn,s as an,e as n,k as p,w as A,t as o,M as on,c as r,d as a,m as d,a as l,x as C,h as s,b as c,N as Zt,F as t,g as h,y as R,L as sn,q as I,o as M,B as D,v as nn}from"../../chunks/vendor-1e8b365d.js";import{Y as rn}from"../../chunks/Youtube-c2a8cc39.js";import{I as mt}from"../../chunks/IconCopyLink-483c28ba.js";import{C as Qo}from"../../chunks/CodeBlock-e5764662.js";function ln(Yo){let $,ft,j,O,$e,K,ea,je,ta,gt,k,aa,qe,Se,oa,sa,Te,Le,na,ra,yt,ue,la,wt,q,N,Pe,V,ia,J,ca,Ae,ha,pa,vt,S,Z,Ko,da,ee,Vo,bt,me,te,ae,ua,Ce,ma,fa,ga,f,fe,Re,ya,wa,va,ge,Ie,ba,ka,_a,ye,Me,Ea,xa,$a,u,De,ja,qa,Oe,Sa,Ta,Ne,La,Pa,He,Aa,Ca,Fe,Ra,Ia,Ue,Ma,Da,Be,Oa,Na,We,Ha,Fa,Ua,H,Ge,Ba,Wa,ze,Ga,za,Xa,F,Xe,Qa,Ya,Qe,Ka,Va,kt,oe,_t,we,Ja,Et,g,Jo,xt,T,U,Ye,se,Za,Ke,eo,$t,B,to,Ve,ao,oo,jt,L,W,Je,ne,so,Ze,no,qt,ve,ro,St,w,lo,et,io,co,tt,ho,po,re,uo,mo,Tt,le,Lt,P,G,at,ie,fo,ot,go,Pt,_,yo,be,wo,vo,st,bo,ko,At,v,_o,ce,Eo,xo,he,$o,jo,nt,qo,So,Ct,pe,Rt,z,To,rt,Lo,Po,It,de,Mt,y,Zo,Dt,E,Ao,lt,Co,Ro,it,Io,Mo,Ot,x,Do,ct,Oo,No,ht,Ho,Fo,Nt,X,Uo,pt,Bo,Wo,Ht;return K=new mt({}),V=new mt({}),oe=new Qo({props:{code:`title = "Ask Rick a Question"
description = 
"""
The bot was trained to answer questions based on Rick and Morty dialogues. Ask Rick anything!
<img src="https://huggingface.co/spaces/course-demos/Rick_and_Morty_QA/resolve/main/rick.png" width=200px>
"""

article = "Check out [the original Rick and Morty Bot](https://huggingface.co/spaces/kingabzpro/Rick_and_Morty_Bot) that this demo is based off of."

gr.Interface(
    fn=predict, 
    inputs="textbox", 
    outputs="text",
    title=title, 
    description=description, 
    article=article,
    theme="dark-huggingface", 
    examples=[["What are you doing?"], ["Where should we time travel to?"]] 
).launch() `,highlighted:`title = <span class="hljs-string">&quot;Ask Rick a Question&quot;</span>
description = 
<span class="hljs-string">&quot;&quot;&quot;
The bot was trained to answer questions based on Rick and Morty dialogues. Ask Rick anything!
&lt;img src=&quot;https://huggingface.co/spaces/course-demos/Rick_and_Morty_QA/resolve/main/rick.png&quot; width=200px&gt;
&quot;&quot;&quot;</span>

article = <span class="hljs-string">&quot;Check out [the original Rick and Morty Bot](https://huggingface.co/spaces/kingabzpro/Rick_and_Morty_Bot) that this demo is based off of.&quot;</span>

gr.Interface(
    fn=predict, 
    inputs=<span class="hljs-string">&quot;textbox&quot;</span>, 
    outputs=<span class="hljs-string">&quot;text&quot;</span>,
    title=title, 
    description=description, 
    article=article,
    theme=<span class="hljs-string">&quot;dark-huggingface&quot;</span>, 
    examples=[[<span class="hljs-string">&quot;What are you doing?&quot;</span>], [<span class="hljs-string">&quot;Where should we time travel to?&quot;</span>]] 
).launch() `}}),se=new mt({}),ne=new mt({}),le=new rn({props:{id:"LS9Y2wDVI0k"}}),ie=new mt({}),pe=new Qo({props:{code:`from pathlib import Path
import torch
import gradio as gr
from torch import nn

LABELS = Path("class_names.txt").read_text().splitlines()

model = nn.Sequential(
    nn.Conv2d(1, 32, 3, padding="same"),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(32, 64, 3, padding="same"),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(64, 128, 3, padding="same"),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Flatten(),
    nn.Linear(1152, 256),
    nn.ReLU(),
    nn.Linear(256, len(LABELS)),
)
state_dict = torch.load("pytorch_model.bin", map_location="cpu")
model.load_state_dict(state_dict, strict=False)
model.eval()


def predict(im):
    x = torch.tensor(im, dtype=torch.float32).unsqueeze(0).unsqueeze(0) / 255.0
    with torch.no_grad():
        out = model(x)
    probabilities = torch.nn.functional.softmax(out[0], dim=0)
    values, indices = torch.topk(probabilities, 5)
    return {LABELS[i]: v.item() for i, v in zip(indices, values)}`,highlighted:`<span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr
<span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> nn

LABELS = Path(<span class="hljs-string">&quot;class_names.txt&quot;</span>).read_text().splitlines()

model = nn.Sequential(
    nn.Conv2d(<span class="hljs-number">1</span>, <span class="hljs-number">32</span>, <span class="hljs-number">3</span>, padding=<span class="hljs-string">&quot;same&quot;</span>),
    nn.ReLU(),
    nn.MaxPool2d(<span class="hljs-number">2</span>),
    nn.Conv2d(<span class="hljs-number">32</span>, <span class="hljs-number">64</span>, <span class="hljs-number">3</span>, padding=<span class="hljs-string">&quot;same&quot;</span>),
    nn.ReLU(),
    nn.MaxPool2d(<span class="hljs-number">2</span>),
    nn.Conv2d(<span class="hljs-number">64</span>, <span class="hljs-number">128</span>, <span class="hljs-number">3</span>, padding=<span class="hljs-string">&quot;same&quot;</span>),
    nn.ReLU(),
    nn.MaxPool2d(<span class="hljs-number">2</span>),
    nn.Flatten(),
    nn.Linear(<span class="hljs-number">1152</span>, <span class="hljs-number">256</span>),
    nn.ReLU(),
    nn.Linear(<span class="hljs-number">256</span>, <span class="hljs-built_in">len</span>(LABELS)),
)
state_dict = torch.load(<span class="hljs-string">&quot;pytorch_model.bin&quot;</span>, map_location=<span class="hljs-string">&quot;cpu&quot;</span>)
model.load_state_dict(state_dict, strict=<span class="hljs-literal">False</span>)
model.<span class="hljs-built_in">eval</span>()


<span class="hljs-keyword">def</span> <span class="hljs-title function_">predict</span>(<span class="hljs-params">im</span>):
    x = torch.tensor(im, dtype=torch.float32).unsqueeze(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>) / <span class="hljs-number">255.0</span>
    <span class="hljs-keyword">with</span> torch.no_grad():
        out = model(x)
    probabilities = torch.nn.functional.softmax(out[<span class="hljs-number">0</span>], dim=<span class="hljs-number">0</span>)
    values, indices = torch.topk(probabilities, <span class="hljs-number">5</span>)
    <span class="hljs-keyword">return</span> {LABELS[i]: v.item() <span class="hljs-keyword">for</span> i, v <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(indices, values)}`}}),de=new Qo({props:{code:`interface = gr.Interface(
    predict,
    inputs="sketchpad",
    outputs="label",
    theme="huggingface",
    title="Sketch Recognition",
    description="Who wants to play Pictionary? Draw a common object like a shovel or a laptop, and the algorithm will guess in real time!",
    article="<p style='text-align: center'>Sketch Recognition | Demo Model</p>",
    live=True,
)
interface.launch(share=True)`,highlighted:`interface = gr.Interface(
    predict,
    inputs=<span class="hljs-string">&quot;sketchpad&quot;</span>,
    outputs=<span class="hljs-string">&quot;label&quot;</span>,
    theme=<span class="hljs-string">&quot;huggingface&quot;</span>,
    title=<span class="hljs-string">&quot;Sketch Recognition&quot;</span>,
    description=<span class="hljs-string">&quot;Who wants to play Pictionary? Draw a common object like a shovel or a laptop, and the algorithm will guess in real time!&quot;</span>,
    article=<span class="hljs-string">&quot;&lt;p style=&#x27;text-align: center&#x27;&gt;Sketch Recognition | Demo Model&lt;/p&gt;&quot;</span>,
    live=<span class="hljs-literal">True</span>,
)
interface.launch(share=<span class="hljs-literal">True</span>)`}}),{c(){$=n("meta"),ft=p(),j=n("h1"),O=n("a"),$e=n("span"),A(K.$$.fragment),ea=p(),je=n("span"),ta=o("Sharing demos with others"),gt=p(),k=n("p"),aa=o(`Now that you\u2019ve built a demo, you\u2019ll probably want to share it with others. Gradio demos
can be shared in two ways, using a `),qe=n("strong"),Se=n("em"),oa=o("temporary share link"),sa=o(" or "),Te=n("strong"),Le=n("em"),na=o("permanent hosting on Spaces"),ra=o("."),yt=p(),ue=n("p"),la=o("We\u2019ll cover both of these approaches shortly. But before you share your demo, you may want to polish it up\u2026"),wt=p(),q=n("h3"),N=n("a"),Pe=n("span"),A(V.$$.fragment),ia=p(),J=n("span"),ca=o("Polishing your "),Ae=n("code"),ha=o("gradio"),pa=o(" demo:"),vt=p(),S=n("div"),Z=n("img"),da=p(),ee=n("img"),bt=p(),me=n("ul"),te=n("li"),ae=n("p"),ua=o("As you can see in the image above, we can add additional content to our demos. The "),Ce=n("code"),ma=o("Interface"),fa=o(" class supports some optional parameters:"),ga=p(),f=n("ul"),fe=n("li"),Re=n("code"),ya=o("title"),wa=o(": you can give a title to your demo, which appears above the input and output components."),va=p(),ge=n("li"),Ie=n("code"),ba=o("description"),ka=o(": you can give a description (in text, Markdown, or HTML) for the interface, which appears above the input and output components and below the title."),_a=p(),ye=n("li"),Me=n("code"),Ea=o("article"),xa=o(": you can also write an expanded article (in text, Markdown, or HTML) explaining the interface; if provided, appears below the input and output components."),$a=p(),u=n("li"),De=n("code"),ja=o("theme"),qa=o(": don\u2019t like the default colors? Set the theme to use one of "),Oe=n("code"),Sa=o("default"),Ta=o(", "),Ne=n("code"),La=o("huggingface"),Pa=o(", "),He=n("code"),Aa=o("grass"),Ca=o(", "),Fe=n("code"),Ra=o("peach"),Ia=o(". You can also add the "),Ue=n("code"),Ma=o("dark-"),Da=o(" prefix, e.g. "),Be=n("code"),Oa=o("dark-peach"),Na=o(" for dark theme (or just "),We=n("code"),Ha=o("dark"),Fa=o(" for the default dark theme)."),Ua=p(),H=n("li"),Ge=n("code"),Ba=o("examples"),Wa=o(": to make your demo "),ze=n("em"),Ga=o("way easier to use"),za=o(", you can provide some example inputs for the function. These appear below the UI components and can be used to populate the interface. These should be provided as a nested list, in which the outer list consists of samples and each inner list consists of an input corresponding to each input component."),Xa=p(),F=n("li"),Xe=n("code"),Qa=o("live"),Ya=o(": if you want to make your demo \u201Clive\u201D, meaning that your model reruns every time the input changes, you can set "),Qe=n("code"),Ka=o("live=True"),Va=o(". This makes sense to use with quick models (we\u2019ll see an example at the end of this section)"),kt=p(),A(oe.$$.fragment),_t=p(),we=n("p"),Ja=o("Using the options above, we end up with a more complete interface. Try the interface below:"),Et=p(),g=n("iframe"),xt=p(),T=n("h3"),U=n("a"),Ye=n("span"),A(se.$$.fragment),Za=p(),Ke=n("span"),eo=o("Temporary share links"),$t=o(`

Now that we have a working demo of our machine learning model, let's learn how to easily share a link to our interface.
Interfaces can be easily shared publicly by setting \`share=True\` in the \`launch()\` method.
        
\`\`\`
gr.Interface(classify_image, "image", "label").launch(share=True)
\`\`\`
        
This generates a public, shareable link that you can send to anybody! When you send this link, the user on the other side can try out the model in their browser for up to 72 hours. Because the processing happens on your device (as long as your device stays on!), you don't have to worry about any packaging any dependencies. If you're working out of a Google colab notebook, a share link is always automatically created. It usually looks something like this: **XXXXX.gradio.app**. Although the link is served through a gradio link, we are only a proxy for your local server, and do not store any data sent through the interfaces.
`),B=n("p"),to=o("Keep in mind, however, that these links are publicly accessible, meaning that anyone can use your model for prediction! Therefore, make sure not to expose any sensitive information through the functions you write, or allow any critical changes to occur on your device. If you set "),Ve=n("code"),ao=o("share=False"),oo=o(" (the default), only a local link is created."),jt=p(),L=n("h3"),W=n("a"),Je=n("span"),A(ne.$$.fragment),so=p(),Ze=n("span"),no=o("Permanent Hosting on Hugging Face Spaces"),qt=p(),ve=n("p"),ro=o("A share link that you can pass around to collegues is cool, but how can you permanently host your demo and have it exist in its own \u201Cspace\u201D on the internet?"),St=p(),w=n("p"),lo=o("Hugging Face Spaces provides the infrastructure to permanently host your Gradio model on the internet, "),et=n("strong"),io=o("for free"),co=o(`! Spaces allows you to create and push to a (public or private) repo,
where your gradio
interface code will exist in an `),tt=n("code"),ho=o("app.py"),po=o(" file. "),re=n("a"),uo=o("Read a step-by-step tutorial"),mo=o(" to get started, or watch an example video below."),Tt=p(),A(le.$$.fragment),Lt=p(),P=n("h2"),G=n("a"),at=n("span"),A(ie.$$.fragment),fo=p(),ot=n("span"),go=o("\u270F\uFE0F Let's apply it!"),Pt=p(),_=n("p"),yo=o("Using what we just learned in the sectios so far, let\u2019s create the sketch recognition demo we saw in "),be=n("a"),wo=o("section one of this chapter"),vo=o(". Let\u2019s add some customization to our interface and set "),st=n("code"),bo=o("share=True"),ko=o(" to create a public link we can pass around."),At=p(),v=n("p"),_o=o("We can load the labels from "),ce=n("a"),Eo=o("class_names.txt"),xo=o(" and load the pre-trained pytorch model from "),he=n("a"),$o=o("pytorch_model.bin"),jo=o(". Download these files by following the link and clicking download on the top left corner of the file preview. Let\u2019s take a look at the code below to see how we use these files to load our model and create a "),nt=n("code"),qo=o("predict()"),So=o(" function."),Ct=p(),A(pe.$$.fragment),Rt=p(),z=n("p"),To=o("Now that we have a "),rt=n("code"),Lo=o("predict()"),Po=o(" function. The next step is to define and launch our gradio interface:"),It=p(),A(de.$$.fragment),Mt=p(),y=n("iframe"),Dt=p(),E=n("p"),Ao=o("Notice the "),lt=n("code"),Co=o("live=True"),Ro=o(" parameter in "),it=n("code"),Io=o("Interface"),Mo=o(`, which means that the sketch demo makes
a prediction every time someone draws on the sketchpad (no submit button!).`),Ot=p(),x=n("p"),Do=o("Furthermore, we also set the "),ct=n("code"),Oo=o("share=True"),No=o(" argument in the "),ht=n("code"),Ho=o("launch()"),Fo=o(` method.
This will create a public link that you can
send to anyone! When you send this link, the user on the other side can try out the
sketch recognition model. To reiterate, you culd also host the model on Hugging Face Spaces,
which is how we are able to embed the demo above.`),Nt=p(),X=n("p"),Uo=o("Next up, in section 5, we cover other ways "),pt=n("code"),Bo=o("gradio"),Wo=o(" can be used with Hugging Face!"),this.h()},l(e){const i=on('[data-svelte="svelte-1phssyn"]',document.head);$=r(i,"META",{name:!0,content:!0}),i.forEach(a),ft=d(e),j=r(e,"H1",{class:!0});var Ft=l(j);O=r(Ft,"A",{id:!0,class:!0,href:!0});var es=l(O);$e=r(es,"SPAN",{});var ts=l($e);C(K.$$.fragment,ts),ts.forEach(a),es.forEach(a),ea=d(Ft),je=r(Ft,"SPAN",{});var as=l(je);ta=s(as,"Sharing demos with others"),as.forEach(a),Ft.forEach(a),gt=d(e),k=r(e,"P",{});var ke=l(k);aa=s(ke,`Now that you\u2019ve built a demo, you\u2019ll probably want to share it with others. Gradio demos
can be shared in two ways, using a `),qe=r(ke,"STRONG",{});var os=l(qe);Se=r(os,"EM",{});var ss=l(Se);oa=s(ss,"temporary share link"),ss.forEach(a),os.forEach(a),sa=s(ke," or "),Te=r(ke,"STRONG",{});var ns=l(Te);Le=r(ns,"EM",{});var rs=l(Le);na=s(rs,"permanent hosting on Spaces"),rs.forEach(a),ns.forEach(a),ra=s(ke,"."),ke.forEach(a),yt=d(e),ue=r(e,"P",{});var ls=l(ue);la=s(ls,"We\u2019ll cover both of these approaches shortly. But before you share your demo, you may want to polish it up\u2026"),ls.forEach(a),wt=d(e),q=r(e,"H3",{class:!0});var Ut=l(q);N=r(Ut,"A",{id:!0,class:!0,href:!0});var is=l(N);Pe=r(is,"SPAN",{});var cs=l(Pe);C(V.$$.fragment,cs),cs.forEach(a),is.forEach(a),ia=d(Ut),J=r(Ut,"SPAN",{});var Bt=l(J);ca=s(Bt,"Polishing your "),Ae=r(Bt,"CODE",{});var hs=l(Ae);ha=s(hs,"gradio"),hs.forEach(a),pa=s(Bt," demo:"),Bt.forEach(a),Ut.forEach(a),vt=d(e),S=r(e,"DIV",{class:!0});var Wt=l(S);Z=r(Wt,"IMG",{class:!0,src:!0,alt:!0}),da=d(Wt),ee=r(Wt,"IMG",{class:!0,src:!0,alt:!0}),Wt.forEach(a),bt=d(e),me=r(e,"UL",{});var ps=l(me);te=r(ps,"LI",{});var Gt=l(te);ae=r(Gt,"P",{});var zt=l(ae);ua=s(zt,"As you can see in the image above, we can add additional content to our demos. The "),Ce=r(zt,"CODE",{});var ds=l(Ce);ma=s(ds,"Interface"),ds.forEach(a),fa=s(zt," class supports some optional parameters:"),zt.forEach(a),ga=d(Gt),f=r(Gt,"UL",{});var b=l(f);fe=r(b,"LI",{});var Go=l(fe);Re=r(Go,"CODE",{});var us=l(Re);ya=s(us,"title"),us.forEach(a),wa=s(Go,": you can give a title to your demo, which appears above the input and output components."),Go.forEach(a),va=d(b),ge=r(b,"LI",{});var zo=l(ge);Ie=r(zo,"CODE",{});var ms=l(Ie);ba=s(ms,"description"),ms.forEach(a),ka=s(zo,": you can give a description (in text, Markdown, or HTML) for the interface, which appears above the input and output components and below the title."),zo.forEach(a),_a=d(b),ye=r(b,"LI",{});var Xo=l(ye);Me=r(Xo,"CODE",{});var fs=l(Me);Ea=s(fs,"article"),fs.forEach(a),xa=s(Xo,": you can also write an expanded article (in text, Markdown, or HTML) explaining the interface; if provided, appears below the input and output components."),Xo.forEach(a),$a=d(b),u=r(b,"LI",{});var m=l(u);De=r(m,"CODE",{});var gs=l(De);ja=s(gs,"theme"),gs.forEach(a),qa=s(m,": don\u2019t like the default colors? Set the theme to use one of "),Oe=r(m,"CODE",{});var ys=l(Oe);Sa=s(ys,"default"),ys.forEach(a),Ta=s(m,", "),Ne=r(m,"CODE",{});var ws=l(Ne);La=s(ws,"huggingface"),ws.forEach(a),Pa=s(m,", "),He=r(m,"CODE",{});var vs=l(He);Aa=s(vs,"grass"),vs.forEach(a),Ca=s(m,", "),Fe=r(m,"CODE",{});var bs=l(Fe);Ra=s(bs,"peach"),bs.forEach(a),Ia=s(m,". You can also add the "),Ue=r(m,"CODE",{});var ks=l(Ue);Ma=s(ks,"dark-"),ks.forEach(a),Da=s(m," prefix, e.g. "),Be=r(m,"CODE",{});var _s=l(Be);Oa=s(_s,"dark-peach"),_s.forEach(a),Na=s(m," for dark theme (or just "),We=r(m,"CODE",{});var Es=l(We);Ha=s(Es,"dark"),Es.forEach(a),Fa=s(m," for the default dark theme)."),m.forEach(a),Ua=d(b),H=r(b,"LI",{});var dt=l(H);Ge=r(dt,"CODE",{});var xs=l(Ge);Ba=s(xs,"examples"),xs.forEach(a),Wa=s(dt,": to make your demo "),ze=r(dt,"EM",{});var $s=l(ze);Ga=s($s,"way easier to use"),$s.forEach(a),za=s(dt,", you can provide some example inputs for the function. These appear below the UI components and can be used to populate the interface. These should be provided as a nested list, in which the outer list consists of samples and each inner list consists of an input corresponding to each input component."),dt.forEach(a),Xa=d(b),F=r(b,"LI",{});var ut=l(F);Xe=r(ut,"CODE",{});var js=l(Xe);Qa=s(js,"live"),js.forEach(a),Ya=s(ut,": if you want to make your demo \u201Clive\u201D, meaning that your model reruns every time the input changes, you can set "),Qe=r(ut,"CODE",{});var qs=l(Qe);Ka=s(qs,"live=True"),qs.forEach(a),Va=s(ut,". This makes sense to use with quick models (we\u2019ll see an example at the end of this section)"),ut.forEach(a),b.forEach(a),Gt.forEach(a),ps.forEach(a),kt=d(e),C(oe.$$.fragment,e),_t=d(e),we=r(e,"P",{});var Ss=l(we);Ja=s(Ss,"Using the options above, we end up with a more complete interface. Try the interface below:"),Ss.forEach(a),Et=d(e),g=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(a),xt=d(e),T=r(e,"H3",{class:!0});var Xt=l(T);U=r(Xt,"A",{id:!0,class:!0,href:!0});var Ts=l(U);Ye=r(Ts,"SPAN",{});var Ls=l(Ye);C(se.$$.fragment,Ls),Ls.forEach(a),Ts.forEach(a),Za=d(Xt),Ke=r(Xt,"SPAN",{});var Ps=l(Ke);eo=s(Ps,"Temporary share links"),Ps.forEach(a),Xt.forEach(a),$t=s(e,`

Now that we have a working demo of our machine learning model, let's learn how to easily share a link to our interface.
Interfaces can be easily shared publicly by setting \`share=True\` in the \`launch()\` method.
        
\`\`\`
gr.Interface(classify_image, "image", "label").launch(share=True)
\`\`\`
        
This generates a public, shareable link that you can send to anybody! When you send this link, the user on the other side can try out the model in their browser for up to 72 hours. Because the processing happens on your device (as long as your device stays on!), you don't have to worry about any packaging any dependencies. If you're working out of a Google colab notebook, a share link is always automatically created. It usually looks something like this: **XXXXX.gradio.app**. Although the link is served through a gradio link, we are only a proxy for your local server, and do not store any data sent through the interfaces.
`),B=r(e,"P",{});var Qt=l(B);to=s(Qt,"Keep in mind, however, that these links are publicly accessible, meaning that anyone can use your model for prediction! Therefore, make sure not to expose any sensitive information through the functions you write, or allow any critical changes to occur on your device. If you set "),Ve=r(Qt,"CODE",{});var As=l(Ve);ao=s(As,"share=False"),As.forEach(a),oo=s(Qt," (the default), only a local link is created."),Qt.forEach(a),jt=d(e),L=r(e,"H3",{class:!0});var Yt=l(L);W=r(Yt,"A",{id:!0,class:!0,href:!0});var Cs=l(W);Je=r(Cs,"SPAN",{});var Rs=l(Je);C(ne.$$.fragment,Rs),Rs.forEach(a),Cs.forEach(a),so=d(Yt),Ze=r(Yt,"SPAN",{});var Is=l(Ze);no=s(Is,"Permanent Hosting on Hugging Face Spaces"),Is.forEach(a),Yt.forEach(a),qt=d(e),ve=r(e,"P",{});var Ms=l(ve);ro=s(Ms,"A share link that you can pass around to collegues is cool, but how can you permanently host your demo and have it exist in its own \u201Cspace\u201D on the internet?"),Ms.forEach(a),St=d(e),w=r(e,"P",{});var Q=l(w);lo=s(Q,"Hugging Face Spaces provides the infrastructure to permanently host your Gradio model on the internet, "),et=r(Q,"STRONG",{});var Ds=l(et);io=s(Ds,"for free"),Ds.forEach(a),co=s(Q,`! Spaces allows you to create and push to a (public or private) repo,
where your gradio
interface code will exist in an `),tt=r(Q,"CODE",{});var Os=l(tt);ho=s(Os,"app.py"),Os.forEach(a),po=s(Q," file. "),re=r(Q,"A",{href:!0,rel:!0});var Ns=l(re);uo=s(Ns,"Read a step-by-step tutorial"),Ns.forEach(a),mo=s(Q," to get started, or watch an example video below."),Q.forEach(a),Tt=d(e),C(le.$$.fragment,e),Lt=d(e),P=r(e,"H2",{class:!0});var Kt=l(P);G=r(Kt,"A",{id:!0,class:!0,href:!0});var Hs=l(G);at=r(Hs,"SPAN",{});var Fs=l(at);C(ie.$$.fragment,Fs),Fs.forEach(a),Hs.forEach(a),fo=d(Kt),ot=r(Kt,"SPAN",{});var Us=l(ot);go=s(Us,"\u270F\uFE0F Let's apply it!"),Us.forEach(a),Kt.forEach(a),Pt=d(e),_=r(e,"P",{});var _e=l(_);yo=s(_e,"Using what we just learned in the sectios so far, let\u2019s create the sketch recognition demo we saw in "),be=r(_e,"A",{href:!0});var Bs=l(be);wo=s(Bs,"section one of this chapter"),Bs.forEach(a),vo=s(_e,". Let\u2019s add some customization to our interface and set "),st=r(_e,"CODE",{});var Ws=l(st);bo=s(Ws,"share=True"),Ws.forEach(a),ko=s(_e," to create a public link we can pass around."),_e.forEach(a),At=d(e),v=r(e,"P",{});var Y=l(v);_o=s(Y,"We can load the labels from "),ce=r(Y,"A",{href:!0,rel:!0});var Gs=l(ce);Eo=s(Gs,"class_names.txt"),Gs.forEach(a),xo=s(Y," and load the pre-trained pytorch model from "),he=r(Y,"A",{href:!0,rel:!0});var zs=l(he);$o=s(zs,"pytorch_model.bin"),zs.forEach(a),jo=s(Y,". Download these files by following the link and clicking download on the top left corner of the file preview. Let\u2019s take a look at the code below to see how we use these files to load our model and create a "),nt=r(Y,"CODE",{});var Xs=l(nt);qo=s(Xs,"predict()"),Xs.forEach(a),So=s(Y," function."),Y.forEach(a),Ct=d(e),C(pe.$$.fragment,e),Rt=d(e),z=r(e,"P",{});var Vt=l(z);To=s(Vt,"Now that we have a "),rt=r(Vt,"CODE",{});var Qs=l(rt);Lo=s(Qs,"predict()"),Qs.forEach(a),Po=s(Vt," function. The next step is to define and launch our gradio interface:"),Vt.forEach(a),It=d(e),C(de.$$.fragment,e),Mt=d(e),y=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(y).forEach(a),Dt=d(e),E=r(e,"P",{});var Ee=l(E);Ao=s(Ee,"Notice the "),lt=r(Ee,"CODE",{});var Ys=l(lt);Co=s(Ys,"live=True"),Ys.forEach(a),Ro=s(Ee," parameter in "),it=r(Ee,"CODE",{});var Ks=l(it);Io=s(Ks,"Interface"),Ks.forEach(a),Mo=s(Ee,`, which means that the sketch demo makes
a prediction every time someone draws on the sketchpad (no submit button!).`),Ee.forEach(a),Ot=d(e),x=r(e,"P",{});var xe=l(x);Do=s(xe,"Furthermore, we also set the "),ct=r(xe,"CODE",{});var Vs=l(ct);Oo=s(Vs,"share=True"),Vs.forEach(a),No=s(xe," argument in the "),ht=r(xe,"CODE",{});var Js=l(ht);Ho=s(Js,"launch()"),Js.forEach(a),Fo=s(xe,` method.
This will create a public link that you can
send to anyone! When you send this link, the user on the other side can try out the
sketch recognition model. To reiterate, you culd also host the model on Hugging Face Spaces,
which is how we are able to embed the demo above.`),xe.forEach(a),Nt=d(e),X=r(e,"P",{});var Jt=l(X);Uo=s(Jt,"Next up, in section 5, we cover other ways "),pt=r(Jt,"CODE",{});var Zs=l(pt);Bo=s(Zs,"gradio"),Zs.forEach(a),Wo=s(Jt," can be used with Hugging Face!"),Jt.forEach(a),this.h()},h(){c($,"name","hf:doc:metadata"),c($,"content",JSON.stringify(cn)),c(O,"id","sharing-demos-with-others"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#sharing-demos-with-others"),c(j,"class","relative group"),c(N,"id","polishing-your-gradio-demo"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#polishing-your-gradio-demo"),c(q,"class","relative group"),c(Z,"class","block dark:hidden"),Zt(Z.src,Ko="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter9/gradio-demo-overview.png")||c(Z,"src",Ko),c(Z,"alt","Overview of a gradio interface"),c(ee,"class","hidden dark:block"),Zt(ee.src,Vo="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter9/gradio-demo-overview-dark.png")||c(ee,"src",Vo),c(ee,"alt","Overview of a gradio interface"),c(S,"class","flex justify-center"),Zt(g.src,Jo="https://hf.space/gradioiframe/course-demos/Rick_and_Morty_QA/+")||c(g,"src",Jo),c(g,"frameborder","0"),c(g,"height","800"),c(g,"title","Gradio app"),c(g,"class","container p-0 flex-grow space-iframe"),c(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(U,"id","temporary-share-links"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#temporary-share-links"),c(T,"class","relative group"),c(W,"id","permanent-hosting-on-hugging-face-spaces"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#permanent-hosting-on-hugging-face-spaces"),c(L,"class","relative group"),c(re,"href","https://huggingface.co/blog/gradio-spaces"),c(re,"rel","nofollow"),c(G,"id","lets-apply-it"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#lets-apply-it"),c(P,"class","relative group"),c(be,"href","/course/chapter9/section1"),c(ce,"href","https://huggingface.co/spaces/dawood/Sketch-Recognition/blob/main/class_names.txt"),c(ce,"rel","nofollow"),c(he,"href","https://huggingface.co/spaces/dawood/Sketch-Recognition/blob/main/pytorch_model.bin"),c(he,"rel","nofollow"),Zt(y.src,Zo="https://hf.space/gradioiframe/dawood/Sketch-Recognition/+")||c(y,"src",Zo),c(y,"frameborder","0"),c(y,"height","650"),c(y,"title","Gradio app"),c(y,"class","container p-0 flex-grow space-iframe"),c(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){t(document.head,$),h(e,ft,i),h(e,j,i),t(j,O),t(O,$e),R(K,$e,null),t(j,ea),t(j,je),t(je,ta),h(e,gt,i),h(e,k,i),t(k,aa),t(k,qe),t(qe,Se),t(Se,oa),t(k,sa),t(k,Te),t(Te,Le),t(Le,na),t(k,ra),h(e,yt,i),h(e,ue,i),t(ue,la),h(e,wt,i),h(e,q,i),t(q,N),t(N,Pe),R(V,Pe,null),t(q,ia),t(q,J),t(J,ca),t(J,Ae),t(Ae,ha),t(J,pa),h(e,vt,i),h(e,S,i),t(S,Z),t(S,da),t(S,ee),h(e,bt,i),h(e,me,i),t(me,te),t(te,ae),t(ae,ua),t(ae,Ce),t(Ce,ma),t(ae,fa),t(te,ga),t(te,f),t(f,fe),t(fe,Re),t(Re,ya),t(fe,wa),t(f,va),t(f,ge),t(ge,Ie),t(Ie,ba),t(ge,ka),t(f,_a),t(f,ye),t(ye,Me),t(Me,Ea),t(ye,xa),t(f,$a),t(f,u),t(u,De),t(De,ja),t(u,qa),t(u,Oe),t(Oe,Sa),t(u,Ta),t(u,Ne),t(Ne,La),t(u,Pa),t(u,He),t(He,Aa),t(u,Ca),t(u,Fe),t(Fe,Ra),t(u,Ia),t(u,Ue),t(Ue,Ma),t(u,Da),t(u,Be),t(Be,Oa),t(u,Na),t(u,We),t(We,Ha),t(u,Fa),t(f,Ua),t(f,H),t(H,Ge),t(Ge,Ba),t(H,Wa),t(H,ze),t(ze,Ga),t(H,za),t(f,Xa),t(f,F),t(F,Xe),t(Xe,Qa),t(F,Ya),t(F,Qe),t(Qe,Ka),t(F,Va),h(e,kt,i),R(oe,e,i),h(e,_t,i),h(e,we,i),t(we,Ja),h(e,Et,i),h(e,g,i),h(e,xt,i),h(e,T,i),t(T,U),t(U,Ye),R(se,Ye,null),t(T,Za),t(T,Ke),t(Ke,eo),h(e,$t,i),h(e,B,i),t(B,to),t(B,Ve),t(Ve,ao),t(B,oo),h(e,jt,i),h(e,L,i),t(L,W),t(W,Je),R(ne,Je,null),t(L,so),t(L,Ze),t(Ze,no),h(e,qt,i),h(e,ve,i),t(ve,ro),h(e,St,i),h(e,w,i),t(w,lo),t(w,et),t(et,io),t(w,co),t(w,tt),t(tt,ho),t(w,po),t(w,re),t(re,uo),t(w,mo),h(e,Tt,i),R(le,e,i),h(e,Lt,i),h(e,P,i),t(P,G),t(G,at),R(ie,at,null),t(P,fo),t(P,ot),t(ot,go),h(e,Pt,i),h(e,_,i),t(_,yo),t(_,be),t(be,wo),t(_,vo),t(_,st),t(st,bo),t(_,ko),h(e,At,i),h(e,v,i),t(v,_o),t(v,ce),t(ce,Eo),t(v,xo),t(v,he),t(he,$o),t(v,jo),t(v,nt),t(nt,qo),t(v,So),h(e,Ct,i),R(pe,e,i),h(e,Rt,i),h(e,z,i),t(z,To),t(z,rt),t(rt,Lo),t(z,Po),h(e,It,i),R(de,e,i),h(e,Mt,i),h(e,y,i),h(e,Dt,i),h(e,E,i),t(E,Ao),t(E,lt),t(lt,Co),t(E,Ro),t(E,it),t(it,Io),t(E,Mo),h(e,Ot,i),h(e,x,i),t(x,Do),t(x,ct),t(ct,Oo),t(x,No),t(x,ht),t(ht,Ho),t(x,Fo),h(e,Nt,i),h(e,X,i),t(X,Uo),t(X,pt),t(pt,Bo),t(X,Wo),Ht=!0},p:sn,i(e){Ht||(I(K.$$.fragment,e),I(V.$$.fragment,e),I(oe.$$.fragment,e),I(se.$$.fragment,e),I(ne.$$.fragment,e),I(le.$$.fragment,e),I(ie.$$.fragment,e),I(pe.$$.fragment,e),I(de.$$.fragment,e),Ht=!0)},o(e){M(K.$$.fragment,e),M(V.$$.fragment,e),M(oe.$$.fragment,e),M(se.$$.fragment,e),M(ne.$$.fragment,e),M(le.$$.fragment,e),M(ie.$$.fragment,e),M(pe.$$.fragment,e),M(de.$$.fragment,e),Ht=!1},d(e){a($),e&&a(ft),e&&a(j),D(K),e&&a(gt),e&&a(k),e&&a(yt),e&&a(ue),e&&a(wt),e&&a(q),D(V),e&&a(vt),e&&a(S),e&&a(bt),e&&a(me),e&&a(kt),D(oe,e),e&&a(_t),e&&a(we),e&&a(Et),e&&a(g),e&&a(xt),e&&a(T),D(se),e&&a($t),e&&a(B),e&&a(jt),e&&a(L),D(ne),e&&a(qt),e&&a(ve),e&&a(St),e&&a(w),e&&a(Tt),D(le,e),e&&a(Lt),e&&a(P),D(ie),e&&a(Pt),e&&a(_),e&&a(At),e&&a(v),e&&a(Ct),D(pe,e),e&&a(Rt),e&&a(z),e&&a(It),D(de,e),e&&a(Mt),e&&a(y),e&&a(Dt),e&&a(E),e&&a(Ot),e&&a(x),e&&a(Nt),e&&a(X)}}}const cn={local:"sharing-demos-with-others",sections:[{local:null,sections:[{local:"polishing-your-gradio-demo",title:"Polishing your `gradio` demo:"},{local:"temporary-share-links",title:"Temporary share links"},{local:"permanent-hosting-on-hugging-face-spaces",title:"Permanent Hosting on Hugging Face Spaces"}],title:null},{local:"lets-apply-it",title:"\u270F\uFE0F Let's apply it!"}],title:"Sharing demos with others"};function hn(Yo){return nn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends en{constructor($){super();tn(this,$,hn,ln,an,{})}}export{fn as default,cn as metadata};
