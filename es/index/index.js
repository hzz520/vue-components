import"../vendor.js";import o from"../button/index.js";import"../vendor2.js";import"vue";import t from"../toast/index.js";import n from"../popup/index.js";var r=[o],i=[t,n];export default{install:function(o){r.forEach(function(t){o.component(t.name,t)}),i.forEach(function(t){o.use(t)})},Button:o,Toast:t,PopUp:n};
