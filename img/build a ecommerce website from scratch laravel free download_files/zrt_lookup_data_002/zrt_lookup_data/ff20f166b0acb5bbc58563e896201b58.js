(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self;function p(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function q(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};function t(a){var b;a:{if(b=n.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var u=class{constructor(a,b){this.g=b===ba?a:""}};u.prototype.i=!0;u.prototype.h=function(){return this.g.toString()};u.prototype.toString=function(){return this.g.toString()};function ca(a){return a instanceof u&&a.constructor===u?a.g:"type_error:SafeUrl"}var da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ba={};function ea(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function fa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function ha(a,b){b instanceof u||b instanceof u||(b="object"==typeof b&&b.i?b.h():String(b),da.test(b)||(b="about:invalid#zClosurez"),b=new u(b,ba));a.href=ca(b)};function ia(){return t("iPhone")&&!t("iPod")&&!t("iPad")};function ka(a){ka[" "](a);return a}ka[" "]=function(){};var la=ia(),ma=t("iPad");var na=ia()||t("iPod"),oa=t("iPad");var pa={},ra=null;
function sa(a,b){void 0===b&&(b=0);if(!ra){ra={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));pa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ra[h]&&(ra[h]=g)}}}b=pa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var m=a[f],k=a[f+1];h=a[f+2];g=b[m>>2];m=b[(m&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=g+m+k+h}g=0;h=d;switch(a.length-f){case 2:g=
a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var ta="function"===typeof Uint8Array;const v=Symbol(void 0);function x(a){Object.isFrozen(a)||(v?a[v]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ua(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let va;var y=Object.freeze(x([]));function A(a){a=a.g;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function B(a,b){let c=b[1];a.j&&(Array.isArray(c)||null==c)&&(a=new a.j(c),c=b[1]=a);return c}function wa(a,b){const c=A(a);c.sort();for(let d=0;d<c.length;d++){const e=a.g[c[d]];b.call(void 0,B(a,e),e[0],a)}}
var D=class{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!1;this.size=0;for(a=0;a<this.h.length;a++){b=this.h[a];const c=b[0].toString(),d=this.g[c];this.g[c]=b;void 0===d&&this.size++}}m(){if(!this.i){const a=A(this);a.sort();for(let b=0;b<a.length;b++)this.h[b]=this.g[a[b]];a.length<this.h.length&&(this.h.length=a.length);this.i=!0;this.size=this.h.length}return this.h}entries(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++){const d=this.g[b[c]];a.push([d[0],B(this,d)])}return new xa(a)}keys(){const a=
[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.g[b[c]][0]);return new xa(a)}values(){const a=[],b=A(this);b.sort();for(let c=0;c<b.length;c++)a.push(B(this,this.g[b[c]]));return new xa(a)}set(a,b){const c=a.toString(),d=this.g[c];d?d[1]=b:(a=[a,b],this.g[c]=a,this.h.push(a),this.i=!1,this.size++);return this}get(a){if(a=this.g[a.toString()])return B(this,a)}has(a){return a.toString()in this.g}[Symbol.iterator](){return this.entries()}};
class xa{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};function F(a,b,c=!1){return-1===b?null:b>=a.l?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.i[b+a.j]}function G(a,b,c,d=!1){b<a.l&&!d?a.i[b+a.j]=c:(a.h||(a.h=a.i[a.l+a.j]={}))[b]=c;return a}function ya(a,b,c=!1){let d=F(a,b,c);null==d&&(d=y);d===y&&(d=x(d.slice()),G(a,b,d,c));return d}function I(a,b,c){a=F(a,b);return null==a?c:a}function J(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}
function L(a,b,c){var d=F(a,b);null==d&&(d=x([]));d.constructor===D?a=d:(c=new D(d,c),G(a,b,c,!1),a=c);return a}function M(a,b,c,d,e=!1){if(-1===c)return null;a.g||(a.g={});const f=a.g[c];if(f)return f;e=F(a,c,e);if(null==e&&!d)return f;b=new b(e);return a.g[c]=b}function za(a,b,c,d=!1){a.g||(a.g={});let e=a.g[c];if(!e){d=ya(a,c,d);e=[];for(let f=0;f<d.length;f++)e[f]=new b(d[f]);a.g[c]=e}return e}function N(a,b){return I(a,b,"")};function Aa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(ta&&null!=a&&a instanceof Uint8Array)return sa(a);if(a instanceof D)return a.m()}}return a};function Ba(a,b=Ca){return Da(a,b)}function Ea(a,b){if(null!=a){if(Array.isArray(a))a=Da(a,b);else if(ua(a)){const c={};for(let d in a)c[d]=Ea(a[d],b);a=c}else a=b(a);return a}}function Da(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=Ea(c[d],b);if(b=Array.isArray(a)){let d;v?d=a[v]:d=a.g;b=(null==d?0:d)&1}b&&x(c);return c}function Fa(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Aa(a);return Array.isArray(a)?Ba(a,Fa):a}function Ga(a){return Ha(a)}
function Ca(a){if(ta&&null!=a&&a instanceof Uint8Array)a=new Uint8Array(a);else if(a instanceof D){var b=Ga;const c=a.j,d=new D(x([]),c);for(let e in a.g){const f=a.g[e];c?d.set(f[0],b(B(a,f))):d.set(f[0],f[1])}a=d}return a};let Ia;function Ha(a){var b=a.constructor,c=Ba(a.m());Ia=c;b=new b(c);Ia=null;Na(b,a);return b}function Oa(a){va=!0;try{return JSON.stringify(a.toJSON(),Pa)}finally{va=!1}}
var Qa=class{constructor(a,b,c){var d=Ia;Ia=null;a||(a=d);d=this.constructor.h;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.g||0);this.g=void 0;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],ua(d))){this.l=a-this.j;this.h=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.h=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.i[a])?Array.isArray(d)&&x(d):this.i[a]=y;else{d=this.h||(this.h=this.i[this.l+this.j]={});let e=d[a];e?Array.isArray(e)&&
x(e):d[a]=y}}toJSON(){const a=this.m();return va?a:Ba(a,Fa)}m(){return this.i}};Qa.prototype.toString=function(){return this.m().toString()};function Pa(a,b){return Aa(b)}function Na(a,b){b.o&&(a.o=b.o.slice());const c=b.g;if(c){b=b.h;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=za(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)Na(d[e],g[e])}else(d=M(a,g.constructor,e,void 0,d))&&Na(d,g)}}}};var Ra=class extends Qa{};const Sa=()=>{Object.defineProperties(Ra,{[Symbol.hasInstance]:{value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1}})};Sa();class O extends Ra{}const Ta=()=>{Object.defineProperties(O,{[Symbol.hasInstance]:{value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1}})};Ta();var Va=class extends O{constructor(a){super(a,-1,Ua)}},Ua=[6];var Wa=class extends O{constructor(a){super(a)}},Xa=class extends O{constructor(a){super(a)}};var Za=class extends O{constructor(a){super(a,-1,Ya)}},$a=class extends O{constructor(a){super(a)}s(){return N(this,3)}H(a){G(this,5,a)}},ab=class extends O{constructor(a){super(a)}s(){return N(this,1)}H(a){G(this,2,a)}},bb=class extends O{constructor(a){super(a)}},Ya=[6,7];var db=class extends O{constructor(a){super(a,-1,cb)}},cb=[17];var eb=class extends O{constructor(a){super(a)}};/*

 SPDX-License-Identifier: Apache-2.0
*/
var fb=class{};class gb extends fb{constructor(a){super();this.g=a}toString(){return this.g}}var ib=new gb("about:invalid#zTSz");function jb(a){if(a instanceof fb)if(a instanceof gb)a=a.g;else throw Error("");else a=ca(a);return a};var kb={capture:!0},lb={passive:!0},nb=fa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function ob(a){return a?a.passive&&nb()?a:a.capture||!1:!1}function P(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,ob(d))}function pb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,ob(void 0))};function qb(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function tb(a,b){return b?a?a+"&"+b:b:a}function ub(a,b){if(!b)return a;a=sb(a);a[1]=tb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function wb(a){var b=[],c;for(c in a)vb(c,a[c],b);return b.join("&")}function xb(){var a=qb();a=null!=a?"="+encodeURIComponent(String(a)):"";return ub("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}
function yb(a,b){a=sb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=tb(d.join("&"),wb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function zb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let Ab=[];const Bb=()=>{const a=Ab;Ab=[];for(const b of a)try{b()}catch(c){}};
var Cb=a=>{Ab.push(a);1==Ab.length&&(window.Promise?Promise.resolve().then(Bb):window.setImmediate?setImmediate(Bb):setTimeout(Bb,0))},Db=a=>{var b=Q;"complete"===b.readyState||"interactive"===b.readyState?Cb(a):b.addEventListener("DOMContentLoaded",a)},Eb=a=>{var b=window;"complete"===b.document.readyState?Cb(a):b.addEventListener("load",a)};function Fb(a=document){return a.createElement("img")};function R(a,b,c=null){Gb(a,b,c)}function Gb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=Fb(a.document);if(c){const e=f=>{c&&c(f);pb(d,"load",e);pb(d,"error",e)};P(d,"load",e);P(d,"error",e)}d.src=b;a.google_image_requests.push(d)}var Hb=(a,b)=>{var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):R(a,b)};let Ib=0;function Jb(a){return(a=Kb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Kb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}function Lb(a){.01<Math.random()||(a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Jb(a)}&sample=${.01}`,Hb(window,a))};var Q=document,S=window;class Mb{constructor(a){this.O=a}}function T(a){return new Mb(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Nb=new Mb(a=>/^[^:]*([/?#]|$)/.test(a));var Ob=T("http"),Pb=T("https"),Ub=T("ftp"),Vb=T("mailto");const Wb=[T("data"),Ob,Pb,Vb,Ub,Nb];function Xb(a,b=Wb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Mb&&d.O(a))return new gb(a)}}function Yb(a,b=Wb){return Xb(a,b)||ib};const Zb=[Ob,Pb,Vb,Ub,Nb,T("market"),T("itms"),T("intent"),T("itms-appss")];function $b(a,b){if(a instanceof u)return a;const c=Yb(a,Zb);c===ib&&b(a);return new u(jb(c),ba)}var ac=a=>{var b=`${"http:"===S.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=wb({id:"unsafeurl",ctx:a,url:c});c=ub(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var bc=a=>{var b=Q;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class cc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const dc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var ec=class{constructor(a,b){this.g=a;this.h=b}},fc=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function gc(a,b){const c={};c[a]=b;return[c]}function hc(a,b,c,d,e){const f=[];zb(a,function(g,h){(g=ic(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}
function ic(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(ic(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(hc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function jc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function kc(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=jc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let m=0;m<h.length;m++){if(!d){c=null==c?g:c;break}let k=hc(h[m],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class lc{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function mc(){var a=nc,b=U.google_srt;0<=b&&1>=b&&(a.g=b)}function oc(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof lc?g=c:(g=new lc,zb(c,(m,k)=>{var l=g,r=l.j++;m=gc(k,m);l.g.push(r);l.h[r]=m}));const h=kc(g,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?R(n,h,f):R(n,h))}catch(g){}}class pc{constructor(){this.h="http:"===S.location.protocol?"http:":"https:";this.g=Math.random()}};let qc=null;var rc=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},sc=()=>{const a=n.performance;return a&&a.now?a.now():null};class tc{constructor(a,b){var c=sc()||rc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const V=n.performance,uc=!!(V&&V.mark&&V.measure&&V.clearMarks),W=fa(()=>{var a;if(a=uc){var b;if(null===qc){qc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(qc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=qc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function vc(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class wc{constructor(){var a=U;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new tc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(sc()||rc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;V&&W()&&V.mark(b);!this.g||2048<this.h.length||
this.h.push(a)}}};function xc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}
function yc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{vc(e),c=a.m(b,new cc(f,{message:xc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function zc(a,b){var c=Ac;return(...d)=>yc(c,a,()=>b.apply(void 0,d))}
class Bc{constructor(a=null){this.i=nc;this.h=null;this.m=this.l;this.g=a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const H=new lc;var g=H;g.g.push(1);g.h[1]=gc("context",a);b.error&&b.meta&&b.id||(b=new cc(b,{message:xc(b)}));if(b.msg){g=H;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=gc("msg",h)}var m=b.meta||{};b=m;if(this.h)try{this.h(b)}catch(E){}if(d)try{d(b)}catch(E){}d=H;m=[m];d.g.push(3);d.h[3]=m;d=n;m=[];let qa;b=null;do{var k=d;try{var l;if(l=!!k&&null!=k.location.href)b:{try{ka(k.foo);
l=!0;break b}catch(E){}l=!1}var r=l}catch(E){r=!1}r?(qa=k.location.href,b=k.document&&k.document.referrer||null):(qa=b,b=null);m.push(new fc(qa||""));try{d=k.parent}catch(E){d=null}}while(d&&k!=d);for(let E=0,Qb=m.length-1;E<=Qb;++E)m[E].depth=Qb-E;k=n;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==m.length-1)for(r=1;r<m.length;++r){var z=m[r];z.url||(z.url=k.location.ancestorOrigins[r-1]||"",z.G=!0)}var C=m;let Ja=new fc(n.location.href,!1);k=null;const Ka=C.length-
1;for(z=Ka;0<=z;--z){var w=C[z];!k&&dc.test(w.url)&&(k=w);if(w.url&&!w.G){Ja=w;break}}w=null;const Sc=C.length&&C[Ka].url;0!=Ja.depth&&Sc&&(w=C[Ka]);f=new ec(Ja,w);if(f.h){C=H;var K=f.h.url||"";C.g.push(4);C.h[4]=gc("top",K)}var La={url:f.g.url||""};if(f.g.url){var Ma=f.g.url.match(rb),X=Ma[1],Rb=Ma[3],Sb=Ma[4];K="";X&&(K+=X+":");Rb&&(K+="//",K+=Rb,Sb&&(K+=":"+Sb));var Tb=K}else Tb="";X=H;La=[La,{url:Tb}];X.g.push(5);X.h[5]=La;oc(this.i,e,H,this.j,c)}catch(H){try{oc(this.i,e,{context:"ecmserr",rctx:a,
msg:xc(H),url:f&&f.g.url},this.j,c)}catch(qa){}}return!0}};class Cc{};let nc,Ac;const U=window,Y=new wc;var Dc=()=>{U.google_measure_js_timing||(Y.g=!1,Y.h!=Y.i.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(Y.h,vc,void 0),Y.h.length=0))};(a=>{nc=null!=a?a:new pc;"number"!==typeof U.google_srt&&(U.google_srt=Math.random());mc();Ac=new Bc(Y);Ac.h=b=>{const c=Ib;0!==c&&(b.jc=String(c),b.shv=Jb(c))};Ac.j=!0;"complete"==U.document.readyState?Dc():Y.g&&P(U,"load",()=>{Dc()})})();
var Ec=(a,b)=>zc(a,b),Fc=a=>{var b=Cc,c="F";b.F&&b.hasOwnProperty(c)||(c=new b,b.F=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());oc(nc,"gdn-asoch",a,!0,void 0,void 0)};var Gc=(a,b)=>{b=N(a,2)||b;if(!b)return"";if(J(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];wa(L(a,4),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Hc=(a,b=[])=>{b=0<b.length?b:bc("data-asoch-targets");a=L(a,1,Za);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let m of e)if(!a.has(m)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Ha(f).toJSON();g=g.toJSON();const m=Math.max(f.length,g.length);for(let k=0;k<m;++k)null==f[k]&&(f[k]=g[k]);f=new Za(f)}e=L(f,4);null!=F(f,5)&&e.set("nb",I(f,5,0).toString());c.push({element:b[h],data:f})}else Fc({type:1,data:d})}return c},Jc=(a,b,c,d)=>{c=Gc(b,c);if(0<c.length){if(null!=F(b,18)){var e=609===d;let f;f=e?1:void 0!==Q.featurePolicy&&Q.featurePolicy.allowsFeature("attribution-reporting")?3:2;c=Ic(c,"nis",f.toString());if(e||!a.hasAttribute("attributionsourceeventid"))e=
M(b,Va,18),a.setAttribute("attributiondestination",N(e,2)),a.setAttribute("attributionsourceeventid",N(e,1)),a.setAttribute("attributionreportto",N(e,3)),a.setAttribute("attributionexpiry",N(e,4))}ha(a,$b(c,ac(d)));a.target||(a.target=null!=F(b,11)?N(b,11):"_top")}},Kc=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!J(a,1)){const c=b.element;Jc(c,a,c.href,609)}},Lc=a=>{const b=n.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=F(a,8)){const d=N(M(a,bb,8),4);if(d){b.fetchAppStoreOverlay(d,
void 0,N(M(a,bb,8),6));break}}},Mc=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&null!=F(a,12)&&(d.push(M(a,ab,12)),c.push(M(a,ab,12).s()));e=(f,g)=>{if(g)for(const h of d)g[h.s()]&&h.H(!0)};a=n.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},Oc=(a,b,c,d,e)=>{if(a||!b||null==F(b,12))return!1;const f=M(b,ab,12).s();a="";if(0<za(b,$a,7).length)for(const g of za(b,$a,7))a+=N(g,2)+" "+g.s()+" ";if(J(M(b,ab,12),2))return Nc({id:"gmob-apps",event:"och-open-android-app-before-click",
deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(yb(xb(),g))},1E3),!0;Nc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},Qc=(a,b,c,d,e,f,g,h)=>{if(!c||null==F(c,8))return!1;const m=M(c,bb,8);let k=N(m,2);wa(L(c,10),(l,r)=>{var z=k;r=encodeURIComponent(r);const C=encodeURIComponent(l);l=new RegExp("[?&]"+
r+"=([^&]+)");const w=l.exec(z);console.log(w);r=r+"="+C;k=w?z.replace(l,w[0].charAt(0)+r):z.replace("?","?"+r+"&")});Nc({id:"gmob-apps",event:"och-try-u2-redirect",appId:N(m,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});g&&Pc(c)&&J(c,15)&&!/[?&]label=/.test(d)&&(d=Ic(d,"label","deep_link_fallback"));a=l=>e.openStoreOverlay(l,void 0,N(m,6));c=l=>Hb(S,l);return e.redirectForStoreU2({clickUrl:d,trackingUrl:N(m,3),finalUrl:k,pingFunc:h?c:e.click,openFunc:(null==b?0:J(b,1))?a:e.openIntentOrNativeApp})},
Tc=(a,b,c,d,e,f,g,h,m=!1)=>{const k=J(e,15),l=!/[?&]dsh=1(&|$)/.test(f)&&/[?&]ae=1(&|$)/.test(f);!a||!b||k&&l||(f=m?Rc(f):Rc(f,g.click));f&&f.startsWith("intent:")?(g.openIntentOrNativeApp(f),a={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=F(e,8)&&N(M(e,bb,8),4)||"",isIos:d,isDeepLinkPath:!1,exptIds:h},Z(yb(xb(),a))):c?d?g.openBrowser(f):g.openChromeCustomTab(f):g.openSystemBrowser(f,{useFirstPackage:!0,useRunningProcess:!0})},Rc=(a,b=null)=>{if(null!==b){const c=new aa({url:a});
if(c.i&&c.h||c.l)return b(p(c,"&act=1&ri=1")),q(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(p(b,"&act=1&ri=1"),"")?q(b,1):q(b,2):q(b,0):a;return a},Nc=a=>{Z(yb(xb(),a))},Z=(a,b=!0)=>{b&&S.fetch?S.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||R(S,a)}):R(S,a)},Ic=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Pc=a=>{for(const b of za(a,$a,7))if(3===I(b,1,0)&&N(b,2))return!0;
return!1};function Uc(a,b){return G(a,2,b)}function Vc(a,b){return G(a,3,b)}function Wc(a,b){return G(a,4,b)}function Xc(a,b){return G(a,5,b)}function Yc(a,b){return G(a,9,b)}function Zc(a,b){let c;if(b){c=x([]);for(let d=0;d<b.length;d++)c[d]=b[d].m();a.g||(a.g={});a.g[10]=b}else a.g&&(a.g[10]=void 0),c=y;return G(a,10,c,!1)}function $c(a,b){return G(a,1,b)}var bd=class extends O{constructor(){super(void 0,-1,ad)}},cd=class extends O{constructor(){super(void 0)}},ad=[10,6];const dd="platform platformVersion architecture model uaFullVersion bitness fullVersionList".split(" ");
function ed(){var a=window;let b,c;if("function"!==typeof(null==a?void 0:null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;let d;return null!=(d=a.navigator.userAgentData.getHighEntropyValues(dd).then(e=>{let f;return Zc(Yc(Xc(Wc(Vc(Uc($c(new bd,e.platform),e.platformVersion),e.architecture),e.model),e.uaFullVersion||""),e.bitness),(null==(f=e.fullVersionList)?void 0:f.map(g=>{var h=new cd;h=G(h,1,g.brand);return G(h,2,g.version)}))||[])}))?d:null};function fd(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==F(c,2)&&G(c,2,a.href)}}function gd(a,b){return ea(a,c=>c.element===b)}function hd(a){Db(Ec(556,()=>{new id(a||{})}))}
function jd(a,b,c,d){if(!J(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(ha(c,$b(e[0],ac(557)));!c.id;)if(f="asoch-id-"+qb(),!Q.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,Q.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?I(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.D?window.ss(f,1,a.i):window.ss(a.i,
1));0<e.length&&(a=0<a.v.length?c.href+"&uach="+encodeURIComponent(a.v)+e[1]:c.href+e[1],ha(c,$b(a,ac(557))))}}async function kd(a,b,c,d){let e="";var f=n.oneAfmaInstance;if(f&&(e=await f.appendClickSignalsAsync(c.href)||"",a.A&&(f=await f.getNativeClickMeta()))){if(f.customClickGestureEligible)return;e=Ic(e,"nas",f.encodedNas)}ld(a,b,c,d,e)}
function ld(a,b,c,d,e){const f=J(a.h,2),g=f&&300<Date.now()-a.C,h=n.oneAfmaInstance;h?(b.preventDefault?b.preventDefault():b.returnValue=!1,c=h.logScionEventAndAddParam(e),Oc(a.l,d,c,h,a.m)||Qc(a.l,a.j,d,c,h,a.m,a.J,a.K)||Tc(f,g,a.M,a.l,d,c,h,a.m,a.L)):(d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=Rc(c.href),d!==c.href&&ha(c,$b(d,ac(599)))));g&&(a.C=Date.now());Lb(a.B)}
var id=class{constructor(a){this.l=na||la||oa||ma;var b=bc("data-asoch-meta");if(1!==b.length)Fc({type:2,data:b.length});else{this.B=70;this.h=new db(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.I=a["extra-meta"]?new db(JSON.parse(a["extra-meta"])):null;this.A="true"===a["is-fsn"];this.j=a["ios-store-overlay-config"]?new eb(JSON.parse(a["ios-store-overlay-config"])):null;this.M="true"===a["use-cct-over-browser"];this.m=a["expt-ids"]||"";this.J="true"===a.avoid_ace_double_billing;this.K=
"true"===a["send-ac-click-ping-by-js"];this.L="true"===a["send-click-ping-by-js-in-och"];this.v="";b=ed();null!=b&&b.then(d=>{d=Oa(d);for(var e=[],f=0,g=0;g<d.length;g++){var h=d.charCodeAt(g);255<h&&(e[f++]=h&255,h>>=8);e[f++]=h}this.v=sa(e,3)});this.g=Hc(this.h);this.N=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.C=-Infinity;this.i=N(this.h,5)||"";this.D=J(this.h,11);this.I&&(this.D=J(this.I,11));this.u=this.o=null;J(this.h,3)||(Kc(this.g),G(this.h,3,!0));fd(this.g);a=n.oneAfmaInstance;
!this.l&&a&&Mc(this.g,this.N);var c;if(a&&(null==(c=this.j)?0:J(c,2)))switch(c=()=>{const d=I(this.j,4,0);0<d?n.setTimeout(()=>{Lc(this.g)},d):Lc(this.g)},I(this.j,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:Eb(c);break;default:Lc(this.g)}P(Q,"click",Ec(557,d=>{a:if(!d.defaultPrevented||this.o===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets"),m=g.hasAttribute("data-asoch-fixed-value");if(!e)if(m)e=new Za(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||
[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?Hc(this.h,[g]):this.g,h=gd(h,g))e=h.data;g=g.parentElement}if(g=e&&!J(e,1)){if(d.defaultPrevented){var k=f,l=e;if(this.o===d&&this.u){e=new Wa(this.u);f=N(l,9);g="";switch(I(e,4,1)){case 2:if(I(e,2,0))g="blocked_fast_click";else if(N(e,1)||N(e,7))g="blocked_border_click";break;case 3:g=Q,g=g.getElementById?g.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&g&&(l=Ha(l),G(l,5,12),
L(l,4).set("nb",(12).toString()),(h=gd(this.g,g))?h.data=l:this.g.push({element:g,data:l}),k&&(jd(this,d,k,l),G(l,2,k.href)),window.copfcChm(d,Gc(l,g.href),null,null!=F(e,10)?Oa(M(e,Xa,10)):null)),g="onepointfiveclick_first_click"}f&&g&&Z(f+"&label="+g,!1);Lb(this.B)}break a}h=e;for(l of ya(h,6))Z(l)}if(f&&g){e=g?e:null;(l=gd(this.g,f))?l=l.data:(l=new Za,G(l,2,f.href),G(l,11,f.target||"_top"),this.g.push({element:f,data:l}));Jc(f,e||l,N(l,2),557);jd(this,d,f,e);for(k of ya(this.h,17))l=k,g=Q.body,
h={},"function"===typeof window.CustomEvent?m=new CustomEvent(l,h):(m=document.createEvent("CustomEvent"),m.initCustomEvent(l,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(m);J(this.h,16)||this.A?kd(this,d,f,e):(k="",(l=n.oneAfmaInstance)&&(k=l.appendClickSignals(f.href)),ld(this,d,f,e,k))}}}),kb);this.i&&"function"===typeof window.ss&&P(Q.body,"mouseover",Ec(626,()=>{window.ss(this.i,0)}),lb);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,
e)=>{this.o=d;this.u=e})}}};var md=Ec(555,a=>hd(a));Ib=70;const nd=Kb(70,document.currentScript);if(null==nd)throw Error("JSC not found 70");const od={},pd=nd.attributes;for(let a=pd.length-1;0<=a;a--){const b=pd[a].name;0===b.indexOf("data-jcp-")&&(od[b.substring(9)]=pd[a].value)}md(od);}).call(this);
