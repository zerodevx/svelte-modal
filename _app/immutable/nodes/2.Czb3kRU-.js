import{A as e,D as t,E as n,F as r,I as i,L as a,M as o,N as s,O as c,P as l,T as u,_ as d,a as f,b as p,c as m,h,i as g,j as _,k as v,n as y,o as b,p as x,r as S,t as C,u as w,w as T,x as ee,y as E}from"../chunks/FmJf6ndg.js";import{t as D}from"../chunks/B3XmNbXL.js";import{t as O}from"../chunks/BbAgv1Qt.js";import"../chunks/B7F9b8Fy.js";var te=d(`<dialog><!></dialog>`);function k(e,t){r(t,!0);let i=C(t,`id`,3,void 0),o=C(t,`class`,3,``),c=C(t,`blocking`,3,!1),u=C(t,`attach`,3,()=>{}),d=C(t,`ref`,15),p=s(()=>c()?{blocking:``}:{}),m=null;function g(e){!c()&&d()&&!e.composedPath().includes(d())&&x()}function _(e){e.preventDefault(),c()||x()}function v(){m&&m(d()?.returnValue||``),d()&&d(d().returnValue=``,!0),m=null}function b(){return d()?.showModal(),new Promise(e=>m=e)}function x(e=``){d()?.close(e)}var T={show:b,close:x},E=te();S(E,()=>({id:i(),class:o(),closedby:c()?`none`:`any`,onclick:g,oncancel:_,onclose:v,...ee(p)}),void 0,void 0,void 0,`svelte-142tmrn`);var D=n(E);return w(D,()=>t.children),a(E),y(E,e=>d(e),()=>d()),f(E,u),h(e,E),l(T)}function A(e){let t=()=>O(``,{state:{showModal:!0},shallow:!0});u(()=>{!D.state.showModal&&e.hasAttribute(`open`)&&(e.hasAttribute(`blocking`)?t():e.close(``))});let n=new MutationObserver(n=>{for(let{type:r,attributeName:i}of n)r===`attributes`&&i===`open`&&(e.hasAttribute(`open`)?(O(``,{replace:!0,shallow:!0}),t()):D.state.showModal&&history.back())});return n.observe(e,{attributes:!0,attributeFilter:[`open`]}),()=>n.disconnect()}var j=[`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal}>
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="my-modal">
  <h1>Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>

<style>
  .my-modal {
    padding: 2rem;
    border: none;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 28rem;
    width: 90%;
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      overlay 0.3s ease allow-discrete,
      display 0.3s ease allow-discrete;
    h1 {
      font-size: 1.125rem;
      font-weight: 700;
    }
    &[open] {
      opacity: 1;
      transform: scale(1);
    }
    &::backdrop {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);
      transition:
        background-color 0.3s ease,
        backdrop-filter 0.3s ease,
        overlay 0.3s ease allow-discrete,
        display 0.3s ease allow-discrete;
    }
    &[open]::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }
    @starting-style {
      &[open] {
        opacity: 0;
        transform: scale(0.9);
      }
      &[open]::backdrop {
        background-color: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0px);
      }
    }
  }
</style>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal
  bind:this={modal}
  class="w-9/10 max-w-md scale-95 rounded-lg border-none p-8 opacity-0 shadow-2xl transition-all transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:backdrop-blur-none backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:scale-100 open:opacity-100 open:backdrop:bg-black/50 open:backdrop:backdrop-blur-xs starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0 starting:open:backdrop:backdrop-blur-none"
>
  <h1 class="text-lg font-bold">Hello world!</h1>
  <p>ESC or clicking backdrop closes the modal.</p>
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello world!</h3>
    <p>ESC or clicking backdrop closes the modal.</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>  
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState } from '@zerodevx/svelte-modal/kit' 
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>

<SvelteModal bind:this={modal} class="tw" attach={enhancedState}>
  <div class="prose">
    <h3>Hello world!</h3>
    <p>ESC, backdrop click, and the back button closes the modal.</p>
  </div>
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit' 

  let modal
  async function onclick() {
    const option = await modal.show()
    if (option === 'yes') confetti()
  }
<\/script>

<button {onclick}>Show modal</button>

<SvelteModal bind:this={modal} class="tw prose" {attach}>
  <h3>Are cats the cutest pets?</h3>
  <p>(They really are.) ESC, backdrop click, navigation back, and Cancel button cancels the modal.</p>
  <form method="dialog" class="flex justify-end">
    <button class="btn mr-4">Cancel</button>
    <button class="btn btn-primary" value="yes">Yes, absolutely</button>
  </form>
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit'
  let modal
<\/script>

<button onclick={() => modal.show()}>Show modal</button>
 
<SvelteModal bind:this={modal} class="tw prose" {attach} blocking>
  <h3>You can't close me!</h3>
  <p>ESC, backdrop click, and the back button won't close the modal.</p>
  <button class="btn float-end" onclick={() => modal.close()}>Escape hatch</button>
</SvelteModal>
`,`<script>
  import { SvelteModal } from '@zerodevx/svelte-modal'  
  import { enhancedState as attach } from '@zerodevx/svelte-modal/kit'
<\/script>

<button commandfor="my-modal" command="show-modal">Show modal</button>

<SvelteModal class="tw prose" {attach} id="my-modal">
  <h3>Opened with invoker command</h3>
  <p>ESC, backdrop click, and the back button also closes the modal.</p>
  <button commandfor="my-modal" command="close">Ok, got it</button>
</SvelteModal>
`],M=`mz3PUW_p`,N=[`#FFC700`,`#FF0000`,`#2E3191`,`#41BBC7`],P=3500,F=.5,I=150,ne=`mix`,L=12,R=``,z=!0,B=800,V=1600;function re(e,t={}){let{colors:n=N,duration:r=P,force:i=F,particleCount:a=I,particleShape:o=ne,particleSize:s=L,particleClass:c=R,destroyAfterDone:l=z,stageHeight:u=B,stageWidth:d=V}=t;(function(e){if(document.querySelector(`style[data-neoconfetti]`))return;let t=q(`style`);t.dataset.neoconfetti=``,t.textContent=e,J(document.head,t)})(`@keyframes mz3PUW_ya{to{translate:0 var(--sh)}}@keyframes mz3PUW_xa{to{translate:var(--xlp)0}}@keyframes mz3PUW_r{50%{rotate:var(--hr)180deg}to{rotate:var(--r)360deg}}.mz3PUW_c{z-index:1200;width:0;height:0;position:relative;overflow:visible}.mz3PUW_p{animation:xa var(--dc)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:mz3PUW_xa}.mz3PUW_p>div{animation:ya var(--dc)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--w);height:var(--h);animation-name:mz3PUW_ya;position:absolute;top:0;left:0}.mz3PUW_p>div:before{content:"";background-color:var(--bgc);animation:r var(--rd)infinite linear;border-radius:var(--br);width:100%;height:100%;animation-name:mz3PUW_r;display:block}`),e.classList.add(`mz3PUW_c`),e.style.setProperty(`--sh`,u+`px`);let f=[],p=[],m=()=>K(G()*(le-1)),h=(e,t)=>o!==`rectangles`&&(e===`circles`||ue(t));function g(e,t){let n=m(),a=h(o,n),c=(t,n)=>e.style.setProperty(t,n+``);c(`--xlp`,Z(W(Q(t,90)-180),0,180,-d/2,d/2)+`px`),c(`--dc`,r-K(1e3*G())+`ms`);let l=G()<ae?X(G()*oe,2):0;c(`--x1`,l),c(`--x2`,-1*l),c(`--x3`,l),c(`--x4`,X(W(Z(W(Q(t,90)-180),0,180,-1,1)),4)),c(`--y1`,X(G()*U,4)),c(`--y2`,X(G()*i*(ce()?1:-1),4)),c(`--y3`,U),c(`--y4`,X(se(Z(W(t-180),0,180,i,-i),0),4)),c(`--w`,(a?s:K(4*G())+s/2)+`px`),c(`--h`,(a?s:K(2*G())+s)+`px`);let u=n.toString(2).padStart(3,`0`).split(``);c(`--hr`,u.map((e=>e/2+``)).join(` `)),c(`--r`,u.join(` `)),c(`--rd`,X(G()*(ie-H)+H)+`ms`),c(`--br`,a?`50%`:0)}let _;function v(){e.innerHTML=``,clearTimeout(_),f=Y(a,n),p=function(e,t=[],n){let r=[];for(let{color:i}of t){let t=q(`div`);t.className=`${M} ${n}`,t.style.setProperty(`--bgc`,i),J(t,q(`div`)),J(e,t),r.push(t)}return r}(e,f,c);for(let[e,t]of $(p))g(t,f[+e].degree);_=setTimeout((()=>{l&&(e.innerHTML=``)}),r)}return v(),{update(t){let g=t.particleCount??I,y=t.particleShape??ne,b=t.particleSize??L,x=t.particleClass??R,S=t.colors??N,C=t.stageHeight??B,w=t.duration??P,T=t.force??F,ee=t.stageWidth??V,E=t.destroyAfterDone??z;f=Y(g,S);let D=!1;if(g===a){p=Array.from(e.querySelectorAll(`.${M}`));for(let[e,{color:t}]of $(f)){let r=p[+e];JSON.stringify(n)!==JSON.stringify(S)&&r.style.setProperty(`--bgc`,t),y!==o&&r.style.setProperty(`--br`,h(y,m())?`50%`:`0`),x!==c&&(c&&r.classList.remove(c),x&&r.classList.add(x))}}else D=!0;l&&!E&&clearTimeout(_),e.style.setProperty(`--sh`,C+`px`),r=w,n=S,i=T,a=g,o=y,s=b,c=x,l=E,u=C,d=ee,D&&v()},destroy(){e.innerHTML=``,clearTimeout(_)}}}var H=200,ie=800,ae=.1,oe=.3,U=.5,W=Math.abs,G=Math.random,K=Math.round,se=Math.max,q=e=>document.createElement(e),J=(e,t)=>e.appendChild(t),Y=(e,t)=>Array.from({length:e},((n,r)=>({color:t[r%t.length],degree:360*r/e}))),X=(e,t=2)=>K((e+2**-52)*10**t)/10**t,Z=(e,t,n,r,i)=>(e-t)*(i-r)/(n-t)+r,Q=(e,t)=>e+t>360?e+t-360:e+t,ce=()=>G()>.5,$=Object.entries,le=6,ue=e=>e!==1&&ce(),de=d(`<div class="fixed top-1/3 left-1/2 svelte-1uha8ag"><span class="svelte-1uha8ag"></span></div>`),fe=d(`<h1 class="svelte-1uha8ag">Hello world!</h1> <p class="svelte-1uha8ag">ESC or clicking backdrop closes the modal.</p>`,1),pe=d(`<div class="svelte-1uha8ag"><h1 class="text-lg font-bold svelte-1uha8ag">Hello world!</h1> <p class="svelte-1uha8ag">ESC or clicking backdrop closes the modal.</p></div>`),me=d(`<div class="modal-box svelte-1uha8ag"><h3 class="text-lg font-bold svelte-1uha8ag">Hello world!</h3> <p class="svelte-1uha8ag">ESC or clicking backdrop closes the modal.</p></div> <form method="dialog" class="modal-backdrop svelte-1uha8ag"><button value="cancel" class="svelte-1uha8ag">cancel</button></form>`,1),he=d(`<div class="prose svelte-1uha8ag"><h3 class="svelte-1uha8ag">Hello world!</h3> <p class="svelte-1uha8ag">ESC, backdrop click, and the back button closes the modal.</p></div>`),ge=d(`<h3 class="svelte-1uha8ag">Are cats the cutest pets?</h3> <p class="svelte-1uha8ag">(They really are.) ESC, backdrop click, navigation back, and Cancel button cancels the modal.</p> <form method="dialog" class="flex justify-end svelte-1uha8ag"><button class="btn mr-4 svelte-1uha8ag">Cancel</button> <button class="btn btn-primary svelte-1uha8ag" value="yes">Yes, absolutely</button></form>`,1),_e=d(`<h3 class="svelte-1uha8ag">You can't close me!</h3> <p class="svelte-1uha8ag">ESC, backdrop click, and the back button won't close the modal.</p> <button class="btn float-end svelte-1uha8ag">Escape hatch</button>`,1),ve=d(`<h3 class="svelte-1uha8ag">Opened with invoker command</h3> <p class="svelte-1uha8ag">ESC, backdrop click, and the back button also closes the modal.</p> <button class="btn float-end svelte-1uha8ag" commandfor="modal-7" command="close">OK, got it</button>`,1),ye=d(`<div class="mx-auto prose mt-8 mb-24 px-6 sm:px-0 svelte-1uha8ag"><h1 class="svelte-1uha8ag">svelte-modal</h1> <blockquote class="svelte-1uha8ag">Svelte modals done right.</blockquote> <h2 class="svelte-1uha8ag">Installation</h2> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag">npm i @zerodevx/svelte-modal</code></pre> <h2 class="svelte-1uha8ag">Examples</h2> <h3 class="svelte-1uha8ag">1. Basic usage</h3> <p class="svelte-1uha8ag">Modals ship unstyled.</p> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div> <h3 class="svelte-1uha8ag">2. Styling</h3> <p class="svelte-1uha8ag">Just use classes.</p> <div class="tabs tabs-border svelte-1uha8ag"><input type="radio" name="css_tabs" class="tab svelte-1uha8ag" aria-label="Vanilla"/> <div class="tab-content svelte-1uha8ag"><pre class="max-h-108 svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div></div> <input type="radio" name="css_tabs" class="tab svelte-1uha8ag" aria-label="Tailwind CSS" checked=""/> <div class="tab-content svelte-1uha8ag"><pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div></div> <input type="radio" name="css_tabs" class="tab svelte-1uha8ag" aria-label="DaisyUI"/> <div class="tab-content svelte-1uha8ag"><pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div></div></div> <h3 class="svelte-1uha8ag">3. Enhanced state</h3> <p class="svelte-1uha8ag">If you're using SvelteKit, use the <code class="svelte-1uha8ag">enhancedState</code> attachment to let the browser's back
    button close the modal.</p> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div> <h3 class="svelte-1uha8ag">4. Idiomatic code</h3> <p class="svelte-1uha8ag"><code class="svelte-1uha8ag">show()</code> returns a promise that resolves to the dialog's <code class="svelte-1uha8ag">returnValue</code> when closed. Programatically calling <code class="svelte-1uha8ag">close(returnValue: string)</code> works too.</p> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div> <h3 class="svelte-1uha8ag">5. Blocking modals</h3> <p class="svelte-1uha8ag">Assert the <code class="svelte-1uha8ag">blocking</code> prop to prevent cancellation by ESC, backdrop click, or the back
    button (best effort).</p> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">Show modal</button></div> <h3 class="svelte-1uha8ag">6. Declarative use</h3> <p class="svelte-1uha8ag">You can also declaratively control the modal by dispatching commands.</p> <pre class="svelte-1uha8ag"><code class="svelte-1uha8ag"> </code></pre> <div class="flex justify-end svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag" commandfor="modal-7" command="show-modal">Show modal</button></div></div> <footer class="flex h-48 w-full items-center justify-center bg-neutral text-neutral-content svelte-1uha8ag"><p class="text-sm svelte-1uha8ag">♥ <a class="link svelte-1uha8ag" href="mailto:jason@zerodevx.com">jason@zerodevx.com</a></p></footer> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1);function be(s,u){r(u,!0);let d=e([]),f=o(!1),S=(e=0)=>new Promise(t=>setTimeout(t,e));async function C(){await S(300),_(f,!0),await S(3500),_(f,!1)}var w=ye(),E=t(w),D=v(n(E),14),O=n(D),te=c(O,!0);a(D);var M=v(D,2),N=c(M),P=v(M,6),F=v(n(P),2),I=n(F),ne=n(I),L=c(ne,!0);a(I);var R=v(I,2),z=c(R);a(F);var B=v(F,2);g(B);var V=v(B,2),H=n(V),ie=n(H),ae=c(ie,!0);a(H);var oe=v(H,2),U=c(oe);a(V);var W=v(V,4),G=n(W),K=n(G),se=c(K,!0);a(G);var q=v(G,2),J=c(q);a(W),a(P);var Y=v(P,6),X=n(Y),Z=c(X,!0);a(Y);var Q=v(Y,2),ce=c(Q),$=v(Q,6),le=n($),ue=c(le,!0);a($);var be=v($,2),xe=c(be),Se=v(be,6),Ce=n(Se),we=c(Ce,!0);a(Se);var Te=v(Se,2),Ee=c(Te),De=v(Te,6),Oe=n(De),ke=c(Oe,!0);a(De),i(2),a(E);var Ae=v(E,4),je=e=>{var t=de(),r=n(t);b(r,e=>re?.(e)),a(t),h(e,t)};m(Ae,e=>{ee(f)&&e(je)});var Me=v(Ae,2);y(k(Me,{children:(e,t)=>{var n=fe();i(2),h(e,n)},$$slots:{default:!0}}),e=>d[0]=e,()=>d?.[0]);var Ne=v(Me,2);y(k(Ne,{class:`my-modal`,children:(e,t)=>{var n=fe();i(2),h(e,n)},$$slots:{default:!0}}),e=>d[1]=e,()=>d?.[1]);var Pe=v(Ne,2);y(k(Pe,{class:`w-9/10 max-w-md scale-95 rounded-lg border-none p-8 opacity-0 shadow-2xl transition-all transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:backdrop-blur-none backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:scale-100 open:opacity-100 open:backdrop:bg-black/50 open:backdrop:backdrop-blur-xs starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0 starting:open:backdrop:backdrop-blur-none`,children:(e,t)=>{var n=pe();h(e,n)},$$slots:{default:!0}}),e=>d[2]=e,()=>d?.[2]);var Fe=v(Pe,2);y(k(Fe,{class:`modal`,children:(e,t)=>{var n=me();i(2),h(e,n)},$$slots:{default:!0}}),e=>d[3]=e,()=>d?.[3]);var Ie=v(Fe,2);y(k(Ie,{class:`tw`,get attach(){return A},children:(e,t)=>{var n=he();h(e,n)},$$slots:{default:!0}}),e=>d[4]=e,()=>d?.[4]);var Le=v(Ie,2);y(k(Le,{class:`tw prose`,get attach(){return A},children:(e,t)=>{var n=ge();i(4),h(e,n)},$$slots:{default:!0}}),e=>d[5]=e,()=>d?.[5]);var Re=v(Le,2);y(k(Re,{class:`tw prose`,get attach(){return A},blocking:!0,children:(e,n)=>{var r=_e(),i=v(t(r),4);p(`click`,i,()=>d[6].close()),h(e,r)},$$slots:{default:!0}}),e=>d[6]=e,()=>d?.[6]);var ze=v(Re,2);y(k(ze,{class:`tw prose backdrop:cursor-pointer`,get attach(){return A},id:`modal-7`,children:(e,t)=>{var n=ve();i(4),h(e,n)},$$slots:{default:!0}}),e=>d[7]=e,()=>d?.[7]),T(()=>{x(te,j[0]),x(L,j[1]),x(ae,j[2]),x(se,j[3]),x(Z,j[4]),x(ue,j[5]),x(we,j[6]),x(ke,j[7])}),p(`click`,N,()=>d[0].show()),p(`click`,z,()=>d[1].show()),p(`click`,U,()=>d[2].show()),p(`click`,J,()=>d[3].show()),p(`click`,ce,()=>d[4].show()),p(`click`,xe,async()=>{await d[5].show()===`yes`&&C()}),p(`click`,Ee,()=>d[6].show()),h(s,w),l()}E([`click`]);export{be as component};