(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{421:function(t,e,n){"use strict";n.r(e);var a=n(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"virtualenv-命令集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv-命令集"}},[t._v("#")]),t._v(" virtualenv 命令集")]),t._v(" "),n("p",[t._v("virtualenv 是 python 中用来隔离不同项目的利器，本篇的目的主要是收集相关命令用法，便于在下次使用时快速检索")]),t._v(" "),n("p",[n("strong",[t._v("virtualenv")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 安装\n$ pip install virtualenv\n# 激活虚拟环境\n$ source my_project/bin/activate\n# 退出虚拟环境\n$ deactivate\n# 输出当前依赖包\n$ pip freeze > requirements.txt\n# 安装依赖包\n$ pip install -r requirements.txt\n")])])]),n("p",[n("strong",[t._v("virtualenvwrapper")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 安装\n$ pip install virtualenvwrapper\n# 修改~/.zshrc\n$ cat ~/.zshrc\nif [ -f /usr/local/bin/virtualenvwrapper.sh ]; then\n    export WORKON_HOME=$HOME/virtualenvs\n    source /usr/local/bin/virtualenvwrapper.sh\nfi\n# 创建虚拟环境，创建成功后 $WORKON_HOME 下会多出一个文件夹\n$ mkvirtualenv my_prj\n# 使用虚拟环境\n$ workon my_prj\n# 退出虚拟环境\n$ deactivate\n# 删除\n$ rmvirtualenv my_prj\n# 列出所有环境\n$ lsvirtualenv\n# 进入到当前虚拟环境中\n$ cdvirtualenv\n# 进入到当前虚拟环境的 site-packages 中\n$ cdsitepackages\n")])])]),n("p",[n("strong",[t._v(".gitignore")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("*.py[cod]     # 将匹配 .pyc、.pyo 和 .pyd文件\n__pycache__/  # 排除整个文件夹\n")])])]),n("p",[t._v("参考：")]),t._v(" "),n("ul",[n("li",[t._v("http://pythonguidecn.readthedocs.io/zh/latest/dev/virtualenvs.html")])])])}),[],!1,null,null,null);e.default=r.exports}}]);