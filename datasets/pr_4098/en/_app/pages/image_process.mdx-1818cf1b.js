import{S as Sr,i as Jr,s as Rr,e as o,k as m,w as u,t as s,M as Ur,c as r,d as t,m as f,a as i,x as g,h as l,b as c,N as zr,F as a,g as p,y as _,q as v,o as $,B as w,v as Gr}from"../chunks/vendor-aa873a46.js";import{T as Br}from"../chunks/Tip-f7f252ab.js";import{I as va}from"../chunks/IconCopyLink-d0ca3106.js";import{C as k}from"../chunks/CodeBlock-1f14baf3.js";function Mr(Ue){let d,D,h,E,I,y,j,q;return{c(){d=o("p"),D=s("If the image files come from a trusted source, pass "),h=o("code"),E=s("ignore_verifications=True"),I=s(" to "),y=o("a"),j=s("load_dataset()"),q=s(" to skip checksum verification and speed up loading."),this.h()},l(z){d=r(z,"P",{});var x=i(d);D=l(x,"If the image files come from a trusted source, pass "),h=r(x,"CODE",{});var C=i(h);E=l(C,"ignore_verifications=True"),C.forEach(t),I=l(x," to "),y=r(x,"A",{href:!0});var Ge=i(y);j=l(Ge,"load_dataset()"),Ge.forEach(t),q=l(x," to skip checksum verification and speed up loading."),x.forEach(t),this.h()},h(){c(y,"href","/docs/datasets/pr_4098/en/package_reference/loading_methods#datasets.load_dataset")},m(z,x){p(z,d,x),a(d,D),a(d,h),a(h,E),a(d,I),a(d,y),a(y,j),a(d,q)},d(z){z&&t(d)}}}function Yr(Ue){let d,D,h,E,I;return{c(){d=o("p"),D=s("Feel free to use other data augmentation libraries like "),h=o("a"),E=s("Albumentations"),I=s(". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),this.h()},l(y){d=r(y,"P",{});var j=i(d);D=l(j,"Feel free to use other data augmentation libraries like "),h=r(j,"A",{href:!0,rel:!0});var q=i(h);E=l(q,"Albumentations"),q.forEach(t),I=l(j,". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),j.forEach(t),this.h()},h(){c(h,"href","https://albumentations.ai/docs/"),c(h,"rel","nofollow")},m(y,j){p(y,d,j),a(d,D),a(d,h),a(h,E),a(d,I)},d(y){y&&t(d)}}}function Hr(Ue){let d,D,h,E,I,y,j,q,z,x,C,Ge,Me,_s,vs,et,P,$a,$s,ws,de,ys,wa,Es,js,bs,he,ks,Ye,Is,xs,Ds,ue,qs,He,Ps,As,at,B,M,ya,ge,Cs,Ea,Ts,tt,T,Ls,Ke,Fs,Os,Qe,Ns,zs,st,_e,lt,S,Y,ja,ve,Bs,ba,Ss,ot,Ve,Js,rt,H,$e,Rs,ka,Us,Gs,Ms,Ia,Ys,nt,K,Hs,we,Ks,Qs,it,ye,pt,A,Vs,We,Ws,Xs,xa,Zs,el,Da,al,tl,mt,Ee,ft,Xe,Ze,xo,ct,L,sl,ea,ll,ol,aa,rl,nl,dt,je,ht,F,il,qa,pl,ml,Pa,fl,cl,ut,be,gt,J,Q,Aa,ke,dl,Ca,hl,_t,V,ul,Ta,gl,_l,vt,Ie,$t,O,vl,La,$l,wl,Fa,yl,El,wt,xe,yt,W,jl,Oa,bl,kl,Et,De,jt,R,Na,Il,xl,za,Dl,ql,bt,X,kt,U,Z,Ba,qe,Pl,Sa,Al,It,Pe,ta,Cl,Tl,xt,ee,Ll,Ae,Ja,Fl,Ol,Dt,Ce,qt,b,Nl,sa,zl,Bl,Ra,Sl,Jl,Ua,Rl,Ul,Ga,Gl,Ml,Pt,Te,At,ae,Yl,la,Hl,Kl,Ct,Le,oa,Ql,Vl,Tt,te,ra,na,Ma,Wl,Xl,Zl,ia,pa,Ya,eo,ao,Lt,se,to,ma,so,lo,Ft,G,le,Ha,Fe,oo,Ka,ro,Ot,oe,no,Oe,io,po,Nt,re,zt,ne,mo,Ne,Qa,fo,co,Bt,ze,St,ie,ho,Va,uo,go,Jt,Be,Rt,pe,_o,fa,vo,$o,Ut,Se,Gt,me,wo,Wa,yo,Eo,Mt,Je,Yt,ca,da,Do,Ht;return y=new va({}),ge=new va({}),_e=new k({props:{code:"pip install datasets[vision]",highlighted:"pip install datasets[vision]"}}),ve=new va({}),ye=new k({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[:100]")
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=384x512 at <span class="hljs-number">0x7FC45AB5C590</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>}`}}),Ee=new k({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[100:200]")
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[100:200]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),je=new k({props:{code:`from datasets import load_dataset, Image

dataset = Dataset.from_dict({"image": ["path/to/image_1", "path/to/image_2", ..., "path/to/image_n"]}).cast_column("image", Image())
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;image&quot;</span>: [<span class="hljs-string">&quot;path/to/image_1&quot;</span>, <span class="hljs-string">&quot;path/to/image_2&quot;</span>, ..., <span class="hljs-string">&quot;path/to/image_n&quot;</span>]}).cast_column(<span class="hljs-string">&quot;image&quot;</span>, Image())
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),be=new k({props:{code:`dataset = load_dataset("food101", split="train[:100]").cast_column('image', Image(decode=False))`,highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>).cast_column(<span class="hljs-string">&#x27;image&#x27;</span>, Image(decode=<span class="hljs-literal">False</span>))'}}),ke=new va({}),Ie=new k({props:{code:`folder/dog/golden_retriever.png
folder/dog/german_shepherd.png
folder/dog/chihuahua.png

folder/cat/maine_coon.png
folder/cat/bengal.png
folder/cat/birman.png`,highlighted:`folder<span class="hljs-regexp">/dog/g</span>olden_retriever.png
folder<span class="hljs-regexp">/dog/g</span>erman_shepherd.png
folder<span class="hljs-regexp">/dog/</span>chihuahua.png

folder<span class="hljs-regexp">/cat/m</span>aine_coon.png
folder<span class="hljs-regexp">/cat/</span>bengal.png
folder<span class="hljs-regexp">/cat/</span>birman.png`}}),xe=new k({props:{code:`from datasets import load_dataset
dataset = load_dataset("imagefolder", data_dir="/path/to/folder")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_dir=<span class="hljs-string">&quot;/path/to/folder&quot;</span>)`}}),De=new k({props:{code:'dataset = load_dataset("imagefolder", data_files="https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip", split="train")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_files=<span class="hljs-string">&quot;https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)'}}),X=new Br({props:{$$slots:{default:[Mr]},$$scope:{ctx:Ue}}}),qe=new va({}),Ce=new k({props:{code:`def transforms(examples):
    examples["pixel_values"] = [image.convert("RGB").resize((100,100)) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [image.convert(<span class="hljs-string">&quot;RGB&quot;</span>).resize((<span class="hljs-number">100</span>,<span class="hljs-number">100</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Te=new k({props:{code:`dataset = dataset.map(transforms, remove_columns=["image"], batched=True)
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(transforms, remove_columns=[<span class="hljs-string">&quot;image&quot;</span>], batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>,
 <span class="hljs-string">&#x27;pixel_values&#x27;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=RGB size=100x100 at <span class="hljs-number">0x7F058237BB10</span>&gt;}`}}),Fe=new va({}),re=new Br({props:{$$slots:{default:[Yr]},$$scope:{ctx:Ue}}}),ze=new k({props:{code:`from torchvision.transforms import Compose, ColorJitter, ToTensor

jitter = Compose(
    [
         ColorJitter(brightness=0.25, contrast=0.25, saturation=0.25, hue=0.7),
         ToTensor(),
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> Compose, ColorJitter, ToTensor

<span class="hljs-meta">&gt;&gt;&gt; </span>jitter = Compose(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>         ColorJitter(brightness=<span class="hljs-number">0.25</span>, contrast=<span class="hljs-number">0.25</span>, saturation=<span class="hljs-number">0.25</span>, hue=<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>         ToTensor(),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),Be=new k({props:{code:`def transforms(examples):
    examples["pixel_values"] = [jitter(image.convert("RGB")) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [jitter(image.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Se=new k({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),Je=new k({props:{code:`import numpy as np
import matplotlib.pyplot as plt

img = dataset[0]["pixel_values"]
plt.imshow(img.permute(1, 2, 0))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span>img = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;pixel_values&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>plt.imshow(img.permute(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>))`}}),{c(){d=o("meta"),D=m(),h=o("h1"),E=o("a"),I=o("span"),u(y.$$.fragment),j=m(),q=o("span"),z=s("Process image data"),x=m(),C=o("p"),Ge=s("\u{1F917} Datasets support loading and processing images with the "),Me=o("a"),_s=s("Image"),vs=s(" feature. This guide will show you how to:"),et=m(),P=o("ul"),$a=o("li"),$s=s("Load an image dataset."),ws=m(),de=o("li"),ys=s("Load a generic image dataset with "),wa=o("code"),Es=s("ImageFolder"),js=s("."),bs=m(),he=o("li"),ks=s("Use "),Ye=o("a"),Is=s("Dataset.map()"),xs=s(" to quickly apply transforms to an entire dataset."),Ds=m(),ue=o("li"),qs=s("Add data augmentations to your images with "),He=o("a"),Ps=s("Dataset.set_transform()"),As=s("."),at=m(),B=o("h2"),M=o("a"),ya=o("span"),u(ge.$$.fragment),Cs=m(),Ea=o("span"),Ts=s("Installation"),tt=m(),T=o("p"),Ls=s("The "),Ke=o("a"),Fs=s("Image"),Os=s(" feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Qe=o("a"),Ns=s("Image"),zs=s(" feature (and its dependencies) with pip:"),st=m(),u(_e.$$.fragment),lt=m(),S=o("h2"),Y=o("a"),ja=o("span"),u(ve.$$.fragment),Bs=m(),ba=o("span"),Ss=s("Image datasets"),ot=m(),Ve=o("p"),Js=s("The images in an image dataset are typically either a:"),rt=m(),H=o("ul"),$e=o("li"),Rs=s("PIL "),ka=o("code"),Us=s("image"),Gs=s("."),Ms=m(),Ia=o("li"),Ys=s("Path to an image file you can load."),nt=m(),K=o("p"),Hs=s("For example, load the "),we=o("a"),Ks=s("Food-101"),Qs=s(" dataset and take a look:"),it=m(),u(ye.$$.fragment),pt=m(),A=o("p"),Vs=s("The "),We=o("a"),Ws=s("Image"),Xs=s(" feature automatically decodes the data from the "),xa=o("code"),Zs=s("image"),el=s(" column to return an image object. Now try and call the "),Da=o("code"),al=s("image"),tl=s(" column to see what the image is:"),mt=m(),u(Ee.$$.fragment),ft=m(),Xe=o("p"),Ze=o("img"),ct=m(),L=o("p"),sl=s("To load an image from its path, use the "),ea=o("a"),ll=s("Dataset.cast_column()"),ol=s(" method. The "),aa=o("a"),rl=s("Image"),nl=s(" feature will decode the data at the path to return an image object:"),dt=m(),u(je.$$.fragment),ht=m(),F=o("p"),il=s("You can also access the path and bytes of an image file by setting "),qa=o("code"),pl=s("decode=False"),ml=s(" when you load a dataset. In this case, you will need to cast the "),Pa=o("code"),fl=s("image"),cl=s(" column:"),ut=m(),u(be.$$.fragment),gt=m(),J=o("h2"),Q=o("a"),Aa=o("span"),u(ke.$$.fragment),dl=m(),Ca=o("span"),hl=s("ImageFolder"),_t=m(),V=o("p"),ul=s("You can also load your image dataset with a "),Ta=o("code"),gl=s("ImageFolder"),_l=s(" dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),vt=m(),u(Ie.$$.fragment),$t=m(),O=o("p"),vl=s("Then load your dataset by specifying "),La=o("code"),$l=s("imagefolder"),wl=s(" and the directory of your dataset in "),Fa=o("code"),yl=s("data_dir"),El=s(":"),wt=m(),u(xe.$$.fragment),yt=m(),W=o("p"),jl=s("Load remote datasets from their URLs with the "),Oa=o("code"),bl=s("data_files"),kl=s(" parameter:"),Et=m(),u(De.$$.fragment),jt=m(),R=o("p"),Na=o("code"),Il=s("ImageFolder"),xl=s(" will create a "),za=o("code"),Dl=s("label"),ql=s(" column, and the label name is based on the directory name."),bt=m(),u(X.$$.fragment),kt=m(),U=o("h2"),Z=o("a"),Ba=o("span"),u(qe.$$.fragment),Pl=m(),Sa=o("span"),Al=s("Map"),It=m(),Pe=o("p"),ta=o("a"),Cl=s("Dataset.map()"),Tl=s(" can apply transforms over an entire dataset and it also generates a cache file."),xt=m(),ee=o("p"),Ll=s("Create a simple "),Ae=o("a"),Ja=o("code"),Fl=s("Resize"),Ol=s(" function:"),Dt=m(),u(Ce.$$.fragment),qt=m(),b=o("p"),Nl=s("Now "),sa=o("a"),zl=s("Dataset.map()"),Bl=s(" the function over the entire dataset and set "),Ra=o("code"),Sl=s("batched=True"),Jl=s(". The transform returns "),Ua=o("code"),Rl=s("pixel_values"),Ul=s(" as a cacheable "),Ga=o("code"),Gl=s("PIL.Image"),Ml=s(" object:"),Pt=m(),u(Te.$$.fragment),At=m(),ae=o("p"),Yl=s("This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),la=o("a"),Hl=s("Dataset.map()"),Kl=s(" for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),Ct=m(),Le=o("p"),oa=o("a"),Ql=s("Dataset.map()"),Vl=s(" takes up some memory, but you can reduce its memory requirements with the following parameters:"),Tt=m(),te=o("ul"),ra=o("li"),na=o("a"),Ma=o("code"),Wl=s("batch_size"),Xl=s(" determines the number of examples that are processed in one call to the transform function."),Zl=m(),ia=o("li"),pa=o("a"),Ya=o("code"),eo=s("writer_batch_size"),ao=s(" determines the number of processed examples that are kept in memory before they are stored away."),Lt=m(),se=o("p"),to=s("Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),ma=o("a"),so=s("Dataset.map()"),lo=s("."),Ft=m(),G=o("h2"),le=o("a"),Ha=o("span"),u(Fe.$$.fragment),oo=m(),Ka=o("span"),ro=s("Data augmentation"),Ot=m(),oe=o("p"),no=s("Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Oe=o("a"),io=s("torchvision"),po=s("."),Nt=m(),u(re.$$.fragment),zt=m(),ne=o("p"),mo=s("Add the "),Ne=o("a"),Qa=o("code"),fo=s("ColorJitter"),co=s(" transform to change the color properties of the image randomly:"),Bt=m(),u(ze.$$.fragment),St=m(),ie=o("p"),ho=s("Create a function to apply the "),Va=o("code"),uo=s("ColorJitter"),go=s(" transform to an image:"),Jt=m(),u(Be.$$.fragment),Rt=m(),pe=o("p"),_o=s("Then you can use the "),fa=o("a"),vo=s("Dataset.set_transform()"),$o=s(" function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),Ut=m(),u(Se.$$.fragment),Gt=m(),me=o("p"),wo=s("Now visualize the results of the "),Wa=o("code"),yo=s("ColorJitter"),Eo=s(" transform:"),Mt=m(),u(Je.$$.fragment),Yt=m(),ca=o("p"),da=o("img"),this.h()},l(e){const n=Ur('[data-svelte="svelte-1phssyn"]',document.head);d=r(n,"META",{name:!0,content:!0}),n.forEach(t),D=f(e),h=r(e,"H1",{class:!0});var Re=i(h);E=r(Re,"A",{id:!0,class:!0,href:!0});var Xa=i(E);I=r(Xa,"SPAN",{});var qo=i(I);g(y.$$.fragment,qo),qo.forEach(t),Xa.forEach(t),j=f(Re),q=r(Re,"SPAN",{});var Po=i(q);z=l(Po,"Process image data"),Po.forEach(t),Re.forEach(t),x=f(e),C=r(e,"P",{});var Kt=i(C);Ge=l(Kt,"\u{1F917} Datasets support loading and processing images with the "),Me=r(Kt,"A",{href:!0});var Ao=i(Me);_s=l(Ao,"Image"),Ao.forEach(t),vs=l(Kt," feature. This guide will show you how to:"),Kt.forEach(t),et=f(e),P=r(e,"UL",{});var fe=i(P);$a=r(fe,"LI",{});var Co=i($a);$s=l(Co,"Load an image dataset."),Co.forEach(t),ws=f(fe),de=r(fe,"LI",{});var Qt=i(de);ys=l(Qt,"Load a generic image dataset with "),wa=r(Qt,"CODE",{});var To=i(wa);Es=l(To,"ImageFolder"),To.forEach(t),js=l(Qt,"."),Qt.forEach(t),bs=f(fe),he=r(fe,"LI",{});var Vt=i(he);ks=l(Vt,"Use "),Ye=r(Vt,"A",{href:!0});var Lo=i(Ye);Is=l(Lo,"Dataset.map()"),Lo.forEach(t),xs=l(Vt," to quickly apply transforms to an entire dataset."),Vt.forEach(t),Ds=f(fe),ue=r(fe,"LI",{});var Wt=i(ue);qs=l(Wt,"Add data augmentations to your images with "),He=r(Wt,"A",{href:!0});var Fo=i(He);Ps=l(Fo,"Dataset.set_transform()"),Fo.forEach(t),As=l(Wt,"."),Wt.forEach(t),fe.forEach(t),at=f(e),B=r(e,"H2",{class:!0});var Xt=i(B);M=r(Xt,"A",{id:!0,class:!0,href:!0});var Oo=i(M);ya=r(Oo,"SPAN",{});var No=i(ya);g(ge.$$.fragment,No),No.forEach(t),Oo.forEach(t),Cs=f(Xt),Ea=r(Xt,"SPAN",{});var zo=i(Ea);Ts=l(zo,"Installation"),zo.forEach(t),Xt.forEach(t),tt=f(e),T=r(e,"P",{});var ha=i(T);Ls=l(ha,"The "),Ke=r(ha,"A",{href:!0});var Bo=i(Ke);Fs=l(Bo,"Image"),Bo.forEach(t),Os=l(ha," feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Qe=r(ha,"A",{href:!0});var So=i(Qe);Ns=l(So,"Image"),So.forEach(t),zs=l(ha," feature (and its dependencies) with pip:"),ha.forEach(t),st=f(e),g(_e.$$.fragment,e),lt=f(e),S=r(e,"H2",{class:!0});var Zt=i(S);Y=r(Zt,"A",{id:!0,class:!0,href:!0});var Jo=i(Y);ja=r(Jo,"SPAN",{});var Ro=i(ja);g(ve.$$.fragment,Ro),Ro.forEach(t),Jo.forEach(t),Bs=f(Zt),ba=r(Zt,"SPAN",{});var Uo=i(ba);Ss=l(Uo,"Image datasets"),Uo.forEach(t),Zt.forEach(t),ot=f(e),Ve=r(e,"P",{});var Go=i(Ve);Js=l(Go,"The images in an image dataset are typically either a:"),Go.forEach(t),rt=f(e),H=r(e,"UL",{});var es=i(H);$e=r(es,"LI",{});var as=i($e);Rs=l(as,"PIL "),ka=r(as,"CODE",{});var Mo=i(ka);Us=l(Mo,"image"),Mo.forEach(t),Gs=l(as,"."),as.forEach(t),Ms=f(es),Ia=r(es,"LI",{});var Yo=i(Ia);Ys=l(Yo,"Path to an image file you can load."),Yo.forEach(t),es.forEach(t),nt=f(e),K=r(e,"P",{});var ts=i(K);Hs=l(ts,"For example, load the "),we=r(ts,"A",{href:!0,rel:!0});var Ho=i(we);Ks=l(Ho,"Food-101"),Ho.forEach(t),Qs=l(ts," dataset and take a look:"),ts.forEach(t),it=f(e),g(ye.$$.fragment,e),pt=f(e),A=r(e,"P",{});var ce=i(A);Vs=l(ce,"The "),We=r(ce,"A",{href:!0});var Ko=i(We);Ws=l(Ko,"Image"),Ko.forEach(t),Xs=l(ce," feature automatically decodes the data from the "),xa=r(ce,"CODE",{});var Qo=i(xa);Zs=l(Qo,"image"),Qo.forEach(t),el=l(ce," column to return an image object. Now try and call the "),Da=r(ce,"CODE",{});var Vo=i(Da);al=l(Vo,"image"),Vo.forEach(t),tl=l(ce," column to see what the image is:"),ce.forEach(t),mt=f(e),g(Ee.$$.fragment,e),ft=f(e),Xe=r(e,"P",{});var Wo=i(Xe);Ze=r(Wo,"IMG",{src:!0,alt:!0}),Wo.forEach(t),ct=f(e),L=r(e,"P",{});var ua=i(L);sl=l(ua,"To load an image from its path, use the "),ea=r(ua,"A",{href:!0});var Xo=i(ea);ll=l(Xo,"Dataset.cast_column()"),Xo.forEach(t),ol=l(ua," method. The "),aa=r(ua,"A",{href:!0});var Zo=i(aa);rl=l(Zo,"Image"),Zo.forEach(t),nl=l(ua," feature will decode the data at the path to return an image object:"),ua.forEach(t),dt=f(e),g(je.$$.fragment,e),ht=f(e),F=r(e,"P",{});var ga=i(F);il=l(ga,"You can also access the path and bytes of an image file by setting "),qa=r(ga,"CODE",{});var er=i(qa);pl=l(er,"decode=False"),er.forEach(t),ml=l(ga," when you load a dataset. In this case, you will need to cast the "),Pa=r(ga,"CODE",{});var ar=i(Pa);fl=l(ar,"image"),ar.forEach(t),cl=l(ga," column:"),ga.forEach(t),ut=f(e),g(be.$$.fragment,e),gt=f(e),J=r(e,"H2",{class:!0});var ss=i(J);Q=r(ss,"A",{id:!0,class:!0,href:!0});var tr=i(Q);Aa=r(tr,"SPAN",{});var sr=i(Aa);g(ke.$$.fragment,sr),sr.forEach(t),tr.forEach(t),dl=f(ss),Ca=r(ss,"SPAN",{});var lr=i(Ca);hl=l(lr,"ImageFolder"),lr.forEach(t),ss.forEach(t),_t=f(e),V=r(e,"P",{});var ls=i(V);ul=l(ls,"You can also load your image dataset with a "),Ta=r(ls,"CODE",{});var or=i(Ta);gl=l(or,"ImageFolder"),or.forEach(t),_l=l(ls," dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),ls.forEach(t),vt=f(e),g(Ie.$$.fragment,e),$t=f(e),O=r(e,"P",{});var _a=i(O);vl=l(_a,"Then load your dataset by specifying "),La=r(_a,"CODE",{});var rr=i(La);$l=l(rr,"imagefolder"),rr.forEach(t),wl=l(_a," and the directory of your dataset in "),Fa=r(_a,"CODE",{});var nr=i(Fa);yl=l(nr,"data_dir"),nr.forEach(t),El=l(_a,":"),_a.forEach(t),wt=f(e),g(xe.$$.fragment,e),yt=f(e),W=r(e,"P",{});var os=i(W);jl=l(os,"Load remote datasets from their URLs with the "),Oa=r(os,"CODE",{});var ir=i(Oa);bl=l(ir,"data_files"),ir.forEach(t),kl=l(os," parameter:"),os.forEach(t),Et=f(e),g(De.$$.fragment,e),jt=f(e),R=r(e,"P",{});var Za=i(R);Na=r(Za,"CODE",{});var pr=i(Na);Il=l(pr,"ImageFolder"),pr.forEach(t),xl=l(Za," will create a "),za=r(Za,"CODE",{});var mr=i(za);Dl=l(mr,"label"),mr.forEach(t),ql=l(Za," column, and the label name is based on the directory name."),Za.forEach(t),bt=f(e),g(X.$$.fragment,e),kt=f(e),U=r(e,"H2",{class:!0});var rs=i(U);Z=r(rs,"A",{id:!0,class:!0,href:!0});var fr=i(Z);Ba=r(fr,"SPAN",{});var cr=i(Ba);g(qe.$$.fragment,cr),cr.forEach(t),fr.forEach(t),Pl=f(rs),Sa=r(rs,"SPAN",{});var dr=i(Sa);Al=l(dr,"Map"),dr.forEach(t),rs.forEach(t),It=f(e),Pe=r(e,"P",{});var jo=i(Pe);ta=r(jo,"A",{href:!0});var hr=i(ta);Cl=l(hr,"Dataset.map()"),hr.forEach(t),Tl=l(jo," can apply transforms over an entire dataset and it also generates a cache file."),jo.forEach(t),xt=f(e),ee=r(e,"P",{});var ns=i(ee);Ll=l(ns,"Create a simple "),Ae=r(ns,"A",{href:!0,rel:!0});var ur=i(Ae);Ja=r(ur,"CODE",{});var gr=i(Ja);Fl=l(gr,"Resize"),gr.forEach(t),ur.forEach(t),Ol=l(ns," function:"),ns.forEach(t),Dt=f(e),g(Ce.$$.fragment,e),qt=f(e),b=r(e,"P",{});var N=i(b);Nl=l(N,"Now "),sa=r(N,"A",{href:!0});var _r=i(sa);zl=l(_r,"Dataset.map()"),_r.forEach(t),Bl=l(N," the function over the entire dataset and set "),Ra=r(N,"CODE",{});var vr=i(Ra);Sl=l(vr,"batched=True"),vr.forEach(t),Jl=l(N,". The transform returns "),Ua=r(N,"CODE",{});var $r=i(Ua);Rl=l($r,"pixel_values"),$r.forEach(t),Ul=l(N," as a cacheable "),Ga=r(N,"CODE",{});var wr=i(Ga);Gl=l(wr,"PIL.Image"),wr.forEach(t),Ml=l(N," object:"),N.forEach(t),Pt=f(e),g(Te.$$.fragment,e),At=f(e),ae=r(e,"P",{});var is=i(ae);Yl=l(is,"This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),la=r(is,"A",{href:!0});var yr=i(la);Hl=l(yr,"Dataset.map()"),yr.forEach(t),Kl=l(is," for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),is.forEach(t),Ct=f(e),Le=r(e,"P",{});var bo=i(Le);oa=r(bo,"A",{href:!0});var Er=i(oa);Ql=l(Er,"Dataset.map()"),Er.forEach(t),Vl=l(bo," takes up some memory, but you can reduce its memory requirements with the following parameters:"),bo.forEach(t),Tt=f(e),te=r(e,"UL",{});var ps=i(te);ra=r(ps,"LI",{});var ko=i(ra);na=r(ko,"A",{href:!0});var jr=i(na);Ma=r(jr,"CODE",{});var br=i(Ma);Wl=l(br,"batch_size"),br.forEach(t),jr.forEach(t),Xl=l(ko," determines the number of examples that are processed in one call to the transform function."),ko.forEach(t),Zl=f(ps),ia=r(ps,"LI",{});var Io=i(ia);pa=r(Io,"A",{href:!0});var kr=i(pa);Ya=r(kr,"CODE",{});var Ir=i(Ya);eo=l(Ir,"writer_batch_size"),Ir.forEach(t),kr.forEach(t),ao=l(Io," determines the number of processed examples that are kept in memory before they are stored away."),Io.forEach(t),ps.forEach(t),Lt=f(e),se=r(e,"P",{});var ms=i(se);to=l(ms,"Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),ma=r(ms,"A",{href:!0});var xr=i(ma);so=l(xr,"Dataset.map()"),xr.forEach(t),lo=l(ms,"."),ms.forEach(t),Ft=f(e),G=r(e,"H2",{class:!0});var fs=i(G);le=r(fs,"A",{id:!0,class:!0,href:!0});var Dr=i(le);Ha=r(Dr,"SPAN",{});var qr=i(Ha);g(Fe.$$.fragment,qr),qr.forEach(t),Dr.forEach(t),oo=f(fs),Ka=r(fs,"SPAN",{});var Pr=i(Ka);ro=l(Pr,"Data augmentation"),Pr.forEach(t),fs.forEach(t),Ot=f(e),oe=r(e,"P",{});var cs=i(oe);no=l(cs,"Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Oe=r(cs,"A",{href:!0,rel:!0});var Ar=i(Oe);io=l(Ar,"torchvision"),Ar.forEach(t),po=l(cs,"."),cs.forEach(t),Nt=f(e),g(re.$$.fragment,e),zt=f(e),ne=r(e,"P",{});var ds=i(ne);mo=l(ds,"Add the "),Ne=r(ds,"A",{href:!0,rel:!0});var Cr=i(Ne);Qa=r(Cr,"CODE",{});var Tr=i(Qa);fo=l(Tr,"ColorJitter"),Tr.forEach(t),Cr.forEach(t),co=l(ds," transform to change the color properties of the image randomly:"),ds.forEach(t),Bt=f(e),g(ze.$$.fragment,e),St=f(e),ie=r(e,"P",{});var hs=i(ie);ho=l(hs,"Create a function to apply the "),Va=r(hs,"CODE",{});var Lr=i(Va);uo=l(Lr,"ColorJitter"),Lr.forEach(t),go=l(hs," transform to an image:"),hs.forEach(t),Jt=f(e),g(Be.$$.fragment,e),Rt=f(e),pe=r(e,"P",{});var us=i(pe);_o=l(us,"Then you can use the "),fa=r(us,"A",{href:!0});var Fr=i(fa);vo=l(Fr,"Dataset.set_transform()"),Fr.forEach(t),$o=l(us," function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),us.forEach(t),Ut=f(e),g(Se.$$.fragment,e),Gt=f(e),me=r(e,"P",{});var gs=i(me);wo=l(gs,"Now visualize the results of the "),Wa=r(gs,"CODE",{});var Or=i(Wa);yo=l(Or,"ColorJitter"),Or.forEach(t),Eo=l(gs," transform:"),gs.forEach(t),Mt=f(e),g(Je.$$.fragment,e),Yt=f(e),ca=r(e,"P",{});var Nr=i(ca);da=r(Nr,"IMG",{src:!0,alt:!0}),Nr.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Kr)),c(E,"id","process-image-data"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#process-image-data"),c(h,"class","relative group"),c(Me,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Image"),c(Ye,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(He,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.set_transform"),c(M,"id","installation"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#installation"),c(B,"class","relative group"),c(Ke,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Image"),c(Qe,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Image"),c(Y,"id","image-datasets"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#image-datasets"),c(S,"class","relative group"),c(we,"href","https://huggingface.co/datasets/food101"),c(we,"rel","nofollow"),c(We,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Image"),zr(Ze.src,xo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_beignet.png")||c(Ze,"src",xo),c(Ze,"alt","image_process_beignet"),c(ea,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.cast_column"),c(aa,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Image"),c(Q,"id","imagefolder"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#imagefolder"),c(J,"class","relative group"),c(Z,"id","map"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#map"),c(U,"class","relative group"),c(ta,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(Ae,"href","https://pytorch.org/vision/stable/generated/torchvision.transforms.Resize.html"),c(Ae,"rel","nofollow"),c(sa,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(la,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(oa,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(na,"href","./package_reference/main_classes#datasets.DatasetDict.map.batch_size"),c(pa,"href","./package_reference/main_classes#datasets.DatasetDict.map.writer_batch_size"),c(ma,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.map"),c(le,"id","data-augmentation"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#data-augmentation"),c(G,"class","relative group"),c(Oe,"href","https://pytorch.org/vision/stable/transforms.html"),c(Oe,"rel","nofollow"),c(Ne,"href","https://pytorch.org/vision/stable/transforms.html#torchvision.transforms.ColorJitter"),c(Ne,"rel","nofollow"),c(fa,"href","/docs/datasets/pr_4098/en/package_reference/main_classes#datasets.Dataset.set_transform"),zr(da.src,Do="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_jitter.png")||c(da,"src",Do),c(da,"alt","image_process_jitter")},m(e,n){a(document.head,d),p(e,D,n),p(e,h,n),a(h,E),a(E,I),_(y,I,null),a(h,j),a(h,q),a(q,z),p(e,x,n),p(e,C,n),a(C,Ge),a(C,Me),a(Me,_s),a(C,vs),p(e,et,n),p(e,P,n),a(P,$a),a($a,$s),a(P,ws),a(P,de),a(de,ys),a(de,wa),a(wa,Es),a(de,js),a(P,bs),a(P,he),a(he,ks),a(he,Ye),a(Ye,Is),a(he,xs),a(P,Ds),a(P,ue),a(ue,qs),a(ue,He),a(He,Ps),a(ue,As),p(e,at,n),p(e,B,n),a(B,M),a(M,ya),_(ge,ya,null),a(B,Cs),a(B,Ea),a(Ea,Ts),p(e,tt,n),p(e,T,n),a(T,Ls),a(T,Ke),a(Ke,Fs),a(T,Os),a(T,Qe),a(Qe,Ns),a(T,zs),p(e,st,n),_(_e,e,n),p(e,lt,n),p(e,S,n),a(S,Y),a(Y,ja),_(ve,ja,null),a(S,Bs),a(S,ba),a(ba,Ss),p(e,ot,n),p(e,Ve,n),a(Ve,Js),p(e,rt,n),p(e,H,n),a(H,$e),a($e,Rs),a($e,ka),a(ka,Us),a($e,Gs),a(H,Ms),a(H,Ia),a(Ia,Ys),p(e,nt,n),p(e,K,n),a(K,Hs),a(K,we),a(we,Ks),a(K,Qs),p(e,it,n),_(ye,e,n),p(e,pt,n),p(e,A,n),a(A,Vs),a(A,We),a(We,Ws),a(A,Xs),a(A,xa),a(xa,Zs),a(A,el),a(A,Da),a(Da,al),a(A,tl),p(e,mt,n),_(Ee,e,n),p(e,ft,n),p(e,Xe,n),a(Xe,Ze),p(e,ct,n),p(e,L,n),a(L,sl),a(L,ea),a(ea,ll),a(L,ol),a(L,aa),a(aa,rl),a(L,nl),p(e,dt,n),_(je,e,n),p(e,ht,n),p(e,F,n),a(F,il),a(F,qa),a(qa,pl),a(F,ml),a(F,Pa),a(Pa,fl),a(F,cl),p(e,ut,n),_(be,e,n),p(e,gt,n),p(e,J,n),a(J,Q),a(Q,Aa),_(ke,Aa,null),a(J,dl),a(J,Ca),a(Ca,hl),p(e,_t,n),p(e,V,n),a(V,ul),a(V,Ta),a(Ta,gl),a(V,_l),p(e,vt,n),_(Ie,e,n),p(e,$t,n),p(e,O,n),a(O,vl),a(O,La),a(La,$l),a(O,wl),a(O,Fa),a(Fa,yl),a(O,El),p(e,wt,n),_(xe,e,n),p(e,yt,n),p(e,W,n),a(W,jl),a(W,Oa),a(Oa,bl),a(W,kl),p(e,Et,n),_(De,e,n),p(e,jt,n),p(e,R,n),a(R,Na),a(Na,Il),a(R,xl),a(R,za),a(za,Dl),a(R,ql),p(e,bt,n),_(X,e,n),p(e,kt,n),p(e,U,n),a(U,Z),a(Z,Ba),_(qe,Ba,null),a(U,Pl),a(U,Sa),a(Sa,Al),p(e,It,n),p(e,Pe,n),a(Pe,ta),a(ta,Cl),a(Pe,Tl),p(e,xt,n),p(e,ee,n),a(ee,Ll),a(ee,Ae),a(Ae,Ja),a(Ja,Fl),a(ee,Ol),p(e,Dt,n),_(Ce,e,n),p(e,qt,n),p(e,b,n),a(b,Nl),a(b,sa),a(sa,zl),a(b,Bl),a(b,Ra),a(Ra,Sl),a(b,Jl),a(b,Ua),a(Ua,Rl),a(b,Ul),a(b,Ga),a(Ga,Gl),a(b,Ml),p(e,Pt,n),_(Te,e,n),p(e,At,n),p(e,ae,n),a(ae,Yl),a(ae,la),a(la,Hl),a(ae,Kl),p(e,Ct,n),p(e,Le,n),a(Le,oa),a(oa,Ql),a(Le,Vl),p(e,Tt,n),p(e,te,n),a(te,ra),a(ra,na),a(na,Ma),a(Ma,Wl),a(ra,Xl),a(te,Zl),a(te,ia),a(ia,pa),a(pa,Ya),a(Ya,eo),a(ia,ao),p(e,Lt,n),p(e,se,n),a(se,to),a(se,ma),a(ma,so),a(se,lo),p(e,Ft,n),p(e,G,n),a(G,le),a(le,Ha),_(Fe,Ha,null),a(G,oo),a(G,Ka),a(Ka,ro),p(e,Ot,n),p(e,oe,n),a(oe,no),a(oe,Oe),a(Oe,io),a(oe,po),p(e,Nt,n),_(re,e,n),p(e,zt,n),p(e,ne,n),a(ne,mo),a(ne,Ne),a(Ne,Qa),a(Qa,fo),a(ne,co),p(e,Bt,n),_(ze,e,n),p(e,St,n),p(e,ie,n),a(ie,ho),a(ie,Va),a(Va,uo),a(ie,go),p(e,Jt,n),_(Be,e,n),p(e,Rt,n),p(e,pe,n),a(pe,_o),a(pe,fa),a(fa,vo),a(pe,$o),p(e,Ut,n),_(Se,e,n),p(e,Gt,n),p(e,me,n),a(me,wo),a(me,Wa),a(Wa,yo),a(me,Eo),p(e,Mt,n),_(Je,e,n),p(e,Yt,n),p(e,ca,n),a(ca,da),Ht=!0},p(e,[n]){const Re={};n&2&&(Re.$$scope={dirty:n,ctx:e}),X.$set(Re);const Xa={};n&2&&(Xa.$$scope={dirty:n,ctx:e}),re.$set(Xa)},i(e){Ht||(v(y.$$.fragment,e),v(ge.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v(ye.$$.fragment,e),v(Ee.$$.fragment,e),v(je.$$.fragment,e),v(be.$$.fragment,e),v(ke.$$.fragment,e),v(Ie.$$.fragment,e),v(xe.$$.fragment,e),v(De.$$.fragment,e),v(X.$$.fragment,e),v(qe.$$.fragment,e),v(Ce.$$.fragment,e),v(Te.$$.fragment,e),v(Fe.$$.fragment,e),v(re.$$.fragment,e),v(ze.$$.fragment,e),v(Be.$$.fragment,e),v(Se.$$.fragment,e),v(Je.$$.fragment,e),Ht=!0)},o(e){$(y.$$.fragment,e),$(ge.$$.fragment,e),$(_e.$$.fragment,e),$(ve.$$.fragment,e),$(ye.$$.fragment,e),$(Ee.$$.fragment,e),$(je.$$.fragment,e),$(be.$$.fragment,e),$(ke.$$.fragment,e),$(Ie.$$.fragment,e),$(xe.$$.fragment,e),$(De.$$.fragment,e),$(X.$$.fragment,e),$(qe.$$.fragment,e),$(Ce.$$.fragment,e),$(Te.$$.fragment,e),$(Fe.$$.fragment,e),$(re.$$.fragment,e),$(ze.$$.fragment,e),$(Be.$$.fragment,e),$(Se.$$.fragment,e),$(Je.$$.fragment,e),Ht=!1},d(e){t(d),e&&t(D),e&&t(h),w(y),e&&t(x),e&&t(C),e&&t(et),e&&t(P),e&&t(at),e&&t(B),w(ge),e&&t(tt),e&&t(T),e&&t(st),w(_e,e),e&&t(lt),e&&t(S),w(ve),e&&t(ot),e&&t(Ve),e&&t(rt),e&&t(H),e&&t(nt),e&&t(K),e&&t(it),w(ye,e),e&&t(pt),e&&t(A),e&&t(mt),w(Ee,e),e&&t(ft),e&&t(Xe),e&&t(ct),e&&t(L),e&&t(dt),w(je,e),e&&t(ht),e&&t(F),e&&t(ut),w(be,e),e&&t(gt),e&&t(J),w(ke),e&&t(_t),e&&t(V),e&&t(vt),w(Ie,e),e&&t($t),e&&t(O),e&&t(wt),w(xe,e),e&&t(yt),e&&t(W),e&&t(Et),w(De,e),e&&t(jt),e&&t(R),e&&t(bt),w(X,e),e&&t(kt),e&&t(U),w(qe),e&&t(It),e&&t(Pe),e&&t(xt),e&&t(ee),e&&t(Dt),w(Ce,e),e&&t(qt),e&&t(b),e&&t(Pt),w(Te,e),e&&t(At),e&&t(ae),e&&t(Ct),e&&t(Le),e&&t(Tt),e&&t(te),e&&t(Lt),e&&t(se),e&&t(Ft),e&&t(G),w(Fe),e&&t(Ot),e&&t(oe),e&&t(Nt),w(re,e),e&&t(zt),e&&t(ne),e&&t(Bt),w(ze,e),e&&t(St),e&&t(ie),e&&t(Jt),w(Be,e),e&&t(Rt),e&&t(pe),e&&t(Ut),w(Se,e),e&&t(Gt),e&&t(me),e&&t(Mt),w(Je,e),e&&t(Yt),e&&t(ca)}}}const Kr={local:"process-image-data",sections:[{local:"installation",title:"Installation"},{local:"image-datasets",title:"Image datasets"},{local:"imagefolder",title:"ImageFolder"},{local:"map",title:"Map"},{local:"data-augmentation",title:"Data augmentation"}],title:"Process image data"};function Qr(Ue){return Gr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class en extends Sr{constructor(d){super();Jr(this,d,Qr,Hr,Rr,{})}}export{en as default,Kr as metadata};
