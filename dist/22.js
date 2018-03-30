/*! NutUI v1.1.1 Fri Mar 30 2018 10:22:08 GMT+0800 (中国标准时间) */
webpackJsonpnutui([22],{1008:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("h1",[t._v("Popup")]),t._v(" "),_("p",[t._v("可自定义内容的弹窗框")]),t._v(" "),_("a",{staticClass:"button button-primary",attrs:{href:"/demo.html#/Popup",target:"_blank"}},[t._v("Demo")]),t._v(" "),_("pre",[_("code",{directives:[{name:"highlight",rawName:"v-highlight"}],domProps:{textContent:t._s(t.demo)}},[t._v("\n      ")])]),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("popupVisible.sync")]),t._v(" "),_("td",[t._v("显示状态")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("false/true")])]),t._v(" "),_("tr",[_("td",[t._v("configItems")]),t._v(" "),_("td",[t._v("配置项")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("{}")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.randomId")]),t._v(" "),_("td",[t._v("设置popup组件的顶层id")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("''")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.autoClose")]),t._v(" "),_("td",[t._v("是否自动关闭蒙层（如果是，需要将popupVisible增加.sync修饰符）")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.popupHeaderVisible")]),t._v(" "),_("td",[t._v("是否显示头部")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.hasCloseBtn")]),t._v(" "),_("td",[t._v("是否有关闭按钮")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.cancelText")]),t._v(" "),_("td",[t._v("头部取消按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("取消")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.cancelClose")]),t._v(" "),_("td",[t._v("点击头部取消是否关闭面板")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.okText")]),t._v(" "),_("td",[t._v("头部确定按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("确定")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.popupFooterVisible")]),t._v(" "),_("td",[t._v("是否显示底部")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.btnAmount")]),t._v(" "),_("td",[t._v("底部展示按钮的数量")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("2/1")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.onlyOneBtnText")]),t._v(" "),_("td",[t._v("仅一个按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("去购买")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.cancelBtnText")]),t._v(" "),_("td",[t._v("底部取消按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("取消")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.cancelAutoClose")]),t._v(" "),_("td",[t._v("点击底部取消按钮是否关闭面板")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("configItems.okBtnText")]),t._v(" "),_("td",[t._v("底部确定按钮文案")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("确定")]),t._v(" "),_("td",[t._v("--")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("cancel-click")]),t._v(" "),_("td",[t._v("点击顶部取消按钮时触发")]),t._v(" "),_("td",[t._v("返回Event对象")])]),t._v(" "),_("tr",[_("td",[t._v("ok-click")]),t._v(" "),_("td",[t._v("点击顶部确定按钮时触发")]),t._v(" "),_("td",[t._v("返回Event对象")])]),t._v(" "),_("tr",[_("td",[t._v("onlyone-btn-click")]),t._v(" "),_("td",[t._v("点击底部仅有一个按钮时触发")]),t._v(" "),_("td",[t._v("返回Event对象")])]),t._v(" "),_("tr",[_("td",[t._v("cancel-btn-click")]),t._v(" "),_("td",[t._v("点击底部取消按钮时触发")]),t._v(" "),_("td",[t._v("返回Event对象")])]),t._v(" "),_("tr",[_("td",[t._v("ok-btn-click")]),t._v(" "),_("td",[t._v("点击底部取消按钮时触发")]),t._v(" "),_("td",[t._v("返回Event对象")])])])])])}]}},1091:function(t,v,_){var e=_(919);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("657c5a32",e,!0)},767:function(t,v,_){function e(t){_(1091)}var d=_(1)(_(851),_(1008),e,null,null);t.exports=d.exports},851:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo:'<nut-popup :popupVisible.sync="variable"></nut-popup>  '}}}},919:function(t,v,_){v=t.exports=_(2)(),v.push([t.i,"",""])}});
//# sourceMappingURL=22.js.map