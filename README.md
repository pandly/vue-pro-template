# {{ name }}

> {{ description }}

## 安装

> 通过`pandly-cli`脚手架进行安装，不能直接`clone`

`npm install pandly-cli -g`
`pandly create xxx`

## 命令

- 安装：`npm install`
- 开发：`npm run serve`
- 打包：`npm run build`
- 分析：`npm run build --report`

## 文件命名规范

### components / layouts

`components`和`layouts`下的文件夹名以及`.vue`文件统一使用大驼峰的形式命名，如`SideMenu`、`SideMenu.vue`。

### .js / .scss / 图片

所有的`.js`、`.scss`和图片文件都使用短横线连接的形式命名，比如`init-dialog.js`、`element-variables.scss`、`logo-bg.png`。

### views

`views`下的文件夹名以及`.vue`文件统一使用短横线连接的形式命名，比如`page-one`、`page-one.vue`。

## 文件结构规范

### components

`components`下的组件，建议用一个文件夹来承载，形式如下：

```
|-src
| |-components
| | |-SideMenu
| | | |-index.js
| | | |-SideMenu.vue
```

- `SideMenu/index.js`：至少有一个`index.js`文件，用来暴露组件；

```javascript
import SideMenu from './SideMenu'
export default SideMenu
```

- `SideMenu/SideMenu.vue`：至少有一个`SideMenu.vue`文件，用来编写组件。

### views

`views`下的路由页面，建议用一个文件夹来承载，形式如下：

```
|-src
| |-views
| | |-navigation1
| | | |-components
| | | | |-log.vue
| | | |-option1.vue
| | | |-option2.vue
```

- `components`：属于这个页面的组件。

### router

```
|-src
| |-router
| | |-modules
| | | |-index.js
| | | |-navigation1.router.js
| | |-index.js
```

- `modules/navigation1.js`：路由模块按功能划分，比如`navigation1.router.js`中存放关于`navigation1`模块的路由；
- `modules/index.js`：实现了`modules`中路由模块的自动合并，无需手动合并；
- `index.js`：`vue-router`的相关配置。

### api

```
|-src
| |-api
| | |-user
| | | |-index.js
| | |-base.js
| | |-config.js
| | |-index.js
| | |-install.js
```

- `user/index.js`：请求接口模块按照职责功能划分，比如`user`文件夹中存放关于用户信息的接口`const API_USER = '/user'`；
- `base.js`：`axios`的封装；
- `config.js`：`axios`的一些配置和拦截器；
- `index.js`：暴露所有的`api`接口；
- `install.js`：请求方法的全局安装。

使用：

```javascript
import { API_USER } from '@/api'

mounted () {
  this.$_get(API_USER)
}
```

## 代码编写规范

- 始终在`v-for`中使用`:key`

```html
<!-- Bad -->
<div v-for='product in products'></div>

<!-- Good -->
<div v-for='product in products' :key='product.id'></div>
```

- 在事件中使用短横线命名

```html
this.$emit('close-window')
<!-- 在父组件中 -->
<popup-window @close-window='handleEvent()' />
```

- 使用驼峰式声明`props`，并在模板中使用短横线命名来访问`props`

```html
<!-- Bad -->
<PopupWindow titleText='hello world' /> 
props: { 'title-text': String }

<!-- Good -->
<PopupWindow title-text='hello world' /> 
props: { titleText: String }
```

- 不要在同个元素上同时使用`v-if`和`v-for`指令

```html
<!-- Bad -->
<div v-for='product in products' v-if='product.price < 500'>
```

- 大于等于五个`attribute`元素应该分多行撰写

```html
<!-- Bad -->
<MyComponent foo="a" bar="b" baz="c" hah="d" cdd="f" />

<!-- Good -->
<MyComponent
  foo="a"
  bar="b"
  baz="c"
  hah="d"
  cdd="f"
/>
```

- 保持指令简写的一致性
- 模板表达式应该只有基本的`JS`表达式
- 在`template`中，没有内容的组件，使用自闭合的形式
- 按照`Vue`官方推荐的组件/实例的选项的顺序来进行编写
- ...

内置了`eslint-plugin-vue`对代码进行检查，提供了三种不同的校验机制供选择：

1. `plugin:vue/recommended`
2. `plugin:vue/strongly-recommended`
3. `plugin:vue/essential`

所有的配置文件都在`.eslintrc.js`中，可以按照自己的需求进行配置。

更多内容：[Vue 编码规范](https://app.yinxiang.com/fx/4a5c9905-675c-477f-a2e6-0fd2d5a34f78)

推荐阅读：[Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide/)

## 前后端联调规范

前后端联调使用`node proxy`代理的方式来实现。模板中集成了多个环境，只需要切换相应的`url`就能代理映射到对应的环境，无需重启，比如

- `http://localhost:8080`对应代理的是本地`Mock`环境，`Mock`数据在根目录的`mock`文件夹中撰写；
- `http://127.0.0.1:8080`对应代理的是`NEI`平台环境；
- 测试环境的接口由于需要登录的原因，需要本地配置相应的`host`，只要一级域名相同，就能代理到对应的测试环境，比如
  `http://proxy.netease.com:8080`对应代理的是测试环境（当然还需要测试环境提前登录种下`cookie`）；
- 后端开发人员的本地环境，则没法避免，需要手动填写，并重启前端服务。

代理的配置在`proxy.config.js`中，有需要的可以自行修改。

## Git 规范

### 分支规范

遵循`gitflow`的开发方式

### 代码提交规范

采取`angular`团队的代码提交规范，使用`npm run commit`来代替`git commit`，按照约束一步步填写`commit`，`commit`编写完成以后会对`commit`的格式进行校验，以及对在暂存区的`.js/.vue`文件进行`lint`校验。

### 初始化

模板内置了是否将本地项目初始化为一个`git`仓库的选项，选择初始化即可

初始化成功以后，依次执行如下命令就能将本地仓库关联到远程仓库：

- `git add .`
- `npm run commit`
- `git remote add origin https://github.com/xxx/xxx.git`
- `git push origin master`