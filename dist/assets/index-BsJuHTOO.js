var Lm=Object.defineProperty;var Um=(n,t,e)=>t in n?Lm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var bt=(n,t,e)=>Um(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ye={},hs=[],Zn=()=>{},gf=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ya=n=>n.startsWith("onUpdate:"),Ge=Object.assign,Qc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Nm=Object.prototype.hasOwnProperty,oe=(n,t)=>Nm.call(n,t),kt=Array.isArray,Vi=n=>Kr(n)==="[object Map]",Mi=n=>Kr(n)==="[object Set]",Zu=n=>Kr(n)==="[object Date]",Kt=n=>typeof n=="function",Re=n=>typeof n=="string",Pn=n=>typeof n=="symbol",xe=n=>n!==null&&typeof n=="object",_f=n=>(xe(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),xf=Object.prototype.toString,Kr=n=>xf.call(n),Fm=n=>Kr(n).slice(8,-1),vf=n=>Kr(n)==="[object Object]",Ma=n=>Re(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cr=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},zm=/-\w/g,Bn=Sa(n=>n.replace(zm,t=>t.slice(1).toUpperCase())),Om=/\B([A-Z])/g,Ms=Sa(n=>n.replace(Om,"-$1").toLowerCase()),yf=Sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Sa(n=>n?`on${yf(n)}`:""),jn=(n,t)=>!Object.is(n,t),Wo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Mf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ba=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ju;const Ea=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(n){if(kt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Re(i)?Hm(i):Jn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Re(n)||xe(n))return n}const Bm=/;(?![^(]*\))/g,Vm=/:([^]+)/,km=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Hm(n){const t={};return n.replace(km,e=>e.startsWith("/*")?"":e).split(Bm).forEach(e=>{if(e){const i=e.split(Vm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Qt(n){let t="";if(Re(n))t=n;else if(kt(n))for(let e=0;e<n.length;e++){const i=Qt(n[e]);i&&(t+=i+" ")}else if(xe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=Jc(Gm);function Sf(n){return!!n||n===""}function Xm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Si(n[s],t[s],e);return i}function Qu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Si(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function $m(n,t,e){let i=Vi(n),s=Vi(t);if(i||s||(i=Mi(n),s=Mi(t),i||s))return i&&s?Qu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Si(n[a],t[a],e))return!1}return String(n)===String(t)}function th(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Si(n,t,e){if(n===t)return!0;let i=Zu(n),s=Zu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Pn(n),s=Pn(t),i||s?n===t:(i=kt(n),s=kt(t),i||s?i&&s?th(n,t,e,Xm):!1:(i=xe(n),s=xe(t),i||s?!i||!s?!1:th(n,t,e,$m):String(n)===String(t))))}function tu(n,t){return n.findIndex(e=>Si(e,t))}const bf=n=>!!(n&&n.__v_isRef===!0),ot=n=>Re(n)?n:n==null?"":kt(n)||xe(n)&&(n.toString===xf||!Kt(n.toString))?bf(n)?ot(n.value):JSON.stringify(n,Ef,2):String(n),Ef=(n,t)=>bf(t)?Ef(n,t.value):Vi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[qa(i,r)+" =>"]=s,e),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>qa(e))}:Pn(t)?qa(t):xe(t)&&!kt(t)&&!vf(t)?String(t):t,qa=(n,t="")=>{var e;return Pn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ze;class Tf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ze&&(ze.active?(this.parent=ze,this.index=(ze.scopes||(ze.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=ze;try{return ze=this,t()}finally{ze=e}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){if(this._on>0&&--this._on===0){if(ze===this)ze=this.prevScope;else{let t=ze;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wf(n){return new Tf(n)}function Af(){return ze}function Ym(n,t=!1){ze&&ze.cleanups.push(n)}let Me;const Ka=new WeakSet;class Cf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&(ze.active?ze.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eh(this),Df(this);const t=Me,e=Vn;Me=this,Vn=!0;try{return this.fn()}finally{If(this),Me=t,Vn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)iu(t);this.deps=this.depsTail=void 0,eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let Rf=0,Rr,Pr;function Pf(n,t=!1){if(n.flags|=8,t){n.next=Pr,Pr=n;return}n.next=Rr,Rr=n}function eu(){Rf++}function nu(){if(--Rf>0)return;if(Pr){let t=Pr;for(Pr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Rr;){let t=Rr;for(Rr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Df(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function If(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),iu(i),jm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Lf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jl(n))))return;n.flags|=2;const t=n.dep,e=Me,i=Vn;Me=n,Vn=!0;try{Df(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Me=e,Vn=i,If(n),n.flags&=-3}}function iu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)iu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function jm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Vn=!0;const Uf=[];function bi(){Uf.push(Vn),Vn=!1}function Ei(){const n=Uf.pop();Vn=n===void 0?!0:n}function eh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Me;Me=void 0;try{t()}finally{Me=e}}}let Br=0;class qm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Me||!Vn||Me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Me)e=this.activeLink=new qm(Me,this),Me.deps?(e.prevDep=Me.depsTail,Me.depsTail.nextDep=e,Me.depsTail=e):Me.deps=Me.depsTail=e,Nf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Me.depsTail,e.nextDep=void 0,Me.depsTail.nextDep=e,Me.depsTail=e,Me.deps===e&&(Me.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){eu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{nu()}}}function Nf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Nf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ea=new WeakMap,ps=Symbol(""),ql=Symbol(""),Vr=Symbol("");function je(n,t,e){if(Vn&&Me){let i=ea.get(n);i||ea.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new su),s.map=i,s.key=e),s.track()}}function mi(n,t,e,i,s,r){const o=ea.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(eu(),t==="clear")o.forEach(a);else{const l=kt(n),c=l&&Ma(e);if(l&&e==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===Vr||!Pn(d)&&d>=h)&&a(u)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Vr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),Vi(n)&&a(o.get(ql)));break;case"delete":l||(a(o.get(ps)),Vi(n)&&a(o.get(ql)));break;case"set":Vi(n)&&a(o.get(ps));break}}nu()}function Km(n,t){const e=ea.get(n);return e&&e.get(t)}function Es(n){const t=ne(n);return t===n||(je(t,"iterate",Vr),Mn(n))?t:ti(n)?Qn(n)?t.map(e=>Wi(Dn(e))):t.map(Wi):t.map(Dn)}function Ta(n){return je(n=ne(n),"iterate",Vr),n}function Xn(n,t){return ti(n)?Wi(Qn(n)?Dn(t):t):Dn(t)}const Zm={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,n=>Xn(this,n))},concat(...n){return Es(this).concat(...n.map(t=>kt(t)?Es(t):t))},entries(){return Za(this,"entries",n=>(n[1]=Xn(this,n[1]),n))},every(n,t){return si(this,"every",n,t,void 0,arguments)},filter(n,t){return si(this,"filter",n,t,e=>e.map(i=>Xn(this,i)),arguments)},find(n,t){return si(this,"find",n,t,e=>Xn(this,e),arguments)},findIndex(n,t){return si(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return si(this,"findLast",n,t,e=>Xn(this,e),arguments)},findLastIndex(n,t){return si(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return si(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,t){return si(this,"map",n,t,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...t){return nh(this,"reduce",n,t)},reduceRight(n,...t){return nh(this,"reduceRight",n,t)},shift(){return ur(this,"shift")},some(n,t){return si(this,"some",n,t,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return Za(this,"values",n=>Xn(this,n))}};function Za(n,t,e){const i=Ta(n),s=i[t]();return i!==n&&!Mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Jm=Array.prototype;function si(n,t,e,i,s,r){const o=Ta(n),a=o!==n&&!Mn(n),l=o[t];if(l!==Jm[t]){const u=l.apply(n,r);return a?Dn(u):u}let c=e;o!==n&&(a?c=function(u,d){return e.call(this,Xn(n,u),d,n)}:e.length>2&&(c=function(u,d){return e.call(this,u,d,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function nh(n,t,e,i){const s=Ta(n),r=s!==n&&!Mn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,u){return a&&(a=!1,c=Xn(n,c)),e.call(this,c,Xn(n,h),u,n)}):e.length>3&&(o=function(c,h,u){return e.call(this,c,h,u,n)}));const l=s[t](o,...i);return a?Xn(n,l):l}function Ja(n,t,e){const i=ne(n);je(i,"iterate",Vr);const s=i[t](...e);return(s===-1||s===!1)&&Aa(e[0])?(e[0]=ne(e[0]),i[t](...e)):s}function ur(n,t,e=[]){bi(),eu();const i=ne(n)[t].apply(n,e);return nu(),Ei(),i}const Qm=Jc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pn));function tg(n){Pn(n)||(n=String(n));const t=ne(this);return je(t,"has",n),t.hasOwnProperty(n)}class zf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ug:kf:r?Vf:Bf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=kt(t);if(!s){let l;if(o&&(l=Zm[e]))return l;if(e==="hasOwnProperty")return tg}const a=Reflect.get(t,e,Pe(t)?t:i);if((Pn(e)?Ff.has(e):Qm(e))||(s||je(t,"get",e),r))return a;if(Pe(a)){const l=o&&Ma(e)?a:a.value;return s&&xe(l)?Zl(l):l}return xe(a)?s?Zl(a):wa(a):a}}class Of extends zf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=kt(t)&&Ma(e);if(!this._isShallow){const c=ti(r);if(!Mn(i)&&!ti(i)&&(r=ne(r),i=ne(i)),!o&&Pe(r)&&!Pe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,Pe(t)?t:s);return t===ne(s)&&l&&(a?jn(i,r)&&mi(t,"set",e,i):mi(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&mi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Pn(e)||!Ff.has(e))&&je(t,"has",e),i}ownKeys(t){return je(t,"iterate",kt(t)?"length":ps),Reflect.ownKeys(t)}}class eg extends zf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ng=new Of,ig=new eg,sg=new Of(!0);const Kl=n=>n,oo=n=>Reflect.getPrototypeOf(n);function rg(n,t,e){return function(...i){const s=this.__v_raw,r=ne(s),o=Vi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=e?Kl:t?Wi:Dn;return!t&&je(r,"iterate",l?ql:ps),Ge(Object.create(c),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}}})}}function ao(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function og(n,t){const e={get(s){const r=this.__v_raw,o=ne(r),a=ne(s);n||(jn(s,a)&&je(o,"get",s),je(o,"get",a));const{has:l}=oo(o),c=t?Kl:n?Wi:Dn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&je(ne(s),"iterate",ps),s.size},has(s){const r=this.__v_raw,o=ne(r),a=ne(s);return n||(jn(s,a)&&je(o,"has",s),je(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ne(a),c=t?Kl:n?Wi:Dn;return!n&&je(l,"iterate",ps),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return Ge(e,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(s){const r=ne(this),o=oo(r),a=ne(s),l=!t&&!Mn(s)&&!ti(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!t&&!Mn(r)&&!ti(r)&&(r=ne(r));const o=ne(this),{has:a,get:l}=oo(o);let c=a.call(o,s);c||(s=ne(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?jn(r,h)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=ne(this),{has:o,get:a}=oo(r);let l=o.call(r,s);l||(s=ne(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=ne(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=rg(s,n,t)}),e}function ru(n,t){const e=og(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const ag={get:ru(!1,!1)},lg={get:ru(!1,!0)},cg={get:ru(!0,!1)};const Bf=new WeakMap,Vf=new WeakMap,kf=new WeakMap,ug=new WeakMap;function hg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wa(n){return ti(n)?n:ou(n,!1,ng,ag,Bf)}function dg(n){return ou(n,!1,sg,lg,Vf)}function Zl(n){return ou(n,!0,ig,cg,kf)}function ou(n,t,e,i,s){if(!xe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=hg(Fm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Qn(n){return ti(n)?Qn(n.__v_raw):!!(n&&n.__v_isReactive)}function ti(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Aa(n){return n?!!n.__v_raw:!1}function ne(n){const t=n&&n.__v_raw;return t?ne(t):n}function au(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&Mf(n,"__v_skip",!0),n}const Dn=n=>xe(n)?wa(n):n,Wi=n=>xe(n)?Zl(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function ki(n){return fg(n,!1)}function fg(n,t){return Pe(n)?n:new pg(n,t)}class pg{constructor(t,e){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ne(t),this._value=e?t:Dn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Mn(t)||ti(t);t=i?t:ne(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:Dn(t),this.dep.trigger())}}function L(n){return Pe(n)?n.value:n}const mg={get:(n,t,e)=>t==="__v_raw"?n:L(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Pe(s)&&!Pe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Hf(n){return Qn(n)?n:new Proxy(n,mg)}function gg(n){const t=kt(n)?new Array(n.length):{};for(const e in n)t[e]=xg(n,e);return t}class _g{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Pn(e)?e:String(e),this._raw=ne(t);let s=!0,r=t;if(!kt(t)||Pn(this._key)||!Ma(this._key))do s=!Aa(r)||Mn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=L(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Pe(this._raw[this._key])){const e=this._object[this._key];if(Pe(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return Km(this._raw,this._key)}}function xg(n,t,e){return new _g(n,t,e)}class vg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Pf(this,!0),!0}get value(){const t=this.dep.track();return Lf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yg(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new vg(i,s,e)}const lo={},na=new WeakMap;let as;function Mg(n,t=!1,e=as){if(e){let i=na.get(e);i||na.set(e,i=[]),i.push(n)}}function Sg(n,t,e=ye){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:Mn(S)||s===!1||s===0?gi(S,1):gi(S);let h,u,d,m,g=!1,_=!1;if(Pe(n)?(u=()=>n.value,g=Mn(n)):Qn(n)?(u=()=>c(n),g=!0):kt(n)?(_=!0,g=n.some(S=>Qn(S)||Mn(S)),u=()=>n.map(S=>{if(Pe(S))return S.value;if(Qn(S))return c(S);if(Kt(S))return l?l(S,2):S()})):Kt(n)?t?u=l?()=>l(n,2):n:u=()=>{if(d){bi();try{d()}finally{Ei()}}const S=as;as=h;try{return l?l(n,3,[m]):n(m)}finally{as=S}}:u=Zn,t&&s){const S=u,D=s===!0?1/0:s;u=()=>gi(S(),D)}const f=Af(),p=()=>{h.stop(),f&&f.active&&Qc(f.effects,h)};if(r&&t){const S=t;t=(...D)=>{const P=S(...D);return p(),P}}let x=_?new Array(n.length).fill(lo):lo;const v=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const D=h.run();if(S||s||g||(_?D.some((P,T)=>jn(P,x[T])):jn(D,x))){d&&d();const P=as;as=h;try{const T=[D,x===lo?void 0:_&&x[0]===lo?[]:x,m];x=D,l?l(t,3,T):t(...T)}finally{as=P}}}else h.run()};return a&&a(v),h=new Cf(u),h.scheduler=o?()=>o(v,!1):v,m=S=>Mg(S,!1,h),d=h.onStop=()=>{const S=na.get(h);if(S){if(l)l(S,4);else for(const D of S)D();na.delete(h)}},t?i?v(!0):x=h.run():o?o(v.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function gi(n,t=1/0,e){if(t<=0||!xe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Pe(n))gi(n.value,t,e);else if(kt(n))for(let i=0;i<n.length;i++)gi(n[i],t,e);else if(Mi(n)||Vi(n))n.forEach(i=>{gi(i,t,e)});else if(vf(n)){for(const i in n)gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ca(s,t,e)}}function kn(n,t,e,i){if(Kt(n)){const s=Zr(n,t,e,i);return s&&_f(s)&&s.catch(r=>{Ca(r,t,e)}),s}if(kt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],t,e,i));return s}}function Ca(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ye;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){bi(),Zr(r,null,10,[n,l,c]),Ei();return}}bg(n,e,s,i,o)}function bg(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const tn=[];let Wn=-1;const qs=[];let zi=null,$s=0;const Gf=Promise.resolve();let ia=null;function lu(n){const t=ia||Gf;return n?t.then(this?n.bind(this):n):t}function Eg(n){let t=Wn+1,e=tn.length;for(;t<e;){const i=t+e>>>1,s=tn[i],r=kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function cu(n){if(!(n.flags&1)){const t=kr(n),e=tn[tn.length-1];!e||!(n.flags&2)&&t>=kr(e)?tn.push(n):tn.splice(Eg(t),0,n),n.flags|=1,Wf()}}function Wf(){ia||(ia=Gf.then($f))}function Tg(n){if(!kt(n))zi&&n.id===-1?zi.splice($s+1,0,n):n.flags&1||(qs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)qs.push(n[t]);Wf()}function ih(n,t,e=Wn+1){for(;e<tn.length;e++){const i=tn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;tn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xf(n){if(qs.length){const t=[...new Set(qs)].sort((e,i)=>kr(e)-kr(i));if(qs.length=0,zi){for(let e=0;e<t.length;e++)zi.push(t[e]);return}for(zi=t,$s=0;$s<zi.length;$s++){const e=zi[$s];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}zi=null,$s=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $f(n){try{for(Wn=0;Wn<tn.length;Wn++){const t=tn[Wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Wn<tn.length;Wn++){const t=tn[Wn];t&&(t.flags&=-2)}Wn=-1,tn.length=0,Xf(),ia=null,(tn.length||qs.length)&&$f()}}let An=null,Yf=null;function sa(n){const t=An;return An=n,Yf=n&&n.type.__scopeId||null,t}function wg(n,t=An,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ph(-1);const r=sa(t),o=gs.length;let a;try{a=n(...s)}finally{for(let l=gs.length;l>o;l--)gp();sa(r),i._d&&ph(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pe(n,t){if(An===null)return n;const e=Ua(An),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ye]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Qi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(bi(),kn(l,e,8,[n.el,a,n,t]),Ei())}}function Ag(n,t){if(nn){let e=nn.provides;const i=nn.parent&&nn.parent.provides;i===e&&(e=nn.provides=Object.create(i)),e[n]=t}}function Dr(n,t,e=!1){const i=Mp();if(i||ms){let s=ms?ms._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}function Cg(){return!!(Mp()||ms)}const Rg=Symbol.for("v-scx"),Pg=()=>Dr(Rg);function Ae(n,t,e){return jf(n,t,e)}function jf(n,t,e=ye){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ge({},e),l=t&&i||!t&&r!=="post";let c;if(Wr){if(r==="sync"){const m=Pg();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Zn,m.resume=Zn,m.pause=Zn,m}}const h=nn;a.call=(m,g,_)=>kn(m,h,g,_);let u=!1;r==="post"?a.scheduler=m=>{cn(m,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(m,g)=>{g?m():cu(m)}),a.augmentJob=m=>{t&&(m.flags|=4),u&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const d=Sg(n,t,a);return Wr&&(c?c.push(d):l&&d()),d}function Dg(n,t,e){const i=this.proxy,s=Re(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=Jr(this),a=jf(s,r.bind(i),e);return o(),a}function qf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Ig=Symbol("_vte"),Ra=n=>n.__isTeleport,Qa=Symbol("_leaveCb");function Lg(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ti){t=e;break}}return t}function Kf(n){if(!hu(n))return Ra(n.type)&&n.children?Lg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function uu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;uu(Ra(e.type)&&Kf(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Hn(n,t){return Kt(n)?Ge({name:n.name},t,{setup:n}):n}function Zf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function sh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ra=new WeakMap;function Ir(n,t,e,i,s=!1){if(kt(n)){n.forEach((_,f)=>Ir(_,t&&(kt(t)?t[f]:t),e,i,s));return}if(Lr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,h=a.refs===ye?a.refs={}:a.refs,u=a.setupState,d=ne(u),m=u===ye?gf:_=>sh(h,_)?!1:oe(d,_),g=(_,f)=>!(f&&sh(h,f));if(c!=null&&c!==l){if(rh(t),Re(c))h[c]=null,m(c)&&(u[c]=null);else if(Pe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(Kt(l))Zr(l,a,12,[o,h]);else{const _=Re(l),f=Pe(l);if(_||f){const p=()=>{if(n.f){const x=_?m(l)?u[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)kt(x)&&Qc(x,r);else if(kt(x))x.includes(r)||x.push(r);else if(_)h[l]=[r],m(l)&&(u[l]=h[l]);else{const v=[r];g(l,n.k)&&(l.value=v),n.k&&(h[n.k]=v)}}else _?(h[l]=o,m(l)&&(u[l]=o)):f&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const x=()=>{p(),ra.delete(n)};x.id=-1,ra.set(n,x),cn(x,e)}else rh(n),p()}}}function rh(n){const t=ra.get(n);t&&(t.flags|=8,ra.delete(n))}Ea().requestIdleCallback;Ea().cancelIdleCallback;const Lr=n=>!!n.type.__asyncLoader,hu=n=>n.type.__isKeepAlive;function Ug(n,t){Jf(n,"a",t)}function Ng(n,t){Jf(n,"da",t)}function Jf(n,t,e=nn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)hu(s.parent.vnode)&&Fg(i,t,e,s),s=s.parent}}function Fg(n,t,e,i){const s=Pa(t,n,i,!0);du(()=>{Qc(i[t],s)},e)}function Pa(n,t,e=nn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{bi();const a=Jr(e),l=kn(t,e,n,o);return a(),Ei(),l});return i?s.unshift(r):s.push(r),r}}const Ai=n=>(t,e=nn)=>{(!Wr||n==="sp")&&Pa(n,(...i)=>t(...i),e)},zg=Ai("bm"),Da=Ai("m"),Og=Ai("bu"),Bg=Ai("u"),Jl=Ai("bum"),du=Ai("um"),Vg=Ai("sp"),kg=Ai("rtg"),Hg=Ai("rtc");function Gg(n,t=nn){Pa("ec",n,t)}const Wg=Symbol.for("v-ndc");function en(n,t,e,i){let s;const r=e,o=kt(n);if(o||Re(n)){const a=o&&Qn(n);let l=!1,c=!1;a&&(l=!Mn(n),c=ti(n),n=Ta(n)),s=new Array(n.length);for(let h=0,u=n.length;h<u;h++)s[h]=t(l?c?Wi(Dn(n[h])):Dn(n[h]):n[h],h,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(xe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=t(n[h],h,l,r)}}else s=[];return s}const Ql=n=>n?Sp(n)?Ua(n):Ql(n.parent):null,Ur=Ge(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>tp(n),$forceUpdate:n=>n.f||(n.f=()=>{cu(n.update)}),$nextTick:n=>n.n||(n.n=lu.bind(n.proxy)),$watch:n=>Dg.bind(n)}),tl=(n,t)=>n!==ye&&!n.__isScriptSetup&&oe(n,t),Xg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(tl(i,t))return o[t]=1,i[t];if(s!==ye&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==ye&&oe(e,t))return o[t]=4,e[t];tc&&(o[t]=0)}}const c=Ur[t];let h,u;if(c)return t==="$attrs"&&je(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ye&&oe(e,t))return o[t]=4,e[t];if(u=l.config.globalProperties,oe(u,t))return u[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return tl(s,t)?(s[t]=e,!0):i!==ye&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ye&&a[0]!=="$"&&oe(n,a)||tl(t,a)||oe(r,a)||oe(i,a)||oe(Ur,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function oh(n){return kt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let tc=!0;function $g(n){const t=tp(n),e=n.proxy,i=n.ctx;tc=!1,t.beforeCreate&&ah(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:f,beforeDestroy:p,beforeUnmount:x,destroyed:v,unmounted:S,render:D,renderTracked:P,renderTriggered:T,errorCaptured:R,serverPrefetch:U,expose:y,inheritAttrs:E,components:O,directives:z,filters:$}=t;if(c&&Yg(c,i,null),o)for(const H in o){const X=o[H];Kt(X)&&(i[H]=X.bind(e))}if(s){const H=s.call(e,e);xe(H)&&(n.data=wa(H))}if(tc=!0,r)for(const H in r){const X=r[H],rt=Kt(X)?X.bind(e,e):Kt(X.get)?X.get.bind(e,e):Zn,at=!Kt(X)&&Kt(X.set)?X.set.bind(e):Zn,ht=Ie({get:rt,set:at});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Lt=>ht.value=Lt})}if(a)for(const H in a)Qf(a[H],i,e,H);if(l){const H=Kt(l)?l.call(e):l;Reflect.ownKeys(H).forEach(X=>{Ag(X,H[X])})}h&&ah(h,n,"c");function k(H,X){kt(X)?X.forEach(rt=>H(rt.bind(e))):X&&H(X.bind(e))}if(k(zg,u),k(Da,d),k(Og,m),k(Bg,g),k(Ug,_),k(Ng,f),k(Gg,R),k(Hg,P),k(kg,T),k(Jl,x),k(du,S),k(Vg,U),kt(y))if(y.length){const H=n.exposed||(n.exposed={});y.forEach(X=>{Object.defineProperty(H,X,{get:()=>e[X],set:rt=>e[X]=rt,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===Zn&&(n.render=D),E!=null&&(n.inheritAttrs=E),O&&(n.components=O),z&&(n.directives=z),U&&Zf(n)}function Yg(n,t,e=Zn){kt(n)&&(n=ec(n));for(const i in n){const s=n[i];let r;xe(s)?"default"in s?r=Dr(s.from||i,s.default,!0):r=Dr(s.from||i):r=Dr(s),Pe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ah(n,t,e){kn(kt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qf(n,t,e,i){let s=i.includes(".")?qf(e,i):()=>e[i];if(Re(n)){const r=t[n];Kt(r)&&Ae(s,r)}else if(Kt(n))Ae(s,n.bind(e));else if(xe(n))if(kt(n))n.forEach(r=>Qf(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&Ae(s,r,n)}}function tp(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>oa(l,c,o,!0)),oa(l,t,o)),xe(t)&&r.set(t,l),l}function oa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&oa(n,r,e,!0),s&&s.forEach(o=>oa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=jg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const jg={data:lh,props:ch,emits:ch,methods:Er,computed:Er,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Er,directives:Er,watch:Kg,provide:lh,inject:qg};function lh(n,t){return t?n?function(){return Ge(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function qg(n,t){return Er(ec(n),ec(t))}function ec(n){if(kt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ze(n,t){return n?[...new Set([].concat(n,t))]:t}function Er(n,t){return n?Ge(Object.create(null),n,t):t}function ch(n,t){return n?kt(n)&&kt(t)?[...new Set([...n,...t])]:Ge(Object.create(null),oh(n),oh(t??{})):t}function Kg(n,t){if(!n)return t;if(!t)return n;const e=Ge(Object.create(null),n);for(const i in t)e[i]=Ze(n[i],t[i]);return e}function ep(){return{app:null,config:{isNativeTag:gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zg=0;function Jg(n,t){return function(i,s=null){Kt(i)||(i=Ge({},i)),s!=null&&!xe(s)&&(s=null);const r=ep(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Zg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:R0,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Kt(h.install)?(o.add(h),h.install(c,...u)):Kt(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const m=c._ceVNode||dt(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,h,d),l=!0,c._container=h,h.__vue_app__=c,Ua(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=ms;ms=c;try{return h()}finally{ms=u}}};return c}}let ms=null;const Qg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Bn(t)}Modifiers`]||n[`${Ms(t)}Modifiers`];function t0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ye;let s=e;const r=t.startsWith("update:"),o=r&&Qg(i,t.slice(7));o&&(o.trim&&(s=e.map(h=>Re(h)?h.trim():h)),o.number&&(s=s.map(ba)));let a,l=i[a=ja(t)]||i[a=ja(Bn(t))];!l&&r&&(l=i[a=ja(Ms(t))]),l&&kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(c,n,6,s)}}const e0=new WeakMap;function np(n,t,e=!1){const i=e?e0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=c=>{const h=np(c,t,!0);h&&(a=!0,Ge(o,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xe(n)&&i.set(n,null),null):(kt(r)?r.forEach(l=>o[l]=null):Ge(o,r),xe(n)&&i.set(n,o),o)}function Ia(n,t){return!n||!va(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,Ms(t))||oe(n,t))}function uh(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:m,ctx:g,inheritAttrs:_}=n,f=sa(n);let p,x;try{if(e.shapeFlag&4){const S=s||i,D=S;p=$n(c.call(D,S,h,u,m,d,g)),x=a}else{const S=t;p=$n(S.length>1?S(u,{attrs:a,slots:o,emit:l}):S(u,null)),x=t.props?a:n0(a)}}catch(S){gs.length=0,Ca(S,n,1),p=dt(Ti)}let v=p;if(x&&_!==!1){const S=Object.keys(x),{shapeFlag:D}=v;S.length&&D&7&&(r&&S.some(ya)&&(x=i0(x,r)),v=tr(v,x,!1,!0))}if(e.dirs&&(v=tr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition){const S=Ra(v.type)&&Kf(v)||v;uu(S,e.transition)}return p=v,sa(f),p}const n0=n=>{let t;for(const e in n)(e==="class"||e==="style"||va(e))&&((t||(t={}))[e]=n[e]);return t},i0=(n,t)=>{const e={};for(const i in n)(!ya(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function s0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?hh(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(ip(o,i,d)&&!Ia(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hh(i,o,c):!0:!!o;return!1}function hh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ip(t,n,r)&&!Ia(e,r))return!0}return!1}function ip(n,t,e){const i=n[e],s=t[e];return e==="style"&&xe(i)&&xe(s)?!Si(i,s):i!==s}function r0({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const sp={},rp=()=>Object.create(sp),op=n=>Object.getPrototypeOf(n)===sp;function o0(n,t,e,i=!1){const s={},r=rp();n.propsDefaults=Object.create(null),ap(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:dg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function a0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ne(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Ia(n.emitsOptions,d))continue;const m=t[d];if(l)if(oe(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=Bn(d);s[g]=nc(l,a,g,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{ap(n,t,s,r)&&(c=!0);let h;for(const u in a)(!t||!oe(t,u)&&((h=Ms(u))===u||!oe(t,h)))&&(l?e&&(e[u]!==void 0||e[h]!==void 0)&&(s[u]=nc(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!t||!oe(t,u))&&(delete r[u],c=!0)}c&&mi(n.attrs,"set","")}function ap(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Cr(l))continue;const c=t[l];let h;s&&oe(s,h=Bn(l))?!r||!r.includes(h)?e[h]=c:(a||(a={}))[h]=c:Ia(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ne(e),c=a||ye;for(let h=0;h<r.length;h++){const u=r[h];e[u]=nc(s,l,u,c[u],n,!oe(c,u))}}return o}function nc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=Jr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ms(e))&&(i=!0))}return i}const l0=new WeakMap;function lp(n,t,e=!1){const i=e?l0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const h=u=>{l=!0;const[d,m]=lp(u,t,!0);Ge(o,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return xe(n)&&i.set(n,hs),hs;if(kt(r))for(let h=0;h<r.length;h++){const u=Bn(r[h]);dh(u)&&(o[u]=ye)}else if(r)for(const h in r){const u=Bn(h);if(dh(u)){const d=r[h],m=o[u]=kt(d)||Kt(d)?{type:d}:Ge({},d),g=m.type;let _=!1,f=!0;if(kt(g))for(let p=0;p<g.length;++p){const x=g[p],v=Kt(x)&&x.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(f=!1)}else _=Kt(g)&&g.name==="Boolean";m[0]=_,m[1]=f,(_||oe(m,"default"))&&a.push(u)}}const c=[o,a];return xe(n)&&i.set(n,c),c}function dh(n){return n[0]!=="$"&&!Cr(n)}const fu=n=>n==="_"||n==="_ctx"||n==="$stable",pu=n=>kt(n)?n.map($n):[$n(n)],c0=(n,t,e)=>{if(t._n)return t;const i=wg((...s)=>pu(t(...s)),e);return i._c=!1,i},cp=(n,t,e)=>{const i=n._ctx;for(const s in n){if(fu(s))continue;const r=n[s];if(Kt(r))t[s]=c0(s,r,i);else if(r!=null){const o=pu(r);t[s]=()=>o}}},up=(n,t)=>{const e=pu(t);n.slots.default=()=>e},hp=(n,t,e)=>{for(const i in t)(e||!fu(i))&&(n[i]=t[i])},u0=(n,t,e)=>{const i=n.slots=rp();if(n.vnode.shapeFlag&32){const s=t._;s?(hp(i,t,e),e&&Mf(i,"_",s,!0)):cp(t,i)}else t&&up(n,t)},h0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ye;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:hp(s,t,e):(r=!t.$stable,cp(t,s)),o=t}else t&&(up(n,t),o={default:1});if(r)for(const a in s)!fu(a)&&o[a]==null&&delete s[a]},cn=g0;function d0(n){return f0(n)}function f0(n,t){const e=Ea();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:m=Zn,insertStaticContent:g}=n,_=(I,b,Z,tt=null,J=null,j=null,ct=void 0,it=null,w=!!b.dynamicChildren)=>{if(I===b)return;I&&!hr(I,b)&&(tt=vt(I),Lt(I,J,j,!0),I=null),b.patchFlag===-2&&(w=!1,b.dynamicChildren=null),b.dynamicChildren&&I&&I.dynamicChildren&&I.dynamicChildren.hasOnce&&(b.dynamicChildren===hs&&(b.dynamicChildren=[]),b.dynamicChildren.hasOnce=!0);const{type:M,ref:F,shapeFlag:V}=b;switch(M){case La:f(I,b,Z,tt);break;case Ti:p(I,b,Z,tt);break;case Xo:I==null&&x(b,Z,tt,ct);break;case ve:O(I,b,Z,tt,J,j,ct,it,w);break;default:V&1?D(I,b,Z,tt,J,j,ct,it,w):V&6?z(I,b,Z,tt,J,j,ct,it,w):(V&64||V&128)&&M.process(I,b,Z,tt,J,j,ct,it,w,Xt)}F!=null&&J?Ir(F,I&&I.ref,j,b||I,!b):F==null&&I&&I.ref!=null&&Ir(I.ref,null,j,I,!0)},f=(I,b,Z,tt)=>{if(I==null)i(b.el=a(b.children),Z,tt);else{const J=b.el=I.el;b.children!==I.children&&c(J,b.children)}},p=(I,b,Z,tt)=>{I==null?i(b.el=l(b.children||""),Z,tt):b.el=I.el},x=(I,b,Z,tt)=>{[I.el,I.anchor]=g(I.children,b,Z,tt,I.el,I.anchor)},v=({el:I,anchor:b},Z,tt)=>{let J;for(;I&&I!==b;)J=d(I),i(I,Z,tt),I=J;i(b,Z,tt)},S=({el:I,anchor:b})=>{let Z;for(;I&&I!==b;)Z=d(I),s(I),I=Z;s(b)},D=(I,b,Z,tt,J,j,ct,it,w)=>{if(b.type==="svg"?ct="svg":b.type==="math"&&(ct="mathml"),I==null)P(b,Z,tt,J,j,ct,it,w);else{const M=I.el&&I.el._isVueCE?I.el:null;try{M&&M._beginPatch(),U(I,b,J,j,ct,it,w)}finally{M&&M._endPatch()}}},P=(I,b,Z,tt,J,j,ct,it)=>{let w,M;const{props:F,shapeFlag:V,transition:q,dirs:Y}=I;if(w=I.el=o(I.type,j,F&&F.is,F),V&8?h(w,I.children):V&16&&R(I.children,w,null,tt,J,el(I,j),ct,it),Y&&Qi(I,null,tt,"created"),T(w,I,I.scopeId,ct,tt),F){for(const ft in F)ft!=="value"&&!Cr(ft)&&r(w,ft,null,F[ft],j,tt);"value"in F&&r(w,"value",null,F.value,j),(M=F.onVnodeBeforeMount)&&Gn(M,tt,I)}Y&&Qi(I,null,tt,"beforeMount");const gt=p0(J,q);gt&&q.beforeEnter(w),i(w,b,Z),((M=F&&F.onVnodeMounted)||gt||Y)&&cn(()=>{try{M&&Gn(M,tt,I),gt&&q.enter(w),Y&&Qi(I,null,tt,"mounted")}finally{}},J)},T=(I,b,Z,tt,J)=>{if(Z&&m(I,Z),tt)for(let j=0;j<tt.length;j++)m(I,tt[j]);if(J){let j=J.subTree;if(b===j||mp(j.type)&&(j.ssContent===b||j.ssFallback===b)){const ct=J.vnode;T(I,ct,ct.scopeId,ct.slotScopeIds,J.parent)}}},R=(I,b,Z,tt,J,j,ct,it,w=0)=>{for(let M=w;M<I.length;M++){const F=I[M]=it?fi(I[M]):$n(I[M]);_(null,F,b,Z,tt,J,j,ct,it)}},U=(I,b,Z,tt,J,j,ct)=>{const it=b.el=I.el;let{patchFlag:w,dynamicChildren:M,dirs:F}=b;w|=I.patchFlag&16;const V=I.props||ye,q=b.props||ye;let Y;if(Z&&ts(Z,!1),(Y=q.onVnodeBeforeUpdate)&&Gn(Y,Z,b,I),F&&Qi(b,I,Z,"beforeUpdate"),Z&&ts(Z,!0),M&&(!I.dynamicChildren||I.dynamicChildren.length!==M.length)&&(w=0,ct=!1,M=null),(V.innerHTML&&q.innerHTML==null||V.textContent&&q.textContent==null)&&h(it,""),M?y(I.dynamicChildren,M,it,Z,tt,el(b,J),j):ct||X(I,b,it,null,Z,tt,el(b,J),j,!1),w>0){if(w&16)E(it,V,q,Z,J);else if(w&2&&V.class!==q.class&&r(it,"class",null,q.class,J),w&4&&r(it,"style",V.style,q.style,J),w&8){const gt=b.dynamicProps;for(let ft=0;ft<gt.length;ft++){const mt=gt[ft],zt=V[mt],ut=q[mt];(ut!==zt||mt==="value")&&r(it,mt,zt,ut,J,Z)}}w&1&&I.children!==b.children&&h(it,b.children)}else!ct&&M==null&&E(it,V,q,Z,J);((Y=q.onVnodeUpdated)||F)&&cn(()=>{Y&&Gn(Y,Z,b,I),F&&Qi(b,I,Z,"updated")},tt)},y=(I,b,Z,tt,J,j,ct)=>{for(let it=0;it<b.length;it++){const w=I[it],M=b[it],F=w.el&&(w.type===ve||!hr(w,M)||w.shapeFlag&198)?u(w.el):Z;_(w,M,F,null,tt,J,j,ct,!0)}},E=(I,b,Z,tt,J)=>{if(b!==Z){if(b!==ye)for(const j in b)!Cr(j)&&!(j in Z)&&r(I,j,b[j],null,J,tt);for(const j in Z){if(Cr(j))continue;const ct=Z[j],it=b[j];ct!==it&&j!=="value"&&r(I,j,it,ct,J,tt)}"value"in Z&&r(I,"value",b.value,Z.value,J)}},O=(I,b,Z,tt,J,j,ct,it,w)=>{const M=b.el=I?I.el:a(""),F=b.anchor=I?I.anchor:a("");let{patchFlag:V,dynamicChildren:q,slotScopeIds:Y}=b;Y&&(it=it?it.concat(Y):Y),I==null?(i(M,Z,tt),i(F,Z,tt),R(b.children||[],Z,F,J,j,ct,it,w)):V>0&&V&64&&q&&I.dynamicChildren&&I.dynamicChildren.length===q.length?(y(I.dynamicChildren,q,Z,J,j,ct,it),(b.key!=null||J&&b===J.subTree)&&dp(I,b,!0)):X(I,b,Z,F,J,j,ct,it,w)},z=(I,b,Z,tt,J,j,ct,it,w)=>{b.slotScopeIds=it,I==null?b.shapeFlag&512?J.ctx.activate(b,Z,tt,ct,w):$(b,Z,tt,J,j,ct,w):nt(I,b,w)},$=(I,b,Z,tt,J,j,ct)=>{const it=I.component=b0(I,tt,J);if(hu(I)&&(it.ctx.renderer=Xt),E0(it,!1,ct),it.asyncDep){if(J&&J.registerDep(it,k,ct),!I.el){const w=it.subTree=dt(Ti);p(null,w,b,Z),I.placeholder=w.el}}else k(it,I,b,Z,J,j,ct)},nt=(I,b,Z)=>{const tt=b.component=I.component;if(s0(I,b,Z))if(tt.asyncDep&&!tt.asyncResolved){b.el=I.el,H(tt,b,Z);return}else tt.next=b,tt.update();else b.el=I.el,tt.vnode=b},k=(I,b,Z,tt,J,j,ct)=>{const it=()=>{if(I.isMounted){let{next:V,bu:q,u:Y,parent:gt,vnode:ft}=I;{const Ut=fp(I);if(Ut){V&&(V.el=ft.el,H(I,V,ct)),Ut.asyncDep.then(()=>{cn(()=>{I.isUnmounted||M()},J)});return}}let mt=V,zt;ts(I,!1),V?(V.el=ft.el,H(I,V,ct)):V=ft,q&&Wo(q),(zt=V.props&&V.props.onVnodeBeforeUpdate)&&Gn(zt,gt,V,ft),ts(I,!0);const ut=uh(I),St=I.subTree;I.subTree=ut,_(St,ut,u(St.el),vt(St),I,J,j),V.el=ut.el,mt===null&&r0(I,ut.el),Y&&cn(Y,J),(zt=V.props&&V.props.onVnodeUpdated)&&cn(()=>Gn(zt,gt,V,ft),J)}else{let V;const{el:q,props:Y}=b,{bm:gt,m:ft,parent:mt,root:zt,type:ut}=I,St=Lr(b);ts(I,!1),gt&&Wo(gt),!St&&(V=Y&&Y.onVnodeBeforeMount)&&Gn(V,mt,b),ts(I,!0);{zt.ce&&zt.ce._hasShadowRoot()&&zt.ce._injectChildStyle(ut,I.parent?I.parent.type:void 0);const Ut=I.subTree=uh(I);_(null,Ut,Z,tt,I,J,j),b.el=Ut.el}if(ft&&cn(ft,J),!St&&(V=Y&&Y.onVnodeMounted)){const Ut=b;cn(()=>Gn(V,mt,Ut),J)}(b.shapeFlag&256||mt&&Lr(mt.vnode)&&mt.vnode.shapeFlag&256)&&I.a&&cn(I.a,J),I.isMounted=!0,b=Z=tt=null}};I.scope.on();const w=I.effect=new Cf(it);I.scope.off();const M=I.update=w.run.bind(w),F=I.job=w.runIfDirty.bind(w);F.i=I,F.id=I.uid,w.scheduler=()=>cu(F),ts(I,!0),M()},H=(I,b,Z)=>{b.component=I;const tt=I.vnode.props;I.vnode=b,I.next=null,a0(I,b.props,tt,Z),h0(I,b.children,Z),bi(),ih(I),Ei()},X=(I,b,Z,tt,J,j,ct,it,w=!1)=>{const M=I&&I.children,F=I?I.shapeFlag:0,V=b.children,{patchFlag:q,shapeFlag:Y}=b;if(q>0){if(q&128){at(M,V,Z,tt,J,j,ct,it,w);return}else if(q&256){rt(M,V,Z,tt,J,j,ct,it,w);return}}Y&8?(F&16&&yt(M,J,j),V!==M&&h(Z,V)):F&16?Y&16?at(M,V,Z,tt,J,j,ct,it,w):yt(M,J,j,!0):(F&8&&h(Z,""),Y&16&&R(V,Z,tt,J,j,ct,it,w))},rt=(I,b,Z,tt,J,j,ct,it,w)=>{I=I||hs,b=b||hs;const M=I.length,F=b.length,V=Math.min(M,F);let q;for(q=0;q<V;q++){const Y=b[q]=w?fi(b[q]):$n(b[q]);_(I[q],Y,Z,null,J,j,ct,it,w)}M>F?yt(I,J,j,!0,!1,V):R(b,Z,tt,J,j,ct,it,w,V)},at=(I,b,Z,tt,J,j,ct,it,w)=>{let M=0;const F=b.length;let V=I.length-1,q=F-1;for(;M<=V&&M<=q;){const Y=I[M],gt=b[M]=w?fi(b[M]):$n(b[M]);if(hr(Y,gt))_(Y,gt,Z,null,J,j,ct,it,w);else break;M++}for(;M<=V&&M<=q;){const Y=I[V],gt=b[q]=w?fi(b[q]):$n(b[q]);if(hr(Y,gt))_(Y,gt,Z,null,J,j,ct,it,w);else break;V--,q--}if(M>V){if(M<=q){const Y=q+1,gt=Y<F?b[Y].el:tt;for(;M<=q;)_(null,b[M]=w?fi(b[M]):$n(b[M]),Z,gt,J,j,ct,it,w),M++}}else if(M>q)for(;M<=V;)Lt(I[M],J,j,!0),M++;else{const Y=M,gt=M,ft=new Map;for(M=gt;M<=q;M++){const Yt=b[M]=w?fi(b[M]):$n(b[M]);Yt.key!=null&&ft.set(Yt.key,M)}let mt,zt=0;const ut=q-gt+1;let St=!1,Ut=0;const Ht=new Array(ut);for(M=0;M<ut;M++)Ht[M]=0;for(M=Y;M<=V;M++){const Yt=I[M];if(zt>=ut){Lt(Yt,J,j,!0);continue}let Ot;if(Yt.key!=null)Ot=ft.get(Yt.key);else for(mt=gt;mt<=q;mt++)if(Ht[mt-gt]===0&&hr(Yt,b[mt])){Ot=mt;break}Ot===void 0?Lt(Yt,J,j,!0):(Ht[Ot-gt]=M+1,Ot>=Ut?Ut=Ot:St=!0,_(Yt,b[Ot],Z,null,J,j,ct,it,w),zt++)}const Ct=St?m0(Ht):hs;for(mt=Ct.length-1,M=ut-1;M>=0;M--){const Yt=gt+M,Ot=b[Yt],he=b[Yt+1],B=Yt+1<F?he.el||pp(he):tt;Ht[M]===0?_(null,Ot,Z,B,J,j,ct,it,w):St&&(mt<0||M!==Ct[mt]?ht(Ot,Z,B,2):mt--)}}},ht=(I,b,Z,tt,J=null)=>{const{el:j,type:ct,transition:it,children:w,shapeFlag:M}=I;if(M&6){ht(I.component.subTree,b,Z,tt);return}if(M&128){I.suspense.move(b,Z,tt);return}if(M&64){ct.move(I,b,Z,Xt);return}if(ct===ve){i(j,b,Z);for(let V=0;V<w.length;V++)ht(w[V],b,Z,tt);i(I.anchor,b,Z);return}if(ct===Xo){v(I,b,Z);return}if(tt!==2&&M&1&&it)if(tt===0)it.persisted&&!j[Qa]?i(j,b,Z):(it.beforeEnter(j),i(j,b,Z),cn(()=>it.enter(j),J));else{const{leave:V,delayLeave:q,afterLeave:Y}=it,gt=()=>{I.ctx.isUnmounted?s(j):i(j,b,Z)},ft=()=>{const mt=j._isLeaving||!!j[Qa];j._isLeaving&&j[Qa](!0),it.persisted&&!mt?gt():V(j,()=>{gt(),Y&&Y()})};q?q(j,gt,ft):ft()}else i(j,b,Z)},Lt=(I,b,Z,tt=!1,J=!1)=>{const{type:j,props:ct,ref:it,children:w,dynamicChildren:M,shapeFlag:F,patchFlag:V,dirs:q,cacheIndex:Y,memo:gt}=I;if((V===-2||M&&M.hasOnce)&&(J=!1),it!=null&&(bi(),Ir(it,null,Z,I,!0),Ei()),Y!=null&&(!I.ctx||I.ctx===b)&&(b.renderCache[Y]=void 0),F&256){b.ctx.deactivate(I);return}const ft=F&1&&q,mt=!Lr(I);let zt;if(mt&&(zt=ct&&ct.onVnodeBeforeUnmount)&&Gn(zt,b,I),F&6)pt(I.component,Z,tt);else{if(F&128){I.suspense.unmount(Z,tt);return}ft&&Qi(I,null,b,"beforeUnmount"),F&64?I.type.remove(I,b,Z,Xt,tt):M&&!M.hasOnce&&(j!==ve||V>0&&V&64)?yt(M,b,Z,!1,!0):(j===ve&&V&384||!J&&F&16)&&yt(w,b,Z),tt&&Gt(I)}const ut=gt!=null&&Y==null;(mt&&(zt=ct&&ct.onVnodeUnmounted)||ft||ut)&&cn(()=>{zt&&Gn(zt,b,I),ft&&Qi(I,null,b,"unmounted"),ut&&(I.el=null)},Z)},Gt=I=>{const{type:b,el:Z,anchor:tt,transition:J}=I;if(b===ve){st(Z,tt);return}if(b===Xo){S(I),J&&!J.persisted&&J.afterLeave&&J.afterLeave();return}const j=()=>{s(Z),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:ct,delayLeave:it}=J,w=()=>ct(Z,j);it?it(I.el,j,w):w()}else j()},st=(I,b)=>{let Z;for(;I!==b;)Z=d(I),s(I),I=Z;s(b)},pt=(I,b,Z)=>{const{bum:tt,scope:J,job:j,subTree:ct,um:it,m:w,a:M}=I;fh(w),fh(M),tt&&Wo(tt),J.stop(),j?(j.flags|=8,Lt(ct,I,b,Z)):I.vnode.el&&ct&&(ct.transition=I.vnode.transition,Lt(ct,I,b,Z)),it&&cn(it,b),cn(()=>{I.isUnmounted=!0},b)},yt=(I,b,Z,tt=!1,J=!1,j=0)=>{for(let ct=j;ct<I.length;ct++)Lt(I[ct],b,Z,tt,J)},vt=I=>{if(I.shapeFlag&6)return vt(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=d(I.anchor||I.el),Z=b&&b[Ig];return Z?d(Z):b};let $t=!1;const Bt=(I,b,Z)=>{let tt;I==null?b._vnode&&(Lt(b._vnode,null,null,!0),tt=b._vnode.component):_(b._vnode||null,I,b,null,null,null,Z),b._vnode=I,$t||($t=!0,ih(tt),Xf(),$t=!1)},Xt={p:_,um:Lt,m:ht,r:Gt,mt:$,mc:R,pc:X,pbc:y,n:vt,o:n};return{render:Bt,hydrate:void 0,createApp:Jg(Bt)}}function el({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ts({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function p0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function dp(n,t,e=!1){const i=n.children,s=t.children;if(kt(i)&&kt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&dp(o,a)),a.type===La&&(a.patchFlag===-1&&(a=s[r]=fi(a)),a.el=o.el),a.type===Ti&&!a.el&&(a.el=o.el)}}function m0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function fp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fp(t)}function fh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function pp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?pp(t.subTree):null}const mp=n=>n.__isSuspense;function g0(n,t){t&&t.pendingBranch?kt(n)?t.effects.push(...n):t.effects.push(n):Tg(n)}const ve=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),gs=[];let yn=null;function Rt(n=!1){gs.push(yn=n?null:[])}function gp(){gs.pop(),yn=gs[gs.length-1]||null}let Hr=1;function ph(n,t=!1){Hr+=n,n<0&&yn&&t&&(yn.hasOnce=!0)}function _p(n){return n.dynamicChildren=Hr>0?yn||hs:null,gp(),Hr>0&&yn&&yn.push(n),n}function Pt(n,t,e,i,s,r){return _p(A(n,t,e,i,s,r,!0))}function xp(n,t,e,i,s){return _p(dt(n,t,e,i,s,!0))}function vp(n){return n?n.__v_isVNode===!0:!1}function hr(n,t){return n.type===t.type&&n.key===t.key}const yp=({key:n})=>n??null,$o=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Re(n)||Pe(n)||Kt(n)?{i:An,r:n,k:t,f:!!e}:n:null);function A(n,t=null,e=null,i=0,s=null,r=n===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&yp(t),ref:t&&$o(t),scopeId:Yf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(aa(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Re(e)?8:16),Hr>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const dt=_0;function _0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Wg)&&(n=Ti),vp(n)){const a=tr(n,t,!0);return e&&aa(a,e),Hr>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(C0(n)&&(n=n.__vccOpts),t){t=x0(t);let{class:a,style:l}=t;a&&!Re(a)&&(t.class=Qt(a)),xe(l)&&(Aa(l)&&!kt(l)&&(l=Ge({},l)),t.style=Jn(l))}const o=Re(n)?1:mp(n)?128:Ra(n)?64:xe(n)?4:Kt(n)?2:0;return A(n,t,e,i,s,o,r,!0)}function x0(n){return n?Aa(n)||op(n)?Ge({},n):n:null}function tr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?y0(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yp(c),ref:t&&t.ref?e&&r?kt(r)?r.concat($o(t)):[r,$o(t)]:$o(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ve?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tr(n.ssContent),ssFallback:n.ssFallback&&tr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&uu(h,l.clone(h)),h}function ae(n=" ",t=0){return dt(La,null,n,t)}function v0(n,t){const e=dt(Xo,null,n);return e.staticCount=t,e}function Se(n="",t=!1){return t?(Rt(),xp(Ti,null,n)):dt(Ti,null,n)}function $n(n){return n==null||typeof n=="boolean"?dt(Ti):kt(n)?dt(ve,null,n.slice()):vp(n)?fi(n):dt(La,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tr(n)}function aa(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(kt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),aa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!op(t)?t._ctx=An:s===3&&An&&(An.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Kt(t)){if(i&65){aa(n,{default:t});return}t={default:t,_ctx:An},e=32}else t=String(t),i&64?(e=16,t=[ae(t)]):e=8;n.children=t,n.shapeFlag|=e}function y0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Qt([t.class,i.class]));else if(s==="style")t.style=Jn([t.style,i.style]);else if(va(s)){const r=t[s],o=i[s];o&&r!==o&&!(kt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ya(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){kn(n,t,7,[e,i])}const M0=ep();let S0=0;function b0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||M0,r={uid:S0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(i,s),emitsOptions:np(i,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=t0.bind(null,r),n.ce&&n.ce(r),r}let nn=null;const Mp=()=>nn||An;let la,Gr;{const n=Ea(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};la=t("__VUE_INSTANCE_SETTERS__",e=>nn=e),Gr=t("__VUE_SSR_SETTERS__",e=>Wr=e)}const Jr=n=>{const t=nn;return la(n),n.scope.on(),()=>{n.scope.off(),la(t)}},mh=()=>{nn&&nn.scope.off(),la(null)};function Sp(n){return n.vnode.shapeFlag&4}let Wr=!1;function E0(n,t=!1,e=!1){t&&Gr(t);const{props:i,children:s}=n.vnode,r=Sp(n);o0(n,i,r,t),u0(n,s,e||t);const o=r?T0(n,t):void 0;return t&&Gr(!1),o}function T0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xg);const{setup:i}=e;if(i){bi();const s=n.setupContext=i.length>1?A0(n):null,r=Jr(n),o=Zr(i,n,0,[n.props,s]),a=_f(o);if(Ei(),r(),(a||n.sp)&&!Lr(n)&&Zf(n),a){if(o.then(mh,mh),t)return o.then(l=>{Gr(!0);try{gh(n,l,t)}finally{Gr(!1)}}).catch(l=>{Ca(l,n,0)});n.asyncDep=o}else gh(n,o)}else bp(n)}function gh(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:xe(t)&&(n.setupState=Hf(t)),bp(n)}function bp(n,t,e){const i=n.type;n.render||(n.render=i.render||Zn);{const s=Jr(n);bi();try{$g(n)}finally{Ei(),s()}}}const w0={get(n,t){return je(n,"get",""),n[t]}};function A0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,w0),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hf(au(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ur)return Ur[e](n)},has(t,e){return e in t||e in Ur}})):n.proxy}function C0(n){return Kt(n)&&"__vccOpts"in n}const Ie=(n,t)=>yg(n,t,Wr),R0="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ic;const _h=typeof window<"u"&&window.trustedTypes;if(_h)try{ic=_h.createPolicy("vue",{createHTML:n=>n})}catch{}const Ep=ic?n=>ic.createHTML(n):n=>n,P0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,xh=di&&di.createElement("template"),I0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?di.createElementNS(P0,n):t==="mathml"?di.createElementNS(D0,n):e?di.createElement(n,{is:e}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{xh.innerHTML=Ep(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},L0=Symbol("_vtc");function U0(n,t,e){const i=n[L0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ca=Symbol("_vod"),Tp=Symbol("_vsh"),co={name:"show",beforeMount(n,{value:t},{transition:e}){n[ca]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):dr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),dr(n,!0),i.enter(n)):i.leave(n,()=>{dr(n,!1)}):dr(n,t))},beforeUnmount(n,{value:t}){dr(n,t)}};function dr(n,t){n.style.display=t?n[ca]:"none",n[Tp]=!t}const N0=Symbol(""),F0=/(?:^|;)\s*display\s*:/;function z0(n,t,e){const i=n.style,s=Re(e);let r=!1;if(e&&!s){if(t)if(Re(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Tr(i,a,"")}else for(const o in t)e[o]==null&&Tr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?B0(n,o,!Re(t)&&t?t[o]:void 0,a)||Tr(i,o,a):Tr(i,o,"")}}else if(s){if(t!==e){const o=i[N0];o&&(e+=";"+o),i.cssText=e,r=F0.test(e)}}else t&&n.removeAttribute("style");ca in n&&(n[ca]=r?i.display:"",n[Tp]&&(i.display="none"))}const uo=/\s*!important$/;function Tr(n,t,e){if(kt(e))e.forEach(i=>Tr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))uo.test(e)?n.setProperty(t,e.replace(uo,""),"important"):n.setProperty(t,e);else{const i=O0(n,t);uo.test(e)?n.setProperty(Ms(i),e.replace(uo,""),"important"):n[i]=e}}const vh=["Webkit","Moz","ms"],nl={};function O0(n,t){const e=nl[t];if(e)return e;let i=Bn(t);if(i!=="filter"&&i in n)return nl[t]=i;i=yf(i);for(let s=0;s<vh.length;s++){const r=vh[s]+i;if(r in n)return nl[t]=r}return t}function B0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Re(i)&&e===i}const yh="http://www.w3.org/1999/xlink";function Mh(n,t,e,i,s,r=Wm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(yh,t.slice(6,t.length)):n.setAttributeNS(yh,t,e):e==null||r&&!Sf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Pn(e)?String(e):e)}function Sh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ep(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Sf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Oi(n,t,e,i){n.addEventListener(t,e,i)}function V0(n,t,e,i){n.removeEventListener(t,e,i)}const bh=Symbol("_vei");function k0(n,t,e,i,s=null){const r=n[bh]||(n[bh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=W0(t);if(i){const c=r[t]=Y0(i,s);Oi(n,a,c,l)}else o&&(V0(n,a,o,l),r[t]=void 0)}}const H0=/(Once|Passive|Capture)$/,G0=/^on:?(?:Once|Passive|Capture)$/;function W0(n){let t,e;for(;(e=n.match(H0))&&!G0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ms(n.slice(2)),t]}let il=0;const X0=Promise.resolve(),$0=()=>il||(X0.then(()=>il=0),il=Date.now());function Y0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(kt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&kn(c,t,5,a)}}else kn(s,t,5,[i])};return e.value=n,e.attached=$0(),e}const Eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,j0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?U0(n,i,o):t==="style"?z0(n,e,i):va(t)?ya(t)||k0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):q0(n,t,i,o))?(Sh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mh(n,t,i,o,r,t!=="value")):n._isVueCE&&(K0(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Re(i)))?Sh(n,Bn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Mh(n,t,i,o))};function q0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Eh(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eh(t)&&Re(e)?!1:t in n}function K0(n,t){const e=n._def.props;if(!e)return!1;const i=Bn(t);return Array.isArray(e)?e.some(s=>Bn(s)===i):Object.keys(e).some(s=>Bn(s)===i)}const er=n=>{const t=n.props["onUpdate:modelValue"]||!1;return kt(t)?e=>Wo(t,e):t};function Z0(n){n.target.composing=!0}function Th(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qn=Symbol("_assign"),ho=Symbol("_initialValue");function sl(n,t,e){return t&&(n=n.trim()),e&&(n=ba(n)),n}const wr={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[ho]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[ho]=n.defaultValue.replace(/\r\n?/g,`
`))),n[qn]=er(s);const r=i||s.props&&s.props.type==="number";Oi(n,t?"change":"input",o=>{o.target.composing||n[qn](sl(n.value,e,r))}),(e||r)&&Oi(n,"change",()=>{n.value=sl(n.value,e,r)}),t||(Oi(n,"compositionstart",Z0),Oi(n,"compositionend",Th),Oi(n,"change",Th))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[ho];delete n[ho],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[qn](sl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[qn]=er(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ba(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},$e={deep:!0,created(n,t,e){n[qn]=er(e),Oi(n,"change",()=>{const i=n._modelValue,s=Xr(n),r=n.checked,o=n[qn];if(kt(i)){const a=tu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Mi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(wp(n,r))})},mounted:wh,beforeUpdate(n,t,e){n[qn]=er(e),wh(n,t,e)}};function wh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(kt(t))s=tu(t,i.props.value)>-1;else if(Mi(t))s=t.has(i.props.value);else{if(t===e)return;s=Si(t,wp(n,!0))}n.checked!==s&&(n.checked=s)}const rl={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Oi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?ba(Xr(l)):Xr(l)),r=n.multiple,o=r?Mi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?kt(o)?s.slice():s:o];try{n[qn](o)}finally{lu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[qn]=er(i)},mounted(n,{value:t}){Ah(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[qn]=er(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!J0(t,e[1],e[0]))&&Ah(n,t)}};function J0(n,t,e){if(!e||kt(n))return Si(n,t);if(Mi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Ah(n,t){const e=n.multiple,i=kt(t);if(!(e&&!i&&!Mi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Xr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=tu(t,a)>-1}else o.selected=t.has(a);else if(Si(Xr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Xr(n){return"_value"in n?n._value:n.value}function wp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Q0=["ctrl","shift","alt","meta"],t_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Q0.some(e=>n[`${e}Key`]&&!t.includes(e))},fr=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=t_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},e_=Ge({patchProp:j0},I0);let Ch;function n_(){return Ch||(Ch=d0(e_))}const i_=(...n)=>{const t=n_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=r_(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,s_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function s_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function r_(n){return Re(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ap;const Na=n=>Ap=n,Cp=Symbol();function sc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Nr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Nr||(Nr={}));function o_(){const n=wf(!0),t=n.run(()=>ki({}));let e=[],i=[];const s=au({install(r){Na(s),s._a=r,r.provide(Cp,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const Rp=()=>{};function Rh(n,t,e,i=Rp){n.push(t);const s=()=>{const r=n.indexOf(t);r>-1&&(n.splice(r,1),i())};return!e&&Af()&&Ym(s),s}function Ts(n,...t){n.slice().forEach(e=>{e(...t)})}const a_=n=>n(),Ph=Symbol(),ol=Symbol();function rc(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];sc(s)&&sc(i)&&n.hasOwnProperty(e)&&!Pe(i)&&!Qn(i)?n[e]=rc(s,i):n[e]=i}return n}const l_=Symbol();function c_(n){return!sc(n)||!n.hasOwnProperty(l_)}const{assign:Fi}=Object;function u_(n){return!!(Pe(n)&&n.effect)}function h_(n,t,e,i){const{state:s,actions:r,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=s?s():{});const h=gg(e.state.value[n]);return Fi(h,r,Object.keys(o||{}).reduce((u,d)=>(u[d]=au(Ie(()=>{Na(e);const m=e._s.get(n);return o[d].call(m,m)})),u),{}))}return l=Pp(n,c,t,e,i,!0),l}function Pp(n,t,e={},i,s,r){let o;const a=Fi({actions:{}},e),l={deep:!0};let c,h,u=[],d=[],m;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let _;function f(R){let U;c=h=!1,typeof R=="function"?(R(i.state.value[n]),U={type:Nr.patchFunction,storeId:n,events:m}):(rc(i.state.value[n],R),U={type:Nr.patchObject,payload:R,storeId:n,events:m});const y=_=Symbol();lu().then(()=>{_===y&&(c=!0)}),h=!0,Ts(u,U,i.state.value[n])}const p=r?function(){const{state:U}=e,y=U?U():{};this.$patch(E=>{Fi(E,y)})}:Rp;function x(){o.stop(),u=[],d=[],i._s.delete(n)}const v=(R,U="")=>{if(Ph in R)return R[ol]=U,R;const y=function(){Na(i);const E=Array.from(arguments),O=[],z=[];function $(H){O.push(H)}function nt(H){z.push(H)}Ts(d,{args:E,name:y[ol],store:D,after:$,onError:nt});let k;try{k=R.apply(this&&this.$id===n?this:D,E)}catch(H){throw Ts(z,H),H}return k instanceof Promise?k.then(H=>(Ts(O,H),H)).catch(H=>(Ts(z,H),Promise.reject(H))):(Ts(O,k),k)};return y[Ph]=!0,y[ol]=U,y},S={_p:i,$id:n,$onAction:Rh.bind(null,d),$patch:f,$reset:p,$subscribe(R,U={}){const y=Rh(u,R,U.detached,()=>E()),E=o.run(()=>Ae(()=>i.state.value[n],O=>{(U.flush==="sync"?h:c)&&R({storeId:n,type:Nr.direct,events:m},O)},Fi({},l,U)));return y},$dispose:x},D=wa(S);i._s.set(n,D);const T=(i._a&&i._a.runWithContext||a_)(()=>i._e.run(()=>(o=wf()).run(()=>t({action:v}))));for(const R in T){const U=T[R];if(Pe(U)&&!u_(U)||Qn(U))r||(g&&c_(U)&&(Pe(U)?U.value=g[R]:rc(U,g[R])),i.state.value[n][R]=U);else if(typeof U=="function"){const y=v(U,R);T[R]=y,a.actions[R]=U}}return Fi(D,T),Fi(ne(D),T),Object.defineProperty(D,"$state",{get:()=>i.state.value[n],set:R=>{f(U=>{Fi(U,R)})}}),i._p.forEach(R=>{Fi(D,o.run(()=>R({store:D,app:i._a,pinia:i,options:a})))}),g&&r&&e.hydrate&&e.hydrate(D.$state,g),c=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function Dp(n,t,e){let i,s;const r=typeof t=="function";typeof n=="string"?(i=n,s=r?e:t):(s=n,i=n.id);function o(a,l){const c=Cg();return a=a||(c?Dr(Cp,null):null),a&&Na(a),a=Ap,a._s.has(i)||(r?Pp(i,t,s,a):h_(i,s,a)),a._s.get(i)}return o.$id=i,o}const al={size:1e3,segments:128,seed:20260920,heightScale:140,noiseScale:.0022,ridgeScale:70,canyon:!0},d_={enforceInSearch:!0,maxTurnAngle:60,maxClimbAngle:35,minStep:8,maxAccel:12,minTurnRadius:40,maxAttitudeRate:45,autoRepair:!0},f_={rrtStep:45,goalBias:.12,rewireRadius:90,maxSamples:4e3,motionPrims:3,antCount:24,acoIterations:40,acoAlpha:1,acoBeta:4,acoEvap:.35,acoQ:80,psoParticles:28,psoIterations:60,psoInertia:.72,psoC1:1.5,psoC2:1.5,psoCorridor:160,gaPopulation:40,gaIterations:50,gaCrossover:.8,gaMutation:.12},ri={algo:"astar",cellSize:25,heightCell:20,maxNodes:2e5,maxStep:2,clearance:12,cruiseAlt:120,speedMin:15,speedMax:60,heuristicWeight:1,smoothIterations:8,dynamics:{...d_},tuning:{...f_}},ll={distance:1,threat:25,altitude:8,nofly:60,smooth:.15},cl={enabled:!0,onThreatApproach:!0,onCollisionRisk:!0,onYawDeviation:!1,onRangeAnomaly:!1,lookaheadTime:6,warnDistance:45,yawThreshold:35,rangeThreshold:.35,windowRadius:260};let p_=0;const He=(n="id")=>`${n}-${Date.now().toString(36)}-${(p_++).toString(36)}`;function Dh(){return[{id:He("thr"),kind:"radar",name:"雷达-01",position:{x:60,y:0,z:40},radius:110,heightMin:0,heightMax:160,level:4,opacity:.22},{id:He("thr"),kind:"sam",name:"防空-01",position:{x:-140,y:0,z:-90},radius:90,heightMin:20,heightMax:220,level:5,opacity:.28},{id:He("thr"),kind:"jammer",name:"干扰-01",position:{x:180,y:0,z:-160},radius:80,heightMin:0,heightMax:120,level:2,opacity:.2}]}function Ih(){return[{id:He("nfz"),name:"禁飞区-城区",position:{x:-40,y:0,z:150},radius:70,heightMin:0,heightMax:300,penalty:10,hardBlock:!0}]}function Lh(){return[{id:He("obs"),name:"建筑-A",position:{x:240,y:0,z:120},size:{x:36,z:36},height:55},{id:He("obs"),name:"建筑-B",position:{x:285,y:0,z:80},size:{x:24,z:40},height:40}]}function Uh(){return[{id:He("dyn"),name:"移动障碍-空中横穿",kind:"obstacle",motion:"linear",position:{x:-400,y:120,z:-58},target:{x:0,y:120,z:-58},patrolPoints:[{x:-400,y:120,z:-58},{x:0,y:120,z:-58}],speed:16,radius:20,threatRadius:60,heightMin:0,heightMax:160,level:4,predictHorizon:8,enableAt:0,disableAt:1/0,active:!0,color:"#ff8f1f"},{id:He("dyn"),name:"突发威胁-临时防空",kind:"threat",motion:"static",position:{x:120,y:0,z:120},target:{x:120,y:0,z:120},patrolPoints:[],speed:0,radius:20,threatRadius:95,heightMin:20,heightMax:240,level:5,predictHorizon:8,enableAt:9,disableAt:1/0,active:!0,color:"#ff2d55"}]}function Nh(){return[{id:He("wp"),role:"start",position:{x:-420,y:120,z:-320},speed:30},{id:He("wp"),role:"via",position:{x:-150,y:130,z:80},speed:30},{id:He("wp"),role:"end",position:{x:420,y:110,z:300},speed:30}]}const Qe=Dp("scene",{state:()=>({terrain:{...al},threats:Dh(),noflyZones:Ih(),obstacles:Lh(),waypoints:Nh(),dynamics:Uh(),planParams:{...ri,dynamics:{...ri.dynamics},tuning:{...ri.tuning}},weights:{...ll},replanTriggers:{...cl},editMode:"select",selectedId:null,terrainVersion:0}),getters:{startPoint:n=>n.waypoints.find(t=>t.role==="start"),endPoint:n=>n.waypoints.find(t=>t.role==="end")},actions:{setEditMode(n){this.editMode=n,n!=="select"&&(this.selectedId=null)},select(n){this.selectedId=n},addThreatAt(n,t="radar"){const e=He("thr"),i={radar:"雷达",sam:"防空",jammer:"干扰"};return this.threats.push({id:e,kind:t,name:`${i[t]}-${this.threats.length+1}`,position:{...n},radius:90,heightMin:0,heightMax:160,level:3,opacity:t==="sam"?.28:.22}),this.selectedId=e,e},updateThreat(n,t){const e=this.threats.find(i=>i.id===n);e&&Object.assign(e,t)},removeThreat(n){this.threats=this.threats.filter(t=>t.id!==n),this.selectedId===n&&(this.selectedId=null)},addNoFlyAt(n){const t=He("nfz");return this.noflyZones.push({id:t,name:`禁飞区-${this.noflyZones.length+1}`,position:{...n},radius:60,heightMin:0,heightMax:200,penalty:10,hardBlock:!0}),this.selectedId=t,t},updateNoFly(n,t){const e=this.noflyZones.find(i=>i.id===n);e&&Object.assign(e,t)},removeNoFly(n){this.noflyZones=this.noflyZones.filter(t=>t.id!==n),this.selectedId===n&&(this.selectedId=null)},addObstacleAt(n){const t=He("obs");return this.obstacles.push({id:t,name:`建筑-${this.obstacles.length+1}`,position:{...n,y:0},size:{x:30,z:30},height:45}),this.selectedId=t,t},updateObstacle(n,t){const e=this.obstacles.find(i=>i.id===n);e&&Object.assign(e,t)},removeObstacle(n){this.obstacles=this.obstacles.filter(t=>t.id!==n),this.selectedId===n&&(this.selectedId=null)},addDynamicAt(n){const t=He("dyn");return this.dynamics.push({id:t,name:`移动障碍-${this.dynamics.length+1}`,kind:"obstacle",motion:"patrol",position:{...n,y:0},target:{x:n.x+120,y:0,z:n.z},patrolPoints:[{...n,y:0},{x:n.x+150,y:0,z:n.z+60}],speed:24,radius:20,threatRadius:60,heightMin:0,heightMax:160,level:4,predictHorizon:8,enableAt:0,disableAt:1/0,active:!0,color:"#ff8f1f"}),this.selectedId=t,t},addSuddenThreatAt(n){const t=He("dyn");return this.dynamics.push({id:t,name:`突发威胁-${this.dynamics.length+1}`,kind:"threat",motion:"static",position:{...n,y:0},target:{...n,y:0},patrolPoints:[],speed:0,radius:18,threatRadius:90,heightMin:20,heightMax:220,level:5,predictHorizon:8,enableAt:5,disableAt:1/0,active:!0,color:"#ff2d55"}),this.selectedId=t,t},updateDynamic(n,t){const e=this.dynamics.find(i=>i.id===n);e&&Object.assign(e,t)},removeDynamic(n){this.dynamics=this.dynamics.filter(t=>t.id!==n),this.selectedId===n&&(this.selectedId=null)},addWaypointAt(n){const t=He("wp"),e=this.waypoints.some(r=>r.role==="start"),i=this.waypoints.some(r=>r.role==="end"),s=e?i?"via":"end":"start";return this.waypoints.push({id:t,role:s,position:{...n},speed:30}),this.selectedId=t,t},updateWaypoint(n,t){const e=this.waypoints.find(i=>i.id===n);e&&Object.assign(e,t)},removeWaypoint(n){const t=this.waypoints.find(e=>e.id===n);t&&t.role==="via"&&(this.waypoints=this.waypoints.filter(e=>e.id!==n),this.selectedId===n&&(this.selectedId=null))},removeSelected(){const n=this.selectedId;n&&(this.removeThreat(n),this.removeNoFly(n),this.removeObstacle(n),this.removeWaypoint(n),this.removeDynamic(n))},serialize(n){return{version:"2.0.0",exportedAt:new Date().toISOString(),terrain:JSON.parse(JSON.stringify(this.terrain)),threats:JSON.parse(JSON.stringify(this.threats)),noflyZones:JSON.parse(JSON.stringify(this.noflyZones)),obstacles:JSON.parse(JSON.stringify(this.obstacles)),waypoints:JSON.parse(JSON.stringify(this.waypoints)),dynamics:JSON.parse(JSON.stringify(this.dynamics),(t,e)=>e===1/0?1e9:e),planParams:JSON.parse(JSON.stringify(this.planParams)),weights:JSON.parse(JSON.stringify(this.weights)),replanTriggers:JSON.parse(JSON.stringify(this.replanTriggers)),...n}},loadScene(n){var t,e;this.terrain={...al,...n.terrain},this.threats=n.threats??[],this.noflyZones=n.noflyZones??[],this.obstacles=n.obstacles??[],this.waypoints=n.waypoints??[],this.dynamics=(n.dynamics??[]).map(i=>({...i,enableAt:i.enableAt>=1e9?1/0:i.enableAt,disableAt:i.disableAt>=1e9?1/0:i.disableAt})),this.planParams={...ri,...n.planParams,dynamics:{...ri.dynamics,...(t=n.planParams)==null?void 0:t.dynamics},tuning:{...ri.tuning,...(e=n.planParams)==null?void 0:e.tuning}},this.weights={...ll,...n.weights},this.replanTriggers={...cl,...n.replanTriggers},this.selectedId=null},resetScene(){this.terrain={...al},this.threats=Dh(),this.noflyZones=Ih(),this.obstacles=Lh(),this.waypoints=Nh(),this.dynamics=Uh(),this.planParams={...ri,dynamics:{...ri.dynamics},tuning:{...ri.tuning}},this.weights={...ll},this.replanTriggers={...cl},this.selectedId=null,this.editMode="select"}}});function m_(n){return new Worker("/assets/planner.worker-CLwmCfVo.js",{name:n==null?void 0:n.name})}const ws=new Float32Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),g_=.5*(Math.sqrt(3)-1),pr=(3-Math.sqrt(3))/6;class __{constructor(t=1337){bt(this,"perm",new Uint8Array(512));bt(this,"permMod12",new Uint8Array(512));const e=new Uint8Array(256);for(let r=0;r<256;r++)e[r]=r;let i=t>>>0;const s=()=>{i|=0,i=i+1831565813|0;let r=Math.imul(i^i>>>15,1|i);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=255;r>0;r--){const o=Math.floor(s()*(r+1));[e[r],e[o]]=[e[o],e[r]]}for(let r=0;r<512;r++)this.perm[r]=e[r&255],this.permMod12[r]=this.perm[r]%12}noise2D(t,e){const i=this.perm,s=this.permMod12;let r=0,o=0,a=0;const l=(t+e)*g_,c=Math.floor(t+l),h=Math.floor(e+l),u=(c+h)*pr,d=t-(c-u),m=e-(h-u);let g,_;d>m?(g=1,_=0):(g=0,_=1);const f=d-g+pr,p=m-_+pr,x=d-1+2*pr,v=m-1+2*pr,S=c&255,D=h&255;let P=.5-d*d-m*m;if(P>=0){const U=s[S+i[D]]*2;P*=P,r=P*P*(ws[U]*d+ws[U+1]*m)}let T=.5-f*f-p*p;if(T>=0){const U=s[S+g+i[D+_]]*2;T*=T,o=T*T*(ws[U]*f+ws[U+1]*p)}let R=.5-x*x-v*v;if(R>=0){const U=s[S+1+i[D+1]]*2;R*=R,a=R*R*(ws[U]*x+ws[U+1]*v)}return 70*(r+o+a)}fbm(t,e,i=5,s=2,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<i;h++)l+=o*this.noise2D(t*a,e*a),c+=o,o*=r,a*=s;return l/c}}const _e=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y,n.z-t.z),Fa=(n,t,e)=>({x:n.x+(t.x-n.x)*e,y:n.y+(t.y-n.y)*e,z:n.z+(t.z-n.z)*e}),Kn=(n,t,e)=>Math.max(t,Math.min(e,n));function x_(n){let t=0;for(let e=1;e<n.length;e++)t+=_e(n[e-1],n[e]);return t}function Ip(n){const t=[0];for(let e=1;e<n.length;e++)t.push(t[e-1]+_e(n[e-1],n[e]));return t}let fo=null;function v_(n){return JSON.stringify(n)}function Lp(n){const t=v_(n);if(fo&&fo.key===t)return fo.data;const{size:e,segments:i,seed:s,heightScale:r,noiseScale:o,ridgeScale:a,canyon:l}=n,c=i+1,h=new Float32Array(c*c),u=new __(s),d=e/2;for(let g=0;g<c;g++)for(let _=0;_<c;_++){const f=_/i*e-d,p=g/i*e-d,x=u.fbm((f+1e3)*o,(p+1e3)*o,5)*.5+.5,v=Math.pow(1-Math.abs(u.noise2D(f*o*1.6,p*o*1.6)),2);let S=x*r*.55+v*a;if(l){const T=u.noise2D(f*.004+50,7.3)*e*.06,R=Math.abs(p-T),U=e*.05,y=Math.exp(-(R*R)/(2*U*U));S=S*(1-y*.92)+2*y}const D=Math.max(Math.abs(f),Math.abs(p))/d,P=Math.max(0,(D-.8)/.2);S+=P*P*r*.35,h[g*c+_]=Math.max(0,S)}const m={params:n,halfSize:d,heights:h,gridSize:c};return fo={key:t,data:m},m}function mu(n,t,e){const{halfSize:i,heights:s,gridSize:r,params:o}=n,a=(t+i)/o.size*(r-1),l=(e+i)/o.size*(r-1),c=Math.floor(a),h=Math.floor(l),u=Math.min(c+1,r-1),d=Math.min(h+1,r-1),m=Kn(c,0,r-1),g=Kn(h,0,r-1),_=Kn(a-c,0,1),f=Kn(l-h,0,1),p=s[g*r+m],x=s[g*r+u],v=s[d*r+m],S=s[d*r+u],D=p+(x-p)*_,P=v+(S-v)*_;return D+(P-D)*f}function y_(n,t,e=0){const i=n.halfSize-e;return t.x>=-i&&t.x<=i&&t.z>=-i&&t.z<=i&&t.y>=0}class $r{constructor(t,e,i,s){bt(this,"terrain");bt(this,"threats");bt(this,"noflyZones");bt(this,"obstacles");this.terrain=Lp(t),this.threats=e,this.noflyZones=i,this.obstacles=s}get maxAltitude(){return Math.max(this.terrain.params.size*.3,200)}groundHeight(t,e){return mu(this.terrain,t,e)}inBounds(t,e=0){return y_(this.terrain,t,e)}hitsObstacle(t,e){for(const i of this.obstacles)if(Math.abs(t.x-i.position.x)<=i.size.x/2+e&&Math.abs(t.z-i.position.z)<=i.size.z/2+e&&t.y<=i.position.y+i.height+e&&t.y>=i.position.y-e)return!0;return!1}hitsHardNoFly(t,e){for(const i of this.noflyZones){if(!i.hardBlock)continue;if(Math.hypot(t.x-i.position.x,t.z-i.position.z)<=i.radius+e&&t.y<=i.heightMax+e&&t.y>=i.heightMin-e)return!0}return!1}hitsGround(t,e){return t.y<this.groundHeight(t.x,t.z)+e}isBlocked(t,e){return!!(!this.inBounds(t)||this.hitsGround(t,e)||this.hitsObstacle(t,e)||this.hitsHardNoFly(t,e))}threatIntensity(t){let e=0;for(const i of this.threats){if(t.y<i.heightMin||t.y>i.heightMax)continue;const s=Math.hypot(t.x-i.position.x,t.z-i.position.z);if(s>=i.radius)continue;const r=1-s/i.radius;e+=Kn(i.level,1,5)/5*r*r}return e}noflyPenalty(t){let e=0;for(const i of this.noflyZones){if(t.y<i.heightMin||t.y>i.heightMax)continue;const s=Math.hypot(t.x-i.position.x,t.z-i.position.z);if(s>=i.radius)continue;const r=1-s/i.radius;e+=i.penalty*r*r}return e}isSegmentFeasible(t,e,i,s=8){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,l=Math.hypot(r,o,a),c=Math.max(1,Math.ceil(l/s));for(let h=0;h<=c;h++){const u=h/c,d={x:t.x+r*u,y:t.y+o*u,z:t.z+a*u};if(this.isBlocked(d,i))return!1}return!0}integrateField(t,e,i,s=10){const r=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z),o=Math.max(1,Math.ceil(r/s));let a=0;for(let l=0;l<o;l++){const c=l/o,h=(l+1)/o,u={x:t.x+(e.x-t.x)*c,y:t.y+(e.y-t.y)*c,z:t.z+(e.z-t.z)*c},d={x:t.x+(e.x-t.x)*h,y:t.y+(e.y-t.y)*h,z:t.z+(e.z-t.z)*h};a+=(i(u)+i(d))/2*(r/o)}return a}}class Up extends $r{constructor(e,i,s,r,o=[]){super(e,i,s,r);bt(this,"dynamics");this.dynamics=o}stateAt(e,i){const s=e.active&&i>=e.enableAt&&i<e.disableAt;return{position:oc(e,i),active:s}}activeObstacles(e){const i=[];for(const s of this.dynamics){if(s.kind!=="obstacle")continue;const r=this.stateAt(s,e);r.active&&i.push({entity:s,position:r.position})}return i}hitsDynamicObstacle(e,i,s){for(const r of this.dynamics){if(r.kind!=="obstacle")continue;const o=this.stateAt(r,s);if(!o.active)continue;const a=r.radius+i;if(Math.hypot(e.x-o.position.x,e.y-o.position.y,e.z-o.position.z)<=a)return!0}return!1}isBlockedAt(e,i,s){return this.isBlocked(e,i)?!0:this.hitsDynamicObstacle(e,i,s)}dynamicThreatIntensity(e,i){let s=0;for(const r of this.dynamics){if(r.kind!=="threat")continue;const o=this.stateAt(r,i);if(!o.active||e.y<r.heightMin||e.y>r.heightMax)continue;const a=Math.hypot(e.x-o.position.x,e.z-o.position.z);if(a>=r.threatRadius)continue;const l=1-a/r.threatRadius;s+=Kn(r.level,1,5)/5*l*l}return s}totalThreatAt(e,i){return this.threatIntensity(e)+this.dynamicThreatIntensity(e,i)}isSegmentFeasibleSpacetime(e,i,s,r,o,a=8){const l=Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),c=Math.max(1,Math.ceil(l/a));for(let h=0;h<=c;h++){const u=h/c,d={x:e.x+(i.x-e.x)*u,y:e.y+(i.y-e.y)*u,z:e.z+(i.z-e.z)*u};if(this.isBlocked(d,s))return!1;const m=r+(o-r)*u;if(this.hitsDynamicObstacle(d,s,m))return!1}return!0}isSegmentFeasibleSpacetimeSpeed(e,i,s,r,o,a=8){const l=Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),c=r+l/Math.max(o,1);return this.isSegmentFeasibleSpacetime(e,i,s,r,c,a)}spacetimeClearance(e,i,s,r,o=10){const a=r-s;let l=1/0,c=0;for(const h of this.dynamics){if(h.kind!=="obstacle")continue;const u=this.stateAt(h,s),d=this.stateAt(h,r);if(!u.active&&!d.active)continue;const m=(g,_,f,p)=>{const x=Math.hypot(g,_,f)-h.radius;x<l&&(l=x,c=p)};if(h.motion!=="patrol"&&Math.abs(a)>1e-9){const g=i.x-d.position.x,_=i.y-d.position.y,f=i.z-d.position.z,p=e.x-u.position.x-g,x=e.y-u.position.y-_,v=e.z-u.position.z-f;let S=-(g*p+_*x+f*v)/(p*p+x*x+v*v||1);S=Math.max(0,Math.min(1,S)),m(g+p*S,_+x*S,f+v*S,S)}else{const g=Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),_=Math.max(1,Math.ceil(g/o));for(let f=0;f<=_;f++){const p=f/_,x=s+a*p,v=this.stateAt(h,x);v.active&&m(e.x+(i.x-e.x)*p-v.position.x,e.y+(i.y-e.y)*p-v.position.y,e.z+(i.z-e.z)*p-v.position.z,p)}}}return{gap:l,u:c}}spacetimeThreatClearance(e,i,s,r,o=10){const a=r-s;let l=1/0,c=0;for(const h of this.dynamics){if(h.kind!=="threat")continue;const u=(f,p,x,v,S)=>{const D=this.stateAt(h,v);if(!D.active||p<h.heightMin-10||p>h.heightMax+10)return;const P=Math.hypot(f-D.position.x,x-D.position.z)-h.threatRadius;P<l&&(l=P,c=S)},d=this.stateAt(h,s),m=this.stateAt(h,r);if(Math.abs(a)>1e-9){const f=i.x-m.position.x,p=i.z-m.position.z,x=e.x-d.position.x-f,v=e.z-d.position.z-p;let S=-(f*x+p*v)/(x*x+v*v||1);S=Math.max(0,Math.min(1,S)),u(e.x+(i.x-e.x)*S,e.y+(i.y-e.y)*S,e.z+(i.z-e.z)*S,s+a*S,S)}const g=Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),_=Math.max(1,Math.ceil(g/o));for(let f=0;f<=_;f++){const p=f/_;u(e.x+(i.x-e.x)*p,e.y+(i.y-e.y)*p,e.z+(i.z-e.z)*p,s+a*p,p)}}return{gap:l,u:c}}}function oc(n,t){if(n.motion==="static"||n.speed<=0)return{...n.position};const e=n.motion==="patrol"&&n.patrolPoints.length>=2?n.patrolPoints:[n.position,n.target];if(e.length<2)return{...n.position};const i=[];let s=0;for(let c=1;c<e.length;c++){const h=Math.hypot(e[c].x-e[c-1].x,e[c].y-e[c-1].y,e[c].z-e[c-1].z);i.push(h),s+=h}const r=s*2;if(r<1e-6)return{...e[0]};let o=n.speed*t%r;o<0&&(o+=r),o<s||(o=r-o);let l=0;for(let c=0;c<i.length;c++){if(o<=l+i[c]||c===i.length-1){const h=Math.max(0,o-l),u=i[c]>1e-9?h/i[c]:0;return{x:e[c].x+(e[c+1].x-e[c].x)*u,y:e[c].y+(e[c+1].y-e[c].y)*u,z:e[c].z+(e[c+1].z-e[c].z)*u}}l+=i[c]}return{...e[e.length-1]}}class gu{constructor(t=1){bt(this,"state");this.state=t>>>0||2654435769}next(){this.state=this.state+1831565813>>>0;let t=this.state;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}weightedIndex(t){let e=0;for(const s of t)e+=Math.max(0,s);if(e<=1e-12)return this.int(0,t.length-1);let i=this.next()*e;for(let s=0;s<t.length;s++)if(i-=Math.max(0,t[s]),i<=0)return s;return t.length-1}gaussian(){const t=Math.max(this.next(),1e-12),e=this.next();return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}}function Np(n,t,e,i,s){const r=i.x-e.x,o=i.y-e.y,a=i.z-e.z,l=Math.hypot(r,o,a),c=n.integrateField(e,i,m=>n.threatIntensity(m)),h=n.integrateField(e,i,m=>n.noflyPenalty(m)),u=n.integrateField(e,i,m=>Math.abs(m.y-s.cruiseAlt)/Math.max(s.cruiseAlt,1));let d=0;if(t){const m=e.x-t.x,g=e.y-t.y,_=e.z-t.z,f=Math.hypot(m,g,_);if(f>1e-6){const p=(m*r+g*o+_*a)/(f*l);d=1-Math.max(-1,Math.min(1,p))}}return{distance:l,threat:c,altitude:u,nofly:h,smooth:d}}function Fp(n,t){return n.distance*t.distance+n.threat*t.threat+n.altitude*t.altitude+n.nofly*t.nofly+n.smooth*n.distance*t.smooth}function M_(){return{distance:0,threat:0,altitude:0,nofly:0,smooth:0}}function zp(n,t,e,i){const s=M_();let r=0;for(let o=1;o<t.length;o++){const a=o>=2?t[o-2]:null,l=Np(n,a,t[o-1],t[o],i);s.distance+=l.distance,s.threat+=l.threat,s.altitude+=l.altitude,s.nofly+=l.nofly,s.smooth+=l.smooth,r+=Fp(l,e)}return{total:r,breakdown:{distance:s.distance*e.distance,threat:s.threat*e.threat,altitude:s.altitude*e.altitude,nofly:s.nofly*e.nofly,smooth:s.smooth*e.smooth}}}function S_(n,t,e,i){const s=[{distance:0,cumulative:0,point:t[0]}];let r=0,o=0;for(let a=1;a<t.length;a++){const l=a>=2?t[a-2]:null,c=Np(n,l,t[a-1],t[a],i);r+=Fp(c,e),o+=c.distance,s.push({distance:o,cumulative:r,point:t[a]})}return s}class b_{constructor(){bt(this,"keys",[]);bt(this,"vals",[])}get size(){return this.keys.length}push(t,e){this.keys.push(t),this.vals.push(e);let i=this.keys.length-1;for(;i>0;){const s=i-1>>1;if(this.vals[s]<=this.vals[i])break;this.swap(i,s),i=s}}pop(){const t=this.keys[0],e=this.vals[0],i=this.keys.pop(),s=this.vals.pop();if(this.keys.length>0){this.keys[0]=i,this.vals[0]=s;let r=0;const o=this.keys.length;for(;;){const a=r*2+1,l=a+1;let c=r;if(a<o&&this.vals[a]<this.vals[c]&&(c=a),l<o&&this.vals[l]<this.vals[c]&&(c=l),c===r)break;this.swap(r,c),r=c}}return{key:t,val:e}}swap(t,e){[this.keys[t],this.keys[e]]=[this.keys[e],this.keys[t]],[this.vals[t],this.vals[e]]=[this.vals[e],this.vals[t]]}}class E_{constructor(t,e,i){bt(this,"env");bt(this,"params");bt(this,"weights");bt(this,"inflatedClearance");bt(this,"dims");bt(this,"visited");bt(this,"gScore");bt(this,"cameFrom");bt(this,"threatCache");bt(this,"noflyCache");bt(this,"offsets",[]);this.env=t,this.params=e,this.weights=i;const s=t.terrain.params.size,r=Math.floor(s/e.cellSize)+1,o=r,a=Math.floor(t.maxAltitude/e.heightCell)+1,l=r*a*o;if(l>4e6)throw new Error("体素数量过大，请增大栅格分辨率（cellSize / heightCell）");this.dims={nx:r,ny:a,nz:o,ox:-s/2,oz:-s/2,count:l};const c=Math.hypot(e.cellSize,e.cellSize,e.heightCell)/2;this.inflatedClearance=e.clearance+c,this.visited=new Uint8Array(l),this.gScore=new Map,this.cameFrom=new Map,this.threatCache=new Float32Array(l).fill(-1),this.noflyCache=new Float32Array(l).fill(-1),this.buildOffsets()}buildOffsets(){for(let e=-1;e<=1;e++)for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)e===0&&i===0&&s===0||this.offsets.push({dx:e,dy:i,dz:s});const t=Kn(Math.round(this.params.maxStep),1,3);if(t>=2){const e=t>=3?[-3,-2,2,3]:[-2,2];for(const i of e)for(const s of e)for(const r of e)Math.abs(i)<=1&&Math.abs(s)<=1&&Math.abs(r)<=1||this.offsets.push({dx:i,dy:s,dz:r})}}idx(t,e,i){const{nx:s,ny:r,nz:o}=this.dims;return t+s*(i+o*e)}toWorld(t,e,i){const{ox:s,oz:r}=this.dims;return{x:s+t*this.params.cellSize,y:e*this.params.heightCell,z:r+i*this.params.cellSize}}toGrid(t){const{ox:e,oz:i}=this.dims;return{ix:Kn(Math.round((t.x-e)/this.params.cellSize),0,this.dims.nx-1),iy:Kn(Math.round(t.y/this.params.heightCell),0,this.dims.ny-1),iz:Kn(Math.round((t.z-i)/this.params.cellSize),0,this.dims.nz-1)}}threatAt(t,e){let i=this.threatCache[t];return i<0&&(i=this.env.threatIntensity(e),this.threatCache[t]=i),i}noflyAt(t,e){let i=this.noflyCache[t];return i<0&&(i=this.env.noflyPenalty(e),this.noflyCache[t]=i),i}isFree(t,e){return this.visited[t]===0&&(this.visited[t]=this.env.isBlocked(e,this.inflatedClearance)?2:1),this.visited[t]===1}nearestFree(t){const e=this.toGrid(t),{nx:i,ny:s,nz:r}=this.dims;for(let o=0;o<=4;o++){let a=-1,l=1/0;for(let c=-o;c<=o;c++)for(let h=-o;h<=o;h++)for(let u=-o;u<=o;u++){if(Math.max(Math.abs(c),Math.abs(h),Math.abs(u))!==o)continue;const d=e.ix+c,m=e.iy+h,g=e.iz+u;if(d<0||m<0||g<0||d>=i||m>=s||g>=r)continue;const _=this.idx(d,m,g),f=this.toWorld(d,m,g);if(!this.isFree(_,f))continue;const p=(f.x-t.x)**2+(f.y-t.y)**2+(f.z-t.z)**2;p<l&&(l=p,a=_)}if(a>=0)return a}return-1}heuristic(t,e){return this.params.algo==="dijkstra"?0:Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)*this.params.heuristicWeight*this.weights.distance}edgeCost(t,e,i,s,r){const o=Math.hypot(r.x-s.x,r.y-s.y,r.z-s.z),a=this.weights,l=(this.threatAt(e,s)+this.threatAt(i,r))/2*o,c=(this.noflyAt(e,s)+this.noflyAt(i,r))/2*o,h=(Math.abs(s.y-this.params.cruiseAlt)+Math.abs(r.y-this.params.cruiseAlt))/2/Math.max(this.params.cruiseAlt,1)*o;let u=0;const d=this.cameFrom.get(e)??t;if(d>=0){const m=this.idxToPos(d);if(m){const g=s.x-m.x,_=s.y-m.y,f=s.z-m.z,p=Math.hypot(g,_,f);if(p>1e-6){const x=(g*(r.x-s.x)+_*(r.y-s.y)+f*(r.z-s.z))/(p*o);u=1-Math.max(-1,Math.min(1,x))}}}return o*a.distance+l*a.threat+h*a.altitude+c*a.nofly+u*o*a.smooth}idxToPos(t){const{nx:e,ny:i,nz:s}=this.dims,r=t%e;let o=t/e|0;const a=o%s;o=o/s|0;const l=o%i;return l>=i?null:this.toWorld(r,l,a)}edgeClear(t,e){const i=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z),s=Math.min(this.params.cellSize,this.params.heightCell);let r=Math.max(0,Math.ceil(i/s)-1);if(r===0&&i>s*.8&&(r=1),r<=0)return!0;for(let o=1;o<=r;o++){const a=o/(r+1),l={x:t.x+(e.x-t.x)*a,y:t.y+(e.y-t.y)*a,z:t.z+(e.z-t.z)*a},c=this.toGrid(l),h=this.idx(c.ix,c.iy,c.iz);if(!this.isFree(h,this.toWorld(c.ix,c.iy,c.iz)))return!1}return!0}plan(t,e){const i=this.nearestFree(t),s=this.nearestFree(e);if(i<0)return{success:!1,path:[],expandedNodes:0,message:"起点附近无可行栅格（可能位于地形/禁飞区内）"};if(s<0)return{success:!1,path:[],expandedNodes:0,message:"终点附近无可行栅格（可能位于地形/禁飞区内）"};const r=new b_;this.gScore.set(i,0);const o=this.idxToPos(i),a=this.idxToPos(s);r.push(i,this.heuristic(o,a));const{nx:l,ny:c,nz:h}=this.dims;let u=0;const d=new Uint8Array(this.dims.count);for(;r.size>0;){const{key:m}=r.pop();if(d[m])continue;if(d[m]=1,u++,u>this.params.maxNodes)return{success:!1,path:[],expandedNodes:u,message:"达到最大扩展节点数，未找到路径"};if(m===s){const S=this.reconstruct(s);return{success:!0,path:this.attachExactEndpoints(t,e,S),expandedNodes:u,message:"规划成功"}}const g=this.idxToPos(m),_=this.gScore.get(m),f=m%l;let p=m/l|0;const x=p%h,v=p/h|0;for(const S of this.offsets){const D=f+S.dx,P=v+S.dy,T=x+S.dz;if(D<0||P<0||T<0||D>=l||P>=c||T>=h)continue;const R=this.idx(D,P,T);if(d[R])continue;const U=this.toWorld(D,P,T);if(!this.isFree(R,U)||(Math.max(Math.abs(S.dx),Math.abs(S.dy),Math.abs(S.dz)),!this.edgeClear(g,U)))continue;const y=this.edgeCost(-1,m,R,g,U),E=_+y;E<(this.gScore.get(R)??1/0)&&(this.cameFrom.set(R,m),this.gScore.set(R,E),r.push(R,E+this.heuristic(U,a)))}}return{success:!1,path:[],expandedNodes:u,message:"开放列表耗尽：目标不可达（可能被地形/禁飞区完全封闭）"}}reconstruct(t){const e=[];let i=t;for(;i!==void 0;)e.push(this.idxToPos(i)),i=this.cameFrom.get(i);return e.reverse(),e}attachExactEndpoints(t,e,i){if(i.length===0)return i;const s=this.params.clearance,r=[],o=(c,h,u=1e-6)=>Math.abs(c.x-h.x)<=u&&Math.abs(c.y-h.y)<=u&&Math.abs(c.z-h.z)<=u,a=i[0];o(t,a)||!this.env.isBlocked(t,s)&&this.env.isSegmentFeasible(t,a,s)&&r.push({...t}),r.push(...i.map(c=>({...c})));const l=r[r.length-1];return o(e,l)||!this.env.isBlocked(e,s)&&this.env.isSegmentFeasible(l,e,s)&&r.push({...e}),r}}const _s=180/Math.PI;function za(n,t,e){const i=t.x-n.x,s=t.z-n.z,r=e.x-t.x,o=e.z-t.z,a=Math.hypot(i,s),l=Math.hypot(r,o);if(a<1e-9||l<1e-9)return 0;const c=(i*r+s*o)/(a*l);return Math.acos(Math.max(-1,Math.min(1,c)))}function Oa(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z,r=Math.hypot(e,i,s);return r<1e-9?0:Math.asin(Math.max(-1,Math.min(1,i/r)))}function Yr(n,t,e,i){return!(_e(e,i)+1e-6<n.minStep||t&&za(t,e,i)*_s>n.maxTurnAngle+1e-6||Math.abs(Oa(e,i))*_s>n.maxClimbAngle+1e-6)}function _u(n,t,e){const i=t.x-n.x,s=t.z-n.z,r=e.x-t.x,o=e.z-t.z,a=Math.hypot(i,s),l=Math.hypot(r,o);if(a<1e-9||l<1e-9)return 0;const c=i*o-s*r,h=Math.abs(c)/(a*l);if(h<1e-4)return 0;const d=Math.hypot(e.x-n.x,e.z-n.z)/(2*h);return d>1e-6?1/d:0}function T_(n,t,e){const i={samples:n.length,turnViolations:0,climbViolations:0,stepViolations:0,radiusViolations:0,accelViolations:0,attitudeRateViolations:0,satisfactionRate:100,violationIndices:[]};if(n.length<2)return i;const s=Ip(n),r=s[s.length-1],o=Math.max(t.minTurnRadius*1.2,20),a=u=>{const d=Math.max(0,Math.min(r,u));let m=0,g=s.length-1;for(;m<g-1;){const p=m+g>>1;s[p]<=d?m=p:g=p}const _=s[g]-s[m],f=_>1e-9?(d-s[m])/_:0;return{p:Fa(n[m],n[g],f),idx:m}},l=new Set;let c=0,h=0;for(let u=0;u<n.length;u++)if(s[u]>o&&r-s[u]>o){const d=a(s[u]-o).p,m=n[u],g=a(s[u]+o).p;c++;const _=za(d,m,g)*_s;let f=!1;_>t.maxTurnAngle&&(i.turnViolations++,f=!0),_>2&&_u(d,m,g)>1/Math.max(t.minTurnRadius,1e-6)&&(i.radiusViolations++,f=!0),f&&(h++,l.add(u))}for(let u=1;u<n.length;u++){c++;const d=Math.abs(Oa(n[u-1],n[u]))*_s,m=_e(n[u-1],n[u]);let g=!1;d>t.maxClimbAngle&&(i.climbViolations++,g=!0),m<t.minStep*.3&&m>1e-9&&(i.stepViolations++,g=!0),g&&(h++,l.add(u))}if(e&&e.length>=3){let u=0,d=0;for(let _=1;_<e.length-1;_++){const f=e[_+1].time-e[_-1].time;if(f<=1e-6)continue;u++;const p=(e[_+1].velocity.x-e[_-1].velocity.x)/f,x=(e[_+1].velocity.y-e[_-1].velocity.y)/f,v=(e[_+1].velocity.z-e[_-1].velocity.z)/f;let S=!1;Math.hypot(p,x,v)>t.maxAccel*1.15&&(i.accelViolations++,S=!0);const D=Math.atan2(e[_-1].velocity.x,e[_-1].velocity.z),P=Math.atan2(e[_+1].velocity.x,e[_+1].velocity.z);let T=Math.abs(P-D)*_s;T>180&&(T=360-T),T/f>t.maxAttitudeRate*1.15&&(i.attitudeRateViolations++,S=!0),S&&d++}const m=c>0?1-h/c:1,g=u>0?1-d/u:1;i.satisfactionRate=Math.round((m*.7+g*.3)*1e3)/10}else i.satisfactionRate=c>0?Math.round((1-h/c)*1e3)/10:100;return i.violationIndices=[...l].sort((u,d)=>u-d),i}function w_(n,t,e,i=12,s=[]){const r=e.dynamics;if(t.length<3)return t.map(d=>({...d}));const o=t.map(d=>({...d})),a=e.clearance,l=.4,c=d=>s.some(m=>Math.abs(m.x-d.x)<1e-6&&Math.abs(m.y-d.y)<1e-6&&Math.abs(m.z-d.z)<1e-6),h=new Set;if(s.length>0)for(let d=0;d<o.length;d++)c(o[d])&&h.add(d);const u=(d,m,g)=>{const _=(f,p,x)=>f&&za(f,p,x)*_s>r.maxTurnAngle?!1:Math.abs(Oa(p,x))*_s<=r.maxClimbAngle;return!(d>0&&(!n.isSegmentFeasible(g[d-1],m,a)||!_(d>=2?g[d-2]:null,g[d-1],m))||d<g.length-1&&(!n.isSegmentFeasible(m,g[d+1],a)||!_(g[d-1]??null,m,g[d+1])))};for(let d=0;d<i;d++){const m=o.map(_=>({..._}));let g=!1;for(let _=1;_<o.length-1;_++){if(h.has(_))continue;const f=m[_-1],p=m[_+1],x={x:o[_].x+l*((f.x+p.x)/2-o[_].x),y:o[_].y+l*((f.y+p.y)/2-o[_].y),z:o[_].z+l*((f.z+p.z)/2-o[_].z)};u(_,x,m)&&(o[_]=x,g=!0)}if(!g)break}return o}class A_{constructor(t){bt(this,"ctx");bt(this,"bounds");this.ctx=t,this.bounds=t.env.terrain.params.size/2-4}free(t){return this.ctx.env.isBlocked(t,this.ctx.plan.clearance)===!1}sample(t,e){const i=this.ctx.rng;if(i.next()<e)return{...t};const s=this.bounds,r=this.ctx.plan.cruiseAlt;return{x:i.range(-s,s),y:Math.max(20,r+i.gaussian()*70),z:i.range(-s,s)}}nearest(t,e){let i=0,s=1/0;for(let r=0;r<t.length;r++){const o=(t[r].x-e.x)**2+(t[r].y-e.y)**2+(t[r].z-e.z)**2;o<s&&(s=o,i=r)}return i}steer(t,e,i){const{plan:s,env:r}=this.ctx,o=_e(t,e),a=Math.min(s.tuning.rrtStep,o);if(a<s.dynamics.minStep*.5)return null;const l=a/Math.max(o,1e-9),c={x:t.x+(e.x-t.x)*l,y:t.y+(e.y-t.y)*l,z:t.z+(e.z-t.z)*l};return c.y=Math.max(c.y,20),s.dynamics.enforceInSearch&&i&&!Yr(s.dynamics,i,t,c)||!r.isSegmentFeasible(t,c,s.clearance)?null:c}}function C_(n,t,e,i){return t.length<2?1/0:zp(n,t,i,e).total}class Fh extends A_{constructor(e,i=!1){super(e);bt(this,"star");this.star=i}plan(e,i){const{env:s,plan:r,weights:o,rng:a}=this.ctx;if(!this.free(e)||!this.free(i))return{success:!1,path:[],expandedNodes:0,message:"起终点位于障碍/禁飞区内"};const l=[{p:{...e},parent:-1,g:0}],c=r.tuning.maxSamples,h=r.tuning.goalBias,u=r.tuning.rewireRadius,d=r.tuning.rrtStep*.9;let m=-1,g=1/0;const _=[];let f=-1;const p=D=>{const P=l[D].parent;return P>=0?l[P].p:null},x=(D,P)=>{const T=[],R=P*P;for(let U=0;U<l.length;U++){const y=l[U].p;(y.x-D.x)**2+(y.y-D.y)**2+(y.z-D.z)**2<=R&&T.push(U)}return T};for(let D=0;D<c;D++){const P=this.sample(i,h),T=this.nearestNode(l,P),R=this.steer(l[T].p,P,p(T));if(!R)continue;const U=l.length;let y=T,E=l[T].g+this.edgeCost(l[T].p,R);if(this.star){for(const z of x(R,u))if(this.edgeDynamicsOk(l,z,R)&&s.isSegmentFeasible(l[z].p,R,r.clearance)){const $=l[z].g+this.edgeCost(l[z].p,R);$<E&&(E=$,y=z)}}if(l.push({p:R,parent:y,g:E}),this.star)for(const z of x(R,u)){if(z===y)continue;const $=E+this.edgeCost(R,l[z].p);$<l[z].g&&s.isSegmentFeasible(R,l[z].p,r.clearance)&&(l[z].parent=U,l[z].g=$)}if(Math.hypot(R.x-i.x,R.y-i.y,R.z-i.z)<=d&&s.isSegmentFeasible(R,i,r.clearance)){const z=E+this.edgeCost(R,i);z<g&&(l.push({p:{...i},parent:U,g:z}),m=l.length-1,g=z,f<0&&(f=D))}if(m>=0&&(!this.star||D-f>Math.min(1200,c*.4)))break;if(D%40===0){const z=this.trace(l,U);z.length>=4&&(_.push({points:z,cost:l[U].g}),_.length>60&&_.shift())}}if(m<0)return{success:!1,path:[],expandedNodes:l.length,message:`${this.star?"RRT*":"RRT"} 达到采样上限仍未到达目标`,candidates:_};const v=this.trace(l,m),S=C_(s,v,r,o);return _.push({points:v,cost:S}),{success:!0,path:v,expandedNodes:l.length,message:`${this.star?"RRT*":"RRT"} 规划成功`,candidates:_}}edgeDynamicsOk(e,i,s){const{plan:r}=this.ctx;if(!r.dynamics.enforceInSearch)return!0;const o=e[i],a=o.parent>=0?e[o.parent].p:null;return Yr(r.dynamics,a,o.p,s)}nearestNode(e,i){let s=0,r=1/0;for(let o=0;o<e.length;o++){const a=e[o].p,l=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2;l<r&&(r=l,s=o)}return s}edgeCost(e,i){const{env:s,weights:r}=this.ctx,o=Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z),a=(s.threatIntensity(e)+s.threatIntensity(i))/2*o,l=(s.noflyPenalty(e)+s.noflyPenalty(i))/2*o;return o*r.distance+a*r.threat+l*r.nofly}trace(e,i){const s=[];let r=i;for(;r>=0;)s.push(e[r].p),r=e[r].parent;return s.reverse(),s}}class R_{constructor(t){bt(this,"ctx");this.ctx=t}plan(t,e){const{env:i,plan:s,weights:r}=this.ctx,o=s.cellSize,a=s.heightCell,l=i.terrain.params.size/2,c=Math.floor(i.terrain.params.size/o)+1,h=Math.floor(i.maxAltitude/a)+1,u=16,d=(rt,at,ht,Lt)=>rt+c*(ht+c*(at+h*Lt)),m=rt=>({ix:ul(Math.round((rt.x+l)/o),0,c-1),iy:ul(Math.round(rt.y/a),0,h-1),iz:ul(Math.round((rt.z+l)/o),0,c-1)}),g=(rt,at,ht)=>({x:-l+rt*o,y:at*a,z:-l+ht*o}),_=Oh(m(t),rt=>{const at=g(rt.ix,rt.iy,rt.iz);return!i.isBlocked(at,s.clearance)}),f=Oh(m(e),rt=>{const at=g(rt.ix,rt.iy,rt.iz);return!i.isBlocked(at,s.clearance)});if(!_||!f)return{success:!1,path:[],expandedNodes:0,message:"起终点附近无可行栅格"};const p={...t},x=g(f.ix,f.iy,f.iz),v=Math.atan2(x.x-p.x,x.z-p.z),S=zh(v,u),D=[],P=new Map,T=new Map,R=new Map,U=[],y=d(_.ix,_.iy,_.iz,S);T.set(y,0),D.push({key:y,ix:_.ix,iy:_.iy,iz:_.iz,ih:S,p,yaw:v,g:0,parent:-1}),P.set(y,0),Bh(U,y,this.heuristic(p,x));const E=(()=>{const rt=s.tuning.motionPrims,at=s.dynamics.maxTurnAngle*Math.PI/180,ht=[0];for(let Lt=1;Lt<=rt;Lt++){const Gt=at*Lt/rt;ht.push(-Gt,Gt)}return ht})(),O=[-(s.dynamics.maxClimbAngle*Math.PI)/180,0,s.dynamics.maxClimbAngle*Math.PI/180],z=Math.max(o*s.maxStep,s.dynamics.minStep*1.2);let $=0;const nt=new Set;let k=-1;for(;U.length>0;){const rt=P_(U);if(rt<0)break;if(nt.has(rt))continue;nt.add(rt);const at=P.get(rt),ht=D[at];if($++,$>s.maxNodes)return{success:!1,path:[],expandedNodes:$,message:"Hybrid A* 达到扩展上限"};if(ht.ix===f.ix&&ht.iy===f.iy&&ht.iz===f.iz){k=rt;break}if($%3===0&&i.isSegmentFeasible(ht.p,x,s.clearance)){const Lt=ht.parent>=0?D[ht.parent].p:null;if(!s.dynamics.enforceInSearch||Yr(s.dynamics,Lt,ht.p,x)){k=rt;break}}for(const Lt of E)for(const Gt of O){const st=ht.yaw+Lt,pt=z,yt={x:ht.p.x+Math.sin(st)*Math.cos(Gt)*pt,y:ht.p.y+Math.sin(Gt)*pt,z:ht.p.z+Math.cos(st)*Math.cos(Gt)*pt};if(yt.y<a)continue;const vt=m(yt);if(vt.ix<0||vt.iy<0||vt.iz<0||vt.ix>=c||vt.iy>=h||vt.iz>=c)continue;const $t=ht.parent>=0?D[ht.parent].p:null;if(s.dynamics.enforceInSearch&&!Yr(s.dynamics,$t,ht.p,yt)||!i.isSegmentFeasible(ht.p,yt,s.clearance))continue;const Bt=zh(st,u),Xt=d(vt.ix,vt.iy,vt.iz,Bt);if(nt.has(Xt))continue;const te=Math.hypot(yt.x-ht.p.x,yt.y-ht.p.y,yt.z-ht.p.z),I=(i.threatIntensity(ht.p)+i.threatIntensity(yt))/2*te,b=(i.noflyPenalty(ht.p)+i.noflyPenalty(yt))/2*te,Z=Math.abs(Lt/Math.PI)*te,tt=te*r.distance+I*r.threat+b*r.nofly+Z*r.smooth,J=ht.g+tt;if(J<(T.get(Xt)??1/0)){if(T.set(Xt,J),R.set(Xt,rt),!P.has(Xt))D.push({key:Xt,ix:vt.ix,iy:vt.iy,iz:vt.iz,ih:Bt,p:yt,yaw:st,g:J,parent:at}),P.set(Xt,D.length-1);else{const j=D[P.get(Xt)];j.p=yt,j.yaw=st,j.g=J,j.parent=at}Bh(U,Xt,J+this.heuristic(yt,x))}}if(k>=0)break}if(k<0)return{success:!1,path:[],expandedNodes:$,message:"Hybrid A* 未找到可行运动基元路径"};const H=[];let X=k;for(;X!==void 0;){const rt=P.get(X);if(rt===void 0)break;H.push(D[rt].p),X=R.get(X)}return H.reverse(),H[0]={...t},H[H.length-1]={...e},{success:!0,path:H,expandedNodes:$,message:"Hybrid A* 规划成功"}}heuristic(t,e){const{plan:i,weights:s}=this.ctx;return Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)*s.distance*i.heuristicWeight}}function ul(n,t,e){return Math.max(t,Math.min(e,n))}function zh(n,t){let e=n;for(;e<0;)e+=Math.PI*2;for(;e>=Math.PI*2;)e-=Math.PI*2;return Math.round(e/(Math.PI*2)*t)%t}function Oh(n,t){for(let e=0;e<=4;e++){let i=null,s=1/0;for(let r=-e;r<=e;r++)for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){if(Math.max(Math.abs(r),Math.abs(o),Math.abs(a))!==e)continue;const l={ix:n.ix+r,iy:n.iy+o,iz:n.iz+a};if(!t(l))continue;const c=r*r+o*o+a*a;c<s&&(s=c,i=l)}if(i)return i}return null}function Bh(n,t,e){n.push({key:t,f:e});let i=n.length-1;for(;i>0;){const s=i-1>>1;if(n[s].f<=n[i].f)break;[n[s],n[i]]=[n[i],n[s]],i=s}}function P_(n){const t=n[0],e=n.pop();if(n.length>0){n[0]=e;let i=0;const s=n.length;for(;;){const r=i*2+1,o=r+1;let a=i;if(r<s&&n[r].f<n[a].f&&(a=r),o<s&&n[o].f<n[a].f&&(a=o),a===i)break;[n[a],n[i]]=[n[i],n[a]],i=a}}return t.key}const D_=[-2,-1.5,-1,-.5,0,.5,1,1.5,2],I_=[-1,-.5,0,.5,1];function xu(n,t,e,i,s,r=10){const o=ac({x:t.x-n.x,y:0,z:t.z-n.z}),a=ac({x:o.z,y:0,z:-o.x}),l=_e(n,t),c=l/(r+1),h=Math.min(i.tuning.psoCorridor,l*.28),u=Math.max(i.dynamics.minTurnRadius*.8,40),d=L_(n,t,e,i,r),m=[],g=[];for(let _=0;_<r;_++){const f=d[_];m.push({center:f,side:a,forward:o,spacing:c});const p=[];for(const x of D_)for(const v of I_){const S=x===0&&v===0,D=S?0:.08,P={x:f.x+a.x*x*h*.5+(S?0:s.gaussian()*h*D),y:Math.max(20,f.y+v*u+(S?0:s.gaussian()*u*D)),z:f.z+a.z*x*h*.5+(S?0:s.gaussian()*h*D)};p.push(P)}g.push(p)}return{slices:m,optionsPerSlice:g,N:r}}function L_(n,t,e,i,s){const r=[],o=ac({x:t.x-n.x,y:0,z:t.z-n.z}),a={x:o.z,z:-o.x},l=i.clearance;let c=n;for(let h=1;h<=s;h++){const u=h/(s+1),d={x:n.x+(t.x-n.x)*u,y:n.y+(t.y-n.y)*u,z:n.z+(t.z-n.z)*u};let m=d;if(e.isBlocked(d,l)||!e.isSegmentFeasible(c,d,l)){let g=null,_=1/0;const f=[];for(let p=1;p<=6;p++)f.push(p*22,-p*22);for(const p of f)for(const x of[0,25,55,90]){const v={x:d.x+a.x*p,y:d.y+x,z:d.z+a.z*p};if(e.isBlocked(v,l)||!e.isSegmentFeasible(c,v,l))continue;const S=Math.abs(p)+x*1.2;S<_&&(_=S,g=v)}g&&(m=g)}r.push(m),c=m}return r}function sn(n,t,e,i){const s=[{...n}];for(let r=0;r<e.N;r++){const o=e.optionsPerSlice[r],a=Math.max(0,Math.min(o.length-1,Math.round(i[r])));s.push(o[a])}return s.push({...t}),s}function un(n,t,e,i){let s=0,r=0,o=0,a=0,l=0,c=0;for(let h=1;h<t.length;h++){const u=t[h-1],d=t[h],m=_e(u,d);if(s+=m,r+=n.integrateField(u,d,g=>n.threatIntensity(g)),o+=n.integrateField(u,d,g=>n.noflyPenalty(g)),a+=n.integrateField(u,d,g=>Math.abs(g.y-e.cruiseAlt)/Math.max(e.cruiseAlt,1)),h>=2){const g=u.x-t[h-2].x,_=u.z-t[h-2].z,f=d.x-u.x,p=d.z-u.z,x=Math.hypot(g,_);if(x>1e-6){const v=(g*f+_*p)/(x*Math.hypot(f,p));l+=1-Math.max(-1,Math.min(1,v))}}n.isSegmentFeasible(u,d,e.clearance,Math.max(e.cellSize*.5,6))||(c+=1e5+m*100)}return s*i.distance+r*i.threat+o*i.nofly+a*i.altitude+l*s*i.smooth+c}function vu(n,t,e){for(let i=1;i<t.length;i++)if(!n.isSegmentFeasible(t[i-1],t[i],e.clearance))return!1;return!0}function yu(n,t,e,i,s,r,o,a=6){const l=[...s],c=m=>sn(e,i,t,m);let h=un(n,c(l),r,o);if(h<1e4)return l;const u=m=>{const g=c(m);let _=0;for(let f=1;f<g.length;f++)n.isSegmentFeasible(g[f-1],g[f],r.clearance,Math.max(r.cellSize*.5,6))||_++;return _};let d=u(l);for(let m=0;m<a;m++){let g=!1;for(let _=0;_<t.N;_++){const f=l[_];let p=f;const x=t.optionsPerSlice[_].length;for(let v=0;v<x;v++){if(v===f)continue;l[_]=v;const S=u(l);if(S<d||S===d&&S===0){const D=S===0?un(n,c(l),r,o):1/0;(S<d||S===0&&D<h)&&(d=S,h=S===0?D:h,p=v)}}if(l[_]=p,p!==f&&(g=!0),d===0)return h=un(n,c(l),r,o),l}if(!g)break}return l}function Mu(n,t,e,i,s,r){const o=t.N,a=s.clearance,l=t.optionsPerSlice.map(p=>p.map(x=>{const v=Math.abs(x.y-s.cruiseAlt)/Math.max(s.cruiseAlt,1);return n.threatIntensity(x)*r.threat*8+n.noflyPenalty(x)*r.nofly*.2+v*r.altitude*8})),c=(p,x)=>n.isSegmentFeasible(p,x,a),h=(p,x)=>_e(p,x)*r.distance;let u=t.optionsPerSlice[0].map((p,x)=>c(e,p)?h(e,p)+(l[0][x]??0):1/0);const d=t.optionsPerSlice.map(p=>new Array(p.length).fill(null));for(let p=1;p<o;p++){const x=new Array(t.optionsPerSlice[p].length).fill(1/0);for(let v=0;v<x.length;v++){const S=t.optionsPerSlice[p][v];let D=1/0,P=-1;for(let T=0;T<u.length;T++){if(!Number.isFinite(u[T]))continue;const R=t.optionsPerSlice[p-1][T];if(!c(R,S))continue;const U=u[T]+h(R,S)+(l[p][v]??0);U<D&&(D=U,P=T)}P>=0&&(x[v]=D,d[p][v]=P)}u=x}let m=-1,g=1/0;for(let p=0;p<u.length;p++){if(!Number.isFinite(u[p]))continue;const x=t.optionsPerSlice[o-1][p];if(!c(x,i))continue;const v=u[p]+h(x,i);v<g&&(g=v,m=p)}if(m<0)return null;const _=new Array(o);let f=m;for(let p=o-1;p>=0;p--)_[p]=f,f=d[p][f];return _}function ac(n){const t=Math.hypot(n.x,n.y,n.z);return t<1e-9?{x:0,y:0,z:0}:{x:n.x/t,y:n.y/t,z:n.z/t}}class U_{constructor(t){bt(this,"ctx");this.ctx=t}plan(t,e){const{env:i,plan:s,weights:r,rng:o}=this.ctx,a=s.tuning,l=xu(t,e,i,s,o),c=l.N,h=l.optionsPerSlice[0].length,u=[];for(let E=0;E<c;E++)u[E]=l.optionsPerSlice[E].map(O=>1/(1+(i.threatIntensity(O)+i.noflyPenalty(O)*.05)*4));const d=Array.from({length:c},()=>new Array(h).fill(1)),m=a.antCount,g=a.acoIterations,_=a.acoAlpha,f=a.acoBeta,p=a.acoEvap,x=a.acoQ;let v=null,S=0;for(let E=0;E<g;E++){const O=[];for(let z=0;z<m;z++){const $=new Array(c);for(let H=0;H<c;H++){const X=new Array(h);let rt=0;for(let at=0;at<h;at++)X[at]=Math.pow(d[H][at],_)*Math.pow(u[H][at],f),rt+=X[at];$[H]=rt>0?o.weightedIndex(X):o.int(0,h-1)}const nt=sn(t,e,l,$),k=un(i,nt,s,r);S++,(!v||k<v.cost)&&(v={choices:[...$],cost:k}),O.push({choices:$,amount:new Array(c).fill(x/Math.max(k,1))})}for(let z=0;z<c;z++)for(let $=0;$<h;$++)d[z][$]*=1-p;for(const z of O)for(let $=0;$<c;$++)d[$][z.choices[$]]+=z.amount[$]}if(!v)return{success:!1,path:[],expandedNodes:0,message:"蚁群算法异常"};const D=yu(i,l,t,e,v.choices,s,r),P=un(i,sn(t,e,l,D),s,r);P<v.cost&&(v={choices:D,cost:P});const T=Mu(i,l,t,e,s,r);let R=v.choices;T&&un(i,sn(t,e,l,T),s,r)<=v.cost&&(R=T);const U=sn(t,e,l,R),y=vu(i,U,s);return{success:y,path:U,expandedNodes:S,message:y?`蚁群规划成功（${g} 代 × ${m} 蚁）`:"蚁群最优解仍存在碰撞，请放宽走廊或调整权重"}}}class N_{constructor(t){bt(this,"ctx");this.ctx=t}plan(t,e){const{env:i,plan:s,weights:r,rng:o}=this.ctx,a=s.tuning,l=xu(t,e,i,s,o),c=l.N,u=l.optionsPerSlice[0].length-1,d=u*.35,m=[];for(let T=0;T<a.psoParticles;T++){const R=Array.from({length:c},()=>o.range(0,u)),U=Array.from({length:c},()=>o.range(-d,d));m.push({x:R,v:U,pbest:[...R],pbestCost:1/0,cost:1/0})}let g=[...m[0].x],_=1/0,f=0;for(let T=0;T<a.psoIterations;T++){for(const R of m){const U=sn(t,e,l,R.x);R.cost=un(i,U,s,r),f++,R.cost<R.pbestCost&&(R.pbestCost=R.cost,R.pbest=[...R.x]),R.cost<_&&(_=R.cost,g=[...R.x])}for(const R of m)for(let U=0;U<c;U++){const y=o.next(),E=o.next();R.v[U]=a.psoInertia*R.v[U]+a.psoC1*y*(R.pbest[U]-R.x[U])+a.psoC2*E*(g[U]-R.x[U]),R.v[U]=Math.max(-d,Math.min(d,R.v[U])),R.x[U]=Math.max(0,Math.min(u,R.x[U]+R.v[U]))}}const p=yu(i,l,t,e,g.map(T=>Math.round(T)),s,r),x=un(i,sn(t,e,l,p),s,r);let v=g.map(T=>Math.round(T));x<_&&(v=p);const S=Mu(i,l,t,e,s,r);if(S){const T=un(i,sn(t,e,l,S),s,r),R=un(i,sn(t,e,l,v),s,r);T<=R&&(v=S)}const D=sn(t,e,l,v),P=vu(i,D,s);return{success:P,path:D,expandedNodes:f,message:P?`粒子群规划成功（${a.psoIterations} 代 × ${a.psoParticles} 粒子）`:"粒子群最优解仍存在碰撞，请放宽走廊或调整权重"}}}class F_{constructor(t){bt(this,"ctx");this.ctx=t}plan(t,e){const{env:i,plan:s,weights:r,rng:o}=this.ctx,a=s.tuning,l=xu(t,e,i,s,o),c=l.N,h=l.optionsPerSlice[0].length,u=[],d=()=>Array.from({length:c},()=>o.int(0,h-1)),m=T=>un(i,sn(t,e,l,T),s,r);for(let T=0;T<a.gaPopulation;T++){const R=d();u.push({c:R,cost:m(R)})}let g=u.length;const _=Math.max(2,Math.floor(a.gaPopulation*.1)),f=()=>{const T=u[o.int(0,u.length-1)],R=u[o.int(0,u.length-1)];return(T.cost<=R.cost?T:R).c};for(let T=0;T<a.gaIterations;T++){u.sort((U,y)=>U.cost-y.cost);const R=u.slice(0,_).map(U=>({c:[...U.c],cost:U.cost}));for(;R.length<a.gaPopulation;){const U=[...f()],y=[...f()];let E=U;if(o.next()<a.gaCrossover){const O=o.int(1,c-1);E=[...U.slice(0,O),...y.slice(O)]}for(let O=0;O<c;O++)o.next()<a.gaMutation&&(E[O]=o.int(0,h-1));R.push({c:E,cost:m(E)}),g++}u.length=0,u.push(...R)}u.sort((T,R)=>T.cost-R.cost);const p=yu(i,l,t,e,u[0].c,s,r);let v=un(i,sn(t,e,l,p),s,r)<u[0].cost?p:u[0].c;const S=Mu(i,l,t,e,s,r);if(S){const T=un(i,sn(t,e,l,S),s,r),R=un(i,sn(t,e,l,v),s,r);T<=R&&(v=S)}const D=sn(t,e,l,v),P=vu(i,D,s);return{success:P,path:D,expandedNodes:g,message:P?`遗传算法规划成功（${a.gaIterations} 代 × ${a.gaPopulation} 个体）`:"遗传算法最优解仍存在碰撞，请放宽走廊或调整权重"}}}class Vh{constructor(t){this.ctx=t}plan(t,e){return new E_(this.ctx.env,this.ctx.plan,this.ctx.weights).plan(t,e)}}const Fr={astar:"A* 栅格搜索",dijkstra:"Dijkstra",rrt:"RRT 快速扩展随机树",rrtstar:"RRT* 渐近最优",hybridastar:"Hybrid A* 运动基元",aco:"蚁群算法 ACO",pso:"粒子群 PSO",ga:"遗传算法 GA"},kh={astar:"体素 26 邻域 + 长步长，启发式全局最优，速度快",dijkstra:"无启发广度优先，保证栅格最优但扩展更多",rrt:"随机采样树，适合高维/开阔空间，结果有随机性",rrtstar:"RRT + 邻域重连，采样预算越大路径越优",hybridastar:"航向离散 + 运动基元，天然满足转弯/爬升约束",aco:"信息素正反馈的群体智能，走廊式选路",pso:"粒子群速度-位置迭代，参数少、收敛快",ga:"选择/交叉/变异进化，适合多目标权衡"};function z_(n,t,e){const i=t.rng??new gu(e??20260920),s={...t,rng:i};switch(n){case"astar":case"dijkstra":return new Vh(s);case"rrt":return new Fh(s,!1);case"rrtstar":return new Fh(s,!0);case"hybridastar":return new R_(s);case"aco":return new U_(s);case"pso":return new N_(s);case"ga":return new F_(s);default:return new Vh(s)}}function Xi(n,t,e,i,s=.35){if(t.length<3)return t.map(o=>({...o}));const r=t.map(o=>({...o}));for(let o=0;o<e;o++){const a=r.map(l=>({...l}));for(let l=1;l<r.length-1;l++){const c=a[l-1],h=a[l+1],u={x:r[l].x+s*((c.x+h.x)/2-r[l].x),y:r[l].y+s*((c.y+h.y)/2-r[l].y),z:r[l].z+s*((c.z+h.z)/2-r[l].z)};n.isSegmentFeasible(a[l-1],u,i)&&n.isSegmentFeasible(u,a[l+1],i)&&(r[l]=u)}}return r}function O_(n,t,e,i=6,s=3){if(t.length<3)return t.map(l=>({...l}));const r=[t[0],t[0],...t,t[t.length-1],t[t.length-1]],o=l=>{const c=l*l,h=c*l;return[(1-3*l+3*c-h)/6,(4-6*c+3*h)/6,(1+3*l+3*c-3*h)/6,h/6]},a=[];for(let l=1;l<r.length-3;l++){const c=r[l],h=r[l+1],u=r[l+2],d=r[l+3];for(let m=0;m<i;m++){const g=m/i,_=o(g);a.push({x:_[0]*c.x+_[1]*h.x+_[2]*u.x+_[3]*d.x,y:_[0]*c.y+_[1]*h.y+_[2]*u.y+_[3]*d.y,z:_[0]*c.z+_[1]*h.z+_[2]*u.z+_[3]*d.z})}}a.push({...r[r.length-1]});for(let l=1;l<a.length;l++)if(!n.isSegmentFeasible(a[l-1],a[l],e))return Xi(n,t,s,e);return a}function B_(n,t,e,i=8,s=3){if(t.length<3)return t.map(a=>({...a}));const r=[t[0],t[0],...t,t[t.length-1],t[t.length-1]],o=[];for(let a=1;a<r.length-3;a++){const l=r[a],c=r[a+1],h=r[a+2],u=r[a+3];for(let d=0;d<i;d++){const m=d/i,g=m*m,_=g*m;o.push({x:.5*(2*c.x+(-l.x+h.x)*m+(2*l.x-5*c.x+4*h.x-u.x)*g+(-l.x+3*c.x-3*h.x+u.x)*_),y:.5*(2*c.y+(-l.y+h.y)*m+(2*l.y-5*c.y+4*h.y-u.y)*g+(-l.y+3*c.y-3*h.y+u.y)*_),z:.5*(2*c.z+(-l.z+h.z)*m+(2*l.z-5*c.z+4*h.z-u.z)*g+(-l.z+3*c.z-3*h.z+u.z)*_)})}}o.push({...r[r.length-1]});for(let a=1;a<o.length;a++)if(!n.isSegmentFeasible(o[a-1],o[a],e))return Xi(n,t,s,e);return o}function V_(n,t,e,i=6,s=3){if(t.length<3)return t.map(g=>({...g}));const r=[0];for(let g=1;g<t.length;g++)r.push(r[g-1]+_e(t[g-1],t[g]));const o=r[r.length-1]||1,a=r.map(g=>g/o),l=["x","y","z"],c=Math.max(t.length*4,Math.ceil(o/i)),h=new Set;for(let g=0;g<=c;g++)h.add(g/c);for(const g of a)h.add(g);const u=[...h].sort((g,_)=>g-_),d=[];let m=null;for(const g of u){const _={x:0,y:0,z:0};for(const f of l)_[f]=k_(a,t.map(p=>p[f]),g);m&&_e(m,_)<1e-6||(d.push(_),m=_)}for(let g=1;g<d.length;g++)if(!n.isSegmentFeasible(d[g-1],d[g],e))return Xi(n,t,s,e);return d}function k_(n,t,e){const i=n.length-1;if(e<=n[0])return t[0];if(e>=n[i])return t[i];const s=[];for(let m=0;m<i;m++)s.push(n[m+1]-n[m]);const r=new Array(i+1).fill(0);for(let m=1;m<i;m++)r[m]=3/s[m]*(t[m+1]-t[m])-3/s[m-1]*(t[m]-t[m-1]);const o=new Array(i+1).fill(0),a=new Array(i+1).fill(0),l=new Array(i+1).fill(0);o[0]=1;for(let m=1;m<i;m++)o[m]=2*(n[m+1]-n[m-1])-s[m-1]*a[m-1],a[m]=s[m]/o[m],l[m]=(r[m]-s[m-1]*l[m-1])/o[m];o[i]=1;const c=new Array(i+1).fill(0);for(let m=i-1;m>=0;m--)c[m]=l[m]-a[m]*c[m+1];let h=0;for(;h<i&&e>n[h+1];)h++;const u=(n[h+1]-e)/s[h],d=(e-n[h])/s[h];return u*t[h]+d*t[h+1]+(u**3-u)*c[h]*s[h]*s[h]/6+(d**3-d)*c[h+1]*s[h]*s[h]/6}function H_(n,t,e,i,s=6,r=3){if(t.length<3)return t.map(h=>({...h}));const o=Op(t,i*.35);if(o.length<2)return t.map(h=>({...h}));const a=o.map((h,u)=>{const d=o[Math.max(0,u-1)],m=o[Math.min(o.length-1,u+1)];return{x:h.x,z:h.z,y:h.y,yaw:Math.atan2(m.x-d.x,m.z-d.z)}}),l=Math.max(i,10),c=[];for(let h=0;h<a.length-1;h++){const u=G_(a[h],a[h+1],l,s);if(u){c.length>0&&u.length>0&&u.shift(),c.length;for(let d=0;d<u.length;d++){const m=u.length<=1?0:d/(u.length-1);u[d].y=a[h].y+(a[h+1].y-a[h].y)*m}c.push(...u)}}if(c.length<2)return Xi(n,t,r,e);for(let h=1;h<c.length;h++)if(!n.isSegmentFeasible(c[h-1],c[h],e))return Xi(n,t,r,e);return c}function G_(n,t,e,i){const s=t.x-n.x,r=t.z-n.z,o=Math.hypot(s,r)/e;if(!Number.isFinite(o)||o<1e-6)return null;const a=Math.atan2(s,r),l=Gh(n.yaw-a),c=Gh(t.yaw-a),h=Math.sin(l),u=Math.sin(c),d=Math.cos(l),m=Math.cos(c),g=(()=>{const y=2+o*o-2*Math.cos(l-c)+2*o*(h-u);if(y<0)return null;const E=Math.sqrt(y),O=mn(Math.atan2(m-d,o+h-u));return[mn(-l+O),E,mn(c-O)]})(),_=(()=>{const y=2+o*o-2*Math.cos(l-c)-2*o*(h-u);if(y<0)return null;const E=Math.sqrt(y),O=mn(Math.atan2(d-m,o-h+u));return[mn(l-O),E,mn(-c+O)]})(),f=(()=>{const y=o*o-2+2*Math.cos(l-c)+2*o*(h+u);if(y<0)return null;const E=Math.sqrt(y),O=mn(Math.atan2(-d-m,o+h+u)-Math.atan2(-2,E));return[mn(-l+O),E,mn(-c+O)]})(),p=(()=>{const y=o*o-2+2*Math.cos(l-c)-2*o*(h+u);if(y<0)return null;const E=Math.sqrt(y),O=mn(Math.atan2(d+m,o-h-u)-Math.atan2(2,E));return[mn(l-O),E,mn(c-O)]})(),x=[];if(g&&x.push({word:"LSL",sol:g}),_&&x.push({word:"RSR",sol:_}),f&&x.push({word:"LSR",sol:f}),p&&x.push({word:"RSL",sol:p}),x.length===0)return null;x.sort((y,E)=>y.sol[0]+y.sol[1]+y.sol[2]-(E.sol[0]+E.sol[1]+E.sol[2]));const v=x[0],S=[];let D=n.x,P=n.z,T=n.yaw;const R=(y,E)=>{const O=Math.max(2,Math.ceil(Math.abs(y)*e/i)),z=E?1:-1,$=D+e*Math.cos(T+z*Math.PI/2),nt=P-e*Math.sin(T+z*Math.PI/2);for(let H=0;H<=O;H++){const rt=T-z*Math.PI/2+z*(y*H/O);S.push({x:$+e*Math.sin(rt),y:0,z:nt+e*Math.cos(rt)})}const k=S[S.length-1];D=k.x,P=k.z,T=mn(T+z*y),T>Math.PI&&(T-=2*Math.PI)},U=y=>{const E=Math.max(1,Math.ceil(y/i));for(let O=1;O<=E;O++)S.push({x:D+y*(O/E)*Math.sin(T),y:0,z:P+y*(O/E)*Math.cos(T)});D+=y*Math.sin(T),P+=y*Math.cos(T)};return R(v.sol[0],v.word[0]==="L"),U(v.sol[1]*e),R(v.sol[2],v.word[2]==="L"),S}function W_(n,t,e,i,s=6,r=3){if(t.length<3)return t.map(u=>({...u}));const o=Math.max(i,12),a=Op(t,o*.3);if(a.length<3)return t.map(u=>({...u}));const l=(u,d)=>Math.atan2(d.x-u.x,d.z-u.z),c=[{...a[0]}];for(let u=1;u<a.length-1;u++){const d=a[u-1],m=a[u],g=a[u+1],_=l(d,m);let p=l(m,g)-_;for(;p>Math.PI;)p-=2*Math.PI;for(;p<-Math.PI;)p+=2*Math.PI;const x=Math.abs(p);if(x<.03){c.push({...m});continue}const v=X_(d,m,g,x,Math.sign(p),o,s),S=c[c.length-1],D=[];if(v){let P=!0,T=S;for(const R of v){if(!n.isSegmentFeasible(T,R,e)){P=!1;break}T=R}P&&D.push(...v)}if(D.length===0)c.push({...m});else{const P=D[0];_e(P,S)>1&&c.push(P),c.push(...D.slice(1))}}c.push({...a[a.length-1]});const h=$_(c,Math.max(s*.5,1));for(let u=1;u<h.length;u++)if(!n.isSegmentFeasible(h[u-1],h[u],e))return Xi(n,t,r,e);return h}function X_(n,t,e,i,s,r,o){const a=Math.atan2(t.x-n.x,t.z-n.z),l=Math.atan2(e.x-t.x,e.z-t.z),c=_e(n,t),h=_e(t,e),u=Math.min(c,h)*.46,d=Math.min(i/2-.01,.35),m=Math.max(0,i-2*d);let g=r;if(hl(g,d,m)>u){let H=0,X=g;for(let rt=0;rt<16;rt++){const at=(H+X)/2;hl(at,d,m)>u?X=at:H=at}g=Math.max(H,1)}const _=Math.min(hl(g,d,m),u),f=2*g*d,p={x:Math.sin(a),y:(t.y-n.y)/Math.max(c,1e-9),z:Math.cos(a)},x={x:Math.sin(l),y:(e.y-t.y)/Math.max(h,1e-9),z:Math.cos(l)},v={x:t.x-p.x*_,y:t.y-p.y*_,z:t.z-p.z*_},S={x:t.x+x.x*_,y:t.y+x.y*_,z:t.z+x.z*_},D=[v],P=Y_(v,a,s,g,f,o);D.push(...P.points.slice(1));const T=P.points[P.points.length-1],R=a+s*d;let U=T,y=R;if(m>.004){const H=T.x+g*Math.cos(R+s*Math.PI/2),X=T.z-g*Math.sin(R+s*Math.PI/2),rt=Math.max(2,Math.ceil(m*g/o));for(let at=1;at<=rt;at++){const ht=R-s*Math.PI/2+s*(m*at/rt);U={x:H+g*Math.sin(ht),y:v.y,z:X+g*Math.cos(ht)},D.push(U)}y=R+s*m}const E=j_(U,y,s,g,f,o),O=E[E.length-1],z=S.x-O.x,$=S.z-O.z;for(let H=1;H<E.length;H++)D.push({x:E[H].x+z,y:v.y,z:E[H].z+$});const nt=[0];for(let H=1;H<D.length;H++)nt.push(nt[H-1]+Math.hypot(D[H].x-D[H-1].x,D[H].z-D[H-1].z));const k=nt[nt.length-1]||1;for(let H=0;H<D.length;H++)D[H].y=v.y+(S.y-v.y)*(nt[H]/k);return D}function hl(n,t,e){const i=2*n*t,s=Hh(0,0,0,n,i,!0),r=t,o=s.x+n*Math.cos(r+Math.PI/2),a=s.z-n*Math.sin(r+Math.PI/2),l=r-Math.PI/2+e,c={x:o+n*Math.sin(l),z:a+n*Math.cos(l)},h=r+e,u=Hh(c.x,c.z,h,n,i,!1),d=2*t+e,m=Math.sin(d);return Math.abs(m)<1e-4?(s.z+(c.z-s.z))/2:Math.abs(u.x/m)}function Hh(n,t,e,i,s,r){const a=s/48;let l=n,c=t,h=e;for(let u=1;u<=48;u++){const d=(u-.5)*a,m=r?d/(i*s):1/i-d/(i*s);h+=m*a,l+=Math.sin(h)*a,c+=Math.cos(h)*a}return{x:l,z:c}}function $_(n,t){const e=[n[0]];for(let s=1;s<n.length;s++)_e(e[e.length-1],n[s])>=t&&e.push(n[s]);const i=n[n.length-1];return e[e.length-1]!==i&&e.push(i),e}function Y_(n,t,e,i,s,r){const o=Math.max(4,Math.ceil(s/r)),a=s/o,l=[{...n}];let c=n.x,h=n.z,u=t;for(let d=1;d<=o;d++){const m=(d-.5)*a;u+=e*m/(i*s)*a,c+=Math.sin(u)*a,h+=Math.cos(u)*a,l.push({x:c,y:n.y,z:h})}return{points:l,yawEnd:u}}function j_(n,t,e,i,s,r){const o=Math.max(4,Math.ceil(s/r)),a=s/o,l=[{...n}];let c=n.x,h=n.z,u=t;for(let d=1;d<=o;d++){const m=(d-.5)*a,g=e*(1/i-m/(i*s));u+=g*a,c+=Math.sin(u)*a,h+=Math.cos(u)*a,l.push({x:c,y:n.y,z:h})}return l}function Gh(n){let t=n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function mn(n){let t=n;for(;t<0;)t+=2*Math.PI;for(;t>=2*Math.PI;)t-=2*Math.PI;return t}function Op(n,t){if(n.length<3)return n.map(s=>({...s}));const e=new Array(n.length).fill(!1);e[0]=!0,e[n.length-1]=!0;const i=[[0,n.length-1]];for(;i.length;){const[s,r]=i.pop();let o=0,a=-1;const l=n[s],c=n[r],h=_e(l,c);for(let u=s+1;u<r;u++){const d=n[u];let m;if(h<1e-9)m=_e(l,d);else{const g=((d.x-l.x)*(c.x-l.x)+(d.y-l.y)*(c.y-l.y)+(d.z-l.z)*(c.z-l.z))/(h*h);m=_e(d,Fa(l,c,Math.max(0,Math.min(1,g))))}m>o&&(o=m,a=u)}o>t&&a>0&&(e[a]=!0,i.push([s,a]),i.push([a,r]))}return n.filter((s,r)=>e[r]).map(s=>({...s}))}function Su(n,t){if(n.length<2)return n.map(i=>({...i}));const e=[n[0]];for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i],o=_e(s,r);if(o<1e-9)continue;const a=Math.max(1,Math.ceil(o/t));for(let l=1;l<=a;l++)e.push(Fa(s,r,l/a))}return e}function ua(n,t,e){var f,p;if(n.length<2)return[];const i=Su(n,Math.max(t.cellSize*.5,4)),s=Ip(i),r=s[s.length-1],o=Math.min(Math.max((t.speedMin+t.speedMax)/2,t.speedMin),t.speedMax),a=Math.max(Math.min(((f=t.dynamics)==null?void 0:f.maxAccel)??o*.5,30),4),l=Math.max(((p=t.dynamics)==null?void 0:p.minTurnRadius)??30,5),c=o*o/(2*a),h=x=>{if(2*c>=r){const v=Math.sqrt(a*r);return x<r/2?Math.min(Math.sqrt(2*a*x),v):Math.min(Math.sqrt(2*a*(r-x)),v)}return x<c?Math.sqrt(2*a*x):x>r-c?Math.sqrt(2*a*(r-x)):o},u=new Array(i.length),d=Math.max(l*1.2,16),m=x=>{const v=Math.max(0,Math.min(r,x));let S=0,D=s.length-1;for(;S<D-1;){const R=S+D>>1;s[R]<=v?S=R:D=R}const P=s[D]-s[S],T=P>1e-9?(v-s[S])/P:0;return Fa(i[S],i[D],T)};for(let x=0;x<i.length;x++){let v=Math.max(h(s[x]),t.speedMin*.25);if(s[x]>d&&r-s[x]>d){const S=m(s[x]-d),D=m(s[x]+d),P=_u(S,i[x],D);if(P>1e-6){const T=Math.sqrt(a/P);v=Math.min(v,T,t.speedMax)}}x===i.length-1&&(v=0),u[x]=v}for(let x=1;x<i.length;x++){const v=s[x]-s[x-1],S=Math.sqrt(u[x-1]**2+2*a*v);u[x]>S&&(u[x]=S)}for(let x=i.length-2;x>=0;x--){const v=s[x+1]-s[x],S=Math.sqrt(u[x+1]**2+2*a*v);u[x]>S&&(u[x]=S)}const g=[];let _=0;for(let x=0;x<i.length;x++){const v=s[x],S=u[x];let D;if(x<i.length-1){const P=_e(i[x],i[x+1]),T=P>1e-9?S/P:0;D={x:(i[x+1].x-i[x].x)*T,y:(i[x+1].y-i[x].y)*T,z:(i[x+1].z-i[x].z)*T}}else{const P=_e(i[x-1],i[x]),T=P>1e-9?S/P:0;D={x:(i[x].x-i[x-1].x)*T,y:(i[x].y-i[x-1].y)*T,z:(i[x].z-i[x-1].z)*T}}if(g.push({position:i[x],velocity:D,speed:S,time:_,s:v}),x<i.length-1){const P=s[x+1]-v,T=Math.max((S+u[x+1])/2,.5);_+=P/T}}return g}function q_(n){return x_(n)}const Wh=180/Math.PI;function Xh(n,t){const e={length:0,maxCurvature:0,meanCurvature:0,maxTurnAngle:0,maxClimbAngle:0,maxSpeed:0,maxAccel:0,maxJerk:0};if(n.length<2)return e;const i=Math.max(t.cellSize*.4,4),s=Su(n,i);let r=0,o=0,a=0,l=0,c=0,h=0;for(let _=1;_<s.length;_++){r+=_e(s[_-1],s[_]);const f=Math.abs(Oa(s[_-1],s[_]))*Wh;if(f>a&&(a=f),_>=2){const p=za(s[_-2],s[_-1],s[_])*Wh;p>o&&(o=p);const x=_u(s[_-2],s[_-1],s[_]);x>l&&(l=x),c+=x,h++}}const u=ua(n,t);let d=0,m=0,g=0;for(let _=0;_<u.length;_++){if(u[_].speed>d&&(d=u[_].speed),_>=1&&_<u.length-1){const f=u[_+1].time-u[_-1].time;if(f>1e-6){const p=(u[_+1].velocity.x-u[_-1].velocity.x)/f,x=(u[_+1].velocity.y-u[_-1].velocity.y)/f,v=(u[_+1].velocity.z-u[_-1].velocity.z)/f,S=Math.hypot(p,x,v);S>m&&(m=S)}}if(_>=2&&_<u.length-2){const f=K_(u[_-2],u[_-1],u[_],u[_+1],u[_+2]);f>g&&(g=f)}}return{length:Math.round(r*10)/10,maxCurvature:Math.round(l*1e5)/1e5,meanCurvature:Math.round((h?c/h:0)*1e5)/1e5,maxTurnAngle:Math.round(o*10)/10,maxClimbAngle:Math.round(a*10)/10,maxSpeed:Math.round(d*10)/10,maxAccel:Math.round(m*100)/100,maxJerk:Math.round(g*100)/100}}function K_(n,t,e,i,s){const r=(c,h,u)=>{const d=u.time-c.time;return d<=1e-6?{x:0,y:0,z:0}:{x:(u.velocity.x-c.velocity.x)/d,y:(u.velocity.y-c.velocity.y)/d,z:(u.velocity.z-c.velocity.z)/d}},o=r(n,t,e),a=r(e,i,s),l=(s.time-n.time)/2;return l<=1e-6?0:Math.hypot(a.x-o.x,a.y-o.y,a.z-o.z)/l}const Z_=.15;function J_(n){const t=[],e=(i,s)=>Math.abs(i.x-s.x)<1e-6&&Math.abs(i.y-s.y)<1e-6&&Math.abs(i.z-s.z)<1e-6;for(const i of n)for(let s=0;s<i.length;s++)s===0&&t.length>0&&e(t[t.length-1],i[0])||t.push(i[s]);return t}function Q_(n,t,e,i){if(t.length<3)return t.map(s=>({...s}));switch(i){case"polyline":return Xi(n,t,e.smoothIterations,e.clearance);case"bspline":case"bezier":case"polynomial":{const s=Xi(n,t,Math.max(e.smoothIterations,10),e.clearance,.4);return i==="bspline"?O_(n,s,e.clearance):i==="bezier"?B_(n,s,e.clearance):V_(n,s,e.clearance)}case"dubins":return H_(n,t,e.clearance,Math.max(e.dynamics.minTurnRadius,30));case"clothoid":return W_(n,t,e.clearance,Math.max(e.dynamics.minTurnRadius,30));case"none":default:return t}}function Bp(n,t,e,i,s){const r=performance.now(),o=[...t].sort((S,D)=>{const P=T=>T==="start"?0:T==="end"?2:1;return P(S.role)-P(D.role)});if(o.length<2)return ix("至少需要起点和终点",0);const a=s.algoOverride??e.algo,l={env:n,plan:e,weights:i,rng:new gu(s.seed??20260920)};let c=0;const h=[],u=[],d=[];let m=!0,g="规划成功";const _=[];for(let S=0;S<o.length-1;S++){const D=o[S].position,P=o[S+1].position,R=z_(a,l,(s.seed??20260920)+S*101).plan(D,P);c+=R.expandedNodes;const U={legIndex:S,points:R.path,success:R.success,expandedNodes:R.expandedNodes,costBreakdown:{distance:0,threat:0,altitude:0,nofly:0,smooth:0},cumulativeCost:0};if(d.push(U),R.candidates&&R.candidates.length>0&&_.push(...R.candidates.slice(0,30)),!R.success){m=!1,g=`航段 ${S+1} 规划失败：${R.message}`,h.length===0&&h.push({...D}),h.push({...P}),u.push([{...D},{...P}]);continue}const y=R.path;u.push(y.map(E=>({...E})));for(let E=0;E<y.length;E++)S>0&&E===0||h.push(y[E])}let f=h;if(m){const S=u.map(D=>{let P=D.length>=2?Q_(n,D,e,s.smoothing):D.map(T=>({...T}));return e.dynamics.autoRepair&&(P=w_(n,P,e,void 0,[{x:D[0].x,y:D[0].y,z:D[0].z},{x:D[D.length-1].x,y:D[D.length-1].y,z:D[D.length-1].z}])),P.length>0&&(P[0]={...D[0]},P[P.length-1]={...D[D.length-1]}),P});f=J_(S)}const p=performance.now()-r,x=m?Su(f,Math.max(e.cellSize*.5,4)):[],v=tx(n,h,f,x,i,e,s.smoothing,a,m,c,p,o.length-1,d.filter(S=>S.success).length);return{success:m,rawPath:h,smoothPath:f,stats:v,legs:d,message:g,candidates:_.length>0?_:void 0}}function tx(n,t,e,i,s,r,o,a,l,c,h,u,d){const m=q_(e),g=e.length>=2?zp(n,e,s,r):{total:0,breakdown:{distance:0,threat:0,altitude:0,nofly:0,smooth:0}};let _=0,f=0;for(let E=1;E<i.length;E++){const O=n.threatIntensity(i[E-1]),z=n.threatIntensity(i[E]),$=Math.hypot(i[E].x-i[E-1].x,i[E].y-i[E-1].y,i[E].z-i[E-1].z);f+=(O+z)/2*$,(O+z)/2>Z_&&(_+=$)}const p=(r.speedMin+r.speedMax)/2,x=p>0?_/p:0,v=u>0?d/u:0;let S=0;for(const E of i)n.isBlocked(E,r.clearance)||S++;const D=i.length>0?S/i.length:0,P=l&&i.length>0?Math.round(v*D*1e3)/10:Math.round(v*1e3)/10,T=l&&e.length>=2?ua(e,r):[],R=i.length>=2?T_(i,r.dynamics,T):void 0,U=t.length>=2?Xh(t,r):void 0,y=e.length>=2?Xh(e,r):void 0;return{distance:Math.round(m*10)/10,threatExposure:Math.round(f*100)/100,exposureTime:Math.round(x*10)/10,planTimeMs:Math.round(h*100)/100,expandedNodes:c,success:l,segments:Math.max(0,e.length-1),obstacleAvoidanceRate:P,totalCost:Math.round(g.total*100)/100,algo:a,smoothing:o,constraints:R,rawMetrics:U,smoothMetrics:y,costBreakdown:{distance:Math.round(g.breakdown.distance*100)/100,threat:Math.round(g.breakdown.threat*100)/100,altitude:Math.round(g.breakdown.altitude*100)/100,nofly:Math.round(g.breakdown.nofly*100)/100,smooth:Math.round(g.breakdown.smooth*100)/100}}}function ex(n,t,e,i){return S_(n,t,e,i)}function nx(n,t,e,i,s,r,o=20260920){return s.map(a=>{var c,h;performance.now();const l=Bp(n,t,e,i,{smoothing:r,algoOverride:a,seed:o});return{algo:a,success:l.success,message:l.message,distance:l.stats.distance,planTimeMs:l.stats.planTimeMs,expandedNodes:l.stats.expandedNodes,totalCost:l.stats.totalCost,threatExposure:l.stats.threatExposure,satisfactionRate:((c=l.stats.constraints)==null?void 0:c.satisfactionRate)??100,maxCurvature:((h=l.stats.smoothMetrics)==null?void 0:h.maxCurvature)??0,path:l.smoothPath}})}function ix(n,t){return{success:!1,rawPath:[],smoothPath:[],stats:{distance:0,threatExposure:0,exposureTime:0,planTimeMs:t,expandedNodes:0,success:!1,segments:0,obstacleAvoidanceRate:0,totalCost:0,costBreakdown:{distance:0,threat:0,altitude:0,nofly:0,smooth:0}},legs:[],message:n}}function sx(n,t,e,i){const s=[];for(let r=t;r<=e+1e-9;r+=i){if(r<n[0].time||r>n[n.length-1].time)continue;let o=0,a=n.length-1;for(;o<a-1;){const d=o+a>>1;n[d].time<=r?o=d:a=d}const l=n[o],c=n[Math.min(a,n.length-1)],h=c.time-l.time,u=h>1e-9?(r-l.time)/h:0;s.push({position:{x:l.position.x+(c.position.x-l.position.x)*u,y:l.position.y+(c.position.y-l.position.y)*u,z:l.position.z+(c.position.z-l.position.z)*u},velocity:{x:l.velocity.x+(c.velocity.x-l.velocity.x)*u,y:l.velocity.y+(c.velocity.y-l.velocity.y)*u,z:l.velocity.z+(c.velocity.z-l.velocity.z)*u},speed:l.speed+(c.speed-l.speed)*u,time:r,s:l.s+(c.s-l.s)*u})}return s}function rx(n){const{env:t,plan:e,triggers:i,traj:s,time:r}=n;if(!i.enabled||s.length<2)return{triggered:!1,reason:null,detail:""};if(n.cooldownLeft>0)return{triggered:!1,reason:null,detail:""};const o=sx(s,r,r+i.lookaheadTime,.5);if(o.length<2)return{triggered:!1,reason:null,detail:""};const a=Math.min(3.5,i.lookaheadTime);if(i.onCollisionRisk)for(let l=0;l<o.length-1;l++){const c=o[l],h=o[l+1],u=Math.max(h.time-c.time,1e-6),d=t.spacetimeClearance(c.position,h.position,c.time,h.time,8);if(Number.isFinite(d.gap)){const g=c.time+d.u*u-r,_=g<=a;if(d.gap<-4||d.gap<e.clearance&&_)return{triggered:!0,reason:"collision-risk",detail:`前瞻航段与移动障碍碰撞风险（净空 ${d.gap.toFixed(0)}m，约 ${Math.max(0,g).toFixed(1)}s 后）`,hazard:$h(t,c,h,"obstacle")}}const m=t.spacetimeThreatClearance(c.position,h.position,c.time,h.time,8);if(Number.isFinite(m.gap)){const g=c.time+m.u*u-r,_=g<=a;if(m.gap<e.clearance&&_)return{triggered:!0,reason:"collision-risk",detail:`前瞻航段将进入突发威胁区（侵入 ${(-m.gap).toFixed(0)}m，约 ${Math.max(0,g).toFixed(1)}s 后）`,hazard:$h(t,c,h,"threat")}}}if(i.onThreatApproach&&o.length>=2){const l=o[0],c=o[Math.min(4,o.length-1)];for(const h of t.dynamics){const u=t.stateAt(h,l.time);if(u.active)if(h.kind==="threat"){if(l.position.y<h.heightMin-10||l.position.y>h.heightMax+10)continue;let d=1/0,m=1/0;for(const _ of[l,c]){const f=t.stateAt(h,_.time),p=Math.hypot(_.position.x-f.position.x,_.position.z-f.position.z);_===l?d=p:m=p}const g=h.threatRadius+i.warnDistance;if(d<g&&m<=d-2)return{triggered:!0,reason:"threat-approach",detail:`${h.name} 接近预警范围（${d.toFixed(0)}m）`,hazard:{...u.position}}}else{let d=1/0,m=1/0;for(const _ of[l,c]){const f=t.stateAt(h,_.time),p=Math.hypot(_.position.x-f.position.x,_.position.y-f.position.y,_.position.z-f.position.z);_===l?d=p:m=p}const g=h.radius+e.clearance+i.warnDistance;if(d<g&&m<=d-2)return{triggered:!0,reason:"threat-approach",detail:`${h.name} 进入预警范围（${d.toFixed(0)}m）`,hazard:{...u.position}}}}}if(i.onYawDeviation&&o.length>=3){const l=o[Math.min(4,o.length-1)],c=o[0],h=Math.atan2(l.position.x-c.position.x,l.position.z-c.position.z);let u=Math.abs(h-n.heading)*(180/Math.PI);if(u>180&&(u=360-u),u>i.yawThreshold)return{triggered:!0,reason:"yaw-deviation",detail:`偏航 ${u.toFixed(0)}° 超过阈值 ${i.yawThreshold}°`}}if(i.onRangeAnomaly){let l=0;for(let g=0;g<o.length-1;g++)l+=_e(o[g].position,o[g+1].position);const c=o[o.length-1],h=s.findIndex(g=>g===c);for(let g=Math.max(1,h+1);g<s.length;g++)l+=_e(s[g-1].position,s[g].position);const u=n.plannedTotalLength,d=s.length>0?ox(s,r):0,m=Math.max(u-d,1);if(l>m*(1+i.rangeThreshold))return{triggered:!0,reason:"range-anomaly",detail:`剩余航程 ${l.toFixed(0)}m 较计划 ${m.toFixed(0)}m 偏长 ${((l/m-1)*100).toFixed(0)}%`}}return{triggered:!1,reason:null,detail:""}}function $h(n,t,e,i){let s,r=1/0;const o=4;for(let a=0;a<=o;a++){const l=a/o,c=t.time+(e.time-t.time)*l,h={x:t.position.x+(e.position.x-t.position.x)*l,y:t.position.y+(e.position.y-t.position.y)*l,z:t.position.z+(e.position.z-t.position.z)*l};for(const u of n.dynamics){if(u.kind!==i)continue;const d=n.stateAt(u,c);if(!d.active)continue;const m=i==="threat"?Math.hypot(h.x-d.position.x,h.z-d.position.z):Math.hypot(h.x-d.position.x,h.y-d.position.y,h.z-d.position.z);m<r&&(r=m,s={...d.position})}}return s}function ox(n,t){var e;for(let i=0;i<n.length-1;i++)if(n[i+1].time>=t){const s=n[i+1].time-n[i].time,r=s>1e-6?(t-n[i].time)/s:0;return n[i].s+(n[i+1].s-n[i].s)*r}return((e=n[n.length-1])==null?void 0:e.s)??0}function ax(n,t,e,i,s,r,o=42){const a=performance.now();let l=0;for(let x=0;x<i.length;x++)i[x].time<=s&&(l=x);const c={...i[l].position},h=Math.max(i[l].speed,t.speedMin);let u=l+1,d=0;for(;u<i.length-1&&d<r;)d+=_e(i[u].position,i[u+1].position),u++;const m={...i[Math.min(u,i.length-1)].position},g=jh(n,i.slice(l,u+1).map(x=>x.position),t,e,s,h),_=lx(n,c,m,t,e,s,h,new gu(o),i[l].time),f=performance.now()-a;if(!_.path)return{success:!1,localPath:[],candidates:_.candidates,costBefore:g,costAfter:g,mergeIndex:u,planMs:f,message:"局部重规划未找到绕飞路径，保持原航线"};const p=jh(n,_.path,t,e,s,h);return{success:!0,localPath:_.path,candidates:_.candidates,costBefore:g,costAfter:p,mergeIndex:u,planMs:f,message:`局部重规划完成：代价 ${g.toFixed(0)} → ${p.toFixed(0)}`}}function lx(n,t,e,i,s,r,o,a,l){const c=[{p:t,parent:-1,t:r}],h=[],u=Math.min(i.tuning.maxSamples,3e3),d=Math.min(i.tuning.rrtStep,32),m=d*1.2,g=Math.min(t.x,e.x)-160,_=Math.max(t.x,e.x)+160,f=Math.min(t.z,e.z)-160,p=Math.max(t.z,e.z)+160,x=n.terrain.params.size/2-4,v=Math.max(-x,g),S=Math.min(x,_),D=Math.max(-x,f),P=Math.min(x,p),T=Math.max(25,Math.min(t.y,e.y)-70),R=Math.min(n.maxAltitude,Math.max(t.y,e.y)+70);let U=-1;const y=()=>a.next()<Math.min(i.tuning.goalBias+.1,.35)?{...e}:{x:a.range(v,S),y:a.range(T,R),z:a.range(D,P)};for(let O=0;O<u;O++){const z=y();let $=0,nt=1/0;for(let Gt=0;Gt<c.length;Gt++){const st=(c[Gt].p.x-z.x)**2+(c[Gt].p.y-z.y)**2+(c[Gt].p.z-z.z)**2;st<nt&&(nt=st,$=Gt)}const k=c[$],H=_e(k.p,z),X=Math.min(d,H);if(X<i.dynamics.minStep)continue;const rt=X/Math.max(H,1e-9),at={x:k.p.x+(z.x-k.p.x)*rt,y:Math.max(20,k.p.y+(z.y-k.p.y)*rt),z:k.p.z+(z.z-k.p.z)*rt};if(i.dynamics.enforceInSearch){const Gt=k.parent>=0?c[k.parent].p:null;if(!Yr(i.dynamics,Gt,k.p,at))continue}const ht=k.t+X/o;if(!n.isSegmentFeasibleSpacetimeSpeed(k.p,at,i.clearance,k.t,o))continue;const Lt=c.length;if(c.push({p:at,parent:$,t:ht}),O%25===0&&(h.push(Yh(c,Lt)),h.length>40&&h.shift()),_e(at,e)<=m){const Gt=ht+_e(at,e)/o;if(n.isSegmentFeasibleSpacetimeSpeed(at,e,i.clearance,ht,o)){c.push({p:e,parent:Lt,t:Gt}),U=c.length-1;break}}}if(U<0)return{path:null,candidates:h};const E=Yh(c,U);return h.push(E),{path:E,candidates:h}}function Yh(n,t){const e=[];let i=t;for(;i>=0;)e.push(n[i].p),i=n[i].parent;return e.reverse()}function jh(n,t,e,i,s,r){let o=0,a=s;for(let l=1;l<t.length;l++){const c=_e(t[l-1],t[l]);a+=c/Math.max(r,1);const h=(n.totalThreatAt(t[l-1],a)+n.totalThreatAt(t[l],a))/2*c,u=(n.noflyPenalty(t[l-1])+n.noflyPenalty(t[l]))/2*c;o+=c*i.distance+h*i.threat+u*i.nofly}return o}function dl(n,t,e,i,s,r,o){return{time:e,reason:n,detail:t,position:{...i},costBefore:Math.round(s),costAfter:Math.round(r),planMs:Math.round(o*10)/10}}const cx={tau:.6,initialOffset:{x:0,y:0,z:0}};function ux(n,t){return{pos:{x:n.position.x+t.initialOffset.x,y:n.position.y+t.initialOffset.y,z:n.position.z+t.initialOffset.z},vel:{...n.velocity},yaw:Math.atan2(n.velocity.x,n.velocity.z),lateralError:Math.hypot(t.initialOffset.x,t.initialOffset.z),altitudeError:t.initialOffset.y,yawError:0,speedError:0}}function hx(n,t,e,i){const s=1/Math.max(i.tau,.1),r=(t.velocity.x-n.vel.x)*s,o=(t.velocity.y-n.vel.y)*s,a=(t.velocity.z-n.vel.z)*s,l={x:n.vel.x+r*e,y:n.vel.y+o*e,z:n.vel.z+a*e},c={x:n.pos.x+l.x*e,y:n.pos.y+l.y*e,z:n.pos.z+l.z*e},h=Math.hypot(l.x,l.z)>.5?Math.atan2(l.x,l.z):n.yaw,u=Math.atan2(t.velocity.x,t.velocity.z);let d=(h-u)*(180/Math.PI);for(;d>180;)d-=360;for(;d<-180;)d+=360;return{pos:c,vel:l,yaw:h,lateralError:Math.hypot(c.x-t.position.x,c.z-t.position.z),altitudeError:c.y-t.position.y,yawError:d,speedError:Math.hypot(l.x,l.y,l.z)-t.speed}}function dx(n,t=cx){if(n.length<2)return{states:[],summary:{rmsLateral:0,rmsAltitude:0,rmsYaw:0,rmsSpeed:0,maxLateral:0,samples:0}};let e=ux(n[0],t);const i=[e];let s=0,r=0,o=0,a=0,l=0;for(let u=1;u<n.length;u++){const d=Math.max(n[u].time-n[u-1].time,.001);e=hx(e,n[u],d,t),i.push(e),s+=e.lateralError**2,r+=e.altitudeError**2,o+=e.yawError**2,a+=e.speedError**2,e.lateralError>l&&(l=e.lateralError)}const c=i.length,h=u=>Math.round(Math.sqrt(u/c)*100)/100;return{states:i,summary:{rmsLateral:h(s),rmsAltitude:h(r),rmsYaw:h(o),rmsSpeed:h(a),maxLateral:Math.round(l*100)/100,samples:c}}}function qh(){return{distance:0,threatExposure:0,exposureTime:0,planTimeMs:0,expandedNodes:0,success:!1,segments:0,obstacleAvoidanceRate:0,totalCost:0,costBreakdown:{distance:0,threat:0,altitude:0,nofly:0,smooth:0}}}const qi=Dp("sim",{state:()=>({status:"idle",message:"就绪",smoothing:"bspline",rawPath:[],smoothPath:[],trajectory:[],stats:null,costCurve:[],candidates:[],localCandidates:[],replanWindow:[],replanEvents:[],lastReplanEvent:null,hazardPoint:null,tracking:[],trackingSummary:null,playing:!1,simTime:0,duration:0,playbackSpeed:1,dronePosition:{x:0,y:0,z:0},droneHeading:0,cameraMode:"orbit",dirty:!0,autoReplan:!1,onlineReplan:!0,showThreatHeatmap:!1,showCandidates:!0,showClearanceMap:!1,showTracking:!1,cooldown:0,plannedLength:0}),getters:{progress:n=>n.duration>0?Math.min(1,n.simTime/n.duration):0},actions:{setCameraMode(n){this.cameraMode=n},setSmoothing(n){this.smoothing=n,this.dirty=!0},setAlgo(n){const t=Qe();t.planParams.algo=n,this.dirty=!0},markDirty(){this.dirty=!0},setPlaybackSpeed(n){this.playbackSpeed=n},setDroneTransform(n,t){this.dronePosition=n,this.droneHeading=t},play(){this.trajectory.length<2||(this.simTime>=this.duration&&(this.simTime=0,this.resetReplayState()),this.playing=!0)},pause(){this.playing=!1},togglePlay(){this.playing?this.pause():this.play()},seek(n){this.simTime=Math.max(0,Math.min(this.duration,n))},resetReplayState(){this.replanEvents=[],this.lastReplanEvent=null,this.hazardPoint=null,this.localCandidates=[],this.replanWindow=[],this.cooldown=0},advance(n){if(!(!this.playing||this.trajectory.length<2)){if(this.simTime+=n*this.playbackSpeed,this.cooldown=Math.max(0,this.cooldown-n*this.playbackSpeed),this.simTime>=this.duration){this.simTime=this.duration,this.playing=!1;return}this.onlineReplan&&this.handleOnlineReplan()}},handleOnlineReplan(){const n=Qe();if(n.dynamics.length===0)return;const t=this.buildDynamicEnv(),e=this.sampleAt(this.simTime);if(!e)return;const i=rx({env:t,plan:n.planParams,weights:n.weights,triggers:n.replanTriggers,traj:this.trajectory,time:this.simTime,position:e.position,heading:this.droneHeading,plannedTotalLength:this.plannedLength,cooldownLeft:this.cooldown});if(i.triggered&&i.reason&&this.cooldown<=0){const s=ax(t,n.planParams,n.weights,this.trajectory,this.simTime,n.replanTriggers.windowRadius);if(this.cooldown=6,this.hazardPoint=i.hazard??null,s.success){this.spliceReplan(s.localPath,s.mergeIndex);const a=dl(i.reason,i.detail,this.simTime,e.position,s.costBefore,s.costAfter,s.planMs);this.recordReplan(a)}else{const a=dl(i.reason,`${i.detail}；${s.message}`,this.simTime,e.position,s.costBefore,s.costAfter,s.planMs);this.recordReplan(a)}this.localCandidates=s.candidates;const r=s.localPath[0],o=s.localPath[s.localPath.length-1];this.replanWindow=r&&o?[r,o]:[]}},recordReplan(n){this.replanEvents.push(n),this.lastReplanEvent=n,this.stats&&(this.stats.replanCount=(this.stats.replanCount??0)+1)},spliceReplan(n,t){const e=Qe();if(n.length<2||t<=0)return;const i=this.trajectory,s=(()=>{let u=0;for(let d=0;d<i.length;d++)i[d].time<=this.simTime&&(u=d);return u})(),r=ua(n,e.planParams);if(r.length<2)return;const o=this.simTime,a=r.map(u=>({...u,position:{...u.position},velocity:{...u.velocity},time:o+u.time})),l=a[a.length-1].time-i[t].time,c=i.slice(t+1).map(u=>({...u,position:{...u.position},velocity:{...u.velocity},time:u.time+l})),h=i.slice(0,s);this.trajectory=[...h,...a,...c],this.duration=this.trajectory[this.trajectory.length-1].time,this.smoothPath=this.trajectory.map(u=>u.position)},buildDynamicEnv(){const n=Qe();return new Up(n.terrain,n.threats,n.noflyZones,n.obstacles,n.dynamics)},resetPlayback(){this.playing=!1,this.simTime=0,this.resetReplayState()},triggerSuddenThreat(){if(!this.playing)return null;this.buildDynamicEnv();const n=this.sampleAt(this.simTime);if(!n)return null;const t=dl("manual","手动触发突发威胁",this.simTime,n.position,0,0,0);return this.recordReplan(t),t},planLocally(){const n=Qe(),t=new $r(n.terrain,n.threats,n.noflyZones,n.obstacles),e=Bp(t,n.waypoints,n.planParams,n.weights,{smoothing:this.smoothing});return this.applyPlanResult(e,n.planParams,n.weights,t),e},plan(){const n=Qe();return this.status="planning",this.message="规划中…",this.pause(),new Promise(t=>{const e=new m_,i=o=>JSON.parse(JSON.stringify(o)),s={type:"plan",terrain:i(n.terrain),threats:i(n.threats),noflyZones:i(n.noflyZones),obstacles:i(n.obstacles),dynamics:JSON.parse(JSON.stringify(n.dynamics,(o,a)=>a===1/0?1e9:a)),waypoints:i(n.waypoints),planParams:i(n.planParams),weights:i(n.weights),smoothing:this.smoothing},r=setTimeout(()=>{e.terminate(),this.status="failed",this.message="规划超时（请增大栅格分辨率或减少最大节点数）",t({success:!1,rawPath:[],smoothPath:[],stats:qh(),legs:[],message:this.message})},3e4);e.onmessage=o=>{clearTimeout(r);const a=o.data;if(a.type==="plan-done"){const l=new $r(n.terrain,n.threats,n.noflyZones,n.obstacles);this.applyPlanResult(a.result,n.planParams,n.weights,l),this.message=a.result.success?`规划成功（Worker ${a.workerMs} ms）`:a.result.message,e.terminate(),t(a.result)}},e.onerror=o=>{clearTimeout(r),this.status="failed",this.message=`Worker 错误：${o.message}`,e.terminate(),t({success:!1,rawPath:[],smoothPath:[],stats:qh(),legs:[],message:this.message})},e.postMessage(s)})},applyPlanResult(n,t,e,i){this.rawPath=n.rawPath,this.smoothPath=n.smoothPath,this.stats=n.stats,this.status=n.success?"done":"failed",this.dirty=!1,this.simTime=0,this.playing=!1,this.candidates=n.candidates??[],this.replanEvents=[],this.lastReplanEvent=null,this.hazardPoint=null,this.localCandidates=[],this.replanWindow=[],this.cooldown=0,n.success&&n.smoothPath.length>=2?(this.costCurve=ex(i,n.smoothPath,e,t).map(s=>({distance:s.distance,cumulative:s.cumulative})),this.requestTrajectory(i,n.smoothPath,t),this.plannedLength=n.stats.distance):(this.costCurve=[],this.trajectory=[],this.duration=0,this.tracking=[],this.trackingSummary=null)},requestTrajectory(n,t,e){this.trajectory=ua(t,e),this.duration=this.trajectory.length>0?this.trajectory[this.trajectory.length-1].time:0,this.simTime=0,this.trajectory.length>0&&(this.dronePosition={...this.trajectory[0].position});const{states:i,summary:s}=dx(this.trajectory);this.tracking=i,this.trackingSummary=s},sampleAt(n){const t=this.trajectory;if(t.length===0)return null;if(n<=t[0].time)return t[0];const e=t[t.length-1];if(n>=e.time)return e;let i=0,s=t.length-1;for(;i<s-1;){const c=i+s>>1;t[c].time<=n?i=c:s=c}const r=t[i],o=t[i+1],a=o.time-r.time,l=a>1e-6?(n-r.time)/a:0;return{time:n,s:r.s+(o.s-r.s)*l,speed:r.speed+(o.speed-r.speed)*l,position:{x:r.position.x+(o.position.x-r.position.x)*l,y:r.position.y+(o.position.y-r.position.y)*l,z:r.position.z+(o.position.z-r.position.z)*l},velocity:{x:r.velocity.x+(o.velocity.x-r.velocity.x)*l,y:r.velocity.y+(o.velocity.y-r.velocity.y)*l,z:r.velocity.z+(o.velocity.z-r.velocity.z)*l}}},clearPlan(){this.rawPath=[],this.smoothPath=[],this.trajectory=[],this.costCurve=[],this.candidates=[],this.localCandidates=[],this.replanWindow=[],this.replanEvents=[],this.tracking=[],this.trackingSummary=null,this.stats=null,this.status="idle",this.message="就绪",this.playing=!1,this.simTime=0,this.duration=0,this.dirty=!0},exportScene(){return Qe().serialize({rawPath:this.rawPath,smoothPath:this.smoothPath,trajectory:this.trajectory.map(t=>t.position),stats:this.stats})}}}),fx={class:"toolbar"},px=["title","onClick"],mx=["title","onClick"],gx=Hn({__name:"ToolBar",setup(n){const t=Qe(),e=qi(),i=[{mode:"select",icon:"▣",title:"选择/拖拽（Esc）"},{mode:"add-threat",icon:"◎",title:"添加威胁区：在地形上点击"},{mode:"add-nofly",icon:"⊘",title:"添加禁飞区：在地形上点击"},{mode:"add-obstacle",icon:"■",title:"添加建筑障碍"},{mode:"add-dynamic",icon:"➰",title:"添加移动障碍物（在线重规划演示）"},{mode:"add-waypoint",icon:"⚑",title:"添加途经航点"}],s=[{mode:"orbit",icon:"✥",title:"旋转/缩放/平移（左键旋转，右键平移，滚轮缩放）"},{mode:"top",icon:"▦",title:"俯视视角"},{mode:"follow",icon:"➤",title:"跟随无人机视角"}];function r(a){t.setEditMode(t.editMode===a&&a!=="select"?"select":a)}function o(){var d;const a=e.sampleAt(e.simTime),l=(a==null?void 0:a.position)??((d=t.startPoint)==null?void 0:d.position)??{x:0,z:0},c=e.droneHeading,h={x:l.x+Math.sin(c+.3)*120,y:0,z:l.z+Math.cos(c+.3)*120},u=t.addSuddenThreatAt(h);t.updateDynamic(u,{enableAt:e.simTime,active:!0,name:"突发威胁-即时"}),e.playing||e.play()}return(a,l)=>(Rt(),Pt("div",fx,[l[0]||(l[0]=A("div",{class:"logo"},"UAV2",-1)),(Rt(),Pt(ve,null,en(i,c=>A("div",{key:c.mode,class:Qt(["tool",{active:L(t).editMode===c.mode}]),title:c.title,onClick:h=>r(c.mode)},ot(c.icon),11,px)),64)),A("div",{class:"tool",title:"在无人机前方投放即时突发威胁（回放时触发在线重规划）",onClick:o}," 💥 "),l[1]||(l[1]=A("div",{class:"sep"},null,-1)),(Rt(),Pt(ve,null,en(s,c=>A("div",{key:c.mode,class:Qt(["tool",{active:L(e).cameraMode===c.mode}]),title:c.title,onClick:h=>L(e).setCameraMode(c.mode)},ot(c.icon),11,mx)),64))]))}}),Ci=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},_x=Ci(gx,[["__scopeId","data-v-c5f83047"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="169",Ks={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xx=0,Kh=1,vx=2,Vp=1,kp=2,hi=3,$i=0,hn=1,xn=2,Hi=0,Zs=1,Zh=2,Jh=3,Qh=4,yx=5,cs=100,Mx=101,Sx=102,bx=103,Ex=104,Tx=200,wx=201,Ax=202,Cx=203,lc=204,cc=205,Rx=206,Px=207,Dx=208,Ix=209,Lx=210,Ux=211,Nx=212,Fx=213,zx=214,uc=0,hc=1,dc=2,nr=3,fc=4,pc=5,mc=6,gc=7,Hp=0,Ox=1,Bx=2,Gi=0,Vx=1,kx=2,Hx=3,Gx=4,Wx=5,Xx=6,$x=7,Gp=300,ir=301,sr=302,_c=303,xc=304,Ba=306,vc=1e3,ds=1001,yc=1002,Cn=1003,Yx=1004,po=1005,vn=1006,fl=1007,fs=1008,wi=1009,Wp=1010,Xp=1011,jr=1012,Eu=1013,xs=1014,_i=1015,Qr=1016,Tu=1017,wu=1018,rr=1020,$p=35902,Yp=1021,jp=1022,On=1023,qp=1024,Kp=1025,Js=1026,or=1027,Zp=1028,Au=1029,Jp=1030,Cu=1031,Ru=1033,Yo=33776,jo=33777,qo=33778,Ko=33779,Mc=35840,Sc=35841,bc=35842,Ec=35843,Tc=36196,wc=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Dc=37811,Ic=37812,Lc=37813,Uc=37814,Nc=37815,Fc=37816,zc=37817,Oc=37818,Bc=37819,Vc=37820,kc=37821,Zo=36492,Hc=36494,Gc=36495,Qp=36283,Wc=36284,Xc=36285,$c=36286,jx=3200,qx=3201,tm=0,Kx=1,Bi="",Fn="srgb",Ki="srgb-linear",Pu="display-p3",Va="display-p3-linear",ha="linear",Te="srgb",da="rec709",fa="p3",As=7680,td=519,Zx=512,Jx=513,Qx=514,em=515,tv=516,ev=517,nv=518,iv=519,Yc=35044,ed="300 es",xi=2e3,pa=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nd=1234567;const zr=Math.PI/180,qr=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function sv(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function rv(n,t,e){return n!==t?(e-n)/(t-n):0}function Or(n,t,e){return(1-e)*n+e*t}function ov(n,t,e,i){return Or(n,t,1-Math.exp(-e*i))}function av(n,t=1){return t-Math.abs(Du(n,t*2)-t)}function lv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function cv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function uv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hv(n,t){return n+Math.random()*(t-n)}function dv(n){return n*(.5-Math.random())}function fv(n){n!==void 0&&(nd=n);let t=nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pv(n){return n*zr}function mv(n){return n*qr}function gv(n){return(n&n-1)===0&&n!==0}function _v(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jo={DEG2RAD:zr,RAD2DEG:qr,generateUUID:vi,clamp:qe,euclideanModulo:Du,mapLinear:sv,inverseLerp:rv,lerp:Or,damp:ov,pingpong:av,smoothstep:lv,smootherstep:cv,randInt:uv,randFloat:hv,randFloatSpread:dv,seededRandom:fv,degToRad:pv,radToDeg:mv,isPowerOfTwo:gv,ceilPowerOfTwo:_v,floorPowerOfTwo:xv,setQuaternionFromProperEuler:vv,normalize:fe,denormalize:zn};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],f=s[3],p=s[6],x=s[1],v=s[4],S=s[7],D=s[2],P=s[5],T=s[8];return r[0]=o*_+a*x+l*D,r[3]=o*f+a*v+l*P,r[6]=o*p+a*S+l*T,r[1]=c*_+h*x+u*D,r[4]=c*f+h*v+u*P,r[7]=c*p+h*S+u*T,r[2]=d*_+m*x+g*D,r[5]=d*f+m*v+g*P,r[8]=d*p+m*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=e*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pl.makeScale(t,e)),this}rotate(t){return this.premultiply(pl.makeRotation(-t)),this}translate(t,e){return this.premultiply(pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new Jt;function nm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yv(){const n=ma("canvas");return n.style.display="block",n}const id={};function Qo(n){n in id||(id[n]=!0,console.warn(n))}function Mv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Sv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sd=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rd=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Ki]:{transfer:ha,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:Te,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Va]:{transfer:ha,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(rd),fromReference:n=>n.applyMatrix3(sd)},[Pu]:{transfer:Te,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(rd),fromReference:n=>n.applyMatrix3(sd).convertLinearToSRGB()}},Ev=new Set([Ki,Va]),le={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ev.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=mr[t].toReference,s=mr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return mr[n].primaries},getTransfer:function(n){return n===Bi?ha:mr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(mr[t].luminanceCoefficients)}};function Qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ml(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Tv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=ma("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qs(e[i]/255)*255):e[i]=Qs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wv=0;class im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gl(s[o].image)):r.push(gl(s[o]))}else r=gl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Av=0;class rn extends Ss{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,i=ds,s=ds,r=vn,o=fs,a=On,l=wi,c=rn.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=vi(),this.name="",this.source=new im(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vc:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vc:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Gp;rn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,D=(p+1)/2,P=(h+d)/4,T=(u+_)/4,R=(g+f)/4;return v>S&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=P/i,r=T/i):S>D?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=R/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=R/r),this.set(i,s,r,e),this}let x=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cv extends Ss{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new im(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends Cv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class sm extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rv extends rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let f=1-a;const p=l*d+c*m+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const D=Math.sqrt(v),P=Math.atan2(D,p*x);f=Math.sin(f*P)/D,a=Math.sin(a*P)/D}const S=a*x;if(l=l*f+d*S,c=c*f+m*S,h=h*f+g*S,u=u*f+_*S,f===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-a*m,t[e+2]=c*g+h*m+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(od.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(od.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new N,od=new ys;class to{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),go.subVectors(this.max,gr),Rs.subVectors(t.a,gr),Ps.subVectors(t.b,gr),Ds.subVectors(t.c,gr),Pi.subVectors(Ps,Rs),Di.subVectors(Ds,Ps),es.subVectors(Rs,Ds);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-es.z,es.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,es.z,0,-es.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-es.y,es.x,0];return!xl(e,Rs,Ps,Ds,go)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,Rs,Ps,Ds,go))?!1:(_o.crossVectors(Pi,Di),e=[_o.x,_o.y,_o.z],xl(e,Rs,Ps,Ds,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],Ln=new N,mo=new to,Rs=new N,Ps=new N,Ds=new N,Pi=new N,Di=new N,es=new N,gr=new N,go=new N,_o=new N,ns=new N;function xl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);const a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pv=new to,_r=new N,vl=new N;class eo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(vl)),this.expandByPoint(_r.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,yl=new N,xo=new N,Ii=new N,Ml=new N,vo=new N,Sl=new N;class no{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yl.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(yl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=Ii.dot(this.direction),l=-Ii.dot(xo),c=Ii.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(xo,d),m}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){Ml.subVectors(e,t),vo.subVectors(i,t),Sl.crossVectors(Ml,vo);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(vo.crossVectors(Ii,vo));if(l<0)return null;const c=a*this.direction.dot(Ml.cross(Ii));if(c<0||l+c>o)return null;const h=-a*Ii.dot(Sl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f)}set(t,e,i,s,r,o,a,l,c,h,u,d,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dv,t,Iv)}lookAt(t,e,i){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),yo.crossVectors(gn,Li),s[0]=Li.x,s[4]=yo.x,s[8]=gn.x,s[1]=Li.y,s[5]=yo.y,s[9]=gn.y,s[2]=Li.z,s[6]=yo.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],x=i[3],v=i[7],S=i[11],D=i[15],P=s[0],T=s[4],R=s[8],U=s[12],y=s[1],E=s[5],O=s[9],z=s[13],$=s[2],nt=s[6],k=s[10],H=s[14],X=s[3],rt=s[7],at=s[11],ht=s[15];return r[0]=o*P+a*y+l*$+c*X,r[4]=o*T+a*E+l*nt+c*rt,r[8]=o*R+a*O+l*k+c*at,r[12]=o*U+a*z+l*H+c*ht,r[1]=h*P+u*y+d*$+m*X,r[5]=h*T+u*E+d*nt+m*rt,r[9]=h*R+u*O+d*k+m*at,r[13]=h*U+u*z+d*H+m*ht,r[2]=g*P+_*y+f*$+p*X,r[6]=g*T+_*E+f*nt+p*rt,r[10]=g*R+_*O+f*k+p*at,r[14]=g*U+_*z+f*H+p*ht,r[3]=x*P+v*y+S*$+D*X,r[7]=x*T+v*E+S*nt+D*rt,r[11]=x*R+v*O+S*k+D*at,r[15]=x*U+v*z+S*H+D*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+f*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],x=u*f*c-_*d*c+_*l*m-a*f*m-u*l*p+a*d*p,v=g*d*c-h*f*c-g*l*m+o*f*m+h*l*p-o*d*p,S=h*_*c-g*u*c+g*a*m-o*_*m-h*a*p+o*u*p,D=g*u*l-h*_*l-g*a*d+o*_*d+h*a*f-o*u*f,P=e*x+i*v+s*S+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=x*T,t[1]=(_*d*r-u*f*r-_*s*m+i*f*m+u*s*p-i*d*p)*T,t[2]=(a*f*r-_*l*r+_*s*c-i*f*c-a*s*p+i*l*p)*T,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*m-i*l*m)*T,t[4]=v*T,t[5]=(h*f*r-g*d*r+g*s*m-e*f*m-h*s*p+e*d*p)*T,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*m+e*l*m)*T,t[8]=S*T,t[9]=(g*u*r-h*_*r-g*i*m+e*_*m+h*i*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*T,t[12]=D*T,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*f+e*u*f)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*f-e*a*f)*T,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,x=l*c,v=l*h,S=l*u,D=i.x,P=i.y,T=i.z;return s[0]=(1-(_+p))*D,s[1]=(m+S)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(m-S)*P,s[5]=(1-(d+p))*P,s[6]=(f+x)*P,s[7]=0,s[8]=(g+v)*T,s[9]=(f-x)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=xi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let m,g;if(a===xi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pa)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=xi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,m=(i+s)*h;let g,_;if(a===xi)g=(o+r)*u,_=-2*u;else if(a===pa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Is=new N,Un=new be,Dv=new N(0,0,0),Iv=new N(1,1,1),Li=new N,yo=new N,gn=new N,ad=new be,ld=new ys;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lv=0;const cd=new N,Ls=new ys,li=new be,Mo=new N,xr=new N,Uv=new N,Nv=new ys,ud=new N(1,0,0),hd=new N(0,1,0),dd=new N(0,0,1),fd={type:"added"},Fv={type:"removed"},Us={type:"childadded",child:null},bl={type:"childremoved",child:null};class Le extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new N,e=new ei,i=new ys,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(dd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(xr,Mo,this.up):li.lookAt(Mo,xr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(li),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fd),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fv),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fd),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Uv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Nv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new N(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new N,ci=new N,El=new N,ui=new N,Ns=new N,Fs=new N,pd=new N,Tl=new N,wl=new N,Al=new N,Cl=new Ce,Rl=new Ce,Pl=new Ce;class wn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),ci.subVectors(i,e),El.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot(El),c=ci.dot(ci),h=ci.dot(El),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),ci.subVectors(t,e),Nn.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Fs.subVectors(r,i),Tl.subVectors(t,i);const l=Ns.dot(Tl),c=Fs.dot(Tl);if(l<=0&&c<=0)return e.copy(i);wl.subVectors(t,s);const h=Ns.dot(wl),u=Fs.dot(wl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ns,o);Al.subVectors(t,r);const m=Ns.dot(Al),g=Fs.dot(Al);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Fs,a);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return pd.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(pd,a);const p=1/(f+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Ns,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},So={h:0,s:0,l:0};function Dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=Du(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){const i=rm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=ml(t.r),this.g=ml(t.g),this.b=ml(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return le.fromWorkingColorSpace(Xe.copy(this),t),Math.round(qe(Xe.r*255,0,255))*65536+Math.round(qe(Xe.g*255,0,255))*256+Math.round(qe(Xe.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Fn){le.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(So);const i=Or(Ui.h,So.h,e),s=Or(Ui.s,So.s,e),r=Or(Ui.l,So.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Wt;Wt.NAMES=rm;let zv=0;class Zi extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Zs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lc&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new N,bo=new Vt;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yc&&(t.usage=this.usage),t}}class om extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class am extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ov=0;const En=new be,Il=new Le,zs=new N,_n=new to,vr=new to,Ve=new N;class ue extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nm(t)?am:om)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(_n.min,vr.min),_n.expandByPoint(Ve),Ve.addVectors(_n.max,vr.max),_n.expandByPoint(Ve)):(_n.expandByPoint(vr.min),_n.expandByPoint(vr.max))}_n.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),Ve.add(zs)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,d=new Vt,m=new Vt,g=new Vt,_=new N,f=new N;function p(R,U,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,U),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(E),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(E),a[R].add(_),a[U].add(_),a[y].add(_),l[R].add(f),l[U].add(f),l[y].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,U=x.length;R<U;++R){const y=x[R],E=y.start,O=y.count;for(let z=E,$=E+O;z<$;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new N,S=new N,D=new N,P=new N;function T(R){D.fromBufferAttribute(s,R),P.copy(D);const U=a[R];v.copy(U),v.sub(D.multiplyScalar(D.dot(U))).normalize(),S.crossVectors(P,U);const E=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,E)}for(let R=0,U=x.length;R<U;++R){const y=x[R],E=y.start,O=y.count;for(let z=E,$=E+O;z<$;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[m++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new be,is=new no,Eo=new eo,gd=new N,To=new N,wo=new N,Ao=new N,Ll=new N,Co=new N,_d=new N,Ro=new N;class ge extends Le{constructor(t=new ue,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ll.fromBufferAttribute(u,t),o?Co.addScaledVector(Ll,h):Co.addScaledVector(Ll.sub(e),h))}e.add(Co)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Eo.containsPoint(is.origin)===!1&&(is.intersectSphere(Eo,gd)===null||is.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),is.copy(t.ray).applyMatrix4(md),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=x,D=v;S<D;S+=3){const P=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);s=Po(this,p,t,i,c,h,u,P,T,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);s=Po(this,o,t,i,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=x,D=v;S<D;S+=3){const P=S,T=S+1,R=S+2;s=Po(this,p,t,i,c,h,u,P,T,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const x=f,v=f+1,S=f+2;s=Po(this,o,t,i,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Bv(n,t,e,i,s,r,o,a){let l;if(t.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:n}}function Po(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,To),n.getVertexPosition(l,wo),n.getVertexPosition(c,Ao);const h=Bv(n,t,e,i,To,wo,Ao,_d);if(h){const u=new N;wn.getBarycoord(_d,To,wo,Ao,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,l,c,u,new Vt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,u,new Vt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};wn.getNormal(To,wo,Ao,d.normal),h.face=d,h.barycoord=u}return h}class yi extends ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(_,f,p,x,v,S,D,P,T,R,U){const y=S/T,E=D/R,O=S/2,z=D/2,$=P/2,nt=T+1,k=R+1;let H=0,X=0;const rt=new N;for(let at=0;at<k;at++){const ht=at*E-z;for(let Lt=0;Lt<nt;Lt++){const Gt=Lt*y-O;rt[_]=Gt*x,rt[f]=ht*v,rt[p]=$,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[f]=0,rt[p]=P>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Lt/T),u.push(1-at/R),H+=1}}for(let at=0;at<R;at++)for(let ht=0;ht<T;ht++){const Lt=d+ht+nt*at,Gt=d+ht+nt*(at+1),st=d+(ht+1)+nt*(at+1),pt=d+(ht+1)+nt*at;l.push(Lt,Gt,pt),l.push(Gt,st,pt),X+=6}a.addGroup(m,X,U),m+=X,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function Vv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const kv={clone:ar,merge:Je};var Hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Vv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class cm extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new N,xd=new Vt,vd=new Vt;class Tn extends cm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,xd,vd),e.subVectors(vd,xd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Bs=1;class Wv extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Os,Bs,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Os,Bs,t,e);r.layers=this.layers,this.add(r);const o=new Tn(Os,Bs,t,e);o.layers=this.layers,this.add(o);const a=new Tn(Os,Bs,t,e);a.layers=this.layers,this.add(a);const l=new Tn(Os,Bs,t,e);l.layers=this.layers,this.add(l);const c=new Tn(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class um extends rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xv extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new um(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Hi});r.uniforms.tEquirect.value=e;const o=new ge(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=vn),new Wv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ul=new N,$v=new N,Yv=new Jt;class pi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ul.subVectors(i,e).cross($v.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yv.getNormalMatrix(t),s=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new eo,Do=new N;class Lu{constructor(t=new pi,e=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],f=s[11],p=s[12],x=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,f-m,S-p).normalize(),i[1].setComponents(l+r,d+c,f+m,S+p).normalize(),i[2].setComponents(l+o,d+h,f+g,S+x).normalize(),i[3].setComponents(l-o,d-h,f-g,S-x).normalize(),i[4].setComponents(l-a,d-u,f-_,S-v).normalize(),e===xi)i[5].setComponents(l+a,d+u,f+_,S+v).normalize();else if(e===pa)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ka extends ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const x=p*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-x,0),_.push(0,0,1),f.push(v/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),D=x+1+c*(p+1),P=x+1+c*p;m.push(v,S,P),m.push(S,D,P)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.widthSegments,t.heightSegments)}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,by=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:qv,alphahash_pars_fragment:Kv,alphamap_fragment:Zv,alphamap_pars_fragment:Jv,alphatest_fragment:Qv,alphatest_pars_fragment:ty,aomap_fragment:ey,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:sy,begin_vertex:ry,beginnormal_vertex:oy,bsdfs:ay,iridescence_fragment:ly,bumpmap_pars_fragment:cy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:_y,common:xy,cube_uv_reflection_fragment:vy,defaultnormal_vertex:yy,displacementmap_pars_vertex:My,displacementmap_vertex:Sy,emissivemap_fragment:by,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:wy,envmap_fragment:Ay,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Ry,envmap_pars_vertex:Py,envmap_physical_pars_fragment:ky,envmap_vertex:Dy,fog_vertex:Iy,fog_pars_vertex:Ly,fog_fragment:Uy,fog_pars_fragment:Ny,gradientmap_pars_fragment:Fy,lightmap_pars_fragment:zy,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:By,lights_pars_begin:Vy,lights_toon_fragment:Hy,lights_toon_pars_fragment:Gy,lights_phong_fragment:Wy,lights_phong_pars_fragment:Xy,lights_physical_fragment:$y,lights_physical_pars_fragment:Yy,lights_fragment_begin:jy,lights_fragment_maps:qy,lights_fragment_end:Ky,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:tM,map_fragment:eM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:sM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:oM,morphinstance_vertex:aM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:hM,normal_fragment_begin:dM,normal_fragment_maps:fM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:gM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:yM,iridescence_pars_fragment:MM,opaque_fragment:SM,packing:bM,premultiplied_alpha_fragment:EM,project_vertex:TM,dithering_fragment:wM,dithering_pars_fragment:AM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:PM,shadowmap_pars_vertex:DM,shadowmap_vertex:IM,shadowmask_pars_fragment:LM,skinbase_vertex:UM,skinning_pars_vertex:NM,skinning_vertex:FM,skinnormal_vertex:zM,specularmap_fragment:OM,specularmap_pars_fragment:BM,tonemapping_fragment:VM,tonemapping_pars_fragment:kM,transmission_fragment:HM,transmission_pars_fragment:GM,uv_pars_fragment:WM,uv_pars_vertex:XM,uv_vertex:$M,worldpos_vertex:YM,background_vert:jM,background_frag:qM,backgroundCube_vert:KM,backgroundCube_frag:ZM,cube_vert:JM,cube_frag:QM,depth_vert:tS,depth_frag:eS,distanceRGBA_vert:nS,distanceRGBA_frag:iS,equirect_vert:sS,equirect_frag:rS,linedashed_vert:oS,linedashed_frag:aS,meshbasic_vert:lS,meshbasic_frag:cS,meshlambert_vert:uS,meshlambert_frag:hS,meshmatcap_vert:dS,meshmatcap_frag:fS,meshnormal_vert:pS,meshnormal_frag:mS,meshphong_vert:gS,meshphong_frag:_S,meshphysical_vert:xS,meshphysical_frag:vS,meshtoon_vert:yS,meshtoon_frag:MS,points_vert:SS,points_frag:bS,shadow_vert:ES,shadow_frag:TS,sprite_vert:wS,sprite_frag:AS},Mt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Yn={basic:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Je([Mt.common,Mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Je([Mt.lights,Mt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Yn.physical={uniforms:Je([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Io={r:0,b:0,g:0},rs=new ei,CS=new be;function RS(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Ba)?(h===void 0&&(h=new ge(new yi(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ar(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(v.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CS.makeRotationFromEuler(rs)),h.material.toneMapped=le.getTransfer(S.colorSpace)!==Te,(u!==S||d!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,m=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ge(new ka(2,2),new Yi({name:"BackgroundMaterial",uniforms:ar(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(S.colorSpace)!==Te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Io,lm(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:f}}function PS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,E,O,z,$){let nt=!1;const k=u(z,O,E);r!==k&&(r=k,c(r.object)),nt=m(y,z,O,$),nt&&g(y,z,O,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,S(y,E,O,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,E,O){const z=O.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let nt=$[E.id];nt===void 0&&(nt={},$[E.id]=nt);let k=nt[z];return k===void 0&&(k=d(l()),nt[z]=k),k}function d(y){const E=[],O=[],z=[];for(let $=0;$<e;$++)E[$]=0,O[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,E,O,z){const $=r.attributes,nt=E.attributes;let k=0;const H=O.getAttributes();for(const X in H)if(H[X].location>=0){const at=$[X];let ht=nt[X];if(ht===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),at===void 0||at.attribute!==ht||ht&&at.data!==ht.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function g(y,E,O,z){const $={},nt=E.attributes;let k=0;const H=O.getAttributes();for(const X in H)if(H[X].location>=0){let at=nt[X];at===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const ht={};ht.attribute=at,at&&at.data&&(ht.data=at.data),$[X]=ht,k++}r.attributes=$,r.attributesNum=k,r.index=z}function _(){const y=r.newAttributes;for(let E=0,O=y.length;E<O;E++)y[E]=0}function f(y){p(y,0)}function p(y,E){const O=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;O[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),$[y]!==E&&(n.vertexAttribDivisor(y,E),$[y]=E)}function x(){const y=r.newAttributes,E=r.enabledAttributes;for(let O=0,z=E.length;O<z;O++)E[O]!==y[O]&&(n.disableVertexAttribArray(O),E[O]=0)}function v(y,E,O,z,$,nt,k){k===!0?n.vertexAttribIPointer(y,E,O,$,nt):n.vertexAttribPointer(y,E,O,z,$,nt)}function S(y,E,O,z){_();const $=z.attributes,nt=O.getAttributes(),k=E.defaultAttributeValues;for(const H in nt){const X=nt[H];if(X.location>=0){let rt=$[H];if(rt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const at=rt.normalized,ht=rt.itemSize,Lt=t.get(rt);if(Lt===void 0)continue;const Gt=Lt.buffer,st=Lt.type,pt=Lt.bytesPerElement,yt=st===n.INT||st===n.UNSIGNED_INT||rt.gpuType===Eu;if(rt.isInterleavedBufferAttribute){const vt=rt.data,$t=vt.stride,Bt=rt.offset;if(vt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)p(X.location+Xt,vt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)f(X.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let Xt=0;Xt<X.locationSize;Xt++)v(X.location+Xt,ht/X.locationSize,st,at,$t*pt,(Bt+ht/X.locationSize*Xt)*pt,yt)}else{if(rt.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)p(X.location+vt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let vt=0;vt<X.locationSize;vt++)f(X.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let vt=0;vt<X.locationSize;vt++)v(X.location+vt,ht/X.locationSize,st,at,ht*pt,ht/X.locationSize*vt*pt,yt)}}else if(k!==void 0){const at=k[H];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(X.location,at);break;case 3:n.vertexAttrib3fv(X.location,at);break;case 4:n.vertexAttrib4fv(X.location,at);break;default:n.vertexAttrib1fv(X.location,at)}}}}x()}function D(){R();for(const y in i){const E=i[y];for(const O in E){const z=E[O];for(const $ in z)h(z[$].object),delete z[$];delete E[O]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const O in E){const z=E[O];for(const $ in z)h(z[$].object),delete z[$];delete E[O]}delete i[y.id]}function T(y){for(const E in i){const O=i[E];if(O[y.id]===void 0)continue;const z=O[y.id];for(const $ in z)h(z[$].object),delete z[$];delete O[y.id]}}function R(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:f,disableUnusedAttributes:x}}function DS(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,i,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==On&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_i&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:D,maxSamples:P}}function LS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new pi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const x=r?0:i,v=x*4;let S=p.clippingState||null;l.value=S,S=h(g,d,v,m);for(let D=0;D!==v;++D)S[D]=e[D];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function US(n){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=ir:a===xc&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class dm extends cm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const js=4,yd=[.125,.215,.35,.446,.526,.582],us=20,Nl=new dm,Md=new Wt;let Fl=null,zl=0,Ol=0,Bl=!1;const ls=(1+Math.sqrt(5))/2,Vs=1/ls,Sd=[new N(-ls,Vs,0),new N(ls,Vs,0),new N(-Vs,0,ls),new N(Vs,0,ls),new N(0,ls,-Vs),new N(0,ls,Vs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Fl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fl,zl,Ol),this._renderer.xr.enabled=Bl,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Qr,format:On,colorSpace:Ki,depthBuffer:!1},s=Ed(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NS(r)),this._blurMaterial=FS(r,t,e)}return s}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,i,s){const a=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Md),h.toneMapping=Gi,h.autoClear=!1;const m=new Rn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ge(new yi,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Md),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Lo(s,x*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Lo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Nl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sd[(s-r-1)%Sd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*us-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):us;f>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${us}`);const p=[];let x=0;for(let T=0;T<us;++T){const R=T/_,U=Math.exp(-R*R/2);p.push(U),T===0?x+=U:T<f&&(x+=2*U)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[s],D=3*S*(s>v-js?s-v+js:0),P=4*(this._cubeSize-S);Lo(e,D,P,3*S,2*S),l.setRenderTarget(e),l.render(u,Nl)}}function NS(n){const t=[],e=[],i=[];let s=n;const r=n-js+1+yd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-js?l=yd[o-n+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,x=new Float32Array(_*g*m),v=new Float32Array(f*g*m),S=new Float32Array(p*g*m);for(let P=0;P<m;P++){const T=P%3*2/3-1,R=P>2?0:-1,U=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(U,_*g*P),v.set(d,f*g*P);const y=[P,P,P,P,P,P];S.set(y,p*g*P)}const D=new ue;D.setAttribute("position",new dn(x,_)),D.setAttribute("uv",new dn(v,f)),D.setAttribute("faceIndex",new dn(S,p)),t.push(D),s>js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ed(n,t,e){const i=new vs(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function FS(n,t,e){const i=new Float32Array(us),s=new N(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Td(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wd(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_c||l===xc,h=l===ir||l===sr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bd(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new bd(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function OS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function BS(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],n.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,S=x.length;v<S;v+=3){const D=x[v+0],P=x[v+1],T=x[v+2];d.push(D,P,P,T,T,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const D=v+0,P=v+1,T=v+2;d.push(D,P,P,T,T,D)}}else return;const f=new(nm(d)?am:om)(d,1);f.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function VS(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,i,1)}function u(d,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x];for(let x=0;x<_.length;x++)e.update(p,i,_[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function HS(n,t,e){const i=new WeakMap,s=new Ce;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),f===!0&&(S=3);let D=a.attributes.position.count*S,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const T=new Float32Array(D*P*4*u),R=new sm(T,D,P,u);R.type=_i,R.needsUpdate=!0;const U=S*4;for(let E=0;E<u;E++){const O=p[E],z=x[E],$=v[E],nt=D*P*4*E;for(let k=0;k<O.count;k++){const H=k*U;g===!0&&(s.fromBufferAttribute(O,k),T[nt+H+0]=s.x,T[nt+H+1]=s.y,T[nt+H+2]=s.z,T[nt+H+3]=0),_===!0&&(s.fromBufferAttribute(z,k),T[nt+H+4]=s.x,T[nt+H+5]=s.y,T[nt+H+6]=s.z,T[nt+H+7]=0),f===!0&&(s.fromBufferAttribute($,k),T[nt+H+8]=s.x,T[nt+H+9]=s.y,T[nt+H+10]=s.z,T[nt+H+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Vt(D,P)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function GS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class fm extends rn{constructor(t,e,i,s,r,o,a,l,c,h=Js){if(h!==Js&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Js&&(i=xs),i===void 0&&h===or&&(i=rr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pm=new rn,Ad=new fm(1,1),mm=new sm,gm=new Rv,_m=new um,Cd=[],Rd=[],Pd=new Float32Array(16),Dd=new Float32Array(9),Id=new Float32Array(4);function cr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function WS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function XS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function $S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function YS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function jS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),Be(e,i)}}function qS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Be(e,i)}}function KS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Pd.set(i),n.uniformMatrix4fv(this.addr,!1,Pd),Be(e,i)}}function ZS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function JS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function QS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function t1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function e1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function n1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function i1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function s1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function r1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ad.compareFunction=em,r=Ad):r=pm,e.setTexture2D(t||r,s)}function o1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gm,s)}function a1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_m,s)}function l1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mm,s)}function c1(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return $S;case 35666:return YS;case 35674:return jS;case 35675:return qS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}function u1(n,t){n.uniform1fv(this.addr,t)}function h1(n,t){const e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function d1(n,t){const e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function f1(n,t){const e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function p1(n,t){const e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function m1(n,t){const e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function g1(n,t){const e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _1(n,t){n.uniform1iv(this.addr,t)}function x1(n,t){n.uniform2iv(this.addr,t)}function v1(n,t){n.uniform3iv(this.addr,t)}function y1(n,t){n.uniform4iv(this.addr,t)}function M1(n,t){n.uniform1uiv(this.addr,t)}function S1(n,t){n.uniform2uiv(this.addr,t)}function b1(n,t){n.uniform3uiv(this.addr,t)}function E1(n,t){n.uniform4uiv(this.addr,t)}function T1(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pm,r[o])}function w1(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gm,r[o])}function A1(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_m,r[o])}function C1(n,t,e){const i=this.cache,s=t.length,r=Ha(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mm,r[o])}function R1(n){switch(n){case 5126:return u1;case 35664:return h1;case 35665:return d1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return x1;case 35668:case 35672:return v1;case 35669:case 35673:return y1;case 5125:return M1;case 36294:return S1;case 36295:return b1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}class P1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=c1(e.type)}}class D1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R1(e.type)}}class I1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Ld(n,t){n.seq.push(t),n.map[t.id]=t}function L1(n,t,e){const i=n.name,s=i.length;for(Vl.lastIndex=0;;){const r=Vl.exec(i),o=Vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ld(e,c===void 0?new P1(a,n,t):new D1(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new I1(a),Ld(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);L1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ud(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const U1=37297;let N1=0;function F1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function z1(n){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(n);let i;switch(t===e?i="":t===fa&&e===da?i="LinearDisplayP3ToLinearSRGB":t===da&&e===fa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ki:case Va:return[i,"LinearTransferOETF"];case Fn:case Pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+F1(n.getShaderSource(t),o)}else return s}function O1(n,t){const e=z1(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function B1(n,t){let e;switch(t){case Vx:e="Linear";break;case kx:e="Reinhard";break;case Hx:e="Cineon";break;case Gx:e="ACESFilmic";break;case Xx:e="AgX";break;case $x:e="Neutral";break;case Wx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Uo=new N;function V1(){le.getLuminanceCoefficients(Uo);const n=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function H1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function G1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ar(n){return n!==""}function Fd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(W1,$1)}const X1=new Map;function $1(n,t){let e=Zt[t];if(e===void 0){const i=X1.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(Y1,j1)}function j1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function K1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function J1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hp:t="ENVMAP_BLENDING_MULTIPLY";break;case Ox:t="ENVMAP_BLENDING_MIX";break;case Bx:t="ENVMAP_BLENDING_ADD";break}return t}function Q1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function tb(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=q1(e),c=K1(e),h=Z1(e),u=J1(e),d=Q1(e),m=k1(e),g=H1(r),_=s.createProgram();let f,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(f=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?B1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,O1("linearToOutputTexel",e.outputColorSpace),V1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=jc(o),o=Fd(o,e),o=zd(o,e),a=jc(a),a=Fd(a,e),a=zd(a,e),o=Od(o),a=Od(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+f+o,S=x+p+a,D=Ud(s,s.VERTEX_SHADER,v),P=Ud(s,s.FRAGMENT_SHADER,S);s.attachShader(_,D),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),$=s.getShaderInfoLog(P).trim();let nt=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,P);else{const H=Nd(s,D,"vertex"),X=Nd(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+H+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||$==="")&&(k=!1);k&&(E.diagnostics={runnable:nt,programLog:O,vertexShader:{log:z,prefix:f},fragmentShader:{log:$,prefix:p}})}s.deleteShader(D),s.deleteShader(P),R=new ta(s,_),U=G1(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let U;this.getAttributes=function(){return U===void 0&&T(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,U1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=P,this}let eb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ib(t),e.set(t,i)),i}}class ib{constructor(t){this.id=eb++,this.code=t,this.usedTimes=0}}function sb(n,t,e,i,s,r,o){const a=new Iu,l=new nb,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,E,O,z,$){const nt=z.fog,k=$.geometry,H=y.isMeshStandardMaterial?z.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),rt=X&&X.mapping===Ba?X.image.height:null,at=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Lt=ht!==void 0?ht.length:0;let Gt=0;k.morphAttributes.position!==void 0&&(Gt=1),k.morphAttributes.normal!==void 0&&(Gt=2),k.morphAttributes.color!==void 0&&(Gt=3);let st,pt,yt,vt;if(at){const an=Yn[at];st=an.vertexShader,pt=an.fragmentShader}else st=y.vertexShader,pt=y.fragmentShader,l.update(y),yt=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const $t=n.getRenderTarget(),Bt=$.isInstancedMesh===!0,Xt=$.isBatchedMesh===!0,te=!!y.map,I=!!y.matcap,b=!!X,Z=!!y.aoMap,tt=!!y.lightMap,J=!!y.bumpMap,j=!!y.normalMap,ct=!!y.displacementMap,it=!!y.emissiveMap,w=!!y.metalnessMap,M=!!y.roughnessMap,F=y.anisotropy>0,V=y.clearcoat>0,q=y.dispersion>0,Y=y.iridescence>0,gt=y.sheen>0,ft=y.transmission>0,mt=F&&!!y.anisotropyMap,zt=V&&!!y.clearcoatMap,ut=V&&!!y.clearcoatNormalMap,St=V&&!!y.clearcoatRoughnessMap,Ut=Y&&!!y.iridescenceMap,Ht=Y&&!!y.iridescenceThicknessMap,Ct=gt&&!!y.sheenColorMap,Yt=gt&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,he=!!y.specularColorMap,B=!!y.specularIntensityMap,wt=ft&&!!y.transmissionMap,et=ft&&!!y.thicknessMap,lt=!!y.gradientMap,Et=!!y.alphaMap,At=y.alphaTest>0,ee=!!y.alphaHash,Ue=!!y.extensions;let on=Gi;y.toneMapped&&($t===null||$t.isXRRenderTarget===!0)&&(on=n.toneMapping);const ie={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:pt,defines:y.defines,customVertexShaderID:yt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&$._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&$.instanceColor!==null,instancingMorph:Bt&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:$t===null?n.outputColorSpace:$t.isXRRenderTarget===!0?$t.texture.colorSpace:Ki,alphaToCoverage:!!y.alphaToCoverage,map:te,matcap:I,envMap:b,envMapMode:b&&X.mapping,envMapCubeUVHeight:rt,aoMap:Z,lightMap:tt,bumpMap:J,normalMap:j,displacementMap:m&&ct,emissiveMap:it,normalMapObjectSpace:j&&y.normalMapType===Kx,normalMapTangentSpace:j&&y.normalMapType===tm,metalnessMap:w,roughnessMap:M,anisotropy:F,anisotropyMap:mt,clearcoat:V,clearcoatMap:zt,clearcoatNormalMap:ut,clearcoatRoughnessMap:St,dispersion:q,iridescence:Y,iridescenceMap:Ut,iridescenceThicknessMap:Ht,sheen:gt,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:Ot,specularColorMap:he,specularIntensityMap:B,transmission:ft,transmissionMap:wt,thicknessMap:et,gradientMap:lt,opaque:y.transparent===!1&&y.blending===Zs&&y.alphaToCoverage===!1,alphaMap:Et,alphaTest:At,alphaHash:ee,combine:y.combine,mapUv:te&&f(y.map.channel),aoMapUv:Z&&f(y.aoMap.channel),lightMapUv:tt&&f(y.lightMap.channel),bumpMapUv:J&&f(y.bumpMap.channel),normalMapUv:j&&f(y.normalMap.channel),displacementMapUv:ct&&f(y.displacementMap.channel),emissiveMapUv:it&&f(y.emissiveMap.channel),metalnessMapUv:w&&f(y.metalnessMap.channel),roughnessMapUv:M&&f(y.roughnessMap.channel),anisotropyMapUv:mt&&f(y.anisotropyMap.channel),clearcoatMapUv:zt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&f(y.sheenRoughnessMap.channel),specularMapUv:Ot&&f(y.specularMap.channel),specularColorMapUv:he&&f(y.specularColorMap.channel),specularIntensityMapUv:B&&f(y.specularIntensityMap.channel),transmissionMapUv:wt&&f(y.transmissionMap.channel),thicknessMapUv:et&&f(y.thicknessMap.channel),alphaMapUv:Et&&f(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(j||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(te||Et),fog:!!nt,useFog:y.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:on,decodeVideoTexture:te&&y.map.isVideoTexture===!0&&le.getTransfer(y.map.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)E.push(O),E.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function D(y){const E=_[y.type];let O;if(E){const z=Yn[E];O=kv.clone(z.uniforms)}else O=y.uniforms;return O}function P(y,E){let O;for(let z=0,$=h.length;z<$;z++){const nt=h[z];if(nt.cacheKey===E){O=nt,++O.usedTimes;break}}return O===void 0&&(O=new tb(n,E,y,r),h.push(O)),O}function T(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:D,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:U}}function rb(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ob(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,m,g,_,f){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||ob),i.length>1&&i.sort(d||Vd),s.length>1&&s.sort(d||Vd)}function h(){for(let u=t,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ab(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new kd,n.set(i,[o])):s>=r.length?(o=new kd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function lb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Wt};break;case"SpotLight":e={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function cb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ub=0;function hb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function db(n){const t=new lb,e=cb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new be,o=new be;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,x=0,v=0,S=0,D=0,P=0,T=0;c.sort(hb);for(let U=0,y=c.length;U<y;U++){const E=c[U],O=E.color,z=E.intensity,$=E.distance,nt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],z);T++}else if(E.isDirectionalLight){const k=t.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const H=E.shadow,X=e.get(E);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=E.shadow.matrix,x++}i.directional[m]=k,m++}else if(E.isSpotLight){const k=t.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(O).multiplyScalar(z),k.distance=$,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[_]=k;const H=E.shadow;if(E.map&&(i.spotLightMap[D]=E.map,D++,H.updateMatrices(E),E.castShadow&&P++),i.spotLightMatrix[_]=H.matrix,E.castShadow){const X=e.get(E);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=nt,S++}_++}else if(E.isRectAreaLight){const k=t.get(E);k.color.copy(O).multiplyScalar(z),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[f]=k,f++}else if(E.isPointLight){const k=t.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){const H=E.shadow,X=e.get(E);X.shadowIntensity=H.intensity,X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=E.shadow.matrix,v++}i.point[g]=k,g++}else if(E.isHemisphereLight){const k=t.get(E);k.skyColor.copy(E.color).multiplyScalar(z),k.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[p]=k,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==f||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==D||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+D-P,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=T,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=f,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=D,R.numLightProbes=T,i.version=ub++)}function l(c,h){let u=0,d=0,m=0,g=0,_=0;const f=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:i}}function Hd(n){const t=new db(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fb(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Hd(n),t.set(s,[a])):r>=o.length?(a=new Hd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class pb extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mb extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xb(n,t,e){let i=new Lu;const s=new Vt,r=new Vt,o=new Ce,a=new pb({depthPacking:qx}),l=new mb,c={},h=e.maxTextureSize,u={[$i]:hn,[hn]:$i,[xn]:xn},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:gb,fragmentShader:_b}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let p=this.type;this.render=function(P,T,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const U=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==hi&&this.type===hi,$=p===hi&&this.type!==hi;for(let nt=0,k=P.length;nt<k;nt++){const H=P[nt],X=H.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const rt=X.getFrameExtents();if(s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||z===!0||$===!0){const ht=this.type!==hi?{minFilter:Cn,magFilter:Cn}:{};X.map!==null&&X.map.dispose(),X.map=new vs(s.x,s.y,ht),X.map.texture.name=H.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const at=X.getViewportCount();for(let ht=0;ht<at;ht++){const Lt=X.getViewport(ht);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),X.updateMatrices(H,ht),i=X.getFrustum(),S(T,R,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===hi&&x(X,R),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(U,y,E)};function x(P,T){const R=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vs(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(T,null,R,d,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(T,null,R,m,_,null)}function v(P,T,R,U){let y=null;const E=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,z=T.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let nt=$[z];nt===void 0&&(nt=y.clone(),$[z]=nt,T.addEventListener("dispose",D)),y=nt}if(y.visible=T.visible,y.wireframe=T.wireframe,U===hi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=n.properties.get(y);O.light=R}return y}function S(P,T,R,U,y){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===hi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const z=t.update(P),$=P.material;if(Array.isArray($)){const nt=z.groups;for(let k=0,H=nt.length;k<H;k++){const X=nt[k],rt=$[X.materialIndex];if(rt&&rt.visible){const at=v(P,rt,U,y);P.onBeforeShadow(n,P,T,R,z,at,X),n.renderBufferDirect(R,null,z,at,P,X),P.onAfterShadow(n,P,T,R,z,at,X)}}}else if($.visible){const nt=v(P,$,U,y);P.onBeforeShadow(n,P,T,R,z,nt,null),n.renderBufferDirect(R,null,z,nt,P,null),P.onAfterShadow(n,P,T,R,z,nt,null)}}const O=P.children;for(let z=0,$=O.length;z<$;z++)S(O[z],T,R,U,y)}function D(P){P.target.removeEventListener("dispose",D);for(const R in c){const U=c[R],y=P.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const vb={[uc]:hc,[dc]:mc,[fc]:gc,[nr]:pc,[hc]:uc,[mc]:dc,[gc]:fc,[pc]:nr};function yb(n){function t(){let B=!1;const wt=new Ce;let et=null;const lt=new Ce(0,0,0,0);return{setMask:function(Et){et!==Et&&!B&&(n.colorMask(Et,Et,Et,Et),et=Et)},setLocked:function(Et){B=Et},setClear:function(Et,At,ee,Ue,on){on===!0&&(Et*=Ue,At*=Ue,ee*=Ue),wt.set(Et,At,ee,Ue),lt.equals(wt)===!1&&(n.clearColor(Et,At,ee,Ue),lt.copy(wt))},reset:function(){B=!1,et=null,lt.set(-1,0,0,0)}}}function e(){let B=!1,wt=!1,et=null,lt=null,Et=null;return{setReversed:function(At){wt=At},setTest:function(At){At?yt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(At){et!==At&&!B&&(n.depthMask(At),et=At)},setFunc:function(At){if(wt&&(At=vb[At]),lt!==At){switch(At){case uc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case fc:n.depthFunc(n.EQUAL);break;case pc:n.depthFunc(n.GEQUAL);break;case mc:n.depthFunc(n.GREATER);break;case gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=At}},setLocked:function(At){B=At},setClear:function(At){Et!==At&&(n.clearDepth(At),Et=At)},reset:function(){B=!1,et=null,lt=null,Et=null}}}function i(){let B=!1,wt=null,et=null,lt=null,Et=null,At=null,ee=null,Ue=null,on=null;return{setTest:function(ie){B||(ie?yt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(ie){wt!==ie&&!B&&(n.stencilMask(ie),wt=ie)},setFunc:function(ie,an,ii){(et!==ie||lt!==an||Et!==ii)&&(n.stencilFunc(ie,an,ii),et=ie,lt=an,Et=ii)},setOp:function(ie,an,ii){(At!==ie||ee!==an||Ue!==ii)&&(n.stencilOp(ie,an,ii),At=ie,ee=an,Ue=ii)},setLocked:function(ie){B=ie},setClear:function(ie){on!==ie&&(n.clearStencil(ie),on=ie)},reset:function(){B=!1,wt=null,et=null,lt=null,Et=null,At=null,ee=null,Ue=null,on=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,v=null,S=null,D=null,P=new Wt(0,0,0),T=0,R=!1,U=null,y=null,E=null,O=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,k=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),nt=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),nt=k>=2);let X=null,rt={};const at=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),Lt=new Ce().fromArray(at),Gt=new Ce().fromArray(ht);function st(B,wt,et,lt){const Et=new Uint8Array(4),At=n.createTexture();n.bindTexture(B,At),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<et;ee++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(wt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return At}const pt={};pt[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),yt(n.DEPTH_TEST),r.setFunc(nr),tt(!1),J(Kh),yt(n.CULL_FACE),b(Hi);function yt(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function vt(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function $t(B,wt){return h[B]!==wt?(n.bindFramebuffer(B,wt),h[B]=wt,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=wt),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function Bt(B,wt){let et=d,lt=!1;if(B){et=u.get(wt),et===void 0&&(et=[],u.set(wt,et));const Et=B.textures;if(et.length!==Et.length||et[0]!==n.COLOR_ATTACHMENT0){for(let At=0,ee=Et.length;At<ee;At++)et[At]=n.COLOR_ATTACHMENT0+At;et.length=Et.length,lt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,lt=!0);lt&&n.drawBuffers(et)}function Xt(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const te={[cs]:n.FUNC_ADD,[Mx]:n.FUNC_SUBTRACT,[Sx]:n.FUNC_REVERSE_SUBTRACT};te[bx]=n.MIN,te[Ex]=n.MAX;const I={[Tx]:n.ZERO,[wx]:n.ONE,[Ax]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[Lx]:n.SRC_ALPHA_SATURATE,[Dx]:n.DST_COLOR,[Rx]:n.DST_ALPHA,[Cx]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Ix]:n.ONE_MINUS_DST_COLOR,[Px]:n.ONE_MINUS_DST_ALPHA,[Ux]:n.CONSTANT_COLOR,[Nx]:n.ONE_MINUS_CONSTANT_COLOR,[Fx]:n.CONSTANT_ALPHA,[zx]:n.ONE_MINUS_CONSTANT_ALPHA};function b(B,wt,et,lt,Et,At,ee,Ue,on,ie){if(B===Hi){g===!0&&(vt(n.BLEND),g=!1);return}if(g===!1&&(yt(n.BLEND),g=!0),B!==yx){if(B!==_||ie!==R){if((f!==cs||v!==cs)&&(n.blendEquation(n.FUNC_ADD),f=cs,v=cs),ie)switch(B){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,x=null,S=null,D=null,P.set(0,0,0),T=0,_=B,R=ie}return}Et=Et||wt,At=At||et,ee=ee||lt,(wt!==f||Et!==v)&&(n.blendEquationSeparate(te[wt],te[Et]),f=wt,v=Et),(et!==p||lt!==x||At!==S||ee!==D)&&(n.blendFuncSeparate(I[et],I[lt],I[At],I[ee]),p=et,x=lt,S=At,D=ee),(Ue.equals(P)===!1||on!==T)&&(n.blendColor(Ue.r,Ue.g,Ue.b,on),P.copy(Ue),T=on),_=B,R=!1}function Z(B,wt){B.side===xn?vt(n.CULL_FACE):yt(n.CULL_FACE);let et=B.side===hn;wt&&(et=!et),tt(et),B.blending===Zs&&B.transparent===!1?b(Hi):b(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);const lt=B.stencilWrite;o.setTest(lt),lt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(B){U!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),U=B)}function J(B){B!==xx?(yt(n.CULL_FACE),B!==y&&(B===Kh?n.cullFace(n.BACK):B===vx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),y=B}function j(B){B!==E&&(nt&&n.lineWidth(B),E=B)}function ct(B,wt,et){B?(yt(n.POLYGON_OFFSET_FILL),(O!==wt||z!==et)&&(n.polygonOffset(wt,et),O=wt,z=et)):vt(n.POLYGON_OFFSET_FILL)}function it(B){B?yt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function w(B){B===void 0&&(B=n.TEXTURE0+$-1),X!==B&&(n.activeTexture(B),X=B)}function M(B,wt,et){et===void 0&&(X===null?et=n.TEXTURE0+$-1:et=X);let lt=rt[et];lt===void 0&&(lt={type:void 0,texture:void 0},rt[et]=lt),(lt.type!==B||lt.texture!==wt)&&(X!==et&&(n.activeTexture(et),X=et),n.bindTexture(B,wt||pt[B]),lt.type=B,lt.texture=wt)}function F(){const B=rt[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(B){Lt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Lt.copy(B))}function Ct(B){Gt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function Yt(B,wt){let et=l.get(wt);et===void 0&&(et=new WeakMap,l.set(wt,et));let lt=et.get(B);lt===void 0&&(lt=n.getUniformBlockIndex(wt,B.name),et.set(B,lt))}function Ot(B,wt){const lt=l.get(wt).get(B);a.get(wt)!==lt&&(n.uniformBlockBinding(wt,lt,B.__bindingPointIndex),a.set(wt,lt))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,rt={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,v=null,S=null,D=null,P=new Wt(0,0,0),T=0,R=!1,U=null,y=null,E=null,O=null,z=null,Lt.set(0,0,n.canvas.width,n.canvas.height),Gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:yt,disable:vt,bindFramebuffer:$t,drawBuffers:Bt,useProgram:Xt,setBlending:b,setMaterial:Z,setFlipSided:tt,setCullFace:J,setLineWidth:j,setPolygonOffset:ct,setScissorTest:it,activeTexture:w,bindTexture:M,unbindTexture:F,compressedTexImage2D:V,compressedTexImage3D:q,texImage2D:St,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Ot,texStorage2D:zt,texStorage3D:ut,texSubImage2D:Y,texSubImage3D:gt,compressedTexSubImage2D:ft,compressedTexSubImage3D:mt,scissor:Ht,viewport:Ct,reset:he}}function Gd(n,t,e,i){const s=Mb(i);switch(e){case Yp:return n*t;case qp:return n*t;case Kp:return n*t*2;case Zp:return n*t/s.components*s.byteLength;case Au:return n*t/s.components*s.byteLength;case Jp:return n*t*2/s.components*s.byteLength;case Cu:return n*t*2/s.components*s.byteLength;case jp:return n*t*3/s.components*s.byteLength;case On:return n*t*4/s.components*s.byteLength;case Ru:return n*t*4/s.components*s.byteLength;case Yo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sc:case Ec:return Math.max(n,16)*Math.max(t,8)/4;case Mc:case bc:return Math.max(n,8)*Math.max(t,8)/2;case Tc:case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Hc:case Gc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Qp:case Wc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mb(n){switch(n){case wi:case Wp:return{byteLength:1,components:1};case jr:case Xp:case Qr:return{byteLength:2,components:1};case Tu:case wu:return{byteLength:2,components:4};case xs:case Eu:case _i:return{byteLength:4,components:1};case $p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Sb(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):ma("canvas")}function _(w,M,F){let V=1;const q=it(w);if((q.width>F||q.height>F)&&(V=F/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(V*q.width),gt=Math.floor(V*q.height);u===void 0&&(u=g(Y,gt));const ft=M?g(Y,gt):u;return ft.width=Y,ft.height=gt,ft.getContext("2d").drawImage(w,0,0,Y,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Y+"x"+gt+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==Cn&&w.minFilter!==vn}function p(w){n.generateMipmap(w)}function x(w,M,F,V,q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),M===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),M===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),M===n.RGBA){const gt=q?ha:le.getTransfer(V);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=gt===Te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(w,M){let F;return w?M===null||M===xs||M===rr?F=n.DEPTH24_STENCIL8:M===_i?F=n.DEPTH32F_STENCIL8:M===jr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xs||M===rr?F=n.DEPTH_COMPONENT24:M===_i?F=n.DEPTH_COMPONENT32F:M===jr&&(F=n.DEPTH_COMPONENT16),F}function S(w,M){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){const M=w.target;M.removeEventListener("dispose",D),T(M),M.isVideoTexture&&h.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),U(M)}function T(w){const M=i.get(w);if(M.__webglInit===void 0)return;const F=w.source,V=d.get(F);if(V){const q=V[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(w),Object.keys(V).length===0&&d.delete(F)}i.remove(w)}function R(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const F=w.source,V=d.get(F);delete V[M.__cacheKey],o.memory.textures--}function U(w){const M=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let q=0;q<M.__webglFramebuffer[V].length;q++)n.deleteFramebuffer(M.__webglFramebuffer[V][q]);else n.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)n.deleteFramebuffer(M.__webglFramebuffer[V]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=w.textures;for(let V=0,q=F.length;V<q;V++){const Y=i.get(F[V]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[V])}i.remove(w)}let y=0;function E(){y=0}function O(){const w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){const F=i.get(w);if(w.isVideoTexture&&j(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(F,w,M);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function nt(w,M){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Gt(F,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function k(w,M){const F=i.get(w);if(w.version>0&&F.__version!==w.version){Gt(F,w,M);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function H(w,M){const F=i.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const X={[vc]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[yc]:n.MIRRORED_REPEAT},rt={[Cn]:n.NEAREST,[Yx]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},at={[Zx]:n.NEVER,[iv]:n.ALWAYS,[Jx]:n.LESS,[em]:n.LEQUAL,[Qx]:n.EQUAL,[nv]:n.GEQUAL,[tv]:n.GREATER,[ev]:n.NOTEQUAL};function ht(w,M){if(M.type===_i&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===fl||M.magFilter===po||M.magFilter===fs||M.minFilter===vn||M.minFilter===fl||M.minFilter===po||M.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,X[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,X[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,X[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,rt[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==po&&M.minFilter!==fs||M.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",D));const V=M.source;let q=d.get(V);q===void 0&&(q={},d.set(V,q));const Y=z(M);if(Y!==w.__cacheKey){q[Y]===void 0&&(q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),q[Y].usedTimes++;const gt=q[w.__cacheKey];gt!==void 0&&(q[w.__cacheKey].usedTimes--,gt.usedTimes===0&&R(M)),w.__cacheKey=Y,w.__webglTexture=q[Y].texture}return F}function Gt(w,M,F){let V=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=n.TEXTURE_3D);const q=Lt(w,M),Y=M.source;e.bindTexture(V,w.__webglTexture,n.TEXTURE0+F);const gt=i.get(Y);if(Y.version!==gt.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const ft=le.getPrimaries(le.workingColorSpace),mt=M.colorSpace===Bi?null:le.getPrimaries(M.colorSpace),zt=M.colorSpace===Bi||ft===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ut=_(M.image,!1,s.maxTextureSize);ut=ct(M,ut);const St=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type);let Ht=x(M.internalFormat,St,Ut,M.colorSpace,M.isVideoTexture);ht(V,M);let Ct;const Yt=M.mipmaps,Ot=M.isVideoTexture!==!0,he=gt.__version===void 0||q===!0,B=Y.dataReady,wt=S(M,ut);if(M.isDepthTexture)Ht=v(M.format===or,M.type),he&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Ht,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ut.width,ut.height,0,St,Ut,null));else if(M.isDataTexture)if(Yt.length>0){Ot&&he&&e.texStorage2D(n.TEXTURE_2D,wt,Ht,Yt[0].width,Yt[0].height);for(let et=0,lt=Yt.length;et<lt;et++)Ct=Yt[et],Ot?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ut,Ct.data):e.texImage2D(n.TEXTURE_2D,et,Ht,Ct.width,Ct.height,0,St,Ut,Ct.data);M.generateMipmaps=!1}else Ot?(he&&e.texStorage2D(n.TEXTURE_2D,wt,Ht,ut.width,ut.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,St,Ut,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ut.width,ut.height,0,St,Ut,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ht,Yt[0].width,Yt[0].height,ut.depth);for(let et=0,lt=Yt.length;et<lt;et++)if(Ct=Yt[et],M.format!==On)if(St!==null)if(Ot){if(B)if(M.layerUpdates.size>0){const Et=Gd(Ct.width,Ct.height,M.format,M.type);for(const At of M.layerUpdates){const ee=Ct.data.subarray(At*Et/Ct.data.BYTES_PER_ELEMENT,(At+1)*Et/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,At,Ct.width,Ct.height,1,St,ee,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,ut.depth,St,Ct.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ht,Ct.width,Ct.height,ut.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,ut.depth,St,Ut,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ht,Ct.width,Ct.height,ut.depth,0,St,Ut,Ct.data)}else{Ot&&he&&e.texStorage2D(n.TEXTURE_2D,wt,Ht,Yt[0].width,Yt[0].height);for(let et=0,lt=Yt.length;et<lt;et++)Ct=Yt[et],M.format!==On?St!==null?Ot?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ht,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ut,Ct.data):e.texImage2D(n.TEXTURE_2D,et,Ht,Ct.width,Ct.height,0,St,Ut,Ct.data)}else if(M.isDataArrayTexture)if(Ot){if(he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ht,ut.width,ut.height,ut.depth),B)if(M.layerUpdates.size>0){const et=Gd(ut.width,ut.height,M.format,M.type);for(const lt of M.layerUpdates){const Et=ut.data.subarray(lt*et/ut.data.BYTES_PER_ELEMENT,(lt+1)*et/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,St,Ut,Et)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,St,Ut,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ut.width,ut.height,ut.depth,0,St,Ut,ut.data);else if(M.isData3DTexture)Ot?(he&&e.texStorage3D(n.TEXTURE_3D,wt,Ht,ut.width,ut.height,ut.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,St,Ut,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ut.width,ut.height,ut.depth,0,St,Ut,ut.data);else if(M.isFramebufferTexture){if(he)if(Ot)e.texStorage2D(n.TEXTURE_2D,wt,Ht,ut.width,ut.height);else{let et=ut.width,lt=ut.height;for(let Et=0;Et<wt;Et++)e.texImage2D(n.TEXTURE_2D,Et,Ht,et,lt,0,St,Ut,null),et>>=1,lt>>=1}}else if(Yt.length>0){if(Ot&&he){const et=it(Yt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ht,et.width,et.height)}for(let et=0,lt=Yt.length;et<lt;et++)Ct=Yt[et],Ot?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St,Ut,Ct):e.texImage2D(n.TEXTURE_2D,et,Ht,St,Ut,Ct);M.generateMipmaps=!1}else if(Ot){if(he){const et=it(ut);e.texStorage2D(n.TEXTURE_2D,wt,Ht,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ut,ut)}else e.texImage2D(n.TEXTURE_2D,0,Ht,St,Ut,ut);f(M)&&p(V),gt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function st(w,M,F){if(M.image.length!==6)return;const V=Lt(w,M),q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const Y=i.get(q);if(q.version!==Y.__version||V===!0){e.activeTexture(n.TEXTURE0+F);const gt=le.getPrimaries(le.workingColorSpace),ft=M.colorSpace===Bi?null:le.getPrimaries(M.colorSpace),mt=M.colorSpace===Bi||gt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const zt=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,St=[];for(let lt=0;lt<6;lt++)!zt&&!ut?St[lt]=_(M.image[lt],!0,s.maxCubemapSize):St[lt]=ut?M.image[lt].image:M.image[lt],St[lt]=ct(M,St[lt]);const Ut=St[0],Ht=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type),Yt=x(M.internalFormat,Ht,Ct,M.colorSpace),Ot=M.isVideoTexture!==!0,he=Y.__version===void 0||V===!0,B=q.dataReady;let wt=S(M,Ut);ht(n.TEXTURE_CUBE_MAP,M);let et;if(zt){Ot&&he&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,Ut.width,Ut.height);for(let lt=0;lt<6;lt++){et=St[lt].mipmaps;for(let Et=0;Et<et.length;Et++){const At=et[Et];M.format!==On?Ht!==null?Ot?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,At.width,At.height,Ht,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,Yt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,At.width,At.height,Ht,Ct,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,Yt,At.width,At.height,0,Ht,Ct,At.data)}}}else{if(et=M.mipmaps,Ot&&he){et.length>0&&wt++;const lt=it(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,St[lt].width,St[lt].height,Ht,Ct,St[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,St[lt].width,St[lt].height,0,Ht,Ct,St[lt].data);for(let Et=0;Et<et.length;Et++){const ee=et[Et].image[lt].image;Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,ee.width,ee.height,Ht,Ct,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,Yt,ee.width,ee.height,0,Ht,Ct,ee.data)}}else{Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ht,Ct,St[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Ht,Ct,St[lt]);for(let Et=0;Et<et.length;Et++){const At=et[Et];Ot?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,Ht,Ct,At.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,Yt,Ht,Ct,At.image[lt])}}}f(M)&&p(n.TEXTURE_CUBE_MAP),Y.__version=q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pt(w,M,F,V,q,Y){const gt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),mt=x(F.internalFormat,gt,ft,F.colorSpace);if(!i.get(M).__hasExternalTextures){const ut=Math.max(1,M.width>>Y),St=Math.max(1,M.height>>Y);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,Y,mt,ut,St,M.depth,0,gt,ft,null):e.texImage2D(q,Y,mt,ut,St,0,gt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,i.get(F).__webglTexture,0,tt(M)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,i.get(F).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(w,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const V=M.depthTexture,q=V&&V.isDepthTexture?V.type:null,Y=v(M.stencilBuffer,q),gt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=tt(M);J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Y,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Y,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Y,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,w)}else{const V=M.textures;for(let q=0;q<V.length;q++){const Y=V[q],gt=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),mt=x(Y.internalFormat,gt,ft,Y.colorSpace),zt=tt(M);F&&J(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,mt,M.width,M.height):J(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,mt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,mt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const V=i.get(M.depthTexture).__webglTexture,q=tt(M);if(M.depthTexture.format===Js)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(M.depthTexture.format===or)J(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function $t(w){const M=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),M.__depthDisposeCallback=q}M.__boundDepthTexture=V}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");vt(M.__webglFramebuffer,w)}else if(F){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=n.createRenderbuffer(),yt(M.__webglDepthbuffer[V],w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),yt(M.__webglDepthbuffer,w,!1);else{const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(w,M,F){const V=i.get(w);M!==void 0&&pt(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&$t(w)}function Xt(w){const M=w.texture,F=i.get(w),V=i.get(M);w.addEventListener("dispose",P);const q=w.textures,Y=w.isWebGLCubeRenderTarget===!0,gt=q.length>1;if(gt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=M.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let mt=0;mt<M.mipmaps.length;mt++)F.__webglFramebuffer[ft][mt]=n.createFramebuffer()}else F.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)F.__webglFramebuffer[ft]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ft=0,mt=q.length;ft<mt;ft++){const zt=i.get(q[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&J(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<q.length;ft++){const mt=q[ft];F.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);const zt=r.convert(mt.format,mt.colorSpace),ut=r.convert(mt.type),St=x(mt.internalFormat,zt,ut,mt.colorSpace,w.isXRRenderTarget===!0),Ut=tt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,St,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ht(n.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)pt(F.__webglFramebuffer[ft][mt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else pt(F.__webglFramebuffer[ft],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);f(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ft=0,mt=q.length;ft<mt;ft++){const zt=q[ft],ut=i.get(zt);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),ht(n.TEXTURE_2D,zt),pt(F.__webglFramebuffer,w,zt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),f(zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,V.__webglTexture),ht(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)pt(F.__webglFramebuffer[mt],w,M,n.COLOR_ATTACHMENT0,ft,mt);else pt(F.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,ft,0);f(M)&&p(ft),e.unbindTexture()}w.depthBuffer&&$t(w)}function te(w){const M=w.textures;for(let F=0,V=M.length;F<V;F++){const q=M[F];if(f(q)){const Y=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(q).__webglTexture;e.bindTexture(Y,gt),p(Y),e.unbindTexture()}}}const I=[],b=[];function Z(w){if(w.samples>0){if(J(w)===!1){const M=w.textures,F=w.width,V=w.height;let q=n.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(w),ft=M.length>1;if(ft)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const zt=i.get(M[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,q,n.NEAREST),l===!0&&(I.length=0,b.length=0,I.push(n.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(I.push(Y),b.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const zt=i.get(M[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function J(w){const M=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function ct(w,M){const F=w.colorSpace,V=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Ki&&F!==Bi&&(le.getTransfer(F)===Te?(V!==On||q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function it(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=$,this.setTexture2DArray=nt,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=J}function bb(n,t){function e(i,s=Bi){let r;const o=le.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wp)return n.BYTE;if(i===Xp)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===Eu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Yp)return n.ALPHA;if(i===jp)return n.RGB;if(i===On)return n.RGBA;if(i===qp)return n.LUMINANCE;if(i===Kp)return n.LUMINANCE_ALPHA;if(i===Js)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===Zp)return n.RED;if(i===Au)return n.RED_INTEGER;if(i===Jp)return n.RG;if(i===Cu)return n.RG_INTEGER;if(i===Ru)return n.RGBA_INTEGER;if(i===Yo||i===jo||i===qo||i===Ko)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===Sc||i===bc||i===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tc||i===wc||i===Ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tc||i===wc)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ac)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Pc||i===Dc||i===Ic||i===Lc||i===Uc||i===Nc||i===Fc||i===zc||i===Oc||i===Bc||i===Vc||i===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ic)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Hc||i===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zo)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qp||i===Wc||i===Xc||i===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Eb extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ye extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,i),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:wb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends Ss{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=new Cb,f=e.getContextAttributes();let p=null,x=null;const v=[],S=[],D=new Vt;let P=null;const T=new Tn;T.layers.enable(1),T.viewport=new Ce;const R=new Tn;R.layers.enable(2),R.viewport=new Ce;const U=[T,R],y=new Eb;y.layers.enable(1),y.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let pt=v[st];return pt===void 0&&(pt=new kl,v[st]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(st){let pt=v[st];return pt===void 0&&(pt=new kl,v[st]=pt),pt.getGripSpace()},this.getHand=function(st){let pt=v[st];return pt===void 0&&(pt=new kl,v[st]=pt),pt.getHandSpace()};function z(st){const pt=S.indexOf(st.inputSource);if(pt===-1)return;const yt=v[pt];yt!==void 0&&(yt.update(st.inputSource,st.frame,c||o),yt.dispatchEvent({type:st.type,data:st.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",nt);for(let st=0;st<v.length;st++){const pt=S[st];pt!==null&&(S[st]=null,v[st].disconnect(pt))}E=null,O=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,s=null,x=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",nt),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const pt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new vs(m.framebufferWidth,m.framebufferHeight,{format:On,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let pt=null,yt=null,vt=null;f.depth&&(vt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=f.stencil?or:Js,yt=f.stencil?rr:xs);const $t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new vs(d.textureWidth,d.textureHeight,{format:On,type:wi,depthTexture:new fm(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt(st){for(let pt=0;pt<st.removed.length;pt++){const yt=st.removed[pt],vt=S.indexOf(yt);vt>=0&&(S[vt]=null,v[vt].disconnect(yt))}for(let pt=0;pt<st.added.length;pt++){const yt=st.added[pt];let vt=S.indexOf(yt);if(vt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=S.length){S.push(yt),vt=Bt;break}else if(S[Bt]===null){S[Bt]=yt,vt=Bt;break}if(vt===-1)break}const $t=v[vt];$t&&$t.connect(yt)}}const k=new N,H=new N;function X(st,pt,yt){k.setFromMatrixPosition(pt.matrixWorld),H.setFromMatrixPosition(yt.matrixWorld);const vt=k.distanceTo(H),$t=pt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,Xt=$t[14]/($t[10]-1),te=$t[14]/($t[10]+1),I=($t[9]+1)/$t[5],b=($t[9]-1)/$t[5],Z=($t[8]-1)/$t[0],tt=(Bt[8]+1)/Bt[0],J=Xt*Z,j=Xt*tt,ct=vt/(-Z+tt),it=ct*-Z;if(pt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(it),st.translateZ(ct),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),$t[10]===-1)st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const w=Xt+ct,M=te+ct,F=J-it,V=j+(vt-it),q=I*te/M*w,Y=b*te/M*w;st.projectionMatrix.makePerspective(F,V,q,Y,w,M),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function rt(st,pt){pt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(pt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let pt=st.near,yt=st.far;_.texture!==null&&(_.depthNear>0&&(pt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=R.near=T.near=pt,y.far=R.far=T.far=yt,(E!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,O=y.far);const vt=st.parent,$t=y.cameras;rt(y,vt);for(let Bt=0;Bt<$t.length;Bt++)rt($t[Bt],vt);$t.length===2?X(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),at(st,y,vt)};function at(st,pt,yt){yt===null?st.matrix.copy(pt.matrixWorld):(st.matrix.copy(yt.matrixWorld),st.matrix.invert(),st.matrix.multiply(pt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=qr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ht=null;function Lt(st,pt){if(h=pt.getViewerPose(c||o),g=pt,h!==null){const yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let vt=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let Bt=0;Bt<yt.length;Bt++){const Xt=yt[Bt];let te=null;if(m!==null)te=m.getViewport(Xt);else{const b=u.getViewSubImage(d,Xt);te=b.viewport,Bt===0&&(t.setRenderTargetTextures(x,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(x))}let I=U[Bt];I===void 0&&(I=new Tn,I.layers.enable(Bt),I.viewport=new Ce,U[Bt]=I),I.matrix.fromArray(Xt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Xt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(te.x,te.y,te.width,te.height),Bt===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(I)}const $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")){const Bt=u.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let yt=0;yt<v.length;yt++){const vt=S[yt],$t=v[yt];vt!==null&&$t!==void 0&&$t.update(vt,pt,c||o)}ht&&ht(st,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),g=null}const Gt=new hm;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function(st){ht=st},this.dispose=function(){}}}const os=new ei,Pb=new be;function Db(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,lm(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,x,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===hn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===hn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,S=x.envMapRotation;v&&(f.envMap.value=v,os.copy(S),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),f.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(os)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,x,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=v*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ib(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",f));const D=v.program;i.updateUBOMapping(x,D);const P=t.render.frame;r[x.id]!==P&&(d(x),r[x.id]=P)}function h(x){const v=u();x.__bindingPointIndex=v;const S=n.createBuffer(),D=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],S=x.uniforms,D=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,T=S.length;P<T;P++){const R=Array.isArray(S[P])?S[P]:[S[P]];for(let U=0,y=R.length;U<y;U++){const E=R[U];if(m(E,P,U,D)===!0){const O=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let $=0;for(let nt=0;nt<z.length;nt++){const k=z[nt],H=_(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,O+$,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,v,S,D){const P=x.value,T=v+"_"+S;if(D[T]===void 0)return typeof P=="number"||typeof P=="boolean"?D[T]=P:D[T]=P.clone(),!0;{const R=D[T];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return D[T]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function g(x){const v=x.uniforms;let S=0;const D=16;for(let T=0,R=v.length;T<R;T++){const U=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,E=U.length;y<E;y++){const O=U[y],z=Array.isArray(O.value)?O.value:[O.value];for(let $=0,nt=z.length;$<nt;$++){const k=z[$],H=_(k),X=S%D,rt=X%H.boundary,at=X+rt;S+=rt,at!==0&&D-at<H.storage&&(S+=D-at),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=H.storage}}}const P=S%D;return P>0&&(S+=D-P),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){const v=x.target;v.removeEventListener("dispose",f);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Lb{constructor(t={}){const{canvas:e=yv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let S=!1,D=0,P=0,T=null,R=-1,U=null;const y=new Ce,E=new Ce;let O=null;const z=new Wt(0);let $=0,nt=e.width,k=e.height,H=1,X=null,rt=null;const at=new Ce(0,0,nt,k),ht=new Ce(0,0,nt,k);let Lt=!1;const Gt=new Lu;let st=!1,pt=!1;const yt=new be,vt=new be,$t=new N,Bt=new Ce,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function I(){return T===null?H:1}let b=i;function Z(C,G){return e.getContext(C,G)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bu}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",At,!1),b===null){const G="webgl2";if(b=Z(G,C),b===null)throw Z(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,J,j,ct,it,w,M,F,V,q,Y,gt,ft,mt,zt,ut,St,Ut,Ht,Ct,Yt,Ot,he,B;function wt(){tt=new OS(b),tt.init(),Ot=new bb(b,tt),J=new IS(b,tt,t,Ot),j=new yb(b),J.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),ct=new kS(b),it=new rb,w=new Sb(b,tt,j,it,J,Ot,ct),M=new US(v),F=new zS(v),V=new jv(b),he=new PS(b,V),q=new BS(b,V,ct,he),Y=new GS(b,q,V,ct),Ht=new HS(b,J,w),ut=new LS(it),gt=new sb(v,M,F,tt,J,he,ut),ft=new Db(v,it),mt=new ab,zt=new fb(tt),Ut=new RS(v,M,F,j,Y,d,l),St=new xb(v,Y,J),B=new Ib(b,ct,J,j),Ct=new DS(b,tt,ct),Yt=new VS(b,tt,ct),ct.programs=gt.programs,v.capabilities=J,v.extensions=tt,v.properties=it,v.renderLists=mt,v.shadowMap=St,v.state=j,v.info=ct}wt();const et=new Rb(v,b);this.xr=et,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(nt,k,!1))},this.getSize=function(C){return C.set(nt,k)},this.setSize=function(C,G,K=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=C,k=G,e.width=Math.floor(C*H),e.height=Math.floor(G*H),K===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(nt*H,k*H).floor()},this.setDrawingBufferSize=function(C,G,K){nt=C,k=G,H=K,e.width=Math.floor(C*K),e.height=Math.floor(G*K),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,G,K,Q){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,G,K,Q),j.viewport(y.copy(at).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,G,K,Q){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,G,K,Q),j.scissor(E.copy(ht).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){j.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(C=!0,G=!0,K=!0){let Q=0;if(C){let W=!1;if(T!==null){const _t=T.texture.format;W=_t===Ru||_t===Cu||_t===Au}if(W){const _t=T.texture.type,Tt=_t===wi||_t===xs||_t===jr||_t===rr||_t===Tu||_t===wu,Dt=Ut.getClearColor(),It=Ut.getClearAlpha(),jt=Dt.r,qt=Dt.g,Nt=Dt.b;Tt?(m[0]=jt,m[1]=qt,m[2]=Nt,m[3]=It,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=jt,g[1]=qt,g[2]=Nt,g[3]=It,b.clearBufferiv(b.COLOR,0,g))}else Q|=b.COLOR_BUFFER_BIT}G&&(Q|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(Q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",At,!1),mt.dispose(),zt.dispose(),it.dispose(),M.dispose(),F.dispose(),Y.dispose(),he.dispose(),B.dispose(),gt.dispose(),et.dispose(),et.removeEventListener("sessionstart",Gu),et.removeEventListener("sessionend",Wu),Ji.stop()};function lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=ct.autoReset,G=St.enabled,K=St.autoUpdate,Q=St.needsUpdate,W=St.type;wt(),ct.autoReset=C,St.enabled=G,St.autoUpdate=K,St.needsUpdate=Q,St.type=W}function At(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){const G=C.target;G.removeEventListener("dispose",ee),Ue(G)}function Ue(C){on(C),it.remove(C)}function on(C){const G=it.get(C).programs;G!==void 0&&(G.forEach(function(K){gt.releaseProgram(K)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,K,Q,W,_t){G===null&&(G=Xt);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,Dt=Rm(C,G,K,Q,W);j.setMaterial(Q,Tt);let It=K.index,jt=1;if(Q.wireframe===!0){if(It=q.getWireframeAttribute(K),It===void 0)return;jt=2}const qt=K.drawRange,Nt=K.attributes.position;let de=qt.start*jt,Ee=(qt.start+qt.count)*jt;_t!==null&&(de=Math.max(de,_t.start*jt),Ee=Math.min(Ee,(_t.start+_t.count)*jt)),It!==null?(de=Math.max(de,0),Ee=Math.min(Ee,It.count)):Nt!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Nt.count));const we=Ee-de;if(we<0||we===1/0)return;he.setup(W,Q,Dt,K,It);let fn,se=Ct;if(It!==null&&(fn=V.get(It),se=Yt,se.setIndex(fn)),W.isMesh)Q.wireframe===!0?(j.setLineWidth(Q.wireframeLinewidth*I()),se.setMode(b.LINES)):se.setMode(b.TRIANGLES);else if(W.isLine){let Ft=Q.linewidth;Ft===void 0&&(Ft=1),j.setLineWidth(Ft*I()),W.isLineSegments?se.setMode(b.LINES):W.isLineLoop?se.setMode(b.LINE_LOOP):se.setMode(b.LINE_STRIP)}else W.isPoints?se.setMode(b.POINTS):W.isSprite&&se.setMode(b.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)se.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ft=W._multiDrawStarts,ke=W._multiDrawCounts,re=W._multiDrawCount,In=It?V.get(It).bytesPerElement:1,bs=it.get(Q).currentProgram.getUniforms();for(let pn=0;pn<re;pn++)bs.setValue(b,"_gl_DrawID",pn),se.render(Ft[pn]/In,ke[pn])}else if(W.isInstancedMesh)se.renderInstances(de,we,W.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,Ft);se.renderInstances(de,we,ke)}else se.render(de,we)};function ie(C,G,K){C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=hn,C.needsUpdate=!0,ro(C,G,K),C.side=$i,C.needsUpdate=!0,ro(C,G,K),C.side=xn):ro(C,G,K)}this.compile=function(C,G,K=null){K===null&&(K=C),f=zt.get(K),f.init(G),x.push(f),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),C!==K&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();const Q=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _t=W.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Dt=_t[Tt];ie(Dt,K,W),Q.add(Dt)}else ie(_t,K,W),Q.add(_t)}),x.pop(),f=null,Q},this.compileAsync=function(C,G,K=null){const Q=this.compile(C,G,K);return new Promise(W=>{function _t(){if(Q.forEach(function(Tt){it.get(Tt).currentProgram.isReady()&&Q.delete(Tt)}),Q.size===0){W(C);return}setTimeout(_t,10)}tt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let an=null;function ii(C){an&&an(C)}function Gu(){Ji.stop()}function Wu(){Ji.start()}const Ji=new hm;Ji.setAnimationLoop(ii),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(C){an=C,et.setAnimationLoop(C),C===null?Ji.stop():Ji.start()},et.addEventListener("sessionstart",Gu),et.addEventListener("sessionend",Wu),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(G),G=et.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,T),f=zt.get(C,x.length),f.init(G),x.push(f),vt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Gt.setFromProjectionMatrix(vt),pt=this.localClippingEnabled,st=ut.init(this.clippingPlanes,pt),_=mt.get(C,p.length),_.init(),p.push(_),et.enabled===!0&&et.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&Wa(_t,G,-1/0,v.sortObjects)}Wa(C,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,rt),te=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,te&&Ut.addToRenderList(_,C),this.info.render.frame++,st===!0&&ut.beginShadows();const K=f.state.shadowsArray;St.render(K,C,G),st===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,W=_.transmissive;if(f.setupLights(),G.isArrayCamera){const _t=G.cameras;if(W.length>0)for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++){const It=_t[Tt];$u(Q,W,C,It)}te&&Ut.render(C);for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++){const It=_t[Tt];Xu(_,C,It,It.viewport)}}else W.length>0&&$u(Q,W,C,G),te&&Ut.render(C),Xu(_,C,G);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,G),he.resetDefaultState(),R=-1,U=null,x.pop(),x.length>0?(f=x[x.length-1],st===!0&&ut.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Wa(C,G,K,Q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Gt.intersectsSprite(C)){Q&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Tt=Y.update(C),Dt=C.material;Dt.visible&&_.push(C,Tt,Dt,K,Bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Gt.intersectsObject(C))){const Tt=Y.update(C),Dt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Bt.copy(Tt.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(Dt)){const It=Tt.groups;for(let jt=0,qt=It.length;jt<qt;jt++){const Nt=It[jt],de=Dt[Nt.materialIndex];de&&de.visible&&_.push(C,Tt,de,K,Bt.z,Nt)}}else Dt.visible&&_.push(C,Tt,Dt,K,Bt.z,null)}}const _t=C.children;for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++)Wa(_t[Tt],G,K,Q)}function Xu(C,G,K,Q){const W=C.opaque,_t=C.transmissive,Tt=C.transparent;f.setupLightsView(K),st===!0&&ut.setGlobalState(v.clippingPlanes,K),Q&&j.viewport(y.copy(Q)),W.length>0&&so(W,G,K),_t.length>0&&so(_t,G,K),Tt.length>0&&so(Tt,G,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function $u(C,G,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new vs(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Qr:wi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const _t=f.state.transmissionRenderTarget[Q.id],Tt=Q.viewport||y;_t.setSize(Tt.z,Tt.w);const Dt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(z),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),te&&Ut.render(K);const It=v.toneMapping;v.toneMapping=Gi;const jt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),st===!0&&ut.setGlobalState(v.clippingPlanes,Q),so(C,K,Q),w.updateMultisampleRenderTarget(_t),w.updateRenderTargetMipmap(_t),tt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,de=G.length;Nt<de;Nt++){const Ee=G[Nt],we=Ee.object,fn=Ee.geometry,se=Ee.material,Ft=Ee.group;if(se.side===xn&&we.layers.test(Q.layers)){const ke=se.side;se.side=hn,se.needsUpdate=!0,Yu(we,K,Q,fn,se,Ft),se.side=ke,se.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(_t),w.updateRenderTargetMipmap(_t))}v.setRenderTarget(Dt),v.setClearColor(z,$),jt!==void 0&&(Q.viewport=jt),v.toneMapping=It}function so(C,G,K){const Q=G.isScene===!0?G.overrideMaterial:null;for(let W=0,_t=C.length;W<_t;W++){const Tt=C[W],Dt=Tt.object,It=Tt.geometry,jt=Q===null?Tt.material:Q,qt=Tt.group;Dt.layers.test(K.layers)&&Yu(Dt,G,K,It,jt,qt)}}function Yu(C,G,K,Q,W,_t){C.onBeforeRender(v,G,K,Q,W,_t),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(v,G,K,Q,C,_t),W.transparent===!0&&W.side===xn&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,v.renderBufferDirect(K,G,Q,W,C,_t),W.side=$i,W.needsUpdate=!0,v.renderBufferDirect(K,G,Q,W,C,_t),W.side=xn):v.renderBufferDirect(K,G,Q,W,C,_t),C.onAfterRender(v,G,K,Q,W,_t)}function ro(C,G,K){G.isScene!==!0&&(G=Xt);const Q=it.get(C),W=f.state.lights,_t=f.state.shadowsArray,Tt=W.state.version,Dt=gt.getParameters(C,W.state,_t,G,K),It=gt.getProgramCacheKey(Dt);let jt=Q.programs;Q.environment=C.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(C.isMeshStandardMaterial?F:M).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",ee),jt=new Map,Q.programs=jt);let qt=jt.get(It);if(qt!==void 0){if(Q.currentProgram===qt&&Q.lightsStateVersion===Tt)return qu(C,Dt),qt}else Dt.uniforms=gt.getUniforms(C),C.onBeforeCompile(Dt,v),qt=gt.acquireProgram(Dt,It),jt.set(It,qt),Q.uniforms=Dt.uniforms;const Nt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),qu(C,Dt),Q.needsLights=Dm(C),Q.lightsStateVersion=Tt,Q.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.directionalShadowMap.value=W.state.directionalShadowMap,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotShadowMap.value=W.state.spotShadowMap,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMap.value=W.state.pointShadowMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=qt,Q.uniformsList=null,qt}function ju(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=ta.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function qu(C,G){const K=it.get(C);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Rm(C,G,K,Q,W){G.isScene!==!0&&(G=Xt),w.resetTextureUnits();const _t=G.fog,Tt=Q.isMeshStandardMaterial?G.environment:null,Dt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,It=(Q.isMeshStandardMaterial?F:M).get(Q.envMap||Tt),jt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Nt=!!K.morphAttributes.position,de=!!K.morphAttributes.normal,Ee=!!K.morphAttributes.color;let we=Gi;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(we=v.toneMapping);const fn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=fn!==void 0?fn.length:0,Ft=it.get(Q),ke=f.state.lights;if(st===!0&&(pt===!0||C!==U)){const bn=C===U&&Q.id===R;ut.setState(Q,C,bn)}let re=!1;Q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ke.state.version||Ft.outputColorSpace!==Dt||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==It||Q.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ut.numPlanes||Ft.numIntersection!==ut.numIntersection)||Ft.vertexAlphas!==jt||Ft.vertexTangents!==qt||Ft.morphTargets!==Nt||Ft.morphNormals!==de||Ft.morphColors!==Ee||Ft.toneMapping!==we||Ft.morphTargetsCount!==se)&&(re=!0):(re=!0,Ft.__version=Q.version);let In=Ft.currentProgram;re===!0&&(In=ro(Q,G,W));let bs=!1,pn=!1,Xa=!1;const De=In.getUniforms(),Ri=Ft.uniforms;if(j.useProgram(In.program)&&(bs=!0,pn=!0,Xa=!0),Q.id!==R&&(R=Q.id,pn=!0),bs||U!==C){J.reverseDepthBuffer?(yt.copy(C.projectionMatrix),Sv(yt),bv(yt),De.setValue(b,"projectionMatrix",yt)):De.setValue(b,"projectionMatrix",C.projectionMatrix),De.setValue(b,"viewMatrix",C.matrixWorldInverse);const bn=De.map.cameraPosition;bn!==void 0&&bn.setValue(b,$t.setFromMatrixPosition(C.matrixWorld)),J.logarithmicDepthBuffer&&De.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&De.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,pn=!0,Xa=!0)}if(W.isSkinnedMesh){De.setOptional(b,W,"bindMatrix"),De.setOptional(b,W,"bindMatrixInverse");const bn=W.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),De.setValue(b,"boneTexture",bn.boneTexture,w))}W.isBatchedMesh&&(De.setOptional(b,W,"batchingTexture"),De.setValue(b,"batchingTexture",W._matricesTexture,w),De.setOptional(b,W,"batchingIdTexture"),De.setValue(b,"batchingIdTexture",W._indirectTexture,w),De.setOptional(b,W,"batchingColorTexture"),W._colorsTexture!==null&&De.setValue(b,"batchingColorTexture",W._colorsTexture,w));const $a=K.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0)&&Ht.update(W,K,In),(pn||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,De.setValue(b,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ri.envMap.value=It,Ri.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Ri.envMapIntensity.value=G.environmentIntensity),pn&&(De.setValue(b,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Pm(Ri,Xa),_t&&Q.fog===!0&&ft.refreshFogUniforms(Ri,_t),ft.refreshMaterialUniforms(Ri,Q,H,k,f.state.transmissionRenderTarget[C.id]),ta.upload(b,ju(Ft),Ri,w)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ta.upload(b,ju(Ft),Ri,w),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&De.setValue(b,"center",W.center),De.setValue(b,"modelViewMatrix",W.modelViewMatrix),De.setValue(b,"normalMatrix",W.normalMatrix),De.setValue(b,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const bn=Q.uniformsGroups;for(let Ya=0,Im=bn.length;Ya<Im;Ya++){const Ku=bn[Ya];B.update(Ku,In),B.bind(Ku,In)}}return In}function Pm(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Dm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,G,K){it.get(C.texture).__webglTexture=G,it.get(C.depthTexture).__webglTexture=K;const Q=it.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const K=it.get(C);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,K=0){T=C,D=G,P=K;let Q=!0,W=null,_t=!1,Tt=!1;if(C){const It=it.get(C);if(It.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(b.FRAMEBUFFER,null),Q=!1;else if(It.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(It.__hasExternalTextures)w.rebindTextures(C,it.get(C.texture).__webglTexture,it.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Nt=C.depthTexture;if(It.__boundDepthTexture!==Nt){if(Nt!==null&&it.has(Nt)&&(C.width!==Nt.image.width||C.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Tt=!0);const qt=it.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?W=qt[G][K]:W=qt[G],_t=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?W=it.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[K]:W=qt,y.copy(C.viewport),E.copy(C.scissor),O=C.scissorTest}else y.copy(at).multiplyScalar(H).floor(),E.copy(ht).multiplyScalar(H).floor(),O=Lt;if(j.bindFramebuffer(b.FRAMEBUFFER,W)&&Q&&j.drawBuffers(C,W),j.viewport(y),j.scissor(E),j.setScissorTest(O),_t){const It=it.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+G,It.__webglTexture,K)}else if(Tt){const It=it.get(C.texture),jt=G||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,K||0,jt)}R=-1},this.readRenderTargetPixels=function(C,G,K,Q,W,_t,Tt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){j.bindFramebuffer(b.FRAMEBUFFER,Dt);try{const It=C.texture,jt=It.format,qt=It.type;if(!J.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Q&&K>=0&&K<=C.height-W&&b.readPixels(G,K,Q,W,Ot.convert(jt),Ot.convert(qt),_t)}finally{const It=T!==null?it.get(T).__webglFramebuffer:null;j.bindFramebuffer(b.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(C,G,K,Q,W,_t,Tt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){const It=C.texture,jt=It.format,qt=It.type;if(!J.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-Q&&K>=0&&K<=C.height-W){j.bindFramebuffer(b.FRAMEBUFFER,Dt);const Nt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Nt),b.bufferData(b.PIXEL_PACK_BUFFER,_t.byteLength,b.STREAM_READ),b.readPixels(G,K,Q,W,Ot.convert(jt),Ot.convert(qt),0);const de=T!==null?it.get(T).__webglFramebuffer:null;j.bindFramebuffer(b.FRAMEBUFFER,de);const Ee=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Mv(b,Ee,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Nt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,_t),b.deleteBuffer(Nt),b.deleteSync(Ee),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,K=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-K),W=Math.floor(C.image.width*Q),_t=Math.floor(C.image.height*Q),Tt=G!==null?G.x:0,Dt=G!==null?G.y:0;w.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,Tt,Dt,W,_t),j.unbindTexture()},this.copyTextureToTexture=function(C,G,K=null,Q=null,W=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,K=null);let _t,Tt,Dt,It,jt,qt;K!==null?(_t=K.max.x-K.min.x,Tt=K.max.y-K.min.y,Dt=K.min.x,It=K.min.y):(_t=C.image.width,Tt=C.image.height,Dt=0,It=0),Q!==null?(jt=Q.x,qt=Q.y):(jt=0,qt=0);const Nt=Ot.convert(G.format),de=Ot.convert(G.type);w.setTexture2D(G,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,G.unpackAlignment);const Ee=b.getParameter(b.UNPACK_ROW_LENGTH),we=b.getParameter(b.UNPACK_IMAGE_HEIGHT),fn=b.getParameter(b.UNPACK_SKIP_PIXELS),se=b.getParameter(b.UNPACK_SKIP_ROWS),Ft=b.getParameter(b.UNPACK_SKIP_IMAGES),ke=C.isCompressedTexture?C.mipmaps[W]:C.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ke.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ke.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(b.UNPACK_SKIP_ROWS,It),C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,W,jt,qt,_t,Tt,Nt,de,ke.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,W,jt,qt,ke.width,ke.height,Nt,ke.data):b.texSubImage2D(b.TEXTURE_2D,W,jt,qt,_t,Tt,Nt,de,ke),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ee),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,we),b.pixelStorei(b.UNPACK_SKIP_PIXELS,fn),b.pixelStorei(b.UNPACK_SKIP_ROWS,se),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ft),W===0&&G.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(C,G,K=null,Q=null,W=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0);let _t,Tt,Dt,It,jt,qt,Nt,de,Ee;const we=C.isCompressedTexture?C.mipmaps[W]:C.image;K!==null?(_t=K.max.x-K.min.x,Tt=K.max.y-K.min.y,Dt=K.max.z-K.min.z,It=K.min.x,jt=K.min.y,qt=K.min.z):(_t=we.width,Tt=we.height,Dt=we.depth,It=0,jt=0,qt=0),Q!==null?(Nt=Q.x,de=Q.y,Ee=Q.z):(Nt=0,de=0,Ee=0);const fn=Ot.convert(G.format),se=Ot.convert(G.type);let Ft;if(G.isData3DTexture)w.setTexture3D(G,0),Ft=b.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Ft=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,G.unpackAlignment);const ke=b.getParameter(b.UNPACK_ROW_LENGTH),re=b.getParameter(b.UNPACK_IMAGE_HEIGHT),In=b.getParameter(b.UNPACK_SKIP_PIXELS),bs=b.getParameter(b.UNPACK_SKIP_ROWS),pn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,we.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,we.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,It),b.pixelStorei(b.UNPACK_SKIP_ROWS,jt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qt),C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Ft,W,Nt,de,Ee,_t,Tt,Dt,fn,se,we.data):G.isCompressedArrayTexture?b.compressedTexSubImage3D(Ft,W,Nt,de,Ee,_t,Tt,Dt,fn,we.data):b.texSubImage3D(Ft,W,Nt,de,Ee,_t,Tt,Dt,fn,se,we),b.pixelStorei(b.UNPACK_ROW_LENGTH,ke),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,re),b.pixelStorei(b.UNPACK_SKIP_PIXELS,In),b.pixelStorei(b.UNPACK_SKIP_ROWS,bs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,pn),W===0&&G.generateMipmaps&&b.generateMipmap(Ft),j.unbindTexture()},this.initRenderTarget=function(C){it.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){D=0,P=0,T=null,j.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pu?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Va?"display-p3":"srgb"}}class Nu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new Nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ub extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new N;class ga{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ga(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xm extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const yr=new N,Hs=new N,Gs=new N,Ws=new Vt,Mr=new Vt,vm=new be,No=new N,Sr=new N,Fo=new N,Wd=new Vt,Hl=new Vt,Xd=new Vt;class Fb extends Le{constructor(t=new xm){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nb(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ga(i,3,0,!1)),ks.setAttribute("uv",new ga(i,2,3,!1))}this.geometry=ks,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),vm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;zo(No.set(-.5,-.5,0),Gs,o,Hs,s,r),zo(Sr.set(.5,-.5,0),Gs,o,Hs,s,r),zo(Fo.set(.5,.5,0),Gs,o,Hs,s,r),Wd.set(0,0),Hl.set(1,0),Xd.set(1,1);let a=t.ray.intersectTriangle(No,Sr,Fo,!1,yr);if(a===null&&(zo(Sr.set(-.5,.5,0),Gs,o,Hs,s,r),Hl.set(0,1),a=t.ray.intersectTriangle(No,Fo,Sr,!1,yr),a===null))return;const l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:wn.getInterpolation(yr,No,Sr,Fo,Wd,Hl,Xd,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zo(n,t,e,i,s,r){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Mr.x=r*Ws.x-s*Ws.y,Mr.y=s*Ws.x+r*Ws.y):Mr.copy(Ws),n.copy(t),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(vm)}class Sn extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new N,xa=new N,$d=new be,br=new no,Oo=new eo,Gl=new N,Yd=new N;class ji extends Le{constructor(t=new ue,e=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_a.distanceTo(xa);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;$d.copy(s).invert(),br.copy(t.ray).applyMatrix4($d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=c){const p=h.getX(_),x=h.getX(_+1),v=Bo(this,t,br,l,p,x);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(m),p=Bo(this,t,br,l,_,f);p&&e.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=c){const p=Bo(this,t,br,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Bo(this,t,br,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(_a,xa,Gl,Yd)>i)return;Gl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gl);if(!(l<t.near||l>t.far))return{distance:l,point:Yd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const jd=new N,qd=new N;class Fu extends ji{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)jd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jd.distanceTo(qd);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zu extends ji{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ym extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kd=new be,qc=new no,Vo=new eo,ko=new N;class zb extends Le{constructor(t=new ue,e=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Kd.copy(s).invert(),qc.copy(t.ray).applyMatrix4(Kd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);ko.fromBufferAttribute(u,f),Zd(ko,f,l,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)ko.fromBufferAttribute(u,g),Zd(ko,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zd(n,t,e,i,s,r,o){const a=qc.distanceSqToPoint(n);if(a<e){const l=new N;qc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Mm extends rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ga extends ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,h=new Vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=i+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ni extends ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const _=[],f=i/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(m,2));function x(){const S=new N,D=new N;let P=0;const T=(e-t)/i;for(let R=0;R<=r;R++){const U=[],y=R/r,E=y*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,$=z*l+a,nt=Math.sin($),k=Math.cos($);D.x=E*nt,D.y=-y*i+f,D.z=E*k,u.push(D.x,D.y,D.z),S.set(nt,T,k).normalize(),d.push(S.x,S.y,S.z),m.push(z,1-y),U.push(g++)}_.push(U)}for(let R=0;R<s;R++)for(let U=0;U<r;U++){const y=_[U][R],E=_[U+1][R],O=_[U+1][R+1],z=_[U][R+1];t>0&&(h.push(y,E,z),P+=3),e>0&&(h.push(E,O,z),P+=3)}c.addGroup(p,P,0),p+=P}function v(S){const D=g,P=new Vt,T=new N;let R=0;const U=S===!0?t:e,y=S===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;const E=g;for(let O=0;O<=s;O++){const $=O/s*l+a,nt=Math.cos($),k=Math.sin($);T.x=U*k,T.y=f*y,T.z=U*nt,u.push(T.x,T.y,T.z),d.push(0,y,0),P.x=nt*.5+.5,P.y=k*.5*y+.5,m.push(P.x,P.y),g++}for(let O=0;O<s;O++){const z=D+O,$=E+O;S===!0?h.push($,$+1,z):h.push($+1,$,z),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ou extends ni{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ou(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bu extends ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,m=new N,g=new Vt;for(let _=0;_<=s;_++){for(let f=0;f<=i;f++){const p=r+f/i*o;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const f=_*(i+1);for(let p=0;p<i;p++){const x=p+f,v=x,S=x+i+1,D=x+i+2,P=x+1;a.push(v,S,P),a.push(S,D,P)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class io extends ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,m=[],g=[],_=[],f=[];for(let p=0;p<=i;p++){const x=[],v=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let D=0;D<=e;D++){const P=D/e;u.x=-t*Math.cos(s+P*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+P*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(P+S,1-v),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const v=h[p][x+1],S=h[p][x],D=h[p+1][x],P=h[p+1][x+1];(p!==0||o>0)&&m.push(v,S,P),(p!==i-1||l<Math.PI)&&m.push(S,D,P)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vu extends ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,f=m/i*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,f=(s+1)*(m-1)+g-1,p=(s+1)*(m-1)+g,x=(s+1)*m+g;o.push(_,f,x),o.push(f,p,x)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ob extends ue{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new N,r=new N;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,m=u.count;for(let g=d,_=d+m;g<_;g+=3)for(let f=0;f<3;f++){const p=a.getX(g+f),x=a.getX(g+(f+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,x),Jd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Jd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ce(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Jd(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class lr extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tm,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sm extends Sn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class bm extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bb extends bm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wl=new be,Qd=new N,tf=new N;class Vb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Qd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qd),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kb extends Vb{constructor(){super(new dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hb extends bm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ef(){return performance.now()}const nf=new be;class Wb{constructor(t,e,i=0,s=1/0){this.ray=new no(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(t,e=!0,i=[]){return Kc(t,this,i,e),i.sort(sf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kc(t[s],this,i,e);return i.sort(sf),i}}function sf(n,t){return n.distance-t.distance}function Kc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}class rf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xb extends Fu{constructor(t=10,e=10,i=4473924,s=8947848){i=new Wt(i),s=new Wt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new ue;h.setAttribute("position",new ce(l,3)),h.setAttribute("color",new ce(c,3));const u=new Sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const of=new N;let Ho,Xl;class $b extends Le{constructor(t=new N(0,0,1),e=new N(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",Ho===void 0&&(Ho=new ue,Ho.setAttribute("position",new ce([0,0,0,0,1,0],3)),Xl=new ni(0,.5,1,5,1),Xl.translate(0,-.5,0)),this.position.copy(e),this.line=new ji(Ho,new Sn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ge(Xl,new Rn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{of.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(of,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Yb extends Fu{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ue;s.setAttribute("position",new ce(e,3)),s.setAttribute("color",new ce(i,3));const r=new Sn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Wt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jb extends Ss{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);const af={type:"change"},ku={type:"start"},Em={type:"end"},Go=new no,lf=new pi,qb=Math.cos(70*Jo.DEG2RAD),Fe=new N,ln=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$l=1e-6;class Kb extends jb{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ys,this._lastTargetPosition=new N,this._quat=new ys().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rf,this._sphericalDelta=new rf,this._scale=1,this._panOffset=new N,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new N,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jb.bind(this),this._onPointerDown=Zb.bind(this),this._onPointerUp=Qb.bind(this),this._onContextMenu=oE.bind(this),this._onMouseWheel=nE.bind(this),this._onKeyDown=iE.bind(this),this._onTouchStart=sE.bind(this),this._onTouchMove=rE.bind(this),this._onMouseDown=tE.bind(this),this._onMouseMove=eE.bind(this),this._interceptControlDown=aE.bind(this),this._interceptControlUp=lE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<qb?this.object.lookAt(this.target):(lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$l||this._lastTargetPosition.distanceToSquared(this.target)>$l?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Jb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Qb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Em),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(ku)}function eE(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function nE(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(ku),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Em))}function iE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function sE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(ku)}function rE(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function oE(n){this.enabled!==!1&&n.preventDefault()}function aE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var cE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Tm={exports:{}};(function(n,t){(function(e,i){n.exports=i()})(cE,function(){var e=function(){function i(m){return o.appendChild(m.dom),m}function s(m){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===m?"block":"none";r=m}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),s(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=i(new e.Panel("FPS","#0ff","#002")),u=i(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new e.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:o,addPanel:i,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(u.update(m-a,200),m>l+1e3&&(h.update(1e3*c/(m-l),100),l=m,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:s}};return e.Panel=function(i,s,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,m=2*c,g=3*c,_=15*c,f=74*c,p=30*c,x=document.createElement("canvas");x.width=h,x.height=u,x.style.cssText="width:80px;height:48px";var v=x.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=r,v.fillRect(0,0,h,u),v.fillStyle=s,v.fillText(i,d,m),v.fillRect(g,_,f,p),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g,_,f,p),{dom:x,update:function(S,D){o=Math.min(o,S),a=Math.max(a,S),v.fillStyle=r,v.globalAlpha=1,v.fillRect(0,0,h,_),v.fillStyle=s,v.fillText(l(S)+" "+i+" ("+l(o)+"-"+l(a)+")",d,m),v.drawImage(x,g+c,_,f-c,p,g,_,f-c,p),v.fillRect(g+f-c,_,c,p),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g+f-c,_,c,l((1-S/D)*p))}}},e})})(Tm);var hE=Tm.exports;const dE=uE(hE),wm={radar:2271231,sam:16726832,jammer:11552511},Am=16723285,fE={start:3066993,end:15158332,via:15844367},Xs=new Wt;function pE(n,t,e){const i=Math.max(0,Math.min(1,n/t));return i<.25?e.setRGB(.83+i*.3,.76+i*.25,.52):i<.55?e.setRGB(.36-(i-.25)*.4,.55-(i-.25)*.15,.28):i<.8?e.setRGB(.34+(i-.55)*.9,.31+(i-.55)*.8,.28):e.setRGB(.9,.92,.95),e}function mE(n){const t=n.gridSize,{size:e}=n.params,i=new ue,s=new Float32Array(t*t*3),r=new Float32Array(t*t*3),o=[];let a=0;for(let _=0;_<t;_++)for(let f=0;f<t;f++){const p=f/(t-1)*e-n.halfSize,x=_/(t-1)*e-n.halfSize,v=n.heights[_*t+f];s[a]=p,s[a+1]=v,s[a+2]=x,a+=3}for(let _=0;_<t-1;_++)for(let f=0;f<t-1;f++){const p=_*t+f,x=p+1,v=p+t,S=v+1;o.push(p,v,x,x,v,S)}i.setAttribute("position",new dn(s,3)),i.setAttribute("color",new dn(r,3)),i.setIndex(o),i.computeVertexNormals();const l=new lr({vertexColors:!0,roughness:.95,metalness:.02,flatShading:!1}),c=new ge(i,l);c.receiveShadow=!0,c.name="terrain";const h=Math.max(...n.heights,1),u=i.getAttribute("color"),d=new Wt,m=new Wt(Am),g=(_,f,p)=>{let x=0;for(let v=0;v<t;v++)for(let S=0;S<t;S++){const D=s[x*3],P=s[x*3+2],T=s[x*3+1];if(pE(T,h,Xs),p){const R=Math.min(1,_(D,P));R>.02&&(d.setHSL(.02*(1-R),.95,.5),Xs.lerp(d,Math.min(.75,R*.8)));const U=Math.min(1,f(D,P));U>.02&&Xs.lerp(m,Math.min(.7,U*.8))}u.setXYZ(x,Xs.r,Xs.g,Xs.b),x++}u.needsUpdate=!0};return g(()=>0,()=>0,!1),{mesh:c,applyOverlay:g}}function cf(n){const t=new Ye;t.userData.entityId=n.id,t.userData.entityType="threat";const i=new Wt(wm[n.kind]).clone();i.offsetHSL(0,0,(n.level-3)*.04);const s=Math.max(1,n.heightMax-n.heightMin),r=new ni(n.radius,n.radius,s,48,1,!0),o=new Rn({color:i,transparent:!0,opacity:n.opacity,side:xn,depthWrite:!1}),a=new ge(r,o);a.position.set(n.position.x,(n.heightMin+n.heightMax)/2,n.position.z),t.add(a);const l=new Sn({color:i,transparent:!0,opacity:.9});for(const u of[n.heightMin+.5,n.heightMax]){const d=new zu(new ue().setFromPoints(Hu(n.radius,u)),l);d.position.set(n.position.x,0,n.position.z),t.add(d)}const c=new ge(new Ga(n.radius,48),new Rn({color:i,transparent:!0,opacity:.08,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(n.position.x,.5,n.position.z),t.add(c);const h=new ge(new ni(1.2,1.2,s,8),new Rn({color:i}));return h.position.set(n.position.x,n.heightMin+s/2,n.position.z),t.add(h),t}function Hu(n,t){const e=[];for(let i=0;i<64;i++){const s=i/64*Math.PI*2;e.push(new N(Math.cos(s)*n,t,Math.sin(s)*n))}return e}function uf(n){const t=new Ye;t.userData.entityId=n.id,t.userData.entityType="nofly";const e=new Wt(Am),i=Math.max(1,n.heightMax-n.heightMin),s=new ge(new ni(n.radius,n.radius,i,48,1,!0),new Rn({color:e,transparent:!0,opacity:.16,side:xn,depthWrite:!1}));s.position.set(n.position.x,(n.heightMin+n.heightMax)/2,n.position.z),t.add(s);const r=new Fu(new Ob(new ni(n.radius,n.radius,i,24,4,!0)),new Sn({color:e,transparent:!0,opacity:.55}));r.position.copy(s.position),t.add(r);for(const o of[.5,n.heightMax]){const a=new zu(new ue().setFromPoints(Hu(n.radius,o)),new Sn({color:e,linewidth:2}));a.position.set(n.position.x,0,n.position.z),t.add(a)}return t}function hf(n,t){const e=mu(t,n.position.x,n.position.z)-.3,i=new ge(new yi(n.size.x,n.height,n.size.z),new lr({color:10134445,roughness:.8,metalness:.15}));return i.position.set(n.position.x,e+n.height/2,n.position.z),i.castShadow=!0,i.receiveShadow=!0,i.userData.entityId=n.id,i.userData.entityType="obstacle",i}function gE(n,t,e){const i=new Ye;i.userData.entityId=n,i.userData.entityType="waypoint";const s=fE[t],r=new ge(new io(7,20,16),new lr({color:s,emissive:s,emissiveIntensity:.45,roughness:.4}));i.add(r);const o=new ge(new Vu(10,.8,8,32),new Rn({color:s}));o.rotation.x=Math.PI/2,i.add(o);const a=Zc(e,`#${new Wt(s).getHexString()}`);return a.position.set(0,16,0),i.add(a),i}function Zc(n,t="#ffffff"){const e=document.createElement("canvas"),i=e.getContext("2d"),s=44;i.font=`bold ${s}px sans-serif`;const r=Math.ceil(i.measureText(n).width)+24;e.width=r,e.height=s+20,i.font=`bold ${s}px sans-serif`,i.fillStyle="rgba(15,20,30,0.65)",i.fillRect(0,0,e.width,e.height),i.fillStyle=t,i.textBaseline="middle",i.fillText(n,12,e.height/2);const o=new Mm(e);o.minFilter=vn;const a=new xm({map:o,depthTest:!1,transparent:!0}),l=new Fb(a),c=.5;return l.scale.set(e.width*c*.5,e.height*c*.5,1),l}function df(){const n=new Ye,t=new lr({color:2899536,roughness:.4,metalness:.4}),e=new lr({color:1752220,emissive:1752220,emissiveIntensity:.3}),i=new ge(new yi(5,2,6),t);n.add(i);const s=new ge(new Ou(1.6,3,4),e);s.rotation.x=-Math.PI/2,s.position.z=4,n.add(s);const r=new yi(1.1,.8,1.1),o=new yi(7,.15,.6),a=[],l=[[3.4,3.4],[-3.4,3.4],[3.4,-3.4],[-3.4,-3.4]];for(const[c,h]of l){const u=new ge(r,t);u.scale.set(Math.abs(c)/1.5,1,Math.abs(h)/1.5),u.position.set(c/2,.3,h/2),u.rotation.y=Math.sign(c)===Math.sign(h)?Math.PI/4:-Math.PI/4,n.add(u);const d=new ge(new ni(.5,.5,1.2,8),t);d.position.set(c,.8,h),n.add(d);const m=new ge(o,e);m.position.set(c,1.6,h),n.add(m),a.push(m)}return n.scale.setScalar(1.2),{group:n,rotors:a}}function ff(n,t={}){const e=new ue().setFromPoints(n.map(r=>new N(r.x,r.y,r.z)));t.vertexColors&&e.setAttribute("color",new dn(t.vertexColors,3));const i=new Sn({color:t.color??16777215,transparent:!0,opacity:t.opacity??1,vertexColors:!!t.vertexColors}),s=new ji(e,i);return s.frustumCulled=!1,s}function _E(n=14){const t=new ge(new Bu(n,n+2,48),new Rn({color:16769126,side:xn,transparent:!0,opacity:.9,depthTest:!1}));return t.rotation.x=-Math.PI/2,t.renderOrder=99,t}function pf(n){const t=new Ye;t.userData.entityId=n.id,t.userData.entityType="dynamic";const e=new Wt(n.color||"#ff8f1f");let i,s=null;const r=n.kind==="threat"?n.threatRadius:n.radius;if(n.kind==="obstacle"){const c=new ge(new io(n.radius,20,16),new lr({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,metalness:.3}));c.castShadow=!0,i=c,t.add(c)}else{const c=Math.max(1,n.heightMax-n.heightMin);s=new Rn({color:e,transparent:!0,opacity:n.active?.24:.05,side:xn,depthWrite:!1});const h=new ge(new ni(r,r,c,40,1,!0),s);h.position.y=(n.heightMin+n.heightMax)/2,i=h,t.add(h);const u=new ge(new Ga(r,40),new Rn({color:e,transparent:!0,opacity:.1,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.6,t.add(u)}const o=new zu(new ue().setFromPoints(Hu(r,1)),new Sn({color:e,transparent:!0,opacity:.9}));t.add(o);const a=new ji(new ue,new Sm({color:e,dashSize:8,gapSize:6,transparent:!0,opacity:.7}));a.frustumCulled=!1,t.add(a);const l=new $b(new N(0,0,1),new N(0,0,0),n.radius*2.2,e.getHex(),n.radius*.7,n.radius*.45);return t.add(l),t.visible=n.active,{group:t,rangeRing:o,body:i,predictLine:a,arrow:l,pulseMaterial:s}}function xE(n,t){const e=new ue().setFromPoints(t.map(i=>new N(i.x,1.5,i.z)));n.geometry.dispose(),n.geometry=e,n.computeLineDistances()}function Yl(n,t,e=.5,i=!1){const s=i?new Sm({color:t,transparent:!0,opacity:e,dashSize:6,gapSize:5}):new Sn({color:t,transparent:!0,opacity:e}),r=new ji(new ue().setFromPoints(n),s);return i&&r.computeLineDistances(),r.frustumCulled=!1,r}function vE(n,t=16726832,e=5){const i=new ue().setFromPoints(n.map(o=>new N(o.x,o.y,o.z))),s=new ym({color:t,size:e*2,sizeAttenuation:!0,transparent:!0,opacity:.95,depthTest:!1}),r=new zb(i,s);return r.frustumCulled=!1,r.renderOrder=50,r}class yE{constructor(t,e,i){bt(this,"container");bt(this,"sceneStore");bt(this,"simStore");bt(this,"renderer");bt(this,"scene");bt(this,"camera");bt(this,"controls");bt(this,"stats");bt(this,"raycaster",new Wb);bt(this,"pointer",new Vt);bt(this,"terrainView",null);bt(this,"terrain",null);bt(this,"env",null);bt(this,"zoneGroup",new Ye);bt(this,"dynamicGroup",new Ye);bt(this,"waypointGroup",new Ye);bt(this,"pathGroup",new Ye);bt(this,"candidateGroup",new Ye);bt(this,"overlayGroup",new Ye);bt(this,"drone",null);bt(this,"ghostDrone",null);bt(this,"selectRing");bt(this,"dynamicMeshes",new Map);bt(this,"violationPoints",null);bt(this,"replanToast",null);bt(this,"hazardMarker",null);bt(this,"hazardKey",null);bt(this,"rawLine",null);bt(this,"smoothLine",null);bt(this,"drag",null);bt(this,"dragPlane",new pi);bt(this,"dragOffset",new N);bt(this,"downPos",{x:0,y:0});bt(this,"moved",!1);bt(this,"raf",0);bt(this,"clock",new Gb);bt(this,"resizeObserver");bt(this,"disposed",!1);bt(this,"onPointerDown",t=>{if(t.button!==0)return;this.updatePointer(t),this.downPos={x:t.clientX,y:t.clientY},this.moved=!1;const e=this.sceneStore.editMode,i=this.pickTerrain();if(e==="select"){const r=this.pickEntity();if(r){const o=r.userData.entityId,a=r.userData.entityType;this.sceneStore.select(o),this.drag={type:a,id:o,pointerId:t.pointerId},this.controls.enabled=!1;const l=new N;r.getWorldPosition(l),this.dragPlane.set(new N(0,1,0),-l.y);const c=this.rayToPlane(t);c?this.dragOffset.copy(l).sub(c):this.dragOffset.set(0,0,0),this.renderer.domElement.style.cursor="grabbing"}else this.sceneStore.select(null);return}if(!i)return;const s={x:i.x,y:i.y,z:i.z};if(e==="add-threat")s.y=0,this.sceneStore.addThreatAt(s,"radar");else if(e==="add-nofly")s.y=0,this.sceneStore.addNoFlyAt(s);else if(e==="add-obstacle")s.y=0,this.sceneStore.addObstacleAt(s),this.syncZones();else if(e==="add-dynamic")s.y=0,this.sceneStore.addDynamicAt(s),this.syncDynamics();else if(e==="add-waypoint"){const r=this.getEnvironment();s.y=Math.max(r.groundHeight(s.x,s.z)+this.sceneStore.planParams.clearance+5,this.sceneStore.planParams.cruiseAlt),this.sceneStore.addWaypointAt(s),this.syncWaypoints()}this.simStore.markDirty()});bt(this,"onPointerMove",t=>{if(this.drag&&t.pointerId===this.drag.pointerId){Math.abs(t.clientX-this.downPos.x)+Math.abs(t.clientY-this.downPos.y)>3&&(this.moved=!0);const e=this.rayToPlane(t);if(!e)return;e.add(this.dragOffset),this.applyDragPosition(e);return}if(this.sceneStore.editMode==="select"){this.updatePointer(t);const e=this.pickEntity();this.renderer.domElement.style.cursor=e?"grab":"default"}else this.renderer.domElement.style.cursor="crosshair"});bt(this,"onPointerUp",t=>{this.drag&&t.pointerId===this.drag.pointerId&&(this.drag=null,this.controls.enabled=this.simStore.cameraMode!=="follow",this.renderer.domElement.style.cursor="default",this.moved&&this.simStore.autoReplan&&this.simStore.plan())});bt(this,"onContextMenu",t=>t.preventDefault());bt(this,"animate",()=>{var i,s;if(this.disposed)return;this.raf=requestAnimationFrame(this.animate),(i=this.stats)==null||i.begin();const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;this.simStore.advance(t),this.updateDrone(t),this.updateDynamics(e),this.updateGhost(),this.updateReplanToast(),this.updateHazardMarker(e),this.simStore.playing&&this.recolorPath(),this.updateSelectRing(),this.simStore.cameraMode==="follow"&&this.updateFollowCamera(),this.controls.update(),this.renderer.render(this.scene,this.camera),(s=this.stats)==null||s.end()});this.container=t,this.sceneStore=e,this.simStore=i,this.initRenderer(),this.initScene(),this.selectRing=_E(),this.selectRing.visible=!1,this.scene.add(this.selectRing),this.scene.add(this.zoneGroup,this.dynamicGroup,this.waypointGroup,this.pathGroup,this.candidateGroup,this.overlayGroup),this.rebuildTerrain(),this.syncZones(),this.syncDynamics(),this.syncWaypoints(),this.syncPaths(),this.ensureDrone(),this.ensureGhostDrone(),this.bindEvents(),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.animate()}initRenderer(){const t=document.createElement("canvas");this.renderer=new Lb({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.capabilities.isWebGL2||console.warn("当前环境不支持 WebGL 2.0，已回退到 WebGL1 渲染"),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kp,this.renderer.outputColorSpace=Fn,this.container.appendChild(t);try{this.stats=new dE,this.stats.showPanel(0),this.stats.dom.style.position="absolute",this.stats.dom.style.left="8px",this.stats.dom.style.top="8px",this.stats.dom.style.zIndex="10",this.container.appendChild(this.stats.dom)}catch{this.stats=void 0}}initScene(){this.scene=new Ub,this.scene.background=new Wt(857382),this.scene.fog=new Nu(857382,1400,3200);const t=this.container.clientWidth,e=this.container.clientHeight;this.camera=new Tn(55,t/e,.5,8e3),this.camera.position.set(620,480,720),this.controls=new Kb(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.minDistance=30,this.controls.maxDistance=2600,this.controls.target.set(0,60,0);const i=new Bb(12376319,3359018,.9);this.scene.add(i);const s=new Hb(16773848,1.6);s.position.set(500,800,300),s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=700;s.shadow.camera.left=-r,s.shadow.camera.right=r,s.shadow.camera.top=r,s.shadow.camera.bottom=-r,s.shadow.camera.far=2400,this.scene.add(s);const o=new Xb(1e3,40,3824256,2109514);o.material.transparent=!0,o.material.opacity=.35,this.scene.add(o);const a=new Yb(60);a.position.set(-500,2,-500),this.scene.add(a)}getEnvironment(){return this.env||(this.env=new Up(this.sceneStore.terrain,this.sceneStore.threats,this.sceneStore.noflyZones,this.sceneStore.obstacles,this.sceneStore.dynamics)),this.env}getDynamicEnv(){return this.getEnvironment()}rebuildTerrain(){this.terrainView&&(this.scene.remove(this.terrainView.mesh),this.terrainView.mesh.geometry.dispose(),this.terrainView.mesh.material.dispose()),this.terrain=Lp(this.sceneStore.terrain),this.env=null,this.terrainView=mE(this.terrain),this.scene.add(this.terrainView.mesh),this.applyHeatmap(),this.syncZones()}syncZones(){this.disposeGroup(this.zoneGroup);for(const t of this.sceneStore.threats)this.zoneGroup.add(cf(t));for(const t of this.sceneStore.noflyZones)this.zoneGroup.add(uf(t));if(this.terrain)for(const t of this.sceneStore.obstacles)this.zoneGroup.add(hf(t,this.terrain));this.applyHeatmap()}syncDynamics(){this.disposeGroup(this.dynamicGroup),this.dynamicMeshes.clear();for(const t of this.sceneStore.dynamics){const e=pf(t);this.dynamicMeshes.set(t.id,e),this.dynamicGroup.add(e.group)}}refreshDynamic(t){const e=this.dynamicMeshes.get(t);e&&(this.dynamicGroup.remove(e.group),this.disposeObject(e.group),this.dynamicMeshes.delete(t));const i=this.sceneStore.dynamics.find(s=>s.id===t);if(i){const s=pf(i);this.dynamicMeshes.set(i.id,s),this.dynamicGroup.add(s.group)}}updateDynamics(t){const e=this.simStore.simTime;for(const i of this.sceneStore.dynamics){const s=this.dynamicMeshes.get(i.id);if(!s)continue;const r=this.getDynamicEnv().stateAt(i,e);if(s.group.visible=r.active,!r.active)continue;const o=r.position;s.group.position.set(o.x,o.y,o.z);const a=oc(i,e+.5),l=new N(a.x-o.x,0,a.z-o.z);l.lengthSq()>1e-6&&(l.normalize(),s.arrow.setDirection(l));const c=i.predictHorizon,h=[];for(let u=1;u<=14;u++)h.push(oc(i,e+c*u/14));if(xE(s.predictLine,h),s.pulseMaterial){const u=.16+.1*(.5+.5*Math.sin(t*3));s.pulseMaterial.opacity=u}}}refreshEntity(t){const e=this.zoneGroup.children.findIndex(o=>o.userData.entityId===t);if(e>=0){const o=this.zoneGroup.children[e];this.zoneGroup.remove(o),this.disposeObject(o)}const i=this.sceneStore.threats.find(o=>o.id===t);i&&this.zoneGroup.add(cf(i));const s=this.sceneStore.noflyZones.find(o=>o.id===t);s&&this.zoneGroup.add(uf(s));const r=this.sceneStore.obstacles.find(o=>o.id===t);r&&this.terrain&&this.zoneGroup.add(hf(r,this.terrain)),this.applyHeatmap()}syncWaypoints(){this.disposeGroup(this.waypointGroup);const t={start:"起点",end:"终点",via:"途经点"};let e=0;for(const i of this.sceneStore.waypoints){const s=i.role==="via"?`途经${++e}`:t[i.role],r=gE(i.id,i.role,s);r.position.set(i.position.x,i.position.y,i.position.z),this.waypointGroup.add(r)}}findWaypointObject(t){return this.waypointGroup.children.find(e=>e.userData.entityId===t)}syncPaths(){this.rawLine&&(this.pathGroup.remove(this.rawLine),this.rawLine.geometry.dispose(),this.rawLine.material.dispose(),this.rawLine=null),this.smoothLine&&(this.pathGroup.remove(this.smoothLine),this.smoothLine.geometry.dispose(),this.smoothLine.material.dispose(),this.smoothLine=null);const t=this.simStore;if(t.rawPath.length>=2&&(this.rawLine=ff(t.rawPath,{color:9413567,opacity:.4}),this.pathGroup.add(this.rawLine)),t.smoothPath.length>=2){const e=this.pathVertexColors(t.smoothPath);this.smoothLine=ff(t.smoothPath,{vertexColors:e,opacity:.98}),this.pathGroup.add(this.smoothLine)}this.syncCandidates(),this.syncViolationPoints()}syncCandidates(){this.disposeGroup(this.candidateGroup);const t=this.simStore;if(t.showCandidates){for(const e of t.candidates.slice(0,28)){if(e.points.length<2)continue;const i=Yl(e.points.map(s=>new N(s.x,s.y,s.z)),5078187,.18,!1);this.candidateGroup.add(i)}for(const e of t.localCandidates.slice(0,18)){if(e.length<2)continue;const i=Yl(e.map(s=>new N(s.x,s.y,s.z)),16756768,.35,!1);this.candidateGroup.add(i)}if(t.replanWindow.length===2){const[e,i]=t.replanWindow,s=Yl([new N(e.x,e.y,e.z),new N(i.x,i.y,i.z)],16769126,.9,!0);this.candidateGroup.add(s)}}}syncViolationPoints(){var s,r;this.violationPoints&&(this.overlayGroup.remove(this.violationPoints),this.disposeObject(this.violationPoints),this.violationPoints=null);const t=this.simStore,e=((r=(s=t.stats)==null?void 0:s.constraints)==null?void 0:r.violationIndices)??[];if(e.length===0||t.smoothPath.length===0)return;const i=e.map(o=>t.smoothPath[o]).filter(o=>!!o);i.length>0&&(this.violationPoints=vE(i,16726832,4),this.overlayGroup.add(this.violationPoints))}pathVertexColors(t){const e=this.getDynamicEnv(),i=new Float32Array(t.length*3),s=new Wt,r=this.sceneStore.planParams.clearance,o=this.simStore.simTime;for(let a=0;a<t.length;a++){if(this.simStore.showClearanceMap){const l=t[a];let h=l.y-e.groundHeight(l.x,l.z);for(const d of this.sceneStore.obstacles){const m=Math.max(Math.abs(l.x-d.position.x)-d.size.x/2,0),g=Math.max(Math.abs(l.z-d.position.z)-d.size.z/2,0),_=Math.max(d.position.y+d.height-l.y,0),f=Math.hypot(m,g,_);f<h&&(h=f)}const u=Math.max(0,Math.min(1,h/Math.max(r,1)));s.setHSL(.33*u,.9,.5)}else{const l=Math.min(1,e.totalThreatAt(t[a],o)*.9);s.setHSL(.33-l*.33,.9,.55)}i[a*3]=s.r,i[a*3+1]=s.g,i[a*3+2]=s.b}return i}recolorPath(){if(!this.smoothLine||this.simStore.smoothPath.length<2)return;const t=this.smoothLine.geometry,e=this.pathVertexColors(this.simStore.smoothPath),i=t.getAttribute("color");i.array.set(e),i.needsUpdate=!0}applyHeatmap(){if(!this.terrainView)return;const t=this.getEnvironment();this.terrainView.applyOverlay((e,i)=>t.threatIntensity({x:e,y:1,z:i}),(e,i)=>t.noflyPenalty({x:e,y:1,z:i}),this.simStore.showThreatHeatmap)}ensureDrone(){this.drone||(this.drone=df(),this.scene.add(this.drone.group));const t=this.simStore;if(t.trajectory.length>0){const e=t.sampleAt(t.simTime);e&&this.drone.group.position.set(e.position.x,e.position.y,e.position.z)}else{const e=this.sceneStore.startPoint;e&&this.drone.group.position.copy(mf(e.position))}}ensureGhostDrone(){if(!this.ghostDrone){const t=df();t.group.traverse(e=>{const i=e;if(i.material){const s=i.material;s.transparent=!0,s.opacity=.4,s.color=new Wt(16732771),s.emissive=new Wt(8003371)}}),t.group.visible=!1,this.scene.add(t.group),this.ghostDrone=t.group}}bindEvents(){const t=this.renderer.domElement;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),t.addEventListener("contextmenu",this.onContextMenu)}updatePointer(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1}pickEntity(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[...this.zoneGroup.children,...this.dynamicGroup.children,...this.waypointGroup.children],e=this.raycaster.intersectObjects(t,!0);for(const i of e){let s=i.object;for(;s;){if(s.userData.entityId)return s;s=s.parent}}return null}pickTerrain(){if(!this.terrainView)return null;this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObject(this.terrainView.mesh,!1);return t.length>0?t[0].point.clone():null}rayToPlane(t){this.updatePointer(t),this.raycaster.setFromCamera(this.pointer,this.camera);const e=new N;return this.raycaster.ray.intersectPlane(this.dragPlane,e)?e:null}applyDragPosition(t){if(!this.drag)return;const{id:e,type:i}=this.drag,s=this.sceneStore.terrain.size/2-10;t.x=Jo.clamp(t.x,-s,s),t.z=Jo.clamp(t.z,-s,s);const r=this.getEnvironment();if(i==="waypoint"){const o=this.sceneStore.waypoints.find(l=>l.id===e);if(!o)return;const a=r.groundHeight(t.x,t.z)+this.sceneStore.planParams.clearance;t.y=Math.max(o.position.y,a),o.position={x:t.x,y:t.y,z:t.z}}else if(i==="threat"){const o=this.sceneStore.threats.find(a=>a.id===e);if(!o)return;o.position={x:t.x,y:0,z:t.z},this.refreshEntity(e)}else if(i==="nofly"){const o=this.sceneStore.noflyZones.find(a=>a.id===e);if(!o)return;o.position={x:t.x,y:0,z:t.z},this.refreshEntity(e)}else if(i==="obstacle"){const o=this.sceneStore.obstacles.find(a=>a.id===e);if(!o)return;o.position={x:t.x,y:0,z:t.z},this.refreshEntity(e)}else if(i==="dynamic"){const o=this.sceneStore.dynamics.find(c=>c.id===e);if(!o)return;const a=o.position.x,l=o.position.z;o.position={x:t.x,y:0,z:t.z},o.motion==="linear"&&(o.target={x:o.target.x+(t.x-a),y:0,z:o.target.z+(t.z-l)}),this.refreshDynamic(e)}this.simStore.markDirty()}setCameraMode(t){if(this.controls.enabled=t!=="follow",this.camera.up.set(0,1,0),t==="top"){const e=this.sceneStore.terrain.size*.9;this.camera.position.set(.01,e,.01),this.controls.target.set(0,0,0)}else t==="orbit"&&(this.camera.position.set(620,480,720),this.controls.target.set(0,60,0));this.controls.update()}focusSelected(){const t=this.sceneStore.selectedId;if(!t)return;const e=this.zoneGroup.children.find(s=>s.userData.entityId===t)??this.waypointGroup.children.find(s=>s.userData.entityId===t);if(!e)return;const i=new N;e.getWorldPosition(i),this.controls.target.copy(i),this.camera.position.set(i.x+180,i.y+160,i.z+180),this.controls.update()}updateDrone(t){if(!this.drone)return;const e=this.simStore,i=this.drone.group;if(e.trajectory.length>0){const r=e.sampleAt(e.simTime);r&&(i.position.set(r.position.x,r.position.y,r.position.z),Math.hypot(r.velocity.x,r.velocity.z)>.5&&(i.rotation.y=Math.atan2(r.velocity.x,r.velocity.z),i.rotation.x=Jo.clamp(-Math.atan2(r.velocity.y,Math.hypot(r.velocity.x,r.velocity.z))*.5,-.4,.4)),e.setDroneTransform(r.position,i.rotation.y))}else{const r=this.sceneStore.startPoint;r&&i.position.copy(mf(r.position))}const s=e.playing?1+t*28:t*6;for(const r of this.drone.rotors)r.rotation.y+=s}updateGhost(){if(!this.ghostDrone)return;const t=this.simStore;if(this.ghostDrone.visible=t.showTracking&&t.tracking.length>0,!this.ghostDrone.visible)return;const e=t.trajectory,i=t.simTime;let s=0,r=e.length-1;for(;s<r-1;){const a=s+r>>1;e[a].time<=i?s=a:r=a}const o=t.tracking[s];o&&(this.ghostDrone.position.set(o.pos.x,o.pos.y,o.pos.z),this.ghostDrone.rotation.y=o.yaw)}updateReplanToast(){const t=this.simStore,e=t.lastReplanEvent;if(e&&(this.replanToast||(this.replanToast=Zc("","#ffd166"),this.replanToast.renderOrder=200,this.scene.add(this.replanToast))),this.replanToast&&e){const i={"threat-approach":"⚠ 威胁接近","collision-risk":"⚠ 碰撞风险","yaw-deviation":"⚠ 偏航过大","range-anomaly":"⚠ 航程异常",manual:"⚠ 突发威胁"};if(t.simTime-e.time<4){const s=this.replanToast.material;"map"in s&&s.map&&this.drawToastTexture(s,`${i[e.reason]??"⚠ 重规划"} · ${e.detail}`);const r=t.dronePosition;this.replanToast.position.set(r.x,r.y+40,r.z),this.replanToast.visible=!0}else this.replanToast.visible=!1}}drawToastTexture(t,e){const i=t.map,s=document.createElement("canvas"),r=s.getContext("2d"),o=36;r.font=`bold ${o}px sans-serif`;const a=Math.ceil(r.measureText(e).width)+36;s.width=a,s.height=o+24,r.font=`bold ${o}px sans-serif`,r.fillStyle="rgba(40,18,8,0.85)",r.fillRect(0,0,s.width,s.height),r.strokeStyle="#ffb020",r.lineWidth=3,r.strokeRect(1.5,1.5,s.width-3,s.height-3),r.fillStyle="#ffd166",r.textBaseline="middle",r.fillText(e,18,s.height/2);const l=new Mm(s);l.minFilter=vn,t.map=l,t.needsUpdate=!0,i==null||i.dispose();const c=.55;this.replanToast.scale.set(s.width*c*.5,s.height*c*.5,1)}updateHazardMarker(t){const e=this.simStore,i=e.lastReplanEvent,s=e.hazardPoint;if(!!!(i&&s&&e.simTime-i.time<4)){this.hazardMarker&&(this.scene.remove(this.hazardMarker),this.disposeObject(this.hazardMarker),this.hazardMarker=null,this.hazardKey=null);return}const o=`${s.x.toFixed(1)},${s.y.toFixed(1)},${s.z.toFixed(1)}`;(!this.hazardMarker||this.hazardKey!==o)&&(this.hazardMarker&&(this.scene.remove(this.hazardMarker),this.disposeObject(this.hazardMarker)),this.hazardMarker=this.createHazardMarker(s),this.hazardKey=o,this.scene.add(this.hazardMarker));const a=1+.18*(.5+.5*Math.sin(t*5)),l=Math.max(0,4-(e.simTime-i.time)),c=Math.min(1,l);this.hazardMarker.scale.setScalar(a),this.hazardMarker.traverse(h=>{const u=h,d=u.material;if(d&&"opacity"in d){const m=u.userData.baseOpacity??1;d.opacity=m*c,d.transparent=!0}})}createHazardMarker(t){const e=new Ye,i=16726832,s=this.terrain?this.simGroundHeight(t.x,t.z):0,r=t.y>5?t.y:s+26,o=new Rn({color:i,transparent:!0,opacity:.95,depthTest:!1}),a=new ge(new io(9,18,14),o);a.userData.baseOpacity=.95,a.renderOrder=120,e.add(a);const l=[new N(0,s-r+1,0),new N(0,0,0)],c=new ue().setFromPoints(l),h=new ji(c,new Sn({color:i,transparent:!0,opacity:.8}));h.material.userData.baseOpacity=.8,h.renderOrder=119,e.add(h);const u=[],d=26;for(let _=0;_<=64;_++){const f=_/64*Math.PI*2;u.push(new N(Math.cos(f)*d,s+1.2-r,Math.sin(f)*d))}const m=new ji(new ue().setFromPoints(u),new Sn({color:i,transparent:!0,opacity:.95}));m.material.userData.baseOpacity=.95,m.renderOrder=119,e.add(m);const g=Zc("⚠ 风险点","#ff5a4d");return g.position.set(0,22,0),g.renderOrder=121,e.add(g),e.position.set(t.x,r,t.z),e}simGroundHeight(t,e){return this.terrain?mu(this.terrain,t,e):0}updateSelectRing(){const t=this.sceneStore.selectedId;if(!t){this.selectRing.visible=!1;return}let e=null;const i=this.sceneStore.waypoints.find(s=>s.id===t);if(i)e=new N(i.position.x,i.position.y,i.position.z);else{const s=this.zoneGroup.children.find(r=>r.userData.entityId===t)??this.dynamicGroup.children.find(r=>r.userData.entityId===t);if(s){e=new N,s.getWorldPosition(e);const r=this.sceneStore.threats.find(c=>c.id===t),o=this.sceneStore.noflyZones.find(c=>c.id===t),a=this.sceneStore.dynamics.find(c=>c.id===t),l=(r==null?void 0:r.radius)??(o==null?void 0:o.radius)??(a?Math.max(a.radius,a.threatRadius):14);this.selectRing.scale.setScalar(l/14)}}e&&(this.selectRing.visible=!0,i&&this.selectRing.scale.setScalar(1),this.selectRing.position.copy(e),this.selectRing.position.y+=.3)}updateFollowCamera(){if(!this.drone)return;const t=this.drone.group.position,e=this.drone.group.rotation.y,i=70,s=35,r=new N(-Math.sin(e)*i,s,-Math.cos(e)*i);this.camera.position.lerp(t.clone().add(r),.12),this.controls.target.lerp(t,.15)}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}disposeGroup(t){for(;t.children.length>0;){const e=t.children.pop();this.disposeObject(e)}}disposeObject(t){t.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s&&s.dispose()})}dispose(){var e,i;this.disposed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("contextmenu",this.onContextMenu),this.controls.dispose(),this.renderer.dispose(),t.remove(),(i=(e=this.stats)==null?void 0:e.dom)==null||i.remove()}}function mf(n){return new N(n.x,n.y,n.z)}const ME={class:"hint"},SE={class:"status-chip"},bE={key:0,style:{color:"var(--warn)"}},EE={key:1,class:"replan-badge"},TE={key:0,class:"replan-toast"},wE={class:"rt-title"},AE={class:"rt-detail"},CE={class:"rt-cost"},RE={class:"legend"},PE={key:0},DE={key:1},IE=Hn({__name:"Viewport",setup(n){const t=Qe(),e=qi(),i=ki(null);let s=null;Da(()=>{s=new yE(i.value,t,e),Ae(()=>JSON.stringify([t.threats,t.noflyZones,t.obstacles]),()=>s==null?void 0:s.syncZones()),Ae(()=>t.dynamics.map(l=>l.id).join(","),()=>s==null?void 0:s.syncDynamics()),Ae(()=>t.waypoints.map(l=>l.id).join(","),()=>s==null?void 0:s.syncWaypoints()),Ae(()=>t.terrainVersion,()=>s==null?void 0:s.rebuildTerrain()),Ae(()=>t.waypoints.map(l=>[l.position.x,l.position.y,l.position.z].join(",")).join("|"),()=>{for(const l of t.waypoints){const c=s==null?void 0:s.findWaypointObject(l.id);c==null||c.position.set(l.position.x,l.position.y,l.position.z)}}),Ae(e.smoothPath,()=>s==null?void 0:s.syncPaths(),{deep:!1}),Ae(e.rawPath,()=>s==null?void 0:s.syncPaths(),{deep:!1}),Ae(e.candidates,()=>s==null?void 0:s.syncCandidates(),{deep:!0}),Ae(e.localCandidates,()=>s==null?void 0:s.syncCandidates(),{deep:!0}),Ae(e.replanWindow,()=>s==null?void 0:s.syncCandidates(),{deep:!0}),Ae(()=>e.showCandidates,()=>s==null?void 0:s.syncCandidates()),Ae(()=>{var l,c;return(c=(l=e.stats)==null?void 0:l.constraints)==null?void 0:c.violationIndices},()=>s==null?void 0:s.syncViolationPoints(),{deep:!0}),Ae(()=>e.showClearanceMap,()=>s==null?void 0:s.recolorPath()),Ae(()=>e.showThreatHeatmap,()=>s==null?void 0:s.applyHeatmap()),Ae(()=>e.cameraMode,l=>s==null?void 0:s.setCameraMode(l));const a=l=>{var c;l.key==="Escape"&&t.setEditMode("select"),(l.key==="Delete"||l.key==="Backspace")&&((c=document.activeElement)==null?void 0:c.tagName)!=="INPUT"&&t.removeSelected(),l.key===" "&&(l.preventDefault(),e.togglePlay())};window.addEventListener("keydown",a),Jl(()=>window.removeEventListener("keydown",a))}),Jl(()=>{s==null||s.dispose(),s=null});const r=()=>{switch(t.editMode){case"add-threat":return"点击地形放置雷达威胁区（放置后在右侧面板修改类型与参数）";case"add-nofly":return"点击地形放置禁飞区";case"add-obstacle":return"点击地形放置建筑障碍";case"add-dynamic":return"点击地形放置移动障碍物（右侧面板可改为突发威胁、设置速度/巡逻点/出现时刻）";case"add-waypoint":return"点击地形添加途经航点（自动设置安全高度）";default:return"左键旋转 · 右键平移 · 滚轮缩放 · 拖拽要素编辑 · Delete 删除选中"}},o={"threat-approach":"威胁接近","collision-risk":"碰撞风险","yaw-deviation":"偏航过大","range-anomaly":"航程异常",manual:"手动突发"};return(a,l)=>{var c,h;return Rt(),Pt("div",{ref_key:"containerRef",ref:i,class:"viewport"},[A("div",ME,ot(r()),1),A("div",SE,[A("span",{class:Qt(["dot",{green:L(e).status==="done"&&((c=L(e).stats)==null?void 0:c.success),red:L(e).status==="failed",yellow:L(e).status==="planning",gray:L(e).status==="idle"}])},null,2),A("span",null,ot(L(e).message),1),L(e).dirty&&L(e).status!=="planning"?(Rt(),Pt("span",bE," ●参数已变更 ")):Se("",!0),L(e).replanEvents.length>0?(Rt(),Pt("span",EE," 在线重规划 ×"+ot(L(e).replanEvents.length),1)):Se("",!0)]),L(e).lastReplanEvent?(Rt(),Pt("div",TE,[A("div",wE,ot(o[L(e).lastReplanEvent.reason])+" · t="+ot(L(e).lastReplanEvent.time.toFixed(1))+"s ",1),A("div",AE,ot(L(e).lastReplanEvent.detail),1),A("div",CE," 局部代价 "+ot(L(e).lastReplanEvent.costBefore)+" → "+ot(L(e).lastReplanEvent.costAfter)+" · 耗时 "+ot(L(e).lastReplanEvent.planMs.toFixed(1))+"ms ",1)])):Se("",!0),A("div",RE,[l[2]||(l[2]=v0('<div data-v-7f5916dd><i style="background:#22a7ff;" data-v-7f5916dd></i>雷达区</div><div data-v-7f5916dd><i style="background:#ff3b30;" data-v-7f5916dd></i>防空区</div><div data-v-7f5916dd><i style="background:#b046ff;" data-v-7f5916dd></i>干扰区</div><div data-v-7f5916dd><i style="background:#ff2d55;" data-v-7f5916dd></i>禁飞区</div><div data-v-7f5916dd><i style="background:#ff8f1f;" data-v-7f5916dd></i>移动障碍/突发威胁（虚线为预测轨迹）</div><div data-v-7f5916dd><i style="background:#2ecc71;" data-v-7f5916dd></i>起点 / <i style="background:#e74c3c;" data-v-7f5916dd></i>终点 / <i style="background:#f1c40f;" data-v-7f5916dd></i>途经</div>',6)),L(e).showCandidates?(Rt(),Pt("div",PE,[...l[0]||(l[0]=[A("i",{style:{background:"#ffb020"}},null,-1),ae("候选航迹 / 局部重规划窗口",-1)])])):Se("",!0),(h=L(e).stats)!=null&&h.constraints?(Rt(),Pt("div",DE,[...l[1]||(l[1]=[A("i",{style:{background:"#ff3b30"}},null,-1),ae("约束违反点",-1)])])):Se("",!0)])],512)}}}),LE=Ci(IE,[["__scopeId","data-v-7f5916dd"]]),UE={class:"field"},NE=["min","max","step","value"],FE={class:"val"},xt=Hn({__name:"NumberSlider",props:{label:{},modelValue:{},min:{},max:{},step:{default:1},unit:{default:""},decimals:{default:0}},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,i=t,s=Ie(()=>{const r=Number(e.modelValue);return e.decimals>0?r.toFixed(e.decimals):String(Math.round(r))});return(r,o)=>(Rt(),Pt("div",UE,[A("label",null,ot(n.label),1),A("input",{type:"range",min:n.min,max:n.max,step:n.step,value:n.modelValue,onInput:o[0]||(o[0]=a=>i("update:modelValue",Number(a.target.value)))},null,40,NE),A("span",FE,ot(s.value)+ot(n.unit),1)]))}}),zE={class:"section"},OE={class:"section-title"},BE=["onClick"],VE={class:"name"},kE=["onClick"],HE={class:"section"},GE={class:"section-title"},WE=["onClick"],XE={class:"name"},$E=["onClick"],YE={class:"section"},jE={class:"section-title"},qE=["onClick"],KE={class:"name"},ZE=["onClick"],JE={class:"section"},QE={class:"section-title",style:{display:"flex","justify-content":"space-between","align-items":"center"}},tT=["onClick"],eT={class:"name"},nT={style:{color:"var(--text-2)"}},iT=["onClick"],sT={class:"section"},rT={class:"section-title"},oT=["onClick"],aT={class:"name"},lT=["onClick"],cT={key:0,class:"section editor"},uT={class:"field",style:{"grid-template-columns":"88px 1fr"}},hT=["value"],dT={key:1,class:"section editor"},fT={class:"field",style:{"grid-template-columns":"88px 1fr"}},pT={class:"checkbox"},mT={key:2,class:"section editor"},gT={key:3,class:"section editor"},_T={class:"field",style:{"grid-template-columns":"88px 1fr"}},xT={class:"field",style:{"grid-template-columns":"88px 1fr"}},vT={class:"field-row",style:{"margin-top":"4px"}},yT={key:4,class:"section editor"},MT={class:"section-title"},ST={key:5,class:"empty-tip"},bT=Hn({__name:"EditPanel",setup(n){const t=Qe(),e=Ie(()=>t.threats.find(m=>m.id===t.selectedId)),i=Ie(()=>t.noflyZones.find(m=>m.id===t.selectedId)),s=Ie(()=>t.obstacles.find(m=>m.id===t.selectedId)),r=Ie(()=>t.waypoints.find(m=>m.id===t.selectedId)),o=Ie(()=>t.dynamics.find(m=>m.id===t.selectedId)),a=[{value:"radar",label:"雷达"},{value:"sam",label:"防空"},{value:"jammer",label:"干扰"}],l={start:"起点",end:"终点",via:"途经点"},c=t.terrain.size/2-10;function h(){const m={x:0,y:0,z:0};t.addDynamicAt(m)}function u(){const m={x:0,y:0,z:0};t.addSuddenThreatAt(m)}function d(m){const g=o.value;g&&(g.kind==="threat"?g.threatRadius=m:g.radius=m)}return(m,g)=>(Rt(),Pt("div",null,[A("div",zE,[A("div",OE,"威胁区（"+ot(L(t).threats.length)+"）",1),(Rt(!0),Pt(ve,null,en(L(t).threats,_=>(Rt(),Pt("div",{key:_.id,class:Qt(["list-item",{selected:L(t).selectedId===_.id}]),onClick:f=>L(t).select(_.id)},[A("span",{class:"swatch",style:Jn({background:`#${L(wm)[_.kind].toString(16).padStart(6,"0")}`})},null,4),A("span",VE,ot(_.name)+" · L"+ot(_.level),1),A("button",{class:"icon-btn danger",onClick:fr(f=>L(t).removeThreat(_.id),["stop"])},"×",8,kE)],10,BE))),128))]),A("div",HE,[A("div",GE,"禁飞区（"+ot(L(t).noflyZones.length)+"）",1),(Rt(!0),Pt(ve,null,en(L(t).noflyZones,_=>(Rt(),Pt("div",{key:_.id,class:Qt(["list-item",{selected:L(t).selectedId===_.id}]),onClick:f=>L(t).select(_.id)},[g[41]||(g[41]=A("span",{class:"swatch",style:{background:"#ff2d55"}},null,-1)),A("span",XE,ot(_.name)+ot(_.hardBlock?"":"（软）"),1),A("button",{class:"icon-btn danger",onClick:fr(f=>L(t).removeNoFly(_.id),["stop"])},"×",8,$E)],10,WE))),128))]),A("div",YE,[A("div",jE,"建筑障碍（"+ot(L(t).obstacles.length)+"）",1),(Rt(!0),Pt(ve,null,en(L(t).obstacles,_=>(Rt(),Pt("div",{key:_.id,class:Qt(["list-item",{selected:L(t).selectedId===_.id}]),onClick:f=>L(t).select(_.id)},[g[42]||(g[42]=A("span",{class:"swatch",style:{background:"#9aa3ad"}},null,-1)),A("span",KE,ot(_.name),1),A("button",{class:"icon-btn danger",onClick:fr(f=>L(t).removeObstacle(_.id),["stop"])},"×",8,ZE)],10,qE))),128))]),A("div",JE,[A("div",QE,[A("span",null,"动态实体（"+ot(L(t).dynamics.length)+"）",1),A("span",{style:{display:"flex",gap:"4px"}},[A("button",{class:"icon-btn",style:{padding:"2px 6px"},onClick:h},"+移动"),A("button",{class:"icon-btn",style:{padding:"2px 6px"},onClick:u},"+突发")])]),(Rt(!0),Pt(ve,null,en(L(t).dynamics,_=>(Rt(),Pt("div",{key:_.id,class:Qt(["list-item",{selected:L(t).selectedId===_.id}]),onClick:f=>L(t).select(_.id)},[A("span",{class:"swatch",style:Jn({background:_.color})},null,4),A("span",eT,[ae(ot(_.name)+" ",1),A("small",nT,[ae(ot(_.kind==="threat"?"威胁":"障碍")+" · "+ot(_.motion==="static"?"静止":_.motion==="patrol"?"巡逻":"直线")+" ",1),_.enableAt>0?(Rt(),Pt(ve,{key:0},[ae(" · t="+ot(_.enableAt)+"s出现",1)],64)):Se("",!0)])]),A("button",{class:"icon-btn danger",onClick:fr(f=>L(t).removeDynamic(_.id),["stop"])},"×",8,iT)],10,tT))),128))]),A("div",sT,[A("div",rT,"任务航点（"+ot(L(t).waypoints.length)+"）",1),(Rt(!0),Pt(ve,null,en(L(t).waypoints,(_,f)=>(Rt(),Pt("div",{key:_.id,class:Qt(["list-item",{selected:L(t).selectedId===_.id}]),onClick:p=>L(t).select(_.id)},[A("span",{class:"swatch",style:Jn({background:_.role==="start"?"#2ecc71":_.role==="end"?"#e74c3c":"#f1c40f"})},null,4),A("span",aT,ot(_.role==="via"?`途经点 ${f}`:l[_.role])+" · "+ot(_.position.y.toFixed(0))+"m ",1),_.role==="via"?(Rt(),Pt("button",{key:0,class:"icon-btn danger",onClick:fr(p=>L(t).removeWaypoint(_.id),["stop"])}," × ",8,lT)):Se("",!0)],10,oT))),128))]),e.value?(Rt(),Pt("div",cT,[g[44]||(g[44]=A("div",{class:"section-title"},"编辑威胁区",-1)),pe(A("input",{type:"text","onUpdate:modelValue":g[0]||(g[0]=_=>e.value.name=_),style:{"margin-bottom":"8px"}},null,512),[[wr,e.value.name]]),A("div",uT,[g[43]||(g[43]=A("label",null,"类型",-1)),pe(A("select",{"onUpdate:modelValue":g[1]||(g[1]=_=>e.value.kind=_)},[(Rt(),Pt(ve,null,en(a,_=>A("option",{key:_.value,value:_.value},ot(_.label),9,hT)),64))],512),[[rl,e.value.kind]])]),dt(xt,{label:"威胁等级",modelValue:e.value.level,"onUpdate:modelValue":g[2]||(g[2]=_=>e.value.level=_),min:1,max:5},null,8,["modelValue"]),dt(xt,{label:"作用半径",modelValue:e.value.radius,"onUpdate:modelValue":g[3]||(g[3]=_=>e.value.radius=_),min:20,max:250,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最低高度",modelValue:e.value.heightMin,"onUpdate:modelValue":g[4]||(g[4]=_=>e.value.heightMin=_),min:0,max:400,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最高高度",modelValue:e.value.heightMax,"onUpdate:modelValue":g[5]||(g[5]=_=>e.value.heightMax=_),min:10,max:500,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"透明度",modelValue:e.value.opacity,"onUpdate:modelValue":g[6]||(g[6]=_=>e.value.opacity=_),min:.05,max:.6,step:.01,decimals:2},null,8,["modelValue"]),dt(xt,{label:"X 位置",modelValue:e.value.position.x,"onUpdate:modelValue":g[7]||(g[7]=_=>e.value.position.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"Z 位置",modelValue:e.value.position.z,"onUpdate:modelValue":g[8]||(g[8]=_=>e.value.position.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"])])):Se("",!0),i.value?(Rt(),Pt("div",dT,[g[47]||(g[47]=A("div",{class:"section-title"},"编辑禁飞区",-1)),pe(A("input",{type:"text","onUpdate:modelValue":g[9]||(g[9]=_=>i.value.name=_),style:{"margin-bottom":"8px"}},null,512),[[wr,i.value.name]]),dt(xt,{label:"作用半径",modelValue:i.value.radius,"onUpdate:modelValue":g[10]||(g[10]=_=>i.value.radius=_),min:20,max:250,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最低高度",modelValue:i.value.heightMin,"onUpdate:modelValue":g[11]||(g[11]=_=>i.value.heightMin=_),min:0,max:400,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最高高度",modelValue:i.value.heightMax,"onUpdate:modelValue":g[12]||(g[12]=_=>i.value.heightMax=_),min:10,max:500,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"惩罚权重",modelValue:i.value.penalty,"onUpdate:modelValue":g[13]||(g[13]=_=>i.value.penalty=_),min:0,max:50,step:.5,decimals:1},null,8,["modelValue"]),A("div",fT,[g[46]||(g[46]=A("label",null,"硬避障",-1)),A("label",pT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":g[14]||(g[14]=_=>i.value.hardBlock=_)},null,512),[[$e,i.value.hardBlock]]),g[45]||(g[45]=ae(" 启用后体素不可通行；关闭则仅施加软惩罚 ",-1))])]),dt(xt,{label:"X 位置",modelValue:i.value.position.x,"onUpdate:modelValue":g[15]||(g[15]=_=>i.value.position.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"Z 位置",modelValue:i.value.position.z,"onUpdate:modelValue":g[16]||(g[16]=_=>i.value.position.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"])])):Se("",!0),s.value?(Rt(),Pt("div",mT,[g[48]||(g[48]=A("div",{class:"section-title"},"编辑建筑障碍",-1)),pe(A("input",{type:"text","onUpdate:modelValue":g[17]||(g[17]=_=>s.value.name=_),style:{"margin-bottom":"8px"}},null,512),[[wr,s.value.name]]),dt(xt,{label:"宽度 X",modelValue:s.value.size.x,"onUpdate:modelValue":g[18]||(g[18]=_=>s.value.size.x=_),min:10,max:120,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"进深 Z",modelValue:s.value.size.z,"onUpdate:modelValue":g[19]||(g[19]=_=>s.value.size.z=_),min:10,max:120,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"高度",modelValue:s.value.height,"onUpdate:modelValue":g[20]||(g[20]=_=>s.value.height=_),min:10,max:200,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"X 位置",modelValue:s.value.position.x,"onUpdate:modelValue":g[21]||(g[21]=_=>s.value.position.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"Z 位置",modelValue:s.value.position.z,"onUpdate:modelValue":g[22]||(g[22]=_=>s.value.position.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"])])):Se("",!0),o.value?(Rt(),Pt("div",gT,[g[53]||(g[53]=A("div",{class:"section-title"},"编辑动态实体",-1)),pe(A("input",{type:"text","onUpdate:modelValue":g[23]||(g[23]=_=>o.value.name=_),style:{"margin-bottom":"8px"}},null,512),[[wr,o.value.name]]),A("div",_T,[g[50]||(g[50]=A("label",null,"类型",-1)),pe(A("select",{"onUpdate:modelValue":g[24]||(g[24]=_=>o.value.kind=_)},[...g[49]||(g[49]=[A("option",{value:"obstacle"},"移动障碍（硬碰撞球）",-1),A("option",{value:"threat"},"动态/突发威胁",-1)])],512),[[rl,o.value.kind]])]),A("div",xT,[g[52]||(g[52]=A("label",null,"运动模式",-1)),pe(A("select",{"onUpdate:modelValue":g[25]||(g[25]=_=>o.value.motion=_)},[...g[51]||(g[51]=[A("option",{value:"static"},"静止（突发威胁）",-1),A("option",{value:"linear"},"直线往返",-1),A("option",{value:"patrol"},"巡逻折线",-1)])],512),[[rl,o.value.motion]])]),dt(xt,{label:"运动速度",modelValue:o.value.speed,"onUpdate:modelValue":g[26]||(g[26]=_=>o.value.speed=_),min:0,max:80,unit:"m/s"},null,8,["modelValue"]),dt(xt,{label:o.value.kind==="threat"?"威胁半径":"障碍半径","model-value":o.value.kind==="threat"?o.value.threatRadius:o.value.radius,"onUpdate:modelValue":d,min:10,max:200,unit:"m"},null,8,["label","model-value"]),o.value.kind==="threat"?(Rt(),Pt(ve,{key:0},[dt(xt,{label:"威胁等级",modelValue:o.value.level,"onUpdate:modelValue":g[27]||(g[27]=_=>o.value.level=_),min:1,max:5},null,8,["modelValue"]),dt(xt,{label:"最低高度",modelValue:o.value.heightMin,"onUpdate:modelValue":g[28]||(g[28]=_=>o.value.heightMin=_),min:0,max:400,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最高高度",modelValue:o.value.heightMax,"onUpdate:modelValue":g[29]||(g[29]=_=>o.value.heightMax=_),min:10,max:500,unit:"m"},null,8,["modelValue"])],64)):Se("",!0),dt(xt,{label:"出现时刻",modelValue:o.value.enableAt,"onUpdate:modelValue":g[30]||(g[30]=_=>o.value.enableAt=_),min:0,max:60,step:.5,decimals:1,unit:"s"},null,8,["modelValue"]),dt(xt,{label:"预测时域",modelValue:o.value.predictHorizon,"onUpdate:modelValue":g[31]||(g[31]=_=>o.value.predictHorizon=_),min:2,max:20,step:.5,decimals:1,unit:"s"},null,8,["modelValue"]),dt(xt,{label:"X 位置",modelValue:o.value.position.x,"onUpdate:modelValue":g[32]||(g[32]=_=>o.value.position.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"Z 位置",modelValue:o.value.position.z,"onUpdate:modelValue":g[33]||(g[33]=_=>o.value.position.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),o.value.motion==="linear"?(Rt(),Pt(ve,{key:1},[dt(xt,{label:"目标 X",modelValue:o.value.target.x,"onUpdate:modelValue":g[34]||(g[34]=_=>o.value.target.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"目标 Z",modelValue:o.value.target.z,"onUpdate:modelValue":g[35]||(g[35]=_=>o.value.target.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"])],64)):Se("",!0),A("div",vT,[A("button",{onClick:g[36]||(g[36]=_=>o.value.active=!o.value.active)},ot(o.value.active?"立即停用":"立即激活"),1)])])):Se("",!0),r.value?(Rt(),Pt("div",yT,[A("div",MT,"编辑"+ot(l[r.value.role]),1),dt(xt,{label:"高度 Y",modelValue:r.value.position.y,"onUpdate:modelValue":g[37]||(g[37]=_=>r.value.position.y=_),min:0,max:450,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"飞行速度",modelValue:r.value.speed,"onUpdate:modelValue":g[38]||(g[38]=_=>r.value.speed=_),min:L(t).planParams.speedMin,max:L(t).planParams.speedMax,unit:"m/s"},null,8,["modelValue","min","max"]),dt(xt,{label:"X 位置",modelValue:r.value.position.x,"onUpdate:modelValue":g[39]||(g[39]=_=>r.value.position.x=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"]),dt(xt,{label:"Z 位置",modelValue:r.value.position.z,"onUpdate:modelValue":g[40]||(g[40]=_=>r.value.position.z=_),min:-c,max:c,unit:"m"},null,8,["modelValue","min"])])):Se("",!0),L(t).selectedId?Se("",!0):(Rt(),Pt("div",ST," 在 3D 视图中点选要素，或使用左侧工具在地形上点击添加。 "))]))}}),ET=Ci(bT,[["__scopeId","data-v-8e98cbf0"]]),TT={class:"section"},wT={class:"algo-grid"},AT=["onClick","title"],CT={class:"algo-desc"},RT={class:"field",style:{"grid-template-columns":"88px 1fr","margin-top":"8px"}},PT=["value"],DT=["value"],IT={key:0,class:"section"},LT={class:"section-title"},UT={key:1,class:"section"},NT={key:2,class:"section"},FT={key:3,class:"section"},zT={key:4,class:"section"},OT={class:"section"},BT={class:"section"},VT={class:"checkbox",style:{"margin-bottom":"6px"}},kT={class:"checkbox",style:{"margin-bottom":"6px"}},HT={class:"section"},GT={class:"checkbox",style:{"margin-bottom":"6px"}},WT={class:"checkbox"},XT={class:"checkbox"},$T={class:"checkbox"},YT={class:"checkbox"},jT={class:"checkbox",style:{"margin-bottom":"6px"}},qT={class:"section"},KT={class:"section"},ZT={class:"field-row",style:{"margin-top":"6px"}},JT={class:"checkbox"},QT={class:"field-row"},tw={class:"checkbox"},ew={class:"checkbox"},nw={class:"field-row"},iw={class:"checkbox"},sw={class:"section"},rw={class:"field",style:{"grid-template-columns":"88px 1fr"}},ow={class:"checkbox"},aw={class:"field-row"},lw=Hn({__name:"PlanPanel",setup(n){const t=Qe(),e=qi(),i=t.planParams,s=t.weights,r=i.dynamics,o=i.tuning,a=t.replanTriggers,l=Object.keys(Fr),c=[{value:"none",label:"不平滑（原始折线）"},{value:"polyline",label:"折线松弛平滑"},{value:"bspline",label:"三次 B 样条"},{value:"bezier",label:"三次贝塞尔（Catmull-Rom）"},{value:"polynomial",label:"三次多项式样条"},{value:"dubins",label:"Dubins 圆弧"},{value:"clothoid",label:"Clothoid 回旋曲线"}],h=Ie(()=>i.algo==="rrt"||i.algo==="rrtstar"),u=Ie(()=>i.algo==="hybridastar"),d=Ie(()=>i.algo==="aco"),m=Ie(()=>i.algo==="pso"),g=Ie(()=>i.algo==="ga");return(_,f)=>(Rt(),Pt("div",null,[A("div",TT,[f[68]||(f[68]=A("div",{class:"section-title"},"规划算法（可插拔，共 8 种）",-1)),A("div",wT,[(Rt(!0),Pt(ve,null,en(L(l),p=>(Rt(),Pt("button",{key:p,class:Qt({active:L(i).algo===p}),onClick:x=>L(e).setAlgo(p),title:L(kh)[p]},ot(L(Fr)[p].split(" ")[0]),11,AT))),128))]),A("div",CT,ot(L(kh)[L(i).algo]),1),A("div",RT,[f[67]||(f[67]=A("label",null,"平滑方式",-1)),A("select",{value:L(e).smoothing,onChange:f[0]||(f[0]=p=>L(e).setSmoothing(p.target.value))},[(Rt(),Pt(ve,null,en(c,p=>A("option",{key:p.value,value:p.value},ot(p.label),9,DT)),64))],40,PT)])]),h.value?(Rt(),Pt("div",IT,[A("div",LT,ot(L(i).algo==="rrtstar"?"RRT*":"RRT")+" 参数（实时调节）",1),dt(xt,{label:"扩展步长",modelValue:L(o).rrtStep,"onUpdate:modelValue":f[1]||(f[1]=p=>L(o).rrtStep=p),min:15,max:90,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"目标偏置",modelValue:L(o).goalBias,"onUpdate:modelValue":f[2]||(f[2]=p=>L(o).goalBias=p),min:0,max:.4,step:.02,decimals:2},null,8,["modelValue"]),dt(xt,{label:"采样上限",modelValue:L(o).maxSamples,"onUpdate:modelValue":f[3]||(f[3]=p=>L(o).maxSamples=p),min:500,max:12e3,step:100},null,8,["modelValue"]),L(i).algo==="rrtstar"?(Rt(),xp(xt,{key:0,label:"重连半径",modelValue:L(o).rewireRadius,"onUpdate:modelValue":f[4]||(f[4]=p=>L(o).rewireRadius=p),min:30,max:220,unit:"m"},null,8,["modelValue"])):Se("",!0)])):Se("",!0),u.value?(Rt(),Pt("div",UT,[f[69]||(f[69]=A("div",{class:"section-title"},"Hybrid A* 运动基元",-1)),dt(xt,{label:"转弯档位",modelValue:L(o).motionPrims,"onUpdate:modelValue":f[5]||(f[5]=p=>L(o).motionPrims=p),min:1,max:5},null,8,["modelValue"])])):Se("",!0),d.value?(Rt(),Pt("div",NT,[f[70]||(f[70]=A("div",{class:"section-title"},"蚁群参数（实时调节）",-1)),dt(xt,{label:"蚂蚁数量",modelValue:L(o).antCount,"onUpdate:modelValue":f[6]||(f[6]=p=>L(o).antCount=p),min:8,max:60},null,8,["modelValue"]),dt(xt,{label:"迭代代数",modelValue:L(o).acoIterations,"onUpdate:modelValue":f[7]||(f[7]=p=>L(o).acoIterations=p),min:10,max:100},null,8,["modelValue"]),dt(xt,{label:"α 信息素",modelValue:L(o).acoAlpha,"onUpdate:modelValue":f[8]||(f[8]=p=>L(o).acoAlpha=p),min:0,max:4,step:.1,decimals:1},null,8,["modelValue"]),dt(xt,{label:"β 启发",modelValue:L(o).acoBeta,"onUpdate:modelValue":f[9]||(f[9]=p=>L(o).acoBeta=p),min:0,max:8,step:.1,decimals:1},null,8,["modelValue"]),dt(xt,{label:"挥发率",modelValue:L(o).acoEvap,"onUpdate:modelValue":f[10]||(f[10]=p=>L(o).acoEvap=p),min:.05,max:.9,step:.05,decimals:2},null,8,["modelValue"]),dt(xt,{label:"信息素强度",modelValue:L(o).acoQ,"onUpdate:modelValue":f[11]||(f[11]=p=>L(o).acoQ=p),min:10,max:200,step:5},null,8,["modelValue"])])):Se("",!0),m.value?(Rt(),Pt("div",FT,[f[71]||(f[71]=A("div",{class:"section-title"},"粒子群参数（实时调节）",-1)),dt(xt,{label:"粒子数量",modelValue:L(o).psoParticles,"onUpdate:modelValue":f[12]||(f[12]=p=>L(o).psoParticles=p),min:8,max:80},null,8,["modelValue"]),dt(xt,{label:"迭代代数",modelValue:L(o).psoIterations,"onUpdate:modelValue":f[13]||(f[13]=p=>L(o).psoIterations=p),min:10,max:150},null,8,["modelValue"]),dt(xt,{label:"惯性权重",modelValue:L(o).psoInertia,"onUpdate:modelValue":f[14]||(f[14]=p=>L(o).psoInertia=p),min:.1,max:1.2,step:.02,decimals:2},null,8,["modelValue"]),dt(xt,{label:"自我因子 c1",modelValue:L(o).psoC1,"onUpdate:modelValue":f[15]||(f[15]=p=>L(o).psoC1=p),min:0,max:3,step:.05,decimals:2},null,8,["modelValue"]),dt(xt,{label:"社会因子 c2",modelValue:L(o).psoC2,"onUpdate:modelValue":f[16]||(f[16]=p=>L(o).psoC2=p),min:0,max:3,step:.05,decimals:2},null,8,["modelValue"]),dt(xt,{label:"走廊半宽",modelValue:L(o).psoCorridor,"onUpdate:modelValue":f[17]||(f[17]=p=>L(o).psoCorridor=p),min:60,max:320,unit:"m"},null,8,["modelValue"])])):Se("",!0),g.value?(Rt(),Pt("div",zT,[f[72]||(f[72]=A("div",{class:"section-title"},"遗传算法参数（实时调节）",-1)),dt(xt,{label:"种群规模",modelValue:L(o).gaPopulation,"onUpdate:modelValue":f[18]||(f[18]=p=>L(o).gaPopulation=p),min:10,max:100},null,8,["modelValue"]),dt(xt,{label:"迭代代数",modelValue:L(o).gaIterations,"onUpdate:modelValue":f[19]||(f[19]=p=>L(o).gaIterations=p),min:10,max:150},null,8,["modelValue"]),dt(xt,{label:"交叉概率",modelValue:L(o).gaCrossover,"onUpdate:modelValue":f[20]||(f[20]=p=>L(o).gaCrossover=p),min:0,max:1,step:.05,decimals:2},null,8,["modelValue"]),dt(xt,{label:"变异概率",modelValue:L(o).gaMutation,"onUpdate:modelValue":f[21]||(f[21]=p=>L(o).gaMutation=p),min:0,max:.6,step:.02,decimals:2},null,8,["modelValue"])])):Se("",!0),A("div",OT,[f[73]||(f[73]=A("div",{class:"section-title"},"栅格搜索参数（A*/Dijkstra/Hybrid）",-1)),dt(xt,{label:"水平栅格",modelValue:L(i).cellSize,"onUpdate:modelValue":f[22]||(f[22]=p=>L(i).cellSize=p),min:10,max:60,step:5,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"高度栅格",modelValue:L(i).heightCell,"onUpdate:modelValue":f[23]||(f[23]=p=>L(i).heightCell=p),min:10,max:50,step:5,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最大步长",modelValue:L(i).maxStep,"onUpdate:modelValue":f[24]||(f[24]=p=>L(i).maxStep=p),min:1,max:3},null,8,["modelValue"]),dt(xt,{label:"启发权重",modelValue:L(i).heuristicWeight,"onUpdate:modelValue":f[25]||(f[25]=p=>L(i).heuristicWeight=p),min:.5,max:3,step:.1,decimals:1},null,8,["modelValue"]),dt(xt,{label:"扩展上限",modelValue:L(i).maxNodes,"onUpdate:modelValue":f[26]||(f[26]=p=>L(i).maxNodes=p),min:2e4,max:5e5,step:2e4},null,8,["modelValue"]),dt(xt,{label:"平滑迭代",modelValue:L(i).smoothIterations,"onUpdate:modelValue":f[27]||(f[27]=p=>L(i).smoothIterations=p),min:0,max:30},null,8,["modelValue"])]),A("div",BT,[f[76]||(f[76]=A("div",{class:"section-title"},"动力学约束（功能03）",-1)),A("label",VT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[28]||(f[28]=p=>L(r).enforceInSearch=p)},null,512),[[$e,L(r).enforceInSearch]]),f[74]||(f[74]=ae(" 搜索中施加约束（否则仅事后检查） ",-1))]),A("label",kT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[29]||(f[29]=p=>L(r).autoRepair=p)},null,512),[[$e,L(r).autoRepair]]),f[75]||(f[75]=ae(" 违反约束时自动整形修正 ",-1))]),dt(xt,{label:"最大转弯角",modelValue:L(r).maxTurnAngle,"onUpdate:modelValue":f[30]||(f[30]=p=>L(r).maxTurnAngle=p),min:15,max:120,unit:"°"},null,8,["modelValue"]),dt(xt,{label:"最大爬升角",modelValue:L(r).maxClimbAngle,"onUpdate:modelValue":f[31]||(f[31]=p=>L(r).maxClimbAngle=p),min:5,max:75,unit:"°"},null,8,["modelValue"]),dt(xt,{label:"最小步长",modelValue:L(r).minStep,"onUpdate:modelValue":f[32]||(f[32]=p=>L(r).minStep=p),min:2,max:40,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最小转弯半径",modelValue:L(r).minTurnRadius,"onUpdate:modelValue":f[33]||(f[33]=p=>L(r).minTurnRadius=p),min:10,max:200,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最大加速度",modelValue:L(r).maxAccel,"onUpdate:modelValue":f[34]||(f[34]=p=>L(r).maxAccel=p),min:3,max:30,step:.5,decimals:1,unit:"m/s²"},null,8,["modelValue"]),dt(xt,{label:"姿态变化率",modelValue:L(r).maxAttitudeRate,"onUpdate:modelValue":f[35]||(f[35]=p=>L(r).maxAttitudeRate=p),min:10,max:120,unit:"°/s"},null,8,["modelValue"])]),A("div",HT,[f[83]||(f[83]=A("div",{class:"section-title"},"在线重规划触发（功能02）",-1)),A("label",GT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[36]||(f[36]=p=>L(e).onlineReplan=p)},null,512),[[$e,L(e).onlineReplan]]),f[77]||(f[77]=ae(" 回放中启用在线局部重规划 ",-1))]),A("label",WT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[37]||(f[37]=p=>L(a).enabled=p)},null,512),[[$e,L(a).enabled]]),f[78]||(f[78]=ae("总开关：触发检测",-1))]),A("label",XT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[38]||(f[38]=p=>L(a).onThreatApproach=p)},null,512),[[$e,L(a).onThreatApproach]]),f[79]||(f[79]=ae("威胁/障碍进入预警",-1))]),A("label",$T,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[39]||(f[39]=p=>L(a).onCollisionRisk=p)},null,512),[[$e,L(a).onCollisionRisk]]),f[80]||(f[80]=ae("前瞻碰撞风险",-1))]),A("label",YT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[40]||(f[40]=p=>L(a).onYawDeviation=p)},null,512),[[$e,L(a).onYawDeviation]]),f[81]||(f[81]=ae("偏航过大",-1))]),A("label",jT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[41]||(f[41]=p=>L(a).onRangeAnomaly=p)},null,512),[[$e,L(a).onRangeAnomaly]]),f[82]||(f[82]=ae("剩余航程异常",-1))]),dt(xt,{label:"前瞻时间",modelValue:L(a).lookaheadTime,"onUpdate:modelValue":f[42]||(f[42]=p=>L(a).lookaheadTime=p),min:2,max:15,step:.5,decimals:1,unit:"s"},null,8,["modelValue"]),dt(xt,{label:"预警距离",modelValue:L(a).warnDistance,"onUpdate:modelValue":f[43]||(f[43]=p=>L(a).warnDistance=p),min:40,max:300,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"偏航阈值",modelValue:L(a).yawThreshold,"onUpdate:modelValue":f[44]||(f[44]=p=>L(a).yawThreshold=p),min:10,max:90,unit:"°"},null,8,["modelValue"]),dt(xt,{label:"航程偏差",modelValue:L(a).rangeThreshold,"onUpdate:modelValue":f[45]||(f[45]=p=>L(a).rangeThreshold=p),min:.1,max:1,step:.05,decimals:2},null,8,["modelValue"]),dt(xt,{label:"重规划窗口",modelValue:L(a).windowRadius,"onUpdate:modelValue":f[46]||(f[46]=p=>L(a).windowRadius=p),min:100,max:500,step:20,unit:"m"},null,8,["modelValue"])]),A("div",qT,[f[84]||(f[84]=A("div",{class:"section-title"},"飞行与安全",-1)),dt(xt,{label:"安全距离",modelValue:L(i).clearance,"onUpdate:modelValue":f[47]||(f[47]=p=>L(i).clearance=p),min:0,max:40,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"巡航高度",modelValue:L(i).cruiseAlt,"onUpdate:modelValue":f[48]||(f[48]=p=>L(i).cruiseAlt=p),min:40,max:300,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"最小速度",modelValue:L(i).speedMin,"onUpdate:modelValue":f[49]||(f[49]=p=>L(i).speedMin=p),min:5,max:40,unit:"m/s"},null,8,["modelValue"]),dt(xt,{label:"最大速度",modelValue:L(i).speedMax,"onUpdate:modelValue":f[50]||(f[50]=p=>L(i).speedMax=p),min:20,max:120,unit:"m/s"},null,8,["modelValue"])]),A("div",KT,[f[89]||(f[89]=A("div",{class:"section-title"},"代价权重（实时影响航迹）",-1)),dt(xt,{label:"航程代价",modelValue:L(s).distance,"onUpdate:modelValue":f[51]||(f[51]=p=>L(s).distance=p),min:0,max:10,step:.1,decimals:1},null,8,["modelValue"]),dt(xt,{label:"威胁暴露",modelValue:L(s).threat,"onUpdate:modelValue":f[52]||(f[52]=p=>L(s).threat=p),min:0,max:100,step:1},null,8,["modelValue"]),dt(xt,{label:"高度代价",modelValue:L(s).altitude,"onUpdate:modelValue":f[53]||(f[53]=p=>L(s).altitude=p),min:0,max:40,step:.5,decimals:1},null,8,["modelValue"]),dt(xt,{label:"禁飞惩罚",modelValue:L(s).nofly,"onUpdate:modelValue":f[54]||(f[54]=p=>L(s).nofly=p),min:0,max:200,step:2},null,8,["modelValue"]),dt(xt,{label:"平滑代价",modelValue:L(s).smooth,"onUpdate:modelValue":f[55]||(f[55]=p=>L(s).smooth=p),min:0,max:2,step:.05,decimals:2},null,8,["modelValue"]),A("div",ZT,[A("label",JT,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[56]||(f[56]=p=>L(e).autoReplan=p)},null,512),[[$e,L(e).autoReplan]]),f[85]||(f[85]=ae(" 参数/环境变更后自动重规划 ",-1))])]),A("div",QT,[A("label",tw,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[57]||(f[57]=p=>L(e).showCandidates=p)},null,512),[[$e,L(e).showCandidates]]),f[86]||(f[86]=ae(" 显示候选航迹 ",-1))]),A("label",ew,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[58]||(f[58]=p=>L(e).showClearanceMap=p)},null,512),[[$e,L(e).showClearanceMap]]),f[87]||(f[87]=ae(" 安全裕度着色 ",-1))])]),A("div",nw,[A("label",iw,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[59]||(f[59]=p=>L(e).showTracking=p)},null,512),[[$e,L(e).showTracking]]),f[88]||(f[88]=ae(" 跟踪误差虚影 ",-1))])])]),A("div",sw,[f[93]||(f[93]=A("div",{class:"section-title"},"地形参数",-1)),dt(xt,{label:"地形尺寸",modelValue:L(t).terrain.size,"onUpdate:modelValue":f[60]||(f[60]=p=>L(t).terrain.size=p),min:600,max:1600,step:200,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"高程幅度",modelValue:L(t).terrain.heightScale,"onUpdate:modelValue":f[61]||(f[61]=p=>L(t).terrain.heightScale=p),min:40,max:260,step:10,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"山脊强度",modelValue:L(t).terrain.ridgeScale,"onUpdate:modelValue":f[62]||(f[62]=p=>L(t).terrain.ridgeScale=p),min:0,max:150,step:5,unit:"m"},null,8,["modelValue"]),dt(xt,{label:"噪声密度",modelValue:L(t).terrain.noiseScale,"onUpdate:modelValue":f[63]||(f[63]=p=>L(t).terrain.noiseScale=p),min:.001,max:.005,step:1e-4,decimals:4},null,8,["modelValue"]),A("div",rw,[f[91]||(f[91]=A("label",null,"峡谷",-1)),A("label",ow,[pe(A("input",{type:"checkbox","onUpdate:modelValue":f[64]||(f[64]=p=>L(t).terrain.canyon=p)},null,512),[[$e,L(t).terrain.canyon]]),f[90]||(f[90]=ae(" 生成蜿蜒峡谷 ",-1))])]),A("div",aw,[f[92]||(f[92]=A("label",null,"随机种子",-1)),pe(A("input",{type:"number","onUpdate:modelValue":f[65]||(f[65]=p=>L(t).terrain.seed=p)},null,512),[[wr,L(t).terrain.seed,void 0,{number:!0}]]),A("button",{onClick:f[66]||(f[66]=p=>L(t).terrain.seed=Math.floor(Math.random()*1e6))},"🎲")])])]))}}),cw=Ci(lw,[["__scopeId","data-v-2724abf9"]]),uw=Hn({__name:"CostChart",props:{curve:{},color:{}},setup(n){const t=n,e=ki(null);function i(){const s=e.value;if(!s)return;const r=s.getContext("2d"),o=Math.min(window.devicePixelRatio,2),a=s.clientWidth,l=s.clientHeight;s.width=a*o,s.height=l*o,r.setTransform(o,0,0,o,0,0),r.clearRect(0,0,a,l),r.strokeStyle="rgba(80,100,140,0.25)",r.lineWidth=1;for(let d=1;d<4;d++){const m=l/4*d;r.beginPath(),r.moveTo(0,m),r.lineTo(a,m),r.stroke()}if(t.curve.length<2){r.fillStyle="#7888a6",r.font="12px sans-serif",r.textAlign="center",r.fillText("完成规划后显示代价曲线",a/2,l/2);return}const c=t.curve[t.curve.length-1].distance||1,h=t.curve[t.curve.length-1].cumulative||1,u=r.createLinearGradient(0,0,0,l);u.addColorStop(0,"rgba(58,160,255,0.35)"),u.addColorStop(1,"rgba(58,160,255,0.02)"),r.beginPath(),r.moveTo(0,l);for(const d of t.curve)r.lineTo(d.distance/c*a,l-d.cumulative/h*(l-6)-3);r.lineTo(a,l),r.closePath(),r.fillStyle=u,r.fill(),r.beginPath(),t.curve.forEach((d,m)=>{const g=d.distance/c*a,_=l-d.cumulative/h*(l-6)-3;m===0?r.moveTo(g,_):r.lineTo(g,_)}),r.strokeStyle=t.color??"#3aa0ff",r.lineWidth=2,r.stroke(),r.fillStyle="#7888a6",r.font="10px sans-serif",r.textAlign="left",r.fillText(`航程 ${Math.round(c)} m`,6,12),r.textAlign="right",r.fillText(`总代价 ${h.toFixed(1)}`,a-6,12)}return Da(i),Ae(()=>t.curve,i,{deep:!0}),(s,r)=>(Rt(),Pt("canvas",{ref_key:"canvasRef",ref:e,class:"cost-chart"},null,512))}}),hw=Ci(uw,[["__scopeId","data-v-3ca82bbd"]]),dw={class:"section"},fw={class:"stat-grid"},pw={class:"stat-card"},mw={class:"v"},gw={class:"stat-card"},_w={class:"v"},xw={class:"stat-card"},vw={class:"v"},yw={class:"stat-card"},Mw={class:"v"},Sw={class:"stat-card"},bw={class:"v"},Ew={class:"stat-card"},Tw={class:"stat-card"},ww={class:"stat-card"},Aw={class:"v"},Cw={class:"stat-card",style:{"grid-column":"1 / -1"}},Rw={class:"k"},Pw={class:"v"},Dw={key:0,class:"section"},Iw={class:"section-title"},Lw={class:"viol-grid"},Uw={key:0,class:"ok-tip"},Nw={key:1,class:"warn-tip"},Fw={key:1,class:"section"},zw={class:"section-title"},Ow={class:"metrics-table"},Bw={key:2,class:"section"},Vw={class:"stat-grid"},kw={class:"stat-card"},Hw={class:"v"},Gw={class:"stat-card"},Ww={class:"v"},Xw={class:"stat-card"},$w={class:"v"},Yw={class:"stat-card"},jw={class:"v"},qw={class:"stat-card",style:{"grid-column":"1 / -1"}},Kw={class:"v"},Zw={class:"section"},Jw={class:"cost-bars"},Qw={style:{color:"var(--text-1)"}},tA={class:"bar-track"},eA={style:{"text-align":"right","font-variant-numeric":"tabular-nums"}},nA={class:"section"},iA={key:3,class:"section"},sA={class:"section-title"},rA={class:"replan-list"},oA={class:"rr-head"},aA={class:"rr-tag"},lA={class:"rr-time"},cA={class:"rr-detail"},uA={class:"rr-cost"},hA=Hn({__name:"StatsPanel",setup(n){const t=qi(),e=Ie(()=>t.stats),i=Ie(()=>{var u;return(u=t.stats)==null?void 0:u.constraints}),s=Ie(()=>{var u;return(u=t.stats)==null?void 0:u.rawMetrics}),r=Ie(()=>{var u;return(u=t.stats)==null?void 0:u.smoothMetrics}),o=Ie(()=>t.trackingSummary),a=Ie(()=>{var m;const u=(m=e.value)==null?void 0:m.costBreakdown,d=((u==null?void 0:u.distance)??0)+((u==null?void 0:u.threat)??0)+((u==null?void 0:u.altitude)??0)+((u==null?void 0:u.nofly)??0)+((u==null?void 0:u.smooth)??0);return[{key:"航程",v:(u==null?void 0:u.distance)??0,color:"#3aa0ff",total:d},{key:"威胁",v:(u==null?void 0:u.threat)??0,color:"#ff5263",total:d},{key:"高度",v:(u==null?void 0:u.altitude)??0,color:"#ffb020",total:d},{key:"禁飞",v:(u==null?void 0:u.nofly)??0,color:"#b046ff",total:d},{key:"平滑",v:(u==null?void 0:u.smooth)??0,color:"#1abc9c",total:d}]}),l={"threat-approach":"威胁接近","collision-risk":"碰撞风险","yaw-deviation":"偏航过大","range-anomaly":"航程异常",manual:"手动突发"};function c(u){return u<=-1?"down":u>=1?"up":"flat"}function h(u){return`${u>0?"+":""}${u.toFixed(1)}%`}return(u,d)=>{var m,g,_,f,p;return Rt(),Pt("div",null,[A("div",dw,[d[8]||(d[8]=A("div",{class:"section-title"},"仿真评估",-1)),A("div",fw,[A("div",pw,[d[0]||(d[0]=A("div",{class:"k"},"总航程 (m)",-1)),A("div",mw,ot(e.value?e.value.distance.toFixed(0):"—"),1)]),A("div",gw,[d[1]||(d[1]=A("div",{class:"k"},"规划耗时 (ms)",-1)),A("div",_w,ot(e.value?e.value.planTimeMs.toFixed(1):"—"),1)]),A("div",xw,[d[2]||(d[2]=A("div",{class:"k"},"威胁暴露量",-1)),A("div",vw,ot(e.value?e.value.threatExposure.toFixed(1):"—"),1)]),A("div",yw,[d[3]||(d[3]=A("div",{class:"k"},"暴露时间 (s)",-1)),A("div",Mw,ot(e.value?e.value.exposureTime.toFixed(1):"—"),1)]),A("div",Sw,[d[4]||(d[4]=A("div",{class:"k"},"扩展节点",-1)),A("div",bw,ot(e.value?e.value.expandedNodes:"—"),1)]),A("div",Ew,[d[5]||(d[5]=A("div",{class:"k"},"避障成功率",-1)),A("div",{class:"v",style:Jn({color:(((m=e.value)==null?void 0:m.obstacleAvoidanceRate)??100)>=100?"var(--ok)":"var(--danger)"})},ot(e.value?e.value.obstacleAvoidanceRate+"%":"—"),5)]),A("div",Tw,[d[6]||(d[6]=A("div",{class:"k"},"约束满足率",-1)),A("div",{class:"v",style:Jn({color:(((g=i.value)==null?void 0:g.satisfactionRate)??100)>=95?"var(--ok)":"var(--warn)"})},ot(i.value?i.value.satisfactionRate.toFixed(1)+"%":"—"),5)]),A("div",ww,[d[7]||(d[7]=A("div",{class:"k"},"在线重规划",-1)),A("div",Aw,ot(((_=e.value)==null?void 0:_.replanCount)??0)+" 次",1)]),A("div",Cw,[A("div",Rw,"总加权代价（"+ot((f=e.value)!=null&&f.success?"可行航迹":"规划失败")+"）",1),A("div",Pw,ot(e.value?e.value.totalCost.toFixed(1):"—"),1)])])]),i.value?(Rt(),Pt("div",Dw,[A("div",Iw,"动力学约束检查（"+ot(i.value.samples)+" 采样点）",1),A("div",Lw,[A("div",{class:Qt(["viol",{bad:i.value.turnViolations>0}])},[d[9]||(d[9]=ae(" 转弯角违反 ",-1)),A("b",null,ot(i.value.turnViolations),1)],2),A("div",{class:Qt(["viol",{bad:i.value.climbViolations>0}])},[d[10]||(d[10]=ae(" 爬升角违反 ",-1)),A("b",null,ot(i.value.climbViolations),1)],2),A("div",{class:Qt(["viol",{bad:i.value.stepViolations>0}])},[d[11]||(d[11]=ae(" 步长违反 ",-1)),A("b",null,ot(i.value.stepViolations),1)],2),A("div",{class:Qt(["viol",{bad:i.value.radiusViolations>0}])},[d[12]||(d[12]=ae(" 转弯半径违反 ",-1)),A("b",null,ot(i.value.radiusViolations),1)],2),A("div",{class:Qt(["viol",{bad:i.value.accelViolations>0}])},[d[13]||(d[13]=ae(" 加速度违反 ",-1)),A("b",null,ot(i.value.accelViolations),1)],2),A("div",{class:Qt(["viol",{bad:i.value.attitudeRateViolations>0}])},[d[14]||(d[14]=ae(" 姿态率违反 ",-1)),A("b",null,ot(i.value.attitudeRateViolations),1)],2)]),i.value.violationIndices.length===0?(Rt(),Pt("div",Uw,"✓ 全部采样点满足动力学约束")):(Rt(),Pt("div",Nw,"违反点已在三维视图中以红点高亮"))])):Se("",!0),s.value&&r.value?(Rt(),Pt("div",Fw,[A("div",zw,"平滑前后指标对比（"+ot((p=e.value)==null?void 0:p.smoothing)+"）",1),A("table",Ow,[d[23]||(d[23]=A("thead",null,[A("tr",null,[A("th",null,"指标"),A("th",null,"原始"),A("th",null,"平滑后"),A("th",null,"变化")])],-1)),A("tbody",null,[A("tr",null,[d[15]||(d[15]=A("td",null,"航程 (m)",-1)),A("td",null,ot(s.value.length.toFixed(0)),1),A("td",null,ot(r.value.length.toFixed(0)),1),A("td",{class:Qt(c((r.value.length-s.value.length)/Math.max(s.value.length,1)*100))},ot(h((r.value.length-s.value.length)/Math.max(s.value.length,1)*100)),3)]),A("tr",null,[d[16]||(d[16]=A("td",null,"最大曲率 (1/m)",-1)),A("td",null,ot(s.value.maxCurvature.toExponential(1)),1),A("td",null,ot(r.value.maxCurvature.toExponential(1)),1),A("td",{class:Qt(c(s.value.maxCurvature>1e-9?(r.value.maxCurvature-s.value.maxCurvature)/s.value.maxCurvature*100:0))},ot(s.value.maxCurvature>1e-9?h((r.value.maxCurvature-s.value.maxCurvature)/s.value.maxCurvature*100):"—"),3)]),A("tr",null,[d[17]||(d[17]=A("td",null,"最大转角 (°)",-1)),A("td",null,ot(s.value.maxTurnAngle.toFixed(1)),1),A("td",null,ot(r.value.maxTurnAngle.toFixed(1)),1),A("td",{class:Qt(c(r.value.maxTurnAngle-s.value.maxTurnAngle))},ot((r.value.maxTurnAngle-s.value.maxTurnAngle).toFixed(1))+"° ",3)]),A("tr",null,[d[18]||(d[18]=A("td",null,"最大爬升角 (°)",-1)),A("td",null,ot(s.value.maxClimbAngle.toFixed(1)),1),A("td",null,ot(r.value.maxClimbAngle.toFixed(1)),1),A("td",{class:Qt(c(r.value.maxClimbAngle-s.value.maxClimbAngle))},ot((r.value.maxClimbAngle-s.value.maxClimbAngle).toFixed(1))+"° ",3)]),A("tr",null,[d[19]||(d[19]=A("td",null,"最大速度 (m/s)",-1)),A("td",null,ot(s.value.maxSpeed.toFixed(1)),1),A("td",null,ot(r.value.maxSpeed.toFixed(1)),1),d[20]||(d[20]=A("td",null,"—",-1))]),A("tr",null,[d[21]||(d[21]=A("td",null,"最大加速度 (m/s²)",-1)),A("td",null,ot(s.value.maxAccel.toFixed(2)),1),A("td",null,ot(r.value.maxAccel.toFixed(2)),1),A("td",{class:Qt(c(s.value.maxAccel>1e-9?(r.value.maxAccel-s.value.maxAccel)/s.value.maxAccel*100:0))},ot(s.value.maxAccel>1e-9?h((r.value.maxAccel-s.value.maxAccel)/s.value.maxAccel*100):"—"),3)]),A("tr",null,[d[22]||(d[22]=A("td",null,"最大抖动 (m/s³)",-1)),A("td",null,ot(s.value.maxJerk.toFixed(2)),1),A("td",null,ot(r.value.maxJerk.toFixed(2)),1),A("td",{class:Qt(c(s.value.maxJerk>1e-9?(r.value.maxJerk-s.value.maxJerk)/s.value.maxJerk*100:0))},ot(s.value.maxJerk>1e-9?h((r.value.maxJerk-s.value.maxJerk)/s.value.maxJerk*100):"—"),3)])])])])):Se("",!0),o.value&&o.value.samples>0?(Rt(),Pt("div",Bw,[d[29]||(d[29]=A("div",{class:"section-title"},"轨迹跟踪误差",-1)),A("div",Vw,[A("div",kw,[d[24]||(d[24]=A("div",{class:"k"},"横向 RMS (m)",-1)),A("div",Hw,ot(o.value.rmsLateral.toFixed(2)),1)]),A("div",Gw,[d[25]||(d[25]=A("div",{class:"k"},"高度 RMS (m)",-1)),A("div",Ww,ot(o.value.rmsAltitude.toFixed(2)),1)]),A("div",Xw,[d[26]||(d[26]=A("div",{class:"k"},"航向 RMS (°)",-1)),A("div",$w,ot(o.value.rmsYaw.toFixed(2)),1)]),A("div",Yw,[d[27]||(d[27]=A("div",{class:"k"},"速度 RMS (m/s)",-1)),A("div",jw,ot(o.value.rmsSpeed.toFixed(2)),1)]),A("div",qw,[d[28]||(d[28]=A("div",{class:"k"},"最大横向偏差 (m)",-1)),A("div",Kw,ot(o.value.maxLateral.toFixed(2)),1)])])])):Se("",!0),A("div",Zw,[d[30]||(d[30]=A("div",{class:"section-title"},"代价分量",-1)),A("div",Jw,[(Rt(!0),Pt(ve,null,en(a.value,x=>(Rt(),Pt("div",{key:x.key,class:"bar-row"},[A("span",Qw,ot(x.key),1),A("div",tA,[A("div",{class:"bar-fill",style:Jn({width:x.total>0?Math.max(2,x.v/x.total*100)+"%":"0%",background:x.color})},null,4)]),A("span",eA,ot(x.v.toFixed(1)),1)]))),128))])]),A("div",nA,[d[31]||(d[31]=A("div",{class:"section-title"},"累积代价曲线",-1)),dt(hw,{curve:L(t).costCurve},null,8,["curve"])]),L(t).replanEvents.length>0?(Rt(),Pt("div",iA,[A("div",sA,"在线重规划记录（"+ot(L(t).replanEvents.length)+"）",1),A("div",rA,[(Rt(!0),Pt(ve,null,en(L(t).replanEvents,(x,v)=>(Rt(),Pt("div",{key:v,class:"replan-row"},[A("div",oA,[A("span",aA,ot(l[x.reason]),1),A("span",lA,"t="+ot(x.time.toFixed(1))+"s",1)]),A("div",cA,ot(x.detail),1),A("div",uA," 代价 "+ot(x.costBefore)+" → "+ot(x.costAfter)+" · "+ot(x.planMs.toFixed(1))+"ms ",1)]))),128))])])):Se("",!0)])}}}),dA=Ci(hA,[["__scopeId","data-v-1cc51546"]]),fA={class:"section"},pA={class:"algo-pick"},mA=["onUpdate:modelValue"],gA=["disabled"],_A={key:0,class:"section"},xA={class:"cmp-table"},vA={class:"algo-name"},yA=Hn({__name:"ComparePanel",setup(n){const t=Qe(),e=qi(),i=ki({astar:!0,dijkstra:!0,rrt:!0,rrtstar:!0,hybridastar:!0,aco:!0,pso:!0,ga:!0}),s=ki(!1),r=ki(null),o=Object.keys(Fr);async function a(){s.value=!0,r.value=null,await new Promise(u=>setTimeout(u,30));const c=new $r(t.terrain,t.threats,t.noflyZones,t.obstacles),h=o.filter(u=>i.value[u]);r.value=nx(c,t.waypoints,t.planParams,t.weights,h,e.smoothing),s.value=!1}function l(c,h=!0){if(!r.value)return"";const u=r.value.filter(g=>g.success);if(u.length===0)return"";const d=u.map(g=>g[c]);return h?Math.min(...d):Math.max(...d)}return(c,h)=>(Rt(),Pt("div",null,[A("div",fA,[h[0]||(h[0]=A("div",{class:"section-title"},"多算法规划对比（功能01）",-1)),h[1]||(h[1]=A("p",{class:"tip"},[ae(" 勾选参与对比的算法，使用"),A("b",null,"同一环境、任务与代价权重"),ae("批量规划， 对比航程 / 耗时 / 扩展节点 / 总代价 / 威胁暴露 / 约束满足率 / 曲率。 ")],-1)),A("div",pA,[(Rt(!0),Pt(ve,null,en(L(o),u=>(Rt(),Pt("label",{key:u,class:"pick"},[pe(A("input",{type:"checkbox","onUpdate:modelValue":d=>i.value[u]=d},null,8,mA),[[$e,i.value[u]]]),ae(" "+ot(L(Fr)[u].split(" ")[0]),1)]))),128))]),A("button",{class:"primary",style:{width:"100%","margin-top":"8px"},disabled:s.value,onClick:a},ot(s.value?"对比计算中…":"⚖ 运行算法对比"),9,gA)]),r.value?(Rt(),Pt("div",_A,[h[3]||(h[3]=A("div",{class:"section-title"},"对比结果（最优值高亮）",-1)),A("table",xA,[h[2]||(h[2]=A("thead",null,[A("tr",null,[A("th",null,"算法"),A("th",null,"状态"),A("th",null,"航程"),A("th",null,"耗时"),A("th",null,"节点"),A("th",null,"代价"),A("th",null,"暴露"),A("th",null,"约束")])],-1)),A("tbody",null,[(Rt(!0),Pt(ve,null,en(r.value,u=>(Rt(),Pt("tr",{key:u.algo,class:Qt({fail:!u.success})},[A("td",vA,ot(L(Fr)[u.algo].split(" ")[0]),1),A("td",{style:Jn({color:u.success?"var(--ok)":"var(--danger)"})},ot(u.success?"✓":"✗"),5),A("td",{class:Qt({best:l("distance")===u.distance})},ot(u.distance.toFixed(0)),3),A("td",{class:Qt({best:l("planTimeMs")===u.planTimeMs})},ot(u.planTimeMs.toFixed(1)),3),A("td",{class:Qt({best:l("expandedNodes")===u.expandedNodes})},ot(u.expandedNodes),3),A("td",{class:Qt({best:l("totalCost")===u.totalCost})},ot(u.totalCost.toFixed(0)),3),A("td",{class:Qt({best:l("threatExposure")===u.threatExposure})},ot(u.threatExposure.toFixed(1)),3),A("td",{class:Qt({best:l("satisfactionRate",!1)===u.satisfactionRate})},ot(u.satisfactionRate.toFixed(0))+"% ",3)],2))),128))])]),h[4]||(h[4]=A("p",{class:"tip"}," 注：随机类算法（RRT/ACO/PSO/GA）使用固定随机种子，结果可复现； 可在“规划参数”页实时调参后重新对比。 ",-1))])):Se("",!0)]))}}),MA=Ci(yA,[["__scopeId","data-v-1a0c0daf"]]),SA={class:"panel"},bA={class:"action-bar"},EA=["disabled"],TA=["disabled"],wA={class:"tabs"},AA={class:"panel-body"},CA={class:"footer-bar"},RA={class:"chk"},PA=Hn({__name:"RightPanel",setup(n){const t=Qe(),e=qi(),i=ki("plan"),s=ki(null);async function r(){await e.plan(),i.value="stats"}function o(){const u=e.exportScene(),d=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),m=URL.createObjectURL(d),g=document.createElement("a");g.href=m,g.download=`uav-scene-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`,g.click(),URL.revokeObjectURL(m)}function a(){if(e.smoothPath.length===0)return;const u=["index,x,y,z"];e.smoothPath.forEach((_,f)=>u.push(`${f},${_.x.toFixed(2)},${_.y.toFixed(2)},${_.z.toFixed(2)}`));const d=new Blob([u.join(`
`)],{type:"text/csv"}),m=URL.createObjectURL(d),g=document.createElement("a");g.href=m,g.download="uav-path.csv",g.click(),URL.revokeObjectURL(m)}function l(){var u;(u=s.value)==null||u.click()}function c(u){var _;const d=u.target,m=(_=d.files)==null?void 0:_[0];if(!m)return;const g=new FileReader;g.onload=async()=>{try{const f=JSON.parse(String(g.result));if(!f.terrain||!Array.isArray(f.waypoints))throw new Error("配置格式不正确");if(e.clearPlan(),t.loadScene(f),e.message=`已导入场景：${f.exportedAt??m.name}`,f.smoothPath&&f.smoothPath.length>=2&&f.stats){const p=new $r(t.terrain,t.threats,t.noflyZones,t.obstacles);e.applyPlanResult({success:f.stats.success,rawPath:f.rawPath??f.smoothPath,smoothPath:f.smoothPath,stats:f.stats,legs:[],message:"导入航迹"},t.planParams,t.weights,p)}}catch(f){e.message=`导入失败：${f.message}`}},g.readAsText(m),d.value=""}function h(){confirm("确定恢复默认场景？当前编辑将丢失。")&&(e.clearPlan(),t.resetScene())}return(u,d)=>(Rt(),Pt("div",SA,[A("div",bA,[A("button",{class:"primary",disabled:L(e).status==="planning",onClick:r},ot(L(e).status==="planning"?"规划中…":"⚡ 执行规划"),9,EA),A("button",{onClick:o,title:"导出场景配置 JSON"},"导出"),A("button",{onClick:a,disabled:L(e).smoothPath.length===0,title:"导出航迹 CSV"},"CSV",8,TA),A("button",{onClick:l},"导入"),A("button",{class:"danger",onClick:h},"重置"),A("input",{ref_key:"fileInput",ref:s,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:c},null,544)]),A("div",wA,[A("div",{class:Qt(["tab",{active:i.value==="edit"}]),onClick:d[0]||(d[0]=m=>i.value="edit")}," 环境编辑 ",2),A("div",{class:Qt(["tab",{active:i.value==="plan"}]),onClick:d[1]||(d[1]=m=>i.value="plan")}," 规划/约束 ",2),A("div",{class:Qt(["tab",{active:i.value==="compare"}]),onClick:d[2]||(d[2]=m=>i.value="compare")}," 算法对比 ",2),A("div",{class:Qt(["tab",{active:i.value==="stats"}]),onClick:d[3]||(d[3]=m=>i.value="stats")}," 仿真评估 ",2)]),A("div",AA,[pe(dt(ET,null,null,512),[[co,i.value==="edit"]]),pe(dt(cw,null,null,512),[[co,i.value==="plan"]]),pe(dt(MA,null,null,512),[[co,i.value==="compare"]]),pe(dt(dA,null,null,512),[[co,i.value==="stats"]])]),A("div",CA,[A("label",RA,[pe(A("input",{type:"checkbox","onUpdate:modelValue":d[4]||(d[4]=m=>L(e).showThreatHeatmap=m)},null,512),[[$e,L(e).showThreatHeatmap]]),d[5]||(d[5]=ae(" 地形威胁热力 ",-1))]),d[6]||(d[6]=A("span",{class:"ver"},"UAV Path Sim v2.0 · WebGL2",-1))])]))}}),DA=Ci(PA,[["__scopeId","data-v-4ac25dd8"]]),IA={class:"playback"},LA={class:"left"},UA=["disabled"],NA=["disabled"],FA=["onClick"],zA=["disabled"],OA={class:"center"},BA={class:"t"},VA=["max","value"],kA={class:"t"},HA={class:"right"},GA={class:"mini"},WA={class:"mini"},XA={class:"mini"},$A=Hn({__name:"PlaybackBar",setup(n){const t=qi(),e=Qe(),i=[.5,1,2,4,8],s=l=>{const c=Math.floor(l/60),h=(l%60).toFixed(1).padStart(4,"0");return`${c}:${h}`},r=Ie(()=>{const l=t.sampleAt(t.simTime);return l?l.speed:0}),o=Ie(()=>{const l=t.sampleAt(t.simTime);return l?l.s:0});async function a(){await t.plan()}return(l,c)=>(Rt(),Pt("div",IA,[A("div",LA,[A("button",{class:"primary",disabled:L(t).status==="planning"||L(t).trajectory.length<2,onClick:c[0]||(c[0]=h=>L(t).togglePlay()),title:"空格播放/暂停"},ot(L(t).playing?"⏸ 暂停":"▶ 播放"),9,UA),A("button",{disabled:L(t).trajectory.length<2,onClick:c[1]||(c[1]=h=>L(t).seek(0))},"⏮ 回放",8,NA),(Rt(),Pt(ve,null,en(i,h=>A("button",{key:h,class:Qt({active:L(t).playbackSpeed===h}),onClick:u=>L(t).setPlaybackSpeed(h)},ot(h)+"× ",11,FA)),64)),A("button",{disabled:L(t).status==="planning",onClick:a,title:"基于当前场景与参数重新执行全局规划"}," ↻ 重新规划 ",8,zA),A("button",{class:Qt({active:L(t).onlineReplan}),title:"回放过程中遇到移动障碍/突发威胁时自动局部重规划",onClick:c[2]||(c[2]=h=>L(t).onlineReplan=!L(t).onlineReplan)}," 🛰 在线"+ot(L(t).onlineReplan?"开":"关"),3)]),A("div",OA,[A("span",BA,ot(s(L(t).simTime)),1),A("input",{class:"scrub",type:"range",min:"0",max:Math.max(L(t).duration,.01),step:"0.05",value:L(t).simTime,onInput:c[3]||(c[3]=h=>L(t).seek(Number(h.target.value)))},null,40,VA),A("span",kA,ot(s(L(t).duration)),1)]),A("div",HA,[A("span",GA,"航程 "+ot(o.value.toFixed(0))+" m",1),A("span",WA,"速度 "+ot(r.value.toFixed(1))+" m/s",1),A("span",XA,"巡航 "+ot(L(e).planParams.speedMin)+"~"+ot(L(e).planParams.speedMax)+" m/s",1)])]))}}),YA=Ci($A,[["__scopeId","data-v-cd94764a"]]),jA={class:"app-shell"},qA=Hn({__name:"App",setup(n){const t=Qe(),e=qi();let i=0;Ae(()=>({...t.terrain}),()=>{e.markDirty(),window.clearTimeout(i),i=window.setTimeout(()=>{t.terrainVersion++},250)});let s=0;return Ae(()=>[JSON.stringify(t.threats),JSON.stringify(t.noflyZones),JSON.stringify(t.obstacles),JSON.stringify(t.waypoints),JSON.stringify(t.planParams),JSON.stringify(t.weights),e.smoothing],()=>{e.markDirty(),e.autoReplan&&e.status!=="planning"&&(window.clearTimeout(s),s=window.setTimeout(()=>void e.plan(),450))},{deep:!1}),Da(()=>{e.plan()}),du(()=>{window.clearTimeout(i),window.clearTimeout(s)}),(r,o)=>(Rt(),Pt("div",jA,[dt(_x),dt(LE),dt(DA),dt(YA)]))}}),Cm=i_(qA);Cm.use(o_());Cm.mount("#app");
