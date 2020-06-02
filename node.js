1. nodejs里面运行javascript和chrome里面运行有什么不同？
chrome浏览器运行的是同样的javascript引擎和模型
在nodejs里面写js和在chrome里面几乎没有区别
不同的是nodejs里面没有浏览器的api window，document，增加了nodejs专属api，文件系统，进程等等
所以在chorme里面写js控制的是浏览器，nodejs希望你写js控制整个计算机
2. 浏览器里面加载js：如果srcipt标签有个src属性，浏览器就会从远端下载一个js脚本下来，并且执行，如果没有src属性，就会把script里面的代码执行一遍
缺点： 脚本较多的时候需要手动管理加载顺序；
      不同脚本之间有相互调用，需要全局变量做桥梁
      没有html（node环境）
