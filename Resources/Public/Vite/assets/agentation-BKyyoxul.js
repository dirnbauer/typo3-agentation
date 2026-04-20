function qp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K_={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),Jp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),om=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),pd=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,J_={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=J_,this.updater=n||G_}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Z_(){}Z_.prototype=Vr.prototype;function Yc(e,t,n){this.props=e,this.context=t,this.refs=J_,this.updater=n||G_}var Xc=Yc.prototype=new Z_;Xc.constructor=Yc;q_(Xc,Vr.prototype);Xc.isPureReactComponent=!0;var md=Array.isArray,ef=Object.prototype.hasOwnProperty,Qc={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var o,r={},l=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)ef.call(t,o)&&!tf.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:el,type:e,key:l,ref:i,props:r,_owner:Qc.current}}function cm(e,t){return{$$typeof:el,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vc(e){return typeof e=="object"&&e!==null&&e.$$typeof===el}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gd=/\/+/g;function ca(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function Xl(e,t,n,o,r){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case el:case Jp:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+ca(i,0):o,md(r)?(n="",e!=null&&(n=e.replace(gd,"$&/")+"/"),Xl(r,t,n,"",function(d){return d})):r!=null&&(Vc(r)&&(r=cm(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(gd,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",md(e))for(var a=0;a<e.length;a++){l=e[a];var c=o+ca(l,a);i+=Xl(l,t,n,c,r)}else if(c=am(e),typeof c=="function")for(e=c.call(e),a=0;!(l=e.next()).done;)l=l.value,c=o+ca(l,a++),i+=Xl(l,t,n,c,r);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function gl(e,t,n){if(e==null)return e;var o=[],r=0;return Xl(e,o,"","",function(l){return t.call(n,l,r++)}),o}function dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},Ql={transition:null},_m={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:Qc};function of(){throw Error("act(...) is not supported in production builds of React.")}Pe.Children={map:gl,forEach:function(e,t,n){gl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gl(e,function(){t++}),t},toArray:function(e){return gl(e,function(t){return t})||[]},only:function(e){if(!Vc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=Vr;Pe.Fragment=Zp;Pe.Profiler=tm;Pe.PureComponent=Yc;Pe.StrictMode=em;Pe.Suspense=sm;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Pe.act=of;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=q_({},e.props),r=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Qc.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)ef.call(t,c)&&!tf.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];o.children=a}return{$$typeof:el,type:e.type,key:r,ref:l,props:o,_owner:i}};Pe.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nm,_context:e},e.Consumer=e};Pe.createElement=nf;Pe.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:rm,render:e}};Pe.isValidElement=Vc;Pe.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:dm}};Pe.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=Ql.transition;Ql.transition={};try{e()}finally{Ql.transition=t}};Pe.unstable_act=of;Pe.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Pe.useContext=function(e){return Vt.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Pe.useId=function(){return Vt.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Pe.useRef=function(e){return Vt.current.useRef(e)};Pe.useState=function(e){return Vt.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Vt.current.useTransition()};Pe.version="18.3.1";K_.exports=Pe;var f=K_.exports;const fm=qp(f);var rf={exports:{}},un={},sf={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,U){var G=I.length;I.push(U);e:for(;0<G;){var Se=G-1>>>1,Fe=I[Se];if(0<r(Fe,U))I[Se]=U,I[G]=Fe,G=Se;else break e}}function n(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var U=I[0],G=I.pop();if(G!==U){I[0]=G;e:for(var Se=0,Fe=I.length,wt=Fe>>>1;Se<wt;){var Pt=2*(Se+1)-1,Dt=I[Pt],Bt=Pt+1,zt=I[Bt];if(0>r(Dt,G))Bt<Fe&&0>r(zt,Dt)?(I[Se]=zt,I[Bt]=G,Se=Bt):(I[Se]=Dt,I[Pt]=G,Se=Pt);else if(Bt<Fe&&0>r(zt,G))I[Se]=zt,I[Bt]=G,Se=Bt;else break e}}return U}function r(I,U){var G=I.sortIndex-U.sortIndex;return G!==0?G:I.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var c=[],d=[],p=1,x=null,g=3,$=!1,k=!1,j=!1,M=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(I){for(var U=n(d);U!==null;){if(U.callback===null)o(d);else if(U.startTime<=I)o(d),U.sortIndex=U.expirationTime,t(c,U);else break;U=n(d)}}function N(I){if(j=!1,b(I),!k)if(n(c)!==null)k=!0,oe(W);else{var U=n(d);U!==null&&lt(N,U.startTime-I)}}function W(I,U){k=!1,j&&(j=!1,h(Q),Q=-1),$=!0;var G=g;try{for(b(U),x=n(c);x!==null&&(!(x.expirationTime>U)||I&&!de());){var Se=x.callback;if(typeof Se=="function"){x.callback=null,g=x.priorityLevel;var Fe=Se(x.expirationTime<=U);U=e.unstable_now(),typeof Fe=="function"?x.callback=Fe:x===n(c)&&o(c),b(U)}else o(c);x=n(c)}if(x!==null)var wt=!0;else{var Pt=n(d);Pt!==null&&lt(N,Pt.startTime-U),wt=!1}return wt}finally{x=null,g=G,$=!1}}var Y=!1,D=null,Q=-1,he=5,q=-1;function de(){return!(e.unstable_now()-q<he)}function Be(){if(D!==null){var I=e.unstable_now();q=I;var U=!0;try{U=D(!0,I)}finally{U?Ae():(Y=!1,D=null)}}else Y=!1}var Ae;if(typeof y=="function")Ae=function(){y(Be)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ne=ke.port2;ke.port1.onmessage=Be,Ae=function(){Ne.postMessage(null)}}else Ae=function(){M(Be,0)};function oe(I){D=I,Y||(Y=!0,Ae())}function lt(I,U){Q=M(function(){I(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){k||$||(k=!0,oe(W))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var G=g;g=U;try{return I()}finally{g=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=g;g=I;try{return U()}finally{g=G}},e.unstable_scheduleCallback=function(I,U,G){var Se=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Se+G:Se):G=Se,I){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=G+Fe,I={id:p++,callback:U,priorityLevel:I,startTime:G,expirationTime:Fe,sortIndex:-1},G>Se?(I.sortIndex=G,t(d,I),n(c)===null&&I===n(d)&&(j?(h(Q),Q=-1):j=!0,lt(N,G-Se))):(I.sortIndex=Fe,t(c,I),k||$||(k=!0,oe(W))),I},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(I){var U=g;return function(){var G=g;g=U;try{return I.apply(this,arguments)}finally{g=G}}}})(lf);sf.exports=lf;var hm=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=f,cn=hm;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Ds={};function lr(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Ds[e]=t,e=0;e<t.length;e++)af.add(t[e])}var oo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yd={},xd={};function gm(e){return Qa.call(xd,e)?!0:Qa.call(yd,e)?!1:mm.test(e)?xd[e]=!0:(yd[e]=!0,!1)}function ym(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xm(e,t,n,o){if(t===null||typeof t>"u"||ym(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Kt(e,t,n,o,r,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Tt[e]=new Kt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Tt[t]=new Kt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Tt[e]=new Kt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Tt[e]=new Kt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Tt[e]=new Kt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Tt[e]=new Kt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Tt[e]=new Kt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Tt[e]=new Kt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Tt[e]=new Kt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kc=/[\-:]([a-z])/g;function Gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kc,Gc);Tt[t]=new Kt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kc,Gc);Tt[t]=new Kt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kc,Gc);Tt[t]=new Kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Tt[e]=new Kt(e,1,!1,e.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Tt[e]=new Kt(e,1,!1,e.toLowerCase(),null,!0,!0)});function qc(e,t,n,o){var r=Tt.hasOwnProperty(t)?Tt[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xm(t,n,r,o)&&(n=null),o||r===null?gm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var io=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),vr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Va=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),go=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),vd=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Object.assign,ua;function bs(e){if(ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ua=t&&t[1]||""}return`
`+ua+e}var da=!1;function _a(e,t){if(!e||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),l=o.stack.split(`
`),i=r.length-1,a=l.length-1;1<=i&&0<=a&&r[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==l[a]){var c=`
`+r[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=a);break}}}finally{da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bs(e):""}function vm(e){switch(e.tag){case 5:return bs(e.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case vr:return"Portal";case Va:return"Profiler";case Jc:return"StrictMode";case Ka:return"Suspense";case Ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Zc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:qa(e.type)||"Memo";case go:t=e._payload,e=e._init;try{return qa(e(t))}catch{}}return null}function wm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(t);case 8:return t===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function No(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bm(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xl(e){e._valueTracker||(e._valueTracker=bm(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=_f(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var n=t.checked;return ft({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=No(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&qc(e,"checked",t,!1)}function Za(e,t){hf(e,t);var n=No(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ec(e,t.type,n):t.hasOwnProperty("defaultValue")&&ec(e,t.type,No(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ec(e,t,n){(t!=="number"||ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ks=Array.isArray;function Rr(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+No(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return ft({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(ks(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:No(n)}}function pf(e,t){var n=No(t.value),o=No(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vl,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},km=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(e){km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),js[t]=js[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||js.hasOwnProperty(e)&&js[e]?(""+t).trim():t+"px"}function xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=yf(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var Sm=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(Sm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function rc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lc=null,Tr=null,Pr=null;function Cd(e){if(e=ol(e)){if(typeof lc!="function")throw Error(H(280));var t=e.stateNode;t&&(t=Pi(t),lc(e.stateNode,e.type,t))}}function vf(e){Tr?Pr?Pr.push(e):Pr=[e]:Tr=e}function wf(){if(Tr){var e=Tr,t=Pr;if(Pr=Tr=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function bf(e,t){return e(t)}function kf(){}var fa=!1;function Sf(e,t,n){if(fa)return e(t,n);fa=!0;try{return bf(e,t,n)}finally{fa=!1,(Tr!==null||Pr!==null)&&(kf(),wf())}}function zs(e,t){var n=e.stateNode;if(n===null)return null;var o=Pi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var ic=!1;if(oo)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){ic=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{ic=!1}function Cm(e,t,n,o,r,l,i,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Ms=!1,si=null,li=!1,ac=null,jm={onError:function(e){Ms=!0,si=e}};function Mm(e,t,n,o,r,l,i,a,c){Ms=!1,si=null,Cm.apply(jm,arguments)}function Em(e,t,n,o,r,l,i,a,c){if(Mm.apply(this,arguments),Ms){if(Ms){var d=si;Ms=!1,si=null}else throw Error(H(198));li||(li=!0,ac=d)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(ir(e)!==e)throw Error(H(188))}function Im(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return jd(r),e;if(l===o)return jd(r),t;l=l.sibling}throw Error(H(188))}if(n.return!==o.return)n=r,o=l;else{for(var i=!1,a=r.child;a;){if(a===n){i=!0,n=r,o=l;break}if(a===o){i=!0,o=r,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,o=r;break}if(a===o){i=!0,o=l,n=r;break}a=a.sibling}if(!i)throw Error(H(189))}}if(n.alternate!==o)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function jf(e){return e=Im(e),e!==null?Mf(e):null}function Mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=cn.unstable_scheduleCallback,Md=cn.unstable_cancelCallback,$m=cn.unstable_shouldYield,Nm=cn.unstable_requestPaint,vt=cn.unstable_now,Lm=cn.unstable_getCurrentPriorityLevel,nu=cn.unstable_ImmediatePriority,If=cn.unstable_UserBlockingPriority,ii=cn.unstable_NormalPriority,Rm=cn.unstable_LowPriority,$f=cn.unstable_IdlePriority,Ni=null,Xn=null;function Tm(e){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:Bm,Pm=Math.log,Dm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Pm(e)/Dm|0)|0}var wl=64,bl=4194304;function Ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~r;a!==0?o=Ss(a):(l&=i,l!==0&&(o=Ss(l)))}else i=n&~r,i!==0?o=Ss(i):l!==0&&(o=Ss(l));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,l=t&-t,r>=l||r===16&&(l&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Tn(t),r=1<<n,o|=e[n],t&=~r;return o}function zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Tn(l),a=1<<i,c=r[i];c===-1?(!(a&n)||a&o)&&(r[i]=zm(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nf(){var e=wl;return wl<<=1,!(wl&4194240)&&(wl=64),e}function ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tn(t),e[t]=n}function Am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Tn(n),l=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~l}}function ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Tn(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var Ze=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rf,ru,Tf,Pf,Df,uc=!1,kl=[],ko=null,So=null,Co=null,Os=new Map,As=new Map,xo=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":ko=null;break;case"dragenter":case"dragleave":So=null;break;case"mouseover":case"mouseout":Co=null;break;case"pointerover":case"pointerout":Os.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(t.pointerId)}}function us(e,t,n,o,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[r]},t!==null&&(t=ol(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Fm(e,t,n,o,r){switch(t){case"focusin":return ko=us(ko,e,t,n,o,r),!0;case"dragenter":return So=us(So,e,t,n,o,r),!0;case"mouseover":return Co=us(Co,e,t,n,o,r),!0;case"pointerover":var l=r.pointerId;return Os.set(l,us(Os.get(l)||null,e,t,n,o,r)),!0;case"gotpointercapture":return l=r.pointerId,As.set(l,us(As.get(l)||null,e,t,n,o,r)),!0}return!1}function Bf(e){var t=Ko(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Cf(n),t!==null){e.blockedOn=t,Df(e.priority,function(){Tf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);sc=o,n.target.dispatchEvent(o),sc=null}else return t=ol(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Id(e,t,n){Vl(e)&&n.delete(t)}function Hm(){uc=!1,ko!==null&&Vl(ko)&&(ko=null),So!==null&&Vl(So)&&(So=null),Co!==null&&Vl(Co)&&(Co=null),Os.forEach(Id),As.forEach(Id)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,uc||(uc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Hm)))}function Ws(e){function t(r){return ds(r,e)}if(0<kl.length){ds(kl[0],e);for(var n=1;n<kl.length;n++){var o=kl[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ko!==null&&ds(ko,e),So!==null&&ds(So,e),Co!==null&&ds(Co,e),Os.forEach(t),As.forEach(t),n=0;n<xo.length;n++)o=xo[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<xo.length&&(n=xo[0],n.blockedOn===null);)Bf(n),n.blockedOn===null&&xo.shift()}var Dr=io.ReactCurrentBatchConfig,ci=!0;function Um(e,t,n,o){var r=Ze,l=Dr.transition;Dr.transition=null;try{Ze=1,su(e,t,n,o)}finally{Ze=r,Dr.transition=l}}function Ym(e,t,n,o){var r=Ze,l=Dr.transition;Dr.transition=null;try{Ze=4,su(e,t,n,o)}finally{Ze=r,Dr.transition=l}}function su(e,t,n,o){if(ci){var r=dc(e,t,n,o);if(r===null)Sa(e,t,o,ui,n),Ed(e,o);else if(Fm(r,e,t,n,o))o.stopPropagation();else if(Ed(e,o),t&4&&-1<Wm.indexOf(e)){for(;r!==null;){var l=ol(r);if(l!==null&&Rf(l),l=dc(e,t,n,o),l===null&&Sa(e,t,o,ui,n),l===r)break;r=l}r!==null&&o.stopPropagation()}else Sa(e,t,o,null,n)}}var ui=null;function dc(e,t,n,o){if(ui=null,e=tu(o),e=Ko(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function zf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case nu:return 1;case If:return 4;case ii:case Rm:return 16;case $f:return 536870912;default:return 16}default:return 16}}var wo=null,lu=null,Kl=null;function Of(){if(Kl)return Kl;var e,t=lu,n=t.length,o,r="value"in wo?wo.value:wo.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[l-o];o++);return Kl=r.slice(e,1<o?1-o:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function $d(){return!1}function dn(e){function t(n,o,r,l,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Sl:$d,this.isPropagationStopped=$d,this}return ft(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=dn(Kr),nl=ft({},Kr,{view:0,detail:0}),Xm=dn(nl),pa,ma,_s,Li=ft({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_s&&(_s&&e.type==="mousemove"?(pa=e.screenX-_s.screenX,ma=e.screenY-_s.screenY):ma=pa=0,_s=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Nd=dn(Li),Qm=ft({},Li,{dataTransfer:0}),Vm=dn(Qm),Km=ft({},nl,{relatedTarget:0}),ga=dn(Km),Gm=ft({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=dn(Gm),Jm=ft({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zm=dn(Jm),e0=ft({},Kr,{data:0}),Ld=dn(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function au(){return r0}var s0=ft({},nl,{key:function(e){if(e.key){var t=t0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=dn(s0),i0=ft({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=dn(i0),a0=ft({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),c0=dn(a0),u0=ft({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=dn(u0),_0=ft({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=dn(_0),h0=[9,13,27,32],cu=oo&&"CompositionEvent"in window,Es=null;oo&&"documentMode"in document&&(Es=document.documentMode);var p0=oo&&"TextEvent"in window&&!Es,Af=oo&&(!cu||Es&&8<Es&&11>=Es),Td=" ",Pd=!1;function Wf(e,t){switch(e){case"keyup":return h0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function m0(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(Pd=!0,Td);case"textInput":return e=t.data,e===Td&&Pd?null:e;default:return null}}function g0(e,t){if(br)return e==="compositionend"||!cu&&Wf(e,t)?(e=Of(),Kl=lu=wo=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y0[e.type]:t==="textarea"}function Hf(e,t,n,o){vf(o),t=di(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Is=null,Fs=null;function x0(e){eh(e,0)}function Ri(e){var t=Cr(e);if(ff(t))return e}function v0(e,t){if(e==="change")return t}var Uf=!1;if(oo){var ya;if(oo){var xa="oninput"in document;if(!xa){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),xa=typeof Bd.oninput=="function"}ya=xa}else ya=!1;Uf=ya&&(!document.documentMode||9<document.documentMode)}function zd(){Is&&(Is.detachEvent("onpropertychange",Yf),Fs=Is=null)}function Yf(e){if(e.propertyName==="value"&&Ri(Fs)){var t=[];Hf(t,Fs,e,tu(e)),Sf(x0,t)}}function w0(e,t,n){e==="focusin"?(zd(),Is=t,Fs=n,Is.attachEvent("onpropertychange",Yf)):e==="focusout"&&zd()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Fs)}function k0(e,t){if(e==="click")return Ri(t)}function S0(e,t){if(e==="input"||e==="change")return Ri(t)}function C0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:C0;function Hs(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Qa.call(t,r)||!Dn(e[r],t[r]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=Od(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Od(n)}}function Xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(){for(var e=window,t=ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j0(e){var t=Qf(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xf(n.ownerDocument.documentElement,n)){if(o!==null&&uu(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,l=Math.min(o.start,r);o=o.end===void 0?l:Math.min(o.end,r),!e.extend&&l>o&&(r=o,o=l,l=r),r=Ad(n,l);var i=Ad(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M0=oo&&"documentMode"in document&&11>=document.documentMode,kr=null,_c=null,$s=null,fc=!1;function Wd(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||kr==null||kr!==ri(o)||(o=kr,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Hs($s,o)||($s=o,o=di(_c,"onSelect"),0<o.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=kr)))}function Cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},va={},Vf={};oo&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Ti(e){if(va[e])return va[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return va[e]=t[n];return e}var Kf=Ti("animationend"),Gf=Ti("animationiteration"),qf=Ti("animationstart"),Jf=Ti("transitionend"),Zf=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ro(e,t){Zf.set(e,t),lr(t,[e])}for(var wa=0;wa<Fd.length;wa++){var ba=Fd[wa],E0=ba.toLowerCase(),I0=ba[0].toUpperCase()+ba.slice(1);Ro(E0,"on"+I0)}Ro(Kf,"onAnimationEnd");Ro(Gf,"onAnimationIteration");Ro(qf,"onAnimationStart");Ro("dblclick","onDoubleClick");Ro("focusin","onFocus");Ro("focusout","onBlur");Ro(Jf,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function Hd(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Em(o,t,void 0,e),e.currentTarget=null}function eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var i=o.length-1;0<=i;i--){var a=o[i],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==l&&r.isPropagationStopped())break e;Hd(r,a,d),l=c}else for(i=0;i<o.length;i++){if(a=o[i],c=a.instance,d=a.currentTarget,a=a.listener,c!==l&&r.isPropagationStopped())break e;Hd(r,a,d),l=c}}}if(li)throw e=ac,li=!1,ac=null,e}function rt(e,t){var n=t[yc];n===void 0&&(n=t[yc]=new Set);var o=e+"__bubble";n.has(o)||(th(t,e,2,!1),n.add(o))}function ka(e,t,n){var o=0;t&&(o|=4),th(n,e,o,t)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Us(e){if(!e[jl]){e[jl]=!0,af.forEach(function(n){n!=="selectionchange"&&($0.has(n)||ka(n,!1,e),ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jl]||(t[jl]=!0,ka("selectionchange",!1,t))}}function th(e,t,n,o){switch(zf(t)){case 1:var r=Um;break;case 4:r=Ym;break;default:r=su}n=r.bind(null,t,n,e),r=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Sa(e,t,n,o,r){var l=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;i=i.return}for(;a!==null;){if(i=Ko(a),i===null)return;if(c=i.tag,c===5||c===6){o=l=i;continue e}a=a.parentNode}}o=o.return}Sf(function(){var d=l,p=tu(n),x=[];e:{var g=Zf.get(e);if(g!==void 0){var $=iu,k=e;switch(e){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":$=l0;break;case"focusin":k="focus",$=ga;break;case"focusout":k="blur",$=ga;break;case"beforeblur":case"afterblur":$=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=c0;break;case Kf:case Gf:case qf:$=qm;break;case Jf:$=d0;break;case"scroll":$=Xm;break;case"wheel":$=f0;break;case"copy":case"cut":case"paste":$=Zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Rd}var j=(t&4)!==0,M=!j&&e==="scroll",h=j?g!==null?g+"Capture":null:g;j=[];for(var y=d,b;y!==null;){b=y;var N=b.stateNode;if(b.tag===5&&N!==null&&(b=N,h!==null&&(N=zs(y,h),N!=null&&j.push(Ys(y,N,b)))),M)break;y=y.return}0<j.length&&(g=new $(g,k,null,n,p),x.push({event:g,listeners:j}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",g&&n!==sc&&(k=n.relatedTarget||n.fromElement)&&(Ko(k)||k[ro]))break e;if(($||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,$?(k=n.relatedTarget||n.toElement,$=d,k=k?Ko(k):null,k!==null&&(M=ir(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):($=null,k=d),$!==k)){if(j=Nd,N="onMouseLeave",h="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(j=Rd,N="onPointerLeave",h="onPointerEnter",y="pointer"),M=$==null?g:Cr($),b=k==null?g:Cr(k),g=new j(N,y+"leave",$,n,p),g.target=M,g.relatedTarget=b,N=null,Ko(p)===d&&(j=new j(h,y+"enter",k,n,p),j.target=b,j.relatedTarget=M,N=j),M=N,$&&k)t:{for(j=$,h=k,y=0,b=j;b;b=mr(b))y++;for(b=0,N=h;N;N=mr(N))b++;for(;0<y-b;)j=mr(j),y--;for(;0<b-y;)h=mr(h),b--;for(;y--;){if(j===h||h!==null&&j===h.alternate)break t;j=mr(j),h=mr(h)}j=null}else j=null;$!==null&&Ud(x,g,$,j,!1),k!==null&&M!==null&&Ud(x,M,k,j,!0)}}e:{if(g=d?Cr(d):window,$=g.nodeName&&g.nodeName.toLowerCase(),$==="select"||$==="input"&&g.type==="file")var W=v0;else if(Dd(g))if(Uf)W=S0;else{W=b0;var Y=w0}else($=g.nodeName)&&$.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(W=k0);if(W&&(W=W(e,d))){Hf(x,W,n,p);break e}Y&&Y(e,g,d),e==="focusout"&&(Y=g._wrapperState)&&Y.controlled&&g.type==="number"&&ec(g,"number",g.value)}switch(Y=d?Cr(d):window,e){case"focusin":(Dd(Y)||Y.contentEditable==="true")&&(kr=Y,_c=d,$s=null);break;case"focusout":$s=_c=kr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Wd(x,n,p);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Wd(x,n,p)}var D;if(cu)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else br?Wf(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Af&&n.locale!=="ko"&&(br||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&br&&(D=Of()):(wo=p,lu="value"in wo?wo.value:wo.textContent,br=!0)),Y=di(d,Q),0<Y.length&&(Q=new Ld(Q,e,null,n,p),x.push({event:Q,listeners:Y}),D?Q.data=D:(D=Ff(n),D!==null&&(Q.data=D)))),(D=p0?m0(e,n):g0(e,n))&&(d=di(d,"onBeforeInput"),0<d.length&&(p=new Ld("onBeforeInput","beforeinput",null,n,p),x.push({event:p,listeners:d}),p.data=D))}eh(x,t)})}function Ys(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=zs(e,n),l!=null&&o.unshift(Ys(e,l,r)),l=zs(e,t),l!=null&&o.push(Ys(e,l,r))),e=e.return}return o}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ud(e,t,n,o,r){for(var l=t._reactName,i=[];n!==null&&n!==o;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===o)break;a.tag===5&&d!==null&&(a=d,r?(c=zs(n,l),c!=null&&i.unshift(Ys(n,c,a))):r||(c=zs(n,l),c!=null&&i.push(Ys(n,c,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var N0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(N0,`
`).replace(L0,"")}function Ml(e,t,n){if(t=Yd(t),Yd(e)!==t&&n)throw Error(H(425))}function _i(){}var hc=null,pc=null;function mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(P0)}:gc;function P0(e){setTimeout(function(){throw e})}function Ca(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),Ws(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);Ws(t)}function jo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Gr,Xs="__reactProps$"+Gr,ro="__reactContainer$"+Gr,yc="__reactEvents$"+Gr,D0="__reactListeners$"+Gr,B0="__reactHandles$"+Gr;function Ko(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ro]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qd(e);e!==null;){if(n=e[Yn])return n;e=Qd(e)}return t}e=n,n=e.parentNode}return null}function ol(e){return e=e[Yn]||e[ro],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Pi(e){return e[Xs]||null}var xc=[],jr=-1;function To(e){return{current:e}}function st(e){0>jr||(e.current=xc[jr],xc[jr]=null,jr--)}function ot(e,t){jr++,xc[jr]=e.current,e.current=t}var Lo={},Ht=To(Lo),en=To(!1),er=Lo;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Lo;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in n)r[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function tn(e){return e=e.childContextTypes,e!=null}function fi(){st(en),st(Ht)}function Vd(e,t,n){if(Ht.current!==Lo)throw Error(H(168));ot(Ht,t),ot(en,n)}function nh(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(H(108,wm(e)||"Unknown",r));return ft({},n,o)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lo,er=Ht.current,ot(Ht,e),ot(en,en.current),!0}function Kd(e,t,n){var o=e.stateNode;if(!o)throw Error(H(169));n?(e=nh(e,t,er),o.__reactInternalMemoizedMergedChildContext=e,st(en),st(Ht),ot(Ht,e)):st(en),ot(en,n)}var Zn=null,Di=!1,ja=!1;function oh(e){Zn===null?Zn=[e]:Zn.push(e)}function z0(e){Di=!0,oh(e)}function Po(){if(!ja&&Zn!==null){ja=!0;var e=0,t=Ze;try{var n=Zn;for(Ze=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Zn=null,Di=!1}catch(r){throw Zn!==null&&(Zn=Zn.slice(e+1)),Ef(nu,Po),r}finally{Ze=t,ja=!1}}return null}var Mr=[],Er=0,pi=null,mi=0,yn=[],xn=0,tr=null,eo=1,to="";function Xo(e,t){Mr[Er++]=mi,Mr[Er++]=pi,pi=e,mi=t}function rh(e,t,n){yn[xn++]=eo,yn[xn++]=to,yn[xn++]=tr,tr=e;var o=eo;e=to;var r=32-Tn(o)-1;o&=~(1<<r),n+=1;var l=32-Tn(t)+r;if(30<l){var i=r-r%5;l=(o&(1<<i)-1).toString(32),o>>=i,r-=i,eo=1<<32-Tn(t)+r|n<<r|o,to=l+e}else eo=1<<l|n<<r|o,to=e}function du(e){e.return!==null&&(Xo(e,1),rh(e,1,0))}function _u(e){for(;e===pi;)pi=Mr[--Er],Mr[Er]=null,mi=Mr[--Er],Mr[Er]=null;for(;e===tr;)tr=yn[--xn],yn[xn]=null,to=yn[--xn],yn[xn]=null,eo=yn[--xn],yn[xn]=null}var an=null,ln=null,it=!1,Rn=null;function sh(e,t){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,an=e,ln=jo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,an=e,ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:eo,overflow:to}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,an=e,ln=null,!0):!1;default:return!1}}function vc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wc(e){if(it){var t=ln;if(t){var n=t;if(!Gd(e,t)){if(vc(e))throw Error(H(418));t=jo(n.nextSibling);var o=an;t&&Gd(e,t)?sh(o,n):(e.flags=e.flags&-4097|2,it=!1,an=e)}}else{if(vc(e))throw Error(H(418));e.flags=e.flags&-4097|2,it=!1,an=e}}}function qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function El(e){if(e!==an)return!1;if(!it)return qd(e),it=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mc(e.type,e.memoizedProps)),t&&(t=ln)){if(vc(e))throw lh(),Error(H(418));for(;t;)sh(e,t),t=jo(t.nextSibling)}if(qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ln=jo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ln=null}}else ln=an?jo(e.stateNode.nextSibling):null;return!0}function lh(){for(var e=ln;e;)e=jo(e.nextSibling)}function Fr(){ln=an=null,it=!1}function fu(e){Rn===null?Rn=[e]:Rn.push(e)}var O0=io.ReactCurrentBatchConfig;function fs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var o=n.stateNode}if(!o)throw Error(H(147,e));var r=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=r.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function Il(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jd(e){var t=e._init;return t(e._payload)}function ih(e){function t(h,y){if(e){var b=h.deletions;b===null?(h.deletions=[y],h.flags|=16):b.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)t(h,y),y=y.sibling;return null}function o(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function r(h,y){return h=$o(h,y),h.index=0,h.sibling=null,h}function l(h,y,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<y?(h.flags|=2,y):b):(h.flags|=2,y)):(h.flags|=1048576,y)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,y,b,N){return y===null||y.tag!==6?(y=Ra(b,h.mode,N),y.return=h,y):(y=r(y,b),y.return=h,y)}function c(h,y,b,N){var W=b.type;return W===wr?p(h,y,b.props.children,N,b.key):y!==null&&(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===go&&Jd(W)===y.type)?(N=r(y,b.props),N.ref=fs(h,y,b),N.return=h,N):(N=oi(b.type,b.key,b.props,null,h.mode,N),N.ref=fs(h,y,b),N.return=h,N)}function d(h,y,b,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=Ta(b,h.mode,N),y.return=h,y):(y=r(y,b.children||[]),y.return=h,y)}function p(h,y,b,N,W){return y===null||y.tag!==7?(y=Zo(b,h.mode,N,W),y.return=h,y):(y=r(y,b),y.return=h,y)}function x(h,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ra(""+y,h.mode,b),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return b=oi(y.type,y.key,y.props,null,h.mode,b),b.ref=fs(h,null,y),b.return=h,b;case vr:return y=Ta(y,h.mode,b),y.return=h,y;case go:var N=y._init;return x(h,N(y._payload),b)}if(ks(y)||as(y))return y=Zo(y,h.mode,b,null),y.return=h,y;Il(h,y)}return null}function g(h,y,b,N){var W=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return W!==null?null:a(h,y,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case yl:return b.key===W?c(h,y,b,N):null;case vr:return b.key===W?d(h,y,b,N):null;case go:return W=b._init,g(h,y,W(b._payload),N)}if(ks(b)||as(b))return W!==null?null:p(h,y,b,N,null);Il(h,b)}return null}function $(h,y,b,N,W){if(typeof N=="string"&&N!==""||typeof N=="number")return h=h.get(b)||null,a(y,h,""+N,W);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case yl:return h=h.get(N.key===null?b:N.key)||null,c(y,h,N,W);case vr:return h=h.get(N.key===null?b:N.key)||null,d(y,h,N,W);case go:var Y=N._init;return $(h,y,b,Y(N._payload),W)}if(ks(N)||as(N))return h=h.get(b)||null,p(y,h,N,W,null);Il(y,N)}return null}function k(h,y,b,N){for(var W=null,Y=null,D=y,Q=y=0,he=null;D!==null&&Q<b.length;Q++){D.index>Q?(he=D,D=null):he=D.sibling;var q=g(h,D,b[Q],N);if(q===null){D===null&&(D=he);break}e&&D&&q.alternate===null&&t(h,D),y=l(q,y,Q),Y===null?W=q:Y.sibling=q,Y=q,D=he}if(Q===b.length)return n(h,D),it&&Xo(h,Q),W;if(D===null){for(;Q<b.length;Q++)D=x(h,b[Q],N),D!==null&&(y=l(D,y,Q),Y===null?W=D:Y.sibling=D,Y=D);return it&&Xo(h,Q),W}for(D=o(h,D);Q<b.length;Q++)he=$(D,h,Q,b[Q],N),he!==null&&(e&&he.alternate!==null&&D.delete(he.key===null?Q:he.key),y=l(he,y,Q),Y===null?W=he:Y.sibling=he,Y=he);return e&&D.forEach(function(de){return t(h,de)}),it&&Xo(h,Q),W}function j(h,y,b,N){var W=as(b);if(typeof W!="function")throw Error(H(150));if(b=W.call(b),b==null)throw Error(H(151));for(var Y=W=null,D=y,Q=y=0,he=null,q=b.next();D!==null&&!q.done;Q++,q=b.next()){D.index>Q?(he=D,D=null):he=D.sibling;var de=g(h,D,q.value,N);if(de===null){D===null&&(D=he);break}e&&D&&de.alternate===null&&t(h,D),y=l(de,y,Q),Y===null?W=de:Y.sibling=de,Y=de,D=he}if(q.done)return n(h,D),it&&Xo(h,Q),W;if(D===null){for(;!q.done;Q++,q=b.next())q=x(h,q.value,N),q!==null&&(y=l(q,y,Q),Y===null?W=q:Y.sibling=q,Y=q);return it&&Xo(h,Q),W}for(D=o(h,D);!q.done;Q++,q=b.next())q=$(D,h,Q,q.value,N),q!==null&&(e&&q.alternate!==null&&D.delete(q.key===null?Q:q.key),y=l(q,y,Q),Y===null?W=q:Y.sibling=q,Y=q);return e&&D.forEach(function(Be){return t(h,Be)}),it&&Xo(h,Q),W}function M(h,y,b,N){if(typeof b=="object"&&b!==null&&b.type===wr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case yl:e:{for(var W=b.key,Y=y;Y!==null;){if(Y.key===W){if(W=b.type,W===wr){if(Y.tag===7){n(h,Y.sibling),y=r(Y,b.props.children),y.return=h,h=y;break e}}else if(Y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===go&&Jd(W)===Y.type){n(h,Y.sibling),y=r(Y,b.props),y.ref=fs(h,Y,b),y.return=h,h=y;break e}n(h,Y);break}else t(h,Y);Y=Y.sibling}b.type===wr?(y=Zo(b.props.children,h.mode,N,b.key),y.return=h,h=y):(N=oi(b.type,b.key,b.props,null,h.mode,N),N.ref=fs(h,y,b),N.return=h,h=N)}return i(h);case vr:e:{for(Y=b.key;y!==null;){if(y.key===Y)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(h,y.sibling),y=r(y,b.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else t(h,y);y=y.sibling}y=Ta(b,h.mode,N),y.return=h,h=y}return i(h);case go:return Y=b._init,M(h,y,Y(b._payload),N)}if(ks(b))return k(h,y,b,N);if(as(b))return j(h,y,b,N);Il(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(n(h,y.sibling),y=r(y,b),y.return=h,h=y):(n(h,y),y=Ra(b,h.mode,N),y.return=h,h=y),i(h)):n(h,y)}return M}var Hr=ih(!0),ah=ih(!1),gi=To(null),yi=null,Ir=null,hu=null;function pu(){hu=Ir=yi=null}function mu(e){var t=gi.current;st(gi),e._currentValue=t}function bc(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){yi=e,hu=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Zt=!0),e.firstContext=null)}function bn(e){var t=e._currentValue;if(hu!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(yi===null)throw Error(H(308));Ir=e,yi.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Go=null;function gu(e){Go===null?Go=[e]:Go.push(e)}function ch(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,gu(t)):(n.next=r.next,r.next=n),t.interleaved=n,so(e,o)}function so(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yo=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mo(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Ue&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,so(e,n)}return r=o.interleaved,r===null?(t.next=t,gu(o)):(t.next=r.next,r.next=t),o.interleaved=t,so(e,n)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ou(e,n)}}function Zd(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?r=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xi(e,t,n,o){var r=e.updateQueue;yo=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,d=c.next;c.next=null,i===null?l=d:i.next=d,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=d:a.next=d,p.lastBaseUpdate=c))}if(l!==null){var x=r.baseState;i=0,p=d=c=null,a=l;do{var g=a.lane,$=a.eventTime;if((o&g)===g){p!==null&&(p=p.next={eventTime:$,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,j=a;switch(g=t,$=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){x=k.call($,x,g);break e}x=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,g=typeof k=="function"?k.call($,x,g):k,g==null)break e;x=ft({},x,g);break e;case 2:yo=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[a]:g.push(a))}else $={eventTime:$,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(d=p=$,c=x):p=p.next=$,i|=g;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;g=a,a=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(p===null&&(c=x),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=p,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else l===null&&(r.shared.lanes=0);or|=i,e.lanes=i,e.memoizedState=x}}function e_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(H(191,r));r.call(o)}}}var rl={},Qn=To(rl),Qs=To(rl),Vs=To(rl);function qo(e){if(e===rl)throw Error(H(174));return e}function xu(e,t){switch(ot(Vs,t),ot(Qs,e),ot(Qn,rl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nc(t,e)}st(Qn),ot(Qn,t)}function Ur(){st(Qn),st(Qs),st(Vs)}function dh(e){qo(Vs.current);var t=qo(Qn.current),n=nc(t,e.type);t!==n&&(ot(Qs,e),ot(Qn,n))}function vu(e){Qs.current===e&&(st(Qn),st(Qs))}var dt=To(0);function vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ma=[];function wu(){for(var e=0;e<Ma.length;e++)Ma[e]._workInProgressVersionPrimary=null;Ma.length=0}var Jl=io.ReactCurrentDispatcher,Ea=io.ReactCurrentBatchConfig,nr=0,_t=null,Mt=null,It=null,wi=!1,Ns=!1,Ks=0,A0=0;function At(){throw Error(H(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function ku(e,t,n,o,r,l){if(nr=l,_t=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jl.current=e===null||e.memoizedState===null?U0:Y0,e=n(o,r),Ns){l=0;do{if(Ns=!1,Ks=0,25<=l)throw Error(H(301));l+=1,It=Mt=null,t.updateQueue=null,Jl.current=X0,e=n(o,r)}while(Ns)}if(Jl.current=bi,t=Mt!==null&&Mt.next!==null,nr=0,It=Mt=_t=null,wi=!1,t)throw Error(H(300));return e}function Su(){var e=Ks!==0;return Ks=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=e:It=It.next=e,It}function kn(){if(Mt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Mt.next;var t=It===null?_t.memoizedState:It.next;if(t!==null)It=t,Mt=e;else{if(e===null)throw Error(H(310));Mt=e,e={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},It===null?_t.memoizedState=It=e:It=It.next=e}return It}function Gs(e,t){return typeof t=="function"?t(e):t}function Ia(e){var t=kn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var o=Mt,r=o.baseQueue,l=n.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}o.baseQueue=r=l,n.pending=null}if(r!==null){l=r.next,o=o.baseState;var a=i=null,c=null,d=l;do{var p=d.lane;if((nr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var x={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=x,i=o):c=c.next=x,_t.lanes|=p,or|=p}d=d.next}while(d!==null&&d!==l);c===null?i=o:c.next=a,Dn(o,t.memoizedState)||(Zt=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do l=r.lane,_t.lanes|=l,or|=l,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $a(e){var t=kn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do l=e(l,i.action),i=i.next;while(i!==r);Dn(l,t.memoizedState)||(Zt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function _h(){}function fh(e,t){var n=_t,o=kn(),r=t(),l=!Dn(o.memoizedState,r);if(l&&(o.memoizedState=r,Zt=!0),o=o.queue,Cu(mh.bind(null,n,o,e),[e]),o.getSnapshot!==t||l||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,qs(9,ph.bind(null,n,o,r,t),void 0,null),$t===null)throw Error(H(349));nr&30||hh(n,t,r)}return r}function hh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,o){t.value=n,t.getSnapshot=o,gh(t)&&yh(e)}function mh(e,t,n){return n(function(){gh(t)&&yh(e)})}function gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function yh(e){var t=so(e,1);t!==null&&Pn(t,e,1,-1)}function t_(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},t.queue=e,e=e.dispatch=H0.bind(null,_t,e),[t.memoizedState,e]}function qs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function xh(){return kn().memoizedState}function Zl(e,t,n,o){var r=Un();_t.flags|=e,r.memoizedState=qs(1|t,n,void 0,o===void 0?null:o)}function Bi(e,t,n,o){var r=kn();o=o===void 0?null:o;var l=void 0;if(Mt!==null){var i=Mt.memoizedState;if(l=i.destroy,o!==null&&bu(o,i.deps)){r.memoizedState=qs(t,n,l,o);return}}_t.flags|=e,r.memoizedState=qs(1|t,n,l,o)}function n_(e,t){return Zl(8390656,8,e,t)}function Cu(e,t){return Bi(2048,8,e,t)}function vh(e,t){return Bi(4,2,e,t)}function wh(e,t){return Bi(4,4,e,t)}function bh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kh(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4,4,bh.bind(null,t,e),n)}function ju(){}function Sh(e,t){var n=kn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&bu(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Ch(e,t){var n=kn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&bu(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function jh(e,t,n){return nr&21?(Dn(n,t)||(n=Nf(),_t.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=n)}function W0(e,t){var n=Ze;Ze=n!==0&&4>n?n:4,e(!0);var o=Ea.transition;Ea.transition={};try{e(!1),t()}finally{Ze=n,Ea.transition=o}}function Mh(){return kn().memoizedState}function F0(e,t,n){var o=Io(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Eh(e))Ih(t,n);else if(n=ch(e,t,n,o),n!==null){var r=Xt();Pn(n,e,o,r),$h(n,t,o)}}function H0(e,t,n){var o=Io(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eh(e))Ih(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(r.hasEagerState=!0,r.eagerState=a,Dn(a,i)){var c=t.interleaved;c===null?(r.next=r,gu(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=ch(e,t,r,o),n!==null&&(r=Xt(),Pn(n,e,o,r),$h(n,t,o))}}function Eh(e){var t=e.alternate;return e===_t||t!==null&&t===_t}function Ih(e,t){Ns=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $h(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ou(e,n)}}var bi={readContext:bn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},U0={readContext:bn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:bn,useEffect:n_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zl(4194308,4,bh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zl(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Un();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=F0.bind(null,_t,e),[o.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:t_,useDebugValue:ju,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=t_(!1),t=e[0];return e=W0.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=_t,r=Un();if(it){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),$t===null)throw Error(H(349));nr&30||hh(o,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,n_(mh.bind(null,o,l,e),[e]),o.flags|=2048,qs(9,ph.bind(null,o,l,n,t),void 0,null),n},useId:function(){var e=Un(),t=$t.identifierPrefix;if(it){var n=to,o=eo;n=(o&~(1<<32-Tn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ks++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=A0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y0={readContext:bn,useCallback:Sh,useContext:bn,useEffect:Cu,useImperativeHandle:kh,useInsertionEffect:vh,useLayoutEffect:wh,useMemo:Ch,useReducer:Ia,useRef:xh,useState:function(){return Ia(Gs)},useDebugValue:ju,useDeferredValue:function(e){var t=kn();return jh(t,Mt.memoizedState,e)},useTransition:function(){var e=Ia(Gs)[0],t=kn().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:fh,useId:Mh,unstable_isNewReconciler:!1},X0={readContext:bn,useCallback:Sh,useContext:bn,useEffect:Cu,useImperativeHandle:kh,useInsertionEffect:vh,useLayoutEffect:wh,useMemo:Ch,useReducer:$a,useRef:xh,useState:function(){return $a(Gs)},useDebugValue:ju,useDeferredValue:function(e){var t=kn();return Mt===null?t.memoizedState=e:jh(t,Mt.memoizedState,e)},useTransition:function(){var e=$a(Gs)[0],t=kn().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:fh,useId:Mh,unstable_isNewReconciler:!1};function $n(e,t){if(e&&e.defaultProps){t=ft({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kc(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ft({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Xt(),r=Io(e),l=no(o,r);l.payload=t,n!=null&&(l.callback=n),t=Mo(e,l,r),t!==null&&(Pn(t,e,r,o),ql(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Xt(),r=Io(e),l=no(o,r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Mo(e,l,r),t!==null&&(Pn(t,e,r,o),ql(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),o=Io(e),r=no(n,o);r.tag=2,t!=null&&(r.callback=t),t=Mo(e,r,o),t!==null&&(Pn(t,e,o,n),ql(t,e,o))}};function o_(e,t,n,o,r,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,i):t.prototype&&t.prototype.isPureReactComponent?!Hs(n,o)||!Hs(r,l):!0}function Nh(e,t,n){var o=!1,r=Lo,l=t.contextType;return typeof l=="object"&&l!==null?l=bn(l):(r=tn(t)?er:Ht.current,o=t.contextTypes,l=(o=o!=null)?Wr(e,r):Lo),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),t}function r_(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function Sc(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},yu(e);var l=t.contextType;typeof l=="object"&&l!==null?r.context=bn(l):(l=tn(t)?er:Ht.current,r.context=Wr(e,l)),r.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(kc(e,t,l,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&zi.enqueueReplaceState(r,r.state,null),xi(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",o=t;do n+=vm(o),o=o.return;while(o);var r=n}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:r,digest:null}}function Na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Q0=typeof WeakMap=="function"?WeakMap:Map;function Lh(e,t,n){n=no(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Si||(Si=!0,Pc=o),Cc(e,t)},n}function Rh(e,t,n){n=no(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){Cc(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Cc(e,t),typeof o!="function"&&(Eo===null?Eo=new Set([this]):Eo.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function s_(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Q0;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function l_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function i_(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=no(-1,1),t.tag=2,Mo(n,t,1))),n.lanes|=1),e)}var V0=io.ReactCurrentOwner,Zt=!1;function Yt(e,t,n,o){t.child=e===null?ah(t,null,n,o):Hr(t,e.child,n,o)}function a_(e,t,n,o,r){n=n.render;var l=t.ref;return Br(t,r),o=ku(e,t,n,o,l,r),n=Su(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,lo(e,t,r)):(it&&n&&du(t),t.flags|=1,Yt(e,t,o,r),t.child)}function c_(e,t,n,o,r){if(e===null){var l=n.type;return typeof l=="function"&&!Tu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Th(e,t,l,o,r)):(e=oi(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&r)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(i,o)&&e.ref===t.ref)return lo(e,t,r)}return t.flags|=1,e=$o(l,o),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,n,o,r){if(e!==null){var l=e.memoizedProps;if(Hs(l,o)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=o=l,(e.lanes&r)!==0)e.flags&131072&&(Zt=!0);else return t.lanes=e.lanes,lo(e,t,r)}return jc(e,t,n,o,r)}function Ph(e,t,n){var o=t.pendingProps,r=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Nr,sn),sn|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ot(Nr,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,ot(Nr,sn),sn|=o}else l!==null?(o=l.baseLanes|n,t.memoizedState=null):o=n,ot(Nr,sn),sn|=o;return Yt(e,t,r,n),t.child}function Dh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,n,o,r){var l=tn(n)?er:Ht.current;return l=Wr(t,l),Br(t,r),n=ku(e,t,n,o,l,r),o=Su(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,lo(e,t,r)):(it&&o&&du(t),t.flags|=1,Yt(e,t,n,r),t.child)}function u_(e,t,n,o,r){if(tn(n)){var l=!0;hi(t)}else l=!1;if(Br(t,r),t.stateNode===null)ei(e,t),Nh(t,n,o),Sc(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=bn(d):(d=tn(n)?er:Ht.current,d=Wr(t,d));var p=n.getDerivedStateFromProps,x=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||c!==d)&&r_(t,i,o,d),yo=!1;var g=t.memoizedState;i.state=g,xi(t,o,i,r),c=t.memoizedState,a!==o||g!==c||en.current||yo?(typeof p=="function"&&(kc(t,n,p,o),c=t.memoizedState),(a=yo||o_(t,n,a,o,g,c,d))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=d,o=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,uh(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:$n(t.type,a),i.props=d,x=t.pendingProps,g=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=bn(c):(c=tn(n)?er:Ht.current,c=Wr(t,c));var $=n.getDerivedStateFromProps;(p=typeof $=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==x||g!==c)&&r_(t,i,o,c),yo=!1,g=t.memoizedState,i.state=g,xi(t,o,i,r);var k=t.memoizedState;a!==x||g!==k||en.current||yo?(typeof $=="function"&&(kc(t,n,$,o),k=t.memoizedState),(d=yo||o_(t,n,d,o,g,k,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,k,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,k,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),i.props=o,i.state=k,i.context=c,o=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return Mc(e,t,n,o,l,r)}function Mc(e,t,n,o,r,l){Dh(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&Kd(t,n,!1),lo(e,t,l);o=t.stateNode,V0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Hr(t,e.child,null,l),t.child=Hr(t,null,a,l)):Yt(e,t,a,l),t.memoizedState=o.state,r&&Kd(t,n,!0),t.child}function Bh(e){var t=e.stateNode;t.pendingContext?Vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vd(e,t.context,!1),xu(e,t.containerInfo)}function d_(e,t,n,o,r){return Fr(),fu(r),t.flags|=256,Yt(e,t,n,o),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Ic(e){return{baseLanes:e,cachePool:null,transitions:null}}function zh(e,t,n){var o=t.pendingProps,r=dt.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ot(dt,r&1),e===null)return wc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,l?(o=t.mode,l=t.child,i={mode:"hidden",children:i},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Wi(i,o,0,null),e=Zo(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ic(n),t.memoizedState=Ec,e):Mu(t,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return K0(e,t,i,o,a,r,n);if(l){l=o.fallback,i=t.mode,r=e.child,a=r.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=$o(r,c),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?l=$o(a,l):(l=Zo(l,i,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,i=e.child.memoizedState,i=i===null?Ic(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ec,o}return l=e.child,e=l.sibling,o=$o(l,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Mu(e,t){return t=Wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $l(e,t,n,o){return o!==null&&fu(o),Hr(t,e.child,null,n),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,o,r,l,i){if(n)return t.flags&256?(t.flags&=-257,o=Na(Error(H(422))),$l(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,r=t.mode,o=Wi({mode:"visible",children:o.children},r,0,null),l=Zo(l,r,i,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,t.mode&1&&Hr(t,e.child,null,i),t.child.memoizedState=Ic(i),t.memoizedState=Ec,l);if(!(t.mode&1))return $l(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,l=Error(H(419)),o=Na(l,o,void 0),$l(e,t,i,o)}if(a=(i&e.childLanes)!==0,Zt||a){if(o=$t,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,so(e,r),Pn(o,e,r,-1))}return Ru(),o=Na(Error(H(421))),$l(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=ag.bind(null,e),r._reactRetry=t,null):(e=l.treeContext,ln=jo(r.nextSibling),an=t,it=!0,Rn=null,e!==null&&(yn[xn++]=eo,yn[xn++]=to,yn[xn++]=tr,eo=e.id,to=e.overflow,tr=t),t=Mu(t,o.children),t.flags|=4096,t)}function __(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),bc(e.return,t,n)}function La(e,t,n,o,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=r)}function Oh(e,t,n){var o=t.pendingProps,r=o.revealOrder,l=o.tail;if(Yt(e,t,o.children,n),o=dt.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&__(e,n,t);else if(e.tag===19)__(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ot(dt,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&vi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),La(t,!1,r,n,l);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&vi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}La(t,!0,n,null,l);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=$o(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$o(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G0(e,t,n){switch(t.tag){case 3:Bh(t),Fr();break;case 5:dh(t);break;case 1:tn(t.type)&&hi(t);break;case 4:xu(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;ot(gi,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ot(dt,dt.current&1),t.flags|=128,null):n&t.child.childLanes?zh(e,t,n):(ot(dt,dt.current&1),e=lo(e,t,n),e!==null?e.sibling:null);ot(dt,dt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Oh(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(dt,dt.current),o)break;return null;case 22:case 23:return t.lanes=0,Ph(e,t,n)}return lo(e,t,n)}var Ah,$c,Wh,Fh;Ah=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};Wh=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,qo(Qn.current);var l=null;switch(n){case"input":r=Ja(e,r),o=Ja(e,o),l=[];break;case"select":r=ft({},r,{value:void 0}),o=ft({},o,{value:void 0}),l=[];break;case"textarea":r=tc(e,r),o=tc(e,o),l=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=_i)}oc(n,o);var i;n=null;for(d in r)if(!o.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var a=r[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ds.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in o){var c=o[d];if(a=r?.[d],o.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&a[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&rt("scroll",e),l||a===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Fh=function(e,t,n,o){n!==o&&(t.flags|=4)};function hs(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function q0(e,t,n){var o=t.pendingProps;switch(_u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(t),null;case 1:return tn(t.type)&&fi(),Wt(t),null;case 3:return o=t.stateNode,Ur(),st(en),st(Ht),wu(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(El(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rn!==null&&(zc(Rn),Rn=null))),$c(e,t),Wt(t),null;case 5:vu(t);var r=qo(Vs.current);if(n=t.type,e!==null&&t.stateNode!=null)Wh(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(H(166));return Wt(t),null}if(e=qo(Qn.current),El(t)){o=t.stateNode,n=t.type;var l=t.memoizedProps;switch(o[Yn]=t,o[Xs]=l,e=(t.mode&1)!==0,n){case"dialog":rt("cancel",o),rt("close",o);break;case"iframe":case"object":case"embed":rt("load",o);break;case"video":case"audio":for(r=0;r<Cs.length;r++)rt(Cs[r],o);break;case"source":rt("error",o);break;case"img":case"image":case"link":rt("error",o),rt("load",o);break;case"details":rt("toggle",o);break;case"input":wd(o,l),rt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},rt("invalid",o);break;case"textarea":kd(o,l),rt("invalid",o)}oc(n,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?o.textContent!==a&&(l.suppressHydrationWarning!==!0&&Ml(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Ml(o.textContent,a,e),r=["children",""+a]):Ds.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&rt("scroll",o)}switch(n){case"input":xl(o),bd(o,l,!0);break;case"textarea":xl(o),Sd(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=_i)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[Yn]=t,e[Xs]=o,Ah(e,t,!1,!1),t.stateNode=e;e:{switch(i=rc(n,o),n){case"dialog":rt("cancel",e),rt("close",e),r=o;break;case"iframe":case"object":case"embed":rt("load",e),r=o;break;case"video":case"audio":for(r=0;r<Cs.length;r++)rt(Cs[r],e);r=o;break;case"source":rt("error",e),r=o;break;case"img":case"image":case"link":rt("error",e),rt("load",e),r=o;break;case"details":rt("toggle",e),r=o;break;case"input":wd(e,o),r=Ja(e,o),rt("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=ft({},o,{value:void 0}),rt("invalid",e);break;case"textarea":kd(e,o),r=tc(e,o),rt("invalid",e);break;default:r=o}oc(n,r),a=r;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?xf(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gf(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bs(e,c):typeof c=="number"&&Bs(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ds.hasOwnProperty(l)?c!=null&&l==="onScroll"&&rt("scroll",e):c!=null&&qc(e,l,c,i))}switch(n){case"input":xl(e),bd(e,o,!1);break;case"textarea":xl(e),Sd(e);break;case"option":o.value!=null&&e.setAttribute("value",""+No(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Rr(e,!!o.multiple,l,!1):o.defaultValue!=null&&Rr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Wt(t),null;case 6:if(e&&t.stateNode!=null)Fh(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(H(166));if(n=qo(Vs.current),qo(Qn.current),El(t)){if(o=t.stateNode,n=t.memoizedProps,o[Yn]=t,(l=o.nodeValue!==n)&&(e=an,e!==null))switch(e.tag){case 3:Ml(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ml(o.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Yn]=t,t.stateNode=o}return Wt(t),null;case 13:if(st(dt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(it&&ln!==null&&t.mode&1&&!(t.flags&128))lh(),Fr(),t.flags|=98560,l=!1;else if(l=El(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(H(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(H(317));l[Yn]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Wt(t),l=!1}else Rn!==null&&(zc(Rn),Rn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||dt.current&1?Et===0&&(Et=3):Ru())),t.updateQueue!==null&&(t.flags|=4),Wt(t),null);case 4:return Ur(),$c(e,t),e===null&&Us(t.stateNode.containerInfo),Wt(t),null;case 10:return mu(t.type._context),Wt(t),null;case 17:return tn(t.type)&&fi(),Wt(t),null;case 19:if(st(dt),l=t.memoizedState,l===null)return Wt(t),null;if(o=(t.flags&128)!==0,i=l.rendering,i===null)if(o)hs(l,!1);else{if(Et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=vi(e),i!==null){for(t.flags|=128,hs(l,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)l=n,e=o,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ot(dt,dt.current&1|2),t.child}e=e.sibling}l.tail!==null&&vt()>Xr&&(t.flags|=128,o=!0,hs(l,!1),t.lanes=4194304)}else{if(!o)if(e=vi(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!it)return Wt(t),null}else 2*vt()-l.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,o=!0,hs(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=vt(),t.sibling=null,n=dt.current,ot(dt,o?n&1|2:n&1),t):(Wt(t),null);case 22:case 23:return Lu(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?sn&1073741824&&(Wt(t),t.subtreeFlags&6&&(t.flags|=8192)):Wt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function J0(e,t){switch(_u(t),t.tag){case 1:return tn(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),st(en),st(Ht),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if(st(dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return st(dt),null;case 4:return Ur(),null;case 10:return mu(t.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var Nl=!1,Ft=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,te=null;function $r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){pt(e,t,o)}else n.current=null}function Nc(e,t,n){try{n()}catch(o){pt(e,t,o)}}var f_=!1;function eg(e,t){if(hc=ci,e=Qf(),uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,c=-1,d=0,p=0,x=e,g=null;t:for(;;){for(var $;x!==n||r!==0&&x.nodeType!==3||(a=i+r),x!==l||o!==0&&x.nodeType!==3||(c=i+o),x.nodeType===3&&(i+=x.nodeValue.length),($=x.firstChild)!==null;)g=x,x=$;for(;;){if(x===e)break t;if(g===n&&++d===r&&(a=i),g===l&&++p===o&&(c=i),($=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=$}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:e,selectionRange:n},ci=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,M=k.memoizedState,h=t.stateNode,y=h.getSnapshotBeforeUpdate(t.elementType===t.type?j:$n(t.type,j),M);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(N){pt(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return k=f_,f_=!1,k}function Ls(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var l=r.destroy;r.destroy=void 0,l!==void 0&&Nc(t,n,l)}r=r.next}while(r!==o)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Lc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hh(e){var t=e.alternate;t!==null&&(e.alternate=null,Hh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[Xs],delete t[yc],delete t[D0],delete t[B0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uh(e){return e.tag===5||e.tag===3||e.tag===4}function h_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(o!==4&&(e=e.child,e!==null))for(Rc(e,t,n),e=e.sibling;e!==null;)Rc(e,t,n),e=e.sibling}function Tc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}var Lt=null,Ln=!1;function po(e,t,n){for(n=n.child;n!==null;)Yh(e,t,n),n=n.sibling}function Yh(e,t,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Ni,n)}catch{}switch(n.tag){case 5:Ft||$r(n,t);case 6:var o=Lt,r=Ln;Lt=null,po(e,t,n),Lt=o,Ln=r,Lt!==null&&(Ln?(e=Lt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Ln?(e=Lt,n=n.stateNode,e.nodeType===8?Ca(e.parentNode,n):e.nodeType===1&&Ca(e,n),Ws(e)):Ca(Lt,n.stateNode));break;case 4:o=Lt,r=Ln,Lt=n.stateNode.containerInfo,Ln=!0,po(e,t,n),Lt=o,Ln=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Nc(n,t,i),r=r.next}while(r!==o)}po(e,t,n);break;case 1:if(!Ft&&($r(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){pt(n,t,a)}po(e,t,n);break;case 21:po(e,t,n);break;case 22:n.mode&1?(Ft=(o=Ft)||n.memoizedState!==null,po(e,t,n),Ft=o):po(e,t,n);break;default:po(e,t,n)}}function p_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Z0),t.forEach(function(o){var r=cg.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function In(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Ln=!1;break e;case 3:Lt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Lt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Lt===null)throw Error(H(160));Yh(l,i,r),Lt=null,Ln=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){pt(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xh(t,e),t=t.sibling}function Xh(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(In(t,e),Fn(e),o&4){try{Ls(3,e,e.return),Oi(3,e)}catch(j){pt(e,e.return,j)}try{Ls(5,e,e.return)}catch(j){pt(e,e.return,j)}}break;case 1:In(t,e),Fn(e),o&512&&n!==null&&$r(n,n.return);break;case 5:if(In(t,e),Fn(e),o&512&&n!==null&&$r(n,n.return),e.flags&32){var r=e.stateNode;try{Bs(r,"")}catch(j){pt(e,e.return,j)}}if(o&4&&(r=e.stateNode,r!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&hf(r,l),rc(a,i);var d=rc(a,l);for(i=0;i<c.length;i+=2){var p=c[i],x=c[i+1];p==="style"?xf(r,x):p==="dangerouslySetInnerHTML"?gf(r,x):p==="children"?Bs(r,x):qc(r,p,x,d)}switch(a){case"input":Za(r,l);break;case"textarea":pf(r,l);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?Rr(r,!!l.multiple,$,!1):g!==!!l.multiple&&(l.defaultValue!=null?Rr(r,!!l.multiple,l.defaultValue,!0):Rr(r,!!l.multiple,l.multiple?[]:"",!1))}r[Xs]=l}catch(j){pt(e,e.return,j)}}break;case 6:if(In(t,e),Fn(e),o&4){if(e.stateNode===null)throw Error(H(162));r=e.stateNode,l=e.memoizedProps;try{r.nodeValue=l}catch(j){pt(e,e.return,j)}}break;case 3:if(In(t,e),Fn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ws(t.containerInfo)}catch(j){pt(e,e.return,j)}break;case 4:In(t,e),Fn(e);break;case 13:In(t,e),Fn(e),r=e.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||($u=vt())),o&4&&p_(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ft=(d=Ft)||p,In(t,e),Ft=d):In(t,e),Fn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(te=e,p=e.child;p!==null;){for(x=te=p;te!==null;){switch(g=te,$=g.child,g.tag){case 0:case 11:case 14:case 15:Ls(4,g,g.return);break;case 1:$r(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){o=g,n=g.return;try{t=o,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){pt(o,n,j)}}break;case 5:$r(g,g.return);break;case 22:if(g.memoizedState!==null){g_(x);continue}}$!==null?($.return=g,te=$):g_(x)}p=p.sibling}e:for(p=null,x=e;;){if(x.tag===5){if(p===null){p=x;try{r=x.stateNode,d?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=x.stateNode,c=x.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=yf("display",i))}catch(j){pt(e,e.return,j)}}}else if(x.tag===6){if(p===null)try{x.stateNode.nodeValue=d?"":x.memoizedProps}catch(j){pt(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;p===x&&(p=null),x=x.return}p===x&&(p=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:In(t,e),Fn(e),o&4&&p_(e);break;case 21:break;default:In(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uh(n)){var o=n;break e}n=n.return}throw Error(H(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(Bs(r,""),o.flags&=-33);var l=h_(e);Tc(e,l,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=h_(e);Rc(e,a,i);break;default:throw Error(H(161))}}catch(c){pt(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tg(e,t,n){te=e,Qh(e)}function Qh(e,t,n){for(var o=(e.mode&1)!==0;te!==null;){var r=te,l=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Nl;if(!i){var a=r.alternate,c=a!==null&&a.memoizedState!==null||Ft;a=Nl;var d=Ft;if(Nl=i,(Ft=c)&&!d)for(te=r;te!==null;)i=te,c=i.child,i.tag===22&&i.memoizedState!==null?y_(r):c!==null?(c.return=i,te=c):y_(r);for(;l!==null;)te=l,Qh(l),l=l.sibling;te=r,Nl=a,Ft=d}m_(e)}else r.subtreeFlags&8772&&l!==null?(l.return=r,te=l):m_(e)}}function m_(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||Oi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ft)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:$n(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&e_(t,l,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}e_(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var x=p.dehydrated;x!==null&&Ws(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ft||t.flags&512&&Lc(t)}catch(g){pt(t,t.return,g)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function g_(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function y_(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(c){pt(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(c){pt(t,r,c)}}var l=t.return;try{Lc(t)}catch(c){pt(t,l,c)}break;case 5:var i=t.return;try{Lc(t)}catch(c){pt(t,i,c)}}}catch(c){pt(t,t.return,c)}if(t===e){te=null;break}var a=t.sibling;if(a!==null){a.return=t.return,te=a;break}te=t.return}}var ng=Math.ceil,ki=io.ReactCurrentDispatcher,Eu=io.ReactCurrentOwner,wn=io.ReactCurrentBatchConfig,Ue=0,$t=null,St=null,Rt=0,sn=0,Nr=To(0),Et=0,Js=null,or=0,Ai=0,Iu=0,Rs=null,Jt=null,$u=0,Xr=1/0,Jn=null,Si=!1,Pc=null,Eo=null,Ll=!1,bo=null,Ci=0,Ts=0,Dc=null,ti=-1,ni=0;function Xt(){return Ue&6?vt():ti!==-1?ti:ti=vt()}function Io(e){return e.mode&1?Ue&2&&Rt!==0?Rt&-Rt:O0.transition!==null?(ni===0&&(ni=Nf()),ni):(e=Ze,e!==0||(e=window.event,e=e===void 0?16:zf(e.type)),e):1}function Pn(e,t,n,o){if(50<Ts)throw Ts=0,Dc=null,Error(H(185));tl(e,n,o),(!(Ue&2)||e!==$t)&&(e===$t&&(!(Ue&2)&&(Ai|=n),Et===4&&vo(e,Rt)),nn(e,o),n===1&&Ue===0&&!(t.mode&1)&&(Xr=vt()+500,Di&&Po()))}function nn(e,t){var n=e.callbackNode;Om(e,t);var o=ai(e,e===$t?Rt:0);if(o===0)n!==null&&Md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Md(n),t===1)e.tag===0?z0(x_.bind(null,e)):oh(x_.bind(null,e)),T0(function(){!(Ue&6)&&Po()}),n=null;else{switch(Lf(o)){case 1:n=nu;break;case 4:n=If;break;case 16:n=ii;break;case 536870912:n=$f;break;default:n=ii}n=tp(n,Vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vh(e,t){if(ti=-1,ni=0,Ue&6)throw Error(H(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var o=ai(e,e===$t?Rt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ji(e,o);else{t=o;var r=Ue;Ue|=2;var l=Gh();($t!==e||Rt!==t)&&(Jn=null,Xr=vt()+500,Jo(e,t));do try{sg();break}catch(a){Kh(e,a)}while(!0);pu(),ki.current=l,Ue=r,St!==null?t=0:($t=null,Rt=0,t=Et)}if(t!==0){if(t===2&&(r=cc(e),r!==0&&(o=r,t=Bc(e,r))),t===1)throw n=Js,Jo(e,0),vo(e,o),nn(e,vt()),n;if(t===6)vo(e,o);else{if(r=e.current.alternate,!(o&30)&&!og(r)&&(t=ji(e,o),t===2&&(l=cc(e),l!==0&&(o=l,t=Bc(e,l))),t===1))throw n=Js,Jo(e,0),vo(e,o),nn(e,vt()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(H(345));case 2:Qo(e,Jt,Jn);break;case 3:if(vo(e,o),(o&130023424)===o&&(t=$u+500-vt(),10<t)){if(ai(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Xt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=gc(Qo.bind(null,e,Jt,Jn),t);break}Qo(e,Jt,Jn);break;case 4:if(vo(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Tn(o);l=1<<i,i=t[i],i>r&&(r=i),o&=~l}if(o=r,o=vt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ng(o/1960))-o,10<o){e.timeoutHandle=gc(Qo.bind(null,e,Jt,Jn),o);break}Qo(e,Jt,Jn);break;case 5:Qo(e,Jt,Jn);break;default:throw Error(H(329))}}}return nn(e,vt()),e.callbackNode===n?Vh.bind(null,e):null}function Bc(e,t){var n=Rs;return e.current.memoizedState.isDehydrated&&(Jo(e,t).flags|=256),e=ji(e,t),e!==2&&(t=Jt,Jt=n,t!==null&&zc(t)),e}function zc(e){Jt===null?Jt=e:Jt.push.apply(Jt,e)}function og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],l=r.getSnapshot;r=r.value;try{if(!Dn(l(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vo(e,t){for(t&=~Iu,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tn(t),o=1<<n;e[n]=-1,t&=~o}}function x_(e){if(Ue&6)throw Error(H(327));zr();var t=ai(e,0);if(!(t&1))return nn(e,vt()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var o=cc(e);o!==0&&(t=o,n=Bc(e,o))}if(n===1)throw n=Js,Jo(e,0),vo(e,t),nn(e,vt()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qo(e,Jt,Jn),nn(e,vt()),null}function Nu(e,t){var n=Ue;Ue|=1;try{return e(t)}finally{Ue=n,Ue===0&&(Xr=vt()+500,Di&&Po())}}function rr(e){bo!==null&&bo.tag===0&&!(Ue&6)&&zr();var t=Ue;Ue|=1;var n=wn.transition,o=Ze;try{if(wn.transition=null,Ze=1,e)return e()}finally{Ze=o,wn.transition=n,Ue=t,!(Ue&6)&&Po()}}function Lu(){sn=Nr.current,st(Nr)}function Jo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R0(n)),St!==null)for(n=St.return;n!==null;){var o=n;switch(_u(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&fi();break;case 3:Ur(),st(en),st(Ht),wu();break;case 5:vu(o);break;case 4:Ur();break;case 13:st(dt);break;case 19:st(dt);break;case 10:mu(o.type._context);break;case 22:case 23:Lu()}n=n.return}if($t=e,St=e=$o(e.current,null),Rt=sn=t,Et=0,Js=null,Iu=Ai=or=0,Jt=Rs=null,Go!==null){for(t=0;t<Go.length;t++)if(n=Go[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,l=n.pending;if(l!==null){var i=l.next;l.next=r,o.next=i}n.pending=o}Go=null}return e}function Kh(e,t){do{var n=St;try{if(pu(),Jl.current=bi,wi){for(var o=_t.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}wi=!1}if(nr=0,It=Mt=_t=null,Ns=!1,Ks=0,Eu.current=null,n===null||n.return===null){Et=1,Js=t,St=null;break}e:{var l=e,i=n.return,a=n,c=t;if(t=Rt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=a,x=p.tag;if(!(p.mode&1)&&(x===0||x===11||x===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var $=l_(i);if($!==null){$.flags&=-257,i_($,i,a,l,t),$.mode&1&&s_(l,d,t),t=$,c=d;var k=t.updateQueue;if(k===null){var j=new Set;j.add(c),t.updateQueue=j}else k.add(c);break e}else{if(!(t&1)){s_(l,d,t),Ru();break e}c=Error(H(426))}}else if(it&&a.mode&1){var M=l_(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),i_(M,i,a,l,t),fu(Yr(c,a));break e}}l=c=Yr(c,a),Et!==4&&(Et=2),Rs===null?Rs=[l]:Rs.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Lh(l,c,t);Zd(l,h);break e;case 1:a=c;var y=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Eo===null||!Eo.has(b)))){l.flags|=65536,t&=-t,l.lanes|=t;var N=Rh(l,a,t);Zd(l,N);break e}}l=l.return}while(l!==null)}Jh(n)}catch(W){t=W,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Gh(){var e=ki.current;return ki.current=bi,e===null?bi:e}function Ru(){(Et===0||Et===3||Et===2)&&(Et=4),$t===null||!(or&268435455)&&!(Ai&268435455)||vo($t,Rt)}function ji(e,t){var n=Ue;Ue|=2;var o=Gh();($t!==e||Rt!==t)&&(Jn=null,Jo(e,t));do try{rg();break}catch(r){Kh(e,r)}while(!0);if(pu(),Ue=n,ki.current=o,St!==null)throw Error(H(261));return $t=null,Rt=0,Et}function rg(){for(;St!==null;)qh(St)}function sg(){for(;St!==null&&!$m();)qh(St)}function qh(e){var t=ep(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Jh(e):St=t,Eu.current=null}function Jh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=J0(n,t),n!==null){n.flags&=32767,St=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Et=6,St=null;return}}else if(n=q0(n,t,sn),n!==null){St=n;return}if(t=t.sibling,t!==null){St=t;return}St=t=e}while(t!==null);Et===0&&(Et=5)}function Qo(e,t,n){var o=Ze,r=wn.transition;try{wn.transition=null,Ze=1,lg(e,t,n,o)}finally{wn.transition=r,Ze=o}return null}function lg(e,t,n,o){do zr();while(bo!==null);if(Ue&6)throw Error(H(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Am(e,l),e===$t&&(St=$t=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,tp(ii,function(){return zr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=wn.transition,wn.transition=null;var i=Ze;Ze=1;var a=Ue;Ue|=4,Eu.current=null,eg(e,n),Xh(n,e),j0(pc),ci=!!hc,pc=hc=null,e.current=n,tg(n),Nm(),Ue=a,Ze=i,wn.transition=l}else e.current=n;if(Ll&&(Ll=!1,bo=e,Ci=r),l=e.pendingLanes,l===0&&(Eo=null),Tm(n.stateNode),nn(e,vt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Si)throw Si=!1,e=Pc,Pc=null,e;return Ci&1&&e.tag!==0&&zr(),l=e.pendingLanes,l&1?e===Dc?Ts++:(Ts=0,Dc=e):Ts=0,Po(),null}function zr(){if(bo!==null){var e=Lf(Ci),t=wn.transition,n=Ze;try{if(wn.transition=null,Ze=16>e?16:e,bo===null)var o=!1;else{if(e=bo,bo=null,Ci=0,Ue&6)throw Error(H(331));var r=Ue;for(Ue|=4,te=e.current;te!==null;){var l=te,i=l.child;if(te.flags&16){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(te=d;te!==null;){var p=te;switch(p.tag){case 0:case 11:case 15:Ls(8,p,l)}var x=p.child;if(x!==null)x.return=p,te=x;else for(;te!==null;){p=te;var g=p.sibling,$=p.return;if(Hh(p),p===d){te=null;break}if(g!==null){g.return=$,te=g;break}te=$}}}var k=l.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var M=j.sibling;j.sibling=null,j=M}while(j!==null)}}te=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,te=i;else e:for(;te!==null;){if(l=te,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ls(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,te=h;break e}te=l.return}}var y=e.current;for(te=y;te!==null;){i=te;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,te=b;else e:for(i=y;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oi(9,a)}}catch(W){pt(a,a.return,W)}if(a===i){te=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,te=N;break e}te=a.return}}if(Ue=r,Po(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Ni,e)}catch{}o=!0}return o}finally{Ze=n,wn.transition=t}}return!1}function v_(e,t,n){t=Yr(n,t),t=Lh(e,t,1),e=Mo(e,t,1),t=Xt(),e!==null&&(tl(e,1,t),nn(e,t))}function pt(e,t,n){if(e.tag===3)v_(e,e,n);else for(;t!==null;){if(t.tag===3){v_(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Eo===null||!Eo.has(o))){e=Yr(n,e),e=Rh(t,e,1),t=Mo(t,e,1),e=Xt(),t!==null&&(tl(t,1,e),nn(t,e));break}}t=t.return}}function ig(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Xt(),e.pingedLanes|=e.suspendedLanes&n,$t===e&&(Rt&n)===n&&(Et===4||Et===3&&(Rt&130023424)===Rt&&500>vt()-$u?Jo(e,0):Iu|=n),nn(e,t)}function Zh(e,t){t===0&&(e.mode&1?(t=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):t=1);var n=Xt();e=so(e,t),e!==null&&(tl(e,t,n),nn(e,n))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zh(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(H(314))}o!==null&&o.delete(t),Zh(e,n)}var ep;ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||en.current)Zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Zt=!1,G0(e,t,n);Zt=!!(e.flags&131072)}else Zt=!1,it&&t.flags&1048576&&rh(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ei(e,t),e=t.pendingProps;var r=Wr(t,Ht.current);Br(t,n),r=ku(null,t,o,e,r,n);var l=Su();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tn(o)?(l=!0,hi(t)):l=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yu(t),r.updater=zi,t.stateNode=r,r._reactInternals=t,Sc(t,o,e,n),t=Mc(null,t,o,!0,l,n)):(t.tag=0,it&&l&&du(t),Yt(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=dg(o),e=$n(o,e),r){case 0:t=jc(null,t,o,e,n);break e;case 1:t=u_(null,t,o,e,n);break e;case 11:t=a_(null,t,o,e,n);break e;case 14:t=c_(null,t,o,$n(o.type,e),n);break e}throw Error(H(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:$n(o,r),jc(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:$n(o,r),u_(e,t,o,r,n);case 3:e:{if(Bh(t),e===null)throw Error(H(387));o=t.pendingProps,l=t.memoizedState,r=l.element,uh(e,t),xi(t,o,null,n);var i=t.memoizedState;if(o=i.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){r=Yr(Error(H(423)),t),t=d_(e,t,o,n,r);break e}else if(o!==r){r=Yr(Error(H(424)),t),t=d_(e,t,o,n,r);break e}else for(ln=jo(t.stateNode.containerInfo.firstChild),an=t,it=!0,Rn=null,n=ah(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),o===r){t=lo(e,t,n);break e}Yt(e,t,o,n)}t=t.child}return t;case 5:return dh(t),e===null&&wc(t),o=t.type,r=t.pendingProps,l=e!==null?e.memoizedProps:null,i=r.children,mc(o,r)?i=null:l!==null&&mc(o,l)&&(t.flags|=32),Dh(e,t),Yt(e,t,i,n),t.child;case 6:return e===null&&wc(t),null;case 13:return zh(e,t,n);case 4:return xu(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Hr(t,null,o,n):Yt(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:$n(o,r),a_(e,t,o,r,n);case 7:return Yt(e,t,t.pendingProps,n),t.child;case 8:return Yt(e,t,t.pendingProps.children,n),t.child;case 12:return Yt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,l=t.memoizedProps,i=r.value,ot(gi,o._currentValue),o._currentValue=i,l!==null)if(Dn(l.value,i)){if(l.children===r.children&&!en.current){t=lo(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var c=a.firstContext;c!==null;){if(c.context===o){if(l.tag===1){c=no(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),bc(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(H(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),bc(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Yt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Br(t,n),r=bn(r),o=o(r),t.flags|=1,Yt(e,t,o,n),t.child;case 14:return o=t.type,r=$n(o,t.pendingProps),r=$n(o.type,r),c_(e,t,o,r,n);case 15:return Th(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:$n(o,r),ei(e,t),t.tag=1,tn(o)?(e=!0,hi(t)):e=!1,Br(t,n),Nh(t,o,r),Sc(t,o,r,n),Mc(null,t,o,!0,e,n);case 19:return Oh(e,t,n);case 22:return Ph(e,t,n)}throw Error(H(156,t.tag))};function tp(e,t){return Ef(e,t)}function ug(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,t,n,o){return new ug(e,t,n,o)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dg(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zc)return 11;if(e===eu)return 14}return 2}function $o(e,t){var n=e.alternate;return n===null?(n=vn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,o,r,l){var i=2;if(o=e,typeof e=="function")Tu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wr:return Zo(n.children,r,l,t);case Jc:i=8,r|=8;break;case Va:return e=vn(12,n,t,r|2),e.elementType=Va,e.lanes=l,e;case Ka:return e=vn(13,n,t,r),e.elementType=Ka,e.lanes=l,e;case Ga:return e=vn(19,n,t,r),e.elementType=Ga,e.lanes=l,e;case df:return Wi(n,r,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:i=10;break e;case uf:i=9;break e;case Zc:i=11;break e;case eu:i=14;break e;case go:i=16,o=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=vn(i,n,t,r),t.elementType=e,t.type=o,t.lanes=l,t}function Zo(e,t,n,o){return e=vn(7,e,o,t),e.lanes=n,e}function Wi(e,t,n,o){return e=vn(22,e,o,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=vn(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _g(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,o,r,l,i,a,c){return e=new _g(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=vn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(l),e}function fg(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function np(e){if(!e)return Lo;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(tn(n))return nh(e,n,t)}return t}function op(e,t,n,o,r,l,i,a,c){return e=Pu(n,o,!0,e,r,l,i,a,c),e.context=np(null),n=e.current,o=Xt(),r=Io(n),l=no(o,r),l.callback=t??null,Mo(n,l,r),e.current.lanes=r,tl(e,r,o),nn(e,o),e}function Fi(e,t,n,o){var r=t.current,l=Xt(),i=Io(r);return n=np(n),t.context===null?t.context=n:t.pendingContext=n,t=no(l,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Mo(r,t,i),e!==null&&(Pn(e,r,i,l),ql(e,r,i)),i}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function w_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Du(e,t){w_(e,t),(e=e.alternate)&&w_(e,t)}function hg(){return null}var rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bu(e){this._internalRoot=e}Hi.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Fi(e,t,null,null)};Hi.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){Fi(null,e,null,null)}),t[ro]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xo.length&&t!==0&&t<xo[n].priority;n++);xo.splice(n,0,e),n===0&&Bf(e)}};function zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function b_(){}function pg(e,t,n,o,r){if(r){if(typeof o=="function"){var l=o;o=function(){var d=Mi(i);l.call(d)}}var i=op(t,o,e,0,null,!1,!1,"",b_);return e._reactRootContainer=i,e[ro]=i.current,Us(e.nodeType===8?e.parentNode:e),rr(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var d=Mi(c);a.call(d)}}var c=Pu(e,0,!1,null,null,!1,!1,"",b_);return e._reactRootContainer=c,e[ro]=c.current,Us(e.nodeType===8?e.parentNode:e),rr(function(){Fi(t,c,n,o)}),c}function Yi(e,t,n,o,r){var l=n._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var a=r;r=function(){var c=Mi(i);a.call(c)}}Fi(t,i,e,r)}else i=pg(n,t,e,r,o);return Mi(i)}Rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ss(t.pendingLanes);n!==0&&(ou(t,n|1),nn(t,vt()),!(Ue&6)&&(Xr=vt()+500,Po()))}break;case 13:rr(function(){var o=so(e,1);if(o!==null){var r=Xt();Pn(o,e,1,r)}}),Du(e,1)}};ru=function(e){if(e.tag===13){var t=so(e,134217728);if(t!==null){var n=Xt();Pn(t,e,134217728,n)}Du(e,134217728)}};Tf=function(e){if(e.tag===13){var t=Io(e),n=so(e,t);if(n!==null){var o=Xt();Pn(n,e,t,o)}Du(e,t)}};Pf=function(){return Ze};Df=function(e,t){var n=Ze;try{return Ze=e,t()}finally{Ze=n}};lc=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=Pi(o);if(!r)throw Error(H(90));ff(o),Za(o,r)}}}break;case"textarea":pf(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};bf=Nu;kf=rr;var mg={usingClientEntryPoint:!1,Events:[ol,Cr,Pi,vf,wf,Nu]},ps={findFiberByHostInstance:Ko,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:io.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jf(e),e===null?null:e.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||hg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Ni=Rl.inject(gg),Xn=Rl}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mg;un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(t))throw Error(H(200));return fg(e,t,null,n)};un.createRoot=function(e,t){if(!zu(e))throw Error(H(299));var n=!1,o="",r=rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,o,r),e[ro]=t.current,Us(e.nodeType===8?e.parentNode:e),new Bu(t)};un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=jf(t),e=e===null?null:e.stateNode,e};un.flushSync=function(e){return rr(e)};un.hydrate=function(e,t,n){if(!Ui(t))throw Error(H(200));return Yi(null,e,t,!0,n)};un.hydrateRoot=function(e,t,n){if(!zu(e))throw Error(H(405));var o=n!=null&&n.hydratedSources||null,r=!1,l="",i=rp;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=op(t,null,e,1,n??null,r,!1,l,i),e[ro]=t.current,Us(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Hi(t)};un.render=function(e,t,n){if(!Ui(t))throw Error(H(200));return Yi(null,e,t,!1,n)};un.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(H(40));return e._reactRootContainer?(rr(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[ro]=null})}),!0):!1};un.unstable_batchedUpdates=Nu;un.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ui(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Yi(e,t,n,!1,o)};un.version="18.3.1-next-f1338f8080-20240426";function sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sp)}catch(e){console.error(e)}}sp(),rf.exports=un;var Ou=rf.exports,lp,k_=Ou;lp=k_.createRoot,k_.hydrateRoot;var ip={exports:{}},Xi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=f,xg=Symbol.for("react.element"),vg=Symbol.for("react.fragment"),wg=Object.prototype.hasOwnProperty,bg=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kg={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,t,n){var o,r={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)wg.call(t,o)&&!kg.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:xg,type:e,key:l,ref:i,props:r,_owner:bg.current}}Xi.Fragment=vg;Xi.jsx=ap;Xi.jsxs=ap;ip.exports=Xi;var s=ip.exports,Sg=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Cg={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=Sg}var nt=Cg,jg=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Mg={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=jg}var tt=Mg,Eg=({size:e=16})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ig=({size:e=24,style:t={}})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[s.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[s.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_list_sparkle",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),$g=({size:e=20,...t})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[s.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ng=({size:e=24,copied:t=!1,tint:n})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[s.jsxs("g",{className:`${tt.iconState} ${t?tt.hiddenScaled:tt.visibleScaled}`,children:[s.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsxs("g",{className:`${tt.iconState} ${t?tt.visibleScaled:tt.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Lg=({size:e=24,state:t="idle"})=>{const n=t==="idle",o=t==="sent",r=t==="failed",l=t==="sending";return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("g",{className:`${tt.iconStateFast} ${n?tt.visibleScaled:l?tt.sending:tt.hiddenScaled}`,children:s.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsxs("g",{className:`${tt.iconStateFast} ${o?tt.visibleScaled:tt.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${tt.iconStateFast} ${r?tt.visibleScaled:tt.hiddenScaled}`,children:[s.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Rg=({size:e=24,isOpen:t=!0})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${tt.iconFade} ${t?tt.visible:tt.hidden}`,children:[s.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsxs("g",{className:`${tt.iconFade} ${t?tt.hidden:tt.visible}`,children:[s.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),s.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Tg=({size:e=24,isPaused:t=!1})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{className:`${tt.iconFadeFast} ${t?tt.hidden:tt.visible}`,children:[s.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),s.jsx("path",{className:`${tt.iconFadeFast} ${t?tt.visible:tt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Pg=({size:e=16})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Dg=({size:e=16})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),cp=({size:e=16})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[s.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_2_53",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Bg=({size:e=24})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),zg=({size:e=16})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[s.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Og=({size:e=16})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:s.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Ag=({size:e=16})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Wg=({size:e=24})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Fg=({size:e=16})=>s.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Hg=({size:e=24})=>s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),up=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Pa=up.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Oc="feedback-freeze-styles",Da="__agentation_freeze";function Ug(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[Da]||(e[Da]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[Da]}var Re=Ug();typeof window<"u"&&!Re.installed&&(Re.origSetTimeout=window.setTimeout.bind(window),Re.origSetInterval=window.setInterval.bind(window),Re.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e=="string"?Re.origSetTimeout(e,t):Re.origSetTimeout((...o)=>{Re.frozen?Re.frozenTimeoutQueue.push(()=>e(...o)):e(...o)},t,...n),window.setInterval=(e,t,...n)=>typeof e=="string"?Re.origSetInterval(e,t):Re.origSetInterval((...o)=>{Re.frozen||e(...o)},t,...n),window.requestAnimationFrame=e=>Re.origRAF(t=>{Re.frozen?Re.frozenRAFQueue.push(e):e(t)}),Re.installed=!0);var fe=Re.origSetTimeout,Yg=Re.origSetInterval,Lr=Re.origRAF;function Xg(e){return e?up.some(t=>!!e.closest?.(`[${t}]`)):!1}function Qg(){if(typeof document>"u"||Re.frozen)return;Re.frozen=!0,Re.frozenTimeoutQueue=[],Re.frozenRAFQueue=[];let e=document.getElementById(Oc);e||(e=document.createElement("style"),e.id=Oc),e.textContent=`
    *${Pa},
    *${Pa}::before,
    *${Pa}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Re.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;const n=t.effect?.target;Xg(n)||(t.pause(),Re.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function S_(){if(typeof document>"u"||!Re.frozen)return;Re.frozen=!1;const e=Re.frozenTimeoutQueue;Re.frozenTimeoutQueue=[];for(const n of e)Re.origSetTimeout(()=>{if(Re.frozen){Re.frozenTimeoutQueue.push(n);return}try{n()}catch(o){console.warn("[agentation] Error replaying queued timeout:",o)}},0);const t=Re.frozenRAFQueue;Re.frozenRAFQueue=[];for(const n of t)Re.origRAF(o=>{if(Re.frozen){Re.frozenRAFQueue.push(n);return}n(o)});for(const n of Re.pausedAnimations)try{n.play()}catch(o){console.warn("[agentation] Error resuming animation:",o)}Re.pausedAnimations=[],document.getElementById(Oc)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function Ba(e){if(!e)return;const t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var Ei=f.forwardRef(function({element:t,timestamp:n,selectedText:o,placeholder:r="What should change?",initialValue:l="",submitLabel:i="Add",onSubmit:a,onCancel:c,onDelete:d,style:p,accentColor:x="#3c82f7",isExiting:g=!1,lightMode:$=!1,computedStyles:k},j){const[M,h]=f.useState(l),[y,b]=f.useState(!1),[N,W]=f.useState("initial"),[Y,D]=f.useState(!1),[Q,he]=f.useState(!1),q=f.useRef(null),de=f.useRef(null),Be=f.useRef(null),Ae=f.useRef(null);f.useEffect(()=>{g&&N!=="exit"&&W("exit")},[g,N]),f.useEffect(()=>{fe(()=>{W("enter")},0);const U=fe(()=>{W("entered")},200),G=fe(()=>{const Se=q.current;Se&&(Ba(Se),Se.selectionStart=Se.selectionEnd=Se.value.length,Se.scrollTop=Se.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(G),Be.current&&clearTimeout(Be.current),Ae.current&&clearTimeout(Ae.current)}},[]);const ke=f.useCallback(()=>{Ae.current&&clearTimeout(Ae.current),b(!0),Ae.current=fe(()=>{b(!1),Ba(q.current)},250)},[]);f.useImperativeHandle(j,()=>({shake:ke}),[ke]);const Ne=f.useCallback(()=>{W("exit"),Be.current=fe(()=>{c()},150)},[c]),oe=f.useCallback(()=>{M.trim()&&a(M.trim())},[M,a]),lt=f.useCallback(U=>{U.stopPropagation(),!U.nativeEvent.isComposing&&(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),oe()),U.key==="Escape"&&Ne())},[oe,Ne]),I=[nt.popup,$?nt.light:"",N==="enter"?nt.enter:"",N==="entered"?nt.entered:"",N==="exit"?nt.exit:"",y?nt.shake:""].filter(Boolean).join(" ");return s.jsxs("div",{ref:de,className:I,"data-annotation-popup":!0,style:p,onClick:U=>U.stopPropagation(),children:[s.jsxs("div",{className:nt.header,children:[k&&Object.keys(k).length>0?s.jsxs("button",{className:nt.headerToggle,onClick:()=>{const U=Q;he(!Q),U&&fe(()=>Ba(q.current),0)},type:"button",children:[s.jsx("svg",{className:`${nt.chevron} ${Q?nt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s.jsx("span",{className:nt.element,children:t})]}):s.jsx("span",{className:nt.element,children:t}),n&&s.jsx("span",{className:nt.timestamp,children:n})]}),k&&Object.keys(k).length>0&&s.jsx("div",{className:`${nt.stylesWrapper} ${Q?nt.expanded:""}`,children:s.jsx("div",{className:nt.stylesInner,children:s.jsx("div",{className:nt.stylesBlock,children:Object.entries(k).map(([U,G])=>s.jsxs("div",{className:nt.styleLine,children:[s.jsx("span",{className:nt.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",s.jsx("span",{className:nt.styleValue,children:G}),";"]},U))})})}),o&&s.jsxs("div",{className:nt.quote,children:["“",o.slice(0,80),o.length>80?"...":"","”"]}),s.jsx("textarea",{ref:q,className:nt.textarea,style:{borderColor:Y?x:void 0},placeholder:r,value:M,onChange:U=>h(U.target.value),onFocus:()=>D(!0),onBlur:()=>D(!1),rows:2,onKeyDown:lt}),s.jsxs("div",{className:nt.actions,children:[d&&s.jsx("div",{className:nt.deleteWrapper,children:s.jsx("button",{className:nt.deleteButton,onClick:d,type:"button",children:s.jsx(Wg,{size:22})})}),s.jsx("button",{className:nt.cancel,onClick:Ne,children:"Cancel"}),s.jsx("button",{className:nt.submit,style:{backgroundColor:x,opacity:M.trim()?1:.4},onClick:oe,disabled:!M.trim(),children:i})]})]})}),Vg=({content:e,children:t,...n})=>{const[o,r]=f.useState(!1),[l,i]=f.useState(!1),[a,c]=f.useState({top:0,right:0}),d=f.useRef(null),p=f.useRef(null),x=f.useRef(null),g=()=>{if(d.current){const j=d.current.getBoundingClientRect();c({top:j.top+j.height/2,right:window.innerWidth-j.left+8})}},$=()=>{i(!0),x.current&&(clearTimeout(x.current),x.current=null),g(),p.current=fe(()=>{r(!0)},500)},k=()=>{p.current&&(clearTimeout(p.current),p.current=null),r(!1),x.current=fe(()=>{i(!1)},150)};return f.useEffect(()=>()=>{p.current&&clearTimeout(p.current),x.current&&clearTimeout(x.current)},[]),s.jsxs(s.Fragment,{children:[s.jsx("span",{ref:d,onMouseEnter:$,onMouseLeave:k,...n,children:t}),l&&Ou.createPortal(s.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:a.top,right:a.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:o?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},Kg=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Gg={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=Kg}var C_=Gg,Vo=({content:e})=>s.jsx(Vg,{className:C_.tooltip,content:e,children:s.jsx($g,{className:C_.tooltipIcon})}),J={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},dp=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...J.navigation},{type:"header",label:"Header",...J.header},{type:"hero",label:"Hero",...J.hero},{type:"section",label:"Section",...J.section},{type:"sidebar",label:"Sidebar",...J.sidebar},{type:"footer",label:"Footer",...J.footer},{type:"modal",label:"Modal",...J.modal},{type:"banner",label:"Banner",...J.banner},{type:"drawer",label:"Drawer",...J.drawer},{type:"popover",label:"Popover",...J.popover},{type:"divider",label:"Divider",...J.divider}]},{section:"Content",items:[{type:"card",label:"Card",...J.card},{type:"text",label:"Text",...J.text},{type:"image",label:"Image",...J.image},{type:"video",label:"Video",...J.video},{type:"table",label:"Table",...J.table},{type:"grid",label:"Grid",...J.grid},{type:"list",label:"List",...J.list},{type:"chart",label:"Chart",...J.chart},{type:"codeBlock",label:"Code Block",...J.codeBlock},{type:"map",label:"Map",...J.map},{type:"timeline",label:"Timeline",...J.timeline},{type:"calendar",label:"Calendar",...J.calendar},{type:"accordion",label:"Accordion",...J.accordion},{type:"carousel",label:"Carousel",...J.carousel},{type:"logo",label:"Logo",...J.logo},{type:"faq",label:"FAQ",...J.faq},{type:"gallery",label:"Gallery",...J.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...J.button},{type:"input",label:"Input",...J.input},{type:"search",label:"Search",...J.search},{type:"form",label:"Form",...J.form},{type:"tabs",label:"Tabs",...J.tabs},{type:"dropdown",label:"Dropdown",...J.dropdown},{type:"toggle",label:"Toggle",...J.toggle},{type:"stepper",label:"Stepper",...J.stepper},{type:"rating",label:"Rating",...J.rating},{type:"fileUpload",label:"File Upload",...J.fileUpload},{type:"checkbox",label:"Checkbox",...J.checkbox},{type:"radio",label:"Radio",...J.radio},{type:"slider",label:"Slider",...J.slider},{type:"datePicker",label:"Date Picker",...J.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...J.avatar},{type:"badge",label:"Badge",...J.badge},{type:"tag",label:"Tag",...J.tag},{type:"breadcrumb",label:"Breadcrumb",...J.breadcrumb},{type:"pagination",label:"Pagination",...J.pagination},{type:"progress",label:"Progress",...J.progress},{type:"alert",label:"Alert",...J.alert},{type:"toast",label:"Toast",...J.toast},{type:"notification",label:"Notification",...J.notification},{type:"tooltip",label:"Tooltip",...J.tooltip},{type:"stat",label:"Stat",...J.stat},{type:"skeleton",label:"Skeleton",...J.skeleton},{type:"chip",label:"Chip",...J.chip},{type:"icon",label:"Icon",...J.icon},{type:"spinner",label:"Spinner",...J.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...J.pricing},{type:"testimonial",label:"Testimonial",...J.testimonial},{type:"cta",label:"CTA",...J.cta},{type:"productCard",label:"Product Card",...J.productCard},{type:"profile",label:"Profile",...J.profile},{type:"feature",label:"Feature",...J.feature},{type:"team",label:"Team",...J.team},{type:"login",label:"Login",...J.login},{type:"contact",label:"Contact",...J.contact}]}],Nn={};for(const e of dp)for(const t of e.items)Nn[t.type]=t;function z({w:e,h:t=3,strong:n}){return s.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Je({w:e,h:t,radius:n=3,style:o}){return s.jsx("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...o}})}function Qt({size:e}){return s.jsx("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function qg({width:e,height:t}){const n=Math.max(8,t*.2);return s.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[s.jsx(Je,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),s.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[s.jsx(z,{w:e*.06}),s.jsx(z,{w:e*.07}),s.jsx(z,{w:e*.05}),s.jsx(z,{w:e*.06})]}),s.jsx(Je,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Jg({width:e,height:t,text:n}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?s.jsx("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):s.jsx(z,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),s.jsx(z,{w:e*.6}),s.jsx(z,{w:e*.4}),s.jsx(Je,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Zg({width:e,height:t}){const n=Math.max(3,Math.floor(t/36));return s.jsxs("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[s.jsx(z,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx(Je,{w:10,h:10,radius:2}),s.jsx(z,{w:e*(.4+r*17%30/100)})]},r))]})}function ey({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/160)));return s.jsx("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(z,{w:"60%",h:3,strong:!0}),s.jsx(z,{w:"80%",h:2}),s.jsx(z,{w:"70%",h:2}),s.jsx(z,{w:"60%",h:2})]},r))})}function ty({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(z,{w:e*.3,h:4,strong:!0}),s.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),s.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[s.jsx(z,{w:"90%"}),s.jsx(z,{w:"70%"}),s.jsx(z,{w:"80%"})]}),s.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[s.jsx(Je,{w:70,h:26,radius:4}),s.jsx(Je,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function ny({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),s.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(z,{w:"70%",h:4,strong:!0}),s.jsx(z,{w:"95%",h:2}),s.jsx(z,{w:"85%",h:2}),s.jsx(z,{w:"50%",h:2})]})]})}function oy({width:e,height:t,text:n}){if(n)return s.jsx("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});const o=Math.max(2,Math.floor(t/18));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[s.jsx(z,{w:e*.6,h:5,strong:!0}),Array.from({length:o},(r,l)=>s.jsx(z,{w:`${70+l*13%25}%`,h:2},l))]})}function ry({width:e,height:t}){return s.jsx("div",{style:{height:"100%",position:"relative"},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[s.jsx("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function sy({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(e/100))),o=Math.max(2,Math.min(6,Math.floor(t/32)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(r,l)=>s.jsx("div",{style:{flex:1,padding:"0 8px"},children:s.jsx(z,{w:"70%",h:3,strong:!0})},l))}),Array.from({length:o},(r,l)=>s.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,a)=>s.jsx("div",{style:{flex:1,padding:"0 8px"},children:s.jsx(z,{w:`${50+(l*7+a*13)%40}%`,h:2})},a))},l))]})}function ly({width:e,height:t}){const n=Math.max(2,Math.floor(t/28));return s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsx(Qt,{size:8}),s.jsx(z,{w:`${55+r*17%35}%`,h:2})]},r))})}function iy({width:e,height:t,text:n}){return s.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?s.jsx("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):s.jsx(z,{w:Math.max(20,e*.5),h:3,strong:!0})})}function ay({width:e,height:t}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[s.jsx(z,{w:Math.min(80,e*.3),h:2}),s.jsx("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:s.jsx(z,{w:"40%",h:2})})]})}function cy({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(t/56)));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[s.jsx(z,{w:60+r*17%30,h:2}),s.jsx(Je,{w:"100%",h:28,radius:4})]},r)),s.jsx(Je,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function uy({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,r)=>s.jsx("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:s.jsx(z,{w:60,h:3,strong:r===0})},r))}),s.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[s.jsx(z,{w:"80%",h:2}),s.jsx(z,{w:"65%",h:2}),s.jsx(z,{w:"75%",h:2})]})]})}function dy({width:e,height:t}){const n=Math.min(e,t)/2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),s.jsx("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),s.jsx("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function _y({width:e,height:t}){return s.jsx("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(z,{w:Math.max(16,e*.5),h:2,strong:!0})})}function fy({width:e,height:t}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[s.jsx(z,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),s.jsx(z,{w:e*.35})]})}function hy({width:e,height:t}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[s.jsx(z,{w:e*.3,h:4,strong:!0}),s.jsx(z,{w:e*.7}),s.jsx(z,{w:e*.5}),s.jsxs("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[s.jsx(Je,{w:"33%",h:"100%",radius:4}),s.jsx(Je,{w:"33%",h:"100%",radius:4}),s.jsx(Je,{w:"33%",h:"100%",radius:4})]})]})}function py({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/140))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*o},(r,l)=>s.jsx(Je,{w:"100%",h:"100%",radius:4},l))})}function my({width:e,height:t}){const n=Math.max(2,Math.floor((t-32)/28));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:s.jsx(z,{w:e*.5,h:3,strong:!0})}),s.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(o,r)=>s.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:s.jsx(z,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function gy({width:e,height:t}){const n=Math.min(e,t)/2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function yy({width:e,height:t}){const n=Math.min(t/2,20);return s.jsxs("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[s.jsx(Qt,{size:Math.min(14,t*.4)}),s.jsx(z,{w:"50%",h:2})]})}function xy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx(Qt,{size:Math.min(20,t*.5)}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:"60%",h:3,strong:!0}),s.jsx(z,{w:"80%",h:2})]}),s.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function vy({width:e,height:t}){return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),s.jsx("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function wy({width:e,height:t}){const n=Math.max(3,Math.min(7,Math.floor(e/50))),o=e/(n*2);return s.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(r,l)=>{const i=30+(l*37+17)%55;return s.jsx(Je,{w:o,h:`${i}%`,radius:2},l)})})}function by({width:e,height:t}){const n=Math.min(e,t)*.12;return s.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[s.jsx(Je,{w:"100%",h:"100%",radius:4}),s.jsx("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function ky({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(z,{w:"60%",h:2})}),s.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Sy({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/80)));return s.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&s.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),s.jsx(z,{w:40+r*13%20,h:2,strong:r===n-1})]},r))})}function Cy({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(e/40))),o=Math.min(28,t*.8);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(r,l)=>s.jsx(Je,{w:o,h:o,radius:4,style:l===1?{background:"var(--agd-bar)"}:void 0},l))})}function jy({width:e}){return s.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:s.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function My({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(t/40)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[s.jsx(z,{w:`${40+r*17%25}%`,h:3,strong:!0}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"▼":"▶"})]},r))})}function Ey({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[s.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(Je,{w:"100%",h:"100%",radius:4}),s.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[s.jsx(Qt,{size:5}),s.jsx(Qt,{size:5}),s.jsx(Qt,{size:5})]})]})}function Iy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[s.jsx(z,{w:e*.4,h:3,strong:!0}),s.jsx(z,{w:e*.3,h:6,strong:!0}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,o)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[s.jsx(Qt,{size:5}),s.jsx(z,{w:`${50+o*17%35}%`,h:2})]},o))}),s.jsx(Je,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function $y({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[s.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(z,{w:"90%",h:2}),s.jsx(z,{w:"75%",h:2}),s.jsx(z,{w:"60%",h:2})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx(Qt,{size:20}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[s.jsx(z,{w:60,h:3,strong:!0}),s.jsx(z,{w:40,h:2})]})]})]})}function Ny({width:e,height:t}){return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[s.jsx(z,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),s.jsx(z,{w:e*.35}),s.jsx(Je,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function Ly({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:"40%",h:3,strong:!0}),s.jsx(z,{w:"70%",h:2})]})]})}function Ry({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[s.jsx(z,{w:e*.4,h:3,strong:!0}),s.jsx(Je,{w:60,h:Math.min(24,t*.6),radius:4})]})}function Ty({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[s.jsx(z,{w:e*.5,h:2}),s.jsx(z,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),s.jsx(z,{w:e*.3,h:2})]})}function Py({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(e/100))),o=Math.min(12,t*.35);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(r,l)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[s.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:l===0?"var(--agd-bar)":"transparent",flexShrink:0}}),l<n-1&&s.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},l))})}function Dy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[s.jsx(z,{w:Math.max(16,e*.5),h:2,strong:!0}),s.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function By({width:e,height:t}){const o=Math.min(t*.7,e/7.5);return s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:o*.2},children:Array.from({length:5},(r,l)=>s.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:l<3?"var(--agd-bar)":"none"})},l))})}function zy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[s.jsx("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),s.jsx("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),s.jsx("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),s.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:s.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[s.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),s.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Oy({width:e,height:t}){const n=Math.max(3,Math.min(5,Math.floor(t/60)));return s.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[s.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[s.jsx(Qt,{size:8}),r<n-1&&s.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),s.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:`${35+r*13%25}%`,h:3,strong:!0}),s.jsx(z,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function Ay({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),s.jsx(z,{w:e*.4,h:2}),s.jsx(z,{w:e*.25,h:2})]})}function Wy({width:e,height:t}){const n=Math.max(3,Math.min(8,Math.floor(t/20)));return s.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[s.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[s.jsx(Qt,{size:6}),s.jsx(Qt,{size:6}),s.jsx(Qt,{size:6})]}),Array.from({length:n},(o,r)=>s.jsx("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<n-1?12:0},children:s.jsx(z,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function Fy({width:e,height:t}){const r=Math.min((e-16)/7,(t-40)/6);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(z,{w:e*.3,h:3,strong:!0}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(l,i)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:s.jsx(z,{w:r*.5,h:2})},`h${i}`)),Array.from({length:7*5},(l,i)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:s.jsx("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function Hy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[s.jsx(Qt,{size:Math.min(32,t*.55)}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:"50%",h:3,strong:!0}),s.jsx(z,{w:"75%",h:2})]}),s.jsx(z,{w:30,h:2})]})}function Uy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[s.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),s.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(z,{w:"65%",h:4,strong:!0}),s.jsx(z,{w:"40%",h:3}),s.jsx("div",{style:{flex:1}}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(z,{w:"30%",h:5,strong:!0}),s.jsx(Je,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Yy({width:e,height:t}){const n=Math.min(48,t*.3);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[s.jsx(Qt,{size:n}),s.jsx(z,{w:e*.45,h:4,strong:!0}),s.jsx(z,{w:e*.3,h:2}),s.jsxs("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(z,{w:20,h:3,strong:!0}),s.jsx(z,{w:28,h:2})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(z,{w:20,h:3,strong:!0}),s.jsx(z,{w:28,h:2})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[s.jsx(z,{w:20,h:3,strong:!0}),s.jsx(z,{w:28,h:2})]})]})]})}function Xy({width:e,height:t}){const n=Math.max(e*.6,80),o=Math.max(3,Math.floor(t/40));return s.jsxs("div",{style:{height:"100%",display:"flex"},children:[s.jsx("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),s.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[s.jsx(z,{w:n*.4,h:4,strong:!0}),s.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:o},(r,l)=>s.jsx("div",{style:{padding:"6px 0"},children:s.jsx(z,{w:`${50+l*17%35}%`,h:2,strong:l===0})},l))]})]})}function Qy({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[s.jsx(z,{w:"70%",h:3,strong:!0}),s.jsx(z,{w:"90%",h:2}),s.jsx(z,{w:"60%",h:2})]}),s.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Vy({width:e,height:t}){const n=Math.min(t*.7,e*.3);return s.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[s.jsx(Je,{w:n,h:n,radius:n*.25}),s.jsx(z,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Ky({width:e,height:t}){const n=Math.max(2,Math.min(5,Math.floor(t/56)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),s.jsx(z,{w:e*(.3+r*13%25/100),h:3,strong:!0})]}),s.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"▼":"▶"})]},r))})}function Gy({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.max(1,Math.min(3,Math.floor(t/120)));return s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${o}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*o},(r,l)=>s.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[s.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),s.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},l))})}function qy({width:e,height:t}){const n=Math.min(e,t);return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Jy({width:e,height:t}){const n=Math.min(e,t)/2-1;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),s.jsx("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function Zy({width:e,height:t}){const n=Math.max(2,t*.12),o=Math.min(t*.35,10),r=e*.55;return s.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[s.jsx("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:s.jsx("div",{style:{width:r,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),s.jsx("div",{style:{position:"absolute",left:r-o,width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function e1({width:e,height:t}){const n=Math.min(36,t*.15),o=7,r=4,l=Math.min((e-16)/o,(t-n-40)/(r+1));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[s.jsxs("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[s.jsx(z,{w:"40%",h:2}),s.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),s.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),s.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[s.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),s.jsx(z,{w:e*.25,h:2,strong:!0}),s.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:o*r},(i,a)=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l},children:s.jsx("div",{style:{width:l*.5,height:l*.5,borderRadius:"50%",background:a===10?"var(--agd-bar)":"transparent"},children:s.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:a===10?1:.25}})})})},a))})]})]})}function t1({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[s.jsx("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),s.jsx("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function n1({width:e,height:t}){return s.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:s.jsxs("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[s.jsx(z,{w:"60%",h:2,strong:!0}),s.jsx("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function o1({width:e,height:t}){const n=Math.min(e,t);return s.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:s.jsx("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function r1({width:e,height:t}){const n=Math.min(e,t)/2-2;return s.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[s.jsx("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),s.jsx("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function s1({width:e,height:t}){const n=Math.min(36,t*.25,e*.12),o=Math.max(1,Math.min(3,Math.floor(t/80)));return s.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:o},(r,l)=>s.jsxs("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[s.jsx(Je,{w:n,h:n,radius:n*.25}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx(z,{w:`${40+l*13%20}%`,h:3,strong:!0}),s.jsx(z,{w:`${60+l*17%25}%`,h:2})]})]},l))})}function l1({width:e,height:t}){const n=Math.max(2,Math.min(4,Math.floor(e/120))),o=Math.min(36,t*.25);return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[s.jsx(z,{w:e*.3,h:4,strong:!0}),s.jsx("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(r,l)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[s.jsx(Qt,{size:o}),s.jsx(z,{w:e*.12,h:3,strong:!0}),s.jsx(z,{w:e*.08,h:2})]},l))})]})}function i1({width:e,height:t}){const n=Math.max(2,Math.min(3,Math.floor(t/80)));return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[s.jsx(z,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),s.jsx(z,{w:e*.35,h:2}),s.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(o,r)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:Math.min(60,e*.2),h:2}),s.jsx(Je,{w:"100%",h:Math.min(32,t*.1),radius:4})]},r))}),s.jsx(Je,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),s.jsx(z,{w:e*.4,h:2})]})}function a1({width:e,height:t}){return s.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[s.jsx(z,{w:e*.4,h:4,strong:!0}),s.jsx(z,{w:e*.6,h:2}),s.jsxs("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:50,h:2}),s.jsx(Je,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:40,h:2}),s.jsx(Je,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[s.jsx(z,{w:50,h:2}),s.jsx(Je,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[s.jsx(z,{w:60,h:2}),s.jsx(Je,{w:"100%",h:"100%",radius:4})]}),s.jsx(Je,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var c1={navigation:qg,hero:Jg,sidebar:Zg,footer:ey,modal:ty,card:ny,text:oy,image:ry,table:sy,list:ly,button:iy,input:ay,form:cy,tabs:uy,avatar:dy,badge:_y,header:fy,section:hy,grid:py,dropdown:my,toggle:gy,search:yy,toast:xy,progress:vy,chart:wy,video:by,tooltip:ky,breadcrumb:Sy,pagination:Cy,divider:jy,accordion:My,carousel:Ey,pricing:Iy,testimonial:$y,cta:Ny,alert:Ly,banner:Ry,stat:Ty,stepper:Py,tag:Dy,rating:By,map:zy,timeline:Oy,fileUpload:Ay,codeBlock:Wy,calendar:Fy,notification:Hy,productCard:Uy,profile:Yy,drawer:Xy,popover:Qy,logo:Vy,faq:Ky,gallery:Gy,checkbox:qy,radio:Jy,slider:Zy,datePicker:e1,skeleton:t1,chip:n1,icon:o1,spinner:r1,feature:s1,team:l1,login:i1,contact:a1};function u1({type:e,width:t,height:n,text:o}){const r=c1[e];return r?s.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:s.jsx(r,{width:t,height:n,text:o})}):s.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var d1=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,_1={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=d1}var R=_1,gr=24,Tl=5;function j_(e,t,n,o,r){let l=1/0,i=1/0;const a=e.x,c=e.x+e.width,d=e.x+e.width/2,p=e.y,x=e.y+e.height,g=e.y+e.height/2,$=!o,k=$?[a,c,d]:[...o.left?[a]:[],...o.right?[c]:[]],j=$?[p,x,g]:[...o.top?[p]:[],...o.bottom?[x]:[]],M=[];for(const de of t)n.has(de.id)||M.push(de);r&&M.push(...r);for(const de of M){const Be=de.x,Ae=de.x+de.width,ke=de.x+de.width/2,Ne=de.y,oe=de.y+de.height,lt=de.y+de.height/2;for(const I of k)for(const U of[Be,Ae,ke]){const G=U-I;Math.abs(G)<Tl&&Math.abs(G)<Math.abs(l)&&(l=G)}for(const I of j)for(const U of[Ne,oe,lt]){const G=U-I;Math.abs(G)<Tl&&Math.abs(G)<Math.abs(i)&&(i=G)}}const h=Math.abs(l)<Tl?l:0,y=Math.abs(i)<Tl?i:0,b=[],N=new Set,W=a+h,Y=c+h,D=d+h,Q=p+y,he=x+y,q=g+y;for(const de of M){const Be=de.x,Ae=de.x+de.width,ke=de.x+de.width/2,Ne=de.y,oe=de.y+de.height,lt=de.y+de.height/2;for(const I of[Be,ke,Ae])for(const U of[W,D,Y])if(Math.abs(U-I)<.5){const G=`x:${Math.round(I)}`;N.has(G)||(N.add(G),b.push({axis:"x",pos:I}))}for(const I of[Ne,lt,oe])for(const U of[Q,q,he])if(Math.abs(U-I)<.5){const G=`y:${Math.round(I)}`;N.has(G)||(N.add(G),b.push({axis:"y",pos:I}))}}return{dx:h,dy:y,guides:b}}function M_(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function f1({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:o,isDarkMode:r,exiting:l,onInteractionChange:i,className:a,passthrough:c,extraSnapRects:d,onSelectionChange:p,deselectSignal:x,onDragMove:g,onDragEnd:$,clearSignal:k,wireframe:j}){const[M,h]=f.useState(new Set),[y,b]=f.useState(null),[N,W]=f.useState(null),[Y,D]=f.useState(null),[Q,he]=f.useState([]),[q,de]=f.useState(null),[Be,Ae]=f.useState(!1),ke=f.useRef(!1),[Ne,oe]=f.useState(new Set),lt=f.useRef(new Map),I=f.useRef(null),U=f.useRef(null),G=f.useRef(e);G.current=e;const Se=f.useRef(p);Se.current=p;const Fe=f.useRef(g);Fe.current=g;const wt=f.useRef($);wt.current=$;const Pt=f.useRef(x);f.useEffect(()=>{x!==Pt.current&&(Pt.current=x,h(new Set))},[x]);const Dt=f.useRef(k);f.useEffect(()=>{if(k!==void 0&&k!==Dt.current){Dt.current=k;const T=new Set(G.current.map(ie=>ie.id));T.size>0&&(oe(T),h(new Set),U.current=null,fe(()=>{t([]),oe(new Set)},180))}},[k,t]),f.useEffect(()=>{const T=ie=>{const Me=ie.target;if(!(Me.tagName==="INPUT"||Me.tagName==="TEXTAREA"||Me.isContentEditable)){if((ie.key==="Backspace"||ie.key==="Delete")&&M.size>0){ie.preventDefault();const Ce=new Set(M);oe(Ce),h(new Set),fe(()=>{t(G.current.filter(Ye=>!Ce.has(Ye.id))),oe(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ie.key)&&M.size>0){ie.preventDefault();const Ce=ie.shiftKey?20:1,Ye=ie.key==="ArrowLeft"?-Ce:ie.key==="ArrowRight"?Ce:0,He=ie.key==="ArrowUp"?-Ce:ie.key==="ArrowDown"?Ce:0;t(e.map(Ie=>M.has(Ie.id)?{...Ie,x:Math.max(0,Ie.x+Ye),y:Math.max(0,Ie.y+He)}:Ie));return}if(ie.key==="Escape"){n?o(null):M.size>0&&h(new Set);return}}};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[M,n,e,t,o]);const Bt=f.useCallback(T=>{if(T.button!==0||c||T.target.closest(`.${R.placement}`))return;T.preventDefault(),T.stopPropagation();const Me=window.scrollY,ge=T.clientX,Ce=T.clientY;if(n){U.current="place",i?.(!0);let Ye=!1,He=ge,Ie=Ce;const Xe=ue=>{He=ue.clientX,Ie=ue.clientY;const C=Math.abs(He-ge),E=Math.abs(Ie-Ce);if((C>5||E>5)&&(Ye=!0),Ye){const B=Math.min(ge,He),O=Math.min(Ce,Ie),se=Math.abs(He-ge),K=Math.abs(Ie-Ce);b({x:B,y:O,w:se,h:K}),D({x:ue.clientX+12,y:ue.clientY+12,text:`${Math.round(se)} × ${Math.round(K)}`})}},at=ue=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",at),b(null),D(null),U.current=null,i?.(!1);const C=J[n];let E,B,O,se;Ye?(E=Math.min(ge,He),B=Math.min(Ce,Ie)+Me,O=Math.max(gr,Math.abs(He-ge)),se=Math.max(gr,Math.abs(Ie-Ce))):(O=C.width,se=C.height,E=ge-O/2,B=Ce+Me-se/2),E=Math.max(0,E),B=Math.max(0,B);const K={id:M_(),type:n,x:E,y:B,width:O,height:se,scrollY:Me,timestamp:Date.now()},F=[...e,K];t(F),h(new Set([K.id])),o(null)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",at)}else{T.shiftKey||h(new Set),U.current="select";let Ye=!1;const He=Xe=>{const at=Math.abs(Xe.clientX-ge),ue=Math.abs(Xe.clientY-Ce);if((at>4||ue>4)&&(Ye=!0),Ye){const C=Math.min(ge,Xe.clientX),E=Math.min(Ce,Xe.clientY);W({x:C,y:E,w:Math.abs(Xe.clientX-ge),h:Math.abs(Xe.clientY-Ce)})}},Ie=Xe=>{if(window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",Ie),U.current=null,Ye){const at=Math.min(ge,Xe.clientX),ue=Math.min(Ce,Xe.clientY)+Me,C=Math.abs(Xe.clientX-ge),E=Math.abs(Xe.clientY-Ce),B=new Set(T.shiftKey?M:new Set);for(const O of e)O.y-Me,O.x+O.width>at&&O.x<at+C&&O.y+O.height>ue&&O.y<ue+E&&B.add(O.id);h(B)}W(null)};window.addEventListener("mousemove",He),window.addEventListener("mouseup",Ie)}},[n,c,e,t,M]),zt=f.useCallback((T,ie)=>{if(T.button!==0)return;const Me=T.target;if(Me.closest(`.${R.handle}`)||Me.closest(`.${R.deleteButton}`))return;T.preventDefault(),T.stopPropagation();let ge;T.shiftKey?(ge=new Set(M),ge.has(ie)?ge.delete(ie):ge.add(ie)):M.has(ie)?ge=new Set(M):ge=new Set([ie]),h(ge),(ge.size!==M.size||[...ge].some(K=>!M.has(K)))&&Se.current?.(ge,T.shiftKey);const Ye=T.clientX,He=T.clientY,Ie=new Map;for(const K of e)ge.has(K.id)&&Ie.set(K.id,{x:K.x,y:K.y});U.current="move",i?.(!0);let Xe=!1,at=!1,ue=e,C=0,E=0;const B=new Map;for(const K of e)Ie.has(K.id)&&B.set(K.id,{w:K.width,h:K.height});const O=K=>{const F=K.clientX-Ye,we=K.clientY-He;if((Math.abs(F)>2||Math.abs(we)>2)&&(Xe=!0),!Xe)return;if(K.altKey&&!at){at=!0;const pe=[];for(const Qe of e)Ie.has(Qe.id)&&pe.push({...Qe,id:M_(),timestamp:Date.now()});ue=[...e,...pe]}let be=1/0,ze=1/0,Ke=-1/0,ae=-1/0;for(const[pe,Qe]of Ie){const $e=B.get(pe);$e&&(be=Math.min(be,Qe.x+F),ze=Math.min(ze,Qe.y+we),Ke=Math.max(Ke,Qe.x+F+$e.w),ae=Math.max(ae,Qe.y+we+$e.h))}const We={x:be,y:ze,width:Ke-be,height:ae-ze},{dx:Oe,dy:Le,guides:re}=j_(We,ue,new Set(Ie.keys()),void 0,d);he(re);const Ge=F+Oe,je=we+Le;C=Ge,E=je,t(ue.map(pe=>{const Qe=Ie.get(pe.id);return Qe?{...pe,x:Math.max(0,Qe.x+Ge),y:Math.max(0,Qe.y+je)}:pe})),Fe.current?.(Ge,je)},se=()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",se),U.current=null,i?.(!1),he([]),wt.current?.(C,E,Xe)};window.addEventListener("mousemove",O),window.addEventListener("mouseup",se)},[M,e,t,i]),Vn=f.useCallback((T,ie,Me)=>{T.preventDefault(),T.stopPropagation();const ge=e.find(B=>B.id===ie);if(!ge)return;h(new Set([ie])),U.current="resize",i?.(!0);const Ce=T.clientX,Ye=T.clientY,He=ge.width,Ie=ge.height,Xe=ge.x,at=ge.y,ue={left:Me.includes("w"),right:Me.includes("e"),top:Me.includes("n"),bottom:Me.includes("s")},C=B=>{const O=B.clientX-Ce,se=B.clientY-Ye;let K=He,F=Ie,we=Xe,be=at;Me.includes("e")&&(K=Math.max(gr,He+O)),Me.includes("w")&&(K=Math.max(gr,He-O),we=Xe+He-K),Me.includes("s")&&(F=Math.max(gr,Ie+se)),Me.includes("n")&&(F=Math.max(gr,Ie-se),be=at+Ie-F);const ze={x:we,y:be,width:K,height:F},{dx:Ke,dy:ae,guides:We}=j_(ze,G.current,new Set([ie]),ue,d);he(We),Ke!==0&&(ue.right?K+=Ke:ue.left&&(we+=Ke,K-=Ke)),ae!==0&&(ue.bottom?F+=ae:ue.top&&(be+=ae,F-=ae)),t(G.current.map(Oe=>Oe.id===ie?{...Oe,x:we,y:be,width:K,height:F}:Oe)),D({x:B.clientX+12,y:B.clientY+12,text:`${Math.round(K)} × ${Math.round(F)}`})},E=()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",E),D(null),U.current=null,i?.(!1),he([])};window.addEventListener("mousemove",C),window.addEventListener("mouseup",E)},[e,t,i]),ao=f.useCallback(T=>{U.current=null,oe(ie=>{const Me=new Set(ie);return Me.add(T),Me}),h(ie=>{const Me=new Set(ie);return Me.delete(T),Me}),fe(()=>{t(G.current.filter(ie=>ie.id!==T)),oe(ie=>{const Me=new Set(ie);return Me.delete(T),Me})},180)},[t]),co={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},on=f.useCallback(T=>{const ie=e.find(Me=>Me.id===T);ie&&(ke.current=!!ie.text,de(T),Ae(!1))},[e]),Gt=f.useCallback(()=>{q&&(Ae(!0),fe(()=>{de(null),Ae(!1)},150))},[q]);f.useEffect(()=>{l&&q&&Gt()},[l]);const _n=f.useCallback(T=>{q&&(t(e.map(ie=>ie.id===q?{...ie,text:T.trim()||void 0}:ie)),Gt())},[q,e,t,Gt]),Sn=typeof window<"u"?window.scrollY:0,uo=["nw","ne","se","sw"],Kn=j?"#f97316":"#3c82f7",_o=[{dir:"n",cls:R.edgeN,arrow:s.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:s.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Kn})})},{dir:"e",cls:R.edgeE,arrow:s.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:s.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Kn})})},{dir:"s",cls:R.edgeS,arrow:s.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:s.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Kn})})},{dir:"w",cls:R.edgeW,arrow:s.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:s.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Kn})})}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:I,className:`${R.overlay} ${r?"":R.light} ${n?R.placing:""} ${c?R.passthrough:""} ${l?R.overlayExiting:""} ${j?R.wireframe:""}${a?` ${a}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Bt,children:e.map(T=>{const ie=M.has(T.id),Me=Nn[T.type]?.label||T.type,ge=T.y-Sn;return s.jsxs("div",{"data-design-placement":T.id,className:`${R.placement} ${ie?R.selected:""} ${Ne.has(T.id)?R.exiting:""}`,style:{left:T.x,top:ge,width:T.width,height:T.height,position:"fixed"},onMouseDown:Ce=>zt(Ce,T.id),onDoubleClick:()=>on(T.id),children:[s.jsx("span",{className:R.placementLabel,children:Me}),s.jsx("span",{className:`${R.placementAnnotation} ${T.text?R.annotationVisible:""}`,children:(T.text&&lt.current.set(T.id,T.text),T.text||lt.current.get(T.id)||"")}),s.jsx("div",{className:R.placementContent,children:s.jsx(u1,{type:T.type,width:T.width,height:T.height,text:T.text})}),s.jsx("div",{className:R.deleteButton,onMouseDown:Ce=>Ce.stopPropagation(),onClick:()=>ao(T.id),children:"✕"}),uo.map(Ce=>s.jsx("div",{className:`${R.handle} ${R[`handle${Ce.charAt(0).toUpperCase()}${Ce.slice(1)}`]}`,onMouseDown:Ye=>Vn(Ye,T.id,Ce)},Ce)),_o.map(({dir:Ce,cls:Ye,arrow:He})=>s.jsx("div",{className:`${R.edgeHandle} ${Ye}`,onMouseDown:Ie=>Vn(Ie,T.id,Ce),children:He},Ce))]},T.id)})}),q&&(()=>{const T=e.find(at=>at.id===q);if(!T)return null;const ie=T.y-Sn,Me=T.x+T.width/2,ge=ie-8,Ce=ie+T.height+8,Ye=ge>200,He=Ce<window.innerHeight-100,Ie=Math.max(160,Math.min(window.innerWidth-160,Me));let Xe;return Ye?Xe={left:Ie,bottom:window.innerHeight-ge}:He?Xe={left:Ie,top:Ce}:Xe={left:Ie,top:Math.max(80,window.innerHeight/2-80)},s.jsx(Ei,{element:Nn[T.type]?.label||T.type,placeholder:co[T.type]||"Label or content text",initialValue:T.text??"",submitLabel:ke.current?"Save":"Set",onSubmit:_n,onCancel:Gt,onDelete:ke.current?()=>{_n("")}:void 0,isExiting:Be,lightMode:!r,style:Xe})})(),y&&s.jsx("div",{className:R.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),N&&s.jsx("div",{className:R.selectBox,style:{left:N.x,top:N.y,width:N.w,height:N.h},"data-feedback-toolbar":!0}),Y&&s.jsx("div",{className:R.sizeIndicator,style:{left:Y.x,top:Y.y},"data-feedback-toolbar":!0,children:Y.text}),Q.map((T,ie)=>s.jsx("div",{className:R.guideLine,style:T.axis==="x"?{position:"fixed",left:T.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:T.pos-Sn,right:0,height:1},"data-feedback-toolbar":!0},`${T.axis}-${T.pos}-${ie}`))]})}function h1(e){if(!e)return"";const t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?R.fadeTop:""} ${n?R.fadeBottom:""}`}var _="currentColor",L="0.5";function p1({type:e}){switch(e){case"navigation":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:_,opacity:".4"}),s.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:_,opacity:".25"})]});case"header":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:_,opacity:".35"}),s.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:_,opacity:".15"})]});case"hero":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:_,opacity:".35"}),s.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:_,strokeWidth:L})]});case"section":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:_,opacity:".15"})]});case"sidebar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:_,opacity:".15"})]});case"footer":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:_,opacity:".2"})]});case"modal":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:_,strokeWidth:L})]});case"divider":return s.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:s.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:_,strokeWidth:"0.5",opacity:".3"})});case"card":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:_,opacity:".04"}),s.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:_,opacity:".12"})]});case"text":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:_,opacity:".12"})]});case"image":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"})]});case"video":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:_,strokeWidth:L,fill:_,opacity:".15"})]});case"table":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:_,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:_,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"}),s.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:_,strokeWidth:".3",opacity:".25"})]});case"grid":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:_,strokeWidth:L})]});case"list":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:_,opacity:".2"})]});case"chart":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:_,opacity:".2"}),s.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:_,opacity:".2"})]});case"accordion":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:_,strokeWidth:L})]});case"carousel":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:_,strokeWidth:L,opacity:".35"}),s.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:_,strokeWidth:L,opacity:".35"}),s.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:_,opacity:".35"}),s.jsx("circle",{cx:"10",cy:"14",r:".6",fill:_,opacity:".15"}),s.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:_,opacity:".15"})]});case"button":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"})]});case"input":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:_,opacity:".12"})]});case"search":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"form":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:_,strokeWidth:L})]});case"tabs":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:_,strokeWidth:L})]});case"dropdown":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:_,strokeWidth:L,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"13",cy:"8",r:"2",fill:_,opacity:".3"})]});case"avatar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:_,strokeWidth:L})]});case"badge":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"})]});case"breadcrumb":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:_,opacity:".3"}),s.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:_,strokeWidth:L,opacity:".2"}),s.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("path",{d:"M14 7l1 1-1 1",stroke:_,strokeWidth:L,opacity:".2"}),s.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:_,opacity:".15"})]});case"pagination":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:_,opacity:".15",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:_,strokeWidth:L})]});case"progress":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:_,opacity:".2"})]});case"toast":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".12"})]});case"tooltip":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:_,strokeWidth:L})]});case"pricing":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:_,opacity:".1"}),s.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:_,opacity:".1"}),s.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:_,opacity:".2"})]});case"testimonial":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:_,opacity:".2",fontFamily:"serif",children:"“"}),s.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:_,opacity:".12"}),s.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:_,strokeWidth:L,opacity:".25"}),s.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:_,opacity:".15"})]});case"cta":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:_,strokeWidth:L})]});case"alert":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:_,strokeWidth:"0.6",opacity:".5"}),s.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:_,opacity:".5"}),s.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:_,opacity:".2"})]});case"banner":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:_,strokeWidth:L})]});case"stat":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:_,opacity:".3"}),s.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"stepper":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"4",cy:"8",r:"2",fill:_,opacity:".2",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:_,strokeWidth:".4",opacity:".3"}),s.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:_,strokeWidth:".4",opacity:".3"}),s.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:_,strokeWidth:L})]});case"tag":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:_,strokeWidth:L,opacity:".2"}),s.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:_,strokeWidth:L,opacity:".2"})]});case"rating":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:_,opacity:".25"}),s.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:_,opacity:".25"}),s.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:_,strokeWidth:L,opacity:".25"})]});case"map":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:_,strokeWidth:".3",opacity:".15"}),s.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:_,strokeWidth:".3",opacity:".15"}),s.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:_,opacity:".15",stroke:_,strokeWidth:L})]});case"timeline":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:_,strokeWidth:".4",opacity:".25"}),s.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:_,opacity:".2",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:_,opacity:".15"})]});case"fileUpload":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:_,strokeWidth:L,strokeDasharray:"2 1"}),s.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:_,opacity:".15"})]});case"codeBlock":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"4",cy:"4",r:".6",fill:_,opacity:".3"}),s.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:_,opacity:".3"}),s.jsx("circle",{cx:"7",cy:"4",r:".6",fill:_,opacity:".3"}),s.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:_,opacity:".12"})]});case"calendar":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:_,strokeWidth:L}),s.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:_,strokeWidth:".4",opacity:".25"}),s.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:_,opacity:".2"}),s.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:_,opacity:".2"}),s.jsx("circle",{cx:"7",cy:"9",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"9",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"13",cy:"9",r:".6",fill:_,opacity:".3"}),s.jsx("circle",{cx:"7",cy:"12",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"12",r:".6",fill:_,opacity:".2"})]});case"notification":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:_,strokeWidth:L,opacity:".25"}),s.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:_,opacity:".12"}),s.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:_,opacity:".25"})]});case"productCard":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:_,opacity:".04"}),s.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:_,strokeWidth:L})]});case"profile":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"})]});case"drawer":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:_,strokeWidth:L,opacity:".15"})]});case"popover":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:_,strokeWidth:L})]});case"logo":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:_,strokeWidth:L,opacity:".3"}),s.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:_,opacity:".12"})]});case"faq":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:_,opacity:".3",fontWeight:"bold",children:"?"}),s.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:_,opacity:".12"}),s.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:_,opacity:".3",fontWeight:"bold",children:"?"}),s.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:_,opacity:".12"})]});case"gallery":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:_,strokeWidth:L})]});case"checkbox":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:_,strokeWidth:L,opacity:".35"})]});case"radio":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:_,strokeWidth:L}),s.jsx("circle",{cx:"10",cy:"8",r:"2",fill:_,opacity:".3"})]});case"slider":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:_,strokeWidth:L})]});case"datePicker":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:_,opacity:".12"}),s.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:_,strokeWidth:L,strokeDasharray:"2 1",opacity:".3"}),s.jsx("circle",{cx:"6",cy:"10",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"10",r:".6",fill:_,opacity:".3"}),s.jsx("circle",{cx:"14",cy:"10",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"6",cy:"13",r:".6",fill:_,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"13",r:".6",fill:_,opacity:".2"})]});case"skeleton":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:_,opacity:".08"}),s.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:_,opacity:".08"}),s.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:_,opacity:".08"})]});case"chip":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:_,opacity:".08",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:_,opacity:".25"}),s.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:_,strokeWidth:L,opacity:".2"}),s.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:_,strokeWidth:L,opacity:".2"}),s.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:_,strokeWidth:L,opacity:".25"})]});case"icon":return s.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:s.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:_,strokeWidth:L,opacity:".3"})});case"spinner":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:_,strokeWidth:L,opacity:".12"}),s.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:_,strokeWidth:L,opacity:".35",strokeLinecap:"round"})]});case"feature":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:_,strokeWidth:L,opacity:".25"}),s.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:_,opacity:".12"}),s.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:_,opacity:".12"})]});case"team":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:_,strokeWidth:L,opacity:".5"}),s.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:_,opacity:".15"}),s.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:_,opacity:".1"})]});case"login":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:_,opacity:".25"}),s.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:_,opacity:".2"})]});case"contact":return s.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[s.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:_,opacity:".2"}),s.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:_,strokeWidth:L}),s.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:_,opacity:".2"})]});default:return null}}function m1({activeType:e,onSelect:t,onDragStart:n,scrollRef:o,fadeClass:r,blankCanvas:l}){return s.jsx("div",{ref:o,className:`${R.placeScroll} ${r||""}`,children:dp.map(i=>s.jsxs("div",{className:R.paletteSection,children:[s.jsx("div",{className:R.paletteSectionTitle,children:i.section}),i.items.map(a=>s.jsxs("div",{className:`${R.paletteItem} ${e===a.type?R.active:""} ${l?R.wireframe:""}`,onClick:()=>t(a.type),onMouseDown:c=>{c.button===0&&n(a.type,c)},children:[s.jsx("div",{className:R.paletteItemIcon,children:s.jsx(p1,{type:a.type})}),s.jsx("span",{className:R.paletteItemLabel,children:a.label})]},a.type))]},i.section))})}function g1({value:e,suffix:t}){const[n,o]=f.useState(null),[r,l]=f.useState(t),[i,a]=f.useState("up"),c=f.useRef(e),d=f.useRef(t),p=f.useRef(),x=n!==null&&r!==t;return f.useEffect(()=>{if(e!==c.current){if(e===0){c.current=e,d.current=t,o(null);return}a(e>c.current?"up":"down"),o(c.current),l(d.current),c.current=e,d.current=t,clearTimeout(p.current),p.current=fe(()=>o(null),250)}else d.current=t},[e,t]),n===null?s.jsxs(s.Fragment,{children:[e,t?` ${t}`:""]}):x?s.jsxs("span",{className:R.rollingWrap,children:[s.jsxs("span",{style:{visibility:"hidden"},children:[e," ",t]}),s.jsxs("span",{className:`${R.rollingNum} ${i==="up"?R.exitUp:R.exitDown}`,children:[n," ",r]},`o${n}-${e}`),s.jsxs("span",{className:`${R.rollingNum} ${i==="up"?R.enterUp:R.enterDown}`,children:[e," ",t]},`n${e}`)]}):s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:R.rollingWrap,children:[s.jsx("span",{style:{visibility:"hidden"},children:e}),s.jsx("span",{className:`${R.rollingNum} ${i==="up"?R.exitUp:R.exitDown}`,children:n},`o${n}-${e}`),s.jsx("span",{className:`${R.rollingNum} ${i==="up"?R.enterUp:R.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function y1({activeType:e,onSelect:t,isDarkMode:n,sectionCount:o,onDetectSections:r,visible:l,onExited:i,placementCount:a,onClearPlacements:c,onDragStart:d,blankCanvas:p,onBlankCanvasChange:x,wireframePurpose:g,onWireframePurposeChange:$,Tooltip:k}){const[j,M]=f.useState(!1),[h,y]=f.useState("exit"),[b,N]=f.useState(!1),[W,Y]=f.useState(!0),D=f.useRef(0),Q=f.useRef(""),he=f.useRef(0),q=f.useRef(),de=f.useRef(null),[Be,Ae]=f.useState("");f.useEffect(()=>(l?(M(!0),clearTimeout(q.current),cancelAnimationFrame(he.current),he.current=Lr(()=>{he.current=Lr(()=>{y("enter")})})):(cancelAnimationFrame(he.current),y("exit"),clearTimeout(q.current),q.current=fe(()=>{M(!1),i?.()},200)),()=>cancelAnimationFrame(he.current)),[l]);const ke=a>0||o>0,Ne=a+o;return Ne>0&&(D.current=Ne,Q.current=p?Ne===1?"Component":"Components":Ne===1?"Change":"Changes"),f.useEffect(()=>{if(ke)b?Y(!1):(Y(!0),N(!0),Lr(()=>{Lr(()=>{Y(!1)})}));else{Y(!0);const oe=fe(()=>N(!1),300);return()=>clearTimeout(oe)}},[ke]),f.useEffect(()=>{if(!j)return;const oe=de.current;if(!oe)return;const lt=()=>Ae(h1(oe));lt(),oe.addEventListener("scroll",lt,{passive:!0});const I=new ResizeObserver(lt);return I.observe(oe),()=>{oe.removeEventListener("scroll",lt),I.disconnect()}},[j]),j?s.jsxs("div",{className:`${R.palette} ${R[h]} ${n?"":R.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:oe=>oe.stopPropagation(),onMouseDown:oe=>oe.stopPropagation(),onTransitionEnd:oe=>{oe.target===oe.currentTarget&&(l||(clearTimeout(q.current),M(!1),y("exit"),i?.()))},children:[s.jsxs("div",{className:R.paletteHeader,children:[s.jsx("div",{className:R.paletteHeaderTitle,children:"Layout Mode"}),s.jsxs("div",{className:R.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",s.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),s.jsxs("div",{className:`${R.canvasToggle} ${p?R.active:""}`,onClick:()=>x(!p),children:[s.jsx("span",{className:R.canvasToggleIcon,children:s.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[s.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),s.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),s.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),s.jsx("span",{className:R.canvasToggleLabel,children:"Wireframe New Page"})]}),s.jsx("div",{className:`${R.wireframePurposeWrap} ${p?"":R.collapsed}`,children:s.jsx("div",{className:R.wireframePurposeInner,children:s.jsx("textarea",{className:R.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:g,onChange:oe=>$(oe.target.value),rows:2})})}),s.jsx(m1,{activeType:e,onSelect:t,onDragStart:d,scrollRef:de,fadeClass:Be,blankCanvas:p}),b&&s.jsx("div",{className:`${R.paletteFooterWrap} ${W?R.footerHidden:""}`,children:s.jsx("div",{className:R.paletteFooterInner,children:s.jsx("div",{className:R.paletteFooterInnerContent,children:s.jsxs("div",{className:R.paletteFooter,children:[s.jsx("span",{className:R.paletteFooterCount,children:s.jsx(g1,{value:D.current,suffix:Q.current})}),s.jsx("button",{className:R.paletteFooterClear,onClick:c,children:"Clear"})]})})})})]}):null}function Qr(e){if(e.parentElement)return e.parentElement;const t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Ut(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Qr(n)}return null}function x1(e,t=4){const n=[];let o=e,r=0;for(;o&&r<t;){const l=o.tagName.toLowerCase();if(l==="html"||l==="body")break;let i=l;if(o.id)i=`#${o.id}`;else if(o.className&&typeof o.className=="string"){const c=o.className.split(/\s+/).find(d=>d.length>2&&!d.match(/^[a-z]{1,2}$/)&&!d.match(/[A-Z0-9]{5,}/));c&&(i=`.${c.split("_")[0]}`)}const a=Qr(o);!o.parentElement&&a&&(i=`⟨shadow⟩ ${i}`),n.unshift(i),o=a,r++}return n.join(" > ")}function Or(e){const t=x1(e);if(e.dataset.element)return{name:e.dataset.element,path:t};const n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){const o=Ut(e,"svg");if(o){const r=Qr(o);if(r instanceof HTMLElement)return{name:`graphic in ${Or(r).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){const o=Qr(e);if(o?.tagName.toLowerCase()==="button"){const r=o.textContent?.trim();return{name:r?`icon in "${r}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){const o=e.textContent?.trim(),r=e.getAttribute("aria-label");return r?{name:`button [${r}]`,path:t}:{name:o?`button "${o.slice(0,25)}"`:"button",path:t}}if(n==="a"){const o=e.textContent?.trim(),r=e.getAttribute("href");return o?{name:`link "${o.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:"link",path:t}}if(n==="input"){const o=e.getAttribute("type")||"text",r=e.getAttribute("placeholder"),l=e.getAttribute("name");return r?{name:`input "${r}"`,path:t}:l?{name:`input [${l}]`,path:t}:{name:`${o} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){const o=e.textContent?.trim();return{name:o?`${n} "${o.slice(0,35)}"`:n,path:t}}if(n==="p"){const o=e.textContent?.trim();return o?{name:`paragraph: "${o.slice(0,40)}${o.length>40?"...":""}"`,path:t}:{name:"paragraph",path:t}}if(n==="span"||n==="label"){const o=e.textContent?.trim();return o&&o.length<40?{name:`"${o}"`,path:t}:{name:n,path:t}}if(n==="li"){const o=e.textContent?.trim();return o&&o.length<40?{name:`list item: "${o.slice(0,35)}"`,path:t}:{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){const o=e.textContent?.trim();return o&&o.length<30?{name:`code: \`${o}\``,path:t}:{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){const o=e.getAttribute("alt");return{name:o?`image "${o.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){const o=e.className,r=e.getAttribute("role"),l=e.getAttribute("aria-label");if(l)return{name:`${n} [${l}]`,path:t};if(r)return{name:`${r}`,path:t};if(typeof o=="string"&&o){const i=o.split(/[\s_-]+/).map(a=>a.replace(/[A-Z0-9]{5,}.*$/,"")).filter(a=>a.length>2&&!/^[a-z]{1,2}$/.test(a)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function ms(e){const t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);const o=e.previousElementSibling;if(o){const l=o.textContent?.trim();l&&l.length<50&&t.unshift(`[before: "${l.slice(0,40)}"]`)}const r=e.nextElementSibling;if(r){const l=r.textContent?.trim();l&&l.length<50&&t.push(`[after: "${l.slice(0,40)}"]`)}return t.join(" ")}function Pl(e){const t=Qr(e);if(!t)return"";const r=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(p=>p!==e&&p instanceof HTMLElement);if(r.length===0)return"";const l=r.slice(0,4).map(p=>{const x=p.tagName.toLowerCase(),g=p.className;let $="";if(typeof g=="string"&&g){const k=g.split(/\s+/).map(j=>j.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j));k&&($=`.${k}`)}if(x==="button"||x==="a"){const k=p.textContent?.trim().slice(0,15);if(k)return`${x}${$} "${k}"`}return`${x}${$}`});let a=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){const p=t.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));p&&(a=`.${p}`)}const c=t.children.length,d=c>l.length+1?` (${c} total in ${a})`:"";return l.join(", ")+d}function gs(e){const t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(o=>o.length>0).map(o=>{const r=o.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:o}).filter((o,r,l)=>l.indexOf(o)===r).join(", ")}var _p=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),v1=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),w1=new Set(["input","textarea","select"]),b1=new Set(["img","video","canvas","svg"]),k1=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Dl(e){if(typeof window>"u")return{};const t=window.getComputedStyle(e),n={},o=e.tagName.toLowerCase();let r;v1.has(o)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:o==="button"||o==="a"&&e.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:w1.has(o)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:b1.has(o)?r=["width","height","objectFit","borderRadius"]:k1.has(o)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(const l of r){const i=l.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(i);a&&!_p.has(a)&&(n[l]=a)}return n}var S1=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Bl(e){if(typeof window>"u")return"";const t=window.getComputedStyle(e),n=[];for(const o of S1){const r=o.replace(/([A-Z])/g,"-$1").toLowerCase(),l=t.getPropertyValue(r);l&&!_p.has(l)&&n.push(`${r}: ${l}`)}return n.join("; ")}function C1(e){if(!e)return;const t={},n=e.split(";").map(o=>o.trim()).filter(Boolean);for(const o of n){const r=o.indexOf(":");if(r>0){const l=o.slice(0,r).trim(),i=o.slice(r+1).trim();l&&i&&(t[l]=i)}}return Object.keys(t).length>0?t:void 0}function zl(e){const t=[],n=e.getAttribute("role"),o=e.getAttribute("aria-label"),r=e.getAttribute("aria-describedby"),l=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),o&&t.push(`aria-label="${o}"`),r&&t.push(`aria-describedby="${r}"`),l&&t.push(`tabindex=${l}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function Ol(e){const t=[];let n=e;for(;n&&n.tagName.toLowerCase()!=="html";){const o=n.tagName.toLowerCase();let r=o;if(n.id)r=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){const i=n.className.split(/\s+/).map(a=>a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(a=>a.length>2);i&&(r=`${o}.${i}`)}const l=Qr(n);!n.parentElement&&l&&(r=`⟨shadow⟩ ${r}`),t.unshift(r),n=l}return t.join(" > ")}var j1=new Set(["nav","header","main","section","article","footer","aside"]),Ac={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},E_={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},M1=new Set(["script","style","noscript","link","meta"]),E1=40;function fp(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){const n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function sr(e){const t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){const r=e.className.split(/\s+/).filter(l=>l.length>0).find(l=>l.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(l)&&!/^[a-z]{1,2}$/.test(l));if(r){const l=`${t}.${CSS.escape(r)}`;if(document.querySelectorAll(l).length===1)return l}}const n=e.parentElement;if(n){const r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":sr(n)} > ${t}:nth-child(${r})`}return t}function Ii(e){const t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;const o=e.getAttribute("role");if(o&&Ac[o])return Ac[o];if(E_[t])return E_[t];const r=e.querySelector("h1, h2, h3, h4, h5, h6");if(r){const i=r.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}const{name:l}=Or(e);return l.charAt(0).toUpperCase()+l.slice(1)}function hp(e){const t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(o=>o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(o=>o.length>2&&!/^[a-z]{1,2}$/.test(o))||null}function pp(e){const t=e.textContent?.trim();if(!t)return null;const n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"…"}function I1(){const e=document.querySelector("main")||document.body,t=Array.from(e.children);let n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));const o=[];return n.forEach((r,l)=>{if(!(r instanceof HTMLElement))return;const i=r.tagName.toLowerCase();if(M1.has(i)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;const a=window.getComputedStyle(r);if(a.display==="none"||a.visibility==="hidden")return;const c=r.getBoundingClientRect();if(c.height<E1)return;const d=j1.has(i),p=r.getAttribute("role")&&Ac[r.getAttribute("role")],x=i==="div"&&c.height>=60;if(!d&&!p&&!x)return;const g=window.scrollY,$=fp(r),k={x:c.x,y:$?c.y:c.y+g,width:c.width,height:c.height};o.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Ii(r),tagName:i,selector:sr(r),role:r.getAttribute("role"),className:hp(r),textSnippet:pp(r),originalRect:k,currentRect:{...k},originalIndex:l,isFixed:$})}),o}function $1(e){const t=window.scrollY,n=e.getBoundingClientRect(),o=fp(e),r={x:n.x,y:o?n.y:n.y+t,width:n.width,height:n.height},l=e.parentElement;let i=0;return l&&(i=Array.from(l.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Ii(e),tagName:e.tagName.toLowerCase(),selector:sr(e),role:e.getAttribute("role"),className:hp(e),textSnippet:pp(e),originalRect:r,currentRect:{...r},originalIndex:i,isFixed:o}}var I_={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},$_=["nw","n","ne","e","se","s","sw","w"],Al=24,N_=16,Wl=5;function L_(e,t,n,o){let r=1/0,l=1/0;const i=e.x,a=e.x+e.width,c=e.x+e.width/2,d=e.y,p=e.y+e.height,x=e.y+e.height/2,g=[];for(const D of t)n.has(D.id)||g.push(D.currentRect);o&&g.push(...o);for(const D of g){const Q=D.x,he=D.x+D.width,q=D.x+D.width/2,de=D.y,Be=D.y+D.height,Ae=D.y+D.height/2;for(const ke of[i,a,c])for(const Ne of[Q,he,q]){const oe=Ne-ke;Math.abs(oe)<Wl&&Math.abs(oe)<Math.abs(r)&&(r=oe)}for(const ke of[d,p,x])for(const Ne of[de,Be,Ae]){const oe=Ne-ke;Math.abs(oe)<Wl&&Math.abs(oe)<Math.abs(l)&&(l=oe)}}const $=Math.abs(r)<Wl?r:0,k=Math.abs(l)<Wl?l:0,j=[],M=new Set,h=i+$,y=a+$,b=c+$,N=d+k,W=p+k,Y=x+k;for(const D of g){const Q=D.x,he=D.x+D.width,q=D.x+D.width/2,de=D.y,Be=D.y+D.height,Ae=D.y+D.height/2;for(const ke of[Q,q,he])for(const Ne of[h,b,y])if(Math.abs(Ne-ke)<.5){const oe=`x:${Math.round(ke)}`;M.has(oe)||(M.add(oe),j.push({axis:"x",pos:ke}))}for(const ke of[de,Ae,Be])for(const Ne of[N,Y,W])if(Math.abs(Ne-ke)<.5){const oe=`y:${Math.round(ke)}`;M.has(oe)||(M.add(oe),j.push({axis:"y",pos:ke}))}}return{dx:$,dy:k,guides:j}}var N1=new Set(["script","style","noscript","link","meta","br","hr"]);function R_(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(N1.has(t.tagName.toLowerCase())){t=t.parentElement;continue}const n=t.getBoundingClientRect();if(n.width>=N_&&n.height>=N_)return t;t=t.parentElement}return null}function L1({rearrangeState:e,onChange:t,isDarkMode:n,exiting:o,className:r,blankCanvas:l,extraSnapRects:i,onSelectionChange:a,deselectSignal:c,onDragMove:d,onDragEnd:p,clearSignal:x}){const{sections:g}=e,$=f.useRef(e);$.current=e;const[k,j]=f.useState(new Set),[M,h]=f.useState(!1),y=f.useRef(x);f.useEffect(()=>{x!==void 0&&x!==y.current&&(y.current=x,g.length>0&&h(!0))},[x,g.length]);const b=f.useRef(c);f.useEffect(()=>{c!==b.current&&(b.current=c,j(new Set))},[c]);const[N,W]=f.useState(null),[Y,D]=f.useState(!1),Q=f.useRef(!1),he=f.useCallback(C=>{const E=g.find(B=>B.id===C);E&&(Q.current=!!E.note,W(C),D(!1))},[g]),q=f.useCallback(()=>{N&&(D(!0),fe(()=>{W(null),D(!1)},150))},[N]),de=f.useCallback(C=>{N&&(t({...e,sections:g.map(E=>E.id===N?{...E,note:C.trim()||void 0}:E)}),q())},[N,g,e,t,q]);f.useEffect(()=>{o&&N&&q()},[o]);const[Be,Ae]=f.useState(new Set),ke=f.useRef(new Map),[Ne,oe]=f.useState(null),[lt,I]=f.useState(null),[U,G]=f.useState([]),[Se,Fe]=f.useState(0),wt=f.useRef(null),Pt=f.useRef(new Set),Dt=f.useRef(new Map),[Bt,zt]=f.useState(new Map),[Vn,ao]=f.useState(new Map),co=f.useRef(new Set),on=f.useRef(new Map),Gt=f.useRef(a);Gt.current=a;const _n=f.useRef(d);_n.current=d;const Sn=f.useRef(p);Sn.current=p,f.useEffect(()=>{l&&j(new Set)},[l]);const[uo,Kn]=f.useState(()=>!e.sections.some(C=>{const E=C.originalRect,B=C.currentRect;return Math.abs(E.x-B.x)>1||Math.abs(E.y-B.y)>1||Math.abs(E.width-B.width)>1||Math.abs(E.height-B.height)>1}));f.useEffect(()=>{if(!uo){const C=fe(()=>Kn(!0),380);return()=>clearTimeout(C)}},[]);const _o=f.useRef(new Set);f.useEffect(()=>{_o.current=new Set(g.map(C=>C.selector))},[g]),f.useEffect(()=>{const C=()=>Fe(window.scrollY);return C(),window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("resize",C,{passive:!0}),()=>{window.removeEventListener("scroll",C),window.removeEventListener("resize",C)}},[]),f.useEffect(()=>{const C=E=>{if(wt.current){oe(null);return}const B=document.elementFromPoint(E.clientX,E.clientY);if(!B){oe(null);return}if(B.closest("[data-feedback-toolbar]")){oe(null);return}if(B.closest("[data-design-placement]")){oe(null);return}if(B.closest("[data-annotation-popup]")){oe(null);return}const O=R_(B);if(!O){oe(null);return}for(const K of _o.current)try{const F=document.querySelector(K);if(F&&(F===O||O.contains(F))){oe(null);return}}catch{}const se=O.getBoundingClientRect();oe({x:se.x,y:se.y,w:se.width,h:se.height})};return document.addEventListener("mousemove",C,{passive:!0}),()=>document.removeEventListener("mousemove",C)},[g]),f.useEffect(()=>{const C=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=C}},[]),f.useEffect(()=>{const C=E=>{if(wt.current||E.button!==0)return;const B=E.target;if(!B||B.closest("[data-feedback-toolbar]")||B.closest("[data-design-placement]")||B.closest("[data-annotation-popup]"))return;const O=R_(B);let se=!1;if(O)for(const F of _o.current)try{const we=document.querySelector(F);if(we&&(we===O||O.contains(we))){se=!0;break}}catch{}const K=!!(E.shiftKey||E.metaKey||E.ctrlKey);if(O&&!se){E.preventDefault(),E.stopPropagation();const F=$1(O),we=[...g,F],be=[...e.originalOrder,F.id];t({...e,sections:we,originalOrder:be});const ze=new Set([F.id]);j(ze),Gt.current?.(ze,K),oe(null);const Ke=E.clientX,ae=E.clientY,We={x:F.currentRect.x,y:F.currentRect.y};F.originalRect;let Oe=!1,Le=0,re=0;wt.current="move";const Ge=pe=>{const Qe=pe.clientX-Ke,$e=pe.clientY-ae;if(!Oe&&(Math.abs(Qe)>2||Math.abs($e)>2)&&(Oe=!0),!Oe)return;const fn={x:We.x+Qe,y:We.y+$e,width:F.currentRect.width,height:F.currentRect.height},qt=L_(fn,we,new Set([F.id]),i);G(qt.guides);const rn=Qe+qt.dx,Bn=$e+qt.dy;Le=rn,re=Bn;const hn=document.querySelector(`[data-rearrange-section="${F.id}"]`);hn&&(hn.style.transform=`translate(${rn}px, ${Bn}px)`),zt(new Map([[F.id,{x:We.x+rn,y:We.y+Bn,width:F.currentRect.width,height:F.currentRect.height}]])),_n.current?.(rn,Bn)},je=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",je),wt.current=null,G([]),zt(new Map);const pe=document.querySelector(`[data-rearrange-section="${F.id}"]`);pe&&(pe.style.transform=""),Oe&&t({...e,sections:we.map(Qe=>Qe.id===F.id?{...Qe,currentRect:{...Qe.currentRect,x:Math.max(0,We.x+Le),y:Math.max(0,We.y+re)}}:Qe),originalOrder:be}),Sn.current?.(Le,re,Oe)};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",je)}else if(se&&O){E.preventDefault();for(const F of g)try{const we=document.querySelector(F.selector);if(we&&we===O){const be=new Set([F.id]);j(be),Gt.current?.(be,K);return}}catch{}K||(j(new Set),Gt.current?.(new Set,!1))}else K||(j(new Set),Gt.current?.(new Set,!1))};return document.addEventListener("mousedown",C,!0),()=>document.removeEventListener("mousedown",C,!0)},[g,e,t]),f.useEffect(()=>{const C=E=>{const B=E.target;if(!(B.tagName==="INPUT"||B.tagName==="TEXTAREA"||B.isContentEditable)){if((E.key==="Backspace"||E.key==="Delete")&&k.size>0){E.preventDefault();const O=new Set(k);Ae(se=>{const K=new Set(se);for(const F of O)K.add(F);return K}),j(new Set),fe(()=>{const se=$.current;t({...se,sections:se.sections.filter(K=>!O.has(K.id)),originalOrder:se.originalOrder.filter(K=>!O.has(K))}),Ae(K=>{const F=new Set(K);for(const we of O)F.delete(we);return F})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(E.key)&&k.size>0){E.preventDefault();const O=E.shiftKey?20:1,se=E.key==="ArrowLeft"?-O:E.key==="ArrowRight"?O:0,K=E.key==="ArrowUp"?-O:E.key==="ArrowDown"?O:0;t({...e,sections:g.map(F=>k.has(F.id)?{...F,currentRect:{...F.currentRect,x:Math.max(0,F.currentRect.x+se),y:Math.max(0,F.currentRect.y+K)}}:F)});return}E.key==="Escape"&&k.size>0&&j(new Set)}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[k,g,e,t]);const T=f.useCallback((C,E)=>{if(C.button!==0)return;const B=C.target;if(B.closest(`.${R.handle}`)||B.closest(`.${R.deleteButton}`))return;C.preventDefault(),C.stopPropagation();let O;C.shiftKey||C.metaKey||C.ctrlKey?(O=new Set(k),O.has(E)?O.delete(E):O.add(E)):k.has(E)?O=new Set(k):O=new Set([E]),j(O),(O.size!==k.size||[...O].some(Le=>!k.has(Le)))&&Gt.current?.(O,!!(C.shiftKey||C.metaKey||C.ctrlKey));const K=C.clientX,F=C.clientY,we=new Map;for(const Le of g)O.has(Le.id)&&we.set(Le.id,{x:Le.currentRect.x,y:Le.currentRect.y});wt.current="move";let be=!1,ze=0,Ke=0;const ae=new Map;for(const Le of g)if(O.has(Le.id)){const re=document.querySelector(`[data-rearrange-section="${Le.id}"]`);ae.set(Le.id,{outlineEl:re,curW:Le.currentRect.width,curH:Le.currentRect.height})}const We=Le=>{const re=Le.clientX-K,Ge=Le.clientY-F;if(re===0&&Ge===0)return;be=!0;let je=1/0,pe=1/0,Qe=-1/0,$e=-1/0;for(const[hn,{curW:ar,curH:sl}]of ae){const mt=we.get(hn);if(!mt)continue;const Gn=mt.x+re,ll=mt.y+Ge;je=Math.min(je,Gn),pe=Math.min(pe,ll),Qe=Math.max(Qe,Gn+ar),$e=Math.max($e,ll+sl)}const fn=L_({x:je,y:pe,width:Qe-je,height:$e-pe},g,O,i),qt=re+fn.dx,rn=Ge+fn.dy;ze=qt,Ke=rn,G(fn.guides);for(const[,{outlineEl:hn}]of ae)hn&&(hn.style.transform=`translate(${qt}px, ${rn}px)`);const Bn=new Map;for(const[hn,{curW:ar,curH:sl}]of ae){const mt=we.get(hn);if(mt){const Gn={x:Math.max(0,mt.x+qt),y:Math.max(0,mt.y+rn),width:ar,height:sl};Bn.set(hn,Gn)}}zt(Bn),_n.current?.(qt,rn)},Oe=Le=>{window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",Oe),wt.current=null,G([]),zt(new Map);for(const[,{outlineEl:re}]of ae)re&&(re.style.transform="");if(be){const re=Le.clientX-K,Ge=Le.clientY-F;if(Math.abs(re)<5&&Math.abs(Ge)<5)t({...e,sections:g.map(je=>{const pe=we.get(je.id);return pe?{...je,currentRect:{...je.currentRect,x:pe.x,y:pe.y}}:je})});else{t({...e,sections:g.map(je=>{const pe=we.get(je.id);return pe?{...je,currentRect:{...je.currentRect,x:Math.max(0,pe.x+ze),y:Math.max(0,pe.y+Ke)}}:je})}),Sn.current?.(ze,Ke,!0);return}}Sn.current?.(0,0,!1)};window.addEventListener("mousemove",We),window.addEventListener("mouseup",Oe)},[k,g,e,t]),ie=f.useCallback((C,E,B)=>{C.preventDefault(),C.stopPropagation();const O=g.find(We=>We.id===E);if(!O)return;j(new Set([E])),wt.current="resize";const se=C.clientX,K=C.clientY,F={...O.currentRect};O.originalRect;const we=F.width/F.height;let be={...F};const ze=document.querySelector(`[data-rearrange-section="${E}"]`),Ke=We=>{const Oe=We.clientX-se,Le=We.clientY-K;let re=F.x,Ge=F.y,je=F.width,pe=F.height;if(B.includes("e")&&(je=Math.max(Al,F.width+Oe)),B.includes("w")&&(je=Math.max(Al,F.width-Oe),re=F.x+F.width-je),B.includes("s")&&(pe=Math.max(Al,F.height+Le)),B.includes("n")&&(pe=Math.max(Al,F.height-Le),Ge=F.y+F.height-pe),We.shiftKey)if(B.length===2){const $e=Math.abs(je-F.width),fn=Math.abs(pe-F.height);$e>fn?pe=je/we:je=pe*we,B.includes("w")&&(re=F.x+F.width-je),B.includes("n")&&(Ge=F.y+F.height-pe)}else B==="e"||B==="w"?pe=je/we:je=pe*we,B==="w"&&(re=F.x+F.width-je),B==="n"&&(Ge=F.y+F.height-pe);be={x:re,y:Ge,width:je,height:pe},ze&&(ze.style.left=`${re}px`,ze.style.top=`${Ge-Se}px`,ze.style.width=`${je}px`,ze.style.height=`${pe}px`),I({x:We.clientX+12,y:We.clientY+12,text:`${Math.round(je)} × ${Math.round(pe)}`}),zt(new Map([[E,be]]))},ae=()=>{window.removeEventListener("mousemove",Ke),window.removeEventListener("mouseup",ae),I(null),wt.current=null,zt(new Map),t({...e,sections:g.map(We=>We.id===E?{...We,currentRect:be}:We)})};window.addEventListener("mousemove",Ke),window.addEventListener("mouseup",ae)},[g,e,t,Se]),Me=f.useCallback(C=>{Ae(E=>{const B=new Set(E);return B.add(C),B}),j(E=>{const B=new Set(E);return B.delete(C),B}),fe(()=>{const E=$.current;t({...E,sections:E.sections.filter(B=>B.id!==C),originalOrder:E.originalOrder.filter(B=>B!==C)}),Ae(B=>{const O=new Set(B);return O.delete(C),O})},180)},[t]),ge=C=>{const E=C.originalRect,B=C.currentRect;return Math.abs(E.x-B.x)>1||Math.abs(E.y-B.y)>1||Math.abs(E.width-B.width)>1||Math.abs(E.height-B.height)>1},Ce=C=>{const E=C.originalRect,B=C.currentRect;return Math.abs(E.x-B.x)>1||Math.abs(E.y-B.y)>1},Ye=C=>{const E=C.originalRect,B=C.currentRect;return Math.abs(E.width-B.width)>1||Math.abs(E.height-B.height)>1};for(const C of g)Dt.current.has(C.id)||(Ce(C)?Dt.current.set(C.id,"move"):Ye(C)&&Dt.current.set(C.id,"resize"));for(const C of Dt.current.keys())g.some(E=>E.id===C)||Dt.current.delete(C);const He=g.filter(C=>{try{if(Be.has(C.id)||k.has(C.id))return!0;const E=document.querySelector(C.selector);if(!E)return!1;const B=E.getBoundingClientRect(),O=C.originalRect;return Math.abs(B.width-O.width)+Math.abs(B.height-O.height)<200}catch{return!1}}),Ie=He.filter(C=>ge(C)),Xe=He.filter(C=>!ge(C)),at=new Set(Ie.map(C=>C.id));for(const C of Pt.current)at.has(C)||Pt.current.delete(C);const ue=[...at].sort().join(",");for(const C of Ie)on.current.set(C.id,{currentRect:C.currentRect,originalRect:C.originalRect,isFixed:C.isFixed});return f.useEffect(()=>{const C=co.current;co.current=at;const E=new Map;for(const B of C)if(!at.has(B)){if(!g.some(se=>se.id===B))continue;const O=on.current.get(B);O&&(E.set(B,{orig:O.originalRect,target:O.currentRect,isFixed:O.isFixed}),on.current.delete(B))}if(E.size>0){ao(O=>{const se=new Map(O);for(const[K,F]of E)se.set(K,F);return se});const B=fe(()=>{ao(O=>{const se=new Map(O);for(const K of E.keys())se.delete(K);return se})},250);return()=>clearTimeout(B)}},[ue,g]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${R.rearrangeOverlay} ${n?"":R.light} ${o?R.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[Ne&&s.jsx("div",{className:R.hoverHighlight,style:{left:Ne.x,top:Ne.y,width:Ne.w,height:Ne.h}}),Xe.map(C=>{const E=C.currentRect,B=C.isFixed?E.y:E.y-Se,O=I_,se=k.has(C.id);return s.jsxs("div",{"data-rearrange-section":C.id,className:`${R.sectionOutline} ${se?R.selected:""} ${M||o||Be.has(C.id)?R.exiting:""}`,style:{left:E.x,top:B,width:E.width,height:E.height,borderColor:O.border,backgroundColor:O.bg,...uo?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:K=>T(K,C.id),onDoubleClick:()=>he(C.id),children:[s.jsx("span",{className:R.sectionLabel,style:{backgroundColor:O.pill},children:C.label}),s.jsx("span",{className:`${R.sectionAnnotation} ${C.note?R.annotationVisible:""}`,children:(C.note&&ke.current.set(C.id,C.note),C.note||ke.current.get(C.id)||"")}),s.jsxs("span",{className:R.sectionDimensions,children:[Math.round(E.width)," × ",Math.round(E.height)]}),s.jsx("div",{className:R.deleteButton,onMouseDown:K=>K.stopPropagation(),onClick:()=>Me(C.id),children:"✕"}),$_.map(K=>s.jsx("div",{className:`${R.handle} ${R[`handle${K.charAt(0).toUpperCase()}${K.slice(1)}`]}`,onMouseDown:F=>ie(F,C.id,K)},K))]},C.id)}),Ie.map(C=>{const E=C.currentRect,B=C.isFixed?E.y:E.y-Se,O=k.has(C.id),se=Ce(C),K=Ye(C);if(l&&!O)return null;const we=!Pt.current.has(C.id);return we&&Pt.current.add(C.id),s.jsxs("div",{"data-rearrange-section":C.id,className:`${R.ghostOutline} ${O?R.selected:""} ${M||o||Be.has(C.id)?R.exiting:""}`,style:{left:E.x,top:B,width:E.width,height:E.height,...uo?{}:{opacity:0,animation:"none",transition:"none"},...we?{}:{animation:"none"}},onMouseDown:be=>T(be,C.id),onDoubleClick:()=>he(C.id),children:[s.jsx("span",{className:R.sectionLabel,style:{backgroundColor:I_.pill},children:C.label}),s.jsx("span",{className:`${R.sectionAnnotation} ${C.note?R.annotationVisible:""}`,children:(C.note&&ke.current.set(C.id,C.note),C.note||ke.current.get(C.id)||"")}),s.jsxs("span",{className:R.sectionDimensions,children:[Math.round(E.width)," × ",Math.round(E.height)]}),s.jsx("div",{className:R.deleteButton,onMouseDown:be=>be.stopPropagation(),onClick:()=>Me(C.id),children:"✕"}),$_.map(be=>s.jsx("div",{className:`${R.handle} ${R[`handle${be.charAt(0).toUpperCase()}${be.slice(1)}`]}`,onMouseDown:ze=>ie(ze,C.id,be)},be)),s.jsx("span",{className:R.ghostBadge,children:(()=>{const be=Dt.current.get(C.id);if(se&&K){const[ze,Ke]=be==="resize"?["Resize","Move"]:["Move","Resize"];return s.jsxs(s.Fragment,{children:["Suggested ",ze," ",s.jsxs("span",{className:R.ghostBadgeExtra,children:["& ",Ke]})]})}return`Suggested ${K?"Resize":"Move"}`})()})]},C.id)})]}),!l&&(()=>{const C=[];for(const E of Ie){const B=Bt.get(E.id);C.push({id:E.id,orig:E.originalRect,target:B||E.currentRect,isFixed:E.isFixed,isSelected:k.has(E.id),isExiting:Be.has(E.id)})}for(const[E,B]of Bt)if(!C.some(O=>O.id===E)){const O=g.find(se=>se.id===E);O&&C.push({id:E,orig:O.originalRect,target:B,isFixed:O.isFixed,isSelected:k.has(E)})}for(const[E,B]of Vn)C.some(O=>O.id===E)||C.push({id:E,orig:B.orig,target:B.target,isFixed:B.isFixed,isSelected:!1,isExiting:!0});return C.length===0?null:s.jsxs("svg",{className:`${R.connectorSvg} ${M||o?R.connectorExiting:""}`,children:[C.map(({id:E,orig:B,target:O,isFixed:se,isSelected:K,isExiting:F})=>{const we=B.x+B.width/2,be=(se?B.y:B.y-Se)+B.height/2,ze=O.x+O.width/2,Ke=(se?O.y:O.y-Se)+O.height/2,ae=ze-we,We=Ke-be,Oe=Math.sqrt(ae*ae+We*We);if(Oe<2)return null;const Le=Math.min(1,Oe/40),re=Math.min(Oe*.3,60),Ge=Oe>0?-We/Oe:0,je=Oe>0?ae/Oe:0,pe=(we+ze)/2+Ge*re,Qe=(be+Ke)/2+je*re,$e=Bt.has(E),fn=$e||K?1:.4,qt=$e||K?1:.5;return s.jsxs("g",{className:F?R.connectorExiting:"",children:[s.jsx("path",{className:R.connectorLine,d:`M ${we} ${be} Q ${pe} ${Qe} ${ze} ${Ke}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:fn*Le}),s.jsx("circle",{className:R.connectorDot,cx:we,cy:be,r:4*Le,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:qt*Le,filter:"url(#connDotShadow)"}),s.jsx("circle",{className:R.connectorDot,cx:ze,cy:Ke,r:4*Le,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:qt*Le,filter:"url(#connDotShadow)"})]},`conn-${E}`)}),s.jsx("defs",{children:s.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:s.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),N&&(()=>{const C=g.find(Ke=>Ke.id===N);if(!C)return null;const E=C.currentRect,B=C.isFixed?E.y:E.y-Se,O=E.x+E.width/2,se=B-8,K=B+E.height+8,F=se>200,we=K<window.innerHeight-100,be=Math.max(160,Math.min(window.innerWidth-160,O));let ze;return F?ze={left:be,bottom:window.innerHeight-se}:we?ze={left:be,top:K}:ze={left:be,top:Math.max(80,window.innerHeight/2-80)},s.jsx(Ei,{element:C.label,placeholder:"Add a note about this section",initialValue:C.note??"",submitLabel:Q.current?"Save":"Set",onSubmit:de,onCancel:q,onDelete:Q.current?()=>{de("")}:void 0,isExiting:Y,lightMode:!n,style:ze})})(),lt&&s.jsx("div",{className:R.sizeIndicator,style:{left:lt.x,top:lt.y},"data-feedback-toolbar":!0,children:lt.text}),U.map((C,E)=>s.jsx("div",{className:R.guideLine,style:C.axis==="x"?{position:"fixed",left:C.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:C.pos-Se,width:"100vw",height:1}},`${C.axis}-${C.pos}-${E}`))]})}var Wc=new Set(["script","style","noscript","link","meta","br","hr"]);function R1(){const e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),o=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(const r of o){if(!(r instanceof HTMLElement)||Wc.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;const l=window.getComputedStyle(r);if(l.display==="none"||l.visibility==="hidden")continue;const i=r.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:Ii(r),selector:sr(r),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(const a of Array.from(r.children)){if(!(a instanceof HTMLElement)||Wc.has(a.tagName.toLowerCase())||a.hasAttribute("data-feedback-toolbar"))continue;const c=window.getComputedStyle(a);if(c.display==="none"||c.visibility==="hidden")continue;const d=a.getBoundingClientRect();d.height<10||d.width<10||t.push({label:Ii(a),selector:sr(a),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height})}}}return t}function T1(e){const t=window.scrollY;return e.map(({label:n,selector:o,rect:r})=>{const l=r.y-t;return{label:n,selector:o,top:l,bottom:l+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function P1(e){const t=window.scrollY,n=e.y-t,o=e.x;return{top:n,bottom:n+e.height,left:o,right:o+e.width,area:e.width*e.height}}function Fc(e,t){const n=t?T1(t):R1(),o=P1(e);let r=null,l=null,i=null,a=null,c=null;for(const k of n){if(Math.abs(k.left-o.left)<2&&Math.abs(k.top-o.top)<2&&Math.abs(k.right-k.left-e.width)<2&&Math.abs(k.bottom-k.top-e.height)<2)continue;k.left<=o.left+2&&k.right>=o.right-2&&k.top<=o.top+2&&k.bottom>=o.bottom-2&&k.area>o.area*1.5&&(!c||k.area<c._area)&&(c={label:k.label,selector:k.selector,_area:k.area});const j=o.right>k.left+5&&o.left<k.right-5,M=o.bottom>k.top+5&&o.top<k.bottom-5;if(j&&k.bottom<=o.top+5){const h=Math.round(o.top-k.bottom);(!r||h<r._dist)&&(r={label:k.label,selector:k.selector,gap:Math.max(0,h),_dist:h})}if(j&&k.top>=o.bottom-5){const h=Math.round(k.top-o.bottom);(!l||h<l._dist)&&(l={label:k.label,selector:k.selector,gap:Math.max(0,h),_dist:h})}if(M&&k.right<=o.left+5){const h=Math.round(o.left-k.right);(!i||h<i._dist)&&(i={label:k.label,selector:k.selector,gap:Math.max(0,h),_dist:h})}if(M&&k.left>=o.right-5){const h=Math.round(k.left-o.right);(!a||h<a._dist)&&(a={label:k.label,selector:k.selector,gap:Math.max(0,h),_dist:h})}}const d=window.innerWidth,p=window.innerHeight,x=B1(e,d),g=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,$=D1(o,e,d,p,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:g(r),below:g(l),left:g(i),right:g(a),alignment:x,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:$}}function D1(e,t,n,o,r,l){const i={};let a=!1;const c=[];if(e.left<-2&&c.push("left"),e.right>n+2&&c.push("right"),e.top<-2&&c.push("top"),e.bottom>o+2&&c.push("bottom"),c.length>0&&(i.viewport=c,a=!0),r){const d=l.find(p=>p.label===r.label&&p.selector===r.selector&&Math.abs(p.area-r._area)<10);if(d){const p=[];e.left<d.left-2&&p.push("left"),e.right>d.right+2&&p.push("right"),e.top<d.top-2&&p.push("top"),e.bottom>d.bottom+2&&p.push("bottom"),p.length>0&&(i.container={label:r.label,edges:p},a=!0)}}return a?i:null}function B1(e,t){if(e.width/t>.85)return"full-width";const o=e.x+e.width/2,r=t/2,l=o-r,i=t*.08;return Math.abs(l)<i?"center":l<0?"left":"right"}function mp(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function gp(e,t={}){const n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));const o=mp(e.alignment);return e.containedIn?n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in \`${e.containedIn.label}\``):n.push(`${o.charAt(0).toUpperCase()+o.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function z1(e,t,n){const o=[];e.above&&o.push(`below \`${e.above.label}\``),e.below&&o.push(`above \`${e.below.label}\``),e.left&&o.push(`right of \`${e.left.label}\``),e.right&&o.push(`left of \`${e.right.label}\``),e.containedIn&&o.push(`inside \`${e.containedIn.label}\``),o.push(mp(e.alignment)),e.outOfBounds?.viewport&&o.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&o.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);const r=n?`, ${Math.round(n.width)}×${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${r}: ${o.join(", ")}`}var T_=15;function P_(e){if(e.length<2)return[];const t=[],n=new Set;for(let o=0;o<e.length;o++){if(n.has(o))continue;const r=[o];for(let l=o+1;l<e.length;l++)n.has(l)||Math.abs(e[o].rect.y-e[l].rect.y)<T_&&r.push(l);if(r.length>=2){const l=r.map(c=>e[c]);l.sort((c,d)=>c.rect.x-d.rect.x);const i=[];for(let c=0;c<l.length-1;c++)i.push(Math.round(l[c+1].rect.x-(l[c].rect.x+l[c].rect.width)));const a=Math.round(l.reduce((c,d)=>c+d.rect.y,0)/l.length);t.push({labels:l.map(c=>c.label),type:"row",sharedEdge:a,gaps:i,avgGap:i.length?Math.round(i.reduce((c,d)=>c+d,0)/i.length):0}),r.forEach(c=>n.add(c))}}for(let o=0;o<e.length;o++){if(n.has(o))continue;const r=[o];for(let l=o+1;l<e.length;l++)n.has(l)||Math.abs(e[o].rect.x-e[l].rect.x)<T_&&r.push(l);if(r.length>=2){const l=r.map(c=>e[c]);l.sort((c,d)=>c.rect.y-d.rect.y);const i=[];for(let c=0;c<l.length-1;c++)i.push(Math.round(l[c+1].rect.y-(l[c].rect.y+l[c].rect.height)));const a=Math.round(l.reduce((c,d)=>c+d.rect.x,0)/l.length);t.push({labels:l.map(c=>c.label),type:"column",sharedEdge:a,gaps:i,avgGap:i.length?Math.round(i.reduce((c,d)=>c+d,0)/i.length):0}),r.forEach(c=>n.add(c))}}return t}function O1(e){if(e.length<2)return[];const t=P_(e.map(i=>({label:i.label,rect:i.originalRect}))),n=P_(e.map(i=>({label:i.label,rect:i.currentRect}))),o=[],r=new Set;for(const i of t){const a=new Set(i.labels);let c=null,d=0;for(const p of n){const x=p.labels.filter(g=>a.has(g)).length;x>=2&&x>d&&(c=p,d=x)}if(c){const p=c.labels.filter(g=>a.has(g)),x=p.join(", ");if(c.type!==i.type){const g=i.type==="row"?"y":"x",$=c.type==="row"?"y":"x";o.push(`**${x}**: ${i.type} (${g}≈${i.sharedEdge}, ${i.avgGap}px gaps) → ${c.type} (${$}≈${c.sharedEdge}, ${c.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-c.sharedEdge)>20||Math.abs(i.avgGap-c.avgGap)>5){const g=i.type==="row"?"y":"x",$=Math.abs(i.sharedEdge-c.sharedEdge)>20?` ${g}: ${i.sharedEdge} → ${c.sharedEdge}`:"",k=Math.abs(i.avgGap-c.avgGap)>5?` gaps: ${i.avgGap}px → ${c.avgGap}px`:"";o.push(`**${x}**: ${i.type} shifted —${$}${k}`)}p.forEach(g=>r.add(g))}else{const p=i.labels.join(", "),x=i.type==="row"?"y":"x";o.push(`**${p}**: ${i.type} (${x}≈${i.sharedEdge}) dissolved`),i.labels.forEach(g=>r.add(g))}}for(const i of n){if(i.labels.every(d=>r.has(d))||i.labels.filter(d=>!r.has(d)).length<2)continue;if(!t.some(d=>d.labels.filter(x=>i.labels.includes(x)).length>=2)){const d=i.type==="row"?"y":"x";o.push(`**${i.labels.join(", ")}**: new ${i.type} (${d}≈${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach(p=>r.add(p))}}const l=e.filter(i=>!r.has(i.label));if(l.length>=2){const i={};for(const a of l){const c=Math.round(a.currentRect.x/5)*5;(i[c]??(i[c]=[])).push(a.label)}for(const[a,c]of Object.entries(i))c.length>=2&&o.push(`**${c.join(", ")}**: shared left edge at x≈${a}`)}return o}function yp(e){if(typeof document>"u")return{viewport:e,contentArea:null};const t=[],n=new Set,o=a=>{n.has(a)||a instanceof HTMLElement&&(a.hasAttribute("data-feedback-toolbar")||Wc.has(a.tagName.toLowerCase())||(n.add(a),t.push(a)))},r=document.querySelector("main");r&&o(r);const l=document.querySelector("[role='main']");l&&o(l);for(const a of Array.from(document.body.children))if(o(a),a.children){for(const c of Array.from(a.children))if(o(c),c.children)for(const d of Array.from(c.children))o(d)}let i=null;for(const a of t){const c=a.getBoundingClientRect();if(c.height<50)continue;const d=getComputedStyle(a);if(d.maxWidth&&d.maxWidth!=="none"&&d.maxWidth!=="0px"){(!i||c.width<i.rect.width)&&(i={el:a,rect:c});continue}!i&&c.width<e.width-20&&c.width>100&&(i={el:a,rect:c})}if(i){const{el:a,rect:c}=i;return{viewport:e,contentArea:{width:Math.round(c.width),left:Math.round(c.left),right:Math.round(c.right),centerX:Math.round(c.left+c.width/2),selector:sr(a)}}}return{viewport:e,contentArea:null}}function A1(e){if(typeof document>"u")return null;const t=document.querySelector(e);if(!t?.parentElement)return null;const n=getComputedStyle(t.parentElement),o={parentDisplay:n.display,parentSelector:sr(t.parentElement)};return n.display.includes("flex")&&(o.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(o.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(o.gap=n.gap),o}function xp(e,t){const n=t.contentArea,o=n?n.width:t.viewport.width,r=n?n.left:0,l=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-r),a=Math.round(r+o-(e.x+e.width)),c=(e.width/o*100).toFixed(1),d=e.x+e.width/2,p=Math.abs(d-l)<20,x=e.width/o>.95,g=[];return x?g.push("`width: 100%` of container"):g.push(`left \`${i}px\` in container, right \`${a}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),p&&!x&&g.push("centered — `margin-inline: auto`"),g.join(" — ")}function vp(e){const{viewport:t,contentArea:n}=e;let o=`### Reference Frame
`;if(o+=`- Viewport: \`${t.width}×${t.height}px\`
`,n){const r=n;o+=`- Content area: \`${r.width}px\` wide, left edge at \`x=${r.left}\`, right at \`x=${r.right}\` (\`${r.selector}\`)
`,o+=`- Pixel → CSS translation:
`,o+=`  - **Horizontal position in container**: \`element.x - ${r.left}\` → use as \`margin-left\` or \`left\`
`,o+=`  - **Width as % of container**: \`element.width / ${r.width} × 100\` → use as \`width: X%\`
`,o+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",o+=`  - **Centered**: if \`|element.centerX - ${r.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else o+=`- No distinct content container — elements positioned relative to full viewport
`,o+=`- Pixel → CSS translation:
`,o+=`  - **Width as % of viewport**: \`element.width / ${t.width} × 100\` → use as \`width: X%\`
`,o+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return o+=`
`,o}function W1(e){const t=A1(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function D_(e,t,n,o="standard"){if(e.length===0)return"";const r=[...e].sort((M,h)=>Math.abs(M.y-h.y)<20?M.x-h.x:M.y-h.y);let l="";if(n?.blankCanvas?(l+=`## Wireframe: New Page

`,n.wireframePurpose&&(l+=`> **Purpose:** ${n.wireframePurpose}
>
`),l+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):l+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,o==="compact")return l+=`### Components
`,r.forEach((M,h)=>{const y=Nn[M.type]?.label||M.type;l+=`${h+1}. **${y}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}),l;const i=yp(t);l+=vp(i),l+=`### Components
`,r.forEach((M,h)=>{const y=Nn[M.type]?.label||M.type,b={x:M.x,y:M.y,width:M.width,height:M.height};l+=`${h+1}. **${y}** — \`${Math.round(M.width)}×${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`;const N=Fc(b),Y=gp(N,{includeLeftRight:o==="detailed"||o==="forensic"});for(const Q of Y)l+=`   - ${Q}
`;const D=xp(b,i);D&&(l+=`   - CSS: ${D}
`)}),l+=`
### Layout Analysis
`;const a=[];for(const M of r){const h=a.find(y=>Math.abs(y.y-M.y)<30);h?h.items.push(M):a.push({y:M.y,items:[M]})}if(a.sort((M,h)=>M.y-h.y),a.forEach((M,h)=>{M.items.sort((b,N)=>b.x-N.x);const y=M.items.map(b=>Nn[b.type]?.label||b.type);if(M.items.length===1){const N=M.items[0].width>t.width*.8;l+=`- Row ${h+1} (y≈${Math.round(M.y)}): ${y[0]}${N?" — full width":""}
`}else l+=`- Row ${h+1} (y≈${Math.round(M.y)}): ${y.join(" | ")} — ${M.items.length} items side by side
`}),o==="detailed"||o==="forensic"){l+=`
### Spacing & Gaps
`;for(let M=0;M<r.length-1;M++){const h=r[M],y=r[M+1],b=Nn[h.type]?.label||h.type,N=Nn[y.type]?.label||y.type,W=Math.round(y.y-(h.y+h.height)),Y=Math.round(y.x-(h.x+h.width));Math.abs(h.y-y.y)<30?l+=`- ${b} → ${N}: \`${Y}px\` horizontal gap
`:l+=`- ${b} → ${N}: \`${W}px\` vertical gap
`}if(o==="forensic"&&r.length>2){l+=`
### All Pairwise Gaps
`;for(let M=0;M<r.length;M++)for(let h=M+1;h<r.length;h++){const y=r[M],b=r[h],N=Nn[y.type]?.label||y.type,W=Nn[b.type]?.label||b.type,Y=Math.round(b.y-(y.y+y.height)),D=Math.round(b.x-(y.x+y.width));l+=`- ${N} ↔ ${W}: h=\`${D}px\` v=\`${Y}px\`
`}}o==="forensic"&&(l+=`
### Z-Order (placement order)
`,e.forEach((M,h)=>{const y=Nn[M.type]?.label||M.type;l+=`${h}. ${y} at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}))}l+=`
### Suggested Implementation
`;const c=r.some(M=>M.type==="navigation"),d=r.some(M=>M.type==="hero"),p=r.some(M=>M.type==="sidebar"),x=r.some(M=>M.type==="footer"),g=r.filter(M=>M.type==="card"),$=r.filter(M=>M.type==="form"),k=r.filter(M=>M.type==="table"),j=r.filter(M=>M.type==="modal");if(c&&(l+=`- Top navigation bar with logo + nav links + CTA
`),d&&(l+=`- Hero section with heading, subtext, and call-to-action
`),p&&(l+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),g.length>1?l+=`- ${g.length}-column card grid — use CSS Grid or Flexbox
`:g.length===1&&(l+=`- Card component with image + content area
`),$.length>0&&(l+=`- ${$.length} form${$.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(l+=`- Data table — consider sortable columns and pagination
`),j.length>0&&(l+=`- Modal dialog — add overlay backdrop and focus trapping
`),x&&(l+=`- Multi-column footer with links
`),o==="detailed"||o==="forensic"){if(l+=`
### CSS Suggestions
`,p){const M=r.find(h=>h.type==="sidebar");l+=`- \`display: grid; grid-template-columns: ${Math.round(M.width)}px 1fr;\`
`}if(g.length>1){const M=Math.round(g[0].width);l+=`- \`display: grid; grid-template-columns: repeat(${g.length}, ${M}px); gap: 16px;\`
`}c&&(l+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return l}function B_(e,t="standard",n){const{sections:o}=e,r=[];for(const p of o){const x=p.originalRect,g=p.currentRect,$=Math.abs(x.x-g.x)>1||Math.abs(x.y-g.y)>1,k=Math.abs(x.width-g.width)>1||Math.abs(x.height-g.height)>1;if(!$&&!k){t==="forensic"&&r.push({section:p,posMoved:!1,sizeChanged:!1});continue}r.push({section:p,posMoved:$,sizeChanged:k})}if(r.length===0||t!=="forensic"&&r.every(p=>!p.posMoved&&!p.sizeChanged))return"";let l=`## Suggested Layout Changes

`;const i=n?n.width:typeof window<"u"?window.innerWidth:0,a=n?n.height:typeof window<"u"?window.innerHeight:0,c=yp({width:i,height:a});t!=="compact"&&(l+=vp(c)),t==="forensic"&&(l+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,l+=`> Total sections: ${o.length}

`);const d=p=>o.map(x=>({label:x.label,selector:x.selector,rect:p==="original"?x.originalRect:x.currentRect}));l+=`**Changes:**
`;for(const{section:p,posMoved:x,sizeChanged:g}of r){const $=p.originalRect,k=p.currentRect;if(!x&&!g){l+=`- ${p.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(t==="compact"){x&&g?l+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:x?l+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:l+=`- Suggested: resize **${p.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(x&&g?l+=`- Suggested: move and resize **${p.label}**
`:x?l+=`- Suggested: move **${p.label}**
`:l+=`- Suggested: resize **${p.label}** from ${Math.round($.width)}×${Math.round($.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,x){const M=Fc($,d("original")),h=Fc(k,d("current")),y=g?{width:$.width,height:$.height}:void 0;l+=`  - Currently ${z1(M,{x:$.x,y:$.y},y)}
`;const b=g?{width:k.width,height:k.height}:void 0,N=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,W=b?`, ${Math.round(b.width)}×${Math.round(b.height)}px`:"",D=gp(h,{includeLeftRight:t==="detailed"||t==="forensic"});if(D.length>0){l+=`  - Suggested position ${N}${W}: ${D[0]}
`;for(let he=1;he<D.length;he++)l+=`    ${D[he]}
`}else l+=`  - Suggested position ${N}${W}
`;const Q=xp(k,c);Q&&(l+=`  - CSS: ${Q}
`)}const j=W1(p.selector);if(j&&(l+=`  - ${j}
`),l+=`  - Selector: \`${p.selector}\`
`,t==="detailed"||t==="forensic"){const M=p.className?`${p.tagName}.${p.className.split(" ")[0]}`:p.tagName;M!==p.selector&&(l+=`  - Element: \`${M}\`
`),p.role&&(l+=`  - Role: \`${p.role}\`
`),t==="forensic"&&p.textSnippet&&(l+=`  - Text: "${p.textSnippet}"
`)}t==="forensic"&&(l+=`  - Original rect: \`{ x: ${Math.round($.x)}, y: ${Math.round($.y)}, w: ${Math.round($.width)}, h: ${Math.round($.height)} }\`
`,l+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(t!=="compact"){const p=r.filter(g=>g.posMoved).map(g=>({label:g.section.label,originalRect:g.section.originalRect,currentRect:g.section.currentRect})),x=O1(p);if(x.length>0){l+=`
### Layout Summary
`;for(const g of x)l+=`- ${g}
`}}if(t!=="compact"&&o.length>1){l+=`
### All Sections (current positions)
`;const p=[...o].sort((x,g)=>Math.abs(x.currentRect.y-g.currentRect.y)<20?x.currentRect.x-g.currentRect.x:x.currentRect.y-g.currentRect.y);for(const x of p){const g=x.currentRect,$=Math.abs(g.x-x.originalRect.x)>1||Math.abs(g.y-x.originalRect.y)>1||Math.abs(g.width-x.originalRect.width)>1||Math.abs(g.height-x.originalRect.height)>1;l+=`- ${x.label}: \`${Math.round(g.width)}×${Math.round(g.height)}px\` at \`(${Math.round(g.x)}, ${Math.round(g.y)})\`${$?" ← suggested":""}
`}}return l}var Hc="feedback-annotations-",wp=7;function $i(e){return`${Hc}${e}`}function za(e){if(typeof window>"u")return[];try{const t=localStorage.getItem($i(e));if(!t)return[];const n=JSON.parse(t),o=Date.now()-wp*24*60*60*1e3;return n.filter(r=>!r.timestamp||r.timestamp>o)}catch{return[]}}function bp(e,t){if(!(typeof window>"u"))try{localStorage.setItem($i(e),JSON.stringify(t))}catch{}}function F1(){const e=new Map;if(typeof window>"u")return e;try{const t=Date.now()-wp*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){const o=localStorage.key(n);if(o?.startsWith(Hc)){const r=o.slice(Hc.length),l=localStorage.getItem(o);if(l){const a=JSON.parse(l).filter(c=>!c.timestamp||c.timestamp>t);a.length>0&&e.set(r,a)}}}}catch{}return e}function ys(e,t,n){const o=t.map(r=>({...r,_syncedTo:n}));bp(e,o)}var Au="agentation-design-";function H1(e){if(typeof window>"u")return[];try{const t=localStorage.getItem(`${Au}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function U1(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Au}${e}`,JSON.stringify(t))}catch{}}function Y1(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Au}${e}`)}catch{}}var Wu="agentation-rearrange-";function X1(e){if(typeof window>"u")return null;try{const t=localStorage.getItem(`${Wu}${e}`);return t?JSON.parse(t):null}catch{return null}}function Q1(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Wu}${e}`,JSON.stringify(t))}catch{}}function V1(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Wu}${e}`)}catch{}}var Fu="agentation-wireframe-";function K1(e){if(typeof window>"u")return null;try{const t=localStorage.getItem(`${Fu}${e}`);return t?JSON.parse(t):null}catch{return null}}function z_(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Fu}${e}`,JSON.stringify(t))}catch{}}function Fl(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Fu}${e}`)}catch{}}var kp="agentation-session-";function Hu(e){return`${kp}${e}`}function G1(e){if(typeof window>"u")return null;try{return localStorage.getItem(Hu(e))}catch{return null}}function Oa(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Hu(e),t)}catch{}}function q1(e){if(!(typeof window>"u"))try{localStorage.removeItem(Hu(e))}catch{}}var Sp=`${kp}toolbar-hidden`;function J1(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Sp)==="1"}catch{return!1}}function Z1(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(Sp,"1")}catch{}}async function Aa(e,t){const n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function O_(e,t){const n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function yr(e,t,n){const o=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to sync annotation: ${o.status}`);return o.json()}async function A_(e,t,n){const o=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`Failed to update annotation: ${o.status}`);return o.json()}async function mo(e,t){const n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var Ve={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},W_=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),F_=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],ex=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function tx(e){const t=e?.mode??"filtered";let n=W_;if(e?.skipExact){const o=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...W_,...o])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...F_,...e.skipPatterns]:F_,userPatterns:e?.userPatterns??ex,filter:e?.filter}}function nx(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function ox(e,t=10){const n=new Set;let o=e,r=0;for(;o&&r<t;)o.className&&typeof o.className=="string"&&o.className.split(/\s+/).forEach(l=>{if(l.length>1){const i=l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),o=o.parentElement,r++;return n}function rx(e,t){const n=nx(e);for(const o of t){if(o===n)return!0;const r=n.split("-").filter(i=>i.length>2),l=o.split("-").filter(i=>i.length>2);for(const i of r)for(const a of l)if(i===a||i.includes(a)||a.includes(i))return!0}return!1}function sx(e,t,n,o){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(r=>r.test(e))?!1:!!(o&&rx(e,o)||n.userPatterns.some(r=>r.test(e)));default:return!0}}var xr=null,lx=new WeakMap;function Wa(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function ix(){if(xr!==null)return xr;if(typeof document>"u")return!1;if(document.body&&Wa(document.body))return xr=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const t of e){const n=document.querySelector(t);if(n&&Wa(n))return xr=!0,!0}if(document.body){for(const t of document.body.children)if(Wa(t))return xr=!0,!0}return xr=!1,!1}var xs={map:lx};function ax(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function cx(e){const t=ax(e);return t?e[t]:null}function Ho(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function ux(e){const{tag:t,type:n,elementType:o}=e;if(t===Ve.HostComponent||t===Ve.HostText||t===Ve.HostHoistable||t===Ve.HostSingleton||t===Ve.Fragment||t===Ve.Mode||t===Ve.Profiler||t===Ve.DehydratedFragment||t===Ve.HostRoot||t===Ve.HostPortal||t===Ve.ScopeComponent||t===Ve.OffscreenComponent||t===Ve.LegacyHiddenComponent||t===Ve.CacheComponent||t===Ve.TracingMarkerComponent||t===Ve.Throw||t===Ve.ViewTransitionComponent||t===Ve.ActivityComponent)return null;if(t===Ve.ForwardRef){const r=o;if(r?.render){const l=Ho(r.render);if(l)return l}return r?.displayName?r.displayName:Ho(n)}if(t===Ve.MemoComponent||t===Ve.SimpleMemoComponent){const r=o;if(r?.type){const l=Ho(r.type);if(l)return l}return r?.displayName?r.displayName:Ho(n)}if(t===Ve.ContextProvider){const r=n;return r?._context?.displayName?`${r._context.displayName}.Provider`:null}if(t===Ve.ContextConsumer){const r=n;return r?.displayName?`${r.displayName}.Consumer`:null}if(t===Ve.LazyComponent){const r=o;return r?._status===1&&r._result?Ho(r._result):null}return t===Ve.SuspenseComponent||t===Ve.SuspenseListComponent?null:t===Ve.IncompleteClassComponent||t===Ve.IncompleteFunctionComponent||t===Ve.FunctionComponent||t===Ve.ClassComponent||t===Ve.IndeterminateComponent?Ho(n):null}function dx(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function _x(e,t){const n=tx(t),o=n.mode==="all";if(o){const c=xs.map.get(e);if(c!==void 0)return c}if(!ix()){const c={path:null,components:[]};return o&&xs.map.set(e,c),c}const r=n.mode==="smart"?ox(e):void 0,l=[];try{let c=cx(e),d=0;for(;c&&d<n.maxDepth&&l.length<n.maxComponents;){const p=ux(c);p&&!dx(p)&&sx(p,d,n,r)&&l.push(p),c=c.return,d++}}catch{const c={path:null,components:[]};return o&&xs.map.set(e,c),c}if(l.length===0){const c={path:null,components:[]};return o&&xs.map.set(e,c),c}const a={path:l.slice().reverse().map(c=>`<${c}>`).join(" "),components:l};return o&&xs.map.set(e,a),a}var vs={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function fx(e){if(!e||typeof e!="object")return null;const t=Object.keys(e),n=t.find(l=>l.startsWith("__reactFiber$"));if(n)return e[n]||null;const o=t.find(l=>l.startsWith("__reactInternalInstance$"));if(o)return e[o]||null;const r=t.find(l=>{if(!l.startsWith("__react"))return!1;const i=e[l];return i&&typeof i=="object"&&"_debugSource"in i});return r&&e[r]||null}function Zs(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function hx(e,t=50){let n=e,o=0;for(;n&&o<t;){if(n._debugSource)return{source:n._debugSource,componentName:Zs(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Zs(n._debugOwner)};n=n.return,o++}return null}function px(e){let t=e,n=0;const o=50;for(;t&&n<o;){const r=t,l=["_debugSource","__source","_source","debugSource"];for(const i of l){const a=r[i];if(a&&typeof a=="object"&&"fileName"in a)return{source:a,componentName:Zs(t)}}if(t.memoizedProps){const i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){const a=i.__source;if(a.fileName&&a.lineNumber)return{source:{fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber},componentName:Zs(t)}}}t=t.return,n++}return null}var Hl=new Map;function mx(e){const t=e.tag,n=e.type,o=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===vs.FunctionComponent||t===vs.IndeterminateComponent)&&typeof n=="function")return n;if(t===vs.ForwardRef&&o){const r=o.render;if(typeof r=="function")return r}if((t===vs.MemoComponent||t===vs.SimpleMemoComponent)&&o){const r=o.type;if(typeof r=="function")return r}return typeof n=="function"?n:null}function gx(){const e=fm,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:o=>{t.H=o}};const n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){const o=n.ReactCurrentDispatcher;if(o&&"current"in o)return{get:()=>o.current,set:r=>{o.current=r}}}return null}function yx(e){const t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,r=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const l of t){const i=l.trim();if(!i||n.some(c=>c.test(i)))continue;const a=o.exec(i)||r.exec(i);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function xx(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function vx(e){const t=mx(e);if(!t)return null;if(Hl.has(t))return Hl.get(t);const n=gx();if(!n)return Hl.set(t,null),null;const o=n.get();let r=null;try{const l=new Proxy({},{get(){throw new Error("probe")}});n.set(l);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){const a=yx(i.stack);a&&(r={fileName:xx(a.fileName),lineNumber:a.line,columnNumber:a.column,componentName:Zs(e)||void 0})}}}finally{n.set(o)}return Hl.set(t,r),r}function wx(e,t=15){let n=e,o=0;for(;n&&o<t;){const r=vx(n);if(r)return r;n=n.return,o++}return null}function Uc(e){const t=fx(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=hx(t);if(n||(n=px(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};const o=wx(t);return o?{found:!0,source:o,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function bx(e,t="path"){const{fileName:n,lineNumber:o,columnNumber:r}=e;let l=`${n}:${o}`;return r!==void 0&&(l+=`:${r}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${l}`:l}function kx(e,t=10){let n=e,o=0;for(;n&&o<t;){const r=Uc(n);if(r.found)return r;n=n.parentElement,o++}return Uc(e)}var Sx=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Cx={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=Sx}var A=Cx,ws=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function H_(e,t,n="standard"){if(e.length===0)return"";const o=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let r=`## Page Feedback: ${t}
`;return n==="forensic"?(r+=`
**Environment:**
`,r+=`- Viewport: ${o}
`,typeof window<"u"&&(r+=`- URL: ${window.location.href}
`,r+=`- User Agent: ${navigator.userAgent}
`,r+=`- Timestamp: ${new Date().toISOString()}
`,r+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),r+=`
---
`):n!=="compact"&&(r+=`**Viewport:** ${o}
`),r+=`
`,e.forEach((l,i)=>{n==="compact"?(r+=`${i+1}. **${l.element}**${l.sourceFile?` (${l.sourceFile})`:""}: ${l.comment}`,l.selectedText&&(r+=` (re: "${l.selectedText.slice(0,30)}${l.selectedText.length>30?"...":""}")`),r+=`
`):n==="forensic"?(r+=`### ${i+1}. ${l.element}
`,l.isMultiSelect&&l.fullPath&&(r+=`*Forensic data shown for first element of selection*
`),l.fullPath&&(r+=`**Full DOM Path:** ${l.fullPath}
`),l.cssClasses&&(r+=`**CSS Classes:** ${l.cssClasses}
`),l.boundingBox&&(r+=`**Position:** x:${Math.round(l.boundingBox.x)}, y:${Math.round(l.boundingBox.y)} (${Math.round(l.boundingBox.width)}×${Math.round(l.boundingBox.height)}px)
`),r+=`**Annotation at:** ${l.x.toFixed(1)}% from left, ${Math.round(l.y)}px from top
`,l.selectedText&&(r+=`**Selected text:** "${l.selectedText}"
`),l.nearbyText&&!l.selectedText&&(r+=`**Context:** ${l.nearbyText.slice(0,100)}
`),l.computedStyles&&(r+=`**Computed Styles:** ${l.computedStyles}
`),l.accessibility&&(r+=`**Accessibility:** ${l.accessibility}
`),l.nearbyElements&&(r+=`**Nearby Elements:** ${l.nearbyElements}
`),l.sourceFile&&(r+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(r+=`**React:** ${l.reactComponents}
`),r+=`**Feedback:** ${l.comment}

`):(r+=`### ${i+1}. ${l.element}
`,r+=`**Location:** ${l.elementPath}
`,l.sourceFile&&(r+=`**Source:** ${l.sourceFile}
`),l.reactComponents&&(r+=`**React:** ${l.reactComponents}
`),n==="detailed"&&(l.cssClasses&&(r+=`**Classes:** ${l.cssClasses}
`),l.boundingBox&&(r+=`**Position:** ${Math.round(l.boundingBox.x)}px, ${Math.round(l.boundingBox.y)}px (${Math.round(l.boundingBox.width)}×${Math.round(l.boundingBox.height)}px)
`)),l.selectedText&&(r+=`**Selected text:** "${l.selectedText}"
`),n==="detailed"&&l.nearbyText&&!l.selectedText&&(r+=`**Context:** ${l.nearbyText.slice(0,100)}
`),r+=`**Feedback:** ${l.comment}

`)}),r.trim()}var jx=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Mx={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=jx}var xt=Mx;function U_({annotation:e,globalIndex:t,layerIndex:n,layerSize:o,isExiting:r,isClearing:l,isAnimated:i,isHovered:a,isDeleting:c,isEditingAny:d,renumberFrom:p,markerClickBehavior:x,tooltipStyle:g,onHoverEnter:$,onHoverLeave:k,onClick:j,onContextMenu:M}){const h=(a||c)&&!d,y=h&&x==="delete",b=e.isMultiSelect,N=b?"var(--agentation-color-green)":"var(--agentation-color-accent)",W=r?xt.exit:l?xt.clearing:i?"":xt.enter,Y=r?`${(o-1-n)*20}ms`:`${n*20}ms`;return s.jsxs("div",{className:`${xt.marker} ${b?xt.multiSelect:""} ${W} ${y?xt.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:y?void 0:N,animationDelay:Y},onMouseEnter:()=>$(e),onMouseLeave:k,onClick:D=>{D.stopPropagation(),r||j(e)},onContextMenu:M?D=>{x==="delete"&&(D.preventDefault(),D.stopPropagation(),r||M(e))}:void 0,children:[h?y?s.jsx(cp,{size:b?18:16}):s.jsx(Ag,{size:16}):s.jsx("span",{className:p!==null&&t>=p?xt.renumber:void 0,children:t+1}),a&&!d&&s.jsxs("div",{className:`${xt.markerTooltip} ${xt.enter}`,style:g,children:[s.jsxs("span",{className:xt.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),s.jsx("span",{className:xt.markerNote,children:e.comment})]})]})}function Ex({x:e,y:t,isMultiSelect:n,isExiting:o}){return s.jsx("div",{className:`${xt.marker} ${xt.pending} ${n?xt.multiSelect:""} ${o?xt.exit:xt.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:s.jsx(Eg,{size:12})})}function Y_({annotation:e,fixed:t}){const n=e.isMultiSelect;return s.jsx("div",{className:`${xt.marker} ${t?xt.fixed:""} ${xt.hovered} ${n?xt.multiSelect:""} ${xt.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:s.jsx(cp,{size:n?12:10})})}var Ix=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,$x={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=Ix}var Fa=$x,Ha=({className:e="",...t})=>s.jsxs("div",{className:`${Fa.switchContainer} ${e}`,children:[s.jsx("input",{className:Fa.switchInput,type:"checkbox",...t}),s.jsx("div",{className:Fa.switchThumb})]}),Nx=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Lx={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=Nx}var Ul=Lx,Rx=({className:e="",...t})=>s.jsxs("div",{className:`${Ul.checkboxContainer} ${e}`,children:[s.jsx("input",{className:Ul.checkboxInput,type:"checkbox",...t}),s.jsx("svg",{className:Ul.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:s.jsx("path",{className:Ul.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Tx=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Px={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=Tx}var X_=Px,Q_=({className:e="",label:t,tooltip:n,checked:o,onChange:r,...l})=>{const i=f.useId();return s.jsxs("div",{className:`${X_.container} ${e}`,...l,children:[s.jsx(Rx,{id:i,onChange:r,checked:o}),s.jsx("label",{className:X_.label,htmlFor:i,children:t}),n&&s.jsx(Vo,{content:n})]})},Dx=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Bx={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=Dx}var ee=Bx;function zx({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:o,isDevMode:r,connectionStatus:l,endpoint:i,isVisible:a,toolbarNearBottom:c,settingsPage:d,onSettingsPageChange:p,onHideToolbar:x}){return s.jsx("div",{className:`${ee.settingsPanel} ${a?ee.enter:ee.exit}`,style:c?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:s.jsxs("div",{className:ee.settingsPanelContainer,children:[s.jsxs("div",{className:`${ee.settingsPage} ${d==="automations"?ee.slideLeft:""}`,children:[s.jsxs("div",{className:ee.settingsHeader,children:[s.jsx("a",{className:ee.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:s.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),s.jsxs("p",{className:ee.settingsVersion,children:["v","3.0.2"]}),s.jsx("button",{className:ee.themeToggle,onClick:o,title:n?"Switch to light mode":"Switch to dark mode",children:s.jsx("span",{className:ee.themeIconWrapper,children:s.jsx("span",{className:ee.themeIcon,children:n?s.jsx(zg,{size:20}):s.jsx(Og,{size:20})},n?"sun":"moon")})})]}),s.jsx("div",{className:ee.divider}),s.jsxs("div",{className:ee.settingsSection,children:[s.jsxs("div",{className:ee.settingsRow,children:[s.jsxs("div",{className:ee.settingsLabel,children:["Output Detail",s.jsx(Vo,{content:"Controls how much detail is included in the copied output"})]}),s.jsxs("button",{className:ee.cycleButton,onClick:()=>{const $=(ws.findIndex(k=>k.value===e.outputDetail)+1)%ws.length;t({outputDetail:ws[$].value})},children:[s.jsx("span",{className:ee.cycleButtonText,children:ws.find(g=>g.value===e.outputDetail)?.label},e.outputDetail),s.jsx("span",{className:ee.cycleDots,children:ws.map(g=>s.jsx("span",{className:`${ee.cycleDot} ${e.outputDetail===g.value?ee.active:""}`},g.value))})]})]}),s.jsxs("div",{className:`${ee.settingsRow} ${ee.settingsRowMarginTop} ${r?"":ee.settingsRowDisabled}`,children:[s.jsxs("div",{className:ee.settingsLabel,children:["React Components",s.jsx(Vo,{content:r?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),s.jsx(Ha,{checked:r&&e.reactEnabled,onChange:g=>t({reactEnabled:g.target.checked}),disabled:!r})]}),s.jsxs("div",{className:`${ee.settingsRow} ${ee.settingsRowMarginTop}`,children:[s.jsxs("div",{className:ee.settingsLabel,children:["Hide Until Restart",s.jsx(Vo,{content:"Hides the toolbar until you open a new tab"})]}),s.jsx(Ha,{checked:!1,onChange:g=>{g.target.checked&&x()}})]})]}),s.jsx("div",{className:ee.divider}),s.jsxs("div",{className:ee.settingsSection,children:[s.jsx("div",{className:`${ee.settingsLabel} ${ee.settingsLabelMarker}`,children:"Marker Color"}),s.jsx("div",{className:ee.colorOptions,children:Ps.map(g=>s.jsx("button",{className:`${ee.colorOption} ${e.annotationColorId===g.id?ee.selected:""}`,style:{"--swatch":g.srgb,"--swatch-p3":g.p3},onClick:()=>t({annotationColorId:g.id}),title:g.label,type:"button"},g.id))})]}),s.jsx("div",{className:ee.divider}),s.jsxs("div",{className:ee.settingsSection,children:[s.jsx(Q_,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:g=>t({autoClearAfterCopy:g.target.checked}),tooltip:"Automatically clear annotations after copying"}),s.jsx(Q_,{className:ee.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:g=>t({blockInteractions:g.target.checked})})]}),s.jsx("div",{className:ee.divider}),s.jsxs("button",{className:ee.settingsNavLink,onClick:()=>p("automations"),children:[s.jsx("span",{children:"Manage MCP & Webhooks"}),s.jsxs("span",{className:ee.settingsNavLinkRight,children:[i&&l!=="disconnected"&&s.jsx("span",{className:`${ee.mcpNavIndicator} ${ee[l]}`}),s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),s.jsxs("div",{className:`${ee.settingsPage} ${ee.automationsPage} ${d==="automations"?ee.slideIn:""}`,children:[s.jsxs("button",{className:ee.settingsBackButton,onClick:()=>p("main"),children:[s.jsx(Fg,{size:16}),s.jsx("span",{children:"Manage MCP & Webhooks"})]}),s.jsx("div",{className:ee.divider}),s.jsxs("div",{className:ee.settingsSection,children:[s.jsxs("div",{className:ee.settingsRow,children:[s.jsxs("span",{className:ee.automationHeader,children:["MCP Connection",s.jsx(Vo,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),i&&s.jsx("div",{className:`${ee.mcpStatusDot} ${ee[l]}`,title:l==="connected"?"Connected":l==="connecting"?"Connecting...":"Disconnected"})]}),s.jsxs("p",{className:ee.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",s.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:ee.learnMoreLink,children:"Learn more"})]})]}),s.jsx("div",{className:ee.divider}),s.jsxs("div",{className:`${ee.settingsSection} ${ee.settingsSectionGrow}`,children:[s.jsxs("div",{className:ee.settingsRow,children:[s.jsxs("span",{className:ee.automationHeader,children:["Webhooks",s.jsx(Vo,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),s.jsxs("div",{className:ee.autoSendContainer,children:[s.jsx("label",{htmlFor:"agentation-auto-send",className:`${ee.autoSendLabel} ${e.webhooksEnabled?ee.active:""} ${e.webhookUrl?"":ee.disabled}`,children:"Auto-Send"}),s.jsx(Ha,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:g=>t({webhooksEnabled:g.target.checked}),disabled:!e.webhookUrl})]})]}),s.jsx("p",{className:ee.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),s.jsx("textarea",{className:ee.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:g=>g.stopPropagation(),onChange:g=>t({webhookUrl:g.target.value})})]})]})]})})}function Ua(e,t="filtered"){const{name:n,path:o}=Or(e);if(t==="off")return{name:n,elementName:n,path:o,reactComponents:null};const r=_x(e,{mode:t});return{name:r.path?`${r.path} ${n}`:n,elementName:n,path:o,reactComponents:r.path}}var V_=!1,Ya={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Hn=e=>{if(!e||!e.trim())return!1;try{const t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},Ps=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Ox=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...Ps.map(t=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${Ps.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Ps.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};Ox();function Uo(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){const o=n.shadowRoot.elementFromPoint(e,t);if(!o||o===n)break;n=o}return n}function Xa(e){let t=e;for(;t&&t!==document.body;){const o=window.getComputedStyle(t).position;if(o==="fixed"||o==="sticky")return!0;t=t.parentElement}return!1}function Yo(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Yl(e){const t=Uc(e),n=t.found?t:kx(e);if(n.found&&n.source)return bx(n.source,"path")}function Ax({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:o,onAnnotationDelete:r,onAnnotationUpdate:l,onAnnotationsClear:i,onCopy:a,onSubmit:c,copyToClipboard:d=!0,endpoint:p,sessionId:x,onSessionCreated:g,webhookUrl:$,className:k}={}){const[j,M]=f.useState(!1),[h,y]=f.useState([]),[b,N]=f.useState(!0),[W,Y]=f.useState(()=>J1()),[D,Q]=f.useState(!1),he=f.useRef(null);f.useEffect(()=>{const u=v=>{const w=he.current;w&&w.contains(v.target)&&v.stopPropagation()},m=["mousedown","click","pointerdown"];return m.forEach(v=>document.body.addEventListener(v,u)),()=>{m.forEach(v=>document.body.removeEventListener(v,u))}},[]);const[q,de]=f.useState(!1),[Be,Ae]=f.useState(!1),[ke,Ne]=f.useState(null),[oe,lt]=f.useState({x:0,y:0}),[I,U]=f.useState(null),[G,Se]=f.useState(!1),[Fe,wt]=f.useState("idle"),[Pt,Dt]=f.useState(!1),[Bt,zt]=f.useState(!1),[Vn,ao]=f.useState(null),[co,on]=f.useState(null),[Gt,_n]=f.useState([]),[Sn,uo]=f.useState(null),[Kn,_o]=f.useState(null),[T,ie]=f.useState(null),[Me,ge]=f.useState(null),[Ce,Ye]=f.useState([]),[He,Ie]=f.useState(0),[Xe,at]=f.useState(!1),[ue,C]=f.useState(!1),[E,B]=f.useState(!1),[O,se]=f.useState(!1),[K,F]=f.useState(!1),[we,be]=f.useState("main"),[ze,Ke]=f.useState(!1),[ae,We]=f.useState(!1),[Oe,Le]=f.useState(!1),[re,Ge]=f.useState([]),[je,pe]=f.useState(null),Qe=f.useRef(!1),[$e,fn]=f.useState(!1),[qt,rn]=f.useState(!1),[Bn,hn]=f.useState(1),[ar,sl]=f.useState("new-page"),[mt,Gn]=f.useState(""),[ll,Cp]=f.useState(!1),[xe,pn]=f.useState(null),Qi=f.useRef(!1),Vi=f.useRef({rearrange:null,placements:[]}),Do=f.useRef({rearrange:null,placements:[]}),[jp,Uu]=f.useState(0),[Mp,Ep]=f.useState(0),[Ip,Ki]=f.useState(0),[$p,Yu]=f.useState(0),qr=f.useRef(new Set),il=f.useRef(new Set),Cn=f.useRef(null),al=f.useRef(),Xu=ae&&j&&!Oe&&$e;f.useEffect(()=>{if(Xu){rn(!1);const u=Lr(()=>{rn(!0)});return()=>cancelAnimationFrame(u)}else rn(!1)},[Xu]);const Jr=f.useRef(new Map),Zr=f.useRef(new Map),es=f.useRef(),[jn,Gi]=f.useState(!1),[mn,Np]=f.useState([]),Lp=f.useRef(mn);Lp.current=mn;const[Qu,Ux]=f.useState(null),qi=f.useRef(null);f.useRef(!1),f.useRef([]),f.useRef(0),f.useRef(null),f.useRef(null),f.useRef(1);const[Vu,Ku]=f.useState(!1),cr=f.useRef(null),[bt,ur]=f.useState([]),zn=f.useRef({cmd:!1,shift:!1}),Ot=()=>{Ke(!0)},Rp=()=>{Ke(!1)},Tp=()=>{Vu||(cr.current=fe(()=>Ku(!0),850))},Pp=()=>{cr.current&&(clearTimeout(cr.current),cr.current=null),Ku(!1),Rp()};f.useEffect(()=>()=>{cr.current&&clearTimeout(cr.current)},[]);const[De,Dp]=f.useState(()=>{try{const u=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Ya,...u,annotationColorId:Ps.find(m=>m.id===u.annotationColorId)?u.annotationColorId:Ya.annotationColorId}}catch{return Ya}}),[On,Gu]=f.useState(!0),[qu,Ju]=f.useState(!1),Bp=()=>{he.current?.classList.add(A.disableTransitions),Gu(u=>!u),Lr(()=>{he.current?.classList.remove(A.disableTransitions)})},zp=!1,Bo="off",[Ct,Ji]=f.useState(x??null),Zu=f.useRef(!1),[Mn,zo]=f.useState(p?"connecting":"disconnected"),[ct,Zi]=f.useState(null),[Oo,ed]=f.useState(!1),[dr,td]=f.useState(null),ea=f.useRef(!1),[nd,ts]=f.useState(new Set),[od,cl]=f.useState(new Set),[ns,ul]=f.useState(!1),[Op,_r]=f.useState(!1),[qn,rd]=f.useState(!1),fr=f.useRef(null),An=f.useRef(null),os=f.useRef(null),rs=f.useRef(null),dl=f.useRef(!1),sd=f.useRef(0),_l=f.useRef(null),ld=f.useRef(null),ta=8,Ap=50,id=f.useRef(null),ad=f.useRef(null),ss=f.useRef(null),me=typeof window<"u"?window.location.pathname:"/";f.useEffect(()=>{if(O)F(!0);else{Ke(!1),be("main");const u=fe(()=>F(!1),0);return()=>clearTimeout(u)}},[O]);const na=j&&b&&!ae;f.useEffect(()=>{if(na){Ae(!1),de(!0),ts(new Set);const u=fe(()=>{ts(m=>{const v=new Set(m);return h.forEach(w=>v.add(w.id)),v})},350);return()=>clearTimeout(u)}else if(q){Ae(!0);const u=fe(()=>{de(!1),Ae(!1)},250);return()=>clearTimeout(u)}},[na]),f.useEffect(()=>{C(!0),Ie(window.scrollY);const u=za(me);y(u.filter(Yo)),V_||(Ju(!0),V_=!0,fe(()=>Ju(!1),750));try{const m=localStorage.getItem("feedback-toolbar-theme");m!==null&&Gu(m==="dark")}catch{}try{const m=localStorage.getItem("feedback-toolbar-position");if(m){const v=JSON.parse(m);typeof v.x=="number"&&typeof v.y=="number"&&Zi(v)}}catch{}},[me]),f.useEffect(()=>{ue&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(De))},[De,ue]),f.useEffect(()=>{ue&&localStorage.setItem("feedback-toolbar-theme",On?"dark":"light")},[On,ue]);const cd=f.useRef(!1);f.useEffect(()=>{const u=cd.current;cd.current=Oo,u&&!Oo&&ct&&ue&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(ct))},[Oo,ct,ue]),f.useEffect(()=>{if(!p||!ue||Zu.current)return;Zu.current=!0,zo("connecting"),(async()=>{try{const m=G1(me),v=x||m;let w=!1;if(v)try{const S=await O_(p,v);Ji(S.id),zo("connected"),Oa(me,S.id),w=!0;const P=za(me),X=new Set(S.annotations.map(ne=>ne.id)),V=P.filter(ne=>!X.has(ne.id));if(V.length>0){const le=`${typeof window<"u"?window.location.origin:""}${me}`,ve=(await Promise.allSettled(V.map(_e=>yr(p,S.id,{..._e,sessionId:S.id,url:le})))).map((_e,Z)=>_e.status==="fulfilled"?_e.value:(console.warn("[Agentation] Failed to sync annotation:",_e.reason),V[Z])),Te=[...S.annotations,...ve];y(Te.filter(Yo)),ys(me,Te.filter(Yo),S.id)}else y(S.annotations.filter(Yo)),ys(me,S.annotations.filter(Yo),S.id)}catch(S){console.warn("[Agentation] Could not join session, creating new:",S),q1(me)}if(!w){const S=typeof window<"u"?window.location.href:"/",P=await Aa(p,S);Ji(P.id),zo("connected"),Oa(me,P.id),g?.(P.id);const X=F1(),V=typeof window<"u"?window.location.origin:"",ne=[];for(const[le,ce]of X){const ve=ce.filter(Z=>!Z._syncedTo);if(ve.length===0)continue;const Te=`${V}${le}`,_e=le===me;ne.push((async()=>{try{const Z=_e?P:await Aa(p,Te),jt=(await Promise.allSettled(ve.map(qe=>yr(p,Z.id,{...qe,sessionId:Z.id,url:Te})))).map((qe,yt)=>qe.status==="fulfilled"?qe.value:(console.warn("[Agentation] Failed to sync annotation:",qe.reason),ve[yt])).filter(Yo);if(ys(le,jt,Z.id),_e){const qe=new Set(ve.map(yt=>yt.id));y(yt=>{const ye=yt.filter(Ee=>!qe.has(Ee.id));return[...jt,...ye]})}}catch(Z){console.warn(`[Agentation] Failed to sync annotations for ${le}:`,Z)}})())}await Promise.allSettled(ne)}}catch(m){zo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",m)}})()},[p,x,ue,g,me]),f.useEffect(()=>{if(!p||!ue)return;const u=async()=>{try{(await fetch(`${p}/health`)).ok?zo("connected"):zo("disconnected")}catch{zo("disconnected")}};u();const m=Yg(u,1e4);return()=>clearInterval(m)},[p,ue]),f.useEffect(()=>{if(!p||!ue||!Ct)return;const u=new EventSource(`${p}/sessions/${Ct}/events`),m=["resolved","dismissed"],v=w=>{try{const S=JSON.parse(w.data);if(m.includes(S.payload?.status)){const P=S.payload.id,X=S.payload.kind;if(X==="placement"){for(const[V,ne]of Jr.current)if(ne===P){Jr.current.delete(V),Ge(le=>le.filter(ce=>ce.id!==V));break}}else if(X==="rearrange"){for(const[V,ne]of Zr.current)if(ne===P){Zr.current.delete(V),pn(le=>{if(!le)return null;const ce=le.sections.filter(ve=>ve.id!==V);return ce.length===0?null:{...le,sections:ce}});break}}else cl(V=>new Set(V).add(P)),fe(()=>{y(V=>V.filter(ne=>ne.id!==P)),cl(V=>{const ne=new Set(V);return ne.delete(P),ne})},150)}}catch{}};return u.addEventListener("annotation.updated",v),()=>{u.removeEventListener("annotation.updated",v),u.close()}},[p,ue,Ct]),f.useEffect(()=>{if(!p||!ue)return;const u=ld.current==="disconnected",m=Mn==="connected";ld.current=Mn,u&&m&&(async()=>{try{const w=za(me);if(w.length===0)return;const P=`${typeof window<"u"?window.location.origin:""}${me}`;let X=Ct,V=[];if(X)try{V=(await O_(p,X)).annotations}catch{X=null}X||(X=(await Aa(p,P)).id,Ji(X),Oa(me,X));const ne=new Set(V.map(ce=>ce.id)),le=w.filter(ce=>!ne.has(ce.id));if(le.length>0){const ve=(await Promise.allSettled(le.map(Z=>yr(p,X,{...Z,sessionId:X,url:P})))).map((Z,gt)=>Z.status==="fulfilled"?Z.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Z.reason),le[gt])),_e=[...V,...ve].filter(Yo);y(_e),ys(me,_e,X)}}catch(w){console.warn("[Agentation] Failed to sync on reconnect:",w)}})()},[Mn,p,ue,Ct,me]);const Wp=f.useCallback(()=>{D||(Q(!0),se(!1),M(!1),fe(()=>{Z1(!0),Y(!0),Q(!1)},400))},[D]);f.useEffect(()=>{if(!n||!ue||!e||e.length===0||h.length>0)return;const u=[];return u.push(fe(()=>{M(!0)},t-200)),e.forEach((m,v)=>{const w=t+v*300;u.push(fe(()=>{const S=document.querySelector(m.selector);if(!S)return;const P=S.getBoundingClientRect(),{name:X,path:V}=Or(S),ne={id:`demo-${Date.now()}-${v}`,x:(P.left+P.width/2)/window.innerWidth*100,y:P.top+P.height/2+window.scrollY,comment:m.comment,element:X,elementPath:V,timestamp:Date.now(),selectedText:m.selectedText,boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.width,height:P.height},nearbyText:ms(S),cssClasses:gs(S)};y(le=>[...le,ne])},w))}),()=>{u.forEach(clearTimeout)}},[n,ue,e,t]),f.useEffect(()=>{const u=()=>{Ie(window.scrollY),at(!0),ss.current&&clearTimeout(ss.current),ss.current=fe(()=>{at(!1)},150)};return window.addEventListener("scroll",u,{passive:!0}),()=>{window.removeEventListener("scroll",u),ss.current&&clearTimeout(ss.current)}},[]),f.useEffect(()=>{ue&&h.length>0?Ct?ys(me,h,Ct):bp(me,h):ue&&h.length===0&&localStorage.removeItem($i(me))},[h,me,ue,Ct]),f.useEffect(()=>{if(ue&&!Qe.current){Qe.current=!0;const u=H1(me);u.length>0&&Ge(u)}},[ue,me]),f.useEffect(()=>{ue&&Qe.current&&!$e&&(re.length>0?U1(me,re):Y1(me))},[re,me,ue,$e]),f.useEffect(()=>{if(ue&&!Qi.current){Qi.current=!0;const u=X1(me);if(u){const m={...u,sections:u.sections.map(v=>({...v,currentRect:v.currentRect??{...v.originalRect}}))};pn(m)}}},[ue,me]),f.useEffect(()=>{ue&&Qi.current&&!$e&&(xe?Q1(me,xe):V1(me))},[xe,me,ue,$e]);const oa=f.useRef(!1);f.useEffect(()=>{if(ue&&!oa.current){oa.current=!0;const u=K1(me);u&&(Do.current={rearrange:u.rearrange,placements:u.placements||[]},u.purpose&&Gn(u.purpose))}},[ue,me]),f.useEffect(()=>{if(!ue||!oa.current)return;const u=Do.current;$e?(xe?.sections?.length??0)>0||re.length>0||mt?z_(me,{rearrange:xe,placements:re,purpose:mt}):Fl(me):(u.rearrange?.sections?.length??0)>0||u.placements.length>0||mt?z_(me,{rearrange:u.rearrange,placements:u.placements,purpose:mt}):Fl(me)},[xe,re,mt,$e,me,ue]),f.useEffect(()=>{ae&&!xe&&pn({sections:[],originalOrder:[],detectedAt:Date.now()})},[ae,xe]),f.useEffect(()=>{if(!p||!Ct)return;const u=Jr.current,m=new Set(re.map(v=>v.id));for(const v of re){if(u.has(v.id))continue;u.set(v.id,"");const w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:me;yr(p,Ct,{id:v.id,x:v.x/window.innerWidth*100,y:v.y,comment:`Place ${v.type} at (${Math.round(v.x)}, ${Math.round(v.y)}), ${v.width}×${v.height}px${v.text?` — "${v.text}"`:""}`,element:`[design:${v.type}]`,elementPath:"[placement]",timestamp:v.timestamp,url:w,intent:"change",severity:"important",kind:"placement",placement:{componentType:v.type,width:v.width,height:v.height,scrollY:v.scrollY,text:v.text}}).then(S=>{u.has(v.id)&&u.set(v.id,S.id)}).catch(S=>{console.warn("[Agentation] Failed to sync placement annotation:",S),u.delete(v.id)})}for(const[v,w]of u)m.has(v)||(u.delete(v),w&&mo(p,w).catch(()=>{}))},[re,p,Ct,me]),f.useEffect(()=>{if(!(!p||!Ct))return es.current&&clearTimeout(es.current),es.current=fe(()=>{const u=Zr.current;if(!xe||xe.sections.length===0){for(const[,w]of u)w&&mo(p,w).catch(()=>{});u.clear();return}const m=new Set(xe.sections.map(w=>w.id)),v=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:me;for(const w of xe.sections){const S=w.originalRect,P=w.currentRect;if(!(Math.abs(S.x-P.x)>1||Math.abs(S.y-P.y)>1||Math.abs(S.width-P.width)>1||Math.abs(S.height-P.height)>1)){const ne=u.get(w.id);ne&&(u.delete(w.id),mo(p,ne).catch(()=>{}));continue}const V=u.get(w.id);V?A_(p,V,{comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)}`}).catch(ne=>{console.warn("[Agentation] Failed to update rearrange annotation:",ne)}):(u.set(w.id,""),yr(p,Ct,{id:w.id,x:P.x/window.innerWidth*100,y:P.y,comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(S.x)},${Math.round(S.y)}) ${Math.round(S.width)}×${Math.round(S.height)} to (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}×${Math.round(P.height)}`,element:w.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:v,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:w.selector,label:w.label,tagName:w.tagName,originalRect:S,currentRect:P}}).then(ne=>{u.has(w.id)&&u.set(w.id,ne.id)}).catch(ne=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ne),u.delete(w.id)}))}for(const[w,S]of u)m.has(w)||(u.delete(w),S&&mo(p,S).catch(()=>{}))},300),()=>{es.current&&clearTimeout(es.current)}},[xe,p,Ct,me]);const hr=f.useRef(new Map);f.useLayoutEffect(()=>{const u=xe?.sections??[],m=new Set;if((ae||Oe)&&j)for(const v of u){m.add(v.id);try{const w=document.querySelector(v.selector);if(!w)continue;if(!hr.current.has(v.id)){const S={transform:w.style.transform,transformOrigin:w.style.transformOrigin,opacity:w.style.opacity,position:w.style.position,zIndex:w.style.zIndex,display:w.style.display},P=[];let X=w.parentElement;for(;X&&X!==document.body;){const ne=getComputedStyle(X);(ne.overflow!=="visible"||ne.overflowX!=="visible"||ne.overflowY!=="visible")&&(P.push({el:X,overflow:X.style.overflow}),X.style.overflow="visible"),X=X.parentElement}getComputedStyle(w).display==="inline"&&(w.style.display="inline-block"),hr.current.set(v.id,{el:w,origStyles:S,ancestors:P}),w.style.transformOrigin="top left",w.style.zIndex="9999"}}catch{}}for(const[v,w]of hr.current)if(!m.has(v)){const{el:S,origStyles:P,ancestors:X}=w;S.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",S.style.transform=P.transform,S.style.transformOrigin=P.transformOrigin,S.style.opacity=P.opacity,S.style.position=P.position,S.style.zIndex=P.zIndex,hr.current.delete(v),fe(()=>{S.style.transition="",S.style.display=P.display;for(const V of X)V.el.style.overflow=V.overflow},450)}},[xe,ae,Oe,j]),f.useEffect(()=>()=>{for(const[,u]of hr.current){const{el:m,origStyles:v,ancestors:w}=u;m.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",m.style.transform=v.transform,m.style.transformOrigin=v.transformOrigin,m.style.opacity=v.opacity,m.style.position=v.position,m.style.zIndex=v.zIndex,fe(()=>{m.style.transition="",m.style.display=v.display;for(const S of w)S.el.style.overflow=S.overflow},450)}hr.current.clear()},[]);const fl=f.useCallback(()=>{Le(!0),We(!1),pe(null),clearTimeout(al.current),al.current=fe(()=>{Le(!1)},300)},[]),ud=f.useCallback(()=>{ae&&(Le(!0),We(!1),pe(null),clearTimeout(al.current),al.current=fe(()=>{Le(!1)},300)),M(!1)},[ae]),dd=f.useCallback(()=>{E||(Qg(),B(!0))},[E]),hl=f.useCallback(()=>{E&&(S_(),B(!1))},[E]),ra=f.useCallback(()=>{E?hl():dd()},[E,dd,hl]),_d=f.useCallback(()=>{if(bt.length===0)return;const u=bt[0],m=u.element,v=bt.length>1,w=bt.map(S=>S.element.getBoundingClientRect());if(v){const S={left:Math.min(...w.map(Z=>Z.left)),top:Math.min(...w.map(Z=>Z.top)),right:Math.max(...w.map(Z=>Z.right)),bottom:Math.max(...w.map(Z=>Z.bottom))},P=bt.slice(0,5).map(Z=>Z.name).join(", "),X=bt.length>5?` +${bt.length-5} more`:"",V=w.map(Z=>({x:Z.left,y:Z.top+window.scrollY,width:Z.width,height:Z.height})),le=bt[bt.length-1].element,ce=w[w.length-1],ve=ce.left+ce.width/2,Te=ce.top+ce.height/2,_e=Xa(le);U({x:ve/window.innerWidth*100,y:_e?Te:Te+window.scrollY,clientY:Te,element:`${bt.length} elements: ${P}${X}`,elementPath:"multi-select",boundingBox:{x:S.left,y:S.top+window.scrollY,width:S.right-S.left,height:S.bottom-S.top},isMultiSelect:!0,isFixed:_e,elementBoundingBoxes:V,multiSelectElements:bt.map(Z=>Z.element),targetElement:le,fullPath:Ol(m),accessibility:zl(m),computedStyles:Bl(m),computedStylesObj:Dl(m),nearbyElements:Pl(m),cssClasses:gs(m),nearbyText:ms(m),sourceFile:Yl(m)})}else{const S=w[0],P=Xa(m);U({x:S.left/window.innerWidth*100,y:P?S.top:S.top+window.scrollY,clientY:S.top,element:u.name,elementPath:u.path,boundingBox:{x:S.left,y:P?S.top:S.top+window.scrollY,width:S.width,height:S.height},isFixed:P,fullPath:Ol(m),accessibility:zl(m),computedStyles:Bl(m),computedStylesObj:Dl(m),nearbyElements:Pl(m),cssClasses:gs(m),nearbyText:ms(m),reactComponents:u.reactComponents,sourceFile:Yl(m)})}ur([]),Ne(null)},[bt]);f.useEffect(()=>{j||(U(null),ie(null),ge(null),Ye([]),Ne(null),se(!1),ur([]),zn.current={cmd:!1,shift:!1},E&&hl())},[j,E,hl]),f.useEffect(()=>()=>{S_()},[]),f.useEffect(()=>{if(!j)return;const u=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),m=":not([data-agentation-root]):not([data-agentation-root] *)",v=document.createElement("style");return v.id="feedback-cursor-styles",v.textContent=`
      body ${m} {
        cursor: crosshair !important;
      }

      body :is(${u})${m} {
        cursor: text !important;
      }
    `,document.head.appendChild(v),()=>{const w=document.getElementById("feedback-cursor-styles");w&&w.remove()}},[j]),f.useEffect(()=>{if(Qu!==null&&j)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Qu,j]),f.useEffect(()=>{if(!j||I||jn||ae)return;const u=m=>{const v=m.composedPath()[0]||m.target;if(Ut(v,"[data-feedback-toolbar]")){Ne(null);return}const w=Uo(m.clientX,m.clientY);if(!w||Ut(w,"[data-feedback-toolbar]")){Ne(null);return}const{name:S,elementName:P,path:X,reactComponents:V}=Ua(w,Bo),ne=w.getBoundingClientRect();Ne({element:S,elementName:P,elementPath:X,rect:ne,reactComponents:V}),lt({x:m.clientX,y:m.clientY})};return document.addEventListener("mousemove",u),()=>document.removeEventListener("mousemove",u)},[j,I,jn,ae,Bo,mn]);const pl=f.useCallback(u=>{if(ie(u),ao(null),on(null),_n([]),u.elementBoundingBoxes?.length){const m=[];for(const v of u.elementBoundingBoxes){const w=v.x+v.width/2,S=v.y+v.height/2-window.scrollY,P=Uo(w,S);P&&m.push(P)}Ye(m),ge(null)}else if(u.boundingBox){const m=u.boundingBox,v=m.x+m.width/2,w=u.isFixed?m.y+m.height/2:m.y+m.height/2-window.scrollY,S=Uo(v,w);if(S){const P=S.getBoundingClientRect(),X=P.width/m.width,V=P.height/m.height;X<.5||V<.5?ge(null):ge(S)}else ge(null);Ye([])}else ge(null),Ye([])},[]);f.useEffect(()=>{if(!j||jn||ae)return;const u=m=>{if(dl.current){dl.current=!1;return}const v=m.composedPath()[0]||m.target;if(Ut(v,"[data-feedback-toolbar]")||Ut(v,"[data-annotation-popup]")||Ut(v,"[data-annotation-marker]"))return;if(m.metaKey&&m.shiftKey&&!I&&!T){m.preventDefault(),m.stopPropagation();const et=Uo(m.clientX,m.clientY);if(!et)return;const jt=et.getBoundingClientRect(),{name:qe,path:yt,reactComponents:ye}=Ua(et,Bo),Ee=bt.findIndex(ut=>ut.element===et);Ee>=0?ur(ut=>ut.filter((ht,En)=>En!==Ee)):ur(ut=>[...ut,{element:et,rect:jt,name:qe,path:yt,reactComponents:ye??void 0}]);return}const w=Ut(v,"button, a, input, select, textarea, [role='button'], [onclick]");if(De.blockInteractions&&w&&(m.preventDefault(),m.stopPropagation()),I){if(w&&!De.blockInteractions)return;m.preventDefault(),id.current?.shake();return}if(T){if(w&&!De.blockInteractions)return;m.preventDefault(),ad.current?.shake();return}m.preventDefault();const S=Uo(m.clientX,m.clientY);if(!S)return;const{name:P,path:X,reactComponents:V}=Ua(S,Bo),ne=S.getBoundingClientRect(),le=m.clientX/window.innerWidth*100,ce=Xa(S),ve=ce?m.clientY:m.clientY+window.scrollY,Te=window.getSelection();let _e;Te&&Te.toString().trim().length>0&&(_e=Te.toString().trim().slice(0,500));const Z=Dl(S),gt=Bl(S);U({x:le,y:ve,clientY:m.clientY,element:P,elementPath:X,selectedText:_e,boundingBox:{x:ne.left,y:ce?ne.top:ne.top+window.scrollY,width:ne.width,height:ne.height},nearbyText:ms(S),cssClasses:gs(S),isFixed:ce,fullPath:Ol(S),accessibility:zl(S),computedStyles:gt,computedStylesObj:Z,nearbyElements:Pl(S),reactComponents:V??void 0,sourceFile:Yl(S),targetElement:S}),Ne(null)};return document.addEventListener("click",u,!0),()=>document.removeEventListener("click",u,!0)},[j,jn,ae,I,T,De.blockInteractions,Bo,bt]),f.useEffect(()=>{if(!j)return;const u=w=>{w.key==="Meta"&&(zn.current.cmd=!0),w.key==="Shift"&&(zn.current.shift=!0)},m=w=>{const S=zn.current.cmd&&zn.current.shift;w.key==="Meta"&&(zn.current.cmd=!1),w.key==="Shift"&&(zn.current.shift=!1);const P=zn.current.cmd&&zn.current.shift;S&&!P&&bt.length>0&&_d()},v=()=>{zn.current={cmd:!1,shift:!1},ur([])};return document.addEventListener("keydown",u),document.addEventListener("keyup",m),window.addEventListener("blur",v),()=>{document.removeEventListener("keydown",u),document.removeEventListener("keyup",m),window.removeEventListener("blur",v)}},[j,bt,_d]),f.useEffect(()=>{if(!j||I||jn||ae)return;const u=m=>{const v=m.composedPath()[0]||m.target;Ut(v,"[data-feedback-toolbar]")||Ut(v,"[data-annotation-marker]")||Ut(v,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(v.tagName)||v.isContentEditable||(m.preventDefault(),fr.current={x:m.clientX,y:m.clientY})};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[j,I,jn,ae]),f.useEffect(()=>{if(!j||I)return;const u=m=>{if(!fr.current)return;const v=m.clientX-fr.current.x,w=m.clientY-fr.current.y,S=v*v+w*w,P=ta*ta;if(!qn&&S>=P&&(An.current=fr.current,rd(!0),m.preventDefault()),(qn||S>=P)&&An.current){if(os.current){const ye=Math.min(An.current.x,m.clientX),Ee=Math.min(An.current.y,m.clientY),ut=Math.abs(m.clientX-An.current.x),ht=Math.abs(m.clientY-An.current.y);os.current.style.transform=`translate(${ye}px, ${Ee}px)`,os.current.style.width=`${ut}px`,os.current.style.height=`${ht}px`}const X=Date.now();if(X-sd.current<Ap)return;sd.current=X;const V=An.current.x,ne=An.current.y,le=Math.min(V,m.clientX),ce=Math.min(ne,m.clientY),ve=Math.max(V,m.clientX),Te=Math.max(ne,m.clientY),_e=(le+ve)/2,Z=(ce+Te)/2,gt=new Set,et=[[le,ce],[ve,ce],[le,Te],[ve,Te],[_e,Z],[_e,ce],[_e,Te],[le,Z],[ve,Z]];for(const[ye,Ee]of et){const ut=document.elementsFromPoint(ye,Ee);for(const ht of ut)ht instanceof HTMLElement&&gt.add(ht)}const jt=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ye of jt)if(ye instanceof HTMLElement){const Ee=ye.getBoundingClientRect(),ut=Ee.left+Ee.width/2,ht=Ee.top+Ee.height/2,En=ut>=le&&ut<=ve&&ht>=ce&&ht<=Te,gn=Math.min(Ee.right,ve)-Math.max(Ee.left,le),Nt=Math.min(Ee.bottom,Te)-Math.max(Ee.top,ce),is=gn>0&&Nt>0?gn*Nt:0,Wo=Ee.width*Ee.height,fo=Wo>0?is/Wo:0;(En||fo>.5)&&gt.add(ye)}const qe=[],yt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ye of gt){if(Ut(ye,"[data-feedback-toolbar]")||Ut(ye,"[data-annotation-marker]"))continue;const Ee=ye.getBoundingClientRect();if(!(Ee.width>window.innerWidth*.8&&Ee.height>window.innerHeight*.5)&&!(Ee.width<10||Ee.height<10)&&Ee.left<ve&&Ee.right>le&&Ee.top<Te&&Ee.bottom>ce){const ut=ye.tagName;let ht=yt.has(ut);if(!ht&&(ut==="DIV"||ut==="SPAN")){const En=ye.textContent&&ye.textContent.trim().length>0,gn=ye.onclick!==null||ye.getAttribute("role")==="button"||ye.getAttribute("role")==="link"||ye.classList.contains("clickable")||ye.hasAttribute("data-clickable");(En||gn)&&!ye.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(ht=!0)}if(ht){let En=!1;for(const gn of qe)if(gn.left<=Ee.left&&gn.right>=Ee.right&&gn.top<=Ee.top&&gn.bottom>=Ee.bottom){En=!0;break}En||qe.push(Ee)}}}if(rs.current){const ye=rs.current;for(;ye.children.length>qe.length;)ye.removeChild(ye.lastChild);qe.forEach((Ee,ut)=>{let ht=ye.children[ut];ht||(ht=document.createElement("div"),ht.className=A.selectedElementHighlight,ye.appendChild(ht)),ht.style.transform=`translate(${Ee.left}px, ${Ee.top}px)`,ht.style.width=`${Ee.width}px`,ht.style.height=`${Ee.height}px`})}}};return document.addEventListener("mousemove",u,{passive:!0}),()=>document.removeEventListener("mousemove",u)},[j,I,qn,ta]),f.useEffect(()=>{if(!j)return;const u=m=>{const v=qn,w=An.current;if(qn&&w){dl.current=!0;const S=Math.min(w.x,m.clientX),P=Math.min(w.y,m.clientY),X=Math.max(w.x,m.clientX),V=Math.max(w.y,m.clientY),ne=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(_e=>{if(!(_e instanceof HTMLElement)||Ut(_e,"[data-feedback-toolbar]")||Ut(_e,"[data-annotation-marker]"))return;const Z=_e.getBoundingClientRect();Z.width>window.innerWidth*.8&&Z.height>window.innerHeight*.5||Z.width<10||Z.height<10||Z.left<X&&Z.right>S&&Z.top<V&&Z.bottom>P&&ne.push({element:_e,rect:Z})});const ce=ne.filter(({element:_e})=>!ne.some(({element:Z})=>Z!==_e&&_e.contains(Z))),ve=m.clientX/window.innerWidth*100,Te=m.clientY+window.scrollY;if(ce.length>0){const _e=ce.reduce((yt,{rect:ye})=>({left:Math.min(yt.left,ye.left),top:Math.min(yt.top,ye.top),right:Math.max(yt.right,ye.right),bottom:Math.max(yt.bottom,ye.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Z=ce.slice(0,5).map(({element:yt})=>Or(yt).name).join(", "),gt=ce.length>5?` +${ce.length-5} more`:"",et=ce[0].element,jt=Dl(et),qe=Bl(et);U({x:ve,y:Te,clientY:m.clientY,element:`${ce.length} elements: ${Z}${gt}`,elementPath:"multi-select",boundingBox:{x:_e.left,y:_e.top+window.scrollY,width:_e.right-_e.left,height:_e.bottom-_e.top},isMultiSelect:!0,fullPath:Ol(et),accessibility:zl(et),computedStyles:qe,computedStylesObj:jt,nearbyElements:Pl(et),cssClasses:gs(et),nearbyText:ms(et),sourceFile:Yl(et)})}else{const _e=Math.abs(X-S),Z=Math.abs(V-P);_e>20&&Z>20&&U({x:ve,y:Te,clientY:m.clientY,element:"Area selection",elementPath:`region at (${Math.round(S)}, ${Math.round(P)})`,boundingBox:{x:S,y:P+window.scrollY,width:_e,height:Z},isMultiSelect:!0})}Ne(null)}else v&&(dl.current=!0);fr.current=null,An.current=null,rd(!1),rs.current&&(rs.current.innerHTML="")};return document.addEventListener("mouseup",u),()=>document.removeEventListener("mouseup",u)},[j,qn]);const Wn=f.useCallback(async(u,m,v)=>{const w=De.webhookUrl||$;if(!w||!De.webhooksEnabled&&!v)return!1;try{return(await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:u,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...m})})).ok}catch(S){return console.warn("[Agentation] Webhook failed:",S),!1}},[$,De.webhookUrl,De.webhooksEnabled]),Fp=f.useCallback(u=>{if(!I)return;const m={id:Date.now().toString(),x:I.x,y:I.y,comment:u,element:I.element,elementPath:I.elementPath,timestamp:Date.now(),selectedText:I.selectedText,boundingBox:I.boundingBox,nearbyText:I.nearbyText,cssClasses:I.cssClasses,isMultiSelect:I.isMultiSelect,isFixed:I.isFixed,fullPath:I.fullPath,accessibility:I.accessibility,computedStyles:I.computedStyles,nearbyElements:I.nearbyElements,reactComponents:I.reactComponents,sourceFile:I.sourceFile,elementBoundingBoxes:I.elementBoundingBoxes,...p&&Ct?{sessionId:Ct,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};y(v=>[...v,m]),_l.current=m.id,fe(()=>{_l.current=null},300),fe(()=>{ts(v=>new Set(v).add(m.id))},250),o?.(m),Wn("annotation.add",{annotation:m}),ul(!0),fe(()=>{U(null),ul(!1)},150),window.getSelection()?.removeAllRanges(),p&&Ct&&yr(p,Ct,m).then(v=>{v.id!==m.id&&(y(w=>w.map(S=>S.id===m.id?{...S,id:v.id}:S)),ts(w=>{const S=new Set(w);return S.delete(m.id),S.add(v.id),S}))}).catch(v=>{console.warn("[Agentation] Failed to sync annotation:",v)})},[I,o,Wn,p,Ct]),sa=f.useCallback(()=>{ul(!0),fe(()=>{U(null),ul(!1)},150)},[]),la=f.useCallback(u=>{const m=h.findIndex(w=>w.id===u),v=h[m];T?.id===u&&(_r(!0),fe(()=>{ie(null),ge(null),Ye([]),_r(!1)},150)),uo(u),cl(w=>new Set(w).add(u)),v&&(r?.(v),Wn("annotation.delete",{annotation:v})),p&&mo(p,u).catch(w=>{console.warn("[Agentation] Failed to delete annotation from server:",w)}),fe(()=>{y(w=>w.filter(S=>S.id!==u)),cl(w=>{const S=new Set(w);return S.delete(u),S}),uo(null),m<h.length-1&&(_o(m),fe(()=>_o(null),200))},150)},[h,T,r,Wn,p]),ml=f.useCallback(u=>{if(!u){ao(null),on(null),_n([]);return}if(ao(u.id),u.elementBoundingBoxes?.length){const m=[];for(const v of u.elementBoundingBoxes){const w=v.x+v.width/2,S=v.y+v.height/2-window.scrollY,X=document.elementsFromPoint(w,S).find(V=>!V.closest("[data-annotation-marker]")&&!V.closest("[data-agentation-root]"));X&&m.push(X)}_n(m),on(null)}else if(u.boundingBox){const m=u.boundingBox,v=m.x+m.width/2,w=u.isFixed?m.y+m.height/2:m.y+m.height/2-window.scrollY,S=Uo(v,w);if(S){const P=S.getBoundingClientRect(),X=P.width/m.width,V=P.height/m.height;X<.5||V<.5?on(null):on(S)}else on(null);_n([])}else on(null),_n([])},[]),Hp=f.useCallback(u=>{if(!T)return;const m={...T,comment:u};y(v=>v.map(w=>w.id===T.id?m:w)),l?.(m),Wn("annotation.update",{annotation:m}),p&&A_(p,T.id,{comment:u}).catch(v=>{console.warn("[Agentation] Failed to update annotation on server:",v)}),_r(!0),fe(()=>{ie(null),ge(null),Ye([]),_r(!1)},150)},[T,l,Wn,p]),Up=f.useCallback(()=>{_r(!0),fe(()=>{ie(null),ge(null),Ye([]),_r(!1)},150)},[]),Ao=f.useCallback(()=>{const u=h.length,m=re.length>0||!!xe;if(u===0&&mn.length===0&&!m)return;if(i?.(h),Wn("annotations.clear",{annotations:h}),p){Promise.all(h.map(S=>mo(p,S.id).catch(P=>{console.warn("[Agentation] Failed to delete annotation from server:",P)})));for(const[,S]of Jr.current)S&&mo(p,S).catch(()=>{});Jr.current.clear();for(const[,S]of Zr.current)S&&mo(p,S).catch(()=>{});Zr.current.clear()}zt(!0),Dt(!0),Np([]);const v=qi.current;if(v){const S=v.getContext("2d");S&&S.clearRect(0,0,v.width,v.height)}(re.length>0||xe)&&(Ki(S=>S+1),Yu(S=>S+1),fe(()=>{Ge([]),pn(null)},200)),$e&&fn(!1),mt&&Gn(""),Do.current={rearrange:null,placements:[]},Fl(me);const w=u*30+200;fe(()=>{y([]),ts(new Set),localStorage.removeItem($i(me)),zt(!1)},w),fe(()=>Dt(!1),1500)},[me,h,mn,re,xe,$e,mt,i,Wn,p]),ia=f.useCallback(async()=>{const u=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:me,m=ae&&$e;let v;if(m){if(re.length===0&&!xe&&!mt)return;v=""}else{if(v=H_(h,u,De.outputDetail),!v&&mn.length===0&&re.length===0&&!xe)return;v||(v=`## Page Feedback: ${u}
`)}if(!m&&mn.length>0){const w=new Set;for(const V of h)V.drawingIndex!=null&&w.add(V.drawingIndex);const S=qi.current;S&&(S.style.visibility="hidden");const P=[],X=window.scrollY;for(let V=0;V<mn.length;V++){if(w.has(V))continue;const ne=mn[V];if(ne.points.length<2)continue;const le=ne.fixed?ne.points:ne.points.map(kt=>({x:kt.x,y:kt.y-X}));let ce=1/0,ve=1/0,Te=-1/0,_e=-1/0;for(const kt of le)ce=Math.min(ce,kt.x),ve=Math.min(ve,kt.y),Te=Math.max(Te,kt.x),_e=Math.max(_e,kt.y);const Z=Te-ce,gt=_e-ve,et=Math.hypot(Z,gt),jt=le[0],qe=le[le.length-1],yt=Math.hypot(qe.x-jt.x,qe.y-jt.y);let ye;const Ee=yt<et*.35,ut=Z/Math.max(gt,1);if(Ee&&et>20){const kt=Math.max(Z,gt)*.15;let ho=0;for(const Fo of le){const Qp=Fo.x-ce<kt,Vp=Te-Fo.x<kt,Kp=Fo.y-ve<kt,Gp=_e-Fo.y<kt;(Qp||Vp)&&(Kp||Gp)&&ho++}ye=ho>le.length*.15?"box":"circle"}else ut>3&&gt<40?ye="underline":yt>et*.5?ye="arrow":ye="drawing";const ht=Math.min(10,le.length),En=Math.max(1,Math.floor(le.length/ht)),gn=new Set,Nt=[],is=[jt];for(let kt=En;kt<le.length-1;kt+=En)is.push(le[kt]);is.push(qe);for(const kt of is){const ho=Uo(kt.x,kt.y);if(!ho||gn.has(ho)||Ut(ho,"[data-feedback-toolbar]"))continue;gn.add(ho);const{name:Fo}=Or(ho);Nt.includes(Fo)||Nt.push(Fo)}const Wo=`${Math.round(ce)},${Math.round(ve)} → ${Math.round(Te)},${Math.round(_e)}`;let fo;(ye==="circle"||ye==="box")&&Nt.length>0?fo=`${ye==="box"?"Boxed":"Circled"} **${Nt[0]}**${Nt.length>1?` (and ${Nt.slice(1).join(", ")})`:""} (region: ${Wo})`:ye==="underline"&&Nt.length>0?fo=`Underlined **${Nt[0]}** (${Wo})`:ye==="arrow"&&Nt.length>=2?fo=`Arrow from **${Nt[0]}** to **${Nt[Nt.length-1]}** (${Math.round(jt.x)},${Math.round(jt.y)} → ${Math.round(qe.x)},${Math.round(qe.y)})`:Nt.length>0?fo=`${ye==="arrow"?"Arrow":"Drawing"} near **${Nt.join("**, **")}** (region: ${Wo})`:fo=`Drawing at ${Wo}`,P.push(fo)}S&&(S.style.visibility=""),P.length>0&&(v+=`
**Drawings:**
`,P.forEach((V,ne)=>{v+=`${ne+1}. ${V}
`}))}if((re.length>0||m&&mt)&&(v+=`
`+D_(re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:$e,wireframePurpose:mt||void 0},De.outputDetail)),xe){const w=B_(xe,De.outputDetail,{width:window.innerWidth,height:window.innerHeight});w&&(v+=`
`+w)}if(d)try{await navigator.clipboard.writeText(v)}catch{}a?.(v),Se(!0),fe(()=>Se(!1),2e3),De.autoClearAfterCopy&&fe(()=>Ao(),500)},[h,mn,re,xe,$e,ae,ar,mt,me,De.outputDetail,Bo,De.autoClearAfterCopy,Ao,d,a]),aa=f.useCallback(async()=>{const u=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:me;let m=H_(h,u,De.outputDetail);if(!m&&re.length===0&&!xe)return;if(m||(m=`## Page Feedback: ${u}
`),re.length>0&&(m+=`
`+D_(re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:$e,wireframePurpose:mt||void 0},De.outputDetail)),xe){const w=B_(xe,De.outputDetail,{width:window.innerWidth,height:window.innerHeight});w&&(m+=`
`+w)}c&&c(m,h),wt("sending"),await new Promise(w=>fe(w,150));const v=await Wn("submit",{output:m,annotations:h},!0);wt(v?"sent":"failed"),fe(()=>wt("idle"),2500),v&&De.autoClearAfterCopy&&fe(()=>Ao(),500)},[c,Wn,h,re,xe,$e,ar,me,De.outputDetail,Bo,De.autoClearAfterCopy,Ao]);f.useEffect(()=>{if(!dr)return;const u=10,m=w=>{const S=w.clientX-dr.x,P=w.clientY-dr.y,X=Math.sqrt(S*S+P*P);if(!Oo&&X>u&&ed(!0),Oo||X>u){let V=dr.toolbarX+S,ne=dr.toolbarY+P;const le=20,ce=337,ve=44,_e=ce-(j?Mn==="connected"?297:257:44),Z=le-_e,gt=window.innerWidth-le-ce;V=Math.max(Z,Math.min(gt,V)),ne=Math.max(le,Math.min(window.innerHeight-ve-le,ne)),Zi({x:V,y:ne})}},v=()=>{Oo&&(ea.current=!0),ed(!1),td(null)};return document.addEventListener("mousemove",m),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",v)}},[dr,Oo,j,Mn]);const Yp=f.useCallback(u=>{if(u.target.closest("button")||u.target.closest("[data-agentation-settings-panel]"))return;const m=u.currentTarget.parentElement;if(!m)return;const v=m.getBoundingClientRect(),w=ct?.x??v.left,S=ct?.y??v.top;td({x:u.clientX,y:u.clientY,toolbarX:w,toolbarY:S})},[ct]);if(f.useEffect(()=>{if(!ct)return;const u=()=>{let S=ct.x,P=ct.y;const ne=20-(337-(j?Mn==="connected"?297:257:44)),le=window.innerWidth-20-337;S=Math.max(ne,Math.min(le,S)),P=Math.max(20,Math.min(window.innerHeight-44-20,P)),(S!==ct.x||P!==ct.y)&&Zi({x:S,y:P})};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[ct,j,Mn]),f.useEffect(()=>{const u=m=>{const v=m.target,w=v.tagName==="INPUT"||v.tagName==="TEXTAREA"||v.isContentEditable;if(m.key==="Escape"){if(ae){je?pe(null):fl();return}if(jn){Gi(!1);return}if(bt.length>0){ur([]);return}I||j&&(Ot(),M(!1))}if((m.metaKey||m.ctrlKey)&&m.shiftKey&&(m.key==="f"||m.key==="F")){m.preventDefault(),Ot(),j?ud():M(!0);return}if(!(w||m.metaKey||m.ctrlKey)&&((m.key==="p"||m.key==="P")&&(m.preventDefault(),Ot(),ra()),(m.key==="l"||m.key==="L")&&(m.preventDefault(),Ot(),jn&&Gi(!1),O&&se(!1),I&&sa(),ae?fl():We(!0)),(m.key==="h"||m.key==="H")&&h.length>0&&(m.preventDefault(),Ot(),N(S=>!S)),(m.key==="c"||m.key==="C")&&(h.length>0||re.length>0||xe)&&(m.preventDefault(),Ot(),ia()),(m.key==="x"||m.key==="X")&&(h.length>0||re.length>0||xe)&&(m.preventDefault(),Ot(),Ao(),re.length>0&&Ge([]),xe&&pn(null)),m.key==="s"||m.key==="S")){const S=Hn(De.webhookUrl)||Hn($||"");h.length>0&&S&&Fe==="idle"&&(m.preventDefault(),Ot(),aa())}};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[j,jn,ae,je,re,xe,I,h.length,De.webhookUrl,$,Fe,aa,ra,ia,Ao,bt]),!ue||W)return null;const ls=h.length>0,pr=h.filter(u=>!od.has(u.id)&&u.kind!=="placement"&&u.kind!=="rearrange"),Xp=pr.length>0,fd=h.filter(u=>od.has(u.id)),hd=u=>{const P=u.x/100*window.innerWidth,X=typeof u.y=="string"?parseFloat(u.y):u.y,V={};window.innerHeight-X-22-10<80&&(V.top="auto",V.bottom="calc(100% + 10px)");const le=P-200/2,ce=10;if(le<ce){const ve=ce-le;V.left=`calc(50% + ${ve}px)`}else if(le+200>window.innerWidth-ce){const ve=le+200-(window.innerWidth-ce);V.left=`calc(50% - ${ve}px)`}return V};return Ou.createPortal(s.jsxs("div",{ref:he,style:{display:"contents"},"data-agentation-theme":On?"dark":"light","data-agentation-accent":De.annotationColorId,"data-agentation-root":"",children:[s.jsx("div",{className:`${A.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:ct?{left:ct.x,top:ct.y,right:"auto",bottom:"auto"}:void 0,children:s.jsxs("div",{className:`${A.toolbarContainer} ${j?A.expanded:A.collapsed} ${qu?A.entrance:""} ${D?A.hiding:""} ${!De.webhooksEnabled&&(Hn(De.webhookUrl)||Hn($||""))?A.serverConnected:""}`,onClick:j?void 0:u=>{if(ea.current){ea.current=!1,u.preventDefault();return}M(!0)},onMouseDown:Yp,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",children:[s.jsxs("div",{className:`${A.toggleContent} ${j?A.hidden:A.visible}`,children:[s.jsx(Ig,{size:24}),Xp&&s.jsx("span",{className:`${A.badge} ${j?A.fadeOut:""} ${qu?A.entrance:""}`,children:pr.length})]}),s.jsxs("div",{className:`${A.controlsContent} ${j?A.visible:A.hidden} ${ct&&ct.y<100?A.tooltipBelow:""} ${ze||O?A.tooltipsHidden:""} ${Vu?A.tooltipsInSession:""}`,onMouseEnter:Tp,onMouseLeave:Pp,children:[s.jsxs("div",{className:`${A.buttonWrapper} ${ct&&ct.x<120?A.buttonWrapperAlignLeft:""}`,children:[s.jsx("button",{className:A.controlButton,onClick:u=>{u.stopPropagation(),Ot(),ra()},"data-active":E,children:s.jsx(Tg,{size:24,isPaused:E})}),s.jsxs("span",{className:A.buttonTooltip,children:[E?"Resume animations":"Pause animations",s.jsx("span",{className:A.shortcut,children:"P"})]})]}),s.jsxs("div",{className:A.buttonWrapper,children:[s.jsx("button",{className:`${A.controlButton} ${On?"":A.light}`,onClick:u=>{u.stopPropagation(),Ot(),jn&&Gi(!1),O&&se(!1),I&&sa(),ae?fl():We(!0)},"data-active":ae,style:ae&&$e?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:s.jsx(Hg,{size:21})}),s.jsxs("span",{className:A.buttonTooltip,children:[ae?"Exit layout mode":"Layout mode",s.jsx("span",{className:A.shortcut,children:"L"})]})]}),s.jsxs("div",{className:A.buttonWrapper,children:[s.jsx("button",{className:A.controlButton,onClick:u=>{u.stopPropagation(),Ot(),N(!b)},disabled:!ls||ae,children:s.jsx(Rg,{size:24,isOpen:b})}),s.jsxs("span",{className:A.buttonTooltip,children:[b?"Hide markers":"Show markers",s.jsx("span",{className:A.shortcut,children:"H"})]})]}),s.jsxs("div",{className:A.buttonWrapper,children:[s.jsx("button",{className:`${A.controlButton} ${G?A.statusShowing:""}`,onClick:u=>{u.stopPropagation(),Ot(),ia()},disabled:ae&&$e?re.length===0&&!xe?.sections?.length:!ls&&mn.length===0&&re.length===0&&!xe?.sections?.length,"data-active":G,children:s.jsx(Ng,{size:24,copied:G,tint:ae&&$e&&(re.length>0||xe?.sections?.length)?"#f97316":void 0})}),s.jsxs("span",{className:A.buttonTooltip,children:[ae&&$e?"Copy layout":"Copy feedback",s.jsx("span",{className:A.shortcut,children:"C"})]})]}),s.jsxs("div",{className:`${A.buttonWrapper} ${A.sendButtonWrapper} ${j&&!De.webhooksEnabled&&(Hn(De.webhookUrl)||Hn($||""))?A.sendButtonVisible:""}`,children:[s.jsxs("button",{className:`${A.controlButton} ${Fe==="sent"||Fe==="failed"?A.statusShowing:""}`,onClick:u=>{u.stopPropagation(),Ot(),aa()},disabled:!ls||!Hn(De.webhookUrl)&&!Hn($||"")||Fe==="sending","data-no-hover":Fe==="sent"||Fe==="failed",tabIndex:Hn(De.webhookUrl)||Hn($||"")?0:-1,children:[s.jsx(Lg,{size:24,state:Fe}),ls&&Fe==="idle"&&s.jsx("span",{className:A.buttonBadge,children:h.length})]}),s.jsxs("span",{className:A.buttonTooltip,children:["Send Annotations",s.jsx("span",{className:A.shortcut,children:"S"})]})]}),s.jsxs("div",{className:A.buttonWrapper,children:[s.jsx("button",{className:A.controlButton,onClick:u=>{u.stopPropagation(),Ot(),Ao()},disabled:!ls&&mn.length===0&&re.length===0&&!xe?.sections?.length,"data-danger":!0,children:s.jsx(Dg,{size:24})}),s.jsxs("span",{className:A.buttonTooltip,children:["Clear all",s.jsx("span",{className:A.shortcut,children:"X"})]})]}),s.jsxs("div",{className:A.buttonWrapper,children:[s.jsx("button",{className:A.controlButton,onClick:u=>{u.stopPropagation(),Ot(),ae&&fl(),se(!O)},children:s.jsx(Pg,{size:24})}),p&&Mn!=="disconnected"&&s.jsx("span",{className:`${A.mcpIndicator} ${A[Mn]} ${O?A.hidden:""}`,title:Mn==="connected"?"MCP Connected":"MCP Connecting..."}),s.jsx("span",{className:A.buttonTooltip,children:"Settings"})]}),s.jsx("div",{className:A.divider}),s.jsxs("div",{className:`${A.buttonWrapper} ${ct&&typeof window<"u"&&ct.x>window.innerWidth-120?A.buttonWrapperAlignRight:""}`,children:[s.jsx("button",{className:A.controlButton,onClick:u=>{u.stopPropagation(),Ot(),ud()},children:s.jsx(Bg,{size:24})}),s.jsxs("span",{className:A.buttonTooltip,children:["Exit",s.jsx("span",{className:A.shortcut,children:"Esc"})]})]})]}),s.jsx(y1,{visible:ae&&j,activeType:je,onSelect:u=>{pe(je===u?null:u)},isDarkMode:On,sectionCount:xe?.sections.length??0,onDetectSections:()=>{const u=I1(),m=xe?.sections??[],v=new Set(m.map(X=>X.selector)),w=u.filter(X=>!v.has(X.selector)),S=[...m,...w],P=[...xe?.originalOrder??[],...w.map(X=>X.id)];pn({sections:S,originalOrder:P,detectedAt:Date.now()})},placementCount:re.length,onClearPlacements:()=>{Ki(u=>u+1),Yu(u=>u+1),fe(()=>{pn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:$e,onBlankCanvasChange:u=>{const m={sections:[],originalOrder:[],detectedAt:Date.now()};u?(Vi.current={rearrange:xe,placements:re},pn(Do.current.rearrange||m),Ge(Do.current.placements),pe(null)):(Do.current={rearrange:xe,placements:re},pn(Vi.current.rearrange||m),Ge(Vi.current.placements)),fn(u)},wireframePurpose:mt,onWireframePurposeChange:Gn,Tooltip:Vo,onDragStart:(u,m)=>{m.preventDefault();const v=J[u];let w=null,S=!1;const P=m.clientX,X=m.clientY,ne=m.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,le=ve=>{const Te=ve.clientX-P,_e=ve.clientY-X;if(!S&&(Math.abs(Te)>4||Math.abs(_e)>4)&&(S=!0,w=document.createElement("div"),w.className=`${R.dragPreview}${$e?` ${R.dragPreviewWireframe}`:""}`,document.body.appendChild(w)),!w)return;const Z=Math.max(0,ne-ve.clientY),gt=Math.min(1,Z/180),et=1-Math.pow(1-gt,2),jt=28,qe=20,yt=Math.min(140,v.width*.18),ye=Math.min(90,v.height*.18),Ee=jt+(yt-jt)*et,ut=qe+(ye-qe)*et;w.style.width=`${Ee}px`,w.style.height=`${ut}px`,w.style.left=`${ve.clientX-Ee/2}px`,w.style.top=`${ve.clientY-ut/2}px`,w.style.opacity=`${.5+.5*et}`,w.textContent=et>.25?u:""},ce=ve=>{if(window.removeEventListener("mousemove",le),window.removeEventListener("mouseup",ce),w&&document.body.removeChild(w),S){const Te=v.width,_e=v.height,Z=window.scrollY,gt=Math.max(0,ve.clientX-Te/2),et=Math.max(0,ve.clientY+Z-_e/2),jt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:u,x:gt,y:et,width:Te,height:_e,scrollY:Z,timestamp:Date.now()};Ge(qe=>[...qe,jt]),pe(null),qr.current=new Set,Uu(qe=>qe+1)}};window.addEventListener("mousemove",le),window.addEventListener("mouseup",ce)}}),s.jsx(zx,{settings:De,onSettingsChange:u=>Dp(m=>({...m,...u})),isDarkMode:On,onToggleTheme:Bp,isDevMode:zp,connectionStatus:Mn,endpoint:p,isVisible:K,toolbarNearBottom:!!ct&&ct.y<230,settingsPage:we,onSettingsPageChange:be,onHideToolbar:Wp})]})}),(ae||Oe)&&s.jsx("div",{className:`${R.blankCanvas} ${qt?R.visible:""} ${ll?R.gridActive:""}`,style:{"--canvas-opacity":Bn},"data-feedback-toolbar":!0}),ae&&$e&&qt&&s.jsxs("div",{className:R.wireframeNotice,"data-feedback-toolbar":!0,children:[s.jsxs("div",{className:R.wireframeOpacityRow,children:[s.jsx("span",{className:R.wireframeOpacityLabel,children:"Toggle Opacity"}),s.jsx("input",{type:"range",className:R.wireframeOpacitySlider,min:0,max:1,step:.01,value:Bn,onChange:u=>hn(Number(u.target.value))})]}),s.jsxs("div",{className:R.wireframeNoticeTitleRow,children:[s.jsx("span",{className:R.wireframeNoticeTitle,children:"Wireframe Mode"}),s.jsx("span",{className:R.wireframeNoticeDivider}),s.jsx("button",{className:R.wireframeStartOver,onClick:()=>{Ki(u=>u+1),pn({sections:[],originalOrder:[],detectedAt:Date.now()}),Do.current={rearrange:null,placements:[]},Gn(""),Fl(me)},children:"Start Over"})]}),"Drag components onto the canvas.",s.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(ae||Oe)&&s.jsx(f1,{placements:re,onChange:Ge,activeComponent:Oe?null:je,onActiveComponentChange:pe,isDarkMode:On,exiting:Oe,onInteractionChange:Cp,passthrough:!je,extraSnapRects:xe?.sections.map(u=>u.currentRect),deselectSignal:jp,clearSignal:Ip,wireframe:$e,onSelectionChange:(u,m)=>{qr.current=u,m||(il.current=new Set,Ep(v=>v+1))},onDragMove:(u,m)=>{const v=il.current;if(!(!v.size||!xe)){if(!Cn.current){Cn.current=new Map;for(const w of xe.sections)v.has(w.id)&&Cn.current.set(w.id,{x:w.currentRect.x,y:w.currentRect.y})}for(const w of xe.sections){if(!v.has(w.id)||!Cn.current.get(w.id))continue;const P=document.querySelector(`[data-rearrange-section="${w.id}"]`);P&&(P.style.transform=`translate(${u}px, ${m}px)`)}}},onDragEnd:(u,m,v)=>{const w=il.current,S=Cn.current;if(Cn.current=null,!(!w.size||!xe||!S)){for(const P of w){const X=document.querySelector(`[data-rearrange-section="${P}"]`);X&&(X.style.transform="")}v&&pn(P=>P&&{...P,sections:P.sections.map(X=>{const V=S.get(X.id);return V?{...X,currentRect:{...X.currentRect,x:Math.max(0,V.x+u),y:Math.max(0,V.y+m)}}:X})})}}}),(ae||Oe)&&xe&&s.jsx(L1,{rearrangeState:xe,onChange:pn,isDarkMode:On,exiting:Oe,blankCanvas:$e,extraSnapRects:re.map(u=>({x:u.x,y:u.y,width:u.width,height:u.height})),clearSignal:$p,deselectSignal:Mp,onSelectionChange:(u,m)=>{il.current=u,m||(qr.current=new Set,Uu(v=>v+1))},onDragMove:(u,m)=>{const v=qr.current;if(v.size){if(!Cn.current){Cn.current=new Map;for(const w of re)v.has(w.id)&&Cn.current.set(w.id,{x:w.x,y:w.y})}for(const w of v){const S=document.querySelector(`[data-design-placement="${w}"]`);S&&(S.style.transform=`translate(${u}px, ${m}px)`)}}},onDragEnd:(u,m,v)=>{const w=qr.current,S=Cn.current;if(Cn.current=null,!(!w.size||!S)){for(const P of w){const X=document.querySelector(`[data-design-placement="${P}"]`);X&&(X.style.transform="")}v&&Ge(P=>P.map(X=>{const V=S.get(X.id);return V?{...X,x:Math.max(0,V.x+u),y:Math.max(0,V.y+m)}:X}))}}}),s.jsx("canvas",{ref:qi,className:`${A.drawCanvas} ${jn?A.active:""}`,style:{opacity:na?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),s.jsxs("div",{className:A.markersLayer,"data-feedback-toolbar":!0,children:[q&&pr.filter(u=>!u.isFixed).map((u,m,v)=>s.jsx(U_,{annotation:u,globalIndex:pr.findIndex(w=>w.id===u.id),layerIndex:m,layerSize:v.length,isExiting:Be,isClearing:Bt,isAnimated:nd.has(u.id),isHovered:!Be&&Vn===u.id,isDeleting:Sn===u.id,isEditingAny:!!T,renumberFrom:Kn,markerClickBehavior:De.markerClickBehavior,tooltipStyle:hd(u),onHoverEnter:w=>!Be&&w.id!==_l.current&&ml(w),onHoverLeave:()=>ml(null),onClick:w=>De.markerClickBehavior==="delete"?la(w.id):pl(w),onContextMenu:pl},u.id)),q&&!Be&&fd.filter(u=>!u.isFixed).map(u=>s.jsx(Y_,{annotation:u},u.id))]}),s.jsxs("div",{className:A.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[q&&pr.filter(u=>u.isFixed).map((u,m,v)=>s.jsx(U_,{annotation:u,globalIndex:pr.findIndex(w=>w.id===u.id),layerIndex:m,layerSize:v.length,isExiting:Be,isClearing:Bt,isAnimated:nd.has(u.id),isHovered:!Be&&Vn===u.id,isDeleting:Sn===u.id,isEditingAny:!!T,renumberFrom:Kn,markerClickBehavior:De.markerClickBehavior,tooltipStyle:hd(u),onHoverEnter:w=>!Be&&w.id!==_l.current&&ml(w),onHoverLeave:()=>ml(null),onClick:w=>De.markerClickBehavior==="delete"?la(w.id):pl(w),onContextMenu:pl},u.id)),q&&!Be&&fd.filter(u=>u.isFixed).map(u=>s.jsx(Y_,{annotation:u,fixed:!0},u.id))]}),j&&s.jsxs("div",{className:A.overlay,"data-feedback-toolbar":!0,style:I||T?{zIndex:99999}:void 0,children:[ke?.rect&&!I&&!Xe&&!qn&&s.jsx("div",{className:`${A.hoverHighlight} ${A.enter}`,style:{left:ke.rect.left,top:ke.rect.top,width:ke.rect.width,height:ke.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),bt.filter(u=>document.contains(u.element)).map((u,m)=>{const v=u.element.getBoundingClientRect(),w=bt.length>1;return s.jsx("div",{className:w?A.multiSelectOutline:A.singleSelectOutline,style:{position:"fixed",left:v.left,top:v.top,width:v.width,height:v.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},m)}),Vn&&!I&&(()=>{const u=h.find(S=>S.id===Vn);if(!u?.boundingBox)return null;if(u.elementBoundingBoxes?.length)return Gt.length>0?Gt.filter(S=>document.contains(S)).map((S,P)=>{const X=S.getBoundingClientRect();return s.jsx("div",{className:`${A.multiSelectOutline} ${A.enter}`,style:{left:X.left,top:X.top,width:X.width,height:X.height}},`hover-outline-live-${P}`)}):u.elementBoundingBoxes.map((S,P)=>s.jsx("div",{className:`${A.multiSelectOutline} ${A.enter}`,style:{left:S.x,top:S.y-He,width:S.width,height:S.height}},`hover-outline-${P}`));const m=co&&document.contains(co)?co.getBoundingClientRect():null,v=m?{x:m.left,y:m.top,width:m.width,height:m.height}:{x:u.boundingBox.x,y:u.isFixed?u.boundingBox.y:u.boundingBox.y-He,width:u.boundingBox.width,height:u.boundingBox.height},w=u.isMultiSelect;return s.jsx("div",{className:`${w?A.multiSelectOutline:A.singleSelectOutline} ${A.enter}`,style:{left:v.x,top:v.y,width:v.width,height:v.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ke&&!I&&!Xe&&!qn&&s.jsxs("div",{className:`${A.hoverTooltip} ${A.enter}`,style:{left:Math.max(8,Math.min(oe.x,window.innerWidth-100)),top:Math.max(oe.y-(ke.reactComponents?48:32),8)},children:[ke.reactComponents&&s.jsx("div",{className:A.hoverReactPath,children:ke.reactComponents}),s.jsx("div",{className:A.hoverElementName,children:ke.elementName})]}),I&&s.jsxs(s.Fragment,{children:[I.multiSelectElements?.length?I.multiSelectElements.filter(u=>document.contains(u)).map((u,m)=>{const v=u.getBoundingClientRect();return s.jsx("div",{className:`${A.multiSelectOutline} ${ns?A.exit:A.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height}},`pending-multi-${m}`)}):I.targetElement&&document.contains(I.targetElement)?(()=>{const u=I.targetElement.getBoundingClientRect();return s.jsx("div",{className:`${A.singleSelectOutline} ${ns?A.exit:A.enter}`,style:{left:u.left,top:u.top,width:u.width,height:u.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():I.boundingBox&&s.jsx("div",{className:`${I.isMultiSelect?A.multiSelectOutline:A.singleSelectOutline} ${ns?A.exit:A.enter}`,style:{left:I.boundingBox.x,top:I.boundingBox.y-He,width:I.boundingBox.width,height:I.boundingBox.height,...I.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const u=I.x,m=I.isFixed?I.y:I.y-He;return s.jsxs(s.Fragment,{children:[s.jsx(Ex,{x:u,y:m,isMultiSelect:I.isMultiSelect,isExiting:ns}),s.jsx(Ei,{ref:id,element:I.element,selectedText:I.selectedText,computedStyles:I.computedStylesObj,placeholder:I.element==="Area selection"?"What should change in this area?":I.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Fp,onCancel:sa,isExiting:ns,lightMode:!On,accentColor:I.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,u/100*window.innerWidth)),...m>window.innerHeight-290?{bottom:window.innerHeight-m+20}:{top:m+20}}})]})})()]}),T&&s.jsxs(s.Fragment,{children:[T.elementBoundingBoxes?.length?Ce.length>0?Ce.filter(u=>document.contains(u)).map((u,m)=>{const v=u.getBoundingClientRect();return s.jsx("div",{className:`${A.multiSelectOutline} ${A.enter}`,style:{left:v.left,top:v.top,width:v.width,height:v.height}},`edit-multi-live-${m}`)}):T.elementBoundingBoxes.map((u,m)=>s.jsx("div",{className:`${A.multiSelectOutline} ${A.enter}`,style:{left:u.x,top:u.y-He,width:u.width,height:u.height}},`edit-multi-${m}`)):(()=>{const u=Me&&document.contains(Me)?Me.getBoundingClientRect():null,m=u?{x:u.left,y:u.top,width:u.width,height:u.height}:T.boundingBox?{x:T.boundingBox.x,y:T.isFixed?T.boundingBox.y:T.boundingBox.y-He,width:T.boundingBox.width,height:T.boundingBox.height}:null;return m?s.jsx("div",{className:`${T.isMultiSelect?A.multiSelectOutline:A.singleSelectOutline} ${A.enter}`,style:{left:m.x,top:m.y,width:m.width,height:m.height,...T.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),s.jsx(Ei,{ref:ad,element:T.element,selectedText:T.selectedText,computedStyles:C1(T.computedStyles),placeholder:"Edit your feedback...",initialValue:T.comment,submitLabel:"Save",onSubmit:Hp,onCancel:Up,onDelete:()=>la(T.id),isExiting:Op,lightMode:!On,accentColor:T.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const u=T.isFixed?T.y:T.y-He;return{left:Math.max(160,Math.min(window.innerWidth-160,T.x/100*window.innerWidth)),...u>window.innerHeight-290?{bottom:window.innerHeight-u+20}:{top:u+20}}})()})]}),qn&&s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:os,className:A.dragSelection}),s.jsx("div",{ref:rs,className:A.highlightsContainer})]})]})]}),document.body)}function Wx(){const e=document.getElementById("typo3-agentation-config");if(!e)return null;try{return JSON.parse(e.textContent||"{}")}catch(t){return console.warn("[agentation] config parse failed",t),null}}function Fx(){if(typeof localStorage>"u")return;const e=["feedback-annotations-","agentation-design-","agentation-rearrange-","agentation-wireframe-","agentation-session-"],t=new URLSearchParams(window.location.search),n=t.get("id")||t.get("uid")||"",r=":"+window.location.pathname+":id="+n,l=d=>{if(typeof d!="string")return d;for(const p of e)if(d.startsWith(p))return p+r+"/"+d.slice(p.length);return d},i=localStorage.getItem.bind(localStorage),a=localStorage.setItem.bind(localStorage),c=localStorage.removeItem.bind(localStorage);localStorage.getItem=d=>i(l(d)),localStorage.setItem=(d,p)=>a(l(d),p),localStorage.removeItem=d=>c(l(d))}function Hx(){if(typeof BroadcastChannel>"u")return;const e=["feedback-annotations-","agentation-design-","agentation-rearrange-","agentation-wireframe-","agentation-session-"];new BroadcastChannel("typo3-agentation").addEventListener("message",n=>{const o=n?.data||{};if(o.type==="annotation:delete"&&o.id){for(const r of Object.keys(localStorage))if(r.startsWith("feedback-annotations-"))try{const l=JSON.parse(localStorage.getItem(r)||"[]");if(!Array.isArray(l))continue;const i=l.filter(a=>a?.id!==o.id);i.length!==l.length&&(i.length===0?localStorage.removeItem(r):localStorage.setItem(r,JSON.stringify(i)))}catch{}}else if(o.type==="annotations:delete-all")for(const r of Object.keys(localStorage))e.some(l=>r.startsWith(l))&&localStorage.removeItem(r)})}(function(){const t=Wx()||{};if(window.TYPO3Agentation=t,t.enabled===!1)return;if(t.scope==="backend"&&Fx(),Hx(),t.endpoint&&window.location.protocol==="https:"&&t.endpoint.startsWith("http://")&&!t.proxyUrl&&console.warn("[agentation] Sync endpoint is HTTP but page is HTTPS — browser will block all sync requests (mixed content). Access the BE over HTTP or set Agentation.apiKey in Extension Configuration."),t.endpoint&&t.proxyUrl){const o=window.fetch.bind(window),r=t.endpoint.replace(/\/$/,""),l=t.proxyUrl;window.fetch=function(a,c){const d=typeof a=="string"?a:a&&a.url||"";if(d.startsWith(r)){const p=d.slice(r.length)||"/";try{const x=new URL(l,window.location.origin);x.searchParams.set("path",p);const g=x.toString();return o(typeof a=="string"?g:new Request(g,a),c)}catch{}}return o(a,c)}}const n=()=>{if(document.getElementById("typo3-agentation-root"))return;const o=document.createElement("div");o.id="typo3-agentation-root",o.setAttribute("data-agentation-scope",t.scope||"frontend"),document.body.appendChild(o);const r=async a=>{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(a);return}const c=document.createElement("textarea");c.value=a,c.setAttribute("readonly",""),c.style.position="absolute",c.style.left="-9999px",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)},l=async a=>{const c=t.webhookUrl;if(c)try{await fetch(c,{method:"POST",headers:{"Content-Type":"application/json",...t.apiKey?{Authorization:`Bearer ${t.apiKey}`}:{}},body:JSON.stringify({annotation:a,context:t.context,pageId:t.pageId,beUser:t.beUser,workspaceId:t.workspaceId,metadata:t.metadata}),keepalive:!0})}catch(d){console.warn("[agentation] webhook POST failed",d)}},i={endpoint:t.endpoint||void 0,webhookUrl:t.webhookUrl||void 0,sessionId:t.sessionId||void 0,copyToClipboard:r,onSubmit:l,...t.additionalOptions||{}};try{const a=lp(o);a.render(f.createElement(Ax,i)),t.__root=a}catch(a){console.warn("[agentation] mount failed",a)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):n()})();
