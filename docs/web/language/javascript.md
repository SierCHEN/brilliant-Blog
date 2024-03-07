# JavaScript

## 函数

### 定义函数

#### 函数声明
一个函数定义（也称为函数声明，或函数语句）由 function 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号括起来，{ /* … */ }。
```js
function square(number) {
  return number * number
}
```

#### 函数表达式
使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式。
```js
const square = function (number) {
  return number * number
}
```

#### 匿名函数
使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。
```js
function (number) {
  return number * number
}
```

### 调用函数

#### 函数提升
JavaScript 解释器会将整个函数声明提升到当前作用域的顶部。
```js
// 所有函数声明实际上都位于作用域的顶部
function square(n) {
  return n * n;
}
console.log(square(5)); // 25
```

函数提升仅适用于函数声明，而不适用于函数表达式。以下代码无法运行：
```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```