/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var d,aa="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},g="object"===typeof aa.global&&aa.global?aa.global:"object"===typeof global&&global&&global.Object===Object?global:this;aa.global=g;var ba=exports;aa.exportsNamespace=ba;g.Object.freeze(aa);var da={envInfo:aa,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.20",globalThis:this};g.Object.freeze(da);g.Object.freeze(da.semantics);
var l=g.Math.imul||function(a,b){var c=a&65535,e=b&65535;return c*e+((a>>>16&65535)*e+c*(b>>>16&65535)<<16>>>0)|0},ea=g.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},fa=0,ga=g.WeakMap?new g.WeakMap:null;function ha(a){return function(b,c){return!(!b||!b.$classData||b.$classData.rd!==c||b.$classData.qd!==a)}}
function ia(a){for(var b in a)return b}function p(a,b){return ja(a,b,0)}function ja(a,b,c){var e=new a.hg(b[c]);if(c<b.length-1){a=a.Qd;c+=1;for(var f=e.c,h=0;h<f.length;h++)f[h]=ja(a,b,c)}return e}function ka(a){return void 0===a?"undefined":a.toString()}
function la(a){switch(typeof a){case "string":return q(ma);case "number":var b=a|0;return b===a?na(b)?q(oa):pa(b)?q(qa):q(ra):"number"===typeof a?q(sa):q(ta);case "boolean":return q(ua);case "undefined":return q(va);default:return null===a?a.Dm():wa(a)?q(xa):a&&a.$classData?q(a.$classData):null}}function ya(a,b){return a&&a.$classData||null===a?a.ha(b):"number"===typeof a?"number"===typeof b&&(a===b?0!==a||1/a===1/b:a!==a&&b!==b):a===b}
function za(a){switch(typeof a){case "string":return Aa(r(),a);case "number":return Ba(Ca(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.y():null===ga?42:Da(a)}}function Ea(a,b){var c=g.Object.getPrototypeOf,e=g.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var f=e(a,b);if(void 0!==f)return f;a=c(a)}}function Fa(a,b,c){a=Ea(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}
function Ga(a,b,c,e){a=Ea(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,e);return}throw new g.TypeError("super has no setter '"+c+"'.");}function Ha(a,b,c,e,f){a=a.c;c=c.c;if(a!==c||e<b||(b+f|0)<e)for(var h=0;h<f;h=h+1|0)c[e+h|0]=a[b+h|0];else for(h=f-1|0;0<=h;h=h-1|0)c[e+h|0]=a[b+h|0]}
var Da=null!==ga?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return za(a);default:if(null===a)return 0;var b=ga.get(a);void 0===b&&(fa=b=fa+1|0,ga.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(g.Object.isSealed(a))return 42;fa=b=fa+1|0;return a.$idHashCode$0=b}return null===a?0:za(a)};function na(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function pa(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function Ia(a){return null===a?Ja().we:a}function Ka(){this.Qe=this.hg=void 0;this.qd=this.Qd=this.l=null;this.rd=0;this.Wf=null;this.Be="";this.Fb=this.xe=this.ye=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}
function La(a,b,c){var e=new Ka;e.l={};e.Qd=null;e.Wf=a;e.Be=b;e.Fb=function(){return!1};e.name=c;e.isPrimitive=!0;e.isInstance=function(){return!1};return e}function t(a,b,c,e,f,h,k,m){var n=new Ka,B=ia(a);k=k||function(a){return!!(a&&a.$classData&&a.$classData.l[B])};m=m||function(a,b){return!!(a&&a.$classData&&a.$classData.rd===b&&a.$classData.qd.l[B])};n.Qe=h;n.l=e;n.Be="L"+c+";";n.Fb=m;n.name=c;n.isInterface=b;n.isRawJSType=!!f;n.isInstance=k;return n}
function Ma(a){function b(a){if("number"===typeof a){this.c=Array(a);for(var b=0;b<a;b++)this.c[b]=f}else this.c=a}var c=new Ka,e=a.Wf,f="longZero"==e?Ja().we:e;b.prototype=new u;b.prototype.constructor=b;b.prototype.$classData=c;var e="["+a.Be,h=a.qd||a,k=a.rd+1;c.hg=b;c.Qe=v;c.l={b:1,Me:1,d:1};c.Qd=a;c.qd=h;c.rd=k;c.Wf=null;c.Be=e;c.ye=void 0;c.xe=void 0;c.Fb=void 0;c.name=e;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return h.Fb(a,k)};return c}
function q(a){if(!a.ye){var b=new Na;b.sc=a;a.ye=b}return a.ye}function w(a){a.xe||(a.xe=Ma(a));return a.xe}Ka.prototype.getFakeInstance=function(){return this===ma?"some string":this===ua?!1:this===oa||this===qa||this===ra||this===sa||this===ta?0:this===xa?Ja().we:this===va?void 0:{$classData:this}};Ka.prototype.getSuperclass=function(){return this.Qe?q(this.Qe):null};Ka.prototype.getComponentType=function(){return this.Qd?q(this.Qd):null};
Ka.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=w(b);return p(b,a)};var Oa=La(void 0,"V","void"),Pa=La(!1,"Z","boolean"),Qa=La(0,"C","char"),Ra=La(0,"B","byte"),Sa=La(0,"S","short"),Ta=La(0,"I","int"),Ua=La("longZero","J","long"),Va=La(0,"F","float"),Wa=La(0,"D","double"),Xa=ha(Pa);Pa.Fb=Xa;var Ya=ha(Qa);Qa.Fb=Ya;var Za=ha(Ra);Ra.Fb=Za;var $a=ha(Sa);Sa.Fb=$a;var ab=ha(Ta);Ta.Fb=ab;var bb=ha(Ua);Ua.Fb=bb;var cb=ha(Va);Va.Fb=cb;var db=ha(Wa);Wa.Fb=db;function eb(a,b){a.od(a.Xc.rc(fb(a,b)))}function gb(a){a.Xc.x(x(function(){return function(a){return a.Ig.call(void 0)}}(a)))}
function hb(a){var b=y(),b=z().t.g(b),c=ib(),c=z().t.g(c),e=jb(),e=z().t.g(e),f=kb(),f=z().t.g(f);b.de("./sounds/hh.wav").xd(x(function(){return function(a){lb(y(),a)}}(a)),mb().Sc);c.de("./sounds/rs.wav").xd(x(function(){return function(a){lb(ib(),a)}}(a)),mb().Sc);e.de("./sounds/sd.wav").xd(x(function(){return function(a){lb(jb(),a)}}(a)),mb().Sc);f.de("./sounds/bd.wav").xd(x(function(){return function(a){lb(kb(),a)}}(a)),mb().Sc)}
function nb(){var a=A().t,b=a.xb;if(ob()!==b){if(!pb(b))throw(new C).m(b);var b=b.Rc,c=qb(a.Xa,y()),e=qb(a.Xa,ib()),f=qb(a.Xa,jb()),a=qb(a.Xa,kb()),h=y(),h=z().t.g(h),k=ib(),k=z().t.g(k),m=jb(),m=z().t.g(m),n=kb(),n=z().t.g(n);c.Qc.Ja(b)&&h.ge();e.Qc.Ja(b)&&k.ge();f.Qc.Ja(b)&&m.ge();a.Qc.Ja(b)&&n.ge()}}function rb(a){var b=sb();tb(b);ub(vb(),6E4/(b.ub<<2)|0,wb(function(a){return function(){xb(a)}}(a)))}var xb=function yb(b){var c=A().t;zb(c)&&(nb(),c=Ab(c),tb(c),ub(vb(),6E4/(c.ub<<2)|0,wb(function(b){return function(){yb(b)}}(b))))};
function Bb(){var a=A().t.Xa;if(Cb()===a)return"A";if(Db()===a)return"B";if(Eb()===a)return"C";if(Fb()===a)return"D";throw(new C).m(a);}function Gb(){var a=A().t.Rb;if(Cb()===a)return"A";if(Db()===a)return"B";if(Eb()===a)return"C";if(Fb()===a)return"D";throw(new C).m(a);}function Hb(){var a=Ib().t.pe;if(ib()===a)return"RS";if(y()===a)return"HH";if(jb()===a)return"SD";if(kb()===a)return"BD";throw(new C).m(a);}
function Jb(){var a=A().t,b=Ib().t,a=qb(a.Xa,b.pe).Qc,b=D();if(a&&a.$classData&&a.$classData.l.en)return a.Xm;if(a&&a.$classData&&a.$classData.l.Lh)return a.ea;var c=[];a.x(x(function(a,b){return function(a){return b.push(a)|0}}(b,c)));return c}function Kb(){}function u(){}u.prototype=Kb.prototype;Kb.prototype.a=function(){return this};Kb.prototype.ha=function(a){return this===a};Kb.prototype.o=function(){var a=Lb(la(this)),b=(+(this.y()>>>0)).toString(16);return a+"@"+b};Kb.prototype.y=function(){return Da(this)};
Kb.prototype.toString=function(){return this.o()};function Mb(a,b){if(a=a&&a.$classData){var c=a.rd||0;return!(c<b)&&(c>b||!a.qd.isPrimitive)}return!1}var v=t({b:0},!1,"java.lang.Object",{b:1},void 0,void 0,function(a){return null!==a},Mb);Kb.prototype.$classData=v;function Nb(a,b){if(a.Uf(b))return a;throw(new Ob).f("Promise already completed.");}function E(a){var b=p(w(v),[a.c.length]);Ha(a,0,b,0,a.c.length);return b}
function Pb(a,b,c){if(32>c)return a.sa().c[31&b];if(1024>c)return a.j().c[31&(b>>>5|0)].c[31&b];if(32768>c)return a.n().c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(1048576>c)return a.r().c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(33554432>c)return a.oa().c[31&(b>>>20|0)].c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(1073741824>c)return a.fb().c[31&(b>>>25|0)].c[31&(b>>>20|0)].c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];throw(new G).a();}
function Qb(a,b,c){if(32<=c)if(1024>c)a.G(a.j().c[31&(b>>>5|0)]);else if(32768>c)a.w(a.n().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(1048576>c)a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.n().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(33554432>c)a.Aa(a.oa().c[31&(b>>>20|0)]),a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.n().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(1073741824>c)a.eb(a.fb().c[31&(b>>>25|0)]),a.Aa(a.oa().c[31&(b>>>20|0)]),a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.n().c[31&(b>>>
10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else throw(new G).a();}function H(a,b){var c=a.c[b];a.c[b]=null;return E(c)}
function Rb(a,b,c){a.Lc(c);c=-1+c|0;switch(c){case -1:break;case 0:a.G(b.sa());break;case 1:a.w(b.j());a.G(b.sa());break;case 2:a.fa(b.n());a.w(b.j());a.G(b.sa());break;case 3:a.Aa(b.r());a.fa(b.n());a.w(b.j());a.G(b.sa());break;case 4:a.eb(b.oa());a.Aa(b.r());a.fa(b.n());a.w(b.j());a.G(b.sa());break;case 5:a.cd(b.fb());a.eb(b.oa());a.Aa(b.r());a.fa(b.n());a.w(b.j());a.G(b.sa());break;default:throw(new C).m(c);}}function Sb(){this.Ig=this.og=null}Sb.prototype=new u;Sb.prototype.constructor=Sb;
function fb(a,b){var c=new Sb;c.og=a;c.Ig=b;return c}Sb.prototype.unsubscribe=function(){var a=this.og;a.od(a.Xc.Hc(this))};Sb.prototype.$classData=t({Uh:0},!1,"com.nekogata.scalajs_drum_sequencer.Subscription",{Uh:1,b:1});function Tb(){this.pe=null}Tb.prototype=new u;Tb.prototype.constructor=Tb;Tb.prototype.$classData=t({ei:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.SequencerState",{ei:1,b:1});function Ub(){this.Qc=null}Ub.prototype=new u;Ub.prototype.constructor=Ub;
Ub.prototype.Eb=function(a){this.Qc=a;return this};Ub.prototype.$classData=t({fi:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.Track",{fi:1,b:1});function Vb(){this.kg=this.ng=this.mg=this.lg=null}Vb.prototype=new u;Vb.prototype.constructor=Vb;
Vb.prototype.a=function(){Wb=this;this.lg=Xb(Yb(),(new I).ra([!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1]));this.mg=Xb(Yb(),(new I).ra([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));this.ng=Xb(Yb(),(new I).ra([!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1]));this.kg=Xb(Yb(),(new I).ra([!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]));return this};Vb.prototype.$classData=t({gi:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.Track$",{gi:1,b:1});var Wb=void 0;
function Zb(){Wb||(Wb=(new Vb).a());return Wb}function $b(){this.t=null}$b.prototype=new u;$b.prototype.constructor=$b;$b.prototype.a=function(){ac=this;this.t=bc(new cc,120,ob(),Cb(),Cb());return this};$b.prototype.$classData=t({li:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl$",{li:1,b:1});var ac=void 0;function A(){ac||(ac=(new $b).a());return ac}function dc(){this.t=null}dc.prototype=new u;dc.prototype.constructor=dc;
dc.prototype.a=function(){ec=this;var a=new Tb,b=y();a.pe=b;this.t=a;return this};dc.prototype.$classData=t({ni:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SequencerStateRepositoryImpl$",{ni:1,b:1});var ec=void 0;function Ib(){ec||(ec=(new dc).a());return ec}function fc(){this.Ce=null}fc.prototype=new u;fc.prototype.constructor=fc;fc.prototype.a=function(){gc=this;this.Ce=new g.AudioContext;return this};
fc.prototype.$classData=t({oi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.Sound$",{oi:1,b:1});var gc=void 0;function hc(){gc||(gc=(new fc).a());return gc}function ic(){this.t=null}ic.prototype=new u;ic.prototype.constructor=ic;
ic.prototype.a=function(){jc=this;for(var a=y(),b=(new kc).a(),a=(new J).h(a,b),b=ib(),c=(new kc).a(),b=(new J).h(b,c),c=jb(),e=(new kc).a(),c=(new J).h(c,e),e=kb(),f=(new kc).a(),a=[a,b,c,(new J).h(e,f)],b=lc(new mc,nc()),c=0,e=a.length|0;c<e;)oc(b,a[c]),c=1+c|0;this.t=b.ab;return this};ic.prototype.$classData=t({qi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SoundRepositoryImpl$",{qi:1,b:1});var jc=void 0;function z(){jc||(jc=(new ic).a());return jc}
function pc(){this.t=this.Ld=this.oe=this.ie=this.Zd=null}pc.prototype=new u;pc.prototype.constructor=pc;
pc.prototype.a=function(){qc=this;this.Zd=(new Ub).Eb(Zb().lg);this.ie=(new Ub).Eb(Zb().mg);this.oe=(new Ub).Eb(Zb().ng);this.Ld=(new Ub).Eb(Zb().kg);for(var a=(new J).h(Cb(),y()),a=(new J).h(a,this.Zd),b=(new J).h(Cb(),ib()),b=(new J).h(b,this.ie),c=(new J).h(Cb(),jb()),c=(new J).h(c,this.oe),e=(new J).h(Cb(),kb()),e=(new J).h(e,this.Ld),f=(new J).h(Db(),y()),f=(new J).h(f,this.Zd),h=(new J).h(Db(),ib()),h=(new J).h(h,this.ie),k=(new J).h(Db(),jb()),k=(new J).h(k,this.oe),m=(new J).h(Db(),kb()),
m=(new J).h(m,this.Ld),n=(new J).h(Eb(),y()),n=(new J).h(n,this.Zd),B=(new J).h(Eb(),ib()),B=(new J).h(B,this.ie),F=(new J).h(Eb(),jb()),F=(new J).h(F,this.oe),ca=(new J).h(Eb(),kb()),ca=(new J).h(ca,this.Ld),hd=(new J).h(Fb(),y()),hd=(new J).h(hd,this.Zd),zi=(new J).h(Fb(),ib()),zi=(new J).h(zi,this.ie),Ai=(new J).h(Fb(),jb()),Ai=(new J).h(Ai,this.oe),Vm=(new J).h(Fb(),kb()),a=[a,b,c,e,f,h,k,m,n,B,F,ca,hd,zi,Ai,(new J).h(Vm,this.Ld)],b=lc(new mc,nc()),c=0,e=a.length|0;c<e;)oc(b,a[c]),c=1+c|0;this.t=
b.ab;return this};pc.prototype.$classData=t({si:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.TrackRepositoryImpl$",{si:1,b:1});var qc=void 0;function rc(){qc||(qc=(new pc).a());return qc}function sc(){this.ve=null}sc.prototype=new u;sc.prototype.constructor=sc;sc.prototype.a=function(){tc=this;this.ve=(new uc).a();return this};Object.defineProperty(sc.prototype,"PlayerStateChanged",{get:function(){return this.ve},configurable:!0});
sc.prototype.$classData=t({ui:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents$",{ui:1,b:1});var tc=void 0;function vc(){tc||(tc=(new sc).a());return tc}function wc(){this.ff=this.ef=null}wc.prototype=new u;wc.prototype.constructor=wc;wc.prototype.a=function(){xc=this;this.ef=(new yc).a();this.ff=(new zc).a();return this};Object.defineProperty(wc.prototype,"TrackStateChanged",{get:function(){return this.ff},configurable:!0});
Object.defineProperty(wc.prototype,"SequencerStateChanged",{get:function(){return this.ef},configurable:!0});wc.prototype.$classData=t({yi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$",{yi:1,b:1});var xc=void 0;function Ac(){xc||(xc=(new wc).a());return xc}function Na(){this.sc=null}Na.prototype=new u;Na.prototype.constructor=Na;function Lb(a){return a.sc.name}Na.prototype.o=function(){return(this.sc.isInterface?"interface ":this.sc.isPrimitive?"":"class ")+Lb(this)};
Na.prototype.$classData=t({Qi:0},!1,"java.lang.Class",{Qi:1,b:1});function Bc(){this.Hg=null}Bc.prototype=new u;Bc.prototype.constructor=Bc;Bc.prototype.a=function(){Cc=this;Dc(!1);this.Hg=Dc(!0);return this};Bc.prototype.$classData=t({gj:0},!1,"java.lang.System$",{gj:1,b:1});var Cc=void 0;function Ec(){}Ec.prototype=new u;Ec.prototype.constructor=Ec;function Fc(){}Fc.prototype=Ec.prototype;function Gc(){}Gc.prototype=new u;Gc.prototype.constructor=Gc;function Hc(){}Hc.prototype=Gc.prototype;
function Ic(){}Ic.prototype=new u;Ic.prototype.constructor=Ic;Ic.prototype.a=function(){return this};Ic.prototype.$classData=t({sj:0},!1,"scala.Predef$any2stringadd$",{sj:1,b:1});var Jc=void 0;function Kc(a,b,c){a.Af(x(function(a,b){return function(a){a.x(b)}}(a,b)),c)}function Lc(){}Lc.prototype=new u;Lc.prototype.constructor=Lc;
Lc.prototype.a=function(){Mc=this;for(var a=[(new J).h(q(Pa),q(ua)),(new J).h(q(Ra),q(oa)),(new J).h(q(Qa),q(Nc)),(new J).h(q(Sa),q(qa)),(new J).h(q(Ta),q(ra)),(new J).h(q(Ua),q(xa)),(new J).h(q(Va),q(sa)),(new J).h(q(Wa),q(ta)),(new J).h(q(Oa),q(va))],b=lc(new mc,nc()),c=0,e=a.length|0;c<e;)oc(b,a[c]),c=1+c|0;Oc(void 0);return this};Lc.prototype.$classData=t({vj:0},!1,"scala.concurrent.Future$",{vj:1,b:1});var Mc=void 0;function Pc(){}Pc.prototype=new u;Pc.prototype.constructor=Pc;
Pc.prototype.a=function(){return this};function Oc(a){Qc||(Qc=(new Pc).a());a=(new Rc).m(a);Sc||(Sc=(new Tc).a());Uc||(Uc=(new Vc).a());if((a=Wc(a)?Xc(a.vd):a)&&a.$classData&&a.$classData.l.Df){var b=new Yc;b.jd=a;a=b}else if(Wc(a))b=new Zc,b.jd=a,a=b;else throw(new C).m(a);return a}Pc.prototype.$classData=t({wj:0},!1,"scala.concurrent.Promise$",{wj:1,b:1});var Qc=void 0;function Vc(){}Vc.prototype=new u;Vc.prototype.constructor=Vc;Vc.prototype.a=function(){return this};
function Xc(a){return a&&a.$classData&&a.$classData.l.jn?(new Rc).m(a.Hd()):a&&a.$classData&&a.$classData.l.mh?$c(new ad,(new bd).Ma("Boxed ControlThrowable",a)):a&&a.$classData&&a.$classData.l.Zi?$c(new ad,(new bd).Ma("Boxed InterruptedException",a)):a&&a.$classData&&a.$classData.l.Ti?$c(new ad,(new bd).Ma("Boxed Error",a)):$c(new ad,a)}Vc.prototype.$classData=t({yj:0},!1,"scala.concurrent.impl.Promise$",{yj:1,b:1});var Uc=void 0;function Tc(){}Tc.prototype=new u;Tc.prototype.constructor=Tc;
Tc.prototype.a=function(){return this};Tc.prototype.$classData=t({zj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$",{zj:1,b:1});var Sc=void 0;function cd(){}cd.prototype=new u;cd.prototype.constructor=cd;cd.prototype.a=function(){return this};cd.prototype.$classData=t({Hj:0},!1,"scala.math.Ordered$",{Hj:1,b:1});var dd=void 0;function ed(){this.za=0}ed.prototype=new u;ed.prototype.constructor=ed;
ed.prototype.a=function(){fd=this;(new gd).a();id||(id=(new jd).a());kd||(kd=(new ld).a());Yb();md();K();nd();L();od||(od=(new pd).a());qd||(qd=(new rd).a());sd||(sd=(new td).a());ud();vd||(vd=(new wd).a());xd();yd||(yd=(new zd).a());Ad||(Ad=(new Bd).a());Cd||(Cd=(new Dd).a());Ed||(Ed=(new Fd).a());Gd||(Gd=(new Hd).a());Id||(Id=(new Jd).a());dd||(dd=(new cd).a());Kd||(Kd=(new Ld).a());Md||(Md=(new Nd).a());Od||(Od=(new Pd).a());Qd||(Qd=(new Rd).a());return this};
ed.prototype.$classData=t({Kj:0},!1,"scala.package$",{Kj:1,b:1});var fd=void 0;function Sd(){}Sd.prototype=new u;Sd.prototype.constructor=Sd;Sd.prototype.a=function(){Td=this;Ud||(Ud=(new Vd).a());Wd||(Wd=(new Xd).a());Yd||(Yd=(new Zd).a());$d||($d=(new ae).a());be||(be=(new ce).a());de||(de=(new ee).a());fe||(fe=(new ge).a());he||(he=(new ie).a());je||(je=(new ke).a());le||(le=(new me).a());ne||(ne=(new oe).a());pe||(pe=(new qe).a());re||(re=(new se).a());te||(te=(new ue).a());return this};
Sd.prototype.$classData=t({Mj:0},!1,"scala.reflect.ClassManifestFactory$",{Mj:1,b:1});var Td=void 0;function ve(){}ve.prototype=new u;ve.prototype.constructor=ve;ve.prototype.a=function(){return this};ve.prototype.$classData=t({Nj:0},!1,"scala.reflect.ManifestFactory$",{Nj:1,b:1});var we=void 0;function xe(){}xe.prototype=new u;xe.prototype.constructor=xe;xe.prototype.a=function(){ye=this;Td||(Td=(new Sd).a());we||(we=(new ve).a());return this};
xe.prototype.$classData=t({ck:0},!1,"scala.reflect.package$",{ck:1,b:1});var ye=void 0;function ze(){}ze.prototype=new u;ze.prototype.constructor=ze;ze.prototype.a=function(){(new Ae).a();return this};ze.prototype.$classData=t({hk:0},!1,"scala.util.control.Breaks",{hk:1,b:1});function Be(){}Be.prototype=new u;Be.prototype.constructor=Be;Be.prototype.a=function(){return this};
function Ce(a,b){return b&&b.$classData&&b.$classData.l.Hm||b&&b.$classData&&b.$classData.l.Gm||b&&b.$classData&&b.$classData.l.Zi||b&&b.$classData&&b.$classData.l.Em||b&&b.$classData&&b.$classData.l.mh?M():(new N).m(b)}Be.prototype.$classData=t({jk:0},!1,"scala.util.control.NonFatal$",{jk:1,b:1});var De=void 0;function Ee(){De||(De=(new Be).a());return De}function Fe(){}Fe.prototype=new u;Fe.prototype.constructor=Fe;function Ge(){}Ge.prototype=Fe.prototype;
Fe.prototype.Oe=function(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b};Fe.prototype.Qb=function(a,b){a=this.Oe(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0};function He(a,b,c){var e=(new Ie).mb(0),f=(new Ie).mb(0),h=(new Ie).mb(0),k=(new Ie).mb(1);b.x(x(function(a,b,c,e,f){return function(a){a=Je(O(),a);b.E=b.E+a|0;c.E^=a;0!==a&&(f.E=l(f.E,a));e.E=1+e.E|0}}(a,e,f,h,k)));b=a.Qb(c,e.E);b=a.Qb(b,f.E);b=a.Oe(b,k.E);return a.ed(b,h.E)}
function Ke(a){var b=Le(),c=a.Ea();if(0===c)return a=a.Ga(),Aa(r(),a);for(var e=-889275714,f=0;f<c;)e=b.Qb(e,Je(O(),a.Fa(f))),f=1+f|0;return b.ed(e,c)}Fe.prototype.ed=function(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)};function Me(a,b,c){var e=(new Ie).mb(0);c=(new Ie).mb(c);b.x(x(function(a,b,c){return function(e){c.E=a.Qb(c.E,Je(O(),e));b.E=1+b.E|0}}(a,e,c)));return a.ed(c.E,e.E)}function td(){}td.prototype=new u;td.prototype.constructor=td;
td.prototype.a=function(){return this};td.prototype.$classData=t({lk:0},!1,"scala.collection.$colon$plus$",{lk:1,b:1});var sd=void 0;function rd(){}rd.prototype=new u;rd.prototype.constructor=rd;rd.prototype.a=function(){return this};rd.prototype.$classData=t({mk:0},!1,"scala.collection.$plus$colon$",{mk:1,b:1});var qd=void 0;function Ne(){this.lb=null}Ne.prototype=new u;Ne.prototype.constructor=Ne;Ne.prototype.a=function(){Oe=this;this.lb=(new Pe).a();return this};
Ne.prototype.$classData=t({rk:0},!1,"scala.collection.Iterator$",{rk:1,b:1});var Oe=void 0;function K(){Oe||(Oe=(new Ne).a());return Oe}function Qe(a,b,c,e){return a.pd((new Re).a(),b,c,e).qb.$a}function Se(a,b,c,e,f){var h=Te();P(b,c);a.x(x(function(a,b,c,e){return function(a){if(e.E)Ue(b,a),e.E=!1;else return P(b,c),Ue(b,a)}}(a,b,e,h)));P(b,f);return b}function Ve(){}Ve.prototype=new u;Ve.prototype.constructor=Ve;function We(){}We.prototype=Ve.prototype;function Xe(){}Xe.prototype=new u;
Xe.prototype.constructor=Xe;function Ye(){}Ye.prototype=Xe.prototype;function Xb(a,b){if(b.i())return a.Vd();a=a.ja();a.tb(b);return a.bb()}Xe.prototype.Vd=function(){return this.ja().bb()};function Ze(a,b){a:for(;;){if(!b.i()){a.sb(b.qa());b=b.$();continue a}break}}function $e(a,b){b&&b.$classData&&b.$classData.l.ke?Ze(a,b):b.x(x(function(a){return function(b){return a.sb(b)}}(a)));return a}function af(){}af.prototype=new u;af.prototype.constructor=af;function bf(){}bf.prototype=af.prototype;
function wd(){}wd.prototype=new u;wd.prototype.constructor=wd;wd.prototype.a=function(){return this};wd.prototype.$classData=t({rl:0},!1,"scala.collection.immutable.Stream$$hash$colon$colon$",{rl:1,b:1});var vd=void 0;function cf(){this.Tf=this.Sh=null;this.za=!1;this.$c=null}cf.prototype=new u;cf.prototype.constructor=cf;function df(a,b,c){a.Tf=c;if(null===b)throw ef(D(),null);a.$c=b;return a}function ff(a){a.za||(a.za||(a.Sh=gf(a.Tf),a.za=!0),a.Tf=null);return a.Sh}
cf.prototype.$classData=t({vl:0},!1,"scala.collection.immutable.StreamIterator$LazyCell",{vl:1,b:1});function hf(){}hf.prototype=new u;hf.prototype.constructor=hf;hf.prototype.a=function(){return this};hf.prototype.$classData=t({wl:0},!1,"scala.collection.immutable.StringOps$",{wl:1,b:1});var jf=void 0;function kf(){}kf.prototype=new u;kf.prototype.constructor=kf;kf.prototype.a=function(){return this};kf.prototype.ja=function(){var a=(new Re).a();return lf(new mf,a,x(function(){return function(a){return(new nf).f(a)}}(this)))};
kf.prototype.$classData=t({El:0},!1,"scala.collection.immutable.WrappedString$",{El:1,b:1});var of=void 0;function pf(){this.Sc=null}pf.prototype=new u;pf.prototype.constructor=pf;pf.prototype.a=function(){qf=this;rf||(rf=(new sf).a());tf||(tf=(new uf).a());this.Sc=void 0===g.Promise?(new vf).a():(new wf).a();return this};pf.prototype.$classData=t({Rl:0},!1,"scala.scalajs.concurrent.JSExecutionContext$",{Rl:1,b:1});var qf=void 0;function xf(){this.Sc=null}xf.prototype=new u;
xf.prototype.constructor=xf;xf.prototype.a=function(){yf=this;rf||(rf=(new sf).a());qf||(qf=(new pf).a());this.Sc=qf.Sc;return this};xf.prototype.$classData=t({Sl:0},!1,"scala.scalajs.concurrent.JSExecutionContext$Implicits$",{Sl:1,b:1});var yf=void 0;function mb(){yf||(yf=(new xf).a());return yf}function uf(){}uf.prototype=new u;uf.prototype.constructor=uf;uf.prototype.a=function(){return this};uf.prototype.$classData=t({Tl:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$",{Tl:1,b:1});
var tf=void 0;function zf(){this.Ve=null}zf.prototype=new u;zf.prototype.constructor=zf;zf.prototype.a=function(){Af=this;this.Ve=g.Object.prototype.hasOwnProperty;return this};zf.prototype.$classData=t({Yl:0},!1,"scala.scalajs.js.WrappedDictionary$Cache$",{Yl:1,b:1});var Af=void 0;function Bf(){Af||(Af=(new zf).a());return Af}function Cf(){}Cf.prototype=new u;Cf.prototype.constructor=Cf;Cf.prototype.a=function(){return this};
function ub(a,b,c){g.setTimeout(function(a){return function(){gf(a)}}(c),b)}Cf.prototype.$classData=t({Zl:0},!1,"scala.scalajs.js.timers.package$",{Zl:1,b:1});var Df=void 0;function vb(){Df||(Df=(new Cf).a());return Df}function Ef(){this.ld=!1;this.Lg=this.Le=this.Kd=null;this.hf=!1;this.Wg=this.Ng=0}Ef.prototype=new u;Ef.prototype.constructor=Ef;
Ef.prototype.a=function(){Ff=this;this.Kd=(this.ld=!!(g.ArrayBuffer&&g.Int32Array&&g.Float32Array&&g.Float64Array))?new g.ArrayBuffer(8):null;this.Le=this.ld?new g.Int32Array(this.Kd,0,2):null;this.ld&&new g.Float32Array(this.Kd,0,2);this.Lg=this.ld?new g.Float64Array(this.Kd,0,1):null;if(this.ld)this.Le[0]=16909060,a=1===((new g.Int8Array(this.Kd,0,8))[0]|0);else var a=!0;this.Ng=(this.hf=a)?0:1;this.Wg=this.hf?1:0;return this};
function Ba(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.ld)a.Lg[0]=b,a=(new Gf).uc(a.Le[a.Wg]|0,a.Le[a.Ng]|0);else{if(b!==b)a=!1,b=2047,c=+g.Math.pow(2,51);else if(Infinity===b||-Infinity===b)a=0>b,b=2047,c=0;else if(0===b)a=-Infinity===1/b,c=b=0;else{var e=(a=0>b)?-b:b;if(e>=+g.Math.pow(2,-1022)){b=+g.Math.pow(2,52);var c=+g.Math.log(e)/.6931471805599453,c=+g.Math.floor(c)|0,c=1023>c?c:1023,f=+g.Math.pow(2,c);f>e&&(c=-1+c|0,f/=2);f=e/f*b;e=+g.Math.floor(f);f-=e;e=.5>f?e:.5<f?1+e:0!==e%
2?1+e:e;2<=e/b&&(c=1+c|0,e=1);1023<c?(c=2047,e=0):(c=1023+c|0,e-=b);b=c;c=e}else b=e/+g.Math.pow(2,-1074),c=+g.Math.floor(b),e=b-c,b=0,c=.5>e?c:.5<e?1+c:0!==c%2?1+c:c}c=+c;a=(new Gf).uc(c|0,(a?-2147483648:0)|(b|0)<<20|c/4294967296|0)}return a.Da^a.vb}Ef.prototype.$classData=t({cm:0},!1,"scala.scalajs.runtime.Bits$",{cm:1,b:1});var Ff=void 0;function Ca(){Ff||(Ff=(new Ef).a());return Ff}function Hf(){this.za=!1}Hf.prototype=new u;Hf.prototype.constructor=Hf;Hf.prototype.a=function(){return this};
function If(a,b){return null===b?"null":ka(b)}function Jf(){return g.String.fromCharCode(92)}function Aa(a,b){a=0;for(var c=1,e=-1+(b.length|0)|0;0<=e;)a=a+l(65535&(b.charCodeAt(e)|0),c)|0,c=l(31,c),e=-1+e|0;return a}Hf.prototype.$classData=t({em:0},!1,"scala.scalajs.runtime.RuntimeString$",{em:1,b:1});var Kf=void 0;function r(){Kf||(Kf=(new Hf).a());return Kf}function Lf(){this.Rg=!1;this.gg=this.jg=this.ig=null;this.za=0}Lf.prototype=new u;Lf.prototype.constructor=Lf;Lf.prototype.a=function(){return this};
function Mf(a){return(a.stack+"\n").replace(Nf("^[\\s\\S]+?\\s+at\\s+")," at ").replace(Q("^\\s+(at eval )?at\\s+","gm"),"").replace(Q("^([^\\(]+?)([\\n])","gm"),"{anonymous}() ($1)$2").replace(Q("^Object.\x3canonymous\x3e\\s*\\(([^\\)]+)\\)","gm"),"{anonymous}() ($1)").replace(Q("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$","gm"),"$1@$2").split("\n").slice(0,-1)}function Of(a){0===(8&a.za)&&0===(8&a.za)&&(a.gg=g.Object.keys(Pf(a)),a.za|=8);return a.gg}
function Qf(a){if(0===(2&a.za)&&0===(2&a.za)){for(var b={O:"java_lang_Object",T:"java_lang_String",V:"scala_Unit",Z:"scala_Boolean",C:"scala_Char",B:"scala_Byte",S:"scala_Short",I:"scala_Int",J:"scala_Long",F:"scala_Float",D:"scala_Double"},c=0;22>=c;)2<=c&&(b["T"+c]="scala_Tuple"+c),b["F"+c]="scala_Function"+c,c=1+c|0;a.ig=b;a.za|=2}return a.ig}
function Rf(a,b){var c=Nf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.c\\.|\\$c_)([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$"),e=Nf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.(?:s|f)\\.|\\$(?:s|f)_)((?:_[^_]|[^_])+)__([^\\.]+)$"),f=Nf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.m\\.|\\$m_)([^\\.]+)$"),h=!1,c=c.exec(b);null===c&&(c=e.exec(b),null===c&&(c=f.exec(b),h=!0));if(null!==c){b=c[1];if(void 0===b)throw(new R).f("undefined.get");b=36===(65535&(b.charCodeAt(0)|0))?b.substring(1):
b;e=Qf(a);if(Bf().Ve.call(e,b)){a=Qf(a);if(!Bf().Ve.call(a,b))throw(new R).f("key not found: "+b);a=a[b]}else a:for(f=0;;)if(f<(Of(a).length|0)){e=Of(a)[f];if(0<=(b.length|0)&&b.substring(0,e.length|0)===e){a=Pf(a);if(!Bf().Ve.call(a,e))throw(new R).f("key not found: "+e);a=""+a[e]+b.substring(e.length|0);break a}f=1+f|0}else{a=0<=(b.length|0)&&"L"===b.substring(0,1)?b.substring(1):b;break a}a=a.split("_").join(".").split("$und").join("_");if(h)h="\x3cclinit\x3e";else{h=c[2];if(void 0===h)throw(new R).f("undefined.get");
0<=(h.length|0)&&"init___"===h.substring(0,7)?h="\x3cinit\x3e":(c=h.indexOf("__")|0,h=0>c?h:h.substring(0,c))}return(new J).h(a,h)}return(new J).h("\x3cjscode\x3e",b)}function Sf(a){var b=Q("Line (\\d+).*script (?:in )?(\\S+)","i");a=a.message.split("\n");for(var c=[],e=2,f=a.length|0;e<f;){var h=b.exec(a[e]);if(null!==h){var k=h[2];if(void 0===k)throw(new R).f("undefined.get");h=h[1];if(void 0===h)throw(new R).f("undefined.get");c.push("{anonymous}()@"+k+":"+h)}e=2+e|0}return c}
function Pf(a){0===(4&a.za)&&0===(4&a.za)&&(a.jg={sjsr_:"scala_scalajs_runtime_",sjs_:"scala_scalajs_",sci_:"scala_collection_immutable_",scm_:"scala_collection_mutable_",scg_:"scala_collection_generic_",sc_:"scala_collection_",sr_:"scala_runtime_",s_:"scala_",jl_:"java_lang_",ju_:"java_util_"},a.za|=4);return a.jg}Lf.prototype.$classData=t({fm:0},!1,"scala.scalajs.runtime.StackTrace$",{fm:1,b:1});var Tf=void 0;function Uf(){}Uf.prototype=new u;Uf.prototype.constructor=Uf;Uf.prototype.a=function(){return this};
function Q(a,b){Vf||(Vf=(new Uf).a());return new g.RegExp(a,b)}function Nf(a){Vf||(Vf=(new Uf).a());return new g.RegExp(a)}Uf.prototype.$classData=t({gm:0},!1,"scala.scalajs.runtime.StackTrace$StringRE$",{gm:1,b:1});var Vf=void 0;function Wf(){}Wf.prototype=new u;Wf.prototype.constructor=Wf;Wf.prototype.a=function(){return this};function ef(a,b){return Xf(b)?b.Mc:b}function Yf(a,b){return b&&b.$classData&&b.$classData.l.hb?b:(new Zf).m(b)}
Wf.prototype.$classData=t({hm:0},!1,"scala.scalajs.runtime.package$",{hm:1,b:1});var $f=void 0;function D(){$f||($f=(new Wf).a());return $f}function ag(){}ag.prototype=new u;ag.prototype.constructor=ag;ag.prototype.a=function(){return this};function bg(a,b){if(cg(b))return a.na===b.na;if(dg(b)){if("number"===typeof b)return+b===a.na;if(wa(b)){b=Ia(b);var c=b.vb;a=a.na;return b.Da===a&&c===a>>31}return null===b?null===a:ya(b,a)}return null===a&&null===b}
function S(a,b,c){if(b===c)c=!0;else if(dg(b))a:if(dg(c))c=eg(b,c);else{if(cg(c)){if("number"===typeof b){c=+b===c.na;break a}if(wa(b)){a=Ia(b);b=a.vb;c=c.na;c=a.Da===c&&b===c>>31;break a}}c=null===b?null===c:ya(b,c)}else c=cg(b)?bg(b,c):null===b?null===c:ya(b,c);return c}
function eg(a,b){if("number"===typeof a){a=+a;if("number"===typeof b)return a===+b;if(wa(b)){var c=Ia(b);b=c.Da;c=c.vb;return a===fg(Ja(),b,c)}return b&&b.$classData&&b.$classData.l.Jj?b.ha(a):!1}if(wa(a)){c=Ia(a);a=c.Da;c=c.vb;if(wa(b)){b=Ia(b);var e=b.vb;return a===b.Da&&c===e}return"number"===typeof b?(b=+b,fg(Ja(),a,c)===b):b&&b.$classData&&b.$classData.l.Jj?b.ha((new Gf).uc(a,c)):!1}return null===a?null===b:ya(a,b)}ag.prototype.$classData=t({jm:0},!1,"scala.runtime.BoxesRunTime$",{jm:1,b:1});
var gg=void 0;function T(){gg||(gg=(new ag).a());return gg}var hg=t({mm:0},!1,"scala.runtime.Null$",{mm:1,b:1});function ig(){}ig.prototype=new u;ig.prototype.constructor=ig;ig.prototype.a=function(){return this};function jg(a,b){if(Mb(b,1)||ab(b,1)||db(b,1)||bb(b,1)||cb(b,1)||Ya(b,1)||Za(b,1)||$a(b,1)||Xa(b,1)||kg(b))return b.c.length;if(null===b)throw(new lg).a();throw(new C).m(b);}
function mg(a,b,c,e){if(Mb(b,1))b.c[c]=e;else if(ab(b,1))b.c[c]=e|0;else if(db(b,1))b.c[c]=+e;else if(bb(b,1))b.c[c]=Ia(e);else if(cb(b,1))b.c[c]=+e;else if(Ya(b,1))b.c[c]=null===e?0:e.na;else if(Za(b,1))b.c[c]=e|0;else if($a(b,1))b.c[c]=e|0;else if(Xa(b,1))b.c[c]=!!e;else if(kg(b))b.c[c]=void 0;else{if(null===b)throw(new lg).a();throw(new C).m(b);}}function ng(a){og();var b=a.Na();return Qe(b,a.Ga()+"(",",",")")}ig.prototype.$classData=t({om:0},!1,"scala.runtime.ScalaRunTime$",{om:1,b:1});
var pg=void 0;function og(){pg||(pg=(new ig).a());return pg}function qg(){}qg.prototype=new u;qg.prototype.constructor=qg;d=qg.prototype;d.a=function(){return this};d.Oe=function(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b};
function Je(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=Ja();var c;if(-9223372036854775808>a)b.Ye=-2147483648,c=0;else if(0x7fffffffffffffff<=a)b.Ye=2147483647,c=-1;else{c=a|0;var e=a/4294967296|0;b.Ye=0>a&&0!==c?-1+e|0:e}b=b.Ye;a=fg(Ja(),c,b)===a?c^b:Ba(Ca(),a)}return a}return wa(b)?(a=Ia(b),b=(new Gf).uc(a.Da,a.vb),a=b.Da,b=b.vb,b===a>>31?a:a^b):za(b)}
d.Qb=function(a,b){a=this.Oe(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0};d.ed=function(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)};d.$classData=t({qm:0},!1,"scala.runtime.Statics$",{qm:1,b:1});var rg=void 0;function O(){rg||(rg=(new qg).a());return rg}function sg(){this.eg=null}sg.prototype=new u;sg.prototype.constructor=sg;sg.prototype.be=function(){return!0};
sg.prototype.ge=function(){var a=hc().Ce.createBufferSource();a.buffer=this.eg;a.connect(hc().Ce.destination);a.start(0)};sg.prototype.de=function(){Mc||(Mc=(new Lc).a());return Oc(this)};sg.prototype.$classData=t({ii:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.LoadedSoundImpl",{ii:1,b:1,hi:1});function kc(){}kc.prototype=new u;kc.prototype.constructor=kc;d=kc.prototype;d.a=function(){return this};
function tg(a,b,c){b=b.response;return hc().Ce.decodeAudioData(b,function(a,b){return function(a){var c=new sg;c.eg=a;a=(new Rc).m(c);return Nb(b,a)}}(a,c),function(a,b){return function(){var a=(new ug).f("can't load sound file");return Nb(b,$c(new ad,a))}}(a,c))}d.be=function(){return!1};d.ge=function(){};d.de=function(a){var b=new g.XMLHttpRequest;b.open("GET",a);b.responseType="arraybuffer";a=(new vg).a();b.onload=function(a,b,f){return function(){return tg(a,b,f)}}(this,b,a);b.send();return a};
d.$classData=t({ji:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.NotYetLoadedSoundImpl",{ji:1,b:1,hi:1});function wg(){}wg.prototype=new u;wg.prototype.constructor=wg;wg.prototype.a=function(){return this};function tb(a){A().t=a;a=vc().ve;gb(a)}wg.prototype.$classData=t({ki:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl",{ki:1,b:1,vm:1});function xg(){}xg.prototype=new u;xg.prototype.constructor=xg;xg.prototype.a=function(){return this};
xg.prototype.$classData=t({mi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SequencerStateRepositoryImpl",{mi:1,b:1,wm:1});function yg(){}yg.prototype=new u;yg.prototype.constructor=yg;yg.prototype.a=function(){return this};function lb(a,b){z().t=z().t.Cb(a,b);a=vc().ve;gb(a)}yg.prototype.$classData=t({pi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SoundRepositoryImpl",{pi:1,b:1,ym:1});function zg(){}zg.prototype=new u;zg.prototype.constructor=zg;zg.prototype.a=function(){return this};
function qb(a,b){return rc().t.g((new J).h(a,b))}zg.prototype.$classData=t({ri:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.TrackRepositoryImpl",{ri:1,b:1,xm:1});function Ag(){}Ag.prototype=new u;Ag.prototype.constructor=Ag;Ag.prototype.a=function(){(new wg).a();(new zg).a();(new yg).a();return this};
Ag.prototype.setNextPattern=function(a){if("A"===a)var b=Cb();else if("B"===a)b=Db();else if("C"===a)b=Eb();else{if("D"!==a)throw(new C).m(a);b=Fb()}a=A().t;a=zb(a)?bc(new cc,a.ub,a.xb,a.Xa,b):bc(new cc,a.ub,a.xb,b,b);tb(a)};Ag.prototype.setBpm=function(a){a|=0;var b=A().t;tb(bc(new cc,a,b.xb,b.Xa,b.Rb))};Ag.prototype.stop=function(){var a;a=A().t;var b=ob();a=bc(new cc,a.ub,b,a.Xa,a.Rb);tb(a)};Ag.prototype.play=function(){rb(this)};Ag.prototype.loadSounds=function(){hb(this)};
Ag.prototype.$classData=t({ti:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerCommandImpl",{ti:1,b:1,tm:1});function uc(){this.Xc=null}uc.prototype=new u;uc.prototype.constructor=uc;uc.prototype.a=function(){this.od(Bg());return this};uc.prototype.od=function(a){this.Xc=a};uc.prototype.Id=function(a){eb(this,a)};uc.prototype.subscribe=function(a){return this.Id(a)};uc.prototype.$classData=t({vi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents$$anon$1",{vi:1,b:1,$f:1});
function U(){}U.prototype=new u;U.prototype.constructor=U;U.prototype.a=function(){(new wg).a();(new yg).a();return this};U.prototype.playingNotePosition=function(){var a;a=A().t.xb;if(ob()===a)a=-1;else if(pb(a))a=a.Rc;else throw(new C).m(a);return a};U.prototype.areSoundsReady=function(){var a=y(),a=z().t.g(a).be(),b=ib(),b=z().t.g(b).be(),c=jb(),c=z().t.g(c).be(),e=kb(),e=z().t.g(e).be();return a&&b&&c&&e};U.prototype.isPlaying=function(){return zb(A().t)};U.prototype.bpm=function(){return A().t.ub};
U.prototype.playingPatternId=function(){return Bb()};U.prototype.nextPatternId=function(){return Gb()};U.prototype.$classData=t({wi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerQueryImpl",{wi:1,b:1,zm:1});function Cg(){}Cg.prototype=new u;Cg.prototype.constructor=Cg;Cg.prototype.a=function(){(new xg).a();(new wg).a();(new zg).a();return this};
Cg.prototype.toggleNote=function(a){var b=a|0,c=Ib().t;a=A().t.Xa;var c=c.pe,e=qb(a,c),f=e.Qc,e=e.Qc.Ja(b),h=Yb(),b=(new Ub).Eb(f.Rh(b,!e,h.ya));rc().t=rc().t.Cb((new J).h(a,c),b);a=Ac().ff;gb(a)};Cg.prototype.selectTrack=function(a){if("HH"===a)a=y();else if("RS"===a)a=ib();else if("SD"===a)a=jb();else{if("BD"!==a)throw(new C).m(a);a=kb()}Ib();var b=new Tb;b.pe=a;Ib().t=b;a=Ac().ef;gb(a)};
Cg.prototype.$classData=t({xi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerCommandImpl",{xi:1,b:1,um:1});function yc(){this.Xc=null}yc.prototype=new u;yc.prototype.constructor=yc;yc.prototype.a=function(){this.od(Bg());return this};yc.prototype.od=function(a){this.Xc=a};yc.prototype.Id=function(a){eb(this,a)};yc.prototype.subscribe=function(a){return this.Id(a)};
yc.prototype.$classData=t({zi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$$anon$1",{zi:1,b:1,$f:1});function zc(){this.Xc=null}zc.prototype=new u;zc.prototype.constructor=zc;zc.prototype.a=function(){this.od(Bg());return this};zc.prototype.od=function(a){this.Xc=a};zc.prototype.Id=function(a){eb(this,a)};zc.prototype.subscribe=function(a){return this.Id(a)};
zc.prototype.$classData=t({Ai:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$$anon$2",{Ai:1,b:1,$f:1});function Dg(){}Dg.prototype=new u;Dg.prototype.constructor=Dg;Dg.prototype.a=function(){(new zg).a();(new xg).a();(new wg).a();return this};Dg.prototype.selectedTrackName=function(){return Hb()};Dg.prototype.notes=function(){return Jb()};Dg.prototype.$classData=t({Bi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerQueryImpl",{Bi:1,b:1,Am:1});function Eg(){}
Eg.prototype=new u;Eg.prototype.constructor=Eg;function Fg(){}Fg.prototype=Eg.prototype;function dg(a){return!!(a&&a.$classData&&a.$classData.l.fd||"number"===typeof a)}function Gg(){this.Xd=this.ee=this.td=null;this.Pd=this.ce=0}Gg.prototype=new u;Gg.prototype.constructor=Gg;Gg.prototype.ha=function(a){return a&&a.$classData&&a.$classData.l.Ug?this.Xd===a.Xd&&this.ce===a.ce&&this.td===a.td&&this.ee===a.ee:!1};
Gg.prototype.o=function(){var a="";"\x3cjscode\x3e"!==this.td&&(a=""+a+this.td+".");a=""+a+this.ee;null===this.Xd?a+="(Unknown Source)":(a=""+a+Hg((new Ig).Eb((new I).ra(["(",""])),(new I).ra([this.Xd])),0<=this.ce&&(a=""+a+Hg((new Ig).Eb((new I).ra([":",""])),(new I).ra([this.ce])),0<=this.Pd&&(a=""+a+Hg((new Ig).Eb((new I).ra([":",""])),(new I).ra([this.Pd])))),a+=")");return a};Gg.prototype.y=function(){var a=this.td,a=Aa(r(),a),b=this.ee;return a^Aa(r(),b)};
Gg.prototype.setColumnNumber=function(a){this.Pd=a|0};Gg.prototype.getColumnNumber=function(){return this.Pd};var Jg=t({Ug:0},!1,"java.lang.StackTraceElement",{Ug:1,b:1,d:1});Gg.prototype.$classData=Jg;function V(){this.Ed=this.Ee=this.ah=null}V.prototype=new u;V.prototype.constructor=V;function Kg(){}Kg.prototype=V.prototype;
V.prototype.Ie=function(){if(void 0===g.Error.captureStackTrace){try{var a={}.undef()}catch(b){if(a=Yf(D(),b),null!==a)if(Xf(a))a=a.Mc;else throw ef(D(),a);else throw b;}this.stackdata=a}else g.Error.captureStackTrace(this),this.stackdata=this;return this};V.prototype.tf=function(){return this.ah};V.prototype.o=function(){var a=Lb(la(this)),b=this.tf();return null===b?a:a+": "+b};
function Lg(a){if(null===a.Ed){Tf||(Tf=(new Lf).a());var b=Tf,c=a.stackdata,e;if(c){if(0===(1&b.za)&&0===(1&b.za)){a:try{g.Packages.org.mozilla.javascript.JavaScriptException,e=!0}catch(hd){e=Yf(D(),hd);if(null!==e){if(Xf(e)){e=!1;break a}throw ef(D(),e);}throw hd;}b.Rg=e;b.za|=1}if(b.Rg)e=c.stack,e=(void 0===e?"":e).replace(Q("^\\s+at\\s+","gm"),"").replace(Q("^(.+?)(?: \\((.+)\\))?$","gm"),"$2@$1").replace(Q("\\r\\n?","gm"),"\n").split("\n");else if(c.arguments&&c.stack)e=Mf(c);else if(c.stack&&
c.sourceURL)e=c.stack.replace(Q("\\[native code\\]\\n","m"),"").replace(Q("^(?\x3d\\w+Error\\:).*$\\n","m"),"").replace(Q("^@","gm"),"{anonymous}()@").split("\n");else if(c.stack&&c.number)e=c.stack.replace(Q("^\\s*at\\s+(.*)$","gm"),"$1").replace(Q("^Anonymous function\\s+","gm"),"{anonymous}() ").replace(Q("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$","gm"),"$1@$2").split("\n").slice(1);else if(c.stack&&c.fileName)e=c.stack.replace(Q("(?:\\n@:0)?\\s+$","m"),"").replace(Q("^(?:\\((\\S*)\\))?@",
"gm"),"{anonymous}($1)@").split("\n");else if(c.message&&c["opera#sourceloc"])if(c.stacktrace)if(-1<c.message.indexOf("\n")&&c.message.split("\n").length>c.stacktrace.split("\n").length)e=Sf(c);else{e=Q("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$","i");for(var c=c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){var m=e.exec(c[h]);if(null!==m){var n=m[3],n=void 0===n?"{anonymous}":n,B=m[2];if(void 0===B)throw(new R).f("undefined.get");m=m[1];if(void 0===m)throw(new R).f("undefined.get");
f.push(n+"()@"+B+":"+m)}h=2+h|0}e=f}else e=Sf(c);else if(c.message&&c.stack&&c.stacktrace){if(0>c.stacktrace.indexOf("called from line"))for(e=Nf("^(.*)@(.+):(\\d+)$"),c=c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){m=e.exec(c[h]);if(null!==m){n=m[1];n=void 0===n?"global code":n+"()";B=m[2];if(void 0===B)throw(new R).f("undefined.get");m=m[3];if(void 0===m)throw(new R).f("undefined.get");f.push(n+"@"+B+":"+m)}h=1+h|0}else for(e=Nf("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"),c=
c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){m=e.exec(c[h]);if(null!==m){n=m[4];if(void 0===n)throw(new R).f("undefined.get");B=m[1];if(void 0===B)throw(new R).f("undefined.get");var F=m[2];if(void 0===F)throw(new R).f("undefined.get");n=n+":"+B+":"+F;m=m[2];m=(void 0===m?"global code":m).replace(Nf("\x3canonymous function: (\\S+)\x3e"),"$1").replace(Nf("\x3canonymous function\x3e"),"{anonymous}");f.push(m+"@"+n)|0}h=2+h|0}e=f}else e=c.stack&&!c.fileName?Mf(c):[]}else e=[];f=e;h=Nf("^([^\\@]*)\\@(.*):([0-9]+)$");
k=Nf("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$");c=[];for(e=0;e<(f.length|0);){m=f[e];if(null===m)throw(new lg).a();if(""!==m)if(n=k.exec(m),null!==n){m=n[1];if(void 0===m)throw(new R).f("undefined.get");B=Rf(b,m);if(null===B)throw(new C).m(B);m=B.Ia;B=B.Ta;F=n[2];if(void 0===F)throw(new R).f("undefined.get");var ca=n[3];if(void 0===ca)throw(new R).f("undefined.get");ca=(new Mg).f(ca);ca=Ng(Og(),ca.Oa);n=n[4];if(void 0===n)throw(new R).f("undefined.get");n=(new Mg).f(n);n=Ng(Og(),n.Oa);c.push({declaringClass:m,
methodName:B,fileName:F,lineNumber:ca,columnNumber:void 0===n?void 0:n})}else if(n=h.exec(m),null!==n){m=n[1];if(void 0===m)throw(new R).f("undefined.get");B=Rf(b,m);if(null===B)throw(new C).m(B);m=B.Ia;B=B.Ta;F=n[2];if(void 0===F)throw(new R).f("undefined.get");n=n[3];if(void 0===n)throw(new R).f("undefined.get");n=(new Mg).f(n);n=Ng(Og(),n.Oa);c.push({declaringClass:m,methodName:B,fileName:F,lineNumber:n,columnNumber:void 0})}else c.push({declaringClass:"\x3cjscode\x3e",methodName:m,fileName:null,
lineNumber:-1,columnNumber:void 0})|0;e=1+e|0}b=aa.sourceMapper;b=void 0===b?c:b(c);c=p(w(Jg),[b.length|0]);for(e=0;e<(b.length|0);)f=b[e],h=f.methodName,k=f.fileName,m=f.lineNumber|0,n=new Gg,n.td=f.declaringClass,n.ee=h,n.Xd=k,n.ce=m,n.Pd=-1,h=n,f=f.columnNumber,void 0!==f&&h.setColumnNumber(f|0),c.c[e]=h,e=1+e|0;a.Ed=c}return a.Ed}V.prototype.Ma=function(a,b){this.ah=a;this.Ee=b;this.Ie();return this};
function Pg(a){Cc||(Cc=(new Bc).a());var b=function(a,b){return function(a){Qg(b,null===a?"null":a);Qg(b,"\n")}}(a,Cc.Hg);Lg(a);var c=a.o();b(c);if(0!==a.Ed.c.length)for(c=0;c<a.Ed.c.length;)b("  at "+a.Ed.c[c]),c=1+c|0;else b("  \x3cno stack trace available\x3e");for(;;)if(a!==a.Ee&&null!==a.Ee){var e=Lg(a);a=a.Ee;var c=Lg(a),f=c.c.length,h=e.c.length,k="Caused by: "+a.o();b(k);if(0!==f){for(k=0;;){if(k<f&&k<h)var m=c.c[-1+(f-k|0)|0],n=e.c[-1+(h-k|0)|0],m=null===m?null===n:m.ha(n);else m=!1;if(m)k=
1+k|0;else break}0<k&&(k=-1+k|0);e=f-k|0;for(f=0;f<e;)b("  at "+c.c[f]),f=1+f|0;0<k&&b("  ... "+k+" more")}else b("  \x3cno stack trace available\x3e")}else break}function Rg(){}Rg.prototype=new u;Rg.prototype.constructor=Rg;Rg.prototype.a=function(){return this};Rg.prototype.Ae=function(){return(new Re).a()};Rg.prototype.ze=function(){return(new Re).a()};Rg.prototype.$classData=t({rj:0},!1,"scala.Predef$$anon$3",{rj:1,b:1,If:1});function gd(){}gd.prototype=new u;gd.prototype.constructor=gd;
gd.prototype.a=function(){return this};gd.prototype.o=function(){return"object AnyRef"};gd.prototype.$classData=t({Lj:0},!1,"scala.package$$anon$1",{Lj:1,b:1,Qm:1});function Sg(){this.Jh=this.Xg=this.Rf=0}Sg.prototype=new Ge;Sg.prototype.constructor=Sg;Sg.prototype.a=function(){Tg=this;this.Rf=Aa(r(),"Seq");this.Xg=Aa(r(),"Map");this.Jh=Aa(r(),"Set");return this};
function Ug(a,b){if(Vg(b)){for(var c=0,e=a.Rf,f=b;!f.i();)b=f.qa(),f=f.qc(),e=a.Qb(e,Je(O(),b)),c=1+c|0;a=a.ed(e,c)}else a=Me(a,b,a.Rf);return a}Sg.prototype.$classData=t({kk:0},!1,"scala.util.hashing.MurmurHash3$",{kk:1,Vm:1,b:1});var Tg=void 0;function Le(){Tg||(Tg=(new Sg).a());return Tg}function Wg(a,b){for(var c=!0;c&&a.ia();)c=!!b.g(a.ka());return c}function Xg(a,b){for(;a.ia();)b.g(a.ka())}
function Yg(a){if(a.ia()){var b=a.ka();return Zg(new $g,b,wb(function(a){return function(){return a.ib()}}(a)))}ud();return ah()}function bh(){}bh.prototype=new Ye;bh.prototype.constructor=bh;function ch(){}ch.prototype=bh.prototype;function W(){this.ya=null}W.prototype=new Ye;W.prototype.constructor=W;function dh(){}dh.prototype=W.prototype;W.prototype.a=function(){this.ya=(new eh).ae(this);return this};function fh(){this.$c=null}fh.prototype=new u;fh.prototype.constructor=fh;function gh(){}
gh.prototype=fh.prototype;fh.prototype.Ae=function(){return this.$c.ja()};fh.prototype.ze=function(a){return a.Wa().ja()};fh.prototype.ae=function(a){if(null===a)throw ef(D(),null);this.$c=a;return this};function hh(){}hh.prototype=new We;hh.prototype.constructor=hh;function ih(){}ih.prototype=hh.prototype;function jh(){this.zf=null}jh.prototype=new bf;jh.prototype.constructor=jh;function kh(a,b){a.zf=b;b=new lh;if(null===a)throw ef(D(),null);b.Db=a}
jh.prototype.gf=function(a,b){var c=this.zf;return(0,c.tc)(a,b)};jh.prototype.$classData=t({Ek:0},!1,"scala.collection.immutable.HashMap$$anon$2",{Ek:1,Jk:1,b:1});function lh(){this.Db=null}lh.prototype=new bf;lh.prototype.constructor=lh;lh.prototype.gf=function(a,b){var c=this.Db.zf;return(0,c.tc)(b,a)};lh.prototype.$classData=t({Fk:0},!1,"scala.collection.immutable.HashMap$$anon$2$$anon$3",{Fk:1,Jk:1,b:1});function mh(){}mh.prototype=new u;mh.prototype.constructor=mh;mh.prototype.a=function(){return this};
mh.prototype.g=function(){return this};mh.prototype.o=function(){return"\x3cfunction1\x3e"};mh.prototype.$classData=t({Tk:0},!1,"scala.collection.immutable.List$$anon$1",{Tk:1,b:1,z:1});function nh(a,b,c){c=c.Wc();switch(c){case -1:break;default:a.Kb(b<c?b:c)}}function oh(){}oh.prototype=new u;oh.prototype.constructor=oh;function ph(){}ph.prototype=oh.prototype;oh.prototype.o=function(){return"\x3cfunction0\x3e"};function qh(){}qh.prototype=new u;qh.prototype.constructor=qh;function rh(){}
rh.prototype=qh.prototype;qh.prototype.o=function(){return"\x3cfunction1\x3e"};function sh(){}sh.prototype=new u;sh.prototype.constructor=sh;function th(){}th.prototype=sh.prototype;sh.prototype.o=function(){return"\x3cfunction2\x3e"};function uh(){this.E=!1}uh.prototype=new u;uh.prototype.constructor=uh;uh.prototype.o=function(){return""+this.E};function Te(){var a=new uh;a.E=!0;return a}uh.prototype.$classData=t({im:0},!1,"scala.runtime.BooleanRef",{im:1,b:1,d:1});
function kg(a){return!!(a&&a.$classData&&1===a.$classData.rd&&a.$classData.qd.l.Nh)}var va=t({Nh:0},!1,"scala.runtime.BoxedUnit",{Nh:1,b:1,d:1},void 0,void 0,function(a){return void 0===a});function Ie(){this.E=0}Ie.prototype=new u;Ie.prototype.constructor=Ie;Ie.prototype.o=function(){return""+this.E};Ie.prototype.mb=function(a){this.E=a;return this};Ie.prototype.$classData=t({km:0},!1,"scala.runtime.IntRef",{km:1,b:1,d:1});function vh(){this.E=null}vh.prototype=new u;vh.prototype.constructor=vh;
vh.prototype.o=function(){return If(r(),this.E)};vh.prototype.m=function(a){this.E=a;return this};vh.prototype.$classData=t({nm:0},!1,"scala.runtime.ObjectRef",{nm:1,b:1,d:1});var ua=t({Ni:0},!1,"java.lang.Boolean",{Ni:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return"boolean"===typeof a});function wh(){this.na=0}wh.prototype=new u;wh.prototype.constructor=wh;wh.prototype.ha=function(a){return cg(a)?this.na===a.na:!1};wh.prototype.o=function(){return g.String.fromCharCode(this.na)};
function xh(a){var b=new wh;b.na=a;return b}wh.prototype.y=function(){return this.na};function cg(a){return!!(a&&a.$classData&&a.$classData.l.Tg)}var Nc=t({Tg:0},!1,"java.lang.Character",{Tg:1,b:1,d:1,Gb:1});wh.prototype.$classData=Nc;function yh(){this.za=0}yh.prototype=new u;yh.prototype.constructor=yh;yh.prototype.a=function(){return this};yh.prototype.$classData=t({Pi:0},!1,"java.lang.Character$",{Pi:1,b:1,e:1,d:1});var zh=void 0;function Ah(){V.call(this)}Ah.prototype=new Kg;
Ah.prototype.constructor=Ah;function Bh(){}Bh.prototype=Ah.prototype;function Ch(){V.call(this)}Ch.prototype=new Kg;Ch.prototype.constructor=Ch;function Dh(){}Dh.prototype=Ch.prototype;function Eh(){}Eh.prototype=new u;Eh.prototype.constructor=Eh;Eh.prototype.a=function(){return this};function Fh(a){throw(new Gh).f(Hg((new Ig).Eb((new I).ra(['For input string: "','"'])),(new I).ra([a])));}
function Ng(a,b){if(null===b||0===((new Mg).f(b).Oa.length|0))Fh(b);else if(a=45===(65535&(b.charCodeAt(0)|0))||43===(65535&(b.charCodeAt(0)|0))?1:0,((new Mg).f(b).Oa.length|0)<=a)Fh(b);else{for(;;){var c=a,e=(new Mg).f(b).Oa;if(c<(e.length|0))zh||(zh=(new yh).a()),c=65535&(b.charCodeAt(a)|0),0>(48<=c&&57>=c&&10>(-48+c|0)?-48+c|0:65<=c&&90>=c&&0>(-65+c|0)?-55+c|0:97<=c&&122>=c&&0>(-97+c|0)?-87+c|0:65313<=c&&65338>=c&&0>(-65313+c|0)?-65303+c|0:65345<=c&&65370>=c&&0>(-65345+c|0)?-65303+c|0:-1)&&Fh(b),
a=1+a|0;else break}a=+g.parseInt(b,10);return a!==a||2147483647<a||-2147483648>a?Fh(b):2147483647<a?2147483647:-2147483648>a?-2147483648:a|0}}function Hh(a,b){a=b-(1431655765&b>>1)|0;a=(858993459&a)+(858993459&a>>2)|0;return l(16843009,252645135&(a+(a>>4)|0))>>24}Eh.prototype.$classData=t({Yi:0},!1,"java.lang.Integer$",{Yi:1,b:1,e:1,d:1});var Ih=void 0;function Og(){Ih||(Ih=(new Eh).a());return Ih}function Jh(){this.na=null}Jh.prototype=new u;Jh.prototype.constructor=Jh;function Kh(){}
Kh.prototype=Jh.prototype;function Lh(a,b,c){return b===a.na?(a.na=c,!0):!1}Jh.prototype.m=function(a){this.na=a;return this};function Mh(){}Mh.prototype=new Hc;Mh.prototype.constructor=Mh;Mh.prototype.a=function(){Nh=this;fd||(fd=(new ed).a());nd();Oh||(Oh=(new Ph).a());Qh();ye||(ye=(new xe).a());ye||(ye=(new xe).a());Rh||(Rh=(new Sh).a());(new Rg).a();(new Th).a();(new Uh).a();return this};function Vh(a,b){if(!b)throw(new G).f("requirement failed");}
Mh.prototype.$classData=t({oj:0},!1,"scala.Predef$",{oj:1,Lm:1,b:1,Jm:1});var Nh=void 0;function Wh(){Nh||(Nh=(new Mh).a());return Nh}function Xh(){}Xh.prototype=new u;Xh.prototype.constructor=Xh;Xh.prototype.a=function(){return this};Xh.prototype.$classData=t({tj:0},!1,"scala.StringContext$",{tj:1,b:1,e:1,d:1});var Yh=void 0;function Zh(){this.na=this.Zg=this.Ge=null}Zh.prototype=new u;Zh.prototype.constructor=Zh;
function $h(a){Vh(Wh(),null!==a.na);try{a.Zg.g(a.na)}catch(e){var b=Yf(D(),e);if(null!==b){var c=Ce(Ee(),b);if(c.i())throw ef(D(),b);b=c.uf();a.Ge.Re(b)}else throw e;}}function ai(a,b){var c=new Zh;c.Ge=a;c.Zg=b;c.na=null;return c}function bi(a,b){Vh(Wh(),null===a.na);a.na=b;try{a.Ge.sf(a)}catch(e){if(b=Yf(D(),e),null!==b){var c=Ce(Ee(),b);if(c.i())throw ef(D(),b);b=c.uf();a.Ge.Re(b)}else throw e;}}Zh.prototype.$classData=t({xj:0},!1,"scala.concurrent.impl.CallbackRunnable",{xj:1,b:1,Fm:1,Rm:1});
function ci(a){a=a.Vf();if(di(a))return"Future("+a.rb+")";if(M()===a)return"Future(\x3cnot completed\x3e)";throw(new C).m(a);}function Fd(){}Fd.prototype=new u;Fd.prototype.constructor=Fd;Fd.prototype.a=function(){return this};Fd.prototype.$classData=t({Ej:0},!1,"scala.math.Fractional$",{Ej:1,b:1,e:1,d:1});var Ed=void 0;function Hd(){}Hd.prototype=new u;Hd.prototype.constructor=Hd;Hd.prototype.a=function(){return this};Hd.prototype.$classData=t({Fj:0},!1,"scala.math.Integral$",{Fj:1,b:1,e:1,d:1});
var Gd=void 0;function Jd(){}Jd.prototype=new u;Jd.prototype.constructor=Jd;Jd.prototype.a=function(){return this};Jd.prototype.$classData=t({Gj:0},!1,"scala.math.Numeric$",{Gj:1,b:1,e:1,d:1});var Id=void 0;function Nd(){}Nd.prototype=new u;Nd.prototype.constructor=Nd;Nd.prototype.a=function(){return this};Nd.prototype.$classData=t({dk:0},!1,"scala.util.Either$",{dk:1,b:1,e:1,d:1});var Md=void 0;function Pd(){}Pd.prototype=new u;Pd.prototype.constructor=Pd;Pd.prototype.a=function(){return this};
Pd.prototype.o=function(){return"Left"};Pd.prototype.$classData=t({ek:0},!1,"scala.util.Left$",{ek:1,b:1,e:1,d:1});var Od=void 0;function Rd(){}Rd.prototype=new u;Rd.prototype.constructor=Rd;Rd.prototype.a=function(){return this};Rd.prototype.o=function(){return"Right"};Rd.prototype.$classData=t({fk:0},!1,"scala.util.Right$",{fk:1,b:1,e:1,d:1});var Qd=void 0;function ei(){this.Zf=!1}ei.prototype=new u;ei.prototype.constructor=ei;ei.prototype.a=function(){this.Zf=!1;return this};
ei.prototype.$classData=t({ik:0},!1,"scala.util.control.NoStackTrace$",{ik:1,b:1,e:1,d:1});var fi=void 0;function gi(){this.$c=null}gi.prototype=new gh;gi.prototype.constructor=gi;gi.prototype.a=function(){fh.prototype.ae.call(this,md());return this};gi.prototype.Ae=function(){md();hi();xd();return(new ii).a()};gi.prototype.$classData=t({ok:0},!1,"scala.collection.IndexedSeq$$anon$1",{ok:1,ph:1,b:1,If:1});function ji(){this.ya=null}ji.prototype=new dh;ji.prototype.constructor=ji;function ki(){}
ki.prototype=ji.prototype;function eh(){this.Db=this.$c=null}eh.prototype=new gh;eh.prototype.constructor=eh;eh.prototype.Ae=function(){return this.Db.ja()};eh.prototype.ae=function(a){if(null===a)throw ef(D(),null);this.Db=a;fh.prototype.ae.call(this,a);return this};eh.prototype.$classData=t({yk:0},!1,"scala.collection.generic.GenTraversableFactory$$anon$1",{yk:1,ph:1,b:1,If:1});function li(){}li.prototype=new ih;li.prototype.constructor=li;function mi(){}mi.prototype=li.prototype;
function pd(){}pd.prototype=new u;pd.prototype.constructor=pd;pd.prototype.a=function(){return this};pd.prototype.o=function(){return"::"};pd.prototype.$classData=t({Ck:0},!1,"scala.collection.immutable.$colon$colon$",{Ck:1,b:1,e:1,d:1});var od=void 0;function Bd(){}Bd.prototype=new u;Bd.prototype.constructor=Bd;Bd.prototype.a=function(){return this};Bd.prototype.$classData=t({hl:0},!1,"scala.collection.immutable.Range$",{hl:1,b:1,e:1,d:1});var Ad=void 0;function ni(){this.$c=null}ni.prototype=new gh;
ni.prototype.constructor=ni;ni.prototype.a=function(){fh.prototype.ae.call(this,ud());return this};ni.prototype.$classData=t({tl:0},!1,"scala.collection.immutable.Stream$StreamCanBuildFrom",{tl:1,ph:1,b:1,If:1});function zd(){}zd.prototype=new u;zd.prototype.constructor=zd;zd.prototype.a=function(){return this};zd.prototype.$classData=t({Ql:0},!1,"scala.collection.mutable.StringBuilder$",{Ql:1,b:1,e:1,d:1});var yd=void 0;function oi(){this.tc=null}oi.prototype=new ph;oi.prototype.constructor=oi;
function gf(a){return(0,a.tc)()}function wb(a){var b=new oi;b.tc=a;return b}oi.prototype.$classData=t({$l:0},!1,"scala.scalajs.runtime.AnonFunction0",{$l:1,fn:1,b:1,rm:1});function pi(){this.tc=null}pi.prototype=new rh;pi.prototype.constructor=pi;pi.prototype.g=function(a){return(0,this.tc)(a)};function x(a){var b=new pi;b.tc=a;return b}pi.prototype.$classData=t({am:0},!1,"scala.scalajs.runtime.AnonFunction1",{am:1,gn:1,b:1,z:1});function qi(){this.tc=null}qi.prototype=new th;
qi.prototype.constructor=qi;function ri(a){var b=new qi;b.tc=a;return b}qi.prototype.$classData=t({bm:0},!1,"scala.scalajs.runtime.AnonFunction2",{bm:1,hn:1,b:1,sm:1});function si(){this.Ye=0;this.we=null}si.prototype=new u;si.prototype.constructor=si;si.prototype.a=function(){ti=this;this.we=(new Gf).uc(0,0);return this};
function ui(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+ea(1E9)|0)-(0!==b?ea(b):32+ea(a)|0)|0,e=c,f=0===(32&e)?1E9<<e:0,e=0===(32&e)?5E8>>>(31-e|0)|0|0<<e:1E9<<e,h=a,k=b;for(a=b=0;0<=c&&0!==(-2097152&k);){var m=h,n=k,B=f,F=e;if(n===F?(-2147483648^m)>=(-2147483648^B):(-2147483648^n)>=(-2147483648^F))m=k,n=e,k=h-f|0,m=(-2147483648^k)>(-2147483648^h)?-1+(m-n|0)|0:m-n|0,h=k,k=m,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;m=e>>>1|0;f=f>>>1|0|e<<31;e=m}c=k;if(0===c?-1147483648<=(-2147483648^
h):-2147483648<=(-2147483648^c))c=4294967296*k+ +(h>>>0),h=c/1E9,f=h/4294967296|0,e=b,b=h=e+(h|0)|0,a=(-2147483648^h)<(-2147483648^e)?1+(a+f|0)|0:a+f|0,h=c%1E9|0;c=""+h;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function fg(a,b,c){return 0>c?-(4294967296*+((0!==b?~c:-c|0)>>>0)+ +((-b|0)>>>0)):4294967296*c+ +(b>>>0)}si.prototype.$classData=t({dm:0},!1,"scala.scalajs.runtime.RuntimeLong$",{dm:1,b:1,e:1,d:1});var ti=void 0;
function Ja(){ti||(ti=(new si).a());return ti}var vi=t({lm:0},!1,"scala.runtime.Nothing$",{lm:1,hb:1,b:1,d:1});function wi(){}wi.prototype=new u;wi.prototype.constructor=wi;function xi(){}xi.prototype=wi.prototype;var ma=t({Fi:0},!1,"java.lang.String",{Fi:1,b:1,d:1,Sg:1,Gb:1},void 0,void 0,function(a){return"string"===typeof a});function yi(){V.call(this)}yi.prototype=new Bh;yi.prototype.constructor=yi;yi.prototype.m=function(a){V.prototype.Ma.call(this,ka(a),null);return this};
yi.prototype.$classData=t({Li:0},!1,"java.lang.AssertionError",{Li:1,Ti:1,hb:1,b:1,d:1});
var oa=t({Oi:0},!1,"java.lang.Byte",{Oi:1,fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return na(a)}),ta=t({Si:0},!1,"java.lang.Double",{Si:1,fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return"number"===typeof a}),sa=t({Ui:0},!1,"java.lang.Float",{Ui:1,fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return"number"===typeof a}),ra=t({Xi:0},!1,"java.lang.Integer",{Xi:1,fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return"number"===typeof a&&(a|0)===a&&1/a!==1/-0}),xa=t({bj:0},!1,"java.lang.Long",{bj:1,
fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return wa(a)});function ug(){V.call(this)}ug.prototype=new Dh;ug.prototype.constructor=ug;function Bi(){}Bi.prototype=ug.prototype;ug.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};ug.prototype.$classData=t({Ob:0},!1,"java.lang.RuntimeException",{Ob:1,Nb:1,hb:1,b:1,d:1});var qa=t({ej:0},!1,"java.lang.Short",{ej:1,fd:1,b:1,d:1,Gb:1},void 0,void 0,function(a){return pa(a)});function Ci(){this.$a=null}Ci.prototype=new u;
Ci.prototype.constructor=Ci;d=Ci.prototype;d.a=function(){Ci.prototype.f.call(this,"");return this};function Di(a,b){a.$a=""+a.$a+(null===b?"null":b);return a}d.Oh=function(a,b){return this.$a.substring(a,b)};d.o=function(){return this.$a};function Ei(a,b){null===b?Di(a,null):Di(a,ka(b))}d.mb=function(){Ci.prototype.f.call(this,"");return this};function Fi(a,b,c,e){null===b?a=Fi(a,"null",c,e):(b="string"===typeof b?b.substring(c,e):b.Oh(c,e),a=Di(a,ka(b)));return a}
function Gi(a,b){Di(a,g.String.fromCharCode(b))}d.f=function(a){this.$a=a;return this};d.$classData=t({fj:0},!1,"java.lang.StringBuilder",{fj:1,b:1,Sg:1,Ki:1,d:1});function bd(){V.call(this)}bd.prototype=new Dh;bd.prototype.constructor=bd;bd.prototype.Ma=function(a,b){V.prototype.Ma.call(this,a,b);return this};bd.prototype.$classData=t({jj:0},!1,"java.util.concurrent.ExecutionException",{jj:1,Nb:1,hb:1,b:1,d:1});function Hi(){}Hi.prototype=new Fc;Hi.prototype.constructor=Hi;Hi.prototype.a=function(){return this};
function Ii(a,b,c,e,f,h){a=la(b);var k;if(k=!!a.sc.isArrayClass)k=la(e),k.sc.isPrimitive||a.sc.isPrimitive?a=k===a||(k===q(Sa)?a===q(Ra):k===q(Ta)?a===q(Ra)||a===q(Sa):k===q(Va)?a===q(Ra)||a===q(Sa)||a===q(Ta):k===q(Wa)&&(a===q(Ra)||a===q(Sa)||a===q(Ta)||a===q(Va))):(a=a.sc.getFakeInstance(),a=!!k.sc.isInstance(a)),k=a;if(k)Ha(b,c,e,f,h);else for(a=c,c=c+h|0;a<c;){og();h=f;og();k=b;var m=a;if(Mb(k,1)||ab(k,1)||db(k,1)||bb(k,1)||cb(k,1))k=k.c[m];else if(Ya(k,1))k=xh(k.c[m]);else if(Za(k,1)||$a(k,1)||
Xa(k,1)||kg(k))k=k.c[m];else{if(null===k)throw(new lg).a();throw(new C).m(k);}mg(0,e,h,k);a=1+a|0;f=1+f|0}}Hi.prototype.$classData=t({kj:0},!1,"scala.Array$",{kj:1,Km:1,b:1,e:1,d:1});var Ji=void 0;function Ki(){Ji||(Ji=(new Hi).a());return Ji}function Li(){}Li.prototype=new u;Li.prototype.constructor=Li;function Mi(){}Mi.prototype=Li.prototype;Li.prototype.o=function(){return"\x3cfunction1\x3e"};function Ni(){}Ni.prototype=new u;Ni.prototype.constructor=Ni;function Oi(){}Oi.prototype=Ni.prototype;
Ni.prototype.o=function(){return"\x3cfunction1\x3e"};function Dd(){}Dd.prototype=new u;Dd.prototype.constructor=Dd;Dd.prototype.a=function(){return this};Dd.prototype.$classData=t({Dj:0},!1,"scala.math.Equiv$",{Dj:1,b:1,Sm:1,e:1,d:1});var Cd=void 0;function Ld(){}Ld.prototype=new u;Ld.prototype.constructor=Ld;Ld.prototype.a=function(){return this};Ld.prototype.$classData=t({Ij:0},!1,"scala.math.Ordering$",{Ij:1,b:1,Tm:1,e:1,d:1});var Kd=void 0;function Sh(){}Sh.prototype=new u;
Sh.prototype.constructor=Sh;Sh.prototype.a=function(){return this};Sh.prototype.o=function(){return"\x3c?\x3e"};Sh.prototype.$classData=t({bk:0},!1,"scala.reflect.NoManifest$",{bk:1,b:1,nb:1,e:1,d:1});var Rh=void 0;function Pi(){}Pi.prototype=new u;Pi.prototype.constructor=Pi;function Qi(){}d=Qi.prototype=Pi.prototype;d.Qa=function(){return this};d.i=function(){return!this.ia()};d.o=function(){return(this.ia()?"non-empty":"empty")+" iterator"};d.x=function(a){Xg(this,a)};d.ib=function(){return Yg(this)};
d.pd=function(a,b,c,e){return Se(this,a,b,c,e)};function Ri(){}Ri.prototype=new ch;Ri.prototype.constructor=Ri;function Si(){}Si.prototype=Ri.prototype;function Ph(){}Ph.prototype=new mi;Ph.prototype.constructor=Ph;Ph.prototype.a=function(){return this};Ph.prototype.$classData=t({al:0},!1,"scala.collection.immutable.Map$",{al:1,zk:1,Ak:1,xk:1,b:1});var Oh=void 0;function Ti(){this.ab=this.lb=null}Ti.prototype=new u;Ti.prototype.constructor=Ti;function Ui(a,b){a.lb=b;a.ab=b;return a}d=Ti.prototype;
d.sb=function(a){this.ab.sb(a);return this};d.bb=function(){return this.ab};d.gc=function(a,b){nh(this,a,b)};d.db=function(a){this.ab.sb(a);return this};d.Kb=function(){};d.tb=function(a){return $e(this,a)};d.$classData=t({Il:0},!1,"scala.collection.mutable.GrowingBuilder",{Il:1,b:1,Dc:1,Cc:1,Bc:1});function wf(){this.$g=null}wf.prototype=new u;wf.prototype.constructor=wf;wf.prototype.a=function(){this.$g=g.Promise.resolve(void 0);return this};wf.prototype.Re=function(a){Pg(a)};
wf.prototype.sf=function(a){this.$g.then(function(a,c){return function(){try{$h(c)}catch(a){var b=Yf(D(),a);if(null!==b)Pg(b);else throw a;}}}(this,a))};wf.prototype.$classData=t({Ul:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext",{Ul:1,b:1,fh:1,eh:1,Vg:1});function vf(){}vf.prototype=new u;vf.prototype.constructor=vf;vf.prototype.a=function(){return this};vf.prototype.Re=function(a){Pg(a)};
vf.prototype.sf=function(a){g.setTimeout(function(a,c){return function(){try{$h(c)}catch(a){var b=Yf(D(),a);if(null!==b)Pg(b);else throw a;}}}(this,a),0)};vf.prototype.$classData=t({Vl:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext",{Vl:1,b:1,fh:1,eh:1,Vg:1});function sf(){}sf.prototype=new u;sf.prototype.constructor=sf;sf.prototype.a=function(){return this};sf.prototype.Re=function(a){Pg(a)};
sf.prototype.sf=function(a){try{$h(a)}catch(b){if(a=Yf(D(),b),null!==a)Pg(a);else throw b;}};sf.prototype.$classData=t({Wl:0},!1,"scala.scalajs.concurrent.RunNowExecutionContext$",{Wl:1,b:1,fh:1,eh:1,Vg:1});var rf=void 0;function Gf(){this.vb=this.Da=0}Gf.prototype=new Fg;Gf.prototype.constructor=Gf;d=Gf.prototype;d.ha=function(a){return wa(a)?this.Da===a.Da&&this.vb===a.vb:!1};d.Ke=function(a,b,c){Gf.prototype.uc.call(this,a|b<<22,b>>10|c<<12);return this};
d.o=function(){Ja();var a=this.Da,b=this.vb;return b===a>>31?""+a:0>b?"-"+ui(-a|0,0!==a?~b:-b|0):ui(a,b)};d.uc=function(a,b){this.Da=a;this.vb=b;return this};d.mb=function(a){Gf.prototype.uc.call(this,a,a>>31);return this};d.y=function(){return this.Da^this.vb};function wa(a){return!!(a&&a.$classData&&a.$classData.l.Mh)}d.$classData=t({Mh:0},!1,"scala.scalajs.runtime.RuntimeLong",{Mh:1,fd:1,b:1,d:1,Gb:1});function cc(){this.ub=0;this.Rb=this.Xa=this.xb=null}cc.prototype=new u;
cc.prototype.constructor=cc;d=cc.prototype;d.Ga=function(){return"PlayerState"};function sb(){var a=A().t,b=a.xb,c=ob();if(null===b||!b.ha(c))return a;b=(new Vi).mb(0);return bc(new cc,a.ub,b,a.Xa,a.Rb)}d.Ea=function(){return 4};d.ha=function(a){if(this===a)return!0;if(a&&a.$classData&&a.$classData.l.ag){if(this.ub===a.ub)var b=this.xb,c=a.xb,b=null===b?null===c:b.ha(c);else b=!1;return b&&this.Xa===a.Xa?this.Rb===a.Rb:!1}return!1};
d.Fa=function(a){switch(a){case 0:return this.ub;case 1:return this.xb;case 2:return this.Xa;case 3:return this.Rb;default:throw(new X).f(""+a);}};function zb(a){a=a.xb;return ob()!==a}d.o=function(){return ng(this)};function bc(a,b,c,e,f){a.ub=b;a.xb=c;a.Xa=e;a.Rb=f;return a}d.y=function(){var a=-889275714,a=O().Qb(a,this.ub),a=O().Qb(a,Je(O(),this.xb)),a=O().Qb(a,Je(O(),this.Xa)),a=O().Qb(a,Je(O(),this.Rb));return O().ed(a,4)};d.Na=function(){return Y(this)};
function Ab(a){var b=a.xb;if(ob()===b)return a;if(pb(b)){var c=b.Rc,b=15===c?a.Rb:a.Xa,c=(new Vi).mb(15===c?0:1+c|0);return bc(new cc,a.ub,c,b,a.Rb)}throw(new C).m(b);}d.$classData=t({ag:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.PlayerState",{ag:1,b:1,Pa:1,k:1,e:1,d:1});function Wi(){}Wi.prototype=new xi;Wi.prototype.constructor=Wi;function Xi(){}Xi.prototype=Wi.prototype;Wi.prototype.Hi=function(){return this};function G(){V.call(this)}G.prototype=new Bi;G.prototype.constructor=G;
function Yi(){}Yi.prototype=G.prototype;G.prototype.a=function(){V.prototype.Ma.call(this,null,null);return this};G.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};G.prototype.$classData=t({yf:0},!1,"java.lang.IllegalArgumentException",{yf:1,Ob:1,Nb:1,hb:1,b:1,d:1});function Ob(){V.call(this)}Ob.prototype=new Bi;Ob.prototype.constructor=Ob;Ob.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};
Ob.prototype.$classData=t({Vi:0},!1,"java.lang.IllegalStateException",{Vi:1,Ob:1,Nb:1,hb:1,b:1,d:1});function X(){V.call(this)}X.prototype=new Bi;X.prototype.constructor=X;X.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};X.prototype.$classData=t({Wi:0},!1,"java.lang.IndexOutOfBoundsException",{Wi:1,Ob:1,Nb:1,hb:1,b:1,d:1});function Zi(){}Zi.prototype=new xi;Zi.prototype.constructor=Zi;Zi.prototype.a=function(){return this};
Zi.prototype.$classData=t({aj:0},!1,"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{aj:1,Ei:1,b:1,Ci:1,Mi:1,Di:1});function lg(){V.call(this)}lg.prototype=new Bi;lg.prototype.constructor=lg;lg.prototype.a=function(){V.prototype.Ma.call(this,null,null);return this};lg.prototype.$classData=t({cj:0},!1,"java.lang.NullPointerException",{cj:1,Ob:1,Nb:1,hb:1,b:1,d:1});function $i(){V.call(this)}$i.prototype=new Bi;$i.prototype.constructor=$i;
$i.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};$i.prototype.$classData=t({hj:0},!1,"java.lang.UnsupportedOperationException",{hj:1,Ob:1,Nb:1,hb:1,b:1,d:1});function R(){V.call(this)}R.prototype=new Bi;R.prototype.constructor=R;R.prototype.a=function(){V.prototype.Ma.call(this,null,null);return this};R.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};R.prototype.$classData=t({ij:0},!1,"java.util.NoSuchElementException",{ij:1,Ob:1,Nb:1,hb:1,b:1,d:1});
function C(){V.call(this);this.fe=this.Yg=null;this.jf=!1}C.prototype=new Bi;C.prototype.constructor=C;C.prototype.tf=function(){if(!this.jf&&!this.jf){var a;if(null===this.fe)a="null";else try{a=ka(this.fe)+" ("+("of class "+Lb(la(this.fe)))+")"}catch(b){if(null!==Yf(D(),b))a="an instance of class "+Lb(la(this.fe));else throw b;}this.Yg=a;this.jf=!0}return this.Yg};C.prototype.m=function(a){this.fe=a;V.prototype.Ma.call(this,null,null);return this};
C.prototype.$classData=t({lj:0},!1,"scala.MatchError",{lj:1,Ob:1,Nb:1,hb:1,b:1,d:1});function aj(){}aj.prototype=new u;aj.prototype.constructor=aj;function bj(){}bj.prototype=aj.prototype;function Th(){}Th.prototype=new Oi;Th.prototype.constructor=Th;Th.prototype.a=function(){return this};Th.prototype.g=function(a){return a};Th.prototype.$classData=t({pj:0},!1,"scala.Predef$$anon$1",{pj:1,Nm:1,b:1,z:1,e:1,d:1});function Uh(){}Uh.prototype=new Mi;Uh.prototype.constructor=Uh;Uh.prototype.a=function(){return this};
Uh.prototype.g=function(a){return a};Uh.prototype.$classData=t({qj:0},!1,"scala.Predef$$anon$2",{qj:1,Mm:1,b:1,z:1,e:1,d:1});function Ig(){this.wb=null}Ig.prototype=new u;Ig.prototype.constructor=Ig;d=Ig.prototype;d.Ga=function(){return"StringContext"};d.Ea=function(){return 1};d.ha=function(a){if(this===a)return!0;if(a&&a.$classData&&a.$classData.l.ch){var b=this.wb;a=a.wb;return null===b?null===a:b.ha(a)}return!1};d.Fa=function(a){switch(a){case 0:return this.wb;default:throw(new X).f(""+a);}};
d.o=function(){return ng(this)};function cj(a,b){if(a.wb.xa()!==(1+b.xa()|0))throw(new G).f("wrong number of arguments ("+b.xa()+") for interpolated string with "+a.wb.xa()+" parts");}
function Hg(a,b){var c=function(){return function(a){Yh||(Yh=(new Xh).a());a:{var b=a.length|0,c;r();var e=Jf();c=a.indexOf(e)|0;switch(c){case -1:break a;default:e=(new Ci).a();b:{var f=c;c=0;for(;;)if(0<=f){f>c&&Fi(e,a,c,f);c=1+f|0;if(c>=b)throw dj(a,f);var F=65535&(a.charCodeAt(c)|0);switch(F){case 98:f=8;break;case 116:f=9;break;case 110:f=10;break;case 102:f=12;break;case 114:f=13;break;case 34:f=34;break;case 39:f=39;break;case 92:f=92;break;default:if(48<=F&&55>=F)f=65535&(a.charCodeAt(c)|
0),F=-48+f|0,c=1+c|0,c<b&&48<=(65535&(a.charCodeAt(c)|0))&&55>=(65535&(a.charCodeAt(c)|0))&&(F=-48+((F<<3)+(65535&(a.charCodeAt(c)|0))|0)|0,c=1+c|0,c<b&&51>=f&&48<=(65535&(a.charCodeAt(c)|0))&&55>=(65535&(a.charCodeAt(c)|0))&&(F=-48+((F<<3)+(65535&(a.charCodeAt(c)|0))|0)|0,c=1+c|0)),c=-1+c|0,f=65535&F;else throw dj(a,f);}c=1+c|0;Gi(e,f);f=c;r();var F=a,ca=Jf(),F=F.indexOf(ca,c)|0;c=f;f=F}else{c<b&&Fi(e,a,c,b);a=e.$a;break b}}}}return a}}(a);cj(a,b);a=a.wb.s();b=b.s();for(var e=a.ka(),e=(new Ci).f(c(e));b.ia();){Ei(e,
b.ka());var f=a.ka();Di(e,c(f))}return e.$a}d.Eb=function(a){this.wb=a;return this};d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};d.$classData=t({ch:0},!1,"scala.StringContext",{ch:1,b:1,Pa:1,k:1,e:1,d:1});function ej(){}ej.prototype=new u;ej.prototype.constructor=ej;function fj(){}fj.prototype=ej.prototype;function Ae(){V.call(this)}Ae.prototype=new Kg;Ae.prototype.constructor=Ae;Ae.prototype.a=function(){V.prototype.Ma.call(this,null,null);return this};
Ae.prototype.Ie=function(){fi||(fi=(new ei).a());return fi.Zf?V.prototype.Ie.call(this):this};Ae.prototype.$classData=t({gk:0},!1,"scala.util.control.BreakControl",{gk:1,hb:1,b:1,d:1,mh:1,Um:1});function ld(){this.ya=null}ld.prototype=new dh;ld.prototype.constructor=ld;ld.prototype.a=function(){W.prototype.a.call(this);return this};ld.prototype.ja=function(){gj();return(new hj).a()};ld.prototype.$classData=t({qk:0},!1,"scala.collection.Iterable$",{qk:1,ob:1,Ya:1,b:1,pb:1,Za:1});var kd=void 0;
function ij(){this.Kg=this.Db=null}ij.prototype=new Qi;ij.prototype.constructor=ij;ij.prototype.ka=function(){return this.Kg.g(this.Db.ka())};function jj(a,b,c){if(null===b)throw ef(D(),null);a.Db=b;a.Kg=c;return a}ij.prototype.ia=function(){return this.Db.ia()};ij.prototype.$classData=t({sk:0},!1,"scala.collection.Iterator$$anon$10",{sk:1,xc:1,b:1,zc:1,q:1,p:1});function Pe(){}Pe.prototype=new Qi;Pe.prototype.constructor=Pe;Pe.prototype.a=function(){return this};
Pe.prototype.ka=function(){throw(new R).f("next on empty iterator");};Pe.prototype.ia=function(){return!1};Pe.prototype.$classData=t({tk:0},!1,"scala.collection.Iterator$$anon$2",{tk:1,xc:1,b:1,zc:1,q:1,p:1});function kj(){this.Lb=null}kj.prototype=new Qi;kj.prototype.constructor=kj;function lj(a){var b=new kj;b.Lb=a;return b}kj.prototype.ka=function(){if(this.ia()){var a=this.Lb.qa();this.Lb=this.Lb.$();return a}return K().lb.ka()};kj.prototype.ia=function(){return!this.Lb.i()};
kj.prototype.$classData=t({uk:0},!1,"scala.collection.LinearSeqLike$$anon$1",{uk:1,xc:1,b:1,zc:1,q:1,p:1});function jd(){this.ya=null}jd.prototype=new dh;jd.prototype.constructor=jd;jd.prototype.a=function(){W.prototype.a.call(this);id=this;(new ze).a();return this};jd.prototype.ja=function(){mj||(mj=(new nj).a());return(new hj).a()};jd.prototype.$classData=t({wk:0},!1,"scala.collection.Traversable$",{wk:1,ob:1,Ya:1,b:1,pb:1,Za:1});var id=void 0;function oj(){}oj.prototype=new Si;
oj.prototype.constructor=oj;function pj(){}pj.prototype=oj.prototype;oj.prototype.Vd=function(){return this.Fe()};oj.prototype.ja=function(){return qj(new rj,this.Fe())};function sj(){this.ya=null}sj.prototype=new dh;sj.prototype.constructor=sj;sj.prototype.a=function(){W.prototype.a.call(this);return this};sj.prototype.ja=function(){return(new hj).a()};sj.prototype.$classData=t({Rk:0},!1,"scala.collection.immutable.Iterable$",{Rk:1,ob:1,Ya:1,b:1,pb:1,Za:1});var tj=void 0;
function gj(){tj||(tj=(new sj).a());return tj}function uj(){this.Lb=null}uj.prototype=new Qi;uj.prototype.constructor=uj;uj.prototype.ka=function(){if(!this.ia())return K().lb.ka();var a=ff(this.Lb),b=a.qa();this.Lb=df(new cf,this,wb(function(a,b){return function(){return b.$()}}(this,a)));return b};function vj(a){var b=new uj;b.Lb=df(new cf,b,wb(function(a,b){return function(){return b}}(b,a)));return b}uj.prototype.ia=function(){return!ff(this.Lb).i()};
uj.prototype.ib=function(){var a=ff(this.Lb);this.Lb=df(new cf,this,wb(function(){return function(){ud();return ah()}}(this)));return a};uj.prototype.$classData=t({ul:0},!1,"scala.collection.immutable.StreamIterator",{ul:1,xc:1,b:1,zc:1,q:1,p:1});function nj(){this.ya=null}nj.prototype=new dh;nj.prototype.constructor=nj;nj.prototype.a=function(){W.prototype.a.call(this);return this};nj.prototype.ja=function(){return(new hj).a()};
nj.prototype.$classData=t({xl:0},!1,"scala.collection.immutable.Traversable$",{xl:1,ob:1,Ya:1,b:1,pb:1,Za:1});var mj=void 0;function wj(){this.Gg=null;this.Bb=0;this.Cd=this.Hf=this.Xe=null;this.Uc=0;this.kd=null}wj.prototype=new Qi;wj.prototype.constructor=wj;function xj(){}xj.prototype=wj.prototype;
wj.prototype.ka=function(){if(null!==this.kd){var a=this.kd.ka();this.kd.ia()||(this.kd=null);return a}a:{var a=this.Cd,b=this.Uc;for(;;){b===(-1+a.c.length|0)?(this.Bb=-1+this.Bb|0,0<=this.Bb?(this.Cd=this.Xe.c[this.Bb],this.Uc=this.Hf.c[this.Bb],this.Xe.c[this.Bb]=null):(this.Cd=null,this.Uc=0)):this.Uc=1+this.Uc|0;if((a=a.c[b])&&a.$classData&&a.$classData.l.uh||a&&a.$classData&&a.$classData.l.vh){a=this.Mg(a);break a}if(a&&a.$classData&&a.$classData.l.Jf||yj(a))0<=this.Bb&&(this.Xe.c[this.Bb]=
this.Cd,this.Hf.c[this.Bb]=this.Uc),this.Bb=1+this.Bb|0,this.Cd=zj(a),this.Uc=0,a=zj(a),b=0;else{this.kd=a.s();a=this.ka();break a}}}return a};wj.prototype.ia=function(){return null!==this.kd||0<=this.Bb};function zj(a){if(a&&a.$classData&&a.$classData.l.Jf)return a.gb;if(!yj(a))throw(new C).m(a);return a.ta}wj.prototype.Og=function(a){this.Gg=a;this.Bb=0;this.Xe=p(w(w(Aj)),[6]);this.Hf=p(w(Ta),[6]);this.Cd=this.Gg;this.Uc=0;this.kd=null;return this};function mf(){this.Jg=this.fc=null}
mf.prototype=new u;mf.prototype.constructor=mf;function lf(a,b,c){a.Jg=c;a.fc=b;return a}d=mf.prototype;d.ha=function(a){return null!==a&&(a===this||a===this.fc||ya(a,this.fc))};d.sb=function(a){this.fc.db(a);return this};d.o=function(){return""+this.fc};d.bb=function(){return this.Jg.g(this.fc.bb())};d.gc=function(a,b){this.fc.gc(a,b)};d.db=function(a){this.fc.db(a);return this};d.y=function(){return this.fc.y()};d.Kb=function(a){this.fc.Kb(a)};d.tb=function(a){this.fc.tb(a);return this};
d.$classData=t({Hl:0},!1,"scala.collection.mutable.Builder$$anon$1",{Hl:1,b:1,Dc:1,Cc:1,Bc:1,Pm:1});function Bj(){this.wb=null}Bj.prototype=new u;Bj.prototype.constructor=Bj;function Cj(){}d=Cj.prototype=Bj.prototype;d.a=function(){this.wb=(new hj).a();return this};d.sb=function(a){return Dj(this,a)};function Dj(a,b){var c=a.wb;nd();b=(new I).ra([b]);var e=nd().ya.Ae(),f=b.Wc();switch(f){case -1:break;default:e.Kb(f)}e.tb(b.Ra());b=e.bb();Ej(c,b);return a}d.gc=function(a,b){nh(this,a,b)};
d.db=function(a){return Dj(this,a)};d.Kb=function(){};d.tb=function(a){Ej(this.wb,a);return this};function Fj(){this.Rd=null}Fj.prototype=new Qi;Fj.prototype.constructor=Fj;Fj.prototype.ka=function(){if(this.ia()){var a=this.Rd.qa();this.Rd=this.Rd.qc();return a}throw(new R).f("next on empty Iterator");};Fj.prototype.ia=function(){return this.Rd!==L()};Fj.prototype.$classData=t({Ml:0},!1,"scala.collection.mutable.ListBuffer$$anon$1",{Ml:1,xc:1,b:1,zc:1,q:1,p:1});
function mc(){this.ab=this.lb=null}mc.prototype=new u;mc.prototype.constructor=mc;function oc(a,b){a.ab=a.ab.Ic(b);return a}d=mc.prototype;d.sb=function(a){return oc(this,a)};d.bb=function(){return this.ab};d.gc=function(a,b){nh(this,a,b)};function lc(a,b){a.lb=b;a.ab=b;return a}d.db=function(a){return oc(this,a)};d.Kb=function(){};d.tb=function(a){return $e(this,a)};d.$classData=t({Nl:0},!1,"scala.collection.mutable.MapBuilder",{Nl:1,b:1,ne:1,Dc:1,Cc:1,Bc:1});function rj(){this.ab=this.lb=null}
rj.prototype=new u;rj.prototype.constructor=rj;d=rj.prototype;d.sb=function(a){return Gj(this,a)};d.bb=function(){return this.ab};d.gc=function(a,b){nh(this,a,b)};function Gj(a,b){a.ab=a.ab.rc(b);return a}function qj(a,b){a.lb=b;a.ab=b;return a}d.db=function(a){return Gj(this,a)};d.Kb=function(){};d.tb=function(a){return $e(this,a)};d.$classData=t({Ol:0},!1,"scala.collection.mutable.SetBuilder",{Ol:1,b:1,ne:1,Dc:1,Cc:1,Bc:1});function Hj(){this.fg=this.Od=0;this.Th=null}Hj.prototype=new Qi;
Hj.prototype.constructor=Hj;Hj.prototype.ka=function(){var a=this.Th.Fa(this.Od);this.Od=1+this.Od|0;return a};function Y(a){var b=new Hj;b.Th=a;b.Od=0;b.fg=a.Ea();return b}Hj.prototype.ia=function(){return this.Od<this.fg};Hj.prototype.$classData=t({pm:0},!1,"scala.runtime.ScalaRunTime$$anon$1",{pm:1,xc:1,b:1,zc:1,q:1,p:1});function Ij(){}Ij.prototype=new u;Ij.prototype.constructor=Ij;d=Ij.prototype;d.a=function(){return this};d.Ga=function(){return"NotPlaying"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"NotPlaying"};d.y=function(){return 266491387};d.Na=function(){return Y(this)};d.$classData=t({Vh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.NotPlaying$",{Vh:1,b:1,Wh:1,Pa:1,k:1,e:1,d:1});var Jj=void 0;function ob(){Jj||(Jj=(new Ij).a());return Jj}function Vi(){this.Rc=0}Vi.prototype=new u;Vi.prototype.constructor=Vi;d=Vi.prototype;d.Ga=function(){return"PlayingAt"};d.Ea=function(){return 1};
d.ha=function(a){return this===a?!0:pb(a)?this.Rc===a.Rc:!1};d.Fa=function(a){switch(a){case 0:return this.Rc;default:throw(new X).f(""+a);}};d.o=function(){return ng(this)};d.mb=function(a){this.Rc=a;return this};d.y=function(){var a=-889275714,a=O().Qb(a,this.Rc);return O().ed(a,1)};d.Na=function(){return Y(this)};function pb(a){return!!(a&&a.$classData&&a.$classData.l.bg)}d.$classData=t({bg:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.PlayingAt",{bg:1,b:1,Wh:1,Pa:1,k:1,e:1,d:1});
function Kj(){}Kj.prototype=new u;Kj.prototype.constructor=Kj;d=Kj.prototype;d.a=function(){return this};d.Ga=function(){return"BD"};d.Ea=function(){return 0};d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"BD"};d.y=function(){return 2114};d.Na=function(){return Y(this)};d.$classData=t({Xh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.BD$",{Xh:1,b:1,cf:1,Pa:1,k:1,e:1,d:1});var Lj=void 0;function kb(){Lj||(Lj=(new Kj).a());return Lj}function Mj(){}Mj.prototype=new u;
Mj.prototype.constructor=Mj;d=Mj.prototype;d.a=function(){return this};d.Ga=function(){return"HH"};d.Ea=function(){return 0};d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"HH"};d.y=function(){return 2304};d.Na=function(){return Y(this)};d.$classData=t({Yh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.HH$",{Yh:1,b:1,cf:1,Pa:1,k:1,e:1,d:1});var Nj=void 0;function y(){Nj||(Nj=(new Mj).a());return Nj}function Oj(){}Oj.prototype=new u;Oj.prototype.constructor=Oj;d=Oj.prototype;
d.a=function(){return this};d.Ga=function(){return"PatternA"};d.Ea=function(){return 0};d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"PatternA"};d.y=function(){return 1310649041};d.Na=function(){return Y(this)};d.$classData=t({Zh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternA$",{Zh:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Pj=void 0;function Cb(){Pj||(Pj=(new Oj).a());return Pj}function Qj(){}Qj.prototype=new u;Qj.prototype.constructor=Qj;d=Qj.prototype;d.a=function(){return this};
d.Ga=function(){return"PatternB"};d.Ea=function(){return 0};d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"PatternB"};d.y=function(){return 1310649042};d.Na=function(){return Y(this)};d.$classData=t({$h:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternB$",{$h:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Rj=void 0;function Db(){Rj||(Rj=(new Qj).a());return Rj}function Sj(){}Sj.prototype=new u;Sj.prototype.constructor=Sj;d=Sj.prototype;d.a=function(){return this};d.Ga=function(){return"PatternC"};
d.Ea=function(){return 0};d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"PatternC"};d.y=function(){return 1310649043};d.Na=function(){return Y(this)};d.$classData=t({ai:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternC$",{ai:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Tj=void 0;function Eb(){Tj||(Tj=(new Sj).a());return Tj}function Uj(){}Uj.prototype=new u;Uj.prototype.constructor=Uj;d=Uj.prototype;d.a=function(){return this};d.Ga=function(){return"PatternD"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"PatternD"};d.y=function(){return 1310649044};d.Na=function(){return Y(this)};d.$classData=t({bi:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternD$",{bi:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Vj=void 0;function Fb(){Vj||(Vj=(new Uj).a());return Vj}function Wj(){}Wj.prototype=new u;Wj.prototype.constructor=Wj;d=Wj.prototype;d.a=function(){return this};d.Ga=function(){return"RS"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"RS"};d.y=function(){return 2625};d.Na=function(){return Y(this)};d.$classData=t({ci:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.RS$",{ci:1,b:1,cf:1,Pa:1,k:1,e:1,d:1});var Xj=void 0;function ib(){Xj||(Xj=(new Wj).a());return Xj}function Yj(){}Yj.prototype=new u;Yj.prototype.constructor=Yj;d=Yj.prototype;d.a=function(){return this};d.Ga=function(){return"SD"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"SD"};d.y=function(){return 2641};d.Na=function(){return Y(this)};d.$classData=t({di:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.SD$",{di:1,b:1,cf:1,Pa:1,k:1,e:1,d:1});var Zj=void 0;function jb(){Zj||(Zj=(new Yj).a());return Zj}function J(){this.Ta=this.Ia=null}J.prototype=new u;J.prototype.constructor=J;d=J.prototype;d.Ga=function(){return"Tuple2"};d.Ea=function(){return 2};
d.ha=function(a){return this===a?!0:a&&a.$classData&&a.$classData.l.dg?S(T(),this.Ia,a.Ia)&&S(T(),this.Ta,a.Ta):!1};d.h=function(a,b){this.Ia=a;this.Ta=b;return this};d.Fa=function(a){a:switch(a){case 0:a=this.Ia;break a;case 1:a=this.Ta;break a;default:throw(new X).f(""+a);}return a};d.o=function(){return"("+this.Ia+","+this.Ta+")"};d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};d.$classData=t({dg:0},!1,"scala.Tuple2",{dg:1,b:1,Om:1,Pa:1,k:1,e:1,d:1});
function Gh(){V.call(this)}Gh.prototype=new Yi;Gh.prototype.constructor=Gh;Gh.prototype.f=function(a){V.prototype.Ma.call(this,a,null);return this};Gh.prototype.$classData=t({dj:0},!1,"java.lang.NumberFormatException",{dj:1,yf:1,Ob:1,Nb:1,hb:1,b:1,d:1});function ak(){}ak.prototype=new bj;ak.prototype.constructor=ak;d=ak.prototype;d.a=function(){return this};d.Ga=function(){return"None"};d.Ea=function(){return 0};d.i=function(){return!0};d.uf=function(){throw(new R).f("None.get");};
d.Fa=function(a){throw(new X).f(""+a);};d.o=function(){return"None"};d.y=function(){return 2433880};d.Na=function(){return Y(this)};d.$classData=t({mj:0},!1,"scala.None$",{mj:1,nj:1,b:1,Pa:1,k:1,e:1,d:1});var bk=void 0;function M(){bk||(bk=(new ak).a());return bk}function N(){this.rb=null}N.prototype=new bj;N.prototype.constructor=N;d=N.prototype;d.Ga=function(){return"Some"};d.Ea=function(){return 1};d.ha=function(a){return this===a?!0:di(a)?S(T(),this.rb,a.rb):!1};d.i=function(){return!1};
d.Fa=function(a){switch(a){case 0:return this.rb;default:throw(new X).f(""+a);}};d.uf=function(){return this.rb};d.o=function(){return ng(this)};d.m=function(a){this.rb=a;return this};d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};function di(a){return!!(a&&a.$classData&&a.$classData.l.bh)}d.$classData=t({bh:0},!1,"scala.Some",{bh:1,nj:1,b:1,Pa:1,k:1,e:1,d:1});function ck(){V.call(this)}ck.prototype=new Yi;ck.prototype.constructor=ck;
function dj(a,b){var c=new ck,e=(new Ig).Eb((new I).ra(["invalid escape "," index ",' in "','". Use \\\\\\\\ for literal \\\\.']));Vh(Wh(),0<=b&&b<(a.length|0));if(b===(-1+(a.length|0)|0))var f="at terminal";else var f=(new Ig).Eb((new I).ra(["'\\\\","' not one of "," at"])),h=65535&(a.charCodeAt(1+b|0)|0),f=Hg(f,(new I).ra([xh(h),"[\\b, \\t, \\n, \\f, \\r, \\\\, \\\", \\']"]));a=Hg(e,(new I).ra([f,b,a]));V.prototype.Ma.call(c,a,null);return c}
ck.prototype.$classData=t({uj:0},!1,"scala.StringContext$InvalidEscapeException",{uj:1,yf:1,Ob:1,Nb:1,hb:1,b:1,d:1});function Zc(){this.jd=null}Zc.prototype=new u;Zc.prototype.constructor=Zc;d=Zc.prototype;d.Uf=function(){return!1};d.xd=function(){};d.o=function(){return ci(this)};d.Af=function(a,b){bi(ai(b,a),this.jd)};d.Vf=function(){return(new N).m(this.jd)};d.$classData=t({Aj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$Failed",{Aj:1,b:1,Bj:1,ih:1,hh:1,gh:1,dh:1});
function Yc(){this.jd=null}Yc.prototype=new u;Yc.prototype.constructor=Yc;d=Yc.prototype;d.Uf=function(){return!1};d.xd=function(a,b){Kc(this,a,b)};d.o=function(){return ci(this)};d.Af=function(a,b){bi(ai(b,a),this.jd)};d.Vf=function(){return(new N).m(this.jd)};d.$classData=t({Cj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$Successful",{Cj:1,b:1,Bj:1,ih:1,hh:1,gh:1,dh:1});function ad(){this.vd=null}ad.prototype=new fj;ad.prototype.constructor=ad;d=ad.prototype;d.Ga=function(){return"Failure"};
d.Ea=function(){return 1};d.ha=function(a){if(this===a)return!0;if(Wc(a)){var b=this.vd;a=a.vd;return null===b?null===a:b.ha(a)}return!1};d.Fa=function(a){switch(a){case 0:return this.vd;default:throw(new X).f(""+a);}};d.o=function(){return ng(this)};d.x=function(){};function $c(a,b){a.vd=b;return a}d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};function Wc(a){return!!(a&&a.$classData&&a.$classData.l.lh)}d.$classData=t({lh:0},!1,"scala.util.Failure",{lh:1,Ef:1,b:1,Pa:1,k:1,e:1,d:1});
function Rc(){this.rb=null}Rc.prototype=new fj;Rc.prototype.constructor=Rc;d=Rc.prototype;d.Ga=function(){return"Success"};d.Ea=function(){return 1};d.ha=function(a){return this===a?!0:a&&a.$classData&&a.$classData.l.Df?S(T(),this.rb,a.rb):!1};d.Fa=function(a){switch(a){case 0:return this.rb;default:throw(new X).f(""+a);}};d.o=function(){return ng(this)};d.x=function(a){a.g(this.rb)};d.m=function(a){this.rb=a;return this};d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};
d.$classData=t({Df:0},!1,"scala.util.Success",{Df:1,Ef:1,b:1,Pa:1,k:1,e:1,d:1});function dk(a,b,c){c=c.ze(a.Se());a.x(x(function(a,b,c){return function(a){return c.tb(b.g(a).Qa())}}(a,b,c)));return c.bb()}function ek(a){return a.Pe(a.hc()+"(",", ",")")}
function fk(a){a=Lb(la(a.Se()));for(var b=-1+(a.length|0)|0;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;if(-1===b||46===(65535&(a.charCodeAt(b)|0)))return"";for(var c="";;){for(var e=1+b|0;;)if(-1!==b&&57>=(65535&(a.charCodeAt(b)|0))&&48<=(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;for(var f=b;;)if(-1!==b&&36!==(65535&(a.charCodeAt(b)|0))&&46!==(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;var h=1+b|0;if(b===f&&e!==(a.length|0))return c;for(;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|
0)))b=-1+b|0;else break;var f=-1===b?!0:46===(65535&(a.charCodeAt(b)|0)),k;(k=f)||(k=65535&(a.charCodeAt(h)|0),k=!(90<k&&127>k||65>k));if(k){e=a.substring(h,e);h=c;if(null===h)throw(new lg).a();c=""===h?e:""+e+xh(46)+c;if(f)return c}}}function gk(){this.ya=null}gk.prototype=new ki;gk.prototype.constructor=gk;function hk(){}hk.prototype=gk.prototype;function ik(){wj.call(this)}ik.prototype=new xj;ik.prototype.constructor=ik;ik.prototype.Mg=function(a){return jk(a)};
ik.prototype.$classData=t({Ik:0},!1,"scala.collection.immutable.HashMap$HashTrieMap$$anon$1",{Ik:1,yl:1,xc:1,b:1,zc:1,q:1,p:1});function kk(){wj.call(this)}kk.prototype=new xj;kk.prototype.constructor=kk;kk.prototype.Mg=function(a){return a.Ua};kk.prototype.$classData=t({Nk:0},!1,"scala.collection.immutable.HashSet$HashTrieSet$$anon$1",{Nk:1,yl:1,xc:1,b:1,zc:1,q:1,p:1});function lk(){}lk.prototype=new pj;lk.prototype.constructor=lk;lk.prototype.a=function(){return this};lk.prototype.Fe=function(){return Bg()};
lk.prototype.$classData=t({jl:0},!1,"scala.collection.immutable.Set$",{jl:1,qh:1,sh:1,oh:1,Ya:1,b:1,Za:1});var mk=void 0;function Qh(){mk||(mk=(new lk).a());return mk}function nk(){this.wb=null}nk.prototype=new Cj;nk.prototype.constructor=nk;nk.prototype.a=function(){Bj.prototype.a.call(this);return this};nk.prototype.bb=function(){return ok(this)};function ok(a){return pk(a.wb.cb.ib(),x(function(){return function(a){return a.ib()}}(a)))}
function qk(a){return!!(a&&a.$classData&&a.$classData.l.zh)}nk.prototype.$classData=t({zh:0},!1,"scala.collection.immutable.Stream$StreamBuilder",{zh:1,cn:1,b:1,ne:1,Dc:1,Cc:1,Bc:1});function ii(){this.Sd=this.id=this.Md=0;this.Bg=this.yg=this.vg=this.sg=this.pg=this.Td=null}ii.prototype=new u;ii.prototype.constructor=ii;d=ii.prototype;d.r=function(){return this.vg};d.a=function(){this.Td=p(w(v),[32]);this.Sd=1;this.id=this.Md=0;return this};d.kb=function(){return this.Sd};
d.sb=function(a){return rk(this,a)};d.cd=function(a){this.Bg=a};d.sa=function(){return this.Td};d.fa=function(a){this.sg=a};d.oa=function(){return this.yg};
function rk(a,b){if(a.id>=a.Td.c.length){var c=32+a.Md|0,e=a.Md^c;if(1024>e)1===a.kb()&&(a.w(p(w(v),[32])),a.j().c[0]=a.sa(),a.Lc(1+a.kb()|0)),a.G(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa();else if(32768>e)2===a.kb()&&(a.fa(p(w(v),[32])),a.n().c[0]=a.j(),a.Lc(1+a.kb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.n().c[31&(c>>>10|0)]=a.j();else if(1048576>e)3===a.kb()&&(a.Aa(p(w(v),[32])),a.r().c[0]=a.n(),a.Lc(1+a.kb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),[32])),
a.j().c[31&(c>>>5|0)]=a.sa(),a.n().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.n();else if(33554432>e)4===a.kb()&&(a.eb(p(w(v),[32])),a.oa().c[0]=a.r(),a.Lc(1+a.kb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),[32])),a.Aa(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.n().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.n(),a.oa().c[31&(c>>>20|0)]=a.r();else if(1073741824>e)5===a.kb()&&(a.cd(p(w(v),[32])),a.fb().c[0]=a.oa(),a.Lc(1+a.kb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),
[32])),a.Aa(p(w(v),[32])),a.eb(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.n().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.n(),a.oa().c[31&(c>>>20|0)]=a.r(),a.fb().c[31&(c>>>25|0)]=a.oa();else throw(new G).a();a.Md=c;a.id=0}a.Td.c[a.id]=b;a.id=1+a.id|0;return a}d.bb=function(){var a;a=this.Md+this.id|0;if(0===a)a=xd().df;else{var b=(new sk).Ke(0,a,0);Rb(b,this,this.Sd);1<this.Sd&&Qb(b,0,-1+a|0);a=b}return a};d.w=function(a){this.pg=a};d.gc=function(a,b){nh(this,a,b)};
d.eb=function(a){this.yg=a};d.j=function(){return this.pg};d.fb=function(){return this.Bg};d.db=function(a){return rk(this,a)};d.Kb=function(){};d.Lc=function(a){this.Sd=a};d.n=function(){return this.sg};d.G=function(a){this.Td=a};d.tb=function(a){return $e(this,a)};d.Aa=function(a){this.vg=a};d.$classData=t({Bl:0},!1,"scala.collection.immutable.VectorBuilder",{Bl:1,b:1,ne:1,Dc:1,Cc:1,Bc:1,Ch:1});
function tk(){this.rf=this.Da=this.Kc=this.qf=0;this.ue=!1;this.kf=0;this.Cg=this.zg=this.wg=this.tg=this.qg=this.lf=null}tk.prototype=new Qi;tk.prototype.constructor=tk;d=tk.prototype;
d.ka=function(){if(!this.ue)throw(new R).f("reached iterator end");var a=this.lf.c[this.Da];this.Da=1+this.Da|0;if(this.Da===this.rf)if((this.Kc+this.Da|0)<this.qf){var b=32+this.Kc|0,c=this.Kc^b;if(1024>c)this.G(this.j().c[31&(b>>>5|0)]);else if(32768>c)this.w(this.n().c[31&(b>>>10|0)]),this.G(this.j().c[0]);else if(1048576>c)this.fa(this.r().c[31&(b>>>15|0)]),this.w(this.n().c[0]),this.G(this.j().c[0]);else if(33554432>c)this.Aa(this.oa().c[31&(b>>>20|0)]),this.fa(this.r().c[0]),this.w(this.n().c[0]),
this.G(this.j().c[0]);else if(1073741824>c)this.eb(this.fb().c[31&(b>>>25|0)]),this.Aa(this.oa().c[0]),this.fa(this.r().c[0]),this.w(this.n().c[0]),this.G(this.j().c[0]);else throw(new G).a();this.Kc=b;b=this.qf-this.Kc|0;this.rf=32>b?b:32;this.Da=0}else this.ue=!1;return a};d.r=function(){return this.wg};d.kb=function(){return this.kf};d.cd=function(a){this.Cg=a};d.uc=function(a,b){this.qf=b;this.Kc=-32&a;this.Da=31&a;a=b-this.Kc|0;this.rf=32>a?a:32;this.ue=(this.Kc+this.Da|0)<b;return this};
d.sa=function(){return this.lf};d.fa=function(a){this.tg=a};d.oa=function(){return this.zg};d.w=function(a){this.qg=a};d.ia=function(){return this.ue};d.eb=function(a){this.zg=a};d.j=function(){return this.qg};d.fb=function(){return this.Cg};d.Lc=function(a){this.kf=a};d.n=function(){return this.tg};d.G=function(a){this.lf=a};d.Aa=function(a){this.wg=a};d.$classData=t({Cl:0},!1,"scala.collection.immutable.VectorIterator",{Cl:1,xc:1,b:1,zc:1,q:1,p:1,Ch:1});function uk(){}uk.prototype=new Xi;
uk.prototype.constructor=uk;function vk(){}vk.prototype=uk.prototype;uk.prototype.Ii=function(){Wi.prototype.Hi.call(this);return this};function wk(){this.ya=null}wk.prototype=new hk;wk.prototype.constructor=wk;wk.prototype.a=function(){W.prototype.a.call(this);return this};wk.prototype.ja=function(){xk();return(new hj).a()};wk.prototype.$classData=t({vk:0},!1,"scala.collection.Seq$",{vk:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var yk=void 0;function Yb(){yk||(yk=(new wk).a());return yk}
function zk(){this.ya=null}zk.prototype=new hk;zk.prototype.constructor=zk;function Ak(){}Ak.prototype=zk.prototype;function Bk(){}Bk.prototype=new mi;Bk.prototype.constructor=Bk;Bk.prototype.a=function(){Ck=this;kh(new jh,ri(function(){return function(a){return a}}(this)));return this};
function Dk(a,b,c,e,f,h,k){var m=31&(b>>>h|0),n=31&(e>>>h|0);if(m!==n)return a=1<<m|1<<n,b=p(w(Ek),[2]),m<n?(b.c[0]=c,b.c[1]=f):(b.c[0]=f,b.c[1]=c),Fk(new Gk,a,b,k);n=p(w(Ek),[1]);m=1<<m;n.c[0]=Dk(a,b,c,e,f,5+h|0,k);return Fk(new Gk,m,n,k)}Bk.prototype.$classData=t({Dk:0},!1,"scala.collection.immutable.HashMap$",{Dk:1,zk:1,Ak:1,xk:1,b:1,Ym:1,e:1,d:1});var Ck=void 0;function Hk(){Ck||(Ck=(new Bk).a());return Ck}function Ik(){this.ya=null}Ik.prototype=new hk;Ik.prototype.constructor=Ik;
Ik.prototype.a=function(){W.prototype.a.call(this);return this};Ik.prototype.ja=function(){return(new hj).a()};Ik.prototype.$classData=t({il:0},!1,"scala.collection.immutable.Seq$",{il:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var Jk=void 0;function xk(){Jk||(Jk=(new Ik).a());return Jk}function Kk(){this.ya=null}Kk.prototype=new hk;Kk.prototype.constructor=Kk;Kk.prototype.a=function(){W.prototype.a.call(this);return this};Kk.prototype.ja=function(){return(new Lk).a()};
Kk.prototype.$classData=t({Jl:0},!1,"scala.collection.mutable.IndexedSeq$",{Jl:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var Mk=void 0;function Nk(){this.ya=null}Nk.prototype=new hk;Nk.prototype.constructor=Nk;Nk.prototype.a=function(){W.prototype.a.call(this);return this};Nk.prototype.ja=function(){return(new I).a()};Nk.prototype.$classData=t({Xl:0},!1,"scala.scalajs.js.WrappedArray$",{Xl:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var Ok=void 0;function Pk(){this.Nd=this.Qg=null}Pk.prototype=new vk;
Pk.prototype.constructor=Pk;function Dc(a){var b=new Pk;b.Qg=a;(new Zi).a();uk.prototype.Ii.call(b);b.Nd="";return b}function Qg(a,b){for(;""!==b;){var c=b.indexOf("\n")|0;if(0>c)a.Nd=""+a.Nd+b,b="";else{var e=""+a.Nd+b.substring(0,c);g.console&&(a.Qg&&g.console.error?g.console.error(e):g.console.log(e));a.Nd="";b=b.substring(1+c|0)}}}Pk.prototype.$classData=t({$i:0},!1,"java.lang.JSConsoleBasedPrintStream",{$i:1,Cm:1,Bm:1,Ei:1,b:1,Ci:1,Mi:1,Di:1,Ki:1});function vg(){this.na=null}vg.prototype=new Kh;
vg.prototype.constructor=vg;function Qk(a,b){for(;;){var c;b:for(c=b;;){var e=c.na;if(Rk(e))c=e;else break b}if(b===c||Lh(a,b,c))return c;b=a.na;if(!Rk(b))return a}}d=vg.prototype;d.a=function(){Jh.prototype.m.call(this,L());return this};d.xd=function(a,b){Kc(this,a,b)};
d.Uf=function(a){Uc||(Uc=(new Vc).a());a=Wc(a)?Xc(a.vd):a;var b;a:for(b=this;;){var c=b.na;if(Vg(c)){if(Lh(b,c,a)){b=c;break a}}else if(Rk(c))b=Qk(b,c);else{b=null;break a}}if(null!==b){if(!b.i())for(;!b.i();)bi(b.qa(),a),b=b.qc();return!0}return!1};d.o=function(){return ci(this)};d.Af=function(a,b){a=ai(b,a);b=this;a:for(;;){var c=b.na;if(c&&c.$classData&&c.$classData.l.Ef)bi(a,c);else{if(Rk(c)){b=Qk(b,c);continue a}if(!Vg(c))throw(new C).m(c);if(!Lh(b,c,Sk(new Tk,a,c)))continue a}break}};
d.Vf=function(){var a;a:for(a=this;;){var b=a.na;if(b&&b.$classData&&b.$classData.l.Ef){a=(new N).m(b);break a}if(Rk(b))a=Qk(a,b);else{a=M();break a}}return a};function Rk(a){return!!(a&&a.$classData&&a.$classData.l.jh)}d.$classData=t({jh:0},!1,"scala.concurrent.impl.Promise$DefaultPromise",{jh:1,Im:1,b:1,e:1,d:1,ih:1,hh:1,gh:1,dh:1});function Uk(){this.Sa=null}Uk.prototype=new u;Uk.prototype.constructor=Uk;function Vk(){}Vk.prototype=Uk.prototype;Uk.prototype.ha=function(a){return this===a};
Uk.prototype.o=function(){return this.Sa};Uk.prototype.y=function(){return Da(this)};function Wk(){}Wk.prototype=new u;Wk.prototype.constructor=Wk;function Xk(){}Xk.prototype=Wk.prototype;function Yk(){this.cg=this.ya=null}Yk.prototype=new Ak;Yk.prototype.constructor=Yk;Yk.prototype.a=function(){W.prototype.a.call(this);Zk=this;this.cg=(new gi).a();return this};Yk.prototype.ja=function(){hi();xd();return(new ii).a()};
Yk.prototype.$classData=t({nk:0},!1,"scala.collection.IndexedSeq$",{nk:1,rh:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var Zk=void 0;function md(){Zk||(Zk=(new Yk).a());return Zk}function $k(){this.zd=this.pf=0;this.Db=null}$k.prototype=new Qi;$k.prototype.constructor=$k;$k.prototype.ka=function(){this.zd>=this.pf&&K().lb.ka();var a=this.Db.Ja(this.zd);this.zd=1+this.zd|0;return a};function Z(a,b){var c=new $k;c.pf=b;if(null===a)throw ef(D(),null);c.Db=a;c.zd=0;return c}
$k.prototype.ia=function(){return this.zd<this.pf};$k.prototype.$classData=t({pk:0},!1,"scala.collection.IndexedSeqLike$Elements",{pk:1,xc:1,b:1,zc:1,q:1,p:1,Wm:1,e:1,d:1});function al(){}al.prototype=new pj;al.prototype.constructor=al;al.prototype.a=function(){return this};
function bl(a,b,c,e,f,h){var k=31&(b>>>h|0),m=31&(e>>>h|0);if(k!==m)return a=1<<k|1<<m,b=p(w(cl),[2]),k<m?(b.c[0]=c,b.c[1]=f):(b.c[0]=f,b.c[1]=c),dl(new el,a,b,c.v()+f.v()|0);m=p(w(cl),[1]);k=1<<k;c=bl(a,b,c,e,f,5+h|0);m.c[0]=c;return dl(new el,k,m,c.Ec)}al.prototype.Fe=function(){return fl()};al.prototype.$classData=t({Kk:0},!1,"scala.collection.immutable.HashSet$",{Kk:1,qh:1,sh:1,oh:1,Ya:1,b:1,Za:1,e:1,d:1});var gl=void 0;function hl(){gl||(gl=(new al).a());return gl}
function il(){this.ya=null}il.prototype=new Ak;il.prototype.constructor=il;il.prototype.a=function(){W.prototype.a.call(this);return this};il.prototype.ja=function(){xd();return(new ii).a()};il.prototype.$classData=t({Qk:0},!1,"scala.collection.immutable.IndexedSeq$",{Qk:1,rh:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1});var jl=void 0;function hi(){jl||(jl=(new il).a());return jl}function kl(){}kl.prototype=new pj;kl.prototype.constructor=kl;kl.prototype.a=function(){return this};kl.prototype.Fe=function(){return ll()};
kl.prototype.$classData=t({Yk:0},!1,"scala.collection.immutable.ListSet$",{Yk:1,qh:1,sh:1,oh:1,Ya:1,b:1,Za:1,e:1,d:1});var ml=void 0;function Zf(){V.call(this);this.Mc=null}Zf.prototype=new Bi;Zf.prototype.constructor=Zf;d=Zf.prototype;d.Ga=function(){return"JavaScriptException"};d.Ea=function(){return 1};d.Ie=function(){this.stackdata=this.Mc;return this};d.ha=function(a){return this===a?!0:Xf(a)?S(T(),this.Mc,a.Mc):!1};
d.Fa=function(a){switch(a){case 0:return this.Mc;default:throw(new X).f(""+a);}};d.tf=function(){return ka(this.Mc)};d.m=function(a){this.Mc=a;V.prototype.Ma.call(this,null,null);return this};d.y=function(){return Ke(this)};d.Na=function(){return Y(this)};function Xf(a){return!!(a&&a.$classData&&a.$classData.l.Kh)}d.$classData=t({Kh:0},!1,"scala.scalajs.js.JavaScriptException",{Kh:1,Ob:1,Nb:1,hb:1,b:1,d:1,Pa:1,k:1,e:1});function ie(){this.Sa=null}ie.prototype=new Vk;ie.prototype.constructor=ie;
ie.prototype.a=function(){this.Sa="Boolean";return this};ie.prototype.$classData=t({Qj:0},!1,"scala.reflect.ManifestFactory$BooleanManifest$",{Qj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var he=void 0;function Vd(){this.Sa=null}Vd.prototype=new Vk;Vd.prototype.constructor=Vd;Vd.prototype.a=function(){this.Sa="Byte";return this};Vd.prototype.$classData=t({Rj:0},!1,"scala.reflect.ManifestFactory$ByteManifest$",{Rj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var Ud=void 0;
function Zd(){this.Sa=null}Zd.prototype=new Vk;Zd.prototype.constructor=Zd;Zd.prototype.a=function(){this.Sa="Char";return this};Zd.prototype.$classData=t({Sj:0},!1,"scala.reflect.ManifestFactory$CharManifest$",{Sj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var Yd=void 0;function ge(){this.Sa=null}ge.prototype=new Vk;ge.prototype.constructor=ge;ge.prototype.a=function(){this.Sa="Double";return this};
ge.prototype.$classData=t({Tj:0},!1,"scala.reflect.ManifestFactory$DoubleManifest$",{Tj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var fe=void 0;function ee(){this.Sa=null}ee.prototype=new Vk;ee.prototype.constructor=ee;ee.prototype.a=function(){this.Sa="Float";return this};ee.prototype.$classData=t({Uj:0},!1,"scala.reflect.ManifestFactory$FloatManifest$",{Uj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var de=void 0;function ae(){this.Sa=null}ae.prototype=new Vk;ae.prototype.constructor=ae;
ae.prototype.a=function(){this.Sa="Int";return this};ae.prototype.$classData=t({Vj:0},!1,"scala.reflect.ManifestFactory$IntManifest$",{Vj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var $d=void 0;function ce(){this.Sa=null}ce.prototype=new Vk;ce.prototype.constructor=ce;ce.prototype.a=function(){this.Sa="Long";return this};ce.prototype.$classData=t({Wj:0},!1,"scala.reflect.ManifestFactory$LongManifest$",{Wj:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var be=void 0;function nl(){this.ic=null}
nl.prototype=new Xk;nl.prototype.constructor=nl;function ol(){}ol.prototype=nl.prototype;nl.prototype.ha=function(a){return this===a};nl.prototype.o=function(){return this.ic};nl.prototype.y=function(){return Da(this)};function Xd(){this.Sa=null}Xd.prototype=new Vk;Xd.prototype.constructor=Xd;Xd.prototype.a=function(){this.Sa="Short";return this};Xd.prototype.$classData=t({$j:0},!1,"scala.reflect.ManifestFactory$ShortManifest$",{$j:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var Wd=void 0;
function ke(){this.Sa=null}ke.prototype=new Vk;ke.prototype.constructor=ke;ke.prototype.a=function(){this.Sa="Unit";return this};ke.prototype.$classData=t({ak:0},!1,"scala.reflect.ManifestFactory$UnitManifest$",{ak:1,Tc:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var je=void 0;function pl(a,b){a=a.s();for(b=b.s();a.ia()&&b.ia();)if(!S(T(),a.ka(),b.ka()))return!1;return!a.ia()&&!b.ia()}function ql(){this.ya=null}ql.prototype=new hk;ql.prototype.constructor=ql;
ql.prototype.a=function(){W.prototype.a.call(this);rl=this;(new mh).a();return this};ql.prototype.Vd=function(){return L()};ql.prototype.ja=function(){return(new hj).a()};ql.prototype.$classData=t({Sk:0},!1,"scala.collection.immutable.List$",{Sk:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1,e:1,d:1});var rl=void 0;function nd(){rl||(rl=(new ql).a());return rl}function sl(){this.ya=null}sl.prototype=new hk;sl.prototype.constructor=sl;sl.prototype.a=function(){W.prototype.a.call(this);return this};
sl.prototype.Vd=function(){return ah()};sl.prototype.ja=function(){return(new nk).a()};sl.prototype.$classData=t({ql:0},!1,"scala.collection.immutable.Stream$",{ql:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1,e:1,d:1});var tl=void 0;function ud(){tl||(tl=(new sl).a());return tl}function ul(){this.ya=null}ul.prototype=new hk;ul.prototype.constructor=ul;ul.prototype.a=function(){W.prototype.a.call(this);return this};ul.prototype.ja=function(){return(new Lk).a()};
ul.prototype.$classData=t({Gl:0},!1,"scala.collection.mutable.ArrayBuffer$",{Gl:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1,e:1,d:1});var vl=void 0;function wl(){this.ya=null}wl.prototype=new hk;wl.prototype.constructor=wl;wl.prototype.a=function(){W.prototype.a.call(this);return this};wl.prototype.ja=function(){return Ui(new Ti,(new hj).a())};wl.prototype.$classData=t({Ll:0},!1,"scala.collection.mutable.ListBuffer$",{Ll:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1,e:1,d:1});var xl=void 0;
function me(){this.ic=null}me.prototype=new ol;me.prototype.constructor=me;me.prototype.a=function(){this.ic="Any";M();L();q(v);return this};me.prototype.$classData=t({Oj:0},!1,"scala.reflect.ManifestFactory$AnyManifest$",{Oj:1,Ue:1,Te:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var le=void 0;function qe(){this.ic=null}qe.prototype=new ol;qe.prototype.constructor=qe;qe.prototype.a=function(){this.ic="AnyVal";M();L();q(v);return this};
qe.prototype.$classData=t({Pj:0},!1,"scala.reflect.ManifestFactory$AnyValManifest$",{Pj:1,Ue:1,Te:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var pe=void 0;function se(){this.ic=null}se.prototype=new ol;se.prototype.constructor=se;se.prototype.a=function(){this.ic="Nothing";M();L();q(vi);return this};se.prototype.$classData=t({Xj:0},!1,"scala.reflect.ManifestFactory$NothingManifest$",{Xj:1,Ue:1,Te:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var re=void 0;function ue(){this.ic=null}ue.prototype=new ol;
ue.prototype.constructor=ue;ue.prototype.a=function(){this.ic="Null";M();L();q(hg);return this};ue.prototype.$classData=t({Yj:0},!1,"scala.reflect.ManifestFactory$NullManifest$",{Yj:1,Ue:1,Te:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var te=void 0;function oe(){this.ic=null}oe.prototype=new ol;oe.prototype.constructor=oe;oe.prototype.a=function(){this.ic="Object";M();L();q(v);return this};
oe.prototype.$classData=t({Zj:0},!1,"scala.reflect.ManifestFactory$ObjectManifest$",{Zj:1,Ue:1,Te:1,b:1,Ab:1,zb:1,yb:1,nb:1,e:1,d:1,k:1});var ne=void 0;function yl(a){return!!(a&&a.$classData&&a.$classData.l.lc)}function zl(){this.df=this.ya=null}zl.prototype=new Ak;zl.prototype.constructor=zl;zl.prototype.a=function(){W.prototype.a.call(this);Al=this;this.df=(new sk).Ke(0,0,0);return this};zl.prototype.Vd=function(){return this.df};zl.prototype.ja=function(){return(new ii).a()};
zl.prototype.$classData=t({Al:0},!1,"scala.collection.immutable.Vector$",{Al:1,rh:1,pc:1,oc:1,ob:1,Ya:1,b:1,pb:1,Za:1,e:1,d:1});var Al=void 0;function xd(){Al||(Al=(new zl).a());return Al}function Bl(){}Bl.prototype=new u;Bl.prototype.constructor=Bl;function Cl(){}d=Cl.prototype=Bl.prototype;d.Pe=function(a,b,c){return Qe(this,a,b,c)};d.Wc=function(){return-1};d.pd=function(a,b,c,e){return Se(this,a,b,c,e)};d.Se=function(){return this};d.ja=function(){return this.Wa().ja()};d.hc=function(){return fk(this)};
function Dl(a,b,c,e){if(0>b)throw(new X).f(""+b);e=e.ze(a.Se());var f=0;for(a=a.s();f<b&&a.ia();)e.db(a.ka()),f=1+f|0;if(!a.ia())throw(new X).f(""+b);e.db(c);for(a.ka();a.ia();)e.db(a.ka());return e.bb()}function El(a,b){return a.xa()-b|0}function Fl(a,b){if(b&&b.$classData&&b.$classData.l.je){var c=a.xa();if(c===b.xa()){for(var e=0;e<c&&S(T(),a.Ja(e),b.Ja(e));)e=1+e|0;return e===c}return!1}return pl(a,b)}function Gl(a,b){for(var c=0,e=a.xa();c<e;)b.g(a.Ja(c)),c=1+c|0}
function Hl(a,b,c,e){var f=0,h=c,k=a.xa();e=k<e?k:e;c=jg(og(),b)-c|0;for(c=e<c?e:c;f<c;)mg(og(),b,h,a.Ja(f)),f=1+f|0,h=1+h|0}function Il(a,b){if(b&&b.$classData&&b.$classData.l.ke){if(a===b)return!0;for(;!a.i()&&!b.i()&&S(T(),a.qa(),b.qa());)a=a.$(),b=b.$();return a.i()&&b.i()}return pl(a,b)}function Jl(a,b){a=a.Eg(b);if(0>b||a.i())throw(new X).f(""+b);return a.qa()}function Kl(a){if(a.i())throw(new R).a();for(var b=a.$();!b.i();)a=b,b=b.$();return a.qa()}
function Ll(a,b){var c=0;for(;;){if(c===b)return a.i()?0:1;if(a.i())return-1;c=1+c|0;a=a.$()}}function Ml(a,b,c,e,f){var h=a.s();a=jj(new ij,h,x(function(){return function(a){if(null!==a){var b=a.Ia;a=a.Ta;Jc||(Jc=(new Ic).a());return""+(""+If(r(),b)+" -\x3e ")+a}throw(new C).m(a);}}(a)));return Se(a,b,c,e,f)}function Nl(){}Nl.prototype=new Cl;Nl.prototype.constructor=Nl;function Ol(){}d=Ol.prototype=Nl.prototype;d.Hb=function(a){return pl(this,a)};d.Yd=function(a){var b=this.s();return Wg(b,a)};
d.x=function(a){var b=this.s();Xg(b,a)};d.ib=function(){return this.s().ib()};d.sd=function(a,b,c){var e=b;b=b+c|0;c=jg(og(),a);b=b<c?b:c;for(c=this.s();e<b&&c.ia();)mg(og(),a,e,c.ka()),e=1+e|0};var Aj=t({ga:0},!0,"scala.collection.immutable.Iterable",{ga:1,ma:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,la:1,W:1,R:1,H:1,L:1,k:1});function Mg(){this.Oa=null}Mg.prototype=new u;Mg.prototype.constructor=Mg;d=Mg.prototype;d.Qa=function(){return(new nf).f(this.Oa)};
d.Ja=function(a){a=65535&(this.Oa.charCodeAt(a)|0);return xh(a)};d.wc=function(a){return El(this,a)};d.Hb=function(a){return Fl(this,a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return(new nf).f(this.Oa)};d.ha=function(a){jf||(jf=(new hf).a());return a&&a.$classData&&a.$classData.l.Bh?this.Oa===(null===a?null:a.Oa):!1};d.Pe=function(a,b,c){return Qe(this,a,b,c)};d.o=function(){return this.Oa};d.x=function(a){Gl(this,a)};d.s=function(){return Z(this,this.Oa.length|0)};
d.xa=function(){return this.Oa.length|0};d.Wc=function(){return this.Oa.length|0};d.ib=function(){var a=Z(this,this.Oa.length|0);return Yg(a)};d.pd=function(a,b,c,e){return Se(this,a,b,c,e)};d.Se=function(){return this.Oa};d.sd=function(a,b,c){Hl(this,a,b,c)};d.y=function(){var a=this.Oa;return Aa(r(),a)};d.f=function(a){this.Oa=a;return this};d.ja=function(){return(new Re).a()};d.hc=function(){return fk(this)};
d.$classData=t({Bh:0},!1,"scala.collection.immutable.StringOps",{Bh:1,b:1,Ah:1,We:1,Bd:1,nc:1,L:1,k:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,H:1,mc:1,kh:1,Gb:1});function Pl(){}Pl.prototype=new Ol;Pl.prototype.constructor=Pl;function Ql(){}d=Ql.prototype=Pl.prototype;d.ha=function(a){return yl(a)?this.Hb(a):!1};d.i=function(){return 0===this.wc(0)};d.o=function(){return ek(this)};d.Rh=function(a,b,c){return Dl(this,a,b,c)};d.y=function(){return Ug(Le(),this.Vc())};function Rl(){}Rl.prototype=new Ol;
Rl.prototype.constructor=Rl;function Sl(){}d=Sl.prototype=Rl.prototype;d.g=function(a){var b=this.Mb(a);if(M()===b)throw(new R).f("key not found: "+a);if(di(b))a=b.rb;else throw(new C).m(b);return a};
d.ha=function(a){if(a&&a.$classData&&a.$classData.l.Ib){var b;if(!(b=this===a)&&(b=this.v()===a.v()))try{for(var c=this.s(),e=!0;e&&c.ia();){var f=c.ka();if(null===f)throw(new C).m(f);var h=f.Ta,k=a.Mb(f.Ia);b:{if(di(k)){var m=k.rb;if(S(T(),h,m)){e=!0;break b}}e=!1}}b=e}catch(n){if(n&&n.$classData&&n.$classData.l.Ri)b=!1;else throw n;}a=b}else a=!1;return a};d.i=function(){return 0===this.v()};d.o=function(){return ek(this)};d.pd=function(a,b,c,e){return Ml(this,a,b,c,e)};d.Ka=function(a){return!this.Mb(a).i()};
d.y=function(){var a=Le();return He(a,this.Sf(),a.Xg)};d.hc=function(){return"Map"};d.ja=function(){return lc(new mc,this.nf())};function Tl(){}Tl.prototype=new Ol;Tl.prototype.constructor=Tl;function Ul(){}d=Ul.prototype=Tl.prototype;d.ha=function(a){if(a&&a.$classData&&a.$classData.l.Jb){var b;if(!(b=this===a)&&(b=this.v()===a.v()))try{b=this.Ph(a)}catch(c){if(c&&c.$classData&&c.$classData.l.Ri)b=!1;else throw c;}a=b}else a=!1;return a};d.i=function(){return 0===this.v()};d.o=function(){return ek(this)};
d.Ph=function(a){return this.Yd(a)};d.y=function(){var a=Le();return He(a,this,a.Jh)};d.hc=function(){return"Set"};d.ja=function(){return qj(new rj,this.dd())};function Vl(){}Vl.prototype=new Sl;Vl.prototype.constructor=Vl;function Wl(){}d=Wl.prototype=Vl.prototype;d.Qa=function(){return this};d.Ra=function(){return this};d.Wa=function(){return gj()};d.nf=function(){return this.of()};d.of=function(){return nc()};d.Sf=function(){return this};function Xl(){}Xl.prototype=new Ul;
Xl.prototype.constructor=Xl;function Yl(){}d=Yl.prototype=Xl.prototype;d.Qa=function(){return this};d.Ad=function(){throw(new R).f("next of empty set");};d.g=function(a){return this.Ka(a)};d.i=function(){return!0};d.Ra=function(){return this};d.Wa=function(){ml||(ml=(new kl).a());return ml};d.Jd=function(a){return Zl(new $l,this,a)};d.v=function(){return 0};d.s=function(){var a=am(this);return lj(a)};d.Hc=function(a){return this.af(a)};d.dd=function(){return ll()};
function am(a){for(var b=L();!a.i();){var c=a.Ud(),b=Sk(new Tk,c,b);a=a.Ad()}return b}d.Ka=function(){return!1};d.Ud=function(){throw(new R).f("elem of empty set");};d.af=function(){return this};d.rc=function(a){return this.Jd(a)};d.hc=function(){return"ListSet"};function bm(){}bm.prototype=new Ul;bm.prototype.constructor=bm;d=bm.prototype;d.Qa=function(){return this};d.a=function(){return this};d.g=function(){return!1};d.Ra=function(){return this};d.Wa=function(){return Qh()};d.x=function(){};
d.v=function(){return 0};d.s=function(){return K().lb};d.Hc=function(){return this};d.dd=function(){return Bg()};d.rc=function(a){return(new cm).m(a)};d.$classData=t({kl:0},!1,"scala.collection.immutable.Set$EmptySet$",{kl:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});var dm=void 0;function Bg(){dm||(dm=(new bm).a());return dm}function cm(){this.A=null}cm.prototype=new Ul;cm.prototype.constructor=cm;
d=cm.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};d.Wa=function(){return Qh()};d.Yd=function(a){return!!a.g(this.A)};d.x=function(a){a.g(this.A)};d.v=function(){return 1};d.m=function(a){this.A=a;return this};d.s=function(){K();var a=(new I).ra([this.A]);return Z(a,a.ea.length|0)};d.Hc=function(a){return this.Zc(a)};d.dd=function(){return Bg()};d.ad=function(a){return this.Ka(a)?this:(new em).h(this.A,a)};d.Ka=function(a){return S(T(),a,this.A)};
d.rc=function(a){return this.ad(a)};d.Zc=function(a){return S(T(),a,this.A)?Bg():this};d.$classData=t({ll:0},!1,"scala.collection.immutable.Set$Set1",{ll:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});function em(){this.pa=this.A=null}em.prototype=new Ul;em.prototype.constructor=em;d=em.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};
d.h=function(a,b){this.A=a;this.pa=b;return this};d.Wa=function(){return Qh()};d.Yd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)};d.x=function(a){a.g(this.A);a.g(this.pa)};d.v=function(){return 2};d.s=function(){K();var a=(new I).ra([this.A,this.pa]);return Z(a,a.ea.length|0)};d.Hc=function(a){return this.Zc(a)};d.dd=function(){return Bg()};d.ad=function(a){return this.Ka(a)?this:fm(this.A,this.pa,a)};d.Ka=function(a){return S(T(),a,this.A)||S(T(),a,this.pa)};d.rc=function(a){return this.ad(a)};
d.Zc=function(a){return S(T(),a,this.A)?(new cm).m(this.pa):S(T(),a,this.pa)?(new cm).m(this.A):this};d.$classData=t({ml:0},!1,"scala.collection.immutable.Set$Set2",{ml:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});function gm(){this.La=this.pa=this.A=null}gm.prototype=new Ul;gm.prototype.constructor=gm;d=gm.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};
d.Wa=function(){return Qh()};d.Yd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)&&!!a.g(this.La)};d.x=function(a){a.g(this.A);a.g(this.pa);a.g(this.La)};function fm(a,b,c){var e=new gm;e.A=a;e.pa=b;e.La=c;return e}d.v=function(){return 3};d.s=function(){K();var a=(new I).ra([this.A,this.pa,this.La]);return Z(a,a.ea.length|0)};d.Hc=function(a){return this.Zc(a)};d.dd=function(){return Bg()};d.ad=function(a){return this.Ka(a)?this:(new hm).$d(this.A,this.pa,this.La,a)};
d.Ka=function(a){return S(T(),a,this.A)||S(T(),a,this.pa)||S(T(),a,this.La)};d.rc=function(a){return this.ad(a)};d.Zc=function(a){return S(T(),a,this.A)?(new em).h(this.pa,this.La):S(T(),a,this.pa)?(new em).h(this.A,this.La):S(T(),a,this.La)?(new em).h(this.A,this.pa):this};d.$classData=t({nl:0},!1,"scala.collection.immutable.Set$Set3",{nl:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});
function hm(){this.jc=this.La=this.pa=this.A=null}hm.prototype=new Ul;hm.prototype.constructor=hm;d=hm.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};d.Wa=function(){return Qh()};d.Yd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)&&!!a.g(this.La)&&!!a.g(this.jc)};d.x=function(a){a.g(this.A);a.g(this.pa);a.g(this.La);a.g(this.jc)};d.v=function(){return 4};
d.s=function(){K();var a=(new I).ra([this.A,this.pa,this.La,this.jc]);return Z(a,a.ea.length|0)};d.Hc=function(a){return this.Zc(a)};d.dd=function(){return Bg()};d.ad=function(a){return this.Ka(a)?this:im(im(im(im(im((new jm).a(),this.A),this.pa),this.La),this.jc),a)};d.Ka=function(a){return S(T(),a,this.A)||S(T(),a,this.pa)||S(T(),a,this.La)||S(T(),a,this.jc)};d.$d=function(a,b,c,e){this.A=a;this.pa=b;this.La=c;this.jc=e;return this};d.rc=function(a){return this.ad(a)};
d.Zc=function(a){return S(T(),a,this.A)?fm(this.pa,this.La,this.jc):S(T(),a,this.pa)?fm(this.A,this.La,this.jc):S(T(),a,this.La)?fm(this.A,this.pa,this.jc):S(T(),a,this.jc)?fm(this.A,this.pa,this.La):this};d.$classData=t({ol:0},!1,"scala.collection.immutable.Set$Set4",{ol:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});function jm(){}jm.prototype=new Ul;jm.prototype.constructor=jm;function km(){}
d=km.prototype=jm.prototype;d.re=function(a,b){return lm(new mm,a,b)};d.bd=function(a){return this.xf(Je(O(),a))};d.Qa=function(){return this};d.a=function(){return this};d.g=function(a){return this.Ka(a)};function im(a,b){return a.re(b,a.bd(b),0)}d.Ra=function(){return this};d.Wa=function(){return hl()};d.x=function(){};d.Ph=function(a){if(a&&a.$classData&&a.$classData.l.Dd)return this.qe(a,0);var b=this.s();return Wg(b,a)};d.v=function(){return 0};d.s=function(){return K().lb};
d.Hc=function(a){a=this.he(a,this.bd(a),0);return null===a?fl():a};d.he=function(){return this};d.dd=function(){return fl()};d.xf=function(a){a=a+~(a<<9)|0;a^=a>>>14|0;a=a+(a<<4)|0;return a^(a>>>10|0)};d.Ka=function(a){return this.Nc(a,this.bd(a),0)};d.Nc=function(){return!1};d.rc=function(a){return im(this,a)};d.qe=function(){return!0};
var cl=t({Dd:0},!1,"scala.collection.immutable.HashSet",{Dd:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,Ub:1,e:1,d:1});jm.prototype.$classData=cl;function nm(){}nm.prototype=new Yl;nm.prototype.constructor=nm;nm.prototype.a=function(){return this};
nm.prototype.$classData=t({Zk:0},!1,"scala.collection.immutable.ListSet$EmptyListSet$",{Zk:1,Xk:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});var om=void 0;function ll(){om||(om=(new nm).a());return om}function $l(){this.Xf=this.Fg=null}$l.prototype=new Yl;$l.prototype.constructor=$l;d=$l.prototype;d.Ad=function(){return this.Xf};d.i=function(){return!1};
d.Jd=function(a){return pm(this,a)?this:Zl(new $l,this,a)};d.v=function(){a:{var a=this,b=0;for(;;){if(a.i())break a;a=a.Ad();b=1+b|0}}return b};function qm(a,b){var c=L();for(;;){if(b.i())return Kl(c);if(S(T(),a,b.Ud())){b=b.Ad();for(a=c;!a.i();)c=a.qa(),b=Zl(new $l,b,c.Ud()),a=a.$();return b}var e=b.Ad(),c=Sk(new Tk,b,c);b=e}}d.Hc=function(a){return qm(a,this)};function Zl(a,b,c){a.Fg=c;if(null===b)throw ef(D(),null);a.Xf=b;return a}d.Ud=function(){return this.Fg};
d.Ka=function(a){return pm(this,a)};d.af=function(a){return qm(a,this)};function pm(a,b){for(;;){if(a.i())return!1;if(S(T(),a.Ud(),b))return!0;a=a.Ad()}}d.rc=function(a){return this.Jd(a)};d.$classData=t({$k:0},!1,"scala.collection.immutable.ListSet$Node",{$k:1,Xk:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,e:1,d:1});function rm(){}rm.prototype=new Ql;rm.prototype.constructor=rm;function sm(){}
sm.prototype=rm.prototype;rm.prototype.Qa=function(){return this.Ze()};rm.prototype.Ze=function(){return this};function tm(){}tm.prototype=new km;tm.prototype.constructor=tm;tm.prototype.a=function(){return this};tm.prototype.$classData=t({Lk:0},!1,"scala.collection.immutable.HashSet$EmptyHashSet$",{Lk:1,Dd:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,Ub:1,e:1,d:1});var um=void 0;
function fl(){um||(um=(new tm).a());return um}function el(){this.jb=0;this.ta=null;this.Ec=0}el.prototype=new km;el.prototype.constructor=el;d=el.prototype;
d.re=function(a,b,c){var e=1<<(31&(b>>>c|0)),f=Hh(Og(),this.jb&(-1+e|0));if(0!==(this.jb&e)){e=this.ta.c[f];a=e.re(a,b,5+c|0);if(e===a)return this;b=p(w(cl),[this.ta.c.length]);Ii(Ki(),this.ta,0,b,0,this.ta.c.length);b.c[f]=a;return dl(new el,this.jb,b,this.Ec+(a.v()-e.v()|0)|0)}c=p(w(cl),[1+this.ta.c.length|0]);Ii(Ki(),this.ta,0,c,0,f);c.c[f]=lm(new mm,a,b);Ii(Ki(),this.ta,f,c,1+f|0,this.ta.c.length-f|0);return dl(new el,this.jb|e,c,1+this.Ec|0)};
d.x=function(a){for(var b=0;b<this.ta.c.length;)this.ta.c[b].x(a),b=1+b|0};d.v=function(){return this.Ec};d.s=function(){var a=new kk;wj.prototype.Og.call(a,this.ta);return a};
d.he=function(a,b,c){var e=1<<(31&(b>>>c|0)),f=Hh(Og(),this.jb&(-1+e|0));if(0!==(this.jb&e)){var h=this.ta.c[f];a=h.he(a,b,5+c|0);return h===a?this:null===a?(e^=this.jb,0!==e?(a=p(w(cl),[-1+this.ta.c.length|0]),Ii(Ki(),this.ta,0,a,0,f),Ii(Ki(),this.ta,1+f|0,a,f,-1+(this.ta.c.length-f|0)|0),f=this.Ec-h.v()|0,1!==a.c.length||yj(a.c[0])?dl(new el,e,a,f):a.c[0]):null):1!==this.ta.c.length||yj(a)?(e=p(w(cl),[this.ta.c.length]),Ii(Ki(),this.ta,0,e,0,this.ta.c.length),e.c[f]=a,f=this.Ec+(a.v()-h.v()|0)|
0,dl(new el,this.jb,e,f)):a}return this};function dl(a,b,c,e){a.jb=b;a.ta=c;a.Ec=e;Wh();if(Hh(Og(),b)!==c.c.length)throw(new yi).m("assertion failed");return a}d.Nc=function(a,b,c){var e=31&(b>>>c|0),f=1<<e;return-1===this.jb?this.ta.c[31&e].Nc(a,b,5+c|0):0!==(this.jb&f)?(e=Hh(Og(),this.jb&(-1+f|0)),this.ta.c[e].Nc(a,b,5+c|0)):!1};
d.qe=function(a,b){if(a===this)return!0;if(yj(a)&&this.Ec<=a.Ec){var c=this.jb,e=this.ta,f=0,h=a.ta;a=a.jb;var k=0;if((c&a)===c){for(;0!==c;){var m=c^c&(-1+c|0),n=a^a&(-1+a|0);if(m===n){if(!e.c[f].qe(h.c[k],5+b|0))return!1;c&=~m;f=1+f|0}a&=~n;k=1+k|0}return!0}}return!1};function yj(a){return!!(a&&a.$classData&&a.$classData.l.wh)}
d.$classData=t({wh:0},!1,"scala.collection.immutable.HashSet$HashTrieSet",{wh:1,Dd:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,Ub:1,e:1,d:1});function vm(){}vm.prototype=new km;vm.prototype.constructor=vm;function wm(){}wm.prototype=vm.prototype;function xm(){}xm.prototype=new Wl;xm.prototype.constructor=xm;function ym(){}d=ym.prototype=xm.prototype;d.Hd=function(){throw(new R).f("value of empty map");};
d.i=function(){return!0};d.Ra=function(){return this};d.nf=function(){return zm()};d.of=function(){return zm()};d.v=function(){return 0};d.Sf=function(){return this};d.te=function(a){return Am(new Bm,this,a.Ia,a.Ta)};d.s=function(){var a=Cm(this);return lj(a)};d.gd=function(){throw(new R).f("key of empty map");};d.Cb=function(a,b){return this.se(a,b)};d.se=function(a,b){return Am(new Bm,this,a,b)};d.Mb=function(){return M()};
function Cm(a){for(var b=L();!a.i();){var c=(new J).h(a.gd(),a.Hd()),b=Sk(new Tk,c,b);a=a.Pc()}return b}d.Pc=function(){throw(new R).f("next of empty map");};d.Ic=function(a){return this.te(a)};d.hc=function(){return"ListMap"};function Dm(){}Dm.prototype=new Wl;Dm.prototype.constructor=Dm;d=Dm.prototype;d.a=function(){return this};d.g=function(a){throw(new R).f("key not found: "+a);};d.v=function(){return 0};d.s=function(){return K().lb};d.Cb=function(a,b){return(new Em).h(a,b)};d.Mb=function(){return M()};
d.Ic=function(a){return(new Em).h(a.Ia,a.Ta)};d.$classData=t({bl:0},!1,"scala.collection.immutable.Map$EmptyMap$",{bl:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});var Fm=void 0;function nc(){Fm||(Fm=(new Dm).a());return Fm}function Em(){this.ca=this.u=null}Em.prototype=new Wl;Em.prototype.constructor=Em;d=Em.prototype;
d.g=function(a){if(S(T(),a,this.u))return this.ca;throw(new R).f("key not found: "+a);};d.h=function(a,b){this.u=a;this.ca=b;return this};d.x=function(a){a.g((new J).h(this.u,this.ca))};d.v=function(){return 1};d.s=function(){K();var a=(new I).ra([(new J).h(this.u,this.ca)]);return Z(a,a.ea.length|0)};d.Cb=function(a,b){return S(T(),a,this.u)?(new Em).h(this.u,b):(new Gm).$d(this.u,this.ca,a,b)};d.Mb=function(a){return S(T(),a,this.u)?(new N).m(this.ca):M()};d.Ic=function(a){return this.Cb(a.Ia,a.Ta)};
d.$classData=t({cl:0},!1,"scala.collection.immutable.Map$Map1",{cl:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});function Gm(){this.va=this.da=this.ca=this.u=null}Gm.prototype=new Wl;Gm.prototype.constructor=Gm;d=Gm.prototype;d.g=function(a){if(S(T(),a,this.u))return this.ca;if(S(T(),a,this.da))return this.va;throw(new R).f("key not found: "+a);};
d.x=function(a){a.g((new J).h(this.u,this.ca));a.g((new J).h(this.da,this.va))};d.v=function(){return 2};d.s=function(){K();var a=(new I).ra([(new J).h(this.u,this.ca),(new J).h(this.da,this.va)]);return Z(a,a.ea.length|0)};d.Cb=function(a,b){return S(T(),a,this.u)?(new Gm).$d(this.u,b,this.da,this.va):S(T(),a,this.da)?(new Gm).$d(this.u,this.ca,this.da,b):Hm(this.u,this.ca,this.da,this.va,a,b)};d.Mb=function(a){return S(T(),a,this.u)?(new N).m(this.ca):S(T(),a,this.da)?(new N).m(this.va):M()};
d.$d=function(a,b,c,e){this.u=a;this.ca=b;this.da=c;this.va=e;return this};d.Ic=function(a){return this.Cb(a.Ia,a.Ta)};d.$classData=t({dl:0},!1,"scala.collection.immutable.Map$Map2",{dl:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});function Im(){this.Va=this.Ca=this.va=this.da=this.ca=this.u=null}Im.prototype=new Wl;Im.prototype.constructor=Im;d=Im.prototype;
d.g=function(a){if(S(T(),a,this.u))return this.ca;if(S(T(),a,this.da))return this.va;if(S(T(),a,this.Ca))return this.Va;throw(new R).f("key not found: "+a);};d.x=function(a){a.g((new J).h(this.u,this.ca));a.g((new J).h(this.da,this.va));a.g((new J).h(this.Ca,this.Va))};function Hm(a,b,c,e,f,h){var k=new Im;k.u=a;k.ca=b;k.da=c;k.va=e;k.Ca=f;k.Va=h;return k}d.v=function(){return 3};
d.s=function(){K();var a=(new I).ra([(new J).h(this.u,this.ca),(new J).h(this.da,this.va),(new J).h(this.Ca,this.Va)]);return Z(a,a.ea.length|0)};d.Cb=function(a,b){return S(T(),a,this.u)?Hm(this.u,b,this.da,this.va,this.Ca,this.Va):S(T(),a,this.da)?Hm(this.u,this.ca,this.da,b,this.Ca,this.Va):S(T(),a,this.Ca)?Hm(this.u,this.ca,this.da,this.va,this.Ca,b):Jm(this.u,this.ca,this.da,this.va,this.Ca,this.Va,a,b)};
d.Mb=function(a){return S(T(),a,this.u)?(new N).m(this.ca):S(T(),a,this.da)?(new N).m(this.va):S(T(),a,this.Ca)?(new N).m(this.Va):M()};d.Ic=function(a){return this.Cb(a.Ia,a.Ta)};d.$classData=t({el:0},!1,"scala.collection.immutable.Map$Map3",{el:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});function Km(){this.Gc=this.Pb=this.Va=this.Ca=this.va=this.da=this.ca=this.u=null}Km.prototype=new Wl;
Km.prototype.constructor=Km;d=Km.prototype;d.g=function(a){if(S(T(),a,this.u))return this.ca;if(S(T(),a,this.da))return this.va;if(S(T(),a,this.Ca))return this.Va;if(S(T(),a,this.Pb))return this.Gc;throw(new R).f("key not found: "+a);};d.x=function(a){a.g((new J).h(this.u,this.ca));a.g((new J).h(this.da,this.va));a.g((new J).h(this.Ca,this.Va));a.g((new J).h(this.Pb,this.Gc))};d.v=function(){return 4};
d.s=function(){K();var a=(new I).ra([(new J).h(this.u,this.ca),(new J).h(this.da,this.va),(new J).h(this.Ca,this.Va),(new J).h(this.Pb,this.Gc)]);return Z(a,a.ea.length|0)};
d.Cb=function(a,b){return S(T(),a,this.u)?Jm(this.u,b,this.da,this.va,this.Ca,this.Va,this.Pb,this.Gc):S(T(),a,this.da)?Jm(this.u,this.ca,this.da,b,this.Ca,this.Va,this.Pb,this.Gc):S(T(),a,this.Ca)?Jm(this.u,this.ca,this.da,this.va,this.Ca,b,this.Pb,this.Gc):S(T(),a,this.Pb)?Jm(this.u,this.ca,this.da,this.va,this.Ca,this.Va,this.Pb,b):Lm(Lm(Lm(Lm(Lm((new Mm).a(),this.u,this.ca),this.da,this.va),this.Ca,this.Va),this.Pb,this.Gc),a,b)};
function Jm(a,b,c,e,f,h,k,m){var n=new Km;n.u=a;n.ca=b;n.da=c;n.va=e;n.Ca=f;n.Va=h;n.Pb=k;n.Gc=m;return n}d.Mb=function(a){return S(T(),a,this.u)?(new N).m(this.ca):S(T(),a,this.da)?(new N).m(this.va):S(T(),a,this.Ca)?(new N).m(this.Va):S(T(),a,this.Pb)?(new N).m(this.Gc):M()};d.Ic=function(a){return this.Cb(a.Ia,a.Ta)};
d.$classData=t({fl:0},!1,"scala.collection.immutable.Map$Map4",{fl:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});function Mm(){}Mm.prototype=new Wl;Mm.prototype.constructor=Mm;function Nm(){}d=Nm.prototype=Mm.prototype;d.bd=function(a){return this.xf(Je(O(),a))};d.Qa=function(){return this};d.a=function(){return this};d.Ra=function(){return this};d.Gd=function(a,b,c,e,f){return Om(a,b,e,f)};
d.yd=function(){return M()};d.x=function(){};function Lm(a,b,c){return a.Gd(b,a.bd(b),0,c,null,null)}d.nf=function(){Hk();return Pm()};d.of=function(){Hk();return Pm()};d.v=function(){return 0};d.Sf=function(){return this};d.s=function(){return K().lb};d.Cb=function(a,b){return Lm(this,a,b)};d.xf=function(a){a=a+~(a<<9)|0;a^=a>>>14|0;a=a+(a<<4)|0;return a^(a>>>10|0)};d.Mb=function(a){return this.yd(a,this.bd(a),0)};d.Ic=function(a){return this.Gd(a.Ia,this.bd(a.Ia),0,a.Ta,a,null)};
var Ek=t({le:0},!1,"scala.collection.immutable.HashMap",{le:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1,Ub:1});Mm.prototype.$classData=Ek;function mm(){this.Ua=null;this.wa=0}mm.prototype=new wm;mm.prototype.constructor=mm;d=mm.prototype;
d.re=function(a,b,c){if(b===this.wa&&S(T(),a,this.Ua))return this;if(b!==this.wa)return bl(hl(),this.wa,this,b,lm(new mm,a,b),c);c=ll();return Qm(new Rm,b,Zl(new $l,c,this.Ua).Jd(a))};d.x=function(a){a.g(this.Ua)};function lm(a,b,c){a.Ua=b;a.wa=c;return a}d.v=function(){return 1};d.s=function(){K();var a=(new I).ra([this.Ua]);return Z(a,a.ea.length|0)};d.he=function(a,b){return b===this.wa&&S(T(),a,this.Ua)?null:this};d.Nc=function(a,b){return b===this.wa&&S(T(),a,this.Ua)};
d.qe=function(a,b){return a.Nc(this.Ua,this.wa,b)};d.$classData=t({vh:0},!1,"scala.collection.immutable.HashSet$HashSet1",{vh:1,Ok:1,Dd:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,Ub:1,e:1,d:1});function Rm(){this.wa=0;this.vc=null}Rm.prototype=new wm;Rm.prototype.constructor=Rm;d=Rm.prototype;d.re=function(a,b,c){return b===this.wa?Qm(new Rm,b,this.vc.Jd(a)):bl(hl(),this.wa,this,b,lm(new mm,a,b),c)};
d.x=function(a){var b=am(this.vc);Xg(lj(b),a)};d.v=function(){return this.vc.v()};d.s=function(){var a=am(this.vc);return lj(a)};d.he=function(a,b){if(b===this.wa){a=this.vc.af(a);var c=a.v();switch(c){case 0:return null;case 1:return a=am(a),lm(new mm,lj(a).ka(),b);default:return c===this.vc.v()?this:Qm(new Rm,b,a)}}else return this};function Qm(a,b,c){a.wa=b;a.vc=c;return a}d.Nc=function(a,b){return b===this.wa&&this.vc.Ka(a)};
d.qe=function(a,b){for(var c=am(this.vc),c=lj(c),e=!0;e&&c.ia();)e=c.ka(),e=a.Nc(e,this.wa,b);return e};d.$classData=t({Mk:0},!1,"scala.collection.immutable.HashSet$HashSetCollision1",{Mk:1,Ok:1,Dd:1,Tb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Zb:1,z:1,Jb:1,Wb:1,ac:1,$b:1,ua:1,ec:1,ga:1,ma:1,la:1,Ub:1,e:1,d:1});function Sm(){}Sm.prototype=new ym;Sm.prototype.constructor=Sm;Sm.prototype.a=function(){return this};
Sm.prototype.$classData=t({Vk:0},!1,"scala.collection.immutable.ListMap$EmptyListMap$",{Vk:1,Uk:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});var Tm=void 0;function zm(){Tm||(Tm=(new Sm).a());return Tm}function Bm(){this.Yf=this.Yc=this.Ua=null}Bm.prototype=new ym;Bm.prototype.constructor=Bm;
function Um(a,b){var c=L();for(;;){if(b.i())return Kl(c);if(S(T(),a,b.gd())){b=b.Pc();for(a=c;!a.i();)c=a.qa(),b=Am(new Bm,b,c.gd(),c.Hd()),a=a.$();return b}var e=b.Pc(),c=Sk(new Tk,b,c);b=e}}d=Bm.prototype;d.g=function(a){a:{var b=this;for(;;){if(b.i())throw(new R).f("key not found: "+a);if(S(T(),a,b.gd())){a=b.Hd();break a}b=b.Pc()}}return a};d.Hd=function(){return this.Yc};d.i=function(){return!1};d.v=function(){a:{var a=this,b=0;for(;;){if(a.i())break a;a=a.Pc();b=1+b|0}}return b};d.gd=function(){return this.Ua};
d.te=function(a){var b=Um(a.Ia,this);return Am(new Bm,b,a.Ia,a.Ta)};d.Cb=function(a,b){return this.se(a,b)};d.se=function(a,b){var c=Um(a,this);return Am(new Bm,c,a,b)};d.Mb=function(a){a:{var b=this;for(;;){if(b.i()){a=M();break a}if(S(T(),a,b.gd())){a=(new N).m(b.Hd());break a}b=b.Pc()}}return a};d.Ka=function(a){a:{var b=this;for(;;){if(b.i()){a=!1;break a}if(S(T(),a,b.gd())){a=!0;break a}b=b.Pc()}}return a};function Am(a,b,c,e){a.Ua=c;a.Yc=e;if(null===b)throw ef(D(),null);a.Yf=b;return a}
d.Pc=function(){return this.Yf};d.Ic=function(a){return this.te(a)};d.$classData=t({Wk:0},!1,"scala.collection.immutable.ListMap$Node",{Wk:1,Uk:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1});function Wm(){}Wm.prototype=new Ql;Wm.prototype.constructor=Wm;function Xm(){}d=Xm.prototype=Wm.prototype;d.Qa=function(){return this};d.Ja=function(a){return Jl(this,a)};
d.wc=function(a){return 0>a?1:Ll(this,a)};d.g=function(a){return Jl(this,a|0)};d.Hb=function(a){return Il(this,a)};d.Ra=function(){return this};function pk(a,b){var c=(ud(),(new ni).a());if(qk(c.ze(a))){if(a.i())a=ah();else{for(var c=(new vh).m(a),e=b.g(c.E.qa()).ib();!c.E.i()&&e.i();)c.E=c.E.$(),c.E.i()||(e=b.g(c.E.qa()).ib());a=c.E.i()?(ud(),ah()):Ym(e,wb(function(a,b,c){return function(){return pk(c.E.$(),b)}}(a,b,c)))}return a}return dk(a,b,c)}
d.ha=function(a){return this===a||(yl(a)?this.Hb(a):!1)};d.Eg=function(a){a:{var b=this;for(;;){if(0>=a||b.i())break a;b=b.$();a=-1+a|0}}return b};d.Pe=function(a,b,c){var e=this,f=this;for(e.i()||(e=e.$());f!==e&&!e.i();){e=e.$();if(e.i())break;e=e.$();if(e===f)break;f=f.$()}return Qe(this,a,b,c)};d.Wa=function(){return ud()};d.o=function(){return Qe(this,"Stream(",", ",")")};d.x=function(a){var b=this;a:for(;;){if(!b.i()){a.g(b.qa());b=b.$();continue a}break}};d.s=function(){return vj(this)};
d.Vc=function(){return this};d.xa=function(){for(var a=0,b=this;!b.i();)a=1+a|0,b=b.$();return a};d.ib=function(){return this};
d.pd=function(a,b,c,e){P(a,b);if(!this.i()){Ue(a,this.qa());b=this;if(b.Fc()){var f=this.$();if(f.i())return P(a,e),a;if(b!==f&&(b=f,f.Fc()))for(f=f.$();b!==f&&f.Fc();)Ue(P(a,c),b.qa()),b=b.$(),f=f.$(),f.Fc()&&(f=f.$());if(f.Fc()){for(var h=this,k=0;h!==f;)h=h.$(),f=f.$(),k=1+k|0;b===f&&0<k&&(Ue(P(a,c),b.qa()),b=b.$());for(;b!==f;)Ue(P(a,c),b.qa()),b=b.$()}else{for(;b!==f;)Ue(P(a,c),b.qa()),b=b.$();!b.i()&&Ue(P(a,c),b.qa())}}b.i()||(b.Fc()?P(P(a,c),"..."):P(P(a,c),"?"))}P(a,e);return a};
d.y=function(){return Ug(Le(),this)};function Ym(a,b){if(a.i())return gf(b).ib();var c=a.qa();return Zg(new $g,c,wb(function(a,b){return function(){return Ym(a.$(),b)}}(a,b)))}d.hc=function(){return"Stream"};function Zm(a,b){if(b>=a.Ba)throw(new X).f(""+b);return a.ea.c[b]}
function $m(a,b){var c=a.ea.c.length,e=c>>31,f=b>>31;if(f===e?(-2147483648^b)>(-2147483648^c):f>e){f=c<<1;for(c=c>>>31|0|e<<1;;){var e=b>>31,h=f,k=c;if(e===k?(-2147483648^b)>(-2147483648^h):e>k)c=f>>>31|0|c<<1,f<<=1;else break}b=c;if(0===b?-1<(-2147483648^f):0<b)f=2147483647;b=f;b=p(w(v),[b]);Ha(a.ea,0,b,0,a.Ba);a.ea=b}}function an(){}an.prototype=new Nm;an.prototype.constructor=an;an.prototype.a=function(){return this};
an.prototype.$classData=t({Gk:0},!1,"scala.collection.immutable.HashMap$EmptyHashMap$",{Gk:1,le:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1,Ub:1});var bn=void 0;function Pm(){bn||(bn=(new an).a());return bn}function cn(){this.Ua=null;this.wa=0;this.Ne=this.Yc=null}cn.prototype=new Nm;cn.prototype.constructor=cn;function jk(a){null===a.Ne&&(a.Ne=(new J).h(a.Ua,a.Yc));return a.Ne}
function Om(a,b,c,e){var f=new cn;f.Ua=a;f.wa=b;f.Yc=c;f.Ne=e;return f}d=cn.prototype;d.Gd=function(a,b,c,e,f,h){if(b===this.wa&&S(T(),a,this.Ua)){if(null===h)return this.Yc===e?this:Om(a,b,e,f);a=h.gf(jk(this),null!==f?f:(new J).h(a,e));return Om(a.Ia,b,a.Ta,a)}if(b!==this.wa)return a=Om(a,b,e,f),Dk(Hk(),this.wa,this,b,a,c,2);c=zm();return dn(new en,b,Am(new Bm,c,this.Ua,this.Yc).se(a,e))};d.yd=function(a,b){return b===this.wa&&S(T(),a,this.Ua)?(new N).m(this.Yc):M()};d.x=function(a){a.g(jk(this))};
d.s=function(){K();var a=(new I).ra([jk(this)]);return Z(a,a.ea.length|0)};d.v=function(){return 1};d.$classData=t({uh:0},!1,"scala.collection.immutable.HashMap$HashMap1",{uh:1,le:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1,Ub:1});function en(){this.wa=0;this.kc=null}en.prototype=new Nm;en.prototype.constructor=en;d=en.prototype;
d.Gd=function(a,b,c,e,f,h){if(b===this.wa)return null!==h&&this.kc.Ka(a)?dn(new en,b,this.kc.te(h.gf((new J).h(a,this.kc.g(a)),f))):dn(new en,b,this.kc.se(a,e));a=Om(a,b,e,f);return Dk(Hk(),this.wa,this,b,a,c,1+this.kc.v()|0)};d.yd=function(a,b){return b===this.wa?this.kc.Mb(a):M()};d.x=function(a){var b=Cm(this.kc);Xg(lj(b),a)};d.s=function(){var a=Cm(this.kc);return lj(a)};d.v=function(){return this.kc.v()};function dn(a,b,c){a.wa=b;a.kc=c;return a}
d.$classData=t({Hk:0},!1,"scala.collection.immutable.HashMap$HashMapCollision1",{Hk:1,le:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1,Ub:1});function Gk(){this.Jc=0;this.gb=null;this.Ba=0}Gk.prototype=new Nm;Gk.prototype.constructor=Gk;d=Gk.prototype;
d.Gd=function(a,b,c,e,f,h){var k=1<<(31&(b>>>c|0)),m=Hh(Og(),this.Jc&(-1+k|0));if(0!==(this.Jc&k)){k=this.gb.c[m];a=k.Gd(a,b,5+c|0,e,f,h);if(a===k)return this;b=p(w(Ek),[this.gb.c.length]);Ii(Ki(),this.gb,0,b,0,this.gb.c.length);b.c[m]=a;return Fk(new Gk,this.Jc,b,this.Ba+(a.v()-k.v()|0)|0)}c=p(w(Ek),[1+this.gb.c.length|0]);Ii(Ki(),this.gb,0,c,0,m);c.c[m]=Om(a,b,e,f);Ii(Ki(),this.gb,m,c,1+m|0,this.gb.c.length-m|0);return Fk(new Gk,this.Jc|k,c,1+this.Ba|0)};
d.yd=function(a,b,c){var e=31&(b>>>c|0);if(-1===this.Jc)return this.gb.c[e].yd(a,b,5+c|0);e=1<<e;return 0!==(this.Jc&e)?(e=Hh(Og(),this.Jc&(-1+e|0)),this.gb.c[e].yd(a,b,5+c|0)):M()};d.x=function(a){for(var b=0;b<this.gb.c.length;)this.gb.c[b].x(a),b=1+b|0};d.s=function(){var a=new ik;wj.prototype.Og.call(a,this.gb);return a};d.v=function(){return this.Ba};function Fk(a,b,c,e){a.Jc=b;a.gb=c;a.Ba=e;return a}
d.$classData=t({Jf:0},!1,"scala.collection.immutable.HashMap$HashTrieMap",{Jf:1,le:1,bc:1,Sb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Xb:1,Ib:1,Vb:1,Yb:1,Ha:1,z:1,ua:1,cc:1,ga:1,ma:1,la:1,dc:1,e:1,d:1,Ub:1});function fn(){}fn.prototype=new Ql;fn.prototype.constructor=fn;function gn(){}d=gn.prototype=fn.prototype;d.Qa=function(){return this};d.Ja=function(a){return Jl(this,a)};d.wc=function(a){return 0>a?1:Ll(this,a)};d.Hb=function(a){return Il(this,a)};
d.g=function(a){return Jl(this,a|0)};d.Ra=function(){return this};d.Eg=function(a){for(var b=this;!b.i()&&0<a;)b=b.qc(),a=-1+a|0;return b};d.Wa=function(){return nd()};d.x=function(a){for(var b=this;!b.i();)a.g(b.qa()),b=b.qc()};d.s=function(){return lj(this)};d.xa=function(){for(var a=this,b=0;!a.i();)b=1+b|0,a=a.$();return b};d.Vc=function(){return this};d.ib=function(){return this.i()?ah():Zg(new $g,this.qa(),wb(function(a){return function(){return a.qc().ib()}}(this)))};
d.y=function(){return Ug(Le(),this)};d.hc=function(){return"List"};function Vg(a){return!!(a&&a.$classData&&a.$classData.l.xh)}function $g(){this.$e=this.Qh=this.Je=null}$g.prototype=new Xm;$g.prototype.constructor=$g;d=$g.prototype;d.qa=function(){return this.Je};function hn(a){a.Fc()||a.Fc()||(a.Qh=gf(a.$e),a.$e=null);return a.Qh}d.Hb=function(a){return jn(a)?kn(this,a):Il(this,a)};d.i=function(){return!1};d.Fc=function(){return null===this.$e};
function kn(a,b){for(;;)if(S(T(),a.Je,b.Je))if(a=hn(a),jn(a))if(b=hn(b),jn(b)){if(a===b)return!0}else return!1;else return hn(b).i();else return!1}d.$=function(){return hn(this)};function Zg(a,b,c){a.Je=b;a.$e=c;return a}function jn(a){return!!(a&&a.$classData&&a.$classData.l.yh)}
d.$classData=t({yh:0},!1,"scala.collection.immutable.Stream$Cons",{yh:1,pl:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Kf:1,me:1,ga:1,ma:1,la:1,ke:1,Ff:1,Gf:1,e:1,d:1});function ln(){}ln.prototype=new Xm;ln.prototype.constructor=ln;d=ln.prototype;d.qa=function(){this.wf()};d.a=function(){return this};d.i=function(){return!0};d.Fc=function(){return!1};d.wf=function(){throw(new R).f("head of empty stream");};
d.$=function(){throw(new $i).f("tail of empty stream");};d.$classData=t({sl:0},!1,"scala.collection.immutable.Stream$Empty$",{sl:1,pl:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Kf:1,me:1,ga:1,ma:1,la:1,ke:1,Ff:1,Gf:1,e:1,d:1});var mn=void 0;function ah(){mn||(mn=(new ln).a());return mn}function sk(){this.wd=this.Wd=this.nd=0;this.ud=!1;this.De=0;this.Dg=this.Ag=this.xg=this.ug=this.rg=this.mf=null}sk.prototype=new Ql;
sk.prototype.constructor=sk;function nn(a,b){var c=b+a.nd|0;if(0<=b&&c<a.Wd)return c;throw(new X).f(""+b);}d=sk.prototype;d.r=function(){return this.xg};d.Qa=function(){return this};d.Ja=function(a){a=nn(this,a);return Pb(this,a,a^this.wd)};d.kb=function(){return this.De};d.wc=function(a){return this.xa()-a|0};d.g=function(a){return this.Ja(a|0)};d.Ra=function(){return this};d.Ke=function(a,b,c){this.nd=a;this.Wd=b;this.wd=c;this.ud=!1;return this};d.cd=function(a){this.Dg=a};d.Wa=function(){return xd()};
d.sa=function(){return this.mf};d.oa=function(){return this.Ag};d.fa=function(a){this.ug=a};
d.s=function(){var a=(new tk).uc(this.nd,this.Wd);Rb(a,this,this.De);if(this.ud){var b=this.wd,c=-1+a.kb()|0;switch(c){case 5:a.cd(E(a.fb()));a.eb(E(a.oa()));a.Aa(E(a.r()));a.fa(E(a.n()));a.w(E(a.j()));a.fb().c[31&(b>>>25|0)]=a.oa();a.oa().c[31&(b>>>20|0)]=a.r();a.r().c[31&(b>>>15|0)]=a.n();a.n().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 4:a.eb(E(a.oa()));a.Aa(E(a.r()));a.fa(E(a.n()));a.w(E(a.j()));a.oa().c[31&(b>>>20|0)]=a.r();a.r().c[31&(b>>>15|0)]=a.n();a.n().c[31&(b>>>10|
0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 3:a.Aa(E(a.r()));a.fa(E(a.n()));a.w(E(a.j()));a.r().c[31&(b>>>15|0)]=a.n();a.n().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 2:a.fa(E(a.n()));a.w(E(a.j()));a.n().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 1:a.w(E(a.j()));a.j().c[31&(b>>>5|0)]=a.sa();break;case 0:break;default:throw(new C).m(c);}}1<a.kf&&Qb(a,this.nd,this.nd^this.wd);return a};d.w=function(a){this.rg=a};d.xa=function(){return this.Wd-this.nd|0};
d.eb=function(a){this.Ag=a};d.Vc=function(){return this};d.Wc=function(){return this.xa()};d.j=function(){return this.rg};d.fb=function(){return this.Dg};
d.Rh=function(a,b,c){if(c===(hi(),md().cg)||c===xk().ya||c===Yb().ya){a=nn(this,a);c=(new sk).Ke(this.nd,this.Wd,a);Rb(c,this,this.De);c.ud=this.ud;if(c.ud){var e=this.wd,f=this.wd^a;if(32>f)c.G(E(c.sa()));else if(1024>f)c.w(E(c.j())),c.j().c[31&(e>>>5|0)]=c.sa(),c.G(H(c.j(),31&(a>>>5|0)));else if(32768>f)c.w(E(c.j())),c.fa(E(c.n())),c.j().c[31&(e>>>5|0)]=c.sa(),c.n().c[31&(e>>>10|0)]=c.j(),c.w(H(c.n(),31&(a>>>10|0))),c.G(H(c.j(),31&(a>>>5|0)));else if(1048576>f)c.w(E(c.j())),c.fa(E(c.n())),c.Aa(E(c.r())),
c.j().c[31&(e>>>5|0)]=c.sa(),c.n().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.n(),c.fa(H(c.r(),31&(a>>>15|0))),c.w(H(c.n(),31&(a>>>10|0))),c.G(H(c.j(),31&(a>>>5|0)));else if(33554432>f)c.w(E(c.j())),c.fa(E(c.n())),c.Aa(E(c.r())),c.eb(E(c.oa())),c.j().c[31&(e>>>5|0)]=c.sa(),c.n().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.n(),c.oa().c[31&(e>>>20|0)]=c.r(),c.Aa(H(c.oa(),31&(a>>>20|0))),c.fa(H(c.r(),31&(a>>>15|0))),c.w(H(c.n(),31&(a>>>10|0))),c.G(H(c.j(),31&(a>>>5|0)));else if(1073741824>f)c.w(E(c.j())),
c.fa(E(c.n())),c.Aa(E(c.r())),c.eb(E(c.oa())),c.cd(E(c.fb())),c.j().c[31&(e>>>5|0)]=c.sa(),c.n().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.n(),c.oa().c[31&(e>>>20|0)]=c.r(),c.fb().c[31&(e>>>25|0)]=c.oa(),c.eb(H(c.fb(),31&(a>>>25|0))),c.Aa(H(c.oa(),31&(a>>>20|0))),c.fa(H(c.r(),31&(a>>>15|0))),c.w(H(c.n(),31&(a>>>10|0))),c.G(H(c.j(),31&(a>>>5|0)));else throw(new G).a();}else{e=-1+c.kb()|0;switch(e){case 5:c.cd(E(c.fb()));c.eb(H(c.fb(),31&(a>>>25|0)));c.Aa(H(c.oa(),31&(a>>>20|0)));c.fa(H(c.r(),
31&(a>>>15|0)));c.w(H(c.n(),31&(a>>>10|0)));c.G(H(c.j(),31&(a>>>5|0)));break;case 4:c.eb(E(c.oa()));c.Aa(H(c.oa(),31&(a>>>20|0)));c.fa(H(c.r(),31&(a>>>15|0)));c.w(H(c.n(),31&(a>>>10|0)));c.G(H(c.j(),31&(a>>>5|0)));break;case 3:c.Aa(E(c.r()));c.fa(H(c.r(),31&(a>>>15|0)));c.w(H(c.n(),31&(a>>>10|0)));c.G(H(c.j(),31&(a>>>5|0)));break;case 2:c.fa(E(c.n()));c.w(H(c.n(),31&(a>>>10|0)));c.G(H(c.j(),31&(a>>>5|0)));break;case 1:c.w(E(c.j()));c.G(H(c.j(),31&(a>>>5|0)));break;case 0:c.G(E(c.sa()));break;default:throw(new C).m(e);
}c.ud=!0}c.mf.c[31&a]=b;b=c}else b=Dl(this,a,b,c);return b};d.y=function(){return Ug(Le(),this)};d.Lc=function(a){this.De=a};d.n=function(){return this.ug};d.G=function(a){this.mf=a};d.Aa=function(a){this.xg=a};d.$classData=t({zl:0},!1,"scala.collection.immutable.Vector",{zl:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Pk:1,me:1,ga:1,ma:1,la:1,je:1,Bd:1,Ch:1,e:1,d:1,Ub:1});function nf(){this.md=null}nf.prototype=new Ql;
nf.prototype.constructor=nf;d=nf.prototype;d.Qa=function(){return this};d.Ja=function(a){a=65535&(this.md.charCodeAt(a)|0);return xh(a)};d.wc=function(a){return El(this,a)};d.Hb=function(a){return Fl(this,a)};d.g=function(a){a=65535&(this.md.charCodeAt(a|0)|0);return xh(a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.Wa=function(){return hi()};d.o=function(){return this.md};d.x=function(a){Gl(this,a)};d.s=function(){return Z(this,this.md.length|0)};
d.xa=function(){return this.md.length|0};d.Vc=function(){return this};d.Wc=function(){return this.md.length|0};d.y=function(){return Ug(Le(),this)};d.sd=function(a,b,c){Hl(this,a,b,c)};d.f=function(a){this.md=a;return this};d.ja=function(){of||(of=(new kf).a());return of.ja()};
d.$classData=t({Dl:0},!1,"scala.collection.immutable.WrappedString",{Dl:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Pk:1,me:1,ga:1,ma:1,la:1,je:1,Bd:1,Ah:1,We:1,kh:1,Gb:1});function Tk(){this.Fd=this.vf=null}Tk.prototype=new gn;Tk.prototype.constructor=Tk;d=Tk.prototype;d.qa=function(){return this.vf};d.Ga=function(){return"::"};d.Ea=function(){return 2};d.qc=function(){return this.Fd};d.i=function(){return!1};
d.Fa=function(a){switch(a){case 0:return this.vf;case 1:return this.Fd;default:throw(new X).f(""+a);}};d.$=function(){return this.Fd};function Sk(a,b,c){a.vf=b;a.Fd=c;return a}d.Na=function(){return Y(this)};d.$classData=t({Bk:0},!1,"scala.collection.immutable.$colon$colon",{Bk:1,xh:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Kf:1,me:1,ga:1,ma:1,la:1,ke:1,Ff:1,Pa:1,Gf:1,e:1,d:1});function on(){}on.prototype=new gn;
on.prototype.constructor=on;d=on.prototype;d.Ga=function(){return"Nil"};d.qa=function(){this.wf()};d.a=function(){return this};d.Ea=function(){return 0};d.i=function(){return!0};d.qc=function(){throw(new $i).f("tail of empty list");};d.ha=function(a){return yl(a)?a.i():!1};d.Fa=function(a){throw(new X).f(""+a);};d.wf=function(){throw(new R).f("head of empty list");};d.$=function(){return this.qc()};d.Na=function(){return Y(this)};
d.$classData=t({gl:0},!1,"scala.collection.immutable.Nil$",{gl:1,xh:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Kf:1,me:1,ga:1,ma:1,la:1,ke:1,Ff:1,Pa:1,Gf:1,e:1,d:1});var pn=void 0;function L(){pn||(pn=(new on).a());return pn}function qn(){}qn.prototype=new sm;qn.prototype.constructor=qn;function rn(){}rn.prototype=qn.prototype;qn.prototype.tb=function(a){return $e(this,a)};function hj(){this.hd=this.cb=null;this.He=!1;this.Oc=0}
hj.prototype=new rn;hj.prototype.constructor=hj;d=hj.prototype;d.a=function(){this.cb=L();this.He=!1;this.Oc=0;return this};d.Ja=function(a){if(0>a||a>=this.Oc)throw(new X).f(""+a);return Jl(this.cb,a)};d.wc=function(a){return 0>a?1:Ll(this.cb,a)};d.Hb=function(a){return Il(this.cb,a)};d.g=function(a){return this.Ja(a|0)};d.i=function(){return 0===this.Oc};d.Ra=function(){return this};d.ha=function(a){return a&&a.$classData&&a.$classData.l.Ih?this.cb.ha(a.cb):yl(a)?this.Hb(a):!1};
d.Pe=function(a,b,c){return Qe(this.cb,a,b,c)};d.sb=function(a){return Ej(this,a)};d.Wa=function(){xl||(xl=(new wl).a());return xl};d.x=function(a){for(var b=this.cb;!b.i();)a.g(b.qa()),b=b.qc()};d.bb=function(){this.He=!this.i();return this.cb};d.s=function(){var a=new Fj;a.Rd=this.i()?L():this.cb;return a};d.gc=function(a,b){nh(this,a,b)};d.xa=function(){return this.Oc};d.Vc=function(){return this};d.ib=function(){return this.cb.ib()};d.pd=function(a,b,c,e){return Se(this.cb,a,b,c,e)};
function Ej(a,b){if(a.He&&!a.i()){var c=a.cb,e=a.hd.Fd;a.cb=L();a.hd=null;a.He=!1;for(a.Oc=0;c!==e;)Ej(a,c.qa()),c=c.qc()}a.i()?(a.hd=Sk(new Tk,b,L()),a.cb=a.hd):(c=a.hd,a.hd=Sk(new Tk,b,L()),c.Fd=a.hd);a.Oc=1+a.Oc|0;return a}d.db=function(a){return Ej(this,a)};d.Kb=function(){};d.tb=function(a){a:b:for(;;){var b=a;if(null!==b&&b===this){a=this.Oc;b=this.ja();if(!(0>=a)){b.gc(a,this);for(var c=0,e=this.s();c<a&&e.ia();)b.db(e.ka()),c=1+c|0}a=b.bb();continue b}a=$e(this,a);break a}return a};d.hc=function(){return"ListBuffer"};
d.$classData=t({Ih:0},!1,"scala.collection.mutable.ListBuffer",{Ih:1,Dh:1,Lf:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Of:1,Nf:1,Qf:1,Cf:1,Pf:1,Mf:1,Bf:1,Me:1,Eh:1,Fh:1,Cc:1,Bc:1,th:1,nh:1,ua:1,ne:1,Dc:1,$m:1,Zm:1,an:1,e:1,d:1});function Re(){this.qb=null}Re.prototype=new sm;Re.prototype.constructor=Re;d=Re.prototype;d.Qa=function(){return this};d.a=function(){Re.prototype.Gi.call(this,16,"");return this};
d.Ja=function(a){a=65535&(this.qb.$a.charCodeAt(a)|0);return xh(a)};d.wc=function(a){return El(this,a)};d.Hb=function(a){return Fl(this,a)};d.g=function(a){a=65535&(this.qb.$a.charCodeAt(a|0)|0);return xh(a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.Oh=function(a,b){return this.qb.$a.substring(a,b)};d.sb=function(a){Gi(this.qb,null===a?0:a.na);return this};d.Wa=function(){Mk||(Mk=(new Kk).a());return Mk};d.o=function(){return this.qb.$a};d.x=function(a){Gl(this,a)};
d.bb=function(){return this.qb.$a};function P(a,b){Di(a.qb,b);return a}d.s=function(){return Z(this,this.qb.$a.length|0)};d.Ze=function(){return this};d.gc=function(a,b){nh(this,a,b)};d.Gi=function(a,b){Re.prototype.Ji.call(this,Di((new Ci).mb((b.length|0)+a|0),b));return this};d.xa=function(){return this.qb.$a.length|0};d.Vc=function(){return this};d.Wc=function(){return this.qb.$a.length|0};d.Ji=function(a){this.qb=a;return this};function Ue(a,b){Di(a.qb,If(r(),b));return a}
d.db=function(a){Gi(this.qb,null===a?0:a.na);return this};d.Kb=function(){};d.sd=function(a,b,c){Hl(this,a,b,c)};d.y=function(){return Ug(Le(),this)};d.ja=function(){return Ui(new Ti,(new Re).a())};d.tb=function(a){return $e(this,a)};
d.$classData=t({Pl:0},!1,"scala.collection.mutable.StringBuilder",{Pl:1,Lf:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Of:1,Nf:1,Qf:1,Cf:1,Pf:1,Mf:1,Bf:1,Me:1,Sg:1,Gh:1,je:1,Bd:1,Hh:1,Ah:1,We:1,kh:1,Gb:1,ne:1,Dc:1,Cc:1,Bc:1,e:1,d:1});function I(){this.ea=null}I.prototype=new rn;I.prototype.constructor=I;d=I.prototype;d.Qa=function(){return this};d.a=function(){I.prototype.ra.call(this,[]);return this};d.Ja=function(a){return this.ea[a]};
d.wc=function(a){return El(this,a)};d.g=function(a){return this.ea[a|0]};d.Hb=function(a){return Fl(this,a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.sb=function(a){this.ea.push(a);return this};d.Wa=function(){Ok||(Ok=(new Nk).a());return Ok};d.x=function(a){Gl(this,a)};d.bb=function(){return this};d.Ze=function(){return this};d.s=function(){return Z(this,this.ea.length|0)};d.gc=function(a,b){nh(this,a,b)};d.xa=function(){return this.ea.length|0};d.Vc=function(){return this};
d.Wc=function(){return this.ea.length|0};d.db=function(a){this.ea.push(a);return this};d.y=function(){return Ug(Le(),this)};d.sd=function(a,b,c){Hl(this,a,b,c)};d.Kb=function(){};d.ra=function(a){this.ea=a;return this};d.hc=function(){return"WrappedArray"};
d.$classData=t({Lh:0},!1,"scala.scalajs.js.WrappedArray",{Lh:1,Dh:1,Lf:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Of:1,Nf:1,Qf:1,Cf:1,Pf:1,Mf:1,Bf:1,Me:1,Eh:1,Fh:1,Cc:1,Bc:1,th:1,nh:1,ua:1,Gh:1,je:1,Bd:1,Hh:1,bn:1,Kl:1,We:1,Dc:1});function Lk(){this.Pg=0;this.ea=null;this.Ba=0}Lk.prototype=new rn;Lk.prototype.constructor=Lk;d=Lk.prototype;d.Qa=function(){return this};
function sn(a,b){$m(a,1+a.Ba|0);a.ea.c[a.Ba]=b;a.Ba=1+a.Ba|0;return a}d.a=function(){Lk.prototype.mb.call(this,16);return this};d.Ja=function(a){return Zm(this,a)};d.wc=function(a){return El(this,a)};d.Hb=function(a){return Fl(this,a)};d.g=function(a){return Zm(this,a|0)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.sb=function(a){return sn(this,a)};d.Wa=function(){vl||(vl=(new ul).a());return vl};d.x=function(a){for(var b=0,c=this.Ba;b<c;)a.g(this.ea.c[b]),b=1+b|0};d.bb=function(){return this};
d.s=function(){return Z(this,this.Ba)};d.Ze=function(){return this};d.gc=function(a,b){nh(this,a,b)};d.mb=function(a){a=this.Pg=a;this.ea=p(w(v),[1<a?a:1]);this.Ba=0;return this};d.xa=function(){return this.Ba};d.Vc=function(){return this};d.Wc=function(){return this.Ba};d.db=function(a){return sn(this,a)};d.Kb=function(a){a>this.Ba&&1<=a&&(a=p(w(v),[a]),Ha(this.ea,0,a,0,this.Ba),this.ea=a)};d.sd=function(a,b,c){var e=jg(og(),a)-b|0;c=c<e?c:e;e=this.Ba;c=c<e?c:e;0<c&&Ii(Ki(),this.ea,0,a,b,c)};
d.y=function(){return Ug(Le(),this)};d.tb=function(a){if(a&&a.$classData&&a.$classData.l.Bd){var b=a.xa();$m(this,this.Ba+b|0);a.sd(this.ea,this.Ba,b);this.Ba=this.Ba+b|0;a=this}else a=$e(this,a);return a};d.hc=function(){return"ArrayBuffer"};
d.$classData=t({Fl:0},!1,"scala.collection.mutable.ArrayBuffer",{Fl:1,Dh:1,Lf:1,yc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ac:1,Ha:1,z:1,lc:1,mc:1,nc:1,Of:1,Nf:1,Qf:1,Cf:1,Pf:1,Mf:1,Bf:1,Me:1,Eh:1,Fh:1,Cc:1,Bc:1,th:1,nh:1,ua:1,Kl:1,Hh:1,Bd:1,We:1,Dc:1,dn:1,Gh:1,je:1,Ub:1,e:1,d:1});ba.PlayerEvents=vc();ba.SequencerEvents=Ac();ba.PlayerCommand=function(){var a=new Ag;Ag.prototype.a.call(a);return a};ba.PlayerCommand.prototype=Ag.prototype;
ba.PlayerQuery=function(){var a=new U;U.prototype.a.call(a);return a};ba.PlayerQuery.prototype=U.prototype;ba.SequencerCommand=function(){var a=new Cg;Cg.prototype.a.call(a);return a};ba.SequencerCommand.prototype=Cg.prototype;ba.SequencerQuery=function(){var a=new Dg;Dg.prototype.a.call(a);return a};ba.SequencerQuery.prototype=Dg.prototype;
//# sourceMappingURL=scalajsdrumsequencer-opt.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(15)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Application_vue__ = __webpack_require__(7);



if (window.webkitAudioContext) {
    window.AudioContext = window.webkitAudioContext;
}

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    components: { Application: __WEBPACK_IMPORTED_MODULE_1__components_Application_vue__["a" /* default */] }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "development" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "development" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "development" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if ("development" !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Application_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5abf4239_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Application_vue__ = __webpack_require__(26);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Application_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5abf4239_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Application_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/Application.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Application.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5abf4239", Component.options)
  } else {
    hotAPI.reload("data-v-5abf4239", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ControlPanel_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PatternEditor_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scala_target_scala_2_12_scalajsdrumsequencer_opt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scala_target_scala_2_12_scalajsdrumsequencer_opt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scala_target_scala_2_12_scalajsdrumsequencer_opt__);
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Navigation: __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__["a" /* default */],
        ControlPanel: __WEBPACK_IMPORTED_MODULE_1__ControlPanel_vue__["a" /* default */],
        PatternEditor: __WEBPACK_IMPORTED_MODULE_2__PatternEditor_vue__["a" /* default */]
    },

    created() {
        const command = new __WEBPACK_IMPORTED_MODULE_3__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerCommand"]();
        command.loadSounds();
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navigation_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4101d23b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Navigation_vue__ = __webpack_require__(11);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navigation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4101d23b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Navigation_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4101d23b", Component.options)
  } else {
    hotAPI.reload("data-v-4101d23b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "brown darken-4"
  }, [_c('div', {
    staticClass: "nav-wrapper container"
  }, [_c('a', {
    staticClass: "brand-logo"
  }, [_vm._v("Nekogata Drum Sequencer written in Scala.js")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4101d23b", esExports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ControlPanel_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c4b258e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_ControlPanel_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c4b258e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ControlPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c4b258e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_ControlPanel_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/ControlPanel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ControlPanel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c4b258e", Component.options)
  } else {
    hotAPI.reload("data-v-7c4b258e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("08be1610", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c4b258e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ControlPanel.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c4b258e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ControlPanel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.pattern-selector[data-v-7c4b258e] {\n    border: solid 1px;\n    border-radius: 2px;\n    width: 20px;\n    height: 20px;\n    float: left;\n    margin-right: 16px;\n    background-color: gainsboro;\n    cursor: pointer;\n}\n.next[data-v-7c4b258e] {\n    background-color: teal;\n}\n.playing[data-v-7c4b258e] {\n    background-color: teal;\n}\n", "", {"version":3,"sources":["/Users/shinpei/dev/src/github.com/Shinpeim/ScalaJsDrumSequencer/web/src/js/components/src/js/components/ControlPanel.vue?7b8e165c"],"names":[],"mappings":";AACA;IACA,kBAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,YAAA;IACA,mBAAA;IACA,4BAAA;IACA,gBAAA;CACA;AAEA;IACA,uBAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"ControlPanel.vue","sourcesContent":["<style scoped>\n    .pattern-selector {\n        border: solid 1px;\n        border-radius: 2px;\n        width: 20px;\n        height: 20px;\n        float: left;\n        margin-right: 16px;\n        background-color: gainsboro;\n        cursor: pointer;\n    }\n\n    .next {\n        background-color: teal;\n    }\n\n    .playing {\n        background-color: teal;\n    }\n</style>\n<template>\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <div class=\"card horizontal\">\n                <div class=\"card-image left-pane brown\">\n                    <div class=\"card-content\">\n                        <a :class=\"{'disabled': ! areSoundsReady}\" class=\"btn-floating btn-large waves-effect waves-light\" @click=\"togglePlayingState\">\n                            <i class=\"material-icons\">{{playButtonIcon}}</i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"card-stacked\">\n                    <div class=\"card-content\">\n                        <span class=\"brown-text\">\n                            BPM: {{bpm}}\n                        </span>\n                        <p class=\"range-field\">\n                            <input type=\"range\" id=\"bpm-slider\" min=\"10\" max=\"240\" :value=\"bpm\" @input=\"setBpm\"/>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"card-stacked\">\n                    <div class=\"card-content\">\n                        <span class=\"brown-text\">\n                            Pattern: {{playingPatternId}}\n                        </span>\n                        <div>\n                            <div class=\"pattern-selector\"\n                                 :class=\"cssClassOf('A')\"\n                                 @click=\"setPatternId('A')\">\n                            </div>\n\n                            <div class=\"pattern-selector\"\n                                 :class=\"cssClassOf('B')\"\n                                 @click=\"setPatternId('B')\">\n                            </div>\n\n                            <div class=\"pattern-selector\"\n                                 :class=\"cssClassOf('C')\"\n                                 @click=\"setPatternId('C')\">\n                            </div>\n\n                            <div class=\"pattern-selector\"\n                                 :class=\"cssClassOf('D')\"\n                                 @click=\"setPatternId('D')\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n<script>\n    import {SequencerQuery, PlayerQuery, SequencerCommand, PlayerCommand, PlayerEvents} from '../../../../scala/target/scala-2.12/scalajsdrumsequencer-opt'\n\n    export default {\n        mounted(){\n            const playerQuery = new PlayerQuery;\n            PlayerEvents.PlayerStateChanged.subscribe(() => {\n                this.playingPatternId = playerQuery.playingPatternId();\n                this.nextPatternId =  playerQuery.nextPatternId();\n                this.isPlaying =  playerQuery.isPlaying();\n                this.areSoundsReady = playerQuery.areSoundsReady();\n            })\n        },\n\n        data(){\n            const playerQuery = new PlayerQuery;\n            return {\n                bpm: playerQuery.bpm(),\n                playingPatternId: playerQuery.playingPatternId(),\n                nextPatternId: playerQuery.nextPatternId(),\n                isPlaying: playerQuery.isPlaying(),\n                areSoundsReady: playerQuery.areSoundsReady()\n            }\n        },\n        computed:{\n            playButtonIcon(){\n                if (this.isPlaying) {\n                    return 'stop';\n                } else {\n                    return 'play_arrow';\n                }\n            }\n        },\n        methods: {\n            setBpm(){\n                const bpm = parseInt(document.getElementById('bpm-slider').value)\n                this.bpm = bpm;\n                (new PlayerCommand).setBpm(bpm);\n            },\n            setPatternId(v) {\n                (new PlayerCommand).setNextPattern(v);\n            },\n            togglePlayingState(){\n                const command = new PlayerCommand;\n                if (this.isPlaying) {\n                    command.stop()\n                } else {\n                    command.play()\n                }\n            },\n            cssClassOf(patternName) {\n                if (this.playingPatternId == patternName) {\n                    return 'teal'\n                } else if (this.nextPatternId == patternName) {\n                    return 'orange'\n                } else {\n                    return '';\n                }\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted() {
        const playerQuery = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]();
        __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerEvents"].PlayerStateChanged.subscribe(() => {
            this.playingPatternId = playerQuery.playingPatternId();
            this.nextPatternId = playerQuery.nextPatternId();
            this.isPlaying = playerQuery.isPlaying();
            this.areSoundsReady = playerQuery.areSoundsReady();
        });
    },

    data() {
        const playerQuery = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]();
        return {
            bpm: playerQuery.bpm(),
            playingPatternId: playerQuery.playingPatternId(),
            nextPatternId: playerQuery.nextPatternId(),
            isPlaying: playerQuery.isPlaying(),
            areSoundsReady: playerQuery.areSoundsReady()
        };
    },
    computed: {
        playButtonIcon() {
            if (this.isPlaying) {
                return 'stop';
            } else {
                return 'play_arrow';
            }
        }
    },
    methods: {
        setBpm() {
            const bpm = parseInt(document.getElementById('bpm-slider').value);
            this.bpm = bpm;
            new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerCommand"]().setBpm(bpm);
        },
        setPatternId(v) {
            new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerCommand"]().setNextPattern(v);
        },
        togglePlayingState() {
            const command = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerCommand"]();
            if (this.isPlaying) {
                command.stop();
            } else {
                command.play();
            }
        },
        cssClassOf(patternName) {
            if (this.playingPatternId == patternName) {
                return 'teal';
            } else if (this.nextPatternId == patternName) {
                return 'orange';
            } else {
                return '';
            }
        }
    }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('div', {
    staticClass: "card horizontal"
  }, [_c('div', {
    staticClass: "card-image left-pane brown"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('a', {
    staticClass: "btn-floating btn-large waves-effect waves-light",
    class: {
      'disabled': !_vm.areSoundsReady
    },
    on: {
      "click": _vm.togglePlayingState
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v(_vm._s(_vm.playButtonIcon))])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-stacked"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "brown-text"
  }, [_vm._v("\n                        BPM: " + _vm._s(_vm.bpm) + "\n                    ")]), _vm._v(" "), _c('p', {
    staticClass: "range-field"
  }, [_c('input', {
    attrs: {
      "type": "range",
      "id": "bpm-slider",
      "min": "10",
      "max": "240"
    },
    domProps: {
      "value": _vm.bpm
    },
    on: {
      "input": _vm.setBpm
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-stacked"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "brown-text"
  }, [_vm._v("\n                        Pattern: " + _vm._s(_vm.playingPatternId) + "\n                    ")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "pattern-selector",
    class: _vm.cssClassOf('A'),
    on: {
      "click": function($event) {
        _vm.setPatternId('A')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pattern-selector",
    class: _vm.cssClassOf('B'),
    on: {
      "click": function($event) {
        _vm.setPatternId('B')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pattern-selector",
    class: _vm.cssClassOf('C'),
    on: {
      "click": function($event) {
        _vm.setPatternId('C')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pattern-selector",
    class: _vm.cssClassOf('D'),
    on: {
      "click": function($event) {
        _vm.setPatternId('D')
      }
    }
  })])])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c4b258e", esExports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PatternEditor_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67944b46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PatternEditor_vue__ = __webpack_require__(25);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PatternEditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67944b46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PatternEditor_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/PatternEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PatternEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67944b46", Component.options)
  } else {
    hotAPI.reload("data-v-67944b46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PatternEditor_NoteButton_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scala_target_scala_2_12_scalajsdrumsequencer_opt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scala_target_scala_2_12_scalajsdrumsequencer_opt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scala_target_scala_2_12_scalajsdrumsequencer_opt__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: { NoteButton: __WEBPACK_IMPORTED_MODULE_0__PatternEditor_NoteButton_vue__["a" /* default */] },

    data() {
        return {
            selectedTrack: new __WEBPACK_IMPORTED_MODULE_1__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerQuery"]().selectedTrackName()
        };
    },

    methods: {
        setTrack() {
            new __WEBPACK_IMPORTED_MODULE_1__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerCommand"]().selectTrack(this.selectedTrack);
        }
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NoteButton_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fd6d2fd_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_NoteButton_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2fd6d2fd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NoteButton_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fd6d2fd_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_NoteButton_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/PatternEditor/NoteButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NoteButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fd6d2fd", Component.options)
  } else {
    hotAPI.reload("data-v-2fd6d2fd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2aaae828", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fd6d2fd\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NoteButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fd6d2fd\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NoteButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.note[data-v-2fd6d2fd] {\n    width: 80px;\n}\n", "", {"version":3,"sources":["/Users/shinpei/dev/src/github.com/Shinpeim/ScalaJsDrumSequencer/web/src/js/components/PatternEditor/src/js/components/PatternEditor/NoteButton.vue?1052187b"],"names":[],"mappings":";AACA;IACA,YAAA;CACA","file":"NoteButton.vue","sourcesContent":["<style scoped>\n    .note {\n        width: 80px;\n    }\n</style>\n<template>\n    <div class=\"card-content cel\">\n        <span class=\"note btn-large\"\n              :class=\"[isPlayingBeat ? 'orange' : 'teal', {'lighten-5': ! notes[index]}]\"\n              @click=\"toggleNote(index)\">\n            <span class=\"note\"></span>\n        </span>\n    </div>\n</template>\n<script>\n    import {SequencerQuery, PlayerQuery, SequencerCommand, SequencerEvents, PlayerEvents} from '../../../../../scala/target/scala-2.12/scalajsdrumsequencer-opt'\n\n    export default {\n        props: ['index'],\n\n        mounted(){\n            SequencerEvents.SequencerStateChanged.subscribe(() => {\n                this.updateNote();\n            });\n\n            SequencerEvents.TrackStateChanged.subscribe(() => {\n                this.updateNote();\n            });\n\n            PlayerEvents.PlayerStateChanged.subscribe(() => {\n                this.updateNote();\n                this.updatePlayingNotePosition();\n            })\n        },\n\n        computed:{\n            isPlayingBeat(){\n                if (this.playingNotePosition == -1) {\n                    return false;\n                }\n                return (Math.floor(this.playingNotePosition / 4) == Math.floor(this.index / 4));\n            }\n        },\n\n        data(){\n            return {\n                notes: (new SequencerQuery).notes(),\n                playingNotePosition: (new PlayerQuery).playingNotePosition()\n            }\n        },\n        methods: {\n            toggleNote(index) {\n                (new SequencerCommand).toggleNote(parseInt(index));\n            },\n\n            updateNote(){\n                this.notes = (new SequencerQuery).notes();\n            },\n\n            updatePlayingNotePosition(){\n                this.playingNotePosition = (new PlayerQuery).playingNotePosition()\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['index'],

    mounted() {
        __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerEvents"].SequencerStateChanged.subscribe(() => {
            this.updateNote();
        });

        __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerEvents"].TrackStateChanged.subscribe(() => {
            this.updateNote();
        });

        __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerEvents"].PlayerStateChanged.subscribe(() => {
            this.updateNote();
            this.updatePlayingNotePosition();
        });
    },

    computed: {
        isPlayingBeat() {
            if (this.playingNotePosition == -1) {
                return false;
            }
            return Math.floor(this.playingNotePosition / 4) == Math.floor(this.index / 4);
        }
    },

    data() {
        return {
            notes: new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerQuery"]().notes(),
            playingNotePosition: new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]().playingNotePosition()
        };
    },
    methods: {
        toggleNote(index) {
            new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerCommand"]().toggleNote(parseInt(index));
        },

        updateNote() {
            this.notes = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerQuery"]().notes();
        },

        updatePlayingNotePosition() {
            this.playingNotePosition = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]().playingNotePosition();
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-content cel"
  }, [_c('span', {
    staticClass: "note btn-large",
    class: [_vm.isPlayingBeat ? 'orange' : 'teal', {
      'lighten-5': !_vm.notes[_vm.index]
    }],
    on: {
      "click": function($event) {
        _vm.toggleNote(_vm.index)
      }
    }
  }, [_c('span', {
    staticClass: "note"
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fd6d2fd", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('div', {
    staticClass: "card brown lighten-5"
  }, [_c('div', {
    staticClass: "card-content brown-text"
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v("PatternEditor")]), _vm._v(" "), _c('span', [_vm._v("\n                    Track: " + _vm._s(_vm.selectedTrack) + "\n                ")]), _vm._v(" "), _c('div', [_c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedTrack),
      expression: "selectedTrack"
    }],
    attrs: {
      "name": "track",
      "type": "radio",
      "value": "BD",
      "id": "radio-track-bd"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedTrack, "BD")
    },
    on: {
      "change": _vm.setTrack,
      "__c": function($event) {
        _vm.selectedTrack = "BD"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-track-bd"
    }
  }, [_vm._v("BD")])]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedTrack),
      expression: "selectedTrack"
    }],
    attrs: {
      "name": "track",
      "type": "radio",
      "value": "SD",
      "id": "radio-track-SD"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedTrack, "SD")
    },
    on: {
      "change": _vm.setTrack,
      "__c": function($event) {
        _vm.selectedTrack = "SD"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-track-SD"
    }
  }, [_vm._v("SD")])]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedTrack),
      expression: "selectedTrack"
    }],
    attrs: {
      "name": "track",
      "type": "radio",
      "value": "HH",
      "id": "radio-track-HH"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedTrack, "HH")
    },
    on: {
      "change": _vm.setTrack,
      "__c": function($event) {
        _vm.selectedTrack = "HH"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-track-HH"
    }
  }, [_vm._v("HH")])]), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedTrack),
      expression: "selectedTrack"
    }],
    attrs: {
      "name": "track",
      "type": "radio",
      "value": "RS",
      "id": "radio-track-RS"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedTrack, "RS")
    },
    on: {
      "change": _vm.setTrack,
      "__c": function($event) {
        _vm.selectedTrack = "RS"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-track-RS"
    }
  }, [_vm._v("RS")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card horizontal"
  }, [_c('div', {
    staticClass: "card-stacked"
  }, [_c('note-button', {
    attrs: {
      "index": "0"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "4"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "8"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "12"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-stacked"
  }, [_c('note-button', {
    attrs: {
      "index": "1"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "5"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "9"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "13"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-stacked"
  }, [_c('note-button', {
    attrs: {
      "index": "2"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "6"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "10"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "14"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-stacked"
  }, [_c('note-button', {
    attrs: {
      "index": "3"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "7"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "11"
    }
  }), _vm._v(" "), _c('note-button', {
    attrs: {
      "index": "15"
    }
  })], 1)])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67944b46", esExports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('navigation'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('control-panel'), _vm._v(" "), _c('pattern-editor')], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5abf4239", esExports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map