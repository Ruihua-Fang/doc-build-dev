import{S as dl,i as ul,s as fl,e as l,k as d,w as v,t as s,M as hl,c as r,d as t,m as u,a as n,x as g,h as o,b as p,N as cl,F as a,g as c,y as $,q as w,o as b,B as y,v as ml,L as _l}from"../chunks/vendor-8138ceec.js";import{T as pl}from"../chunks/Tip-12722dfc.js";import{I as Sa}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as S}from"../chunks/CodeBlock-fc89709f.js";function vl(Ve){let f,z,m,j,P,_,x,q;return x=new S({props:{code:"sudo apt-get install libsndfile1",highlighted:"sudo apt-get install libsndfile1"}}),{c(){f=l("p"),z=s("On Linux, non-Python dependency on "),m=l("code"),j=s("libsndfile"),P=s(" package must be installed manually, using your distribution package manager, for example:"),_=d(),v(x.$$.fragment)},l(h){f=r(h,"P",{});var k=n(f);z=o(k,"On Linux, non-Python dependency on "),m=r(k,"CODE",{});var A=n(m);j=o(A,"libsndfile"),A.forEach(t),P=o(k," package must be installed manually, using your distribution package manager, for example:"),k.forEach(t),_=u(h),g(x.$$.fragment,h)},m(h,k){c(h,f,k),a(f,z),a(f,m),a(m,j),a(f,P),c(h,_,k),$(x,h,k),q=!0},p:_l,i(h){q||(w(x.$$.fragment,h),q=!0)},o(h){b(x.$$.fragment,h),q=!1},d(h){h&&t(f),h&&t(_),y(x,h)}}}function gl(Ve){let f,z,m,j,P,_,x,q,h,k,A,V,I,fe;return{c(){f=l("p"),z=s("torchaudio\u2019s "),m=l("code"),j=s("sox_io"),P=d(),_=l("a"),x=s("backend"),q=s(" supports decoding "),h=l("code"),k=s("mp3"),A=s(" files. Unfortunately, the "),V=l("code"),I=s("sox_io"),fe=s(" backend is only available on Linux/macOS, and is not supported by Windows."),this.h()},l(W){f=r(W,"P",{});var E=n(f);z=o(E,"torchaudio\u2019s "),m=r(E,"CODE",{});var D=n(m);j=o(D,"sox_io"),D.forEach(t),P=u(E),_=r(E,"A",{href:!0,rel:!0});var Q=n(_);x=o(Q,"backend"),Q.forEach(t),q=o(E," supports decoding "),h=r(E,"CODE",{});var We=n(h);k=o(We,"mp3"),We.forEach(t),A=o(E," files. Unfortunately, the "),V=r(E,"CODE",{});var Me=n(V);I=o(Me,"sox_io"),Me.forEach(t),fe=o(E," backend is only available on Linux/macOS, and is not supported by Windows."),E.forEach(t),this.h()},h(){p(_,"href","https://pytorch.org/audio/stable/backend.html#"),p(_,"rel","nofollow")},m(W,E){c(W,f,E),a(f,z),a(f,m),a(m,j),a(f,P),a(f,_),a(_,x),a(f,q),a(f,h),a(h,k),a(f,A),a(f,V),a(V,I),a(f,fe)},d(W){W&&t(f)}}}function $l(Ve){let f,z,m,j,P,_,x,q,h,k,A,V,I,fe,W,E,D,Q,We,Me,ia,qt,Pt,he,Dt,Re,zt,Tt,Ia,M,Z,ca,me,Ct,pa,Ot,La,L,St,Ue,It,Lt,Ge,Ft,Ht,Fa,_e,Ha,ee,Na,ae,Nt,ve,Vt,Wt,Va,ge,Wa,te,Ma,se,Mt,$e,Rt,Ut,Ra,we,Ua,R,oe,da,be,Gt,ua,Jt,Ga,T,Bt,fa,Kt,Xt,ha,Yt,Qt,ma,Zt,es,Ja,ye,_a,as,ts,Ba,ke,Ka,C,ss,va,os,ls,ga,rs,ns,$a,is,cs,Xa,U,wa,ps,ds,ba,us,fs,Ya,Ee,Qa,F,hs,ya,ms,_s,Je,vs,gs,Za,je,et,G,le,ka,xe,$s,Ea,ws,at,H,bs,Ae,ys,ks,Be,Es,js,tt,qe,st,re,xs,Ke,As,qs,ot,Pe,lt,J,Xe,uo,Ps,Ye,fo,rt,B,ne,ja,De,Ds,xa,zs,nt,O,Ts,Qe,Cs,Os,ze,Ss,Is,Aa,Ls,Fs,it,ie,qa,K,Hs,Te,Ns,Vs,Pa,Ws,Ms,Rs,Ce,X,Us,Oe,Gs,Js,Da,Bs,Ks,Xs,Y,Ys,Se,Qs,Zs,Ie,eo,ao,ct,Le,pt,ce,to,za,so,oo,dt,Fe,ut,N,lo,Ta,ro,no,Ze,io,co,ft,He,ht;return _=new Sa({}),me=new Sa({}),_e=new S({props:{code:"pip install datasets[audio]",highlighted:"pip install datasets[audio]"}}),ee=new pl({props:{warning:!0,$$slots:{default:[vl]},$$scope:{ctx:Ve}}}),ge=new S({props:{code:"pip install torchaudio",highlighted:"pip install torchaudio"}}),te=new pl({props:{warning:!0,$$slots:{default:[gl]},$$scope:{ctx:Ve}}}),we=new S({props:{code:`from datasets import load_dataset, load_metric, Audio
common_voice = load_dataset("common_voice", "tr", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric, Audio
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;tr&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),be=new Sa({}),ke=new S({props:{code:'common_voice[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
    -<span class="hljs-number">8.8930130e-05</span>, -<span class="hljs-number">3.8027763e-05</span>, -<span class="hljs-number">2.9146671e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">48000</span>}`}}),Ee=new S({props:{code:'common_voice[0]["path"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;path&quot;</span>]
/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-<span class="hljs-number">6.1</span>-<span class="hljs-number">2020</span>-<span class="hljs-number">12</span>-<span class="hljs-number">11</span>/tr/clips/common_voice_tr_21921195.mp3`}}),je=new S({props:{code:'my_audio_dataset = my_audio_dataset.cast_column("paths_to_my_audio_files", Audio())',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>my_audio_dataset = my_audio_dataset.cast_column(<span class="hljs-string">&quot;paths_to_my_audio_files&quot;</span>, Audio())'}}),xe=new Sa({}),qe=new S({props:{code:'common_voice = common_voice.cast_column("audio", Audio(sampling_rate=16_000))',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = common_voice.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))'}}),Pe=new S({props:{code:'common_voice_train[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
-<span class="hljs-number">7.4556941e-05</span>, -<span class="hljs-number">1.4621433e-05</span>, -<span class="hljs-number">5.7861507e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}`}}),De=new Sa({}),Le=new S({props:{code:`from transformers import AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
model_checkpoint = "facebook/wav2vec2-large-xlsr-53"
# after defining a vocab.json file you can instantiate a tokenizer object:
tokenizer = AutoTokenizer("./vocab.json", unk_token="[UNK]", pad_token="[PAD]", word_delimiter_token="|")
feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;facebook/wav2vec2-large-xlsr-53&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># after defining a vocab.json file you can instantiate a tokenizer object:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer(<span class="hljs-string">&quot;./vocab.json&quot;</span>, unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>, pad_token=<span class="hljs-string">&quot;[PAD]&quot;</span>, word_delimiter_token=<span class="hljs-string">&quot;|&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`}}),Fe=new S({props:{code:`from transformers import Wav2Vec2Processor
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)`}}),He=new S({props:{code:`def prepare_dataset(batch):
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
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train = common_voice_train.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=common_voice_train.column_names)`}}),{c(){f=l("meta"),z=d(),m=l("h1"),j=l("a"),P=l("span"),v(_.$$.fragment),x=d(),q=l("span"),h=s("Process audio data"),k=d(),A=l("p"),V=s("\u{1F917} Datasets supports an "),I=l("a"),fe=s("Audio"),W=s(" feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),E=d(),D=l("ul"),Q=l("li"),We=s("Load your own custom audio dataset."),Me=d(),ia=l("li"),qt=s("Resample audio files."),Pt=d(),he=l("li"),Dt=s("Use "),Re=l("a"),zt=s("Dataset.map()"),Tt=s(" with audio files."),Ia=d(),M=l("h2"),Z=l("a"),ca=l("span"),v(me.$$.fragment),Ct=d(),pa=l("span"),Ot=s("Installation"),La=d(),L=l("p"),St=s("The "),Ue=l("a"),It=s("Audio"),Lt=s(" feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Ge=l("a"),Ft=s("Audio"),Ht=s(" feature (and its dependencies) with pip:"),Fa=d(),v(_e.$$.fragment),Ha=d(),v(ee.$$.fragment),Na=d(),ae=l("p"),Nt=s("To support loading audio datasets containing MP3 files, users should additionally install "),ve=l("a"),Vt=s("torchaudio"),Wt=s(", so that audio data is handled with high performance."),Va=d(),v(ge.$$.fragment),Wa=d(),v(te.$$.fragment),Ma=d(),se=l("p"),Mt=s("Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),$e=l("a"),Rt=s("Common Voice"),Ut=s(" dataset with the Turkish configuration:"),Ra=d(),v(we.$$.fragment),Ua=d(),R=l("h2"),oe=l("a"),da=l("span"),v(be.$$.fragment),Gt=d(),ua=l("span"),Jt=s("Audio datasets"),Ga=d(),T=l("p"),Bt=s("Audio datasets commonly have an "),fa=l("code"),Kt=s("audio"),Xt=s(" and "),ha=l("code"),Yt=s("path"),Qt=s(" or "),ma=l("code"),Zt=s("file"),es=s(" column."),Ja=d(),ye=l("p"),_a=l("code"),as=s("audio"),ts=s(" is the actual audio file that is loaded and resampled on-the-fly upon calling it."),Ba=d(),v(ke.$$.fragment),Ka=d(),C=l("p"),ss=s("When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),va=l("code"),os=s('common_voice[0]["audio"]'),ls=s(". If you query an audio file with "),ga=l("code"),rs=s('common_voice["audio"][0]'),ns=s(" instead, "),$a=l("strong"),is=s("all"),cs=s(" the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),Xa=d(),U=l("p"),wa=l("code"),ps=s("path"),ds=s(" or "),ba=l("code"),us=s("file"),fs=s(" is an absolute path to an audio file."),Ya=d(),v(Ee.$$.fragment),Qa=d(),F=l("p"),hs=s("The "),ya=l("code"),ms=s("path"),_s=s(" is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Je=l("a"),vs=s("Dataset.cast_column()"),gs=s(":"),Za=d(),v(je.$$.fragment),et=d(),G=l("h2"),le=l("a"),ka=l("span"),v(xe.$$.fragment),$s=d(),Ea=l("span"),ws=s("Resample"),at=d(),H=l("p"),bs=s("Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=l("a"),ys=s("XLSR-Wav2Vec2"),ks=s(" model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Be=l("a"),Es=s("Dataset.cast_column()"),js=s(" to downsample the sampling rate to 16kHz:"),tt=d(),v(qe.$$.fragment),st=d(),re=l("p"),xs=s("The next time you load the audio file, the "),Ke=l("a"),As=s("Audio"),qs=s(" feature will load and resample it to 16kHz:"),ot=d(),v(Pe.$$.fragment),lt=d(),J=l("div"),Xe=l("img"),Ps=d(),Ye=l("img"),rt=d(),B=l("h2"),ne=l("a"),ja=l("span"),v(De.$$.fragment),Ds=d(),xa=l("span"),zs=s("Map"),nt=d(),O=l("p"),Ts=s("Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Qe=l("a"),Cs=s("Dataset.map()"),Os=s(", which is useful for preprocessing all of your audio data at once. Start with a "),ze=l("a"),Ss=s("speech recognition model"),Is=s(" of your choice, and load a "),Aa=l("code"),Ls=s("processor"),Fs=s(" object that contains:"),it=d(),ie=l("ol"),qa=l("li"),K=l("p"),Hs=s("A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=l("a"),Ns=s("Hub"),Vs=s(" contains a predefined feature extractor that can be easily loaded with "),Pa=l("code"),Ws=s("AutoFeatureExtractor.from_pretrained(...)"),Ms=s("."),Rs=d(),Ce=l("li"),X=l("p"),Us=s("A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Oe=l("a"),Gs=s("facebook/wav2vec2-base-960h"),Js=s(", contain a predefined tokenizer that can be easily loaded with "),Da=l("code"),Bs=s("AutoTokenizer.from_pretrained(...)"),Ks=s("."),Xs=d(),Y=l("p"),Ys=s("For pretrained speech recognition models, such as "),Se=l("a"),Qs=s("facebook/wav2vec2-large-xlsr-53"),Zs=s(", a tokenizer needs to be created from the target text as explained "),Ie=l("a"),eo=s("here"),ao=s(". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),ct=d(),v(Le.$$.fragment),pt=d(),ce=l("p"),to=s("For fine-tuned speech recognition models, you can simply load a predefined "),za=l("code"),so=s("processor"),oo=s(" object with:"),dt=d(),v(Fe.$$.fragment),ut=d(),N=l("p"),lo=s("Make sure to include the "),Ta=l("code"),ro=s("audio"),no=s(" key in your preprocessing function when you call "),Ze=l("a"),io=s("Dataset.map()"),co=s(" so that you are actually resampling the audio data:"),ft=d(),v(He.$$.fragment),this.h()},l(e){const i=hl('[data-svelte="svelte-1phssyn"]',document.head);f=r(i,"META",{name:!0,content:!0}),i.forEach(t),z=u(e),m=r(e,"H1",{class:!0});var Ne=n(m);j=r(Ne,"A",{id:!0,class:!0,href:!0});var Ca=n(j);P=r(Ca,"SPAN",{});var ho=n(P);g(_.$$.fragment,ho),ho.forEach(t),Ca.forEach(t),x=u(Ne),q=r(Ne,"SPAN",{});var mo=n(q);h=o(mo,"Process audio data"),mo.forEach(t),Ne.forEach(t),k=u(e),A=r(e,"P",{});var mt=n(A);V=o(mt,"\u{1F917} Datasets supports an "),I=r(mt,"A",{href:!0});var _o=n(I);fe=o(_o,"Audio"),_o.forEach(t),W=o(mt," feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),mt.forEach(t),E=u(e),D=r(e,"UL",{});var ea=n(D);Q=r(ea,"LI",{});var vo=n(Q);We=o(vo,"Load your own custom audio dataset."),vo.forEach(t),Me=u(ea),ia=r(ea,"LI",{});var go=n(ia);qt=o(go,"Resample audio files."),go.forEach(t),Pt=u(ea),he=r(ea,"LI",{});var _t=n(he);Dt=o(_t,"Use "),Re=r(_t,"A",{href:!0});var $o=n(Re);zt=o($o,"Dataset.map()"),$o.forEach(t),Tt=o(_t," with audio files."),_t.forEach(t),ea.forEach(t),Ia=u(e),M=r(e,"H2",{class:!0});var vt=n(M);Z=r(vt,"A",{id:!0,class:!0,href:!0});var wo=n(Z);ca=r(wo,"SPAN",{});var bo=n(ca);g(me.$$.fragment,bo),bo.forEach(t),wo.forEach(t),Ct=u(vt),pa=r(vt,"SPAN",{});var yo=n(pa);Ot=o(yo,"Installation"),yo.forEach(t),vt.forEach(t),La=u(e),L=r(e,"P",{});var aa=n(L);St=o(aa,"The "),Ue=r(aa,"A",{href:!0});var ko=n(Ue);It=o(ko,"Audio"),ko.forEach(t),Lt=o(aa," feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Ge=r(aa,"A",{href:!0});var Eo=n(Ge);Ft=o(Eo,"Audio"),Eo.forEach(t),Ht=o(aa," feature (and its dependencies) with pip:"),aa.forEach(t),Fa=u(e),g(_e.$$.fragment,e),Ha=u(e),g(ee.$$.fragment,e),Na=u(e),ae=r(e,"P",{});var gt=n(ae);Nt=o(gt,"To support loading audio datasets containing MP3 files, users should additionally install "),ve=r(gt,"A",{href:!0,rel:!0});var jo=n(ve);Vt=o(jo,"torchaudio"),jo.forEach(t),Wt=o(gt,", so that audio data is handled with high performance."),gt.forEach(t),Va=u(e),g(ge.$$.fragment,e),Wa=u(e),g(te.$$.fragment,e),Ma=u(e),se=r(e,"P",{});var $t=n(se);Mt=o($t,"Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),$e=r($t,"A",{href:!0,rel:!0});var xo=n($e);Rt=o(xo,"Common Voice"),xo.forEach(t),Ut=o($t," dataset with the Turkish configuration:"),$t.forEach(t),Ra=u(e),g(we.$$.fragment,e),Ua=u(e),R=r(e,"H2",{class:!0});var wt=n(R);oe=r(wt,"A",{id:!0,class:!0,href:!0});var Ao=n(oe);da=r(Ao,"SPAN",{});var qo=n(da);g(be.$$.fragment,qo),qo.forEach(t),Ao.forEach(t),Gt=u(wt),ua=r(wt,"SPAN",{});var Po=n(ua);Jt=o(Po,"Audio datasets"),Po.forEach(t),wt.forEach(t),Ga=u(e),T=r(e,"P",{});var pe=n(T);Bt=o(pe,"Audio datasets commonly have an "),fa=r(pe,"CODE",{});var Do=n(fa);Kt=o(Do,"audio"),Do.forEach(t),Xt=o(pe," and "),ha=r(pe,"CODE",{});var zo=n(ha);Yt=o(zo,"path"),zo.forEach(t),Qt=o(pe," or "),ma=r(pe,"CODE",{});var To=n(ma);Zt=o(To,"file"),To.forEach(t),es=o(pe," column."),pe.forEach(t),Ja=u(e),ye=r(e,"P",{});var po=n(ye);_a=r(po,"CODE",{});var Co=n(_a);as=o(Co,"audio"),Co.forEach(t),ts=o(po," is the actual audio file that is loaded and resampled on-the-fly upon calling it."),po.forEach(t),Ba=u(e),g(ke.$$.fragment,e),Ka=u(e),C=r(e,"P",{});var de=n(C);ss=o(de,"When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),va=r(de,"CODE",{});var Oo=n(va);os=o(Oo,'common_voice[0]["audio"]'),Oo.forEach(t),ls=o(de,". If you query an audio file with "),ga=r(de,"CODE",{});var So=n(ga);rs=o(So,'common_voice["audio"][0]'),So.forEach(t),ns=o(de," instead, "),$a=r(de,"STRONG",{});var Io=n($a);is=o(Io,"all"),Io.forEach(t),cs=o(de," the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),de.forEach(t),Xa=u(e),U=r(e,"P",{});var Oa=n(U);wa=r(Oa,"CODE",{});var Lo=n(wa);ps=o(Lo,"path"),Lo.forEach(t),ds=o(Oa," or "),ba=r(Oa,"CODE",{});var Fo=n(ba);us=o(Fo,"file"),Fo.forEach(t),fs=o(Oa," is an absolute path to an audio file."),Oa.forEach(t),Ya=u(e),g(Ee.$$.fragment,e),Qa=u(e),F=r(e,"P",{});var ta=n(F);hs=o(ta,"The "),ya=r(ta,"CODE",{});var Ho=n(ya);ms=o(Ho,"path"),Ho.forEach(t),_s=o(ta," is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Je=r(ta,"A",{href:!0});var No=n(Je);vs=o(No,"Dataset.cast_column()"),No.forEach(t),gs=o(ta,":"),ta.forEach(t),Za=u(e),g(je.$$.fragment,e),et=u(e),G=r(e,"H2",{class:!0});var bt=n(G);le=r(bt,"A",{id:!0,class:!0,href:!0});var Vo=n(le);ka=r(Vo,"SPAN",{});var Wo=n(ka);g(xe.$$.fragment,Wo),Wo.forEach(t),Vo.forEach(t),$s=u(bt),Ea=r(bt,"SPAN",{});var Mo=n(Ea);ws=o(Mo,"Resample"),Mo.forEach(t),bt.forEach(t),at=u(e),H=r(e,"P",{});var sa=n(H);bs=o(sa,"Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=r(sa,"A",{href:!0,rel:!0});var Ro=n(Ae);ys=o(Ro,"XLSR-Wav2Vec2"),Ro.forEach(t),ks=o(sa," model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Be=r(sa,"A",{href:!0});var Uo=n(Be);Es=o(Uo,"Dataset.cast_column()"),Uo.forEach(t),js=o(sa," to downsample the sampling rate to 16kHz:"),sa.forEach(t),tt=u(e),g(qe.$$.fragment,e),st=u(e),re=r(e,"P",{});var yt=n(re);xs=o(yt,"The next time you load the audio file, the "),Ke=r(yt,"A",{href:!0});var Go=n(Ke);As=o(Go,"Audio"),Go.forEach(t),qs=o(yt," feature will load and resample it to 16kHz:"),yt.forEach(t),ot=u(e),g(Pe.$$.fragment,e),lt=u(e),J=r(e,"DIV",{class:!0});var kt=n(J);Xe=r(kt,"IMG",{class:!0,src:!0}),Ps=u(kt),Ye=r(kt,"IMG",{class:!0,src:!0}),kt.forEach(t),rt=u(e),B=r(e,"H2",{class:!0});var Et=n(B);ne=r(Et,"A",{id:!0,class:!0,href:!0});var Jo=n(ne);ja=r(Jo,"SPAN",{});var Bo=n(ja);g(De.$$.fragment,Bo),Bo.forEach(t),Jo.forEach(t),Ds=u(Et),xa=r(Et,"SPAN",{});var Ko=n(xa);zs=o(Ko,"Map"),Ko.forEach(t),Et.forEach(t),nt=u(e),O=r(e,"P",{});var ue=n(O);Ts=o(ue,"Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Qe=r(ue,"A",{href:!0});var Xo=n(Qe);Cs=o(Xo,"Dataset.map()"),Xo.forEach(t),Os=o(ue,", which is useful for preprocessing all of your audio data at once. Start with a "),ze=r(ue,"A",{href:!0,rel:!0});var Yo=n(ze);Ss=o(Yo,"speech recognition model"),Yo.forEach(t),Is=o(ue," of your choice, and load a "),Aa=r(ue,"CODE",{});var Qo=n(Aa);Ls=o(Qo,"processor"),Qo.forEach(t),Fs=o(ue," object that contains:"),ue.forEach(t),it=u(e),ie=r(e,"OL",{});var jt=n(ie);qa=r(jt,"LI",{});var Zo=n(qa);K=r(Zo,"P",{});var oa=n(K);Hs=o(oa,"A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=r(oa,"A",{href:!0,rel:!0});var el=n(Te);Ns=o(el,"Hub"),el.forEach(t),Vs=o(oa," contains a predefined feature extractor that can be easily loaded with "),Pa=r(oa,"CODE",{});var al=n(Pa);Ws=o(al,"AutoFeatureExtractor.from_pretrained(...)"),al.forEach(t),Ms=o(oa,"."),oa.forEach(t),Zo.forEach(t),Rs=u(jt),Ce=r(jt,"LI",{});var xt=n(Ce);X=r(xt,"P",{});var la=n(X);Us=o(la,"A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Oe=r(la,"A",{href:!0,rel:!0});var tl=n(Oe);Gs=o(tl,"facebook/wav2vec2-base-960h"),tl.forEach(t),Js=o(la,", contain a predefined tokenizer that can be easily loaded with "),Da=r(la,"CODE",{});var sl=n(Da);Bs=o(sl,"AutoTokenizer.from_pretrained(...)"),sl.forEach(t),Ks=o(la,"."),la.forEach(t),Xs=u(xt),Y=r(xt,"P",{});var ra=n(Y);Ys=o(ra,"For pretrained speech recognition models, such as "),Se=r(ra,"A",{href:!0,rel:!0});var ol=n(Se);Qs=o(ol,"facebook/wav2vec2-large-xlsr-53"),ol.forEach(t),Zs=o(ra,", a tokenizer needs to be created from the target text as explained "),Ie=r(ra,"A",{href:!0,rel:!0});var ll=n(Ie);eo=o(ll,"here"),ll.forEach(t),ao=o(ra,". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),ra.forEach(t),xt.forEach(t),jt.forEach(t),ct=u(e),g(Le.$$.fragment,e),pt=u(e),ce=r(e,"P",{});var At=n(ce);to=o(At,"For fine-tuned speech recognition models, you can simply load a predefined "),za=r(At,"CODE",{});var rl=n(za);so=o(rl,"processor"),rl.forEach(t),oo=o(At," object with:"),At.forEach(t),dt=u(e),g(Fe.$$.fragment,e),ut=u(e),N=r(e,"P",{});var na=n(N);lo=o(na,"Make sure to include the "),Ta=r(na,"CODE",{});var nl=n(Ta);ro=o(nl,"audio"),nl.forEach(t),no=o(na," key in your preprocessing function when you call "),Ze=r(na,"A",{href:!0});var il=n(Ze);io=o(il,"Dataset.map()"),il.forEach(t),co=o(na," so that you are actually resampling the audio data:"),na.forEach(t),ft=u(e),g(He.$$.fragment,e),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(wl)),p(j,"id","process-audio-data"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#process-audio-data"),p(m,"class","relative group"),p(I,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Audio"),p(Re,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.map"),p(Z,"id","installation"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#installation"),p(M,"class","relative group"),p(Ue,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Audio"),p(Ge,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Audio"),p(ve,"href","https://pytorch.org/audio/stable/index.html"),p(ve,"rel","nofollow"),p($e,"href","https://huggingface.co/datasets/common_voice"),p($e,"rel","nofollow"),p(oe,"id","audio-datasets"),p(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oe,"href","#audio-datasets"),p(R,"class","relative group"),p(Je,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(le,"id","resample"),p(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(le,"href","#resample"),p(G,"class","relative group"),p(Ae,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Ae,"rel","nofollow"),p(Be,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(Ke,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Audio"),p(Xe,"class","block dark:hidden"),cl(Xe.src,uo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample.gif")||p(Xe,"src",uo),p(Ye,"class","hidden dark:block"),cl(Ye.src,fo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample-dark.gif")||p(Ye,"src",fo),p(J,"class","flex justify-center"),p(ne,"id","map"),p(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ne,"href","#map"),p(B,"class","relative group"),p(Qe,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.map"),p(ze,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(ze,"rel","nofollow"),p(Te,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(Te,"rel","nofollow"),p(Oe,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),p(Oe,"rel","nofollow"),p(Se,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Se,"rel","nofollow"),p(Ie,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),p(Ie,"rel","nofollow"),p(Ze,"href","/docs/datasets/pr_4251/en/package_reference/main_classes#datasets.Dataset.map")},m(e,i){a(document.head,f),c(e,z,i),c(e,m,i),a(m,j),a(j,P),$(_,P,null),a(m,x),a(m,q),a(q,h),c(e,k,i),c(e,A,i),a(A,V),a(A,I),a(I,fe),a(A,W),c(e,E,i),c(e,D,i),a(D,Q),a(Q,We),a(D,Me),a(D,ia),a(ia,qt),a(D,Pt),a(D,he),a(he,Dt),a(he,Re),a(Re,zt),a(he,Tt),c(e,Ia,i),c(e,M,i),a(M,Z),a(Z,ca),$(me,ca,null),a(M,Ct),a(M,pa),a(pa,Ot),c(e,La,i),c(e,L,i),a(L,St),a(L,Ue),a(Ue,It),a(L,Lt),a(L,Ge),a(Ge,Ft),a(L,Ht),c(e,Fa,i),$(_e,e,i),c(e,Ha,i),$(ee,e,i),c(e,Na,i),c(e,ae,i),a(ae,Nt),a(ae,ve),a(ve,Vt),a(ae,Wt),c(e,Va,i),$(ge,e,i),c(e,Wa,i),$(te,e,i),c(e,Ma,i),c(e,se,i),a(se,Mt),a(se,$e),a($e,Rt),a(se,Ut),c(e,Ra,i),$(we,e,i),c(e,Ua,i),c(e,R,i),a(R,oe),a(oe,da),$(be,da,null),a(R,Gt),a(R,ua),a(ua,Jt),c(e,Ga,i),c(e,T,i),a(T,Bt),a(T,fa),a(fa,Kt),a(T,Xt),a(T,ha),a(ha,Yt),a(T,Qt),a(T,ma),a(ma,Zt),a(T,es),c(e,Ja,i),c(e,ye,i),a(ye,_a),a(_a,as),a(ye,ts),c(e,Ba,i),$(ke,e,i),c(e,Ka,i),c(e,C,i),a(C,ss),a(C,va),a(va,os),a(C,ls),a(C,ga),a(ga,rs),a(C,ns),a(C,$a),a($a,is),a(C,cs),c(e,Xa,i),c(e,U,i),a(U,wa),a(wa,ps),a(U,ds),a(U,ba),a(ba,us),a(U,fs),c(e,Ya,i),$(Ee,e,i),c(e,Qa,i),c(e,F,i),a(F,hs),a(F,ya),a(ya,ms),a(F,_s),a(F,Je),a(Je,vs),a(F,gs),c(e,Za,i),$(je,e,i),c(e,et,i),c(e,G,i),a(G,le),a(le,ka),$(xe,ka,null),a(G,$s),a(G,Ea),a(Ea,ws),c(e,at,i),c(e,H,i),a(H,bs),a(H,Ae),a(Ae,ys),a(H,ks),a(H,Be),a(Be,Es),a(H,js),c(e,tt,i),$(qe,e,i),c(e,st,i),c(e,re,i),a(re,xs),a(re,Ke),a(Ke,As),a(re,qs),c(e,ot,i),$(Pe,e,i),c(e,lt,i),c(e,J,i),a(J,Xe),a(J,Ps),a(J,Ye),c(e,rt,i),c(e,B,i),a(B,ne),a(ne,ja),$(De,ja,null),a(B,Ds),a(B,xa),a(xa,zs),c(e,nt,i),c(e,O,i),a(O,Ts),a(O,Qe),a(Qe,Cs),a(O,Os),a(O,ze),a(ze,Ss),a(O,Is),a(O,Aa),a(Aa,Ls),a(O,Fs),c(e,it,i),c(e,ie,i),a(ie,qa),a(qa,K),a(K,Hs),a(K,Te),a(Te,Ns),a(K,Vs),a(K,Pa),a(Pa,Ws),a(K,Ms),a(ie,Rs),a(ie,Ce),a(Ce,X),a(X,Us),a(X,Oe),a(Oe,Gs),a(X,Js),a(X,Da),a(Da,Bs),a(X,Ks),a(Ce,Xs),a(Ce,Y),a(Y,Ys),a(Y,Se),a(Se,Qs),a(Y,Zs),a(Y,Ie),a(Ie,eo),a(Y,ao),c(e,ct,i),$(Le,e,i),c(e,pt,i),c(e,ce,i),a(ce,to),a(ce,za),a(za,so),a(ce,oo),c(e,dt,i),$(Fe,e,i),c(e,ut,i),c(e,N,i),a(N,lo),a(N,Ta),a(Ta,ro),a(N,no),a(N,Ze),a(Ze,io),a(N,co),c(e,ft,i),$(He,e,i),ht=!0},p(e,[i]){const Ne={};i&2&&(Ne.$$scope={dirty:i,ctx:e}),ee.$set(Ne);const Ca={};i&2&&(Ca.$$scope={dirty:i,ctx:e}),te.$set(Ca)},i(e){ht||(w(_.$$.fragment,e),w(me.$$.fragment,e),w(_e.$$.fragment,e),w(ee.$$.fragment,e),w(ge.$$.fragment,e),w(te.$$.fragment,e),w(we.$$.fragment,e),w(be.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(xe.$$.fragment,e),w(qe.$$.fragment,e),w(Pe.$$.fragment,e),w(De.$$.fragment,e),w(Le.$$.fragment,e),w(Fe.$$.fragment,e),w(He.$$.fragment,e),ht=!0)},o(e){b(_.$$.fragment,e),b(me.$$.fragment,e),b(_e.$$.fragment,e),b(ee.$$.fragment,e),b(ge.$$.fragment,e),b(te.$$.fragment,e),b(we.$$.fragment,e),b(be.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),b(je.$$.fragment,e),b(xe.$$.fragment,e),b(qe.$$.fragment,e),b(Pe.$$.fragment,e),b(De.$$.fragment,e),b(Le.$$.fragment,e),b(Fe.$$.fragment,e),b(He.$$.fragment,e),ht=!1},d(e){t(f),e&&t(z),e&&t(m),y(_),e&&t(k),e&&t(A),e&&t(E),e&&t(D),e&&t(Ia),e&&t(M),y(me),e&&t(La),e&&t(L),e&&t(Fa),y(_e,e),e&&t(Ha),y(ee,e),e&&t(Na),e&&t(ae),e&&t(Va),y(ge,e),e&&t(Wa),y(te,e),e&&t(Ma),e&&t(se),e&&t(Ra),y(we,e),e&&t(Ua),e&&t(R),y(be),e&&t(Ga),e&&t(T),e&&t(Ja),e&&t(ye),e&&t(Ba),y(ke,e),e&&t(Ka),e&&t(C),e&&t(Xa),e&&t(U),e&&t(Ya),y(Ee,e),e&&t(Qa),e&&t(F),e&&t(Za),y(je,e),e&&t(et),e&&t(G),y(xe),e&&t(at),e&&t(H),e&&t(tt),y(qe,e),e&&t(st),e&&t(re),e&&t(ot),y(Pe,e),e&&t(lt),e&&t(J),e&&t(rt),e&&t(B),y(De),e&&t(nt),e&&t(O),e&&t(it),e&&t(ie),e&&t(ct),y(Le,e),e&&t(pt),e&&t(ce),e&&t(dt),y(Fe,e),e&&t(ut),e&&t(N),e&&t(ft),y(He,e)}}}const wl={local:"process-audio-data",sections:[{local:"installation",title:"Installation"},{local:"audio-datasets",title:"Audio datasets"},{local:"resample",title:"Resample"},{local:"map",title:"Map"}],title:"Process audio data"};function bl(Ve){return ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xl extends dl{constructor(f){super();ul(this,f,bl,$l,fl,{})}}export{xl as default,wl as metadata};
