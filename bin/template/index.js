<%if (type == 'component') {%>
import <%= upperName %>  from './main'

<%= upperName %>.install = (Vue) => {
    Vue.component(<%= upperName %>.name, <%= upperName %>)
}
<%}else if (type == 'plugin') {%>
import MainIndex from './main'
const <%= upperName %> = {}
<%= upperName %>.install = (Vue) => {
    Object.defineProperty(Vue.prototype, '$<%= name %>', { value: <%= upperName %> })
}
<%}else {%>
import MainIndex from './main'
const <%= upperName %> = {}
<%= upperName %>.install = (Vue) => {
    Vue.directive('zf-<%= name %>', {
        bind: () => {},
        inserted: () => {},
        update: () => {},
        componentUpdated: () => {},
        unbind: () => {}
    })
}
<%}%>
export default <%= upperName %>
