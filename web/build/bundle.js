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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var d,aa="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},g="object"===typeof aa.global&&aa.global?aa.global:"object"===typeof global&&global&&global.Object===Object?global:this;aa.global=g;var ba=exports;aa.exportsNamespace=ba;g.Object.freeze(aa);var ca={envInfo:aa,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.20",globalThis:this};g.Object.freeze(ca);g.Object.freeze(ca.semantics);
var l=g.Math.imul||function(a,b){var c=a&65535,e=b&65535;return c*e+((a>>>16&65535)*e+c*(b>>>16&65535)<<16>>>0)|0},da=g.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},ea=0,fa=g.WeakMap?new g.WeakMap:null;function ga(a){return function(b,c){return!(!b||!b.$classData||b.$classData.qd!==c||b.$classData.pd!==a)}}
function ha(a){for(var b in a)return b}function p(a,b){return ia(a,b,0)}function ia(a,b,c){var e=new a.gg(b[c]);if(c<b.length-1){a=a.Pd;c+=1;for(var f=e.c,h=0;h<f.length;h++)f[h]=ia(a,b,c)}return e}function ja(a){return void 0===a?"undefined":a.toString()}
function ka(a){switch(typeof a){case "string":return q(la);case "number":var b=a|0;return b===a?ma(b)?q(na):oa(b)?q(pa):q(qa):"number"===typeof a?q(ra):q(sa);case "boolean":return q(ta);case "undefined":return q(ua);default:return null===a?a.Cm():va(a)?q(wa):a&&a.$classData?q(a.$classData):null}}function xa(a,b){return a&&a.$classData||null===a?a.ha(b):"number"===typeof a?"number"===typeof b&&(a===b?0!==a||1/a===1/b:a!==a&&b!==b):a===b}
function ya(a){switch(typeof a){case "string":return za(r(),a);case "number":return Aa(Ba(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.y():null===fa?42:Ca(a)}}function Da(a,b){var c=g.Object.getPrototypeOf,e=g.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var f=e(a,b);if(void 0!==f)return f;a=c(a)}}function Ea(a,b,c){a=Da(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}
function Fa(a,b,c,e){a=Da(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,e);return}throw new g.TypeError("super has no setter '"+c+"'.");}function Ga(a,b,c,e,f){a=a.c;c=c.c;if(a!==c||e<b||(b+f|0)<e)for(var h=0;h<f;h=h+1|0)c[e+h|0]=a[b+h|0];else for(h=f-1|0;0<=h;h=h-1|0)c[e+h|0]=a[b+h|0]}
var Ca=null!==fa?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ya(a);default:if(null===a)return 0;var b=fa.get(a);void 0===b&&(ea=b=ea+1|0,fa.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(g.Object.isSealed(a))return 42;ea=b=ea+1|0;return a.$idHashCode$0=b}return null===a?0:ya(a)};function ma(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function oa(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function Ha(a){return null===a?Ia().ve:a}function Ja(){this.Pe=this.gg=void 0;this.pd=this.Pd=this.l=null;this.qd=0;this.Vf=null;this.Ae="";this.Cb=this.we=this.xe=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}
function Ka(a,b,c){var e=new Ja;e.l={};e.Pd=null;e.Vf=a;e.Ae=b;e.Cb=function(){return!1};e.name=c;e.isPrimitive=!0;e.isInstance=function(){return!1};return e}function t(a,b,c,e,f,h,k,m){var n=new Ja,B=ha(a);k=k||function(a){return!!(a&&a.$classData&&a.$classData.l[B])};m=m||function(a,b){return!!(a&&a.$classData&&a.$classData.qd===b&&a.$classData.pd.l[B])};n.Pe=h;n.l=e;n.Ae="L"+c+";";n.Cb=m;n.name=c;n.isInterface=b;n.isRawJSType=!!f;n.isInstance=k;return n}
function La(a){function b(a){if("number"===typeof a){this.c=Array(a);for(var b=0;b<a;b++)this.c[b]=f}else this.c=a}var c=new Ja,e=a.Vf,f="longZero"==e?Ia().ve:e;b.prototype=new u;b.prototype.constructor=b;b.prototype.$classData=c;var e="["+a.Ae,h=a.pd||a,k=a.qd+1;c.gg=b;c.Pe=v;c.l={b:1,Le:1,d:1};c.Pd=a;c.pd=h;c.qd=k;c.Vf=null;c.Ae=e;c.xe=void 0;c.we=void 0;c.Cb=void 0;c.name=e;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return h.Cb(a,k)};return c}
function q(a){if(!a.xe){var b=new Ma;b.pc=a;a.xe=b}return a.xe}function w(a){a.we||(a.we=La(a));return a.we}Ja.prototype.getFakeInstance=function(){return this===la?"some string":this===ta?!1:this===na||this===pa||this===qa||this===ra||this===sa?0:this===wa?Ia().ve:this===ua?void 0:{$classData:this}};Ja.prototype.getSuperclass=function(){return this.Pe?q(this.Pe):null};Ja.prototype.getComponentType=function(){return this.Pd?q(this.Pd):null};
Ja.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=w(b);return p(b,a)};var Na=Ka(void 0,"V","void"),Oa=Ka(!1,"Z","boolean"),Pa=Ka(0,"C","char"),Qa=Ka(0,"B","byte"),Ra=Ka(0,"S","short"),Sa=Ka(0,"I","int"),Ta=Ka("longZero","J","long"),Ua=Ka(0,"F","float"),Va=Ka(0,"D","double"),Wa=ga(Oa);Oa.Cb=Wa;var Xa=ga(Pa);Pa.Cb=Xa;var Ya=ga(Qa);Qa.Cb=Ya;var Za=ga(Ra);Ra.Cb=Za;var $a=ga(Sa);Sa.Cb=$a;var ab=ga(Ta);Ta.Cb=ab;var bb=ga(Ua);Ua.Cb=bb;var cb=ga(Va);Va.Cb=cb;function db(a,b){a.nd(a.Wc.oc(eb(a,b)))}function fb(a){a.Wc.x(x(function(){return function(a){return a.Hg.call(void 0)}}(a)))}function gb(){var a=hb().v,b=ib().v,a=a.Ob;if(jb()!==a){if(!kb(a))throw(new y).n(a);var a=a.Qc,c=lb(b.Cc,z()),e=lb(b.Cc,mb()),f=lb(b.Cc,nb()),b=lb(b.Cc,ob()),h=z(),h=A().v.g(h),k=mb(),k=A().v.g(k),m=nb(),m=A().v.g(m),n=ob(),n=A().v.g(n);c.Pc.Ja(a)&&h.fe();e.Pc.Ja(a)&&k.fe();f.Pc.Ja(a)&&m.fe();b.Pc.Ja(a)&&n.fe()}}
function pb(a){var b=z();A().v.g(b).ce("./sounds/hh.wav").wd(x(function(){return function(a){qb(z(),a)}}(a)),rb().Rc)}function sb(a){var b=mb();A().v.g(b).ce("./sounds/rs.wav").wd(x(function(){return function(a){qb(mb(),a)}}(a)),rb().Rc)}function tb(a){var b=ub();vb(b);wb(xb(),6E4/(b.Jb<<2)|0,yb(function(a){return function(){zb(a)}}(a)))}function Ab(a){var b=ob();A().v.g(b).ce("./sounds/bd.wav").wd(x(function(){return function(a){qb(ob(),a)}}(a)),rb().Rc)}
function Bb(a){var b=nb();A().v.g(b).ce("./sounds/sd.wav").wd(x(function(){return function(a){qb(nb(),a)}}(a)),rb().Rc)}var zb=function Cb(b){var c=hb().v;Db(c)&&(gb(),c=Eb(c),vb(c),wb(xb(),6E4/(c.Jb<<2)|0,yb(function(b){return function(){Cb(b)}}(b))))};function Fb(){var a=ib().v.oe;if(mb()===a)return"RS";if(z()===a)return"HH";if(nb()===a)return"SD";if(ob()===a)return"BD";throw(new y).n(a);}
function Gb(){var a=ib().v,a=lb(a.Cc,a.oe).Pc,b=C();if(a&&a.$classData&&a.$classData.l.dn)return a.Wm;if(a&&a.$classData&&a.$classData.l.Kh)return a.ea;var c=[];a.x(x(function(a,b){return function(a){return b.push(a)|0}}(b,c)));return c}function Hb(){var a=ib().v.Cc;if(Ib()===a)return"A";if(Jb()===a)return"B";if(Kb()===a)return"C";if(Lb()===a)return"D";throw(new y).n(a);}function Mb(){}function u(){}u.prototype=Mb.prototype;Mb.prototype.a=function(){return this};
Mb.prototype.ha=function(a){return this===a};Mb.prototype.o=function(){var a=Nb(ka(this)),b=(+(this.y()>>>0)).toString(16);return a+"@"+b};Mb.prototype.y=function(){return Ca(this)};Mb.prototype.toString=function(){return this.o()};function Ob(a,b){if(a=a&&a.$classData){var c=a.qd||0;return!(c<b)&&(c>b||!a.pd.isPrimitive)}return!1}var v=t({b:0},!1,"java.lang.Object",{b:1},void 0,void 0,function(a){return null!==a},Ob);Mb.prototype.$classData=v;
function Pb(a,b){if(a.Tf(b))return a;throw(new Qb).f("Promise already completed.");}function D(a){var b=p(w(v),[a.c.length]);Ga(a,0,b,0,a.c.length);return b}
function Rb(a,b,c){if(32>c)return a.sa().c[31&b];if(1024>c)return a.j().c[31&(b>>>5|0)].c[31&b];if(32768>c)return a.m().c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(1048576>c)return a.r().c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(33554432>c)return a.oa().c[31&(b>>>20|0)].c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];if(1073741824>c)return a.eb().c[31&(b>>>25|0)].c[31&(b>>>20|0)].c[31&(b>>>15|0)].c[31&(b>>>10|0)].c[31&(b>>>5|0)].c[31&b];throw(new E).a();}
function Sb(a,b,c){if(32<=c)if(1024>c)a.G(a.j().c[31&(b>>>5|0)]);else if(32768>c)a.w(a.m().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(1048576>c)a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.m().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(33554432>c)a.Aa(a.oa().c[31&(b>>>20|0)]),a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.m().c[31&(b>>>10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else if(1073741824>c)a.db(a.eb().c[31&(b>>>25|0)]),a.Aa(a.oa().c[31&(b>>>20|0)]),a.fa(a.r().c[31&(b>>>15|0)]),a.w(a.m().c[31&(b>>>
10|0)]),a.G(a.j().c[31&(b>>>5|0)]);else throw(new E).a();}function G(a,b){var c=a.c[b];a.c[b]=null;return D(c)}
function Tb(a,b,c){a.Kc(c);c=-1+c|0;switch(c){case -1:break;case 0:a.G(b.sa());break;case 1:a.w(b.j());a.G(b.sa());break;case 2:a.fa(b.m());a.w(b.j());a.G(b.sa());break;case 3:a.Aa(b.r());a.fa(b.m());a.w(b.j());a.G(b.sa());break;case 4:a.db(b.oa());a.Aa(b.r());a.fa(b.m());a.w(b.j());a.G(b.sa());break;case 5:a.bd(b.eb());a.db(b.oa());a.Aa(b.r());a.fa(b.m());a.w(b.j());a.G(b.sa());break;default:throw(new y).n(c);}}function Ub(){this.Hg=this.ng=null}Ub.prototype=new u;Ub.prototype.constructor=Ub;
function eb(a,b){var c=new Ub;c.ng=a;c.Hg=b;return c}Ub.prototype.unsubscribe=function(){var a=this.ng;a.nd(a.Wc.Gc(this))};Ub.prototype.$classData=t({Th:0},!1,"com.nekogata.scalajs_drum_sequencer.Subscription",{Th:1,b:1});function Vb(){this.oe=this.Cc=null}Vb.prototype=new u;Vb.prototype.constructor=Vb;function Wb(a,b,c){a.Cc=b;a.oe=c;return a}Vb.prototype.$classData=t({di:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.SequencerState",{di:1,b:1});function Xb(){this.Pc=null}
Xb.prototype=new u;Xb.prototype.constructor=Xb;Xb.prototype.Bb=function(a){this.Pc=a;return this};Xb.prototype.$classData=t({ei:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.Track",{ei:1,b:1});function Yb(){this.jg=this.mg=this.lg=this.kg=null}Yb.prototype=new u;Yb.prototype.constructor=Yb;
Yb.prototype.a=function(){Zb=this;this.kg=$b(ac(),(new H).ra([!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0,!1]));this.lg=$b(ac(),(new H).ra([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));this.mg=$b(ac(),(new H).ra([!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1]));this.jg=$b(ac(),(new H).ra([!0,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]));return this};Yb.prototype.$classData=t({fi:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.Track$",{fi:1,b:1});var Zb=void 0;
function bc(){Zb||(Zb=(new Yb).a());return Zb}function cc(){this.v=null}cc.prototype=new u;cc.prototype.constructor=cc;cc.prototype.a=function(){dc=this;this.v=ec(new fc,120,jb());return this};cc.prototype.$classData=t({ki:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl$",{ki:1,b:1});var dc=void 0;function hb(){dc||(dc=(new cc).a());return dc}function gc(){this.v=null}gc.prototype=new u;gc.prototype.constructor=gc;
gc.prototype.a=function(){hc=this;this.v=Wb(new Vb,Ib(),z());return this};gc.prototype.$classData=t({mi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SequencerStateRepositoryImpl$",{mi:1,b:1});var hc=void 0;function ib(){hc||(hc=(new gc).a());return hc}function ic(){this.Be=null}ic.prototype=new u;ic.prototype.constructor=ic;ic.prototype.a=function(){jc=this;this.Be=new g.AudioContext;return this};
ic.prototype.$classData=t({ni:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.Sound$",{ni:1,b:1});var jc=void 0;function kc(){jc||(jc=(new ic).a());return jc}function lc(){this.v=null}lc.prototype=new u;lc.prototype.constructor=lc;
lc.prototype.a=function(){mc=this;for(var a=z(),b=(new nc).a(),a=(new I).h(a,b),b=mb(),c=(new nc).a(),b=(new I).h(b,c),c=nb(),e=(new nc).a(),c=(new I).h(c,e),e=ob(),f=(new nc).a(),a=[a,b,c,(new I).h(e,f)],b=oc(new pc,qc()),c=0,e=a.length|0;c<e;)rc(b,a[c]),c=1+c|0;this.v=b.$a;return this};lc.prototype.$classData=t({pi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SoundRepositoryImpl$",{pi:1,b:1});var mc=void 0;function A(){mc||(mc=(new lc).a());return mc}
function sc(){this.v=this.Kd=this.ne=this.he=this.Yd=null}sc.prototype=new u;sc.prototype.constructor=sc;
sc.prototype.a=function(){tc=this;this.Yd=(new Xb).Bb(bc().kg);this.he=(new Xb).Bb(bc().lg);this.ne=(new Xb).Bb(bc().mg);this.Kd=(new Xb).Bb(bc().jg);for(var a=(new I).h(Ib(),z()),a=(new I).h(a,this.Yd),b=(new I).h(Ib(),mb()),b=(new I).h(b,this.he),c=(new I).h(Ib(),nb()),c=(new I).h(c,this.ne),e=(new I).h(Ib(),ob()),e=(new I).h(e,this.Kd),f=(new I).h(Jb(),z()),f=(new I).h(f,this.Yd),h=(new I).h(Jb(),mb()),h=(new I).h(h,this.he),k=(new I).h(Jb(),nb()),k=(new I).h(k,this.ne),m=(new I).h(Jb(),ob()),
m=(new I).h(m,this.Kd),n=(new I).h(Kb(),z()),n=(new I).h(n,this.Yd),B=(new I).h(Kb(),mb()),B=(new I).h(B,this.he),F=(new I).h(Kb(),nb()),F=(new I).h(F,this.ne),Z=(new I).h(Kb(),ob()),Z=(new I).h(Z,this.Kd),hd=(new I).h(Lb(),z()),hd=(new I).h(hd,this.Yd),zi=(new I).h(Lb(),mb()),zi=(new I).h(zi,this.he),Ai=(new I).h(Lb(),nb()),Ai=(new I).h(Ai,this.ne),Zm=(new I).h(Lb(),ob()),a=[a,b,c,e,f,h,k,m,n,B,F,Z,hd,zi,Ai,(new I).h(Zm,this.Kd)],b=oc(new pc,qc()),c=0,e=a.length|0;c<e;)rc(b,a[c]),c=1+c|0;this.v=
b.$a;return this};sc.prototype.$classData=t({ri:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.TrackRepositoryImpl$",{ri:1,b:1});var tc=void 0;function uc(){tc||(tc=(new sc).a());return tc}function vc(){this.ue=null}vc.prototype=new u;vc.prototype.constructor=vc;vc.prototype.a=function(){wc=this;this.ue=(new xc).a();return this};Object.defineProperty(vc.prototype,"PlayerStateChanged",{get:function(){return this.ue},configurable:!0});
vc.prototype.$classData=t({ti:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents$",{ti:1,b:1});var wc=void 0;function yc(){wc||(wc=(new vc).a());return wc}function zc(){this.ef=this.df=null}zc.prototype=new u;zc.prototype.constructor=zc;zc.prototype.a=function(){Ac=this;this.df=(new Bc).a();this.ef=(new Cc).a();return this};Object.defineProperty(zc.prototype,"TrackStateChanged",{get:function(){return this.ef},configurable:!0});
Object.defineProperty(zc.prototype,"SequencerStateChanged",{get:function(){return this.df},configurable:!0});zc.prototype.$classData=t({xi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$",{xi:1,b:1});var Ac=void 0;function Dc(){Ac||(Ac=(new zc).a());return Ac}function Ma(){this.pc=null}Ma.prototype=new u;Ma.prototype.constructor=Ma;function Nb(a){return a.pc.name}Ma.prototype.o=function(){return(this.pc.isInterface?"interface ":this.pc.isPrimitive?"":"class ")+Nb(this)};
Ma.prototype.$classData=t({Pi:0},!1,"java.lang.Class",{Pi:1,b:1});function Ec(){this.Gg=null}Ec.prototype=new u;Ec.prototype.constructor=Ec;Ec.prototype.a=function(){Fc=this;Gc(!1);this.Gg=Gc(!0);return this};Ec.prototype.$classData=t({fj:0},!1,"java.lang.System$",{fj:1,b:1});var Fc=void 0;function Hc(){}Hc.prototype=new u;Hc.prototype.constructor=Hc;function Ic(){}Ic.prototype=Hc.prototype;function Jc(){}Jc.prototype=new u;Jc.prototype.constructor=Jc;function Kc(){}Kc.prototype=Jc.prototype;
function Lc(){}Lc.prototype=new u;Lc.prototype.constructor=Lc;Lc.prototype.a=function(){return this};Lc.prototype.$classData=t({rj:0},!1,"scala.Predef$any2stringadd$",{rj:1,b:1});var Mc=void 0;function Nc(a,b,c){a.zf(x(function(a,b){return function(a){a.x(b)}}(a,b)),c)}function Oc(){}Oc.prototype=new u;Oc.prototype.constructor=Oc;
Oc.prototype.a=function(){Pc=this;for(var a=[(new I).h(q(Oa),q(ta)),(new I).h(q(Qa),q(na)),(new I).h(q(Pa),q(Qc)),(new I).h(q(Ra),q(pa)),(new I).h(q(Sa),q(qa)),(new I).h(q(Ta),q(wa)),(new I).h(q(Ua),q(ra)),(new I).h(q(Va),q(sa)),(new I).h(q(Na),q(ua))],b=oc(new pc,qc()),c=0,e=a.length|0;c<e;)rc(b,a[c]),c=1+c|0;Rc(void 0);return this};Oc.prototype.$classData=t({uj:0},!1,"scala.concurrent.Future$",{uj:1,b:1});var Pc=void 0;function Sc(){}Sc.prototype=new u;Sc.prototype.constructor=Sc;
Sc.prototype.a=function(){return this};function Rc(a){Tc||(Tc=(new Sc).a());a=(new Uc).n(a);Vc||(Vc=(new Wc).a());Xc||(Xc=(new Yc).a());if((a=Zc(a)?$c(a.ud):a)&&a.$classData&&a.$classData.l.Cf){var b=new ad;b.id=a;a=b}else if(Zc(a))b=new bd,b.id=a,a=b;else throw(new y).n(a);return a}Sc.prototype.$classData=t({vj:0},!1,"scala.concurrent.Promise$",{vj:1,b:1});var Tc=void 0;function Yc(){}Yc.prototype=new u;Yc.prototype.constructor=Yc;Yc.prototype.a=function(){return this};
function $c(a){return a&&a.$classData&&a.$classData.l.hn?(new Uc).n(a.Gd()):a&&a.$classData&&a.$classData.l.lh?cd(new dd,(new ed).Ma("Boxed ControlThrowable",a)):a&&a.$classData&&a.$classData.l.Yi?cd(new dd,(new ed).Ma("Boxed InterruptedException",a)):a&&a.$classData&&a.$classData.l.Si?cd(new dd,(new ed).Ma("Boxed Error",a)):cd(new dd,a)}Yc.prototype.$classData=t({xj:0},!1,"scala.concurrent.impl.Promise$",{xj:1,b:1});var Xc=void 0;function Wc(){}Wc.prototype=new u;Wc.prototype.constructor=Wc;
Wc.prototype.a=function(){return this};Wc.prototype.$classData=t({yj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$",{yj:1,b:1});var Vc=void 0;function fd(){}fd.prototype=new u;fd.prototype.constructor=fd;fd.prototype.a=function(){return this};fd.prototype.$classData=t({Gj:0},!1,"scala.math.Ordered$",{Gj:1,b:1});var gd=void 0;function id(){this.za=0}id.prototype=new u;id.prototype.constructor=id;
id.prototype.a=function(){jd=this;(new kd).a();ld||(ld=(new md).a());nd||(nd=(new od).a());ac();pd();J();qd();K();rd||(rd=(new sd).a());td||(td=(new ud).a());vd||(vd=(new wd).a());xd();yd||(yd=(new zd).a());Ad();Bd||(Bd=(new Cd).a());Dd||(Dd=(new Ed).a());Fd||(Fd=(new Gd).a());Hd||(Hd=(new Id).a());Jd||(Jd=(new Kd).a());Ld||(Ld=(new Md).a());gd||(gd=(new fd).a());Nd||(Nd=(new Od).a());Pd||(Pd=(new Qd).a());Rd||(Rd=(new Sd).a());Td||(Td=(new Ud).a());return this};
id.prototype.$classData=t({Jj:0},!1,"scala.package$",{Jj:1,b:1});var jd=void 0;function Vd(){}Vd.prototype=new u;Vd.prototype.constructor=Vd;Vd.prototype.a=function(){Wd=this;Xd||(Xd=(new Yd).a());Zd||(Zd=(new $d).a());ae||(ae=(new be).a());ce||(ce=(new de).a());ee||(ee=(new fe).a());ge||(ge=(new he).a());ie||(ie=(new je).a());ke||(ke=(new le).a());me||(me=(new ne).a());oe||(oe=(new pe).a());qe||(qe=(new re).a());se||(se=(new te).a());ue||(ue=(new ve).a());we||(we=(new xe).a());return this};
Vd.prototype.$classData=t({Lj:0},!1,"scala.reflect.ClassManifestFactory$",{Lj:1,b:1});var Wd=void 0;function ye(){}ye.prototype=new u;ye.prototype.constructor=ye;ye.prototype.a=function(){return this};ye.prototype.$classData=t({Mj:0},!1,"scala.reflect.ManifestFactory$",{Mj:1,b:1});var ze=void 0;function Ae(){}Ae.prototype=new u;Ae.prototype.constructor=Ae;Ae.prototype.a=function(){Be=this;Wd||(Wd=(new Vd).a());ze||(ze=(new ye).a());return this};
Ae.prototype.$classData=t({bk:0},!1,"scala.reflect.package$",{bk:1,b:1});var Be=void 0;function Ce(){}Ce.prototype=new u;Ce.prototype.constructor=Ce;Ce.prototype.a=function(){(new De).a();return this};Ce.prototype.$classData=t({gk:0},!1,"scala.util.control.Breaks",{gk:1,b:1});function Ee(){}Ee.prototype=new u;Ee.prototype.constructor=Ee;Ee.prototype.a=function(){return this};
function Fe(a,b){return b&&b.$classData&&b.$classData.l.Gm||b&&b.$classData&&b.$classData.l.Fm||b&&b.$classData&&b.$classData.l.Yi||b&&b.$classData&&b.$classData.l.Dm||b&&b.$classData&&b.$classData.l.lh?L():(new M).n(b)}Ee.prototype.$classData=t({ik:0},!1,"scala.util.control.NonFatal$",{ik:1,b:1});var Ge=void 0;function He(){Ge||(Ge=(new Ee).a());return Ge}function Ie(){}Ie.prototype=new u;Ie.prototype.constructor=Ie;function Je(){}Je.prototype=Ie.prototype;
Ie.prototype.Ne=function(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b};Ie.prototype.uc=function(a,b){a=this.Ne(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0};function Ke(a,b,c){var e=(new Le).lb(0),f=(new Le).lb(0),h=(new Le).lb(0),k=(new Le).lb(1);b.x(x(function(a,b,c,e,f){return function(a){a=Me(Ne(),a);b.E=b.E+a|0;c.E^=a;0!==a&&(f.E=l(f.E,a));e.E=1+e.E|0}}(a,e,f,h,k)));b=a.uc(c,e.E);b=a.uc(b,f.E);b=a.Ne(b,k.E);return a.dd(b,h.E)}
function Oe(a){var b=Pe(),c=a.Ea();if(0===c)return a=a.Ga(),za(r(),a);for(var e=-889275714,f=0;f<c;)e=b.uc(e,Me(Ne(),a.Fa(f))),f=1+f|0;return b.dd(e,c)}Ie.prototype.dd=function(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)};function Qe(a,b,c){var e=(new Le).lb(0);c=(new Le).lb(c);b.x(x(function(a,b,c){return function(e){c.E=a.uc(c.E,Me(Ne(),e));b.E=1+b.E|0}}(a,e,c)));return a.dd(c.E,e.E)}function wd(){}wd.prototype=new u;wd.prototype.constructor=wd;
wd.prototype.a=function(){return this};wd.prototype.$classData=t({kk:0},!1,"scala.collection.$colon$plus$",{kk:1,b:1});var vd=void 0;function ud(){}ud.prototype=new u;ud.prototype.constructor=ud;ud.prototype.a=function(){return this};ud.prototype.$classData=t({lk:0},!1,"scala.collection.$plus$colon$",{lk:1,b:1});var td=void 0;function Re(){this.kb=null}Re.prototype=new u;Re.prototype.constructor=Re;Re.prototype.a=function(){Se=this;this.kb=(new Te).a();return this};
Re.prototype.$classData=t({qk:0},!1,"scala.collection.Iterator$",{qk:1,b:1});var Se=void 0;function J(){Se||(Se=(new Re).a());return Se}function Ue(a,b,c,e){return a.od((new Ve).a(),b,c,e).pb.Za}function We(a,b,c,e,f){var h=Xe();N(b,c);a.x(x(function(a,b,c,e){return function(a){if(e.E)Ye(b,a),e.E=!1;else return N(b,c),Ye(b,a)}}(a,b,e,h)));N(b,f);return b}function Ze(){}Ze.prototype=new u;Ze.prototype.constructor=Ze;function $e(){}$e.prototype=Ze.prototype;function af(){}af.prototype=new u;
af.prototype.constructor=af;function bf(){}bf.prototype=af.prototype;function $b(a,b){if(b.i())return a.Ud();a=a.ja();a.sb(b);return a.ab()}af.prototype.Ud=function(){return this.ja().ab()};function cf(a,b){a:for(;;){if(!b.i()){a.rb(b.qa());b=b.$();continue a}break}}function df(a,b){b&&b.$classData&&b.$classData.l.je?cf(a,b):b.x(x(function(a){return function(b){return a.rb(b)}}(a)));return a}function ef(){}ef.prototype=new u;ef.prototype.constructor=ef;function ff(){}ff.prototype=ef.prototype;
function zd(){}zd.prototype=new u;zd.prototype.constructor=zd;zd.prototype.a=function(){return this};zd.prototype.$classData=t({ql:0},!1,"scala.collection.immutable.Stream$$hash$colon$colon$",{ql:1,b:1});var yd=void 0;function gf(){this.Sf=this.Rh=null;this.za=!1;this.Zc=null}gf.prototype=new u;gf.prototype.constructor=gf;function hf(a,b,c){a.Sf=c;if(null===b)throw jf(C(),null);a.Zc=b;return a}function kf(a){a.za||(a.za||(a.Rh=lf(a.Sf),a.za=!0),a.Sf=null);return a.Rh}
gf.prototype.$classData=t({ul:0},!1,"scala.collection.immutable.StreamIterator$LazyCell",{ul:1,b:1});function mf(){}mf.prototype=new u;mf.prototype.constructor=mf;mf.prototype.a=function(){return this};mf.prototype.$classData=t({vl:0},!1,"scala.collection.immutable.StringOps$",{vl:1,b:1});var nf=void 0;function of(){}of.prototype=new u;of.prototype.constructor=of;of.prototype.a=function(){return this};of.prototype.ja=function(){var a=(new Ve).a();return pf(new qf,a,x(function(){return function(a){return(new rf).f(a)}}(this)))};
of.prototype.$classData=t({Dl:0},!1,"scala.collection.immutable.WrappedString$",{Dl:1,b:1});var sf=void 0;function tf(){this.Rc=null}tf.prototype=new u;tf.prototype.constructor=tf;tf.prototype.a=function(){uf=this;vf||(vf=(new wf).a());xf||(xf=(new yf).a());this.Rc=void 0===g.Promise?(new zf).a():(new Af).a();return this};tf.prototype.$classData=t({Ql:0},!1,"scala.scalajs.concurrent.JSExecutionContext$",{Ql:1,b:1});var uf=void 0;function Bf(){this.Rc=null}Bf.prototype=new u;
Bf.prototype.constructor=Bf;Bf.prototype.a=function(){Cf=this;vf||(vf=(new wf).a());uf||(uf=(new tf).a());this.Rc=uf.Rc;return this};Bf.prototype.$classData=t({Rl:0},!1,"scala.scalajs.concurrent.JSExecutionContext$Implicits$",{Rl:1,b:1});var Cf=void 0;function rb(){Cf||(Cf=(new Bf).a());return Cf}function yf(){}yf.prototype=new u;yf.prototype.constructor=yf;yf.prototype.a=function(){return this};yf.prototype.$classData=t({Sl:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$",{Sl:1,b:1});
var xf=void 0;function Df(){this.Ue=null}Df.prototype=new u;Df.prototype.constructor=Df;Df.prototype.a=function(){Ef=this;this.Ue=g.Object.prototype.hasOwnProperty;return this};Df.prototype.$classData=t({Xl:0},!1,"scala.scalajs.js.WrappedDictionary$Cache$",{Xl:1,b:1});var Ef=void 0;function Ff(){Ef||(Ef=(new Df).a());return Ef}function Gf(){}Gf.prototype=new u;Gf.prototype.constructor=Gf;Gf.prototype.a=function(){return this};
function wb(a,b,c){g.setTimeout(function(a){return function(){lf(a)}}(c),b)}Gf.prototype.$classData=t({Yl:0},!1,"scala.scalajs.js.timers.package$",{Yl:1,b:1});var Hf=void 0;function xb(){Hf||(Hf=(new Gf).a());return Hf}function If(){this.kd=!1;this.Kg=this.Ke=this.Jd=null;this.gf=!1;this.Vg=this.Mg=0}If.prototype=new u;If.prototype.constructor=If;
If.prototype.a=function(){Jf=this;this.Jd=(this.kd=!!(g.ArrayBuffer&&g.Int32Array&&g.Float32Array&&g.Float64Array))?new g.ArrayBuffer(8):null;this.Ke=this.kd?new g.Int32Array(this.Jd,0,2):null;this.kd&&new g.Float32Array(this.Jd,0,2);this.Kg=this.kd?new g.Float64Array(this.Jd,0,1):null;if(this.kd)this.Ke[0]=16909060,a=1===((new g.Int8Array(this.Jd,0,8))[0]|0);else var a=!0;this.Mg=(this.gf=a)?0:1;this.Vg=this.gf?1:0;return this};
function Aa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.kd)a.Kg[0]=b,a=(new Kf).rc(a.Ke[a.Vg]|0,a.Ke[a.Mg]|0);else{if(b!==b)a=!1,b=2047,c=+g.Math.pow(2,51);else if(Infinity===b||-Infinity===b)a=0>b,b=2047,c=0;else if(0===b)a=-Infinity===1/b,c=b=0;else{var e=(a=0>b)?-b:b;if(e>=+g.Math.pow(2,-1022)){b=+g.Math.pow(2,52);var c=+g.Math.log(e)/.6931471805599453,c=+g.Math.floor(c)|0,c=1023>c?c:1023,f=+g.Math.pow(2,c);f>e&&(c=-1+c|0,f/=2);f=e/f*b;e=+g.Math.floor(f);f-=e;e=.5>f?e:.5<f?1+e:0!==e%
2?1+e:e;2<=e/b&&(c=1+c|0,e=1);1023<c?(c=2047,e=0):(c=1023+c|0,e-=b);b=c;c=e}else b=e/+g.Math.pow(2,-1074),c=+g.Math.floor(b),e=b-c,b=0,c=.5>e?c:.5<e?1+c:0!==c%2?1+c:c}c=+c;a=(new Kf).rc(c|0,(a?-2147483648:0)|(b|0)<<20|c/4294967296|0)}return a.Da^a.tb}If.prototype.$classData=t({bm:0},!1,"scala.scalajs.runtime.Bits$",{bm:1,b:1});var Jf=void 0;function Ba(){Jf||(Jf=(new If).a());return Jf}function Lf(){this.za=!1}Lf.prototype=new u;Lf.prototype.constructor=Lf;Lf.prototype.a=function(){return this};
function Mf(a,b){return null===b?"null":ja(b)}function Nf(){return g.String.fromCharCode(92)}function za(a,b){a=0;for(var c=1,e=-1+(b.length|0)|0;0<=e;)a=a+l(65535&(b.charCodeAt(e)|0),c)|0,c=l(31,c),e=-1+e|0;return a}Lf.prototype.$classData=t({dm:0},!1,"scala.scalajs.runtime.RuntimeString$",{dm:1,b:1});var Of=void 0;function r(){Of||(Of=(new Lf).a());return Of}function Pf(){this.Qg=!1;this.fg=this.ig=this.hg=null;this.za=0}Pf.prototype=new u;Pf.prototype.constructor=Pf;Pf.prototype.a=function(){return this};
function Qf(a){return(a.stack+"\n").replace(Rf("^[\\s\\S]+?\\s+at\\s+")," at ").replace(O("^\\s+(at eval )?at\\s+","gm"),"").replace(O("^([^\\(]+?)([\\n])","gm"),"{anonymous}() ($1)$2").replace(O("^Object.\x3canonymous\x3e\\s*\\(([^\\)]+)\\)","gm"),"{anonymous}() ($1)").replace(O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$","gm"),"$1@$2").split("\n").slice(0,-1)}function Sf(a){0===(8&a.za)&&0===(8&a.za)&&(a.fg=g.Object.keys(Tf(a)),a.za|=8);return a.fg}
function Uf(a){if(0===(2&a.za)&&0===(2&a.za)){for(var b={O:"java_lang_Object",T:"java_lang_String",V:"scala_Unit",Z:"scala_Boolean",C:"scala_Char",B:"scala_Byte",S:"scala_Short",I:"scala_Int",J:"scala_Long",F:"scala_Float",D:"scala_Double"},c=0;22>=c;)2<=c&&(b["T"+c]="scala_Tuple"+c),b["F"+c]="scala_Function"+c,c=1+c|0;a.hg=b;a.za|=2}return a.hg}
function Vf(a,b){var c=Rf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.c\\.|\\$c_)([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$"),e=Rf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.(?:s|f)\\.|\\$(?:s|f)_)((?:_[^_]|[^_])+)__([^\\.]+)$"),f=Rf("^(?:Object\\.|\\[object Object\\]\\.)?(?:ScalaJS\\.m\\.|\\$m_)([^\\.]+)$"),h=!1,c=c.exec(b);null===c&&(c=e.exec(b),null===c&&(c=f.exec(b),h=!0));if(null!==c){b=c[1];if(void 0===b)throw(new P).f("undefined.get");b=36===(65535&(b.charCodeAt(0)|0))?b.substring(1):
b;e=Uf(a);if(Ff().Ue.call(e,b)){a=Uf(a);if(!Ff().Ue.call(a,b))throw(new P).f("key not found: "+b);a=a[b]}else a:for(f=0;;)if(f<(Sf(a).length|0)){e=Sf(a)[f];if(0<=(b.length|0)&&b.substring(0,e.length|0)===e){a=Tf(a);if(!Ff().Ue.call(a,e))throw(new P).f("key not found: "+e);a=""+a[e]+b.substring(e.length|0);break a}f=1+f|0}else{a=0<=(b.length|0)&&"L"===b.substring(0,1)?b.substring(1):b;break a}a=a.split("_").join(".").split("$und").join("_");if(h)h="\x3cclinit\x3e";else{h=c[2];if(void 0===h)throw(new P).f("undefined.get");
0<=(h.length|0)&&"init___"===h.substring(0,7)?h="\x3cinit\x3e":(c=h.indexOf("__")|0,h=0>c?h:h.substring(0,c))}return(new I).h(a,h)}return(new I).h("\x3cjscode\x3e",b)}function Wf(a){var b=O("Line (\\d+).*script (?:in )?(\\S+)","i");a=a.message.split("\n");for(var c=[],e=2,f=a.length|0;e<f;){var h=b.exec(a[e]);if(null!==h){var k=h[2];if(void 0===k)throw(new P).f("undefined.get");h=h[1];if(void 0===h)throw(new P).f("undefined.get");c.push("{anonymous}()@"+k+":"+h)}e=2+e|0}return c}
function Tf(a){0===(4&a.za)&&0===(4&a.za)&&(a.ig={sjsr_:"scala_scalajs_runtime_",sjs_:"scala_scalajs_",sci_:"scala_collection_immutable_",scm_:"scala_collection_mutable_",scg_:"scala_collection_generic_",sc_:"scala_collection_",sr_:"scala_runtime_",s_:"scala_",jl_:"java_lang_",ju_:"java_util_"},a.za|=4);return a.ig}Pf.prototype.$classData=t({em:0},!1,"scala.scalajs.runtime.StackTrace$",{em:1,b:1});var Xf=void 0;function Yf(){}Yf.prototype=new u;Yf.prototype.constructor=Yf;Yf.prototype.a=function(){return this};
function O(a,b){Zf||(Zf=(new Yf).a());return new g.RegExp(a,b)}function Rf(a){Zf||(Zf=(new Yf).a());return new g.RegExp(a)}Yf.prototype.$classData=t({fm:0},!1,"scala.scalajs.runtime.StackTrace$StringRE$",{fm:1,b:1});var Zf=void 0;function $f(){}$f.prototype=new u;$f.prototype.constructor=$f;$f.prototype.a=function(){return this};function jf(a,b){return ag(b)?b.Lc:b}function bg(a,b){return b&&b.$classData&&b.$classData.l.gb?b:(new cg).n(b)}
$f.prototype.$classData=t({gm:0},!1,"scala.scalajs.runtime.package$",{gm:1,b:1});var dg=void 0;function C(){dg||(dg=(new $f).a());return dg}function eg(){}eg.prototype=new u;eg.prototype.constructor=eg;eg.prototype.a=function(){return this};function fg(a,b){if(gg(b))return a.na===b.na;if(hg(b)){if("number"===typeof b)return+b===a.na;if(va(b)){b=Ha(b);var c=b.tb;a=a.na;return b.Da===a&&c===a>>31}return null===b?null===a:xa(b,a)}return null===a&&null===b}
function Q(a,b,c){if(b===c)c=!0;else if(hg(b))a:if(hg(c))c=ig(b,c);else{if(gg(c)){if("number"===typeof b){c=+b===c.na;break a}if(va(b)){a=Ha(b);b=a.tb;c=c.na;c=a.Da===c&&b===c>>31;break a}}c=null===b?null===c:xa(b,c)}else c=gg(b)?fg(b,c):null===b?null===c:xa(b,c);return c}
function ig(a,b){if("number"===typeof a){a=+a;if("number"===typeof b)return a===+b;if(va(b)){var c=Ha(b);b=c.Da;c=c.tb;return a===jg(Ia(),b,c)}return b&&b.$classData&&b.$classData.l.Ij?b.ha(a):!1}if(va(a)){c=Ha(a);a=c.Da;c=c.tb;if(va(b)){b=Ha(b);var e=b.tb;return a===b.Da&&c===e}return"number"===typeof b?(b=+b,jg(Ia(),a,c)===b):b&&b.$classData&&b.$classData.l.Ij?b.ha((new Kf).rc(a,c)):!1}return null===a?null===b:xa(a,b)}eg.prototype.$classData=t({im:0},!1,"scala.runtime.BoxesRunTime$",{im:1,b:1});
var kg=void 0;function R(){kg||(kg=(new eg).a());return kg}var lg=t({lm:0},!1,"scala.runtime.Null$",{lm:1,b:1});function mg(){}mg.prototype=new u;mg.prototype.constructor=mg;mg.prototype.a=function(){return this};function ng(a,b){if(Ob(b,1)||$a(b,1)||cb(b,1)||ab(b,1)||bb(b,1)||Xa(b,1)||Ya(b,1)||Za(b,1)||Wa(b,1)||og(b))return b.c.length;if(null===b)throw(new pg).a();throw(new y).n(b);}
function qg(a,b,c,e){if(Ob(b,1))b.c[c]=e;else if($a(b,1))b.c[c]=e|0;else if(cb(b,1))b.c[c]=+e;else if(ab(b,1))b.c[c]=Ha(e);else if(bb(b,1))b.c[c]=+e;else if(Xa(b,1))b.c[c]=null===e?0:e.na;else if(Ya(b,1))b.c[c]=e|0;else if(Za(b,1))b.c[c]=e|0;else if(Wa(b,1))b.c[c]=!!e;else if(og(b))b.c[c]=void 0;else{if(null===b)throw(new pg).a();throw(new y).n(b);}}function rg(a){sg();var b=a.Na();return Ue(b,a.Ga()+"(",",",")")}mg.prototype.$classData=t({nm:0},!1,"scala.runtime.ScalaRunTime$",{nm:1,b:1});
var tg=void 0;function sg(){tg||(tg=(new mg).a());return tg}function ug(){}ug.prototype=new u;ug.prototype.constructor=ug;d=ug.prototype;d.a=function(){return this};d.Ne=function(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b};
function Me(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=Ia();var c;if(-9223372036854775808>a)b.Xe=-2147483648,c=0;else if(0x7fffffffffffffff<=a)b.Xe=2147483647,c=-1;else{c=a|0;var e=a/4294967296|0;b.Xe=0>a&&0!==c?-1+e|0:e}b=b.Xe;a=jg(Ia(),c,b)===a?c^b:Aa(Ba(),a)}return a}return va(b)?(a=Ha(b),b=(new Kf).rc(a.Da,a.tb),a=b.Da,b=b.tb,b===a>>31?a:a^b):ya(b)}
d.uc=function(a,b){a=this.Ne(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0};d.dd=function(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)};d.$classData=t({pm:0},!1,"scala.runtime.Statics$",{pm:1,b:1});var vg=void 0;function Ne(){vg||(vg=(new ug).a());return vg}function wg(){this.dg=null}wg.prototype=new u;wg.prototype.constructor=wg;wg.prototype.ae=function(){return!0};
wg.prototype.fe=function(){var a=kc().Be.createBufferSource();a.buffer=this.dg;a.connect(kc().Be.destination);a.start(0)};wg.prototype.ce=function(){Pc||(Pc=(new Oc).a());return Rc(this)};wg.prototype.$classData=t({hi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.LoadedSoundImpl",{hi:1,b:1,gi:1});function nc(){}nc.prototype=new u;nc.prototype.constructor=nc;d=nc.prototype;d.a=function(){return this};
function xg(a,b,c){b=b.response;return kc().Be.decodeAudioData(b,function(a,b){return function(a){var c=new wg;c.dg=a;a=(new Uc).n(c);return Pb(b,a)}}(a,c),function(a,b){return function(){var a=(new yg).f("can't load sound file");return Pb(b,cd(new dd,a))}}(a,c))}d.ae=function(){return!1};d.fe=function(){};d.ce=function(a){var b=new g.XMLHttpRequest;b.open("GET",a);b.responseType="arraybuffer";a=(new zg).a();b.onload=function(a,b,f){return function(){return xg(a,b,f)}}(this,b,a);b.send();return a};
d.$classData=t({ii:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.NotYetLoadedSoundImpl",{ii:1,b:1,gi:1});function Ag(){}Ag.prototype=new u;Ag.prototype.constructor=Ag;Ag.prototype.a=function(){return this};function vb(a){hb().v=a;a=yc().ue;fb(a)}Ag.prototype.$classData=t({ji:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl",{ji:1,b:1,um:1});function Bg(){}Bg.prototype=new u;Bg.prototype.constructor=Bg;Bg.prototype.a=function(){return this};
function Cg(a){ib().v=a;a=Dc().df;fb(a)}Bg.prototype.$classData=t({li:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SequencerStateRepositoryImpl",{li:1,b:1,vm:1});function Dg(){}Dg.prototype=new u;Dg.prototype.constructor=Dg;Dg.prototype.a=function(){return this};function qb(a,b){A().v=A().v.zb(a,b);a=yc().ue;fb(a)}Dg.prototype.$classData=t({oi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.SoundRepositoryImpl",{oi:1,b:1,xm:1});function Eg(){}Eg.prototype=new u;
Eg.prototype.constructor=Eg;Eg.prototype.a=function(){return this};function lb(a,b){return uc().v.g((new I).h(a,b))}Eg.prototype.$classData=t({qi:0},!1,"com.nekogata.scalajs_drum_sequencer.infrastructure.TrackRepositoryImpl",{qi:1,b:1,wm:1});function S(){}S.prototype=new u;S.prototype.constructor=S;S.prototype.a=function(){(new Ag).a();(new Bg).a();(new Eg).a();(new Dg).a();return this};S.prototype.setBpm=function(a){a|=0;var b=hb().v.Ob;vb(ec(new fc,a,b))};
S.prototype.stop=function(){var a;a=hb().v;var b=jb();a=ec(new fc,a.Jb,b);vb(a)};S.prototype.play=function(){tb(this)};S.prototype.loadSDSounds=function(){Bb(this)};S.prototype.loadRSSounds=function(){sb(this)};S.prototype.loadHHSounds=function(){pb(this)};S.prototype.loadBDSounds=function(){Ab(this)};S.prototype.$classData=t({si:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerCommandImpl",{si:1,b:1,sm:1});function xc(){this.Wc=null}xc.prototype=new u;xc.prototype.constructor=xc;
xc.prototype.a=function(){this.nd(Fg());return this};xc.prototype.nd=function(a){this.Wc=a};xc.prototype.Hd=function(a){db(this,a)};xc.prototype.subscribe=function(a){return this.Hd(a)};xc.prototype.$classData=t({ui:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents$$anon$1",{ui:1,b:1,Zf:1});function Gg(){}Gg.prototype=new u;Gg.prototype.constructor=Gg;Gg.prototype.a=function(){(new Ag).a();(new Dg).a();return this};
Gg.prototype.playingNotePosition=function(){var a;a=hb().v.Ob;if(jb()===a)a=-1;else if(kb(a))a=a.Qc;else throw(new y).n(a);return a};Gg.prototype.areSoundsReady=function(){var a=z(),a=A().v.g(a).ae(),b=mb(),b=A().v.g(b).ae(),c=nb(),c=A().v.g(c).ae(),e=ob(),e=A().v.g(e).ae();return a&&b&&c&&e};Gg.prototype.isPlaying=function(){return Db(hb().v)};Gg.prototype.bpm=function(){return hb().v.Jb};
Gg.prototype.$classData=t({vi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.PlayerQueryImpl",{vi:1,b:1,ym:1});function Hg(){}Hg.prototype=new u;Hg.prototype.constructor=Hg;Hg.prototype.a=function(){(new Bg).a();(new Eg).a();return this};Hg.prototype.toggleNote=function(a){var b=a|0,c=ib().v;a=c.Cc;var c=c.oe,e=lb(a,c),f=e.Pc,e=e.Pc.Ja(b),h=ac(),b=(new Xb).Bb(f.Qh(b,!e,h.ya));uc().v=uc().v.zb((new I).h(a,c),b);a=Dc().ef;fb(a)};
Hg.prototype.selectTrack=function(a){if("HH"===a)a=z();else if("RS"===a)a=mb();else if("SD"===a)a=nb();else{if("BD"!==a)throw(new y).n(a);a=ob()}var b=ib().v;Cg(Wb(new Vb,b.Cc,a))};Hg.prototype.selectPattern=function(a){if("A"===a)a=Ib();else if("B"===a)a=Jb();else if("C"===a)a=Kb();else{if("D"!==a)throw(new y).n(a);a=Lb()}var b=ib().v;Cg(Wb(new Vb,a,b.oe))};Hg.prototype.$classData=t({wi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerCommandImpl",{wi:1,b:1,tm:1});
function Bc(){this.Wc=null}Bc.prototype=new u;Bc.prototype.constructor=Bc;Bc.prototype.a=function(){this.nd(Fg());return this};Bc.prototype.nd=function(a){this.Wc=a};Bc.prototype.Hd=function(a){db(this,a)};Bc.prototype.subscribe=function(a){return this.Hd(a)};Bc.prototype.$classData=t({yi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$$anon$1",{yi:1,b:1,Zf:1});function Cc(){this.Wc=null}Cc.prototype=new u;Cc.prototype.constructor=Cc;Cc.prototype.a=function(){this.nd(Fg());return this};
Cc.prototype.nd=function(a){this.Wc=a};Cc.prototype.Hd=function(a){db(this,a)};Cc.prototype.subscribe=function(a){return this.Hd(a)};Cc.prototype.$classData=t({zi:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerEvents$$anon$2",{zi:1,b:1,Zf:1});function Ig(){}Ig.prototype=new u;Ig.prototype.constructor=Ig;Ig.prototype.a=function(){(new Eg).a();(new Bg).a();return this};Ig.prototype.selectedTrackName=function(){return Fb()};Ig.prototype.selectedPatternId=function(){return Hb()};
Ig.prototype.notes=function(){return Gb()};Ig.prototype.$classData=t({Ai:0},!1,"com.nekogata.scalajs_drum_sequencer.js_exports.SequencerQueryImpl",{Ai:1,b:1,zm:1});function Jg(){}Jg.prototype=new u;Jg.prototype.constructor=Jg;function Kg(){}Kg.prototype=Jg.prototype;function hg(a){return!!(a&&a.$classData&&a.$classData.l.ed||"number"===typeof a)}function Lg(){this.Wd=this.de=this.sd=null;this.Od=this.be=0}Lg.prototype=new u;Lg.prototype.constructor=Lg;
Lg.prototype.ha=function(a){return a&&a.$classData&&a.$classData.l.Tg?this.Wd===a.Wd&&this.be===a.be&&this.sd===a.sd&&this.de===a.de:!1};
Lg.prototype.o=function(){var a="";"\x3cjscode\x3e"!==this.sd&&(a=""+a+this.sd+".");a=""+a+this.de;null===this.Wd?a+="(Unknown Source)":(a=""+a+Mg((new Ng).Bb((new H).ra(["(",""])),(new H).ra([this.Wd])),0<=this.be&&(a=""+a+Mg((new Ng).Bb((new H).ra([":",""])),(new H).ra([this.be])),0<=this.Od&&(a=""+a+Mg((new Ng).Bb((new H).ra([":",""])),(new H).ra([this.Od])))),a+=")");return a};Lg.prototype.y=function(){var a=this.sd,a=za(r(),a),b=this.de;return a^za(r(),b)};
Lg.prototype.setColumnNumber=function(a){this.Od=a|0};Lg.prototype.getColumnNumber=function(){return this.Od};var Og=t({Tg:0},!1,"java.lang.StackTraceElement",{Tg:1,b:1,d:1});Lg.prototype.$classData=Og;function T(){this.Dd=this.De=this.$g=null}T.prototype=new u;T.prototype.constructor=T;function Pg(){}Pg.prototype=T.prototype;
T.prototype.He=function(){if(void 0===g.Error.captureStackTrace){try{var a={}.undef()}catch(b){if(a=bg(C(),b),null!==a)if(ag(a))a=a.Lc;else throw jf(C(),a);else throw b;}this.stackdata=a}else g.Error.captureStackTrace(this),this.stackdata=this;return this};T.prototype.sf=function(){return this.$g};T.prototype.o=function(){var a=Nb(ka(this)),b=this.sf();return null===b?a:a+": "+b};
function Qg(a){if(null===a.Dd){Xf||(Xf=(new Pf).a());var b=Xf,c=a.stackdata,e;if(c){if(0===(1&b.za)&&0===(1&b.za)){a:try{g.Packages.org.mozilla.javascript.JavaScriptException,e=!0}catch(hd){e=bg(C(),hd);if(null!==e){if(ag(e)){e=!1;break a}throw jf(C(),e);}throw hd;}b.Qg=e;b.za|=1}if(b.Qg)e=c.stack,e=(void 0===e?"":e).replace(O("^\\s+at\\s+","gm"),"").replace(O("^(.+?)(?: \\((.+)\\))?$","gm"),"$2@$1").replace(O("\\r\\n?","gm"),"\n").split("\n");else if(c.arguments&&c.stack)e=Qf(c);else if(c.stack&&
c.sourceURL)e=c.stack.replace(O("\\[native code\\]\\n","m"),"").replace(O("^(?\x3d\\w+Error\\:).*$\\n","m"),"").replace(O("^@","gm"),"{anonymous}()@").split("\n");else if(c.stack&&c.number)e=c.stack.replace(O("^\\s*at\\s+(.*)$","gm"),"$1").replace(O("^Anonymous function\\s+","gm"),"{anonymous}() ").replace(O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$","gm"),"$1@$2").split("\n").slice(1);else if(c.stack&&c.fileName)e=c.stack.replace(O("(?:\\n@:0)?\\s+$","m"),"").replace(O("^(?:\\((\\S*)\\))?@",
"gm"),"{anonymous}($1)@").split("\n");else if(c.message&&c["opera#sourceloc"])if(c.stacktrace)if(-1<c.message.indexOf("\n")&&c.message.split("\n").length>c.stacktrace.split("\n").length)e=Wf(c);else{e=O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$","i");for(var c=c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){var m=e.exec(c[h]);if(null!==m){var n=m[3],n=void 0===n?"{anonymous}":n,B=m[2];if(void 0===B)throw(new P).f("undefined.get");m=m[1];if(void 0===m)throw(new P).f("undefined.get");
f.push(n+"()@"+B+":"+m)}h=2+h|0}e=f}else e=Wf(c);else if(c.message&&c.stack&&c.stacktrace){if(0>c.stacktrace.indexOf("called from line"))for(e=Rf("^(.*)@(.+):(\\d+)$"),c=c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){m=e.exec(c[h]);if(null!==m){n=m[1];n=void 0===n?"global code":n+"()";B=m[2];if(void 0===B)throw(new P).f("undefined.get");m=m[3];if(void 0===m)throw(new P).f("undefined.get");f.push(n+"@"+B+":"+m)}h=1+h|0}else for(e=Rf("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"),c=
c.stacktrace.split("\n"),f=[],h=0,k=c.length|0;h<k;){m=e.exec(c[h]);if(null!==m){n=m[4];if(void 0===n)throw(new P).f("undefined.get");B=m[1];if(void 0===B)throw(new P).f("undefined.get");var F=m[2];if(void 0===F)throw(new P).f("undefined.get");n=n+":"+B+":"+F;m=m[2];m=(void 0===m?"global code":m).replace(Rf("\x3canonymous function: (\\S+)\x3e"),"$1").replace(Rf("\x3canonymous function\x3e"),"{anonymous}");f.push(m+"@"+n)|0}h=2+h|0}e=f}else e=c.stack&&!c.fileName?Qf(c):[]}else e=[];f=e;h=Rf("^([^\\@]*)\\@(.*):([0-9]+)$");
k=Rf("^([^\\@]*)\\@(.*):([0-9]+):([0-9]+)$");c=[];for(e=0;e<(f.length|0);){m=f[e];if(null===m)throw(new pg).a();if(""!==m)if(n=k.exec(m),null!==n){m=n[1];if(void 0===m)throw(new P).f("undefined.get");B=Vf(b,m);if(null===B)throw(new y).n(B);m=B.Ia;B=B.Ta;F=n[2];if(void 0===F)throw(new P).f("undefined.get");var Z=n[3];if(void 0===Z)throw(new P).f("undefined.get");Z=(new Rg).f(Z);Z=Sg(Tg(),Z.Oa);n=n[4];if(void 0===n)throw(new P).f("undefined.get");n=(new Rg).f(n);n=Sg(Tg(),n.Oa);c.push({declaringClass:m,
methodName:B,fileName:F,lineNumber:Z,columnNumber:void 0===n?void 0:n})}else if(n=h.exec(m),null!==n){m=n[1];if(void 0===m)throw(new P).f("undefined.get");B=Vf(b,m);if(null===B)throw(new y).n(B);m=B.Ia;B=B.Ta;F=n[2];if(void 0===F)throw(new P).f("undefined.get");n=n[3];if(void 0===n)throw(new P).f("undefined.get");n=(new Rg).f(n);n=Sg(Tg(),n.Oa);c.push({declaringClass:m,methodName:B,fileName:F,lineNumber:n,columnNumber:void 0})}else c.push({declaringClass:"\x3cjscode\x3e",methodName:m,fileName:null,
lineNumber:-1,columnNumber:void 0})|0;e=1+e|0}b=aa.sourceMapper;b=void 0===b?c:b(c);c=p(w(Og),[b.length|0]);for(e=0;e<(b.length|0);)f=b[e],h=f.methodName,k=f.fileName,m=f.lineNumber|0,n=new Lg,n.sd=f.declaringClass,n.de=h,n.Wd=k,n.be=m,n.Od=-1,h=n,f=f.columnNumber,void 0!==f&&h.setColumnNumber(f|0),c.c[e]=h,e=1+e|0;a.Dd=c}return a.Dd}T.prototype.Ma=function(a,b){this.$g=a;this.De=b;this.He();return this};
function Ug(a){Fc||(Fc=(new Ec).a());var b=function(a,b){return function(a){Vg(b,null===a?"null":a);Vg(b,"\n")}}(a,Fc.Gg);Qg(a);var c=a.o();b(c);if(0!==a.Dd.c.length)for(c=0;c<a.Dd.c.length;)b("  at "+a.Dd.c[c]),c=1+c|0;else b("  \x3cno stack trace available\x3e");for(;;)if(a!==a.De&&null!==a.De){var e=Qg(a);a=a.De;var c=Qg(a),f=c.c.length,h=e.c.length,k="Caused by: "+a.o();b(k);if(0!==f){for(k=0;;){if(k<f&&k<h)var m=c.c[-1+(f-k|0)|0],n=e.c[-1+(h-k|0)|0],m=null===m?null===n:m.ha(n);else m=!1;if(m)k=
1+k|0;else break}0<k&&(k=-1+k|0);e=f-k|0;for(f=0;f<e;)b("  at "+c.c[f]),f=1+f|0;0<k&&b("  ... "+k+" more")}else b("  \x3cno stack trace available\x3e")}else break}function Wg(){}Wg.prototype=new u;Wg.prototype.constructor=Wg;Wg.prototype.a=function(){return this};Wg.prototype.ze=function(){return(new Ve).a()};Wg.prototype.ye=function(){return(new Ve).a()};Wg.prototype.$classData=t({qj:0},!1,"scala.Predef$$anon$3",{qj:1,b:1,Hf:1});function kd(){}kd.prototype=new u;kd.prototype.constructor=kd;
kd.prototype.a=function(){return this};kd.prototype.o=function(){return"object AnyRef"};kd.prototype.$classData=t({Kj:0},!1,"scala.package$$anon$1",{Kj:1,b:1,Pm:1});function Xg(){this.Ih=this.Wg=this.Qf=0}Xg.prototype=new Je;Xg.prototype.constructor=Xg;Xg.prototype.a=function(){Yg=this;this.Qf=za(r(),"Seq");this.Wg=za(r(),"Map");this.Ih=za(r(),"Set");return this};
function Zg(a,b){if($g(b)){for(var c=0,e=a.Qf,f=b;!f.i();)b=f.qa(),f=f.nc(),e=a.uc(e,Me(Ne(),b)),c=1+c|0;a=a.dd(e,c)}else a=Qe(a,b,a.Qf);return a}Xg.prototype.$classData=t({jk:0},!1,"scala.util.hashing.MurmurHash3$",{jk:1,Um:1,b:1});var Yg=void 0;function Pe(){Yg||(Yg=(new Xg).a());return Yg}function ah(a,b){for(var c=!0;c&&a.ia();)c=!!b.g(a.ka());return c}function bh(a,b){for(;a.ia();)b.g(a.ka())}
function ch(a){if(a.ia()){var b=a.ka();return dh(new eh,b,yb(function(a){return function(){return a.hb()}}(a)))}xd();return fh()}function gh(){}gh.prototype=new bf;gh.prototype.constructor=gh;function hh(){}hh.prototype=gh.prototype;function U(){this.ya=null}U.prototype=new bf;U.prototype.constructor=U;function ih(){}ih.prototype=U.prototype;U.prototype.a=function(){this.ya=(new jh).$d(this);return this};function kh(){this.Zc=null}kh.prototype=new u;kh.prototype.constructor=kh;function lh(){}
lh.prototype=kh.prototype;kh.prototype.ze=function(){return this.Zc.ja()};kh.prototype.ye=function(a){return a.Wa().ja()};kh.prototype.$d=function(a){if(null===a)throw jf(C(),null);this.Zc=a;return this};function mh(){}mh.prototype=new $e;mh.prototype.constructor=mh;function nh(){}nh.prototype=mh.prototype;function oh(){this.yf=null}oh.prototype=new ff;oh.prototype.constructor=oh;function ph(a,b){a.yf=b;b=new qh;if(null===a)throw jf(C(),null);b.Ab=a}
oh.prototype.ff=function(a,b){var c=this.yf;return(0,c.qc)(a,b)};oh.prototype.$classData=t({Dk:0},!1,"scala.collection.immutable.HashMap$$anon$2",{Dk:1,Ik:1,b:1});function qh(){this.Ab=null}qh.prototype=new ff;qh.prototype.constructor=qh;qh.prototype.ff=function(a,b){var c=this.Ab.yf;return(0,c.qc)(b,a)};qh.prototype.$classData=t({Ek:0},!1,"scala.collection.immutable.HashMap$$anon$2$$anon$3",{Ek:1,Ik:1,b:1});function rh(){}rh.prototype=new u;rh.prototype.constructor=rh;rh.prototype.a=function(){return this};
rh.prototype.g=function(){return this};rh.prototype.o=function(){return"\x3cfunction1\x3e"};rh.prototype.$classData=t({Sk:0},!1,"scala.collection.immutable.List$$anon$1",{Sk:1,b:1,z:1});function sh(a,b,c){c=c.Vc();switch(c){case -1:break;default:a.Hb(b<c?b:c)}}function th(){}th.prototype=new u;th.prototype.constructor=th;function uh(){}uh.prototype=th.prototype;th.prototype.o=function(){return"\x3cfunction0\x3e"};function vh(){}vh.prototype=new u;vh.prototype.constructor=vh;function wh(){}
wh.prototype=vh.prototype;vh.prototype.o=function(){return"\x3cfunction1\x3e"};function xh(){}xh.prototype=new u;xh.prototype.constructor=xh;function yh(){}yh.prototype=xh.prototype;xh.prototype.o=function(){return"\x3cfunction2\x3e"};function zh(){this.E=!1}zh.prototype=new u;zh.prototype.constructor=zh;zh.prototype.o=function(){return""+this.E};function Xe(){var a=new zh;a.E=!0;return a}zh.prototype.$classData=t({hm:0},!1,"scala.runtime.BooleanRef",{hm:1,b:1,d:1});
function og(a){return!!(a&&a.$classData&&1===a.$classData.qd&&a.$classData.pd.l.Mh)}var ua=t({Mh:0},!1,"scala.runtime.BoxedUnit",{Mh:1,b:1,d:1},void 0,void 0,function(a){return void 0===a});function Le(){this.E=0}Le.prototype=new u;Le.prototype.constructor=Le;Le.prototype.o=function(){return""+this.E};Le.prototype.lb=function(a){this.E=a;return this};Le.prototype.$classData=t({jm:0},!1,"scala.runtime.IntRef",{jm:1,b:1,d:1});function Ah(){this.E=null}Ah.prototype=new u;Ah.prototype.constructor=Ah;
Ah.prototype.o=function(){return Mf(r(),this.E)};Ah.prototype.n=function(a){this.E=a;return this};Ah.prototype.$classData=t({mm:0},!1,"scala.runtime.ObjectRef",{mm:1,b:1,d:1});var ta=t({Mi:0},!1,"java.lang.Boolean",{Mi:1,b:1,d:1,Db:1},void 0,void 0,function(a){return"boolean"===typeof a});function Bh(){this.na=0}Bh.prototype=new u;Bh.prototype.constructor=Bh;Bh.prototype.ha=function(a){return gg(a)?this.na===a.na:!1};Bh.prototype.o=function(){return g.String.fromCharCode(this.na)};
function Ch(a){var b=new Bh;b.na=a;return b}Bh.prototype.y=function(){return this.na};function gg(a){return!!(a&&a.$classData&&a.$classData.l.Sg)}var Qc=t({Sg:0},!1,"java.lang.Character",{Sg:1,b:1,d:1,Db:1});Bh.prototype.$classData=Qc;function Dh(){this.za=0}Dh.prototype=new u;Dh.prototype.constructor=Dh;Dh.prototype.a=function(){return this};Dh.prototype.$classData=t({Oi:0},!1,"java.lang.Character$",{Oi:1,b:1,e:1,d:1});var Eh=void 0;function Fh(){T.call(this)}Fh.prototype=new Pg;
Fh.prototype.constructor=Fh;function Gh(){}Gh.prototype=Fh.prototype;function Hh(){T.call(this)}Hh.prototype=new Pg;Hh.prototype.constructor=Hh;function Ih(){}Ih.prototype=Hh.prototype;function Jh(){}Jh.prototype=new u;Jh.prototype.constructor=Jh;Jh.prototype.a=function(){return this};function Kh(a){throw(new Lh).f(Mg((new Ng).Bb((new H).ra(['For input string: "','"'])),(new H).ra([a])));}
function Sg(a,b){if(null===b||0===((new Rg).f(b).Oa.length|0))Kh(b);else if(a=45===(65535&(b.charCodeAt(0)|0))||43===(65535&(b.charCodeAt(0)|0))?1:0,((new Rg).f(b).Oa.length|0)<=a)Kh(b);else{for(;;){var c=a,e=(new Rg).f(b).Oa;if(c<(e.length|0))Eh||(Eh=(new Dh).a()),c=65535&(b.charCodeAt(a)|0),0>(48<=c&&57>=c&&10>(-48+c|0)?-48+c|0:65<=c&&90>=c&&0>(-65+c|0)?-55+c|0:97<=c&&122>=c&&0>(-97+c|0)?-87+c|0:65313<=c&&65338>=c&&0>(-65313+c|0)?-65303+c|0:65345<=c&&65370>=c&&0>(-65345+c|0)?-65303+c|0:-1)&&Kh(b),
a=1+a|0;else break}a=+g.parseInt(b,10);return a!==a||2147483647<a||-2147483648>a?Kh(b):2147483647<a?2147483647:-2147483648>a?-2147483648:a|0}}function Mh(a,b){a=b-(1431655765&b>>1)|0;a=(858993459&a)+(858993459&a>>2)|0;return l(16843009,252645135&(a+(a>>4)|0))>>24}Jh.prototype.$classData=t({Xi:0},!1,"java.lang.Integer$",{Xi:1,b:1,e:1,d:1});var Nh=void 0;function Tg(){Nh||(Nh=(new Jh).a());return Nh}function Oh(){this.na=null}Oh.prototype=new u;Oh.prototype.constructor=Oh;function Ph(){}
Ph.prototype=Oh.prototype;function Qh(a,b,c){return b===a.na?(a.na=c,!0):!1}Oh.prototype.n=function(a){this.na=a;return this};function Rh(){}Rh.prototype=new Kc;Rh.prototype.constructor=Rh;Rh.prototype.a=function(){Sh=this;jd||(jd=(new id).a());qd();Th||(Th=(new Uh).a());Vh();Be||(Be=(new Ae).a());Be||(Be=(new Ae).a());Wh||(Wh=(new Xh).a());(new Wg).a();(new Yh).a();(new Zh).a();return this};function $h(a,b){if(!b)throw(new E).f("requirement failed");}
Rh.prototype.$classData=t({nj:0},!1,"scala.Predef$",{nj:1,Km:1,b:1,Im:1});var Sh=void 0;function ai(){Sh||(Sh=(new Rh).a());return Sh}function bi(){}bi.prototype=new u;bi.prototype.constructor=bi;bi.prototype.a=function(){return this};bi.prototype.$classData=t({sj:0},!1,"scala.StringContext$",{sj:1,b:1,e:1,d:1});var ci=void 0;function di(){this.na=this.Yg=this.Fe=null}di.prototype=new u;di.prototype.constructor=di;
function ei(a){$h(ai(),null!==a.na);try{a.Yg.g(a.na)}catch(e){var b=bg(C(),e);if(null!==b){var c=Fe(He(),b);if(c.i())throw jf(C(),b);b=c.tf();a.Fe.Qe(b)}else throw e;}}function fi(a,b){var c=new di;c.Fe=a;c.Yg=b;c.na=null;return c}function gi(a,b){$h(ai(),null===a.na);a.na=b;try{a.Fe.rf(a)}catch(e){if(b=bg(C(),e),null!==b){var c=Fe(He(),b);if(c.i())throw jf(C(),b);b=c.tf();a.Fe.Qe(b)}else throw e;}}di.prototype.$classData=t({wj:0},!1,"scala.concurrent.impl.CallbackRunnable",{wj:1,b:1,Em:1,Qm:1});
function hi(a){a=a.Uf();if(ii(a))return"Future("+a.qb+")";if(L()===a)return"Future(\x3cnot completed\x3e)";throw(new y).n(a);}function Id(){}Id.prototype=new u;Id.prototype.constructor=Id;Id.prototype.a=function(){return this};Id.prototype.$classData=t({Dj:0},!1,"scala.math.Fractional$",{Dj:1,b:1,e:1,d:1});var Hd=void 0;function Kd(){}Kd.prototype=new u;Kd.prototype.constructor=Kd;Kd.prototype.a=function(){return this};Kd.prototype.$classData=t({Ej:0},!1,"scala.math.Integral$",{Ej:1,b:1,e:1,d:1});
var Jd=void 0;function Md(){}Md.prototype=new u;Md.prototype.constructor=Md;Md.prototype.a=function(){return this};Md.prototype.$classData=t({Fj:0},!1,"scala.math.Numeric$",{Fj:1,b:1,e:1,d:1});var Ld=void 0;function Qd(){}Qd.prototype=new u;Qd.prototype.constructor=Qd;Qd.prototype.a=function(){return this};Qd.prototype.$classData=t({ck:0},!1,"scala.util.Either$",{ck:1,b:1,e:1,d:1});var Pd=void 0;function Sd(){}Sd.prototype=new u;Sd.prototype.constructor=Sd;Sd.prototype.a=function(){return this};
Sd.prototype.o=function(){return"Left"};Sd.prototype.$classData=t({dk:0},!1,"scala.util.Left$",{dk:1,b:1,e:1,d:1});var Rd=void 0;function Ud(){}Ud.prototype=new u;Ud.prototype.constructor=Ud;Ud.prototype.a=function(){return this};Ud.prototype.o=function(){return"Right"};Ud.prototype.$classData=t({ek:0},!1,"scala.util.Right$",{ek:1,b:1,e:1,d:1});var Td=void 0;function ji(){this.Yf=!1}ji.prototype=new u;ji.prototype.constructor=ji;ji.prototype.a=function(){this.Yf=!1;return this};
ji.prototype.$classData=t({hk:0},!1,"scala.util.control.NoStackTrace$",{hk:1,b:1,e:1,d:1});var ki=void 0;function li(){this.Zc=null}li.prototype=new lh;li.prototype.constructor=li;li.prototype.a=function(){kh.prototype.$d.call(this,pd());return this};li.prototype.ze=function(){pd();mi();Ad();return(new ni).a()};li.prototype.$classData=t({nk:0},!1,"scala.collection.IndexedSeq$$anon$1",{nk:1,oh:1,b:1,Hf:1});function oi(){this.ya=null}oi.prototype=new ih;oi.prototype.constructor=oi;function pi(){}
pi.prototype=oi.prototype;function jh(){this.Ab=this.Zc=null}jh.prototype=new lh;jh.prototype.constructor=jh;jh.prototype.ze=function(){return this.Ab.ja()};jh.prototype.$d=function(a){if(null===a)throw jf(C(),null);this.Ab=a;kh.prototype.$d.call(this,a);return this};jh.prototype.$classData=t({xk:0},!1,"scala.collection.generic.GenTraversableFactory$$anon$1",{xk:1,oh:1,b:1,Hf:1});function qi(){}qi.prototype=new nh;qi.prototype.constructor=qi;function ri(){}ri.prototype=qi.prototype;
function sd(){}sd.prototype=new u;sd.prototype.constructor=sd;sd.prototype.a=function(){return this};sd.prototype.o=function(){return"::"};sd.prototype.$classData=t({Bk:0},!1,"scala.collection.immutable.$colon$colon$",{Bk:1,b:1,e:1,d:1});var rd=void 0;function Ed(){}Ed.prototype=new u;Ed.prototype.constructor=Ed;Ed.prototype.a=function(){return this};Ed.prototype.$classData=t({gl:0},!1,"scala.collection.immutable.Range$",{gl:1,b:1,e:1,d:1});var Dd=void 0;function si(){this.Zc=null}si.prototype=new lh;
si.prototype.constructor=si;si.prototype.a=function(){kh.prototype.$d.call(this,xd());return this};si.prototype.$classData=t({sl:0},!1,"scala.collection.immutable.Stream$StreamCanBuildFrom",{sl:1,oh:1,b:1,Hf:1});function Cd(){}Cd.prototype=new u;Cd.prototype.constructor=Cd;Cd.prototype.a=function(){return this};Cd.prototype.$classData=t({Pl:0},!1,"scala.collection.mutable.StringBuilder$",{Pl:1,b:1,e:1,d:1});var Bd=void 0;function ti(){this.qc=null}ti.prototype=new uh;ti.prototype.constructor=ti;
function lf(a){return(0,a.qc)()}function yb(a){var b=new ti;b.qc=a;return b}ti.prototype.$classData=t({Zl:0},!1,"scala.scalajs.runtime.AnonFunction0",{Zl:1,en:1,b:1,qm:1});function ui(){this.qc=null}ui.prototype=new wh;ui.prototype.constructor=ui;ui.prototype.g=function(a){return(0,this.qc)(a)};function x(a){var b=new ui;b.qc=a;return b}ui.prototype.$classData=t({$l:0},!1,"scala.scalajs.runtime.AnonFunction1",{$l:1,fn:1,b:1,z:1});function vi(){this.qc=null}vi.prototype=new yh;
vi.prototype.constructor=vi;function wi(a){var b=new vi;b.qc=a;return b}vi.prototype.$classData=t({am:0},!1,"scala.scalajs.runtime.AnonFunction2",{am:1,gn:1,b:1,rm:1});function xi(){this.Xe=0;this.ve=null}xi.prototype=new u;xi.prototype.constructor=xi;xi.prototype.a=function(){yi=this;this.ve=(new Kf).rc(0,0);return this};
function Bi(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+da(1E9)|0)-(0!==b?da(b):32+da(a)|0)|0,e=c,f=0===(32&e)?1E9<<e:0,e=0===(32&e)?5E8>>>(31-e|0)|0|0<<e:1E9<<e,h=a,k=b;for(a=b=0;0<=c&&0!==(-2097152&k);){var m=h,n=k,B=f,F=e;if(n===F?(-2147483648^m)>=(-2147483648^B):(-2147483648^n)>=(-2147483648^F))m=k,n=e,k=h-f|0,m=(-2147483648^k)>(-2147483648^h)?-1+(m-n|0)|0:m-n|0,h=k,k=m,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;m=e>>>1|0;f=f>>>1|0|e<<31;e=m}c=k;if(0===c?-1147483648<=(-2147483648^
h):-2147483648<=(-2147483648^c))c=4294967296*k+ +(h>>>0),h=c/1E9,f=h/4294967296|0,e=b,b=h=e+(h|0)|0,a=(-2147483648^h)<(-2147483648^e)?1+(a+f|0)|0:a+f|0,h=c%1E9|0;c=""+h;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function jg(a,b,c){return 0>c?-(4294967296*+((0!==b?~c:-c|0)>>>0)+ +((-b|0)>>>0)):4294967296*c+ +(b>>>0)}xi.prototype.$classData=t({cm:0},!1,"scala.scalajs.runtime.RuntimeLong$",{cm:1,b:1,e:1,d:1});var yi=void 0;
function Ia(){yi||(yi=(new xi).a());return yi}var Ci=t({km:0},!1,"scala.runtime.Nothing$",{km:1,gb:1,b:1,d:1});function Di(){}Di.prototype=new u;Di.prototype.constructor=Di;function Ei(){}Ei.prototype=Di.prototype;var la=t({Ei:0},!1,"java.lang.String",{Ei:1,b:1,d:1,Rg:1,Db:1},void 0,void 0,function(a){return"string"===typeof a});function Fi(){T.call(this)}Fi.prototype=new Gh;Fi.prototype.constructor=Fi;Fi.prototype.n=function(a){T.prototype.Ma.call(this,ja(a),null);return this};
Fi.prototype.$classData=t({Ki:0},!1,"java.lang.AssertionError",{Ki:1,Si:1,gb:1,b:1,d:1});
var na=t({Ni:0},!1,"java.lang.Byte",{Ni:1,ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return ma(a)}),sa=t({Ri:0},!1,"java.lang.Double",{Ri:1,ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return"number"===typeof a}),ra=t({Ti:0},!1,"java.lang.Float",{Ti:1,ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return"number"===typeof a}),qa=t({Wi:0},!1,"java.lang.Integer",{Wi:1,ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return"number"===typeof a&&(a|0)===a&&1/a!==1/-0}),wa=t({aj:0},!1,"java.lang.Long",{aj:1,
ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return va(a)});function yg(){T.call(this)}yg.prototype=new Ih;yg.prototype.constructor=yg;function Gi(){}Gi.prototype=yg.prototype;yg.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};yg.prototype.$classData=t({Mb:0},!1,"java.lang.RuntimeException",{Mb:1,Lb:1,gb:1,b:1,d:1});var pa=t({dj:0},!1,"java.lang.Short",{dj:1,ed:1,b:1,d:1,Db:1},void 0,void 0,function(a){return oa(a)});function Hi(){this.Za=null}Hi.prototype=new u;
Hi.prototype.constructor=Hi;d=Hi.prototype;d.a=function(){Hi.prototype.f.call(this,"");return this};function Ii(a,b){a.Za=""+a.Za+(null===b?"null":b);return a}d.Nh=function(a,b){return this.Za.substring(a,b)};d.o=function(){return this.Za};function Ji(a,b){null===b?Ii(a,null):Ii(a,ja(b))}d.lb=function(){Hi.prototype.f.call(this,"");return this};function Ki(a,b,c,e){null===b?a=Ki(a,"null",c,e):(b="string"===typeof b?b.substring(c,e):b.Nh(c,e),a=Ii(a,ja(b)));return a}
function Li(a,b){Ii(a,g.String.fromCharCode(b))}d.f=function(a){this.Za=a;return this};d.$classData=t({ej:0},!1,"java.lang.StringBuilder",{ej:1,b:1,Rg:1,Ji:1,d:1});function ed(){T.call(this)}ed.prototype=new Ih;ed.prototype.constructor=ed;ed.prototype.Ma=function(a,b){T.prototype.Ma.call(this,a,b);return this};ed.prototype.$classData=t({ij:0},!1,"java.util.concurrent.ExecutionException",{ij:1,Lb:1,gb:1,b:1,d:1});function Mi(){}Mi.prototype=new Ic;Mi.prototype.constructor=Mi;Mi.prototype.a=function(){return this};
function Ni(a,b,c,e,f,h){a=ka(b);var k;if(k=!!a.pc.isArrayClass)k=ka(e),k.pc.isPrimitive||a.pc.isPrimitive?a=k===a||(k===q(Ra)?a===q(Qa):k===q(Sa)?a===q(Qa)||a===q(Ra):k===q(Ua)?a===q(Qa)||a===q(Ra)||a===q(Sa):k===q(Va)&&(a===q(Qa)||a===q(Ra)||a===q(Sa)||a===q(Ua))):(a=a.pc.getFakeInstance(),a=!!k.pc.isInstance(a)),k=a;if(k)Ga(b,c,e,f,h);else for(a=c,c=c+h|0;a<c;){sg();h=f;sg();k=b;var m=a;if(Ob(k,1)||$a(k,1)||cb(k,1)||ab(k,1)||bb(k,1))k=k.c[m];else if(Xa(k,1))k=Ch(k.c[m]);else if(Ya(k,1)||Za(k,1)||
Wa(k,1)||og(k))k=k.c[m];else{if(null===k)throw(new pg).a();throw(new y).n(k);}qg(0,e,h,k);a=1+a|0;f=1+f|0}}Mi.prototype.$classData=t({jj:0},!1,"scala.Array$",{jj:1,Jm:1,b:1,e:1,d:1});var Oi=void 0;function Pi(){Oi||(Oi=(new Mi).a());return Oi}function Qi(){}Qi.prototype=new u;Qi.prototype.constructor=Qi;function Ri(){}Ri.prototype=Qi.prototype;Qi.prototype.o=function(){return"\x3cfunction1\x3e"};function Si(){}Si.prototype=new u;Si.prototype.constructor=Si;function Ti(){}Ti.prototype=Si.prototype;
Si.prototype.o=function(){return"\x3cfunction1\x3e"};function Gd(){}Gd.prototype=new u;Gd.prototype.constructor=Gd;Gd.prototype.a=function(){return this};Gd.prototype.$classData=t({Cj:0},!1,"scala.math.Equiv$",{Cj:1,b:1,Rm:1,e:1,d:1});var Fd=void 0;function Od(){}Od.prototype=new u;Od.prototype.constructor=Od;Od.prototype.a=function(){return this};Od.prototype.$classData=t({Hj:0},!1,"scala.math.Ordering$",{Hj:1,b:1,Sm:1,e:1,d:1});var Nd=void 0;function Xh(){}Xh.prototype=new u;
Xh.prototype.constructor=Xh;Xh.prototype.a=function(){return this};Xh.prototype.o=function(){return"\x3c?\x3e"};Xh.prototype.$classData=t({ak:0},!1,"scala.reflect.NoManifest$",{ak:1,b:1,mb:1,e:1,d:1});var Wh=void 0;function Ui(){}Ui.prototype=new u;Ui.prototype.constructor=Ui;function Vi(){}d=Vi.prototype=Ui.prototype;d.Qa=function(){return this};d.i=function(){return!this.ia()};d.o=function(){return(this.ia()?"non-empty":"empty")+" iterator"};d.x=function(a){bh(this,a)};d.hb=function(){return ch(this)};
d.od=function(a,b,c,e){return We(this,a,b,c,e)};function Wi(){}Wi.prototype=new hh;Wi.prototype.constructor=Wi;function Xi(){}Xi.prototype=Wi.prototype;function Uh(){}Uh.prototype=new ri;Uh.prototype.constructor=Uh;Uh.prototype.a=function(){return this};Uh.prototype.$classData=t({$k:0},!1,"scala.collection.immutable.Map$",{$k:1,yk:1,zk:1,wk:1,b:1});var Th=void 0;function Yi(){this.$a=this.kb=null}Yi.prototype=new u;Yi.prototype.constructor=Yi;function Zi(a,b){a.kb=b;a.$a=b;return a}d=Yi.prototype;
d.rb=function(a){this.$a.rb(a);return this};d.ab=function(){return this.$a};d.dc=function(a,b){sh(this,a,b)};d.cb=function(a){this.$a.rb(a);return this};d.Hb=function(){};d.sb=function(a){return df(this,a)};d.$classData=t({Hl:0},!1,"scala.collection.mutable.GrowingBuilder",{Hl:1,b:1,Bc:1,Ac:1,zc:1});function Af(){this.Zg=null}Af.prototype=new u;Af.prototype.constructor=Af;Af.prototype.a=function(){this.Zg=g.Promise.resolve(void 0);return this};Af.prototype.Qe=function(a){Ug(a)};
Af.prototype.rf=function(a){this.Zg.then(function(a,c){return function(){try{ei(c)}catch(a){var b=bg(C(),a);if(null!==b)Ug(b);else throw a;}}}(this,a))};Af.prototype.$classData=t({Tl:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext",{Tl:1,b:1,eh:1,dh:1,Ug:1});function zf(){}zf.prototype=new u;zf.prototype.constructor=zf;zf.prototype.a=function(){return this};zf.prototype.Qe=function(a){Ug(a)};
zf.prototype.rf=function(a){g.setTimeout(function(a,c){return function(){try{ei(c)}catch(a){var b=bg(C(),a);if(null!==b)Ug(b);else throw a;}}}(this,a),0)};zf.prototype.$classData=t({Ul:0},!1,"scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext",{Ul:1,b:1,eh:1,dh:1,Ug:1});function wf(){}wf.prototype=new u;wf.prototype.constructor=wf;wf.prototype.a=function(){return this};wf.prototype.Qe=function(a){Ug(a)};
wf.prototype.rf=function(a){try{ei(a)}catch(b){if(a=bg(C(),b),null!==a)Ug(a);else throw b;}};wf.prototype.$classData=t({Vl:0},!1,"scala.scalajs.concurrent.RunNowExecutionContext$",{Vl:1,b:1,eh:1,dh:1,Ug:1});var vf=void 0;function Kf(){this.tb=this.Da=0}Kf.prototype=new Kg;Kf.prototype.constructor=Kf;d=Kf.prototype;d.ha=function(a){return va(a)?this.Da===a.Da&&this.tb===a.tb:!1};d.Je=function(a,b,c){Kf.prototype.rc.call(this,a|b<<22,b>>10|c<<12);return this};
d.o=function(){Ia();var a=this.Da,b=this.tb;return b===a>>31?""+a:0>b?"-"+Bi(-a|0,0!==a?~b:-b|0):Bi(a,b)};d.rc=function(a,b){this.Da=a;this.tb=b;return this};d.lb=function(a){Kf.prototype.rc.call(this,a,a>>31);return this};d.y=function(){return this.Da^this.tb};function va(a){return!!(a&&a.$classData&&a.$classData.l.Lh)}d.$classData=t({Lh:0},!1,"scala.scalajs.runtime.RuntimeLong",{Lh:1,ed:1,b:1,d:1,Db:1});function fc(){this.Jb=0;this.Ob=null}fc.prototype=new u;fc.prototype.constructor=fc;d=fc.prototype;
d.Ga=function(){return"PlayerState"};function ub(){var a=hb().v,b=a.Ob,c=jb();if(null===b||!b.ha(c))return a;b=(new $i).lb(0);return ec(new fc,a.Jb,b)}d.Ea=function(){return 2};d.ha=function(a){if(this===a)return!0;if(a&&a.$classData&&a.$classData.l.$f&&this.Jb===a.Jb){var b=this.Ob;a=a.Ob;return null===b?null===a:b.ha(a)}return!1};d.Fa=function(a){switch(a){case 0:return this.Jb;case 1:return this.Ob;default:throw(new V).f(""+a);}};function Db(a){a=a.Ob;return jb()!==a}d.o=function(){return rg(this)};
function ec(a,b,c){a.Jb=b;a.Ob=c;return a}d.y=function(){var a=-889275714,a=Ne().uc(a,this.Jb),a=Ne().uc(a,Me(Ne(),this.Ob));return Ne().dd(a,2)};d.Na=function(){return W(this)};function Eb(a){var b=a.Ob;if(jb()===b)return a;if(kb(b))return b=b.Qc,b=(new $i).lb(15===b?0:1+b|0),ec(new fc,a.Jb,b);throw(new y).n(b);}d.$classData=t({$f:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.PlayerState",{$f:1,b:1,Pa:1,k:1,e:1,d:1});function aj(){}aj.prototype=new Ei;aj.prototype.constructor=aj;
function bj(){}bj.prototype=aj.prototype;aj.prototype.Gi=function(){return this};function E(){T.call(this)}E.prototype=new Gi;E.prototype.constructor=E;function cj(){}cj.prototype=E.prototype;E.prototype.a=function(){T.prototype.Ma.call(this,null,null);return this};E.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};E.prototype.$classData=t({xf:0},!1,"java.lang.IllegalArgumentException",{xf:1,Mb:1,Lb:1,gb:1,b:1,d:1});function Qb(){T.call(this)}Qb.prototype=new Gi;
Qb.prototype.constructor=Qb;Qb.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};Qb.prototype.$classData=t({Ui:0},!1,"java.lang.IllegalStateException",{Ui:1,Mb:1,Lb:1,gb:1,b:1,d:1});function V(){T.call(this)}V.prototype=new Gi;V.prototype.constructor=V;V.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};V.prototype.$classData=t({Vi:0},!1,"java.lang.IndexOutOfBoundsException",{Vi:1,Mb:1,Lb:1,gb:1,b:1,d:1});function dj(){}dj.prototype=new Ei;
dj.prototype.constructor=dj;dj.prototype.a=function(){return this};dj.prototype.$classData=t({$i:0},!1,"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{$i:1,Di:1,b:1,Bi:1,Li:1,Ci:1});function pg(){T.call(this)}pg.prototype=new Gi;pg.prototype.constructor=pg;pg.prototype.a=function(){T.prototype.Ma.call(this,null,null);return this};pg.prototype.$classData=t({bj:0},!1,"java.lang.NullPointerException",{bj:1,Mb:1,Lb:1,gb:1,b:1,d:1});function ej(){T.call(this)}ej.prototype=new Gi;
ej.prototype.constructor=ej;ej.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};ej.prototype.$classData=t({gj:0},!1,"java.lang.UnsupportedOperationException",{gj:1,Mb:1,Lb:1,gb:1,b:1,d:1});function P(){T.call(this)}P.prototype=new Gi;P.prototype.constructor=P;P.prototype.a=function(){T.prototype.Ma.call(this,null,null);return this};P.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};
P.prototype.$classData=t({hj:0},!1,"java.util.NoSuchElementException",{hj:1,Mb:1,Lb:1,gb:1,b:1,d:1});function y(){T.call(this);this.ee=this.Xg=null;this.hf=!1}y.prototype=new Gi;y.prototype.constructor=y;y.prototype.sf=function(){if(!this.hf&&!this.hf){var a;if(null===this.ee)a="null";else try{a=ja(this.ee)+" ("+("of class "+Nb(ka(this.ee)))+")"}catch(b){if(null!==bg(C(),b))a="an instance of class "+Nb(ka(this.ee));else throw b;}this.Xg=a;this.hf=!0}return this.Xg};
y.prototype.n=function(a){this.ee=a;T.prototype.Ma.call(this,null,null);return this};y.prototype.$classData=t({kj:0},!1,"scala.MatchError",{kj:1,Mb:1,Lb:1,gb:1,b:1,d:1});function fj(){}fj.prototype=new u;fj.prototype.constructor=fj;function gj(){}gj.prototype=fj.prototype;function Yh(){}Yh.prototype=new Ti;Yh.prototype.constructor=Yh;Yh.prototype.a=function(){return this};Yh.prototype.g=function(a){return a};Yh.prototype.$classData=t({oj:0},!1,"scala.Predef$$anon$1",{oj:1,Mm:1,b:1,z:1,e:1,d:1});
function Zh(){}Zh.prototype=new Ri;Zh.prototype.constructor=Zh;Zh.prototype.a=function(){return this};Zh.prototype.g=function(a){return a};Zh.prototype.$classData=t({pj:0},!1,"scala.Predef$$anon$2",{pj:1,Lm:1,b:1,z:1,e:1,d:1});function Ng(){this.ub=null}Ng.prototype=new u;Ng.prototype.constructor=Ng;d=Ng.prototype;d.Ga=function(){return"StringContext"};d.Ea=function(){return 1};
d.ha=function(a){if(this===a)return!0;if(a&&a.$classData&&a.$classData.l.bh){var b=this.ub;a=a.ub;return null===b?null===a:b.ha(a)}return!1};d.Fa=function(a){switch(a){case 0:return this.ub;default:throw(new V).f(""+a);}};d.o=function(){return rg(this)};function hj(a,b){if(a.ub.xa()!==(1+b.xa()|0))throw(new E).f("wrong number of arguments ("+b.xa()+") for interpolated string with "+a.ub.xa()+" parts");}
function Mg(a,b){var c=function(){return function(a){ci||(ci=(new bi).a());a:{var b=a.length|0,c;r();var e=Nf();c=a.indexOf(e)|0;switch(c){case -1:break a;default:e=(new Hi).a();b:{var f=c;c=0;for(;;)if(0<=f){f>c&&Ki(e,a,c,f);c=1+f|0;if(c>=b)throw ij(a,f);var F=65535&(a.charCodeAt(c)|0);switch(F){case 98:f=8;break;case 116:f=9;break;case 110:f=10;break;case 102:f=12;break;case 114:f=13;break;case 34:f=34;break;case 39:f=39;break;case 92:f=92;break;default:if(48<=F&&55>=F)f=65535&(a.charCodeAt(c)|
0),F=-48+f|0,c=1+c|0,c<b&&48<=(65535&(a.charCodeAt(c)|0))&&55>=(65535&(a.charCodeAt(c)|0))&&(F=-48+((F<<3)+(65535&(a.charCodeAt(c)|0))|0)|0,c=1+c|0,c<b&&51>=f&&48<=(65535&(a.charCodeAt(c)|0))&&55>=(65535&(a.charCodeAt(c)|0))&&(F=-48+((F<<3)+(65535&(a.charCodeAt(c)|0))|0)|0,c=1+c|0)),c=-1+c|0,f=65535&F;else throw ij(a,f);}c=1+c|0;Li(e,f);f=c;r();var F=a,Z=Nf(),F=F.indexOf(Z,c)|0;c=f;f=F}else{c<b&&Ki(e,a,c,b);a=e.Za;break b}}}}return a}}(a);hj(a,b);a=a.ub.s();b=b.s();for(var e=a.ka(),e=(new Hi).f(c(e));b.ia();){Ji(e,
b.ka());var f=a.ka();Ii(e,c(f))}return e.Za}d.Bb=function(a){this.ub=a;return this};d.y=function(){return Oe(this)};d.Na=function(){return W(this)};d.$classData=t({bh:0},!1,"scala.StringContext",{bh:1,b:1,Pa:1,k:1,e:1,d:1});function jj(){}jj.prototype=new u;jj.prototype.constructor=jj;function kj(){}kj.prototype=jj.prototype;function De(){T.call(this)}De.prototype=new Pg;De.prototype.constructor=De;De.prototype.a=function(){T.prototype.Ma.call(this,null,null);return this};
De.prototype.He=function(){ki||(ki=(new ji).a());return ki.Yf?T.prototype.He.call(this):this};De.prototype.$classData=t({fk:0},!1,"scala.util.control.BreakControl",{fk:1,gb:1,b:1,d:1,lh:1,Tm:1});function od(){this.ya=null}od.prototype=new ih;od.prototype.constructor=od;od.prototype.a=function(){U.prototype.a.call(this);return this};od.prototype.ja=function(){lj();return(new X).a()};od.prototype.$classData=t({pk:0},!1,"scala.collection.Iterable$",{pk:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var nd=void 0;
function mj(){this.Jg=this.Ab=null}mj.prototype=new Vi;mj.prototype.constructor=mj;mj.prototype.ka=function(){return this.Jg.g(this.Ab.ka())};function nj(a,b,c){if(null===b)throw jf(C(),null);a.Ab=b;a.Jg=c;return a}mj.prototype.ia=function(){return this.Ab.ia()};mj.prototype.$classData=t({rk:0},!1,"scala.collection.Iterator$$anon$10",{rk:1,vc:1,b:1,xc:1,q:1,p:1});function Te(){}Te.prototype=new Vi;Te.prototype.constructor=Te;Te.prototype.a=function(){return this};
Te.prototype.ka=function(){throw(new P).f("next on empty iterator");};Te.prototype.ia=function(){return!1};Te.prototype.$classData=t({sk:0},!1,"scala.collection.Iterator$$anon$2",{sk:1,vc:1,b:1,xc:1,q:1,p:1});function oj(){this.Ib=null}oj.prototype=new Vi;oj.prototype.constructor=oj;function pj(a){var b=new oj;b.Ib=a;return b}oj.prototype.ka=function(){if(this.ia()){var a=this.Ib.qa();this.Ib=this.Ib.$();return a}return J().kb.ka()};oj.prototype.ia=function(){return!this.Ib.i()};
oj.prototype.$classData=t({tk:0},!1,"scala.collection.LinearSeqLike$$anon$1",{tk:1,vc:1,b:1,xc:1,q:1,p:1});function md(){this.ya=null}md.prototype=new ih;md.prototype.constructor=md;md.prototype.a=function(){U.prototype.a.call(this);ld=this;(new Ce).a();return this};md.prototype.ja=function(){qj||(qj=(new rj).a());return(new X).a()};md.prototype.$classData=t({vk:0},!1,"scala.collection.Traversable$",{vk:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var ld=void 0;function sj(){}sj.prototype=new Xi;
sj.prototype.constructor=sj;function tj(){}tj.prototype=sj.prototype;sj.prototype.Ud=function(){return this.Ee()};sj.prototype.ja=function(){return uj(new vj,this.Ee())};function wj(){this.ya=null}wj.prototype=new ih;wj.prototype.constructor=wj;wj.prototype.a=function(){U.prototype.a.call(this);return this};wj.prototype.ja=function(){return(new X).a()};wj.prototype.$classData=t({Qk:0},!1,"scala.collection.immutable.Iterable$",{Qk:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var xj=void 0;
function lj(){xj||(xj=(new wj).a());return xj}function yj(){this.Ib=null}yj.prototype=new Vi;yj.prototype.constructor=yj;yj.prototype.ka=function(){if(!this.ia())return J().kb.ka();var a=kf(this.Ib),b=a.qa();this.Ib=hf(new gf,this,yb(function(a,b){return function(){return b.$()}}(this,a)));return b};function zj(a){var b=new yj;b.Ib=hf(new gf,b,yb(function(a,b){return function(){return b}}(b,a)));return b}yj.prototype.ia=function(){return!kf(this.Ib).i()};
yj.prototype.hb=function(){var a=kf(this.Ib);this.Ib=hf(new gf,this,yb(function(){return function(){xd();return fh()}}(this)));return a};yj.prototype.$classData=t({tl:0},!1,"scala.collection.immutable.StreamIterator",{tl:1,vc:1,b:1,xc:1,q:1,p:1});function rj(){this.ya=null}rj.prototype=new ih;rj.prototype.constructor=rj;rj.prototype.a=function(){U.prototype.a.call(this);return this};rj.prototype.ja=function(){return(new X).a()};
rj.prototype.$classData=t({wl:0},!1,"scala.collection.immutable.Traversable$",{wl:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var qj=void 0;function Aj(){this.Fg=null;this.yb=0;this.Bd=this.Gf=this.We=null;this.Tc=0;this.jd=null}Aj.prototype=new Vi;Aj.prototype.constructor=Aj;function Bj(){}Bj.prototype=Aj.prototype;
Aj.prototype.ka=function(){if(null!==this.jd){var a=this.jd.ka();this.jd.ia()||(this.jd=null);return a}a:{var a=this.Bd,b=this.Tc;for(;;){b===(-1+a.c.length|0)?(this.yb=-1+this.yb|0,0<=this.yb?(this.Bd=this.We.c[this.yb],this.Tc=this.Gf.c[this.yb],this.We.c[this.yb]=null):(this.Bd=null,this.Tc=0)):this.Tc=1+this.Tc|0;if((a=a.c[b])&&a.$classData&&a.$classData.l.th||a&&a.$classData&&a.$classData.l.uh){a=this.Lg(a);break a}if(a&&a.$classData&&a.$classData.l.If||Cj(a))0<=this.yb&&(this.We.c[this.yb]=
this.Bd,this.Gf.c[this.yb]=this.Tc),this.yb=1+this.yb|0,this.Bd=Dj(a),this.Tc=0,a=Dj(a),b=0;else{this.jd=a.s();a=this.ka();break a}}}return a};Aj.prototype.ia=function(){return null!==this.jd||0<=this.yb};function Dj(a){if(a&&a.$classData&&a.$classData.l.If)return a.fb;if(!Cj(a))throw(new y).n(a);return a.ta}Aj.prototype.Ng=function(a){this.Fg=a;this.yb=0;this.We=p(w(w(Ej)),[6]);this.Gf=p(w(Sa),[6]);this.Bd=this.Fg;this.Tc=0;this.jd=null;return this};function qf(){this.Ig=this.cc=null}
qf.prototype=new u;qf.prototype.constructor=qf;function pf(a,b,c){a.Ig=c;a.cc=b;return a}d=qf.prototype;d.ha=function(a){return null!==a&&(a===this||a===this.cc||xa(a,this.cc))};d.rb=function(a){this.cc.cb(a);return this};d.o=function(){return""+this.cc};d.ab=function(){return this.Ig.g(this.cc.ab())};d.dc=function(a,b){this.cc.dc(a,b)};d.cb=function(a){this.cc.cb(a);return this};d.y=function(){return this.cc.y()};d.Hb=function(a){this.cc.Hb(a)};d.sb=function(a){this.cc.sb(a);return this};
d.$classData=t({Gl:0},!1,"scala.collection.mutable.Builder$$anon$1",{Gl:1,b:1,Bc:1,Ac:1,zc:1,Om:1});function Fj(){this.ub=null}Fj.prototype=new u;Fj.prototype.constructor=Fj;function Gj(){}d=Gj.prototype=Fj.prototype;d.a=function(){this.ub=(new X).a();return this};d.rb=function(a){return Hj(this,a)};function Hj(a,b){var c=a.ub;qd();b=(new H).ra([b]);var e=qd().ya.ze(),f=b.Vc();switch(f){case -1:break;default:e.Hb(f)}e.sb(b.Ra());b=e.ab();Ij(c,b);return a}d.dc=function(a,b){sh(this,a,b)};
d.cb=function(a){return Hj(this,a)};d.Hb=function(){};d.sb=function(a){Ij(this.ub,a);return this};function Jj(){this.Qd=null}Jj.prototype=new Vi;Jj.prototype.constructor=Jj;Jj.prototype.ka=function(){if(this.ia()){var a=this.Qd.qa();this.Qd=this.Qd.nc();return a}throw(new P).f("next on empty Iterator");};Jj.prototype.ia=function(){return this.Qd!==K()};Jj.prototype.$classData=t({Ll:0},!1,"scala.collection.mutable.ListBuffer$$anon$1",{Ll:1,vc:1,b:1,xc:1,q:1,p:1});
function pc(){this.$a=this.kb=null}pc.prototype=new u;pc.prototype.constructor=pc;function rc(a,b){a.$a=a.$a.Hc(b);return a}d=pc.prototype;d.rb=function(a){return rc(this,a)};d.ab=function(){return this.$a};d.dc=function(a,b){sh(this,a,b)};function oc(a,b){a.kb=b;a.$a=b;return a}d.cb=function(a){return rc(this,a)};d.Hb=function(){};d.sb=function(a){return df(this,a)};d.$classData=t({Ml:0},!1,"scala.collection.mutable.MapBuilder",{Ml:1,b:1,me:1,Bc:1,Ac:1,zc:1});function vj(){this.$a=this.kb=null}
vj.prototype=new u;vj.prototype.constructor=vj;d=vj.prototype;d.rb=function(a){return Kj(this,a)};d.ab=function(){return this.$a};d.dc=function(a,b){sh(this,a,b)};function Kj(a,b){a.$a=a.$a.oc(b);return a}function uj(a,b){a.kb=b;a.$a=b;return a}d.cb=function(a){return Kj(this,a)};d.Hb=function(){};d.sb=function(a){return df(this,a)};d.$classData=t({Nl:0},!1,"scala.collection.mutable.SetBuilder",{Nl:1,b:1,me:1,Bc:1,Ac:1,zc:1});function Lj(){this.eg=this.Nd=0;this.Sh=null}Lj.prototype=new Vi;
Lj.prototype.constructor=Lj;Lj.prototype.ka=function(){var a=this.Sh.Fa(this.Nd);this.Nd=1+this.Nd|0;return a};function W(a){var b=new Lj;b.Sh=a;b.Nd=0;b.eg=a.Ea();return b}Lj.prototype.ia=function(){return this.Nd<this.eg};Lj.prototype.$classData=t({om:0},!1,"scala.runtime.ScalaRunTime$$anon$1",{om:1,vc:1,b:1,xc:1,q:1,p:1});function Mj(){}Mj.prototype=new u;Mj.prototype.constructor=Mj;d=Mj.prototype;d.a=function(){return this};d.Ga=function(){return"NotPlaying"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"NotPlaying"};d.y=function(){return 266491387};d.Na=function(){return W(this)};d.$classData=t({Uh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.NotPlaying$",{Uh:1,b:1,Vh:1,Pa:1,k:1,e:1,d:1});var Nj=void 0;function jb(){Nj||(Nj=(new Mj).a());return Nj}function $i(){this.Qc=0}$i.prototype=new u;$i.prototype.constructor=$i;d=$i.prototype;d.Ga=function(){return"PlayingAt"};d.Ea=function(){return 1};
d.ha=function(a){return this===a?!0:kb(a)?this.Qc===a.Qc:!1};d.Fa=function(a){switch(a){case 0:return this.Qc;default:throw(new V).f(""+a);}};d.o=function(){return rg(this)};d.lb=function(a){this.Qc=a;return this};d.y=function(){var a=-889275714,a=Ne().uc(a,this.Qc);return Ne().dd(a,1)};d.Na=function(){return W(this)};function kb(a){return!!(a&&a.$classData&&a.$classData.l.ag)}d.$classData=t({ag:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.player.PlayingAt",{ag:1,b:1,Vh:1,Pa:1,k:1,e:1,d:1});
function Oj(){}Oj.prototype=new u;Oj.prototype.constructor=Oj;d=Oj.prototype;d.a=function(){return this};d.Ga=function(){return"BD"};d.Ea=function(){return 0};d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"BD"};d.y=function(){return 2114};d.Na=function(){return W(this)};d.$classData=t({Wh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.BD$",{Wh:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Pj=void 0;function ob(){Pj||(Pj=(new Oj).a());return Pj}function Qj(){}Qj.prototype=new u;
Qj.prototype.constructor=Qj;d=Qj.prototype;d.a=function(){return this};d.Ga=function(){return"HH"};d.Ea=function(){return 0};d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"HH"};d.y=function(){return 2304};d.Na=function(){return W(this)};d.$classData=t({Xh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.HH$",{Xh:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var Rj=void 0;function z(){Rj||(Rj=(new Qj).a());return Rj}function Sj(){}Sj.prototype=new u;Sj.prototype.constructor=Sj;d=Sj.prototype;
d.a=function(){return this};d.Ga=function(){return"PatternA"};d.Ea=function(){return 0};d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"PatternA"};d.y=function(){return 1310649041};d.Na=function(){return W(this)};d.$classData=t({Yh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternA$",{Yh:1,b:1,af:1,Pa:1,k:1,e:1,d:1});var Tj=void 0;function Ib(){Tj||(Tj=(new Sj).a());return Tj}function Uj(){}Uj.prototype=new u;Uj.prototype.constructor=Uj;d=Uj.prototype;d.a=function(){return this};
d.Ga=function(){return"PatternB"};d.Ea=function(){return 0};d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"PatternB"};d.y=function(){return 1310649042};d.Na=function(){return W(this)};d.$classData=t({Zh:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternB$",{Zh:1,b:1,af:1,Pa:1,k:1,e:1,d:1});var Vj=void 0;function Jb(){Vj||(Vj=(new Uj).a());return Vj}function Wj(){}Wj.prototype=new u;Wj.prototype.constructor=Wj;d=Wj.prototype;d.a=function(){return this};d.Ga=function(){return"PatternC"};
d.Ea=function(){return 0};d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"PatternC"};d.y=function(){return 1310649043};d.Na=function(){return W(this)};d.$classData=t({$h:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternC$",{$h:1,b:1,af:1,Pa:1,k:1,e:1,d:1});var Xj=void 0;function Kb(){Xj||(Xj=(new Wj).a());return Xj}function Yj(){}Yj.prototype=new u;Yj.prototype.constructor=Yj;d=Yj.prototype;d.a=function(){return this};d.Ga=function(){return"PatternD"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"PatternD"};d.y=function(){return 1310649044};d.Na=function(){return W(this)};d.$classData=t({ai:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternD$",{ai:1,b:1,af:1,Pa:1,k:1,e:1,d:1});var Zj=void 0;function Lb(){Zj||(Zj=(new Yj).a());return Zj}function ak(){}ak.prototype=new u;ak.prototype.constructor=ak;d=ak.prototype;d.a=function(){return this};d.Ga=function(){return"RS"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"RS"};d.y=function(){return 2625};d.Na=function(){return W(this)};d.$classData=t({bi:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.RS$",{bi:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var bk=void 0;function mb(){bk||(bk=(new ak).a());return bk}function ck(){}ck.prototype=new u;ck.prototype.constructor=ck;d=ck.prototype;d.a=function(){return this};d.Ga=function(){return"SD"};d.Ea=function(){return 0};
d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"SD"};d.y=function(){return 2641};d.Na=function(){return W(this)};d.$classData=t({ci:0},!1,"com.nekogata.scalajs_drum_sequencer.domain.sequener.SD$",{ci:1,b:1,bf:1,Pa:1,k:1,e:1,d:1});var dk=void 0;function nb(){dk||(dk=(new ck).a());return dk}function I(){this.Ta=this.Ia=null}I.prototype=new u;I.prototype.constructor=I;d=I.prototype;d.Ga=function(){return"Tuple2"};d.Ea=function(){return 2};
d.ha=function(a){return this===a?!0:a&&a.$classData&&a.$classData.l.cg?Q(R(),this.Ia,a.Ia)&&Q(R(),this.Ta,a.Ta):!1};d.h=function(a,b){this.Ia=a;this.Ta=b;return this};d.Fa=function(a){a:switch(a){case 0:a=this.Ia;break a;case 1:a=this.Ta;break a;default:throw(new V).f(""+a);}return a};d.o=function(){return"("+this.Ia+","+this.Ta+")"};d.y=function(){return Oe(this)};d.Na=function(){return W(this)};d.$classData=t({cg:0},!1,"scala.Tuple2",{cg:1,b:1,Nm:1,Pa:1,k:1,e:1,d:1});
function Lh(){T.call(this)}Lh.prototype=new cj;Lh.prototype.constructor=Lh;Lh.prototype.f=function(a){T.prototype.Ma.call(this,a,null);return this};Lh.prototype.$classData=t({cj:0},!1,"java.lang.NumberFormatException",{cj:1,xf:1,Mb:1,Lb:1,gb:1,b:1,d:1});function ek(){}ek.prototype=new gj;ek.prototype.constructor=ek;d=ek.prototype;d.a=function(){return this};d.Ga=function(){return"None"};d.Ea=function(){return 0};d.i=function(){return!0};d.tf=function(){throw(new P).f("None.get");};
d.Fa=function(a){throw(new V).f(""+a);};d.o=function(){return"None"};d.y=function(){return 2433880};d.Na=function(){return W(this)};d.$classData=t({lj:0},!1,"scala.None$",{lj:1,mj:1,b:1,Pa:1,k:1,e:1,d:1});var fk=void 0;function L(){fk||(fk=(new ek).a());return fk}function M(){this.qb=null}M.prototype=new gj;M.prototype.constructor=M;d=M.prototype;d.Ga=function(){return"Some"};d.Ea=function(){return 1};d.ha=function(a){return this===a?!0:ii(a)?Q(R(),this.qb,a.qb):!1};d.i=function(){return!1};
d.Fa=function(a){switch(a){case 0:return this.qb;default:throw(new V).f(""+a);}};d.tf=function(){return this.qb};d.o=function(){return rg(this)};d.n=function(a){this.qb=a;return this};d.y=function(){return Oe(this)};d.Na=function(){return W(this)};function ii(a){return!!(a&&a.$classData&&a.$classData.l.ah)}d.$classData=t({ah:0},!1,"scala.Some",{ah:1,mj:1,b:1,Pa:1,k:1,e:1,d:1});function gk(){T.call(this)}gk.prototype=new cj;gk.prototype.constructor=gk;
function ij(a,b){var c=new gk,e=(new Ng).Bb((new H).ra(["invalid escape "," index ",' in "','". Use \\\\\\\\ for literal \\\\.']));$h(ai(),0<=b&&b<(a.length|0));if(b===(-1+(a.length|0)|0))var f="at terminal";else var f=(new Ng).Bb((new H).ra(["'\\\\","' not one of "," at"])),h=65535&(a.charCodeAt(1+b|0)|0),f=Mg(f,(new H).ra([Ch(h),"[\\b, \\t, \\n, \\f, \\r, \\\\, \\\", \\']"]));a=Mg(e,(new H).ra([f,b,a]));T.prototype.Ma.call(c,a,null);return c}
gk.prototype.$classData=t({tj:0},!1,"scala.StringContext$InvalidEscapeException",{tj:1,xf:1,Mb:1,Lb:1,gb:1,b:1,d:1});function bd(){this.id=null}bd.prototype=new u;bd.prototype.constructor=bd;d=bd.prototype;d.Tf=function(){return!1};d.wd=function(){};d.o=function(){return hi(this)};d.zf=function(a,b){gi(fi(b,a),this.id)};d.Uf=function(){return(new M).n(this.id)};d.$classData=t({zj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$Failed",{zj:1,b:1,Aj:1,hh:1,gh:1,fh:1,ch:1});
function ad(){this.id=null}ad.prototype=new u;ad.prototype.constructor=ad;d=ad.prototype;d.Tf=function(){return!1};d.wd=function(a,b){Nc(this,a,b)};d.o=function(){return hi(this)};d.zf=function(a,b){gi(fi(b,a),this.id)};d.Uf=function(){return(new M).n(this.id)};d.$classData=t({Bj:0},!1,"scala.concurrent.impl.Promise$KeptPromise$Successful",{Bj:1,b:1,Aj:1,hh:1,gh:1,fh:1,ch:1});function dd(){this.ud=null}dd.prototype=new kj;dd.prototype.constructor=dd;d=dd.prototype;d.Ga=function(){return"Failure"};
d.Ea=function(){return 1};d.ha=function(a){if(this===a)return!0;if(Zc(a)){var b=this.ud;a=a.ud;return null===b?null===a:b.ha(a)}return!1};d.Fa=function(a){switch(a){case 0:return this.ud;default:throw(new V).f(""+a);}};d.o=function(){return rg(this)};d.x=function(){};function cd(a,b){a.ud=b;return a}d.y=function(){return Oe(this)};d.Na=function(){return W(this)};function Zc(a){return!!(a&&a.$classData&&a.$classData.l.kh)}d.$classData=t({kh:0},!1,"scala.util.Failure",{kh:1,Df:1,b:1,Pa:1,k:1,e:1,d:1});
function Uc(){this.qb=null}Uc.prototype=new kj;Uc.prototype.constructor=Uc;d=Uc.prototype;d.Ga=function(){return"Success"};d.Ea=function(){return 1};d.ha=function(a){return this===a?!0:a&&a.$classData&&a.$classData.l.Cf?Q(R(),this.qb,a.qb):!1};d.Fa=function(a){switch(a){case 0:return this.qb;default:throw(new V).f(""+a);}};d.o=function(){return rg(this)};d.x=function(a){a.g(this.qb)};d.n=function(a){this.qb=a;return this};d.y=function(){return Oe(this)};d.Na=function(){return W(this)};
d.$classData=t({Cf:0},!1,"scala.util.Success",{Cf:1,Df:1,b:1,Pa:1,k:1,e:1,d:1});function hk(a,b,c){c=c.ye(a.Re());a.x(x(function(a,b,c){return function(a){return c.sb(b.g(a).Qa())}}(a,b,c)));return c.ab()}function ik(a){return a.Oe(a.ec()+"(",", ",")")}
function jk(a){a=Nb(ka(a.Re()));for(var b=-1+(a.length|0)|0;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;if(-1===b||46===(65535&(a.charCodeAt(b)|0)))return"";for(var c="";;){for(var e=1+b|0;;)if(-1!==b&&57>=(65535&(a.charCodeAt(b)|0))&&48<=(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;for(var f=b;;)if(-1!==b&&36!==(65535&(a.charCodeAt(b)|0))&&46!==(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;var h=1+b|0;if(b===f&&e!==(a.length|0))return c;for(;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|
0)))b=-1+b|0;else break;var f=-1===b?!0:46===(65535&(a.charCodeAt(b)|0)),k;(k=f)||(k=65535&(a.charCodeAt(h)|0),k=!(90<k&&127>k||65>k));if(k){e=a.substring(h,e);h=c;if(null===h)throw(new pg).a();c=""===h?e:""+e+Ch(46)+c;if(f)return c}}}function kk(){this.ya=null}kk.prototype=new pi;kk.prototype.constructor=kk;function lk(){}lk.prototype=kk.prototype;function mk(){Aj.call(this)}mk.prototype=new Bj;mk.prototype.constructor=mk;mk.prototype.Lg=function(a){return nk(a)};
mk.prototype.$classData=t({Hk:0},!1,"scala.collection.immutable.HashMap$HashTrieMap$$anon$1",{Hk:1,xl:1,vc:1,b:1,xc:1,q:1,p:1});function ok(){Aj.call(this)}ok.prototype=new Bj;ok.prototype.constructor=ok;ok.prototype.Lg=function(a){return a.Ua};ok.prototype.$classData=t({Mk:0},!1,"scala.collection.immutable.HashSet$HashTrieSet$$anon$1",{Mk:1,xl:1,vc:1,b:1,xc:1,q:1,p:1});function pk(){}pk.prototype=new tj;pk.prototype.constructor=pk;pk.prototype.a=function(){return this};pk.prototype.Ee=function(){return Fg()};
pk.prototype.$classData=t({il:0},!1,"scala.collection.immutable.Set$",{il:1,ph:1,rh:1,nh:1,Xa:1,b:1,Ya:1});var qk=void 0;function Vh(){qk||(qk=(new pk).a());return qk}function rk(){this.ub=null}rk.prototype=new Gj;rk.prototype.constructor=rk;rk.prototype.a=function(){Fj.prototype.a.call(this);return this};rk.prototype.ab=function(){return sk(this)};function sk(a){return tk(a.ub.bb.hb(),x(function(){return function(a){return a.hb()}}(a)))}
function uk(a){return!!(a&&a.$classData&&a.$classData.l.yh)}rk.prototype.$classData=t({yh:0},!1,"scala.collection.immutable.Stream$StreamBuilder",{yh:1,bn:1,b:1,me:1,Bc:1,Ac:1,zc:1});function ni(){this.Rd=this.hd=this.Ld=0;this.Ag=this.xg=this.ug=this.rg=this.og=this.Sd=null}ni.prototype=new u;ni.prototype.constructor=ni;d=ni.prototype;d.r=function(){return this.ug};d.a=function(){this.Sd=p(w(v),[32]);this.Rd=1;this.hd=this.Ld=0;return this};d.jb=function(){return this.Rd};
d.rb=function(a){return vk(this,a)};d.bd=function(a){this.Ag=a};d.sa=function(){return this.Sd};d.fa=function(a){this.rg=a};d.oa=function(){return this.xg};
function vk(a,b){if(a.hd>=a.Sd.c.length){var c=32+a.Ld|0,e=a.Ld^c;if(1024>e)1===a.jb()&&(a.w(p(w(v),[32])),a.j().c[0]=a.sa(),a.Kc(1+a.jb()|0)),a.G(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa();else if(32768>e)2===a.jb()&&(a.fa(p(w(v),[32])),a.m().c[0]=a.j(),a.Kc(1+a.jb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.m().c[31&(c>>>10|0)]=a.j();else if(1048576>e)3===a.jb()&&(a.Aa(p(w(v),[32])),a.r().c[0]=a.m(),a.Kc(1+a.jb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),[32])),
a.j().c[31&(c>>>5|0)]=a.sa(),a.m().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.m();else if(33554432>e)4===a.jb()&&(a.db(p(w(v),[32])),a.oa().c[0]=a.r(),a.Kc(1+a.jb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),[32])),a.Aa(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.m().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.m(),a.oa().c[31&(c>>>20|0)]=a.r();else if(1073741824>e)5===a.jb()&&(a.bd(p(w(v),[32])),a.eb().c[0]=a.oa(),a.Kc(1+a.jb()|0)),a.G(p(w(v),[32])),a.w(p(w(v),[32])),a.fa(p(w(v),
[32])),a.Aa(p(w(v),[32])),a.db(p(w(v),[32])),a.j().c[31&(c>>>5|0)]=a.sa(),a.m().c[31&(c>>>10|0)]=a.j(),a.r().c[31&(c>>>15|0)]=a.m(),a.oa().c[31&(c>>>20|0)]=a.r(),a.eb().c[31&(c>>>25|0)]=a.oa();else throw(new E).a();a.Ld=c;a.hd=0}a.Sd.c[a.hd]=b;a.hd=1+a.hd|0;return a}d.ab=function(){var a;a=this.Ld+this.hd|0;if(0===a)a=Ad().cf;else{var b=(new wk).Je(0,a,0);Tb(b,this,this.Rd);1<this.Rd&&Sb(b,0,-1+a|0);a=b}return a};d.w=function(a){this.og=a};d.dc=function(a,b){sh(this,a,b)};
d.db=function(a){this.xg=a};d.j=function(){return this.og};d.eb=function(){return this.Ag};d.cb=function(a){return vk(this,a)};d.Hb=function(){};d.Kc=function(a){this.Rd=a};d.m=function(){return this.rg};d.G=function(a){this.Sd=a};d.sb=function(a){return df(this,a)};d.Aa=function(a){this.ug=a};d.$classData=t({Al:0},!1,"scala.collection.immutable.VectorBuilder",{Al:1,b:1,me:1,Bc:1,Ac:1,zc:1,Bh:1});
function xk(){this.qf=this.Da=this.Jc=this.pf=0;this.te=!1;this.jf=0;this.Bg=this.yg=this.vg=this.sg=this.pg=this.kf=null}xk.prototype=new Vi;xk.prototype.constructor=xk;d=xk.prototype;
d.ka=function(){if(!this.te)throw(new P).f("reached iterator end");var a=this.kf.c[this.Da];this.Da=1+this.Da|0;if(this.Da===this.qf)if((this.Jc+this.Da|0)<this.pf){var b=32+this.Jc|0,c=this.Jc^b;if(1024>c)this.G(this.j().c[31&(b>>>5|0)]);else if(32768>c)this.w(this.m().c[31&(b>>>10|0)]),this.G(this.j().c[0]);else if(1048576>c)this.fa(this.r().c[31&(b>>>15|0)]),this.w(this.m().c[0]),this.G(this.j().c[0]);else if(33554432>c)this.Aa(this.oa().c[31&(b>>>20|0)]),this.fa(this.r().c[0]),this.w(this.m().c[0]),
this.G(this.j().c[0]);else if(1073741824>c)this.db(this.eb().c[31&(b>>>25|0)]),this.Aa(this.oa().c[0]),this.fa(this.r().c[0]),this.w(this.m().c[0]),this.G(this.j().c[0]);else throw(new E).a();this.Jc=b;b=this.pf-this.Jc|0;this.qf=32>b?b:32;this.Da=0}else this.te=!1;return a};d.r=function(){return this.vg};d.jb=function(){return this.jf};d.bd=function(a){this.Bg=a};d.rc=function(a,b){this.pf=b;this.Jc=-32&a;this.Da=31&a;a=b-this.Jc|0;this.qf=32>a?a:32;this.te=(this.Jc+this.Da|0)<b;return this};
d.sa=function(){return this.kf};d.fa=function(a){this.sg=a};d.oa=function(){return this.yg};d.w=function(a){this.pg=a};d.ia=function(){return this.te};d.db=function(a){this.yg=a};d.j=function(){return this.pg};d.eb=function(){return this.Bg};d.Kc=function(a){this.jf=a};d.m=function(){return this.sg};d.G=function(a){this.kf=a};d.Aa=function(a){this.vg=a};d.$classData=t({Bl:0},!1,"scala.collection.immutable.VectorIterator",{Bl:1,vc:1,b:1,xc:1,q:1,p:1,Bh:1});function yk(){}yk.prototype=new bj;
yk.prototype.constructor=yk;function zk(){}zk.prototype=yk.prototype;yk.prototype.Hi=function(){aj.prototype.Gi.call(this);return this};function Ak(){this.ya=null}Ak.prototype=new lk;Ak.prototype.constructor=Ak;Ak.prototype.a=function(){U.prototype.a.call(this);return this};Ak.prototype.ja=function(){Bk();return(new X).a()};Ak.prototype.$classData=t({uk:0},!1,"scala.collection.Seq$",{uk:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var Ck=void 0;function ac(){Ck||(Ck=(new Ak).a());return Ck}
function Dk(){this.ya=null}Dk.prototype=new lk;Dk.prototype.constructor=Dk;function Ek(){}Ek.prototype=Dk.prototype;function Fk(){}Fk.prototype=new ri;Fk.prototype.constructor=Fk;Fk.prototype.a=function(){Gk=this;ph(new oh,wi(function(){return function(a){return a}}(this)));return this};
function Hk(a,b,c,e,f,h,k){var m=31&(b>>>h|0),n=31&(e>>>h|0);if(m!==n)return a=1<<m|1<<n,b=p(w(Ik),[2]),m<n?(b.c[0]=c,b.c[1]=f):(b.c[0]=f,b.c[1]=c),Jk(new Kk,a,b,k);n=p(w(Ik),[1]);m=1<<m;n.c[0]=Hk(a,b,c,e,f,5+h|0,k);return Jk(new Kk,m,n,k)}Fk.prototype.$classData=t({Ck:0},!1,"scala.collection.immutable.HashMap$",{Ck:1,yk:1,zk:1,wk:1,b:1,Xm:1,e:1,d:1});var Gk=void 0;function Lk(){Gk||(Gk=(new Fk).a());return Gk}function Mk(){this.ya=null}Mk.prototype=new lk;Mk.prototype.constructor=Mk;
Mk.prototype.a=function(){U.prototype.a.call(this);return this};Mk.prototype.ja=function(){return(new X).a()};Mk.prototype.$classData=t({hl:0},!1,"scala.collection.immutable.Seq$",{hl:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var Nk=void 0;function Bk(){Nk||(Nk=(new Mk).a());return Nk}function Ok(){this.ya=null}Ok.prototype=new lk;Ok.prototype.constructor=Ok;Ok.prototype.a=function(){U.prototype.a.call(this);return this};Ok.prototype.ja=function(){return(new Pk).a()};
Ok.prototype.$classData=t({Il:0},!1,"scala.collection.mutable.IndexedSeq$",{Il:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var Qk=void 0;function Rk(){this.ya=null}Rk.prototype=new lk;Rk.prototype.constructor=Rk;Rk.prototype.a=function(){U.prototype.a.call(this);return this};Rk.prototype.ja=function(){return(new H).a()};Rk.prototype.$classData=t({Wl:0},!1,"scala.scalajs.js.WrappedArray$",{Wl:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var Sk=void 0;function Tk(){this.Md=this.Pg=null}Tk.prototype=new zk;
Tk.prototype.constructor=Tk;function Gc(a){var b=new Tk;b.Pg=a;(new dj).a();yk.prototype.Hi.call(b);b.Md="";return b}function Vg(a,b){for(;""!==b;){var c=b.indexOf("\n")|0;if(0>c)a.Md=""+a.Md+b,b="";else{var e=""+a.Md+b.substring(0,c);g.console&&(a.Pg&&g.console.error?g.console.error(e):g.console.log(e));a.Md="";b=b.substring(1+c|0)}}}Tk.prototype.$classData=t({Zi:0},!1,"java.lang.JSConsoleBasedPrintStream",{Zi:1,Bm:1,Am:1,Di:1,b:1,Bi:1,Li:1,Ci:1,Ji:1});function zg(){this.na=null}zg.prototype=new Ph;
zg.prototype.constructor=zg;function Uk(a,b){for(;;){var c;b:for(c=b;;){var e=c.na;if(Vk(e))c=e;else break b}if(b===c||Qh(a,b,c))return c;b=a.na;if(!Vk(b))return a}}d=zg.prototype;d.a=function(){Oh.prototype.n.call(this,K());return this};d.wd=function(a,b){Nc(this,a,b)};
d.Tf=function(a){Xc||(Xc=(new Yc).a());a=Zc(a)?$c(a.ud):a;var b;a:for(b=this;;){var c=b.na;if($g(c)){if(Qh(b,c,a)){b=c;break a}}else if(Vk(c))b=Uk(b,c);else{b=null;break a}}if(null!==b){if(!b.i())for(;!b.i();)gi(b.qa(),a),b=b.nc();return!0}return!1};d.o=function(){return hi(this)};d.zf=function(a,b){a=fi(b,a);b=this;a:for(;;){var c=b.na;if(c&&c.$classData&&c.$classData.l.Df)gi(a,c);else{if(Vk(c)){b=Uk(b,c);continue a}if(!$g(c))throw(new y).n(c);if(!Qh(b,c,Wk(new Xk,a,c)))continue a}break}};
d.Uf=function(){var a;a:for(a=this;;){var b=a.na;if(b&&b.$classData&&b.$classData.l.Df){a=(new M).n(b);break a}if(Vk(b))a=Uk(a,b);else{a=L();break a}}return a};function Vk(a){return!!(a&&a.$classData&&a.$classData.l.ih)}d.$classData=t({ih:0},!1,"scala.concurrent.impl.Promise$DefaultPromise",{ih:1,Hm:1,b:1,e:1,d:1,hh:1,gh:1,fh:1,ch:1});function Yk(){this.Sa=null}Yk.prototype=new u;Yk.prototype.constructor=Yk;function Zk(){}Zk.prototype=Yk.prototype;Yk.prototype.ha=function(a){return this===a};
Yk.prototype.o=function(){return this.Sa};Yk.prototype.y=function(){return Ca(this)};function $k(){}$k.prototype=new u;$k.prototype.constructor=$k;function al(){}al.prototype=$k.prototype;function bl(){this.bg=this.ya=null}bl.prototype=new Ek;bl.prototype.constructor=bl;bl.prototype.a=function(){U.prototype.a.call(this);cl=this;this.bg=(new li).a();return this};bl.prototype.ja=function(){mi();Ad();return(new ni).a()};
bl.prototype.$classData=t({mk:0},!1,"scala.collection.IndexedSeq$",{mk:1,qh:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var cl=void 0;function pd(){cl||(cl=(new bl).a());return cl}function dl(){this.yd=this.of=0;this.Ab=null}dl.prototype=new Vi;dl.prototype.constructor=dl;dl.prototype.ka=function(){this.yd>=this.of&&J().kb.ka();var a=this.Ab.Ja(this.yd);this.yd=1+this.yd|0;return a};function Y(a,b){var c=new dl;c.of=b;if(null===a)throw jf(C(),null);c.Ab=a;c.yd=0;return c}
dl.prototype.ia=function(){return this.yd<this.of};dl.prototype.$classData=t({ok:0},!1,"scala.collection.IndexedSeqLike$Elements",{ok:1,vc:1,b:1,xc:1,q:1,p:1,Vm:1,e:1,d:1});function el(){}el.prototype=new tj;el.prototype.constructor=el;el.prototype.a=function(){return this};
function fl(a,b,c,e,f,h){var k=31&(b>>>h|0),m=31&(e>>>h|0);if(k!==m)return a=1<<k|1<<m,b=p(w(gl),[2]),k<m?(b.c[0]=c,b.c[1]=f):(b.c[0]=f,b.c[1]=c),hl(new il,a,b,c.u()+f.u()|0);m=p(w(gl),[1]);k=1<<k;c=fl(a,b,c,e,f,5+h|0);m.c[0]=c;return hl(new il,k,m,c.Dc)}el.prototype.Ee=function(){return jl()};el.prototype.$classData=t({Jk:0},!1,"scala.collection.immutable.HashSet$",{Jk:1,ph:1,rh:1,nh:1,Xa:1,b:1,Ya:1,e:1,d:1});var kl=void 0;function ll(){kl||(kl=(new el).a());return kl}
function ml(){this.ya=null}ml.prototype=new Ek;ml.prototype.constructor=ml;ml.prototype.a=function(){U.prototype.a.call(this);return this};ml.prototype.ja=function(){Ad();return(new ni).a()};ml.prototype.$classData=t({Pk:0},!1,"scala.collection.immutable.IndexedSeq$",{Pk:1,qh:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1});var nl=void 0;function mi(){nl||(nl=(new ml).a());return nl}function ol(){}ol.prototype=new tj;ol.prototype.constructor=ol;ol.prototype.a=function(){return this};ol.prototype.Ee=function(){return pl()};
ol.prototype.$classData=t({Xk:0},!1,"scala.collection.immutable.ListSet$",{Xk:1,ph:1,rh:1,nh:1,Xa:1,b:1,Ya:1,e:1,d:1});var ql=void 0;function cg(){T.call(this);this.Lc=null}cg.prototype=new Gi;cg.prototype.constructor=cg;d=cg.prototype;d.Ga=function(){return"JavaScriptException"};d.Ea=function(){return 1};d.He=function(){this.stackdata=this.Lc;return this};d.ha=function(a){return this===a?!0:ag(a)?Q(R(),this.Lc,a.Lc):!1};
d.Fa=function(a){switch(a){case 0:return this.Lc;default:throw(new V).f(""+a);}};d.sf=function(){return ja(this.Lc)};d.n=function(a){this.Lc=a;T.prototype.Ma.call(this,null,null);return this};d.y=function(){return Oe(this)};d.Na=function(){return W(this)};function ag(a){return!!(a&&a.$classData&&a.$classData.l.Jh)}d.$classData=t({Jh:0},!1,"scala.scalajs.js.JavaScriptException",{Jh:1,Mb:1,Lb:1,gb:1,b:1,d:1,Pa:1,k:1,e:1});function le(){this.Sa=null}le.prototype=new Zk;le.prototype.constructor=le;
le.prototype.a=function(){this.Sa="Boolean";return this};le.prototype.$classData=t({Pj:0},!1,"scala.reflect.ManifestFactory$BooleanManifest$",{Pj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ke=void 0;function Yd(){this.Sa=null}Yd.prototype=new Zk;Yd.prototype.constructor=Yd;Yd.prototype.a=function(){this.Sa="Byte";return this};Yd.prototype.$classData=t({Qj:0},!1,"scala.reflect.ManifestFactory$ByteManifest$",{Qj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var Xd=void 0;
function be(){this.Sa=null}be.prototype=new Zk;be.prototype.constructor=be;be.prototype.a=function(){this.Sa="Char";return this};be.prototype.$classData=t({Rj:0},!1,"scala.reflect.ManifestFactory$CharManifest$",{Rj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ae=void 0;function je(){this.Sa=null}je.prototype=new Zk;je.prototype.constructor=je;je.prototype.a=function(){this.Sa="Double";return this};
je.prototype.$classData=t({Sj:0},!1,"scala.reflect.ManifestFactory$DoubleManifest$",{Sj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ie=void 0;function he(){this.Sa=null}he.prototype=new Zk;he.prototype.constructor=he;he.prototype.a=function(){this.Sa="Float";return this};he.prototype.$classData=t({Tj:0},!1,"scala.reflect.ManifestFactory$FloatManifest$",{Tj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ge=void 0;function de(){this.Sa=null}de.prototype=new Zk;de.prototype.constructor=de;
de.prototype.a=function(){this.Sa="Int";return this};de.prototype.$classData=t({Uj:0},!1,"scala.reflect.ManifestFactory$IntManifest$",{Uj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ce=void 0;function fe(){this.Sa=null}fe.prototype=new Zk;fe.prototype.constructor=fe;fe.prototype.a=function(){this.Sa="Long";return this};fe.prototype.$classData=t({Vj:0},!1,"scala.reflect.ManifestFactory$LongManifest$",{Vj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ee=void 0;function rl(){this.fc=null}
rl.prototype=new al;rl.prototype.constructor=rl;function sl(){}sl.prototype=rl.prototype;rl.prototype.ha=function(a){return this===a};rl.prototype.o=function(){return this.fc};rl.prototype.y=function(){return Ca(this)};function $d(){this.Sa=null}$d.prototype=new Zk;$d.prototype.constructor=$d;$d.prototype.a=function(){this.Sa="Short";return this};$d.prototype.$classData=t({Zj:0},!1,"scala.reflect.ManifestFactory$ShortManifest$",{Zj:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var Zd=void 0;
function ne(){this.Sa=null}ne.prototype=new Zk;ne.prototype.constructor=ne;ne.prototype.a=function(){this.Sa="Unit";return this};ne.prototype.$classData=t({$j:0},!1,"scala.reflect.ManifestFactory$UnitManifest$",{$j:1,Sc:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var me=void 0;function tl(a,b){a=a.s();for(b=b.s();a.ia()&&b.ia();)if(!Q(R(),a.ka(),b.ka()))return!1;return!a.ia()&&!b.ia()}function ul(){this.ya=null}ul.prototype=new lk;ul.prototype.constructor=ul;
ul.prototype.a=function(){U.prototype.a.call(this);vl=this;(new rh).a();return this};ul.prototype.Ud=function(){return K()};ul.prototype.ja=function(){return(new X).a()};ul.prototype.$classData=t({Rk:0},!1,"scala.collection.immutable.List$",{Rk:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1,e:1,d:1});var vl=void 0;function qd(){vl||(vl=(new ul).a());return vl}function wl(){this.ya=null}wl.prototype=new lk;wl.prototype.constructor=wl;wl.prototype.a=function(){U.prototype.a.call(this);return this};
wl.prototype.Ud=function(){return fh()};wl.prototype.ja=function(){return(new rk).a()};wl.prototype.$classData=t({pl:0},!1,"scala.collection.immutable.Stream$",{pl:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1,e:1,d:1});var xl=void 0;function xd(){xl||(xl=(new wl).a());return xl}function yl(){this.ya=null}yl.prototype=new lk;yl.prototype.constructor=yl;yl.prototype.a=function(){U.prototype.a.call(this);return this};yl.prototype.ja=function(){return(new Pk).a()};
yl.prototype.$classData=t({Fl:0},!1,"scala.collection.mutable.ArrayBuffer$",{Fl:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1,e:1,d:1});var zl=void 0;function Al(){this.ya=null}Al.prototype=new lk;Al.prototype.constructor=Al;Al.prototype.a=function(){U.prototype.a.call(this);return this};Al.prototype.ja=function(){return Zi(new Yi,(new X).a())};Al.prototype.$classData=t({Kl:0},!1,"scala.collection.mutable.ListBuffer$",{Kl:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1,e:1,d:1});var Bl=void 0;
function pe(){this.fc=null}pe.prototype=new sl;pe.prototype.constructor=pe;pe.prototype.a=function(){this.fc="Any";L();K();q(v);return this};pe.prototype.$classData=t({Nj:0},!1,"scala.reflect.ManifestFactory$AnyManifest$",{Nj:1,Te:1,Se:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var oe=void 0;function te(){this.fc=null}te.prototype=new sl;te.prototype.constructor=te;te.prototype.a=function(){this.fc="AnyVal";L();K();q(v);return this};
te.prototype.$classData=t({Oj:0},!1,"scala.reflect.ManifestFactory$AnyValManifest$",{Oj:1,Te:1,Se:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var se=void 0;function ve(){this.fc=null}ve.prototype=new sl;ve.prototype.constructor=ve;ve.prototype.a=function(){this.fc="Nothing";L();K();q(Ci);return this};ve.prototype.$classData=t({Wj:0},!1,"scala.reflect.ManifestFactory$NothingManifest$",{Wj:1,Te:1,Se:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var ue=void 0;function xe(){this.fc=null}xe.prototype=new sl;
xe.prototype.constructor=xe;xe.prototype.a=function(){this.fc="Null";L();K();q(lg);return this};xe.prototype.$classData=t({Xj:0},!1,"scala.reflect.ManifestFactory$NullManifest$",{Xj:1,Te:1,Se:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var we=void 0;function re(){this.fc=null}re.prototype=new sl;re.prototype.constructor=re;re.prototype.a=function(){this.fc="Object";L();K();q(v);return this};
re.prototype.$classData=t({Yj:0},!1,"scala.reflect.ManifestFactory$ObjectManifest$",{Yj:1,Te:1,Se:1,b:1,xb:1,wb:1,vb:1,mb:1,e:1,d:1,k:1});var qe=void 0;function Cl(a){return!!(a&&a.$classData&&a.$classData.l.ic)}function Dl(){this.cf=this.ya=null}Dl.prototype=new Ek;Dl.prototype.constructor=Dl;Dl.prototype.a=function(){U.prototype.a.call(this);El=this;this.cf=(new wk).Je(0,0,0);return this};Dl.prototype.Ud=function(){return this.cf};Dl.prototype.ja=function(){return(new ni).a()};
Dl.prototype.$classData=t({zl:0},!1,"scala.collection.immutable.Vector$",{zl:1,qh:1,mc:1,lc:1,nb:1,Xa:1,b:1,ob:1,Ya:1,e:1,d:1});var El=void 0;function Ad(){El||(El=(new Dl).a());return El}function Fl(){}Fl.prototype=new u;Fl.prototype.constructor=Fl;function Gl(){}d=Gl.prototype=Fl.prototype;d.Oe=function(a,b,c){return Ue(this,a,b,c)};d.Vc=function(){return-1};d.od=function(a,b,c,e){return We(this,a,b,c,e)};d.Re=function(){return this};d.ja=function(){return this.Wa().ja()};d.ec=function(){return jk(this)};
function Hl(a,b,c,e){if(0>b)throw(new V).f(""+b);e=e.ye(a.Re());var f=0;for(a=a.s();f<b&&a.ia();)e.cb(a.ka()),f=1+f|0;if(!a.ia())throw(new V).f(""+b);e.cb(c);for(a.ka();a.ia();)e.cb(a.ka());return e.ab()}function Il(a,b){return a.xa()-b|0}function Jl(a,b){if(b&&b.$classData&&b.$classData.l.ie){var c=a.xa();if(c===b.xa()){for(var e=0;e<c&&Q(R(),a.Ja(e),b.Ja(e));)e=1+e|0;return e===c}return!1}return tl(a,b)}function Kl(a,b){for(var c=0,e=a.xa();c<e;)b.g(a.Ja(c)),c=1+c|0}
function Ll(a,b,c,e){var f=0,h=c,k=a.xa();e=k<e?k:e;c=ng(sg(),b)-c|0;for(c=e<c?e:c;f<c;)qg(sg(),b,h,a.Ja(f)),f=1+f|0,h=1+h|0}function Ml(a,b){if(b&&b.$classData&&b.$classData.l.je){if(a===b)return!0;for(;!a.i()&&!b.i()&&Q(R(),a.qa(),b.qa());)a=a.$(),b=b.$();return a.i()&&b.i()}return tl(a,b)}function Nl(a,b){a=a.Dg(b);if(0>b||a.i())throw(new V).f(""+b);return a.qa()}function Ol(a){if(a.i())throw(new P).a();for(var b=a.$();!b.i();)a=b,b=b.$();return a.qa()}
function Pl(a,b){var c=0;for(;;){if(c===b)return a.i()?0:1;if(a.i())return-1;c=1+c|0;a=a.$()}}function Ql(a,b,c,e,f){var h=a.s();a=nj(new mj,h,x(function(){return function(a){if(null!==a){var b=a.Ia;a=a.Ta;Mc||(Mc=(new Lc).a());return""+(""+Mf(r(),b)+" -\x3e ")+a}throw(new y).n(a);}}(a)));return We(a,b,c,e,f)}function Rl(){}Rl.prototype=new Gl;Rl.prototype.constructor=Rl;function Sl(){}d=Sl.prototype=Rl.prototype;d.Eb=function(a){return tl(this,a)};d.Xd=function(a){var b=this.s();return ah(b,a)};
d.x=function(a){var b=this.s();bh(b,a)};d.hb=function(){return this.s().hb()};d.rd=function(a,b,c){var e=b;b=b+c|0;c=ng(sg(),a);b=b<c?b:c;for(c=this.s();e<b&&c.ia();)qg(sg(),a,e,c.ka()),e=1+e|0};var Ej=t({ga:0},!0,"scala.collection.immutable.Iterable",{ga:1,ma:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,la:1,W:1,R:1,H:1,L:1,k:1});function Rg(){this.Oa=null}Rg.prototype=new u;Rg.prototype.constructor=Rg;d=Rg.prototype;d.Qa=function(){return(new rf).f(this.Oa)};
d.Ja=function(a){a=65535&(this.Oa.charCodeAt(a)|0);return Ch(a)};d.tc=function(a){return Il(this,a)};d.Eb=function(a){return Jl(this,a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return(new rf).f(this.Oa)};d.ha=function(a){nf||(nf=(new mf).a());return a&&a.$classData&&a.$classData.l.Ah?this.Oa===(null===a?null:a.Oa):!1};d.Oe=function(a,b,c){return Ue(this,a,b,c)};d.o=function(){return this.Oa};d.x=function(a){Kl(this,a)};d.s=function(){return Y(this,this.Oa.length|0)};
d.xa=function(){return this.Oa.length|0};d.Vc=function(){return this.Oa.length|0};d.hb=function(){var a=Y(this,this.Oa.length|0);return ch(a)};d.od=function(a,b,c,e){return We(this,a,b,c,e)};d.Re=function(){return this.Oa};d.rd=function(a,b,c){Ll(this,a,b,c)};d.y=function(){var a=this.Oa;return za(r(),a)};d.f=function(a){this.Oa=a;return this};d.ja=function(){return(new Ve).a()};d.ec=function(){return jk(this)};
d.$classData=t({Ah:0},!1,"scala.collection.immutable.StringOps",{Ah:1,b:1,zh:1,Ve:1,Ad:1,kc:1,L:1,k:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,H:1,jc:1,jh:1,Db:1});function Tl(){}Tl.prototype=new Sl;Tl.prototype.constructor=Tl;function Ul(){}d=Ul.prototype=Tl.prototype;d.ha=function(a){return Cl(a)?this.Eb(a):!1};d.i=function(){return 0===this.tc(0)};d.o=function(){return ik(this)};d.Qh=function(a,b,c){return Hl(this,a,b,c)};d.y=function(){return Zg(Pe(),this.Uc())};function Vl(){}Vl.prototype=new Sl;
Vl.prototype.constructor=Vl;function Wl(){}d=Wl.prototype=Vl.prototype;d.g=function(a){var b=this.Kb(a);if(L()===b)throw(new P).f("key not found: "+a);if(ii(b))a=b.qb;else throw(new y).n(b);return a};
d.ha=function(a){if(a&&a.$classData&&a.$classData.l.Fb){var b;if(!(b=this===a)&&(b=this.u()===a.u()))try{for(var c=this.s(),e=!0;e&&c.ia();){var f=c.ka();if(null===f)throw(new y).n(f);var h=f.Ta,k=a.Kb(f.Ia);b:{if(ii(k)){var m=k.qb;if(Q(R(),h,m)){e=!0;break b}}e=!1}}b=e}catch(n){if(n&&n.$classData&&n.$classData.l.Qi)b=!1;else throw n;}a=b}else a=!1;return a};d.i=function(){return 0===this.u()};d.o=function(){return ik(this)};d.od=function(a,b,c,e){return Ql(this,a,b,c,e)};d.Ka=function(a){return!this.Kb(a).i()};
d.y=function(){var a=Pe();return Ke(a,this.Rf(),a.Wg)};d.ec=function(){return"Map"};d.ja=function(){return oc(new pc,this.mf())};function Xl(){}Xl.prototype=new Sl;Xl.prototype.constructor=Xl;function Yl(){}d=Yl.prototype=Xl.prototype;d.ha=function(a){if(a&&a.$classData&&a.$classData.l.Gb){var b;if(!(b=this===a)&&(b=this.u()===a.u()))try{b=this.Oh(a)}catch(c){if(c&&c.$classData&&c.$classData.l.Qi)b=!1;else throw c;}a=b}else a=!1;return a};d.i=function(){return 0===this.u()};d.o=function(){return ik(this)};
d.Oh=function(a){return this.Xd(a)};d.y=function(){var a=Pe();return Ke(a,this,a.Ih)};d.ec=function(){return"Set"};d.ja=function(){return uj(new vj,this.cd())};function Zl(){}Zl.prototype=new Wl;Zl.prototype.constructor=Zl;function $l(){}d=$l.prototype=Zl.prototype;d.Qa=function(){return this};d.Ra=function(){return this};d.Wa=function(){return lj()};d.mf=function(){return this.nf()};d.nf=function(){return qc()};d.Rf=function(){return this};function am(){}am.prototype=new Yl;
am.prototype.constructor=am;function bm(){}d=bm.prototype=am.prototype;d.Qa=function(){return this};d.zd=function(){throw(new P).f("next of empty set");};d.g=function(a){return this.Ka(a)};d.i=function(){return!0};d.Ra=function(){return this};d.Wa=function(){ql||(ql=(new ol).a());return ql};d.Id=function(a){return cm(new dm,this,a)};d.u=function(){return 0};d.s=function(){var a=em(this);return pj(a)};d.Gc=function(a){return this.$e(a)};d.cd=function(){return pl()};
function em(a){for(var b=K();!a.i();){var c=a.Td(),b=Wk(new Xk,c,b);a=a.zd()}return b}d.Ka=function(){return!1};d.Td=function(){throw(new P).f("elem of empty set");};d.$e=function(){return this};d.oc=function(a){return this.Id(a)};d.ec=function(){return"ListSet"};function fm(){}fm.prototype=new Yl;fm.prototype.constructor=fm;d=fm.prototype;d.Qa=function(){return this};d.a=function(){return this};d.g=function(){return!1};d.Ra=function(){return this};d.Wa=function(){return Vh()};d.x=function(){};
d.u=function(){return 0};d.s=function(){return J().kb};d.Gc=function(){return this};d.cd=function(){return Fg()};d.oc=function(a){return(new gm).n(a)};d.$classData=t({jl:0},!1,"scala.collection.immutable.Set$EmptySet$",{jl:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});var hm=void 0;function Fg(){hm||(hm=(new fm).a());return hm}function gm(){this.A=null}gm.prototype=new Yl;gm.prototype.constructor=gm;
d=gm.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};d.Wa=function(){return Vh()};d.Xd=function(a){return!!a.g(this.A)};d.x=function(a){a.g(this.A)};d.u=function(){return 1};d.n=function(a){this.A=a;return this};d.s=function(){J();var a=(new H).ra([this.A]);return Y(a,a.ea.length|0)};d.Gc=function(a){return this.Yc(a)};d.cd=function(){return Fg()};d.$c=function(a){return this.Ka(a)?this:(new im).h(this.A,a)};d.Ka=function(a){return Q(R(),a,this.A)};
d.oc=function(a){return this.$c(a)};d.Yc=function(a){return Q(R(),a,this.A)?Fg():this};d.$classData=t({kl:0},!1,"scala.collection.immutable.Set$Set1",{kl:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});function im(){this.pa=this.A=null}im.prototype=new Yl;im.prototype.constructor=im;d=im.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};
d.h=function(a,b){this.A=a;this.pa=b;return this};d.Wa=function(){return Vh()};d.Xd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)};d.x=function(a){a.g(this.A);a.g(this.pa)};d.u=function(){return 2};d.s=function(){J();var a=(new H).ra([this.A,this.pa]);return Y(a,a.ea.length|0)};d.Gc=function(a){return this.Yc(a)};d.cd=function(){return Fg()};d.$c=function(a){return this.Ka(a)?this:jm(this.A,this.pa,a)};d.Ka=function(a){return Q(R(),a,this.A)||Q(R(),a,this.pa)};d.oc=function(a){return this.$c(a)};
d.Yc=function(a){return Q(R(),a,this.A)?(new gm).n(this.pa):Q(R(),a,this.pa)?(new gm).n(this.A):this};d.$classData=t({ll:0},!1,"scala.collection.immutable.Set$Set2",{ll:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});function km(){this.La=this.pa=this.A=null}km.prototype=new Yl;km.prototype.constructor=km;d=km.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};
d.Wa=function(){return Vh()};d.Xd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)&&!!a.g(this.La)};d.x=function(a){a.g(this.A);a.g(this.pa);a.g(this.La)};function jm(a,b,c){var e=new km;e.A=a;e.pa=b;e.La=c;return e}d.u=function(){return 3};d.s=function(){J();var a=(new H).ra([this.A,this.pa,this.La]);return Y(a,a.ea.length|0)};d.Gc=function(a){return this.Yc(a)};d.cd=function(){return Fg()};d.$c=function(a){return this.Ka(a)?this:(new lm).Zd(this.A,this.pa,this.La,a)};
d.Ka=function(a){return Q(R(),a,this.A)||Q(R(),a,this.pa)||Q(R(),a,this.La)};d.oc=function(a){return this.$c(a)};d.Yc=function(a){return Q(R(),a,this.A)?(new im).h(this.pa,this.La):Q(R(),a,this.pa)?(new im).h(this.A,this.La):Q(R(),a,this.La)?(new im).h(this.A,this.pa):this};d.$classData=t({ml:0},!1,"scala.collection.immutable.Set$Set3",{ml:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});
function lm(){this.gc=this.La=this.pa=this.A=null}lm.prototype=new Yl;lm.prototype.constructor=lm;d=lm.prototype;d.Qa=function(){return this};d.g=function(a){return this.Ka(a)};d.Ra=function(){return this};d.Wa=function(){return Vh()};d.Xd=function(a){return!!a.g(this.A)&&!!a.g(this.pa)&&!!a.g(this.La)&&!!a.g(this.gc)};d.x=function(a){a.g(this.A);a.g(this.pa);a.g(this.La);a.g(this.gc)};d.u=function(){return 4};
d.s=function(){J();var a=(new H).ra([this.A,this.pa,this.La,this.gc]);return Y(a,a.ea.length|0)};d.Gc=function(a){return this.Yc(a)};d.cd=function(){return Fg()};d.$c=function(a){return this.Ka(a)?this:mm(mm(mm(mm(mm((new nm).a(),this.A),this.pa),this.La),this.gc),a)};d.Ka=function(a){return Q(R(),a,this.A)||Q(R(),a,this.pa)||Q(R(),a,this.La)||Q(R(),a,this.gc)};d.Zd=function(a,b,c,e){this.A=a;this.pa=b;this.La=c;this.gc=e;return this};d.oc=function(a){return this.$c(a)};
d.Yc=function(a){return Q(R(),a,this.A)?jm(this.pa,this.La,this.gc):Q(R(),a,this.pa)?jm(this.A,this.La,this.gc):Q(R(),a,this.La)?jm(this.A,this.pa,this.gc):Q(R(),a,this.gc)?jm(this.A,this.pa,this.La):this};d.$classData=t({nl:0},!1,"scala.collection.immutable.Set$Set4",{nl:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});function nm(){}nm.prototype=new Yl;nm.prototype.constructor=nm;function om(){}
d=om.prototype=nm.prototype;d.qe=function(a,b){return pm(new qm,a,b)};d.ad=function(a){return this.wf(Me(Ne(),a))};d.Qa=function(){return this};d.a=function(){return this};d.g=function(a){return this.Ka(a)};function mm(a,b){return a.qe(b,a.ad(b),0)}d.Ra=function(){return this};d.Wa=function(){return ll()};d.x=function(){};d.Oh=function(a){if(a&&a.$classData&&a.$classData.l.Cd)return this.pe(a,0);var b=this.s();return ah(b,a)};d.u=function(){return 0};d.s=function(){return J().kb};
d.Gc=function(a){a=this.ge(a,this.ad(a),0);return null===a?jl():a};d.ge=function(){return this};d.cd=function(){return jl()};d.wf=function(a){a=a+~(a<<9)|0;a^=a>>>14|0;a=a+(a<<4)|0;return a^(a>>>10|0)};d.Ka=function(a){return this.Mc(a,this.ad(a),0)};d.Mc=function(){return!1};d.oc=function(a){return mm(this,a)};d.pe=function(){return!0};
var gl=t({Cd:0},!1,"scala.collection.immutable.HashSet",{Cd:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,Rb:1,e:1,d:1});nm.prototype.$classData=gl;function rm(){}rm.prototype=new bm;rm.prototype.constructor=rm;rm.prototype.a=function(){return this};
rm.prototype.$classData=t({Yk:0},!1,"scala.collection.immutable.ListSet$EmptyListSet$",{Yk:1,Wk:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});var sm=void 0;function pl(){sm||(sm=(new rm).a());return sm}function dm(){this.Wf=this.Eg=null}dm.prototype=new bm;dm.prototype.constructor=dm;d=dm.prototype;d.zd=function(){return this.Wf};d.i=function(){return!1};
d.Id=function(a){return tm(this,a)?this:cm(new dm,this,a)};d.u=function(){a:{var a=this,b=0;for(;;){if(a.i())break a;a=a.zd();b=1+b|0}}return b};function um(a,b){var c=K();for(;;){if(b.i())return Ol(c);if(Q(R(),a,b.Td())){b=b.zd();for(a=c;!a.i();)c=a.qa(),b=cm(new dm,b,c.Td()),a=a.$();return b}var e=b.zd(),c=Wk(new Xk,b,c);b=e}}d.Gc=function(a){return um(a,this)};function cm(a,b,c){a.Eg=c;if(null===b)throw jf(C(),null);a.Wf=b;return a}d.Td=function(){return this.Eg};
d.Ka=function(a){return tm(this,a)};d.$e=function(a){return um(a,this)};function tm(a,b){for(;;){if(a.i())return!1;if(Q(R(),a.Td(),b))return!0;a=a.zd()}}d.oc=function(a){return this.Id(a)};d.$classData=t({Zk:0},!1,"scala.collection.immutable.ListSet$Node",{Zk:1,Wk:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,e:1,d:1});function vm(){}vm.prototype=new Ul;vm.prototype.constructor=vm;function wm(){}
wm.prototype=vm.prototype;vm.prototype.Qa=function(){return this.Ye()};vm.prototype.Ye=function(){return this};function xm(){}xm.prototype=new om;xm.prototype.constructor=xm;xm.prototype.a=function(){return this};xm.prototype.$classData=t({Kk:0},!1,"scala.collection.immutable.HashSet$EmptyHashSet$",{Kk:1,Cd:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,Rb:1,e:1,d:1});var ym=void 0;
function jl(){ym||(ym=(new xm).a());return ym}function il(){this.ib=0;this.ta=null;this.Dc=0}il.prototype=new om;il.prototype.constructor=il;d=il.prototype;
d.qe=function(a,b,c){var e=1<<(31&(b>>>c|0)),f=Mh(Tg(),this.ib&(-1+e|0));if(0!==(this.ib&e)){e=this.ta.c[f];a=e.qe(a,b,5+c|0);if(e===a)return this;b=p(w(gl),[this.ta.c.length]);Ni(Pi(),this.ta,0,b,0,this.ta.c.length);b.c[f]=a;return hl(new il,this.ib,b,this.Dc+(a.u()-e.u()|0)|0)}c=p(w(gl),[1+this.ta.c.length|0]);Ni(Pi(),this.ta,0,c,0,f);c.c[f]=pm(new qm,a,b);Ni(Pi(),this.ta,f,c,1+f|0,this.ta.c.length-f|0);return hl(new il,this.ib|e,c,1+this.Dc|0)};
d.x=function(a){for(var b=0;b<this.ta.c.length;)this.ta.c[b].x(a),b=1+b|0};d.u=function(){return this.Dc};d.s=function(){var a=new ok;Aj.prototype.Ng.call(a,this.ta);return a};
d.ge=function(a,b,c){var e=1<<(31&(b>>>c|0)),f=Mh(Tg(),this.ib&(-1+e|0));if(0!==(this.ib&e)){var h=this.ta.c[f];a=h.ge(a,b,5+c|0);return h===a?this:null===a?(e^=this.ib,0!==e?(a=p(w(gl),[-1+this.ta.c.length|0]),Ni(Pi(),this.ta,0,a,0,f),Ni(Pi(),this.ta,1+f|0,a,f,-1+(this.ta.c.length-f|0)|0),f=this.Dc-h.u()|0,1!==a.c.length||Cj(a.c[0])?hl(new il,e,a,f):a.c[0]):null):1!==this.ta.c.length||Cj(a)?(e=p(w(gl),[this.ta.c.length]),Ni(Pi(),this.ta,0,e,0,this.ta.c.length),e.c[f]=a,f=this.Dc+(a.u()-h.u()|0)|
0,hl(new il,this.ib,e,f)):a}return this};function hl(a,b,c,e){a.ib=b;a.ta=c;a.Dc=e;ai();if(Mh(Tg(),b)!==c.c.length)throw(new Fi).n("assertion failed");return a}d.Mc=function(a,b,c){var e=31&(b>>>c|0),f=1<<e;return-1===this.ib?this.ta.c[31&e].Mc(a,b,5+c|0):0!==(this.ib&f)?(e=Mh(Tg(),this.ib&(-1+f|0)),this.ta.c[e].Mc(a,b,5+c|0)):!1};
d.pe=function(a,b){if(a===this)return!0;if(Cj(a)&&this.Dc<=a.Dc){var c=this.ib,e=this.ta,f=0,h=a.ta;a=a.ib;var k=0;if((c&a)===c){for(;0!==c;){var m=c^c&(-1+c|0),n=a^a&(-1+a|0);if(m===n){if(!e.c[f].pe(h.c[k],5+b|0))return!1;c&=~m;f=1+f|0}a&=~n;k=1+k|0}return!0}}return!1};function Cj(a){return!!(a&&a.$classData&&a.$classData.l.vh)}
d.$classData=t({vh:0},!1,"scala.collection.immutable.HashSet$HashTrieSet",{vh:1,Cd:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,Rb:1,e:1,d:1});function zm(){}zm.prototype=new om;zm.prototype.constructor=zm;function Am(){}Am.prototype=zm.prototype;function Bm(){}Bm.prototype=new $l;Bm.prototype.constructor=Bm;function Cm(){}d=Cm.prototype=Bm.prototype;d.Gd=function(){throw(new P).f("value of empty map");};
d.i=function(){return!0};d.Ra=function(){return this};d.mf=function(){return Dm()};d.nf=function(){return Dm()};d.u=function(){return 0};d.Rf=function(){return this};d.se=function(a){return Em(new Fm,this,a.Ia,a.Ta)};d.s=function(){var a=Gm(this);return pj(a)};d.fd=function(){throw(new P).f("key of empty map");};d.zb=function(a,b){return this.re(a,b)};d.re=function(a,b){return Em(new Fm,this,a,b)};d.Kb=function(){return L()};
function Gm(a){for(var b=K();!a.i();){var c=(new I).h(a.fd(),a.Gd()),b=Wk(new Xk,c,b);a=a.Oc()}return b}d.Oc=function(){throw(new P).f("next of empty map");};d.Hc=function(a){return this.se(a)};d.ec=function(){return"ListMap"};function Hm(){}Hm.prototype=new $l;Hm.prototype.constructor=Hm;d=Hm.prototype;d.a=function(){return this};d.g=function(a){throw(new P).f("key not found: "+a);};d.u=function(){return 0};d.s=function(){return J().kb};d.zb=function(a,b){return(new Im).h(a,b)};d.Kb=function(){return L()};
d.Hc=function(a){return(new Im).h(a.Ia,a.Ta)};d.$classData=t({al:0},!1,"scala.collection.immutable.Map$EmptyMap$",{al:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});var Jm=void 0;function qc(){Jm||(Jm=(new Hm).a());return Jm}function Im(){this.ca=this.t=null}Im.prototype=new $l;Im.prototype.constructor=Im;d=Im.prototype;
d.g=function(a){if(Q(R(),a,this.t))return this.ca;throw(new P).f("key not found: "+a);};d.h=function(a,b){this.t=a;this.ca=b;return this};d.x=function(a){a.g((new I).h(this.t,this.ca))};d.u=function(){return 1};d.s=function(){J();var a=(new H).ra([(new I).h(this.t,this.ca)]);return Y(a,a.ea.length|0)};d.zb=function(a,b){return Q(R(),a,this.t)?(new Im).h(this.t,b):(new Km).Zd(this.t,this.ca,a,b)};d.Kb=function(a){return Q(R(),a,this.t)?(new M).n(this.ca):L()};d.Hc=function(a){return this.zb(a.Ia,a.Ta)};
d.$classData=t({bl:0},!1,"scala.collection.immutable.Map$Map1",{bl:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});function Km(){this.va=this.da=this.ca=this.t=null}Km.prototype=new $l;Km.prototype.constructor=Km;d=Km.prototype;d.g=function(a){if(Q(R(),a,this.t))return this.ca;if(Q(R(),a,this.da))return this.va;throw(new P).f("key not found: "+a);};
d.x=function(a){a.g((new I).h(this.t,this.ca));a.g((new I).h(this.da,this.va))};d.u=function(){return 2};d.s=function(){J();var a=(new H).ra([(new I).h(this.t,this.ca),(new I).h(this.da,this.va)]);return Y(a,a.ea.length|0)};d.zb=function(a,b){return Q(R(),a,this.t)?(new Km).Zd(this.t,b,this.da,this.va):Q(R(),a,this.da)?(new Km).Zd(this.t,this.ca,this.da,b):Lm(this.t,this.ca,this.da,this.va,a,b)};d.Kb=function(a){return Q(R(),a,this.t)?(new M).n(this.ca):Q(R(),a,this.da)?(new M).n(this.va):L()};
d.Zd=function(a,b,c,e){this.t=a;this.ca=b;this.da=c;this.va=e;return this};d.Hc=function(a){return this.zb(a.Ia,a.Ta)};d.$classData=t({cl:0},!1,"scala.collection.immutable.Map$Map2",{cl:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});function Mm(){this.Va=this.Ca=this.va=this.da=this.ca=this.t=null}Mm.prototype=new $l;Mm.prototype.constructor=Mm;d=Mm.prototype;
d.g=function(a){if(Q(R(),a,this.t))return this.ca;if(Q(R(),a,this.da))return this.va;if(Q(R(),a,this.Ca))return this.Va;throw(new P).f("key not found: "+a);};d.x=function(a){a.g((new I).h(this.t,this.ca));a.g((new I).h(this.da,this.va));a.g((new I).h(this.Ca,this.Va))};function Lm(a,b,c,e,f,h){var k=new Mm;k.t=a;k.ca=b;k.da=c;k.va=e;k.Ca=f;k.Va=h;return k}d.u=function(){return 3};
d.s=function(){J();var a=(new H).ra([(new I).h(this.t,this.ca),(new I).h(this.da,this.va),(new I).h(this.Ca,this.Va)]);return Y(a,a.ea.length|0)};d.zb=function(a,b){return Q(R(),a,this.t)?Lm(this.t,b,this.da,this.va,this.Ca,this.Va):Q(R(),a,this.da)?Lm(this.t,this.ca,this.da,b,this.Ca,this.Va):Q(R(),a,this.Ca)?Lm(this.t,this.ca,this.da,this.va,this.Ca,b):Nm(this.t,this.ca,this.da,this.va,this.Ca,this.Va,a,b)};
d.Kb=function(a){return Q(R(),a,this.t)?(new M).n(this.ca):Q(R(),a,this.da)?(new M).n(this.va):Q(R(),a,this.Ca)?(new M).n(this.Va):L()};d.Hc=function(a){return this.zb(a.Ia,a.Ta)};d.$classData=t({dl:0},!1,"scala.collection.immutable.Map$Map3",{dl:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});function Om(){this.Fc=this.Nb=this.Va=this.Ca=this.va=this.da=this.ca=this.t=null}Om.prototype=new $l;
Om.prototype.constructor=Om;d=Om.prototype;d.g=function(a){if(Q(R(),a,this.t))return this.ca;if(Q(R(),a,this.da))return this.va;if(Q(R(),a,this.Ca))return this.Va;if(Q(R(),a,this.Nb))return this.Fc;throw(new P).f("key not found: "+a);};d.x=function(a){a.g((new I).h(this.t,this.ca));a.g((new I).h(this.da,this.va));a.g((new I).h(this.Ca,this.Va));a.g((new I).h(this.Nb,this.Fc))};d.u=function(){return 4};
d.s=function(){J();var a=(new H).ra([(new I).h(this.t,this.ca),(new I).h(this.da,this.va),(new I).h(this.Ca,this.Va),(new I).h(this.Nb,this.Fc)]);return Y(a,a.ea.length|0)};
d.zb=function(a,b){return Q(R(),a,this.t)?Nm(this.t,b,this.da,this.va,this.Ca,this.Va,this.Nb,this.Fc):Q(R(),a,this.da)?Nm(this.t,this.ca,this.da,b,this.Ca,this.Va,this.Nb,this.Fc):Q(R(),a,this.Ca)?Nm(this.t,this.ca,this.da,this.va,this.Ca,b,this.Nb,this.Fc):Q(R(),a,this.Nb)?Nm(this.t,this.ca,this.da,this.va,this.Ca,this.Va,this.Nb,b):Pm(Pm(Pm(Pm(Pm((new Qm).a(),this.t,this.ca),this.da,this.va),this.Ca,this.Va),this.Nb,this.Fc),a,b)};
function Nm(a,b,c,e,f,h,k,m){var n=new Om;n.t=a;n.ca=b;n.da=c;n.va=e;n.Ca=f;n.Va=h;n.Nb=k;n.Fc=m;return n}d.Kb=function(a){return Q(R(),a,this.t)?(new M).n(this.ca):Q(R(),a,this.da)?(new M).n(this.va):Q(R(),a,this.Ca)?(new M).n(this.Va):Q(R(),a,this.Nb)?(new M).n(this.Fc):L()};d.Hc=function(a){return this.zb(a.Ia,a.Ta)};
d.$classData=t({el:0},!1,"scala.collection.immutable.Map$Map4",{el:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});function Qm(){}Qm.prototype=new $l;Qm.prototype.constructor=Qm;function Rm(){}d=Rm.prototype=Qm.prototype;d.ad=function(a){return this.wf(Me(Ne(),a))};d.Qa=function(){return this};d.a=function(){return this};d.Ra=function(){return this};d.Fd=function(a,b,c,e,f){return Sm(a,b,e,f)};
d.xd=function(){return L()};d.x=function(){};function Pm(a,b,c){return a.Fd(b,a.ad(b),0,c,null,null)}d.mf=function(){Lk();return Tm()};d.nf=function(){Lk();return Tm()};d.u=function(){return 0};d.Rf=function(){return this};d.s=function(){return J().kb};d.zb=function(a,b){return Pm(this,a,b)};d.wf=function(a){a=a+~(a<<9)|0;a^=a>>>14|0;a=a+(a<<4)|0;return a^(a>>>10|0)};d.Kb=function(a){return this.xd(a,this.ad(a),0)};d.Hc=function(a){return this.Fd(a.Ia,this.ad(a.Ia),0,a.Ta,a,null)};
var Ik=t({ke:0},!1,"scala.collection.immutable.HashMap",{ke:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1,Rb:1});Qm.prototype.$classData=Ik;function qm(){this.Ua=null;this.wa=0}qm.prototype=new Am;qm.prototype.constructor=qm;d=qm.prototype;
d.qe=function(a,b,c){if(b===this.wa&&Q(R(),a,this.Ua))return this;if(b!==this.wa)return fl(ll(),this.wa,this,b,pm(new qm,a,b),c);c=pl();return Um(new Vm,b,cm(new dm,c,this.Ua).Id(a))};d.x=function(a){a.g(this.Ua)};function pm(a,b,c){a.Ua=b;a.wa=c;return a}d.u=function(){return 1};d.s=function(){J();var a=(new H).ra([this.Ua]);return Y(a,a.ea.length|0)};d.ge=function(a,b){return b===this.wa&&Q(R(),a,this.Ua)?null:this};d.Mc=function(a,b){return b===this.wa&&Q(R(),a,this.Ua)};
d.pe=function(a,b){return a.Mc(this.Ua,this.wa,b)};d.$classData=t({uh:0},!1,"scala.collection.immutable.HashSet$HashSet1",{uh:1,Nk:1,Cd:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,Rb:1,e:1,d:1});function Vm(){this.wa=0;this.sc=null}Vm.prototype=new Am;Vm.prototype.constructor=Vm;d=Vm.prototype;d.qe=function(a,b,c){return b===this.wa?Um(new Vm,b,this.sc.Id(a)):fl(ll(),this.wa,this,b,pm(new qm,a,b),c)};
d.x=function(a){var b=em(this.sc);bh(pj(b),a)};d.u=function(){return this.sc.u()};d.s=function(){var a=em(this.sc);return pj(a)};d.ge=function(a,b){if(b===this.wa){a=this.sc.$e(a);var c=a.u();switch(c){case 0:return null;case 1:return a=em(a),pm(new qm,pj(a).ka(),b);default:return c===this.sc.u()?this:Um(new Vm,b,a)}}else return this};function Um(a,b,c){a.wa=b;a.sc=c;return a}d.Mc=function(a,b){return b===this.wa&&this.sc.Ka(a)};
d.pe=function(a,b){for(var c=em(this.sc),c=pj(c),e=!0;e&&c.ia();)e=c.ka(),e=a.Mc(e,this.wa,b);return e};d.$classData=t({Lk:0},!1,"scala.collection.immutable.HashSet$HashSetCollision1",{Lk:1,Nk:1,Cd:1,Qb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Wb:1,z:1,Gb:1,Tb:1,Yb:1,Xb:1,ua:1,bc:1,ga:1,ma:1,la:1,Rb:1,e:1,d:1});function Wm(){}Wm.prototype=new Cm;Wm.prototype.constructor=Wm;Wm.prototype.a=function(){return this};
Wm.prototype.$classData=t({Uk:0},!1,"scala.collection.immutable.ListMap$EmptyListMap$",{Uk:1,Tk:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});var Xm=void 0;function Dm(){Xm||(Xm=(new Wm).a());return Xm}function Fm(){this.Xf=this.Xc=this.Ua=null}Fm.prototype=new Cm;Fm.prototype.constructor=Fm;
function Ym(a,b){var c=K();for(;;){if(b.i())return Ol(c);if(Q(R(),a,b.fd())){b=b.Oc();for(a=c;!a.i();)c=a.qa(),b=Em(new Fm,b,c.fd(),c.Gd()),a=a.$();return b}var e=b.Oc(),c=Wk(new Xk,b,c);b=e}}d=Fm.prototype;d.g=function(a){a:{var b=this;for(;;){if(b.i())throw(new P).f("key not found: "+a);if(Q(R(),a,b.fd())){a=b.Gd();break a}b=b.Oc()}}return a};d.Gd=function(){return this.Xc};d.i=function(){return!1};d.u=function(){a:{var a=this,b=0;for(;;){if(a.i())break a;a=a.Oc();b=1+b|0}}return b};d.fd=function(){return this.Ua};
d.se=function(a){var b=Ym(a.Ia,this);return Em(new Fm,b,a.Ia,a.Ta)};d.zb=function(a,b){return this.re(a,b)};d.re=function(a,b){var c=Ym(a,this);return Em(new Fm,c,a,b)};d.Kb=function(a){a:{var b=this;for(;;){if(b.i()){a=L();break a}if(Q(R(),a,b.fd())){a=(new M).n(b.Gd());break a}b=b.Oc()}}return a};d.Ka=function(a){a:{var b=this;for(;;){if(b.i()){a=!1;break a}if(Q(R(),a,b.fd())){a=!0;break a}b=b.Oc()}}return a};function Em(a,b,c,e){a.Ua=c;a.Xc=e;if(null===b)throw jf(C(),null);a.Xf=b;return a}
d.Oc=function(){return this.Xf};d.Hc=function(a){return this.se(a)};d.$classData=t({Vk:0},!1,"scala.collection.immutable.ListMap$Node",{Vk:1,Tk:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1});function $m(){}$m.prototype=new Ul;$m.prototype.constructor=$m;function an(){}d=an.prototype=$m.prototype;d.Qa=function(){return this};d.Ja=function(a){return Nl(this,a)};
d.tc=function(a){return 0>a?1:Pl(this,a)};d.g=function(a){return Nl(this,a|0)};d.Eb=function(a){return Ml(this,a)};d.Ra=function(){return this};function tk(a,b){var c=(xd(),(new si).a());if(uk(c.ye(a))){if(a.i())a=fh();else{for(var c=(new Ah).n(a),e=b.g(c.E.qa()).hb();!c.E.i()&&e.i();)c.E=c.E.$(),c.E.i()||(e=b.g(c.E.qa()).hb());a=c.E.i()?(xd(),fh()):bn(e,yb(function(a,b,c){return function(){return tk(c.E.$(),b)}}(a,b,c)))}return a}return hk(a,b,c)}
d.ha=function(a){return this===a||(Cl(a)?this.Eb(a):!1)};d.Dg=function(a){a:{var b=this;for(;;){if(0>=a||b.i())break a;b=b.$();a=-1+a|0}}return b};d.Oe=function(a,b,c){var e=this,f=this;for(e.i()||(e=e.$());f!==e&&!e.i();){e=e.$();if(e.i())break;e=e.$();if(e===f)break;f=f.$()}return Ue(this,a,b,c)};d.Wa=function(){return xd()};d.o=function(){return Ue(this,"Stream(",", ",")")};d.x=function(a){var b=this;a:for(;;){if(!b.i()){a.g(b.qa());b=b.$();continue a}break}};d.s=function(){return zj(this)};
d.Uc=function(){return this};d.xa=function(){for(var a=0,b=this;!b.i();)a=1+a|0,b=b.$();return a};d.hb=function(){return this};
d.od=function(a,b,c,e){N(a,b);if(!this.i()){Ye(a,this.qa());b=this;if(b.Ec()){var f=this.$();if(f.i())return N(a,e),a;if(b!==f&&(b=f,f.Ec()))for(f=f.$();b!==f&&f.Ec();)Ye(N(a,c),b.qa()),b=b.$(),f=f.$(),f.Ec()&&(f=f.$());if(f.Ec()){for(var h=this,k=0;h!==f;)h=h.$(),f=f.$(),k=1+k|0;b===f&&0<k&&(Ye(N(a,c),b.qa()),b=b.$());for(;b!==f;)Ye(N(a,c),b.qa()),b=b.$()}else{for(;b!==f;)Ye(N(a,c),b.qa()),b=b.$();!b.i()&&Ye(N(a,c),b.qa())}}b.i()||(b.Ec()?N(N(a,c),"..."):N(N(a,c),"?"))}N(a,e);return a};
d.y=function(){return Zg(Pe(),this)};function bn(a,b){if(a.i())return lf(b).hb();var c=a.qa();return dh(new eh,c,yb(function(a,b){return function(){return bn(a.$(),b)}}(a,b)))}d.ec=function(){return"Stream"};function cn(a,b){if(b>=a.Ba)throw(new V).f(""+b);return a.ea.c[b]}
function dn(a,b){var c=a.ea.c.length,e=c>>31,f=b>>31;if(f===e?(-2147483648^b)>(-2147483648^c):f>e){f=c<<1;for(c=c>>>31|0|e<<1;;){var e=b>>31,h=f,k=c;if(e===k?(-2147483648^b)>(-2147483648^h):e>k)c=f>>>31|0|c<<1,f<<=1;else break}b=c;if(0===b?-1<(-2147483648^f):0<b)f=2147483647;b=f;b=p(w(v),[b]);Ga(a.ea,0,b,0,a.Ba);a.ea=b}}function en(){}en.prototype=new Rm;en.prototype.constructor=en;en.prototype.a=function(){return this};
en.prototype.$classData=t({Fk:0},!1,"scala.collection.immutable.HashMap$EmptyHashMap$",{Fk:1,ke:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1,Rb:1});var fn=void 0;function Tm(){fn||(fn=(new en).a());return fn}function gn(){this.Ua=null;this.wa=0;this.Me=this.Xc=null}gn.prototype=new Rm;gn.prototype.constructor=gn;function nk(a){null===a.Me&&(a.Me=(new I).h(a.Ua,a.Xc));return a.Me}
function Sm(a,b,c,e){var f=new gn;f.Ua=a;f.wa=b;f.Xc=c;f.Me=e;return f}d=gn.prototype;d.Fd=function(a,b,c,e,f,h){if(b===this.wa&&Q(R(),a,this.Ua)){if(null===h)return this.Xc===e?this:Sm(a,b,e,f);a=h.ff(nk(this),null!==f?f:(new I).h(a,e));return Sm(a.Ia,b,a.Ta,a)}if(b!==this.wa)return a=Sm(a,b,e,f),Hk(Lk(),this.wa,this,b,a,c,2);c=Dm();return hn(new jn,b,Em(new Fm,c,this.Ua,this.Xc).re(a,e))};d.xd=function(a,b){return b===this.wa&&Q(R(),a,this.Ua)?(new M).n(this.Xc):L()};d.x=function(a){a.g(nk(this))};
d.s=function(){J();var a=(new H).ra([nk(this)]);return Y(a,a.ea.length|0)};d.u=function(){return 1};d.$classData=t({th:0},!1,"scala.collection.immutable.HashMap$HashMap1",{th:1,ke:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1,Rb:1});function jn(){this.wa=0;this.hc=null}jn.prototype=new Rm;jn.prototype.constructor=jn;d=jn.prototype;
d.Fd=function(a,b,c,e,f,h){if(b===this.wa)return null!==h&&this.hc.Ka(a)?hn(new jn,b,this.hc.se(h.ff((new I).h(a,this.hc.g(a)),f))):hn(new jn,b,this.hc.re(a,e));a=Sm(a,b,e,f);return Hk(Lk(),this.wa,this,b,a,c,1+this.hc.u()|0)};d.xd=function(a,b){return b===this.wa?this.hc.Kb(a):L()};d.x=function(a){var b=Gm(this.hc);bh(pj(b),a)};d.s=function(){var a=Gm(this.hc);return pj(a)};d.u=function(){return this.hc.u()};function hn(a,b,c){a.wa=b;a.hc=c;return a}
d.$classData=t({Gk:0},!1,"scala.collection.immutable.HashMap$HashMapCollision1",{Gk:1,ke:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1,Rb:1});function Kk(){this.Ic=0;this.fb=null;this.Ba=0}Kk.prototype=new Rm;Kk.prototype.constructor=Kk;d=Kk.prototype;
d.Fd=function(a,b,c,e,f,h){var k=1<<(31&(b>>>c|0)),m=Mh(Tg(),this.Ic&(-1+k|0));if(0!==(this.Ic&k)){k=this.fb.c[m];a=k.Fd(a,b,5+c|0,e,f,h);if(a===k)return this;b=p(w(Ik),[this.fb.c.length]);Ni(Pi(),this.fb,0,b,0,this.fb.c.length);b.c[m]=a;return Jk(new Kk,this.Ic,b,this.Ba+(a.u()-k.u()|0)|0)}c=p(w(Ik),[1+this.fb.c.length|0]);Ni(Pi(),this.fb,0,c,0,m);c.c[m]=Sm(a,b,e,f);Ni(Pi(),this.fb,m,c,1+m|0,this.fb.c.length-m|0);return Jk(new Kk,this.Ic|k,c,1+this.Ba|0)};
d.xd=function(a,b,c){var e=31&(b>>>c|0);if(-1===this.Ic)return this.fb.c[e].xd(a,b,5+c|0);e=1<<e;return 0!==(this.Ic&e)?(e=Mh(Tg(),this.Ic&(-1+e|0)),this.fb.c[e].xd(a,b,5+c|0)):L()};d.x=function(a){for(var b=0;b<this.fb.c.length;)this.fb.c[b].x(a),b=1+b|0};d.s=function(){var a=new mk;Aj.prototype.Ng.call(a,this.fb);return a};d.u=function(){return this.Ba};function Jk(a,b,c,e){a.Ic=b;a.fb=c;a.Ba=e;return a}
d.$classData=t({If:0},!1,"scala.collection.immutable.HashMap$HashTrieMap",{If:1,ke:1,Zb:1,Pb:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,Ub:1,Fb:1,Sb:1,Vb:1,Ha:1,z:1,ua:1,$b:1,ga:1,ma:1,la:1,ac:1,e:1,d:1,Rb:1});function kn(){}kn.prototype=new Ul;kn.prototype.constructor=kn;function ln(){}d=ln.prototype=kn.prototype;d.Qa=function(){return this};d.Ja=function(a){return Nl(this,a)};d.tc=function(a){return 0>a?1:Pl(this,a)};d.Eb=function(a){return Ml(this,a)};
d.g=function(a){return Nl(this,a|0)};d.Ra=function(){return this};d.Dg=function(a){for(var b=this;!b.i()&&0<a;)b=b.nc(),a=-1+a|0;return b};d.Wa=function(){return qd()};d.x=function(a){for(var b=this;!b.i();)a.g(b.qa()),b=b.nc()};d.s=function(){return pj(this)};d.xa=function(){for(var a=this,b=0;!a.i();)b=1+b|0,a=a.$();return b};d.Uc=function(){return this};d.hb=function(){return this.i()?fh():dh(new eh,this.qa(),yb(function(a){return function(){return a.nc().hb()}}(this)))};
d.y=function(){return Zg(Pe(),this)};d.ec=function(){return"List"};function $g(a){return!!(a&&a.$classData&&a.$classData.l.wh)}function eh(){this.Ze=this.Ph=this.Ie=null}eh.prototype=new an;eh.prototype.constructor=eh;d=eh.prototype;d.qa=function(){return this.Ie};function mn(a){a.Ec()||a.Ec()||(a.Ph=lf(a.Ze),a.Ze=null);return a.Ph}d.Eb=function(a){return nn(a)?on(this,a):Ml(this,a)};d.i=function(){return!1};d.Ec=function(){return null===this.Ze};
function on(a,b){for(;;)if(Q(R(),a.Ie,b.Ie))if(a=mn(a),nn(a))if(b=mn(b),nn(b)){if(a===b)return!0}else return!1;else return mn(b).i();else return!1}d.$=function(){return mn(this)};function dh(a,b,c){a.Ie=b;a.Ze=c;return a}function nn(a){return!!(a&&a.$classData&&a.$classData.l.xh)}
d.$classData=t({xh:0},!1,"scala.collection.immutable.Stream$Cons",{xh:1,ol:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Jf:1,le:1,ga:1,ma:1,la:1,je:1,Ef:1,Ff:1,e:1,d:1});function pn(){}pn.prototype=new an;pn.prototype.constructor=pn;d=pn.prototype;d.qa=function(){this.vf()};d.a=function(){return this};d.i=function(){return!0};d.Ec=function(){return!1};d.vf=function(){throw(new P).f("head of empty stream");};
d.$=function(){throw(new ej).f("tail of empty stream");};d.$classData=t({rl:0},!1,"scala.collection.immutable.Stream$Empty$",{rl:1,ol:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Jf:1,le:1,ga:1,ma:1,la:1,je:1,Ef:1,Ff:1,e:1,d:1});var qn=void 0;function fh(){qn||(qn=(new pn).a());return qn}function wk(){this.vd=this.Vd=this.md=0;this.td=!1;this.Ce=0;this.Cg=this.zg=this.wg=this.tg=this.qg=this.lf=null}wk.prototype=new Ul;
wk.prototype.constructor=wk;function rn(a,b){var c=b+a.md|0;if(0<=b&&c<a.Vd)return c;throw(new V).f(""+b);}d=wk.prototype;d.r=function(){return this.wg};d.Qa=function(){return this};d.Ja=function(a){a=rn(this,a);return Rb(this,a,a^this.vd)};d.jb=function(){return this.Ce};d.tc=function(a){return this.xa()-a|0};d.g=function(a){return this.Ja(a|0)};d.Ra=function(){return this};d.Je=function(a,b,c){this.md=a;this.Vd=b;this.vd=c;this.td=!1;return this};d.bd=function(a){this.Cg=a};d.Wa=function(){return Ad()};
d.sa=function(){return this.lf};d.oa=function(){return this.zg};d.fa=function(a){this.tg=a};
d.s=function(){var a=(new xk).rc(this.md,this.Vd);Tb(a,this,this.Ce);if(this.td){var b=this.vd,c=-1+a.jb()|0;switch(c){case 5:a.bd(D(a.eb()));a.db(D(a.oa()));a.Aa(D(a.r()));a.fa(D(a.m()));a.w(D(a.j()));a.eb().c[31&(b>>>25|0)]=a.oa();a.oa().c[31&(b>>>20|0)]=a.r();a.r().c[31&(b>>>15|0)]=a.m();a.m().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 4:a.db(D(a.oa()));a.Aa(D(a.r()));a.fa(D(a.m()));a.w(D(a.j()));a.oa().c[31&(b>>>20|0)]=a.r();a.r().c[31&(b>>>15|0)]=a.m();a.m().c[31&(b>>>10|
0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 3:a.Aa(D(a.r()));a.fa(D(a.m()));a.w(D(a.j()));a.r().c[31&(b>>>15|0)]=a.m();a.m().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 2:a.fa(D(a.m()));a.w(D(a.j()));a.m().c[31&(b>>>10|0)]=a.j();a.j().c[31&(b>>>5|0)]=a.sa();break;case 1:a.w(D(a.j()));a.j().c[31&(b>>>5|0)]=a.sa();break;case 0:break;default:throw(new y).n(c);}}1<a.jf&&Sb(a,this.md,this.md^this.vd);return a};d.w=function(a){this.qg=a};d.xa=function(){return this.Vd-this.md|0};
d.db=function(a){this.zg=a};d.Uc=function(){return this};d.Vc=function(){return this.xa()};d.j=function(){return this.qg};d.eb=function(){return this.Cg};
d.Qh=function(a,b,c){if(c===(mi(),pd().bg)||c===Bk().ya||c===ac().ya){a=rn(this,a);c=(new wk).Je(this.md,this.Vd,a);Tb(c,this,this.Ce);c.td=this.td;if(c.td){var e=this.vd,f=this.vd^a;if(32>f)c.G(D(c.sa()));else if(1024>f)c.w(D(c.j())),c.j().c[31&(e>>>5|0)]=c.sa(),c.G(G(c.j(),31&(a>>>5|0)));else if(32768>f)c.w(D(c.j())),c.fa(D(c.m())),c.j().c[31&(e>>>5|0)]=c.sa(),c.m().c[31&(e>>>10|0)]=c.j(),c.w(G(c.m(),31&(a>>>10|0))),c.G(G(c.j(),31&(a>>>5|0)));else if(1048576>f)c.w(D(c.j())),c.fa(D(c.m())),c.Aa(D(c.r())),
c.j().c[31&(e>>>5|0)]=c.sa(),c.m().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.m(),c.fa(G(c.r(),31&(a>>>15|0))),c.w(G(c.m(),31&(a>>>10|0))),c.G(G(c.j(),31&(a>>>5|0)));else if(33554432>f)c.w(D(c.j())),c.fa(D(c.m())),c.Aa(D(c.r())),c.db(D(c.oa())),c.j().c[31&(e>>>5|0)]=c.sa(),c.m().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.m(),c.oa().c[31&(e>>>20|0)]=c.r(),c.Aa(G(c.oa(),31&(a>>>20|0))),c.fa(G(c.r(),31&(a>>>15|0))),c.w(G(c.m(),31&(a>>>10|0))),c.G(G(c.j(),31&(a>>>5|0)));else if(1073741824>f)c.w(D(c.j())),
c.fa(D(c.m())),c.Aa(D(c.r())),c.db(D(c.oa())),c.bd(D(c.eb())),c.j().c[31&(e>>>5|0)]=c.sa(),c.m().c[31&(e>>>10|0)]=c.j(),c.r().c[31&(e>>>15|0)]=c.m(),c.oa().c[31&(e>>>20|0)]=c.r(),c.eb().c[31&(e>>>25|0)]=c.oa(),c.db(G(c.eb(),31&(a>>>25|0))),c.Aa(G(c.oa(),31&(a>>>20|0))),c.fa(G(c.r(),31&(a>>>15|0))),c.w(G(c.m(),31&(a>>>10|0))),c.G(G(c.j(),31&(a>>>5|0)));else throw(new E).a();}else{e=-1+c.jb()|0;switch(e){case 5:c.bd(D(c.eb()));c.db(G(c.eb(),31&(a>>>25|0)));c.Aa(G(c.oa(),31&(a>>>20|0)));c.fa(G(c.r(),
31&(a>>>15|0)));c.w(G(c.m(),31&(a>>>10|0)));c.G(G(c.j(),31&(a>>>5|0)));break;case 4:c.db(D(c.oa()));c.Aa(G(c.oa(),31&(a>>>20|0)));c.fa(G(c.r(),31&(a>>>15|0)));c.w(G(c.m(),31&(a>>>10|0)));c.G(G(c.j(),31&(a>>>5|0)));break;case 3:c.Aa(D(c.r()));c.fa(G(c.r(),31&(a>>>15|0)));c.w(G(c.m(),31&(a>>>10|0)));c.G(G(c.j(),31&(a>>>5|0)));break;case 2:c.fa(D(c.m()));c.w(G(c.m(),31&(a>>>10|0)));c.G(G(c.j(),31&(a>>>5|0)));break;case 1:c.w(D(c.j()));c.G(G(c.j(),31&(a>>>5|0)));break;case 0:c.G(D(c.sa()));break;default:throw(new y).n(e);
}c.td=!0}c.lf.c[31&a]=b;b=c}else b=Hl(this,a,b,c);return b};d.y=function(){return Zg(Pe(),this)};d.Kc=function(a){this.Ce=a};d.m=function(){return this.tg};d.G=function(a){this.lf=a};d.Aa=function(a){this.wg=a};d.$classData=t({yl:0},!1,"scala.collection.immutable.Vector",{yl:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Ok:1,le:1,ga:1,ma:1,la:1,ie:1,Ad:1,Bh:1,e:1,d:1,Rb:1});function rf(){this.ld=null}rf.prototype=new Ul;
rf.prototype.constructor=rf;d=rf.prototype;d.Qa=function(){return this};d.Ja=function(a){a=65535&(this.ld.charCodeAt(a)|0);return Ch(a)};d.tc=function(a){return Il(this,a)};d.Eb=function(a){return Jl(this,a)};d.g=function(a){a=65535&(this.ld.charCodeAt(a|0)|0);return Ch(a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.Wa=function(){return mi()};d.o=function(){return this.ld};d.x=function(a){Kl(this,a)};d.s=function(){return Y(this,this.ld.length|0)};
d.xa=function(){return this.ld.length|0};d.Uc=function(){return this};d.Vc=function(){return this.ld.length|0};d.y=function(){return Zg(Pe(),this)};d.rd=function(a,b,c){Ll(this,a,b,c)};d.f=function(a){this.ld=a;return this};d.ja=function(){sf||(sf=(new of).a());return sf.ja()};
d.$classData=t({Cl:0},!1,"scala.collection.immutable.WrappedString",{Cl:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Ok:1,le:1,ga:1,ma:1,la:1,ie:1,Ad:1,zh:1,Ve:1,jh:1,Db:1});function Xk(){this.Ed=this.uf=null}Xk.prototype=new ln;Xk.prototype.constructor=Xk;d=Xk.prototype;d.qa=function(){return this.uf};d.Ga=function(){return"::"};d.Ea=function(){return 2};d.nc=function(){return this.Ed};d.i=function(){return!1};
d.Fa=function(a){switch(a){case 0:return this.uf;case 1:return this.Ed;default:throw(new V).f(""+a);}};d.$=function(){return this.Ed};function Wk(a,b,c){a.uf=b;a.Ed=c;return a}d.Na=function(){return W(this)};d.$classData=t({Ak:0},!1,"scala.collection.immutable.$colon$colon",{Ak:1,wh:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Jf:1,le:1,ga:1,ma:1,la:1,je:1,Ef:1,Pa:1,Ff:1,e:1,d:1});function sn(){}sn.prototype=new ln;
sn.prototype.constructor=sn;d=sn.prototype;d.Ga=function(){return"Nil"};d.qa=function(){this.vf()};d.a=function(){return this};d.Ea=function(){return 0};d.i=function(){return!0};d.nc=function(){throw(new ej).f("tail of empty list");};d.ha=function(a){return Cl(a)?a.i():!1};d.Fa=function(a){throw(new V).f(""+a);};d.vf=function(){throw(new P).f("head of empty list");};d.$=function(){return this.nc()};d.Na=function(){return W(this)};
d.$classData=t({fl:0},!1,"scala.collection.immutable.Nil$",{fl:1,wh:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Jf:1,le:1,ga:1,ma:1,la:1,je:1,Ef:1,Pa:1,Ff:1,e:1,d:1});var tn=void 0;function K(){tn||(tn=(new sn).a());return tn}function un(){}un.prototype=new wm;un.prototype.constructor=un;function vn(){}vn.prototype=un.prototype;un.prototype.sb=function(a){return df(this,a)};function X(){this.gd=this.bb=null;this.Ge=!1;this.Nc=0}
X.prototype=new vn;X.prototype.constructor=X;d=X.prototype;d.a=function(){this.bb=K();this.Ge=!1;this.Nc=0;return this};d.Ja=function(a){if(0>a||a>=this.Nc)throw(new V).f(""+a);return Nl(this.bb,a)};d.tc=function(a){return 0>a?1:Pl(this.bb,a)};d.Eb=function(a){return Ml(this.bb,a)};d.g=function(a){return this.Ja(a|0)};d.i=function(){return 0===this.Nc};d.Ra=function(){return this};d.ha=function(a){return a&&a.$classData&&a.$classData.l.Hh?this.bb.ha(a.bb):Cl(a)?this.Eb(a):!1};
d.Oe=function(a,b,c){return Ue(this.bb,a,b,c)};d.rb=function(a){return Ij(this,a)};d.Wa=function(){Bl||(Bl=(new Al).a());return Bl};d.x=function(a){for(var b=this.bb;!b.i();)a.g(b.qa()),b=b.nc()};d.ab=function(){this.Ge=!this.i();return this.bb};d.s=function(){var a=new Jj;a.Qd=this.i()?K():this.bb;return a};d.dc=function(a,b){sh(this,a,b)};d.xa=function(){return this.Nc};d.Uc=function(){return this};d.hb=function(){return this.bb.hb()};d.od=function(a,b,c,e){return We(this.bb,a,b,c,e)};
function Ij(a,b){if(a.Ge&&!a.i()){var c=a.bb,e=a.gd.Ed;a.bb=K();a.gd=null;a.Ge=!1;for(a.Nc=0;c!==e;)Ij(a,c.qa()),c=c.nc()}a.i()?(a.gd=Wk(new Xk,b,K()),a.bb=a.gd):(c=a.gd,a.gd=Wk(new Xk,b,K()),c.Ed=a.gd);a.Nc=1+a.Nc|0;return a}d.cb=function(a){return Ij(this,a)};d.Hb=function(){};d.sb=function(a){a:b:for(;;){var b=a;if(null!==b&&b===this){a=this.Nc;b=this.ja();if(!(0>=a)){b.dc(a,this);for(var c=0,e=this.s();c<a&&e.ia();)b.cb(e.ka()),c=1+c|0}a=b.ab();continue b}a=df(this,a);break a}return a};d.ec=function(){return"ListBuffer"};
d.$classData=t({Hh:0},!1,"scala.collection.mutable.ListBuffer",{Hh:1,Ch:1,Kf:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Nf:1,Mf:1,Pf:1,Bf:1,Of:1,Lf:1,Af:1,Le:1,Dh:1,Eh:1,Ac:1,zc:1,sh:1,mh:1,ua:1,me:1,Bc:1,Zm:1,Ym:1,$m:1,e:1,d:1});function Ve(){this.pb=null}Ve.prototype=new wm;Ve.prototype.constructor=Ve;d=Ve.prototype;d.Qa=function(){return this};d.a=function(){Ve.prototype.Fi.call(this,16,"");return this};
d.Ja=function(a){a=65535&(this.pb.Za.charCodeAt(a)|0);return Ch(a)};d.tc=function(a){return Il(this,a)};d.Eb=function(a){return Jl(this,a)};d.g=function(a){a=65535&(this.pb.Za.charCodeAt(a|0)|0);return Ch(a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.Nh=function(a,b){return this.pb.Za.substring(a,b)};d.rb=function(a){Li(this.pb,null===a?0:a.na);return this};d.Wa=function(){Qk||(Qk=(new Ok).a());return Qk};d.o=function(){return this.pb.Za};d.x=function(a){Kl(this,a)};
d.ab=function(){return this.pb.Za};function N(a,b){Ii(a.pb,b);return a}d.s=function(){return Y(this,this.pb.Za.length|0)};d.Ye=function(){return this};d.dc=function(a,b){sh(this,a,b)};d.Fi=function(a,b){Ve.prototype.Ii.call(this,Ii((new Hi).lb((b.length|0)+a|0),b));return this};d.xa=function(){return this.pb.Za.length|0};d.Uc=function(){return this};d.Vc=function(){return this.pb.Za.length|0};d.Ii=function(a){this.pb=a;return this};function Ye(a,b){Ii(a.pb,Mf(r(),b));return a}
d.cb=function(a){Li(this.pb,null===a?0:a.na);return this};d.Hb=function(){};d.rd=function(a,b,c){Ll(this,a,b,c)};d.y=function(){return Zg(Pe(),this)};d.ja=function(){return Zi(new Yi,(new Ve).a())};d.sb=function(a){return df(this,a)};
d.$classData=t({Ol:0},!1,"scala.collection.mutable.StringBuilder",{Ol:1,Kf:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Nf:1,Mf:1,Pf:1,Bf:1,Of:1,Lf:1,Af:1,Le:1,Rg:1,Fh:1,ie:1,Ad:1,Gh:1,zh:1,Ve:1,jh:1,Db:1,me:1,Bc:1,Ac:1,zc:1,e:1,d:1});function H(){this.ea=null}H.prototype=new vn;H.prototype.constructor=H;d=H.prototype;d.Qa=function(){return this};d.a=function(){H.prototype.ra.call(this,[]);return this};d.Ja=function(a){return this.ea[a]};
d.tc=function(a){return Il(this,a)};d.g=function(a){return this.ea[a|0]};d.Eb=function(a){return Jl(this,a)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.rb=function(a){this.ea.push(a);return this};d.Wa=function(){Sk||(Sk=(new Rk).a());return Sk};d.x=function(a){Kl(this,a)};d.ab=function(){return this};d.Ye=function(){return this};d.s=function(){return Y(this,this.ea.length|0)};d.dc=function(a,b){sh(this,a,b)};d.xa=function(){return this.ea.length|0};d.Uc=function(){return this};
d.Vc=function(){return this.ea.length|0};d.cb=function(a){this.ea.push(a);return this};d.y=function(){return Zg(Pe(),this)};d.rd=function(a,b,c){Ll(this,a,b,c)};d.Hb=function(){};d.ra=function(a){this.ea=a;return this};d.ec=function(){return"WrappedArray"};
d.$classData=t({Kh:0},!1,"scala.scalajs.js.WrappedArray",{Kh:1,Ch:1,Kf:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Nf:1,Mf:1,Pf:1,Bf:1,Of:1,Lf:1,Af:1,Le:1,Dh:1,Eh:1,Ac:1,zc:1,sh:1,mh:1,ua:1,Fh:1,ie:1,Ad:1,Gh:1,an:1,Jl:1,Ve:1,Bc:1});function Pk(){this.Og=0;this.ea=null;this.Ba=0}Pk.prototype=new vn;Pk.prototype.constructor=Pk;d=Pk.prototype;d.Qa=function(){return this};
function wn(a,b){dn(a,1+a.Ba|0);a.ea.c[a.Ba]=b;a.Ba=1+a.Ba|0;return a}d.a=function(){Pk.prototype.lb.call(this,16);return this};d.Ja=function(a){return cn(this,a)};d.tc=function(a){return Il(this,a)};d.Eb=function(a){return Jl(this,a)};d.g=function(a){return cn(this,a|0)};d.i=function(){return 0===this.xa()};d.Ra=function(){return this};d.rb=function(a){return wn(this,a)};d.Wa=function(){zl||(zl=(new yl).a());return zl};d.x=function(a){for(var b=0,c=this.Ba;b<c;)a.g(this.ea.c[b]),b=1+b|0};d.ab=function(){return this};
d.s=function(){return Y(this,this.Ba)};d.Ye=function(){return this};d.dc=function(a,b){sh(this,a,b)};d.lb=function(a){a=this.Og=a;this.ea=p(w(v),[1<a?a:1]);this.Ba=0;return this};d.xa=function(){return this.Ba};d.Uc=function(){return this};d.Vc=function(){return this.Ba};d.cb=function(a){return wn(this,a)};d.Hb=function(a){a>this.Ba&&1<=a&&(a=p(w(v),[a]),Ga(this.ea,0,a,0,this.Ba),this.ea=a)};d.rd=function(a,b,c){var e=ng(sg(),a)-b|0;c=c<e?c:e;e=this.Ba;c=c<e?c:e;0<c&&Ni(Pi(),this.ea,0,a,b,c)};
d.y=function(){return Zg(Pe(),this)};d.sb=function(a){if(a&&a.$classData&&a.$classData.l.Ad){var b=a.xa();dn(this,this.Ba+b|0);a.rd(this.ea,this.Ba,b);this.Ba=this.Ba+b|0;a=this}else a=df(this,a);return a};d.ec=function(){return"ArrayBuffer"};
d.$classData=t({El:0},!1,"scala.collection.mutable.ArrayBuffer",{El:1,Ch:1,Kf:1,wc:1,aa:1,ba:1,b:1,X:1,N:1,Q:1,P:1,q:1,p:1,K:1,M:1,U:1,Y:1,W:1,R:1,H:1,L:1,k:1,yc:1,Ha:1,z:1,ic:1,jc:1,kc:1,Nf:1,Mf:1,Pf:1,Bf:1,Of:1,Lf:1,Af:1,Le:1,Dh:1,Eh:1,Ac:1,zc:1,sh:1,mh:1,ua:1,Jl:1,Gh:1,Ad:1,Ve:1,Bc:1,cn:1,Fh:1,ie:1,Rb:1,e:1,d:1});ba.PlayerEvents=yc();ba.SequencerEvents=Dc();ba.PlayerCommand=function(){var a=new S;S.prototype.a.call(a);return a};ba.PlayerCommand.prototype=S.prototype;
ba.PlayerQuery=function(){var a=new Gg;Gg.prototype.a.call(a);return a};ba.PlayerQuery.prototype=Gg.prototype;ba.SequencerCommand=function(){var a=new Hg;Hg.prototype.a.call(a);return a};ba.SequencerCommand.prototype=Hg.prototype;ba.SequencerQuery=function(){var a=new Ig;Ig.prototype.a.call(a);return a};ba.SequencerQuery.prototype=Ig.prototype;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Application_vue__ = __webpack_require__(5);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
      el: '#app',
      components: { Application: __WEBPACK_IMPORTED_MODULE_1__components_Application_vue__["a" /* default */] }
});

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Application_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5abf4239_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Application_vue__ = __webpack_require__(24);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navigation_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ControlPanel_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PatternEditor_vue__ = __webpack_require__(13);
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
        command.loadHHSounds();
        command.loadRSSounds();
        command.loadSDSounds();
        command.loadBDSounds();
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navigation_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4101d23b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Navigation_vue__ = __webpack_require__(9);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ControlPanel_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c4b258e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ControlPanel_vue__ = __webpack_require__(12);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ControlPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c4b258e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ControlPanel_vue__["a" /* default */],
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
/* 11 */
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



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted() {
        const playerQuery = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]();
        __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerEvents"].PlayerStateChanged.subscribe(() => {
            this.isPlaying = playerQuery.isPlaying();
            this.areSoundsReady = playerQuery.areSoundsReady();
        });
    },

    data() {
        const playerQuery = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerQuery"]();
        return {
            bpm: playerQuery.bpm(),
            selectedPatternId: new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerQuery"]().selectedPatternId(),
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
        setPatternId() {
            new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["SequencerCommand"]().selectPattern(this.selectedPatternId);
        },
        togglePlayingState() {
            const command = new __WEBPACK_IMPORTED_MODULE_0__scala_target_scala_2_12_scalajsdrumsequencer_opt__["PlayerCommand"]();
            if (this.isPlaying) {
                command.stop();
            } else {
                command.play();
            }
        }
    }
});

/***/ }),
/* 12 */
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
  }, [_vm._v("\n                        Pattern: " + _vm._s(_vm.selectedPatternId) + "\n                    ")]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPatternId),
      expression: "selectedPatternId"
    }],
    attrs: {
      "name": "pattern",
      "type": "radio",
      "value": "A",
      "id": "radio-pattern-1"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedPatternId, "A")
    },
    on: {
      "change": _vm.setPatternId,
      "__c": function($event) {
        _vm.selectedPatternId = "A"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-pattern-1"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPatternId),
      expression: "selectedPatternId"
    }],
    attrs: {
      "name": "pattern",
      "type": "radio",
      "value": "B",
      "id": "radio-pattern-2"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedPatternId, "B")
    },
    on: {
      "change": _vm.setPatternId,
      "__c": function($event) {
        _vm.selectedPatternId = "B"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-pattern-2"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPatternId),
      expression: "selectedPatternId"
    }],
    attrs: {
      "name": "pattern",
      "type": "radio",
      "value": "C",
      "id": "radio-pattern-3"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedPatternId, "C")
    },
    on: {
      "change": _vm.setPatternId,
      "__c": function($event) {
        _vm.selectedPatternId = "C"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-pattern-3"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPatternId),
      expression: "selectedPatternId"
    }],
    attrs: {
      "name": "pattern",
      "type": "radio",
      "value": "D",
      "id": "radio-pattern-4"
    },
    domProps: {
      "checked": _vm._q(_vm.selectedPatternId, "D")
    },
    on: {
      "change": _vm.setPatternId,
      "__c": function($event) {
        _vm.selectedPatternId = "D"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "radio-pattern-4"
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PatternEditor_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67944b46_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_PatternEditor_vue__ = __webpack_require__(23);
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PatternEditor_NoteButton_vue__ = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NoteButton_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fd6d2fd_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_NoteButton_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("2aaae828", content, false);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(true);
// imports


// module
exports.push([module.i, "\n.note[data-v-2fd6d2fd] {\n    width: 80px;\n}\n", "", {"version":3,"sources":["/Users/shinpei/dev/src/github.com/Shinpeim/ScalaJsDrumSequencer/web/src/js/components/PatternEditor/src/js/components/PatternEditor/NoteButton.vue?b10c6990"],"names":[],"mappings":";AACA;IACA,YAAA;CACA","file":"NoteButton.vue","sourcesContent":["<style scoped>\n    .note {\n        width: 80px;\n    }\n</style>\n<template>\n    <div class=\"card-content cel\">\n        <span class=\"note btn-large\"\n              :class=\"[isPlayingBeat ? 'orange' : 'teal', {'lighten-5': ! notes[index]}]\"\n              @click=\"toggleNote(index)\">\n            <span class=\"note\"></span>\n        </span>\n    </div>\n</template>\n<script>\n    import {SequencerQuery, PlayerQuery, SequencerCommand, SequencerEvents, PlayerEvents} from '../../../../../scala/target/scala-2.12/scalajsdrumsequencer-opt'\n\n    export default {\n        props: ['index'],\n\n        mounted(){\n            SequencerEvents.SequencerStateChanged.subscribe(() => {\n                this.updateNote();\n            });\n\n            SequencerEvents.TrackStateChanged.subscribe(() => {\n                this.updateNote();\n            });\n\n            PlayerEvents.PlayerStateChanged.subscribe(() => {\n                this.updatePlayingNotePosition();\n            })\n        },\n\n        computed:{\n            isPlayingBeat(){\n                if (this.playingNotePosition == -1) {\n                    return false;\n                }\n                return (Math.floor(this.playingNotePosition / 4) == Math.floor(this.index / 4));\n            }\n        },\n\n        data(){\n            return {\n                notes: (new SequencerQuery).notes(),\n                playingNotePosition: (new PlayerQuery).playingNotePosition()\n            }\n        },\n        methods: {\n            toggleNote(index) {\n                (new SequencerCommand).toggleNote(parseInt(index));\n            },\n\n            updateNote(){\n                this.notes = (new SequencerQuery).notes();\n            },\n\n            updatePlayingNotePosition(){\n                this.playingNotePosition = (new PlayerQuery).playingNotePosition()\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 18 */
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
/* 19 */
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

var listToStyles = __webpack_require__(20)

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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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