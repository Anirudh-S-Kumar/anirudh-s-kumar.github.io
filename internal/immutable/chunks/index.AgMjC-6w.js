import{A as $,y as _,J as m,h as S,d as b,K as E,L as w,M as O,N as x,O as C,P as I,Q as p,R as L,S as M,T as N,U as P,V as R}from"./scheduler.fjhztXxj.js";const o=new Set;let d;function K(){d={r:0,c:[],p:d}}function Q(){d.r||$(d.c),d=d.p}function U(t,e){t&&t.i&&(o.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function z(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function D(t){t&&t.c()}function F(t,e){t&&t.l(e)}function V(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),x(()=>{const f=t.$$.on_mount.map(L).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function j(t,e){const n=t.$$;n.fragment!==null&&(C(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,i,f,c=null,v=[-1]){const u=I;p(t);const a=t.$$={fragment:null,ctx:[],props:f,update:_,not_equal:i,bound:m(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:m(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(r,l,...g)=>{const y=g.length?g[0]:l;return a.ctx&&i(a.ctx[r],a.ctx[r]=y)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](y),h&&A(t,r)),l}):[],a.update(),h=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){P();const r=S(e.target);a.fragment&&a.fragment.l(r),r.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&U(t.$$.fragment),V(t,e.target,e.anchor),R(),E()}p(u)}class H{$$=void 0;$$set=void 0;$destroy(){j(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const B="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(B);export{H as S,U as a,D as b,Q as c,F as d,j as e,z as f,K as g,G as i,V as m,T as t};