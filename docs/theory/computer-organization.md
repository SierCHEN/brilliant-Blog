# 前言

![An image](~@alias/theory/c-o-architecture.jpg)

## 冯·诺伊曼体系结构(Von Neumann architecture)

即 **存储程序计算机**（“可编程” + “可存储”），抽象为从输入设备读取输入信息，通过运算器和控制器来执行存储在存储器里的程序，最终把结果输出到输出设备中。

包含：
- **处理器单元`(Processing Unit)`**，包含算数逻辑单元`(Arithmetic Logic Unit, ALU)`和处理器寄存器`(Progressor Register)`，用来完成各种算数和逻辑运算。
- **控制器单元`(Control Unit/CU)`**，包含指令寄存器`(Instruction Register)`和程序计数器`(Program Counter)`，用来控制程序的流程，通常就是不同条件下的分支和跳转。

:::tip
在现在的计算机里，算数逻辑单元和控制器单元共同组成了我们说的CPU。
:::

- **内存**，存储数据`(Data)`和指令`(Instruction)`。
- **外部存储**，比如现在的硬盘，过去的磁带、磁鼓等设备。

![An image](~@alias/theory/c-o-vonNeumann.jpg)