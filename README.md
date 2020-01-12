# cursorvue

MoursePoint的一个用electron来实现。主要功能是对所包含的鼠标的样式（鼠标指针）进行修改。

electron的程序，为什么写，因为c#的桌面程序，我遇到了两次我的电脑在另一个笔记本上运行不了，因为framework的框架。之后去接触node运行dll文件，但是创建进程很麻烦。所以，最终的结果是c#写程序，让electron来通过node的`const { execFile } = require('child_process');`来执行那个程序。

免掉了node-ffi,这些繁杂的操作，不需要去调用user32.dll，或者其他的自己写的dll库。
