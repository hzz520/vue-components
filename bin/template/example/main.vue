<template>
    <div class="example">
        <header class="header">
            <%= upperName%><%if(type == 'component'){%>组件<%}else if(type == 'plugin'){%>插件<% } else {%>指令<%}%>
        </header>
    </div>
</template>

<script src='./main.js'></script>
