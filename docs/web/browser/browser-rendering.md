# 浏览器渲染

## 回流 reflow
回流是指当元素的几何属性发生变化，浏览器需要重新计算元素的[几何属性](#几何属性)，并重新布局整个页面。

<br />

### 几何属性

包括布局、尺寸等可用数学几何衡量的属性。
- 布局：`display` `float` `position` `list` `table` `flex` `columns` `grid`
- 尺寸：`margin` `padding` `border` `width` `height`

<br />

### 常见的引起回流的属性和方法
- 添加或删除可见的DOM元素
- 元素尺寸改变
- 内容变化，比如在`input`框中输入文字
- 浏览器窗口尺寸改变
- 计算offsetTop、offsetLeft等布局信息  <Badge type="tip" text="tip" vertical="top" />
  - `offsetTop` `offsetLeft` `offsetWidth` `offsetHeight`
  - `scrollTop` `scrollLeft` `scrollWidth` `scrollHeight`
  - `clientTop` `clientLeft` `clientWidth` `clientHeight`
  - `getComputedStyle()`
  - `getBoundingClientRect()`
- 设置style属性的值  <Badge type="warning" text="应该是width、height等属性" vertical="middle" />
- 激活CSS伪类，例如：hover
- 查询某些属性或调用某些方法

<br />

::: tip
**我们可能会感到疑惑，为什么只是获取这些属性值，并没有改变它，为什么会触发回流呢?** :raised_eyebrow:

由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！当我们执行获取布局信息的操作时，会强制清空队列，因为队列中，可能会有影响到这些值的操作，为了给我们最精确的值，浏览器会立即进行回流+重绘。
:::

<br />

### 回流影响范围
浏览器渲染界面是基于流式布局模型的，所以触发回流时会对周围的DOM重新排列，影响发范围分两种：

- **全局范围**

从根节点html开始对整个渲染树重新布局。

```html
<body>
  <div>
    <p><strong>Name:</strong>Author</p>
    <h5>male</h5>
    <ol><li>loving</li></ol>
  </div>
</body>
```

> 上面代码中的p节点发生重排时，它的父节点div和body也会发生重排，甚至h5和ol节点也会收到影响。

- **局部范围**

对渲染树的某一部分或某一渲染对象进行重新布局。

例如：将一个DOM元素的宽高等几何信息写死，然后在DOM元素内部触发回流，就只会重新渲染该DOM元素内部的元素，而不会影响到外界。