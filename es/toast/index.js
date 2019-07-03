import t from"vue-runtime-helpers/dist/normalize-component.js";import n from"vue";function e(t,n,e,o,i,r,a){try{var s=t[r](a),u=s.value}catch(t){return void e(t)}s.done?n(u):Promise.resolve(u).then(o,i)}var o=t({render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-toast-component"},[t.hasMask?e("div",{staticClass:"ui-toast-mask"}):t._e(),t._v(" "),e("div",{class:["ui-toast-container",t.show?"ui-toast-container-"+t.type+"-show":"ui-toast-container-"+t.type+"-hide"]},[t.hasIcon?e("div",{class:["icon",t.hasIcon&&!t.icon?"ui-icon-"+t.type:""]}):t._e(),t._v("\n        "+t._s(t.content)+"\n    ")])])},staticRenderFns:[]},void 0,{data:function(){return{}},props:{content:{type:String,default:""},hasIcon:{type:Boolean,default:!1},hasMask:{type:Boolean,default:!1},type:{type:String,default:""},icon:{type:String,default:""},show:{type:Boolean,default:!1}}},void 0,!1,void 0,void 0,void 0),i=!1,r=null,a=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,s=arguments.length>3?arguments[3]:void 0,u=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(i)return!1;if(!r){n.component("toast",o);var c=n.extend({render:function(n){return n("toast",{props:{content:e,hasIcon:u,type:t,hasMask:s,show:this.show}})},data:function(){return{show:i}}});r=(r=new c).$mount(),document.body.appendChild(r.$el),r.show=i=!0,"loading"!==t&&setTimeout(function(){r.show=i=!1,setTimeout(function(){var t=r.$el;document.body.removeChild(t),r=null},300)},a)}},s={loading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...",n=arguments.length>1?arguments[1]:void 0,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3?arguments[3]:void 0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];a("loading",t,n,e,o,i)},hideloading:function(){var t,n=(t=regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{i=!1,n=r.$el,setTimeout(function(){document.body.removeChild(n),setTimeout(function(){r=null},200)},300)}catch(t){console.log(t)}case 1:case"end":return t.stop()}},t)}),function(){var n=this,o=arguments;return new Promise(function(i,r){var a=t.apply(n,o);function s(t){e(a,i,r,s,u,"next",t)}function u(t){e(a,i,r,s,u,"throw",t)}s(void 0)})});return function(){return n.apply(this,arguments)}}(),info:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;a("info",t,n,e,o,i)}};export default{install:function(t){Object.defineProperty(t.prototype,"$toast",{value:s})}};export{s as toast};
