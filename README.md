### 命令行
* 安装依赖
  * npm i -g npm-install-peers
  * npm i
  * npm-install-peers
* 安装peerDependencies
  * npm i -g npm-install-peer && npm-install-peer
* 开启服务
  * npm run dev -- --name|-n [模块名] --port|-p [页面端口号] --reloadport|r [livereload端口号] 
* 产品打包 
  * npm run build
  
### 使用
* package.json
  ```
    "dependencies": {
        ...,
        "zf-ui": "git+http://igit.58corp.com/fangfe/zf-components.git#publish/1.0.0.0"
    }
  ``` 
* .babelrc
```
    "plugins": [
        ...
        [
            "component",
            {
                "libraryName": "zf-ui",
                "libDir": "es",
                "root": "index",
                "style": "style/index.css"
            }
        ]
    ]
``` 
* index.js
```
import Vue from 'vue'
import IndexView from './index.vue'
...
// 全部引入
import ZfUi from 'zf-ui'
Vue.use(ZfUi)
// 按需引入
import { UiButton } from 'zf-ui'
Vue.use(UiButton)
...

new Vue({
  el: '#app',
  render: (h) => h(IndexView)
})
```
