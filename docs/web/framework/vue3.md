# VUE3

## Vue.js框架
**1. __DEV__常量**

`Vue.js`使用`rollup.js`对项目进行构建，这里的__DEV__常量实际上是通过`rollup.js`的插件配置来预定义的，其功能类似于`webpack`中的`DefinePlugin`插件。

当`Vue.js`构建用于开发环境的资源时，会把__DEV__常量设置为`true`，而当`Vue.js`构建用于生产环境的资源时，就会把__DEV__常量设置为`false`，这样这段代码(dead code)就永远不会被执行。它在构建资源时就会被移除。
```js
if (__DEV__ && !res) {
  warn(`Failed to mount app: mount target selector "${container}" returned null.`)
}
```

**2. Tree-Shaking**

**Tree-Shaking** 指的就是消除那些永远不会被执行的代码，也就是排除dead code。(`rollup.js`和`webpack`都支持`Tree-Shaking`)

- 模块必须是`ESM(ES Module)`，因为Tree-Shaking依赖ESM的静态结构。
- 一个函数调用会产生副作用，就无法被Tree-Shaking移除。
  - 使用 `/*# __ PURE __ */`注释
  ```js
  export const isHTMLTag = /*# __ PURE __ */ makeMap(HTML_TAGS)
  ```


  ## 响应式系统
  