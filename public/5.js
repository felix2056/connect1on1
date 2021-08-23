(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['authuser', 'user'],
  data: function data() {
    return {
      loading: true,
      loadingMessage: "",
      typing: false,
      typingUser: null,
      messages: [],
      newMessage: "",
      errors: {
        message: ""
      }
    };
  },
  computed: {
    emptyMessage: function emptyMessage() {
      return this.newMessage == "";
    }
  },
  created: function created() {
    this.getMessages(this.user.id);
  },
  methods: {
    getMessages: function getMessages(user_id) {
      var _this2 = this;

      var _this = this;

      this.loading = true;
      this.loadingMessage = "fetching messages...";
      var url = "/messages-without-convo/".concat(user_id);
      axios.get(url).then(function (response) {
        if (response.data.messages != null) {
          _this2.messages = response.data.messages;
        }

        _this2.loading = false;
        _this2.loadingMessage = "";
        setTimeout(function () {
          var msg_body = this.$el.querySelector("#msg_body");
          msg_body.scrollTop = msg_body.scrollHeight;
        }, 200);
      });
      Echo["private"]('chat').listen('MessageSent', function (e) {
        console.log(e);

        _this2.messages.push({
          id: e.message.id,
          user_id: e.message.user_id,
          user: e.message.user,
          body: e.message.body,
          created_at: e.message.created_at
        });

        setTimeout(function () {
          var msg_body = this.$el.querySelector("#msg_body");
          msg_body.scrollTop = msg_body.scrollHeight;
        }, 200);
      }).listenForWhisper('typing', function (e) {
        _this2.typingUser = e.typingUser;
        _this2.typing = e.typing; // remove is typing indicator after 0.9s

        setTimeout(function () {
          _this.typing = false;
        }, 900);
      });
    },
    isTyping: function isTyping() {
      var channel = Echo["private"]('chat');
      var self = this;
      setTimeout(function () {
        channel.whisper('typing', {
          typingUser: self.user.name,
          typing: true
        });
      }, 300);
    },
    notTyping: function notTyping() {
      this.typing = false;
    },
    sendMessage: function sendMessage() {
      var _this3 = this;

      if (this.user == null) {
        return;
      }

      if (this.newMessage == "") {
        return;
      }

      var user_id = this.user.id;
      var message = this.newMessage;
      var url = "/send-message-without-convo/".concat(user_id);
      axios.post(url, {
        user_id: user_id,
        message: message
      }).then(function (response) {
        _this3.messages.push(response.data.message);

        _this3.newMessage = "";

        var chat_body = _this3.$el.querySelector("#chatbody");

        setTimeout(function () {
          var msg_body = this.$el.querySelector("#msg_body");
          msg_body.scrollTop = msg_body.scrollHeight;
        }, 200);
      })["catch"](function (error) {
        error.response.data.error.message ? _this3.errors.message = error.response.data.error.message : null;
      });
    },
    close: function close() {
      this.$emit('remove', this.user);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"text\"]:disabled, button:disabled {\r\n    cursor: not-allowed! important;\n}\n.msg_box{\r\n    float: right;\r\n    position: relative;\r\n    right: 0;\r\n    margin-left: 5px;\r\n    pointer-events: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "msg_box", staticStyle: { right: "270px" } },
    [
      _c(
        "div",
        { staticClass: "msg_head", staticStyle: { background: "#ffbc05" } },
        [
          _c("a", { attrs: { href: "#" } }, [
            _c("img", {
              staticClass: "img-circle img-responsive",
              attrs: { src: _vm.user.photo_url }
            })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "u_name" }, [
            _vm._v(_vm._s(_vm.user.name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "close", on: { click: _vm.close } }, [
            _vm._v("x")
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "msg_wrap" }, [
        _c("div", { staticClass: "msg_body", attrs: { id: "msg_body" } }, [
          _vm.loading
            ? _c(
                "div",
                {
                  staticClass: "col-md-12",
                  staticStyle: { "text-align": "center", "margin-top": "70px" }
                },
                [
                  _c("span", {
                    staticClass: "spinner-border spinner-border-lg",
                    attrs: { role: "status", "aria-hidden": "true" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "text-align": "center",
                        "white-space": "nowrap",
                        "font-size": "16px",
                        "font-weight": "600"
                      }
                    },
                    [_vm._v(_vm._s(_vm.loadingMessage))]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.messages.length > 0
            ? _c(
                "div",
                { staticClass: "msg_push" },
                _vm._l(_vm.messages, function(message) {
                  return _c(
                    "div",
                    {
                      key: message.id,
                      class:
                        message.user_id === _vm.user.id
                          ? "msg-right"
                          : "msg-left"
                    },
                    [
                      _vm._v(
                        "\r\n                    " +
                          _vm._s(message.body) +
                          "\r\n                "
                      )
                    ]
                  )
                }),
                0
              )
            : _c("div", [
                _c(
                  "span",
                  {
                    staticStyle: {
                      "text-align": "center",
                      "white-space": "nowrap",
                      "font-size": "16px",
                      "font-weight": "600"
                    }
                  },
                  [_vm._v("No messages!")]
                )
              ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "msg_footer text-block" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newMessage,
                expression: "newMessage"
              }
            ],
            staticClass: "msg_input form-control",
            attrs: { type: "text", placeholder: "Type and hit enter" },
            domProps: { value: _vm.newMessage },
            on: {
              keydown: _vm.isTyping,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newMessage = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "field-error" }, [
            _vm._v(_vm._s(String(_vm.errors.message)))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "send-msg-btn btn btn-success",
              staticStyle: { border: "0" },
              attrs: { disabled: _vm.emptyMessage },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.sendMessage($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-paper-plane",
                staticStyle: { top: "5px" }
              })
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chat/PopupWithoutConvo.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/chat/PopupWithoutConvo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupWithoutConvo.vue?vue&type=template&id=5edf5f93& */ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93&");
/* harmony import */ var _PopupWithoutConvo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupWithoutConvo.vue?vue&type=script&lang=js& */ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PopupWithoutConvo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat/PopupWithoutConvo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupWithoutConvo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupWithoutConvo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PopupWithoutConvo.vue?vue&type=template&id=5edf5f93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat/PopupWithoutConvo.vue?vue&type=template&id=5edf5f93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupWithoutConvo_vue_vue_type_template_id_5edf5f93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);