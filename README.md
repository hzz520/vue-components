### 命令行
* 安装依赖
  * npm i
* 开启本地命令行（将命令行映射到系统命令中）
  * npm link
* 创建新的组件
  * zf-ui cr -n [组件名]
* 开启服务
  * (zf-ui dev || npm start --) --name|-n [模块名] --port|-p [页面端口号] --reloadport|r [livereload端口号]
* 产品打包
  * zf-ui build || npm run build

# 规则
* 组件名驼峰 (DeMo)
* 组件对应文件夹名 (de-mo)
  
### 使用
* package.json
```
    "dependencies": {
        ...,
        "zf-ui": "git+https://github.com/hzz520/node-server.git"
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
    /** 全部引入
    import ZfUi from 'zf-ui'
    Vue.use(ZfUi)
    // 按需引入
    import { Button } from 'zf-ui'
    Vue.use(Button)
    ...

    new Vue({
    el: '#app',
        render: (h) => h(IndexView)
    })
```
