(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(t,s,a){"use strict";a.r(s);var v=a(45),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"决策树算法之-adaboost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#决策树算法之-adaboost"}},[t._v("#")]),t._v(" 决策树算法之 AdaBoost")]),t._v(" "),a("p",[t._v("AdaBoost 是一种更高级的「森林」类型的决策树，和随机森林比起来，它有以下三个特点")]),t._v(" "),a("ol",[a("li",[t._v("AdaBoost 的每棵树都只有一个根节点和两个叶子节点，实际上叫树桩（stump）可能会更合适")]),t._v(" "),a("li",[t._v("AdaBoost 的每个树桩的权重是不同的，而随机森林中的每棵树的权重是相同的")]),t._v(" "),a("li",[t._v("前一个树桩的错误数据会影响后一个树桩的生成，意味着后面的树桩是前面树桩的补足。这种思想也被称为 Boost，除 AdaBoost 外，GBDT 和 XGBoost 也是这样的思想（很明显它们中都有 Boost）。")])]),t._v(" "),a("h2",{attrs:{id:"adaboost-的生成步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaboost-的生成步骤"}},[t._v("#")]),t._v(" AdaBoost 的生成步骤")]),t._v(" "),a("p",[t._v("假设我们有以下训练数据，我们想通过「胸口疼痛」、「血管堵塞」和「体重」这三个特征来训练一个心脏病预测模型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("胸口疼痛")]),t._v(" "),a("th",[t._v("血管堵塞")]),t._v(" "),a("th",[t._v("体重")]),t._v(" "),a("th",[t._v("患心脏病")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("205")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("180")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("210")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("156")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("125")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("168")]),t._v(" "),a("td",[t._v("No")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("172")]),t._v(" "),a("td",[t._v("No")])])])]),t._v(" "),a("p",[t._v("首先，我们需要为每个样本附上一个相同的权重，因为只有 8 条数据，所以每个样本的权重均为 1/8，如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("胸口疼痛")]),t._v(" "),a("th",[t._v("血管堵塞")]),t._v(" "),a("th",[t._v("体重")]),t._v(" "),a("th",[t._v("患心脏病")]),t._v(" "),a("th",[t._v("样本权重")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("205")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("180")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("210")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("156")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("125")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("168")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("172")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])])])]),t._v(" "),a("p",[t._v("接下来，我们利用基尼不纯度在这 3 个特征中找一个最合适的作为树根，经过计算，当「体重 >176」 时，基尼不纯度最小，则第一个树桩的节点为「体重 >176」，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/jieniu/articles/blob/master/docs/.vuepress/public/ab_nodes.png?raw=true",alt:"ab_nodes"}})]),t._v(" "),a("p",[t._v("产生出一个树桩后，我们把该树桩判断错误的样本拿出来，将它们的权重相加，便得出该树桩的总误差，上述树桩只有一个错误样本：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("胸口疼痛")]),t._v(" "),a("th",[t._v("血管堵塞")]),t._v(" "),a("th",[t._v("体重")]),t._v(" "),a("th",[t._v("患心脏病")]),t._v(" "),a("th",[t._v("样本权重")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])])])]),t._v(" "),a("p",[t._v("则该树桩的总误差（Total Error）即这条错误样本的权重——0.125。通过总误差，我们便可以计算出该树桩的 Weight：")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("W")]),a("mi",[t._v("e")]),a("mi",[t._v("i")]),a("mi",[t._v("g")]),a("mi",[t._v("h")]),a("msub",[a("mi",[t._v("t")]),a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("p")])],1)],1),a("mo",[t._v("=")]),a("mfrac",[a("mrow",[a("mn",[t._v("1")])],1),a("mrow",[a("mn",[t._v("2")])],1)],1),a("mi",[t._v("log")]),a("mo",[t._v("(")]),a("mfrac",[a("mrow",[a("mn",[t._v("1")]),a("mo",[t._v("−")]),a("mi",[t._v("T")]),a("mi",[t._v("o")]),a("mi",[t._v("t")]),a("mi",[t._v("a")]),a("mi",[t._v("l")]),a("mi",[t._v("E")]),a("mi",[t._v("r")]),a("mi",[t._v("r")]),a("mi",[t._v("o")]),a("mi",[t._v("r")])],1),a("mrow",[a("mi",[t._v("T")]),a("mi",[t._v("o")]),a("mi",[t._v("t")]),a("mi",[t._v("a")]),a("mi",[t._v("l")]),a("mi",[t._v("E")]),a("mi",[t._v("r")]),a("mi",[t._v("r")]),a("mi",[t._v("o")]),a("mi",[t._v("r")])],1)],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Weight_{stump} = \\frac{1}{2}\\log(\\frac{1-TotalError}{TotalError})\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.37144em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.05744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("W")]),a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"mord mathit"},[t._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathit"},[t._v("h")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mord mathit"},[t._v("p")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit"},[t._v("t")]),a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",[t._v("该公式的曲线如下图所示，可以看到，"),a("strong",[t._v("误差的取值范围在 0 到 1 之间，随着误差越大，树桩的 Weight 越小")]),t._v("，上例中，我们的误差为 0.125，所对应的 Weight 为 0.973，也就是图中蓝色点所处的位置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/jieniu/articles/blob/master/docs/.vuepress/public/error_weight.jpg?raw=true",alt:"error_weight"}})]),t._v(" "),a("p",[t._v("一棵树桩产生出来后，接着就要产生第二棵，前面说了，后一棵树的生成依赖于前一棵树的误差，具体的，我们会根据这个误差来调整每个样本的权重，这样，后面的树就可以根据样本的新权重来训练了，更进一步，"),a("strong",[t._v("前一棵树中错误的样本，我们希望在下一棵树的训练中，提高这些样本的权重，同时降低正确样本的权重，这样下一棵树便会更倾向于把错误样本处理好，起到了对前面树的补足作用")]),t._v("。")]),t._v(" "),a("p",[t._v("整体误差和树的 Weight 成负相关关系，Weight 越高代表置信度越高，这时错误的样本相对于 Weight 低的树来说，样本权重要调的更高，而正确的样本的权重要调的更低，错误样本权重和正确样本权重的调整分别如下面左图和右图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/jieniu/articles/blob/master/docs/.vuepress/public/sample_weight.jpg?raw=true",alt:"sample_weight"}})]),t._v(" "),a("p",[t._v("对于本例来说，第一个树桩的 Weight 为 0.973，则错误样本的权重根据左图公式，将调整为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("1")]),a("mn",[t._v("2")]),a("mn",[t._v("5")]),a("mo",[t._v("×")]),a("mn",[t._v("2")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("6")]),a("mn",[t._v("4")]),a("mn",[t._v("6")]),a("mo",[t._v("=")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("3")]),a("mn",[t._v("3")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0.125 \\times 2.646 = 0.33")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mord mathrm"},[t._v("5")]),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("6")]),a("span",{staticClass:"mord mathrm"},[t._v("4")]),a("span",{staticClass:"mord mathrm"},[t._v("6")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mord mathrm"},[t._v("3")])])])]),t._v("，同理，正确样本的权重根据右图公式，将调整为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("1")]),a("mn",[t._v("2")]),a("mn",[t._v("5")]),a("mo",[t._v("×")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("3")]),a("mn",[t._v("7")]),a("mn",[t._v("8")]),a("mo",[t._v("=")]),a("mn",[t._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mn",[t._v("0")]),a("mn",[t._v("5")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0.125 \\times 0.378=0.05")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mord mathrm"},[t._v("5")]),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("3")]),a("span",{staticClass:"mord mathrm"},[t._v("7")]),a("span",{staticClass:"mord mathrm"},[t._v("8")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"mord mathrm"},[t._v("5")])])])]),t._v("，归一化后，最终所有样本的权重调整如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("旧样本权重")]),t._v(" "),a("th",[t._v("新样本权重")]),t._v(" "),a("th",[t._v("归一化后")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.33")]),t._v(" "),a("td",[t._v("0.49")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("1/8")]),t._v(" "),a("td",[t._v("0.05")]),t._v(" "),a("td",[t._v("0.07")])])])]),t._v(" "),a("p",[t._v("接下来，我们需要根据新的特征权重来训练树桩，其中的一种办法是根据权重来抽样，即在每抽一条数据之前，产生一个 0-1 的随机数，根据随机数来决定抽哪条数据。以上面的数据举例，当随机数落在 [0, 0.07) 范围内时，则抽出第 1 条样本，落在 [0.07, 0.14) 范围内时，则抽出第 2 条样本，以此类推。")]),t._v(" "),a("p",[t._v("抽样完成后，我们重新对这些样本赋予等值的权重，如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("胸口疼痛")]),t._v(" "),a("th",[t._v("血管堵塞")]),t._v(" "),a("th",[t._v("体重")]),t._v(" "),a("th",[t._v("患心脏病")]),t._v(" "),a("th",[t._v("样本权重")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("156")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("125")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("172")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("205")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])]),t._v(" "),a("tr",[a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("167")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1/8")])])])]),t._v(" "),a("p",[t._v("因为在选样本时，第 4 条样本的权重最高，它被抽到的概率就最大，从上表也可以看出，第 4 条样本重复了 4 次，这样做的好处是，使用这批数据训练后，新的树桩会更倾向于把第 4 条样本分类正确。")]),t._v(" "),a("p",[t._v("接下来的步骤和最开始的一样，重复上面的过程就可以了。")]),t._v(" "),a("h2",{attrs:{id:"adaboost-的预测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaboost-的预测"}},[t._v("#")]),t._v(" AdaBoost 的预测")]),t._v(" "),a("p",[t._v("在构建完 AdaBoost 后，我们该如何做预测呢？预测过程和随机森林类似，都是用每棵树的结果来投票，差别在于这里采用的是加权投票。例如我们有条数据，每棵树对该数据的预测结果如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("树序号")]),t._v(" "),a("th",[t._v("树 Weight")]),t._v(" "),a("th",[t._v("预测结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("0.97")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("0.34")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("...")]),t._v(" "),a("td",[t._v("...")]),t._v(" "),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td",[t._v("100")]),t._v(" "),a("td",[t._v("0.46")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[t._v("聚合后，把相同预测结果的 Weight 相加，如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("预测结果")]),t._v(" "),a("th",[t._v("树 Weight 之和")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("43.7")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("20.1")])])])]),t._v(" "),a("p",[t._v("取 Weight 较大者，所以该条数据的预测结果为 1.")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("本文我们一起学习了 AdaBoost 的构建过程，AdaBoost 和随机森林比起来，有 3 个特点：")]),t._v(" "),a("ol",[a("li",[t._v("每棵树只有一个根节点和两个叶子节点")]),t._v(" "),a("li",[t._v("后一棵树由前一棵树的误差决定")]),t._v(" "),a("li",[t._v("每棵树都有不同的权重，预测时会根据权重来聚合预测结果")])]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://www.youtube.com/watch?v=LsK-xG1cLYA&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=42",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdaBoost, Clearly Explained"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=_.exports}}]);