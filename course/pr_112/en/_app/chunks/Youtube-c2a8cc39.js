import{S as u,i as n,s as m,e as d,c as f,a as h,d as o,b as s,N as c,g as p,L as l}from"./vendor-1e8b365d.js";function w(i){let e,r;return{c(){e=d("iframe"),this.h()},l(t){e=f(t,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),h(e).forEach(o),this.h()},h(){s(e,"class","w-full xl:w-4/6 h-80"),c(e.src,r="https://www.youtube-nocookie.com/embed/"+i[0])||s(e,"src",r),s(e,"title","YouTube video player"),s(e,"frameborder","0"),s(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0},m(t,a){p(t,e,a)},p(t,[a]){a&1&&!c(e.src,r="https://www.youtube-nocookie.com/embed/"+t[0])&&s(e,"src",r)},i:l,o:l,d(t){t&&o(e)}}}function b(i,e,r){let{id:t}=e;return i.$$set=a=>{"id"in a&&r(0,t=a.id)},[t]}class y extends u{constructor(e){super();n(this,e,b,w,m,{id:0})}}export{y as Y};
