import{c as t,_ as n}from"../vendor.js";var e=n({render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:[t.prefixCls+"-button",t.type?t.prefixCls+"-button-"+t.type:"",t.ghost?t.prefixCls+"-button-ghost":""],on:{click:function(n){return t.handleclick(n)}}},[t._t("prefix-icon"),t._v(" "),t._t("default"),t._v(" "),t._t("after-icon")],2)},staticRenderFns:[]},void 0,{name:"ui-button",mixins:[t],data:function(){return{}},props:{type:{type:String,validator:function(t){return["primary","default","error","warning","info","success"].includes(t)}},ghost:{type:Boolean,default:!1}},methods:{handleclick:function(t){this.$emit("click",t)}}},void 0,!1,void 0,void 0,void 0);e.install=function(t){t.component(e.name,e)};export default e;
