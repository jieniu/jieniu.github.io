(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{425:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python-工程管理及-virtualenv-的迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-工程管理及-virtualenv-的迁移"}},[t._v("#")]),t._v(" Python 工程管理及 virtualenv 的迁移")]),t._v(" "),a("p",[t._v("virtualenv 是管理 python 工程的利器，它可以很好的帮你维护项目中的依赖，使用 virtualenv，还能保持 global 库的干净、不会被不同项目中的第三方库所污染。")]),t._v(" "),a("p",[t._v("virtualenv 的默认功能简单好用，可一旦涉及到多人协作，或部署到不同的环境中时，错误的使用 virtualenv 会给你带来一些麻烦，从而你需要花很多时间在解决这些问题上。本文的目的就是总结过去使用 virtualenv 的经验，希望能帮你找到一种正确的打开方式。")]),t._v(" "),a("p",[t._v("首先，创建一个空的 virtualenv 时，你的目录中会包含以下文件和目录")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("drwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" fengyajie  staff   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("224B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ndrwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" fengyajie  staff   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nlrwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" fengyajie  staff    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("83B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Python "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Cellar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ndrwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" fengyajie  staff   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bin")]),t._v("\ndrwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" fengyajie  staff    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" include\ndrwxr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" fengyajie  staff    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" lib\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rw"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" fengyajie  staff    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("61B")]),t._v(" Mar "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),t._v(" pip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("selfcheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])])]),a("p",[t._v("接着当你执行 "),a("code",[t._v("source bin/activate")]),t._v(" 后，你安装的依赖都会在 "),a("code",[t._v("lib")]),t._v(" 目录下，这一点很诱人，会让你觉得一切尽在掌握，因为该应用程序所需要的一切库文件全在这个 app 的根目录下，所以当这个应用需要部署时，为了避免产生 "),a("code",[t._v("ImportError: No module named xxx")]),t._v(" 错误，你会很容易的想到将本地这个 app 目录打包，然后放到远程服务器或容器中去执行。")]),t._v(" "),a("p",[t._v("当你这么做时，你会发现虽然在远程是可以执行 "),a("code",[t._v("source bin/activate")]),t._v(" 命令以进入 virtualenv ，但此时你引用的 python 可执行文件却并不是 "),a("code",[t._v("${app}/bin/pyhton")]),t._v("，而是 global 环境中的那个 "),a("code",[t._v("/usr/bin/python")]),t._v("，所以 "),a("code",[t._v("${app}/lib")]),t._v(" 下的所有依赖包路径仍然是没有被包含进 "),a("code",[t._v("sys.path")]),t._v(" 的。")]),t._v(" "),a("p",[t._v("这时，你才发现自己的假设是错误的，并开始怀疑自己使用 virtualenv 的方式存在问题，于是便 google 各种解决方案，但项目已处于部署阶段，时间紧迫，你很可能找不到最优的办法，只能退而求其次，寻求次优解，毕竟依赖包都在嘛，改下 "),a("code",[t._v("sys.path")]),t._v(" 不就好了嘛？确实很容易想到这种方法，但又不想手动改，那就写个程序改吧，也不难：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set_sys_path.py")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_sys_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'site-packages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            home "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            pypath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib/python2.7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            pypath_sitepackage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lib/python2.7/site-packages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            pth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pth.pth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" pypath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" pypath_sitepackage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    set_sys_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面的程序很简单，它将 "),a("code",[t._v("${app}/lib/python2.7")]),t._v(" 和 "),a("code",[t._v("${app}/python2.7/site-packages")]),t._v(" 两个依赖路径写到 "),a("code",[t._v("pth.pth")]),t._v(" 文件中，并将该文件 "),a("code",[t._v("mv")]),t._v(" 到 global 的 "),a("code",[t._v("site-packages")]),t._v(" 目录下，这样当你启动 global 的 python 时，会自动将 "),a("code",[t._v("pth.pth")]),t._v(" 里的路径添加到 "),a("code",[t._v("sys.path")]),t._v(" 下，这样只需要在启动你的 app 之前，执行该脚本即可，如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ python set_sys_path.py\n$ python main.py\n")])])]),a("p",[t._v("问题暂时解决了，这次你的 app 也顺利发布了；但还没结束，我们希望在测试机集群上把 app 的自动化测试做起来，在做自动化测试时，系统会随机给你分配一台机器资源，当测试完成后，资源会被回收。你心想，这仍然很简单嘛，本地测试已经覆盖得很全了，只要自动化系统利用 git 把代码拉下来，先执行 "),a("code",[t._v("set_sys_path.py")]),t._v(" 设置 "),a("code",[t._v("sys.path")]),t._v("，再执行 "),a("code",[t._v("python test.py")]),t._v("（测试入口）就可以了。")]),t._v(" "),a("p",[t._v("可这时又出现问题了，自动化测试在执行 "),a("code",[t._v("set_sys_path.py")]),t._v(" 时，报 "),a("code",[t._v("Permission denied")]),t._v(" 错误，原因是测试机为了保持环境不被污染，不允许你将 "),a("code",[t._v("pth.pth")]),t._v(" 复制到 global 的 "),a("code",[t._v("site-packages")]),t._v(" 下。")]),t._v(" "),a("p",[t._v("遇到这个问题怎么办？其实也很容易解决：我们都知道 python 中有个环境变量 "),a("code",[t._v("PYTHONPATH")]),t._v(" 可以用来设置 "),a("code",[t._v("sys.path")]),t._v("，既然没有写文件的权限，那定义环境变量总该可以吧：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PYTHONPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PYTHONPATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${app}")]),t._v("/lib/python2.7:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${app}")]),t._v("/lib/python2.7/site-packages\n$ python main.py\n")])])]),a("p",[t._v("果然可行，你再一次「顺利」的完成了需求。")]),t._v(" "),a("p",[t._v("经历过多次折腾后，我们发现这种使用 virtualenv 和修改 "),a("code",[t._v("sys.path")]),t._v(" 的方法不算很好，还容易出错。于是开始思考最初的那个问题，virtualenv 该怎么迁移？有没有更好的办法？答案肯定是有的，在此之前，我们先仔细观察 virtualenv 产生的文件，会发现其中有 28 个软连接，它们的源文件均在 global 库中，如下所示")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -type l\n./.Python\n./bin/python\n./bin/python2\n./include/python2.7\n./lib/python2.7/lib-dynload\n./lib/python2.7/encodings\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("所以，当你把整个 virtualenv 打包，放到另一个环境中运行时，肯定是会失败的，因为软连接失效了，于是，再一次证实这种把整个 virtualenv 打包的方法，实际上是错误的，virtualenv 就只是一个 local 方案，而不是让你可以「处处运行」的工具。")]),t._v(" "),a("p",[t._v("但 virtualenv 的隔离功能，可以让你只关注项目范围内的依赖包，所以我们可以利用 "),a("code",[t._v("pip freeze")]),t._v(" 命令，将项目内的依赖保存到一个叫 "),a("code",[t._v("requirements.txt")]),t._v(" 的文件中，这样在任何其他环境，我们只要根据 "),a("code",[t._v("requirements.txt")]),t._v(" 文件来安装项目所需的依赖包，即可将本地的运行环境克隆出来，而且这种克隆出来的环境更纯粹，不会受到源环境或 global 库的影响，没有不确定性。下面我们用一个例子来具体说明下：")]),t._v(" "),a("p",[t._v("假设 Bob 和 Alice 同在一个团队，他们决定使用 python 来开发新项目，一开始，Bob 在 github 上创建了一个新 repo，并在本地初始化它：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 github clone 项目")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/your_group/your_repo.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your_repo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并进入 virtualenv")]),t._v("\n$ virtualenv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" bin/activate\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 .gitignore，过滤掉 virtualenv 产出的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" .gitignore\n*.py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n__pycache__/\n.Python\nbin/\ninclude/\nlib/\npip-selfcheck.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在本地安装基本依赖，例如 Flask、gevent、gunicorn 等")]),t._v("\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Flask gevent gunicorn -i https://pypi.mirrors.ustc.edu.cn/simple/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地依赖写入 requirements.txt")]),t._v("\n$ pip freeze "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将变更提交到 github")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init project"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继续开发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),a("p",[t._v("Bob 完成了初始化，实际上他只提交了 "),a("code",[t._v(".gitignore")]),t._v(" 和 "),a("code",[t._v("requirements.txt")]),t._v(" 两个文件到 git 中，之后 Alice 也可以加入进来了：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 github clone 项目")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/your_group/your_repo.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your_repo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并进入 virtualenv")]),t._v("\n$ virtualenv "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" bin/activate\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据 requirements.txt 文件下载项目所需的依赖")]),t._v("\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Flask gevent gunicorn -i https://pypi.mirrors.ustc.edu.cn/simple/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继续开发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),a("p",[t._v("可以看到，通过这样的步骤，Bob 和 Alice 不仅有了一摸一样的开发环境，还能最小化 git 仓库的大小，且按照这样的思路，他们还可以把相同的环境克隆到测试机上，以及 Docker 镜像中。显然，这种一致性不仅可以提高开发效率，还可以提高后续的运维效率。")]),t._v(" "),a("p",[t._v("相关文章：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tools/python-virtualenv-commands.html"}},[t._v("virtualenv 命令集")])],1)]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://getpocket.com/redirect?url=https%3A%2F%2Fpythonguidecn.readthedocs.io%2Fzh%2Flatest%2Fdev%2Fvirtualenvs.html&formCheck=9831177a88141647c7d23b3d1995db4e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pipenv & 虚拟环境"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);