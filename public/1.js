(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notifications.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notifications.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: ['user'],
  data: function data() {
    return {
      notifications: []
    };
  },
  computed: {
    unreadNotifications: function unreadNotifications() {
      if (!this.notifications && !this.notifications.length) {
        return null;
      }

      return this.notifications.filter(function (notification) {
        return notification.read_at == null;
      });
    }
  },
  created: function created() {// this.getNotifications().then(() => {
    //     this.setNotificationInteval();
    // })
  },
  methods: {
    setNotificationInteval: function setNotificationInteval(_ref) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commit, dispatch;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, dispatch = _ref.dispatch;
                setInterval(function () {
                  this.getNotifications();
                }, 300000);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getNotifications: function getNotifications() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "/notifications";
                _context2.next = 3;
                return axios.get(url).then(function (response) {
                  _this.notifications = response.data.notifications;
                })["catch"](function (err) {
                  console.log(err.response);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    markAsRead: function markAsRead(notification) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id, url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = notification.id;
                url = "/markAsRead";
                notification.read_at = 'now';
                axios.post(url, {
                  id: id
                }).then(function () {
                  window.location.href = notification.data.link;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "notifications" }, [
    _c(
      "span",
      { staticClass: "nk-cart-toggle", staticStyle: { position: "relative" } },
      [
        _c("i", {
          staticClass: "fas fa-bell",
          staticStyle: { "font-size": "14px" }
        }),
        _vm._v(" "),
        _vm.unreadNotifications != null && _vm.unreadNotifications.length != 0
          ? _c(
              "span",
              {
                staticClass: "label label-danger",
                staticStyle: {
                  position: "absolute",
                  top: "-7px",
                  right: "-12px",
                  "font-size": "10px",
                  padding: "2px 5px",
                  background:
                    "rgb(221, 75, 57) none repeat scroll 0% 0% !important",
                  color: "rgb(255, 255, 255)",
                  "border-radius": "50%"
                },
                attrs: { id: "msgcount" }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.unreadNotifications.length > 10
                      ? "9+"
                      : _vm.unreadNotifications.length
                  )
                )
              ]
            )
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "nk-cart-dropdown",
        staticStyle: { width: "300px", height: "250px", overflow: "auto" }
      },
      [
        _c("div", { staticClass: "text-center" }, [
          _c("h5", { staticClass: "nk-username" }, [_vm._v("Notifications")]),
          _vm._v(" "),
          _c("hr", { staticStyle: { background: "white" } }),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "nk-widget-categories" },
            [
              _vm.notifications
                ? _c(
                    "h5",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.notifications.length,
                          expression: "!notifications.length"
                        }
                      ],
                      staticClass: "mt-80 text-center"
                    },
                    [_vm._v("No New Notifications!")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.notifications, function(notification) {
                return _vm.notifications && _vm.notifications.length != 0
                  ? _c(
                      "li",
                      { key: notification.id, staticClass: "text-left" },
                      [
                        _c(
                          "span",
                          {
                            staticStyle: { float: "left", "margin-top": "14px" }
                          },
                          [
                            _vm._v(
                              "\r\n                        " +
                                _vm._s(notification.data.icon) +
                                "\r\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            class:
                              notification.read_at != null ? "read" : "unread",
                            attrs: { href: notification.data.link },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.markAsRead(notification)
                              }
                            }
                          },
                          [_vm._v(_vm._s(notification.data.message))]
                        )
                      ]
                    )
                  : _vm._e()
              })
            ],
            2
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notifications.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Notifications.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=d7f806e6& */ "./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/components/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notifications.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Notifications.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notifications.vue?vue&type=template&id=d7f806e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notifications.vue?vue&type=template&id=d7f806e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d7f806e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);