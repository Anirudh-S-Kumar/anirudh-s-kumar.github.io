function C(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function Q(){return Object.create(null)}function D(t){t.forEach(B)}function R(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const i of n)i(void 0);return C}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function X(t,n,e){t.$$.on_destroy.push(M(n,e))}function Y(t,n,e,i){if(t){const r=k(t,n,e,i);return t[0](r)}}function k(t,n,e,i){return t[1]&&i?P(e.ctx.slice(),t[1](i(n))):e.ctx}function Z(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function $(t,n,e,i,r,s){if(r){const c=k(n,e,i,s);t.p(c,r)}}function tt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let m=!1;function nt(){m=!0}function et(){m=!1}function O(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(r>0&&n[e[r]].claim_order<=a?r+1:O(1,r,S=>n[e[S]].claim_order,a))-1;i[l]=e[o]+1;const w=o+1;e[w]=l,r=Math.max(w,r)}const s=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<s.length&&c[l].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(c[l],o)}}function q(t,n){if(m){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){m&&!e?q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function H(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function lt(){return x(" ")}function ut(){return x("")}function st(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function at(t){return function(n){return n.preventDefault(),t.call(this,n)}}function ot(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ft(t){return t.dataset.svelteH}function _t(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,r=!1){L(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function A(t,n,e,i){return N(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function dt(t,n,e){return A(t,n,e,H)}function ht(t,n,e){return A(t,n,e,I)}function z(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function mt(t){return z(t," ")}function pt(t,n){n=""+n,t.data!==n&&(t.data=n)}function bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function F(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function yt(t,n){return new t(n)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function gt(t){v().$$.on_mount.push(t)}function xt(t){v().$$.after_update.push(t)}function vt(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=F(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],j=Promise.resolve();let g=!1;function U(){g||(g=!0,j.then(J))}function wt(){return U(),j}function G(t){_.push(t)}function Et(t){y.push(t)}const b=new Set;let f=0;function J(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),K(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function K(t){if(t.fragment!==null){t.update(),D(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}function kt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{D as A,st as B,vt as C,ft as D,I as E,ht as F,at as G,Et as H,ct as I,Q as J,J as K,R as L,W as M,G as N,kt as O,h as P,p as Q,B as R,d as S,U as T,nt as U,et as V,lt as a,xt as b,mt as c,rt as d,ut as e,H as f,dt as g,_t as h,it as i,ot as j,bt as k,x as l,z as m,pt as n,gt as o,E as p,yt as q,Y as r,V as s,wt as t,$ as u,tt as v,Z as w,q as x,C as y,X as z};