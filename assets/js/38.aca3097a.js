(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{391:function(n,t,e){"use strict";e.r(t);var o=e(45),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"异常处理和析构函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常处理和析构函数"}},[n._v("#")]),n._v(" 异常处理和析构函数")]),n._v(" "),e("p",[n._v("C++ 对待异常处理有两个规则")]),n._v(" "),e("ol",[e("li",[n._v("如果在 "),e("code",[n._v("try...catch")]),n._v(" 中有异常抛出，则在 "),e("code",[n._v("catch")]),n._v("  执行前，会先将 "),e("code",[n._v("try")]),n._v(" 语句块对应的栈清空")]),n._v(" "),e("li",[n._v("C++ 不允许在同一个 "),e("code",[n._v("try...catch")]),n._v(" 中处理1个以上的异常，如果发生此种情况，程序就会崩溃")])]),n._v(" "),e("p",[n._v("为便于理解，我们先来看一个例子")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class Dog {\npublic:\n\tstring name;\n\tDog(string name) {this->name = name; cout << name << " is born.\\n"; }\n    ~Dog() { cout << name << " is destroied.\\n"; }\n    \n    void bark() { cout << name << " is barking.\\n"; }\n};\n\nint main() {\n    try {\n        Dog dog1("Henry");\n        Dog dog2("Bob");\n        throw 20;\n        dog1.bark();\n        dog2.bark();\n    } catch (int e) {\n        cout << e << " is caught" << endl;\n    }\n}\n\n/*\n * output：\n * Henry is born.\n * Bob is born.\n * Bog is destroied.\n * Henry is destroied.\n * 20 is caught\n */\n')])])]),e("p",[n._v("从上面的例子可以看出，"),e("code",[n._v("catch")]),n._v(" 语句块在两个局部对象析构完成后才执行，意味着在异常被捕获之前，"),e("code",[n._v("try")]),n._v(" 代码块中的栈需要被清理。")]),n._v(" "),e("p",[n._v("我们把上面代码稍作修改，把 "),e("code",[n._v("throw")]),n._v(" 语句放到析构函数中，看下会发生什么")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class Dog {\n    public:\n        string name;\n        Dog(string name) {this->name = name; cout << name << " is born.\\n"; }\n        ~Dog() { cout << name << " is destroied.\\n"; throw 20;}\n\n        void bark() { cout << name << " is barking.\\n"; }\n};\n\nint main() {\n    try {\n        Dog dog1("Henry");\n        Dog dog2("Bob");\n        dog1.bark();\n        dog2.bark();\n    } catch (int e) {\n        cout << e << " is caught" << endl;\n    }\n}\n\n/* Output: \n * Henry is born.\n * Bob is born.\n * Henry is barking.\n * Bob is barking.\n * Bob is destroied.\n * Henry is destroied.\n * libc++abi.dylib: terminating with uncaught exception of type int\n * [1]    51549 abort      ./exception\n */\n')])])]),e("p",[n._v("可以看到程序崩溃了，崩溃原因是 "),e("code",[n._v("terminating with uncaught exception of type int")]),n._v(" ：异常没有被处理。我们来分析下其中的原因，在 "),e("code",[n._v("try")]),n._v(" 中，我们定义了两个对象，并按照顺序调用了它们的 "),e("code",[n._v("bark")]),n._v(" 接口，随后离开 "),e("code",[n._v("try")]),n._v(" 代码块，此时，编译器会自动释放这两个局部对象，调用它们的析构函数，因为栈的特性是后进先出，所以先析构 "),e("code",[n._v("Bob")]),n._v("，在执行 "),e("code",[n._v("Bob")]),n._v(" 的析构函数时，抛出了异常，但此时并不会立即执行 "),e("code",[n._v("catch")]),n._v(" 语句块，根据上文提到的第一条规则：「在 "),e("code",[n._v("catch")]),n._v(" 执行前，需要先清理 "),e("code",[n._v("try")]),n._v(" 中的堆栈」。于是 "),e("code",[n._v("Henry")]),n._v(" 也被析构了，这让 "),e("code",[n._v("try")]),n._v(" 语句块中抛出了 2 个异常，直接导致了程序的崩溃。")]),n._v(" "),e("p",[n._v("找到上述程序崩溃的元凶后，我们便学到了一条宝贵的 C++ 经验：")]),n._v(" "),e("blockquote",[e("p",[n._v("不要在析构函数中抛出异常。")])]),n._v(" "),e("p",[n._v("因为如果你的析构函数中有异常抛出的话，你便无法控制 "),e("code",[n._v("try")]),n._v(" 语句中抛出来的异常数量——这将是一场灾难。")]),n._v(" "),e("p",[n._v("为了不在析构函数中抛出异常，一般有两种做法：")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("在析构函数内部捕获异常，防止异常被抛出，例如下面的代码")]),n._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("~Dog {\n    try {\n        // may throw exception\n    } catch (MyException e) {\n        // Catch exception\n    } catch (...) {\n        // 尽量不要使用 ... 来捕获异常\n    }\n}\n")])])]),e("p",[n._v("虽然这样做，你的析构函数再不会抛出异常了，但却带来了一些隐患，即你使用了 "),e("code",[n._v("(...)")]),n._v(" 来捕获异常，这种代码没有任何用处（它无法输出有效的异常信息），同时由于它会捕获一切异常，于是会将一些必要的程序缺陷掩盖起来，而不是“尽早的暴露问题”。所以在这里，我们学到的第二条经验是：")]),n._v(" "),e("blockquote",[e("p",[n._v("不要使用 "),e("code",[n._v("(...)")]),n._v(" 来捕获异常")])])]),n._v(" "),e("li",[e("p",[e("strong",[n._v("保持析构函数简洁，将可能导致异常的代码移到其他的函数中")]),n._v("。这也是推荐的做法。")])])]),n._v(" "),e("p",[n._v("参考")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=LQMYwvM8RF8&t=14s",target:"_blank",rel:"noopener noreferrer"}},[n._v("Advanced C++: Exceptions in Destructors"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);