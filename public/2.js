(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
$(function () {//var localVideo = document.getElementById('localVideo');
  //var remoteVideo = document.getElementById('remoteVideo');
  //var answerButton = document.getElementById('answerCallButton');
  //answerButton.onclick = answerCall;
  //$('input[type=file]').on('change', prepareUpload);
});
var files;
var conversationID;
var leftUID;
var rightUID;
var startTime;
var localStream;
var pc;
var offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};
var isCaller = false;
var peerConnectionDidCreate = false;
var candidateDidReceived = false;

function trace(arg) {
  var now = (window.performance.now() / 1000).toFixed(3);
  console.log(now + ': ', arg);
} //import Modals from './modals/Modals';
//import VideoComponent from './VideoComponent';


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['authuser', 'otheruser', 'conversation'],

  /*components: {
      Modals,
      VideoComponent,
  },*/
  data: function data() {
    return {
      loading: false,
      loadingMessage: "",
      messages: [],
      newMessage: "",
      typing: false,
      typingUser: null,
      videoCalling: false,
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
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.getMessages(_this2.otheruser.id);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    check: function check(id) {
      return id === this.otheruser.id;
    },
    getMessages: function getMessages(user_id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this, url, chat_body;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                _this3.loading = true;
                _this3.loadingMessage = "fetching messages...";
                url = "/messages/".concat(user_id);
                chat_body = _this3.$el.querySelector("#chatbody");
                axios.get(url).then(function (response) {
                  if (response.data.messages != null) {
                    _this3.messages = response.data.messages;
                  }

                  _this3.loading = false;
                  _this3.loadingMessage = "";
                  setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                  }, 200);
                });
                Echo["private"]('chat').listen('MessageSent', function (e) {
                  console.log(e);

                  _this3.messages.push({
                    id: e.message.id,
                    user_id: e.message.user_id,
                    user: e.message.user,
                    body: e.message.body,
                    created_at: e.message.created_at
                  });

                  setTimeout(function () {
                    chat_body.scrollTop = chat_body.scrollHeight;
                  }, 200);
                }).listenForWhisper('typing', function (e) {
                  _this3.typingUser = e.typingUser;
                  _this3.typing = e.typing; // remove is typing indicator after 0.9s

                  setTimeout(function () {
                    _this.typing = false;
                  }, 900);
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
      var _this4 = this;

      if (this.otheruser == null) {
        return;
      }

      if (this.newMessage == "") {
        return;
      }

      var user_id = this.otheruser.id;
      var message = this.newMessage;
      var url = "/send-message/".concat(user_id);
      axios.post(url, {
        user_id: user_id,
        message: message
      }).then(function (response) {
        _this4.messages.push(response.data.message);

        _this4.newMessage = "";

        var chat_body = _this4.$el.querySelector("#chatbody");

        setTimeout(function () {
          var msg_body = this.$el.querySelector("#msg_body");
          msg_body.scrollTop = msg_body.scrollHeight;
        }, 200);
      })["catch"](function (error) {
        error.response.data.error.message ? _this4.errors.message = error.response.data.error.message : null;
      });
    },
    requestVideoCall: function requestVideoCall() {
      if (this.conversation.length === 0) {
        return;
      }

      this.videoCalling = true;
      Cookies.set('uuid', this.user.id);
      Cookies.set('conversationID', this.conversation.id);
      Cookies.set('remoteUUID', this.conversation.person.id);
      window.remoteUUID = this.conversation.person.id;
      leftUID = Cookies.get('uuid');
      rightUID = Cookies.get('remoteUUID');
      isCaller = true;
      start();
    }
  }
});

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            trace('Requesting local stream');
            _context3.next = 3;
            return getUserMedia();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _start.apply(this, arguments);
}

function getUserMedia() {
  return _getUserMedia.apply(this, arguments);
}

function _getUserMedia() {
  _getUserMedia = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            navigator.mediaDevices.getUserMedia({
              audio: true,
              video: {
                width: {
                  min: 1280
                },
                height: {
                  min: 720
                }
              }
            }).then(gotStream)["catch"](function (e) {
              alert('getUserMedia() error: ' + e.name);
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserMedia.apply(this, arguments);
}

function gotStream(stream) {
  trace('Received local stream');
  localVideo.srcObject = stream;
  localStream = stream;
  call();
}

function call() {
  conversationID = Cookies.get('conversationID');
  trace('Starting call');
  startTime = window.performance.now();
  var videoTracks = localStream.getVideoTracks();
  var audioTracks = localStream.getAudioTracks();

  if (videoTracks.length > 0) {
    trace('Using video device: ' + videoTracks[0].label);
  }

  if (audioTracks.length > 0) {
    trace('Using audio device: ' + audioTracks[0].label);
  }

  var configuration = {
    "iceServers": [{
      "urls": "stun:stun.ideasip.com"
    }]
  };
  pc = new RTCPeerConnection(configuration);
  trace('Created local peer connection object pc');

  pc.onicecandidate = function (e) {
    onIceCandidate(pc, e);
  };

  pc.oniceconnectionstatechange = function (e) {
    onIceStateChange(pc, e);
  };

  pc.onaddstream = gotRemoteStream; //return alert('this far')

  pc.addStream(localStream);
  trace('Added local stream to pc');
  peerConnectionDidCreate = true;

  if (isCaller) {
    trace('createOffer start');
    trace('pc createOffer start');
    pc.createOffer(offerOptions).then();
  } else {
    onAnswer();
  }
}

function gotRemoteStream(e) {
  if (remoteVideo.srcObject !== e.stream) {
    remoteVideo.srcObject = e.stream;
    trace('pc received remote stream');
  }
}

function onCreateAnswerSuccess(desc) {
  trace('Answer from pc:\n' + desc.sdp);
  trace('pc setLocalDescription start');
  pc.setLocalDescription(desc).then(function () {
    onSetLocalSuccess(pc);
  }, onSetSessionDescriptionError);
  conversationID = Cookies.get('conversationID');
  var message = {
    from: leftUID,
    to: rightUID,
    type: 'signal',
    subtype: 'answer',
    content: desc,
    time: new Date()
  };
  axios.post('/trigger/' + conversationID, message);
}

function onSetRemoteSuccess(pc) {
  trace(pc + ' setRemoteDescription complete');
  applyRemoteCandidates();
}

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"text\"][data-v-0d66c37a]:disabled, button[data-v-0d66c37a]:disabled {\r\n    cursor: not-allowed! important;\n}\n.videoRID[data-v-0d66c37a] {\r\n    width: 100%;\n}\n.video[data-v-0d66c37a] {\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\n}\n.videoUID[data-v-0d66c37a] {\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    padding: 0 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container layout" }, [
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "chat" },
        [
          _c("Modals", {
            attrs: { user: _vm.authuser, otherUser: _vm.otheruser }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "chat-header" }, [
            _c("div", { staticClass: "chat-header-user" }, [
              _c("figure", { staticClass: "avatar" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: _vm.otheruser.photo_url,
                    alt: _vm.otheruser.name
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("h5", [_vm._v(_vm._s(_vm.otheruser.name))]),
                _vm._v(" "),
                _c("small", { staticClass: "text-success" }, [
                  _vm.typingUser != null
                    ? _c(
                        "i",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.typing,
                              expression: "typing"
                            }
                          ]
                        },
                        [_vm._v(" " + _vm._s(_vm.typingUser) + " is typing...")]
                      )
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "chat-header-action" }, [
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  {
                    staticClass: "list-inline-item",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      "data-original-title": "Voice call"
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-light text-success",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#call"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-phone",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "list-inline-item",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      "data-original-title": "Video call"
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-light text-warning",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#videoCall"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-video",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("polygon", {
                              attrs: { points: "23 7 16 12 23 17 23 7" }
                            }),
                            _c("rect", {
                              attrs: {
                                x: "1",
                                y: "5",
                                width: "15",
                                height: "14",
                                rx: "2",
                                ry: "2"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("button", {
                  on: {
                    click: function($event) {
                      return _vm.requestVideoCall()
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.videoCalling
            ? _c(
                "div",
                {
                  staticClass: "container video",
                  staticStyle: {
                    background: "rgba(21, 20, 20, 0.61)",
                    overflow: "auto"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-12 col-md-12 mb-4" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-12 text-center",
                          staticStyle: {
                            right: "0",
                            "margin-bottom": "20px",
                            "margin-top": "20px"
                          }
                        },
                        [
                          _c("div", { staticClass: "action-button" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-danger btn-floating btn-lg",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal"
                                }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-x",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  },
                                  [
                                    _c("line", {
                                      attrs: {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("line", {
                                      attrs: {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              )
            : _c(
                "div",
                {
                  staticClass: "chatbody",
                  class: { "no-message": "noChatSelected" },
                  staticStyle: {
                    overflow: "auto",
                    outline: "currentcolor none medium"
                  },
                  attrs: { id: "chatbody", tabindex: "1" }
                },
                [
                  _vm.loading
                    ? _c(
                        "div",
                        {
                          staticClass: "col-md-12",
                          staticStyle: {
                            "text-align": "center",
                            "margin-top": "70px"
                          }
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
                                "font-weight": "100"
                              }
                            },
                            [_vm._v(_vm._s(_vm.loadingMessage))]
                          )
                        ]
                      )
                    : _c(
                        "div",
                        { staticClass: "messages" },
                        [
                          _vm._l(_vm.messages, function(message) {
                            return _vm.messages.length > 0
                              ? _c(
                                  "div",
                                  {
                                    key: message.id,
                                    staticClass: "message-item",
                                    class: {
                                      "outgoing-message":
                                        message.user_id === _vm.authuser.id
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "message-avatar" },
                                      [
                                        _c(
                                          "figure",
                                          { staticClass: "avatar" },
                                          [
                                            _c("img", {
                                              staticClass: "rounded-circle",
                                              attrs: {
                                                src: message.user.photo_url,
                                                alt: message.user.name
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c("h5", [
                                            _vm._v(_vm._s(message.user.name))
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "time" },
                                            [
                                              _c("timeago", {
                                                attrs: {
                                                  datetime: message.created_at,
                                                  "auto-update": 60
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "message-content" },
                                      [
                                        _vm._v(
                                          "\r\n                            " +
                                            _vm._s(message.body) +
                                            "\r\n                        "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-10" })
                        ],
                        2
                      )
                ]
              ),
          _vm._v(" "),
          _c("div", { staticClass: "chat-footer" }, [
            _c("form", [
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light mr-3",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      type: "button",
                      "data-original-title": "Emoji"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-smile",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      },
                      [
                        _c("circle", {
                          attrs: { cx: "12", cy: "12", r: "10" }
                        }),
                        _c("path", { attrs: { d: "M8 14s1.5 2 4 2 4-2 4-2" } }),
                        _c("line", {
                          attrs: { x1: "9", y1: "9", x2: "9.01", y2: "9" }
                        }),
                        _c("line", {
                          attrs: { x1: "15", y1: "9", x2: "15.01", y2: "9" }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newMessage,
                    expression: "newMessage"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Type your message..." },
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
              _c("div", { staticClass: "form-buttons" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      type: "button",
                      "data-original-title": "Add files"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-paperclip",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light d-sm-none d-block",
                    attrs: {
                      "data-toggle": "tooltip",
                      title: "",
                      type: "button",
                      "data-original-title": "Send a voice record"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-mic",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                          }
                        }),
                        _c("path", {
                          attrs: { d: "M19 10v2a7 7 0 0 1-14 0v-2" }
                        }),
                        _c("line", {
                          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
                        }),
                        _c("line", {
                          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button", disabled: _vm.emptyMessage },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.sendMessage($event)
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-send",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }
                      },
                      [
                        _c("line", {
                          attrs: { x1: "22", y1: "2", x2: "11", y2: "13" }
                        }),
                        _c("polygon", {
                          attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
                        })
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-12 text-right",
        staticStyle: {
          right: "0",
          "margin-bottom": "20px",
          "margin-top": "20px"
        }
      },
      [
        _c("video", {
          staticClass: "img-responsive",
          attrs: { width: "100", autoplay: "", id: "localVideo" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { tabindex: "-1" } }, [
      _c("div", { staticClass: "card-body mb-0 p-0" }, [
        _c(
          "div",
          {
            staticClass:
              "embed-responsive embed-responsive-16by9 z-depth-1-half"
          },
          [
            _c("video", {
              staticClass: "img-responsive",
              attrs: { width: "100", autoplay: "", id: "remoteVideo" }
            })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Chat.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Chat.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=0d66c37a&scoped=true& */ "./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/components/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& */ "./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d66c37a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=style&index=0&id=0d66c37a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_0d66c37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=0d66c37a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Chat.vue?vue&type=template&id=0d66c37a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_0d66c37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);