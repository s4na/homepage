!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/homepage/",t(t.s=324)}({0:function(e,n,t){"use strict";t.d(n,"d",(function(){return D})),t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return h})),t.d(n,"c",(function(){return r}));var r,o,u,i,l,_={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var r,o=arguments,u={};for(r in n)"key"!==r&&"ref"!==r&&(u[r]=n[r]);if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(o[r]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return d(e,u,n&&n.key,n&&n.ref)}function d(e,n,t,o){var u={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return r.vnode&&r.vnode(u),u}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function b(e){(!e.__d&&(e.__d=!0)&&1===o.push(e)||i!==r.debounceRendering)&&((i=r.debounceRendering)||u)(g)}function g(){var e,n,t,r,u,i,l;for(o.sort((function(e,n){return n.__v.__b-e.__v.__b}));e=o.pop();)e.__d&&(t=void 0,r=void 0,i=(u=(n=e).__v).__e,(l=n.__P)&&(t=[],r=O(l,u,f({},u),n.__n,void 0!==l.ownerSVGElement,null,t,null==i?m(u):i),P(t,u),r!=i&&y(u)))}function k(e,n,t,r,o,u,i,l,a){var f,p,d,h,v,y,b,g=t&&t.__k||c,k=g.length;if(l==_&&(l=null!=u?u[0]:k?m(t,0):null),f=0,n.__k=w(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(d=g[f])||d&&t.key==d.key&&t.type===d.type)g[f]=void 0;else for(p=0;p<k;p++){if((d=g[p])&&t.key==d.key&&t.type===d.type){g[p]=void 0;break}d=null}if(h=O(e,t,d=d||_,r,o,u,i,l,a),(p=t.ref)&&d.ref!=p&&(b||(b=[]),d.ref&&b.push(d.ref,null,t),b.push(p,t.__c||h,t)),null!=h){if(null==y&&(y=h),null!=t.__d)h=t.__d,t.__d=null;else if(u==d||h!=l||null==h.parentNode){e:if(null==l||l.parentNode!==e)e.appendChild(h);else{for(v=l,p=0;(v=v.nextSibling)&&p<k;p+=2)if(v==h)break e;e.insertBefore(h,l)}"option"==n.type&&(e.value="")}l=h.nextSibling,"function"==typeof n.type&&(n.__d=h)}}return f++,t})),n.__e=y,null!=u&&"function"!=typeof n.type)for(f=u.length;f--;)null!=u[f]&&s(u[f]);for(f=k;f--;)null!=g[f]&&T(g[f],g[f]);if(b)for(f=0;f<b.length;f++)E(b[f],b[++f],b[++f])}function w(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)w(e[r],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return t}function j(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===a.test(n)?t+"px":null==t?"":t}function x(e,n,t,r,o){var u,i,l,_,c;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(u=e.style,"string"==typeof t)u.cssText=t;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(i in r)t&&i in t||j(u,i,"");if(t)for(l in t)r&&t[l]===r[l]||j(u,l,t[l])}else"o"===n[0]&&"n"===n[1]?(_=n!==(n=n.replace(/Capture$/,"")),c=n.toLowerCase(),n=(c in e?c:n).slice(2),t?(r||e.addEventListener(n,S,_),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,S,_)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function S(e){this.l[e.type](r.event?r.event(e):e)}function O(e,n,t,o,u,i,l,_,c){var a,s,p,d,m,y,b,g,j,x,S=n.type;if(void 0!==n.constructor)return null;(a=r.__b)&&a(n);try{e:if("function"==typeof S){if(g=n.props,j=(a=S.contextType)&&o[a.__c],x=a?j?j.props.value:a.__:o,t.__c?b=(s=n.__c=t.__c).__=s.__E:("prototype"in S&&S.prototype.render?n.__c=s=new S(g,x):(n.__c=s=new v(g,x),s.constructor=S,s.render=H),j&&j.sub(s),s.props=g,s.state||(s.state={}),s.context=x,s.__n=o,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=S.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=f({},s.__s)),f(s.__s,S.getDerivedStateFromProps(g,s.__s))),d=s.props,m=s.state,p)null==S.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,x),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,x)){for(s.props=g,s.state=s.__s,s.__d=!1,s.__v=n,n.__e=t.__e,n.__k=t.__k,s.__h.length&&l.push(s),a=0;a<n.__k.length;a++)n.__k[a]&&(n.__k[a].__=n);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,x),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,m,y)}))}s.context=x,s.props=g,s.state=s.__s,(a=r.__r)&&a(n),s.__d=!1,s.__v=n,s.__P=e,a=s.render(s.props,s.state,s.context),n.__k=w(null!=a&&a.type==h&&null==a.key?a.props.children:a),null!=s.getChildContext&&(o=f(f({},o),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(y=s.getSnapshotBeforeUpdate(d,m)),k(e,n,t,o,u,i,l,_,c),s.base=n.__e,s.__h.length&&l.push(s),b&&(s.__E=s.__=null),s.__e=null}else n.__e=C(t.__e,n,t,o,u,i,l,c);(a=r.diffed)&&a(n)}catch(e){r.__e(e,n,t)}return n.__e}function P(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function C(e,n,t,r,o,u,i,l){var a,f,s,p,d,h=t.props,v=n.props;if(o="svg"===n.type||o,null==e&&null!=u)for(a=0;a<u.length;a++)if(null!=(f=u[a])&&(null===n.type?3===f.nodeType:f.localName===n.type)){e=f,u[a]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),u=null}if(null===n.type)null!=u&&(u[u.indexOf(e)]=null),h!==v&&(e.data=v);else if(n!==t){if(null!=u&&(u=c.slice.call(e.childNodes)),s=(h=t.props||_).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!l){if(h===_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,r,o){var u;for(u in t)u in n||x(e,u,null,t[u],r);for(u in n)o&&"function"!=typeof n[u]||"value"===u||"checked"===u||t[u]===n[u]||x(e,u,n[u],t[u],r)})(e,v,h,o,l),n.__k=n.props.children,p||k(e,n,t,r,"foreignObject"!==n.type&&o,u,i,_,l),l||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function T(e,n,t){var o,u,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&E(o,null,n),t||"function"==typeof e.type||(t=null!=(u=e.__e)),e.__e=e.__d=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&T(o[i],n,t);null!=u&&s(u)}function H(e,n,t){return this.constructor(e,t)}function D(e,n,t){var o,u,i;r.__&&r.__(e,n),u=(o=t===l)?null:t&&t.__k||n.__k,e=p(h,null,[e]),i=[],O(n,(o?n:t||n).__k=e,u||_,_,void 0!==n.ownerSVGElement,t&&!o?[t]:u?null:c.slice.call(n.childNodes),i,t||_,o),P(i,e)}r={__e:function(e,n){for(var t;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(e));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(e)}return b(t.__E=t)}catch(n){e=n}throw e}},v.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&f(t,e),null!=e&&this.__v&&(this.__e=!1,n&&this.__h.push(n),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=_},2:function(e,n,t){"use strict";t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return h})),t.d(n,"a",(function(){return m}));var r,o,u,i=t(0),l=[],_=i.c.__r,c=i.c.diffed,a=i.c.__c,f=i.c.unmount;function s(e){i.c.__h&&i.c.__h(o);var n=o.__H||(o.__H={t:[],u:[]});return e>=n.t.length&&n.t.push({}),n.t[e]}function p(e){return function(e,n,t){var u=s(r++);return u.__c||(u.__c=o,u.i=[t?t(n):w(void 0,n),function(n){var t=e(u.i[0],n);u.i[0]!==t&&(u.i[0]=t,u.__c.setState({}))}]),u.i}(w,e)}function d(e,n){var t=s(r++);k(t.o,n)&&(t.i=e,t.o=n,o.__H.u.push(t))}function h(e){return v((function(){return{current:e}}),[])}function v(e,n){var t=s(r++);return k(t.o,n)?(t.o=n,t.v=e,t.i=e()):t.i}function m(e,n){return v((function(){return e}),n)}function y(){l.some((function(e){e.__P&&(e.__H.u.forEach(b),e.__H.u.forEach(g),e.__H.u=[])})),l=[]}function b(e){e.m&&e.m()}function g(e){var n=e.i();"function"==typeof n&&(e.m=n)}function k(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function w(e,n){return"function"==typeof n?n(e):n}i.c.__r=function(e){_&&_(e),r=0,(o=e.__c).__H&&(o.__H.u.forEach(b),o.__H.u.forEach(g),o.__H.u=[])},i.c.diffed=function(e){c&&c(e);var n=e.__c;if(n){var t=n.__H;t&&t.u.length&&(1!==l.push(n)&&u===i.c.requestAnimationFrame||((u=i.c.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(y))}},i.c.__c=function(e,n){n.some((function(e){e.__h.forEach(b),e.__h=e.__h.filter((function(e){return!e.i||g(e)}))})),a&&a(e,n)},i.c.unmount=function(e){f&&f(e);var n=e.__c;if(n){var t=n.__H;t&&t.t.forEach((function(e){return e.m&&e.m()}))}}},324:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2);function u(e,n,t,r,o,u,i){try{var l=e[u](i),_=l.value}catch(e){return void t(e)}l.done?n(_):Promise.resolve(_).then(r,o)}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.onChange=n,l(this,"language","ja"),l(this,"languageData",void 0)}var n,t,r,o,_;return n=e,(t=[{key:"load",value:(o=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/homepage/assets/i18n/resource.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.languageData=e.sent,this.setLanguage("ja");case 7:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,n=arguments;return new Promise((function(t,r){var i=o.apply(e,n);function l(e){u(i,t,r,l,_,"next",e)}function _(e){u(i,t,r,l,_,"throw",e)}l(void 0)}))},function(){return _.apply(this,arguments)})},{key:"setLanguage",value:function(e){var n=this.languageData;n&&(this.language=e,this.onChange&&this.onChange(e),Object.keys(n).forEach((function(t){var r=document.getElementById(t);r&&(r.textContent=n[t][e])})),window.omesis_language=e)}}])&&i(n.prototype,t),r&&i(n,r),e}();function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,o=!1,u=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e=c(Object(o.d)("ja"),2),n=(e[0],e[1]),t=Object(o.c)(new _(n)).current,u=Object(o.a)((function(e){return function(n){return t.setLanguage(e)}}),[]);return Object(o.b)((function(){t.load()}),[]),Object(r.b)(r.a,null,Object(r.b)("li",null,Object(r.b)("a",{class:"drawer-dropdown-menu-item drawer-menu-item",onClick:u("ja")},"日本語")),Object(r.b)("li",null,Object(r.b)("a",{class:"drawer-dropdown-menu-item drawer-menu-item",onClick:u("en")},"English")),Object(r.b)("li",null,Object(r.b)("a",{class:"drawer-dropdown-menu-item drawer-menu-item",onClick:u("zh")},"中文")))},f=document.querySelector("#preact-i18n");f&&Object(r.d)(Object(r.b)(a,null),f)}});
//# sourceMappingURL=internationalization.js.map