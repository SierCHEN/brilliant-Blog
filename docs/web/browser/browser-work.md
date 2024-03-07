# How browsers work
<small>摘自于《How browsers work》一文 [https://web.dev/articles/howbrowserswork](https://web.dev/articles/howbrowserswork)</small>
::: tip
:star:In the years of IE 90% dominance there was nothing much to do but regard the browser as a "black box", but now, with open source browsers having more than half of the usage share, it's a good time to take a peek under the engine's hood and see what's inside a web browser. Well, what's inside are millions of C++ lines…
:::

## 简介
网络浏览器是使用最广的软件。在这篇入门指南中，我将介绍它们的幕后工作原理。我们将了解当您在地址栏中输入 google.com 直到您在浏览器屏幕上看到 Google 页面之前，会发生什么。

## 我们要讨论的浏览器
目前，桌面设备使用五大主流浏览器：`Chrome`、`Internet Explorer`、`Firefox`、`Safari`和`Opera`。

移动设备主要有`Android 浏览器`、`iPhone`、`Opera Mini`和`Opera Mobile`、`UC 浏览器`、`Nokia S40/S60 浏览器`以及`Chrome`，所有这些浏览器（Opera 浏览器除外）都基于`WebKit`。

> 根据 StatCounter 统计信息（截至 2013 年 6 月），Chrome、Firefox 和 Safari 占全球桌面浏览器使用量的 71% 左右。在移动设备上，Android 浏览器、iPhone 和 Chrome 使用量约占总使用量的 54%。

## 浏览器的主要功能
浏览器的主要功能是呈现您选择的网络资源，方法是从服务器请求该资源并在浏览器窗口中显示该资源。资源通常是`HTML`文档，但也可能是 PDF、图片或其他一些类型的内容。资源的位置由用户使用`URI（统一资源标识符） `指定。

各个浏览器界面之间有许多共同点。常见的界面元素包括：
- 用于插入 URI 的地址栏
- “后退”和“前进”按钮
- 书签选项
- 用于刷新或停止加载当前文档的刷新和停止按钮
- 用于转到首页的“主页”按钮

奇怪的是，浏览器的界面并没有在任何正式的规范中明确指定，而是源于多年来积累的良好实践以及各浏览器相互模仿的结果。 HTML5 规范未定义浏览器必须具有的界面元素，但列出了一些常见元素。例如地址栏、状态栏和工具栏。当然，有些浏览器还有其特有的功能，例如 Firefox 的下载管理器。

## 浏览器的高层结构(high level structure)
浏览器的主要组件包括：
- **界面：** 包括地址栏、前进/后退按钮、书签菜单等。
- **浏览器引擎：** 在界面和渲染引擎之间传递指令。
- **渲染引擎：** 负责显示所请求的内容。例如，如果请求的内容是`HTML`，渲染引擎会解析`HTML`和`CSS`，并将解析后的内容显示在屏幕上。
- **网络：** 适用于`HTTP`请求等网络调用，在独立于平台的接口后，不同平台有不同的实现。
- **UI后端：** 用于绘制基本`widget`，如组合框和窗口。该后端提供了一个通用接口，与平台无关。它使用操作系统的用户界面方法。
- **JavaScript 解释器：** 用于解析和执行`JavaScript`代码。
- **数据存储：** 这是一个持久层。浏览器可能需要在本地保存各种数据，如`cookie`。浏览器还支持`localStorage`、`IndexedDB`、`WebSQL`和`FileSystem`等存储机制。

![browsers_high_level_structure](./images/browser-work-1-structure.png)

:::tip
Chrome等浏览器会运行多个渲染引擎实例：每个标签页对应一个实例。每个标签页都在单独的进程中运行。
:::

## 渲染引擎
渲染引擎的责任就是渲染，也就是在浏览器屏幕上显示请求的内容。

默认情况下，渲染引擎可显示`HTML`和`XML`文档及图片。它可以通过插件或扩展程序显示其他类型的数据；例如，使用PDF查看器插件显示PDF文档。

不同浏览器的不同渲染引擎：
- **Internet Explorer：** `Trident`
- **Firefox：** `Gecko`
- **Safari：** `WebKit`
- **Chrome/Opera（版本 15）：** `Blink`(它是`WebKit`的一个分支)