var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function E(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?E(``+e.key):t.toString(36)}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+re(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+re(s,l);c+=ie(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+re(s,l++),c+=ie(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D={current:null},se={transition:null},ce={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:se,ReactCurrentOwner:C};function le(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,e.act=le,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=se.transition;se.transition={};try{e()}finally{se.transition=t}},e.unstable_act=le,e.useCallback=function(e,t){return D.current.useCallback(e,t)},e.useContext=function(e){return D.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return D.current.useDeferredValue(e)},e.useEffect=function(e,t){return D.current.useEffect(e,t)},e.useId=function(){return D.current.useId()},e.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return D.current.useMemo(e,t)},e.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},e.useRef=function(e){return D.current.useRef(e)},e.useState=function(e){return D.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return D.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ae(x);else{var t=n(l);t!==null&&oe(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&oe(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function T(){return!(e.unstable_now()-te<ee)}function E(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?ne():(S=!1,C=null)}}else S=!1}var ne;if(typeof v==`function`)ne=function(){v(E)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=E,ne=function(){ie.postMessage(null)}}else ne=function(){g(E,0)};function ae(e){C=e,S||(S=!0,ne())}function oe(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ae(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,oe(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ae(x))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),T=Symbol.for(`react.strict_mode`),E=Symbol.for(`react.profiler`),ne=Symbol.for(`react.provider`),re=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),ae=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),se=Symbol.for(`react.lazy`),ce=Symbol.for(`react.offscreen`),le=Symbol.iterator;function ue(e){return typeof e!=`object`||!e?null:(e=le&&e[le]||e[`@@iterator`],typeof e==`function`?e:null)}var O=Object.assign,de;function fe(e){if(de===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);de=t&&t[1]||``}return`
`+de+e}var pe=!1;function me(e,t){if(!e||pe)return``;pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?fe(e):``}function he(e){switch(e.tag){case 5:return fe(e.type);case 16:return fe(`Lazy`);case 13:return fe(`Suspense`);case 19:return fe(`SuspenseList`);case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return``}}function ge(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case E:return`Profiler`;case T:return`StrictMode`;case ae:return`Suspense`;case oe:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case re:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||``,e=e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ge(e.type)||`Memo`:t;case se:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}function k(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ge(t);case 8:return t===T?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function _e(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ye(e){var t=ve(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function A(e){e._valueTracker||(e._valueTracker=ye(e))}function j(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ve(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function be(e){if(e=e||(typeof document<`u`?document:void 0),e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=_e(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=_e(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var De=Array.isArray;function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+_e(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ke(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return O({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(De(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??(t=``),n=t}e._wrapperState={initialValue:_e(n)}}function je(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function M(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Me(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ne(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Me(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var N,P=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(N=N||document.createElement(`div`),N.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=N.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Fe).forEach(function(e){Ie.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fe[t]=Fe[e]})});function Le(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Fe.hasOwnProperty(e)&&Fe[e]?(``+t).trim():t+`px`}function Re(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Le(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var F=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(e,t){if(t){if(F[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Be(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ve=null;function He(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ue=null,We=null,Ge=null;function Ke(e){if(e=Mi(e)){if(typeof Ue!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Pi(t),Ue(e.stateNode,e.type,t))}}function qe(e){We?Ge?Ge.push(e):Ge=[e]:We=e}function I(){if(We){var e=We,t=Ge;if(Ge=We=null,Ke(e),t)for(e=0;e<t.length;e++)Ke(t[e])}}function Je(e,t){return e(t)}function Ye(){}var Xe=!1;function Ze(e,t,n){if(Xe)return e(t,n);Xe=!0;try{return Je(e,t,n)}finally{Xe=!1,(We!==null||Ge!==null)&&(Ye(),I())}}function Qe(e,t){var n=e.stateNode;if(n===null)return null;var i=Pi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var $e=!1;if(c)try{var et={};Object.defineProperty(et,"passive",{get:function(){$e=!0}}),window.addEventListener(`test`,et,et),window.removeEventListener(`test`,et,et)}catch{$e=!1}function tt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var nt=!1,rt=null,it=!1,L=null,at={onError:function(e){nt=!0,rt=e}};function ot(e,t,n,r,i,a,o,s,c){nt=!1,rt=null,tt.apply(at,arguments)}function st(e,t,n,i,a,o,s,c,l){if(ot.apply(this,arguments),nt){if(nt){var u=rt;nt=!1,rt=null}else throw Error(r(198));it||(it=!0,L=u)}}function R(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ct(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lt(e){if(R(e)!==e)throw Error(r(188))}function ut(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return lt(a),e;if(o===i)return lt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function dt(e){return e=ut(e),e===null?null:ft(e)}function ft(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ft(e);if(t!==null)return t;e=e.sibling}return null}var pt=n.unstable_scheduleCallback,mt=n.unstable_cancelCallback,ht=n.unstable_shouldYield,gt=n.unstable_requestPaint,_t=n.unstable_now,vt=n.unstable_getCurrentPriorityLevel,yt=n.unstable_ImmediatePriority,bt=n.unstable_UserBlockingPriority,xt=n.unstable_NormalPriority,St=n.unstable_LowPriority,Ct=n.unstable_IdlePriority,z=null,wt=null;function Tt(e){if(wt&&typeof wt.onCommitFiberRoot==`function`)try{wt.onCommitFiberRoot(z,e,void 0,(e.current.flags&128)==128)}catch{}}var Et=Math.clz32?Math.clz32:kt,Dt=Math.log,Ot=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ot|0)|0}var At=64,jt=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Mt(a))):r=Mt(s)}else o=n&~i,o===0?a!==0&&(r=Mt(a)):r=Mt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function Pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Pt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function It(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Lt(){var e=At;return At<<=1,!(At&4194240)&&(At=64),e}function Rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function Bt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Ht(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ut,Wt,V,Gt,Kt,qt=!1,Jt=[],Yt=null,Xt=null,H=null,U=new Map,Zt=new Map,Qt=[],$t=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function en(e,t){switch(e){case`focusin`:case`focusout`:Yt=null;break;case`dragenter`:case`dragleave`:Xt=null;break;case`mouseover`:case`mouseout`:H=null;break;case`pointerover`:case`pointerout`:U.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Zt.delete(t.pointerId)}}function tn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Mi(t),t!==null&&Wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nn(e,t,n,r,i){switch(t){case`focusin`:return Yt=tn(Yt,e,t,n,r,i),!0;case`dragenter`:return Xt=tn(Xt,e,t,n,r,i),!0;case`mouseover`:return H=tn(H,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return U.set(a,tn(U.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Zt.set(a,tn(Zt.get(a)||null,e,t,n,r,i)),!0}return!1}function rn(e){var t=ji(e.target);if(t!==null){var n=R(t);if(n!==null){if(t=n.tag,t===13){if(t=ct(n),t!==null){e.blockedOn=t,Kt(e.priority,function(){V(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function an(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ve=r,n.target.dispatchEvent(r),Ve=null}else return t=Mi(n),t!==null&&Wt(t),e.blockedOn=n,!1;t.shift()}return!0}function on(e,t,n){an(e)&&n.delete(t)}function sn(){qt=!1,Yt!==null&&an(Yt)&&(Yt=null),Xt!==null&&an(Xt)&&(Xt=null),H!==null&&an(H)&&(H=null),U.forEach(on),Zt.forEach(on)}function cn(e,t){e.blockedOn===t&&(e.blockedOn=null,qt||(qt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,sn)))}function ln(e){function t(t){return cn(t,e)}if(0<Jt.length){cn(Jt[0],e);for(var n=1;n<Jt.length;n++){var r=Jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&cn(Yt,e),Xt!==null&&cn(Xt,e),H!==null&&cn(H,e),U.forEach(t),Zt.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)rn(n),n.blockedOn===null&&Qt.shift()}var un=C.ReactCurrentBatchConfig,dn=!0;function fn(e,t,n,r){var i=B,a=un.transition;un.transition=null;try{B=1,pn(e,t,n,r)}finally{B=i,un.transition=a}}function W(e,t,n,r){var i=B,a=un.transition;un.transition=null;try{B=4,pn(e,t,n,r)}finally{B=i,un.transition=a}}function pn(e,t,n,r){if(dn){var i=hn(e,t,n,r);if(i===null)ii(e,t,r,mn,n),en(e,r);else if(nn(i,e,t,n,r))r.stopPropagation();else if(en(e,r),t&4&&-1<$t.indexOf(e)){for(;i!==null;){var a=Mi(i);if(a!==null&&Ut(a),a=hn(e,t,n,r),a===null&&ii(e,t,r,mn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var mn=null;function hn(e,t,n,r){if(mn=null,e=He(r),e=ji(e),e!==null){if(t=R(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ct(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return mn=e,null}function gn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(vt()){case yt:return 1;case bt:return 4;case xt:case St:return 16;case Ct:return 536870912;default:return 16}default:return 16}}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function G(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tn=G(wn),En=O({},wn,{view:0,detail:0}),Dn=G(En),On,K,kn,An=O({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(On=e.screenX-kn.screenX,K=e.screenY-kn.screenY):K=On=0,kn=e),On)},movementY:function(e){return`movementY`in e?e.movementY:K}}),jn=G(An),Mn=G(O({},An,{dataTransfer:0})),Nn=G(O({},En,{relatedTarget:0})),Pn=G(O({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=G(O({},wn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=G(O({},wn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=G(O({},En,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=G(O({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=G(O({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=G(O({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=G(O({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=[9,13,27,32],Jn=c&&`CompositionEvent`in window,Yn=null;c&&`documentMode`in document&&(Yn=document.documentMode);var Xn=c&&`TextEvent`in window&&!Yn,Zn=c&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Jn&&er(e,t)?(e=bn(),yn=vn=_n=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var q={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!q[e.type]:t===`textarea`}function or(e,t,n,r){qe(r),t=oi(t,`onChange`),0<t.length&&(n=new Tn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){$r(e,0)}function ur(e){if(j(Ni(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(c){var pr;if(c){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,He(e)),Ze(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(){for(var e=window,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ar(e){var t=Or(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dr(n.ownerDocument.documentElement,n)){if(r!==null&&kr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Er(n,a);var o=Er(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jr=c&&`documentMode`in document&&11>=document.documentMode,Mr=null,Nr=null,Pr=null,J=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;J||Mr==null||Mr!==be(r)||(r=Mr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&wr(Pr,r)||(Pr=r,r=oi(Nr,`onSelect`),0<r.length&&(t=new Tn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};c&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionend`),Gr=new Map,Kr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function qr(e,t){Gr.set(e,t),o(t,[e])}for(var Jr=0;Jr<Kr.length;Jr++){var Yr=Kr[Jr];qr(Yr.toLowerCase(),`on`+(Yr[0].toUpperCase()+Yr.slice(1)))}qr(Vr,`onAnimationEnd`),qr(Hr,`onAnimationIteration`),qr(Ur,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Wr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Xr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Zr=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Xr));function Qr(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,st(r,t,void 0,e),e.currentTarget=null}function $r(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;Qr(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;Qr(i,s,l),a=c}}}if(it)throw e=L,it=!1,L=null,e}function Y(e,t){var n=t[Oi];n===void 0&&(n=t[Oi]=new Set);var r=e+`__bubble`;n.has(r)||(ri(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),ri(n,e,r,t)}var ti=`_reactListening`+Math.random().toString(36).slice(2);function ni(e){if(!e[ti]){e[ti]=!0,i.forEach(function(t){t!==`selectionchange`&&(Zr.has(t)||ei(t,!1,e),ei(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,ei(`selectionchange`,!1,t))}}function ri(e,t,n,r){switch(gn(t)){case 1:var i=fn;break;case 4:i=W;break;default:i=pn}n=i.bind(null,t,n,e),i=void 0,!$e||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function ii(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ji(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Ze(function(){var r=a,i=He(n),o=[];a:{var s=Gr.get(e);if(s!==void 0){var c=Tn,l=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:c=Hn;break;case`focusin`:l=`focus`,c=Nn;break;case`focusout`:l=`blur`,c=Nn;break;case`beforeblur`:case`afterblur`:c=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Wn;break;case Vr:case Hr:case Ur:c=Pn;break;case Wr:c=Gn;break;case`scroll`:c=Dn;break;case`wheel`:c=Kn;break;case`copy`:case`cut`:case`paste`:c=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Un}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Qe(p,f),h!=null&&u.push(ai(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ve&&(l=n.relatedTarget||n.fromElement)&&(ji(l)||l[Di]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?ji(l):null,l!==null&&(d=R(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=jn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Un,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ni(c),m=l==null?s:Ni(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,ji(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=si(m))p++;for(m=0,h=f;h;h=si(h))m++;for(;0<p-m;)u=si(u),p--;for(;0<m-p;)f=si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=si(u),f=si(f)}u=null}else u=null;c!==null&&ci(o,s,c,u,!1),l!==null&&d!==null&&ci(o,d,l,u,!0)}}a:{if(s=r?Ni(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=dr;else if(ar(s)){if(fr)g=xr;else{g=yr;var _=vr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=br);if(g&&(g=g(e,r))){or(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ee(s,`number`,s.value)}switch(_=r?Ni(r):window,e){case`focusin`:(ar(_)||_.contentEditable===`true`)&&(Mr=_,Nr=r,Pr=null);break;case`focusout`:Pr=Nr=Mr=null;break;case`mousedown`:J=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:J=!1,Fr(o,n,i);break;case`selectionchange`:if(jr)break;case`keydown`:case`keyup`:Fr(o,n,i)}var v;if(Jn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else nr?er(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(Zn&&n.locale!==`ko`&&(nr||y!==`onCompositionStart`?y===`onCompositionEnd`&&nr&&(v=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,nr=!0)),_=oi(r,y),0<_.length&&(y=new In(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=tr(n),v!==null&&(y.data=v)))),(v=Xn?rr(e,n):ir(e,n))&&(r=oi(r,`onBeforeInput`),0<r.length&&(i=new In(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}$r(o,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qe(e,n),a!=null&&r.unshift(ai(e,a,i)),a=Qe(e,t),a!=null&&r.push(ai(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Qe(n,a),c!=null&&o.unshift(ai(n,c,s))):i||(c=Qe(n,a),c!=null&&o.push(ai(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function di(e){return(typeof e==`string`?e:``+e).replace(li,`
`).replace(ui,``)}function fi(e,t,n){if(t=di(t),di(e)!==t&&n)throw Error(r(425))}function pi(){}var mi=null,hi=null;function X(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout==`function`?setTimeout:void 0,_i=typeof clearTimeout==`function`?clearTimeout:void 0,vi=typeof Promise==`function`?Promise:void 0,yi=typeof queueMicrotask==`function`?queueMicrotask:vi===void 0?gi:function(e){return vi.resolve(null).then(e).catch(bi)};function bi(e){setTimeout(function(){throw e})}function xi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),ln(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);ln(t)}function Si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ci(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Ti=`__reactFiber$`+wi,Ei=`__reactProps$`+wi,Di=`__reactContainer$`+wi,Oi=`__reactEvents$`+wi,ki=`__reactListeners$`+wi,Ai=`__reactHandles$`+wi;function ji(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Di]||n[Ti]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ci(e);e!==null;){if(n=e[Ti])return n;e=Ci(e)}return t}e=n,n=e.parentNode}return null}function Mi(e){return e=e[Ti]||e[Di],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ni(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Pi(e){return e[Ei]||null}var Fi=[],Ii=-1;function Li(e){return{current:e}}function Z(e){0>Ii||(e.current=Fi[Ii],Fi[Ii]=null,Ii--)}function Ri(e,t){Ii++,Fi[Ii]=e.current,e.current=t}var zi={},Bi=Li(zi),Vi=Li(!1),Hi=zi;function Ui(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Wi(e){return e=e.childContextTypes,e!=null}function Gi(){Z(Vi),Z(Bi)}function Ki(e,t,n){if(Bi.current!==zi)throw Error(r(168));Ri(Bi,t),Ri(Vi,n)}function qi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,k(e)||`Unknown`,a));return O({},n,i)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Hi=Bi.current,Ri(Bi,e),Ri(Vi,Vi.current),!0}function Yi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=qi(e,t,Hi),i.__reactInternalMemoizedMergedChildContext=e,Z(Vi),Z(Bi),Ri(Bi,e)):Z(Vi),Ri(Vi,n)}var Xi=null,Zi=!1,Qi=!1;function $i(e){Xi===null?Xi=[e]:Xi.push(e)}function ea(e){Zi=!0,$i(e)}function ta(){if(!Qi&&Xi!==null){Qi=!0;var e=0,t=B;try{var n=Xi;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xi=null,Zi=!1}catch(t){throw Xi!==null&&(Xi=Xi.slice(e+1)),pt(yt,ta),t}finally{B=t,Qi=!1}}return null}var na=[],ra=0,ia=null,aa=0,oa=[],sa=0,ca=null,la=1,ua=``;function da(e,t){na[ra++]=aa,na[ra++]=ia,ia=e,aa=t}function fa(e,t,n){oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,ca=e;var r=la;e=ua;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var a=32-Et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,la=1<<32-Et(t)+i|n<<i|r,ua=a+e}else la=1<<a|n<<i|r,ua=e}function pa(e){e.return!==null&&(da(e,1),fa(e,1,0))}function ma(e){for(;e===ia;)ia=na[--ra],na[ra]=null,aa=na[--ra],na[ra]=null;for(;e===ca;)ca=oa[--sa],oa[sa]=null,ua=oa[--sa],oa[sa]=null,la=oa[--sa],oa[sa]=null}var ha=null,ga=null,_a=!1,va=null;function ya(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,ha=e,ga=Si(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,ha=e,ga=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=ca===null?null:{id:la,overflow:ua},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ha=e,ga=null,!0);default:return!1}}function xa(e){return!!(e.mode&1)&&!(e.flags&128)}function Sa(e){if(_a){var t=ga;if(t){var n=t;if(!ba(e,t)){if(xa(e))throw Error(r(418));t=Si(n.nextSibling);var i=ha;t&&ba(e,t)?ya(i,n):(e.flags=e.flags&-4097|2,_a=!1,ha=e)}}else{if(xa(e))throw Error(r(418));e.flags=e.flags&-4097|2,_a=!1,ha=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ha=e}function wa(e){if(e!==ha)return!1;if(!_a)return Ca(e),_a=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!X(e.type,e.memoizedProps)),t&&(t=ga)){if(xa(e))throw Ta(),Error(r(418));for(;t;)ya(e,t),t=Si(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ga=Si(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ga=null}}else ga=ha?Si(e.stateNode.nextSibling):null;return!0}function Ta(){for(var e=ga;e;)e=Si(e.nextSibling)}function Ea(){ga=ha=null,_a=!1}function Da(e){va===null?va=[e]:va.push(e)}var Oa=C.ReactCurrentBatchConfig;function ka(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function ja(e){var t=e._init;return t(e._payload)}function Ma(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===se&&ja(i)===t.type)?(r=a(t,n.props),r.ref=ka(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=ka(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=ka(e,null,t),n.return=e,n;case ee:return t=eu(t,e.mode,n),t.return=e,t;case se:var r=t._init;return f(e,r(t._payload),n)}if(De(t)||ue(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Aa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case se:return i=n._init,p(e,t,i(n._payload),r)}if(De(n)||ue(n))return i===null?d(e,t,n,r,null):null;Aa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case se:var a=r._init;return m(e,t,n,a(r._payload),i)}if(De(r)||ue(r))return e=e.get(n)||null,d(t,e,r,i,null);Aa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),_a&&da(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return _a&&da(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),_a&&da(r,h),l}function g(a,s,c,l){var u=ue(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),_a&&da(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return _a&&da(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),_a&&da(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===se&&ja(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=ka(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===te?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=ka(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case se:return l=i._init,_(e,r,l(i._payload),o)}if(De(i))return h(e,r,i,o);if(ue(i))return g(e,r,i,o);Aa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Na=Ma(!0),Pa=Ma(!1),Fa=Li(null),Ia=null,La=null,Ra=null;function za(){Ra=La=Ia=null}function Ba(e){var t=Fa.current;Z(Fa),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ha(e,t){Ia=e,Ra=La=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ms=!0),e.firstContext=null)}function Ua(e){var t=e._currentValue;if(Ra!==e){if(e={context:e,memoizedValue:t,next:null},La===null){if(Ia===null)throw Error(r(308));La=e,Ia.dependencies={lanes:0,firstContext:e}}else La=La.next=e}return t}var Wa=null;function Ga(e){Wa===null?Wa=[e]:Wa.push(e)}function Ka(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,qa(e,r)}function qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Za(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,qa(e,n)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vt(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=O({},d,f);break a;case 2:Ja=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Jc|=o,e.lanes=o,e.memoizedState=d}}function no(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var ro={},io=Li(ro),ao=Li(ro),oo=Li(ro);function so(e){if(e===ro)throw Error(r(174));return e}function co(e,t){switch(Ri(oo,t),Ri(ao,e),Ri(io,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ne(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ne(t,e)}Z(io),Ri(io,t)}function lo(){Z(io),Z(ao),Z(oo)}function uo(e){so(oo.current);var t=so(io.current),n=Ne(t,e.type);t!==n&&(Ri(ao,e),Ri(io,n))}function fo(e){ao.current===e&&(Z(io),Z(ao))}var po=Li(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function go(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var _o=C.ReactCurrentDispatcher,vo=C.ReactCurrentBatchConfig,yo=0,bo=null,xo=null,So=null,Co=!1,wo=!1,To=0,Eo=0;function Do(){throw Error(r(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function ko(e,t,n,i,a,o){if(yo=o,bo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?fs:ps,e=n(i,a),wo){o=0;do{if(wo=!1,To=0,25<=o)throw Error(r(301));o+=1,So=xo=null,t.updateQueue=null,_o.current=ms,e=n(i,a)}while(wo)}if(_o.current=ds,t=xo!==null&&xo.next!==null,yo=0,So=xo=bo=null,Co=!1,t)throw Error(r(300));return e}function Ao(){var e=To!==0;return To=0,e}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return So===null?bo.memoizedState=So=e:So=So.next=e,So}function Mo(){if(xo===null){var e=bo.alternate;e=e===null?null:e.memoizedState}else e=xo.next;var t=So===null?bo.memoizedState:So.next;if(t!==null)So=t,xo=e;else{if(e===null)throw Error(r(310));xo=e,e={memoizedState:xo.memoizedState,baseState:xo.baseState,baseQueue:xo.baseQueue,queue:xo.queue,next:null},So===null?bo.memoizedState=So=e:So=So.next=e}return So}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=xo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((yo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,bo.lanes|=d,Jc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Cr(i,t.memoizedState)||(Ms=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,bo.lanes|=o,Jc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(Ms=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Io(){}function Lo(e,t){var n=bo,i=Mo(),a=t(),o=!Cr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ms=!0),i=i.queue,Yo(Bo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||So!==null&&So.memoizedState.tag&1){if(n.flags|=2048,Wo(9,zo.bind(null,n,i,a,t),void 0,null),Vc===null)throw Error(r(349));yo&30||Ro(n,t,a)}return a}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Ho(e){var t=qa(e,1);t!==null&&ml(t,e,1,-1)}function Uo(e){var t=jo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=ss.bind(null,bo,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=bo.updateQueue,t===null?(t={lastEffect:null,stores:null},bo.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Go(){return Mo().memoizedState}function Ko(e,t,n,r){var i=jo();bo.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=void 0;if(xo!==null){var o=xo.memoizedState;if(a=o.destroy,r!==null&&Oo(r,o.deps)){i.memoizedState=Wo(t,n,a,r);return}}bo.flags|=e,i.memoizedState=Wo(1|t,n,a,r)}function Jo(e,t){return Ko(8390656,8,e,t)}function Yo(e,t){return qo(2048,8,e,t)}function Xo(e,t){return qo(4,2,e,t)}function Zo(e,t){return qo(4,4,e,t)}function Qo(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $o(e,t,n){return n=n==null?null:n.concat([e]),qo(4,4,Qo.bind(null,t,e),n)}function es(){}function ts(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ns(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rs(e,t,n){return yo&21?(Cr(n,t)||(n=Lt(),bo.lanes|=n,Jc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ms=!0),e.memoizedState=n)}function is(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{B=n,vo.transition=r}}function as(){return Mo().memoizedState}function os(e,t,n){var r=pl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cs(e))ls(t,n);else if(n=Ka(e,t,n,r),n!==null){var i=fl();ml(n,e,r,i),us(n,t,r)}}function ss(e,t,n){var r=pl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ga(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ka(e,t,i,r),n!==null&&(i=fl(),ml(n,e,r,i),us(n,t,r))}}function cs(e){var t=e.alternate;return e===bo||t!==null&&t===bo}function ls(e,t){wo=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function us(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vt(e,n)}}var ds={readContext:Ua,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useInsertionEffect:Do,useLayoutEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useMutableSource:Do,useSyncExternalStore:Do,useId:Do,unstable_isNewReconciler:!1},fs={readContext:Ua,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:Ua,useEffect:Jo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Ko(4194308,4,Qo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=jo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=os.bind(null,bo,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:Uo,useDebugValue:es,useDeferredValue:function(e){return jo().memoizedState=e},useTransition:function(){var e=Uo(!1),t=e[0];return e=is.bind(null,e[1]),jo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=bo,a=jo();if(_a){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Vc===null)throw Error(r(349));yo&30||Ro(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Jo(Bo.bind(null,i,o,e),[e]),i.flags|=2048,Wo(9,zo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=jo(),t=Vc.identifierPrefix;if(_a){var n=ua,r=la;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=To++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Eo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ps={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Po,useRef:Go,useState:function(){return Po(No)},useDebugValue:es,useDeferredValue:function(e){return rs(Mo(),xo.memoizedState,e)},useTransition:function(){return[Po(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1},ms={readContext:Ua,useCallback:ts,useContext:Ua,useEffect:Yo,useImperativeHandle:$o,useInsertionEffect:Xo,useLayoutEffect:Zo,useMemo:ns,useReducer:Fo,useRef:Go,useState:function(){return Fo(No)},useDebugValue:es,useDeferredValue:function(e){var t=Mo();return xo===null?t.memoizedState=e:rs(t,xo.memoizedState,e)},useTransition:function(){return[Fo(No)[0],Mo().memoizedState]},useMutableSource:Io,useSyncExternalStore:Lo,useId:as,unstable_isNewReconciler:!1};function hs(e,t){if(e&&e.defaultProps){for(var n in t=O({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _s={isMounted:function(e){return(e=e._reactInternals)?R(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=Za(r,i);a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(ml(t,e,i,r),$a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=Za(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qa(e,a,i),t!==null&&(ml(t,e,i,r),$a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fl(),r=pl(e),i=Za(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qa(e,i,r),t!==null&&(ml(t,e,r,n),$a(t,e,r))}};function vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function ys(e,t,n){var r=!1,i=zi,a=t.contextType;return typeof a==`object`&&a?a=Ua(a):(i=Wi(t)?Hi:Bi.current,r=t.contextTypes,a=(r=r!=null)?Ui(e,i):zi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_s,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_s.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ya(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ua(a):(a=Wi(t)?Hi:Bi.current,i.context=Ui(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(gs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&_s.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ss(e,t){try{var n=``,r=t;do n+=he(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ts=typeof WeakMap==`function`?WeakMap:Map;function Es(e,t,n){n=Za(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,rl=r),ws(e,t)},n}function Ds(e,t,n){n=Za(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ws(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ws(e,t),typeof r!=`function`&&(il===null?il=new Set([this]):il.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ts;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function As(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Za(-1,1),t.tag=2,Qa(n,t,1))),n.lanes|=1),e)}var js=C.ReactCurrentOwner,Ms=!1;function Ns(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Na(t,e.child,n,r)}function Ps(e,t,n,r,i){n=n.render;var a=t.ref;return Ha(t,i),r=ko(e,t,n,r,a,i),n=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&n&&pa(t),t.flags|=1,Ns(e,t,r,i),t.child)}function Fs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Is(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return ec(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Is(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref){if(Ms=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ms=!0);else return t.lanes=e.lanes,ec(e,t,i)}}return zs(e,t,n,r,i)}function Ls(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ri(Gc,Wc),Wc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ri(Gc,Wc),Wc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Ri(Gc,Wc),Wc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Ri(Gc,Wc),Wc|=r;return Ns(e,t,i,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,n,r,i){var a=Wi(n)?Hi:Bi.current;return a=Ui(t,a),Ha(t,i),n=ko(e,t,n,r,a,i),r=Ao(),e!==null&&!Ms?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ec(e,t,i)):(_a&&r&&pa(t),t.flags|=1,Ns(e,t,n,i),t.child)}function Bs(e,t,n,r,i){if(Wi(n)){var a=!0;Ji(t)}else a=!1;if(Ha(t,i),t.stateNode===null)$s(e,t),ys(t,n,r),xs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ua(l):(l=Wi(n)?Hi:Bi.current,l=Ui(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&bs(t,o,r,l),Ja=!1;var f=t.memoizedState;o.state=f,to(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Vi.current||Ja?(typeof u==`function`&&(gs(t,n,u,r),c=t.memoizedState),(s=Ja||vs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xa(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:hs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ua(c):(c=Wi(n)?Hi:Bi.current,c=Ui(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&bs(t,o,r,c),Ja=!1,f=t.memoizedState,o.state=f,to(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Vi.current||Ja?(typeof p==`function`&&(gs(t,n,p,r),m=t.memoizedState),(l=Ja||vs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vs(e,t,n,r,a,i)}function Vs(e,t,n,r,i,a){Rs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&Yi(t,n,!1),ec(e,t,a);r=t.stateNode,js.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Na(t,e.child,null,a),t.child=Na(t,null,s,a)):Ns(e,t,s,a),t.memoizedState=r.state,i&&Yi(t,n,!0),t.child}function Hs(e){var t=e.stateNode;t.pendingContext?Ki(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ki(e,t.context,!1),co(e,t.containerInfo)}function Us(e,t,n,r,i){return Ea(),Da(i),t.flags|=256,Ns(e,t,n,r),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Gs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ks(e,t,n){var r=t.pendingProps,i=po.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ri(po,i&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Gs(n),t.memoizedState=Ws,e):qs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ys(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Gs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ws,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&Da(r),Na(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ys(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Cs(Error(r(422))),Js(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Na(t,e.child,null,s),t.child.memoizedState=Gs(s),t.memoizedState=Ws,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Js(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Cs(o,i,void 0),Js(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ms||c){if(i=Vc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,qa(e,a),ml(i,e,a,-1))}return Ol(),i=Cs(Error(r(421))),Js(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ga=Si(a.nextSibling),ha=t,_a=!0,va=null,e!==null&&(oa[sa++]=la,oa[sa++]=ua,oa[sa++]=ca,la=e.id,ua=e.overflow,ca=t),t=qs(t,i.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function Zs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ns(e,t,r.children,n),r=po.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ri(po,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zs(t,!0,n,null,a);break;case`together`:Zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tc(e,t,n){switch(t.tag){case 3:Hs(t),Ea();break;case 5:uo(t);break;case 1:Wi(t.type)&&Ji(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ri(Fa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ri(po,po.current&1),e=ec(e,t,n),e===null?null:e.sibling):Ks(e,t,n):(Ri(po,po.current&1),t.flags|=128,null);Ri(po,po.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ri(po,po.current),r)break;return null;case 22:case 23:return t.lanes=0,Ls(e,t,n)}return ec(e,t,n)}var nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,so(io.current);var o=null;switch(n){case`input`:i=xe(e,i),r=xe(e,r),o=[];break;case`select`:i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case`textarea`:i=ke(e,i),r=ke(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=pi)}ze(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o=o||[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&Y(`scroll`,e),o||c===l||(o=[])):(o=o||[]).push(u,l))}}n&&(o=o||[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function ac(e,t){if(!_a)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sc(e,t,n){var i=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oc(t),null;case 1:return Wi(t.type)&&Gi(),oc(t),null;case 3:return i=t.stateNode,lo(),Z(Vi),Z(Bi),go(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,va!==null&&(vl(va),va=null))),oc(t),null;case 5:fo(t);var o=so(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return oc(t),null}if(e=so(io.current),wa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ti]=t,i[Ei]=s,e=!!(t.mode&1),n){case`dialog`:Y(`cancel`,i),Y(`close`,i);break;case`iframe`:case`object`:case`embed`:Y(`load`,i);break;case`video`:case`audio`:for(o=0;o<Xr.length;o++)Y(Xr[o],i);break;case`source`:Y(`error`,i);break;case`img`:case`image`:case`link`:Y(`error`,i),Y(`load`,i);break;case`details`:Y(`toggle`,i);break;case`input`:Se(i,s),Y(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},Y(`invalid`,i);break;case`textarea`:Ae(i,s),Y(`invalid`,i)}for(var c in ze(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&fi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&Y(`scroll`,i)}switch(n){case`input`:A(i),Te(i,s,!0);break;case`textarea`:A(i),M(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=pi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Me(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ti]=t,e[Ei]=i,nc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Be(n,i),n){case`dialog`:Y(`cancel`,e),Y(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:Y(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Xr.length;o++)Y(Xr[o],e);o=i;break;case`source`:Y(`error`,e),o=i;break;case`img`:case`image`:case`link`:Y(`error`,e),Y(`load`,e),o=i;break;case`details`:Y(`toggle`,e),o=i;break;case`input`:Se(e,i),o=xe(e,i),Y(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=O({},i,{value:void 0}),Y(`invalid`,e);break;case`textarea`:Ae(e,i),o=ke(e,i),Y(`invalid`,e);break;default:o=i}for(s in ze(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Re(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&P(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Pe(e,u):typeof u==`number`&&Pe(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&Y(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:A(e),Te(e,i,!1);break;case`textarea`:A(e),M(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+_e(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Oe(e,!!i.multiple,i.defaultValue,!0):Oe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=pi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oc(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=so(oo.current),so(io.current),wa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ti]=t,(s=i.nodeValue!==n)&&(e=ha,e!==null))switch(e.tag){case 3:fi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&fi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ti]=t,t.stateNode=i}return oc(t),null;case 13:if(Z(po),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_a&&ga!==null&&t.mode&1&&!(t.flags&128))Ta(),Ea(),t.flags|=98560,s=!1;else if(s=wa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ti]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oc(t),s=!1}else va!==null&&(vl(va),va=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||po.current&1?Kc===0&&(Kc=3):Ol())),t.updateQueue!==null&&(t.flags|=4),oc(t),null);case 4:return lo(),e===null&&ni(t.stateNode.containerInfo),oc(t),null;case 10:return Ba(t.type._context),oc(t),null;case 17:return Wi(t.type)&&Gi(),oc(t),null;case 19:if(Z(po),s=t.memoizedState,s===null)return oc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)ac(s,!1);else{if(Kc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=mo(e),c!==null){for(t.flags|=128,ac(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ri(po,po.current&1|2),t.child}e=e.sibling}s.tail!==null&&_t()>el&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}}else{if(!i){if(e=mo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ac(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!_a)return oc(t),null}else 2*_t()-s.renderingStartTime>el&&n!==1073741824&&(t.flags|=128,i=!0,ac(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(oc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_t(),t.sibling=null,n=po.current,Ri(po,i?n&1|2:n&1),t);case 22:case 23:return wl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Wc&1073741824&&(oc(t),t.subtreeFlags&6&&(t.flags|=8192)):oc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function cc(e,t){switch(ma(t),t.tag){case 1:return Wi(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lo(),Z(Vi),Z(Bi),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(Z(po),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(po),null;case 4:return lo(),null;case 10:return Ba(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var lc=!1,uc=!1,dc=typeof WeakSet==`function`?WeakSet:Set,Q=null;function fc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Rl(e,t,n)}else n.current=null}}function pc(e,t,n){try{n()}catch(n){Rl(e,t,n)}}var mc=!1;function hc(e,t){if(mi=dn,e=Or(),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},dn=!1,Q=t;Q!==null;)if(t=Q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:hs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Rl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return h=mc,mc=!1,h}function gc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pc(t,n,a)}i=i.next}while(i!==r)}}function _c(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ti],delete t[Ei],delete t[Oi],delete t[ki],delete t[Ai])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}var wc=null,Tc=!1;function Ec(e,t,n){for(n=n.child;n!==null;)Dc(e,t,n),n=n.sibling}function Dc(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount==`function`)try{wt.onCommitFiberUnmount(z,n)}catch{}switch(n.tag){case 5:uc||fc(n,t);case 6:var r=wc,i=Tc;wc=null,Ec(e,t,n),wc=r,Tc=i,wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):wc.removeChild(n.stateNode));break;case 18:wc!==null&&(Tc?(e=wc,n=n.stateNode,e.nodeType===8?xi(e.parentNode,n):e.nodeType===1&&xi(e,n),ln(e)):xi(wc,n.stateNode));break;case 4:r=wc,i=Tc,wc=n.stateNode.containerInfo,Tc=!0,Ec(e,t,n),wc=r,Tc=i;break;case 0:case 11:case 14:case 15:if(!uc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pc(n,t,o),i=i.next}while(i!==r)}Ec(e,t,n);break;case 1:if(!uc&&(fc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Rl(n,t,e)}Ec(e,t,n);break;case 21:Ec(e,t,n);break;case 22:n.mode&1?(uc=(r=uc)||n.memoizedState!==null,Ec(e,t,n),uc=r):Ec(e,t,n);break;default:Ec(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function kc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:wc=c.stateNode,Tc=!1;break a;case 3:wc=c.stateNode.containerInfo,Tc=!0;break a;case 4:wc=c.stateNode.containerInfo,Tc=!0;break a}c=c.return}if(wc===null)throw Error(r(160));Dc(o,s,a),wc=null,Tc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Rl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ac(t,e),t=t.sibling}function Ac(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kc(t,e),jc(e),i&4){try{gc(3,e,e.return),_c(3,e)}catch(t){Rl(e,e.return,t)}try{gc(5,e,e.return)}catch(t){Rl(e,e.return,t)}}break;case 1:kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return);break;case 5:if(kc(t,e),jc(e),i&512&&n!==null&&fc(n,n.return),e.flags&32){var a=e.stateNode;try{Pe(a,``)}catch(t){Rl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ce(a,o),Be(c,s);var u=Be(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Re(a,f):d===`dangerouslySetInnerHTML`?P(a,f):d===`children`?Pe(a,f):S(a,d,f,u)}switch(c){case`input`:we(a,o);break;case`textarea`:je(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Oe(a,!!o.multiple,o.multiple?[]:``,!1):Oe(a,!!o.multiple,o.defaultValue,!0)):Oe(a,!!o.multiple,m,!1)}a[Ei]=o}catch(t){Rl(e,e.return,t)}}break;case 6:if(kc(t,e),jc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Rl(e,e.return,t)}}break;case 3:if(kc(t,e),jc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ln(t.containerInfo)}catch(t){Rl(e,e.return,t)}break;case 4:kc(t,e),jc(e);break;case 13:kc(t,e),jc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||($c=_t())),i&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(uc=(u=uc)||d,kc(t,e),uc=u):kc(t,e),jc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Q=e,d=e.child;d!==null;){for(f=Q=d;Q!==null;){switch(p=Q,m=p.child,p.tag){case 0:case 11:case 14:case 15:gc(4,p,p.return);break;case 1:fc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Rl(i,n,e)}}break;case 5:fc(p,p.return);break;case 22:if(p.memoizedState!==null){Fc(f);continue}}m===null?Fc(f):(m.return=p,Q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Le(`display`,s))}catch(t){Rl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Rl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kc(t,e),jc(e),i&4&&Oc(e);break;case 21:break;default:kc(t,e),jc(e)}}function jc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(bc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Pe(a,``),i.flags&=-33),Cc(e,xc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Sc(e,xc(e),o);break;default:throw Error(r(161))}}catch(t){Rl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mc(e,t,n){Q=e,Nc(e,t,n)}function Nc(e,t,n){for(var r=!!(e.mode&1);Q!==null;){var i=Q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||uc;s=lc;var l=uc;if(lc=o,(uc=c)&&!l)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Ic(i):(c.return=o,Q=c);for(;a!==null;)Q=a,Nc(a,t,n),a=a.sibling;Q=i,lc=s,uc=l}Pc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Q=a):Pc(e,t,n)}}function Pc(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:uc||_c(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!uc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:hs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&no(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}no(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ln(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}uc||t.flags&512&&vc(t)}catch(e){Rl(t,t.return,e)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Fc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ic(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(e){Rl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Rl(t,i,e)}}var a=t.return;try{vc(t)}catch(e){Rl(t,a,e)}break;case 5:var o=t.return;try{vc(t)}catch(e){Rl(t,o,e)}}}catch(e){Rl(t,t.return,e)}if(t===e){Q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Q=s;break}Q=t.return}}var Lc=Math.ceil,Rc=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,Bc=C.ReactCurrentBatchConfig,$=0,Vc=null,Hc=null,Uc=0,Wc=0,Gc=Li(0),Kc=0,qc=null,Jc=0,Yc=0,Xc=0,Zc=null,Qc=null,$c=0,el=1/0,tl=null,nl=!1,rl=null,il=null,al=!1,ol=null,sl=0,cl=0,ll=null,ul=-1,dl=0;function fl(){return $&6?_t():ul===-1?ul=_t():ul}function pl(e){return e.mode&1?$&2&&Uc!==0?Uc&-Uc:Oa.transition===null?(e=B,e===0?(e=window.event,e=e===void 0?16:gn(e.type),e):e):(dl===0&&(dl=Lt()),dl):1}function ml(e,t,n,i){if(50<cl)throw cl=0,ll=null,Error(r(185));zt(e,n,i),(!($&2)||e!==Vc)&&(e===Vc&&(!($&2)&&(Yc|=n),Kc===4&&bl(e,Uc)),hl(e,i),n===1&&$===0&&!(t.mode&1)&&(el=_t()+500,Zi&&ta()))}function hl(e,t){var n=e.callbackNode;Ft(e,t);var r=Nt(e,e===Vc?Uc:0);if(r===0)n!==null&&mt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mt(n),t===1)e.tag===0?ea(xl.bind(null,e)):$i(xl.bind(null,e)),yi(function(){!($&6)&&ta()}),n=null;else{switch(Ht(r)){case 1:n=yt;break;case 4:n=bt;break;case 16:n=xt;break;case 536870912:n=Ct;break;default:n=xt}n=Wl(n,gl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gl(e,t){if(ul=-1,dl=0,$&6)throw Error(r(327));var n=e.callbackNode;if(Il()&&e.callbackNode!==n)return null;var i=Nt(e,e===Vc?Uc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=kl(e,i);else{t=i;var a=$;$|=2;var o=Dl();(Vc!==e||Uc!==t)&&(tl=null,el=_t()+500,Tl(e,t));do try{jl();break}catch(t){El(e,t)}while(1);za(),Rc.current=o,$=a,Hc===null?(Vc=null,Uc=0,t=Kc):t=0}if(t!==0){if(t===2&&(a=It(e),a!==0&&(i=a,t=_l(e,a))),t===1)throw n=qc,Tl(e,0),bl(e,i),hl(e,_t()),n;if(t===6)bl(e,i);else{if(a=e.current.alternate,!(i&30)&&!yl(a)&&(t=kl(e,i),t===2&&(o=It(e),o!==0&&(i=o,t=_l(e,o))),t===1))throw n=qc,Tl(e,0),bl(e,i),hl(e,_t()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Pl(e,Qc,tl);break;case 3:if(bl(e,i),(i&130023424)===i&&(t=$c+500-_t(),10<t)){if(Nt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){fl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=gi(Pl.bind(null,e,Qc,tl),t);break}Pl(e,Qc,tl);break;case 4:if(bl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Et(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lc(i/1960))-i,10<i){e.timeoutHandle=gi(Pl.bind(null,e,Qc,tl),i);break}Pl(e,Qc,tl);break;case 5:Pl(e,Qc,tl);break;default:throw Error(r(329))}}}return hl(e,_t()),e.callbackNode===n?gl.bind(null,e):null}function _l(e,t){var n=Zc;return e.current.memoizedState.isDehydrated&&(Tl(e,t).flags|=256),e=kl(e,t),e!==2&&(t=Qc,Qc=n,t!==null&&vl(t)),e}function vl(e){Qc===null?Qc=e:Qc.push.apply(Qc,e)}function yl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bl(e,t){for(t&=~Xc,t&=~Yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function xl(e){if($&6)throw Error(r(327));Il();var t=Nt(e,0);if(!(t&1))return hl(e,_t()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var i=It(e);i!==0&&(t=i,n=_l(e,i))}if(n===1)throw n=qc,Tl(e,0),bl(e,t),hl(e,_t()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pl(e,Qc,tl),hl(e,_t()),null}function Sl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(el=_t()+500,Zi&&ta())}}function Cl(e){ol!==null&&ol.tag===0&&!($&6)&&Il();var t=$;$|=1;var n=Bc.transition,r=B;try{if(Bc.transition=null,B=1,e)return e()}finally{B=r,Bc.transition=n,$=t,!($&6)&&ta()}}function wl(){Wc=Gc.current,Z(Gc)}function Tl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_i(n)),Hc!==null)for(n=Hc.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:lo(),Z(Vi),Z(Bi),go();break;case 5:fo(r);break;case 4:lo();break;case 13:Z(po);break;case 19:Z(po);break;case 10:Ba(r.type._context);break;case 22:case 23:wl()}n=n.return}if(Vc=e,Hc=e=Yl(e.current,null),Uc=Wc=t,Kc=0,qc=null,Xc=Yc=Jc=0,Qc=Zc=null,Wa!==null){for(t=0;t<Wa.length;t++)if(n=Wa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wa=null}return e}function El(e,t){do{var n=Hc;try{if(za(),_o.current=ds,Co){for(var i=bo.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Co=!1}if(yo=0,So=xo=bo=null,wo=!1,To=0,zc.current=null,n===null||n.return===null){Kc=1,qc=t,Hc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Uc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ks(s);if(m!==null){m.flags&=-257,As(m,s,c,o,t),m.mode&1&&Os(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Os(o,u,t),Ol();break a}l=Error(r(426))}else if(_a&&c.mode&1){var _=ks(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),As(_,s,c,o,t),Da(Ss(l,c));break a}}o=l=Ss(l,c),Kc!==4&&(Kc=2),Zc===null?Zc=[o]:Zc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Es(o,l,t);eo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(il===null||!il.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ds(o,c,t);eo(o,x);break a}}o=o.return}while(o!==null)}Nl(n)}catch(e){t=e,Hc===n&&n!==null&&(Hc=n=n.return);continue}break}while(1)}function Dl(){var e=Rc.current;return Rc.current=ds,e===null?ds:e}function Ol(){(Kc===0||Kc===3||Kc===2)&&(Kc=4),Vc===null||!(Jc&268435455)&&!(Yc&268435455)||bl(Vc,Uc)}function kl(e,t){var n=$;$|=2;var i=Dl();(Vc!==e||Uc!==t)&&(tl=null,Tl(e,t));do try{Al();break}catch(t){El(e,t)}while(1);if(za(),$=n,Rc.current=i,Hc!==null)throw Error(r(261));return Vc=null,Uc=0,Kc}function Al(){for(;Hc!==null;)Ml(Hc)}function jl(){for(;Hc!==null&&!ht();)Ml(Hc)}function Ml(e){var t=Ul(e.alternate,e,Wc);e.memoizedProps=e.pendingProps,t===null?Nl(e):Hc=t,zc.current=null}function Nl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cc(n,t),n!==null){n.flags&=32767,Hc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Kc=6,Hc=null;return}}else if(n=sc(n,t,Wc),n!==null){Hc=n;return}if(t=t.sibling,t!==null){Hc=t;return}Hc=t=e}while(t!==null);Kc===0&&(Kc=5)}function Pl(e,t,n){var r=B,i=Bc.transition;try{Bc.transition=null,B=1,Fl(e,t,n,r)}finally{Bc.transition=i,B=r}return null}function Fl(e,t,n,i){do Il();while(ol!==null);if($&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bt(e,o),e===Vc&&(Hc=Vc=null,Uc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Wl(xt,function(){return Il(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Bc.transition,Bc.transition=null;var s=B;B=1;var c=$;$|=4,zc.current=null,hc(e,n),Ac(n,e),Ar(hi),dn=!!mi,hi=mi=null,e.current=n,Mc(n,e,a),gt(),$=c,B=s,Bc.transition=o}else e.current=n;if(al&&(al=!1,ol=e,sl=a),o=e.pendingLanes,o===0&&(il=null),Tt(n.stateNode,i),hl(e,_t()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(nl)throw nl=!1,e=rl,rl=null,e;return sl&1&&e.tag!==0&&Il(),o=e.pendingLanes,o&1?e===ll?cl++:(cl=0,ll=e):cl=0,ta(),null}function Il(){if(ol!==null){var e=Ht(sl),t=Bc.transition,n=B;try{if(Bc.transition=null,B=16>e?16:e,ol===null)var i=!1;else{if(e=ol,ol=null,sl=0,$&6)throw Error(r(331));var a=$;for($|=4,Q=e.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:gc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var p=d.sibling,m=d.return;if(yc(d),d===u){Q=null;break}if(p!==null){p.return=m,Q=p;break}Q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else b:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Q=v;break b}Q=o.return}}var y=e.current;for(Q=y;Q!==null;){s=Q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Q=b;else b:for(s=y;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_c(9,c)}}catch(e){Rl(c,c.return,e)}if(c===s){Q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Q=x;break b}Q=c.return}}if($=a,ta(),wt&&typeof wt.onPostCommitFiberRoot==`function`)try{wt.onPostCommitFiberRoot(z,e)}catch{}i=!0}return i}finally{B=n,Bc.transition=t}}return!1}function Ll(e,t,n){t=Ss(n,t),t=Es(e,t,1),e=Qa(e,t,1),t=fl(),e!==null&&(zt(e,1,t),hl(e,t))}function Rl(e,t,n){if(e.tag===3)Ll(e,e,n);else for(;t!==null;){if(t.tag===3){Ll(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(il===null||!il.has(r))){e=Ss(n,e),e=Ds(t,e,1),t=Qa(t,e,1),e=fl(),t!==null&&(zt(t,1,e),hl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fl(),e.pingedLanes|=e.suspendedLanes&n,Vc===e&&(Uc&n)===n&&(Kc===4||Kc===3&&(Uc&130023424)===Uc&&500>_t()-$c?Tl(e,0):Xc|=n),hl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):t=1);var n=fl();e=qa(e,t),e!==null&&(zt(e,t,n),hl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Vi.current)Ms=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ms=!1,tc(e,t,n);Ms=!!(e.flags&131072)}}else Ms=!1,_a&&t.flags&1048576&&fa(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;$s(e,t),e=t.pendingProps;var a=Ui(t,Bi.current);Ha(t,n),a=ko(null,t,i,e,a,n);var o=Ao();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(i)?(o=!0,Ji(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ya(t),a.updater=_s,t.stateNode=a,a._reactInternals=t,xs(t,i,e,n),t=Vs(null,t,i,!0,o,n)):(t.tag=0,_a&&o&&pa(t),Ns(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch($s(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=hs(i,e),a){case 0:t=zs(null,t,i,e,n);break a;case 1:t=Bs(null,t,i,e,n);break a;case 11:t=Ps(null,t,i,e,n);break a;case 14:t=Fs(null,t,i,hs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),zs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Bs(e,t,i,a,n);case 3:a:{if(Hs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Xa(e,t),to(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ss(Error(r(423)),t),t=Us(e,t,i,n,a);break a}if(i!==a){a=Ss(Error(r(424)),t),t=Us(e,t,i,n,a);break a}for(ga=Si(t.stateNode.containerInfo.firstChild),ha=t,_a=!0,va=null,n=Pa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ea(),i===a){t=ec(e,t,n);break a}Ns(e,t,i,n)}t=t.child}return t;case 5:return uo(t),e===null&&Sa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,X(i,a)?s=null:o!==null&&X(i,o)&&(t.flags|=32),Rs(e,t),Ns(e,t,s,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Ks(e,t,n);case 4:return co(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Na(t,null,i,n):Ns(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),Ps(e,t,i,a,n);case 7:return Ns(e,t,t.pendingProps,n),t.child;case 8:return Ns(e,t,t.pendingProps.children,n),t.child;case 12:return Ns(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ri(Fa,i._currentValue),i._currentValue=s,o!==null){if(Cr(o.value,s)){if(o.children===a.children&&!Vi.current){t=ec(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Za(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Va(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Va(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Ns(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ha(t,n),a=Ua(a),i=i(a),t.flags|=1,Ns(e,t,i,n),t.child;case 14:return i=t.type,a=hs(i,t.pendingProps),a=hs(i.type,a),Fs(e,t,i,a,n);case 15:return Is(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:hs(i,a),$s(e,t),t.tag=1,Wi(i)?(e=!0,Ji(t)):e=!1,Ha(t,n),ys(t,i,a),xs(t,i,a,n),Vs(null,t,i,!0,e,n);case 19:return Qs(e,t,n);case 22:return Ls(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return pt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===D)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return Zl(n.children,a,o,t);case T:s=8,a|=8;break;case E:return e=Kl(12,n,t,a|2),e.elementType=E,e.lanes=o,e;case ae:return e=Kl(13,n,t,a),e.elementType=ae,e.lanes=o,e;case oe:return e=Kl(19,n,t,a),e.elementType=oe,e.lanes=o,e;case ce:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case re:s=9;break a;case ie:s=11;break a;case D:s=14;break a;case se:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rt(0),this.expirationTimes=Rt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return zi;e=e._reactInternals;a:{if(R(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Wi(n))return qi(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=fl(),i=pl(n),a=Za(r,i),a.callback=t??null,Qa(n,a,i),e.current.lanes=i,zt(e,i,r),hl(e,r),e}function ou(e,t,n,r){var i=t.current,a=fl(),o=pl(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=Za(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qa(i,t,o),e!==null&&(ml(e,i,o,a),$a(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cl(function(){ou(null,e,null,null)}),t[Di]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&rn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Di]=o.current,ni(e.nodeType===8?e.parentNode:e),Cl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Di]=c.current,ni(e.nodeType===8?e.parentNode:e),Cl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Ut=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mt(t.pendingLanes);n!==0&&(Vt(t,n|1),hl(t,_t()),!($&6)&&(el=_t()+500,ta()))}break;case 13:Cl(function(){var t=qa(e,1);t!==null&&ml(t,e,1,fl())}),lu(e,1)}},Wt=function(e){if(e.tag===13){var t=qa(e,134217728);t!==null&&ml(t,e,134217728,fl()),lu(e,134217728)}},V=function(e){if(e.tag===13){var t=pl(e),n=qa(e,t);n!==null&&ml(n,e,t,fl()),lu(e,t)}},Gt=function(){return B},Kt=function(e,t){var n=B;try{return B=e,t()}finally{B=n}},Ue=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Pi(i);if(!a)throw Error(r(90));j(i),we(i,a)}}}break;case`textarea`:je(e,n);break;case`select`:t=n.value,t!=null&&Oe(e,!!n.multiple,t,!1)}},Je=Sl,Ye=Cl;var yu={usingClientEntryPoint:!1,Events:[Mi,Ni,Pi,qe,I,Sl]},bu={findFiberByHostInstance:ji,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{z=Su.inject(xu),wt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Di]=t.current,ni(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=dt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Cl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Di]=t.current,ni(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(Cl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Di]=null})}),!0):!1},e.unstable_batchedUpdates=Sl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),_=o(((e,t)=>{t.exports=g()})),v=h(),y=c(u(),1),b=m(),x=_(),S=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,C={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=S}var w=C,ee=`.icon-transitions-module__iconState___uqK9J {
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
}`,te={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=ee}var T=te,E=({size:e=16})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),ne=({size:e=24,style:t={}})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,x.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,x.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,x.jsx)(`defs`,{children:(0,x.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,x.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),re=({size:e=20,...t})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,x.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,x.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),ie=({size:e=24,copied:t=!1,tint:n})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,x.jsxs)(`g`,{className:`${T.iconState} ${t?T.hiddenScaled:T.visibleScaled}`,children:[(0,x.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,x.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,x.jsxs)(`g`,{className:`${T.iconState} ${t?T.visibleScaled:T.hiddenScaled}`,children:[(0,x.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),ae=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`g`,{className:`${T.iconStateFast} ${n?T.visibleScaled:a?T.sending:T.hiddenScaled}`,children:(0,x.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,x.jsxs)(`g`,{className:`${T.iconStateFast} ${r?T.visibleScaled:T.hiddenScaled}`,children:[(0,x.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,x.jsxs)(`g`,{className:`${T.iconStateFast} ${i?T.visibleScaled:T.hiddenScaled}`,children:[(0,x.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},oe=({size:e=24,isOpen:t=!0})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsxs)(`g`,{className:`${T.iconFade} ${t?T.visible:T.hidden}`,children:[(0,x.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,x.jsxs)(`g`,{className:`${T.iconFade} ${t?T.hidden:T.visible}`,children:[(0,x.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,x.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),D=({size:e=24,isPaused:t=!1})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsxs)(`g`,{className:`${T.iconFadeFast} ${t?T.hidden:T.visible}`,children:[(0,x.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,x.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,x.jsx)(`path`,{className:`${T.iconFadeFast} ${t?T.visible:T.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),se=({size:e=16})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),ce=({size:e=16})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),le=({size:e=16})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,x.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,x.jsx)(`defs`,{children:(0,x.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,x.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),ue=({size:e=24})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),O=({size:e=16})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,x.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,x.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),de=({size:e=16})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),fe=({size:e=16})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),pe=({size:e=24})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),me=({size:e=16})=>(0,x.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),he=({size:e=24})=>(0,x.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,x.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,x.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),ge=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],k=ge.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),_e=`feedback-freeze-styles`,ve=`__agentation_freeze`;function ye(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[ve]||(e[ve]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[ve]}var A=ye();typeof window<`u`&&!A.installed&&(A.origSetTimeout=window.setTimeout.bind(window),A.origSetInterval=window.setInterval.bind(window),A.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?A.origSetTimeout(e,t):A.origSetTimeout((...t)=>{A.frozen?A.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?A.origSetInterval(e,t):A.origSetInterval((...t)=>{A.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>A.origRAF(t=>{A.frozen?A.frozenRAFQueue.push(e):e(t)}),A.installed=!0);var j=A.origSetTimeout,be=A.origSetInterval,xe=A.origRAF;function Se(e){return e?ge.some(t=>!!e.closest?.(`[${t}]`)):!1}function Ce(){if(typeof document>`u`||A.frozen)return;A.frozen=!0,A.frozenTimeoutQueue=[],A.frozenRAFQueue=[];let e=document.getElementById(_e);e||(e=document.createElement(`style`),e.id=_e),e.textContent=`
    *${k},
    *${k}::before,
    *${k}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),A.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;Se(t)||(e.pause(),A.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function we(){if(typeof document>`u`||!A.frozen)return;A.frozen=!1;let e=A.frozenTimeoutQueue;A.frozenTimeoutQueue=[];for(let t of e)A.origSetTimeout(()=>{if(A.frozen){A.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=A.frozenRAFQueue;A.frozenRAFQueue=[];for(let e of t)A.origRAF(t=>{if(A.frozen){A.frozenRAFQueue.push(e);return}e(t)});for(let e of A.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}A.pausedAnimations=[],document.getElementById(_e)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function Te(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var Ee=(0,y.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,y.useState)(i),[_,v]=(0,y.useState)(!1),[b,S]=(0,y.useState)(`initial`),[C,ee]=(0,y.useState)(!1),[te,T]=(0,y.useState)(!1),E=(0,y.useRef)(null),ne=(0,y.useRef)(null),re=(0,y.useRef)(null),ie=(0,y.useRef)(null);(0,y.useEffect)(()=>{d&&b!==`exit`&&S(`exit`)},[d,b]),(0,y.useEffect)(()=>{j(()=>{S(`enter`)},0);let e=j(()=>{S(`entered`)},200),t=j(()=>{let e=E.current;e&&(Te(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),re.current&&clearTimeout(re.current),ie.current&&clearTimeout(ie.current)}},[]);let ae=(0,y.useCallback)(()=>{ie.current&&clearTimeout(ie.current),v(!0),ie.current=j(()=>{v(!1),Te(E.current)},250)},[]);(0,y.useImperativeHandle)(m,()=>({shake:ae}),[ae]);let oe=(0,y.useCallback)(()=>{S(`exit`),re.current=j(()=>{s()},150)},[s]),D=(0,y.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),se=(0,y.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),D()),e.key===`Escape`&&oe())},[D,oe]),ce=[w.popup,f?w.light:``,b===`enter`?w.enter:``,b===`entered`?w.entered:``,b===`exit`?w.exit:``,_?w.shake:``].filter(Boolean).join(` `);return(0,x.jsxs)(`div`,{ref:ne,className:ce,"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:w.header,children:[p&&Object.keys(p).length>0?(0,x.jsxs)(`button`,{className:w.headerToggle,onClick:()=>{let e=te;T(!te),e&&j(()=>Te(E.current),0)},type:`button`,children:[(0,x.jsx)(`svg`,{className:`${w.chevron} ${te?w.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,x.jsx)(`span`,{className:w.element,children:e})]}):(0,x.jsx)(`span`,{className:w.element,children:e}),t&&(0,x.jsx)(`span`,{className:w.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,x.jsx)(`div`,{className:`${w.stylesWrapper} ${te?w.expanded:``}`,children:(0,x.jsx)(`div`,{className:w.stylesInner,children:(0,x.jsx)(`div`,{className:w.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,x.jsxs)(`div`,{className:w.styleLine,children:[(0,x.jsx)(`span`,{className:w.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,x.jsx)(`span`,{className:w.styleValue,children:t}),`;`]},e))})})}),n&&(0,x.jsxs)(`div`,{className:w.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,x.jsx)(`textarea`,{ref:E,className:w.textarea,style:{borderColor:C?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>ee(!0),onBlur:()=>ee(!1),rows:2,onKeyDown:se}),(0,x.jsxs)(`div`,{className:w.actions,children:[c&&(0,x.jsx)(`div`,{className:w.deleteWrapper,children:(0,x.jsx)(`button`,{className:w.deleteButton,onClick:c,type:`button`,children:(0,x.jsx)(pe,{size:22})})}),(0,x.jsx)(`button`,{className:w.cancel,onClick:oe,children:`Cancel`}),(0,x.jsx)(`button`,{className:w.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:D,disabled:!h.trim(),children:a})]})]})}),De=({content:e,children:t,...n})=>{let[r,i]=(0,y.useState)(!1),[a,o]=(0,y.useState)(!1),[s,c]=(0,y.useState)({top:0,right:0}),l=(0,y.useRef)(null),u=(0,y.useRef)(null),d=(0,y.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,y.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&(clearTimeout(d.current),d.current=null),f(),u.current=j(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&(clearTimeout(u.current),u.current=null),i(!1),d.current=j(()=>{o(!1)},150)},...n,children:t}),a&&(0,b.createPortal)((0,x.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},Oe=`.styles-module__tooltip___mcXL2 {
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
}`,ke={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=Oe}var Ae=ke,je=({content:e})=>(0,x.jsx)(De,{className:Ae.tooltip,content:e,children:(0,x.jsx)(re,{className:Ae.tooltipIcon})}),M={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Me=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...M.navigation},{type:`header`,label:`Header`,...M.header},{type:`hero`,label:`Hero`,...M.hero},{type:`section`,label:`Section`,...M.section},{type:`sidebar`,label:`Sidebar`,...M.sidebar},{type:`footer`,label:`Footer`,...M.footer},{type:`modal`,label:`Modal`,...M.modal},{type:`banner`,label:`Banner`,...M.banner},{type:`drawer`,label:`Drawer`,...M.drawer},{type:`popover`,label:`Popover`,...M.popover},{type:`divider`,label:`Divider`,...M.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...M.card},{type:`text`,label:`Text`,...M.text},{type:`image`,label:`Image`,...M.image},{type:`video`,label:`Video`,...M.video},{type:`table`,label:`Table`,...M.table},{type:`grid`,label:`Grid`,...M.grid},{type:`list`,label:`List`,...M.list},{type:`chart`,label:`Chart`,...M.chart},{type:`codeBlock`,label:`Code Block`,...M.codeBlock},{type:`map`,label:`Map`,...M.map},{type:`timeline`,label:`Timeline`,...M.timeline},{type:`calendar`,label:`Calendar`,...M.calendar},{type:`accordion`,label:`Accordion`,...M.accordion},{type:`carousel`,label:`Carousel`,...M.carousel},{type:`logo`,label:`Logo`,...M.logo},{type:`faq`,label:`FAQ`,...M.faq},{type:`gallery`,label:`Gallery`,...M.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...M.button},{type:`input`,label:`Input`,...M.input},{type:`search`,label:`Search`,...M.search},{type:`form`,label:`Form`,...M.form},{type:`tabs`,label:`Tabs`,...M.tabs},{type:`dropdown`,label:`Dropdown`,...M.dropdown},{type:`toggle`,label:`Toggle`,...M.toggle},{type:`stepper`,label:`Stepper`,...M.stepper},{type:`rating`,label:`Rating`,...M.rating},{type:`fileUpload`,label:`File Upload`,...M.fileUpload},{type:`checkbox`,label:`Checkbox`,...M.checkbox},{type:`radio`,label:`Radio`,...M.radio},{type:`slider`,label:`Slider`,...M.slider},{type:`datePicker`,label:`Date Picker`,...M.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...M.avatar},{type:`badge`,label:`Badge`,...M.badge},{type:`tag`,label:`Tag`,...M.tag},{type:`breadcrumb`,label:`Breadcrumb`,...M.breadcrumb},{type:`pagination`,label:`Pagination`,...M.pagination},{type:`progress`,label:`Progress`,...M.progress},{type:`alert`,label:`Alert`,...M.alert},{type:`toast`,label:`Toast`,...M.toast},{type:`notification`,label:`Notification`,...M.notification},{type:`tooltip`,label:`Tooltip`,...M.tooltip},{type:`stat`,label:`Stat`,...M.stat},{type:`skeleton`,label:`Skeleton`,...M.skeleton},{type:`chip`,label:`Chip`,...M.chip},{type:`icon`,label:`Icon`,...M.icon},{type:`spinner`,label:`Spinner`,...M.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...M.pricing},{type:`testimonial`,label:`Testimonial`,...M.testimonial},{type:`cta`,label:`CTA`,...M.cta},{type:`productCard`,label:`Product Card`,...M.productCard},{type:`profile`,label:`Profile`,...M.profile},{type:`feature`,label:`Feature`,...M.feature},{type:`team`,label:`Team`,...M.team},{type:`login`,label:`Login`,...M.login},{type:`contact`,label:`Contact`,...M.contact}]}],Ne={};for(let e of Me)for(let t of e.items)Ne[t.type]=t;function N({w:e,h:t=3,strong:n}){return(0,x.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function P({w:e,h:t,radius:n=3,style:r}){return(0,x.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function Pe({size:e}){return(0,x.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function Fe({width:e,height:t}){let n=Math.max(8,t*.2);return(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${n}px`,gap:e*.02},children:[(0,x.jsx)(P,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,x.jsx)(N,{w:e*.06}),(0,x.jsx)(N,{w:e*.07}),(0,x.jsx)(N,{w:e*.05}),(0,x.jsx)(N,{w:e*.06})]}),(0,x.jsx)(P,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Ie({width:e,height:t,text:n}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,x.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,x.jsx)(N,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,x.jsx)(N,{w:e*.6}),(0,x.jsx)(N,{w:e*.4}),(0,x.jsx)(P,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Le({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,x.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,x.jsx)(N,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,x.jsx)(P,{w:10,h:10,radius:2}),(0,x.jsx)(N,{w:e*(.4+n*17%30/100)})]},n))]})}function Re({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,x.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsx)(N,{w:`60%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`80%`,h:2}),(0,x.jsx)(N,{w:`70%`,h:2}),(0,x.jsx)(N,{w:`60%`,h:2})]},t))})}function F({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,x.jsx)(N,{w:e*.3,h:4,strong:!0}),(0,x.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,x.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,x.jsx)(N,{w:`90%`}),(0,x.jsx)(N,{w:`70%`}),(0,x.jsx)(N,{w:`80%`})]}),(0,x.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,x.jsx)(P,{w:70,h:26,radius:4}),(0,x.jsx)(P,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function ze({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,x.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,x.jsx)(N,{w:`70%`,h:4,strong:!0}),(0,x.jsx)(N,{w:`95%`,h:2}),(0,x.jsx)(N,{w:`85%`,h:2}),(0,x.jsx)(N,{w:`50%`,h:2})]})]})}function Be({width:e,height:t,text:n}){if(n)return(0,x.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,x.jsx)(N,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,x.jsx)(N,{w:`${70+t*13%25}%`,h:2},t))]})}function Ve({width:e,height:t}){return(0,x.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,x.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,x.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,x.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function He({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,x.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,x.jsx)(N,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,x.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,x.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,x.jsx)(N,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function Ue({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,x.jsx)(Pe,{size:8}),(0,x.jsx)(N,{w:`${55+t*17%35}%`,h:2})]},t))})}function We({width:e,height:t,text:n}){return(0,x.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,x.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,x.jsx)(N,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Ge({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,x.jsx)(N,{w:Math.min(80,e*.3),h:2}),(0,x.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,x.jsx)(N,{w:`40%`,h:2})})]})}function Ke({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsx)(N,{w:60+t*17%30,h:2}),(0,x.jsx)(P,{w:`100%`,h:28,radius:4})]},t)),(0,x.jsx)(P,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function qe({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,x.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,x.jsx)(N,{w:60,h:3,strong:t===0})},t))}),(0,x.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,x.jsx)(N,{w:`80%`,h:2}),(0,x.jsx)(N,{w:`65%`,h:2}),(0,x.jsx)(N,{w:`75%`,h:2})]})]})}function I({width:e,height:t}){let n=Math.min(e,t)/2;return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,x.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,x.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function Je({width:e,height:t}){return(0,x.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(N,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Ye({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,x.jsx)(N,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,x.jsx)(N,{w:e*.35})]})}function Xe({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,x.jsx)(N,{w:e*.3,h:4,strong:!0}),(0,x.jsx)(N,{w:e*.7}),(0,x.jsx)(N,{w:e*.5}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,x.jsx)(P,{w:`33%`,h:`100%`,radius:4}),(0,x.jsx)(P,{w:`33%`,h:`100%`,radius:4}),(0,x.jsx)(P,{w:`33%`,h:`100%`,radius:4})]})]})}function Ze({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,x.jsx)(P,{w:`100%`,h:`100%`,radius:4},t))})}function Qe({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,x.jsx)(N,{w:e*.5,h:3,strong:!0})}),(0,x.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,x.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,x.jsx)(N,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function $e({width:e,height:t}){let n=Math.min(e,t)/2;return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,x.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function et({width:e,height:t}){let n=Math.min(t/2,20);return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,x.jsx)(Pe,{size:Math.min(14,t*.4)}),(0,x.jsx)(N,{w:`50%`,h:2})]})}function tt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,x.jsx)(Pe,{size:Math.min(20,t*.5)}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:`60%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`80%`,h:2})]}),(0,x.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function nt({width:e,height:t}){return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function rt({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,x.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>{let n=30+(t*37+17)%55;return(0,x.jsx)(P,{w:r,h:`${n}%`,radius:2},t)})})}function it({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,x.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,x.jsx)(P,{w:`100%`,h:`100%`,radius:4}),(0,x.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function L({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,x.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(N,{w:`60%`,h:2})}),(0,x.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function at({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,x.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,x.jsx)(N,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function ot({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,x.jsx)(P,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function st({width:e}){return(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,x.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function R({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,x.jsx)(N,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,x.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function ct({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,x.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,x.jsx)(P,{w:`100%`,h:`100%`,radius:4}),(0,x.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,x.jsx)(Pe,{size:5}),(0,x.jsx)(Pe,{size:5}),(0,x.jsx)(Pe,{size:5})]})]})}function lt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,x.jsx)(N,{w:e*.4,h:3,strong:!0}),(0,x.jsx)(N,{w:e*.3,h:6,strong:!0}),(0,x.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,x.jsx)(Pe,{size:5}),(0,x.jsx)(N,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,x.jsx)(P,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function ut({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,x.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsx)(N,{w:`90%`,h:2}),(0,x.jsx)(N,{w:`75%`,h:2}),(0,x.jsx)(N,{w:`60%`,h:2})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,x.jsx)(Pe,{size:20}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,x.jsx)(N,{w:60,h:3,strong:!0}),(0,x.jsx)(N,{w:40,h:2})]})]})]})}function dt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,x.jsx)(N,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,x.jsx)(N,{w:e*.35}),(0,x.jsx)(P,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function ft({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,x.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,x.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:`40%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`70%`,h:2})]})]})}function pt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,x.jsx)(N,{w:e*.4,h:3,strong:!0}),(0,x.jsx)(P,{w:60,h:Math.min(24,t*.6),radius:4})]})}function mt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,x.jsx)(N,{w:e*.5,h:2}),(0,x.jsx)(N,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,x.jsx)(N,{w:e*.3,h:2})]})}function ht({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,x.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,x.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function gt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,x.jsx)(N,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,x.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function _t({width:e,height:t}){let n=Math.min(t*.7,e/7.5);return(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,x.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function vt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,x.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,x.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,x.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,x.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,x.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,x.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,x.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function yt({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,x.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,x.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,x.jsx)(Pe,{size:8}),t<n-1&&(0,x.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,x.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function bt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,x.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,x.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,x.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,x.jsx)(N,{w:e*.4,h:2}),(0,x.jsx)(N,{w:e*.25,h:2})]})}function xt({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,x.jsx)(Pe,{size:6}),(0,x.jsx)(Pe,{size:6}),(0,x.jsx)(Pe,{size:6})]}),Array.from({length:n},(e,t)=>(0,x.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,x.jsx)(N,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function St({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,x.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,x.jsx)(N,{w:e*.3,h:3,strong:!0}),(0,x.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,x.jsx)(N,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,x.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function Ct({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,x.jsx)(Pe,{size:Math.min(32,t*.55)}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:`50%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`75%`,h:2})]}),(0,x.jsx)(N,{w:30,h:2})]})}function z({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,x.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,x.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,x.jsx)(N,{w:`65%`,h:4,strong:!0}),(0,x.jsx)(N,{w:`40%`,h:3}),(0,x.jsx)(`div`,{style:{flex:1}}),(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,x.jsx)(N,{w:`30%`,h:5,strong:!0}),(0,x.jsx)(P,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function wt({width:e,height:t}){let n=Math.min(48,t*.3);return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,x.jsx)(Pe,{size:n}),(0,x.jsx)(N,{w:e*.45,h:4,strong:!0}),(0,x.jsx)(N,{w:e*.3,h:2}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,x.jsx)(N,{w:20,h:3,strong:!0}),(0,x.jsx)(N,{w:28,h:2})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,x.jsx)(N,{w:20,h:3,strong:!0}),(0,x.jsx)(N,{w:28,h:2})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,x.jsx)(N,{w:20,h:3,strong:!0}),(0,x.jsx)(N,{w:28,h:2})]})]})]})}function Tt({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,x.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,x.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,x.jsx)(N,{w:n*.4,h:4,strong:!0}),(0,x.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,x.jsx)(`div`,{style:{padding:`6px 0`},children:(0,x.jsx)(N,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function Et({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,x.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,x.jsx)(N,{w:`70%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`90%`,h:2}),(0,x.jsx)(N,{w:`60%`,h:2})]}),(0,x.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function Dt({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,x.jsx)(P,{w:n,h:n,radius:n*.25}),(0,x.jsx)(N,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Ot({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,x.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,x.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,x.jsx)(N,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,x.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function kt({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,x.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,x.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,x.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function At({width:e,height:t}){let n=Math.min(e,t);return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,x.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function jt({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,x.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function Mt({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,x.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,x.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,x.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function Nt({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,x.jsx)(N,{w:`40%`,h:2}),(0,x.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,x.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,x.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,x.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,x.jsx)(N,{w:e*.25,h:2,strong:!0}),(0,x.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,x.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,x.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,x.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function Pt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,x.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,x.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,x.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,x.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Ft({width:e,height:t}){return(0,x.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,x.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,x.jsx)(N,{w:`60%`,h:2,strong:!0}),(0,x.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function It({width:e,height:t}){let n=Math.min(e,t);return(0,x.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function Lt({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,x.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,x.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Rt({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,x.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,x.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,x.jsx)(P,{w:n,h:n,radius:n*.25}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,x.jsx)(N,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,x.jsx)(N,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function zt({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,x.jsx)(N,{w:e*.3,h:4,strong:!0}),(0,x.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,x.jsx)(Pe,{size:r}),(0,x.jsx)(N,{w:e*.12,h:3,strong:!0}),(0,x.jsx)(N,{w:e*.08,h:2})]},n))})]})}function Bt({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,x.jsx)(N,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,x.jsx)(N,{w:e*.35,h:2}),(0,x.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:Math.min(60,e*.2),h:2}),(0,x.jsx)(P,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,x.jsx)(P,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,x.jsx)(N,{w:e*.4,h:2})]})}function Vt({width:e,height:t}){return(0,x.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,x.jsx)(N,{w:e*.4,h:4,strong:!0}),(0,x.jsx)(N,{w:e*.6,h:2}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:50,h:2}),(0,x.jsx)(P,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,x.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:40,h:2}),(0,x.jsx)(P,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,x.jsx)(N,{w:50,h:2}),(0,x.jsx)(P,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,x.jsx)(N,{w:60,h:2}),(0,x.jsx)(P,{w:`100%`,h:`100%`,radius:4})]}),(0,x.jsx)(P,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var B={navigation:Fe,hero:Ie,sidebar:Le,footer:Re,modal:F,card:ze,text:Be,image:Ve,table:He,list:Ue,button:We,input:Ge,form:Ke,tabs:qe,avatar:I,badge:Je,header:Ye,section:Xe,grid:Ze,dropdown:Qe,toggle:$e,search:et,toast:tt,progress:nt,chart:rt,video:it,tooltip:L,breadcrumb:at,pagination:ot,divider:st,accordion:R,carousel:ct,pricing:lt,testimonial:ut,cta:dt,alert:ft,banner:pt,stat:mt,stepper:ht,tag:gt,rating:_t,map:vt,timeline:yt,fileUpload:bt,codeBlock:xt,calendar:St,notification:Ct,productCard:z,profile:wt,drawer:Tt,popover:Et,logo:Dt,faq:Ot,gallery:kt,checkbox:At,radio:jt,slider:Mt,datePicker:Nt,skeleton:Pt,chip:Ft,icon:It,spinner:Lt,feature:Rt,team:zt,login:Bt,contact:Vt};function Ht({type:e,width:t,height:n,text:r}){let i=B[e];return i?(0,x.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,x.jsx)(i,{width:t,height:n,text:r})}):(0,x.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,x.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var Ut=`svg[fill=none] {
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
}`,Wt={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=Ut}var V=Wt,Gt=24,Kt=5;function qt(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Kt&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Kt&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Kt?a:0,v=Math.abs(o)<Kt?o:0,y=[],b=new Set,x=s+_,S=c+_,C=l+_,w=u+v,ee=d+v,te=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,C,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[w,te,ee])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Jt(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Yt({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,_]=(0,y.useState)(new Set),[v,b]=(0,y.useState)(null),[S,C]=(0,y.useState)(null),[w,ee]=(0,y.useState)(null),[te,T]=(0,y.useState)([]),[E,ne]=(0,y.useState)(null),[re,ie]=(0,y.useState)(!1),ae=(0,y.useRef)(!1),[oe,D]=(0,y.useState)(new Set),se=(0,y.useRef)(new Map),ce=(0,y.useRef)(null),le=(0,y.useRef)(null),ue=(0,y.useRef)(e);ue.current=e;let O=(0,y.useRef)(u);O.current=u;let de=(0,y.useRef)(f);de.current=f;let fe=(0,y.useRef)(p);fe.current=p;let pe=(0,y.useRef)(d);(0,y.useEffect)(()=>{d!==pe.current&&(pe.current=d,_(new Set))},[d]);let me=(0,y.useRef)(m);(0,y.useEffect)(()=>{if(m!==void 0&&m!==me.current){me.current=m;let e=new Set(ue.current.map(e=>e.id));e.size>0&&(D(e),_(new Set),le.current=null,j(()=>{t([]),D(new Set)},180))}},[m,t]),(0,y.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);D(e),_(new Set),j(()=>{t(ue.current.filter(t=>!e.has(t.id))),D(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&_(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let he=(0,y.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${V.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){le.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);b({x:t,y:n,w:r,h:i}),ee({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),b(null),ee(null),le.current=null,o?.(!1);let m=M[n],h,g,v,y;i?(h=Math.min(s,c),g=Math.min(l,u)+a,v=Math.max(Gt,Math.abs(c-s)),y=Math.max(Gt,Math.abs(u-l))):(v=m.width,y=m.height,h=s-v/2,g=l+a-y/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:Jt(),type:n,x:h,y:g,width:v,height:y,scrollY:a,timestamp:Date.now()};t([...e,x]),_(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||_(new Set),le.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);if((n>4||r>4)&&(t=!0),t){let t=Math.min(s,e.clientX),n=Math.min(l,e.clientY);C({x:t,y:n,w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})}},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),le.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);_(u)}C(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),ge=(0,y.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${V.handle}`)||i.closest(`.${V.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),_(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&O.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});le.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,v=new Map;for(let t of e)u.has(t.id)&&v.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Jt(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,_=-1/0;for(let[e,t]of u){let n=v.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),_=Math.max(_,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=qt({x:a,y:o,width:g-a,height:_-o},p,new Set(u.keys()),void 0,l);T(x);let S=r+y,C=i+b;m=S,h=C,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+C)}:e})),de.current?.(S,C)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),le.current=null,o?.(!1),T([]),fe.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),k=(0,y.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;_(new Set([r])),le.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Gt,u+n)),i.includes(`w`)&&(o=Math.max(Gt,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Gt,d+a)),i.includes(`n`)&&(h=Math.max(Gt,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=qt({x:g,y:_,width:o,height:h},ue.current,new Set([r]),m,l);T(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(ue.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),ee({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),ee(null),le.current=null,o?.(!1),T([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),_e=(0,y.useCallback)(e=>{le.current=null,D(t=>{let n=new Set(t);return n.add(e),n}),_(t=>{let n=new Set(t);return n.delete(e),n}),j(()=>{t(ue.current.filter(t=>t.id!==e)),D(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),ve={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},ye=(0,y.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(ae.current=!!n.text,ne(t),ie(!1))},[e]),A=(0,y.useCallback)(()=>{E&&(ie(!0),j(()=>{ne(null),ie(!1)},150))},[E]);(0,y.useEffect)(()=>{a&&E&&A()},[a]);let be=(0,y.useCallback)(n=>{E&&(t(e.map(e=>e.id===E?{...e,text:n.trim()||void 0}:e)),A())},[E,e,t,A]),xe=typeof window<`u`?window.scrollY:0,Se=[`nw`,`ne`,`se`,`sw`],Ce=h?`#f97316`:`#3c82f7`,we=[{dir:`n`,cls:V.edgeN,arrow:(0,x.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:Ce})})},{dir:`e`,cls:V.edgeE,arrow:(0,x.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:Ce})})},{dir:`s`,cls:V.edgeS,arrow:(0,x.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:Ce})})},{dir:`w`,cls:V.edgeW,arrow:(0,x.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:Ce})})}];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{ref:ce,className:`${V.overlay} ${i?``:V.light} ${n?V.placing:``} ${c?V.passthrough:``} ${a?V.overlayExiting:``} ${h?V.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:he,children:e.map(e=>{let t=g.has(e.id),n=Ne[e.type]?.label||e.type,r=e.y-xe;return(0,x.jsxs)(`div`,{"data-design-placement":e.id,className:`${V.placement} ${t?V.selected:``} ${oe.has(e.id)?V.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>ge(t,e.id),onDoubleClick:()=>ye(e.id),children:[(0,x.jsx)(`span`,{className:V.placementLabel,children:n}),(0,x.jsx)(`span`,{className:`${V.placementAnnotation} ${e.text?V.annotationVisible:``}`,children:(e.text&&se.current.set(e.id,e.text),e.text||se.current.get(e.id)||``)}),(0,x.jsx)(`div`,{className:V.placementContent,children:(0,x.jsx)(Ht,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,x.jsx)(`div`,{className:V.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>_e(e.id),children:`✕`}),Se.map(t=>(0,x.jsx)(`div`,{className:`${V.handle} ${V[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>k(n,e.id,t)},t)),we.map(({dir:t,cls:n,arrow:r})=>(0,x.jsx)(`div`,{className:`${V.edgeHandle} ${n}`,onMouseDown:n=>k(n,e.id,t),children:r},t))]},e.id)})}),E&&(()=>{let t=e.find(e=>e.id===E);if(!t)return null;let n=t.y-xe,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,x.jsx)(Ee,{element:Ne[t.type]?.label||t.type,placeholder:ve[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:ae.current?`Save`:`Set`,onSubmit:be,onCancel:A,onDelete:ae.current?()=>{be(``)}:void 0,isExiting:re,lightMode:!i,style:u})})(),v&&(0,x.jsx)(`div`,{className:V.drawBox,style:{left:v.x,top:v.y,width:v.w,height:v.h},"data-feedback-toolbar":!0}),S&&(0,x.jsx)(`div`,{className:V.selectBox,style:{left:S.x,top:S.y,width:S.w,height:S.h},"data-feedback-toolbar":!0}),w&&(0,x.jsx)(`div`,{className:V.sizeIndicator,style:{left:w.x,top:w.y},"data-feedback-toolbar":!0,children:w.text}),te.map((e,t)=>(0,x.jsx)(`div`,{className:V.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-xe,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function Xt(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?V.fadeTop:``} ${n?V.fadeBottom:``}`}var H=`currentColor`,U=`0.5`;function Zt({type:e}){switch(e){case`navigation`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:H,opacity:`.4`}),(0,x.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`})]});case`header`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:H,opacity:`.35`}),(0,x.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`hero`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:H,opacity:`.35`}),(0,x.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:H,strokeWidth:U})]});case`section`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`sidebar`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`footer`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:H,opacity:`.2`})]});case`modal`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:H,strokeWidth:U})]});case`divider`:return(0,x.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,x.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:H,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:H,opacity:`.04`}),(0,x.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`text`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`image`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:H,strokeWidth:`.3`,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:H,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:H,strokeWidth:U,fill:H,opacity:`.15`})]});case`table`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:H,strokeWidth:`.3`,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:H,strokeWidth:`.3`,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:H,strokeWidth:`.3`,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:H,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:H,strokeWidth:U})]});case`list`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:H,opacity:`.2`})]});case`chart`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:H,opacity:`.2`})]});case`accordion`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:H,strokeWidth:U})]});case`carousel`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:H,strokeWidth:U,opacity:`.35`}),(0,x.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:H,strokeWidth:U,opacity:`.35`}),(0,x.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:H,opacity:`.35`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:H,opacity:`.15`}),(0,x.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:H,opacity:`.15`})]});case`button`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.25`})]});case`input`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`search`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`form`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:H,strokeWidth:U})]});case`tabs`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:H,strokeWidth:U})]});case`dropdown`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:H,strokeWidth:U,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:H,opacity:`.3`})]});case`avatar`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:H,strokeWidth:U})]});case`badge`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.25`})]});case`breadcrumb`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:H,strokeWidth:U,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:H,strokeWidth:U,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`pagination`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:H,opacity:`.15`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:H,strokeWidth:U})]});case`progress`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:H,opacity:`.2`})]});case`toast`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`tooltip`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:H,strokeWidth:U})]});case`pricing`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.1`}),(0,x.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.1`}),(0,x.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:H,opacity:`.2`})]});case`testimonial`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:H,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,x.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:H,opacity:`.12`}),(0,x.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:H,strokeWidth:U,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`cta`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:H,strokeWidth:U})]});case`alert`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:H,strokeWidth:`0.6`,opacity:`.5`}),(0,x.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:H,opacity:`.5`}),(0,x.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.2`})]});case`banner`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:H,strokeWidth:U})]});case`stat`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`stepper`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:H,opacity:`.2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:H,strokeWidth:`.4`,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:H,strokeWidth:`.4`,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:H,strokeWidth:U})]});case`tag`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:H,strokeWidth:U,opacity:`.2`}),(0,x.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:H,strokeWidth:U,opacity:`.2`})]});case`rating`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:H,opacity:`.25`}),(0,x.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:H,opacity:`.25`}),(0,x.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:H,strokeWidth:U,opacity:`.25`})]});case`map`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:H,strokeWidth:`.3`,opacity:`.15`}),(0,x.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:H,strokeWidth:`.3`,opacity:`.15`}),(0,x.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:H,opacity:`.15`,stroke:H,strokeWidth:U})]});case`timeline`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:H,strokeWidth:`.4`,opacity:`.25`}),(0,x.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:H,opacity:`.2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`fileUpload`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:H,strokeWidth:U,strokeDasharray:`2 1`}),(0,x.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.15`})]});case`codeBlock`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:H,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:H,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:H,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`calendar`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:H,strokeWidth:`.4`,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:H,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:H,opacity:`.2`})]});case`notification`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:H,strokeWidth:U,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:H,opacity:`.12`}),(0,x.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:H,opacity:`.25`})]});case`productCard`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:H,opacity:`.04`}),(0,x.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:H,strokeWidth:U})]});case`profile`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`drawer`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:H,strokeWidth:U,opacity:`.15`})]});case`popover`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:H,strokeWidth:U})]});case`logo`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:H,strokeWidth:U,opacity:`.3`}),(0,x.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`faq`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:H,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,x.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:H,opacity:`.12`}),(0,x.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:H,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,x.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`gallery`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:H,strokeWidth:U})]});case`checkbox`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:H,strokeWidth:U,opacity:`.35`})]});case`radio`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:H,strokeWidth:U}),(0,x.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:H,opacity:`.3`})]});case`slider`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:H,strokeWidth:U})]});case`datePicker`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:H,opacity:`.12`}),(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:H,strokeWidth:U,strokeDasharray:`2 1`,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:H,opacity:`.3`}),(0,x.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:H,opacity:`.2`})]});case`skeleton`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:H,opacity:`.08`}),(0,x.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:H,opacity:`.08`}),(0,x.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:H,opacity:`.08`})]});case`chip`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:H,opacity:`.08`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:H,strokeWidth:U,opacity:`.2`}),(0,x.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:H,strokeWidth:U,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:H,strokeWidth:U,opacity:`.25`})]});case`icon`:return(0,x.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,x.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:H,strokeWidth:U,opacity:`.3`})});case`spinner`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:H,strokeWidth:U,opacity:`.12`}),(0,x.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:H,strokeWidth:U,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:H,strokeWidth:U,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:H,opacity:`.12`}),(0,x.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.12`})]});case`team`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:H,strokeWidth:U,opacity:`.5`}),(0,x.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.15`}),(0,x.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:H,opacity:`.1`})]});case`login`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:H,opacity:`.25`}),(0,x.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:H,opacity:`.2`})]});case`contact`:return(0,x.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:H,opacity:`.2`}),(0,x.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:H,strokeWidth:U}),(0,x.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:H,opacity:`.2`})]});default:return null}}function Qt({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,x.jsx)(`div`,{ref:r,className:`${V.placeScroll} ${i||``}`,children:Me.map(r=>(0,x.jsxs)(`div`,{className:V.paletteSection,children:[(0,x.jsx)(`div`,{className:V.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,x.jsxs)(`div`,{className:`${V.paletteItem} ${e===r.type?V.active:``} ${a?V.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,x.jsx)(`div`,{className:V.paletteItemIcon,children:(0,x.jsx)(Zt,{type:r.type})}),(0,x.jsx)(`span`,{className:V.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function $t({value:e,suffix:t}){let[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)(t),[o,s]=(0,y.useState)(`up`),c=(0,y.useRef)(e),l=(0,y.useRef)(t),u=(0,y.useRef)(),d=n!==null&&i!==t;return(0,y.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=j(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,x.jsxs)(x.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,x.jsxs)(`span`,{className:V.rollingWrap,children:[(0,x.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,x.jsxs)(`span`,{className:`${V.rollingNum} ${o===`up`?V.exitUp:V.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,x.jsxs)(`span`,{className:`${V.rollingNum} ${o===`up`?V.enterUp:V.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`span`,{className:V.rollingWrap,children:[(0,x.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,x.jsx)(`span`,{className:`${V.rollingNum} ${o===`up`?V.exitUp:V.exitDown}`,children:n},`o${n}-${e}`),(0,x.jsx)(`span`,{className:`${V.rollingNum} ${o===`up`?V.enterUp:V.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function en({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,y.useState)(!1),[_,v]=(0,y.useState)(`exit`),[b,S]=(0,y.useState)(!1),[C,w]=(0,y.useState)(!0),ee=(0,y.useRef)(0),te=(0,y.useRef)(``),T=(0,y.useRef)(0),E=(0,y.useRef)(),ne=(0,y.useRef)(null),[re,ie]=(0,y.useState)(``);(0,y.useEffect)(()=>(a?(g(!0),clearTimeout(E.current),cancelAnimationFrame(T.current),T.current=xe(()=>{T.current=xe(()=>{v(`enter`)})})):(cancelAnimationFrame(T.current),v(`exit`),clearTimeout(E.current),E.current=j(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(T.current)),[a]);let ae=s>0||r>0,oe=s+r;if(oe>0&&(ee.current=oe,te.current=u?oe===1?`Component`:`Components`:oe===1?`Change`:`Changes`),(0,y.useEffect)(()=>{if(ae)b?w(!1):(w(!0),S(!0),xe(()=>{xe(()=>{w(!1)})}));else{w(!0);let e=j(()=>S(!1),300);return()=>clearTimeout(e)}},[ae]),(0,y.useEffect)(()=>{if(!h)return;let e=ne.current;if(!e)return;let t=()=>ie(Xt(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let D=[];return s>0&&D.push(`placed`),r>0&&D.push(`captured`),(0,x.jsxs)(`div`,{className:`${V.palette} ${V[_]} ${n?``:V.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(E.current),g(!1),v(`exit`),o?.()))},children:[(0,x.jsxs)(`div`,{className:V.paletteHeader,children:[(0,x.jsx)(`div`,{className:V.paletteHeaderTitle,children:`Layout Mode`}),(0,x.jsxs)(`div`,{className:V.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,x.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,x.jsxs)(`div`,{className:`${V.canvasToggle} ${u?V.active:``}`,onClick:()=>d(!u),children:[(0,x.jsx)(`span`,{className:V.canvasToggleIcon,children:(0,x.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,x.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,x.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,x.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,x.jsx)(`span`,{className:V.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,x.jsx)(`div`,{className:`${V.wireframePurposeWrap} ${u?``:V.collapsed}`,children:(0,x.jsx)(`div`,{className:V.wireframePurposeInner,children:(0,x.jsx)(`textarea`,{className:V.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,x.jsx)(Qt,{activeType:e,onSelect:t,onDragStart:l,scrollRef:ne,fadeClass:re,blankCanvas:u}),b&&(0,x.jsx)(`div`,{className:`${V.paletteFooterWrap} ${C?V.footerHidden:``}`,children:(0,x.jsx)(`div`,{className:V.paletteFooterInner,children:(0,x.jsx)(`div`,{className:V.paletteFooterInnerContent,children:(0,x.jsxs)(`div`,{className:V.paletteFooter,children:[(0,x.jsx)(`span`,{className:V.paletteFooterCount,children:(0,x.jsx)($t,{value:ee.current,suffix:te.current})}),(0,x.jsx)(`button`,{className:V.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function tn(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function nn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=tn(n)}return null}function rn(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=tn(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function an(e){let t=rn(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=nn(e,`svg`);if(n){let e=tn(n);if(e instanceof HTMLElement)return{name:`graphic in ${an(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=tn(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function on(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function sn(e){let t=tn(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function cn(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var ln=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),un=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),dn=new Set([`input`,`textarea`,`select`]),fn=new Set([`img`,`video`,`canvas`,`svg`]),W=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function pn(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=un.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||dn.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:fn.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:W.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!ln.has(i)&&(n[e]=i)}return n}var mn=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function hn(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of mn){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!ln.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function gn(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function _n(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function vn(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=tn(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var yn=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),bn={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},xn={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},Sn=new Set([`script`,`style`,`noscript`,`link`,`meta`]),Cn=40;function G(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function wn(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:wn(n)} > ${t}:nth-child(${r})`}return t}function Tn(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&bn[r])return bn[r];if(xn[t])return xn[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=an(e);return a.charAt(0).toUpperCase()+a.slice(1)}function En(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function Dn(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function On(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(Sn.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<Cn)return;let o=yn.has(n),s=e.getAttribute(`role`)&&bn[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=G(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Tn(e),tagName:n,selector:wn(e),role:e.getAttribute(`role`),className:En(e),textSnippet:Dn(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function K(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=G(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Tn(e),tagName:e.tagName.toLowerCase(),selector:wn(e),role:e.getAttribute(`role`),className:En(e),textSnippet:Dn(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var kn={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},An=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],jn=24,Mn=16,Nn=5;function Pn(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<Nn&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<Nn&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<Nn?i:0,m=Math.abs(a)<Nn?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var Fn=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function In(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(Fn.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=Mn&&e.height>=Mn)return t;t=t.parentElement}return null}function Ln({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,y.useRef)(e);p.current=e;let[m,h]=(0,y.useState)(new Set),[g,_]=(0,y.useState)(!1),v=(0,y.useRef)(d);(0,y.useEffect)(()=>{d!==void 0&&d!==v.current&&(v.current=d,f.length>0&&_(!0))},[d,f.length]);let b=(0,y.useRef)(c);(0,y.useEffect)(()=>{c!==b.current&&(b.current=c,h(new Set))},[c]);let[S,C]=(0,y.useState)(null),[w,ee]=(0,y.useState)(!1),te=(0,y.useRef)(!1),T=(0,y.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(te.current=!!t.note,C(e),ee(!1))},[f]),E=(0,y.useCallback)(()=>{S&&(ee(!0),j(()=>{C(null),ee(!1)},150))},[S]),ne=(0,y.useCallback)(n=>{S&&(t({...e,sections:f.map(e=>e.id===S?{...e,note:n.trim()||void 0}:e)}),E())},[S,f,e,t,E]);(0,y.useEffect)(()=>{r&&S&&E()},[r]);let[re,ie]=(0,y.useState)(new Set),ae=(0,y.useRef)(new Map),[oe,D]=(0,y.useState)(null),[se,ce]=(0,y.useState)(null),[le,ue]=(0,y.useState)([]),[O,de]=(0,y.useState)(0),fe=(0,y.useRef)(null),pe=(0,y.useRef)(new Set),me=(0,y.useRef)(new Map),[he,ge]=(0,y.useState)(new Map),[k,_e]=(0,y.useState)(new Map),ve=(0,y.useRef)(new Set),ye=(0,y.useRef)(new Map),A=(0,y.useRef)(s);A.current=s;let be=(0,y.useRef)(l);be.current=l;let xe=(0,y.useRef)(u);xe.current=u,(0,y.useEffect)(()=>{a&&h(new Set)},[a]);let[Se,Ce]=(0,y.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,y.useEffect)(()=>{if(!Se){let e=j(()=>Ce(!0),380);return()=>clearTimeout(e)}},[]);let we=(0,y.useRef)(new Set);(0,y.useEffect)(()=>{we.current=new Set(f.map(e=>e.selector))},[f]),(0,y.useEffect)(()=>{let e=()=>de(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,y.useEffect)(()=>{let e=e=>{if(fe.current){D(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){D(null);return}if(t.closest(`[data-feedback-toolbar]`)){D(null);return}if(t.closest(`[data-design-placement]`)){D(null);return}if(t.closest(`[data-annotation-popup]`)){D(null);return}let n=In(t);if(!n){D(null);return}for(let e of we.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){D(null);return}}catch{}let r=n.getBoundingClientRect();D({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,y.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,y.useEffect)(()=>{let n=n=>{if(fe.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=In(r),a=!1;if(i)for(let e of we.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=K(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),A.current?.(l,s),D(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;fe.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=Pn({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);ue(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),ge(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),be.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),fe.current=null,ue([]),ge(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),xe.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),A.current?.(t,s);return}}catch{}s||(h(new Set),A.current?.(new Set,!1))}else s||(h(new Set),A.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,y.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);ie(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),j(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),ie(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let Te=(0,y.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${V.handle}`)||i.closest(`.${V.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&A.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});fe.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=Pn({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,ue(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}ge(b),be.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),fe.current=null,ue([]),ge(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),xe.current?.(d,p,!0);return}}xe.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),De=(0,y.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),fe.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(jn,c.width+t)),i.includes(`w`)&&(p=Math.max(jn,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(jn,c.height+n)),i.includes(`n`)&&(m=Math.max(jn,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-O}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),ce({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),ge(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),ce(null),fe.current=null,ge(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,O]),Oe=(0,y.useCallback)(e=>{ie(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),j(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),ie(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),ke=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},Ae=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},je=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)me.current.has(e.id)||(Ae(e)?me.current.set(e.id,`move`):je(e)&&me.current.set(e.id,`resize`));for(let e of me.current.keys())f.some(t=>t.id===e)||me.current.delete(e);let M=f.filter(e=>{try{if(re.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),Me=M.filter(e=>ke(e)),Ne=M.filter(e=>!ke(e)),N=new Set(Me.map(e=>e.id));for(let e of pe.current)N.has(e)||pe.current.delete(e);let P=[...N].sort().join(`,`);for(let e of Me)ye.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,y.useEffect)(()=>{let e=ve.current;ve.current=N;let t=new Map;for(let n of e)if(!N.has(n)){if(!f.some(e=>e.id===n))continue;let e=ye.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),ye.current.delete(n))}if(t.size>0){_e(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=j(()=>{_e(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[P,f]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`${V.rearrangeOverlay} ${n?``:V.light} ${r?V.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[oe&&(0,x.jsx)(`div`,{className:V.hoverHighlight,style:{left:oe.x,top:oe.y,width:oe.w,height:oe.h}}),Ne.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-O,i=kn,a=m.has(e.id);return(0,x.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${V.sectionOutline} ${a?V.selected:``} ${g||r||re.has(e.id)?V.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...Se?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>Te(t,e.id),onDoubleClick:()=>T(e.id),children:[(0,x.jsx)(`span`,{className:V.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,x.jsx)(`span`,{className:`${V.sectionAnnotation} ${e.note?V.annotationVisible:``}`,children:(e.note&&ae.current.set(e.id,e.note),e.note||ae.current.get(e.id)||``)}),(0,x.jsxs)(`span`,{className:V.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,x.jsx)(`div`,{className:V.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Oe(e.id),children:`✕`}),An.map(t=>(0,x.jsx)(`div`,{className:`${V.handle} ${V[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>De(n,e.id,t)},t))]},e.id)}),Me.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-O,i=m.has(e.id),o=Ae(e),s=je(e);if(a&&!i)return null;let c=!pe.current.has(e.id);return c&&pe.current.add(e.id),(0,x.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${V.ghostOutline} ${i?V.selected:``} ${g||r||re.has(e.id)?V.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...Se?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>Te(t,e.id),onDoubleClick:()=>T(e.id),children:[(0,x.jsx)(`span`,{className:V.sectionLabel,style:{backgroundColor:kn.pill},children:e.label}),(0,x.jsx)(`span`,{className:`${V.sectionAnnotation} ${e.note?V.annotationVisible:``}`,children:(e.note&&ae.current.set(e.id,e.note),e.note||ae.current.get(e.id)||``)}),(0,x.jsxs)(`span`,{className:V.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,x.jsx)(`div`,{className:V.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>Oe(e.id),children:`✕`}),An.map(t=>(0,x.jsx)(`div`,{className:`${V.handle} ${V[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>De(n,e.id,t)},t)),(0,x.jsx)(`span`,{className:V.ghostBadge,children:(()=>{let t=me.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,x.jsxs)(x.Fragment,{children:[`Suggested `,e,` `,(0,x.jsxs)(`span`,{className:V.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of Me){let n=he.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:re.has(t.id)})}for(let[t,n]of he)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of k)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,x.jsxs)(`svg`,{className:`${V.connectorSvg} ${g||r?V.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-O)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-O)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=he.has(e),b=y||i?1:.4,S=y||i?1:.5;return(0,x.jsxs)(`g`,{className:a?V.connectorExiting:``,children:[(0,x.jsx)(`path`,{className:V.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,x.jsx)(`circle`,{className:V.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:S*p,filter:`url(#connDotShadow)`}),(0,x.jsx)(`circle`,{className:V.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:S*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,x.jsx)(`defs`,{children:(0,x.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,x.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),S&&(()=>{let e=f.find(e=>e.id===S);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-O,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,x.jsx)(Ee,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:te.current?`Save`:`Set`,onSubmit:ne,onCancel:E,onDelete:te.current?()=>{ne(``)}:void 0,isExiting:w,lightMode:!n,style:u})})(),se&&(0,x.jsx)(`div`,{className:V.sizeIndicator,style:{left:se.x,top:se.y},"data-feedback-toolbar":!0,children:se.text}),le.map((e,t)=>(0,x.jsx)(`div`,{className:V.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-O,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var Rn=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function zn(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||Rn.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:Tn(e),selector:wn(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||Rn.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:Tn(n),selector:wn(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Bn(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function Vn(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function Hn(e,t){let n=t?Bn(t):zn(),r=Vn(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Wn(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Un(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Un(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Wn(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Gn(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function Kn(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Gn(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function qn(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Gn(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var Jn=15;function Yn(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<Jn&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<Jn&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function Xn(e){if(e.length<2)return[];let t=Yn(e.map(e=>({label:e.label,rect:e.originalRect}))),n=Yn(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function Zn(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||Rn.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:wn(t)}}}return{viewport:e,contentArea:null}}function Qn(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:wn(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function $n(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function er(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
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
`,r}function tr(e){let t=Qn(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function nr(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=Ne[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=Zn(t);a+=er(o),a+=`### Components
`,i.forEach((e,t)=>{let n=Ne[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=Kn(Hn(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=$n(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>Ne[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=Ne[t.type]?.label||t.type,o=Ne[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=Ne[n.type]?.label||n.type,s=Ne[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=Ne[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
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
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function rr(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=Zn({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=er(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){a+=n&&r?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(a+=n&&r?`- Suggested: move and resize **${e.label}**
`:n?`- Suggested: move **${e.label}**
`:`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=Hn(i,s(`original`)),n=Hn(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${qn(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=Kn(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=$n(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=tr(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=Xn(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var ir=`feedback-annotations-`,q=7;function ar(e){return`${ir}${e}`}function or(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(ar(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-q*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function sr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(ar(e),JSON.stringify(t))}catch{}}function cr(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-q*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(ir)){let n=r.slice(ir.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function lr(e,t,n){sr(e,t.map(e=>({...e,_syncedTo:n})))}var ur=`agentation-design-`;function dr(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${ur}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function fr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${ur}${e}`,JSON.stringify(t))}catch{}}function pr(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${ur}${e}`)}catch{}}var mr=`agentation-rearrange-`;function hr(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${mr}${e}`);return t?JSON.parse(t):null}catch{return null}}function gr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${mr}${e}`,JSON.stringify(t))}catch{}}function _r(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${mr}${e}`)}catch{}}var vr=`agentation-wireframe-`;function yr(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${vr}${e}`);return t?JSON.parse(t):null}catch{return null}}function br(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${vr}${e}`,JSON.stringify(t))}catch{}}function xr(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${vr}${e}`)}catch{}}var Sr=`agentation-session-`;function Cr(e){return`${Sr}${e}`}function wr(e){if(typeof window>`u`)return null;try{return localStorage.getItem(Cr(e))}catch{return null}}function Tr(e,t){if(!(typeof window>`u`))try{localStorage.setItem(Cr(e),t)}catch{}}function Er(e){if(!(typeof window>`u`))try{localStorage.removeItem(Cr(e))}catch{}}var Dr=`${Sr}toolbar-hidden`;function Or(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(Dr)===`1`}catch{return!1}}function kr(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(Dr,`1`):sessionStorage.removeItem(Dr)}catch{}}async function Ar(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function jr(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function Mr(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function Nr(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function Pr(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var J={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Fr=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),Ir=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Lr=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Rr(e){let t=e?.mode??`filtered`,n=Fr;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Fr,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Ir,...e.skipPatterns]:Ir,userPatterns:e?.userPatterns??Lr,filter:e?.filter}}function zr(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function Br(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Vr(e,t){let n=zr(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Hr(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Vr(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Ur=null,Wr=new WeakMap;function Gr(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function Kr(){if(Ur!==null)return Ur;if(typeof document>`u`)return!1;if(document.body&&Gr(document.body))return Ur=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&Gr(t))return Ur=!0,!0}if(document.body){for(let e of document.body.children)if(Gr(e))return Ur=!0,!0}return Ur=!1,!1}var qr={map:Wr};function Jr(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function Yr(e){let t=Jr(e);return t?e[t]:null}function Xr(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function Zr(e){let{tag:t,type:n,elementType:r}=e;if(t===J.HostComponent||t===J.HostText||t===J.HostHoistable||t===J.HostSingleton||t===J.Fragment||t===J.Mode||t===J.Profiler||t===J.DehydratedFragment||t===J.HostRoot||t===J.HostPortal||t===J.ScopeComponent||t===J.OffscreenComponent||t===J.LegacyHiddenComponent||t===J.CacheComponent||t===J.TracingMarkerComponent||t===J.Throw||t===J.ViewTransitionComponent||t===J.ActivityComponent)return null;if(t===J.ForwardRef){let e=r;if(e?.render){let t=Xr(e.render);if(t)return t}return e?.displayName?e.displayName:Xr(n)}if(t===J.MemoComponent||t===J.SimpleMemoComponent){let e=r;if(e?.type){let t=Xr(e.type);if(t)return t}return e?.displayName?e.displayName:Xr(n)}if(t===J.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===J.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===J.LazyComponent){let e=r;return e?._status===1&&e._result?Xr(e._result):null}return t===J.SuspenseComponent||t===J.SuspenseListComponent?null:t===J.IncompleteClassComponent||t===J.IncompleteFunctionComponent||t===J.FunctionComponent||t===J.ClassComponent||t===J.IndeterminateComponent?Xr(n):null}function Qr(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function $r(e,t){let n=Rr(t),r=n.mode===`all`;if(r){let t=qr.map.get(e);if(t!==void 0)return t}if(!Kr()){let t={path:null,components:[]};return r&&qr.map.set(e,t),t}let i=n.mode===`smart`?Br(e):void 0,a=[];try{let t=Yr(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=Zr(t);e&&!Qr(e)&&Hr(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&qr.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&qr.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&qr.map.set(e,o),o}var Y={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function ei(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function ti(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function ni(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:ti(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:ti(n._debugOwner)};n=n.return,r++}return null}function ri(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:ti(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:ti(t)}}}t=t.return,n++}return null}var ii=new Map;function ai(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===Y.FunctionComponent||t===Y.IndeterminateComponent)&&typeof n==`function`)return n;if(t===Y.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===Y.MemoComponent||t===Y.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function oi(){let e=y.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function si(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function ci(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function li(e){let t=ai(e);if(!t)return null;if(ii.has(t))return ii.get(t);let n=oi();if(!n)return ii.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=si(t.stack);n&&(i={fileName:ci(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:ti(e)||void 0})}}}finally{n.set(r)}return ii.set(t,i),i}function ui(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=li(n);if(e)return e;n=n.return,r++}return null}function di(e){let t=ei(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=ni(t);if(n||(n=ri(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=ui(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function fi(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function pi(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=di(n);if(e.found)return e;n=n.parentElement,r++}return di(e)}var mi=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,hi={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=mi}var X=hi,gi=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function _i(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var vi=`@keyframes styles-module__markerIn___x4G8D {
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
}`,yi={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=vi}var bi=yi;function xi({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,b=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,S=i?bi.exit:a?bi.clearing:o?``:bi.enter,C=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,x.jsxs)(`div`,{className:`${bi.marker} ${y?bi.multiSelect:``} ${S} ${v?bi.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:b,animationDelay:C},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,x.jsx)(le,{size:y?18:16}):(0,x.jsx)(fe,{size:16}):(0,x.jsx)(`span`,{className:u!==null&&t>=u?bi.renumber:void 0,children:t+1}),s&&!l&&(0,x.jsxs)(`div`,{className:`${bi.markerTooltip} ${bi.enter}`,style:f,children:[(0,x.jsxs)(`span`,{className:bi.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,x.jsx)(`span`,{className:bi.markerNote,children:e.comment})]})]})}function Si({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,x.jsx)(`div`,{className:`${bi.marker} ${bi.pending} ${n?bi.multiSelect:``} ${r?bi.exit:bi.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,x.jsx)(E,{size:12})})}function Ci({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,x.jsx)(`div`,{className:`${bi.marker} ${t?bi.fixed:``} ${bi.hovered} ${n?bi.multiSelect:``} ${bi.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,x.jsx)(le,{size:n?12:10})})}var wi=`.styles-module__switchContainer___Ka-AB {
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
}`,Ti={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=wi}var Ei=Ti,Di=({className:e=``,...t})=>(0,x.jsxs)(`div`,{className:`${Ei.switchContainer} ${e}`,children:[(0,x.jsx)(`input`,{className:Ei.switchInput,type:`checkbox`,...t}),(0,x.jsx)(`div`,{className:Ei.switchThumb})]}),Oi=`.styles-module__checkboxContainer___joqZk {
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
}`,ki={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=Oi}var Ai=ki,ji=({className:e=``,...t})=>(0,x.jsxs)(`div`,{className:`${Ai.checkboxContainer} ${e}`,children:[(0,x.jsx)(`input`,{className:Ai.checkboxInput,type:`checkbox`,...t}),(0,x.jsx)(`svg`,{className:Ai.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,x.jsx)(`path`,{className:Ai.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),Mi=`.styles-module__container___w8eAF {
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
}`,Ni={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=Mi}var Pi=Ni,Fi=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,y.useId)();return(0,x.jsxs)(`div`,{className:`${Pi.container} ${e}`,...a,children:[(0,x.jsx)(ji,{id:o,onChange:i,checked:r}),(0,x.jsx)(`label`,{className:Pi.label,htmlFor:o,children:t}),n&&(0,x.jsx)(je,{content:n})]})},Ii=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,Li={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=Ii}var Z=Li;function Ri({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,x.jsx)(`div`,{className:`${Z.settingsPanel} ${s?Z.enter:Z.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,x.jsxs)(`div`,{className:Z.settingsPanelContainer,children:[(0,x.jsxs)(`div`,{className:`${Z.settingsPage} ${l===`automations`?Z.slideLeft:``}`,children:[(0,x.jsxs)(`div`,{className:Z.settingsHeader,children:[(0,x.jsx)(`a`,{className:Z.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,x.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,x.jsxs)(`p`,{className:Z.settingsVersion,children:[`v`,`3.0.2`]}),(0,x.jsx)(`button`,{className:Z.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,x.jsx)(`span`,{className:Z.themeIconWrapper,children:(0,x.jsx)(`span`,{className:Z.themeIcon,children:n?(0,x.jsx)(O,{size:20}):(0,x.jsx)(de,{size:20})},n?`sun`:`moon`)})})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`div`,{className:Z.settingsSection,children:[(0,x.jsxs)(`div`,{className:Z.settingsRow,children:[(0,x.jsxs)(`div`,{className:Z.settingsLabel,children:[`Output Detail`,(0,x.jsx)(je,{content:`Controls how much detail is included in the copied output`})]}),(0,x.jsxs)(`button`,{className:Z.cycleButton,onClick:()=>{t({outputDetail:gi[(gi.findIndex(t=>t.value===e.outputDetail)+1)%gi.length].value})},children:[(0,x.jsx)(`span`,{className:Z.cycleButtonText,children:gi.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,x.jsx)(`span`,{className:Z.cycleDots,children:gi.map(t=>(0,x.jsx)(`span`,{className:`${Z.cycleDot} ${e.outputDetail===t.value?Z.active:``}`},t.value))})]})]}),(0,x.jsxs)(`div`,{className:`${Z.settingsRow} ${Z.settingsRowMarginTop} ${i?``:Z.settingsRowDisabled}`,children:[(0,x.jsxs)(`div`,{className:Z.settingsLabel,children:[`React Components`,(0,x.jsx)(je,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,x.jsx)(Di,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,x.jsxs)(`div`,{className:`${Z.settingsRow} ${Z.settingsRowMarginTop}`,children:[(0,x.jsxs)(`div`,{className:Z.settingsLabel,children:[`Hide Until Restart`,(0,x.jsx)(je,{content:`Hides the toolbar until you open a new tab`})]}),(0,x.jsx)(Di,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`div`,{className:Z.settingsSection,children:[(0,x.jsx)(`div`,{className:`${Z.settingsLabel} ${Z.settingsLabelMarker}`,children:`Marker Color`}),(0,x.jsx)(`div`,{className:Z.colorOptions,children:Ui.map(n=>(0,x.jsx)(`button`,{className:`${Z.colorOption} ${e.annotationColorId===n.id?Z.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`div`,{className:Z.settingsSection,children:[(0,x.jsx)(Fi,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,x.jsx)(Fi,{className:Z.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`button`,{className:Z.settingsNavLink,onClick:()=>u(`automations`),children:[(0,x.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,x.jsxs)(`span`,{className:Z.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,x.jsx)(`span`,{className:`${Z.mcpNavIndicator} ${Z[a]}`}),(0,x.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,x.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,x.jsxs)(`div`,{className:`${Z.settingsPage} ${Z.automationsPage} ${l===`automations`?Z.slideIn:``}`,children:[(0,x.jsxs)(`button`,{className:Z.settingsBackButton,onClick:()=>u(`main`),children:[(0,x.jsx)(me,{size:16}),(0,x.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`div`,{className:Z.settingsSection,children:[(0,x.jsxs)(`div`,{className:Z.settingsRow,children:[(0,x.jsxs)(`span`,{className:Z.automationHeader,children:[`MCP Connection`,(0,x.jsx)(je,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,x.jsx)(`div`,{className:`${Z.mcpStatusDot} ${Z[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,x.jsxs)(`p`,{className:Z.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,x.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:Z.learnMoreLink,children:`Learn more`})]})]}),(0,x.jsx)(`div`,{className:Z.divider}),(0,x.jsxs)(`div`,{className:`${Z.settingsSection} ${Z.settingsSectionGrow}`,children:[(0,x.jsxs)(`div`,{className:Z.settingsRow,children:[(0,x.jsxs)(`span`,{className:Z.automationHeader,children:[`Webhooks`,(0,x.jsx)(je,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,x.jsxs)(`div`,{className:Z.autoSendContainer,children:[(0,x.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${Z.autoSendLabel} ${e.webhooksEnabled?Z.active:``} ${e.webhookUrl?``:Z.disabled}`,children:`Auto-Send`}),(0,x.jsx)(Di,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,x.jsx)(`p`,{className:Z.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,x.jsx)(`textarea`,{className:Z.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function zi(e,t=`filtered`){let{name:n,path:r}=an(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=$r(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var Bi=!1,Vi={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},Hi=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Ui=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...Ui.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${Ui.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Ui.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function Wi(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function Gi(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function Ki(e){return e.status!==`resolved`&&e.status!==`dismissed`}function qi(e){let t=di(e),n=t.found?t:pi(e);if(n.found&&n.source)return fi(n.source,`path`)}function Ji({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,y.useState)(!1),[_,v]=(0,y.useState)([]),[S,C]=(0,y.useState)(!0),[w,ee]=(0,y.useState)(()=>Or()),[te,T]=(0,y.useState)(!1),E=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=e=>{let t=E.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[re,le]=(0,y.useState)(!1),[O,de]=(0,y.useState)(!1),[fe,pe]=(0,y.useState)(null),[me,ge]=(0,y.useState)({x:0,y:0}),[k,_e]=(0,y.useState)(null),[ve,ye]=(0,y.useState)(!1),[A,Se]=(0,y.useState)(`idle`),[Te,De]=(0,y.useState)(!1),[Oe,ke]=(0,y.useState)(!1),[Ae,Me]=(0,y.useState)(null),[Ne,N]=(0,y.useState)(null),[P,Pe]=(0,y.useState)([]),[Fe,Ie]=(0,y.useState)(null),[Le,Re]=(0,y.useState)(null),[F,ze]=(0,y.useState)(null),[Be,Ve]=(0,y.useState)(null),[He,Ue]=(0,y.useState)([]),[We,Ge]=(0,y.useState)(0),[Ke,qe]=(0,y.useState)(!1),[I,Je]=(0,y.useState)(!1),[Ye,Xe]=(0,y.useState)(!1),[Ze,Qe]=(0,y.useState)(!1),[$e,et]=(0,y.useState)(!1),[tt,nt]=(0,y.useState)(`main`),[rt,it]=(0,y.useState)(!1),[L,at]=(0,y.useState)(!1),[ot,st]=(0,y.useState)(!1),[R,ct]=(0,y.useState)([]),[lt,ut]=(0,y.useState)(null),dt=(0,y.useRef)(!1),[ft,pt]=(0,y.useState)(!1),[mt,ht]=(0,y.useState)(!1),[gt,_t]=(0,y.useState)(1),[vt,yt]=(0,y.useState)(`new-page`),[bt,xt]=(0,y.useState)(``),[St,Ct]=(0,y.useState)(!1),[z,wt]=(0,y.useState)(null),Tt=(0,y.useRef)(!1),Et=(0,y.useRef)({rearrange:null,placements:[]}),Dt=(0,y.useRef)({rearrange:null,placements:[]}),[Ot,kt]=(0,y.useState)(0),[At,jt]=(0,y.useState)(0),[Mt,Nt]=(0,y.useState)(0),[Pt,Ft]=(0,y.useState)(0),It=(0,y.useRef)(new Set),Lt=(0,y.useRef)(new Set),Rt=(0,y.useRef)(null),zt=(0,y.useRef)(),Bt=L&&h&&!ot&&ft;(0,y.useEffect)(()=>{if(Bt){ht(!1);let e=xe(()=>{ht(!0)});return()=>cancelAnimationFrame(e)}ht(!1)},[Bt]);let Vt=(0,y.useRef)(new Map),B=(0,y.useRef)(new Map),Ht=(0,y.useRef)(),[Ut,Wt]=(0,y.useState)(!1),[Gt,Kt]=(0,y.useState)([]),qt=(0,y.useRef)(Gt);qt.current=Gt;let[Jt,Xt]=(0,y.useState)(null),H=(0,y.useRef)(null);(0,y.useRef)(!1),(0,y.useRef)([]),(0,y.useRef)(0),(0,y.useRef)(null),(0,y.useRef)(null),(0,y.useRef)(1);let[U,Zt]=(0,y.useState)(!1),Qt=(0,y.useRef)(null),[$t,tn]=(0,y.useState)([]),rn=(0,y.useRef)({cmd:!1,shift:!1}),ln=()=>{it(!0)},un=()=>{it(!1)},dn=()=>{U||(Qt.current=j(()=>Zt(!0),850))},fn=()=>{Qt.current&&(clearTimeout(Qt.current),Qt.current=null),Zt(!1),un()};(0,y.useEffect)(()=>()=>{Qt.current&&clearTimeout(Qt.current)},[]);let[W,mn]=(0,y.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Vi,...e,annotationColorId:Ui.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Vi.annotationColorId}}catch{return Vi}}),[yn,bn]=(0,y.useState)(!0),[xn,Sn]=(0,y.useState)(!1),Cn=()=>{E.current?.classList.add(X.disableTransitions),bn(e=>!e),xe(()=>{E.current?.classList.remove(X.disableTransitions)})},[G,wn]=(0,y.useState)(d??null),Tn=(0,y.useRef)(!1),[En,Dn]=(0,y.useState)(u?`connecting`:`disconnected`),[K,kn]=(0,y.useState)(null),[An,jn]=(0,y.useState)(!1),[Mn,Nn]=(0,y.useState)(null),Pn=(0,y.useRef)(!1),[Fn,In]=(0,y.useState)(new Set),[Rn,zn]=(0,y.useState)(new Set),[Bn,Vn]=(0,y.useState)(!1),[Hn,Un]=(0,y.useState)(!1),[Wn,Gn]=(0,y.useState)(!1),Kn=(0,y.useRef)(null),qn=(0,y.useRef)(null),Jn=(0,y.useRef)(null),Yn=(0,y.useRef)(null),Xn=(0,y.useRef)(!1),Zn=(0,y.useRef)(0),Qn=(0,y.useRef)(null),$n=(0,y.useRef)(null),er=(0,y.useRef)(null),tr=(0,y.useRef)(null),ir=(0,y.useRef)(null),q=typeof window<`u`?window.location.pathname:`/`;(0,y.useEffect)(()=>{if(Ze)et(!0);else{it(!1),nt(`main`);let e=j(()=>et(!1),0);return()=>clearTimeout(e)}},[Ze]);let ur=h&&S&&!L;(0,y.useEffect)(()=>{if(ur){de(!1),le(!0),In(new Set);let e=j(()=>{In(e=>{let t=new Set(e);return _.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}if(re){de(!0);let e=j(()=>{le(!1),de(!1)},250);return()=>clearTimeout(e)}},[ur]),(0,y.useEffect)(()=>{Je(!0),Ge(window.scrollY);let e=or(q);v(e.filter(Ki)),Bi||(Sn(!0),Bi=!0,j(()=>Sn(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&bn(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&kn(t)}}catch{}},[q]),(0,y.useEffect)(()=>{I&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(W))},[W,I]),(0,y.useEffect)(()=>{I&&localStorage.setItem(`feedback-toolbar-theme`,yn?`dark`:`light`)},[yn,I]);let mr=(0,y.useRef)(!1);(0,y.useEffect)(()=>{let e=mr.current;mr.current=An,e&&!An&&K&&I&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(K))},[An,K,I]),(0,y.useEffect)(()=>{u&&I&&!Tn.current&&(Tn.current=!0,Dn(`connecting`),(async()=>{try{let e=wr(q),t=d||e,n=!1;if(t)try{let e=await jr(u,t);wn(e.id),Dn(`connected`),Tr(q,e.id),n=!0;let r=or(q),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${q}`,n=(await Promise.allSettled(a.map(n=>Mr(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];v(r.filter(Ki)),lr(q,r.filter(Ki),e.id)}else v(e.annotations.filter(Ki)),lr(q,e.annotations.filter(Ki),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),Er(q)}if(!n){let e=await Ar(u,typeof window<`u`?window.location.href:`/`);wn(e.id),Dn(`connected`),Tr(q,e.id),f?.(e.id);let t=cr(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===q;r.push((async()=>{try{let n=s?e:await Ar(u,o),r=(await Promise.allSettled(t.map(e=>Mr(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(Ki);if(lr(i,r,n.id),s){let e=new Set(t.map(e=>e.id));v(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){Dn(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,I,f,q]),(0,y.useEffect)(()=>{if(!u||!I)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?Dn(`connected`):Dn(`disconnected`)}catch{Dn(`disconnected`)}};e();let t=be(e,1e4);return()=>clearInterval(t)},[u,I]),(0,y.useEffect)(()=>{if(!u||!I||!G)return;let e=new EventSource(`${u}/sessions/${G}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of Vt.current)if(n===e){Vt.current.delete(t),ct(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of B.current)if(n===e){B.current.delete(t),wt(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else zn(t=>new Set(t).add(e)),j(()=>{v(t=>t.filter(t=>t.id!==e)),zn(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,I,G]),(0,y.useEffect)(()=>{if(!u||!I)return;let e=$n.current===`disconnected`,t=En===`connected`;$n.current=En,e&&t&&(async()=>{try{let e=or(q);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${q}`,n=G,r=[];if(n)try{r=(await jr(u,n)).annotations}catch{n=null}n||(n=(await Ar(u,t)).id,wn(n),Tr(q,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>Mr(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(Ki);v(i),lr(q,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[En,u,I,G,q]);let vr=(0,y.useCallback)(()=>{te||(T(!0),Qe(!1),g(!1),j(()=>{kr(!0),ee(!0),T(!1)},400))},[te]);(0,y.useEffect)(()=>{if(!n||!I||!e||e.length===0||_.length>0)return;let r=[];return r.push(j(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(j(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=an(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:on(t),cssClasses:cn(t)};v(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,I,e,t]),(0,y.useEffect)(()=>{let e=()=>{Ge(window.scrollY),qe(!0),ir.current&&clearTimeout(ir.current),ir.current=j(()=>{qe(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),ir.current&&clearTimeout(ir.current)}},[]),(0,y.useEffect)(()=>{I&&_.length>0?G?lr(q,_,G):sr(q,_):I&&_.length===0&&localStorage.removeItem(ar(q))},[_,q,I,G]),(0,y.useEffect)(()=>{if(I&&!dt.current){dt.current=!0;let e=dr(q);e.length>0&&ct(e)}},[I,q]),(0,y.useEffect)(()=>{I&&dt.current&&!ft&&(R.length>0?fr(q,R):pr(q))},[R,q,I,ft]),(0,y.useEffect)(()=>{if(I&&!Tt.current){Tt.current=!0;let e=hr(q);if(e){let t={...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))};wt(t)}}},[I,q]),(0,y.useEffect)(()=>{I&&Tt.current&&!ft&&(z?gr(q,z):_r(q))},[z,q,I,ft]);let Sr=(0,y.useRef)(!1);(0,y.useEffect)(()=>{if(I&&!Sr.current){Sr.current=!0;let e=yr(q);e&&(Dt.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&xt(e.purpose))}},[I,q]),(0,y.useEffect)(()=>{if(!I||!Sr.current)return;let e=Dt.current;ft?(z?.sections?.length??0)>0||R.length>0||bt?br(q,{rearrange:z,placements:R,purpose:bt}):xr(q):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||bt?br(q,{rearrange:e.rearrange,placements:e.placements,purpose:bt}):xr(q)},[z,R,bt,ft,q,I]),(0,y.useEffect)(()=>{L&&!z&&wt({sections:[],originalOrder:[],detectedAt:Date.now()})},[L,z]),(0,y.useEffect)(()=>{if(!u||!G)return;let e=Vt.current,t=new Set(R.map(e=>e.id));for(let t of R){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:q;Mr(u,G,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Pr(u,r).catch(()=>{}))},[R,u,G,q]),(0,y.useEffect)(()=>{if(u&&G)return Ht.current&&clearTimeout(Ht.current),Ht.current=j(()=>{let e=B.current;if(!z||z.sections.length===0){for(let[,t]of e)t&&Pr(u,t).catch(()=>{});e.clear();return}let t=new Set(z.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:q;for(let t of z.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),Pr(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?Nr(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),Mr(u,G,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Pr(u,r).catch(()=>{}))},300),()=>{Ht.current&&clearTimeout(Ht.current)}},[z,u,G,q]);let Cr=(0,y.useRef)(new Map);(0,y.useLayoutEffect)(()=>{let e=z?.sections??[],t=new Set;if((L||ot)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!Cr.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),Cr.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of Cr.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,Cr.current.delete(e),j(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[z,L,ot,h]),(0,y.useEffect)(()=>()=>{for(let[,e]of Cr.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,j(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}Cr.current.clear()},[]);let Dr=(0,y.useCallback)(()=>{st(!0),at(!1),ut(null),clearTimeout(zt.current),zt.current=j(()=>{st(!1)},300)},[]),J=(0,y.useCallback)(()=>{L&&(st(!0),at(!1),ut(null),clearTimeout(zt.current),zt.current=j(()=>{st(!1)},300)),g(!1)},[L]),Fr=(0,y.useCallback)(()=>{Ye||(Ce(),Xe(!0))},[Ye]),Ir=(0,y.useCallback)(()=>{Ye&&(we(),Xe(!1))},[Ye]),Lr=(0,y.useCallback)(()=>{Ye?Ir():Fr()},[Ye,Fr,Ir]),Rr=(0,y.useCallback)(()=>{if($t.length===0)return;let e=$t[0],t=e.element,n=$t.length>1,r=$t.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=$t.slice(0,5).map(e=>e.name).join(`, `),i=$t.length>5?` +${$t.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=$t[$t.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=Gi(o);_e({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${$t.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:$t.map(e=>e.element),targetElement:o,fullPath:vn(t),accessibility:_n(t),computedStyles:hn(t),computedStylesObj:pn(t),nearbyElements:sn(t),cssClasses:cn(t),nearbyText:on(t),sourceFile:qi(t)})}else{let n=r[0],i=Gi(t);_e({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:vn(t),accessibility:_n(t),computedStyles:hn(t),computedStylesObj:pn(t),nearbyElements:sn(t),cssClasses:cn(t),nearbyText:on(t),reactComponents:e.reactComponents,sourceFile:qi(t)})}tn([]),pe(null)},[$t]);(0,y.useEffect)(()=>{h||(_e(null),ze(null),Ve(null),Ue([]),pe(null),Qe(!1),tn([]),rn.current={cmd:!1,shift:!1},Ye&&Ir())},[h,Ye,Ir]),(0,y.useEffect)(()=>()=>{we()},[]),(0,y.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,y.useEffect)(()=>{if(Jt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[Jt,h]),(0,y.useEffect)(()=>{if(!h||k||Ut||L)return;let e=e=>{if(nn(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){pe(null);return}let t=Wi(e.clientX,e.clientY);if(!t||nn(t,`[data-feedback-toolbar]`)){pe(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=zi(t,`off`),o=t.getBoundingClientRect();pe({element:n,elementName:r,elementPath:i,rect:o,reactComponents:a}),ge({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,k,Ut,L,`off`,Gt]);let zr=(0,y.useCallback)(e=>{if(ze(e),Me(null),N(null),Pe([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=Wi(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}Ue(t),Ve(null)}else if(e.boundingBox){let t=e.boundingBox,n=Wi(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;Ve(r<.5||i<.5?null:n)}else Ve(null);Ue([])}else Ve(null),Ue([])},[]);(0,y.useEffect)(()=>{if(!h||Ut||L)return;let e=e=>{if(Xn.current){Xn.current=!1;return}let t=e.composedPath()[0]||e.target;if(nn(t,`[data-feedback-toolbar]`)||nn(t,`[data-annotation-popup]`)||nn(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!k&&!F){e.preventDefault(),e.stopPropagation();let t=Wi(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=zi(t,`off`),o=$t.findIndex(e=>e.element===t);tn(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=nn(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(W.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),k){if(n&&!W.blockInteractions)return;e.preventDefault(),er.current?.shake();return}if(F){if(n&&!W.blockInteractions)return;e.preventDefault(),tr.current?.shake();return}e.preventDefault();let r=Wi(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=zi(r,`off`),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=Gi(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=pn(r),m=hn(r);_e({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:on(r),cssClasses:cn(r),isFixed:l,fullPath:vn(r),accessibility:_n(r),computedStyles:m,computedStylesObj:p,nearbyElements:sn(r),reactComponents:o??void 0,sourceFile:qi(r),targetElement:r}),pe(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,Ut,L,k,F,W.blockInteractions,`off`,$t]),(0,y.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(rn.current.cmd=!0),e.key===`Shift`&&(rn.current.shift=!0)},t=e=>{let t=rn.current.cmd&&rn.current.shift;e.key===`Meta`&&(rn.current.cmd=!1),e.key===`Shift`&&(rn.current.shift=!1);let n=rn.current.cmd&&rn.current.shift;t&&!n&&$t.length>0&&Rr()},n=()=>{rn.current={cmd:!1,shift:!1},tn([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,$t,Rr]),(0,y.useEffect)(()=>{if(!h||k||Ut||L)return;let e=e=>{let t=e.composedPath()[0]||e.target;nn(t,`[data-feedback-toolbar]`)||nn(t,`[data-annotation-marker]`)||nn(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),Kn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,k,Ut,L]),(0,y.useEffect)(()=>{if(!h||k)return;let e=e=>{if(!Kn.current)return;let t=e.clientX-Kn.current.x,n=e.clientY-Kn.current.y,r=t*t+n*n;if(!Wn&&r>=64&&(qn.current=Kn.current,Gn(!0),e.preventDefault()),(Wn||r>=64)&&qn.current){if(Jn.current){let t=Math.min(qn.current.x,e.clientX),n=Math.min(qn.current.y,e.clientY),r=Math.abs(e.clientX-qn.current.x),i=Math.abs(e.clientY-qn.current.y);Jn.current.style.transform=`translate(${t}px, ${n}px)`,Jn.current.style.width=`${r}px`,Jn.current.style.height=`${i}px`}let t=Date.now();if(t-Zn.current<50)return;Zn.current=t;let n=qn.current.x,r=qn.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(nn(e,`[data-feedback-toolbar]`)||nn(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(Yn.current){let e=Yn.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=X.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,k,Wn,8]),(0,y.useEffect)(()=>{if(!h)return;let e=e=>{let t=Wn,n=qn.current;if(Wn&&n){Xn.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||nn(e,`[data-feedback-toolbar]`)||nn(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>an(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=pn(i),o=hn(i);_e({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:vn(i),accessibility:_n(i),computedStyles:o,computedStylesObj:a,nearbyElements:sn(i),cssClasses:cn(i),nearbyText:on(i),sourceFile:qi(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&_e({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}pe(null)}else t&&(Xn.current=!0);Kn.current=null,qn.current=null,Gn(!1),Yn.current&&(Yn.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,Wn]);let Br=(0,y.useCallback)(async(e,t,n)=>{let r=W.webhookUrl||p;if(!r||!W.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,W.webhookUrl,W.webhooksEnabled]),Vr=(0,y.useCallback)(e=>{if(!k)return;let t={id:Date.now().toString(),x:k.x,y:k.y,comment:e,element:k.element,elementPath:k.elementPath,timestamp:Date.now(),selectedText:k.selectedText,boundingBox:k.boundingBox,nearbyText:k.nearbyText,cssClasses:k.cssClasses,isMultiSelect:k.isMultiSelect,isFixed:k.isFixed,fullPath:k.fullPath,accessibility:k.accessibility,computedStyles:k.computedStyles,nearbyElements:k.nearbyElements,reactComponents:k.reactComponents,sourceFile:k.sourceFile,elementBoundingBoxes:k.elementBoundingBoxes,...u&&G?{sessionId:G,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};v(e=>[...e,t]),Qn.current=t.id,j(()=>{Qn.current=null},300),j(()=>{In(e=>new Set(e).add(t.id))},250),r?.(t),Br(`annotation.add`,{annotation:t}),Vn(!0),j(()=>{_e(null),Vn(!1)},150),window.getSelection()?.removeAllRanges(),u&&G&&Mr(u,G,t).then(e=>{e.id!==t.id&&(v(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),In(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[k,r,Br,u,G]),Hr=(0,y.useCallback)(()=>{Vn(!0),j(()=>{_e(null),Vn(!1)},150)},[]),Ur=(0,y.useCallback)(e=>{let t=_.findIndex(t=>t.id===e),n=_[t];F?.id===e&&(Un(!0),j(()=>{ze(null),Ve(null),Ue([]),Un(!1)},150)),Ie(e),zn(t=>new Set(t).add(e)),n&&(i?.(n),Br(`annotation.delete`,{annotation:n})),u&&Pr(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),j(()=>{v(t=>t.filter(t=>t.id!==e)),zn(t=>{let n=new Set(t);return n.delete(e),n}),Ie(null),t<_.length-1&&(Re(t),j(()=>Re(null),200))},150)},[_,F,i,Br,u]),Wr=(0,y.useCallback)(e=>{if(!e){Me(null),N(null),Pe([]);return}if(Me(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}Pe(t),N(null)}else if(e.boundingBox){let t=e.boundingBox,n=Wi(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;N(r<.5||i<.5?null:n)}else N(null);Pe([])}else N(null),Pe([])},[]),Gr=(0,y.useCallback)(e=>{if(!F)return;let t={...F,comment:e};v(e=>e.map(e=>e.id===F.id?t:e)),a?.(t),Br(`annotation.update`,{annotation:t}),u&&Nr(u,F.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),Un(!0),j(()=>{ze(null),Ve(null),Ue([]),Un(!1)},150)},[F,a,Br,u]),Kr=(0,y.useCallback)(()=>{Un(!0),j(()=>{ze(null),Ve(null),Ue([]),Un(!1)},150)},[]),qr=(0,y.useCallback)(()=>{let e=_.length,t=R.length>0||!!z;if(e===0&&Gt.length===0&&!t)return;if(o?.(_),Br(`annotations.clear`,{annotations:_}),u){Promise.all(_.map(e=>Pr(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of Vt.current)e&&Pr(u,e).catch(()=>{});Vt.current.clear();for(let[,e]of B.current)e&&Pr(u,e).catch(()=>{});B.current.clear()}ke(!0),De(!0),Kt([]);let n=H.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(R.length>0||z)&&(Nt(e=>e+1),Ft(e=>e+1),j(()=>{ct([]),wt(null)},200)),ft&&pt(!1),bt&&xt(``),Dt.current={rearrange:null,placements:[]},xr(q),j(()=>{v([]),In(new Set),localStorage.removeItem(ar(q)),ke(!1)},e*30+200),j(()=>De(!1),1500)},[q,_,Gt,R,z,ft,bt,o,Br,u]),Jr=(0,y.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:q,t=L&&ft,n;if(t){if(R.length===0&&!z&&!bt)return;n=``}else{if(n=_i(_,e,W.outputDetail),!n&&Gt.length===0&&R.length===0&&!z)return;n||(n=`## Page Feedback: ${e}
`)}if(!t&&Gt.length>0){let e=new Set;for(let t of _)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=H.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<Gt.length;t++){if(e.has(t))continue;let n=Gt[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],C=[p];for(let e=b;e<a.length-1;e+=b)C.push(a[e]);C.push(m);for(let e of C){let t=Wi(e.x,e.y);if(!t||x.has(t)||nn(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=an(t);S.includes(n)||S.push(n)}let w=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,ee;ee=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${w})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${w})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${w})`:`Drawing at ${w}`,r.push(ee)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((R.length>0||t&&bt)&&(n+=`
`+nr(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:bt||void 0},W.outputDetail)),z){let e=rr(z,W.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),ye(!0),j(()=>ye(!1),2e3),W.autoClearAfterCopy&&j(()=>qr(),500)},[_,Gt,R,z,ft,L,vt,bt,q,W.outputDetail,`off`,W.autoClearAfterCopy,qr,l,s]),Yr=(0,y.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:q,t=_i(_,e,W.outputDetail);if(!t&&R.length===0&&!z)return;if(t||(t=`## Page Feedback: ${e}
`),R.length>0&&(t+=`
`+nr(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ft,wireframePurpose:bt||void 0},W.outputDetail)),z){let e=rr(z,W.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,_),Se(`sending`),await new Promise(e=>j(e,150));let n=await Br(`submit`,{output:t,annotations:_},!0);Se(n?`sent`:`failed`),j(()=>Se(`idle`),2500),n&&W.autoClearAfterCopy&&j(()=>qr(),500)},[c,Br,_,R,z,ft,vt,q,W.outputDetail,`off`,W.autoClearAfterCopy,qr]);(0,y.useEffect)(()=>{if(!Mn)return;let e=e=>{let t=e.clientX-Mn.x,n=e.clientY-Mn.y,r=Math.sqrt(t*t+n*n);if(!An&&r>10&&jn(!0),An||r>10){let e=Mn.toolbarX+t,r=Mn.toolbarY+n,i=20-(337-(h?En===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),kn({x:e,y:r})}},t=()=>{An&&(Pn.current=!0),jn(!1),Nn(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[Mn,An,h,En]);let Xr=(0,y.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=K?.x??n.left,i=K?.y??n.top;Nn({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[K]);if((0,y.useEffect)(()=>{if(!K)return;let e=()=>{let e=K.x,t=K.y,n=20-(337-(h?En===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==K.x||t!==K.y)&&kn({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[K,h,En]),(0,y.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(L){lt?ut(null):Dr();return}if(Ut){Wt(!1);return}if($t.length>0){tn([]);return}k||h&&(ln(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),ln(),h?J():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),ln(),Lr()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),ln(),Ut&&Wt(!1),Ze&&Qe(!1),k&&Hr(),L?Dr():at(!0)),(e.key===`h`||e.key===`H`)&&_.length>0&&(e.preventDefault(),ln(),C(e=>!e)),(e.key===`c`||e.key===`C`)&&(_.length>0||R.length>0||z)&&(e.preventDefault(),ln(),Jr()),(e.key===`x`||e.key===`X`)&&(_.length>0||R.length>0||z)&&(e.preventDefault(),ln(),qr(),R.length>0&&ct([]),z&&wt(null)),e.key===`s`||e.key===`S`)){let t=Hi(W.webhookUrl)||Hi(p||``);_.length>0&&t&&A===`idle`&&(e.preventDefault(),ln(),Yr())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,Ut,L,lt,R,z,k,_.length,W.webhookUrl,p,A,Yr,Lr,Jr,qr,$t]),!I||w)return null;let Zr=_.length>0,Qr=_.filter(e=>!Rn.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),$r=Qr.length>0,Y=_.filter(e=>Rn.has(e.id)),ei=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-100;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,b.createPortal)((0,x.jsxs)(`div`,{ref:E,style:{display:`contents`},"data-agentation-theme":yn?`dark`:`light`,"data-agentation-accent":W.annotationColorId,"data-agentation-root":``,children:[(0,x.jsx)(`div`,{className:`${X.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:K?{left:K.x,top:K.y,right:`auto`,bottom:`auto`}:void 0,children:(0,x.jsxs)(`div`,{className:`${X.toolbarContainer} ${h?X.expanded:X.collapsed} ${xn?X.entrance:``} ${te?X.hiding:``} ${!W.webhooksEnabled&&(Hi(W.webhookUrl)||Hi(p||``))?X.serverConnected:``}`,onClick:h?void 0:e=>{if(Pn.current){Pn.current=!1,e.preventDefault();return}g(!0)},onMouseDown:Xr,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,x.jsxs)(`div`,{className:`${X.toggleContent} ${h?X.hidden:X.visible}`,children:[(0,x.jsx)(ne,{size:24}),$r&&(0,x.jsx)(`span`,{className:`${X.badge} ${h?X.fadeOut:``} ${xn?X.entrance:``}`,children:Qr.length})]}),(0,x.jsxs)(`div`,{className:`${X.controlsContent} ${h?X.visible:X.hidden} ${K&&K.y<100?X.tooltipBelow:``} ${rt||Ze?X.tooltipsHidden:``} ${U?X.tooltipsInSession:``}`,onMouseEnter:dn,onMouseLeave:fn,children:[(0,x.jsxs)(`div`,{className:`${X.buttonWrapper} ${K&&K.x<120?X.buttonWrapperAlignLeft:``}`,children:[(0,x.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),ln(),Lr()},"data-active":Ye,children:(0,x.jsx)(D,{size:24,isPaused:Ye})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[Ye?`Resume animations`:`Pause animations`,(0,x.jsx)(`span`,{className:X.shortcut,children:`P`})]})]}),(0,x.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,x.jsx)(`button`,{className:`${X.controlButton} ${yn?``:X.light}`,onClick:e=>{e.stopPropagation(),ln(),Ut&&Wt(!1),Ze&&Qe(!1),k&&Hr(),L?Dr():at(!0)},"data-active":L,style:L&&ft?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,x.jsx)(he,{size:21})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[L?`Exit layout mode`:`Layout mode`,(0,x.jsx)(`span`,{className:X.shortcut,children:`L`})]})]}),(0,x.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,x.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),ln(),C(!S)},disabled:!Zr||L,children:(0,x.jsx)(oe,{size:24,isOpen:S})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[S?`Hide markers`:`Show markers`,(0,x.jsx)(`span`,{className:X.shortcut,children:`H`})]})]}),(0,x.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,x.jsx)(`button`,{className:`${X.controlButton} ${ve?X.statusShowing:``}`,onClick:e=>{e.stopPropagation(),ln(),Jr()},disabled:L&&ft?R.length===0&&!z?.sections?.length:!Zr&&Gt.length===0&&R.length===0&&!z?.sections?.length,"data-active":ve,children:(0,x.jsx)(ie,{size:24,copied:ve,tint:L&&ft&&(R.length>0||z?.sections?.length)?`#f97316`:void 0})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[L&&ft?`Copy layout`:`Copy feedback`,(0,x.jsx)(`span`,{className:X.shortcut,children:`C`})]})]}),(0,x.jsxs)(`div`,{className:`${X.buttonWrapper} ${X.sendButtonWrapper} ${h&&!W.webhooksEnabled&&(Hi(W.webhookUrl)||Hi(p||``))?X.sendButtonVisible:``}`,children:[(0,x.jsxs)(`button`,{className:`${X.controlButton} ${A===`sent`||A===`failed`?X.statusShowing:``}`,onClick:e=>{e.stopPropagation(),ln(),Yr()},disabled:!Zr||!Hi(W.webhookUrl)&&!Hi(p||``)||A===`sending`,"data-no-hover":A===`sent`||A===`failed`,tabIndex:Hi(W.webhookUrl)||Hi(p||``)?0:-1,children:[(0,x.jsx)(ae,{size:24,state:A}),Zr&&A===`idle`&&(0,x.jsx)(`span`,{className:X.buttonBadge,children:_.length})]}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[`Send Annotations`,(0,x.jsx)(`span`,{className:X.shortcut,children:`S`})]})]}),(0,x.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,x.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),ln(),qr()},disabled:!Zr&&Gt.length===0&&R.length===0&&!z?.sections?.length,"data-danger":!0,children:(0,x.jsx)(ce,{size:24})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[`Clear all`,(0,x.jsx)(`span`,{className:X.shortcut,children:`X`})]})]}),(0,x.jsxs)(`div`,{className:X.buttonWrapper,children:[(0,x.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),ln(),L&&Dr(),Qe(!Ze)},children:(0,x.jsx)(se,{size:24})}),u&&En!==`disconnected`&&(0,x.jsx)(`span`,{className:`${X.mcpIndicator} ${X[En]} ${Ze?X.hidden:``}`,title:En===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,x.jsx)(`span`,{className:X.buttonTooltip,children:`Settings`})]}),(0,x.jsx)(`div`,{className:X.divider}),(0,x.jsxs)(`div`,{className:`${X.buttonWrapper} ${K&&typeof window<`u`&&K.x>window.innerWidth-120?X.buttonWrapperAlignRight:``}`,children:[(0,x.jsx)(`button`,{className:X.controlButton,onClick:e=>{e.stopPropagation(),ln(),J()},children:(0,x.jsx)(ue,{size:24})}),(0,x.jsxs)(`span`,{className:X.buttonTooltip,children:[`Exit`,(0,x.jsx)(`span`,{className:X.shortcut,children:`Esc`})]})]})]}),(0,x.jsx)(en,{visible:L&&h,activeType:lt,onSelect:e=>{ut(lt===e?null:e)},isDarkMode:yn,sectionCount:z?.sections.length??0,onDetectSections:()=>{let e=On(),t=z?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector)),i=[...t,...r],a=[...z?.originalOrder??[],...r.map(e=>e.id)];wt({sections:i,originalOrder:a,detectedAt:Date.now()})},placementCount:R.length,onClearPlacements:()=>{Nt(e=>e+1),Ft(e=>e+1),j(()=>{wt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ft,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(Et.current={rearrange:z,placements:R},wt(Dt.current.rearrange||t),ct(Dt.current.placements),ut(null)):(Dt.current={rearrange:z,placements:R},wt(Et.current.rearrange||t),ct(Et.current.placements)),pt(e)},wireframePurpose:bt,onWireframePurposeChange:xt,Tooltip:je,onDragStart:(e,t)=>{t.preventDefault();let n=M[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${V.dragPreview}${ft?` ${V.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};ct(e=>[...e,c]),ut(null),It.current=new Set,kt(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,x.jsx)(Ri,{settings:W,onSettingsChange:e=>mn(t=>({...t,...e})),isDarkMode:yn,onToggleTheme:Cn,isDevMode:!1,connectionStatus:En,endpoint:u,isVisible:$e,toolbarNearBottom:!!K&&K.y<230,settingsPage:tt,onSettingsPageChange:nt,onHideToolbar:vr})]})}),(L||ot)&&(0,x.jsx)(`div`,{className:`${V.blankCanvas} ${mt?V.visible:``} ${St?V.gridActive:``}`,style:{"--canvas-opacity":gt},"data-feedback-toolbar":!0}),L&&ft&&mt&&(0,x.jsxs)(`div`,{className:V.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,x.jsxs)(`div`,{className:V.wireframeOpacityRow,children:[(0,x.jsx)(`span`,{className:V.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,x.jsx)(`input`,{type:`range`,className:V.wireframeOpacitySlider,min:0,max:1,step:.01,value:gt,onChange:e=>_t(Number(e.target.value))})]}),(0,x.jsxs)(`div`,{className:V.wireframeNoticeTitleRow,children:[(0,x.jsx)(`span`,{className:V.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,x.jsx)(`span`,{className:V.wireframeNoticeDivider}),(0,x.jsx)(`button`,{className:V.wireframeStartOver,onClick:()=>{Nt(e=>e+1),wt({sections:[],originalOrder:[],detectedAt:Date.now()}),Dt.current={rearrange:null,placements:[]},xt(``),xr(q)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,x.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(L||ot)&&(0,x.jsx)(Yt,{placements:R,onChange:ct,activeComponent:ot?null:lt,onActiveComponentChange:ut,isDarkMode:yn,exiting:ot,onInteractionChange:Ct,passthrough:!lt,extraSnapRects:z?.sections.map(e=>e.currentRect),deselectSignal:Ot,clearSignal:Mt,wireframe:ft,onSelectionChange:(e,t)=>{It.current=e,t||(Lt.current=new Set,jt(e=>e+1))},onDragMove:(e,t)=>{let n=Lt.current;if(n.size&&z){if(!Rt.current){Rt.current=new Map;for(let e of z.sections)n.has(e.id)&&Rt.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of z.sections){if(!n.has(r.id)||!Rt.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=Lt.current,i=Rt.current;if(Rt.current=null,r.size&&z&&i){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&wt(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(L||ot)&&z&&(0,x.jsx)(Ln,{rearrangeState:z,onChange:wt,isDarkMode:yn,exiting:ot,blankCanvas:ft,extraSnapRects:R.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:Pt,deselectSignal:At,onSelectionChange:(e,t)=>{Lt.current=e,t||(It.current=new Set,kt(e=>e+1))},onDragMove:(e,t)=>{let n=It.current;if(n.size){if(!Rt.current){Rt.current=new Map;for(let e of R)n.has(e.id)&&Rt.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=It.current,i=Rt.current;if(Rt.current=null,r.size&&i){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&ct(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,x.jsx)(`canvas`,{ref:H,className:`${X.drawCanvas} ${Ut?X.active:``}`,style:{opacity:+!!ur,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,x.jsxs)(`div`,{className:X.markersLayer,"data-feedback-toolbar":!0,children:[re&&Qr.filter(e=>!e.isFixed).map((e,t,n)=>(0,x.jsx)(xi,{annotation:e,globalIndex:Qr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:O,isClearing:Oe,isAnimated:Fn.has(e.id),isHovered:!O&&Ae===e.id,isDeleting:Fe===e.id,isEditingAny:!!F,renumberFrom:Le,markerClickBehavior:W.markerClickBehavior,tooltipStyle:ei(e),onHoverEnter:e=>!O&&e.id!==Qn.current&&Wr(e),onHoverLeave:()=>Wr(null),onClick:e=>W.markerClickBehavior===`delete`?Ur(e.id):zr(e),onContextMenu:zr},e.id)),re&&!O&&Y.filter(e=>!e.isFixed).map(e=>(0,x.jsx)(Ci,{annotation:e},e.id))]}),(0,x.jsxs)(`div`,{className:X.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[re&&Qr.filter(e=>e.isFixed).map((e,t,n)=>(0,x.jsx)(xi,{annotation:e,globalIndex:Qr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:O,isClearing:Oe,isAnimated:Fn.has(e.id),isHovered:!O&&Ae===e.id,isDeleting:Fe===e.id,isEditingAny:!!F,renumberFrom:Le,markerClickBehavior:W.markerClickBehavior,tooltipStyle:ei(e),onHoverEnter:e=>!O&&e.id!==Qn.current&&Wr(e),onHoverLeave:()=>Wr(null),onClick:e=>W.markerClickBehavior===`delete`?Ur(e.id):zr(e),onContextMenu:zr},e.id)),re&&!O&&Y.filter(e=>e.isFixed).map(e=>(0,x.jsx)(Ci,{annotation:e,fixed:!0},e.id))]}),h&&(0,x.jsxs)(`div`,{className:X.overlay,"data-feedback-toolbar":!0,style:k||F?{zIndex:99999}:void 0,children:[fe?.rect&&!k&&!Ke&&!Wn&&(0,x.jsx)(`div`,{className:`${X.hoverHighlight} ${X.enter}`,style:{left:fe.rect.left,top:fe.rect.top,width:fe.rect.width,height:fe.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),$t.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=$t.length>1;return(0,x.jsx)(`div`,{className:r?X.multiSelectOutline:X.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),Ae&&!k&&(()=>{let e=_.find(e=>e.id===Ae);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return P.length>0?P.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,x.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,x.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:e.x,top:e.y-We,width:e.width,height:e.height}},`hover-outline-${t}`));let t=Ne&&document.contains(Ne)?Ne.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-We,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,x.jsx)(`div`,{className:`${r?X.multiSelectOutline:X.singleSelectOutline} ${X.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),fe&&!k&&!Ke&&!Wn&&(0,x.jsxs)(`div`,{className:`${X.hoverTooltip} ${X.enter}`,style:{left:Math.max(8,Math.min(me.x,window.innerWidth-100)),top:Math.max(me.y-(fe.reactComponents?48:32),8)},children:[fe.reactComponents&&(0,x.jsx)(`div`,{className:X.hoverReactPath,children:fe.reactComponents}),(0,x.jsx)(`div`,{className:X.hoverElementName,children:fe.elementName})]}),k&&(0,x.jsxs)(x.Fragment,{children:[k.multiSelectElements?.length?k.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,x.jsx)(`div`,{className:`${X.multiSelectOutline} ${Bn?X.exit:X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):k.targetElement&&document.contains(k.targetElement)?(()=>{let e=k.targetElement.getBoundingClientRect();return(0,x.jsx)(`div`,{className:`${X.singleSelectOutline} ${Bn?X.exit:X.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():k.boundingBox&&(0,x.jsx)(`div`,{className:`${k.isMultiSelect?X.multiSelectOutline:X.singleSelectOutline} ${Bn?X.exit:X.enter}`,style:{left:k.boundingBox.x,top:k.boundingBox.y-We,width:k.boundingBox.width,height:k.boundingBox.height,...k.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=k.x,t=k.isFixed?k.y:k.y-We;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Si,{x:e,y:t,isMultiSelect:k.isMultiSelect,isExiting:Bn}),(0,x.jsx)(Ee,{ref:er,element:k.element,selectedText:k.selectedText,computedStyles:k.computedStylesObj,placeholder:k.element===`Area selection`?`What should change in this area?`:k.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:Vr,onCancel:Hr,isExiting:Bn,lightMode:!yn,accentColor:k.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),F&&(0,x.jsxs)(x.Fragment,{children:[F.elementBoundingBoxes?.length?He.length>0?He.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,x.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):F.elementBoundingBoxes.map((e,t)=>(0,x.jsx)(`div`,{className:`${X.multiSelectOutline} ${X.enter}`,style:{left:e.x,top:e.y-We,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=Be&&document.contains(Be)?Be.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:F.boundingBox?{x:F.boundingBox.x,y:F.isFixed?F.boundingBox.y:F.boundingBox.y-We,width:F.boundingBox.width,height:F.boundingBox.height}:null;return t?(0,x.jsx)(`div`,{className:`${F.isMultiSelect?X.multiSelectOutline:X.singleSelectOutline} ${X.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...F.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,x.jsx)(Ee,{ref:tr,element:F.element,selectedText:F.selectedText,computedStyles:gn(F.computedStyles),placeholder:`Edit your feedback...`,initialValue:F.comment,submitLabel:`Save`,onSubmit:Gr,onCancel:Kr,onDelete:()=>Ur(F.id),isExiting:Hn,lightMode:!yn,accentColor:F.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=F.isFixed?F.y:F.y-We;return{left:Math.max(160,Math.min(window.innerWidth-160,F.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),Wn&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{ref:Jn,className:X.dragSelection}),(0,x.jsx)(`div`,{ref:Yn,className:X.highlightsContainer})]})]})]}),document.body)}function Yi(){let e=document.getElementById(`typo3-agentation-config`);if(!e)return null;try{return JSON.parse(e.textContent||`{}`)}catch(e){return console.warn(`[agentation] config parse failed`,e),null}}function Xi(e){return e instanceof Element&&e.closest(`#typo3-agentation-root, [data-feedback-toolbar]`)}function Zi(e){let t=e.target,n=typeof e.composedPath==`function`?e.composedPath():[],r=n.length>0?[...n]:[t];return document.activeElement&&!r.includes(document.activeElement)&&r.push(document.activeElement),r.some(e=>!(e instanceof Element)||Xi(e)?!1:e instanceof HTMLInputElement?![`button`,`checkbox`,`color`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`].includes(e.type):e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable?!0:!!e.closest(`input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]`))}function Qi(e){return(e.metaKey||e.ctrlKey)&&e.shiftKey&&e.key.toLowerCase()===`f`?!0:e.metaKey||e.ctrlKey||e.altKey?!1:[`p`,`l`,`h`,`c`,`x`,`s`,`escape`].includes(e.key.toLowerCase())}function $i(){document.addEventListener(`keydown`,e=>{Qi(e)&&Zi(e)&&e.stopImmediatePropagation()})}function ea(){if(typeof localStorage>`u`)return;let e=[`feedback-annotations-`,`agentation-design-`,`agentation-rearrange-`,`agentation-wireframe-`,`agentation-session-`],t=new URLSearchParams(window.location.search),n=t.get(`id`)||t.get(`uid`)||``,r=`:`+window.location.pathname+`:id=`+n,i=t=>{if(typeof t!=`string`)return t;for(let n of e)if(t.startsWith(n))return n+r+`/`+t.slice(n.length);return t},a=localStorage.getItem.bind(localStorage),o=localStorage.setItem.bind(localStorage),s=localStorage.removeItem.bind(localStorage);localStorage.getItem=e=>a(i(e)),localStorage.setItem=(e,t)=>o(i(e),t),localStorage.removeItem=e=>s(i(e))}function ta(){if(typeof BroadcastChannel>`u`)return;let e=[`feedback-annotations-`,`agentation-design-`,`agentation-rearrange-`,`agentation-wireframe-`,`agentation-session-`];new BroadcastChannel(`typo3-agentation`).addEventListener(`message`,t=>{let n=t?.data||{};if(n.type===`annotation:delete`&&n.id){for(let e of Object.keys(localStorage))if(e.startsWith(`feedback-annotations-`))try{let t=JSON.parse(localStorage.getItem(e)||`[]`);if(!Array.isArray(t))continue;let r=t.filter(e=>e?.id!==n.id);r.length!==t.length&&(r.length===0?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(r)))}catch{}}else if(n.type===`annotations:delete-all`)for(let t of Object.keys(localStorage))e.some(e=>t.startsWith(e))&&localStorage.removeItem(t)})}function na(){if(document.getElementById(`typo3-agentation-style-overrides`))return;let e=document.createElement(`style`);e.id=`typo3-agentation-style-overrides`,e.textContent=`
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
  `,document.head.appendChild(e)}(function(){let e=Yi()||{};if(window.TYPO3Agentation=e,e.enabled===!1)return;if(e.scope===`backend`&&ea(),$i(),ta(),na(),e.endpoint&&window.location.protocol===`https:`&&e.endpoint.startsWith(`http://`)&&!e.proxyUrl&&console.warn(`[agentation] Sync endpoint is HTTP but page is HTTPS — browser will block all sync requests (mixed content). Access the BE over HTTP or set Agentation.apiKey in Extension Configuration.`),e.endpoint&&e.proxyUrl){let t=window.fetch.bind(window),n=e.endpoint.replace(/\/$/,``),r=e.proxyUrl;window.fetch=function(e,i){let a=typeof e==`string`?e:e&&e.url||``;if(a.startsWith(n)){let o=a.slice(n.length)||`/`;try{let n=new URL(r,window.location.origin);n.searchParams.set(`path`,o);let a=n.toString();return t(typeof e==`string`?a:new Request(a,e),i)}catch{}}return t(e,i)}}let t=()=>{if(document.getElementById(`typo3-agentation-root`))return;let t=document.createElement(`div`);t.id=`typo3-agentation-root`,t.setAttribute(`data-agentation-scope`,e.scope||`frontend`),document.body.appendChild(t);let n={endpoint:e.endpoint||void 0,webhookUrl:e.webhookUrl||void 0,sessionId:e.sessionId||void 0,copyToClipboard:async e=>{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)},onSubmit:async t=>{let n=e.webhookUrl;if(n)try{await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`,...e.apiKey?{Authorization:`Bearer ${e.apiKey}`}:{}},body:JSON.stringify({annotation:t,context:e.context,pageId:e.pageId,beUser:e.beUser,workspaceId:e.workspaceId,metadata:e.metadata}),keepalive:!0})}catch(e){console.warn(`[agentation] webhook POST failed`,e)}},...e.additionalOptions||{}};try{let r=(0,v.createRoot)(t);r.render((0,y.createElement)(Ji,n)),e.__root=r}catch(e){console.warn(`[agentation] mount failed`,e)}};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,t,{once:!0}):t()})();