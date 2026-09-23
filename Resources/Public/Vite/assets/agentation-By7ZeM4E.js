var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return w(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function O(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,le)}catch(e){le(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function ue(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else O(ue.bind(null,e))}var de={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=de,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=ue,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=O,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var E=new MessageChannel,D=E.port2;E.port1.onmessage=w,T=function(){D.postMessage(null)}}else T=function(){_(w,0)};function re(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,T=Symbol.for(`react.element`),E=Symbol.for(`react.transitional.element`),D=Symbol.for(`react.portal`),re=Symbol.for(`react.fragment`),ie=Symbol.for(`react.strict_mode`),ae=Symbol.for(`react.profiler`),oe=Symbol.for(`react.consumer`),se=Symbol.for(`react.context`),ce=Symbol.for(`react.forward_ref`),le=Symbol.for(`react.suspense`),O=Symbol.for(`react.suspense_list`),ue=Symbol.for(`react.memo`),de=Symbol.for(`react.lazy`),fe=Symbol.for(`react.activity`),pe=Symbol.for(`react.legacy_hidden`),me=Symbol.for(`react.memo_cache_sentinel`),he=Symbol.for(`react.view_transition`),ge=Symbol.for(`react.recoverable`),_e=Symbol.iterator;function ve(e){return typeof e!=`object`||!e?null:(e=_e&&e[_e]||e[`@@iterator`],typeof e==`function`?e:null)}var ye=Symbol.for(`react.client.reference`);function be(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case re:return`Fragment`;case ae:return`Profiler`;case ie:return`StrictMode`;case le:return`Suspense`;case O:return`SuspenseList`;case fe:return`Activity`;case he:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case D:return`Portal`;case se:return e.displayName||`Context`;case oe:return(e._context.displayName||`Context`)+`.Consumer`;case ce:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ue:return t=e.displayName||null,t===null?be(e.type)||`Memo`:t;case de:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var xe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Ce=[],we=-1;function Te(e){return{current:e}}function j(e){0>we||(e.current=Ce[we],Ce[we]=null,we--)}function Ee(e,t){we++,Ce[we]=e.current,e.current=t}var De=Te(null),Oe=Te(null),ke=Te(null),Ae=Te(null);function je(e,t){switch(Ee(ke,t),Ee(Oe,e),Ee(De,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(De),Ee(De,e)}function Me(){j(De),j(Oe),j(ke)}function Ne(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,Ee(Ae,e)),t=De.current;var n=dp(t,e.type);t!==n&&(Ee(Oe,e),Ee(De,n))}function Pe(e){Oe.current===e&&(j(De),j(Oe)),Ae.current===e&&(j(Ae),sh._currentValue=Se)}var Fe,Ie;function Le(e){if(Fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Fe=t&&t[1]||``,Ie=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Fe+e+Ie}var Re=!1;function ze(e,t){if(!e||Re)return``;Re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Le(n):``}function Be(e,t){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le(`Lazy`);case 13:return e.child!==t&&t!==null?Le(`Suspense Fallback`):Le(`Suspense`);case 19:return Le(`SuspenseList`);case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return Le(`Activity`);case 30:return Le(`ViewTransition`);default:return``}}function Ve(e){try{var t=``,n=null;do t+=Be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var He=Object.prototype.hasOwnProperty,Ue=t.unstable_scheduleCallback,We=t.unstable_cancelCallback,Ge=t.unstable_shouldYield,Ke=t.unstable_requestPaint,qe=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,Ye=t.unstable_ImmediatePriority,Xe=t.unstable_UserBlockingPriority,Ze=t.unstable_NormalPriority,Qe=t.unstable_LowPriority,$e=t.unstable_IdlePriority,et=t.log,tt=t.unstable_setDisableYieldValue,nt=null,rt=null;function M(e){if(typeof et==`function`&&tt(e),rt&&typeof rt.setStrictMode==`function`)try{rt.setStrictMode(nt,e)}catch{}}var it=Math.clz32?Math.clz32:st,at=Math.log,ot=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(at(e)/ot|0)|0}var N=256,ct=262144,lt=4194304;function P(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ut(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=P(n))):i=P(o):i=P(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=P(n))):i=P(o)):i=P(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function dt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ft(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-it(n),i=1<<r;t|=e[r],n&=~i}return t}function pt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var e=lt;return lt<<=1,!(lt&62914560)&&(lt=4194304),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _t(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-it(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&vt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function vt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-it(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function bt(e,t){var n=t&-t;return n=n&42?1:xt(n),(n&(e.suspendedLanes|t))===0?n:0}function xt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function St(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function wt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var Tt=Math.random().toString(36).slice(2),Et=`__reactFiber$`+Tt,Dt=`__reactProps$`+Tt,Ot=`__reactContainer$`+Tt,F=`__reactEvents$`+Tt,kt=`__reactListeners$`+Tt,I=`__reactHandles$`+Tt,At=`__reactResources$`+Tt,jt=`__reactMarker$`+Tt,L=`__reactLoad$`+Tt;function R(e){delete e[Et],delete e[Dt],delete e[kt],delete e[I]}function Mt(e){var t;if(t=e[Et])return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Et])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Nt(e){if(e=e[Et]||e[Ot]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ft(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function It(e){e[jt]=!0}function z(e){e[L]=void 0}var Lt=new Set,Rt={};function zt(e,t){Bt(e,t),Bt(e+`Capture`,t)}function Bt(e,t){for(Rt[e]=t,e=0;e<t.length;e++)Lt.add(t[e])}var Vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ht={},Ut={};function Wt(e){return He.call(Ut,e)?!0:He.call(Ht,e)?!1:Vt.test(e)?Ut[e]=!0:(Ht[e]=!0,!1)}var B=!1;function Gt(){var e=B;return B=!1,e}function Kt(e,t,n){if(Wt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function qt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function V(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var $t=/[\n"\\]/g;function en(e){return e.replace($t,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function tn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+V(t)):e.value!==``+V(t)&&(e.value=``+V(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):rn(e,V(n)):o===`number`&&e.value==t?rn(e,V(e.value)):rn(e,V(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+V(s):e.removeAttribute(`name`)}function nn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+V(n),t=t==null?n:``+V(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function rn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function H(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+V(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function an(e,t,n){if(t!=null&&(t=``+V(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+V(n)}function on(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(xe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=V(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var U=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function cn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||U.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function ln(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,B=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(cn(e,a,r),B=!0)}else for(var o in t)t.hasOwnProperty(o)&&cn(e,o,t[o])}function un(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),fn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pn(e){return fn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function mn(){}var hn=null;function gn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,vn=null;function yn(e){var t=Nt(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(tn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+en(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Dt]||null;if(!a)throw Error(i(90));tn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:an(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&H(e,!!n.multiple,t,!1)}}}var bn=!1;function xn(e,t,n){if(bn)return e(t,n);bn=!0;try{return e(t)}finally{if(bn=!1,(_n!==null||vn!==null)&&(Ld(),_n&&(t=_n,e=vn,vn=_n=null,yn(t),e)))for(t=0;t<e.length;t++)yn(e[t])}}function Sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Dt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,W=!1;if(Cn)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){W=!0}}),window.addEventListener(`test`,wn,wn),window.removeEventListener(`test`,wn,wn)}catch{W=!1}var Tn=null,En=null,Dn=null;function On(){if(Dn)return Dn;var e,t=En,n=t.length,r,i=`value`in Tn?Tn.value:Tn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Dn=i.slice(e,1<r?1-r:void 0)}function kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function An(){return!0}function jn(){return!1}function Mn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?An:jn,this.isPropagationStopped=jn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Mn(Nn),Fn=w({},Nn,{view:0,detail:0}),In=Mn(Fn),Ln,Rn,zn,Bn=w({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:K,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==zn&&(zn&&e.type===`mousemove`?(Ln=e.screenX-zn.screenX,Rn=e.screenY-zn.screenY):Rn=Ln=0,zn=e),Ln)},movementY:function(e){return`movementY`in e?e.movementY:Rn}}),Vn=Mn(Bn),Hn=Mn(w({},Bn,{dataTransfer:0})),G=Mn(w({},Fn,{relatedTarget:0})),Un=Mn(w({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=Mn(w({},Nn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Gn=Mn(w({},Nn,{data:0})),Kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jn[e])?!!t[e]:!1}function K(){return Yn}var q=Mn(w({},Fn,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:K,charCode:function(e){return e.type===`keypress`?kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=Mn(w({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=Mn(w({},Nn,{submitter:0})),Qn=Mn(w({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:K})),$n=Mn(w({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=Mn(w({},Bn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=Mn(w({},Nn,{newState:0,oldState:0,source:0})),nr=[9,13,27,32],rr=Cn&&`CompositionEvent`in window,ir=null;Cn&&`documentMode`in document&&(ir=document.documentMode);var ar=Cn&&`TextEvent`in window&&!ir,or=Cn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function pr(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=On(),Dn=En=Tn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!mr[e.type]:t===`textarea`}function gr(e,t,n,r){_n?vn?vn.push(r):vn=[r]:_n=r,t=qf(t,`onChange`),0<t.length&&(n=new Pn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var _r=null,vr=null;function yr(e){Bf(e,0)}function br(e){if(Qt(Pt(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(Cn){var Cr;if(Cn){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){_r&&(_r.detachEvent(`onpropertychange`,Dr),vr=_r=null)}function Dr(e){if(e.propertyName===`value`&&br(vr)){var t=[];gr(t,vr,e,gn(e)),xn(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),_r=t,vr=n,_r.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!He.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,t){var n=Ir(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ir(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Vr=Cn&&`documentMode`in document&&11>=document.documentMode,Hr=null,Ur=null,Wr=null,Gr=!1;function Kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gr||Hr==null||Hr!==Fr(r)||(r=Hr,`selectionStart`in r&&Br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Pr(Wr,r)||(Wr=r,r=qf(Ur,`onSelect`),0<r.length&&(t=new Pn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionrun:qr(`Transition`,`TransitionRun`),transitionstart:qr(`Transition`,`TransitionStart`),transitioncancel:qr(`Transition`,`TransitionCancel`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};Cn&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionrun`),ni=Zr(`transitionstart`),ri=Zr(`transitioncancel`),ii=Zr(`transitionend`),ai=new Map,oi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);oi.push(`scrollEnd`);function si(e,t){ai.set(e,t),zt(t,[e])}var ci=0;function li(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function ui(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function di(e,t){return e=ui(e),t=ui(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var fi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},pi=[],mi=0,hi=0;function gi(){for(var e=mi,t=hi=mi=0;t<e;){var n=pi[t];pi[t++]=null;var r=pi[t];pi[t++]=null;var i=pi[t];pi[t++]=null;var a=pi[t];if(pi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&yi(n,i,a)}}function _i(e,t,n,r){pi[mi++]=e,pi[mi++]=t,pi[mi++]=n,pi[mi++]=r,hi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vi(e,t,n,r){return _i(e,t,n,r),bi(e)}function J(e,t){return _i(e,null,null,t),bi(e)}function yi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-it(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function bi(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xi={};function Si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(e,t,n,r){return new Si(e,t,n,r)}function wi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ti(e,t){var n=e.alternate;return n===null?(n=Ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ei(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Di(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)wi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,De.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case fe:return e=Ci(31,n,t,a),e.elementType=fe,e.lanes=o,e;case re:return Oi(n.children,a,o,t);case ie:s=8,a|=24;break;case ae:return e=Ci(12,n,t,a|2),e.elementType=ae,e.lanes=o,e;case le:return e=Ci(13,n,t,a),e.elementType=le,e.lanes=o,e;case O:return e=Ci(19,n,t,a),e.elementType=O,e.lanes=o,e;case pe:case he:return e=a|32,e=Ci(30,n,t,e),e.elementType=he,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case se:s=10;break a;case oe:s=9;break a;case ce:s=11;break a;case ue:s=14;break a;case de:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Oi(e,t,n,r){return e=Ci(7,e,r,t),e.lanes=n,e}function ki(e,t,n){return e=Ci(6,e,null,t),e.lanes=n,e}function Ai(e){var t=Ci(18,null,null,0);return t.stateNode=e,t}function ji(e,t,n){return t=Ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mi=new WeakMap;function Ni(e,t){if(typeof e==`object`&&e){var n=Mi.get(e);return n===void 0?(t={value:e,source:t,stack:Ve(t)},Mi.set(e,t),t):n}return{value:e,source:t,stack:Ve(t)}}var Pi=[],Fi=0,Ii=null,Li=0,Ri=[],zi=0,Bi=null,Vi=1,Hi=``;function Ui(e,t){Pi[Fi++]=Li,Pi[Fi++]=Ii,Ii=e,Li=t}function Wi(e,t,n){Ri[zi++]=Vi,Ri[zi++]=Hi,Ri[zi++]=Bi,Bi=e;var r=Vi;e=Hi;var i=32-it(r)-1;r&=~(1<<i),n+=1;var a=32-it(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vi=1<<32-it(t)+i|n<<i|r,Hi=a+e}else Vi=1<<a|n<<i|r,Hi=e}function Gi(e){e.return!==null&&(Ui(e,1),Wi(e,1,0))}function Ki(e){for(;e===Ii;)Ii=Pi[--Fi],Pi[Fi]=null,Li=Pi[--Fi],Pi[Fi]=null;for(;e===Bi;)Bi=Ri[--zi],Ri[zi]=null,Hi=Ri[--zi],Ri[zi]=null,Vi=Ri[--zi],Ri[zi]=null}function qi(e,t){Ri[zi++]=Vi,Ri[zi++]=Hi,Ri[zi++]=Bi,Vi=t.id,Hi=t.overflow,Bi=e}var Ji=null,Yi=null,Y=!1,Xi=null,Zi=!1,Qi=Error(i(519));function $i(e){throw aa(Ni(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Qi}function ea(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Et]=e,t[Dt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),nn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),on(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||$i(e,!0)}function ta(e){for(Ji=e.return;Ji;)switch(Ji.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:Ji=Ji.return}}function na(e){if(e!==Ji)return!1;if(!Y)return ta(e),Y=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&Yi&&$i(e),ta(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Yi=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Yi=dm(e)}else t===27?(t=Yi,Sp(e.type)?(e=um,um=null,Yi=e):Yi=t):Yi=Ji?lm(e.stateNode.nextSibling):null;return!0}function ra(){Yi=Ji=null,Y=!1}function ia(){var e=Xi;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),Xi=null),e}function aa(e){Xi===null?Xi=[e]:Xi.push(e)}var oa=Te(null),sa=null,ca=null;function la(e,t,n){Ee(oa,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=oa.current,j(oa)}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function fa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),da(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),da(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),da(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function pa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Nr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ae.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&fa(t,e,n,r),t.flags|=262144,e!==null}function ma(e){for(e=e.firstContext;e!==null;){if(!Nr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){sa=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return va(sa,e)}function _a(e,t){return sa===null&&ha(e),va(e,t)}function va(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ca===null){if(e===null)throw Error(i(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return n}var ya=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ba=t.unstable_scheduleCallback,xa=t.unstable_NormalPriority,Sa={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function X(){return{controller:new ya,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&ba(xa,function(){e.controller.abort()})}function wa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ta=null;function Ea(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Da=null,Oa=0,ka=0,Aa=null;function ja(e,t){if(Da===null){var n=Da=[];Oa=0,ka=Nf(),Aa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Oa++,t.then(Ma,Ma),t}function Ma(){if(--Oa===0&&(Ta=null,Da!==null)){Aa!==null&&(Aa.status=`fulfilled`);var e=Da;Da=null,ka=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Na(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Pa=k.S;k.S=function(e,t){if(pd=qe(),typeof t==`object`&&t&&typeof t.then==`function`&&ja(e,t),Ta!==null)for(var n=yf;n!==null;)wa(n,Ta),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)wa(r,n),r=r.next;if(ka!==0){r=Ta,r===null&&(r=Ta=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Pa!==null&&Pa(e,t)};var Fa=Te(null);function Ia(){var e=Fa.current;return e===null?Yu.pooledCache:e}function La(e,t){t===null?Ee(Fa,Fa.current):Ee(Fa,t.pool)}function Ra(){var e=Ia();return e===null?null:{parent:Sa._currentValue,pool:e}}var za=Error(i(460)),Ba=Error(i(474)),Va=Error(i(542)),Ha={then:function(){}};function Ua(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(mn,mn);else{if(e=Yu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e}throw Ka=t,za}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ka=e,za):e}}var Ka=null;function qa(){if(Ka===null)throw Error(i(459));var e=Ka;return Ka=null,e}function Ja(e){if(e===za||e===Va)throw Error(i(483))}var Ya=null,Xa=0;function Za(e){var t=Xa;return Xa+=1,Ya===null&&(Ya=[]),Wa(Ya,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function $a(e,t){throw t.$$typeof===T?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function eo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ti(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ki(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===re?(e=d(e,t,n.props.children,r,n.key),Qa(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===de&&Ga(i)===t.type)?(t=a(t,n.props),Qa(t,n),t.return=e,t):(t=Di(n.type,n.key,n.props,null,e.mode,r),Qa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ji(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Oi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ki(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case E:return n=Di(t.type,t.key,t.props,null,e.mode,n),Qa(n,t),n.return=e,n;case D:return t=ji(t,e.mode,n),t.return=e,t;case de:return t=Ga(t),f(e,t,n)}if(xe(t)||ve(t))return t=Oi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Za(t),n);if(t.$$typeof===se)return f(e,_a(e,t),n);$a(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case E:return n.key===i?l(e,t,n,r):null;case D:return n.key===i?u(e,t,n,r):null;case de:return n=Ga(n),p(e,t,n,r)}if(xe(n)||ve(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Za(n),r);if(n.$$typeof===se)return p(e,t,_a(e,n),r);$a(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case E:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case D:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case de:return r=Ga(r),m(e,t,n,r,i)}if(xe(r)||ve(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Za(r),i);if(r.$$typeof===se)return m(e,t,n,_a(t,r),i);$a(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Y&&Ui(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Y&&Ui(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Y&&Ui(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Y&&Ui(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Y&&Ui(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Y&&Ui(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===re&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case E:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===re){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),Qa(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===de&&Ga(l)===r.type){n(e,r.sibling),c=a(r,o.props),Qa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===re?(c=Oi(o.props.children,e.mode,c,o.key),Qa(c,o),c.return=e,e=c):(c=Di(o.type,o.key,o.props,null,e.mode,c),Qa(c,o),c.return=e,e=c)}return s(e);case D:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ji(o,e.mode,c),c.return=e,e=c}return s(e);case de:return o=Ga(o),_(e,r,o,c)}if(xe(o))return h(e,r,o,c);if(ve(o)){if(l=ve(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Za(o),c);if(o.$$typeof===se)return _(e,r,_a(e,o),c);$a(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ki(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Xa=0;var i=_(e,t,n,r);return Ya=null,i}catch(t){if(t===za||t===Va)throw t;var a=Ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var to=eo(!0),no=eo(!1),ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ju&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=bi(e),yi(e,null,n),t}return _i(e,r,t,n),bi(e)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uo=!1;function fo(){if(uo){var e=Aa;if(e!==null)throw e}}function po(e,t,n,r){uo=!1;var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Xu&f)===f:(r&f)===f){f!==0&&f===ka&&(uo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:ro=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function mo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ho(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mo(n[e],t)}var go=Te(null),_o=Te(0);function vo(e,t){e=nd,Ee(_o,e),Ee(go,t),nd=e|t.baseLanes}function yo(){Ee(_o,nd),Ee(go,go.current)}function bo(){nd=_o.current,j(go),j(_o)}var xo=Te(null),So=null;function Co(e){var t=e.alternate;Ee(Oo,Oo.current&1),Ee(xo,e),So===null&&(t===null||go.current!==null||t.memoizedState!==null)&&(So=e)}function wo(e){Ee(Oo,Oo.current),Ee(xo,e),So===null&&(So=e)}function To(e){e.tag===22?(Ee(Oo,Oo.current),Ee(xo,e),So===null&&(So=e)):Eo()}function Eo(){Ee(Oo,Oo.current),Ee(xo,xo.current)}function Do(e){j(xo),So===e&&(So=null),j(Oo)}var Oo=Te(0);function ko(e,t){Ee(xo,xo.current),Ee(Oo,t)}function Ao(e){j(Oo),j(xo),So===e&&(So=null)}function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=0,Z=null,No=null,Po=null,Fo=!1,Io=!1,Lo=!1,Ro=0,zo=0,Bo=null,Vo=0;function Ho(){throw Error(i(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Wo(e,t,n,r,i,a){return Mo=a,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?sc:cc,Lo=!1,a=n(r,i),Lo=!1,Io&&(a=Ko(t,n,r,i)),Go(e),a}function Go(e){k.H=oc;var t=No!==null&&No.next!==null;if(Mo=0,Po=No=Z=null,Fo=!1,zo=0,Bo=null,t)throw Error(i(300));e===null||Tc||(e=e.dependencies,e!==null&&ma(e)&&(Tc=!0))}function Ko(e,t,n,r){Z=e;var a=0;do{if(Io&&(Bo=null),zo=0,Io=!1,25<=a)throw Error(i(301));if(a+=1,Po=No=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=lc,o=t(n,r)}while(Io);return o}function qo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?es(t):t,e=e.useState()[0],(No===null?null:No.memoizedState)!==e&&(Z.flags|=1024),t}function Jo(){var e=Ro!==0;return Ro=0,e}function Yo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xo(e){if(Fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fo=!1}Mo=0,Po=No=Z=null,Io=!1,zo=Ro=0,Bo=null}function Zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Po===null?Z.memoizedState=Po=e:Po=Po.next=e,Po}function Qo(){if(No===null){var e=Z.alternate;e=e===null?null:e.memoizedState}else e=No.next;var t=Po===null?Z.memoizedState:Po.next;if(t!==null)Po=t,No=e;else{if(e===null)throw Z.alternate===null?Error(i(467)):Error(i(310));No=e,e={memoizedState:No.memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},Po===null?Z.memoizedState=Po=e:Po=Po.next=e}return Po}function $o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(e){var t=zo;return zo+=1,Bo===null&&(Bo=[]),e=Wa(Bo,e,t),t=Z,(Po===null?t.memoizedState:Po.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?sc:cc),e}function ts(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return es(e);if(e.$$typeof===ge)return;if(e.$$typeof===se)return ga(e)}throw Error(i(438,String(e)))}function ns(e){var t=null,n=Z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=$o(),Z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=me;return t.index++,n}function rs(e,t){return typeof t==`function`?t(e):t}function is(e){return as(Qo(),No,e)}function as(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Mo&f)===f:(Xu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ka&&(d=!0);else if((Mo&p)===p){u=u.next,p===ka&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Z.lanes|=p,id|=p;f=u.action,Lo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Z.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Nr(o,e.memoizedState)&&(Tc=!0,d&&(n=Aa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function os(e){var t=Qo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(Tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(e,t,n){var r=Z,a=Qo(),o=Y;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Nr((No||a).memoizedState,n);if(s&&(a.memoizedState=n,Tc=!0),a=a.queue,Ms(us.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Po!==null&&!!(Po.memoizedState.tag&1),Ds(e?9:8,{destroy:void 0},ls.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Yu===null)throw Error(i(349));o||Mo&127||cs(r,t,n)}return n}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t=$o(),Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ls(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&fs(e)}function us(e,t,n){return n(function(){ds(t)&&fs(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function fs(e){var t=J(e,2);t!==null&&Md(t,e,2)}function ps(e){var t=Zo();if(typeof e==`function`){var n=e;if(e=n(),Lo){M(!0);try{n()}finally{M(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t}function ms(e,t,n,r){return e.baseState=n,as(e,No,typeof r==`function`?r:rs)}function hs(e,t,n,r,a){if(rc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,gs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function gs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};o.types=a===null?null:a.types,k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),_s(e,t,s)}catch(n){ys(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),_s(e,t,a)}catch(n){ys(e,t,n)}}function _s(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){vs(e,t,n)},function(n){return ys(e,t,n)}):vs(e,t,n)}function vs(e,t,n){t.status=`fulfilled`,t.value=n,bs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gs(e,n)))}function ys(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,bs(t),t=t.next;while(t!==r)}e.action=null}function bs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xs(e,t){return t}function Ss(e,t){if(Y){var n=Yu.formState;if(n!==null){a:{var r=Z;if(Y){if(Yi){b:{for(var i=Yi,a=Zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Yi=lm(i.nextSibling),r=i.data===`F!`;break a}}$i(r)}r=!1}r&&(t=n[0])}}return n=Zo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},n.queue=r,n=ec.bind(null,Z,r),r.dispatch=n,r=ps(!1),a=nc.bind(null,Z,!1,r.queue),r=Zo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=hs.bind(null,Z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Cs(e){return ws(Qo(),No,e)}function ws(e,t,n){if(t=as(e,t,xs)[0],e=is(rs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=es(t)}catch(e){throw e===za?Va:e}else r=t;t=Qo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Z.flags|=2048,Ds(9,{destroy:void 0},Ts.bind(null,i,n),null)),[r,a,e]}function Ts(e,t){e.action=t}function Es(e){var t=Qo(),n=No;if(n!==null)return ws(t,n,e);Qo(),t=t.memoizedState,n=Qo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Z.updateQueue,t===null&&(t=$o(),Z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Os(){return Qo().memoizedState}function ks(e,t,n,r){var i=Zo();Z.flags|=e,i.memoizedState=Ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function As(e,t,n,r){var i=Qo();r=r===void 0?null:r;var a=i.memoizedState.inst;No!==null&&r!==null&&Uo(r,No.memoizedState.deps)?i.memoizedState=Ds(t,a,n,r):(Z.flags|=e,i.memoizedState=Ds(1|t,a,n,r))}function js(e,t){ks(8390656,8,e,t)}function Ms(e,t){As(2048,8,e,t)}function Ns(e){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=$o(),Z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ps(e){var t=Qo().memoizedState;return Ns({ref:t,nextImpl:e}),function(){if(Ju&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Fs(e,t){return As(4,2,e,t)}function Is(e,t){return As(4,4,e,t)}function Ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rs(e,t,n){n=n==null?null:n.concat([e]),As(4,4,Ls.bind(null,t,e),n)}function zs(){}function Bs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Uo(t,r[1]))return r[0];if(r=e(),Lo){M(!0);try{e()}finally{M(!1)}}return n.memoizedState=[r,t],r}function Hs(e,t,n){return n===void 0||Mo&1073741824&&!(Xu&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),Z.lanes|=e,id|=e,n)}function Us(e,t,n,r){return Nr(n,t)?n:go.current===null?!(Mo&106)||Mo&1073741824&&!(Xu&261930)?(Tc=!0,e.memoizedState=n):(e=Ad(),Z.lanes|=e,id|=e,t):(e=Hs(e,n,r),Nr(e,t)||(Tc=!0),e)}function Ws(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};s.types=o===null?null:o.types,k.T=s,nc(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?tc(e,t,Na(c,r),kd(e)):tc(e,t,r,kd(e))}catch(n){tc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Gs(){}function Ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=qs(e).queue;Ws(e,a,t,Se,n===null?Gs:function(){return Js(e),n(r)})}function qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:Se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Js(e){var t=qs(e);t.next===null&&(t=e.alternate.memoizedState),tc(e,t.next.queue,{},kd())}function Ys(){return ga(sh)}function Xs(){return Qo().memoizedState}function Zs(){return Qo().memoizedState}function Qs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=oo(n);var r=so(t,e,n);r!==null&&(Md(r,t,n),co(r,t,n)),t={cache:X()},e.payload=t;return}t=t.return}}function $s(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e)?ic(t,n):(n=vi(e,t,n,r),n!==null&&(Md(n,e,r),ac(n,t,r)))}function ec(e,t,n){tc(e,t,n,kd())}function tc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o))return _i(e,t,i,0),Yu===null&&gi(),!1}catch{}if(n=vi(e,t,i,r),n!==null)return Md(n,e,r),ac(n,t,r),!0}return!1}function nc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(t)throw Error(i(479))}else t=vi(e,n,r,2),t!==null&&Md(t,e,2)}function rc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ic(e,t){Io=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yt(e,n)}}var oc={readContext:ga,use:ts,useCallback:Ho,useContext:Ho,useEffect:Ho,useImperativeHandle:Ho,useLayoutEffect:Ho,useInsertionEffect:Ho,useMemo:Ho,useReducer:Ho,useRef:Ho,useState:Ho,useDebugValue:Ho,useDeferredValue:Ho,useTransition:Ho,useSyncExternalStore:Ho,useId:Ho,useHostTransitionStatus:Ho,useFormState:Ho,useActionState:Ho,useOptimistic:Ho,useMemoCache:Ho,useCacheRefresh:Ho,useEffectEvent:Ho},sc={readContext:ga,use:ts,useCallback:function(e,t){return Zo().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:js,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ks(4194308,4,Ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){ks(4,2,e,t)},useMemo:function(e,t){var n=Zo();t=t===void 0?null:t;var r=e();if(Lo){M(!0);try{e()}finally{M(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Zo();if(n!==void 0){var i=n(t);if(Lo){M(!0);try{n(t)}finally{M(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=$s.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Zo();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,n=ec.bind(null,Z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zs,useDeferredValue:function(e,t){return Hs(Zo(),e,t)},useTransition:function(){var e=ps(!1);return e=Ws.bind(null,Z,e.queue,!0,!1),Zo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Z,a=Zo();if(Y){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Yu===null)throw Error(i(349));Xu&127||cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,js(us.bind(null,r,o,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},ls.bind(null,r,o,n,t),null),n},useId:function(){var e=Zo(),t=Yu.identifierPrefix;if(Y){var n=Hi,r=Vi;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ro++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ys,useFormState:Ss,useActionState:Ss,useOptimistic:function(e){var t=Zo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,Z,!0,n),n.dispatch=t,[e,t]},useMemoCache:ns,useCacheRefresh:function(){return Zo().memoizedState=Qs.bind(null,Z)},useEffectEvent:function(e){var t=Zo(),n={impl:e};return t.memoizedState=n,function(){if(Ju&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:ga,use:ts,useCallback:Bs,useContext:ga,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:is,useRef:Os,useState:function(){return is(rs)},useDebugValue:zs,useDeferredValue:function(e,t){return Us(Qo(),No.memoizedState,e,t)},useTransition:function(){var e=is(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){return ms(Qo(),No,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps},lc={readContext:ga,use:ts,useCallback:Bs,useContext:ga,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:os,useRef:Os,useState:function(){return os(rs)},useDebugValue:zs,useDeferredValue:function(e,t){var n=Qo();return No===null?Hs(n,e,t):Us(n,No.memoizedState,e,t)},useTransition:function(){var e=os(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){var n=Qo();return No===null?(n.baseState=e,[e,n.queue.dispatch]):ms(n,No,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps};function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=oo(r);i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Md(t,e,r),co(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=oo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Md(t,e,r),co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=oo(n);r.tag=2,t!=null&&(r.callback=t),t=so(e,r,n),t!==null&&(Md(t,e,n),co(t,e,n))}};function fc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function mc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function hc(e){fi(e)}function gc(e){console.error(e)}function _c(e){fi(e)}function vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function yc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){return n=oo(n),n.tag=3,n.payload={element:null},n.callback=function(){vc(e,t)},n}function xc(e){return e=oo(e),e.tag=3,e}function Sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){yc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){yc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&pa(t,n,a,!0),n=xo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return So===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(Y)return t=xo.current,t===null?(r!==Qi&&(t=Error(i(423),{cause:r}),aa(Ni(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ni(r,n),a=bc(e.stateNode,r,a),lo(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Qi&&(e=Error(i(422),{cause:r}),aa(Ni(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ni(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Ni(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=bc(n.stateNode,r,e),lo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=xc(a),Sc(a,e,n,r),lo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wc=Error(i(461)),Tc=!1;function Ec(e,t,n,r){t.child=e===null?no(t,null,n,r):to(t,e.child,n,r)}function Dc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ha(t),r=Wo(e,t,n,o,a,i),s=Jo(),e!==null&&!Tc?(Yo(e,t,i),tl(e,t,i)):(Y&&s&&Gi(t),t.flags|=1,Ec(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!wi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kc(e,t,a,r,i)):(e=Di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!nl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return tl(e,t,i)}return t.flags|=1,e=Ti(a,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref){if(Tc=!1,t.pendingProps=r=a,nl(e,i))e.flags&131072&&(Tc=!0);else return t.lanes=e.lanes,tl(e,t,i)}}return Lc(e,t,n,r,i)}function Ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&La(t,a===null?null:a.cachePool),a===null?yo():vo(t,a),To(t);else return r=t.lanes=536870912,Mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&La(t,null),yo(),Eo()):(La(t,a.cachePool),vo(t,a),Eo(),t.memoizedState=null);return Ec(e,t,i,n),t.child}function jc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mc(e,t,n,r,i){var a=Ia();return a=a===null?null:{parent:Sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&La(t,null),yo(),To(t),e!==null&&pa(e,t,r,!0),t.childLanes=i,null}function Nc(e,t){return t=Kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pc(e,t,n){return to(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,Do(t),t.memoizedState=null,e}function Fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Y){if(r.mode===`hidden`)return e=Nc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jc(null,e);if(wo(t),(e=Yi)?(e=am(e,Zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi===null?null:{id:Vi,overflow:Hi},retryLane:536870912,hydrationErrors:null},n=Ai(e),n.return=t,t.child=n,Ji=t,Yi=null)):e=null,e===null)throw $i(t);return t.lanes=536870912,null}return Nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(wo(t),a){if(t.flags&256)t.flags&=-257,t=Pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Tc||pa(e,t,n,!1),a=(n&e.childLanes)!==0,Tc||a){if(go.current===null){if(r=Yu,r!==null&&(s=bt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,J(e,s),Md(r,e,s),wc;Wd()}t=Pc(e,t,n)}else e=o.treeContext,Yi=lm(s.nextSibling),Ji=t,Y=!0,Xi=null,Zi=!1,e!==null&&qi(t,e),t=Nc(t,r),t.flags|=134221824;return t}return e=Ti(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lc(e,t,n,r,i){return ha(t),n=Wo(e,t,n,r,void 0,i),r=Jo(),e!==null&&!Tc?(Yo(e,t,i),tl(e,t,i)):(Y&&r&&Gi(t),t.flags|=1,Ec(e,t,n,i),t.child)}function Rc(e,t,n,r,i,a){return ha(t),t.updateQueue=null,n=Ko(t,r,n,i),Go(e),r=Jo(),e!==null&&!Tc?(Yo(e,t,a),tl(e,t,a)):(Y&&r&&Gi(t),t.flags|=1,Ec(e,t,n,a),t.child)}function zc(e,t,n,r,i){if(ha(t),t.stateNode===null){var a=xi,o=n.contextType;typeof o==`object`&&o&&(a=ga(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},io(t),o=n.contextType,a.context=typeof o==`object`&&o?ga(o):xi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(uc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&dc.enqueueReplaceState(a,a.state,null),po(t,r,a,i),fo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=mc(n,s);a.props=c;var l=a.context,u=n.contextType;o=xi,typeof u==`object`&&u&&(o=ga(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&pc(t,a,r,o),ro=!1;var f=t.memoizedState;a.state=f,po(t,r,a,i),fo(),l=t.memoizedState,s||f!==l||ro?(typeof d==`function`&&(uc(t,n,d,r),l=t.memoizedState),(c=ro||fc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ao(e,t),o=t.memoizedProps,u=mc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=xi,typeof l==`object`&&l&&(c=ga(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&pc(t,a,r,c),ro=!1,f=t.memoizedState,a.state=f,po(t,r,a,i),fo();var p=t.memoizedState;o!==d||f!==p||ro||e!==null&&e.dependencies!==null&&ma(e.dependencies)?(typeof s==`function`&&(uc(t,n,s,r),p=t.memoizedState),(u=ro||fc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ma(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ic(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=to(t,e.child,null,i),t.child=to(t,null,n,i)):Ec(e,t,n,i),t.memoizedState=a.state,e=t.child):e=tl(e,t,i),e}function Bc(e,t,n,r){return ra(),t.flags|=256,Ec(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:Ra()}}function Uc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Wc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Oo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Y){if(i?Co(t):Eo(),(e=Yi)?(e=am(e,Zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Bi===null?null:{id:Vi,overflow:Hi},retryLane:536870912,hydrationErrors:null},n=Ai(e),n.return=t,t.child=n,Ji=t,Yi=null)):e=null,e===null)throw $i(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Eo(),i=t.mode,a=Kc({mode:`hidden`,children:a},i),r=Oi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Hc(n),r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(null,r)):(Co(t),Gc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Jc(e,t,a,o,r,c,s,n)}return i?(Eo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ti(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Oi(i,a,n,null),i.flags|=2):i=Ti(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,jc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Hc(n):(a=i.cachePool,a===null?a=Ra():(s=Sa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(e.child,r)):(Co(t),n=e.child,e=n.sibling,n=Ti(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=Kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Kc(e,t){return e=Ci(22,e,null,t),e.lanes=0,e}function qc(e,t,n){return to(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Co(t),t.flags&=-257,qc(e,t,c)):t.memoizedState===null?(Eo(),o=a.fallback,s=t.mode,a=Kc({mode:`visible`,children:a.children},s),o=Oi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,to(t,e.child,null,c),a=t.child,a.memoizedState=Hc(c),a.childLanes=Uc(e,r,c),t.memoizedState=Vc,jc(null,a)):(Eo(),t.child=e.child,t.flags|=128,null);if(Co(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,aa({value:a,source:null,stack:null})),qc(e,t,c)}if(Tc||pa(e,t,c,!1),r=(c&e.childLanes)!==0,Tc||r){if(go.current!==null)return qc(e,t,c);if(r=Yu,r!==null&&(a=bt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,J(e,a),Md(r,e,a),wc;return om(o)||Wd(),qc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Yi=lm(o.nextSibling),Ji=t,Y=!0,Xi=null,Zi=!1,e!==null&&qi(t,e),t=Gc(t,a.children),t.flags|=134221824,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function Xc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&jo(n)===null&&(t=e),e=e.sibling}return t}function Zc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Qc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function $c(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Oo.current;if(t.flags&128)return ko(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ko(t,o),i===`backwards`&&e!==null?(Qc(e),Ec(e,t,r,n),Qc(e)):Ec(e,t,r,n),r=Y?Li:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Qc(t)),Zc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zc(t,!0,n,null,a,r);break;case`together`:Zc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zc(t,!1,i,n,a,r)}return t.child}function el(e,t,n){var r=t.pendingProps;return la(t,t.type,r.value),Ec(e,t,r.children,n),t.child}function tl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ti(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ti(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ma(e)))}function rl(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),la(t,Sa,e.memoizedState.cache),ra();break;case 27:case 5:Ne(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Co(t),t.flags|=128,null;r=pa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Wc(e,t,n):(Co(t),e=tl(e,t,n),e===null?null:e.sibling)}Co(t);break;case 19:if(t.flags&128)return $c(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(pa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return $c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ko(t,Oo.current),r)break;return null;case 22:return t.lanes=0,Ac(e,t,n,t.pendingProps);case 24:la(t,Sa,e.memoizedState.cache)}return tl(e,t,n)}function il(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Tc=!0;else{if(!nl(e,n)&&!(t.flags&128))return Tc=!1,rl(e,t,n);Tc=!!(e.flags&131072)}}else Tc=!1,Y&&t.flags&1048576&&Wi(t,Li,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e==`function`)wi(e)?(r=mc(e,r),t.tag=1,t=zc(null,t,e,r,n)):(t.tag=0,t=Lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ce){t.tag=11,t=Dc(null,t,e,r,n);break a}if(a===ue){t.tag=14,t=Oc(null,t,e,r,n);break a}if(a===se){t.tag=10,t.type=e,t=el(null,t,n);break a}}throw t=be(e)||e,Error(i(306,t,``))}}return t;case 0:return Lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=mc(r,t.pendingProps),zc(e,t,r,a,n);case 3:a:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ao(e,t),po(t,r,null,n);var s=t.memoizedState;if(r=s.cache,la(t,Sa,r),r!==o.cache&&fa(t,[Sa],n,!0),fo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Bc(e,t,r,n);break a}if(r!==a){a=Ni(Error(i(424)),t),aa(a),t=Bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Yi=lm(e.firstChild),Ji=t,Y=!0,Xi=null,Zi=!0,n=no(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ra(),r===a){t=tl(e,t,n);break a}Ec(e,t,r,n)}t=t.child}return t;case 26:return Ic(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Y||(t.stateNode=fp(t.type,t.pendingProps,ke.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ne(t),e===null&&Y&&(r=t.stateNode=hm(t.type,t.pendingProps,ke.current),Ji=t,Zi=!0,a=Yi,Sp(t.type)?(um=a,Yi=lm(r.firstChild)):Yi=a),Ec(e,t,t.pendingProps.children,n),Ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Y&&((a=r=Yi)&&(r=rm(r,t.type,t.pendingProps,Zi),r===null?a=!1:(t.stateNode=r,Ji=t,Yi=lm(r.firstChild),Zi=!1,a=!0)),a||$i(t)),Ne(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Wo(e,t,qo,null,null,n),sh._currentValue=a),Ic(e,t),Ec(e,t,r,n),t.child;case 6:return e===null&&Y&&((e=n=Yi)&&(n=im(n,t.pendingProps,Zi),n===null?e=!1:(t.stateNode=n,Ji=t,Yi=null,e=!0)),e||$i(t)),null;case 13:return Wc(e,t,n);case 4:return je(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=to(t,null,r,n):Ec(e,t,r,n),t.child;case 11:return Dc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Ic(e,t),Ec(e,t,r,n),t.child;case 8:return Ec(e,t,t.pendingProps.children,n),t.child;case 12:return Ec(e,t,t.pendingProps.children,n),t.child;case 10:return el(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ha(t),a=ga(a),r=r(a),t.flags|=1,Ec(e,t,r,n),t.child;case 14:return Oc(e,t,t.type,t.pendingProps,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 19:return $c(e,t,n);case 31:return Fc(e,t,n);case 22:return Ac(e,t,n,t.pendingProps);case 24:return ha(t),r=ga(Sa),e===null?(a=Ia(),a===null&&(a=Yu,o=X(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},io(t),la(t,Sa,a)):((e.lanes&n)!==0&&(ao(e,t),po(t,null,null,n),fo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,la(t,Sa,r),r!==a.cache&&fa(t,[Sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),la(t,Sa,r))),Ec(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Y&&Gi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Ic(e,t),Ec(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function al(e){e.flags|=4}function ol(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Ka=Ha,Ba}}else e.flags&=-16777217}function sl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Ka=Ha,Ba}}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:mt(),e.lanes|=t,cd|=t)}function ll(e,t){if(!Y)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ul(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dl(e,t,n){var r=t.pendingProps;switch(Ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ul(t),null;case 1:return ul(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ua(Sa),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(na(t)?al(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ia())),ul(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(al(t),o===null?(ul(t),ol(t,a,null,r,n)):(ul(t),sl(t,o))):o?o===e.memoizedState?(ul(t),t.flags&=-16777217):(al(t),ul(t),sl(t,o)):(e=e.memoizedProps,e!==r&&al(t),ul(t),ol(t,a,e,r,n)),null;case 27:if(Pe(t),n=ke.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}e=De.current,na(t)?ea(t,e):(e=hm(a,r,n),t.stateNode=e,al(t))}return ul(t),t.subtreeFlags&=-33554433,null;case 5:if(Pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}if(o=De.current,na(t))ea(t,o);else{var s=lp(ke.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Et]=t,o[Dt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&al(t)}}return ul(t),t.subtreeFlags&=-33554433,ol(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ke.current,na(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ji,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Et]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||$i(t,!0)}else e=lp(e).createTextNode(r),e[Et]=t,t.stateNode=e}return ul(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=na(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Et]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),e=!1}else n=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Do(t),t):(Do(t),null);if(t.flags&128)throw Error(i(558))}return ul(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=na(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Et]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),a=!1}else a=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Do(t),t):(Do(t),null)}return Do(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cl(t,t.updateQueue),ul(t),null);case 4:return Me(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,ul(t),null;case 10:return ua(t.type),ul(t),null;case 19:if(Ao(t),r=t.memoizedState,r===null)return ul(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ll(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=jo(e),o!==null){for(t.flags|=128,ll(r,!1),e=o.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ei(n,e),n=n.sibling;return ko(t,Oo.current&1|2),Y&&Ui(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&qe()>md&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}}else{if(!a){if(e=jo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),ll(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Y)return ul(t),null}else 2*qe()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=qe(),e.sibling=null,o=Oo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Y?ko(t,o):(n=o,Ee(xo,t),Ee(Oo,n),So===null&&(So=t)),Y&&Ui(t,r.treeForkCount),e}return ul(t),null;case 22:case 23:return Do(t),bo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ul(t),t.subtreeFlags&6&&(t.flags|=8192)):ul(t),n=t.updateQueue,n!==null&&cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(Fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(Sa),ul(t),null;case 25:return null;case 30:return t.flags|=33554432,ul(t),null}throw Error(i(156,t.tag))}function fl(e,t){switch(Ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(Sa),Me(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pe(t),null;case 31:if(t.memoizedState!==null){if(Do(t),t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Do(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ao(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Me(),null;case 10:return ua(t.type),null;case 22:case 23:return Do(t),bo(),e!==null&&j(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(Sa),null;case 25:return null;default:return null}}function pl(e,t){switch(Ki(t),t.tag){case 3:ua(Sa),Me();break;case 26:case 27:case 5:Pe(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&Do(t);break;case 13:Do(t);break;case 19:Ao(t);break;case 10:ua(t.type);break;case 22:case 23:Do(t),bo(),e!==null&&j(Fa);break;case 24:ua(Sa)}}function ml(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function hl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function gl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ho(t,n)}catch(t){ff(e,e.return,t)}}}function _l(e,t,n){n.props=mc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=li(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function yl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function bl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function xl(e){for(var t=e.return;t!==null&&(wl(t)&&em(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Sl(e){for(var t=e.return;t!==null&&(wl(t)&&tm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Cl(e){return e.tag===5||e.tag===3||e.tag===27}function wl(e){return e&&e.tag===7&&e.stateNode!==null}function Tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function El(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Dt]=t}catch(t){ff(e,e.return,t)}}function Dl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Ol(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn)),bl(e,r),B=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(kl(e,t,n,r),e=e.sibling;e!==null;)kl(e,t,n,r),e=e.sibling}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),bl(e,r),B=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Et]=e,t[Dt]=n}catch(t){ff(e,e.return,t)}}var Ml=!1,Nl=null;function Pl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ml=!0)}var Fl=null;function Il(){var e=Fl;return Fl=null,e}var Ll=0;function Rl(e,t,n,r,i){return Ll=0,zl(e.child,t,n,r,i)}function zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Ml=!0,Tp(o,Ll===0?t:t+`_`+Ll,n),Ll++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||zl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Bl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Bl(e.child,t)),e=e.sibling}function Vl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=di(t.default,t.share),t!==`none`&&(Rl(e,n,t,null,!1)||Bl(e.child,!1))}e=e.sibling}}function Hl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=li(r,n),a=di(r.default,n.paired?r.share:r.enter);a===`none`?Vl(e):Rl(e,i,a,null,!1)?(Vl(e),n.paired||t||jd(e,r.onEnter)):Bl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Hl(e,t),e=e.sibling;else Vl(e)}function Ul(e){if(Nl!==null&&Nl.size!==0){var t=Nl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=di(n.default,n.share);if(a!==`none`&&(Rl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Bl(e.child,!1)),t.delete(r),t.size===0)break}}}Ul(e)}e=e.sibling}}}function Wl(e){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode),r=Nl===null?void 0:Nl.get(n),i=di(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Rl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Nl.delete(n),jd(e,t.onShare)):Bl(e.child,!1)),Nl!==null&&Ul(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Wl(e),e=e.sibling;else Nl!==null&&Ul(e)}function Gl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode);t=di(t.default,t.update),e.flags&=-5,t!==`none`&&Rl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Gl(e);e=e.sibling}}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Bl(e.child,!1))}Kl(e)}e=e.sibling}}function ql(e){if(e.tag===30)e.stateNode.paired=null,Bl(e.child,!1),Kl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Kl(e)}function Jl(e){for(e=e.child;e!==null;)e.tag===30?Bl(e.child,!1):e.subtreeFlags&33554432&&Jl(e),e=e.sibling}function Yl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ll<a.length){var l=a[Ll],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Ll===0?n:n+`_`+Ll,i),s&&e.flags&4||(Fl===null&&(Fl=[]),Fl.push(c,Ll===0?r:r+`_`+Ll,t.memoizedProps)),Ll++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Yl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Xl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=li(n,r),a=di(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ll=0,i=Yl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Xl(e,t);e=e.sibling}}var Zl=!1,Ql=!1,$l=!1,eu=!1,tu=typeof WeakSet==`function`?WeakSet:Set,nu=null,ru=!1,iu=!1,au=!1,ou=!1;function su(e,t,n){if(e=e.containerInfo,sp=gh,e=zr(e),Br(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,nu=t,t=n?9270:1024;nu!==null;){if(e=nu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Wl(r[a]);if(e.alternate===null&&e.flags&2)n&&Pl(e),cu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Wl(r),cu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Pl(e),cu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,nu=r):(n&&Gl(e),cu(n))}}Nl=null}function cu(e){for(;nu!==null;){var t=nu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=mc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=li(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=di(a.default,a.update),a!==`none`&&Rl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,nu=r;break}nu=t.return}}function lu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ku(e,n),r&4&&ml(5,n);break;case 1:if(ku(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=mc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&gl(n),r&512&&vl(n,n.return);break;case 3:if(ku(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ho(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&jl(n);case 26:case 5:ku(e,n),t===null&&r&4&&Tl(n),r&512&&vl(n,n.return);break;case 12:ku(e,n);break;case 31:ku(e,n),r&4&&vu(e,n);break;case 13:ku(e,n),r&4&&yu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Zl,!r){var a=t!==null&&t.memoizedState!==null||Ql;t=Zl,i=Ql,Zl=r,(Ql=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),ju(e,n,r)):ku(e,n),Zl=t,Ql=i}break;case 30:ku(e,n),r&512&&vl(n,n.return);break;case 7:r&512&&vl(n,n.return);default:ku(e,n)}}function uu(e,t){for(e=e.child;e!==null;)du(e,t),e=e.sibling}function du(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}fu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,B=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&uu(e,t);break;default:uu(e,t)}}function fu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:du(n,r);break a;case 22:n.memoizedState===null&&fu(n,r);break a;default:fu(n,r)}}e=e.sibling}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&R(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mu=null,hu=!1;function gu(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount==`function`)try{rt.onCommitFiberUnmount(nt,n)}catch{}switch(n.tag){case 26:Ql||yl(n,t),gu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ql&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ql||yl(n,t),Sl(n);var r=mu,i=hu;Sp(n.type)&&(mu=n.stateNode,hu=!1),gu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),mu=r,hu=i;break;case 5:Ql||yl(n,t),Sl(n);case 6:if(n.tag===6&&Sl(n),r=mu,i=hu,mu=null,gu(e,t,n),mu=r,hu=i,mu!==null){if(hu)try{(mu.nodeType===9?mu.body:mu.nodeName===`HTML`?mu.ownerDocument.body:mu).removeChild(n.stateNode),B=!0}catch(e){ff(n,t,e)}else try{mu.removeChild(n.stateNode),B=!0}catch(e){ff(n,t,e)}}break;case 18:mu!==null&&(hu?(e=mu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(mu,n.stateNode));break;case 4:r=mu,i=hu,mu=n.stateNode.containerInfo,hu=!0,gu(e,t,n),mu=r,hu=i;break;case 0:case 11:case 14:case 15:hl(2,n,t),Ql||hl(4,n,t),gu(e,t,n);break;case 1:Ql||(yl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&_l(n,t,r)),gu(e,t,n);break;case 21:gu(e,t,n);break;case 22:Ql=(r=Ql)||n.memoizedState!==null,gu(e,t,n),Ql=r;break;case 30:yl(n,t),gu(e,t,n);break;case 7:Ql||yl(n,t),gu(e,t,n);break;default:gu(e,t,n)}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function bu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tu),t;default:throw Error(i(435,e.tag))}}function xu(e,t){var n=bu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Su(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){mu=l.stateNode,hu=!1;break a}break;case 5:mu=l.stateNode,hu=!1;break a;case 3:case 4:mu=l.stateNode.containerInfo,hu=!0;break a}l=l.return}if(mu===null)throw Error(i(160));_u(s,c,o),mu=null,hu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wu(t,e,n),t=t.sibling}var Cu=null;function wu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Su(t,e,n),Tu(e),a&4&&(hl(3,e,e.return),ml(3,e),hl(5,e,e.return));break;case 1:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&64&&Zl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Cu,Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Zl)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[Et]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Et]=e,It(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Et]=e,It(r),t=r}e.stateNode=t}}else Zl||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&El(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Ql||t.parentNode.removeChild(t)):a.count--,n===null?Zl||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),r!==null&&a&4&&El(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=$l,$l=!1,Su(t,e,n),$l=o,Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),e.flags&32){t=e.stateNode;try{sn(t,``),B=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,El(e,t,r===null?t:r.memoizedProps)),a&1024&&(eu=!0);break;case 6:if(Su(t,e,n),Tu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,B=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(B=!1,Wm=null,o=Cu,Cu=bm(t.containerInfo),Su(t,e,n),Cu=o,Tu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}eu&&(eu=!1,Eu(e)),B=!1;break;case 4:a=$l,$l=Zl,r=Gt(),o=Cu,Cu=bm(e.stateNode.containerInfo),Su(t,e,n),Tu(e),Cu=o,B&&iu&&(au=!0),B=r,$l=a;break;case 12:Su(t,e,n),Tu(e);break;case 31:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 13:Su(t,e,n),Tu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=qe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Zl,l=Ql,u=$l;Zl=c||o,$l=u||o,Ql=l||s,Su(t,e,n),Ql=l,$l=u,Zl=c,Tu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Zl||Ql||(t=s||Ql,n=Zl,r=Ql,Zl=o||Zl,Ql=t,Au(e,2),Zl=n,Ql=r),!o&&$l||uu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xu(e,n))));break;case 19:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 30:a&512&&(Ql||r===null||yl(r,r.return)),a=Gt(),o=iu,s=(n&335544064)===n,c=e.memoizedProps,iu=s&&di(c.default,c.update)!==`none`,Su(t,e,n),Tu(e),s&&r!==null&&B&&(e.flags|=4),iu=o,B=a;break;case 21:break;case 7:a&512&&(Ql||r===null||yl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Su(t,e,n),Tu(e)}}function Tu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Dl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(wl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Cl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Al(e,Ol(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(sn(l,``),n.flags&=-33),Al(e,Ol(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;kl(e,Ol(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Du(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling;else Xl(t,!1)}function Ou(e,t){var n=e.alternate;if(n===null)Hl(e,!1);else switch(e.tag){case 3:if(ou=ru=!1,Il(),Du(t,e),!ru&&!au){if(e=Fl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),ou=!0}Fl=null;break;case 5:Du(t,e);break;case 4:r=ru,ru=!1,Du(t,e),ru&&(au=!0),ru=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Du(t,e):Hl(e,!1));break;case 30:r=ru,i=Il(),ru=!1,Du(t,e),ru&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=li(a,o),o=li(n.memoizedProps,o);var s=di(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ll=0,t=Yl(e,n,t,o,s,a,!0),Ll!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Fl=i):i!==null&&(i.push.apply(i,Fl),Fl=i),ru=e.flags&32?!0:r;break;default:Du(t,e)}}function ku(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lu(e,t.alternate,t),t=t.sibling}function Au(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:hl(4,n,n.return),Au(n,r);break;case 1:yl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&_l(n,n.return,i),Au(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:yl(n,n.return),n.tag!==5&&n.tag!==27||Sl(n),Au(n,r);break;case 6:Sl(n);break;case 26:yl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Ql||i.parentNode.removeChild(i),Au(n,r);break;case 22:n.memoizedState===null&&Au(n,r);break;case 30:yl(n,n.return),Au(n,r);break;case 7:yl(n,n.return);default:Au(n,r)}e=e.sibling}}function ju(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:ju(i,a,n),ml(4,a);break;case 1:if(ju(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)mo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&gl(a),vl(a,a.return);break;case 27:n&2&&jl(a);case 5:a.tag!==5&&a.tag!==27||xl(a),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 6:xl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Zl||Km(bm(c.ownerDocument),a.type,c),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 12:ju(i,a,n);break;case 31:ju(i,a,n),s&&o&4&&vu(i,a);break;case 13:ju(i,a,n),s&&o&4&&yu(i,a);break;case 22:a.memoizedState===null&&ju(i,a,n),vl(a,a.return);break;case 30:ju(i,a,n),vl(a,a.return);break;case 7:vl(a,a.return);default:ju(i,a,n)}t=t.sibling}}function Mu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function Nu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function Pu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Fu(e,t,n,r),t=t.sibling;else i&&Jl(t)}function Fu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pu(e,t,n,r),a&2048&&ml(9,t);break;case 1:Pu(e,t,n,r);break;case 3:Pu(e,t,n,r),i&&ou&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ca(a)));break;case 12:if(a&2048){Pu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Pu(e,t,n,r);break;case 31:Pu(e,t,n,r);break;case 13:Pu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ql(t),o._visibility&2?Pu(e,t,n,r):(o._visibility|=2,Iu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ql(s),o._visibility&2?Pu(e,t,n,r):Lu(e,t)),a&2048&&Mu(s,t);break;case 24:Pu(e,t,n,r),a&2048&&Nu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Bl(a.child,!0),Bl(t.child,!0))),Pu(e,t,n,r);break;default:Pu(e,t,n,r)}}function Iu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Iu(a,o,s,c,i),ml(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Iu(a,o,s,c,i)):u._visibility&2?Iu(a,o,s,c,i):Lu(a,o),i&&l&2048&&Mu(o.alternate,o);break;case 24:Iu(a,o,s,c,i),i&&l&2048&&Nu(o.alternate,o);break;default:Iu(a,o,s,c,i)}t=t.sibling}}function Lu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Lu(n,r),i&2048&&Mu(r.alternate,r);break;case 24:Lu(n,r),i&2048&&Nu(r.alternate,r);break;default:Lu(n,r)}t=t.sibling}}var Ru=8192;function zu(e,t,n){if(e.subtreeFlags&Ru)for(e=e.child;e!==null;)Bu(e,t,n),e=e.sibling}function Bu(e,t,n){switch(e.tag){case 26:zu(e,t,n),e.flags&Ru&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Cu,e.memoizedState,e.memoizedProps));break;case 5:zu(e,t,n),e.flags&Ru&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Cu;Cu=bm(e.stateNode.containerInfo),zu(e,t,n),Cu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ru,Ru=16777216,zu(e,t,n),Ru=r):zu(e,t,n));break;case 30:if((e.flags&Ru)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Nl===null&&(Nl=new Map),Nl.set(r,i)}zu(e,t,n);break;default:zu(e,t,n)}}function Vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uu(e),e=e.sibling}function Uu(e){switch(e.tag){case 0:case 11:case 15:Hu(e),e.flags&2048&&hl(9,e,e.return);break;case 3:Hu(e);break;case 12:Hu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):Hu(e);break;default:Hu(e)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hl(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function Gu(e,t){for(;nu!==null;){var n=nu;switch(n.tag){case 0:case 11:case 15:hl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nu=r;else a:for(n=e;nu!==null;){r=nu;var i=r.sibling,a=r.return;if(pu(r),r===n){nu=null;break a}if(i!==null){i.return=a,nu=i;break a}nu=a}}}var Ku={getCacheForType:function(e){var t=ga(Sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ga(Sa).controller.signal}},qu=typeof WeakMap==`function`?WeakMap:Map,Ju=0,Yu=null,Q=null,Xu=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Ju&2&&Xu!==0?Xu&-Xu:k.T===null?Ct():Nf()}function Ad(){if(sd===0){if(!(Xu&536870912)||Y){var e=ct;ct<<=1,!(ct&3932160)&&(ct=262144),sd=e}else sd=536870912}return e=xo.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(li(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Yu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Xu,sd,!1)),gt(e,n),(!(Ju&2)||e!==Yu)&&(e===Yu&&(!(Ju&2)&&(ad|=n),rd===4&&Id(e,Xu,sd,!1)),Tf(e))}function Nd(e,t,n){if(Ju&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||dt(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n)){a=Gd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-qe(),10<a)){if(Id(r,t,sd,!$u),ut(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Nl=null,Bu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-qe():(a&4194048)===a?pd-qe():0,m=eh(d,m),m!==null)){bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l);return}ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ft(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-it(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&vt(e,n,t)}function Ld(){return Ju&6?!0:(Ef(0,!1),!1)}function Rd(){if(Q!==null){if(Zu===0)var e=Q.return;else e=Q,ca=sa=null,Xo(e),Ya=null,Xa=0,e=Q;for(;e!==null;)pl(e.alternate,e),e=e.return;Q=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Yu=e,Q=n=Ti(e.current,null),Xu=t,Zu=0,Qu=null,$u=!1,ed=dt(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=ft(e,t),gi(),n}function Bd(e,t){Z=null,k.H=oc,t===za||t===Va?(t=qa(),Zu=3):t===Ba?(t=qa(),Zu=4):Zu=t===wc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Q===null&&(rd=1,vc(e,Ni(t,e.current)))}function Vd(){var e=xo.current;return e===null?!0:(Xu&4194048)===Xu?So===null:(Xu&62914560)===Xu||Xu&536870912?e===So:!1}function Hd(){var e=k.H;return k.H=oc,e===null?oc:e}function Ud(){var e=k.A;return k.A=Ku,e}function Wd(){rd=4,$u||(Xu&4194048)!==Xu&&xo.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Yu===null||Id(Yu,Xu,sd,!1)}function Gd(e,t,n){var r=Ju;Ju|=2;var i=Hd(),a=Ud();(Yu!==e||Xu!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Q!==null){var s=Q,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:xo.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,ca=sa=null,Ju=r,k.H=i,k.A=a,Q===null&&(Yu=null,Xu=0,gi()),o}function Kd(){for(;Q!==null;)Yd(Q)}function qd(e,t){var n=Ju;Ju|=2;var r=Hd(),a=Ud();Yu!==e||Xu!==t?(hd=null,md=qe()+500,zd(e,t)):ed=dt(e,t);a:do try{if(Zu!==0&&Q!==null){t=Q;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ua(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Yu!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Ua(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Q.tag){case 26:s=Q.memoizedState;case 5:case 27:var c=Q;if(s?Ym(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Q=l;else{var u=c.return;u===null?Q=null:(Q=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return ca=sa=null,k.H=r,k.A=a,Ju=n,Q===null?(Yu=null,Xu=0,gi(),rd):0}function Jd(){for(;Q!==null&&!Ge();)Yd(Q)}function Yd(e){var t=il(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Q=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rc(n,t,t.pendingProps,t.type,void 0,Xu);break;case 11:t=Rc(n,t,t.pendingProps,t.type.render,t.ref,Xu);break;case 5:Xo(t);var r=t;r===Ji&&(Y?(ta(r),r.tag===5&&r.stateNode!=null&&(Yi=r.stateNode)):(ta(r),Y=!0));default:pl(n,t),t=Q=Ei(t,nd),t=il(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Q=t}function Zd(e,t,n,r){ca=sa=null,Xo(t),Ya=null,Xa=0;var i=t.return;try{if(Cc(e,i,t,n,Xu)){rd=1,vc(e,Ni(n,e.current)),Q=null;return}}catch(t){if(i!==null)throw Q=i,t;rd=1,vc(e,Ni(n,e.current)),Q=null;return}t.flags&32768?(Y||r===1?e=!0:ed||Xu&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=xo.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=dl(t.alternate,t,nd);if(n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=fl(e.alternate,e);if(n!==null){n.flags&=32767,Q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=n}while(e!==null);rd=6,Q=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Ju&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Yu&&(Q=Yu=null,Xu=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=hi,_t(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Ea(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(Ze,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Ml=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,i=A.p,A.p=2,a=Ju,Ju|=4;try{su(e,t,n)}finally{Ju=a,A.p=i,k.T=r}}_d=1,Ml?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Ou(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=k.T,k.T=null;var i=A.p;A.p=2;var a=Ju;Ju|=4;try{iu=au=!1,wu(t,e,n),n=cp;var o=zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Rr(s.ownerDocument.documentElement,s)){if(c!==null&&Br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Lr(s,h),v=Lr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Ju=a,A.p=i,k.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=Ju;Ju|=4;try{lu(e,t.alternate,t)}finally{Ju=i,A.p=r,k.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Ke();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),St(r),n=n.stateNode,rt&&typeof rt.onCommitFiberRoot==`function`)try{rt.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=k.T,a=A.p,A.p=2,k.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{k.T=n,A.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=St(bd),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Ju&6)throw Error(i(331));var c=Ju;if(Ju|=4,Uu(o.current),Fu(o,o.current,s,n),Ju=c,Ef(0,!1),rt&&typeof rt.onPostCommitFiberRoot==`function`)try{rt.onPostCommitFiberRoot(nt,o)}catch{}return!0}finally{A.p=a,k.T=r,cf(e,t)}}function df(e,t,n){t=Ni(n,t),t=bc(e.stateNode,t,2),e=so(e,t,2),e!==null&&(gt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Ni(n,e),n=xc(2),r=so(t,n,2),r!==null&&(Sc(n,r,t,e),gt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Yu===e&&(Xu&n)===n&&(rd===4||rd===3&&(Xu&62914560)===Xu&&300>qe()-fd?Ju&2?od|=n:zd(e,0):od|=n,cd===Xu&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=mt()),e=J(e,t),e!==null&&(gt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ue(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-it(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Xu,a=ut(r,r===Yu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||dt(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=qe(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-it(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=pt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Yu,n=Xu,n=ut(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&We(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||dt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&We(r),St(n)){case 2:case 8:n=Xe;break;case 32:n=Ze;break;case 268435456:n=$e;break;default:n=Ze}return r=Af.bind(null,e),n=Ue(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&We(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Xu;return r=ut(e,e===Yu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,qe()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Ju&6?Ue(Ye,Df):Of()})}function Nf(){if(wf===0){var e=ka;e===0&&(e=N,N<<=1,!(N&261888)&&(N=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:pn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Dt]||null).action),o=r.submitter;o&&(t=(t=o[Dt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Pn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<oi.length;If++){var Lf=oi[If];si(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}si(Qr,`onAnimationEnd`),si($r,`onAnimationIteration`),si(ei,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ti,`onTransitionRun`),si(ni,`onTransitionStart`),si(ri,`onTransitionCancel`),si(ii,`onTransitionEnd`),Bt(`onMouseEnter`,[`mouseout`,`mouseover`]),Bt(`onMouseLeave`,[`mouseout`,`mouseover`]),Bt(`onPointerEnter`,[`pointerout`,`pointerover`]),Bt(`onPointerLeave`,[`pointerout`,`pointerover`]),zt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),zt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),zt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),zt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[F];n===void 0&&(n=t[F]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Lt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!W||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}xn(function(){var r=a,i=gn(n),s=[];a:{var c=ai.get(e);if(c!==void 0){var l=Pn,u=e;switch(e){case`keypress`:if(kn(n)===0)break a;case`keydown`:case`keyup`:l=q;break;case`focusin`:u=`focus`,l=G;break;case`focusout`:u=`blur`,l=G;break;case`beforeblur`:case`afterblur`:l=G;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Vn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Hn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Qr:case $r:case ei:l=Un;break;case ii:l=$n;break;case`scroll`:case`scrollend`:l=In;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`submit`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Sn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==hn&&(u=n.relatedTarget||n.fromElement)&&(Mt(u)||u[Ot]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Vn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Pt(c),h=l==null?u:Pt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Mt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Pt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=xr;else if(hr(c)){if(Sr)_=jr;else{_=kr;var v=Or}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&un(r.elementType)&&(_=xr):_=Ar;if(_&&=_(e,r)){gr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Pt(r):window,e){case`focusin`:(hr(v)||v.contentEditable===`true`)&&(Hr=v,Ur=r,Wr=null);break;case`focusout`:Wr=Ur=Hr=null;break;case`mousedown`:Gr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Gr=!1,Kr(s,n,i);break;case`selectionchange`:if(Vr)break;case`keydown`:case`keyup`:Kr(s,n,i)}var y;if(rr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else dr?lr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(or&&n.locale!==`ko`&&(dr||b!==`onCompositionStart`?b===`onCompositionEnd`&&dr&&(y=On()):(Tn=i,En=`value`in Tn?Tn.value:Tn.textContent,dr=!0)),v=qf(r,b),0<v.length&&(b=new Gn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=ur(n),y!==null&&(b.data=y)))),(y=ar?fr(e,n):pr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Gn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Sn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=Sn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Sn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=Sn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&sn(e,``+r);else return;break;case`className`:qt(e,`class`,r);break;case`tabIndex`:qt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:qt(e,n,r);break;case`style`:ln(e,r,o);return;case`data`:if(t!==`object`){qt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=pn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=pn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=mn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=pn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Kt(e,`popover`,r);break;case`xlinkActuate`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Kt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=dn.get(n)||n,Kt(e,n,r);else return}B=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:ln(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)sn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=mn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Rt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Dt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}B=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Kt(e,n,r)}return}B=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}nn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&H(e,!!r,n,!0):H(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}on(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(un(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(B=!0),o=m;break;case`name`:m!==f&&(B=!0),a=m;break;case`checked`:m!==f&&(B=!0),u=m;break;case`defaultChecked`:m!==f&&(B=!0),d=m;break;case`value`:m!==f&&(B=!0),s=m;break;case`defaultValue`:m!==f&&(B=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}tn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(B=!0),p=o;break;case`defaultValue`:o!==l&&(B=!0),c=o;break;case`multiple`:o!==l&&(B=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?H(e,!!n,n?[]:``,!1):H(e,!!n,t,!0)):H(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(B=!0),p=a;break;case`defaultValue`:a!==o&&(B=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}an(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(B=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(un(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Et]=r,n[Dt]=t,np(n,e,t),It(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Mt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),R(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===mn&&(e.onclick=null),R(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);R(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=A.d;A.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=Nt(e);t!==null&&t.tag===5&&t.type===`form`?Js(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=en(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),It(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+en(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+en(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+en(n.imageSizes)+`"]`)):i+=`[href="`+en(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[L]=!0,o.onload=o.onerror=function(){z(o)}),It(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+en(r)+`"][href="`+en(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),It(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ft(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);It(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ft(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),It(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ft(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),It(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=ke.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ft(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ft(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+en(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[L]){r.loading=1;return}}else t=e.createElement(`link`),t[L]=!0,t.onload=t.onerror=z.bind(null,t),np(t,`link`,n),It(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+en(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+en(n.href)+`"]`);if(r)return t.instance=r,It(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),It(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,It(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),It(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,It(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),It(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[Et]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,It(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),It(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:se,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ci(3,null,null,t),e.current=a,a.stateNode=e,t=X(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},io(a),e}function uh(e){return e?(e=xi,e):xi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=oo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=so(e,r,t),n!==null&&(Md(n,e,t),co(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=J(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=xt(t);var n=J(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function vh(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,yh(e,t,n,r)}finally{A.p=a,k.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Nt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=P(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-it(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Ju&6)&&(md=qe()+500,Ef(0,!1))}}break;case 31:case 13:s=J(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=gn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Je()){case Ye:return 2;case Xe:return 8;case Ze:case Qe:return 32;case $e:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Nt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,wt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hn=r,n.target.dispatchEvent(r),hn=null}else return t=Nt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Nt(n);a!==null&&(e.splice(t,3),t-=3,Ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Dt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Dt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[Ot]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{nt=Jh.inject(qh),rt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=hc,s=gc,c=_c;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Ot]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=g(),b=c(u(),1),x=m(),S=v(),ee=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],te=ee.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),C=`feedback-freeze-styles`,ne=`__agentation_freeze`;function w(){return typeof window>`u`?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[ne]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var T=w();function E(){if(typeof window>`u`)return;let e=window;T=e[ne]??(e[ne]=T),!T.installed&&(window.setTimeout=(e,t,...n)=>typeof e==`string`?T.origSetTimeout(e,t):T.origSetTimeout((...t)=>{T.frozen?T.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?T.origSetInterval(e,t):T.origSetInterval((...t)=>{T.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>T.origRAF(t=>{T.frozen?T.frozenRAFQueue.push(e):e(t)}),T.installed=!0)}var D=T.origSetTimeout,re=T.origSetInterval,ie=T.origRAF;function ae(e){return e?ee.some(t=>!!e.closest?.(`[${t}]`)):!1}function oe(){if(typeof document>`u`||(E(),T.frozen))return;T.frozen=!0,T.frozenTimeoutQueue=[],T.frozenRAFQueue=[];let e=document.getElementById(C);e||(e=document.createElement(`style`),e.id=C),e.textContent=`
    *${te},
    *${te}::before,
    *${te}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),T.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;ae(t)||(e.pause(),T.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function se(){if(typeof document>`u`||!T.frozen)return;T.frozen=!1;let e=T.frozenTimeoutQueue;T.frozenTimeoutQueue=[];for(let t of e)T.origSetTimeout(()=>{if(T.frozen){T.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=T.frozenRAFQueue;T.frozenRAFQueue=[];for(let e of t)T.origRAF(t=>{if(T.frozen){T.frozenRAFQueue.push(e);return}e(t)});for(let e of T.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}T.pausedAnimations=[],document.getElementById(C)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function ce(){let e=(0,b.useMemo)(()=>{let e=0,t=new Set,n=()=>(t.forEach(clearTimeout),t.clear(),++e),r=t=>t===e;return{start:n,isCurrent:r,schedule:(e,n,i)=>{if(!r(e))return;let a=D(()=>{t.delete(a),r(e)&&n()},i);t.add(a)}}},[]);return(0,b.useEffect)(()=>()=>{e.start()},[e]),e}function le(e,t,n,r){let i=e=>r.get(e.id)??e.id,a=new Map(e.map(e=>[i(e),e])),o=new Map(t.map(e=>[i(e),e])),s=new Set(n.map(e=>e.id)),c=[];for(let e of n){let t=a.get(e.id),n=o.get(e.id);if(t&&!n)continue;let r=n&&t&&n.comment!==t.comment;c.push(r?{...e,comment:n.comment}:e)}for(let[e,t]of o)!a.has(e)&&!s.has(e)&&c.push(t);return c}function O(e){if(e.tagName!==`IFRAME`)return null;try{return e.contentDocument}catch{return null}}function ue(e,t=document){if(e===t)return null;try{return e.defaultView?.frameElement}catch{return null}}function de(e){return e.nodeType===11&&`host`in e}function fe(e){let t=e.getBoundingClientRect(),n=e.offsetWidth?t.width/e.offsetWidth:1,r=e.offsetHeight?t.height/e.offsetHeight:1,i=e.ownerDocument.defaultView?.getComputedStyle(e),a=e=>parseFloat(e||`0`)||0,o=a(i?.paddingLeft),s=a(i?.paddingTop),c=e.clientWidth-o-a(i?.paddingRight),l=e.clientHeight-s-a(i?.paddingBottom);return{x:t.left+(e.clientLeft+o)*n,y:t.top+(e.clientTop+s)*r,sx:n,sy:r,width:c*n,height:l*r}}function pe(e){try{let t=new URL(e);return t.origin+t.pathname}catch{return e}}function me(e,t,n,r=document){let i=ue(e,r);for(;i;){let e=fe(i);t=e.x+t*e.sx,n=e.y+n*e.sy,i=ue(i.ownerDocument,r)}return{x:t,y:n}}function he(e,t=document){let n=e.getBoundingClientRect();return ge(e.ownerDocument,n,t)}function ge(e,t,n){if(!ue(e,n))return t;let r=t.left,i=t.top,a=t.right,o=t.bottom,s=ue(e,n);for(;s;){let e=fe(s);r=Math.max(e.x,e.x+r*e.sx),i=Math.max(e.y,e.y+i*e.sy),a=Math.min(e.x+e.width,e.x+a*e.sx),o=Math.min(e.y+e.height,e.y+o*e.sy),s=ue(s.ownerDocument,n)}return new DOMRect(r,i,Math.max(0,a-r),Math.max(0,o-i))}function _e(e){let t=[];for(let n of e.querySelectorAll(`*`))n.tagName===`IFRAME`&&t.push(n),n.shadowRoot&&n.tagName!==`AGENTATION-TOOLBAR`&&t.push(..._e(n.shadowRoot));return t}function ve(e,t,n,r=document){let i=[];for(let t=ue(e.ownerDocument,r);t;t=ue(t.ownerDocument,r))i.unshift(t);if(!i.length)return;let a=i.map(e=>{let r=fe(e);return t=(t-r.x)/r.sx,n=(n-r.y)/r.sy,{index:_e(e.ownerDocument).indexOf(e),id:e.id||void 0,url:O(e)?.URL??``}}),o=e.ownerDocument.defaultView,s=!1;for(let t=e;t;t=t.parentElement)if([`fixed`,`sticky`].includes(o.getComputedStyle(t).position)){s=!0;break}let c=s?0:o.scrollX,l=s?0:o.scrollY,u=e.getBoundingClientRect();return{path:a,x:t+c,y:n+l,fixed:s,boundingBox:{x:u.left+c,y:u.top+l,width:u.width,height:u.height}}}function ye(e=document){let t=new Map,n=e=>{let n=t.get(e);return n||(n=_e(e),t.set(e,n)),n};return t=>be(t,e,n)}function be(e,t=document,n=_e){let r=e.frame;if(!r)return e;let i=t;for(let e of r.path){let t=n(i),r=e.id?t.find(t=>t.id===e.id):t[e.index],a=r&&O(r);if(!a||pe(a.URL)!==pe(e.url))return null;i=a}let a=i.defaultView,o=r.fixed?0:a.scrollX,s=r.fixed?0:a.scrollY,c=r.x-o,l=r.y-s;for(let e=i,n=ue(i,t);n;n=ue(e,t)){let t=e.defaultView;if(c<0||l<0||c>t.innerWidth||l>t.innerHeight)return null;let r=fe(n);if(r.width<=0||r.height<=0)return null;c=r.x+c*r.sx,l=r.y+l*r.sy,e=n.ownerDocument}let u=r.boundingBox,d=ge(i,new DOMRect(u.x-o,u.y-s,u.width,u.height),t),f=t.defaultView;return{...e,x:c/f.innerWidth*100,y:l+(e.isFixed?0:f.scrollY),boundingBox:{x:d.x,y:d.y+(e.isFixed?0:f.scrollY),width:d.width,height:d.height}}}function xe(e,t,n){if(!(`clientX`in e)||t===n)return e;let r=me(t,e.clientX,e.clientY,n);return new Proxy(e,{get(e,t){if(t===`clientX`)return r.x;if(t===`clientY`)return r.y;let n=Reflect.get(e,t,e);return typeof n==`function`?n.bind(e):n}})}function k(e,t){let n=new Set([e]),r=new Set,i=[],a=new Set,o=!1,s=!1,c,l=(t,n)=>{let r=r=>t.listener(xe(r,n,e));t.handlers.set(n,r),n.addEventListener(t.type,r,t.options)},u=()=>{if(o=!1,!s)return;let d=new Set,f=new Set,p=[],m=e=>{p.push(e);for(let t of e.querySelectorAll(`*`))if(!t.matches(`agentation-toolbar, [data-agentation-portal]`)&&(t.shadowRoot&&m(t.shadowRoot),t.tagName===`IFRAME`)){f.add(t);let e=O(t);e&&!d.has(e)&&(d.add(e),m(e))}};d.add(e),m(e);for(let e of n)if(!d.has(e)){for(let t of r){let n=t.handlers.get(e);n&&e.removeEventListener(t.type,n,t.options),t.handlers.delete(e)}n.delete(e)}for(let e of d)if(!n.has(e)){n.add(e);for(let t of r)l(t,e)}for(let e of a)f.has(e)||e.removeEventListener(`load`,u);for(let e of f)a.has(e)||e.addEventListener(`load`,u);a=f,c?.disconnect(),a.forEach(e=>c?.observe(e)),i.forEach(e=>e.disconnect()),i=p.map(e=>{let t=new MutationObserver(e=>{e.some(e=>[...e.addedNodes,...e.removedNodes].some(e=>e.nodeType===1&&!e.closest(`agentation-toolbar, [data-agentation-portal]`)&&(e.tagName===`IFRAME`||!!e.shadowRoot||!!e.querySelector(`iframe`))))&&!o&&(o=!0,queueMicrotask(u))});return t.observe(e,{childList:!0,subtree:!0}),t}),t?.()};return{start(){s||(s=!0,typeof ResizeObserver==`function`&&(c=new ResizeObserver(()=>t?.())),u())},stop(){s=!1,c?.disconnect(),c=void 0,i.forEach(e=>e.disconnect()),i=[];for(let e of a)e.removeEventListener(`load`,u);a.clear();for(let e of r)for(let[t,n]of e.handlers)t.removeEventListener(e.type,n,e.options);r.clear(),n.clear(),n.add(e)},addEventListener(e,t,i){let a={type:e,listener:t,options:i,handlers:new Map};r.add(a);for(let e of n)l(a,e)},removeEventListener(e,t,n){for(let n of r)if(n.type===e&&n.listener===t){for(let[t,r]of n.handlers)t.removeEventListener(e,r,n.options);r.delete(n)}},querySelectorAll(e){return[...n].flatMap(t=>[...t.querySelectorAll(e)])}}}var A=[`data-testid`,`data-test`,`data-qa`,`data-cy`,`data-component`];function Se(e,t=A){let n={};for(let r of[...new Set(t)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(r))continue;let t=e.getAttribute(r);t!=null&&t.length<=500&&Object.defineProperty(n,r,{value:t,enumerable:!0})}return n}function Ce(e,t=A){return Object.entries(Se(e,t)).filter(([e,t])=>/^data-[a-z0-9_-]+$/.test(e)&&t.length<=120).slice(0,2).map(([e,t])=>`[${e}="${t.replace(/[\\"\n\r\f\0]/g,e=>e===`\\`||e===`"`?`\\${e}`:`\\${e.charCodeAt(0).toString(16)} `)}"]`).join(``)}function we(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return de(t)?t.host:null}function Te(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=we(n)}return null}function j(e,t=4,n){let r=[],i=e,a=0;for(;i&&a<t;){let e=i.tagName.toLowerCase();if(e===`html`||e===`body`){r.length===0&&r.push(e);break}let t=e;if(i.id)t=`#${i.id}`;else if(i.className&&typeof i.className==`string`){let e=i.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}t+=Ce(i,n);let o=we(i);!i.parentElement&&o&&(t=`\u27E8shadow\u27E9 ${t}`),r.unshift(t),i=o,a++}let o=ue(e.ownerDocument);return(o?j(o,2)+` > ⟨iframe⟩ `:``)+r.join(` > `)}function Ee(e){let t=``;for(let n of e.childNodes)if(n.nodeType===Node.TEXT_NODE){let e=n.textContent?.trim();e&&(t+=(t?` `:``)+e)}return t}function De(e,t){let n=j(e,4,t);if(e.dataset.element)return{name:e.dataset.element,path:n};let r=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(r)){let t=Te(e,`svg`);if(t){let e=we(t);if(e?.namespaceURI===`http://www.w3.org/1999/xhtml`)return{name:`graphic in ${De(e).name}`,path:n}}return{name:`graphic element`,path:n}}if(r===`svg`){let t=we(e);if(t?.tagName.toLowerCase()===`button`){let e=t.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:n}}return{name:`icon`,path:n}}if(r===`button`){let t=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:n}:{name:t?`button "${t.slice(0,25)}"`:`button`,path:n}}if(r===`a`){let t=e.textContent?.trim(),r=e.getAttribute(`href`);return t?{name:`link "${t.slice(0,25)}"`,path:n}:r?{name:`link to ${r.slice(0,30)}`,path:n}:{name:`link`,path:n}}if(r===`input`){let t=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:n}:i?{name:`input [${i}]`,path:n}:{name:`${t} input`,path:n}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(r)){let t=e.textContent?.trim();return{name:t?`${r} "${t.slice(0,35)}"`:r,path:n}}if(r===`p`){let t=e.textContent?.trim();return t?{name:`paragraph: "${t.slice(0,40)}${t.length>40?`...`:``}"`,path:n}:{name:`paragraph`,path:n}}if(r===`span`||r===`label`){let t=e.textContent?.trim();return t&&t.length<40?{name:`"${t}"`,path:n}:{name:r,path:n}}if(r===`li`){let t=e.textContent?.trim();return t&&t.length<40?{name:`list item: "${t.slice(0,35)}"`,path:n}:{name:`list item`,path:n}}if(r===`blockquote`)return{name:`blockquote`,path:n};if(r===`code`){let t=e.textContent?.trim();return t&&t.length<30?{name:`code: \`${t}\``,path:n}:{name:`code`,path:n}}if(r===`pre`)return{name:`code block`,path:n};if(r===`img`){let t=e.getAttribute(`alt`);return{name:t?`image "${t.slice(0,30)}"`:`image`,path:n}}if(r===`video`)return{name:`video`,path:n};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(r)){let t=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${r} [${a}]`,path:n};if(i)return{name:`${i}`,path:n};let o=Ee(e);if(o&&o.length<50)return{name:`"${o}"`,path:n};if(typeof t==`string`&&t){let e=t.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:n}}return{name:r===`div`?`container`:r,path:n}}return{name:r,path:n}}function Oe(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function ke(e){let t=we(e);if(!t)return``;let n=(de(e.getRootNode())&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t.namespaceURI===`http://www.w3.org/1999/xhtml`);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function Ae(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var je=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),Me=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),Ne=new Set([`input`,`textarea`,`select`]),Pe=new Set([`img`,`video`,`canvas`,`svg`]),Fe=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function Ie(e){if(typeof window>`u`)return{};let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=Me.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||Ne.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:Pe.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:Fe.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!je.has(i)&&(n[e]=i)}return n}var Le=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function Re(e){if(typeof window>`u`)return``;let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n=[];for(let e of Le){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!je.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function ze(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function Be(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function Ve(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=we(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}let r=ue(e.ownerDocument);return(r?Ve(r)+` > ⟨iframe⟩ `:``)+t.join(` > `)}var He=`agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]`,Ue=new Set([`DIV`,`SPAN`,`SECTION`,`ARTICLE`,`MAIN`,`ASIDE`,`HEADER`,`FOOTER`,`NAV`]);function We(e,t){let n=document.elementFromPoint(e,t),r=new Set;for(;n&&!r.has(n);){r.add(n);let i=O(n),a;if(i){let r=fe(n);e=(e-r.x)/r.sx,t=(t-r.y)/r.sy,a=i.elementFromPoint?.(e,t)}else a=n.shadowRoot?.elementFromPoint?.(e,t);if(!a||a===n)break;n=a}return n}function Ge(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let t=getComputedStyle(e);if(t.visibility===`hidden`||t.visibility===`collapse`)return!1;let n=e;for(;n;){let e=getComputedStyle(n);if(e.opacity===`0`||e.display===`none`||e.contentVisibility===`hidden`)return!1;let t=n.getRootNode();n=n.parentElement||(de(t)?t.host:null)}return!0}function Ke(e,t){let n=[],r=new Set,i=(e,t,a)=>{for(let o of e){if(r.has(o))continue;if(r.add(o),o.shadowRoot){let e=o.shadowRoot,n=e.elementsFromPoint?.(t,a)??[];i(n.length?n:[e.elementFromPoint?.(t,a)].filter(Boolean),t,a)}let e=O(o);if(e){let n=fe(o),r=(t-n.x)/n.sx,s=(a-n.y)/n.sy;i(e.elementsFromPoint?.(r,s)??[e.elementFromPoint?.(r,s)].filter(Boolean),r,s)}o!==o.ownerDocument.body&&o!==o.ownerDocument.documentElement&&!Te(o,He)&&Ge(o)&&n.push(o)}};return i(document.elementsFromPoint?.(e,t)??[document.elementFromPoint(e,t)].filter(Boolean),e,t),n}function qe(e,t,n){if(n.width<=0||n.height<=0)return null;let r=null,i=1/0;for(let a of Ke(e,t)){let e=he(a),t=e.width/n.width,o=e.height/n.height;if(t<.5||t>2||o<.5||o>2)continue;let s=Math.abs(Math.log(t))+Math.abs(Math.log(o));s<i&&(r=a,i=s)}return r}function Je(e,t){let n=We(e,t);if(!n||Te(n,He))return null;let r=Ke(e,t);for(let e of r)if(!Ue.has(e.tagName)&&!e.shadowRoot||Array.from(e.childNodes).some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()))return e;let i=null,a=1/0;for(let e of r){let t=he(e),n=t.width*t.height;n>0&&n<a&&(i=e,a=n)}return i}function Ye(e){let t=(0,b.useCallback)(t=>e?(window.addEventListener(`hashchange`,t),window.addEventListener(`popstate`,t),()=>{window.removeEventListener(`hashchange`,t),window.removeEventListener(`popstate`,t)}):()=>{},[e]);return(0,b.useSyncExternalStore)(t,()=>window.location.pathname+(e?window.location.hash:``),()=>`/`)}var Xe=new Map;function Ze(e,t){let n=(Xe.get(e)??Promise.resolve()).then(t),r=n.then(()=>{},()=>{});return Xe.set(e,r),r.then(()=>{Xe.get(e)===r&&Xe.delete(e)}),n}function Qe(e,t,n){try{let r=new URL(e,n);return r.origin===n&&r.pathname+r.hash===t}catch{return!1}}var $e=typeof window>`u`?b.useEffect:b.useLayoutEffect;function et(e){let[t,n]=(0,b.useState)(null);return $e(()=>{let e=document.createElement(`div`);return e.setAttribute(`data-agentation-portal`,``),e.style.display=`contents`,n(e),()=>e.remove()},[]),$e(()=>{if(!t)return;let n=e??document.body;if(n.ownerDocument!==document){console.warn(`[Agentation] portalContainer belongs to another document; the toolbar will not render.`);return}let r=document.activeElement;for(;r?.shadowRoot?.activeElement;)r=r.shadowRoot.activeElement;let i=r&&t.contains(document.activeElement)?r:null;typeof t.hidePopover==`function`&&t.matches(`:popover-open`)&&t.hidePopover(),n.appendChild(t),e&&typeof t.showPopover==`function`?(t.setAttribute(`popover`,`manual`),t.style.cssText=`position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none`,t.showPopover()):(t.removeAttribute(`popover`),t.style.cssText=`display:contents`),i?.focus({preventScroll:!0})},[t,e]),t}var tt=({mode:e=`open`,delegatesFocus:t,slotAssignment:n,host:r=`div`,children:i,className:a,...o})=>{let s=(0,b.useRef)(null),[c,l]=(0,b.useState)(null);return(0,b.useLayoutEffect)(()=>{let r=s.current;if(!r||r.shadowRoot)return;let i=r.attachShadow({mode:e,delegatesFocus:t,slotAssignment:n});l(i)},[]),(0,S.jsx)(r,{ref:s,...o,...r.includes(`-`)?{class:a}:{className:a},children:c&&(0,x.createPortal)(i,c)})};function nt(e,t,n){let r=(0,b.useRef)(n);(0,b.useLayoutEffect)(()=>{r.current=n},[n]),(0,b.useLayoutEffect)(()=>{let n=e.current;if(!t||!n)return;let i=!1,a=n.getAnimations?.()??[];return Promise.allSettled(a.map(e=>e.finished)).then(()=>{i||r.current()}),()=>{i=!0}},[e,t])}var rt=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
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
  padding: 0.75rem 1rem;
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
  pointer-events: none;
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
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
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
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
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
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "…";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,M={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,sourceAction:`styles-module__sourceAction___EabJb`,light:`styles-module__light___6AaSQ`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteButton:`styles-module__deleteButton___4VuAE`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,sharedForm:`styles-module__sharedForm___8GvQl`,previewExcerpt:`styles-module__previewExcerpt___DCOIL`,sharedNote:`styles-module__sharedNote___OYVi5`,sharedNoteContent:`styles-module__sharedNoteContent___6q3KD`,sharedExtra:`styles-module__sharedExtra___RUBKC`,sharedActions:`styles-module__sharedActions___6Glpl`,sharedExtraInner:`styles-module__sharedExtraInner___EuUh4`},it=`data-agentation-styles`;function at(e,t,n){if(!n||!e)return;let r=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!r||typeof r.querySelector!=`function`||r.querySelector(`style[${it}~="toolbar"], style[${it}~="${t}"]`))return;let i=(e.nodeType===9?e:e.ownerDocument).createElement(`style`);i.setAttribute(it,t),i.textContent=n,r.appendChild(i)}function ot(e,t){return(0,b.useCallback)(n=>{n&&at(n.getRootNode(),e,t)},[e,t])}function st(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var N=(0,b.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,onOpenSource:l,allowEmpty:u=!1,accentColor:d=`#3c82f7`,computedStyles:f,disabled:p=!1,preview:m=!1,resetOnPreview:h=!0,variant:g=`popup`},_){let v=g===`card`,[y,x]=(0,b.useState)(i),[ee,te]=(0,b.useState)(!1),[C,ne]=(0,b.useState)(!1),w=(0,b.useRef)(null),T=(0,b.useRef)(null),E=n?` "${n.slice(0,30)}${n.length>30?`...`:``}"`:``;(0,b.useLayoutEffect)(()=>{let t=T.current,n=w.current;if(!v||!t||!n)return;let r=()=>{t.style.setProperty(`--editor-field-height`,`${n.offsetHeight}px`)};if(r(),`CanvasRenderingContext2D`in window){let r=document.createElement(`canvas`).getContext(`2d`);if(r){let a=getComputedStyle(n).fontFamily;r.font=`13px ${a}`;let o=r.measureText(i.replace(/\s+/g,` `)).width;r.font=`italic 12px ${a}`;let s=r.measureText(e+E).width,c=Math.min(200,Math.max(120,Math.ceil(Math.max(o,s))+24));t.closest(`[data-annotation-card]`)?.style.setProperty(`--preview-width`,`${c}px`);let l=t.querySelector(`[data-shared-note]`);l&&l.toggleAttribute(`data-truncated`,o>c-24)}}let a=typeof ResizeObserver<`u`?new ResizeObserver(r):null;return a?.observe(n),()=>a?.disconnect()},[v,e,i,E]),(0,b.useLayoutEffect)(()=>{m&&h&&(x(i),ne(!1),w.current&&(w.current.scrollTop=0,w.current.scrollLeft=0))},[m,h,i]),(0,b.useImperativeHandle)(_,()=>({focus(){let e=w.current;st(e),e&&(e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=v?0:e.scrollHeight)}}),[v]);let re=(0,b.useCallback)(()=>{p||!y.trim()&&!u||o(y.trim())},[p,y,u,o]);return(0,S.jsxs)(`div`,{ref:T,className:v?M.sharedForm:void 0,style:v?void 0:{display:`contents`},"data-annotation-editor":!0,"data-preview":m||void 0,children:[(0,S.jsxs)(`div`,{className:M.header,"data-editor-heading":!0,children:[f&&Object.keys(f).length>0?(0,S.jsxs)(`button`,{className:M.headerToggle,onClick:()=>{let e=C;ne(!C),e&&D(()=>st(w.current),0)},type:`button`,children:[(0,S.jsx)(`svg`,{className:`${M.chevron} ${C?M.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,S.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,S.jsxs)(`span`,{className:M.element,children:[e,v&&E&&(0,S.jsx)(`span`,{className:M.previewExcerpt,children:E})]})]}):(0,S.jsxs)(`span`,{className:M.element,children:[e,v&&E&&(0,S.jsx)(`span`,{className:M.previewExcerpt,children:E})]}),t&&(0,S.jsx)(`span`,{className:M.timestamp,children:t})]}),l&&(0,S.jsx)(`div`,{className:v?M.sharedExtra:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsx)(`div`,{className:v?M.sharedExtraInner:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsx)(`button`,{type:`button`,className:M.sourceAction,onClick:l,children:`Open in editor`})})}),f&&Object.keys(f).length>0&&(0,S.jsx)(`div`,{className:`${M.stylesWrapper} ${C?M.expanded:``}`,children:(0,S.jsx)(`div`,{className:M.stylesInner,children:(0,S.jsx)(`div`,{className:M.stylesBlock,children:Object.entries(f).map(([e,t])=>(0,S.jsxs)(`div`,{className:M.styleLine,children:[(0,S.jsx)(`span`,{className:M.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,S.jsx)(`span`,{className:M.styleValue,children:t}),`;`]},e))})})}),n&&(0,S.jsx)(`div`,{className:v?M.sharedExtra:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsx)(`div`,{className:v?M.sharedExtraInner:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsxs)(`div`,{className:M.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]})})}),(0,S.jsx)(`div`,{"data-shared-note":!0,className:v?M.sharedNote:void 0,style:v?{"--field-border":ee?d:void 0}:{display:`contents`},children:(0,S.jsx)(`div`,{className:v?M.sharedNoteContent:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsx)(`textarea`,{ref:w,className:M.textarea,readOnly:m,"aria-hidden":m,style:v?void 0:{borderColor:ee?d:void 0},placeholder:r,value:m?y.replace(/\s+/g,` `):y,onChange:e=>x(e.target.value),onFocus:()=>te(!0),onBlur:()=>te(!1),rows:2,onKeyDown:e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),re()),e.key===`Escape`&&s())}})})}),(0,S.jsx)(`div`,{"data-editor-actions":!0,className:v?M.sharedActions:void 0,style:v?void 0:{display:`contents`},children:(0,S.jsxs)(`div`,{className:M.actions,children:[c&&(0,S.jsx)(`div`,{className:M.deleteWrapper,children:(0,S.jsx)(`button`,{className:M.deleteButton,onClick:c,type:`button`,"aria-label":`Delete annotation`,children:`Delete`})}),(0,S.jsx)(`button`,{className:M.cancel,onClick:s,children:`Cancel`}),(0,S.jsx)(`button`,{className:M.submit,style:{backgroundColor:d,opacity:y.trim()||u?1:.4},onClick:re,disabled:p||!y.trim()&&!u,children:a})]})})]})}),ct=(0,b.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,onOpenSource:l,allowEmpty:u=!1,style:d,accentColor:f=`#3c82f7`,isExiting:p=!1,onExitComplete:m,lightMode:h=!1,computedStyles:g},_){let[v,y]=(0,b.useState)(!1),[x,ee]=(0,b.useState)(`initial`),te=(0,b.useRef)(null),C=(0,b.useRef)(null);(0,b.useEffect)(()=>{at(C.current?.getRootNode(),`annotation-popup`,rt)},[]);let ne=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=D(()=>{ee(e=>e===`initial`?`enter`:e)},0);return()=>{clearTimeout(e),ne.current&&clearTimeout(ne.current)}},[]),(0,b.useEffect)(()=>{if(p)return;let e=D(()=>te.current?.focus(),50);return()=>clearTimeout(e)},[p]);let w=(0,b.useCallback)(()=>{ne.current&&clearTimeout(ne.current),y(!0),ne.current=D(()=>{y(!1),te.current?.focus()},250)},[]);(0,b.useImperativeHandle)(_,()=>({shake:w}),[w]);let T=(0,b.useCallback)(()=>{if(m){s();return}ee(`exit`)},[s,m]),E=p?`exit`:x;nt(C,E===`exit`,()=>{p?m?.():s()});let re=[M.popup,h?M.light:``,E===`enter`?M.enter:``,E===`entered`?M.entered:``,E===`exit`?M.exit:``,v&&E!==`exit`?M.shake:``].filter(Boolean).join(` `);return(0,S.jsx)(`div`,{ref:C,className:re,"data-annotation-popup":!0,style:d,onAnimationEnd:e=>{e.target===e.currentTarget&&e.animationName.includes(`popupEnter`)&&!p&&ee(`entered`)},onKeyDownCapture:e=>{e.key!==`Escape`||e.nativeEvent.isComposing||(e.preventDefault(),e.stopPropagation(),T())},onClick:e=>e.stopPropagation(),children:(0,S.jsx)(N,{ref:te,element:e,timestamp:t,selectedText:n,placeholder:r,initialValue:i,submitLabel:a,onSubmit:o,onCancel:T,onDelete:c,onOpenSource:l,allowEmpty:u,accentColor:f,computedStyles:g,disabled:E===`exit`})})}),lt=`.icon-transitions-module__iconState___uqK9J {
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
}`,P={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`},ut=({size:e=16})=>(0,S.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),dt=({size:e=20,...t})=>(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,S.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,S.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),ft=({size:e=24,copied:t=!1,tint:n})=>(0,S.jsxs)(`svg`,{ref:ot(`icon-transitions`,lt),width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,S.jsxs)(`g`,{className:`${P.iconState} ${t?P.hiddenScaled:P.visibleScaled}`,children:[(0,S.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,S.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,S.jsxs)(`g`,{className:`${P.iconState} ${t?P.visibleScaled:P.hiddenScaled}`,children:[(0,S.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),pt=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsx)(`g`,{className:`${P.iconStateFast} ${n?P.visibleScaled:a?P.sending:P.hiddenScaled}`,children:(0,S.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,S.jsxs)(`g`,{className:`${P.iconStateFast} ${r?P.visibleScaled:P.hiddenScaled}`,children:[(0,S.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,S.jsxs)(`g`,{className:`${P.iconStateFast} ${i?P.visibleScaled:P.hiddenScaled}`,children:[(0,S.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,S.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},mt=({size:e=24,isOpen:t=!0})=>(0,S.jsxs)(`svg`,{ref:ot(`icon-transitions`,lt),width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsxs)(`g`,{className:`${P.iconFade} ${t?P.visible:P.hidden}`,children:[(0,S.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,S.jsxs)(`g`,{className:`${P.iconFade} ${t?P.hidden:P.visible}`,children:[(0,S.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,S.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),ht=({size:e=24,isPaused:t=!1})=>(0,S.jsxs)(`svg`,{ref:ot(`icon-transitions`,lt),width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsxs)(`g`,{className:`${P.iconFadeFast} ${t?P.hidden:P.visible}`,children:[(0,S.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,S.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,S.jsx)(`path`,{className:`${P.iconFadeFast} ${t?P.visible:P.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),gt=({size:e=16})=>(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),_t=({size:e=16})=>(0,S.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),vt=({size:e=16})=>(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,S.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,S.jsx)(`defs`,{children:(0,S.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,S.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),yt=({size:e=16})=>(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,S.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,S.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),bt=({size:e=16})=>(0,S.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),xt=({size:e=16})=>(0,S.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,S.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),St=({size:e=16})=>(0,S.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,S.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Ct=({size:e=24})=>(0,S.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,S.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,S.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),wt=({content:e,children:t,...n})=>{let[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)({top:0,right:0}),l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,b.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=D(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=D(()=>{o(!1)},150)},...n,children:t}),a&&(0,x.createPortal)((0,S.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},Tt=`.styles-module__tooltip___mcXL2 {
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
}`,Et={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`},Dt=({content:e})=>(0,S.jsx)(wt,{className:Et.tooltip,content:e,children:(0,S.jsx)(dt,{className:Et.tooltipIcon})}),Ot=`.styles-module__toolbar___wNsdK svg[fill=none],
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

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
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
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
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
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
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
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
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
  margin: 0 3px;
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
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
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
  -webkit-user-select: none;
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
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
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
}`,F={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,positionContext:`styles-module__positionContext___AZFHE`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,toggleWrapper:`styles-module__toggleWrapper___7N0-q`,togglePlaceholder:`styles-module__togglePlaceholder___wnqrL`,toggleContent:`styles-module__toggleContent___0yfyP`,expandedToggle:`styles-module__expandedToggle___F7SRN`,toggleGlyph:`styles-module__toggleGlyph___R7Oom`,toggleIcon:`styles-module__toggleIcon___Jbtus`,toggleTopLine:`styles-module__toggleTopLine___hQaCm`,toggleMiddleLine:`styles-module__toggleMiddleLine___sFFVe`,toggleBottomLine:`styles-module__toggleBottomLine___V-jX3`,toggleSparkle:`styles-module__toggleSparkle___eeF99`,controlButton:`styles-module__controlButton___8Q0jc`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};function kt({active:e}){return(0,S.jsxs)(`svg`,{className:F.toggleGlyph,"data-active":e,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,S.jsx)(`path`,{className:F.toggleTopLine,d:`M5.5 6.75H18.5`}),(0,S.jsx)(`path`,{className:F.toggleMiddleLine,d:`M5.5 12H11.5`}),(0,S.jsx)(`path`,{className:F.toggleBottomLine,d:`M5.5 17.25H9.25`}),(0,S.jsx)(`path`,{className:F.toggleSparkle,d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`})]})}var I={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},At=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...I.navigation},{type:`header`,label:`Header`,...I.header},{type:`hero`,label:`Hero`,...I.hero},{type:`section`,label:`Section`,...I.section},{type:`sidebar`,label:`Sidebar`,...I.sidebar},{type:`footer`,label:`Footer`,...I.footer},{type:`modal`,label:`Modal`,...I.modal},{type:`banner`,label:`Banner`,...I.banner},{type:`drawer`,label:`Drawer`,...I.drawer},{type:`popover`,label:`Popover`,...I.popover},{type:`divider`,label:`Divider`,...I.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...I.card},{type:`text`,label:`Text`,...I.text},{type:`image`,label:`Image`,...I.image},{type:`video`,label:`Video`,...I.video},{type:`table`,label:`Table`,...I.table},{type:`grid`,label:`Grid`,...I.grid},{type:`list`,label:`List`,...I.list},{type:`chart`,label:`Chart`,...I.chart},{type:`codeBlock`,label:`Code Block`,...I.codeBlock},{type:`map`,label:`Map`,...I.map},{type:`timeline`,label:`Timeline`,...I.timeline},{type:`calendar`,label:`Calendar`,...I.calendar},{type:`accordion`,label:`Accordion`,...I.accordion},{type:`carousel`,label:`Carousel`,...I.carousel},{type:`logo`,label:`Logo`,...I.logo},{type:`faq`,label:`FAQ`,...I.faq},{type:`gallery`,label:`Gallery`,...I.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...I.button},{type:`input`,label:`Input`,...I.input},{type:`search`,label:`Search`,...I.search},{type:`form`,label:`Form`,...I.form},{type:`tabs`,label:`Tabs`,...I.tabs},{type:`dropdown`,label:`Dropdown`,...I.dropdown},{type:`toggle`,label:`Toggle`,...I.toggle},{type:`stepper`,label:`Stepper`,...I.stepper},{type:`rating`,label:`Rating`,...I.rating},{type:`fileUpload`,label:`File Upload`,...I.fileUpload},{type:`checkbox`,label:`Checkbox`,...I.checkbox},{type:`radio`,label:`Radio`,...I.radio},{type:`slider`,label:`Slider`,...I.slider},{type:`datePicker`,label:`Date Picker`,...I.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...I.avatar},{type:`badge`,label:`Badge`,...I.badge},{type:`tag`,label:`Tag`,...I.tag},{type:`breadcrumb`,label:`Breadcrumb`,...I.breadcrumb},{type:`pagination`,label:`Pagination`,...I.pagination},{type:`progress`,label:`Progress`,...I.progress},{type:`alert`,label:`Alert`,...I.alert},{type:`toast`,label:`Toast`,...I.toast},{type:`notification`,label:`Notification`,...I.notification},{type:`tooltip`,label:`Tooltip`,...I.tooltip},{type:`stat`,label:`Stat`,...I.stat},{type:`skeleton`,label:`Skeleton`,...I.skeleton},{type:`chip`,label:`Chip`,...I.chip},{type:`icon`,label:`Icon`,...I.icon},{type:`spinner`,label:`Spinner`,...I.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...I.pricing},{type:`testimonial`,label:`Testimonial`,...I.testimonial},{type:`cta`,label:`CTA`,...I.cta},{type:`productCard`,label:`Product Card`,...I.productCard},{type:`profile`,label:`Profile`,...I.profile},{type:`feature`,label:`Feature`,...I.feature},{type:`team`,label:`Team`,...I.team},{type:`login`,label:`Login`,...I.login},{type:`contact`,label:`Contact`,...I.contact}]}],jt={};for(let e of At)for(let t of e.items)jt[t.type]=t;function L({w:e,h:t=3,strong:n}){return(0,S.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function R({w:e,h:t,radius:n=3,style:r}){return(0,S.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function Mt({size:e}){return(0,S.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function Nt({width:e,height:t}){let n=Math.max(8,t*.2);return(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${n}px`,gap:e*.02},children:[(0,S.jsx)(R,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,S.jsx)(L,{w:e*.06}),(0,S.jsx)(L,{w:e*.07}),(0,S.jsx)(L,{w:e*.05}),(0,S.jsx)(L,{w:e*.06})]}),(0,S.jsx)(R,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Pt({width:e,height:t,text:n}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,S.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,S.jsx)(L,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,S.jsx)(L,{w:e*.6}),(0,S.jsx)(L,{w:e*.4}),(0,S.jsx)(R,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Ft({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,S.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,S.jsx)(L,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,S.jsx)(R,{w:10,h:10,radius:2}),(0,S.jsx)(L,{w:e*(.4+n*17%30/100)})]},n))]})}function It({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,S.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsx)(L,{w:`60%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`80%`,h:2}),(0,S.jsx)(L,{w:`70%`,h:2}),(0,S.jsx)(L,{w:`60%`,h:2})]},t))})}function z({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,S.jsx)(L,{w:e*.3,h:4,strong:!0}),(0,S.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,S.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,S.jsx)(L,{w:`90%`}),(0,S.jsx)(L,{w:`70%`}),(0,S.jsx)(L,{w:`80%`})]}),(0,S.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,S.jsx)(R,{w:70,h:26,radius:4}),(0,S.jsx)(R,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function Lt({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,S.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,S.jsx)(L,{w:`70%`,h:4,strong:!0}),(0,S.jsx)(L,{w:`95%`,h:2}),(0,S.jsx)(L,{w:`85%`,h:2}),(0,S.jsx)(L,{w:`50%`,h:2})]})]})}function Rt({width:e,height:t,text:n}){if(n)return(0,S.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,S.jsx)(L,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,S.jsx)(L,{w:`${70+t*13%25}%`,h:2},t))]})}function zt({width:e,height:t}){return(0,S.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,S.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,S.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,S.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function Bt({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,S.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,S.jsx)(L,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,S.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,S.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,S.jsx)(L,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function Vt({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,S.jsx)(Mt,{size:8}),(0,S.jsx)(L,{w:`${55+t*17%35}%`,h:2})]},t))})}function Ht({width:e,height:t,text:n}){return(0,S.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,S.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,S.jsx)(L,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Ut({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,S.jsx)(L,{w:Math.min(80,e*.3),h:2}),(0,S.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,S.jsx)(L,{w:`40%`,h:2})})]})}function Wt({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsx)(L,{w:60+t*17%30,h:2}),(0,S.jsx)(R,{w:`100%`,h:28,radius:4})]},t)),(0,S.jsx)(R,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function B({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,S.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,S.jsx)(L,{w:60,h:3,strong:t===0})},t))}),(0,S.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,S.jsx)(L,{w:`80%`,h:2}),(0,S.jsx)(L,{w:`65%`,h:2}),(0,S.jsx)(L,{w:`75%`,h:2})]})]})}function Gt({width:e,height:t}){let n=Math.min(e,t)/2;return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,S.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,S.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function Kt({width:e,height:t}){return(0,S.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(L,{w:Math.max(16,e*.5),h:2,strong:!0})})}function qt({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,S.jsx)(L,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,S.jsx)(L,{w:e*.35})]})}function Jt({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,S.jsx)(L,{w:e*.3,h:4,strong:!0}),(0,S.jsx)(L,{w:e*.7}),(0,S.jsx)(L,{w:e*.5}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,S.jsx)(R,{w:`33%`,h:`100%`,radius:4}),(0,S.jsx)(R,{w:`33%`,h:`100%`,radius:4}),(0,S.jsx)(R,{w:`33%`,h:`100%`,radius:4})]})]})}function V({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,S.jsx)(R,{w:`100%`,h:`100%`,radius:4},t))})}function Yt({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,S.jsx)(L,{w:e*.5,h:3,strong:!0})}),(0,S.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,S.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,S.jsx)(L,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function Xt({width:e,height:t}){let n=Math.min(e,t)/2;return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,S.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function Zt({width:e,height:t}){let n=Math.min(t/2,20);return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,S.jsx)(Mt,{size:Math.min(14,t*.4)}),(0,S.jsx)(L,{w:`50%`,h:2})]})}function Qt({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,S.jsx)(Mt,{size:Math.min(20,t*.5)}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:`60%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`80%`,h:2})]}),(0,S.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function $t({width:e,height:t}){return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function en({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,S.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>{let n=30+(t*37+17)%55;return(0,S.jsx)(R,{w:r,h:`${n}%`,radius:2},t)})})}function tn({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,S.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,S.jsx)(R,{w:`100%`,h:`100%`,radius:4}),(0,S.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function nn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,S.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(L,{w:`60%`,h:2})}),(0,S.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function rn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,S.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,S.jsx)(L,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function H({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,S.jsx)(R,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function an({width:e}){return(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,S.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function on({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,S.jsx)(L,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,S.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function sn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,S.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,S.jsx)(R,{w:`100%`,h:`100%`,radius:4}),(0,S.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,S.jsx)(Mt,{size:5}),(0,S.jsx)(Mt,{size:5}),(0,S.jsx)(Mt,{size:5})]})]})}function U({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,S.jsx)(L,{w:e*.4,h:3,strong:!0}),(0,S.jsx)(L,{w:e*.3,h:6,strong:!0}),(0,S.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,S.jsx)(Mt,{size:5}),(0,S.jsx)(L,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,S.jsx)(R,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function cn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,S.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsx)(L,{w:`90%`,h:2}),(0,S.jsx)(L,{w:`75%`,h:2}),(0,S.jsx)(L,{w:`60%`,h:2})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,S.jsx)(Mt,{size:20}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,S.jsx)(L,{w:60,h:3,strong:!0}),(0,S.jsx)(L,{w:40,h:2})]})]})]})}function ln({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,S.jsx)(L,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,S.jsx)(L,{w:e*.35}),(0,S.jsx)(R,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function un({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,S.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,S.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:`40%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`70%`,h:2})]})]})}function dn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,S.jsx)(L,{w:e*.4,h:3,strong:!0}),(0,S.jsx)(R,{w:60,h:Math.min(24,t*.6),radius:4})]})}function fn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,S.jsx)(L,{w:e*.5,h:2}),(0,S.jsx)(L,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,S.jsx)(L,{w:e*.3,h:2})]})}function pn({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,S.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,S.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function mn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,S.jsx)(L,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,S.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function hn({width:e,height:t}){let n=Math.min(t*.7,e/7.5);return(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,S.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function gn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,S.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,S.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,S.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,S.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,S.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,S.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,S.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function _n({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,S.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,S.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,S.jsx)(Mt,{size:8}),t<n-1&&(0,S.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,S.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function vn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,S.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,S.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,S.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,S.jsx)(L,{w:e*.4,h:2}),(0,S.jsx)(L,{w:e*.25,h:2})]})}function yn({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,S.jsx)(Mt,{size:6}),(0,S.jsx)(Mt,{size:6}),(0,S.jsx)(Mt,{size:6})]}),Array.from({length:n},(e,t)=>(0,S.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,S.jsx)(L,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function bn({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,S.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,S.jsx)(L,{w:e*.3,h:3,strong:!0}),(0,S.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,S.jsx)(L,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,S.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function xn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,S.jsx)(Mt,{size:Math.min(32,t*.55)}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:`50%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`75%`,h:2})]}),(0,S.jsx)(L,{w:30,h:2})]})}function Sn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,S.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,S.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,S.jsx)(L,{w:`65%`,h:4,strong:!0}),(0,S.jsx)(L,{w:`40%`,h:3}),(0,S.jsx)(`div`,{style:{flex:1}}),(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,S.jsx)(L,{w:`30%`,h:5,strong:!0}),(0,S.jsx)(R,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function Cn({width:e,height:t}){let n=Math.min(48,t*.3);return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,S.jsx)(Mt,{size:n}),(0,S.jsx)(L,{w:e*.45,h:4,strong:!0}),(0,S.jsx)(L,{w:e*.3,h:2}),(0,S.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,S.jsx)(L,{w:20,h:3,strong:!0}),(0,S.jsx)(L,{w:28,h:2})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,S.jsx)(L,{w:20,h:3,strong:!0}),(0,S.jsx)(L,{w:28,h:2})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,S.jsx)(L,{w:20,h:3,strong:!0}),(0,S.jsx)(L,{w:28,h:2})]})]})]})}function W({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,S.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,S.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,S.jsx)(L,{w:n*.4,h:4,strong:!0}),(0,S.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,S.jsx)(`div`,{style:{padding:`6px 0`},children:(0,S.jsx)(L,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function wn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,S.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,S.jsx)(L,{w:`70%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`90%`,h:2}),(0,S.jsx)(L,{w:`60%`,h:2})]}),(0,S.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function Tn({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,S.jsx)(R,{w:n,h:n,radius:n*.25}),(0,S.jsx)(L,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function En({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,S.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,S.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,S.jsx)(L,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,S.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function Dn({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,S.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,S.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,S.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function On({width:e,height:t}){let n=Math.min(e,t);return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,S.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function kn({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,S.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function An({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,S.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,S.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,S.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function jn({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,S.jsx)(L,{w:`40%`,h:2}),(0,S.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,S.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,S.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,S.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,S.jsx)(L,{w:e*.25,h:2,strong:!0}),(0,S.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,S.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,S.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function Mn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,S.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,S.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,S.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,S.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Nn({width:e,height:t}){return(0,S.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,S.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,S.jsx)(L,{w:`60%`,h:2,strong:!0}),(0,S.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function Pn({width:e,height:t}){let n=Math.min(e,t);return(0,S.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function Fn({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,S.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,S.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function In({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,S.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,S.jsx)(R,{w:n,h:n,radius:n*.25}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,S.jsx)(L,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,S.jsx)(L,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Ln({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,S.jsx)(L,{w:e*.3,h:4,strong:!0}),(0,S.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,S.jsx)(Mt,{size:r}),(0,S.jsx)(L,{w:e*.12,h:3,strong:!0}),(0,S.jsx)(L,{w:e*.08,h:2})]},n))})]})}function Rn({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,S.jsx)(L,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,S.jsx)(L,{w:e*.35,h:2}),(0,S.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:Math.min(60,e*.2),h:2}),(0,S.jsx)(R,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,S.jsx)(R,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,S.jsx)(L,{w:e*.4,h:2})]})}function zn({width:e,height:t}){return(0,S.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,S.jsx)(L,{w:e*.4,h:4,strong:!0}),(0,S.jsx)(L,{w:e*.6,h:2}),(0,S.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:50,h:2}),(0,S.jsx)(R,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,S.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:40,h:2}),(0,S.jsx)(R,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,S.jsx)(L,{w:50,h:2}),(0,S.jsx)(R,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,S.jsx)(L,{w:60,h:2}),(0,S.jsx)(R,{w:`100%`,h:`100%`,radius:4})]}),(0,S.jsx)(R,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var Bn={navigation:Nt,hero:Pt,sidebar:Ft,footer:It,modal:z,card:Lt,text:Rt,image:zt,table:Bt,list:Vt,button:Ht,input:Ut,form:Wt,tabs:B,avatar:Gt,badge:Kt,header:qt,section:Jt,grid:V,dropdown:Yt,toggle:Xt,search:Zt,toast:Qt,progress:$t,chart:en,video:tn,tooltip:nn,breadcrumb:rn,pagination:H,divider:an,accordion:on,carousel:sn,pricing:U,testimonial:cn,cta:ln,alert:un,banner:dn,stat:fn,stepper:pn,tag:mn,rating:hn,map:gn,timeline:_n,fileUpload:vn,codeBlock:yn,calendar:bn,notification:xn,productCard:Sn,profile:Cn,drawer:W,popover:wn,logo:Tn,faq:En,gallery:Dn,checkbox:On,radio:kn,slider:An,datePicker:jn,skeleton:Mn,chip:Nn,icon:Pn,spinner:Fn,feature:In,team:Ln,login:Rn,contact:zn};function Vn({type:e,width:t,height:n,text:r}){let i=Bn[e];return i?(0,S.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,S.jsx)(i,{width:t,height:n,text:r})}):(0,S.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var Hn=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
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
  width: calc(100% - 2rem);
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

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
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

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
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

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
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

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
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
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
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
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
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
  -webkit-user-select: none;
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
  -webkit-user-select: none;
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
  -webkit-user-select: none;
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
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
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
  -webkit-user-select: none;
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
  -webkit-user-select: none;
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
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,G={overlay:`styles-module__overlay___aWh-q`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,overlayExiting:`styles-module__overlayExiting___iEmYr`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`},Un=24,Wn=5;function Gn(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Wn&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Wn&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Wn?a:0,v=Math.abs(o)<Wn?o:0,y=[],b=new Set,x=s+_,S=c+_,ee=l+_,te=u+v,C=d+v,ne=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,ee,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[te,ne,C])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Kn(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function qn({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearingPlacements:m,wireframe:h}){let[g,_]=(0,b.useState)(new Set),[v,y]=(0,b.useState)(null),[x,ee]=(0,b.useState)(null),[te,C]=(0,b.useState)(null),[ne,w]=(0,b.useState)([]),[T,E]=(0,b.useState)(null),[re,ie]=(0,b.useState)(!1),ae=(0,b.useRef)(!1),[oe,se]=(0,b.useState)(new Set),ce=(0,b.useRef)(new Map),le=(0,b.useRef)(null),O=(0,b.useRef)(null),ue=(0,b.useRef)(e);ue.current=e;let de=(0,b.useRef)(u);de.current=u;let fe=(0,b.useRef)(f);fe.current=f;let pe=(0,b.useRef)(p);pe.current=p;let me=(0,b.useRef)(d);(0,b.useEffect)(()=>{d!==me.current&&(me.current=d,_(new Set))},[d]),(0,b.useEffect)(()=>{m?.length&&(_(e=>new Set([...e].filter(e=>!m.some(t=>t.id===e)))),O.current=null)},[m]),(0,b.useEffect)(()=>{let i=i=>{let a=i.composedPath()[0]||i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);se(e),_(new Set),D(()=>{t(ue.current.filter(t=>!e.has(t.id))),se(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&_(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let he=(0,b.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${G.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){O.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);y({x:t,y:n,w:r,h:i}),C({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),y(null),C(null),O.current=null,o?.(!1);let m=I[n],h,g,v,b;i?(h=Math.min(s,c),g=Math.min(l,u)+a,v=Math.max(Un,Math.abs(c-s)),b=Math.max(Un,Math.abs(u-l))):(v=m.width,b=m.height,h=s-v/2,g=l+a-b/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:Kn(),type:n,x:h,y:g,width:v,height:b,scrollY:a,timestamp:Date.now()};t([...e,x]),_(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||_(new Set),O.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);if((n>4||r>4)&&(t=!0),t){let t=Math.min(s,e.clientX),n=Math.min(l,e.clientY);ee({x:t,y:n,w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})}},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),O.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);_(u)}ee(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),ge=(0,b.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${G.handle}`)||i.closest(`.${G.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),_(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&de.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});O.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,v=new Map;for(let t of e)u.has(t.id)&&v.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Kn(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,_=-1/0;for(let[e,t]of u){let n=v.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),_=Math.max(_,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=Gn({x:a,y:o,width:g-a,height:_-o},p,new Set(u.keys()),void 0,l);w(x);let S=r+y,ee=i+b;m=S,h=ee,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+ee)}:e})),fe.current?.(S,ee)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),O.current=null,o?.(!1),w([]),pe.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),_e=(0,b.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;_(new Set([r])),O.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Un,u+n)),i.includes(`w`)&&(o=Math.max(Un,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Un,d+a)),i.includes(`n`)&&(h=Math.max(Un,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=Gn({x:g,y:_,width:o,height:h},ue.current,new Set([r]),m,l);w(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(ue.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),C({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),C(null),O.current=null,o?.(!1),w([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),ve=(0,b.useCallback)(e=>{O.current=null,se(t=>{let n=new Set(t);return n.add(e),n}),_(t=>{let n=new Set(t);return n.delete(e),n}),D(()=>{t(ue.current.filter(t=>t.id!==e)),se(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),ye={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},be=(0,b.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(ae.current=!!n.text,E(t),ie(!1))},[e]),xe=(0,b.useCallback)(()=>{T&&(ie(!0),D(()=>{E(null),ie(!1)},150))},[T]);(0,b.useEffect)(()=>{a&&T&&xe()},[a]);let k=(0,b.useCallback)(n=>{T&&(t(e.map(e=>e.id===T?{...e,text:n.trim()||void 0}:e)),xe())},[T,e,t,xe]),A=typeof window<`u`?window.scrollY:0,Se=[`nw`,`ne`,`se`,`sw`],Ce=h?`#f97316`:`#3c82f7`,we=[{dir:`n`,cls:G.edgeN,arrow:(0,S.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:Ce})})},{dir:`e`,cls:G.edgeE,arrow:(0,S.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:Ce})})},{dir:`s`,cls:G.edgeS,arrow:(0,S.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:Ce})})},{dir:`w`,cls:G.edgeW,arrow:(0,S.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:Ce})})}];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{ref:le,className:`${G.overlay} ${i?``:G.light} ${n?G.placing:``} ${c?G.passthrough:``} ${a?G.overlayExiting:``} ${h?G.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:he,children:e.map(e=>{let t=g.has(e.id),n=jt[e.type]?.label||e.type,r=e.y-A;return(0,S.jsxs)(`div`,{"data-design-placement":e.id,className:`${G.placement} ${t?G.selected:``} ${oe.has(e.id)||m?.includes(e)?G.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>ge(t,e.id),onDoubleClick:()=>be(e.id),children:[(0,S.jsx)(`span`,{className:G.placementLabel,children:n}),(0,S.jsx)(`span`,{className:`${G.placementAnnotation} ${e.text?G.annotationVisible:``}`,children:(e.text&&ce.current.set(e.id,e.text),e.text||ce.current.get(e.id)||``)}),(0,S.jsx)(`div`,{className:G.placementContent,children:(0,S.jsx)(Vn,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,S.jsx)(`div`,{className:G.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>ve(e.id),children:`✕`}),Se.map(t=>(0,S.jsx)(`div`,{className:`${G.handle} ${G[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>_e(n,e.id,t)},t)),we.map(({dir:t,cls:n,arrow:r})=>(0,S.jsx)(`div`,{className:`${G.edgeHandle} ${n}`,onMouseDown:n=>_e(n,e.id,t),children:r},t))]},e.id)})}),T&&(()=>{let t=e.find(e=>e.id===T);if(!t)return null;let n=t.y-A,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,S.jsx)(ct,{element:jt[t.type]?.label||t.type,placeholder:ye[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:ae.current?`Save`:`Set`,onSubmit:k,onCancel:xe,onDelete:ae.current?()=>{k(``)}:void 0,isExiting:re,lightMode:!i,style:u})})(),v&&(0,S.jsx)(`div`,{className:G.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),x&&(0,S.jsx)(`div`,{className:G.selectBox,style:{left:x.x,top:x.y,width:x.w,height:x.h},"data-feedback-toolbar":!0}),te&&(0,S.jsx)(`div`,{className:G.sizeIndicator,style:{left:te.x,top:te.y},"data-feedback-toolbar":!0,children:te.text}),ne.map((e,t)=>(0,S.jsx)(`div`,{className:G.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-A,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function Jn(e,{keepMounted:t=!1,onExited:n}={}){let[r,i]=(0,b.useState)(t||e),a=(0,b.useRef)(null),o=(0,b.useRef)(n);return e&&!r&&i(!0),(0,b.useLayoutEffect)(()=>{o.current=n},[n]),(0,b.useLayoutEffect)(()=>{let n=a.current;if(!n||n.dataset.panelOpen===`true`===e)return;getComputedStyle(n).opacity,n.dataset.panelPresent=`true`,n.dataset.panelOpen=String(e);let r=!1,s=n.getAnimations?.()??[];return Promise.allSettled(s.map(e=>e.finished)).then(()=>{r||e||(delete n.dataset.panelPresent,t||i(!1),o.current?.())}),()=>{r=!0}},[e,r,t]),{ref:a,mounted:r}}function Yn(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?G.fadeTop:``} ${n?G.fadeBottom:``}`}var K=`currentColor`,q=`0.5`;function Xn({type:e}){switch(e){case`navigation`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:K,opacity:`.4`}),(0,S.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`})]});case`header`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:K,opacity:`.35`}),(0,S.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`hero`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:K,opacity:`.35`}),(0,S.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:K,strokeWidth:q})]});case`section`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`sidebar`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`footer`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:K,opacity:`.2`})]});case`modal`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:K,strokeWidth:q})]});case`divider`:return(0,S.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,S.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:K,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:K,opacity:`.04`}),(0,S.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`text`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`image`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:K,strokeWidth:`.3`,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:K,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:K,strokeWidth:q,fill:K,opacity:`.15`})]});case`table`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:K,strokeWidth:`.3`,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:K,strokeWidth:`.3`,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:K,strokeWidth:`.3`,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:K,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:K,strokeWidth:q})]});case`list`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:K,opacity:`.2`})]});case`chart`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:K,opacity:`.2`})]});case`accordion`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:K,strokeWidth:q})]});case`carousel`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:K,strokeWidth:q,opacity:`.35`}),(0,S.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:K,strokeWidth:q,opacity:`.35`}),(0,S.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:K,opacity:`.35`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:K,opacity:`.15`}),(0,S.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:K,opacity:`.15`})]});case`button`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.25`})]});case`input`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`search`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`form`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:K,strokeWidth:q})]});case`tabs`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:K,strokeWidth:q})]});case`dropdown`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:K,strokeWidth:q,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:K,opacity:`.3`})]});case`avatar`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:K,strokeWidth:q})]});case`badge`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.25`})]});case`breadcrumb`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:K,strokeWidth:q,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:K,strokeWidth:q,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`pagination`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:K,opacity:`.15`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:K,strokeWidth:q})]});case`progress`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:K,opacity:`.2`})]});case`toast`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`tooltip`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:K,strokeWidth:q})]});case`pricing`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.1`}),(0,S.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.1`}),(0,S.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:K,opacity:`.2`})]});case`testimonial`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:K,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,S.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:K,opacity:`.12`}),(0,S.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:K,strokeWidth:q,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`cta`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:K,strokeWidth:q})]});case`alert`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:K,strokeWidth:`0.6`,opacity:`.5`}),(0,S.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:K,opacity:`.5`}),(0,S.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.2`})]});case`banner`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:K,strokeWidth:q})]});case`stat`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`stepper`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:K,opacity:`.2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:K,strokeWidth:`.4`,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:K,strokeWidth:`.4`,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:K,strokeWidth:q})]});case`tag`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:K,strokeWidth:q,opacity:`.2`}),(0,S.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:K,strokeWidth:q,opacity:`.2`})]});case`rating`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:K,opacity:`.25`}),(0,S.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:K,opacity:`.25`}),(0,S.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:K,strokeWidth:q,opacity:`.25`})]});case`map`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:K,strokeWidth:`.3`,opacity:`.15`}),(0,S.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:K,strokeWidth:`.3`,opacity:`.15`}),(0,S.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:K,opacity:`.15`,stroke:K,strokeWidth:q})]});case`timeline`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:K,strokeWidth:`.4`,opacity:`.25`}),(0,S.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:K,opacity:`.2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`fileUpload`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:K,strokeWidth:q,strokeDasharray:`2 1`}),(0,S.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.15`})]});case`codeBlock`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:K,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:K,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:K,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`calendar`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:K,strokeWidth:`.4`,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:K,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:K,opacity:`.2`})]});case`notification`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:K,strokeWidth:q,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:K,opacity:`.12`}),(0,S.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:K,opacity:`.25`})]});case`productCard`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:K,opacity:`.04`}),(0,S.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:K,strokeWidth:q})]});case`profile`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`drawer`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:K,strokeWidth:q,opacity:`.15`})]});case`popover`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:K,strokeWidth:q})]});case`logo`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:K,strokeWidth:q,opacity:`.3`}),(0,S.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`faq`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:K,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,S.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:K,opacity:`.12`}),(0,S.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:K,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,S.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`gallery`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:K,strokeWidth:q})]});case`checkbox`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:K,strokeWidth:q,opacity:`.35`})]});case`radio`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:K,strokeWidth:q}),(0,S.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:K,opacity:`.3`})]});case`slider`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:K,strokeWidth:q})]});case`datePicker`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:K,opacity:`.12`}),(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:K,strokeWidth:q,strokeDasharray:`2 1`,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:K,opacity:`.3`}),(0,S.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:K,opacity:`.2`})]});case`skeleton`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:K,opacity:`.08`}),(0,S.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:K,opacity:`.08`}),(0,S.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:K,opacity:`.08`})]});case`chip`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:K,opacity:`.08`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:K,strokeWidth:q,opacity:`.2`}),(0,S.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:K,strokeWidth:q,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:K,strokeWidth:q,opacity:`.25`})]});case`icon`:return(0,S.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,S.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:K,strokeWidth:q,opacity:`.3`})});case`spinner`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:K,strokeWidth:q,opacity:`.12`}),(0,S.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:K,strokeWidth:q,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:K,strokeWidth:q,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:K,opacity:`.12`}),(0,S.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.12`})]});case`team`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:K,strokeWidth:q,opacity:`.5`}),(0,S.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.15`}),(0,S.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:K,opacity:`.1`})]});case`login`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:K,opacity:`.25`}),(0,S.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:K,opacity:`.2`})]});case`contact`:return(0,S.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:K,opacity:`.2`}),(0,S.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:K,strokeWidth:q}),(0,S.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:K,opacity:`.2`})]});default:return null}}function Zn({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,S.jsx)(`div`,{ref:r,className:`${G.placeScroll} ${i||``}`,children:At.map(r=>(0,S.jsxs)(`div`,{className:G.paletteSection,children:[(0,S.jsx)(`div`,{className:G.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,S.jsxs)(`button`,{type:`button`,"aria-pressed":e===r.type,className:`${G.paletteItem} ${e===r.type?G.active:``} ${a?G.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,S.jsx)(`span`,{className:G.paletteItemIcon,"aria-hidden":`true`,children:(0,S.jsx)(Xn,{type:r.type})}),(0,S.jsx)(`span`,{className:G.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function Qn({value:e,suffix:t}){let[n,r]=(0,b.useState)(null),[i,a]=(0,b.useState)(t),[o,s]=(0,b.useState)(`up`),c=(0,b.useRef)(e),l=(0,b.useRef)(t),u=(0,b.useRef)(),d=n!==null&&i!==t;return(0,b.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=D(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,S.jsxs)(S.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,S.jsxs)(`span`,{className:G.rollingWrap,children:[(0,S.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,S.jsxs)(`span`,{className:`${G.rollingNum} ${o===`up`?G.exitUp:G.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,S.jsxs)(`span`,{className:`${G.rollingNum} ${o===`up`?G.enterUp:G.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`span`,{className:G.rollingWrap,children:[(0,S.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,S.jsx)(`span`,{className:`${G.rollingNum} ${o===`up`?G.exitUp:G.exitDown}`,children:n},`o${n}-${e}`),(0,S.jsx)(`span`,{className:`${G.rollingNum} ${o===`up`?G.enterUp:G.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function $n({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let{ref:h,mounted:g}=Jn(a,{onExited:o}),[_,v]=(0,b.useState)(!1),[y,x]=(0,b.useState)(!0),ee=(0,b.useRef)(0),te=(0,b.useRef)(``),C=(0,b.useRef)(null),[ne,w]=(0,b.useState)(``),T=s>0||r>0,E=s+r;if(E>0&&(ee.current=E,te.current=u?E===1?`Component`:`Components`:E===1?`Change`:`Changes`),(0,b.useEffect)(()=>{if(T)_?x(!1):(x(!0),v(!0),ie(()=>{ie(()=>{x(!1)})}));else{x(!0);let e=D(()=>v(!1),300);return()=>clearTimeout(e)}},[T]),(0,b.useEffect)(()=>{if(!a)return;let e=C.current;if(!e)return;let t=()=>w(Yn(e));e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[a]),!g)return null;let re=[];return s>0&&re.push(`placed`),r>0&&re.push(`captured`),(0,S.jsxs)(`div`,{className:`${G.palette} ${n?``:G.light}`,ref:e=>{h.current=e,e?.toggleAttribute(`inert`,!a)},"aria-hidden":!a,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),children:[(0,S.jsxs)(`div`,{className:G.paletteHeader,children:[(0,S.jsx)(`div`,{className:G.paletteHeaderTitle,children:`Layout Mode`}),(0,S.jsxs)(`div`,{className:G.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,S.jsx)(`a`,{href:`https://agentation.com/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,S.jsxs)(`button`,{type:`button`,"aria-pressed":u,className:`${G.canvasToggle} ${u?G.active:``}`,onClick:()=>d(!u),children:[(0,S.jsx)(`span`,{className:G.canvasToggleIcon,"aria-hidden":`true`,children:(0,S.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,S.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,S.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,S.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,S.jsx)(`span`,{className:G.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,S.jsx)(`div`,{className:`${G.wireframePurposeWrap} ${u?``:G.collapsed}`,"aria-hidden":!u,ref:e=>{e?.toggleAttribute(`inert`,!u)},children:(0,S.jsx)(`div`,{className:G.wireframePurposeInner,children:(0,S.jsx)(`textarea`,{className:G.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,S.jsx)(Zn,{activeType:e,onSelect:t,onDragStart:l,scrollRef:C,fadeClass:ne,blankCanvas:u}),_&&(0,S.jsx)(`div`,{className:`${G.paletteFooterWrap} ${y?G.footerHidden:``}`,children:(0,S.jsx)(`div`,{className:G.paletteFooterInner,children:(0,S.jsx)(`div`,{className:G.paletteFooterInnerContent,children:(0,S.jsxs)(`div`,{className:G.paletteFooter,children:[(0,S.jsx)(`span`,{className:G.paletteFooterCount,children:(0,S.jsx)(Qn,{value:ee.current,suffix:te.current})}),(0,S.jsx)(`button`,{className:G.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}var er=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),tr={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},nr={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},rr=new Set([`script`,`style`,`noscript`,`link`,`meta`]),ir=40;function ar(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function or(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:or(n)} > ${t}:nth-child(${r})`}return t}function sr(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&tr[r])return tr[r];if(nr[t])return nr[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=De(e);return a.charAt(0).toUpperCase()+a.slice(1)}function cr(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function lr(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function ur(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(rr.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<ir)return;let o=er.has(n),s=e.getAttribute(`role`)&&tr[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=ar(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:sr(e),tagName:n,selector:or(e),role:e.getAttribute(`role`),className:cr(e),textSnippet:lr(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function dr(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=ar(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:sr(e),tagName:e.tagName.toLowerCase(),selector:or(e),role:e.getAttribute(`role`),className:cr(e),textSnippet:lr(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var fr={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},pr=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],mr=24,hr=16,gr=5;function _r(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<gr&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<gr&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<gr?i:0,m=Math.abs(a)<gr?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var vr=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function yr(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(vr.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=hr&&e.height>=hr)return t;t=t.parentElement}return null}function br({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearing:d}){let{sections:f}=e,p=(0,b.useRef)(e);p.current=e;let[m,h]=(0,b.useState)(new Set);(0,b.useEffect)(()=>{d&&h(new Set)},[d]);let g=(0,b.useRef)(c);(0,b.useEffect)(()=>{c!==g.current&&(g.current=c,h(new Set))},[c]);let[_,v]=(0,b.useState)(null),[y,x]=(0,b.useState)(!1),ee=(0,b.useRef)(!1),te=(0,b.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(ee.current=!!t.note,v(e),x(!1))},[f]),C=(0,b.useCallback)(()=>{_&&(x(!0),D(()=>{v(null),x(!1)},150))},[_]),ne=(0,b.useCallback)(n=>{_&&(t({...e,sections:f.map(e=>e.id===_?{...e,note:n.trim()||void 0}:e)}),C())},[_,f,e,t,C]);(0,b.useEffect)(()=>{r&&_&&C()},[r]);let[w,T]=(0,b.useState)(new Set),E=(0,b.useRef)(new Map),[re,ie]=(0,b.useState)(null),[ae,oe]=(0,b.useState)(null),[se,ce]=(0,b.useState)([]),[le,O]=(0,b.useState)(0),ue=(0,b.useRef)(null),de=(0,b.useRef)(new Set),fe=(0,b.useRef)(new Map),[pe,me]=(0,b.useState)(new Map),[he,ge]=(0,b.useState)(new Map),_e=(0,b.useRef)(new Set),ve=(0,b.useRef)(new Map),ye=(0,b.useRef)(s);ye.current=s;let be=(0,b.useRef)(l);be.current=l;let xe=(0,b.useRef)(u);xe.current=u,(0,b.useEffect)(()=>{a&&h(new Set)},[a]);let[k,A]=(0,b.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,b.useEffect)(()=>{if(!k){let e=D(()=>A(!0),380);return()=>clearTimeout(e)}},[]);let Se=(0,b.useRef)(new Set);(0,b.useEffect)(()=>{Se.current=new Set(f.map(e=>e.selector))},[f]),(0,b.useEffect)(()=>{let e=()=>O(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,b.useEffect)(()=>{let e=e=>{if(ue.current){ie(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){ie(null);return}if(t.closest(`[data-feedback-toolbar]`)){ie(null);return}if(t.closest(`[data-design-placement]`)){ie(null);return}if(t.closest(`[data-annotation-popup]`)){ie(null);return}let n=yr(t);if(!n){ie(null);return}for(let e of Se.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){ie(null);return}}catch{}let r=n.getBoundingClientRect();ie({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,b.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.webkitUserSelect=`none`,document.body.style.userSelect=`none`,()=>{document.body.style.webkitUserSelect=e,document.body.style.userSelect=e}},[]),(0,b.useEffect)(()=>{let n=n=>{if(ue.current||n.button!==0)return;let r=n.composedPath()[0]??n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=yr(r),a=!1;if(i)for(let e of Se.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=dr(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),ye.current?.(l,s),ie(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;ue.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=_r({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);ce(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=Pe().querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),me(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),be.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),ue.current=null,ce([]),me(new Map);let n=Pe().querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),xe.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),ye.current?.(t,s);return}}catch{}s||(h(new Set),ye.current?.(new Set,!1))}else s||(h(new Set),ye.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,b.useEffect)(()=>{let n=n=>{let r=n.composedPath()[0]||n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);T(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),D(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),T(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let Ce=(0,b.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${G.handle}`)||i.closest(`.${G.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&ye.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});ue.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=Pe().querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=_r({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,ce(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}me(b),be.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),ue.current=null,ce([]),me(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),xe.current?.(d,p,!0);return}}xe.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),we=(0,b.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),ue.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=Pe().querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(mr,c.width+t)),i.includes(`w`)&&(p=Math.max(mr,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(mr,c.height+n)),i.includes(`n`)&&(m=Math.max(mr,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-le}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),oe({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),me(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),oe(null),ue.current=null,me(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,le]),Te=(0,b.useCallback)(e=>{T(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),D(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),T(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),j=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},Ee=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},De=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)fe.current.has(e.id)||(Ee(e)?fe.current.set(e.id,`move`):De(e)&&fe.current.set(e.id,`resize`));for(let e of fe.current.keys())f.some(t=>t.id===e)||fe.current.delete(e);let Oe=f.filter(e=>{try{if(w.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),ke=Oe.filter(e=>j(e)),Ae=Oe.filter(e=>!j(e)),je=new Set(ke.map(e=>e.id));for(let e of de.current)je.has(e)||de.current.delete(e);let Me=[...je].sort().join(`,`);for(let e of ke)ve.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});(0,b.useEffect)(()=>{let e=_e.current;_e.current=je;let t=new Map;for(let n of e)if(!je.has(n)){if(!f.some(e=>e.id===n))continue;let e=ve.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),ve.current.delete(n))}if(t.size>0){ge(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=D(()=>{ge(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[Me,f]);let Ne=(0,b.useRef)(null),Pe=()=>Ne.current?.getRootNode()??document;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{ref:Ne,className:`${G.rearrangeOverlay} ${n?``:G.light} ${r?G.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[re&&(0,S.jsx)(`div`,{className:G.hoverHighlight,style:{left:re.x,top:re.y,width:re.w,height:re.h}}),Ae.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=fr,a=m.has(e.id);return(0,S.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${G.sectionOutline} ${a?G.selected:``} ${d||r||w.has(e.id)?G.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...k?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>Ce(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,S.jsx)(`span`,{className:G.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,S.jsx)(`span`,{className:`${G.sectionAnnotation} ${e.note?G.annotationVisible:``}`,children:(e.note&&E.current.set(e.id,e.note),e.note||E.current.get(e.id)||``)}),(0,S.jsxs)(`span`,{className:G.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,S.jsx)(`div`,{className:G.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Te(e.id),children:`✕`}),pr.map(t=>(0,S.jsx)(`div`,{className:`${G.handle} ${G[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>we(n,e.id,t)},t))]},e.id)}),ke.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-le,i=m.has(e.id),o=Ee(e),s=De(e);if(a&&!i)return null;let c=!de.current.has(e.id);return c&&de.current.add(e.id),(0,S.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${G.ghostOutline} ${i?G.selected:``} ${d||r||w.has(e.id)?G.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...k?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>Ce(t,e.id),onDoubleClick:()=>te(e.id),children:[(0,S.jsx)(`span`,{className:G.sectionLabel,style:{backgroundColor:fr.pill},children:e.label}),(0,S.jsx)(`span`,{className:`${G.sectionAnnotation} ${e.note?G.annotationVisible:``}`,children:(e.note&&E.current.set(e.id,e.note),e.note||E.current.get(e.id)||``)}),(0,S.jsxs)(`span`,{className:G.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,S.jsx)(`div`,{className:G.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Te(e.id),children:`✕`}),pr.map(t=>(0,S.jsx)(`div`,{className:`${G.handle} ${G[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>we(n,e.id,t)},t)),(0,S.jsx)(`span`,{className:G.ghostBadge,children:(()=>{let t=fe.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,S.jsxs)(S.Fragment,{children:[`Suggested `,e,` `,(0,S.jsxs)(`span`,{className:G.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of ke){let n=pe.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:w.has(t.id)})}for(let[t,n]of pe)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of he)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,S.jsxs)(`svg`,{className:`${G.connectorSvg} ${d||r?G.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-le)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-le)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=pe.has(e),b=y||i?1:.4,x=y||i?1:.5;return(0,S.jsxs)(`g`,{className:a?G.connectorExiting:``,children:[(0,S.jsx)(`path`,{className:G.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,S.jsx)(`circle`,{className:G.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`}),(0,S.jsx)(`circle`,{className:G.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,S.jsx)(`defs`,{children:(0,S.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,S.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),_&&(()=>{let e=f.find(e=>e.id===_);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-le,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,S.jsx)(ct,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:ee.current?`Save`:`Set`,onSubmit:ne,onCancel:C,onDelete:ee.current?()=>{ne(``)}:void 0,isExiting:y,lightMode:!n,style:u})})(),ae&&(0,S.jsx)(`div`,{className:G.sizeIndicator,style:{left:ae.x,top:ae.y},"data-feedback-toolbar":!0,children:ae.text}),se.map((e,t)=>(0,S.jsx)(`div`,{className:G.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-le,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var xr=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Sr(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||xr.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:sr(e),selector:or(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||xr.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:sr(n),selector:or(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Cr(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function wr(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function Tr(e,t){let n=t?Cr(t):Sr(),r=wr(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Dr(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Er(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Er(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Dr(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Or(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function kr(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Or(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function Ar(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Or(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var jr=15;function Mr(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<jr&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<jr&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function Nr(e){if(e.length<2)return[];let t=Mr(e.map(e=>({label:e.label,rect:e.originalRect}))),n=Mr(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function Pr(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||xr.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:or(t)}}}return{viewport:e,contentArea:null}}function Fr(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:or(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function Ir(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function Lr(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function Rr(e){let t=Fr(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function zr(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=jt[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`,e.text&&(a+=`   - Note: "${e.text}"
`)}),a;let o=Pr(t);a+=Lr(o),a+=`### Components
`,i.forEach((e,t)=>{let n=jt[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`,e.text&&(a+=`   - Note: "${e.text}"
`);let s=kr(Tr(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=Ir(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>jt[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=jt[t.type]?.label||t.type,o=jt[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=jt[n.type]?.label||n.type,s=jt[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=jt[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Br(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1,s=!!e.note;if(!a&&!o&&!s){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged&&!e.section.note))return``;let a=`## Suggested Layout Changes

`,o=Pr({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=Lr(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){e.note?(a+=`- **${e.label}** \u2014 note only
`,a+=`  - Note: "${e.note}"
`):a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){a+=n&&r?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,e.note&&(a+=`  - Note: "${e.note}"
`);continue}if(a+=n&&r?`- Suggested: move and resize **${e.label}**
`:n?`- Suggested: move **${e.label}**
`:`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,e.note&&(a+=`  - Note: "${e.note}"
`),n){let e=Tr(i,s(`original`)),n=Tr(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${Ar(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=kr(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=Ir(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=Rr(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=Nr(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var Vr=`feedback-annotations-`,Hr=7;function Ur(e){return`${Vr}${e}`}function Wr(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(Ur(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-Hr*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function Gr(e,t){if(typeof window<`u`)try{localStorage.setItem(Ur(e),JSON.stringify(t))}catch{}}function Kr(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-Hr*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(Vr)){let n=r.slice(Vr.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function qr(e,t,n){Gr(e,t.map(e=>({...e,_syncedTo:n})))}var Jr=`agentation-design-`;function Yr(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${Jr}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function Xr(e,t){if(typeof window<`u`)try{localStorage.setItem(`${Jr}${e}`,JSON.stringify(t))}catch{}}function Zr(e){if(typeof window<`u`)try{localStorage.removeItem(`${Jr}${e}`)}catch{}}var Qr=`agentation-rearrange-`;function $r(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${Qr}${e}`);return t?JSON.parse(t):null}catch{return null}}function ei(e,t){if(typeof window<`u`)try{localStorage.setItem(`${Qr}${e}`,JSON.stringify(t))}catch{}}function ti(e){if(typeof window<`u`)try{localStorage.removeItem(`${Qr}${e}`)}catch{}}var ni=`agentation-wireframe-`;function ri(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${ni}${e}`);return t?JSON.parse(t):null}catch{return null}}function ii(e,t){if(typeof window<`u`)try{localStorage.setItem(`${ni}${e}`,JSON.stringify(t))}catch{}}function ai(e){if(typeof window<`u`)try{localStorage.removeItem(`${ni}${e}`)}catch{}}var oi=`agentation-session-`;function si(e){return`${oi}${e}`}function ci(e){if(typeof window>`u`)return null;try{return localStorage.getItem(si(e))}catch{return null}}function li(e,t){if(typeof window<`u`)try{localStorage.setItem(si(e),t)}catch{}}function ui(e){if(typeof window<`u`)try{localStorage.removeItem(si(e))}catch{}}var di=`${oi}toolbar-hidden`;function fi(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(di)===`1`}catch{return!1}}function pi(e){if(typeof window<`u`)try{e?sessionStorage.setItem(di,`1`):sessionStorage.removeItem(di)}catch{}}async function mi(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function hi(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function gi(e,t,n){!n.elementPath&&(n.element===`body`||n.element===`html`)&&(n={...n,elementPath:n.element});let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function _i(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function vi(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var J={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},yi=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),bi=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],xi=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Si(e){let t=e?.mode??`filtered`,n=yi;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...yi,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...bi,...e.skipPatterns]:bi,userPatterns:e?.userPatterns??xi,filter:e?.filter}}function Ci(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function wi(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Ti(e,t){let n=Ci(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Ei(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Ti(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Di=null,Oi=new WeakMap;function ki(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function Ai(){if(Di!==null)return Di;if(typeof document>`u`)return!1;if(document.body&&ki(document.body))return Di=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&ki(t))return Di=!0,!0}if(document.body){for(let e of document.body.children)if(ki(e))return Di=!0,!0}return Di=!1,!1}var ji={map:Oi};function Mi(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function Ni(e){let t=Mi(e);return t?e[t]:null}function Pi(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Fi(e){let{tag:t,type:n,elementType:r}=e;if(t===J.HostComponent||t===J.HostText||t===J.HostHoistable||t===J.HostSingleton||t===J.Fragment||t===J.Mode||t===J.Profiler||t===J.DehydratedFragment||t===J.HostRoot||t===J.HostPortal||t===J.ScopeComponent||t===J.OffscreenComponent||t===J.LegacyHiddenComponent||t===J.CacheComponent||t===J.TracingMarkerComponent||t===J.Throw||t===J.ViewTransitionComponent||t===J.ActivityComponent)return null;if(t===J.ForwardRef){let e=r;if(e?.render){let t=Pi(e.render);if(t)return t}return e?.displayName?e.displayName:Pi(n)}if(t===J.MemoComponent||t===J.SimpleMemoComponent){let e=r;if(e?.type){let t=Pi(e.type);if(t)return t}return e?.displayName?e.displayName:Pi(n)}if(t===J.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===J.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===J.LazyComponent){let e=r;return e?._status===1&&e._result?Pi(e._result):null}return t===J.SuspenseComponent||t===J.SuspenseListComponent?null:t===J.IncompleteClassComponent||t===J.IncompleteFunctionComponent||t===J.FunctionComponent||t===J.ClassComponent||t===J.IndeterminateComponent?Pi(n):null}function Ii(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Li(e,t){let n=Si(t),r=n.mode===`all`;if(r){let t=ji.map.get(e);if(t!==void 0)return t}if(!Ai()){let t={path:null,components:[]};return r&&ji.map.set(e,t),t}let i=n.mode===`smart`?wi(e):void 0,a=[];try{let t=Ni(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=Fi(t);e&&!Ii(e)&&Ei(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&ji.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&ji.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&ji.map.set(e,o),o}var Ri={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function zi(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function Bi(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Vi(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:Bi(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Bi(n._debugOwner)};n=n.return,r++}return null}function Hi(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:Bi(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:Bi(t)}}}t=t.return,n++}return null}var Ui=new Map;function Wi(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===Ri.FunctionComponent||t===Ri.IndeterminateComponent)&&typeof n==`function`)return n;if(t===Ri.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===Ri.MemoComponent||t===Ri.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function Gi(){let e=b,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function Ki(e,t){let n=e.split(`
`),r=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],i=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,a=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of n){let n=e.trim();if(!n||r.some(e=>e.test(n)))continue;if(t){let e=t.replace(/^bound /,``).replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);if(!RegExp(`(?:at (?:Object\\.)?|^)${e}(?: \\(|@| \\[)`).test(n))continue}let o=i.exec(n)||a.exec(n);if(o)return{fileName:o[1],line:parseInt(o[2],10),column:parseInt(o[3],10)}}return null}function qi(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function Ji(e){let t=Wi(e);if(!t)return null;if(Ui.has(t))return Ui.get(t);let n=Gi();if(!n)return Ui.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(n){if(n instanceof Error&&n.message===`probe`&&n.stack){let r=Ki(n.stack,t.name);r&&(i={fileName:qi(r.fileName),lineNumber:r.line,columnNumber:r.column,componentName:Bi(e)||void 0})}}}finally{n.set(r)}return Ui.set(t,i),i}function Yi(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=Ji(n);if(e)return e;n=n.return,r++}return null}function Y(e){let t=zi(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=Vi(t);if(n||=Hi(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=Yi(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function Xi(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function Zi(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=Y(n);if(e.found)return e;n=n.parentElement,r++}return Y(e)}var Qi=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function $i(e,t){let n=`## Page Feedback: ${e}
`,r=t?.replace(/[\r\n\t]+/g,` `).trim();return r&&(n+=`**App:** ${r.replace(/[\\`*_\[\]<>]/g,`\\$&`)}
`),n}function ea(e,t,n=`standard`,r={}){if(e.length===0)return``;let i=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,a=$i(t,r.appName);return n===`forensic`?(a+=`
**Environment:**
`,a+=`- Viewport: ${i}
`,typeof window<`u`&&(a+=`- URL: ${window.location.href}
`,a+=`- User Agent: ${navigator.userAgent}
`,a+=`- Timestamp: ${new Date().toISOString()}
`,a+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),a+=`
---
`):n!==`compact`&&(a+=`**Viewport:** ${i}
`),a+=`
`,e.forEach((e,t)=>{n===`compact`?(a+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(a+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),a+=`
`):n===`forensic`?(a+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(a+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(a+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(a+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(a+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),a+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(a+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(a+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(a+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(a+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(a+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(a+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(a+=`**React:** ${e.reactComponents}
`),a+=`**Feedback:** ${e.comment}

`):(a+=`### ${t+1}. ${e.element}
`,a+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(a+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(a+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(a+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(a+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(a+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(a+=`**Context:** ${e.nearbyText.slice(0,100)}
`),a+=`**Feedback:** ${e.comment}

`)}),a.trim()}function ta(e,t,n=`markdown`){return n===`markdown`?t:[...new Set(e.map(e=>n===`source`?e.sourceFile:n===`classes`?e.cssClasses:e.attributes?.[n.attribute]).filter(e=>typeof e==`string`&&e.length>0))].join(`
`)}async function na(e){if(typeof window>`u`)return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return ra(e)}function ra(e){let t=document.createElement(`textarea`),n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;let r=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null,i=r&&r.selectionStart!==null?{start:r.selectionStart,end:r.selectionEnd,direction:r.selectionDirection}:null,a=document.getSelection(),o=a?Array.from({length:a.rangeCount},(e,t)=>a.getRangeAt(t).cloneRange()):[];try{return t.value=e,t.setAttribute(`readonly`,``),t.style.cssText=`position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;`,document.body.appendChild(t),t.focus({preventScroll:!0}),t.select(),t.setSelectionRange(0,e.length),document.execCommand(`copy`)}catch{return!1}finally{if(t.remove(),n instanceof HTMLElement&&n.isConnected&&(n.focus({preventScroll:!0}),r&&i&&r.setSelectionRange(i.start,i.end,i.direction)),a){a.removeAllRanges();for(let e of o)a.addRange(e)}}}function ia(e){if(!e)return e;try{let t=new URL(e,`http://agentation.invalid`);return t.pathname+t.search+t.hash}catch{return e}}function aa(e,t,n=[]){let r=new Map,i=new Map(n.map(e=>[e.id,e])),a=!1;async function o(n,i){if(a||i.running||i.timer)return;let s=i.desired,c=t.get(n);if(!s&&!c){r.delete(n),t.delete(n);return}let l=s?JSON.stringify(s):void 0;if(!(s&&c&&i.synced===l)){i.running=!0;try{if(!s)await e.remove(c),t.delete(n),i.synced=void 0;else if(c)await e.update(c,s),i.synced=l;else{t.set(n,``);let r=await e.create(s);t.set(n,r.id),i.synced=l}i.retries=0,i.running=!1,!a&&r.get(n)===i&&o(n,i)}catch(e){i.running=!1,!a&&r.get(n)===i&&(console.warn(`[Agentation] Failed to sync layout feedback:`,e),t.get(n)&&i.retries<3&&(i.timer=D(()=>{i.timer=void 0,o(n,i)},500*2**i.retries++)))}}}return{replace(e){let n=new Map(e.map(e=>[e.id,e]));for(let[e,a]of n){let n=r.get(e);if(!n){n={running:!1,retries:0},r.set(e,n);let o=[...i.values()].find(e=>e.kind===a.kind&&ia(e.url)===ia(a.url)&&(a.kind===`placement`?e.timestamp===a.timestamp&&e.element===a.element:e.element===a.element));o&&(t.set(e,o.id),i.delete(o.id))}JSON.stringify(n.desired)!==JSON.stringify(a)&&(n.retries=0,n.timer&&clearTimeout(n.timer),n.timer=void 0),n.desired=a}for(let[e,t]of r)n.has(e)||(t.desired=void 0),o(e,t)},forget(e){let n=r.get(e);n?.timer&&clearTimeout(n.timer),r.delete(e),t.delete(e)},dispose(){a=!0;for(let e of r.values())e.timer&&clearTimeout(e.timer)}}}function oa(e,t,n,r){let i=!1,a,o,s=1e3,c,l=e=>{!i&&(e?.status===`resolved`||e?.status===`dismissed`)&&r(e)},u=async()=>{if(i||c||!n())return;let r=new AbortController;c=r;let a=D(()=>r.abort(),5e3);try{let n=await fetch(`${e}/sessions/${t}`,{signal:r.signal});if(!n.ok)return;let a=await n.json();!i&&!r.signal.aborted&&Array.isArray(a.annotations)&&a.annotations.forEach(l)}catch{}finally{clearTimeout(a),c===r&&(c=void 0)}},d=()=>{if(i)return;let n=new EventSource(`${e}/sessions/${t}/events`),r=()=>{s=1e3,u()},c=e=>{try{l(JSON.parse(e.data).payload)}catch{}},f=()=>{n.readyState!==EventSource.CLOSED||i||o!==void 0||(a?.(),o=D(()=>{o=void 0,d()},s),s=Math.min(s*2,1e4))};n.addEventListener(`open`,r),n.addEventListener(`annotation.updated`,c),n.addEventListener(`error`,f),a=()=>{n.removeEventListener(`open`,r),n.removeEventListener(`annotation.updated`,c),n.removeEventListener(`error`,f),n.close()}};d();let f=re(()=>{u()},1e4);return()=>{i=!0,a?.(),o!==void 0&&clearTimeout(o),clearInterval(f),c?.abort()}}var sa=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,ca={surface:`styles-module__surface___7qnpJ`},la=(0,b.forwardRef)(function({annotation:e,editing:t,exiting:n,restorePreview:r,editorProps:i,lightMode:a,scrollY:o,onExited:s},c){let l=(0,b.useRef)({annotation:e,editorProps:i}),u=e??l.current.annotation,d=e?i:l.current.editorProps,f=(0,b.useRef)(null),p=(0,b.useRef)(null),m=(0,b.useRef)(),h=(0,b.useRef)(o),g=t&&!n?`edit`:e&&(!t||r)?`preview`:`hidden`,_=g===`preview`||!t;return(0,b.useLayoutEffect)(()=>{e&&(l.current={annotation:e,editorProps:i})},[e,i]),(0,b.useLayoutEffect)(()=>{let e=f.current;if(!e||!u)return;let n=g===`edit`&&(m.current!==u.id||e.dataset.state===`hidden`&&getComputedStyle(e).opacity===`0`);n&&(e.dataset.directEntry=`true`);let r=()=>{let n=u.x/100*window.innerWidth,r=u.isFixed?u.y:u.y-o,i=g===`preview`||!t,a=parseFloat(e.style.getPropertyValue(`--preview-width`))||200,s=Math.min(a,window.innerWidth-24),c=Math.max(12,Math.min(window.innerWidth-s-12,n-s/2)),l=i?s:Math.min(280,window.innerWidth-24),d=Math.min(i?12:20,(window.innerWidth-l)/2),f=r>window.innerHeight-(i?101:290);e.style.left=`${Math.max(d,Math.min(window.innerWidth-l-d,c))}px`,e.style.right=`auto`,e.style.top=`${Math.max(12,Math.min(window.innerHeight-12,r+(f?-21:21)))}px`,e.style.bottom=`auto`,e.style.transform=f?`translateY(-100%)`:`translateY(0)`,e.style.maxHeight=`${Math.max(100,f?r-33:window.innerHeight-r-33)}px`},i=m.current!==u.id||h.current!==o||e.dataset.state===`hidden`;i&&(e.dataset.positioning=`true`),r(),(i||n)&&e.getBoundingClientRect(),delete e.dataset.positioning,delete e.dataset.directEntry,e.dataset.state=g,e.inert=g!==`edit`,m.current=u.id,h.current=o;let a=()=>{e.dataset.positioning=`true`,r(),e.getBoundingClientRect(),delete e.dataset.positioning};return window.addEventListener(`resize`,a),()=>window.removeEventListener(`resize`,a)},[u?.id,u?.x,u?.y,u?.isFixed,g,t,o,u?.comment]),(0,b.useLayoutEffect)(()=>{t&&!n&&p.current?.focus()},[t,n,u?.id]),nt(f,n,s),(0,b.useImperativeHandle)(c,()=>({shake(){f.current?.animate?.([{translate:`0px`},{translate:`-3px`},{translate:`3px`},{translate:`-2px`},{translate:`2px`},{translate:`0px`}],{duration:250}),p.current?.focus()}}),[]),!u||!d?null:(0,S.jsx)(`div`,{ref:f,className:`${M.popup} ${ca.surface} ${a?M.light:``}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":t?``:void 0,"data-state":`hidden`,"aria-hidden":g===`hidden`,onClick:e=>e.stopPropagation(),onKeyDownCapture:e=>{e.key===`Escape`&&!e.nativeEvent.isComposing&&t&&(e.preventDefault(),e.stopPropagation(),d.onCancel())},children:(0,S.jsx)(N,{ref:p,...d,variant:`card`,preview:_,resetOnPreview:!t,disabled:!t||n},u.id)})}),ua=`@keyframes styles-module__markerIn___x4G8D {
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
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
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
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
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

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,da={marker:`styles-module__marker___9CKF7`,previewVisible:`styles-module__previewVisible___imMag`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,confirm:`styles-module__confirm___BtMvq`,markerIn:`styles-module__markerIn___x4G8D`,markerConfirm:`styles-module__markerConfirm___RT4Sk`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,number:`styles-module__number___1JFu9`,numberGlyph:`styles-module__numberGlyph___qchdk`,actionGlyph:`styles-module__actionGlyph___AFRt0`,actionVisible:`styles-module__actionVisible___Kb--l`,plus:`styles-module__plus___xslMP`},fa=(0,b.memo)(function({annotation:e,pending:t=!1,globalIndex:n,layerIndex:r,layerSize:i,isExiting:a,isClearing:o,isAnimated:s,isNew:c,isHovered:l,isRemoving:u,onRemoveComplete:d,isEditingAny:f,renumberFrom:p,markerClickBehavior:m,onHoverEnter:h,onEnterComplete:g,onHoverLeave:_,onClick:v,onContextMenu:y}){let[x,ee]=(0,b.useState)(s),te=(0,b.useRef)(t),[C,ne]=(0,b.useState)(!1),w=te.current&&!t&&x&&!C;(0,b.useLayoutEffect)(()=>{a&&ee(!1)},[a]);let T=(0,b.useRef)(null),E=(0,b.useRef)({action:!1,delete:!1}),D=l&&!f,re=D&&m===`delete`;(0,b.useLayoutEffect)(()=>{u||(E.current={action:D,delete:re})},[u,D,re]);let ie=u?E.current.action:D,ae=u?E.current.delete:re;nt(T,u,()=>d(e.id));let oe=e.isMultiSelect,se=oe?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,ce=o?da.clearing:a||u?da.exit:w?da.confirm:!s&&!x?da.enter:``,le=o?`${Math.min(r*20,120)}ms`:u||t||w?`0ms`:a?`${(i-1-r)*20}ms`:`${c?0:r*20}ms`;return(0,S.jsxs)(`button`,{ref:T,type:`button`,"aria-label":t?`Pending annotation`:`${m===`delete`?`Delete`:`Edit`} annotation ${n+1}: ${e.element}`,disabled:t||a||u||o,tabIndex:t||f?-1:0,className:`${da.marker} ${t?da.pending:``} ${oe?da.multiSelect:``} ${ce} ${!t&&ie?da.actionVisible:``} ${ae?da.hovered:``} ${l&&!f&&!u?da.previewVisible:``}`,"data-annotation-marker":t?void 0:``,"data-annotation-pending":t?``:void 0,style:{left:`${e.x}%`,top:e.y,backgroundColor:ae?void 0:se,animationDelay:le},onAnimationEnd:n=>{n.target===n.currentTarget&&(ce===da.enter||ce===da.confirm)&&(ee(!0),t||ne(!0),t||g(e.id))},onMouseOver:()=>{t||h(e)},onMouseOut:t=>{let n=t.relatedTarget;(!(n instanceof Node)||!t.currentTarget.contains(n))&&_(e.id)},onFocus:n=>{!t&&n.currentTarget.matches(`:focus-visible`)&&h(e)},onBlur:()=>_(e.id),onClick:n=>{n.stopPropagation(),!t&&!a&&!u&&v(e,n.currentTarget)},onContextMenu:y?n=>{m===`delete`&&(n.preventDefault(),n.stopPropagation(),!t&&!a&&!u&&y(e,n.currentTarget))}:void 0,children:[(0,S.jsx)(`span`,{className:`${da.number} ${p!==null&&n>=p?da.renumber:``}`,"aria-hidden":`true`,children:(0,S.jsx)(`span`,{className:da.numberGlyph,children:n+1})},n),(0,S.jsx)(`span`,{className:da.actionGlyph,"aria-hidden":`true`,children:m===`delete`?(0,S.jsx)(vt,{size:oe?18:16}):(0,S.jsx)(xt,{size:16})}),te.current&&(0,S.jsx)(`span`,{className:da.plus,"aria-hidden":`true`,children:(0,S.jsx)(ut,{size:12})})]})}),pa=`.styles-module__switchContainer___Ka-AB {
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
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,ma={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`},ha=({className:e=``,checked:t,onChange:n,...r})=>(0,S.jsxs)(`div`,{className:`${ma.switchContainer} ${e}`,"data-checked":t?``:void 0,children:[(0,S.jsx)(`input`,{className:ma.switchInput,checked:t,onChange:n,type:`checkbox`,...r}),(0,S.jsx)(`div`,{className:ma.switchThumb})]}),ga=`.styles-module__checkboxContainer___joqZk {
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
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,_a={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`},va=({className:e=``,checked:t,onChange:n,...r})=>(0,S.jsxs)(`div`,{className:`${_a.checkboxContainer} ${e}`,"data-checked":t?``:void 0,children:[(0,S.jsx)(`input`,{className:_a.checkboxInput,type:`checkbox`,checked:t,onChange:n,...r}),(0,S.jsx)(`svg`,{className:_a.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,S.jsx)(`path`,{className:_a.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),ya=`.styles-module__container___w8eAF {
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
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,ba={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`},xa=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,b.useId)();return(0,S.jsxs)(`div`,{className:`${ba.container} ${e}`,...a,children:[(0,S.jsx)(va,{id:o,onChange:i,checked:r}),(0,S.jsx)(`label`,{className:ba.label,htmlFor:o,children:t}),n&&(0,S.jsx)(Dt,{content:n})]})},Sa=`@keyframes styles-module__cycleTextIn___VBNTi {
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
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
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
  width: 253px;
  max-width: calc(100vw - 20px);
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
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
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
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
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
  border: none;
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
  color: #333;
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
}`,X={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,below:`styles-module__below___Vpv-k`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`},Ca=(0,b.memo)(function({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,onExited:s,isOpen:c,toolbarNearBottom:l,settingsPage:u,onSettingsPageChange:d,onHideToolbar:f}){let{ref:p}=Jn(c,{keepMounted:!0,onExited:s}),m=(0,b.useRef)(null),h=(0,b.useRef)(null),g=(0,b.useRef)(!1);(0,b.useLayoutEffect)(()=>{c&&g.current&&(g.current=!1,(u===`automations`?h:m).current?.focus())},[c,u]);let _=n?`Switch to light mode`:`Switch to dark mode`;return(0,S.jsx)(`div`,{className:`${X.settingsPanel} ${l?X.below:``}`,style:l?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,ref:e=>{p.current=e,e?.toggleAttribute(`inert`,!c)},role:`group`,"aria-label":`Feedback settings`,"aria-hidden":!c,children:(0,S.jsxs)(`div`,{className:X.settingsPanelContainer,children:[(0,S.jsxs)(`div`,{className:`${X.settingsPage} ${u===`automations`?X.slideLeft:``}`,ref:e=>{e?.toggleAttribute(`inert`,u!==`main`)},"aria-hidden":u!==`main`,children:[(0,S.jsxs)(`div`,{className:X.settingsHeader,children:[(0,S.jsx)(`a`,{className:X.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Agentation`,children:`Agentation`}),(0,S.jsxs)(`p`,{className:X.settingsVersion,children:[`v`,`3.1.2`]}),(0,S.jsx)(`button`,{className:X.themeToggle,onClick:r,title:_,"aria-label":_,children:(0,S.jsx)(`span`,{className:X.themeIconWrapper,children:(0,S.jsx)(`span`,{className:X.themeIcon,children:n?(0,S.jsx)(yt,{size:20}):(0,S.jsx)(bt,{size:20})},n?`sun`:`moon`)})})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`div`,{className:X.settingsSection,children:[(0,S.jsxs)(`div`,{className:X.settingsRow,children:[(0,S.jsxs)(`div`,{className:X.settingsLabel,children:[`Output Detail`,(0,S.jsx)(Dt,{content:`Controls how much detail is included in the copied output`})]}),(0,S.jsxs)(`button`,{className:X.cycleButton,onClick:()=>{t({outputDetail:Qi[(Qi.findIndex(t=>t.value===e.outputDetail)+1)%Qi.length].value})},children:[(0,S.jsx)(`span`,{className:X.cycleButtonText,children:Qi.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,S.jsx)(`span`,{className:X.cycleDots,children:Qi.map(t=>(0,S.jsx)(`span`,{className:`${X.cycleDot} ${e.outputDetail===t.value?X.active:``}`},t.value))})]})]}),(0,S.jsxs)(`div`,{className:`${X.settingsRow} ${X.settingsRowMarginTop} ${i?``:X.settingsRowDisabled}`,children:[(0,S.jsxs)(`div`,{className:X.settingsLabel,children:[`React Components`,(0,S.jsx)(Dt,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,S.jsx)(ha,{"aria-label":`React Components`,checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,S.jsxs)(`div`,{className:`${X.settingsRow} ${X.settingsRowMarginTop}`,children:[(0,S.jsxs)(`div`,{className:X.settingsLabel,children:[`Hide Until Restart`,(0,S.jsx)(Dt,{content:`Hides the toolbar until you open a new tab`})]}),(0,S.jsx)(ha,{"aria-label":`Hide Until Restart`,checked:!1,onChange:e=>{e.target.checked&&f()}})]})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`div`,{className:X.settingsSection,children:[(0,S.jsx)(`div`,{className:`${X.settingsLabel} ${X.settingsLabelMarker}`,children:`Marker Color`}),(0,S.jsx)(`div`,{className:X.colorOptions,children:ja.map(n=>(0,S.jsx)(`button`,{className:`${X.colorOption} ${e.annotationColorId===n.id?X.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,"aria-label":n.label,type:`button`},n.id))})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`div`,{className:X.settingsSection,children:[(0,S.jsx)(xa,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,S.jsx)(xa,{className:X.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`button`,{className:X.settingsNavLink,ref:m,onClick:e=>{g.current=e.detail===0,e.currentTarget.blur(),d(`automations`)},children:[(0,S.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,S.jsxs)(`span`,{className:X.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,S.jsx)(`span`,{className:`${X.mcpNavIndicator} ${X[a]}`}),(0,S.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,S.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,S.jsxs)(`div`,{className:`${X.settingsPage} ${X.automationsPage} ${u===`automations`?X.slideIn:``}`,ref:e=>{e?.toggleAttribute(`inert`,u!==`automations`)},"aria-hidden":u!==`automations`,children:[(0,S.jsxs)(`button`,{className:X.settingsBackButton,ref:h,"aria-label":`Back to settings`,onClick:e=>{g.current=e.detail===0,e.currentTarget.blur(),d(`main`)},children:[(0,S.jsx)(St,{size:16}),(0,S.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`div`,{className:X.settingsSection,children:[(0,S.jsxs)(`div`,{className:X.settingsRow,children:[(0,S.jsxs)(`span`,{className:X.automationHeader,children:[`MCP Connection`,(0,S.jsx)(Dt,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,S.jsx)(`div`,{className:`${X.mcpStatusDot} ${X[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,S.jsxs)(`p`,{className:X.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,S.jsx)(`a`,{href:`https://agentation.com/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:X.learnMoreLink,children:`Learn more`})]})]}),(0,S.jsx)(`div`,{className:X.divider}),(0,S.jsxs)(`div`,{className:`${X.settingsSection} ${X.settingsSectionGrow}`,children:[(0,S.jsxs)(`div`,{className:X.settingsRow,children:[(0,S.jsxs)(`span`,{className:X.automationHeader,children:[`Webhooks`,(0,S.jsx)(Dt,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,S.jsxs)(`div`,{className:X.autoSendContainer,children:[(0,S.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${X.autoSendLabel} ${e.webhooksEnabled?X.active:``} ${e.webhookUrl?``:X.disabled}`,children:`Auto-Send`}),(0,S.jsx)(ha,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,S.jsx)(`p`,{className:X.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,S.jsx)(`textarea`,{className:X.webhookUrlInput,placeholder:`Webhook URL`,"aria-label":`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})});function wa({x:e,y:t,elementName:n,reactComponents:r}){let i=(0,b.useRef)(null);return(0,b.useLayoutEffect)(()=>{let n=i.current;if(!n)return;let r=()=>{let r=n.offsetWidth,i=n.offsetHeight;n.style.left=`${Math.max(8,Math.min(e,window.innerWidth-r-8))}px`;let a=t-i-8;n.style.top=`${Math.max(8,Math.min(a,window.innerHeight-i-8))}px`};return r(),window.addEventListener(`resize`,r),()=>window.removeEventListener(`resize`,r)},[e,t,n,r]),(0,S.jsxs)(`div`,{ref:i,className:`${F.hoverTooltip} ${F.enter}`,children:[r&&(0,S.jsx)(`div`,{className:F.hoverReactPath,children:r}),(0,S.jsx)(`div`,{className:F.hoverElementName,children:n})]})}var Ta=[`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the ‘X’ from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,Ot,rt,ga,Hn,Tt,lt,ua,sa,ya,Sa,pa].join(`
`);function Ea(e,t=`filtered`,n){let{name:r,path:i}=De(e,n);if(t===`off`)return{name:r,elementName:r,path:i,reactComponents:null};let a=Li(e,{mode:t});return{name:a.path?`${a.path} ${r}`:r,elementName:r,path:i,reactComponents:a.path}}var Da=!1,Oa={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},ka=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Aa=e=>e.metaKey||e.ctrlKey,ja=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}],Ma=[...ja.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${ja.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${ja.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join(``);function Na(e){let t=e;for(let e=ue(t.ownerDocument);e;e=ue(t.ownerDocument))t=e;let n=t;for(;n&&n!==document.body;){let e=window.getComputedStyle(n).position;if(e===`fixed`||e===`sticky`)return!0;n=n.parentElement}return!1}function Pa(e){return e.kind!==`placement`&&e.kind!==`rearrange`&&e.status!==`resolved`&&e.status!==`dismissed`}function Fa(e){let t=Y(e),n=t.found?t:Zi(e);if(n.found&&n.source)return Xi(n.source,`path`)}function Ia(e={}){let t=Ye(e.useHashLocation??!1),n=(0,b.useState)(!1),r=et(e.portalContainer);return r?(0,x.createPortal)((0,b.createElement)(La,{...e,key:e.useHashLocation?t:void 0,pathname:t,activeState:n,portalHost:r}),r):null}function La({pathname:e,activeState:t,portalHost:n,useHashLocation:r=!1,appName:i,enableKeyboardShortcuts:a=!0,identifyingAttributes:o=A,copyFormat:s=`markdown`,onOpenSource:c,portalContainer:l,demoAnnotations:u,demoDelay:d=1e3,enableDemoMode:f=!1,onAnnotationAdd:p,onAnnotationDelete:m,onAnnotationUpdate:h,onAnnotationsClear:g,onCopy:_,onSubmit:v,copyToClipboard:y=!0,endpoint:x,sessionId:ee,onSessionCreated:te,webhookUrl:C,className:ne}){let[w,T]=t,[,ae]=(0,b.useState)(0),[O]=(0,b.useState)(()=>k(document,()=>ae(e=>e+1)));(0,b.useEffect)(()=>(O.start(),()=>O.stop()),[O]);let ue=typeof s==`object`?s.attribute:void 0,de=(0,b.useMemo)(()=>ue?[...o,ue]:o,[o,ue]),fe=(0,b.useRef)(!0);(0,b.useLayoutEffect)(()=>(fe.current=!0,()=>{fe.current=!1}),[]);let pe=(0,b.useCallback)(t=>r?Ze(JSON.stringify([x,e]),t):t(),[x,e,r]),me=(0,b.useRef)(new Map),ge=(0,b.useRef)(new Set),_e=e=>Pa(e)&&!ge.current.has(e.id),be=async(...e)=>{let t=await gi(...e),n=e[2],i=n.id;if(i&&(me.current.set(i,t.id),ge.current.has(i)&&ge.current.add(t.id)),!r){let r=new URL(n.url||window.location.href).pathname,a=Wr(r).find(e=>e.id===i);try{if(ge.current.has(i))await vi(e[0],t.id);else if(a&&a.comment!==n.comment)return await _i(e[0],t.id,{comment:a.comment}),{...t,comment:a.comment}}catch(e){console.warn(`[Agentation] Failed to apply changes made during sync:`,e)}}return t},xe=t=>r?{...t,annotations:t.annotations.filter(n=>!ge.current.has(n.id)&&Qe(n.url||t.url,e,window.location.origin))}:t,Ce=(0,b.useRef)(e);Ce.current=e;let we=(t,n,r,i=e)=>{let a=le(t,Wr(i),n,me.current).filter(_e);i===Ce.current&&fe.current&&Ee(a),qr(i,a,r)},[j,Ee]=(0,b.useState)([]),[je,Me]=(0,b.useState)(!0),[Ne,Pe]=(0,b.useState)(()=>fi()),[Fe,Le]=(0,b.useState)(!1);(0,b.useLayoutEffect)(()=>{E()},[]);let He=(0,b.useRef)(null),Ue=(0,b.useRef)(null),Ge=(0,b.useRef)(null),Ke=(0,b.useRef)(null),Ye=(0,b.useRef)(!1),Xe=(0,b.useRef)(!1),$e=(0,b.useRef)(!1);(0,b.useLayoutEffect)(()=>{w&&Ye.current?(Ye.current=!1,Ge.current?.querySelector(`button:not(:disabled)`)?.focus()):!w&&Xe.current&&(Xe.current=!1,Ue.current?.focus())},[w]),(0,b.useEffect)(()=>{let e=e=>{let t=He.current;t&&e.composedPath().includes(t)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>n.addEventListener(t,e)),()=>{t.forEach(t=>n.removeEventListener(t,e))}},[n]);let[et,nt]=(0,b.useState)(!1),[rt,M]=(0,b.useState)(!1),[it,at]=(0,b.useState)(null),[ot,st]=(0,b.useState)({x:0,y:0}),[N,lt]=(0,b.useState)(null),[P,ut]=(0,b.useState)(!1),dt=ce(),vt=ce(),[yt,bt]=(0,b.useState)(`idle`),[xt,St]=(0,b.useState)(!1),wt=(0,b.useRef)(new Set),Tt=(0,b.useRef)(new Set),Et=(0,b.useRef)(),Ot=(0,b.useCallback)(()=>{!wt.current.size&&!Et.current&&St(!1)},[]);(0,b.useEffect)(()=>()=>clearTimeout(Et.current),[]);let[At,jt]=(0,b.useState)(null),[L,R]=(0,b.useState)(null),[Mt,Nt]=(0,b.useState)([]),[Pt,Ft]=(0,b.useState)(null),It=(0,b.useRef)(null);(0,b.useEffect)(()=>()=>{It.current&&clearTimeout(It.current)},[]);let[z,Lt]=(0,b.useState)(null),Rt=(0,b.useRef)(null),zt=(0,b.useRef)(!1),[Bt,Vt]=(0,b.useState)(!1);(0,b.useLayoutEffect)(()=>{if(z||!Rt.current)return;let e=Rt.current;Rt.current=null,!N&&(w&&e.isConnected&&!e.disabled?e:Ue.current)?.focus({preventScroll:!0})},[z,w,N]);let[Ht,Ut]=(0,b.useState)(null),[Wt,B]=(0,b.useState)([]),[Gt,Kt]=(0,b.useState)(0),[qt,Jt]=(0,b.useState)(!1),[V,Yt]=(0,b.useState)(!1),[Xt,Zt]=(0,b.useState)(!1),[Qt,$t]=(0,b.useState)(!1),[en,tn]=(0,b.useState)(`main`),[nn,rn]=(0,b.useState)(!1),[H,an]=(0,b.useState)(!1),[on,sn]=(0,b.useState)(!1),[U,cn]=(0,b.useState)([]),[ln,un]=(0,b.useState)(null),dn=(0,b.useRef)(!1),[fn,pn]=(0,b.useState)(!1),[mn,hn]=(0,b.useState)(!1),[gn,_n]=(0,b.useState)(1),[vn,yn]=(0,b.useState)(`new-page`),[bn,xn]=(0,b.useState)(``),[Sn,Cn]=(0,b.useState)(!1),[W,wn]=(0,b.useState)(null),Tn=(0,b.useRef)(!1),En=(0,b.useRef)({rearrange:null,placements:[]}),Dn=(0,b.useRef)({rearrange:null,placements:[]}),[On,kn]=(0,b.useState)(0),[An,jn]=(0,b.useState)(0),[Mn,Nn]=(0,b.useState)([]),[Pn,Fn]=(0,b.useState)(null),In=(0,b.useRef)({designPlacements:U,rearrangeState:W,blankCanvas:fn,wireframePurpose:bn});In.current={designPlacements:U,rearrangeState:W,blankCanvas:fn,wireframePurpose:bn};let Ln=(0,b.useRef)({placements:Mn,rearrange:Pn}),Rn=(0,b.useRef)(new Set),zn=(0,b.useRef)(new Set),Bn=(0,b.useRef)(null),Vn=(0,b.useRef)(),Hn=H&&w&&!on&&fn;(0,b.useEffect)(()=>{if(Hn){hn(!1);let e=ie(()=>{hn(!0)});return()=>cancelAnimationFrame(e)}hn(!1)},[Hn]);let Un=(0,b.useRef)(new Map),Wn=(0,b.useRef)([]),Gn=(0,b.useRef)(new Map),Kn=(0,b.useRef)(null),[Jn,Yn]=(0,b.useState)(!1),[K,q]=(0,b.useState)([]),Xn=(0,b.useRef)(K);Xn.current=K;let[Zn,Qn]=(0,b.useState)(null),er=(0,b.useRef)(null);(0,b.useRef)(!1),(0,b.useRef)([]),(0,b.useRef)(0),(0,b.useRef)(null),(0,b.useRef)(null),(0,b.useRef)(1);let[tr,nr]=(0,b.useState)(!1),rr=(0,b.useRef)(null),[ir,ar]=(0,b.useState)([]),or=(0,b.useRef)(!1),sr=()=>{rn(!0)},cr=()=>{rn(!1)},lr=()=>{tr||(rr.current=D(()=>nr(!0),850))},dr=()=>{rr.current&&=(clearTimeout(rr.current),null),nr(!1),cr()};(0,b.useEffect)(()=>()=>{rr.current&&clearTimeout(rr.current)},[]);let[fr,pr]=(0,b.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Oa,...e,annotationColorId:ja.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Oa.annotationColorId}}catch{return Oa}}),[mr,hr]=(0,b.useState)(!0),[gr,_r]=(0,b.useState)(!1),vr=(0,b.useCallback)(e=>{pr(t=>({...t,...e}))},[]),yr=(0,b.useCallback)(()=>{He.current?.classList.add(F.disableTransitions),hr(e=>!e),ie(()=>{He.current?.classList.remove(F.disableTransitions)})},[]),[xr,Sr]=(0,b.useState)(r?null:ee??null),Cr=(0,b.useRef)(!1),[wr,Tr]=(0,b.useState)(x?`connecting`:`disconnected`),[Er,Dr]=(0,b.useState)(null),[Or,kr]=(0,b.useState)(!1),Ar=(0,b.useRef)(null),jr=(0,b.useRef)(!1),Mr=(0,b.useRef)(new Set),Nr=(0,b.useRef)(new Map),Pr=(0,b.useCallback)(e=>{Mr.current.add(e),bi.current===e&&(bi.current=null)},[]),[Fr,Ir]=(0,b.useState)(new Set),[Lr,Rr]=(0,b.useState)(!1),[Vr,Hr]=(0,b.useState)(!1),[Jr,Qr]=(0,b.useState)(!1),ni=(0,b.useRef)(null),oi=(0,b.useRef)(null),si=(0,b.useRef)(null),di=(0,b.useRef)(null),J=(0,b.useRef)(!1),yi=(0,b.useRef)(0),bi=(0,b.useRef)(null),xi=(0,b.useRef)(null),Si=(0,b.useRef)(null),Ci=(0,b.useRef)(null),wi=(0,b.useRef)(null),Ti=(0,b.useCallback)(()=>tn(`main`),[]);(0,b.useEffect)(()=>{Qt||rn(!1)},[Qt]),(0,b.useLayoutEffect)(()=>{Qt&&$e.current&&($e.current=!1,He.current?.querySelector(`[data-agentation-settings-panel] button`)?.focus())},[Qt]);let Ei=w&&je&&!H;(0,b.useEffect)(()=>{if(Ei)M(!1),nt(!0),Mr.current.clear();else if(et){M(!0);let e=D(()=>{nt(!1),M(!1)},250);return()=>clearTimeout(e)}},[Ei]),(0,b.useEffect)(()=>{Yt(!0),Kt(window.scrollY);let t=Wr(e);Ee(t.filter(Pa)),Da||(_r(!0),Da=!0,D(()=>_r(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&hr(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&Dr(t)}}catch{}},[e]),(0,b.useEffect)(()=>{V&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(fr))},[fr,V]),(0,b.useEffect)(()=>{V&&localStorage.setItem(`feedback-toolbar-theme`,mr?`dark`:`light`)},[mr,V]);let Di=(0,b.useRef)(!1);(0,b.useEffect)(()=>{let e=Di.current;Di.current=Or,e&&!Or&&Er&&V&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(Er))},[Or,Er,V]),(0,b.useEffect)(()=>{if(!x||!V||Cr.current)return;Cr.current=!0,Tr(`connecting`);let t=window.location.href;pe(async()=>{try{let n=ci(e),i=ee||n,a=!1;if(i)try{let t=Wr(e),n=xe(await hi(x,i));Wn.current=n.annotations.filter(e=>e.kind===`placement`||e.kind===`rearrange`),fe.current&&(Sr(n.id),Tr(`connected`)),li(e,n.id),a=!0;let r=Wr(e).filter(Pa),o=new Set(n.annotations.map(e=>e.id)),s=r.filter(e=>!o.has(e.id));if(s.length>0){let r=`${typeof window<`u`?window.location.origin:``}${e}`,i=(await Promise.allSettled(s.map(e=>be(x,n.id,{...e,sessionId:n.id,url:r})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),s[t])),a=[...n.annotations,...i];we(t,a,n.id)}else we(t,n.annotations,n.id)}catch(t){console.warn(`[Agentation] Could not join session, creating new:`,t),ui(e)}if(!a){let n=await mi(x,t);li(e,n.id),fe.current&&(Sr(n.id),Tr(`connected`),te?.(n.id));let i=r?new Map([[e,Wr(e)]]):Kr(),a=typeof window<`u`?window.location.origin:``,o=[];for(let[t,r]of i){let i=r.filter(e=>Pa(e)&&!e._syncedTo);if(i.length===0)continue;let s=`${a}${t}`,c=t===e;o.push((async()=>{try{let e=c?n:await mi(x,s),r=(await Promise.allSettled(i.map(t=>be(x,e.id,{...t,sessionId:e.id,url:s})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),i[t]));we(i,r,e.id,t)}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${t}:`,e)}})())}await Promise.allSettled(o)}}catch(e){fe.current&&Tr(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})},[x,ee,V,te,e,pe]),(0,b.useEffect)(()=>{if(!x||!V)return;let e=async()=>{try{(await fetch(`${x}/health`)).ok?Tr(`connected`):Tr(`disconnected`)}catch{Tr(`disconnected`)}};e();let t=re(e,1e4);return()=>clearInterval(t)},[x,V]);let Oi=(0,b.useRef)(j),ki=(0,b.useRef)(!1);(0,b.useLayoutEffect)(()=>{Oi.current=j,ki.current=j.length>0||U.length>0||(W?.sections.length??0)>0},[j,U.length,W?.sections.length]);let Ai=(0,b.useCallback)(e=>{let t=wt.current.has(e);if(t&&(Tt.current.delete(e),Tt.current.size))return;let n=t?new Set(wt.current):new Set([e]);t&&(wt.current.clear(),Ot());for(let e of n)Nr.current.delete(e),Mr.current.delete(e);Ee(e=>e.filter(e=>!n.has(e.id))),Ir(e=>new Set([...e].filter(e=>!n.has(e))));let r=t?[]:Oi.current.filter(e=>e.kind!==`placement`&&e.kind!==`rearrange`),i=r.findIndex(t=>t.id===e);i>=0&&i<r.length-1&&(Ft(e=>e===null?i:Math.min(e,i)),It.current&&clearTimeout(It.current),It.current=D(()=>Ft(null),200))},[Ot]);(0,b.useEffect)(()=>!x||!V||!xr?void 0:oa(x,xr,()=>ki.current,e=>{let{id:t,kind:n}=e;if(n===`placement`){for(let[e,n]of Un.current)if(n===t){Kn.current?.placements.forget(e),cn(t=>t.filter(t=>t.id!==e));break}}else if(n===`rearrange`){for(let[e,n]of Gn.current)if(n===t){Kn.current?.rearrange.forget(e),wn(t=>{if(!t)return null;let n=t.sections.filter(t=>t.id!==e);return n.length===0?null:{...t,sections:n}});break}}else{if(!Oi.current.some(e=>e.id===t))return;Ir(e=>new Set(e).add(t))}}),[x,V,xr]),(0,b.useEffect)(()=>{if(!x||!V)return;let t=xi.current===`disconnected`,n=wr===`connected`;xi.current=wr,t&&n&&pe(async()=>{try{let t=Wr(e).filter(Pa);if(t.length===0)return;let n=`${typeof window<`u`?window.location.origin:``}${e}`,r=xr,i=[];if(r)try{i=xe(await hi(x,r)).annotations}catch{r=null}r||(r=(await mi(x,n)).id,fe.current&&Sr(r),li(e,r));let a=new Set(i.map(e=>e.id)),o=t.filter(e=>!a.has(e.id));if(o.length>0){let e=(await Promise.allSettled(o.map(e=>be(x,r,{...e,sessionId:r,url:n})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),o[t])),a=[...i,...e];we(t,a,r)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})},[wr,x,V,xr,e,pe]);let ji=(0,b.useCallback)(()=>{Fe||(Le(!0),$t(!1),T(!1),D(()=>{pi(!0),Pe(!0),Le(!1)},400))},[Fe]);(0,b.useEffect)(()=>{if(!f||!V||!u||u.length===0||j.length>0)return;let e=[];return e.push(D(()=>{T(!0)},d-200)),u.forEach((t,n)=>{let r=d+n*300;e.push(D(()=>{let e=document.querySelector(t.selector);if(!e)return;let r=he(e),{name:i,path:a}=De(e),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:t.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:t.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:Oe(e),cssClasses:Ae(e)};Ee(e=>[...e,o])},r))}),()=>{e.forEach(clearTimeout)}},[f,V,u,d]),(0,b.useEffect)(()=>{let e=()=>{Kt(window.scrollY),ae(e=>e+1),Jt(!0),wi.current&&clearTimeout(wi.current),wi.current=D(()=>{Jt(!1)},150)};return O.addEventListener(`scroll`,e,{passive:!0,capture:!0}),()=>{O.removeEventListener(`scroll`,e,!0),wi.current&&clearTimeout(wi.current)}},[O]),(0,b.useEffect)(()=>{if(!V)return;let t=j.filter(e=>!Fr.has(e.id));t.length>0?xr?qr(e,t,xr):Gr(e,t):localStorage.removeItem(Ur(e))},[j,e,V,xr,xt,Fr]),(0,b.useEffect)(()=>{if(V&&!dn.current){dn.current=!0;let t=Yr(e);t.length>0&&cn(t)}},[V,e]),(0,b.useEffect)(()=>{if(V&&dn.current&&!fn){let t=U.filter(e=>!Mn.includes(e));t.length>0?Xr(e,t):Zr(e)}},[U,e,V,fn,Mn]),(0,b.useEffect)(()=>{if(V&&!Tn.current){Tn.current=!0;let t=$r(e);if(t){let e={...t,sections:t.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))};wn(e)}}},[V,e]),(0,b.useEffect)(()=>{V&&Tn.current&&!fn&&(W&&W!==Pn?ei(e,W):ti(e))},[W,e,V,fn,Pn]);let Mi=(0,b.useRef)(!1);(0,b.useEffect)(()=>{if(V&&!Mi.current){Mi.current=!0;let t=ri(e);t&&(Dn.current={rearrange:t.rearrange,placements:t.placements||[]},t.purpose&&xn(t.purpose))}},[V,e]),(0,b.useEffect)(()=>{if(!V||!Mi.current||xt)return;let t=Dn.current;fn?(W?.sections?.length??0)>0||U.length>0||bn?ii(e,{rearrange:W,placements:U,purpose:bn}):ai(e):(t.rearrange?.sections?.length??0)>0||t.placements.length>0||bn?ii(e,{rearrange:t.rearrange,placements:t.placements,purpose:bn}):ai(e)},[W,U,bn,fn,e,V,xt]),(0,b.useEffect)(()=>{H&&!W&&wn({sections:[],originalOrder:[],detectedAt:Date.now()})},[H,W]),(0,b.useEffect)(()=>{if(!x||!xr)return;let e={create:e=>pe(()=>gi(x,xr,e)),update:(e,t)=>pe(()=>_i(x,e,t)),remove:e=>pe(()=>vi(x,e))};Un.current=new Map,Gn.current=new Map;let t={placements:aa(e,Un.current,Wn.current.filter(e=>e.kind===`placement`)),rearrange:aa(e,Gn.current,Wn.current.filter(e=>e.kind===`rearrange`))};return Kn.current=t,()=>{t.placements.dispose(),t.rearrange.dispose(),Kn.current===t&&(Kn.current=null)}},[x,xr,e,pe]),(0,b.useEffect)(()=>{let e=window.location.pathname+window.location.search+window.location.hash;Kn.current?.placements.replace(U.filter(e=>!Mn.includes(e)).map(t=>({id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:e,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}})))},[U,x,xr,e,Mn]),(0,b.useEffect)(()=>{let e=Kn.current;if(!e)return;if(W===Pn){e.rearrange.replace([]);return}let t=D(()=>{let t=window.location.pathname+window.location.search+window.location.hash,n=[];for(let e of W?.sections??[]){let r=e.originalRect,i=e.currentRect,a=Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1;if(!a&&!e.note)continue;let o=e.note?` \u2014 "${e.note}"`:``;n.push({id:e.id,x:i.x/window.innerWidth*100,y:i.y,comment:a?`Move ${e.label} section (${e.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}${o}`:`Note on ${e.label} section (${e.tagName})${o}`,element:e.selector,elementPath:`[rearrange]`,timestamp:W.detectedAt,url:t,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:e.selector,label:e.label,tagName:e.tagName,originalRect:r,currentRect:i}})}e.rearrange.replace(n)},300);return()=>clearTimeout(t)},[W,x,xr,e,Pn]);let Ni=(0,b.useCallback)(()=>{clearTimeout(Vn.current),sn(!1),an(!0)},[]);(0,b.useEffect)(()=>()=>clearTimeout(Vn.current),[]);let Pi=(0,b.useCallback)(()=>{sn(!0),an(!1),un(null),clearTimeout(Vn.current),Vn.current=D(()=>{sn(!1)},300)},[]),Fi=(0,b.useCallback)(()=>{let e=Ue.current?.getRootNode();Xe.current=!!e?.activeElement&&!!He.current?.contains(e.activeElement),Xe.current&&e?.activeElement?.blur(),$t(!1),H&&(sn(!0),an(!1),un(null),clearTimeout(Vn.current),Vn.current=D(()=>{sn(!1)},300)),T(!1)},[H]),Ii=(0,b.useCallback)(()=>{Xt||(oe(),Zt(!0))},[Xt]),Li=(0,b.useCallback)(()=>{Xt&&(se(),Zt(!1))},[Xt]),Ri=(0,b.useCallback)(()=>{Xt?Li():Ii()},[Xt,Ii,Li]),zi=(0,b.useCallback)((e=ir)=>{let t=e.filter(e=>e.element.isConnected);if(t.length===0){ar([]);return}let n=t[0],r=n.element,i=t.length>1,a=t.map(e=>he(e.element));if(i){let e={left:Math.min(...a.map(e=>e.left)),top:Math.min(...a.map(e=>e.top)),right:Math.max(...a.map(e=>e.right)),bottom:Math.max(...a.map(e=>e.bottom))},n=t.slice(0,5).map(e=>e.name).join(`, `),i=t.length>5?` +${t.length-5} more`:``,o=a.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),s=t[t.length-1].element,c=a[a.length-1],l=c.left+c.width/2,u=c.top+c.height/2,d=Na(s);lt({id:Date.now().toString(),x:l/window.innerWidth*100,y:d?u:u+window.scrollY,clientY:u,element:`${t.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:d,elementBoundingBoxes:o,multiSelectElements:t.map(e=>e.element),targetElement:s,fullPath:Ve(r),accessibility:Be(r),computedStyles:Re(r),computedStylesObj:Ie(r),nearbyElements:ke(r),cssClasses:Ae(r),nearbyText:Oe(r),sourceFile:Fa(r),attributes:Se(r,de)})}else{let e=a[0],t=Na(r);lt({id:Date.now().toString(),x:e.left/window.innerWidth*100,y:t?e.top:e.top+window.scrollY,clientY:e.top,element:n.name,elementPath:n.path,boundingBox:{x:e.left,y:t?e.top:e.top+window.scrollY,width:e.width,height:e.height},isFixed:t,fullPath:Ve(r),accessibility:Be(r),computedStyles:Re(r),computedStylesObj:Ie(r),nearbyElements:ke(r),cssClasses:Ae(r),nearbyText:Oe(r),reactComponents:n.reactComponents,targetElement:r,sourceFile:Fa(r),attributes:Se(r,de)})}ar([]),at(null)},[ir,de]);(0,b.useEffect)(()=>{w||(lt(null),Lt(null),Ut(null),B([]),at(null),$t(!1),ar([]),or.current=!1,Xt&&Li())},[w,Xt,Li]),(0,b.useEffect)(()=>()=>{se()},[]),(0,b.useEffect)(()=>{if(!w)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=document.createElement(`style`);return t.id=`agentation-cursor`,t.textContent=`
      body { cursor: crosshair !important; }
      body :is(${e}) { cursor: text !important; }
    `,document.head.appendChild(t),()=>{let e=document.getElementById(`agentation-cursor`);e&&e.remove()}},[w]),(0,b.useEffect)(()=>{if(Zn!==null&&w)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Zn,w]),(0,b.useEffect)(()=>{if(!w||N||z||Jn||H)return;let e=null,t=(e,t,n)=>{let r=We(e,t),i=n?Je(e,t):r;if(!i||Te(i,`[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]`)){at(null);return}let{name:a,elementName:o,path:s,reactComponents:c}=Ea(i,`off`,de);at({element:a,elementName:o,elementPath:s,rect:he(i),reactComponents:c,isPiercing:n&&i!==r}),st({x:e,y:t})},n=n=>{if(Te(n.composedPath()[0]||n.target,`[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]`)){e=null,at(null);return}e={x:n.clientX,y:n.clientY},t(n.clientX,n.clientY,Aa(n))},r=n=>{(n.key===`Meta`||n.key===`Control`)&&e&&t(e.x,e.y,Aa(n))},i=()=>{e=null,at(null)};return O.addEventListener(`mousemove`,n),O.addEventListener(`keydown`,r),O.addEventListener(`keyup`,r),O.addEventListener(`mouseleave`,i),window.addEventListener(`blur`,i),()=>{O.removeEventListener(`mousemove`,n),O.removeEventListener(`keydown`,r),O.removeEventListener(`keyup`,r),O.removeEventListener(`mouseleave`,i),window.removeEventListener(`blur`,i)}},[w,N,z,Jn,H,`off`,de]);let Bi=(0,b.useCallback)((e,t)=>{if(z&&!Vr){Ci.current?.shake();return}if(N&&!Lr){if((He.current?.querySelector(`[data-annotation-popup]:not([data-annotation-card]) textarea`))?.value.trim()){Si.current?.shake();return}Rr(!0)}if(Rt.current=t??null,zt.current=t?.matches(`:focus-visible`)??!1,Vt(!1),Hr(!1),Lt(e),jt(null),R(null),Nt([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=qe(n.x+n.width/2,n.y+n.height/2-window.scrollY,n);e&&t.push(e)}B(t),Ut(null)}else if(e.boundingBox){let t=e.boundingBox,n=qe(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY,t);if(n){let e=he(n),r=e.width/t.width,i=e.height/t.height;Ut(r<.5||i<.5?null:n)}else Ut(null);B([])}else Ut(null),B([])},[N,Lr,z,Vr]);(0,b.useEffect)(()=>{if(!w||Jn||H)return;let e=e=>{if(J.current){J.current=!1,e.preventDefault(),e.stopPropagation();return}let t=e.composedPath()[0]||e.target;if(Te(t,`[data-feedback-toolbar]`)||Te(t,`[data-annotation-popup]`)||Te(t,`[data-annotation-marker]`))return;if(Aa(e)&&!N&&!z){e.preventDefault(),e.stopPropagation(),or.current=e.shiftKey;let t=Je(e.clientX,e.clientY);if(!t)return;let n=he(t),{name:r,path:i,reactComponents:a}=Ea(t,`off`,de),o=ir.findIndex(e=>e.element===t);ar(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=Te(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(fr.blockInteractions&&(e.preventDefault(),e.stopPropagation()),N&&!Lr){if(n&&!fr.blockInteractions)return;e.preventDefault(),Si.current?.shake();return}if(z&&!Vr){if(n&&!fr.blockInteractions)return;e.preventDefault(),Ci.current?.shake();return}e.preventDefault();let r=We(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=Ea(r,`off`,de),s=he(r),c=e.clientX/window.innerWidth*100,l=Na(r),u=l?e.clientY:e.clientY+window.scrollY,d=r.ownerDocument.defaultView?.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=Ie(r),m=Re(r);Rr(!1),lt({id:Date.now().toString(),x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:Oe(r),cssClasses:Ae(r),isFixed:l,fullPath:Ve(r),accessibility:Be(r),computedStyles:m,computedStylesObj:p,nearbyElements:ke(r),reactComponents:o??void 0,sourceFile:Fa(r),attributes:Se(r,de),frame:ve(r,e.clientX,e.clientY),targetElement:r}),at(null)};return O.addEventListener(`click`,e,!0),()=>O.removeEventListener(`click`,e,!0)},[w,Jn,H,N,Lr,z,Vr,fr.blockInteractions,`off`,de,ir]),(0,b.useEffect)(()=>{if(!w)return;let e=e=>{let t=(e.key===`Meta`||e.key===`Control`)&&!Aa(e),n=e.key===`Shift`&&or.current;(t||n)&&!oi.current&&ir.length>0&&zi()},t=()=>{or.current=!1,ar([]),at(null),ni.current=null,oi.current=null,Qr(!1),di.current?.replaceChildren()};return O.addEventListener(`keyup`,e),window.addEventListener(`blur`,t),()=>{O.removeEventListener(`keyup`,e),window.removeEventListener(`blur`,t)}},[w,ir,zi]),(0,b.useEffect)(()=>{if(!w||N||Jn||H)return;let e=e=>{if(e.button!==0)return;J.current=!1;let t=e.composedPath()[0]||e.target;if(Te(t,`[data-feedback-toolbar]`)||Te(t,`[data-annotation-marker]`)||Te(t,`[data-annotation-popup]`))return;let n=new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`));(Aa(e)||!n.has(t.tagName)&&!t.isContentEditable)&&(e.preventDefault(),ni.current={x:e.clientX,y:e.clientY})};return O.addEventListener(`mousedown`,e),()=>O.removeEventListener(`mousedown`,e)},[w,N,Jn,H]),(0,b.useEffect)(()=>{if(!w||N)return;let e=e=>{if(!ni.current)return;let t=e.clientX-ni.current.x,n=e.clientY-ni.current.y,r=t*t+n*n;if(!Jr&&r>=64&&(oi.current=ni.current,Qr(!0),e.preventDefault()),(Jr||r>=64)&&oi.current){if(si.current){let t=Math.min(oi.current.x,e.clientX),n=Math.min(oi.current.y,e.clientY),r=Math.abs(e.clientX-oi.current.x),i=Math.abs(e.clientY-oi.current.y);si.current.style.transform=`translate(${t}px, ${n}px)`,si.current.style.width=`${r}px`,si.current.style.height=`${i}px`}let t=Date.now();if(t-yi.current<50)return;yi.current=t;let n=oi.current.x,r=oi.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=O.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=he(e),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(Te(e,`[data-feedback-toolbar]`)||Te(e,`[data-annotation-marker]`))continue;let t=he(e);if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(di.current){let e=di.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=F.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return O.addEventListener(`mousemove`,e,{passive:!0}),()=>O.removeEventListener(`mousemove`,e)},[w,N,Jr,8]),(0,b.useEffect)(()=>{if(!w)return;let e=e=>{let t=Jr,n=oi.current;if(Jr&&n){J.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];O.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||Te(e,`[data-feedback-toolbar]`)||Te(e,`[data-annotation-marker]`))return;let n=he(e);n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY,u=(Aa(e)||ir.length>0)&&!N&&!z;if(s.length>0){if(u){let t=[...ir];for(let{element:e,rect:n}of s){if(t.some(t=>t.element===e))continue;let{name:r,path:i,reactComponents:a}=Ea(e,`off`,de);t.push({element:e,rect:n,name:r,path:i,reactComponents:a??void 0})}or.current=e.shiftKey,Aa(e)?ar(t):zi(t)}else{let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>De(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=Ie(i),o=Re(i);lt({id:Date.now().toString(),x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:Ve(i),accessibility:Be(i),computedStyles:o,computedStylesObj:a,nearbyElements:ke(i),cssClasses:Ae(i),nearbyText:Oe(i),sourceFile:Fa(i),attributes:Se(i,de)})}}else if(u&&!Aa(e))zi();else if(!u){let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&lt({id:Date.now().toString(),x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}at(null)}else t&&(J.current=!0);ni.current=null,oi.current=null,Qr(!1),di.current&&(di.current.innerHTML=``)};return O.addEventListener(`mouseup`,e),()=>O.removeEventListener(`mouseup`,e)},[w,Jr,N,z,`off`,de,ir,zi]);let Vi=(0,b.useCallback)(async(e,t,n)=>{let r=fr.webhookUrl||C;if(!r||!fr.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[C,fr.webhookUrl,fr.webhooksEnabled]),Hi=(0,b.useCallback)(t=>{if(!N||N.isSubmitted)return;let n={id:N.id,x:N.x,y:N.y,comment:t,element:N.element,elementPath:N.elementPath,timestamp:Date.now(),selectedText:N.selectedText,boundingBox:N.boundingBox,nearbyText:N.nearbyText,cssClasses:N.cssClasses,isMultiSelect:N.isMultiSelect,isFixed:N.isFixed,fullPath:N.fullPath,accessibility:N.accessibility,computedStyles:N.computedStyles,nearbyElements:N.nearbyElements,reactComponents:N.reactComponents,sourceFile:N.sourceFile,attributes:N.attributes,frame:N.frame,elementBoundingBoxes:N.elementBoundingBoxes,...x&&xr?{sessionId:xr,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};Ee(e=>[...e,n]),lt({...N,isSubmitted:!0}),bi.current=n.id,p?.(n),Vi(`annotation.add`,{annotation:n}),Rr(!0),window.getSelection()?.removeAllRanges(),x&&xr&&pe(async()=>{let t=await be(x,xr,n);r&&qr(e,Wr(e).map(e=>e.id===n.id?{...e,id:t.id}:e),xr),fe.current&&!ge.current.has(n.id)&&t.id!==n.id&&(Nr.current.set(t.id,n.id),bi.current===n.id&&(bi.current=t.id),Ee(e=>e.map(e=>e.id===n.id?{...e,id:t.id}:e)),Mr.current.delete(n.id)&&Mr.current.add(t.id))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[N,p,Vi,x,xr,pe,e,r]),Ui=(0,b.useCallback)(()=>{Rr(!0)},[]),Wi=(0,b.useCallback)(()=>{lt(null),Rr(!1)},[]),Gi=(0,b.useCallback)(e=>{if(ge.current.has(e))return;ge.current.add(e);let t=j.find(t=>t.id===e);z?.id===e&&(Vt(!1),Hr(!0)),Ir(t=>new Set(t).add(e)),t&&(m?.(t),Vi(`annotation.delete`,{annotation:t})),x&&pe(()=>vi(x,me.current.get(e)??e)).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})},[j,z,m,Vi,x,pe]),Ki=(0,b.useCallback)(e=>{if(!e){jt(null),R(null),Nt([]);return}if(jt(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=qe(n.x+n.width/2,n.y+n.height/2-window.scrollY,n);e&&t.push(e)}Nt(t),R(null)}else if(e.boundingBox){let t=e.boundingBox,n=qe(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY,t);if(n){let e=he(n),r=e.width/t.width,i=e.height/t.height;R(r<.5||i<.5?null:n)}else R(null);Nt([])}else R(null),Nt([])},[]),qi=(0,b.useCallback)(e=>{if(!z)return;let t={...z,comment:e};Lt(t),Ee(e=>e.map(e=>e.id===z.id?t:e)),h?.(t),Vi(`annotation.update`,{annotation:t}),x&&pe(()=>_i(x,me.current.get(z.id)??z.id,{comment:e})).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),Vt(zt.current||!!Rt.current?.matches(`:hover`)),Hr(!0)},[z,h,Vi,x,pe]),Ji=(0,b.useCallback)(()=>{Vt(zt.current||!!Rt.current?.matches(`:hover`)),Hr(!0)},[]),Yi=(0,b.useCallback)(()=>{Bt&&z&&!N&&jt(z.id),Lt(null),Ut(null),B([]),Hr(!1)},[Bt,z,N]),Y=(0,b.useCallback)((e,t)=>{if(!e.length&&!t)return;St(!0);let n={placements:[...Ln.current.placements,...e],rearrange:t??Ln.current.rearrange};Ln.current=n,Nn(n.placements),Fn(n.rearrange),clearTimeout(Et.current),Et.current=D(()=>{cn(e=>e.filter(e=>!n.placements.includes(e))),wn(e=>e===n.rearrange?null:e),Ln.current={placements:[],rearrange:null},Nn([]),Fn(null),Et.current=void 0,Ot()},200)},[Ot]),Xi=(0,b.useCallback)(()=>{if(!fe.current)return;let t=new Map(Oi.current.map(e=>[e.id,e])),n=[];for(let e of j){let r=t.get(me.current.get(e.id)??e.id)??t.get(e.id);r&&r.comment===e.comment&&!ge.current.has(r.id)&&!n.includes(r)&&n.push(r)}let r=n.length,i=In.current,a=U.filter(e=>i.designPlacements.includes(e)&&!Ln.current.placements.includes(e)),o=W===i.rearrangeState&&W!==Ln.current.rearrange?W:null,s=K.filter(e=>Xn.current.includes(e));if(r!==0||s.length!==0||a.length!==0||o){for(let e of n)ge.current.add(e.id),wt.current.add(e.id),Tt.current.add(e.id);if(Ir(e=>new Set([...e,...n.map(e=>e.id)])),g?.(n),Vi(`annotations.clear`,{annotations:n}),x&&Promise.all(n.map(e=>pe(()=>vi(x,me.current.get(e.id)??e.id)).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}))),St(!0),q(e=>e.filter(e=>!s.includes(e))),s.length>0&&s.length===Xn.current.length){let e=er.current;e?.getContext(`2d`)?.clearRect(0,0,e.width,e.height)}Y(a,o),fn===i.blankCanvas&&bn===i.wireframePurpose&&U===i.designPlacements&&W===i.rearrangeState&&(fn&&pn(!1),bn&&xn(``),Dn.current={rearrange:null,placements:[]},ai(e)),Ot()}},[e,j,K,U,W,fn,bn,g,Vi,x,pe,Ot,Y]),Zi=(0,b.useCallback)(async()=>{let t=dt.start(),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:e,r=H&&fn,a;if(r){if(U.length===0&&!W&&!bn)return;a=i?$i(n,i):``}else{if(a=ea(j,n,fr.outputDetail,{appName:i}),!a&&K.length===0&&U.length===0&&!W)return;a||=$i(n,i)}if(!r&&K.length>0){let e=new Set;for(let t of j)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=er.current;t&&(t.style.visibility=`hidden`);let n=[],r=window.scrollY;for(let t=0;t<K.length;t++){if(e.has(t))continue;let i=K[t];if(i.points.length<2)continue;let a=i.fixed?i.points:i.points.map(e=>({x:e.x,y:e.y-r})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],ee=[p];for(let e=b;e<a.length-1;e+=b)ee.push(a[e]);ee.push(m);for(let e of ee){let t=We(e.x,e.y);if(!t||x.has(t)||Te(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=De(t);S.includes(n)||S.push(n)}let te=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,C;C=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${te})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${te})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${te})`:`Drawing at ${te}`,n.push(C)}t&&(t.style.visibility=``),n.length>0&&(a+=`
**Drawings:**
`,n.forEach((e,t)=>{a+=`${t+1}. ${e}
`}))}if((U.length>0||r&&bn)&&(a+=`
`+zr(U,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:fn,wireframePurpose:bn||void 0},fr.outputDetail)),W){let e=Br(W,fr.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(a+=`
`+e)}if(a=ta(j,a,s),!a){ut(!1);return}let o=!y||await na(a);_?.(a),dt.isCurrent(t)&&(ut(o),o&&(dt.schedule(t,()=>ut(!1),2e3),fr.autoClearAfterCopy&&dt.schedule(t,Xi,500)))},[j,K,U,W,fn,H,vn,bn,e,fr.outputDetail,`off`,de,fr.autoClearAfterCopy,Xi,dt,y,s,i,_]),Qi=ka(fr.webhookUrl)||ka(C||``),ra=v!=null||Qi&&!fr.webhooksEnabled,ia=w?ra?337:297:44,sa=(0,b.useCallback)(async()=>{let t=vt.start(),n=typeof window<`u`?window.location.href:e,r=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:e,a=ea(j,r,fr.outputDetail,{appName:i});if(!a&&U.length===0&&!W)return;if(a||=$i(r,i),U.length>0&&(a+=`
`+zr(U,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:fn,wireframePurpose:bn||void 0},fr.outputDetail)),W){let e=Br(W,fr.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(a+=`
`+e)}bt(`sending`);let o=!0;try{await v?.(a,j)}catch(e){console.warn(`[Agentation] Submit callback failed:`,e),o=!1}if(!vt.isCurrent(t))return;let s=!Qi||await Vi(`submit`,{output:a,annotations:j,url:n},!0),c=o&&s&&ra;vt.isCurrent(t)&&(bt(c?`sent`:`failed`),vt.schedule(t,()=>bt(`idle`),2500),c&&fr.autoClearAfterCopy&&vt.schedule(t,Xi,500))},[v,i,Vi,j,U,W,fn,vn,e,fr.outputDetail,`off`,de,fr.autoClearAfterCopy,Xi,Qi,ra,vt]);(0,b.useEffect)(()=>{let e=(e=!1)=>{Ar.current?.dragging&&(jr.current=e,kr(!1)),Ar.current=null},t=t=>{let n=Ar.current;if(!n)return;if(!(t.buttons&1)){e();return}let r=t.clientX-n.x,i=t.clientY-n.y,a=Math.sqrt(r*r+i*i);if(!n.dragging&&a>10&&(n.dragging=!0,kr(!0)),n.dragging){let e=n.toolbarX+r,t=n.toolbarY+i,a=20-(337-ia),o=window.innerWidth-20-337;e=Math.max(a,Math.min(o,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),Dr({x:e,y:t})}},n=()=>e(!0),r=()=>e();return O.addEventListener(`mousemove`,t),O.addEventListener(`mouseup`,n,!0),window.addEventListener(`blur`,r),()=>{O.removeEventListener(`mousemove`,t),O.removeEventListener(`mouseup`,n,!0),window.removeEventListener(`blur`,r)}},[ia]);let ca=(0,b.useCallback)(e=>{if(jr.current=!1,Ar.current=null,e.button!==0||e.target.closest(`button`)&&(e.target.closest(`button`)!==Ue.current||w)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=he(t);Ar.current={x:e.clientX,y:e.clientY,toolbarX:n.left,toolbarY:n.top,dragging:!1}},[w]);(0,b.useLayoutEffect)(()=>{if(!Er)return;let e=()=>{let e=Er.x,t=Er.y,n=20-(337-ia),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==Er.x||t!==Er.y)&&Dr({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[Er,ia]),(0,b.useEffect)(()=>{if(!a)return;let e=e=>{if(e.defaultPrevented||e.isComposing||e.altKey)return;let t=e.composedPath()[0]||e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.tagName===`SELECT`||t.isContentEditable;if(e.key===`Escape`){if(l&&!N&&!z&&(w||Qt||H||Jn||ir.length)&&(e.preventDefault(),e.stopPropagation()),Qt){e.preventDefault(),$t(!1),Ke.current?.focus();return}if(H){ln?un(null):Pi();return}if(Jn){Yn(!1);return}if(ir.length>0){ar([]);return}N||z||w&&(sr(),Fi())}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),sr(),w?Fi():(Ue.current?.blur(),Ye.current=!0,T(!0));return}!w||n||e.metaKey||e.ctrlKey||e.repeat||((e.key===`p`||e.key===`P`)&&(e.preventDefault(),sr(),Ri()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),sr(),Jn&&Yn(!1),Qt&&$t(!1),N&&Ui(),H?Pi():Ni()),(e.key===`h`||e.key===`H`)&&j.length>0&&(e.preventDefault(),sr(),Me(e=>!e)),(e.key===`c`||e.key===`C`)&&(j.length>0||U.length>0||W)&&(e.preventDefault(),sr(),Zi()),(e.key===`x`||e.key===`X`)&&(j.length>0||U.length>0||W)&&(e.preventDefault(),sr(),Xi(),U.length>0&&cn([]),W&&wn(null)),(e.key===`s`||e.key===`S`)&&j.length>0&&ra&&yt===`idle`&&(e.preventDefault(),sr(),sa()))},t=!!l;return O.addEventListener(`keydown`,e,t),()=>O.removeEventListener(`keydown`,e,t)},[a,l,z,w,Jn,H,ln,U,W,N,j.length,ra,yt,sa,Ri,Zi,Xi,ir,Qt,Fi,Ni,Pi]);let ua=j.length>0,da=ye(),pa=j.filter(e=>e.kind!==`placement`&&e.kind!==`rearrange`),ma=pa.flatMap((e,t)=>{let n=da(e);return n?[{annotation:n,index:t}]:[]}),ha=N&&!N.isSubmitted?da({...N,comment:``,timestamp:0}):null,ga=[...et?ma.map(e=>({...e,pending:!1})):[],...ha?[{annotation:ha,index:pa.length,pending:!0}]:[]];(0,b.useEffect)(()=>{let e=new Set(et&&!Ne?ma.map(({annotation:e})=>e.id):[]);bi.current&&!e.has(bi.current)&&(bi.current=null);for(let t of Fr)e.has(t)||Ai(t)}),(0,b.useEffect)(()=>{z&&Fr.has(z.id)&&(Vt(!1),Hr(!0))},[z,Fr]);let _a=(0,b.useCallback)(e=>{!rt&&e.id!==bi.current&&Ki(e)},[rt,Ki]),va=(0,b.useCallback)(e=>{At===e&&Ki(null)},[At,Ki]),ya=(0,b.useCallback)((e,t)=>{if(z&&!Vr){Ci.current?.shake();return}Lr&&Wi(),fr.markerClickBehavior===`delete`?Gi(e.id):Bi(e,t)},[fr.markerClickBehavior,Gi,Bi,Lr,Wi,z,Vr]),ba=z??(Ei&&!N&&!xt?j.find(e=>e.id===At&&!Fr.has(e.id)):null),xa=Xt?`Resume animations`:`Pause animations`,Sa=H?`Exit layout mode`:`Layout mode`,X=je?`Hide markers`:`Show markers`,Ia=s!==`markdown`&&!ta(j,``,s),La=typeof s==`object`?`Copy ${s.attribute}`:s===`source`?`Copy source paths`:s===`classes`?`Copy classes`:H&&fn?`Copy layout`:`Copy feedback`,Ra=w?0:-1;return!V||Ne?null:(0,S.jsxs)(tt,{host:`agentation-toolbar`,className:ne,children:[(0,S.jsxs)(`style`,{"data-agentation-styles":`toolbar`,children:[Ta,Ma]}),(0,S.jsxs)(`div`,{ref:He,className:F.positionContext,style:{display:`contents`},"data-agentation-theme":mr?`dark`:`light`,"data-agentation-accent":fr.annotationColorId,"data-agentation-root":``,children:[(0,S.jsx)(`div`,{className:F.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":Or||void 0,style:Er?{left:Er.x,top:Er.y,right:`auto`,bottom:`auto`}:void 0,children:(0,S.jsxs)(`div`,{className:`${F.toolbarContainer} ${w?F.expanded:F.collapsed} ${gr?F.entrance:``} ${Fe?F.hiding:``} ${ra?F.serverConnected:``}`,onMouseDown:ca,children:[(0,S.jsxs)(`div`,{className:`${F.controlsContent} ${w?F.visible:F.hidden} ${Er&&Er.y<100?F.tooltipBelow:``} ${nn||Qt?F.tooltipsHidden:``} ${tr?F.tooltipsInSession:``}`,ref:e=>{Ge.current=e,e?.toggleAttribute(`inert`,!w)},role:`group`,"aria-label":`Feedback controls`,"aria-hidden":!w,onMouseEnter:lr,onMouseLeave:dr,children:[(0,S.jsxs)(`div`,{className:`${F.buttonWrapper} ${Er&&Er.x<120?F.buttonWrapperAlignLeft:``}`,children:[(0,S.jsx)(`button`,{className:F.controlButton,onClick:e=>{e.stopPropagation(),sr(),Ri()},"data-active":Xt,"aria-label":xa,"aria-pressed":Xt,tabIndex:Ra,children:(0,S.jsx)(ht,{size:24,isPaused:Xt})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[xa,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`P`})]})]}),(0,S.jsxs)(`div`,{className:F.buttonWrapper,children:[(0,S.jsx)(`button`,{className:`${F.controlButton} ${mr?``:F.light}`,onClick:e=>{e.stopPropagation(),sr(),Jn&&Yn(!1),Qt&&$t(!1),N&&Ui(),H?Pi():Ni()},"data-active":H,"aria-label":Sa,"aria-pressed":H,tabIndex:Ra,style:H&&fn?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,S.jsx)(Ct,{size:21})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[Sa,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`L`})]})]}),(0,S.jsxs)(`div`,{className:F.buttonWrapper,children:[(0,S.jsx)(`button`,{className:F.controlButton,onClick:e=>{e.stopPropagation(),sr(),Me(!je)},disabled:!ua||H,"aria-label":X,tabIndex:Ra,children:(0,S.jsx)(mt,{size:24,isOpen:je})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[X,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`H`})]})]}),(0,S.jsxs)(`div`,{className:F.buttonWrapper,children:[(0,S.jsx)(`button`,{className:`${F.controlButton} ${P?F.statusShowing:``}`,onClick:e=>{e.stopPropagation(),sr(),Zi()},disabled:Ia||(H&&fn?U.length===0&&!W?.sections?.length:!ua&&K.length===0&&U.length===0&&!W?.sections?.length),"data-active":P,"aria-label":La,tabIndex:Ra,children:(0,S.jsx)(ft,{size:24,copied:P,tint:H&&fn&&(U.length>0||W?.sections?.length)?`#f97316`:void 0})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[Ia?`No matching metadata`:La,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`C`})]})]}),(0,S.jsxs)(`div`,{className:`${F.buttonWrapper} ${F.sendButtonWrapper} ${w&&ra?F.sendButtonVisible:``}`,children:[(0,S.jsxs)(`button`,{className:`${F.controlButton} ${yt===`sent`||yt===`failed`?F.statusShowing:``}`,onClick:e=>{e.stopPropagation(),sr(),sa()},disabled:!ua||!ra||yt===`sending`,"data-no-hover":yt===`sent`||yt===`failed`,tabIndex:w&&ra?0:-1,"aria-label":`Send Annotations`,"aria-hidden":!ra,children:[(0,S.jsx)(pt,{size:24,state:yt}),ua&&yt===`idle`&&(0,S.jsx)(`span`,{className:F.buttonBadge,children:j.length})]}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[`Send Annotations`,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`S`})]})]}),(0,S.jsxs)(`div`,{className:F.buttonWrapper,children:[(0,S.jsx)(`button`,{className:F.controlButton,onClick:e=>{e.stopPropagation(),sr(),Xi()},disabled:!ua&&K.length===0&&U.length===0&&!W?.sections?.length,"data-danger":!0,"aria-label":`Clear all`,tabIndex:Ra,children:(0,S.jsx)(_t,{size:24})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,children:[`Clear all`,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`X`})]})]}),(0,S.jsxs)(`div`,{className:F.buttonWrapper,children:[(0,S.jsx)(`button`,{ref:Ke,"aria-label":`Settings`,"aria-expanded":Qt,tabIndex:Ra,className:F.controlButton,onClick:e=>{e.stopPropagation(),sr(),H&&Pi(),$e.current=!Qt&&e.detail===0,$t(!Qt)},children:(0,S.jsx)(gt,{size:24})}),x&&wr!==`disconnected`&&(0,S.jsx)(`span`,{className:`${F.mcpIndicator} ${F[wr]} ${Qt?F.hidden:``}`,title:wr===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,S.jsx)(`span`,{className:F.buttonTooltip,children:`Settings`})]}),(0,S.jsx)(`div`,{className:F.divider}),(0,S.jsx)(`div`,{className:F.togglePlaceholder,"aria-hidden":`true`})]}),(0,S.jsxs)(`div`,{className:`${F.buttonWrapper} ${F.toggleWrapper} ${Er&&Er.y<100?F.tooltipBelow:``} ${!w||nn||Qt?F.tooltipsHidden:``} ${tr?F.tooltipsInSession:``} ${Er&&typeof window<`u`&&Er.x>window.innerWidth-120?F.buttonWrapperAlignRight:``}`,onMouseEnter:lr,onMouseLeave:dr,children:[(0,S.jsx)(`button`,{ref:Ue,type:`button`,className:`${F.toggleContent} ${w?F.expandedToggle:``}`,"aria-label":w?`Exit`:`Start feedback mode`,"aria-expanded":w,"aria-keyshortcuts":a?`Meta+Shift+F Control+Shift+F`:void 0,title:w?void 0:a?`Start feedback mode (⌘⇧F / Ctrl+Shift+F)`:`Start feedback mode`,onClick:e=>{if(jr.current){jr.current=!1,e.preventDefault();return}e.stopPropagation(),w?(sr(),Fi()):(e.currentTarget.blur(),Ye.current=e.detail===0,T(!0))},children:(0,S.jsxs)(`span`,{className:F.toggleIcon,children:[(0,S.jsx)(kt,{active:w}),pa.length>0&&(0,S.jsx)(`span`,{className:`${F.badge} ${w?F.fadeOut:``} ${gr?F.entrance:``}`,children:pa.length})]})}),(0,S.jsxs)(`span`,{className:F.buttonTooltip,"aria-hidden":!w,children:[`Exit`,a&&(0,S.jsx)(`span`,{className:F.shortcut,children:`Esc`})]})]}),(0,S.jsx)($n,{visible:H&&w,activeType:ln,onSelect:e=>{un(ln===e?null:e)},isDarkMode:mr,sectionCount:W?.sections.length??0,onDetectSections:()=>{let e=ur(),t=W?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector)),i=[...t,...r],a=[...W?.originalOrder??[],...r.map(e=>e.id)];wn({sections:i,originalOrder:a,detectedAt:Date.now()})},placementCount:U.length,onClearPlacements:()=>{Y(U,W)},blankCanvas:fn,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(En.current={rearrange:W,placements:U},wn(Dn.current.rearrange||t),cn(Dn.current.placements),un(null)):(Dn.current={rearrange:W,placements:U},wn(En.current.rearrange||t),cn(En.current.placements)),pn(e)},wireframePurpose:bn,onWireframePurposeChange:xn,Tooltip:Dt,onDragStart:(e,t)=>{t.preventDefault();let n=I[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${G.dragPreview}${fn?` ${G.dragPreviewWireframe}`:``}`,He.current?.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&r.remove(),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};cn(e=>[...e,c]),un(null),Rn.current=new Set,kn(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,S.jsx)(Ca,{settings:fr,onSettingsChange:vr,isDarkMode:mr,onToggleTheme:yr,isDevMode:!1,connectionStatus:wr,endpoint:x,onExited:Ti,isOpen:w&&Qt,toolbarNearBottom:!!Er&&Er.y<230,settingsPage:en,onSettingsPageChange:tn,onHideToolbar:ji})]})}),(H||on)&&(0,S.jsx)(`div`,{className:`${G.blankCanvas} ${mn?G.visible:``} ${Sn?G.gridActive:``}`,style:{"--canvas-opacity":gn},"data-feedback-toolbar":!0}),H&&fn&&mn&&(0,S.jsxs)(`div`,{className:G.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,S.jsxs)(`div`,{className:G.wireframeOpacityRow,children:[(0,S.jsx)(`span`,{className:G.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,S.jsx)(`input`,{type:`range`,className:G.wireframeOpacitySlider,min:0,max:1,step:.01,value:gn,onChange:e=>_n(Number(e.target.value))})]}),(0,S.jsxs)(`div`,{className:G.wireframeNoticeTitleRow,children:[(0,S.jsx)(`span`,{className:G.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,S.jsx)(`span`,{className:G.wireframeNoticeDivider}),(0,S.jsx)(`button`,{className:G.wireframeStartOver,onClick:()=>{Y(U,W),Dn.current={rearrange:null,placements:[]},xn(``),ai(e)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,S.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(H||on)&&(0,S.jsx)(qn,{placements:U,onChange:cn,activeComponent:on?null:ln,onActiveComponentChange:un,isDarkMode:mr,exiting:on,onInteractionChange:Cn,passthrough:!ln,extraSnapRects:W?.sections.map(e=>e.currentRect),deselectSignal:On,clearingPlacements:Mn,wireframe:fn,onSelectionChange:(e,t)=>{Rn.current=e,t||(zn.current=new Set,jn(e=>e+1))},onDragMove:(e,t)=>{let n=zn.current;if(n.size&&W){if(!Bn.current){Bn.current=new Map;for(let e of W.sections)n.has(e.id)&&Bn.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of W.sections){if(!n.has(r.id)||!Bn.current.get(r.id))continue;let i=He.current?.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=zn.current,i=Bn.current;if(Bn.current=null,r.size&&W&&i){for(let e of r){let t=He.current?.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&wn(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(H||on)&&W&&(0,S.jsx)(br,{rearrangeState:W,onChange:wn,isDarkMode:mr,exiting:on,blankCanvas:fn,extraSnapRects:U.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearing:W===Pn,deselectSignal:An,onSelectionChange:(e,t)=>{zn.current=e,t||(Rn.current=new Set,kn(e=>e+1))},onDragMove:(e,t)=>{let n=Rn.current;if(n.size){if(!Bn.current){Bn.current=new Map;for(let e of U)n.has(e.id)&&Bn.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=He.current?.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=Rn.current,i=Bn.current;if(Bn.current=null,r.size&&i){for(let e of r){let t=He.current?.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&cn(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,S.jsx)(`canvas`,{ref:er,className:`${F.drawCanvas} ${Jn?F.active:``}`,"aria-hidden":`true`,style:{opacity:+!!Ei,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,S.jsx)(`div`,{className:F.markersLayer,"data-feedback-toolbar":!0,children:ga.filter(({annotation:e})=>!e.isFixed).map(({annotation:e,index:t,pending:n},r,i)=>(0,S.jsx)(fa,{annotation:e,pending:n,globalIndex:t,layerIndex:r,layerSize:i.length,isExiting:n?Lr:rt,isClearing:wt.current.has(e.id),isAnimated:Mr.current.has(e.id),isNew:bi.current===e.id,onEnterComplete:Pr,isHovered:!rt&&At===e.id,isRemoving:Fr.has(e.id),onRemoveComplete:Ai,isEditingAny:!!z,renumberFrom:Pt,markerClickBehavior:fr.markerClickBehavior,onHoverEnter:_a,onHoverLeave:va,onClick:ya,onContextMenu:Bi},Nr.current.get(e.id)??e.id))}),(0,S.jsx)(`div`,{className:F.fixedMarkersLayer,"data-feedback-toolbar":!0,children:ga.filter(({annotation:e})=>e.isFixed).map(({annotation:e,index:t,pending:n},r,i)=>(0,S.jsx)(fa,{annotation:e,pending:n,globalIndex:t,layerIndex:r,layerSize:i.length,isExiting:n?Lr:rt,isClearing:wt.current.has(e.id),isAnimated:Mr.current.has(e.id),isNew:bi.current===e.id,onEnterComplete:Pr,isHovered:!rt&&At===e.id,isRemoving:Fr.has(e.id),onRemoveComplete:Ai,isEditingAny:!!z,renumberFrom:Pt,markerClickBehavior:fr.markerClickBehavior,onHoverEnter:_a,onHoverLeave:va,onClick:ya,onContextMenu:Bi},Nr.current.get(e.id)??e.id))}),w&&it&&!N&&!z&&!qt&&!Jr&&(0,S.jsx)(wa,{x:ot.x,y:ot.y,elementName:it.elementName,reactComponents:it.reactComponents}),w&&(0,S.jsxs)(`div`,{className:F.overlay,"data-feedback-toolbar":!0,style:N||z?{zIndex:`inherit`}:void 0,children:[it?.rect&&!N&&!qt&&!Jr&&(0,S.jsx)(`div`,{className:`${F.hoverHighlight} ${F.enter}`,style:{left:it.rect.left,top:it.rect.top,width:it.rect.width,height:it.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`,...it.isPiercing?{borderStyle:`dashed`}:{}}}),ir.filter(e=>e.element.isConnected).map((e,t)=>{let n=he(e.element),r=ir.length>1;return(0,S.jsx)(`div`,{className:r?F.multiSelectOutline:F.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),At&&!N&&(()=>{let e=j.find(e=>e.id===At);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return Mt.length>0?Mt.filter(e=>e.isConnected).map((e,t)=>{let n=he(e);return(0,S.jsx)(`div`,{className:`${F.multiSelectOutline} ${F.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,S.jsx)(`div`,{className:`${F.multiSelectOutline} ${F.enter}`,style:{left:e.x,top:e.y-Gt,width:e.width,height:e.height}},`hover-outline-${t}`));let t=L&&L.isConnected?he(L):null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-Gt,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,S.jsx)(`div`,{className:`${r?F.multiSelectOutline:F.singleSelectOutline} ${F.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),N&&(0,S.jsxs)(S.Fragment,{children:[N.multiSelectElements?.length?N.multiSelectElements.filter(e=>e.isConnected).map((e,t)=>{let n=he(e);return(0,S.jsx)(`div`,{className:`${F.multiSelectOutline} ${Lr?F.exit:F.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):N.targetElement&&N.targetElement.isConnected?(()=>{let e=he(N.targetElement);return(0,S.jsx)(`div`,{className:`${F.singleSelectOutline} ${Lr?F.exit:F.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():N.boundingBox&&(0,S.jsx)(`div`,{className:`${N.isMultiSelect?F.multiSelectOutline:F.singleSelectOutline} ${Lr?F.exit:F.enter}`,style:{left:N.boundingBox.x,top:N.boundingBox.y-Gt,width:N.boundingBox.width,height:N.boundingBox.height,...N.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=da(N)??N,t=e.x,n=e.isFixed?e.y:e.y-Gt;return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(ct,{ref:Si,element:N.element,selectedText:N.selectedText,allowEmpty:typeof s==`object`&&!!N.attributes?.[s.attribute],onOpenSource:c&&N.sourceFile?()=>c(N.sourceFile):void 0,computedStyles:N.computedStylesObj,placeholder:typeof s==`object`&&N.attributes?.[s.attribute]?`Add a note (optional)`:N.element===`Area selection`?`What should change in this area?`:N.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:Hi,onExitComplete:Wi,onCancel:Ui,isExiting:Lr,lightMode:!mr,accentColor:N.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,t/100*window.innerWidth)),...n>window.innerHeight-290?{bottom:window.innerHeight-n+20}:{top:n+20}}},N.id)})})()]}),z&&(0,S.jsx)(S.Fragment,{children:z.elementBoundingBoxes?.length?Wt.length>0?Wt.filter(e=>e.isConnected).map((e,t)=>{let n=he(e);return(0,S.jsx)(`div`,{className:`${F.multiSelectOutline} ${F.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):z.elementBoundingBoxes.map((e,t)=>(0,S.jsx)(`div`,{className:`${F.multiSelectOutline} ${F.enter}`,style:{left:e.x,top:e.y-Gt,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=Ht&&Ht.isConnected?he(Ht):null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:z.boundingBox?{x:z.boundingBox.x,y:z.isFixed?z.boundingBox.y:z.boundingBox.y-Gt,width:z.boundingBox.width,height:z.boundingBox.height}:null;return t?(0,S.jsx)(`div`,{className:`${z.isMultiSelect?F.multiSelectOutline:F.singleSelectOutline} ${F.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...z.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})()}),Jr&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{ref:si,className:F.dragSelection}),(0,S.jsx)(`div`,{ref:di,className:F.highlightsContainer})]})]}),(0,S.jsx)(la,{ref:Ci,annotation:ba?da(ba)??z:null,editing:!!z,exiting:Vr,restorePreview:Bt,scrollY:Gt,lightMode:!mr,onExited:Yi,editorProps:ba?{element:ba.element,selectedText:ba.selectedText,allowEmpty:typeof s==`object`&&!!ba.attributes?.[s.attribute],onOpenSource:c&&ba.sourceFile?()=>c(ba.sourceFile):void 0,computedStyles:ze(ba.computedStyles),placeholder:`Edit your feedback...`,initialValue:ba.comment,submitLabel:`Save`,onSubmit:qi,onCancel:Ji,onDelete:()=>Gi(ba.id),accentColor:ba.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`}:void 0})]})]})}var Ra=[`feedback-annotations-`,`agentation-design-`,`agentation-rearrange-`,`agentation-wireframe-`,`agentation-session-`],za=`feedback-annotations-`,Ba=`typo3-agentation`,Va={get:Storage.prototype.getItem.bind(localStorage),set:Storage.prototype.setItem.bind(localStorage),remove:Storage.prototype.removeItem.bind(localStorage)},Ha=e=>Ra.some(t=>e.startsWith(t)),Ua=()=>Object.keys(localStorage).filter(e=>e.startsWith(za));function Wa(e){try{let t=JSON.parse(Va.get(e)||`[]`);return Array.isArray(t)?t:[]}catch{return[]}}function Ga(e,t){t.length===0?Va.remove(e):Va.set(e,JSON.stringify(t))}function Ka(e){if(!e)return!1;let t=!1;for(let n of Ua()){let r=Wa(n),i=r.filter(t=>t?.id!==e);i.length!==r.length&&(t=!0,Ga(n,i))}return t}function qa(){let e=Object.keys(localStorage).filter(Ha);return e.forEach(e=>Va.remove(e)),e.length}var Ja=`typo3-agentation-root`;function Ya(){let e=document.getElementById(`typo3-agentation-config`);if(!e)return null;try{return JSON.parse(e.textContent||`{}`)}catch(e){return console.warn(`[agentation] config parse failed`,e),null}}var Xa=[`button`,`checkbox`,`color`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`],Za=[`p`,`l`,`h`,`c`,`x`,`s`,`escape`];function Qa(e){return e instanceof Element&&e.closest(`#${Ja}, [data-feedback-toolbar]`)}function $a(e){let t=typeof e.composedPath==`function`?e.composedPath():[],n=t.length>0?[...t]:[e.target];return document.activeElement&&!n.includes(document.activeElement)&&n.push(document.activeElement),n.some(e=>!(e instanceof Element)||Qa(e)?!1:e instanceof HTMLInputElement?!Xa.includes(e.type):e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable?!0:!!e.closest(`input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]`))}function eo(e){let t=e.key.toLowerCase();return(e.metaKey||e.ctrlKey)&&e.shiftKey&&t===`f`?!0:e.metaKey||e.ctrlKey||e.altKey?!1:Za.includes(t)}function to(){document.addEventListener(`keydown`,e=>{eo(e)&&$a(e)&&e.stopImmediatePropagation()})}function no(){let e=new URLSearchParams(window.location.search),t=e.get(`id`)||e.get(`uid`)||``,n=`:${window.location.pathname}:id=${t}`,r=e=>{if(typeof e!=`string`)return e;let t=Ra.find(t=>e.startsWith(t));return t?`${t}${n}/${e.slice(t.length)}`:e},i={getItem:localStorage.getItem.bind(localStorage),setItem:localStorage.setItem.bind(localStorage),removeItem:localStorage.removeItem.bind(localStorage)};localStorage.getItem=e=>i.getItem(r(e)),localStorage.setItem=(e,t)=>i.setItem(r(e),t),localStorage.removeItem=e=>i.removeItem(r(e))}function ro(){typeof BroadcastChannel<`u`&&new BroadcastChannel(Ba).addEventListener(`message`,e=>{let t=e?.data||{};t.type===`annotation:delete`&&t.id?Ka(t.id):t.type===`annotations:delete-all`&&qa()})}function io(e,t){let n=window.fetch.bind(window),r=e.replace(/\/$/,``);window.fetch=function(e,i){let a=typeof e==`string`?e:e?.url||``;if(!a.startsWith(r))return n(e,i);try{let o=new URL(t,window.location.origin);return o.searchParams.set(`path`,a.slice(r.length)||`/`),n(typeof e==`string`?o.toString():new Request(o.toString(),e),i)}catch{return n(e,i)}}}function ao(e){e.endpoint&&window.location.protocol===`https:`&&e.endpoint.startsWith(`http://`)&&!e.proxyUrl&&console.warn(`[agentation] Sync endpoint is HTTP but the page is HTTPS; the browser will block all sync requests (mixed content). Open the page over HTTP or set an API key in the extension configuration.`)}function oo(){if(document.getElementById(`typo3-agentation-style-overrides`))return;let e=document.createElement(`style`);e.id=`typo3-agentation-style-overrides`,e.textContent=`
    [data-agentation-theme="dark"] [data-agentation-toolbar] [role="button"] {
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.26),
        0 0 0 4px rgba(255, 255, 255, 0.08);
    }
    [data-agentation-theme="dark"] [data-agentation-toolbar] [role="button"]:hover {
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.24),
        0 4px 16px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.34),
        0 0 0 4px rgba(255, 255, 255, 0.12);
    }
  `,document.head.appendChild(e)}async function so(e,t,n){let r=await fetch(e.webhookUrl,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:`submit`,timestamp:Date.now(),url:window.location.href,output:t,annotations:n,typo3:{context:e.context,pageId:e.pageId,beUser:e.beUser,workspaceId:e.workspaceId,metadata:e.metadata}}),keepalive:!0});if(!r.ok)throw Error(`Webhook answered ${r.status}`)}function co(e){if(document.getElementById(Ja))return;let t=document.createElement(`div`);t.id=Ja,t.setAttribute(`data-agentation-scope`,e.scope||`frontend`),document.body.appendChild(t);let n={endpoint:e.endpoint||void 0,onSubmit:e.webhookUrl?(t,n)=>so(e,t,n):void 0,...e.additionalOptions||{}};try{(0,y.createRoot)(t).render((0,b.createElement)(Ia,n))}catch(e){console.warn(`[agentation] mount failed`,e)}}(function(){let e=Ya()||{};window.TYPO3Agentation=e,e.enabled!==!1&&(e.scope===`backend`&&no(),to(),ro(),oo(),ao(e),e.endpoint&&e.proxyUrl&&io(e.endpoint,e.proxyUrl),document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>co(e),{once:!0}):co(e))})();