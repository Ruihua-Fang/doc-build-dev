import{S as ul,i as fl,s as hl,e as l,k as d,w as m,t as s,M as ml,c as r,d as t,m as u,a as n,x as _,h as o,b as p,N as dl,F as a,g as c,y as v,q as g,o as b,B as w,v as _l}from"../chunks/vendor-aa873a46.js";import{T as vl}from"../chunks/Tip-f7f252ab.js";import{I as Sa}from"../chunks/IconCopyLink-d0ca3106.js";import{C as P}from"../chunks/CodeBlock-1f14baf3.js";function gl(Oa){let f,X,$,E,I,y,de,F,H,Y,j,L,D,ue;return{c(){f=l("p"),X=s("torchaudio\u2019s "),$=l("code"),E=s("sox_io"),I=d(),y=l("a"),de=s("backend"),F=s(" supports decoding "),H=l("code"),Y=s("mp3"),j=s(" files. Unfortunately, the "),L=l("code"),D=s("sox_io"),ue=s(" backend is only available on Linux/macOS, and is not supported by Windows."),this.h()},l(N){f=r(N,"P",{});var h=n(f);X=o(h,"torchaudio\u2019s "),$=r(h,"CODE",{});var k=n($);E=o(k,"sox_io"),k.forEach(t),I=u(h),y=r(h,"A",{href:!0,rel:!0});var Q=n(y);de=o(Q,"backend"),Q.forEach(t),F=o(h," supports decoding "),H=r(h,"CODE",{});var Ve=n(H);Y=o(Ve,"mp3"),Ve.forEach(t),j=o(h," files. Unfortunately, the "),L=r(h,"CODE",{});var We=n(L);D=o(We,"sox_io"),We.forEach(t),ue=o(h," backend is only available on Linux/macOS, and is not supported by Windows."),h.forEach(t),this.h()},h(){p(y,"href","https://pytorch.org/audio/stable/backend.html#"),p(y,"rel","nofollow")},m(N,h){c(N,f,h),a(f,X),a(f,$),a($,E),a(f,I),a(f,y),a(y,de),a(f,F),a(f,H),a(H,Y),a(f,j),a(f,L),a(L,D),a(f,ue)},d(N){N&&t(f)}}}function bl(Oa){let f,X,$,E,I,y,de,F,H,Y,j,L,D,ue,N,h,k,Q,Ve,We,ia,xt,At,fe,qt,Me,Pt,Dt,Ia,V,Z,ca,he,zt,pa,Tt,Fa,z,Ct,Ue,St,Ot,Re,It,Ft,Ha,me,La,T,Ht,_e,Lt,Nt,ve,Vt,Wt,Na,ge,Va,ee,Wa,ae,Mt,be,Ut,Rt,Ma,we,Ua,W,te,da,$e,Gt,ua,Jt,Ra,x,Bt,fa,Kt,Xt,ha,Yt,Qt,ma,Zt,es,Ga,ye,_a,as,ts,Ja,ke,Ba,A,ss,va,os,ls,ga,rs,ns,ba,is,cs,Ka,M,wa,ps,ds,$a,us,fs,Xa,Ee,Ya,C,hs,ya,ms,_s,Ge,vs,gs,Qa,je,Za,U,se,ka,xe,bs,Ea,ws,et,S,$s,Ae,ys,ks,Je,Es,js,at,qe,tt,oe,xs,Be,As,qs,st,Pe,ot,R,Ke,uo,Ps,Xe,fo,lt,G,le,ja,De,Ds,xa,zs,rt,q,Ts,Ye,Cs,Ss,ze,Os,Is,Aa,Fs,Hs,nt,re,qa,J,Ls,Te,Ns,Vs,Pa,Ws,Ms,Us,Ce,B,Rs,Se,Gs,Js,Da,Bs,Ks,Xs,K,Ys,Oe,Qs,Zs,Ie,eo,ao,it,Fe,ct,ne,to,za,so,oo,pt,He,dt,O,lo,Ta,ro,no,Qe,io,co,ut,Le,ft;return y=new Sa({}),he=new Sa({}),me=new P({props:{code:"pip install datasets[audio]",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>pip install datasets[audio]'}}),ge=new P({props:{code:`pip install librosa
pip install torchaudio`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pip install librosa
<span class="hljs-meta">&gt;&gt;&gt; </span>pip install torchaudio`}}),ee=new vl({props:{warning:!0,$$slots:{default:[gl]},$$scope:{ctx:Oa}}}),we=new P({props:{code:`from datasets import load_dataset, load_metric, Audio
common_voice = load_dataset("common_voice", "tr", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric, Audio
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;tr&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),$e=new Sa({}),ke=new P({props:{code:'common_voice[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
    -<span class="hljs-number">8.8930130e-05</span>, -<span class="hljs-number">3.8027763e-05</span>, -<span class="hljs-number">2.9146671e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">48000</span>}`}}),Ee=new P({props:{code:'common_voice[0]["path"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;path&quot;</span>]
/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-<span class="hljs-number">6.1</span>-<span class="hljs-number">2020</span>-<span class="hljs-number">12</span>-<span class="hljs-number">11</span>/tr/clips/common_voice_tr_21921195.mp3`}}),je=new P({props:{code:'my_audio_dataset = my_audio_dataset.cast_column("paths_to_my_audio_files", Audio())',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>my_audio_dataset = my_audio_dataset.cast_column(<span class="hljs-string">&quot;paths_to_my_audio_files&quot;</span>, Audio())'}}),xe=new Sa({}),qe=new P({props:{code:'common_voice = common_voice.cast_column("audio", Audio(sampling_rate=16_000))',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = common_voice.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))'}}),Pe=new P({props:{code:'common_voice_train[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
-<span class="hljs-number">7.4556941e-05</span>, -<span class="hljs-number">1.4621433e-05</span>, -<span class="hljs-number">5.7861507e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}`}}),De=new Sa({}),Fe=new P({props:{code:`from transformers import AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
model_checkpoint = "facebook/wav2vec2-large-xlsr-53"
# after defining a vocab.json file you can instantiate a tokenizer object:
tokenizer = AutoTokenizer("./vocab.json", unk_token="[UNK]", pad_token="[PAD]", word_delimiter_token="|")
feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;facebook/wav2vec2-large-xlsr-53&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># after defining a vocab.json file you can instantiate a tokenizer object:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer(<span class="hljs-string">&quot;./vocab.json&quot;</span>, unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>, pad_token=<span class="hljs-string">&quot;[PAD]&quot;</span>, word_delimiter_token=<span class="hljs-string">&quot;|&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`}}),He=new P({props:{code:`from transformers import Wav2Vec2Processor
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)`}}),Le=new P({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]
    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])
    with processor.as_target_processor():
        batch["labels"] = processor(batch["sentence"]).input_ids
    return batch
common_voice_train = common_voice_train.map(prepare_dataset, remove_columns=common_voice_train.column_names)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;sentence&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train = common_voice_train.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=common_voice_train.column_names)`}}),{c(){f=l("meta"),X=d(),$=l("h1"),E=l("a"),I=l("span"),m(y.$$.fragment),de=d(),F=l("span"),H=s("Process audio data"),Y=d(),j=l("p"),L=s("\u{1F917} Datasets supports an "),D=l("a"),ue=s("Audio"),N=s(" feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),h=d(),k=l("ul"),Q=l("li"),Ve=s("Load your own custom audio dataset."),We=d(),ia=l("li"),xt=s("Resample audio files."),At=d(),fe=l("li"),qt=s("Use "),Me=l("a"),Pt=s("Dataset.map()"),Dt=s(" with audio files."),Ia=d(),V=l("h2"),Z=l("a"),ca=l("span"),m(he.$$.fragment),zt=d(),pa=l("span"),Tt=s("Installation"),Fa=d(),z=l("p"),Ct=s("The "),Ue=l("a"),St=s("Audio"),Ot=s(" feature is an experimental feature and should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Re=l("a"),It=s("Audio"),Ft=s(" feature with pip:"),Ha=d(),m(me.$$.fragment),La=d(),T=l("p"),Ht=s("Users should also install "),_e=l("a"),Lt=s("torchaudio"),Nt=s(" and "),ve=l("a"),Vt=s("librosa"),Wt=s(", two common libraries used by \u{1F917} Datasets for handling audio data."),Na=d(),m(ge.$$.fragment),Va=d(),m(ee.$$.fragment),Wa=d(),ae=l("p"),Mt=s("Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),be=l("a"),Ut=s("Common Voice"),Rt=s(" dataset with the Turkish configuration:"),Ma=d(),m(we.$$.fragment),Ua=d(),W=l("h2"),te=l("a"),da=l("span"),m($e.$$.fragment),Gt=d(),ua=l("span"),Jt=s("Audio datasets"),Ra=d(),x=l("p"),Bt=s("Audio datasets commonly have an "),fa=l("code"),Kt=s("audio"),Xt=s(" and "),ha=l("code"),Yt=s("path"),Qt=s(" or "),ma=l("code"),Zt=s("file"),es=s(" column."),Ga=d(),ye=l("p"),_a=l("code"),as=s("audio"),ts=s(" is the actual audio file that is loaded and resampled on-the-fly upon calling it."),Ja=d(),m(ke.$$.fragment),Ba=d(),A=l("p"),ss=s("When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),va=l("code"),os=s('common_voice[0]["audio"]'),ls=s(". If you query an audio file with "),ga=l("code"),rs=s('common_voice["audio"][0]'),ns=s(" instead, "),ba=l("strong"),is=s("all"),cs=s(" the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),Ka=d(),M=l("p"),wa=l("code"),ps=s("path"),ds=s(" or "),$a=l("code"),us=s("file"),fs=s(" is an absolute path to an audio file."),Xa=d(),m(Ee.$$.fragment),Ya=d(),C=l("p"),hs=s("The "),ya=l("code"),ms=s("path"),_s=s(" is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Ge=l("a"),vs=s("Dataset.cast_column()"),gs=s(":"),Qa=d(),m(je.$$.fragment),Za=d(),U=l("h2"),se=l("a"),ka=l("span"),m(xe.$$.fragment),bs=d(),Ea=l("span"),ws=s("Resample"),et=d(),S=l("p"),$s=s("Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=l("a"),ys=s("XLSR-Wav2Vec2"),ks=s(" model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Je=l("a"),Es=s("Dataset.cast_column()"),js=s(" to downsample the sampling rate to 16kHz:"),at=d(),m(qe.$$.fragment),tt=d(),oe=l("p"),xs=s("The next time you load the audio file, the "),Be=l("a"),As=s("Audio"),qs=s(" feature will load and resample it to 16kHz:"),st=d(),m(Pe.$$.fragment),ot=d(),R=l("div"),Ke=l("img"),Ps=d(),Xe=l("img"),lt=d(),G=l("h2"),le=l("a"),ja=l("span"),m(De.$$.fragment),Ds=d(),xa=l("span"),zs=s("Map"),rt=d(),q=l("p"),Ts=s("Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Ye=l("a"),Cs=s("Dataset.map()"),Ss=s(", which is useful for preprocessing all of your audio data at once. Start with a "),ze=l("a"),Os=s("speech recognition model"),Is=s(" of your choice, and load a "),Aa=l("code"),Fs=s("processor"),Hs=s(" object that contains:"),nt=d(),re=l("ol"),qa=l("li"),J=l("p"),Ls=s("A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=l("a"),Ns=s("Hub"),Vs=s(" contains a predefined feature extractor that can be easily loaded with "),Pa=l("code"),Ws=s("AutoFeatureExtractor.from_pretrained(...)"),Ms=s("."),Us=d(),Ce=l("li"),B=l("p"),Rs=s("A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Se=l("a"),Gs=s("facebook/wav2vec2-base-960h"),Js=s(", contain a predefined tokenizer that can be easily loaded with "),Da=l("code"),Bs=s("AutoTokenizer.from_pretrained(...)"),Ks=s("."),Xs=d(),K=l("p"),Ys=s("For pretrained speech recognition models, such as "),Oe=l("a"),Qs=s("facebook/wav2vec2-large-xlsr-53"),Zs=s(", a tokenizer needs to be created from the target text as explained "),Ie=l("a"),eo=s("here"),ao=s(". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),it=d(),m(Fe.$$.fragment),ct=d(),ne=l("p"),to=s("For fine-tuned speech recognition models, you can simply load a predefined "),za=l("code"),so=s("processor"),oo=s(" object with:"),pt=d(),m(He.$$.fragment),dt=d(),O=l("p"),lo=s("Make sure to include the "),Ta=l("code"),ro=s("audio"),no=s(" key in your preprocessing function when you call "),Qe=l("a"),io=s("Dataset.map()"),co=s(" so that you are actually resampling the audio data:"),ut=d(),m(Le.$$.fragment),this.h()},l(e){const i=ml('[data-svelte="svelte-1phssyn"]',document.head);f=r(i,"META",{name:!0,content:!0}),i.forEach(t),X=u(e),$=r(e,"H1",{class:!0});var Ne=n($);E=r(Ne,"A",{id:!0,class:!0,href:!0});var ho=n(E);I=r(ho,"SPAN",{});var mo=n(I);_(y.$$.fragment,mo),mo.forEach(t),ho.forEach(t),de=u(Ne),F=r(Ne,"SPAN",{});var _o=n(F);H=o(_o,"Process audio data"),_o.forEach(t),Ne.forEach(t),Y=u(e),j=r(e,"P",{});var ht=n(j);L=o(ht,"\u{1F917} Datasets supports an "),D=r(ht,"A",{href:!0});var vo=n(D);ue=o(vo,"Audio"),vo.forEach(t),N=o(ht," feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),ht.forEach(t),h=u(e),k=r(e,"UL",{});var Ze=n(k);Q=r(Ze,"LI",{});var go=n(Q);Ve=o(go,"Load your own custom audio dataset."),go.forEach(t),We=u(Ze),ia=r(Ze,"LI",{});var bo=n(ia);xt=o(bo,"Resample audio files."),bo.forEach(t),At=u(Ze),fe=r(Ze,"LI",{});var mt=n(fe);qt=o(mt,"Use "),Me=r(mt,"A",{href:!0});var wo=n(Me);Pt=o(wo,"Dataset.map()"),wo.forEach(t),Dt=o(mt," with audio files."),mt.forEach(t),Ze.forEach(t),Ia=u(e),V=r(e,"H2",{class:!0});var _t=n(V);Z=r(_t,"A",{id:!0,class:!0,href:!0});var $o=n(Z);ca=r($o,"SPAN",{});var yo=n(ca);_(he.$$.fragment,yo),yo.forEach(t),$o.forEach(t),zt=u(_t),pa=r(_t,"SPAN",{});var ko=n(pa);Tt=o(ko,"Installation"),ko.forEach(t),_t.forEach(t),Fa=u(e),z=r(e,"P",{});var ea=n(z);Ct=o(ea,"The "),Ue=r(ea,"A",{href:!0});var Eo=n(Ue);St=o(Eo,"Audio"),Eo.forEach(t),Ot=o(ea," feature is an experimental feature and should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Re=r(ea,"A",{href:!0});var jo=n(Re);It=o(jo,"Audio"),jo.forEach(t),Ft=o(ea," feature with pip:"),ea.forEach(t),Ha=u(e),_(me.$$.fragment,e),La=u(e),T=r(e,"P",{});var aa=n(T);Ht=o(aa,"Users should also install "),_e=r(aa,"A",{href:!0,rel:!0});var xo=n(_e);Lt=o(xo,"torchaudio"),xo.forEach(t),Nt=o(aa," and "),ve=r(aa,"A",{href:!0,rel:!0});var Ao=n(ve);Vt=o(Ao,"librosa"),Ao.forEach(t),Wt=o(aa,", two common libraries used by \u{1F917} Datasets for handling audio data."),aa.forEach(t),Na=u(e),_(ge.$$.fragment,e),Va=u(e),_(ee.$$.fragment,e),Wa=u(e),ae=r(e,"P",{});var vt=n(ae);Mt=o(vt,"Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),be=r(vt,"A",{href:!0,rel:!0});var qo=n(be);Ut=o(qo,"Common Voice"),qo.forEach(t),Rt=o(vt," dataset with the Turkish configuration:"),vt.forEach(t),Ma=u(e),_(we.$$.fragment,e),Ua=u(e),W=r(e,"H2",{class:!0});var gt=n(W);te=r(gt,"A",{id:!0,class:!0,href:!0});var Po=n(te);da=r(Po,"SPAN",{});var Do=n(da);_($e.$$.fragment,Do),Do.forEach(t),Po.forEach(t),Gt=u(gt),ua=r(gt,"SPAN",{});var zo=n(ua);Jt=o(zo,"Audio datasets"),zo.forEach(t),gt.forEach(t),Ra=u(e),x=r(e,"P",{});var ie=n(x);Bt=o(ie,"Audio datasets commonly have an "),fa=r(ie,"CODE",{});var To=n(fa);Kt=o(To,"audio"),To.forEach(t),Xt=o(ie," and "),ha=r(ie,"CODE",{});var Co=n(ha);Yt=o(Co,"path"),Co.forEach(t),Qt=o(ie," or "),ma=r(ie,"CODE",{});var So=n(ma);Zt=o(So,"file"),So.forEach(t),es=o(ie," column."),ie.forEach(t),Ga=u(e),ye=r(e,"P",{});var po=n(ye);_a=r(po,"CODE",{});var Oo=n(_a);as=o(Oo,"audio"),Oo.forEach(t),ts=o(po," is the actual audio file that is loaded and resampled on-the-fly upon calling it."),po.forEach(t),Ja=u(e),_(ke.$$.fragment,e),Ba=u(e),A=r(e,"P",{});var ce=n(A);ss=o(ce,"When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),va=r(ce,"CODE",{});var Io=n(va);os=o(Io,'common_voice[0]["audio"]'),Io.forEach(t),ls=o(ce,". If you query an audio file with "),ga=r(ce,"CODE",{});var Fo=n(ga);rs=o(Fo,'common_voice["audio"][0]'),Fo.forEach(t),ns=o(ce," instead, "),ba=r(ce,"STRONG",{});var Ho=n(ba);is=o(Ho,"all"),Ho.forEach(t),cs=o(ce," the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),ce.forEach(t),Ka=u(e),M=r(e,"P",{});var Ca=n(M);wa=r(Ca,"CODE",{});var Lo=n(wa);ps=o(Lo,"path"),Lo.forEach(t),ds=o(Ca," or "),$a=r(Ca,"CODE",{});var No=n($a);us=o(No,"file"),No.forEach(t),fs=o(Ca," is an absolute path to an audio file."),Ca.forEach(t),Xa=u(e),_(Ee.$$.fragment,e),Ya=u(e),C=r(e,"P",{});var ta=n(C);hs=o(ta,"The "),ya=r(ta,"CODE",{});var Vo=n(ya);ms=o(Vo,"path"),Vo.forEach(t),_s=o(ta," is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Ge=r(ta,"A",{href:!0});var Wo=n(Ge);vs=o(Wo,"Dataset.cast_column()"),Wo.forEach(t),gs=o(ta,":"),ta.forEach(t),Qa=u(e),_(je.$$.fragment,e),Za=u(e),U=r(e,"H2",{class:!0});var bt=n(U);se=r(bt,"A",{id:!0,class:!0,href:!0});var Mo=n(se);ka=r(Mo,"SPAN",{});var Uo=n(ka);_(xe.$$.fragment,Uo),Uo.forEach(t),Mo.forEach(t),bs=u(bt),Ea=r(bt,"SPAN",{});var Ro=n(Ea);ws=o(Ro,"Resample"),Ro.forEach(t),bt.forEach(t),et=u(e),S=r(e,"P",{});var sa=n(S);$s=o(sa,"Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=r(sa,"A",{href:!0,rel:!0});var Go=n(Ae);ys=o(Go,"XLSR-Wav2Vec2"),Go.forEach(t),ks=o(sa," model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Je=r(sa,"A",{href:!0});var Jo=n(Je);Es=o(Jo,"Dataset.cast_column()"),Jo.forEach(t),js=o(sa," to downsample the sampling rate to 16kHz:"),sa.forEach(t),at=u(e),_(qe.$$.fragment,e),tt=u(e),oe=r(e,"P",{});var wt=n(oe);xs=o(wt,"The next time you load the audio file, the "),Be=r(wt,"A",{href:!0});var Bo=n(Be);As=o(Bo,"Audio"),Bo.forEach(t),qs=o(wt," feature will load and resample it to 16kHz:"),wt.forEach(t),st=u(e),_(Pe.$$.fragment,e),ot=u(e),R=r(e,"DIV",{class:!0});var $t=n(R);Ke=r($t,"IMG",{class:!0,src:!0}),Ps=u($t),Xe=r($t,"IMG",{class:!0,src:!0}),$t.forEach(t),lt=u(e),G=r(e,"H2",{class:!0});var yt=n(G);le=r(yt,"A",{id:!0,class:!0,href:!0});var Ko=n(le);ja=r(Ko,"SPAN",{});var Xo=n(ja);_(De.$$.fragment,Xo),Xo.forEach(t),Ko.forEach(t),Ds=u(yt),xa=r(yt,"SPAN",{});var Yo=n(xa);zs=o(Yo,"Map"),Yo.forEach(t),yt.forEach(t),rt=u(e),q=r(e,"P",{});var pe=n(q);Ts=o(pe,"Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Ye=r(pe,"A",{href:!0});var Qo=n(Ye);Cs=o(Qo,"Dataset.map()"),Qo.forEach(t),Ss=o(pe,", which is useful for preprocessing all of your audio data at once. Start with a "),ze=r(pe,"A",{href:!0,rel:!0});var Zo=n(ze);Os=o(Zo,"speech recognition model"),Zo.forEach(t),Is=o(pe," of your choice, and load a "),Aa=r(pe,"CODE",{});var el=n(Aa);Fs=o(el,"processor"),el.forEach(t),Hs=o(pe," object that contains:"),pe.forEach(t),nt=u(e),re=r(e,"OL",{});var kt=n(re);qa=r(kt,"LI",{});var al=n(qa);J=r(al,"P",{});var oa=n(J);Ls=o(oa,"A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=r(oa,"A",{href:!0,rel:!0});var tl=n(Te);Ns=o(tl,"Hub"),tl.forEach(t),Vs=o(oa," contains a predefined feature extractor that can be easily loaded with "),Pa=r(oa,"CODE",{});var sl=n(Pa);Ws=o(sl,"AutoFeatureExtractor.from_pretrained(...)"),sl.forEach(t),Ms=o(oa,"."),oa.forEach(t),al.forEach(t),Us=u(kt),Ce=r(kt,"LI",{});var Et=n(Ce);B=r(Et,"P",{});var la=n(B);Rs=o(la,"A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Se=r(la,"A",{href:!0,rel:!0});var ol=n(Se);Gs=o(ol,"facebook/wav2vec2-base-960h"),ol.forEach(t),Js=o(la,", contain a predefined tokenizer that can be easily loaded with "),Da=r(la,"CODE",{});var ll=n(Da);Bs=o(ll,"AutoTokenizer.from_pretrained(...)"),ll.forEach(t),Ks=o(la,"."),la.forEach(t),Xs=u(Et),K=r(Et,"P",{});var ra=n(K);Ys=o(ra,"For pretrained speech recognition models, such as "),Oe=r(ra,"A",{href:!0,rel:!0});var rl=n(Oe);Qs=o(rl,"facebook/wav2vec2-large-xlsr-53"),rl.forEach(t),Zs=o(ra,", a tokenizer needs to be created from the target text as explained "),Ie=r(ra,"A",{href:!0,rel:!0});var nl=n(Ie);eo=o(nl,"here"),nl.forEach(t),ao=o(ra,". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),ra.forEach(t),Et.forEach(t),kt.forEach(t),it=u(e),_(Fe.$$.fragment,e),ct=u(e),ne=r(e,"P",{});var jt=n(ne);to=o(jt,"For fine-tuned speech recognition models, you can simply load a predefined "),za=r(jt,"CODE",{});var il=n(za);so=o(il,"processor"),il.forEach(t),oo=o(jt," object with:"),jt.forEach(t),pt=u(e),_(He.$$.fragment,e),dt=u(e),O=r(e,"P",{});var na=n(O);lo=o(na,"Make sure to include the "),Ta=r(na,"CODE",{});var cl=n(Ta);ro=o(cl,"audio"),cl.forEach(t),no=o(na," key in your preprocessing function when you call "),Qe=r(na,"A",{href:!0});var pl=n(Qe);io=o(pl,"Dataset.map()"),pl.forEach(t),co=o(na," so that you are actually resampling the audio data:"),na.forEach(t),ut=u(e),_(Le.$$.fragment,e),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(wl)),p(E,"id","process-audio-data"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#process-audio-data"),p($,"class","relative group"),p(D,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Audio"),p(Me,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Dataset.map"),p(Z,"id","installation"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#installation"),p(V,"class","relative group"),p(Ue,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Audio"),p(Re,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Audio"),p(_e,"href","https://pytorch.org/audio/stable/index.html"),p(_e,"rel","nofollow"),p(ve,"href","https://librosa.org/doc/latest/index.html"),p(ve,"rel","nofollow"),p(be,"href","https://huggingface.co/datasets/common_voice"),p(be,"rel","nofollow"),p(te,"id","audio-datasets"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#audio-datasets"),p(W,"class","relative group"),p(Ge,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(se,"id","resample"),p(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(se,"href","#resample"),p(U,"class","relative group"),p(Ae,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Ae,"rel","nofollow"),p(Je,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(Be,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Audio"),p(Ke,"class","block dark:hidden"),dl(Ke.src,uo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample.gif")||p(Ke,"src",uo),p(Xe,"class","hidden dark:block"),dl(Xe.src,fo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample-dark.gif")||p(Xe,"src",fo),p(R,"class","flex justify-center"),p(le,"id","map"),p(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(le,"href","#map"),p(G,"class","relative group"),p(Ye,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Dataset.map"),p(ze,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(ze,"rel","nofollow"),p(Te,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(Te,"rel","nofollow"),p(Se,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),p(Se,"rel","nofollow"),p(Oe,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Oe,"rel","nofollow"),p(Ie,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),p(Ie,"rel","nofollow"),p(Qe,"href","/docs/datasets/pr_4023/en/package_reference/main_classes#datasets.Dataset.map")},m(e,i){a(document.head,f),c(e,X,i),c(e,$,i),a($,E),a(E,I),v(y,I,null),a($,de),a($,F),a(F,H),c(e,Y,i),c(e,j,i),a(j,L),a(j,D),a(D,ue),a(j,N),c(e,h,i),c(e,k,i),a(k,Q),a(Q,Ve),a(k,We),a(k,ia),a(ia,xt),a(k,At),a(k,fe),a(fe,qt),a(fe,Me),a(Me,Pt),a(fe,Dt),c(e,Ia,i),c(e,V,i),a(V,Z),a(Z,ca),v(he,ca,null),a(V,zt),a(V,pa),a(pa,Tt),c(e,Fa,i),c(e,z,i),a(z,Ct),a(z,Ue),a(Ue,St),a(z,Ot),a(z,Re),a(Re,It),a(z,Ft),c(e,Ha,i),v(me,e,i),c(e,La,i),c(e,T,i),a(T,Ht),a(T,_e),a(_e,Lt),a(T,Nt),a(T,ve),a(ve,Vt),a(T,Wt),c(e,Na,i),v(ge,e,i),c(e,Va,i),v(ee,e,i),c(e,Wa,i),c(e,ae,i),a(ae,Mt),a(ae,be),a(be,Ut),a(ae,Rt),c(e,Ma,i),v(we,e,i),c(e,Ua,i),c(e,W,i),a(W,te),a(te,da),v($e,da,null),a(W,Gt),a(W,ua),a(ua,Jt),c(e,Ra,i),c(e,x,i),a(x,Bt),a(x,fa),a(fa,Kt),a(x,Xt),a(x,ha),a(ha,Yt),a(x,Qt),a(x,ma),a(ma,Zt),a(x,es),c(e,Ga,i),c(e,ye,i),a(ye,_a),a(_a,as),a(ye,ts),c(e,Ja,i),v(ke,e,i),c(e,Ba,i),c(e,A,i),a(A,ss),a(A,va),a(va,os),a(A,ls),a(A,ga),a(ga,rs),a(A,ns),a(A,ba),a(ba,is),a(A,cs),c(e,Ka,i),c(e,M,i),a(M,wa),a(wa,ps),a(M,ds),a(M,$a),a($a,us),a(M,fs),c(e,Xa,i),v(Ee,e,i),c(e,Ya,i),c(e,C,i),a(C,hs),a(C,ya),a(ya,ms),a(C,_s),a(C,Ge),a(Ge,vs),a(C,gs),c(e,Qa,i),v(je,e,i),c(e,Za,i),c(e,U,i),a(U,se),a(se,ka),v(xe,ka,null),a(U,bs),a(U,Ea),a(Ea,ws),c(e,et,i),c(e,S,i),a(S,$s),a(S,Ae),a(Ae,ys),a(S,ks),a(S,Je),a(Je,Es),a(S,js),c(e,at,i),v(qe,e,i),c(e,tt,i),c(e,oe,i),a(oe,xs),a(oe,Be),a(Be,As),a(oe,qs),c(e,st,i),v(Pe,e,i),c(e,ot,i),c(e,R,i),a(R,Ke),a(R,Ps),a(R,Xe),c(e,lt,i),c(e,G,i),a(G,le),a(le,ja),v(De,ja,null),a(G,Ds),a(G,xa),a(xa,zs),c(e,rt,i),c(e,q,i),a(q,Ts),a(q,Ye),a(Ye,Cs),a(q,Ss),a(q,ze),a(ze,Os),a(q,Is),a(q,Aa),a(Aa,Fs),a(q,Hs),c(e,nt,i),c(e,re,i),a(re,qa),a(qa,J),a(J,Ls),a(J,Te),a(Te,Ns),a(J,Vs),a(J,Pa),a(Pa,Ws),a(J,Ms),a(re,Us),a(re,Ce),a(Ce,B),a(B,Rs),a(B,Se),a(Se,Gs),a(B,Js),a(B,Da),a(Da,Bs),a(B,Ks),a(Ce,Xs),a(Ce,K),a(K,Ys),a(K,Oe),a(Oe,Qs),a(K,Zs),a(K,Ie),a(Ie,eo),a(K,ao),c(e,it,i),v(Fe,e,i),c(e,ct,i),c(e,ne,i),a(ne,to),a(ne,za),a(za,so),a(ne,oo),c(e,pt,i),v(He,e,i),c(e,dt,i),c(e,O,i),a(O,lo),a(O,Ta),a(Ta,ro),a(O,no),a(O,Qe),a(Qe,io),a(O,co),c(e,ut,i),v(Le,e,i),ft=!0},p(e,[i]){const Ne={};i&2&&(Ne.$$scope={dirty:i,ctx:e}),ee.$set(Ne)},i(e){ft||(g(y.$$.fragment,e),g(he.$$.fragment,e),g(me.$$.fragment,e),g(ge.$$.fragment,e),g(ee.$$.fragment,e),g(we.$$.fragment,e),g($e.$$.fragment,e),g(ke.$$.fragment,e),g(Ee.$$.fragment,e),g(je.$$.fragment,e),g(xe.$$.fragment,e),g(qe.$$.fragment,e),g(Pe.$$.fragment,e),g(De.$$.fragment,e),g(Fe.$$.fragment,e),g(He.$$.fragment,e),g(Le.$$.fragment,e),ft=!0)},o(e){b(y.$$.fragment,e),b(he.$$.fragment,e),b(me.$$.fragment,e),b(ge.$$.fragment,e),b(ee.$$.fragment,e),b(we.$$.fragment,e),b($e.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),b(je.$$.fragment,e),b(xe.$$.fragment,e),b(qe.$$.fragment,e),b(Pe.$$.fragment,e),b(De.$$.fragment,e),b(Fe.$$.fragment,e),b(He.$$.fragment,e),b(Le.$$.fragment,e),ft=!1},d(e){t(f),e&&t(X),e&&t($),w(y),e&&t(Y),e&&t(j),e&&t(h),e&&t(k),e&&t(Ia),e&&t(V),w(he),e&&t(Fa),e&&t(z),e&&t(Ha),w(me,e),e&&t(La),e&&t(T),e&&t(Na),w(ge,e),e&&t(Va),w(ee,e),e&&t(Wa),e&&t(ae),e&&t(Ma),w(we,e),e&&t(Ua),e&&t(W),w($e),e&&t(Ra),e&&t(x),e&&t(Ga),e&&t(ye),e&&t(Ja),w(ke,e),e&&t(Ba),e&&t(A),e&&t(Ka),e&&t(M),e&&t(Xa),w(Ee,e),e&&t(Ya),e&&t(C),e&&t(Qa),w(je,e),e&&t(Za),e&&t(U),w(xe),e&&t(et),e&&t(S),e&&t(at),w(qe,e),e&&t(tt),e&&t(oe),e&&t(st),w(Pe,e),e&&t(ot),e&&t(R),e&&t(lt),e&&t(G),w(De),e&&t(rt),e&&t(q),e&&t(nt),e&&t(re),e&&t(it),w(Fe,e),e&&t(ct),e&&t(ne),e&&t(pt),w(He,e),e&&t(dt),e&&t(O),e&&t(ut),w(Le,e)}}}const wl={local:"process-audio-data",sections:[{local:"installation",title:"Installation"},{local:"audio-datasets",title:"Audio datasets"},{local:"resample",title:"Resample"},{local:"map",title:"Map"}],title:"Process audio data"};function $l(Oa){return _l(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xl extends ul{constructor(f){super();fl(this,f,$l,bl,hl,{})}}export{xl as default,wl as metadata};
