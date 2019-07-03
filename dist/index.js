"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var __vue_normalize__=_interopDefault(require("vue-runtime-helpers/dist/normalize-component.js")),Vue=_interopDefault(require("vue")),script={name:"ui-button",data:function(){return{}},methods:{handleclick:function(t){this.$emit("click",t)}}};const __vue_script__=script;var __vue_render__=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"zf-ui-button",on:{click:function(e){return t.handleclick(e)}}},[t._t("default")],2)},__vue_staticRenderFns__=[];const __vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1;var UiButton=__vue_normalize__({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},void 0,__vue_script__,void 0,!1,void 0,void 0,void 0);function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var runtime_1=createCommonjsModule(function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===_){if("throw"===o)throw i;return G()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?_:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=_,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",_="completed",v={};function d(){}function p(){}function y(){}var m={};m[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==n&&r.call(w,i)&&(m=w);var x=y.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return p.prototype=x.constructor=y,y.constructor=p,y[c]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o){var i=new b(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}),regenerator=runtime_1;function asyncGeneratorStep(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,r,o,a,c,"next",t)}function c(t){asyncGeneratorStep(i,r,o,a,c,"throw",t)}a(void 0)})}}var asyncToGenerator=_asyncToGenerator,script$1={data:function(){return{}},props:{content:{type:String,default:""},hasIcon:{type:Boolean,default:!1},hasMask:{type:Boolean,default:!1},type:{type:String,default:""},icon:{type:String,default:""},show:{type:Boolean,default:!1}}};const __vue_script__$1=script$1;var __vue_render__$1=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-toast-component"},[t.hasMask?n("div",{staticClass:"ui-toast-mask"}):t._e(),t._v(" "),n("div",{class:["ui-toast-container",t.show?"ui-toast-container-"+t.type+"-show":"ui-toast-container-"+t.type+"-hide"]},[t.hasIcon?n("div",{class:["icon",t.hasIcon&&!t.icon?"ui-icon-"+t.type:""]}):t._e(),t._v("\n        "+t._s(t.content)+"\n    ")])])},__vue_staticRenderFns__$1=[];const __vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1;var tpl=__vue_normalize__({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},void 0,__vue_script__$1,void 0,!1,void 0,void 0,void 0),showToast=!1,toastVm=null,notice=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(showToast)return!1;if(!toastVm){Vue.component("toast",tpl);var i=Vue.extend({render:function(n){return n("toast",{props:{content:e,hasIcon:o,type:t,hasMask:r,show:this.show}})},data:function(){return{show:showToast}}});toastVm=(toastVm=new i).$mount(),document.body.appendChild(toastVm.$el),toastVm.show=showToast=!0,"loading"!==t&&setTimeout(function(){toastVm.show=showToast=!1,setTimeout(function(){var t=toastVm.$el;document.body.removeChild(t),toastVm=null},300)},n)}},toast={loading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...",e=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];notice("loading",t,e,n,r,o)},hideloading:function(){var t=asyncToGenerator(regenerator.mark(function t(){var e;return regenerator.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{showToast=!1,e=toastVm.$el,setTimeout(function(){document.body.removeChild(e),setTimeout(function(){toastVm=null},200)},300)}catch(t){console.log(t)}case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),info:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;notice("info",t,e,n,r,o)}},index={install:function(t){t.component(UiButton.name,UiButton),Object.defineProperty(t.prototype,"$toast",{value:toast})}};module.exports=index;
