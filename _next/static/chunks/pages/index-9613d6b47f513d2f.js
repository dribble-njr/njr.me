(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9828:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(43935)}])},25142:function(e,t,r){"use strict";r.r(t);var n=r(11527),l=r(92578),o=r(56035),a=r(47687),i=r(50959),s=r(92569),u=r(81143),d=r(93730),c=r(44541);t.default=e=>{let{url:t}=e,r=(0,i.useRef)(),f=(0,i.useRef)(),p=(0,i.useRef)(),h=(0,i.useRef)(),{basePath:m}=(0,a.useRouter)(),[_,b]=(0,i.useState)(!0),x=e=>new Promise((t,r)=>{let n=new c.E,l=new d._;l.setDecoderConfig({type:"js"}),l.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),n.setDRACOLoader(l),n.load(m+e,e=>{t(e.scene||e.scenes[0])},e=>{console.log(e),console.log(e.loaded/e.total*100+"% loaded")},r)}),g=(0,i.useCallback)(()=>{let{current:e}=r,{current:t}=f,{current:n}=p;if(e&&t&&n){let{clientHeight:r,clientWidth:l}=e;n.aspect=l/r,n.updateProjectionMatrix(),t.setSize(l,r)}},[]);return(0,i.useEffect)(()=>{let{current:e}=r,{current:n}=h;if(!e)return;let{clientHeight:l,clientWidth:o}=e,a=new s.xsS,i=new s.cPb(60,o/l,.01,1e3);p.current=i;let d=new s.Mig(13421772,Math.PI);a.add(d),a.add(i);let c=new s.CP7({antialias:!0,alpha:!0});c.setPixelRatio(window.devicePixelRatio),c.setSize(o,l),c.outputColorSpace=s.KI_,f.current=c,e.appendChild(c.domElement);let m=new u.z(i,c.domElement);m.autoRotate=!0,x(t).then(e=>{_(e),requestAnimationFrame(g),b(!1)});let _=e=>{let t=new s.ZzF().setFromObject(e),r=t.getSize(new s.Pa4),n=t.getCenter(new s.Pa4);e.position.copy(new s.Pa4(0,0,0)),m.reset(),m.maxDistance=10*r.length(),i.near=r.length()/100,i.far=100*r.length(),i.updateProjectionMatrix(),i.position.copy(n),i.position.x+=1*r.length(),i.position.y+=1*r.length(),i.position.z+=1*r.length(),i.lookAt(n);let o=.003*l;e.scale.set(o,o,o),m.saveState(),a.add(e)},g=()=>{n=requestAnimationFrame(g),c.render(a,i),m.update()};return()=>{cancelAnimationFrame(n),c.domElement.remove(),c.dispose()}},[t]),(0,i.useEffect)(()=>(window.addEventListener("resize",g,!1),()=>{window.removeEventListener("resize",g,!1)}),[g]),(0,n.jsx)(l.xu,{ref:r,m:"auto",mt:["0px","-40px","-100px"],mb:["-40px","-140px","-200px"],w:"100%",h:["280px","480px","640px"],position:"relative",children:_&&(0,n.jsx)(o.$,{size:"xl",position:"absolute",left:"50%",top:"50%",ml:"calc(0px - var(--spinner-size) / 2)",mt:"calc(0px - var(--spinner-size) / 2)"})})}},80992:function(e,t,r){"use strict";r.d(t,{h:function(){return n.default},r:function(){return d}});var n=r(25142),l=r(11527),o=r(24375),a=r.n(o),i=r(7221),s=r(50959),u=r(47687),d=e=>{let{children:t,href:r,target:n,...o}=e,d=(0,u.useRouter)(),[c,f]=(0,s.useTransition)();return n||r.startsWith("/")||(n="_blank"),(0,l.jsx)(i.r,{...o,href:r,target:n,as:a(),onClick:e=>{e.preventDefault(),f(()=>{d.push(e.currentTarget.href)})},transform:c?"scale(1)":"",opacity:c?.85:1,transition:"transform 0.2s ease-in-out, opacity 0.2s 0.4s linear",_hover:{textDecoration:"none"},children:t})}},55279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return a},default:function(){return i}});let n=r(81351);r(11527),r(50959);let l=n._(r(1989));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let i=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=i?i().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,a(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(81351)._(r(50959)).default.createContext(null)},1989:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(81351)._(r(50959)),l=r(59986),o=[],a=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function s(){if(!o){let t=new u(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?n.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return d.preload=()=>s(),d.displayName="LoadableComponent",n.default.forwardRef(d)}(s,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(o).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());c(a,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},43935:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(11527),l=r(23968),o=r(92578),a=r(37543),i=r(72270),s=r(2072),u=r.n(s),d=r(80992),c=r(8258),f=r.n(c);let p="/dog.glb",h=f()(()=>Promise.resolve().then(r.bind(r,25142)),{loadableGenerated:{webpack:()=>[25142]},ssr:!1,loading:()=>(0,n.jsx)(d.h,{url:p})});function m(){return(0,n.jsxs)(l.W,{children:[(0,n.jsx)(h,{url:p}),(0,n.jsx)(o.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:(0,a.ff)("whiteAlpha.500","whiteAlpha.200"),css:{backdropFilter:"blur(10px)"},children:"Hello, I'm an frontend developer!"}),(0,n.jsxs)(o.xu,{display:{md:"flex"},children:[(0,n.jsxs)(o.xu,{flexGrow:1,children:[(0,n.jsx)(i.X,{as:"h2",variant:"page-title",children:"njr"}),(0,n.jsx)("p",{children:"Enquanto houver 1% de chance, teremo 99% f\xe9."})]}),(0,n.jsx)(o.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,n.jsx)(o.xu,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",w:"100px",h:"100px",display:"inline-block",borderRadius:"full",overflow:"hidden",children:(0,n.jsx)(u(),{src:"images/avatar.jpeg",alt:"Profile image",width:"100",height:"100"})})})]})]})}},8258:function(e,t,r){e.exports=r(55279)}},function(e){e.O(0,[461,71,888,774,179],function(){return e(e.s=9828)}),_N_E=e.O()}]);